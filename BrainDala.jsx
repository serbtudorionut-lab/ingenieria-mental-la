'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * BrainDala — recreare a animației brain de pe dala.craftedbygc.com
 * Două straturi: tetraedre wireframe (instanced) + puncte luminoase (definesc silueta crisp).
 * Repulsie la mouse pe ambele straturi.
 * Cerințe: `npm i three` + copiază brain-data.txt în /public/.
 */
export default function BrainDala({ dataUrl = '/brain-data.txt', className = '' }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let disposed = false;
    let raf = 0;
    let renderer, scene, cam, grp;
    let onMove, onOut, onResize;

    fetch(dataUrl)
      .then((r) => r.text())
      .then((RAW) => {
        if (disposed) return;

        const arr = RAW.trim().split(',').map(Number);
        const N = (arr.length / 3) | 0;
        const WS = 2.25;      // world scale
        const CLONES = 3;     // tetraedre per punct
        const TJIT = 0.07;    // jitter tetraedre (mic => suprafață crisp)
        const DOTSPER = 5;    // puncte luminoase per punct de date
        const DJIT = 0.085;
        const AMBIENT = 70;   // triunghiuri plutitoare pe fundal
        const DUST = 500;
        const MR = 1.5, MP = 0.9; // repulsie mouse: rază / împingere

        // paletă (eșantionată din textura de culoare Dala)
        const PAL = [
          [40, 1.000, 0.773, 0.149], // gold      #FFC526
          [ 8, 0.929, 0.913, 0.965], // white-lav #EDE9F6
          [ 9, 0.749, 0.658, 0.941], // lavender  #BFA8F0
          [ 9, 0.545, 0.239, 1.000], // purple    #8B3DFF
          [ 6, 0.910, 0.475, 0.725], // pink      #E879B9
          [ 6, 0.169, 0.831, 0.706], // teal      #2BD4B4
          [ 5, 0.153, 0.662, 0.424], // green     #27A96C
          [ 5, 0.961, 0.596, 0.286], // orange    #F59849
          [ 4, 0.420, 0.678, 0.980], // blue      #6BADFA
        ];
        const PSUM = PAL.reduce((s, p) => s + p[0], 0);
        const pick = () => {
          let r = Math.random() * PSUM;
          for (let i = 0; i < PAL.length; i++) { r -= PAL[i][0]; if (r <= 0) return PAL[i]; }
          return PAL[0];
        };

        const cv = document.createElement('canvas');
        cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
        wrap.appendChild(cv);

        renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
        renderer.setPixelRatio(1);
        renderer.setClearColor(0x000000, 0); // transparent — fundalul vine din pagină
        scene = new THREE.Scene();
        cam = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
        cam.position.set(0, 0, 5.9);
        grp = new THREE.Group();
        scene.add(grp);

        const CH = [
          'uniform float uTime;',
          'uniform float uAssemble;',
          'uniform vec3 uMouse;',
          'varying vec3 vColor;',
          'varying float vAlpha;',
          'float hash(float n){return fract(sin(n)*43758.5453);}',
          'vec3 birthPos(float sd){return normalize(vec3(hash(sd+5.0)-0.5,hash(sd+6.0)-0.5,hash(sd+7.0)-0.5))*(4.0+3.0*hash(sd+8.0));}',
          'float easeA(float seed){return 1.0-pow(1.0-clamp(uAssemble-seed*0.15,0.0,1.0)/0.85,3.0);}',
          'vec3 drift(float sd){return vec3(sin(uTime*0.5+sd),cos(uTime*0.42+sd*1.3),sin(uTime*0.36+sd*0.7))*0.018;}',
          'vec3 repel(vec3 off){vec3 dm=off-uMouse;float dl=length(dm);float R=' + MR.toFixed(2) + ';if(dl<R){float f=1.0-dl/R;off+=normalize(dm)*f*f*' + MP.toFixed(2) + ';}return off;}',
        ].join('\n');

        // tetraedru wireframe: 6 muchii
        const s = 0.5773502692;
        const TV = [[s, s, s], [-s, -s, s], [-s, s, -s], [s, -s, -s]];
        const ED = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
        const edge = new Float32Array(72);
        let k = 0;
        ED.forEach((e) => e.forEach((vi) => { edge[k++] = TV[vi][0]; edge[k++] = TV[vi][1]; edge[k++] = TV[vi][2]; }));

        const COUNT = N * CLONES + AMBIENT;
        const iOffset = new Float32Array(COUNT * 3);
        const iColor = new Float32Array(COUNT * 3);
        const iScale = new Float32Array(COUNT);
        const iSeed = new Float32Array(COUNT);
        let idx = 0;
        const addInst = (x, y, z, c, sc, dim) => {
          iOffset[idx * 3] = x; iOffset[idx * 3 + 1] = y; iOffset[idx * 3 + 2] = z;
          iColor[idx * 3] = c[1] * dim; iColor[idx * 3 + 1] = c[2] * dim; iColor[idx * 3 + 2] = c[3] * dim;
          iScale[idx] = sc; iSeed[idx] = Math.random();
          idx++;
        };
        for (let i = 0; i < N; i++) {
          const x = (arr[i * 3] / 100) * WS, y = (arr[i * 3 + 1] / 100) * WS, z = (arr[i * 3 + 2] / 100) * WS;
          for (let cN = 0; cN < CLONES; cN++) {
            const jx = cN ? (Math.random() - 0.5) * TJIT * 2 : 0;
            const jy = cN ? (Math.random() - 0.5) * TJIT * 2 : 0;
            const jz = cN ? (Math.random() - 0.5) * TJIT * 2 : 0;
            addInst(x + jx, y + jy, z + jz, pick(), 0.018 + Math.pow(Math.random(), 2.0) * 0.042, 0.75);
          }
        }
        for (let a = 0; a < AMBIENT; a++) {
          const rr = 3.2 + Math.random() * 4.5, th = Math.random() * 6.283, ph = Math.acos(2 * Math.random() - 1);
          addInst(rr * Math.sin(ph) * Math.cos(th), rr * Math.sin(ph) * Math.sin(th) * 0.7, rr * Math.cos(ph),
            pick(), 0.09 + Math.random() * 0.14, 0.55);
        }

        const geo = new THREE.InstancedBufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(edge, 3));
        geo.setAttribute('iOffset', new THREE.InstancedBufferAttribute(iOffset, 3));
        geo.setAttribute('iColor', new THREE.InstancedBufferAttribute(iColor, 3));
        geo.setAttribute('iScale', new THREE.InstancedBufferAttribute(iScale, 1));
        geo.setAttribute('iSeed', new THREE.InstancedBufferAttribute(iSeed, 1));
        geo.instanceCount = COUNT;

        const uniforms = {
          uTime: { value: 0 },
          uAssemble: { value: 0 },
          uMouse: { value: new THREE.Vector3(999, 999, 999) },
          uGold: { value: new THREE.Vector3(1.0, 0.773, 0.149) },
        };
        const mat = new THREE.ShaderMaterial({
          transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms,
          vertexShader: [
            'attribute vec3 iOffset;', 'attribute vec3 iColor;', 'attribute float iScale;', 'attribute float iSeed;', 'uniform vec3 uGold;', CH,
            'mat3 rotAxis(vec3 a,float t){float c=cos(t),s=sin(t);float ic=1.0-c;return mat3(c+a.x*a.x*ic,a.x*a.y*ic-a.z*s,a.x*a.z*ic+a.y*s,a.y*a.x*ic+a.z*s,c+a.y*a.y*ic,a.y*a.z*ic-a.x*s,a.z*a.x*ic-a.y*s,a.z*a.y*ic+a.x*s,c+a.z*a.z*ic);}',
            'void main(){',
            ' float sd=iSeed*100.0;',
            ' vec3 axis=normalize(vec3(hash(sd)*2.0-1.0,hash(sd+1.0)*2.0-1.0,hash(sd+2.0)*2.0-1.0));',
            ' float spd=mix(0.25,1.15,hash(sd+3.0))*mix(1.0,-1.0,step(0.5,hash(sd+4.0)));',
            ' float ang=iSeed*6.2831+uTime*spd;',
            ' vec3 p=rotAxis(axis,ang)*(position*iScale);',
            ' float ea=easeA(iSeed);',
            ' vec3 off=mix(birthPos(sd),iOffset,clamp(ea,0.0,1.0));',
            ' off+=drift(sd);off=repel(off);',
            ' vec3 pos=off+p;',
            ' vec4 mv=modelViewMatrix*vec4(pos,1.0);',
            ' gl_Position=projectionMatrix*mv;',
            ' vec3 wp=(modelMatrix*vec4(pos,1.0)).xyz;',
            ' vec3 nrm=normalize((modelMatrix*vec4(normalize(iOffset+vec3(0.0001)),0.0)).xyz);',
            ' vec3 vd=normalize(cameraPosition-wp);',
            ' float rim=pow(1.0-abs(dot(nrm,vd)),1.8);',
            ' vColor=mix(iColor,uGold*1.15,rim*0.35);',
            ' float dz=abs(-mv.z-5.9);',
            ' float dof=smoothstep(0.0,2.8,dz);',
            ' float tw=0.88+0.12*sin(uTime*2.0+sd*7.0);',
            ' vAlpha=mix(1.0,0.5,dof)*tw*clamp(ea,0.0,1.0)*0.75;',
            '}',
          ].join('\n'),
          fragmentShader: 'varying vec3 vColor;varying float vAlpha;void main(){gl_FragColor=vec4(vColor,vAlpha);}',
        });
        const lines = new THREE.LineSegments(geo, mat);
        lines.frustumCulled = false;
        grp.add(lines);

        // strat de puncte luminoase — definește silueta crisp
        const PCOUNT = N * DOTSPER + DUST;
        const pPos = new Float32Array(PCOUNT * 3);
        const pCol = new Float32Array(PCOUNT * 3);
        const pSize = new Float32Array(PCOUNT);
        const pSeed = new Float32Array(PCOUNT);
        let pi = 0;
        const addPt = (x, y, z, c, f, szMin, szMax) => {
          pPos[pi * 3] = x; pPos[pi * 3 + 1] = y; pPos[pi * 3 + 2] = z;
          pCol[pi * 3] = c[1] * f; pCol[pi * 3 + 1] = c[2] * f; pCol[pi * 3 + 2] = c[3] * f;
          pSize[pi] = szMin + Math.random() * (szMax - szMin);
          pSeed[pi] = Math.random();
          pi++;
        };
        for (let q = 0; q < N; q++) {
          const bx = (arr[q * 3] / 100) * WS, by = (arr[q * 3 + 1] / 100) * WS, bz = (arr[q * 3 + 2] / 100) * WS;
          for (let dN = 0; dN < DOTSPER; dN++) {
            addPt(bx + (Math.random() - 0.5) * DJIT * 2, by + (Math.random() - 0.5) * DJIT * 2, bz + (Math.random() - 0.5) * DJIT * 2,
              pick(), 1.0, 0.04, 0.09);
          }
        }
        for (let d = 0; d < DUST; d++) {
          const rr2 = 2.6 + Math.random() * 5.0, th2 = Math.random() * 6.283, ph2 = Math.acos(2 * Math.random() - 1);
          addPt(rr2 * Math.sin(ph2) * Math.cos(th2), rr2 * Math.sin(ph2) * Math.sin(th2) * 0.75, rr2 * Math.cos(ph2),
            pick(), 0.20 + Math.random() * 0.30, 0.03, 0.08);
        }
        const pgeo = new THREE.BufferGeometry();
        pgeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        pgeo.setAttribute('pColor', new THREE.BufferAttribute(pCol, 3));
        pgeo.setAttribute('pSize', new THREE.BufferAttribute(pSize, 1));
        pgeo.setAttribute('pSeed', new THREE.BufferAttribute(pSeed, 1));
        const pmat = new THREE.ShaderMaterial({
          transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms,
          vertexShader: [
            'attribute vec3 pColor;', 'attribute float pSize;', 'attribute float pSeed;', CH,
            'void main(){',
            ' float sd=pSeed*100.0;',
            ' float ea=easeA(pSeed);',
            ' vec3 off=mix(birthPos(sd),position,clamp(ea,0.0,1.0));',
            ' off+=drift(sd);off=repel(off);',
            ' vec4 mv=modelViewMatrix*vec4(off,1.0);',
            ' gl_Position=projectionMatrix*mv;',
            ' gl_PointSize=pSize*(300.0/-mv.z);',
            ' vColor=pColor;',
            ' float dz=abs(-mv.z-5.9);',
            ' float dof=smoothstep(0.0,2.8,dz);',
            ' float tw=0.85+0.15*sin(uTime*2.3+sd*9.0);',
            ' vAlpha=mix(1.0,0.45,dof)*tw*clamp(ea,0.0,1.0)*0.8;',
            '}',
          ].join('\n'),
          fragmentShader: [
            'varying vec3 vColor;varying float vAlpha;',
            'void main(){vec2 uv=gl_PointCoord*2.0-1.0;float d=dot(uv,uv);if(d>1.0)discard;float a=smoothstep(1.0,0.25,d);gl_FragColor=vec4(vColor,vAlpha*a);}',
          ].join('\n'),
        });
        const pts = new THREE.Points(pgeo, pmat);
        pts.frustumCulled = false;
        grp.add(pts);

        // interacțiune mouse
        const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
        const sphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 2.4);
        const hit = new THREE.Vector3(), mouseTarget = new THREE.Vector3(999, 999, 999);
        let rx = 0, ry = 0, trx = 0, try_ = 0;
        onMove = (e) => {
          const r = wrap.getBoundingClientRect();
          const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
          const ny = -((e.clientY - r.top) / r.height) * 2 + 1;
          try_ = nx * 0.22; trx = -ny * 0.14;
          ndc.set(nx, ny); ray.setFromCamera(ndc, cam);
          if (ray.ray.intersectSphere(sphere, hit)) { grp.worldToLocal(hit); mouseTarget.copy(hit); }
          else mouseTarget.set(999, 999, 999);
        };
        onOut = () => mouseTarget.set(999, 999, 999);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseout', onOut);

        onResize = () => {
          const w = wrap.clientWidth, h = wrap.clientHeight;
          renderer.setSize(w, h, false);
          cam.aspect = w / h;
          cam.updateProjectionMatrix();
        };
        window.addEventListener('resize', onResize);
        onResize();

        const t0 = performance.now(), ASM = 3200;
        const mCur = new THREE.Vector3(999, 999, 999);
        const frame = (now) => {
          if (disposed) return;
          const t = (now - t0) / 1000;
          uniforms.uTime.value = t;
          uniforms.uAssemble.value = Math.min((now - t0) / ASM, 1);
          mCur.lerp(mouseTarget, 0.14);
          uniforms.uMouse.value.copy(mCur);
          ry += (try_ - ry) * 0.05; rx += (trx - rx) * 0.05;
          grp.rotation.y = t * 0.10 + ry;
          grp.rotation.x = rx;
          renderer.render(scene, cam);
          raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      })
      .catch(() => {});

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      if (onMove) window.removeEventListener('mousemove', onMove);
      if (onOut) window.removeEventListener('mouseout', onOut);
      if (onResize) window.removeEventListener('resize', onResize);
      if (grp) {
        grp.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.material) o.material.dispose();
        });
      }
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, [dataUrl]);

  return <div ref={wrapRef} className={className} style={{ position: 'relative', width: '100%', height: '100%' }} />;
}
