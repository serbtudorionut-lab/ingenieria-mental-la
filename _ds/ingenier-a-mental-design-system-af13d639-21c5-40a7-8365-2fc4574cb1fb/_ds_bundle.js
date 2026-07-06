/* @ds-bundle: {"format":3,"namespace":"IngenierAMentalDesignSystem_af13d6","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"CourseCard","sourcePath":"components/content/CourseCard.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"eef144831cc4","components/buttons/IconButton.jsx":"21b56b2964fb","components/content/CourseCard.jsx":"3b8ba1a9e1d2","components/display/Avatar.jsx":"07b2652a995e","components/display/Badge.jsx":"109bf7d6f507","components/display/Card.jsx":"9b404a8f6fe8","components/display/Tag.jsx":"6fbc14678394","components/forms/Checkbox.jsx":"14fbd1f5491b","components/forms/Input.jsx":"dbd316124178","components/forms/Select.jsx":"b857181ea493","components/forms/Switch.jsx":"fa00ca7b7822","ui_kits/marketing/CatalogPage.jsx":"12eb44543f19","ui_kits/marketing/CourseDetailPage.jsx":"d5c4a6d3ce99","ui_kits/marketing/DevicePage.jsx":"3f8e24d60cf3","ui_kits/marketing/Footer.jsx":"ccfe965a31e2","ui_kits/marketing/Header.jsx":"543705a47596","ui_kits/marketing/HomePage.jsx":"d64a5ca4607a","ui_kits/student/CoursePlayer.jsx":"7dea2df5c92c","ui_kits/student/Dashboard.jsx":"f9794412dc4e","ui_kits/student/StudentSidebar.jsx":"4951ef15b86d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IngenierAMentalDesignSystem_af13d6 = window.IngenierAMentalDesignSystem_af13d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ingeniería Mental — Button (dark premium)
 * Primary = warm amber gradient (light/energy), Secondary = teal outline, Ghost = text.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      padding: '9px 16px',
      fontSize: '14px'
    },
    md: {
      padding: '12px 22px',
      fontSize: '15px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: '17px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--gradient-cta)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: hover ? 'var(--glow-amber)' : '0 4px 16px rgba(226,132,47,0.22)'
    },
    secondary: {
      background: hover ? 'var(--surface-tint-teal)' : 'transparent',
      color: 'var(--color-secondary)',
      border: '1.5px solid var(--color-secondary)',
      boxShadow: 'none'
    },
    soft: {
      background: 'var(--surface-tint-teal)',
      color: 'var(--color-secondary)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'none'
    },
    ghost: {
      background: hover ? 'var(--surface-inset)' : 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: e => {
      setHover(false);
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      width: fullWidth ? '100%' : 'auto',
      transform: hover && !disabled ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ingeniería Mental — IconButton
 * Square, rounded icon-only button. Pass an icon node as children.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  'aria-label': ariaLabel,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size];
  const variants = {
    solid: {
      background: 'var(--gradient-cta)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-secondary)',
      border: '1.5px solid var(--color-secondary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/CourseCard.jsx
try { (() => {
/**
 * Ingeniería Mental — CourseCard
 * Catalog tile: thumbnail, category, title, meta, price + CTA.
 */

// Glow accents per category tone — all share the same dark base.
const GLOWS = {
  teal: {
    core: 'rgba(116,213,228,0.42)',
    mid: 'rgba(20,124,142,0.30)'
  },
  amber: {
    core: 'rgba(244,172,98,0.42)',
    mid: 'rgba(201,111,34,0.28)'
  },
  orange: {
    core: 'rgba(244,172,98,0.42)',
    mid: 'rgba(201,111,34,0.28)'
  },
  success: {
    core: 'rgba(95,211,166,0.40)',
    mid: 'rgba(63,185,133,0.26)'
  },
  warning: {
    core: 'rgba(240,190,78,0.42)',
    mid: 'rgba(232,164,19,0.26)'
  },
  neutral: {
    core: 'rgba(194,202,210,0.26)',
    mid: 'rgba(150,160,170,0.16)'
  }
};
function CourseCard({
  title,
  category,
  categoryTone = 'teal',
  lessons,
  duration,
  price,
  level,
  thumbnail,
  onClick,
  style = {}
}) {
  const [lift, setLift] = React.useState(false);
  const glow = GLOWS[categoryTone] || GLOWS.teal;

  // Dark premium thumbnail: #0E1218 base + radial energy glow tinted by category,
  // faint concentric rings echoing the brand's light/energy motif.
  const thumbBg = [`radial-gradient(120% 130% at 78% 18%, ${glow.core} 0%, ${glow.mid} 26%, rgba(14,18,24,0) 60%)`, `radial-gradient(circle at 78% 18%, rgba(255,255,255,0.06) 0 26%, rgba(255,255,255,0) 26.5% 33%, rgba(255,255,255,0.05) 33.5% 40%, rgba(255,255,255,0) 40.5% 48%, rgba(255,255,255,0.04) 48.5% 56%, rgba(255,255,255,0) 56.5%)`, `#0E1218`].join(', ');
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setLift(true),
    onMouseLeave: () => setLift(false),
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${lift ? 'var(--border-strong)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: lift ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: lift ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 152,
      background: thumbnail ? `center/cover url(${thumbnail})` : thumbBg,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      padding: 'var(--space-3)'
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'rgba(10,13,18,0.55)',
      backdropFilter: 'blur(6px)',
      border: '1px solid rgba(255,255,255,0.14)',
      color: '#FFFFFF',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.03em',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, category), level && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      background: 'rgba(10,13,18,0.62)',
      backdropFilter: 'blur(4px)',
      color: '#fff',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)'
    }
  }, level)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--leading-snug)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, lessons != null && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCDA ", lessons, " lecciones"), duration && /*#__PURE__*/React.createElement("span", null, "\u23F1 ", duration)), price != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '14px',
      borderTop: '1px solid var(--border-soft)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-strong)'
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    fullWidth: true,
    onClick: onClick
  }, "Ver curso"))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
/** Ingeniería Mental — Avatar (initials or image). */
function Avatar({
  src,
  name = '',
  size = 40,
  style = {}
}) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--surface-tint-teal)',
      color: 'var(--im-teal-bright)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: size * 0.4,
      overflow: 'hidden',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/**
 * Ingeniería Mental — Badge
 * Small status / category pill.
 */
function Badge({
  children,
  tone = 'orange',
  style = {}
}) {
  const tones = {
    amber: {
      background: 'var(--surface-tint-amber)',
      color: 'var(--im-amber)',
      border: '1px solid rgba(244,168,98,0.28)'
    },
    orange: {
      background: 'var(--surface-tint-amber)',
      color: 'var(--im-amber)',
      border: '1px solid rgba(244,168,98,0.28)'
    },
    teal: {
      background: 'var(--surface-tint-teal)',
      color: 'var(--im-teal-bright)',
      border: '1px solid rgba(95,198,214,0.28)'
    },
    neutral: {
      background: 'var(--surface-inset)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)'
    },
    success: {
      background: 'rgba(63,185,133,0.14)',
      color: '#5FD3A6',
      border: '1px solid rgba(63,185,133,0.30)'
    },
    warning: {
      background: 'rgba(232,164,19,0.14)',
      color: '#F0BE4E',
      border: '1px solid rgba(232,164,19,0.30)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.03em',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ingeniería Mental — Card
 * Soft white surface, 16px radius, low warm shadow. The base container.
 */
function Card({
  children,
  padding = 'var(--space-5)',
  hover = false,
  style = {},
  ...rest
}) {
  const [lift, setLift] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setLift(true),
    onMouseLeave: () => hover && setLift(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: lift ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding,
      transform: lift ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...(lift ? {
        borderColor: 'var(--border-strong)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/** Ingeniería Mental — Tag (removable filter chip). */
function Tag({
  children,
  active = false,
  onClick,
  onRemove,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--text-sm)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      border: `1.5px solid ${active ? 'var(--color-secondary)' : 'var(--border-default)'}`,
      background: active ? 'var(--surface-tint-teal)' : 'var(--surface-raised)',
      color: active ? 'var(--im-teal-bright)' : 'var(--text-body)',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      cursor: 'pointer',
      opacity: 0.6,
      fontWeight: 700
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Ingeniería Mental — Checkbox. */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0,
      border: `1.5px solid ${checked ? 'var(--im-teal)' : 'var(--border-default)'}`,
      background: checked ? 'var(--im-teal)' : 'var(--surface-inset)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ingeniería Mental — Input
 * Text field with optional label, helper text and error state.
 */
function Input({
  label,
  helper,
  error,
  id,
  type = 'text',
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--im-danger)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '11px 14px',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      if (!error) {
        e.currentTarget.style.borderColor = 'var(--color-secondary)';
        e.currentTarget.style.boxShadow = '0 0 0 3px var(--surface-tint-teal)';
      }
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--im-danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ingeniería Mental — Select (styled native dropdown). */
function Select({
  label,
  options = [],
  helper,
  id,
  style = {},
  ...rest
}) {
  const selectId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 40px 11px 14px',
      width: '100%',
      outline: 'none',
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Ingeniería Mental — Switch (on/off toggle). */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--im-teal)' : 'var(--surface-inset)',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-out)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--im-white)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CatalogPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Ingeniería Mental — course catalog page
function CatalogPage({
  onNav,
  courses
}) {
  const {
    CourseCard,
    Tag,
    Input
  } = window.IngenierAMentalDesignSystem_af13d6;
  const [filter, setFilter] = React.useState('Todos');
  const cats = ['Todos', 'Electrocultura', 'Detox', 'Bioresonancia'];
  const shown = filter === 'Todos' ? courses : courses.filter(c => c.category === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Cat\xE1logo de cursos"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-lg)',
      margin: '10px 0 28px',
      maxWidth: 560
    }
  }, "Explora todos nuestros cursos sobre bioresonancia, electrocultura y salud energ\xE9tica."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      position: 'sticky',
      top: 84
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar curso...",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      margin: '0 0 12px'
    }
  }, "Categor\xEDa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    active: filter === c,
    onClick: () => setFilter(c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, shown.length, " cursos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(248px,1fr))',
      gap: 'var(--space-5)'
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: c.title
  }, c, {
    onClick: () => onNav('detalle', c)
  })))))));
}
window.IMCatalogPage = CatalogPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CatalogPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CourseDetailPage.jsx
try { (() => {
/* global React */
// Ingeniería Mental — course detail page
function CourseDetailPage({
  onNav,
  course
}) {
  const {
    Button,
    Badge,
    Card,
    Avatar
  } = window.IngenierAMentalDesignSystem_af13d6;
  const c = course || {};
  const curriculum = [{
    t: 'Introducción y fundamentos',
    n: 4,
    time: '38 min'
  }, {
    t: 'La base científica',
    n: 6,
    time: '1 h 12 min'
  }, {
    t: 'Práctica guiada paso a paso',
    n: 8,
    time: '2 h 04 min'
  }, {
    t: 'Aplicación en tu día a día',
    n: 6,
    time: '1 h 30 min'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('catalogo'),
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, "\u2190 Volver al cat\xE1logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-7)',
      marginTop: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: c.categoryTone || 'teal'
  }, c.category || 'Bioresonancia'), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      color: 'var(--text-strong)',
      margin: '14px 0 12px',
      lineHeight: 1.15
    }
  }, c.title || 'Fundamentos de la Bioresonancia'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      lineHeight: 1.6,
      margin: 0,
      maxWidth: 520
    }
  }, "Un recorrido completo y pr\xE1ctico para entender y aplicar la bioresonancia con seguridad y base cient\xEDfica."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sebasti\xE1n Tarta",
    size: 44
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, c.instructor || 'Sebastián Tarta'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Instructor \xB7 \u2B50 4,9 \xB7 ", c.lessons || 24, " lecciones")))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 170,
      background: c.thumbColor || 'var(--gradient-energy)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'rgba(10,13,18,0.55)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255,255,255,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 22
    }
  }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 32,
      color: 'var(--text-strong)'
    }
  }, c.price || '€49'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: '4px 0 18px'
    }
  }, "Acceso de por vida \xB7 Certificado incluido"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onNav('student')
  }, "Inscribirme ahora"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    fullWidth: true,
    style: {
      marginTop: 10
    }
  }, "Ver vista previa")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--space-5)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: '0 0 18px'
    }
  }, "Temario del curso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, curriculum.map((m, i) => /*#__PURE__*/React.createElement(Card, {
    key: m.t,
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--surface-tint-teal)',
      color: 'var(--im-teal-bright)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, m.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, m.n, " lecciones \xB7 ", m.time))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: '0 0 18px'
    }
  }, "Qu\xE9 aprender\xE1s"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['Las bases científicas de la bioresonancia', 'Cómo interpretar las señales del cuerpo', 'Técnicas de equilibrio energético seguras', 'Cómo integrarlo en tu rutina diaria'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      color: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--im-success)',
      fontWeight: 700
    }
  }, "\u2713"), t)))))));
}
window.IMCourseDetailPage = CourseDetailPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CourseDetailPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/DevicePage.jsx
try { (() => {
/* global React */
// Ingeniería Mental — Cell Oscillator device / product page (dark premium)
function DevicePage({
  onNav
}) {
  const {
    Button,
    Badge,
    Card,
    Avatar
  } = window.IngenierAMentalDesignSystem_af13d6;
  const tech = [{
    t: 'PEMF',
    d: 'Campos electromagnéticos pulsados de baja intensidad, con programas y frecuencias seleccionables.'
  }, {
    t: 'Biofotones',
    d: 'Estimulación lumínica coherente — la luz que tu propio cuerpo emite y utiliza.'
  }, {
    t: 'Frecuencias',
    d: 'Biblioteca de frecuencias programables, ajustables según el protocolo que sigas.'
  }];
  const testimonials = [{
    n: 'Marta R.',
    r: 'Usuaria · 8 meses',
    q: 'Esperaba humo y promesas. Encontré un equipo serio, con manual y parámetros claros. Eso me dio confianza.'
  }, {
    n: 'Joan V.',
    r: 'Terapeuta',
    q: 'Lo integro en consulta junto a otras técnicas. Mis pacientes valoran poder ver qué programa se está aplicando.'
  }, {
    n: 'Lucía M.',
    r: 'Usuaria · 1 año',
    q: 'El curso previo fue clave: llegué al dispositivo entendiendo qué hacía y por qué. Nada de fe ciega.'
  }];
  const faqs = [{
    q: '¿Es seguro usarlo en casa?',
    a: 'Sí. El Cell Oscillator trabaja con intensidades bajas y cuenta con programas guiados. Incluye manual, formación y soporte. No sustituye al consejo médico.'
  }, {
    q: '¿Qué incluye el precio?',
    a: 'El dispositivo, los accesorios, el acceso al curso de uso y 12 meses de soporte. El rango de precio depende de la configuración (€1.890 – €2.640).'
  }, {
    q: '¿Necesito formación previa?',
    a: 'No es obligatoria, pero la recomendamos. Por eso muchos empiezan por uno de nuestros cursos antes de adquirir el equipo.'
  }, {
    q: '¿Hay garantía y devolución?',
    a: 'Garantía de 2 años y 30 días de prueba. Si no encaja contigo, lo devuelves.'
  }];

  // qualification questionnaire
  const steps = [{
    q: '¿Cuál es tu objetivo principal?',
    opts: ['Equilibrio y descanso', 'Apoyo a un tratamiento', 'Uso profesional / consulta', 'Sólo tengo curiosidad']
  }, {
    q: '¿Qué experiencia tienes con bioenergética?',
    opts: ['Ninguna', 'He leído / visto contenido', 'He hecho algún curso', 'Trabajo en el sector']
  }, {
    q: '¿Para quién sería el dispositivo?',
    opts: ['Para mí', 'Para mi familia', 'Para mis clientes', 'Aún no lo sé']
  }];
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [openFaq, setOpenFaq] = React.useState(0);
  const done = step >= steps.length;
  const pick = o => {
    setAnswers(a => [...a, o]);
    setStep(s => s + 1);
  };
  const reset = () => {
    setStep(0);
    setAnswers([]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -100,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 700,
      height: 500,
      background: 'radial-gradient(circle, rgba(20,124,142,0.28), transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5) var(--space-7)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'im-fade-up 0.7s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, "Producto estrella"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      margin: '16px 0 0'
    }
  }, "Cell Oscillator"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: '18px 0 28px',
      maxWidth: 480
    }
  }, "El dispositivo de bioresonancia para tu casa. PEMF, biofotones y frecuencias programables, con par\xE1metros que puedes medir y entender."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => document.getElementById('cuestionario').scrollIntoView({
      behavior: 'smooth'
    })
  }, "\xBFEs para m\xED?"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--text-strong)'
    }
  }, "\u20AC1.890 \u2013 \u20AC2.640"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "seg\xFAn configuraci\xF3n \xB7 pago a plazos")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 340,
      height: 340,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 30,
      borderRadius: '50%',
      border: '1.5px solid rgba(95,198,214,0.4)',
      animation: 'im-energy-ring 4s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 30,
      borderRadius: '50%',
      border: '1.5px solid rgba(95,198,214,0.4)',
      animation: 'im-energy-ring 4s var(--ease-out) infinite',
      animationDelay: '2s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 250,
      height: 250,
      borderRadius: 'var(--radius-xl)',
      background: 'radial-gradient(circle at 50% 40%, rgba(95,198,214,0.22), transparent 70%), var(--im-surface-3)',
      border: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--glow-soft-teal)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.webp",
    alt: "",
    style: {
      width: 130
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      margin: '0 0 6px',
      textAlign: 'center'
    }
  }, "C\xF3mo funciona"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      textAlign: 'center',
      margin: '0 0 var(--space-6)'
    }
  }, "Tres tecnolog\xEDas, un mismo principio: trabajar con la energ\xEDa que tu cuerpo ya produce."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, tech.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.t,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--surface-tint-teal)',
      border: '1px solid rgba(95,198,214,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--im-teal-bright)',
      boxShadow: 'var(--glow-soft-teal)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, t.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      fontSize: 15
    }
  }, t.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-8) auto 0',
      padding: '0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      margin: '0 0 var(--space-6)',
      textAlign: 'center'
    }
  }, "Lo que dicen quienes lo usan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, testimonials.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-accent)',
      fontFamily: 'var(--font-heading)',
      fontSize: 40,
      lineHeight: 0.5,
      height: 20
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      fontSize: 15,
      margin: '0 0 18px'
    }
  }, t.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.n,
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 15
    }
  }, t.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, t.r))))))), /*#__PURE__*/React.createElement("section", {
    id: "cuestionario",
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-8) auto 0',
      padding: '0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 'var(--space-8)',
      background: 'linear-gradient(135deg, var(--im-surface-2), var(--im-surface-1))',
      border: '1px solid var(--border-strong)',
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "amber"
  }, "Cuestionario"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      margin: '12px 0 6px'
    }
  }, "\xBFEncaja contigo el Cell Oscillator?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Tres preguntas. Sin compromiso.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 'var(--space-6)',
      justifyContent: 'center'
    }
  }, steps.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 48,
      height: 5,
      borderRadius: 99,
      background: i <= step ? 'var(--im-teal-bright)' : 'var(--surface-inset)'
    }
  }))), !done ? /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'im-fade-up 0.4s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      textAlign: 'center',
      margin: '0 0 var(--space-5)'
    }
  }, steps[step].q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      maxWidth: 460,
      margin: '0 auto'
    }
  }, steps[step].opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => pick(o),
    style: {
      textAlign: 'left',
      padding: '15px 18px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      transition: 'border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--im-teal-bright)';
      e.currentTarget.style.background = 'var(--surface-tint-teal)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--border-default)';
      e.currentTarget.style.background = 'var(--surface-inset)';
    }
  }, o)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      animation: 'im-fade-up 0.4s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--surface-tint-teal)',
      border: '1px solid rgba(95,198,214,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px',
      boxShadow: 'var(--glow-soft-teal)',
      color: 'var(--im-teal-bright)',
      fontSize: 26
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, "El Cell Oscillator puede encajar contigo"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      maxWidth: 460,
      margin: '0 auto 24px'
    }
  }, "Seg\xFAn tus respuestas, te recomendamos empezar por el curso de bioresonancia y agendar una llamada para resolver tus dudas antes de decidir."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('catalogo')
  }, "Ver curso recomendado"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: reset
  }, "Repetir cuestionario"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: 'var(--space-8) auto 0',
      padding: '0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      margin: '0 0 var(--space-5)',
      textAlign: 'center'
    }
  }, "Preguntas frecuentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, faqs.map((f, i) => {
    const open = openFaq === i;
    return /*#__PURE__*/React.createElement(Card, {
      key: f.q,
      padding: "0"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenFaq(open ? -1 : i),
      style: {
        width: '100%',
        textAlign: 'left',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 'var(--space-4) var(--space-5)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        color: 'var(--text-strong)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 'var(--text-lg)'
      }
    }, f.q, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--im-teal-bright)',
        transform: open ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)',
        fontSize: 22,
        lineHeight: 1
      }
    }, "+")), open && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 var(--space-5) var(--space-5)',
        color: 'var(--text-body)',
        lineHeight: 'var(--leading-normal)',
        animation: 'im-fade-up 0.3s var(--ease-out) both'
      }
    }, f.a));
  }))));
}
window.IMDevicePage = DevicePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/DevicePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
/* global React */
// Ingeniería Mental — marketing footer
function Footer() {
  const cols = [{
    h: 'Producto',
    items: ['Cell Oscillator', 'Cómo funciona', 'Precios', 'Cuestionario']
  }, {
    h: 'Cursos',
    items: ['Electrocultura', 'Detox energético', 'Bioresonancia', 'Ver todos']
  }, {
    h: 'Ingeniería Mental',
    items: ['Sobre Sebastián', 'La ciencia', 'Contacto', 'Términos']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--im-surface-1)',
      borderTop: '1px solid var(--border-soft)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.webp",
    alt: "",
    style: {
      width: 40,
      height: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, "Ingenier\xEDa Mental")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      lineHeight: 1.6,
      fontSize: 14,
      maxWidth: 300,
      color: 'var(--text-body)'
    }
  }, "Dispositivos y formaci\xF3n con base cient\xEDfica en bioresonancia, electrocultura y salud energ\xE9tica.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 14px'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--text-body)',
      textDecoration: 'none',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-soft)',
      padding: '18px var(--space-5)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      fontSize: 13,
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Ingenier\xEDa Mental \xB7 Sebasti\xE1n Tarta"), /*#__PURE__*/React.createElement("span", null, "Tu cuerpo emite luz")));
}
window.IMFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Header.jsx
try { (() => {
/* global React */
// Ingeniería Mental — marketing site header
function Header({
  active = 'inicio',
  onNav
}) {
  const {
    Button
  } = window.IngenierAMentalDesignSystem_af13d6;
  const links = [{
    id: 'inicio',
    label: 'Inicio'
  }, {
    id: 'dispositivo',
    label: 'El dispositivo'
  }, {
    id: 'catalogo',
    label: 'Cursos'
  }, {
    id: 'sobre',
    label: 'Sebastián'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(10,13,18,0.72)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('inicio'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.webp",
    alt: "Ingenier\xEDa Mental",
    style: {
      width: 38,
      height: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, "Ingenier\xEDa Mental")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNav(l.id),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      cursor: 'pointer',
      padding: '8px 14px',
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      color: active === l.id ? 'var(--im-teal-bright)' : 'var(--text-body)',
      background: active === l.id ? 'var(--surface-tint-teal)' : 'transparent'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNav('student')
  }, "Entrar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('catalogo')
  }, "Empezar"))));
}
window.IMHeader = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Ingeniería Mental — home page (dark premium)
function HomePage({
  onNav,
  courses
}) {
  const {
    Button,
    Badge,
    CourseCard,
    Card
  } = window.IngenierAMentalDesignSystem_af13d6;
  const pillars = [{
    t: 'Tu cuerpo emite luz',
    d: 'Biofotones, campos electromagnéticos pulsados y frecuencias: la base científica detrás de la bioenergética.'
  }, {
    t: 'Tecnología, no creencias',
    d: 'El Cell Oscillator trabaja con parámetros medibles. Nada de promesas mágicas, sólo método.'
  }, {
    t: 'Aprende y aplica',
    d: 'Cursos que te dan el criterio para entender, decidir y aplicar con seguridad en tu día a día.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      right: -80,
      width: 620,
      height: 620,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(20,124,142,0.30), transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 120,
      left: -140,
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(244,168,98,0.10), transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'im-fade-up 0.7s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-energy)'
    }
  }, "Bioenerg\xE9tica con base cient\xEDfica"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      margin: '18px 0 0'
    }
  }, "Tu cuerpo emite luz.", /*#__PURE__*/React.createElement("br", null), "Aprende a ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--text-accent)'
    }
  }, "sintonizarla"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: '20px 0 30px',
      maxWidth: 500
    }
  }, "Descubre el Cell Oscillator \u2014nuestro dispositivo de bioresonancia\u2014 y forma parte de una comunidad que entiende la energ\xEDa del cuerpo con rigor, no con misticismo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('dispositivo')
  }, "Conoce el dispositivo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('catalogo')
  }, "Ver los cursos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30,
      marginTop: 38
    }
  }, [['+12.000', 'estudiantes'], ['4,9/5', 'valoración'], ['3', 'cursos · 1 dispositivo']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 380,
      height: 380,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 40,
      borderRadius: '50%',
      border: '1.5px solid rgba(95,198,214,0.40)',
      animation: 'im-energy-ring 4s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 40,
      borderRadius: '50%',
      border: '1.5px solid rgba(95,198,214,0.40)',
      animation: 'im-energy-ring 4s var(--ease-out) infinite',
      animationDelay: '2s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 70,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 50% 42%, rgba(95,198,214,0.30), rgba(20,124,142,0.06) 60%, transparent)',
      animation: 'im-pulse-glow 3.4s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.webp",
    alt: "",
    style: {
      width: 210,
      position: 'relative',
      filter: 'drop-shadow(0 24px 50px rgba(20,124,142,0.45))'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 'var(--space-7)',
      background: 'linear-gradient(135deg, var(--im-surface-2), var(--im-surface-1))',
      border: '1px solid var(--border-strong)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, "Producto estrella"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      margin: '14px 0 12px'
    }
  }, "Cell Oscillator"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: '0 0 22px',
      maxWidth: 440
    }
  }, "Campos electromagn\xE9ticos pulsados (PEMF), biofotones y frecuencias programables en un \xFAnico dispositivo de uso dom\xE9stico. Dise\xF1ado para acompa\xF1ar tu equilibrio energ\xE9tico con par\xE1metros que puedes medir."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('dispositivo')
  }, "Ver el dispositivo"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, "desde ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-accent)',
      fontFamily: 'var(--font-heading)'
    }
  }, "\u20AC1.890")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240,
      height: 240,
      borderRadius: 'var(--radius-xl)',
      background: 'radial-gradient(circle at 50% 40%, rgba(95,198,214,0.22), transparent 70%), var(--im-surface-3)',
      border: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--glow-soft-teal)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.webp",
    alt: "",
    style: {
      width: 120
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-8) auto 0',
      padding: '0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: p.t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-tint-teal)',
      border: '1px solid rgba(95,198,214,0.28)',
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--im-teal-bright)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600
    }
  }, i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      fontSize: 15
    }
  }, p.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Nuestros cursos"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, "Forma tu criterio. Tambi\xE9n son la puerta de entrada al dispositivo.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('catalogo')
  }, "Ver todos \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, courses.slice(0, 3).map(c => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: c.title
  }, c, {
    onClick: () => onNav('detalle', c)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-8) auto 0',
      padding: '0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--im-teal-deep), #0A2E36)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-8)',
      textAlign: 'center',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 50% 0%, rgba(95,198,214,0.25), transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h1)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "\xBFNo sabes por d\xF3nde empezar?"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      maxWidth: 520,
      margin: '14px auto 28px'
    }
  }, "Responde unas preguntas y te diremos si el Cell Oscillator encaja contigo, o por qu\xE9 curso conviene empezar."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('dispositivo')
  }, "Hacer el cuestionario")))));
}
window.IMHomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student/CoursePlayer.jsx
try { (() => {
/* global React */
// Ingeniería Mental — course player / lesson view (LIGHT READING SCOPE)
function CoursePlayer({
  onNav
}) {
  const {
    Button
  } = window.IngenierAMentalDesignSystem_af13d6;
  const [done, setDone] = React.useState([0, 1, 2]);
  const lessons = [{
    t: 'Bienvenida al curso',
    time: '4:12'
  }, {
    t: '¿Qué es la bioresonancia?',
    time: '9:48'
  }, {
    t: 'La base científica',
    time: '12:30'
  }, {
    t: 'El campo energético del cuerpo',
    time: '14:05'
  }, {
    t: 'Primera práctica guiada',
    time: '18:22'
  }, {
    t: 'Interpretar las señales',
    time: '11:16'
  }, {
    t: 'Integrarlo en tu rutina',
    time: '8:40'
  }];
  const current = 3;
  return /*#__PURE__*/React.createElement("div", {
    "data-surface": "reading",
    style: {
      flex: 1,
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('panel'),
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, "\u2190 Mi panel"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: '#0A0D12',
      aspectRatio: '16/9',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 50% 45%, rgba(20,124,142,0.40), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      borderRadius: '50%',
      background: 'var(--gradient-cta)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#1A1206',
      fontSize: 26,
      boxShadow: 'var(--glow-amber)',
      cursor: 'pointer',
      zIndex: 1
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'linear-gradient(0deg, rgba(0,0,0,0.6), transparent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 13,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "5:12"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 5,
      borderRadius: 99,
      background: 'rgba(255,255,255,0.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '38%',
      height: '100%',
      borderRadius: 99,
      background: 'var(--im-teal-bright)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 13,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "14:05"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-energy)'
    }
  }, "Bioresonancia \xB7 Lecci\xF3n 4"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      margin: '10px 0 14px',
      lineHeight: 'var(--leading-snug)'
    }
  }, "El campo energ\xE9tico del cuerpo"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: 0,
      fontSize: 'var(--text-lg)'
    }
  }, "En esta lecci\xF3n exploramos c\xF3mo se distribuye la energ\xEDa en el cuerpo y qu\xE9 papel juega en el equilibrio general. Ver\xE1s una demostraci\xF3n pr\xE1ctica que podr\xE1s repetir en casa, con las precauciones explicadas paso a paso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Lecci\xF3n anterior"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "\u2192",
    onClick: () => setDone(d => [...new Set([...d, current])])
  }, "Marcar como vista y seguir")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 320,
      flexShrink: 0,
      borderLeft: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      padding: 'var(--space-5) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Contenido"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, done.length, "/", lessons.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--surface-inset)',
      borderRadius: 99,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${done.length / lessons.length * 100}%`,
      height: '100%',
      background: 'var(--im-teal)',
      borderRadius: 99
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, lessons.map((l, i) => {
    const isDone = done.includes(i);
    const isCurrent = i === current;
    return /*#__PURE__*/React.createElement("div", {
      key: l.t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        background: isCurrent ? 'var(--surface-tint-teal)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flexShrink: 0,
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDone ? 'var(--im-teal)' : isCurrent ? 'var(--surface-card)' : 'var(--surface-inset)',
        border: isCurrent && !isDone ? '2px solid var(--im-teal)' : 'none',
        color: isDone ? '#fff' : 'var(--text-muted)',
        fontWeight: 700
      }
    }, isDone ? '✓' : i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: isCurrent ? 600 : 500,
        color: isCurrent ? 'var(--text-energy)' : 'var(--text-strong)',
        fontFamily: isCurrent ? 'var(--font-heading)' : 'var(--font-body)'
      }
    }, l.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "\u25B6 ", l.time)));
  }))));
}
window.IMCoursePlayer = CoursePlayer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student/CoursePlayer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student/Dashboard.jsx
try { (() => {
/* global React */
// Ingeniería Mental — student dashboard
function Dashboard({
  onNav
}) {
  const {
    Card,
    Button,
    Badge,
    Avatar
  } = window.IngenierAMentalDesignSystem_af13d6;
  const enrolled = [{
    t: 'Fundamentos de la Bioresonancia',
    cat: 'Bioresonancia',
    tone: 'teal',
    pct: 68,
    next: 'Lección 14 · El campo energético',
    color: 'linear-gradient(135deg, #0F6473, #5FC6D6)'
  }, {
    t: 'Detox energético en 21 días',
    cat: 'Detox',
    tone: 'teal',
    pct: 35,
    next: 'Lección 7 · Respiración consciente',
    color: 'var(--gradient-energy)'
  }, {
    t: 'Electrocultura para tu huerto',
    cat: 'Electrocultura',
    tone: 'amber',
    pct: 12,
    next: 'Lección 2 · Materiales básicos',
    color: 'linear-gradient(135deg, #C96F22, #F4AC62)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--space-6) var(--space-7)',
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, "Buenos d\xEDas,"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      margin: '2px 0 0'
    }
  }, "Hola, Luc\xEDa \uD83D\uDC4B")), /*#__PURE__*/React.createElement(Avatar, {
    name: "Luc\xEDa M\xE9ndez",
    size: 48
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      margin: '0 0 28px'
    }
  }, "Tienes 3 cursos en progreso. Contin\xFAa donde lo dejaste."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-6)'
    }
  }, [['3', 'Cursos activos'], ['28', 'Lecciones vistas'], ['7 días', 'Racha actual'], ['2', 'Certificados']].map(([n, l]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, l)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, "Contin\xFAa aprendiendo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, enrolled.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.t,
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 'var(--radius-md)',
      background: c.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: c.tone
  }, c.cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-strong)',
      margin: '8px 0 6px'
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Siguiente: ", c.next), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 8,
      background: 'var(--surface-inset)',
      borderRadius: 99
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${c.pct}%`,
      height: '100%',
      background: c.tone === 'amber' ? 'var(--gradient-cta)' : 'var(--gradient-energy)',
      borderRadius: 99
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-body)',
      fontFamily: 'var(--font-heading)'
    }
  }, c.pct, "%"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('player')
  }, "Continuar"))))));
}
window.IMDashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student/StudentSidebar.jsx
try { (() => {
/* global React */
// Ingeniería Mental — student area sidebar
function StudentSidebar({
  active,
  onNav
}) {
  const items = [{
    id: 'panel',
    label: 'Mi panel',
    icon: '◧'
  }, {
    id: 'cursos',
    label: 'Mis cursos',
    icon: '▤'
  }, {
    id: 'player',
    label: 'Continuar',
    icon: '▶'
  }, {
    id: 'logros',
    label: 'Logros',
    icon: '★'
  }, {
    id: 'ajustes',
    label: 'Ajustes',
    icon: '⚙'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-soft)',
      minHeight: '100vh',
      padding: 'var(--space-5) var(--space-4)',
      position: 'sticky',
      top: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 8px 24px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.webp",
    alt: "",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, "Ingenier\xEDa Mental")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    onClick: () => onNav(it.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 12px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      textDecoration: 'none',
      color: active === it.id ? 'var(--im-teal-bright)' : 'var(--text-body)',
      background: active === it.id ? 'var(--surface-tint-teal)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      textAlign: 'center',
      color: active === it.id ? 'var(--im-teal-bright)' : 'var(--text-muted)'
    }
  }, it.icon), it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-tint-amber)',
      border: '1px solid rgba(244,168,98,0.28)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-accent)',
      marginBottom: 4
    }
  }, "Racha de 7 d\xEDas \uD83D\uDD25"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, "Sigue as\xED para no perderla."))));
}
window.IMStudentSidebar = StudentSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student/StudentSidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
