import { aX as kn, aY as Vi, u as ft, s as gr, a$ as ie, p as Mn, g as ut, aZ as Wi, b1 as tr, f as $, q as Ui, l as Ji, al as Nn, aF as Ln, aH as Bn, b2 as Hr, V as pt, aE as Kt, _ as Qt, x as Wt, y as Ar, b as Pr, o as W, w as ne, c as q, d as qt, a as A, t as se, F as ae, i as me, aS as On, aT as Hn, T as Le, b3 as Gn, h as At, m as Vt, b4 as Vn, aN as Wn, ac as Un, O as Gr, af as Jn, b5 as Ki, ah as qi, aL as Kn, b6 as qn, aM as jr, a2 as Xn, b7 as Yn, b8 as Qn, j as Xi, z as Yi, aP as br, aR as Zn, b9 as $n, n as ts, e as es, A as rs } from "./SkeletonUtils-Lx6OFsqh.js";
import { I as is, A as ns, G as ss, a as as, L as Qi } from "./AssetLoader-CFSrclv1.js";
import { G as os, E as cs, T as ls, O as _s } from "./OrbitControls-BgTnVztI.js";
(async () => {
  const ee = typeof document < "u";
  function Zi(i) {
    return typeof i == "object" || "displayName" in i || "props" in i || "__vccOpts" in i;
  }
  function ds(i) {
    return i.__esModule || i[Symbol.toStringTag] === "Module" || i.default && Zi(i.default);
  }
  const V = Object.assign;
  function er(i, t) {
    const e = {};
    for (const r in t) {
      const n = t[r];
      e[r] = Ct(n) ? n.map(i) : i(n);
    }
    return e;
  }
  const ge = () => {
  }, Ct = Array.isArray;
  function Vr(i, t) {
    const e = {};
    for (const r in i) e[r] = r in t ? t[r] : i[r];
    return e;
  }
  const $i = /#/g, hs = /&/g, ws = /\//g, us = /=/g, ps = /\?/g, tn = /\+/g, gs = /%5B/g, bs = /%5D/g, en = /%5E/g, ms = /%60/g, rn = /%7B/g, fs = /%7C/g, nn = /%7D/g, ys = /%20/g;
  function Ir(i) {
    return i == null ? "" : encodeURI("" + i).replace(fs, "|").replace(gs, "[").replace(bs, "]");
  }
  function vs(i) {
    return Ir(i).replace(rn, "{").replace(nn, "}").replace(en, "^");
  }
  function mr(i) {
    return Ir(i).replace(tn, "%2B").replace(ys, "+").replace($i, "%23").replace(hs, "%26").replace(ms, "`").replace(rn, "{").replace(nn, "}").replace(en, "^");
  }
  function Rs(i) {
    return mr(i).replace(us, "%3D");
  }
  function Ss(i) {
    return Ir(i).replace($i, "%23").replace(ps, "%3F");
  }
  function Cs(i) {
    return Ss(i).replace(ws, "%2F");
  }
  function fe(i) {
    if (i == null) return null;
    try {
      return decodeURIComponent("" + i);
    } catch {
    }
    return "" + i;
  }
  const Es = /\/$/, xs = (i) => i.replace(Es, "");
  function rr(i, t, e = "/") {
    let r, n = {}, o = "", c = "";
    const l = t.indexOf("#");
    let _ = t.indexOf("?");
    return _ = l >= 0 && _ > l ? -1 : _, _ >= 0 && (r = t.slice(0, _), o = t.slice(_, l > 0 ? l : t.length), n = i(o.slice(1))), l >= 0 && (r = r || t.slice(0, l), c = t.slice(l, t.length)), r = Is(r ?? t, e), {
      fullPath: r + o + c,
      path: r,
      query: n,
      hash: fe(c)
    };
  }
  function As(i, t) {
    const e = t.query ? i(t.query) : "";
    return t.path + (e && "?") + e + (t.hash || "");
  }
  function Wr(i, t) {
    return !t || !i.toLowerCase().startsWith(t.toLowerCase()) ? i : i.slice(t.length) || "/";
  }
  function Ps(i, t, e) {
    const r = t.matched.length - 1, n = e.matched.length - 1;
    return r > -1 && r === n && oe(t.matched[r], e.matched[n]) && sn(t.params, e.params) && i(t.query) === i(e.query) && t.hash === e.hash;
  }
  function oe(i, t) {
    return (i.aliasOf || i) === (t.aliasOf || t);
  }
  function sn(i, t) {
    if (Object.keys(i).length !== Object.keys(t).length) return false;
    for (const e in i) if (!js(i[e], t[e])) return false;
    return true;
  }
  function js(i, t) {
    return Ct(i) ? Ur(i, t) : Ct(t) ? Ur(t, i) : i === t;
  }
  function Ur(i, t) {
    return Ct(t) ? i.length === t.length && i.every((e, r) => e === t[r]) : i.length === 1 && i[0] === t;
  }
  function Is(i, t) {
    if (i.startsWith("/")) return i;
    if (!i) return t;
    const e = t.split("/"), r = i.split("/"), n = r[r.length - 1];
    (n === ".." || n === ".") && r.push("");
    let o = e.length - 1, c, l;
    for (c = 0; c < r.length; c++) if (l = r[c], l !== ".") if (l === "..") o > 1 && o--;
    else break;
    return e.slice(0, o).join("/") + "/" + r.slice(c).join("/");
  }
  const Ot = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  let fr = (function(i) {
    return i.pop = "pop", i.push = "push", i;
  })({}), ir = (function(i) {
    return i.back = "back", i.forward = "forward", i.unknown = "", i;
  })({});
  function Ds(i) {
    if (!i) if (ee) {
      const t = document.querySelector("base");
      i = t && t.getAttribute("href") || "/", i = i.replace(/^\w+:\/\/[^\/]+/, "");
    } else i = "/";
    return i[0] !== "/" && i[0] !== "#" && (i = "/" + i), xs(i);
  }
  const Ts = /^[^#]+#/;
  function zs(i, t) {
    return i.replace(Ts, "#") + t;
  }
  function Fs(i, t) {
    const e = document.documentElement.getBoundingClientRect(), r = i.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - e.left - (t.left || 0),
      top: r.top - e.top - (t.top || 0)
    };
  }
  const Be = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function ks(i) {
    let t;
    if ("el" in i) {
      const e = i.el, r = typeof e == "string" && e.startsWith("#"), n = typeof e == "string" ? r ? document.getElementById(e.slice(1)) : document.querySelector(e) : e;
      if (!n) return;
      t = Fs(n, i);
    } else t = i;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Jr(i, t) {
    return (history.state ? history.state.position - t : -1) + i;
  }
  const yr = /* @__PURE__ */ new Map();
  function Ms(i, t) {
    yr.set(i, t);
  }
  function Ns(i) {
    const t = yr.get(i);
    return yr.delete(i), t;
  }
  function Ls(i) {
    return typeof i == "string" || i && typeof i == "object";
  }
  function an(i) {
    return typeof i == "string" || typeof i == "symbol";
  }
  let Z = (function(i) {
    return i[i.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", i[i.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", i[i.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", i[i.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", i[i.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", i;
  })({});
  const on = Symbol("");
  Z.MATCHER_NOT_FOUND + "", Z.NAVIGATION_GUARD_REDIRECT + "", Z.NAVIGATION_ABORTED + "", Z.NAVIGATION_CANCELLED + "", Z.NAVIGATION_DUPLICATED + "";
  function ce(i, t) {
    return V(new Error(), {
      type: i,
      [on]: true
    }, t);
  }
  function Dt(i, t) {
    return i instanceof Error && on in i && (t == null || !!(i.type & t));
  }
  const Bs = [
    "params",
    "query",
    "hash"
  ];
  function Os(i) {
    if (typeof i == "string") return i;
    if (i.path != null) return i.path;
    const t = {};
    for (const e of Bs) e in i && (t[e] = i[e]);
    return JSON.stringify(t, null, 2);
  }
  function Hs(i) {
    const t = {};
    if (i === "" || i === "?") return t;
    const e = (i[0] === "?" ? i.slice(1) : i).split("&");
    for (let r = 0; r < e.length; ++r) {
      const n = e[r].replace(tn, " "), o = n.indexOf("="), c = fe(o < 0 ? n : n.slice(0, o)), l = o < 0 ? null : fe(n.slice(o + 1));
      if (c in t) {
        let _ = t[c];
        Ct(_) || (_ = t[c] = [
          _
        ]), _.push(l);
      } else t[c] = l;
    }
    return t;
  }
  function Kr(i) {
    let t = "";
    for (let e in i) {
      const r = i[e];
      if (e = Rs(e), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + e);
        continue;
      }
      (Ct(r) ? r.map((n) => n && mr(n)) : [
        r && mr(r)
      ]).forEach((n) => {
        n !== void 0 && (t += (t.length ? "&" : "") + e, n != null && (t += "=" + n));
      });
    }
    return t;
  }
  function Gs(i) {
    const t = {};
    for (const e in i) {
      const r = i[e];
      r !== void 0 && (t[e] = Ct(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
    }
    return t;
  }
  const Vs = Symbol(""), qr = Symbol(""), Dr = Symbol(""), Tr = Symbol(""), vr = Symbol("");
  function ue() {
    let i = [];
    function t(r) {
      return i.push(r), () => {
        const n = i.indexOf(r);
        n > -1 && i.splice(n, 1);
      };
    }
    function e() {
      i = [];
    }
    return {
      add: t,
      list: () => i.slice(),
      reset: e
    };
  }
  function Gt(i, t, e, r, n, o = (c) => c()) {
    const c = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
    return () => new Promise((l, _) => {
      const h = (b) => {
        b === false ? _(ce(Z.NAVIGATION_ABORTED, {
          from: e,
          to: t
        })) : b instanceof Error ? _(b) : Ls(b) ? _(ce(Z.NAVIGATION_GUARD_REDIRECT, {
          from: t,
          to: b
        })) : (c && r.enterCallbacks[n] === c && typeof b == "function" && c.push(b), l());
      }, p = o(() => i.call(r && r.instances[n], t, e, h));
      let w = Promise.resolve(p);
      i.length < 3 && (w = w.then(h)), w.catch((b) => _(b));
    });
  }
  function nr(i, t, e, r, n = (o) => o()) {
    const o = [];
    for (const c of i) for (const l in c.components) {
      let _ = c.components[l];
      if (!(t !== "beforeRouteEnter" && !c.instances[l])) if (Zi(_)) {
        const h = (_.__vccOpts || _)[t];
        h && o.push(Gt(h, e, r, c, l, n));
      } else {
        let h = _();
        o.push(() => h.then((p) => {
          if (!p) throw new Error(`Couldn't resolve component "${l}" at "${c.path}"`);
          const w = ds(p) ? p.default : p;
          c.mods[l] = p, c.components[l] = w;
          const b = (w.__vccOpts || w)[t];
          return b && Gt(b, e, r, c, l, n)();
        }));
      }
    }
    return o;
  }
  function Ws(i, t) {
    const e = [], r = [], n = [], o = Math.max(t.matched.length, i.matched.length);
    for (let c = 0; c < o; c++) {
      const l = t.matched[c];
      l && (i.matched.find((h) => oe(h, l)) ? r.push(l) : e.push(l));
      const _ = i.matched[c];
      _ && (t.matched.find((h) => oe(h, _)) || n.push(_));
    }
    return [
      e,
      r,
      n
    ];
  }
  let Us = () => location.protocol + "//" + location.host;
  function cn(i, t) {
    const { pathname: e, search: r, hash: n } = t, o = i.indexOf("#");
    if (o > -1) {
      let c = n.includes(i.slice(o)) ? i.slice(o).length : 1, l = n.slice(c);
      return l[0] !== "/" && (l = "/" + l), Wr(l, "");
    }
    return Wr(e, i) + r + n;
  }
  function Js(i, t, e, r) {
    let n = [], o = [], c = null;
    const l = ({ state: b }) => {
      const f = cn(i, location), R = e.value, D = t.value;
      let P = 0;
      if (b) {
        if (e.value = f, t.value = b, c && c === R) {
          c = null;
          return;
        }
        P = D ? b.position - D.position : 0;
      } else r(f);
      n.forEach((I) => {
        I(e.value, R, {
          delta: P,
          type: fr.pop,
          direction: P ? P > 0 ? ir.forward : ir.back : ir.unknown
        });
      });
    };
    function _() {
      c = e.value;
    }
    function h(b) {
      n.push(b);
      const f = () => {
        const R = n.indexOf(b);
        R > -1 && n.splice(R, 1);
      };
      return o.push(f), f;
    }
    function p() {
      if (document.visibilityState === "hidden") {
        const { history: b } = window;
        if (!b.state) return;
        b.replaceState(V({}, b.state, {
          scroll: Be()
        }), "");
      }
    }
    function w() {
      for (const b of o) b();
      o = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", p), document.removeEventListener("visibilitychange", p);
    }
    return window.addEventListener("popstate", l), window.addEventListener("pagehide", p), document.addEventListener("visibilitychange", p), {
      pauseListeners: _,
      listen: h,
      destroy: w
    };
  }
  function Xr(i, t, e, r = false, n = false) {
    return {
      back: i,
      current: t,
      forward: e,
      replaced: r,
      position: window.history.length,
      scroll: n ? Be() : null
    };
  }
  function Ks(i) {
    const { history: t, location: e } = window, r = {
      value: cn(i, e)
    }, n = {
      value: t.state
    };
    n.value || o(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function o(_, h, p) {
      const w = i.indexOf("#"), b = w > -1 ? (e.host && document.querySelector("base") ? i : i.slice(w)) + _ : Us() + i + _;
      try {
        t[p ? "replaceState" : "pushState"](h, "", b), n.value = h;
      } catch (f) {
        console.error(f), e[p ? "replace" : "assign"](b);
      }
    }
    function c(_, h) {
      o(_, V({}, t.state, Xr(n.value.back, _, n.value.forward, true), h, {
        position: n.value.position
      }), true), r.value = _;
    }
    function l(_, h) {
      const p = V({}, n.value, t.state, {
        forward: _,
        scroll: Be()
      });
      o(p.current, p, true), o(_, V({}, Xr(r.value, _, null), {
        position: p.position + 1
      }, h), false), r.value = _;
    }
    return {
      location: r,
      state: n,
      push: l,
      replace: c
    };
  }
  function qs(i) {
    i = Ds(i);
    const t = Ks(i), e = Js(i, t.state, t.location, t.replace);
    function r(o, c = true) {
      c || e.pauseListeners(), history.go(o);
    }
    const n = V({
      location: "",
      base: i,
      go: r,
      createHref: zs.bind(null, i)
    }, t, e);
    return Object.defineProperty(n, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(n, "state", {
      enumerable: true,
      get: () => t.state.value
    }), n;
  }
  function Xs(i) {
    return i = location.host ? i || location.pathname + location.search : "", i.includes("#") || (i += "#"), qs(i);
  }
  let Jt = (function(i) {
    return i[i.Static = 0] = "Static", i[i.Param = 1] = "Param", i[i.Group = 2] = "Group", i;
  })({});
  var st = (function(i) {
    return i[i.Static = 0] = "Static", i[i.Param = 1] = "Param", i[i.ParamRegExp = 2] = "ParamRegExp", i[i.ParamRegExpEnd = 3] = "ParamRegExpEnd", i[i.EscapeNext = 4] = "EscapeNext", i;
  })(st || {});
  const Ys = {
    type: Jt.Static,
    value: ""
  }, Qs = /[a-zA-Z0-9_]/;
  function Zs(i) {
    if (!i) return [
      []
    ];
    if (i === "/") return [
      [
        Ys
      ]
    ];
    if (!i.startsWith("/")) throw new Error(`Invalid path "${i}"`);
    function t(f) {
      throw new Error(`ERR (${e})/"${h}": ${f}`);
    }
    let e = st.Static, r = e;
    const n = [];
    let o;
    function c() {
      o && n.push(o), o = [];
    }
    let l = 0, _, h = "", p = "";
    function w() {
      h && (e === st.Static ? o.push({
        type: Jt.Static,
        value: h
      }) : e === st.Param || e === st.ParamRegExp || e === st.ParamRegExpEnd ? (o.length > 1 && (_ === "*" || _ === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), o.push({
        type: Jt.Param,
        value: h,
        regexp: p,
        repeatable: _ === "*" || _ === "+",
        optional: _ === "*" || _ === "?"
      })) : t("Invalid state to consume buffer"), h = "");
    }
    function b() {
      h += _;
    }
    for (; l < i.length; ) {
      if (_ = i[l++], _ === "\\" && e !== st.ParamRegExp) {
        r = e, e = st.EscapeNext;
        continue;
      }
      switch (e) {
        case st.Static:
          _ === "/" ? (h && w(), c()) : _ === ":" ? (w(), e = st.Param) : b();
          break;
        case st.EscapeNext:
          b(), e = r;
          break;
        case st.Param:
          _ === "(" ? e = st.ParamRegExp : Qs.test(_) ? b() : (w(), e = st.Static, _ !== "*" && _ !== "?" && _ !== "+" && l--);
          break;
        case st.ParamRegExp:
          _ === ")" ? p[p.length - 1] == "\\" ? p = p.slice(0, -1) + _ : e = st.ParamRegExpEnd : p += _;
          break;
        case st.ParamRegExpEnd:
          w(), e = st.Static, _ !== "*" && _ !== "?" && _ !== "+" && l--, p = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return e === st.ParamRegExp && t(`Unfinished custom RegExp for param "${h}"`), w(), c(), n;
  }
  const Yr = "[^/]+?", $s = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  var wt = (function(i) {
    return i[i._multiplier = 10] = "_multiplier", i[i.Root = 90] = "Root", i[i.Segment = 40] = "Segment", i[i.SubSegment = 30] = "SubSegment", i[i.Static = 40] = "Static", i[i.Dynamic = 20] = "Dynamic", i[i.BonusCustomRegExp = 10] = "BonusCustomRegExp", i[i.BonusWildcard = -50] = "BonusWildcard", i[i.BonusRepeatable = -20] = "BonusRepeatable", i[i.BonusOptional = -8] = "BonusOptional", i[i.BonusStrict = 0.7000000000000001] = "BonusStrict", i[i.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", i;
  })(wt || {});
  const ta = /[.+*?^${}()[\]/\\]/g;
  function ea(i, t) {
    const e = V({}, $s, t), r = [];
    let n = e.start ? "^" : "";
    const o = [];
    for (const h of i) {
      const p = h.length ? [] : [
        wt.Root
      ];
      e.strict && !h.length && (n += "/");
      for (let w = 0; w < h.length; w++) {
        const b = h[w];
        let f = wt.Segment + (e.sensitive ? wt.BonusCaseSensitive : 0);
        if (b.type === Jt.Static) w || (n += "/"), n += b.value.replace(ta, "\\$&"), f += wt.Static;
        else if (b.type === Jt.Param) {
          const { value: R, repeatable: D, optional: P, regexp: I } = b;
          o.push({
            name: R,
            repeatable: D,
            optional: P
          });
          const v = I || Yr;
          if (v !== Yr) {
            f += wt.BonusCustomRegExp;
            try {
              `${v}`;
            } catch (E) {
              throw new Error(`Invalid custom RegExp for param "${R}" (${v}): ` + E.message);
            }
          }
          let S = D ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
          w || (S = P && h.length < 2 ? `(?:/${S})` : "/" + S), P && (S += "?"), n += S, f += wt.Dynamic, P && (f += wt.BonusOptional), D && (f += wt.BonusRepeatable), v === ".*" && (f += wt.BonusWildcard);
        }
        p.push(f);
      }
      r.push(p);
    }
    if (e.strict && e.end) {
      const h = r.length - 1;
      r[h][r[h].length - 1] += wt.BonusStrict;
    }
    e.strict || (n += "/?"), e.end ? n += "$" : e.strict && !n.endsWith("/") && (n += "(?:/|$)");
    const c = new RegExp(n, e.sensitive ? "" : "i");
    function l(h) {
      const p = h.match(c), w = {};
      if (!p) return null;
      for (let b = 1; b < p.length; b++) {
        const f = p[b] || "", R = o[b - 1];
        w[R.name] = f && R.repeatable ? f.split("/") : f;
      }
      return w;
    }
    function _(h) {
      let p = "", w = false;
      for (const b of i) {
        (!w || !p.endsWith("/")) && (p += "/"), w = false;
        for (const f of b) if (f.type === Jt.Static) p += f.value;
        else if (f.type === Jt.Param) {
          const { value: R, repeatable: D, optional: P } = f, I = R in h ? h[R] : "";
          if (Ct(I) && !D) throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);
          const v = Ct(I) ? I.join("/") : I;
          if (!v) if (P) b.length < 2 && (p.endsWith("/") ? p = p.slice(0, -1) : w = true);
          else throw new Error(`Missing required param "${R}"`);
          p += v;
        }
      }
      return p || "/";
    }
    return {
      re: c,
      score: r,
      keys: o,
      parse: l,
      stringify: _
    };
  }
  function ra(i, t) {
    let e = 0;
    for (; e < i.length && e < t.length; ) {
      const r = t[e] - i[e];
      if (r) return r;
      e++;
    }
    return i.length < t.length ? i.length === 1 && i[0] === wt.Static + wt.Segment ? -1 : 1 : i.length > t.length ? t.length === 1 && t[0] === wt.Static + wt.Segment ? 1 : -1 : 0;
  }
  function ln(i, t) {
    let e = 0;
    const r = i.score, n = t.score;
    for (; e < r.length && e < n.length; ) {
      const o = ra(r[e], n[e]);
      if (o) return o;
      e++;
    }
    if (Math.abs(n.length - r.length) === 1) {
      if (Qr(r)) return 1;
      if (Qr(n)) return -1;
    }
    return n.length - r.length;
  }
  function Qr(i) {
    const t = i[i.length - 1];
    return i.length > 0 && t[t.length - 1] < 0;
  }
  const ia = {
    strict: false,
    end: true,
    sensitive: false
  };
  function na(i, t, e) {
    const r = ea(Zs(i.path), e), n = V(r, {
      record: i,
      parent: t,
      children: [],
      alias: []
    });
    return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
  }
  function sa(i, t) {
    const e = [], r = /* @__PURE__ */ new Map();
    t = Vr(ia, t);
    function n(w) {
      return r.get(w);
    }
    function o(w, b, f) {
      const R = !f, D = $r(w);
      D.aliasOf = f && f.record;
      const P = Vr(t, w), I = [
        D
      ];
      if ("alias" in w) {
        const E = typeof w.alias == "string" ? [
          w.alias
        ] : w.alias;
        for (const yt of E) I.push($r(V({}, D, {
          components: f ? f.record.components : D.components,
          path: yt,
          aliasOf: f ? f.record : D
        })));
      }
      let v, S;
      for (const E of I) {
        const { path: yt } = E;
        if (b && yt[0] !== "/") {
          const bt = b.record.path, tt = bt[bt.length - 1] === "/" ? "" : "/";
          E.path = b.record.path + (yt && tt + yt);
        }
        if (v = na(E, b, P), f ? f.alias.push(v) : (S = S || v, S !== v && S.alias.push(v), R && w.name && !ti(v) && c(w.name)), _n(v) && _(v), D.children) {
          const bt = D.children;
          for (let tt = 0; tt < bt.length; tt++) o(bt[tt], v, f && f.children[tt]);
        }
        f = f || v;
      }
      return S ? () => {
        c(S);
      } : ge;
    }
    function c(w) {
      if (an(w)) {
        const b = r.get(w);
        b && (r.delete(w), e.splice(e.indexOf(b), 1), b.children.forEach(c), b.alias.forEach(c));
      } else {
        const b = e.indexOf(w);
        b > -1 && (e.splice(b, 1), w.record.name && r.delete(w.record.name), w.children.forEach(c), w.alias.forEach(c));
      }
    }
    function l() {
      return e;
    }
    function _(w) {
      const b = ca(w, e);
      e.splice(b, 0, w), w.record.name && !ti(w) && r.set(w.record.name, w);
    }
    function h(w, b) {
      let f, R = {}, D, P;
      if ("name" in w && w.name) {
        if (f = r.get(w.name), !f) throw ce(Z.MATCHER_NOT_FOUND, {
          location: w
        });
        P = f.record.name, R = V(Zr(b.params, f.keys.filter((S) => !S.optional).concat(f.parent ? f.parent.keys.filter((S) => S.optional) : []).map((S) => S.name)), w.params && Zr(w.params, f.keys.map((S) => S.name))), D = f.stringify(R);
      } else if (w.path != null) D = w.path, f = e.find((S) => S.re.test(D)), f && (R = f.parse(D), P = f.record.name);
      else {
        if (f = b.name ? r.get(b.name) : e.find((S) => S.re.test(b.path)), !f) throw ce(Z.MATCHER_NOT_FOUND, {
          location: w,
          currentLocation: b
        });
        P = f.record.name, R = V({}, b.params, w.params), D = f.stringify(R);
      }
      const I = [];
      let v = f;
      for (; v; ) I.unshift(v.record), v = v.parent;
      return {
        name: P,
        path: D,
        params: R,
        matched: I,
        meta: oa(I)
      };
    }
    i.forEach((w) => o(w));
    function p() {
      e.length = 0, r.clear();
    }
    return {
      addRoute: o,
      resolve: h,
      removeRoute: c,
      clearRoutes: p,
      getRoutes: l,
      getRecordMatcher: n
    };
  }
  function Zr(i, t) {
    const e = {};
    for (const r of t) r in i && (e[r] = i[r]);
    return e;
  }
  function $r(i) {
    const t = {
      path: i.path,
      redirect: i.redirect,
      name: i.name,
      meta: i.meta || {},
      aliasOf: i.aliasOf,
      beforeEnter: i.beforeEnter,
      props: aa(i),
      children: i.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in i ? i.components || null : i.component && {
        default: i.component
      }
    };
    return Object.defineProperty(t, "mods", {
      value: {}
    }), t;
  }
  function aa(i) {
    const t = {}, e = i.props || false;
    if ("component" in i) t.default = e;
    else for (const r in i.components) t[r] = typeof e == "object" ? e[r] : e;
    return t;
  }
  function ti(i) {
    for (; i; ) {
      if (i.record.aliasOf) return true;
      i = i.parent;
    }
    return false;
  }
  function oa(i) {
    return i.reduce((t, e) => V(t, e.meta), {});
  }
  function ca(i, t) {
    let e = 0, r = t.length;
    for (; e !== r; ) {
      const o = e + r >> 1;
      ln(i, t[o]) < 0 ? r = o : e = o + 1;
    }
    const n = la(i);
    return n && (r = t.lastIndexOf(n, r - 1)), r;
  }
  function la(i) {
    let t = i;
    for (; t = t.parent; ) if (_n(t) && ln(i, t) === 0) return t;
  }
  function _n({ record: i }) {
    return !!(i.name || i.components && Object.keys(i.components).length || i.redirect);
  }
  function ei(i) {
    const t = ie(Dr), e = ie(Tr), r = ut(() => {
      const _ = ft(i.to);
      return t.resolve(_);
    }), n = ut(() => {
      const { matched: _ } = r.value, { length: h } = _, p = _[h - 1], w = e.matched;
      if (!p || !w.length) return -1;
      const b = w.findIndex(oe.bind(null, p));
      if (b > -1) return b;
      const f = ri(_[h - 2]);
      return h > 1 && ri(p) === f && w[w.length - 1].path !== f ? w.findIndex(oe.bind(null, _[h - 2])) : b;
    }), o = ut(() => n.value > -1 && ua(e.params, r.value.params)), c = ut(() => n.value > -1 && n.value === e.matched.length - 1 && sn(e.params, r.value.params));
    function l(_ = {}) {
      if (wa(_)) {
        const h = t[ft(i.replace) ? "replace" : "push"](ft(i.to)).catch(ge);
        return i.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: ut(() => r.value.href),
      isActive: o,
      isExactActive: c,
      navigate: l
    };
  }
  function _a(i) {
    return i.length === 1 ? i[0] : i;
  }
  const da = Vi({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [
          String,
          Object
        ],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      },
      viewTransition: Boolean
    },
    useLink: ei,
    setup(i, { slots: t }) {
      const e = Mn(ei(i)), { options: r } = ie(Dr), n = ut(() => ({
        [ii(i.activeClass, r.linkActiveClass, "router-link-active")]: e.isActive,
        [ii(i.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: e.isExactActive
      }));
      return () => {
        const o = t.default && _a(t.default(e));
        return i.custom ? o : Wi("a", {
          "aria-current": e.isExactActive ? i.ariaCurrentValue : null,
          href: e.href,
          onClick: e.navigate,
          class: n.value
        }, o);
      };
    }
  }), ha = da;
  function wa(i) {
    if (!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey) && !i.defaultPrevented && !(i.button !== void 0 && i.button !== 0)) {
      if (i.currentTarget && i.currentTarget.getAttribute) {
        const t = i.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return i.preventDefault && i.preventDefault(), true;
    }
  }
  function ua(i, t) {
    for (const e in t) {
      const r = t[e], n = i[e];
      if (typeof r == "string") {
        if (r !== n) return false;
      } else if (!Ct(n) || n.length !== r.length || r.some((o, c) => o !== n[c])) return false;
    }
    return true;
  }
  function ri(i) {
    return i ? i.aliasOf ? i.aliasOf.path : i.path : "";
  }
  const ii = (i, t, e) => i ?? t ?? e, pa = Vi({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(i, { attrs: t, slots: e }) {
      const r = ie(vr), n = ut(() => i.route || r.value), o = ie(qr, 0), c = ut(() => {
        let h = ft(o);
        const { matched: p } = n.value;
        let w;
        for (; (w = p[h]) && !w.components; ) h++;
        return h;
      }), l = ut(() => n.value.matched[c.value]);
      tr(qr, ut(() => c.value + 1)), tr(Vs, l), tr(vr, n);
      const _ = $();
      return Ui(() => [
        _.value,
        l.value,
        i.name
      ], ([h, p, w], [b, f, R]) => {
        p && (p.instances[w] = h, f && f !== p && h && h === b && (p.leaveGuards.size || (p.leaveGuards = f.leaveGuards), p.updateGuards.size || (p.updateGuards = f.updateGuards))), h && p && (!f || !oe(p, f) || !b) && (p.enterCallbacks[w] || []).forEach((D) => D(h));
      }, {
        flush: "post"
      }), () => {
        const h = n.value, p = i.name, w = l.value, b = w && w.components[p];
        if (!b) return ni(e.default, {
          Component: b,
          route: h
        });
        const f = w.props[p], R = f ? f === true ? h.params : typeof f == "function" ? f(h) : f : null, P = Wi(b, V({}, R, t, {
          onVnodeUnmounted: (I) => {
            I.component.isUnmounted && (w.instances[p] = null);
          },
          ref: _
        }));
        return ni(e.default, {
          Component: P,
          route: h
        }) || P;
      };
    }
  });
  function ni(i, t) {
    if (!i) return null;
    const e = i(t);
    return e.length === 1 ? e[0] : e;
  }
  const ga = pa;
  function ba(i) {
    const t = sa(i.routes, i), e = i.parseQuery || Hs, r = i.stringifyQuery || Kr, n = i.history, o = ue(), c = ue(), l = ue(), _ = kn(Ot);
    let h = Ot;
    ee && i.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const p = er.bind(null, (m) => "" + m), w = er.bind(null, Cs), b = er.bind(null, fe);
    function f(m, y) {
      let C, T;
      return an(m) ? (C = t.getRecordMatcher(m), T = y) : T = m, t.addRoute(T, C);
    }
    function R(m) {
      const y = t.getRecordMatcher(m);
      y && t.removeRoute(y);
    }
    function D() {
      return t.getRoutes().map((m) => m.record);
    }
    function P(m) {
      return !!t.getRecordMatcher(m);
    }
    function I(m, y) {
      if (y = V({}, y || _.value), typeof m == "string") {
        const L = rr(e, m, y.path), nt = t.resolve({
          path: L.path
        }, y), we = n.createHref(L.fullPath);
        return V(L, nt, {
          params: b(nt.params),
          hash: fe(L.hash),
          redirectedFrom: void 0,
          href: we
        });
      }
      let C;
      if (m.path != null) C = V({}, m, {
        path: rr(e, m.path, y.path).path
      });
      else {
        const L = V({}, m.params);
        for (const nt in L) L[nt] == null && delete L[nt];
        C = V({}, m, {
          params: w(L)
        }), y.params = w(y.params);
      }
      const T = t.resolve(C, y), H = m.hash || "";
      T.params = p(b(T.params));
      const Y = As(r, V({}, m, {
        hash: vs(H),
        path: T.path
      })), B = n.createHref(Y);
      return V({
        fullPath: Y,
        hash: H,
        query: r === Kr ? Gs(m.query) : m.query || {}
      }, T, {
        redirectedFrom: void 0,
        href: B
      });
    }
    function v(m) {
      return typeof m == "string" ? rr(e, m, _.value.path) : V({}, m);
    }
    function S(m, y) {
      if (h !== m) return ce(Z.NAVIGATION_CANCELLED, {
        from: y,
        to: m
      });
    }
    function E(m) {
      return tt(m);
    }
    function yt(m) {
      return E(V(v(m), {
        replace: true
      }));
    }
    function bt(m, y) {
      const C = m.matched[m.matched.length - 1];
      if (C && C.redirect) {
        const { redirect: T } = C;
        let H = typeof T == "function" ? T(m, y) : T;
        return typeof H == "string" && (H = H.includes("?") || H.includes("#") ? H = v(H) : {
          path: H
        }, H.params = {}), V({
          query: m.query,
          hash: m.hash,
          params: H.path != null ? {} : m.params
        }, H);
      }
    }
    function tt(m, y) {
      const C = h = I(m), T = _.value, H = m.state, Y = m.force, B = m.replace === true, L = bt(C, T);
      if (L) return tt(V(v(L), {
        state: typeof L == "object" ? V({}, H, L.state) : H,
        force: Y,
        replace: B
      }), y || C);
      const nt = C;
      nt.redirectedFrom = y;
      let we;
      return !Y && Ps(r, T, C) && (we = ce(Z.NAVIGATION_DUPLICATED, {
        to: nt,
        from: T
      }), he(T, T, true, false)), (we ? Promise.resolve(we) : jt(nt, T)).catch((mt) => Dt(mt) ? Dt(mt, Z.NAVIGATION_GUARD_REDIRECT) ? mt : vt(mt) : de(mt, nt, T)).then((mt) => {
        if (mt) {
          if (Dt(mt, Z.NAVIGATION_GUARD_REDIRECT)) return tt(V({
            replace: B
          }, v(mt.to), {
            state: typeof mt.to == "object" ? V({}, H, mt.to.state) : H,
            force: Y
          }), y || nt);
        } else mt = It(nt, T, true, B, H);
        return Lt(nt, T, mt), mt;
      });
    }
    function Nt(m, y) {
      const C = S(m, y);
      return C ? Promise.reject(C) : Promise.resolve();
    }
    function Et(m) {
      const y = x.values().next().value;
      return y && typeof y.runWithContext == "function" ? y.runWithContext(m) : m();
    }
    function jt(m, y) {
      let C;
      const [T, H, Y] = Ws(m, y);
      C = nr(T.reverse(), "beforeRouteLeave", m, y);
      for (const L of T) L.leaveGuards.forEach((nt) => {
        C.push(Gt(nt, m, y));
      });
      const B = Nt.bind(null, m, y);
      return C.push(B), j(C).then(() => {
        C = [];
        for (const L of o.list()) C.push(Gt(L, m, y));
        return C.push(B), j(C);
      }).then(() => {
        C = nr(H, "beforeRouteUpdate", m, y);
        for (const L of H) L.updateGuards.forEach((nt) => {
          C.push(Gt(nt, m, y));
        });
        return C.push(B), j(C);
      }).then(() => {
        C = [];
        for (const L of Y) if (L.beforeEnter) if (Ct(L.beforeEnter)) for (const nt of L.beforeEnter) C.push(Gt(nt, m, y));
        else C.push(Gt(L.beforeEnter, m, y));
        return C.push(B), j(C);
      }).then(() => (m.matched.forEach((L) => L.enterCallbacks = {}), C = nr(Y, "beforeRouteEnter", m, y, Et), C.push(B), j(C))).then(() => {
        C = [];
        for (const L of c.list()) C.push(Gt(L, m, y));
        return C.push(B), j(C);
      }).catch((L) => Dt(L, Z.NAVIGATION_CANCELLED) ? L : Promise.reject(L));
    }
    function Lt(m, y, C) {
      l.list().forEach((T) => Et(() => T(m, y, C)));
    }
    function It(m, y, C, T, H) {
      const Y = S(m, y);
      if (Y) return Y;
      const B = y === Ot, L = ee ? history.state : {};
      C && (T || B ? n.replace(m.fullPath, V({
        scroll: B && L && L.scroll
      }, H)) : n.push(m.fullPath, H)), _.value = m, he(m, y, C, B), vt();
    }
    let Bt;
    function xe() {
      Bt || (Bt = n.listen((m, y, C) => {
        if (!k.listening) return;
        const T = I(m), H = bt(T, k.currentRoute.value);
        if (H) {
          tt(V(H, {
            replace: true,
            force: true
          }), T).catch(ge);
          return;
        }
        h = T;
        const Y = _.value;
        ee && Ms(Jr(Y.fullPath, C.delta), Be()), jt(T, Y).catch((B) => Dt(B, Z.NAVIGATION_ABORTED | Z.NAVIGATION_CANCELLED) ? B : Dt(B, Z.NAVIGATION_GUARD_REDIRECT) ? (tt(V(v(B.to), {
          force: true
        }), T).then((L) => {
          Dt(L, Z.NAVIGATION_ABORTED | Z.NAVIGATION_DUPLICATED) && !C.delta && C.type === fr.pop && n.go(-1, false);
        }).catch(ge), Promise.reject()) : (C.delta && n.go(-C.delta, false), de(B, T, Y))).then((B) => {
          B = B || It(T, Y, false), B && (C.delta && !Dt(B, Z.NAVIGATION_CANCELLED) ? n.go(-C.delta, false) : C.type === fr.pop && Dt(B, Z.NAVIGATION_ABORTED | Z.NAVIGATION_DUPLICATED) && n.go(-1, false)), Lt(T, Y, B);
        }).catch(ge);
      }));
    }
    let le = ue(), _e = ue(), Zt;
    function de(m, y, C) {
      vt(m);
      const T = _e.list();
      return T.length ? T.forEach((H) => H(m, y, C)) : console.error(m), Promise.reject(m);
    }
    function $e() {
      return Zt && _.value !== Ot ? Promise.resolve() : new Promise((m, y) => {
        le.add([
          m,
          y
        ]);
      });
    }
    function vt(m) {
      return Zt || (Zt = !m, xe(), le.list().forEach(([y, C]) => m ? C(m) : y()), le.reset()), m;
    }
    function he(m, y, C, T) {
      const { scrollBehavior: H } = i;
      if (!ee || !H) return Promise.resolve();
      const Y = !C && Ns(Jr(m.fullPath, 0)) || (T || !C) && history.state && history.state.scroll || null;
      return Ji().then(() => H(m, y, Y)).then((B) => B && ks(B)).catch((B) => de(B, m, y));
    }
    const $t = (m) => n.go(m);
    let Ut;
    const x = /* @__PURE__ */ new Set(), k = {
      currentRoute: _,
      listening: true,
      addRoute: f,
      removeRoute: R,
      clearRoutes: t.clearRoutes,
      hasRoute: P,
      getRoutes: D,
      resolve: I,
      options: i,
      push: E,
      replace: yt,
      go: $t,
      back: () => $t(-1),
      forward: () => $t(1),
      beforeEach: o.add,
      beforeResolve: c.add,
      afterEach: l.add,
      onError: _e.add,
      isReady: $e,
      install(m) {
        m.component("RouterLink", ha), m.component("RouterView", ga), m.config.globalProperties.$router = k, Object.defineProperty(m.config.globalProperties, "$route", {
          enumerable: true,
          get: () => ft(_)
        }), ee && !Ut && _.value === Ot && (Ut = true, E(n.location).catch((T) => {
        }));
        const y = {};
        for (const T in Ot) Object.defineProperty(y, T, {
          get: () => _.value[T],
          enumerable: true
        });
        m.provide(Dr, k), m.provide(Tr, gr(y)), m.provide(vr, _);
        const C = m.unmount;
        x.add(m), m.unmount = function() {
          x.delete(m), x.size < 1 && (h = Ot, Bt && Bt(), Bt = null, _.value = Ot, Ut = false, Zt = false), C();
        };
      }
    };
    function j(m) {
      return m.reduce((y, C) => y.then(() => Et(C)), Promise.resolve());
    }
    return k;
  }
  function ma(i) {
    return ie(Tr);
  }
  const fa = "" + new URL("rapier_wasm3d_bg-Dy_oCesz.wasm", import.meta.url).href, ya = async (i = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") n = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const o = atob(r);
        n = new Uint8Array(o.length);
        for (let c = 0; c < o.length; c++) n[c] = o.charCodeAt(c);
      } else throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(n, i);
    } else {
      const r = await fetch(t), n = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && n.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(r, i);
      else {
        const o = await r.arrayBuffer();
        e = await WebAssembly.instantiate(o, i);
      }
    }
    return e.instance.exports;
  };
  let s;
  function va(i) {
    s = i;
  }
  const G = new Array(128).fill(void 0);
  G.push(void 0, null, true, false);
  function O(i) {
    return G[i];
  }
  let be = G.length;
  function J(i) {
    be === G.length && G.push(G.length + 1);
    const t = be;
    return be = G[t], G[t] = i, t;
  }
  function Oe(i, t) {
    try {
      return i.apply(this, t);
    } catch (e) {
      s.__wbindgen_export_0(J(e));
    }
  }
  const Ra = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let dn = new Ra("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  dn.decode();
  let Ae = null;
  function Sa() {
    return (Ae === null || Ae.byteLength === 0) && (Ae = new Uint8Array(s.memory.buffer)), Ae;
  }
  function hn(i, t) {
    return i = i >>> 0, dn.decode(Sa().subarray(i, i + t));
  }
  function F(i) {
    return i == null;
  }
  let te = null;
  function ct() {
    return (te === null || te.buffer.detached === true || te.buffer.detached === void 0 && te.buffer !== s.memory.buffer) && (te = new DataView(s.memory.buffer)), te;
  }
  function Ca(i) {
    i < 132 || (G[i] = be, be = i);
  }
  function ye(i) {
    const t = O(i);
    return Ca(i), t;
  }
  function d(i, t) {
    if (!(i instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  let U = 128;
  function X(i) {
    if (U == 1) throw new Error("out of js stack");
    return G[--U] = i, U;
  }
  let Pe = null;
  function Ea() {
    return (Pe === null || Pe.byteLength === 0) && (Pe = new Int32Array(s.memory.buffer)), Pe;
  }
  function xa(i, t) {
    return i = i >>> 0, Ea().subarray(i / 4, i / 4 + t);
  }
  let je = null;
  function wn() {
    return (je === null || je.byteLength === 0) && (je = new Float32Array(s.memory.buffer)), je;
  }
  function si(i, t) {
    return i = i >>> 0, wn().subarray(i / 4, i / 4 + t);
  }
  let Ie = null;
  function un() {
    return (Ie === null || Ie.byteLength === 0) && (Ie = new Uint32Array(s.memory.buffer)), Ie;
  }
  function Aa(i, t) {
    return i = i >>> 0, un().subarray(i / 4, i / 4 + t);
  }
  let ht = 0;
  function pe(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return un().set(i, e / 4), ht = i.length, e;
  }
  function Ht(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return wn().set(i, e / 4), ht = i.length, e;
  }
  const He = Object.freeze({
    LinX: 0,
    0: "LinX",
    LinY: 1,
    1: "LinY",
    LinZ: 2,
    2: "LinZ",
    AngX: 3,
    3: "AngX",
    AngY: 4,
    4: "AngY",
    AngZ: 5,
    5: "AngZ"
  }), St = Object.freeze({
    Revolute: 0,
    0: "Revolute",
    Fixed: 1,
    1: "Fixed",
    Prismatic: 2,
    2: "Prismatic",
    Rope: 3,
    3: "Rope",
    Spring: 4,
    4: "Spring",
    Spherical: 5,
    5: "Spherical",
    Generic: 6,
    6: "Generic"
  }), ot = Object.freeze({
    Ball: 0,
    0: "Ball",
    Cuboid: 1,
    1: "Cuboid",
    Capsule: 2,
    2: "Capsule",
    Segment: 3,
    3: "Segment",
    Polyline: 4,
    4: "Polyline",
    Triangle: 5,
    5: "Triangle",
    TriMesh: 6,
    6: "TriMesh",
    HeightField: 7,
    7: "HeightField",
    Compound: 8,
    8: "Compound",
    ConvexPolyhedron: 9,
    9: "ConvexPolyhedron",
    Cylinder: 10,
    10: "Cylinder",
    Cone: 11,
    11: "Cone",
    RoundCuboid: 12,
    12: "RoundCuboid",
    RoundTriangle: 13,
    13: "RoundTriangle",
    RoundCylinder: 14,
    14: "RoundCylinder",
    RoundCone: 15,
    15: "RoundCone",
    RoundConvexPolyhedron: 16,
    16: "RoundConvexPolyhedron",
    HalfSpace: 17,
    17: "HalfSpace",
    Voxels: 18,
    18: "Voxels"
  }), sr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawbroadphase_free(i >>> 0, 1));
  class zt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zt.prototype);
      return e.__wbg_ptr = t, sr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, sr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawbroadphase_free(t, 0);
    }
    constructor() {
      const t = s.rawbroadphase_new();
      return this.__wbg_ptr = t >>> 0, sr.register(this, this.__wbg_ptr, this), this;
    }
    castRay(t, e, r, n, o, c, l, _, h, p, w, b) {
      try {
        d(t, rt), d(e, K), d(r, Q), d(n, u), d(o, u);
        const f = s.rawbroadphase_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, l, _, F(h) ? 4294967297 : h >>> 0, !F(p), F(p) ? 0 : p, !F(w), F(w) ? 0 : w, X(b));
        return f === 0 ? void 0 : Nr.__wrap(f);
      } finally {
        G[U++] = void 0;
      }
    }
    castRayAndGetNormal(t, e, r, n, o, c, l, _, h, p, w, b) {
      try {
        d(t, rt), d(e, K), d(r, Q), d(n, u), d(o, u);
        const f = s.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, l, _, F(h) ? 4294967297 : h >>> 0, !F(p), F(p) ? 0 : p, !F(w), F(w) ? 0 : w, X(b));
        return f === 0 ? void 0 : We.__wrap(f);
      } finally {
        G[U++] = void 0;
      }
    }
    intersectionsWithRay(t, e, r, n, o, c, l, _, h, p, w, b, f) {
      try {
        d(t, rt), d(e, K), d(r, Q), d(n, u), d(o, u), s.rawbroadphase_intersectionsWithRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, l, X(_), h, F(p) ? 4294967297 : p >>> 0, !F(w), F(w) ? 0 : w, !F(b), F(b) ? 0 : b, X(f));
      } finally {
        G[U++] = void 0, G[U++] = void 0;
      }
    }
    intersectionWithShape(t, e, r, n, o, c, l, _, h, p, w) {
      try {
        const R = s.__wbindgen_add_to_stack_pointer(-16);
        d(t, rt), d(e, K), d(r, Q), d(n, u), d(o, N), d(c, z), s.rawbroadphase_intersectionWithShape(R, this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l, F(_) ? 4294967297 : _ >>> 0, !F(h), F(h) ? 0 : h, !F(p), F(p) ? 0 : p, X(w));
        var b = ct().getInt32(R + 0, true), f = ct().getFloat64(R + 8, true);
        return b === 0 ? void 0 : f;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16), G[U++] = void 0;
      }
    }
    projectPoint(t, e, r, n, o, c, l, _, h, p) {
      try {
        d(t, rt), d(e, K), d(r, Q), d(n, u);
        const w = s.rawbroadphase_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c, F(l) ? 4294967297 : l >>> 0, !F(_), F(_) ? 0 : _, !F(h), F(h) ? 0 : h, X(p));
        return w === 0 ? void 0 : De.__wrap(w);
      } finally {
        G[U++] = void 0;
      }
    }
    projectPointAndGetFeature(t, e, r, n, o, c, l, _, h) {
      try {
        d(t, rt), d(e, K), d(r, Q), d(n, u);
        const p = s.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, F(c) ? 4294967297 : c >>> 0, !F(l), F(l) ? 0 : l, !F(_), F(_) ? 0 : _, X(h));
        return p === 0 ? void 0 : De.__wrap(p);
      } finally {
        G[U++] = void 0;
      }
    }
    intersectionsWithPoint(t, e, r, n, o, c, l, _, h, p) {
      try {
        d(t, rt), d(e, K), d(r, Q), d(n, u), s.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, X(o), c, F(l) ? 4294967297 : l >>> 0, !F(_), F(_) ? 0 : _, !F(h), F(h) ? 0 : h, X(p));
      } finally {
        G[U++] = void 0, G[U++] = void 0;
      }
    }
    castShape(t, e, r, n, o, c, l, _, h, p, w, b, f, R, D) {
      try {
        d(t, rt), d(e, K), d(r, Q), d(n, u), d(o, N), d(c, u), d(l, z);
        const P = s.rawbroadphase_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, p, w, F(b) ? 4294967297 : b >>> 0, !F(f), F(f) ? 0 : f, !F(R), F(R) ? 0 : R, X(D));
        return P === 0 ? void 0 : Ge.__wrap(P);
      } finally {
        G[U++] = void 0;
      }
    }
    intersectionsWithShape(t, e, r, n, o, c, l, _, h, p, w, b) {
      try {
        d(t, rt), d(e, K), d(r, Q), d(n, u), d(o, N), d(c, z), s.rawbroadphase_intersectionsWithShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, X(l), _, F(h) ? 4294967297 : h >>> 0, !F(p), F(p) ? 0 : p, !F(w), F(w) ? 0 : w, X(b));
      } finally {
        G[U++] = void 0, G[U++] = void 0;
      }
    }
    collidersWithAabbIntersectingAabb(t, e, r, n, o, c) {
      try {
        d(t, rt), d(e, K), d(r, Q), d(n, u), d(o, u), s.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, X(c));
      } finally {
        G[U++] = void 0;
      }
    }
  }
  const ai = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawccdsolver_free(i >>> 0, 1));
  class Rr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ai.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawccdsolver_free(t, 0);
    }
    constructor() {
      const t = s.rawccdsolver_new();
      return this.__wbg_ptr = t >>> 0, ai.register(this, this.__wbg_ptr, this), this;
    }
  }
  const oi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcharactercollision_free(i >>> 0, 1));
  class pn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, oi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcharactercollision_free(t, 0);
    }
    constructor() {
      const t = s.rawcharactercollision_new();
      return this.__wbg_ptr = t >>> 0, oi.register(this, this.__wbg_ptr, this), this;
    }
    handle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    translationDeltaApplied() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return u.__wrap(t);
    }
    translationDeltaRemaining() {
      const t = s.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
      return u.__wrap(t);
    }
    toi() {
      return s.rawcharactercollision_toi(this.__wbg_ptr);
    }
    worldWitness1() {
      const t = s.rawcharactercollision_worldWitness1(this.__wbg_ptr);
      return u.__wrap(t);
    }
    worldWitness2() {
      const t = s.rawcharactercollision_worldWitness2(this.__wbg_ptr);
      return u.__wrap(t);
    }
    worldNormal1() {
      const t = s.rawcharactercollision_worldNormal1(this.__wbg_ptr);
      return u.__wrap(t);
    }
    worldNormal2() {
      const t = s.rawcharactercollision_worldNormal2(this.__wbg_ptr);
      return u.__wrap(t);
    }
  }
  const ar = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcolliderset_free(i >>> 0, 1));
  class Q {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Q.prototype);
      return e.__wbg_ptr = t, ar.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ar.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcolliderset_free(t, 0);
    }
    coTranslation(t) {
      const e = s.rawcolliderset_coTranslation(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    coRotation(t) {
      const e = s.rawcolliderset_coRotation(this.__wbg_ptr, t);
      return N.__wrap(e);
    }
    coTranslationWrtParent(t) {
      const e = s.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    coRotationWrtParent(t) {
      const e = s.rawcolliderset_coRotationWrtParent(this.__wbg_ptr, t);
      return e === 0 ? void 0 : N.__wrap(e);
    }
    coSetTranslation(t, e, r, n) {
      s.rawcolliderset_coSetTranslation(this.__wbg_ptr, t, e, r, n);
    }
    coSetTranslationWrtParent(t, e, r, n) {
      s.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, t, e, r, n);
    }
    coSetRotation(t, e, r, n, o) {
      s.rawcolliderset_coSetRotation(this.__wbg_ptr, t, e, r, n, o);
    }
    coSetRotationWrtParent(t, e, r, n, o) {
      s.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, t, e, r, n, o);
    }
    coIsSensor(t) {
      return s.rawcolliderset_coIsSensor(this.__wbg_ptr, t) !== 0;
    }
    coShapeType(t) {
      return s.rawcolliderset_coShapeType(this.__wbg_ptr, t);
    }
    coHalfspaceNormal(t) {
      const e = s.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    coHalfExtents(t) {
      const e = s.rawcolliderset_coHalfExtents(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    coSetHalfExtents(t, e) {
      d(e, u), s.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    coRadius(t) {
      const e = s.rawcolliderset_coRadius(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coSetRadius(t, e) {
      s.rawcolliderset_coSetRadius(this.__wbg_ptr, t, e);
    }
    coHalfHeight(t) {
      const e = s.rawcolliderset_coHalfHeight(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coSetHalfHeight(t, e) {
      s.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, t, e);
    }
    coRoundRadius(t) {
      const e = s.rawcolliderset_coRoundRadius(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coSetRoundRadius(t, e) {
      s.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, t, e);
    }
    coVoxelData(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coVoxelData(n, this.__wbg_ptr, t);
        var e = ct().getInt32(n + 0, true), r = ct().getInt32(n + 4, true);
        let o;
        return e !== 0 && (o = xa(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coVoxelSize(t) {
      const e = s.rawcolliderset_coVoxelSize(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    coSetVoxel(t, e, r, n, o) {
      s.rawcolliderset_coSetVoxel(this.__wbg_ptr, t, e, r, n, o);
    }
    coPropagateVoxelChange(t, e, r, n, o, c, l, _) {
      s.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr, t, e, r, n, o, c, l, _);
    }
    coCombineVoxelStates(t, e, r, n, o) {
      s.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr, t, e, r, n, o);
    }
    coVertices(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coVertices(n, this.__wbg_ptr, t);
        var e = ct().getInt32(n + 0, true), r = ct().getInt32(n + 4, true);
        let o;
        return e !== 0 && (o = si(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coIndices(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coIndices(n, this.__wbg_ptr, t);
        var e = ct().getInt32(n + 0, true), r = ct().getInt32(n + 4, true);
        let o;
        return e !== 0 && (o = Aa(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coTriMeshFlags(t) {
      const e = s.rawcolliderset_coTriMeshFlags(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coHeightFieldFlags(t) {
      const e = s.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coHeightfieldHeights(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coHeightfieldHeights(n, this.__wbg_ptr, t);
        var e = ct().getInt32(n + 0, true), r = ct().getInt32(n + 4, true);
        let o;
        return e !== 0 && (o = si(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coHeightfieldScale(t) {
      const e = s.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    coHeightfieldNRows(t) {
      const e = s.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coHeightfieldNCols(t) {
      const e = s.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coParent(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coParent(n, this.__wbg_ptr, t);
        var e = ct().getInt32(n + 0, true), r = ct().getFloat64(n + 8, true);
        return e === 0 ? void 0 : r;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coSetEnabled(t, e) {
      s.rawcolliderset_coSetEnabled(this.__wbg_ptr, t, e);
    }
    coIsEnabled(t) {
      return s.rawcolliderset_coIsEnabled(this.__wbg_ptr, t) !== 0;
    }
    coSetContactSkin(t, e) {
      s.rawcolliderset_coSetContactSkin(this.__wbg_ptr, t, e);
    }
    coContactSkin(t) {
      return s.rawcolliderset_coContactSkin(this.__wbg_ptr, t);
    }
    coFriction(t) {
      return s.rawcolliderset_coFriction(this.__wbg_ptr, t);
    }
    coRestitution(t) {
      return s.rawcolliderset_coRestitution(this.__wbg_ptr, t);
    }
    coDensity(t) {
      return s.rawcolliderset_coDensity(this.__wbg_ptr, t);
    }
    coMass(t) {
      return s.rawcolliderset_coMass(this.__wbg_ptr, t);
    }
    coVolume(t) {
      return s.rawcolliderset_coVolume(this.__wbg_ptr, t);
    }
    coCollisionGroups(t) {
      return s.rawcolliderset_coCollisionGroups(this.__wbg_ptr, t) >>> 0;
    }
    coSolverGroups(t) {
      return s.rawcolliderset_coSolverGroups(this.__wbg_ptr, t) >>> 0;
    }
    coActiveHooks(t) {
      return s.rawcolliderset_coActiveHooks(this.__wbg_ptr, t) >>> 0;
    }
    coActiveCollisionTypes(t) {
      return s.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, t);
    }
    coActiveEvents(t) {
      return s.rawcolliderset_coActiveEvents(this.__wbg_ptr, t) >>> 0;
    }
    coContactForceEventThreshold(t) {
      return s.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, t);
    }
    coContainsPoint(t, e) {
      return d(e, u), s.rawcolliderset_coContainsPoint(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
    coCastShape(t, e, r, n, o, c, l, _, h) {
      d(e, u), d(r, z), d(n, u), d(o, N), d(c, u);
      const p = s.rawcolliderset_coCastShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l, _, h);
      return p === 0 ? void 0 : Je.__wrap(p);
    }
    coCastCollider(t, e, r, n, o, c, l) {
      d(e, u), d(n, u);
      const _ = s.rawcolliderset_coCastCollider(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o, c, l);
      return _ === 0 ? void 0 : Ge.__wrap(_);
    }
    coIntersectsShape(t, e, r, n) {
      return d(e, z), d(r, u), d(n, N), s.rawcolliderset_coIntersectsShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr) !== 0;
    }
    coContactShape(t, e, r, n, o) {
      d(e, z), d(r, u), d(n, N);
      const c = s.rawcolliderset_coContactShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o);
      return c === 0 ? void 0 : ve.__wrap(c);
    }
    coContactCollider(t, e, r) {
      const n = s.rawcolliderset_coContactCollider(this.__wbg_ptr, t, e, r);
      return n === 0 ? void 0 : ve.__wrap(n);
    }
    coProjectPoint(t, e, r) {
      d(e, u);
      const n = s.rawcolliderset_coProjectPoint(this.__wbg_ptr, t, e.__wbg_ptr, r);
      return Ve.__wrap(n);
    }
    coIntersectsRay(t, e, r, n) {
      return d(e, u), d(r, u), s.rawcolliderset_coIntersectsRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n) !== 0;
    }
    coCastRay(t, e, r, n, o) {
      return d(e, u), d(r, u), s.rawcolliderset_coCastRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, o);
    }
    coCastRayAndGetNormal(t, e, r, n, o) {
      d(e, u), d(r, u);
      const c = s.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, o);
      return c === 0 ? void 0 : Ue.__wrap(c);
    }
    coSetSensor(t, e) {
      s.rawcolliderset_coSetSensor(this.__wbg_ptr, t, e);
    }
    coSetRestitution(t, e) {
      s.rawcolliderset_coSetRestitution(this.__wbg_ptr, t, e);
    }
    coSetFriction(t, e) {
      s.rawcolliderset_coSetFriction(this.__wbg_ptr, t, e);
    }
    coFrictionCombineRule(t) {
      return s.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, t) >>> 0;
    }
    coSetFrictionCombineRule(t, e) {
      s.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, t, e);
    }
    coRestitutionCombineRule(t) {
      return s.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, t) >>> 0;
    }
    coSetRestitutionCombineRule(t, e) {
      s.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, t, e);
    }
    coSetCollisionGroups(t, e) {
      s.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, t, e);
    }
    coSetSolverGroups(t, e) {
      s.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, t, e);
    }
    coSetActiveHooks(t, e) {
      s.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, t, e);
    }
    coSetActiveEvents(t, e) {
      s.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, t, e);
    }
    coSetActiveCollisionTypes(t, e) {
      s.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, t, e);
    }
    coSetShape(t, e) {
      d(e, z), s.rawcolliderset_coSetShape(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    coSetContactForceEventThreshold(t, e) {
      s.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, t, e);
    }
    coSetDensity(t, e) {
      s.rawcolliderset_coSetDensity(this.__wbg_ptr, t, e);
    }
    coSetMass(t, e) {
      s.rawcolliderset_coSetMass(this.__wbg_ptr, t, e);
    }
    coSetMassProperties(t, e, r, n, o) {
      d(r, u), d(n, u), d(o, N), s.rawcolliderset_coSetMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr);
    }
    constructor() {
      const t = s.rawcolliderset_new();
      return this.__wbg_ptr = t >>> 0, ar.register(this, this.__wbg_ptr, this), this;
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    createCollider(t, e, r, n, o, c, l, _, h, p, w, b, f, R, D, P, I, v, S, E, yt, bt, tt, Nt, Et) {
      try {
        const It = s.__wbindgen_add_to_stack_pointer(-16);
        d(e, z), d(r, u), d(n, N), d(l, u), d(_, u), d(h, N), d(Et, K), s.rawcolliderset_createCollider(It, this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, p, w, b, f, R, D, P, I, v, S, E, yt, bt, tt, Nt, Et.__wbg_ptr);
        var jt = ct().getInt32(It + 0, true), Lt = ct().getFloat64(It + 8, true);
        return jt === 0 ? void 0 : Lt;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    remove(t, e, r, n) {
      d(e, kt), d(r, K), s.rawcolliderset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    isHandleValid(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachColliderHandle(t) {
      try {
        s.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, X(t));
      } finally {
        G[U++] = void 0;
      }
    }
  }
  const ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcollidershapecasthit_free(i >>> 0, 1));
  class Ge {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ge.prototype);
      return e.__wbg_ptr = t, ci.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ci.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcollidershapecasthit_free(t, 0);
    }
    colliderHandle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    time_of_impact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    witness1() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return u.__wrap(t);
    }
    witness2() {
      const t = s.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return u.__wrap(t);
    }
    normal1() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return u.__wrap(t);
    }
    normal2() {
      const t = s.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
      return u.__wrap(t);
    }
  }
  const li = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactforceevent_free(i >>> 0, 1));
  class zr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zr.prototype);
      return e.__wbg_ptr = t, li.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, li.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactforceevent_free(t, 0);
    }
    collider1() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    collider2() {
      return s.rawcontactforceevent_collider2(this.__wbg_ptr);
    }
    total_force() {
      const t = s.rawcontactforceevent_total_force(this.__wbg_ptr);
      return u.__wrap(t);
    }
    total_force_magnitude() {
      return s.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    max_force_direction() {
      const t = s.rawcontactforceevent_max_force_direction(this.__wbg_ptr);
      return u.__wrap(t);
    }
    max_force_magnitude() {
      return s.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
  }
  const _i = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactmanifold_free(i >>> 0, 1));
  class Fr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Fr.prototype);
      return e.__wbg_ptr = t, _i.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _i.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactmanifold_free(t, 0);
    }
    normal() {
      const t = s.rawcontactmanifold_normal(this.__wbg_ptr);
      return u.__wrap(t);
    }
    local_n1() {
      const t = s.rawcontactmanifold_local_n1(this.__wbg_ptr);
      return u.__wrap(t);
    }
    local_n2() {
      const t = s.rawcontactmanifold_local_n2(this.__wbg_ptr);
      return u.__wrap(t);
    }
    subshape1() {
      return s.rawcontactmanifold_subshape1(this.__wbg_ptr) >>> 0;
    }
    subshape2() {
      return s.rawcontactmanifold_subshape2(this.__wbg_ptr) >>> 0;
    }
    num_contacts() {
      return s.rawcontactmanifold_num_contacts(this.__wbg_ptr) >>> 0;
    }
    contact_local_p1(t) {
      const e = s.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    contact_local_p2(t) {
      const e = s.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    contact_dist(t) {
      return s.rawcontactmanifold_contact_dist(this.__wbg_ptr, t);
    }
    contact_fid1(t) {
      return s.rawcontactmanifold_contact_fid1(this.__wbg_ptr, t) >>> 0;
    }
    contact_fid2(t) {
      return s.rawcontactmanifold_contact_fid2(this.__wbg_ptr, t) >>> 0;
    }
    contact_impulse(t) {
      return s.rawcontactmanifold_contact_impulse(this.__wbg_ptr, t);
    }
    contact_tangent_impulse_x(t) {
      return s.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr, t);
    }
    contact_tangent_impulse_y(t) {
      return s.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr, t);
    }
    num_solver_contacts() {
      return s.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
    }
    solver_contact_point(t) {
      const e = s.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    solver_contact_dist(t) {
      return s.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, t);
    }
    solver_contact_friction(t) {
      return s.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, t);
    }
    solver_contact_restitution(t) {
      return s.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, t);
    }
    solver_contact_tangent_velocity(t) {
      const e = s.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
  }
  const di = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactpair_free(i >>> 0, 1));
  class kr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kr.prototype);
      return e.__wbg_ptr = t, di.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, di.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactpair_free(t, 0);
    }
    collider1() {
      return s.rawcontactpair_collider1(this.__wbg_ptr);
    }
    collider2() {
      return s.rawcontactpair_collider2(this.__wbg_ptr);
    }
    numContactManifolds() {
      return s.rawcontactpair_numContactManifolds(this.__wbg_ptr) >>> 0;
    }
    contactManifold(t) {
      const e = s.rawcontactpair_contactManifold(this.__wbg_ptr, t);
      return e === 0 ? void 0 : Fr.__wrap(e);
    }
  }
  const hi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdebugrenderpipeline_free(i >>> 0, 1));
  class Pa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, hi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdebugrenderpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawdebugrenderpipeline_new();
      return this.__wbg_ptr = t >>> 0, hi.register(this, this.__wbg_ptr, this), this;
    }
    vertices() {
      const t = s.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
      return ye(t);
    }
    colors() {
      const t = s.rawdebugrenderpipeline_colors(this.__wbg_ptr);
      return ye(t);
    }
    render(t, e, r, n, o, c, l) {
      try {
        d(t, K), d(e, Q), d(r, Ft), d(n, Mt), d(o, rt), s.rawdebugrenderpipeline_render(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, X(l));
      } finally {
        G[U++] = void 0;
      }
    }
  }
  const wi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdeserializedworld_free(i >>> 0, 1));
  class Mr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Mr.prototype);
      return e.__wbg_ptr = t, wi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, wi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdeserializedworld_free(t, 0);
    }
    takeGravity() {
      const t = s.rawdeserializedworld_takeGravity(this.__wbg_ptr);
      return t === 0 ? void 0 : u.__wrap(t);
    }
    takeIntegrationParameters() {
      const t = s.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
      return t === 0 ? void 0 : Xt.__wrap(t);
    }
    takeIslandManager() {
      const t = s.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
      return t === 0 ? void 0 : kt.__wrap(t);
    }
    takeBroadPhase() {
      const t = s.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : zt.__wrap(t);
    }
    takeNarrowPhase() {
      const t = s.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : rt.__wrap(t);
    }
    takeBodies() {
      const t = s.rawdeserializedworld_takeBodies(this.__wbg_ptr);
      return t === 0 ? void 0 : K.__wrap(t);
    }
    takeColliders() {
      const t = s.rawdeserializedworld_takeColliders(this.__wbg_ptr);
      return t === 0 ? void 0 : Q.__wrap(t);
    }
    takeImpulseJoints() {
      const t = s.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : Ft.__wrap(t);
    }
    takeMultibodyJoints() {
      const t = s.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : Mt.__wrap(t);
    }
  }
  const ui = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdynamicraycastvehiclecontroller_free(i >>> 0, 1));
  class ja {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ui.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdynamicraycastvehiclecontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawdynamicraycastvehiclecontroller_new(t);
      return this.__wbg_ptr = e >>> 0, ui.register(this, this.__wbg_ptr, this), this;
    }
    current_vehicle_speed() {
      return s.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
    }
    chassis() {
      return s.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr);
    }
    index_up_axis() {
      return s.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    set_index_up_axis(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
    }
    index_forward_axis() {
      return s.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
    }
    set_index_forward_axis(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
    }
    add_wheel(t, e, r, n, o) {
      d(t, u), d(e, u), d(r, u), s.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, o);
    }
    num_wheels() {
      return s.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
    }
    update_vehicle(t, e, r, n, o, c, l, _) {
      try {
        d(e, zt), d(r, rt), d(n, K), d(o, Q), s.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, F(l) ? 4294967297 : l >>> 0, X(_));
      } finally {
        G[U++] = void 0;
      }
    }
    wheel_chassis_connection_point_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    set_wheel_chassis_connection_point_cs(t, e) {
      d(e, u), s.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_suspension_rest_length(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_rest_length(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr, t, e);
    }
    wheel_max_suspension_travel(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_max_suspension_travel(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr, t, e);
    }
    wheel_radius(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_radius(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr, t, e);
    }
    wheel_suspension_stiffness(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_stiffness(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr, t, e);
    }
    wheel_suspension_compression(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_compression(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr, t, e);
    }
    wheel_suspension_relaxation(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_relaxation(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr, t, e);
    }
    wheel_max_suspension_force(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_max_suspension_force(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr, t, e);
    }
    wheel_brake(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_brake(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr, t, e);
    }
    wheel_steering(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_steering(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr, t, e);
    }
    wheel_engine_force(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_engine_force(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr, t, e);
    }
    wheel_direction_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    set_wheel_direction_cs(t, e) {
      d(e, u), s.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_axle_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    set_wheel_axle_cs(t, e) {
      d(e, u), s.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_friction_slip(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_friction_slip(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr, t, e);
    }
    wheel_side_friction_stiffness(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_side_friction_stiffness(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr, t, e);
    }
    wheel_rotation(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_forward_impulse(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_side_impulse(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_suspension_force(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_contact_normal_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    wheel_contact_point_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    wheel_suspension_length(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_hard_point_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    wheel_is_in_contact(t) {
      return s.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr, t) !== 0;
    }
    wheel_ground_object(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawdynamicraycastvehiclecontroller_wheel_ground_object(n, this.__wbg_ptr, t);
        var e = ct().getInt32(n + 0, true), r = ct().getFloat64(n + 8, true);
        return e === 0 ? void 0 : r;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  const pi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_raweventqueue_free(i >>> 0, 1));
  class gn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, pi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_raweventqueue_free(t, 0);
    }
    constructor(t) {
      const e = s.raweventqueue_new(t);
      return this.__wbg_ptr = e >>> 0, pi.register(this, this.__wbg_ptr, this), this;
    }
    drainCollisionEvents(t) {
      try {
        s.raweventqueue_drainCollisionEvents(this.__wbg_ptr, X(t));
      } finally {
        G[U++] = void 0;
      }
    }
    drainContactForceEvents(t) {
      try {
        s.raweventqueue_drainContactForceEvents(this.__wbg_ptr, X(t));
      } finally {
        G[U++] = void 0;
      }
    }
    clear() {
      s.raweventqueue_clear(this.__wbg_ptr);
    }
  }
  const gi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawgenericjoint_free(i >>> 0, 1));
  class lt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(lt.prototype);
      return e.__wbg_ptr = t, gi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawgenericjoint_free(t, 0);
    }
    static generic(t, e, r, n) {
      d(t, u), d(e, u), d(r, u);
      const o = s.rawgenericjoint_generic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return o === 0 ? void 0 : lt.__wrap(o);
    }
    static spring(t, e, r, n, o) {
      d(n, u), d(o, u);
      const c = s.rawgenericjoint_spring(t, e, r, n.__wbg_ptr, o.__wbg_ptr);
      return lt.__wrap(c);
    }
    static rope(t, e, r) {
      d(e, u), d(r, u);
      const n = s.rawgenericjoint_rope(t, e.__wbg_ptr, r.__wbg_ptr);
      return lt.__wrap(n);
    }
    static spherical(t, e) {
      d(t, u), d(e, u);
      const r = s.rawgenericjoint_spherical(t.__wbg_ptr, e.__wbg_ptr);
      return lt.__wrap(r);
    }
    static prismatic(t, e, r, n, o, c) {
      d(t, u), d(e, u), d(r, u);
      const l = s.rawgenericjoint_prismatic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, o, c);
      return l === 0 ? void 0 : lt.__wrap(l);
    }
    static fixed(t, e, r, n) {
      d(t, u), d(e, N), d(r, u), d(n, N);
      const o = s.rawgenericjoint_fixed(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr);
      return lt.__wrap(o);
    }
    static revolute(t, e, r) {
      d(t, u), d(e, u), d(r, u);
      const n = s.rawgenericjoint_revolute(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return n === 0 ? void 0 : lt.__wrap(n);
    }
  }
  const or = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawimpulsejointset_free(i >>> 0, 1));
  class Ft {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ft.prototype);
      return e.__wbg_ptr = t, or.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, or.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawimpulsejointset_free(t, 0);
    }
    jointType(t) {
      return s.rawimpulsejointset_jointType(this.__wbg_ptr, t);
    }
    jointBodyHandle1(t) {
      return s.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, t);
    }
    jointBodyHandle2(t) {
      return s.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, t);
    }
    jointFrameX1(t) {
      const e = s.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, t);
      return N.__wrap(e);
    }
    jointFrameX2(t) {
      const e = s.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, t);
      return N.__wrap(e);
    }
    jointAnchor1(t) {
      const e = s.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    jointAnchor2(t) {
      const e = s.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    jointSetAnchor1(t, e) {
      d(e, u), s.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    jointSetAnchor2(t, e) {
      d(e, u), s.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    jointContactsEnabled(t) {
      return s.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
    }
    jointSetContactsEnabled(t, e) {
      s.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
    }
    jointLimitsEnabled(t, e) {
      return s.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
    }
    jointLimitsMin(t, e) {
      return s.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, t, e);
    }
    jointLimitsMax(t, e) {
      return s.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, t, e);
    }
    jointSetLimits(t, e, r, n) {
      s.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, t, e, r, n);
    }
    jointConfigureMotorModel(t, e, r) {
      s.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, t, e, r);
    }
    jointConfigureMotorVelocity(t, e, r, n) {
      s.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, t, e, r, n);
    }
    jointConfigureMotorPosition(t, e, r, n, o) {
      s.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, t, e, r, n, o);
    }
    jointConfigureMotor(t, e, r, n, o, c) {
      s.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, t, e, r, n, o, c);
    }
    constructor() {
      const t = s.rawimpulsejointset_new();
      return this.__wbg_ptr = t >>> 0, or.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, lt), s.rawimpulsejointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
    }
    remove(t, e) {
      s.rawimpulsejointset_remove(this.__wbg_ptr, t, e);
    }
    len() {
      return s.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawimpulsejointset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        s.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, X(t));
      } finally {
        G[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, X(e));
      } finally {
        G[U++] = void 0;
      }
    }
  }
  const cr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawintegrationparameters_free(i >>> 0, 1));
  class Xt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Xt.prototype);
      return e.__wbg_ptr = t, cr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, cr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawintegrationparameters_free(t, 0);
    }
    constructor() {
      const t = s.rawintegrationparameters_new();
      return this.__wbg_ptr = t >>> 0, cr.register(this, this.__wbg_ptr, this), this;
    }
    get dt() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get contact_erp() {
      return s.rawintegrationparameters_contact_erp(this.__wbg_ptr);
    }
    get normalizedAllowedLinearError() {
      return s.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr);
    }
    get normalizedPredictionDistance() {
      return s.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr);
    }
    get numSolverIterations() {
      return s.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
    }
    get numInternalPgsIterations() {
      return s.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    get minIslandSize() {
      return s.rawintegrationparameters_minIslandSize(this.__wbg_ptr) >>> 0;
    }
    get maxCcdSubsteps() {
      return s.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
    }
    get lengthUnit() {
      return s.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    set dt(t) {
      s.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
    }
    set contact_natural_frequency(t) {
      s.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr, t);
    }
    set normalizedAllowedLinearError(t) {
      s.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr, t);
    }
    set normalizedPredictionDistance(t) {
      s.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, t);
    }
    set numSolverIterations(t) {
      s.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, t);
    }
    set numInternalPgsIterations(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
    }
    set minIslandSize(t) {
      s.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, t);
    }
    set maxCcdSubsteps(t) {
      s.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, t);
    }
    set lengthUnit(t) {
      s.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, t);
    }
  }
  const lr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawislandmanager_free(i >>> 0, 1));
  class kt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kt.prototype);
      return e.__wbg_ptr = t, lr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, lr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawislandmanager_free(t, 0);
    }
    constructor() {
      const t = s.rawislandmanager_new();
      return this.__wbg_ptr = t >>> 0, lr.register(this, this.__wbg_ptr, this), this;
    }
    forEachActiveRigidBodyHandle(t) {
      try {
        s.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, X(t));
      } finally {
        G[U++] = void 0;
      }
    }
  }
  const bi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawkinematiccharactercontroller_free(i >>> 0, 1));
  class Ia {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, bi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawkinematiccharactercontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawkinematiccharactercontroller_new(t);
      return this.__wbg_ptr = e >>> 0, bi.register(this, this.__wbg_ptr, this), this;
    }
    up() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return u.__wrap(t);
    }
    setUp(t) {
      d(t, u), s.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, t.__wbg_ptr);
    }
    normalNudgeFactor() {
      return s.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr);
    }
    setNormalNudgeFactor(t) {
      s.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr, t);
    }
    offset() {
      return s.rawkinematiccharactercontroller_offset(this.__wbg_ptr);
    }
    setOffset(t) {
      s.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, t);
    }
    slideEnabled() {
      return s.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr) !== 0;
    }
    setSlideEnabled(t) {
      s.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, t);
    }
    autostepMaxHeight() {
      const t = s.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
    autostepMinWidth() {
      const t = s.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
    autostepIncludesDynamicBodies() {
      const t = s.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
      return t === 16777215 ? void 0 : t !== 0;
    }
    autostepEnabled() {
      return s.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr) !== 0;
    }
    enableAutostep(t, e, r) {
      s.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, t, e, r);
    }
    disableAutostep() {
      s.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
    }
    maxSlopeClimbAngle() {
      return s.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
    }
    setMaxSlopeClimbAngle(t) {
      s.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr, t);
    }
    minSlopeSlideAngle() {
      return s.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
    }
    setMinSlopeSlideAngle(t) {
      s.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, t);
    }
    snapToGroundDistance() {
      const t = s.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
    enableSnapToGround(t) {
      s.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, t);
    }
    disableSnapToGround() {
      s.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
    }
    snapToGroundEnabled() {
      return s.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr) !== 0;
    }
    computeColliderMovement(t, e, r, n, o, c, l, _, h, p, w, b) {
      try {
        d(e, zt), d(r, rt), d(n, K), d(o, Q), d(l, u), s.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, l.__wbg_ptr, _, F(h) ? 4294967297 : Math.fround(h), p, F(w) ? 4294967297 : w >>> 0, X(b));
      } finally {
        G[U++] = void 0;
      }
    }
    computedMovement() {
      const t = s.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
      return u.__wrap(t);
    }
    computedGrounded() {
      return s.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr) !== 0;
    }
    numComputedCollisions() {
      return s.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
    }
    computedCollision(t, e) {
      return d(e, pn), s.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
  }
  const _r = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawmultibodyjointset_free(i >>> 0, 1));
  class Mt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Mt.prototype);
      return e.__wbg_ptr = t, _r.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _r.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawmultibodyjointset_free(t, 0);
    }
    jointType(t) {
      return s.rawmultibodyjointset_jointType(this.__wbg_ptr, t);
    }
    jointFrameX1(t) {
      const e = s.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, t);
      return N.__wrap(e);
    }
    jointFrameX2(t) {
      const e = s.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, t);
      return N.__wrap(e);
    }
    jointAnchor1(t) {
      const e = s.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    jointAnchor2(t) {
      const e = s.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    jointContactsEnabled(t) {
      return s.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
    }
    jointSetContactsEnabled(t, e) {
      s.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
    }
    jointLimitsEnabled(t, e) {
      return s.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
    }
    jointLimitsMin(t, e) {
      return s.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, t, e);
    }
    jointLimitsMax(t, e) {
      return s.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, t, e);
    }
    constructor() {
      const t = s.rawmultibodyjointset_new();
      return this.__wbg_ptr = t >>> 0, _r.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, lt), s.rawmultibodyjointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
    }
    remove(t, e) {
      s.rawmultibodyjointset_remove(this.__wbg_ptr, t, e);
    }
    contains(t) {
      return s.rawmultibodyjointset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        s.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, X(t));
      } finally {
        G[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, X(e));
      } finally {
        G[U++] = void 0;
      }
    }
  }
  const dr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawnarrowphase_free(i >>> 0, 1));
  class rt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(rt.prototype);
      return e.__wbg_ptr = t, dr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, dr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawnarrowphase_free(t, 0);
    }
    constructor() {
      const t = s.rawnarrowphase_new();
      return this.__wbg_ptr = t >>> 0, dr.register(this, this.__wbg_ptr, this), this;
    }
    contact_pairs_with(t, e) {
      s.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, t, J(e));
    }
    contact_pair(t, e) {
      const r = s.rawnarrowphase_contact_pair(this.__wbg_ptr, t, e);
      return r === 0 ? void 0 : kr.__wrap(r);
    }
    intersection_pairs_with(t, e) {
      s.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, t, J(e));
    }
    intersection_pair(t, e) {
      return s.rawnarrowphase_intersection_pair(this.__wbg_ptr, t, e) !== 0;
    }
  }
  const mi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawphysicspipeline_free(i >>> 0, 1));
  class Da {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, mi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawphysicspipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawphysicspipeline_new();
      return this.__wbg_ptr = t >>> 0, mi.register(this, this.__wbg_ptr, this), this;
    }
    set_profiler_enabled(t) {
      s.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr, t);
    }
    is_profiler_enabled() {
      return s.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr) !== 0;
    }
    timing_step() {
      return s.rawphysicspipeline_timing_step(this.__wbg_ptr);
    }
    timing_collision_detection() {
      return s.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr);
    }
    timing_broad_phase() {
      return s.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr);
    }
    timing_narrow_phase() {
      return s.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr);
    }
    timing_solver() {
      return s.rawphysicspipeline_timing_solver(this.__wbg_ptr);
    }
    timing_velocity_assembly() {
      return s.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr);
    }
    timing_velocity_resolution() {
      return s.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr);
    }
    timing_velocity_update() {
      return s.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr);
    }
    timing_velocity_writeback() {
      return s.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr);
    }
    timing_ccd() {
      return s.rawphysicspipeline_timing_ccd(this.__wbg_ptr);
    }
    timing_ccd_toi_computation() {
      return s.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr);
    }
    timing_ccd_broad_phase() {
      return s.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr);
    }
    timing_ccd_narrow_phase() {
      return s.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr);
    }
    timing_ccd_solver() {
      return s.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr);
    }
    timing_island_construction() {
      return s.rawphysicspipeline_timing_island_construction(this.__wbg_ptr);
    }
    timing_user_changes() {
      return s.rawphysicspipeline_timing_user_changes(this.__wbg_ptr);
    }
    step(t, e, r, n, o, c, l, _, h, p) {
      d(t, u), d(e, Xt), d(r, kt), d(n, zt), d(o, rt), d(c, K), d(l, Q), d(_, Ft), d(h, Mt), d(p, Rr), s.rawphysicspipeline_step(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, p.__wbg_ptr);
    }
    stepWithEvents(t, e, r, n, o, c, l, _, h, p, w, b, f, R) {
      d(t, u), d(e, Xt), d(r, kt), d(n, zt), d(o, rt), d(c, K), d(l, Q), d(_, Ft), d(h, Mt), d(p, Rr), d(w, gn), s.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, p.__wbg_ptr, w.__wbg_ptr, J(b), J(f), J(R));
    }
  }
  const fi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpidcontroller_free(i >>> 0, 1));
  class Ta {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, fi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpidcontroller_free(t, 0);
    }
    constructor(t, e, r, n) {
      const o = s.rawpidcontroller_new(t, e, r, n);
      return this.__wbg_ptr = o >>> 0, fi.register(this, this.__wbg_ptr, this), this;
    }
    set_kp(t, e) {
      s.rawpidcontroller_set_kp(this.__wbg_ptr, t, e);
    }
    set_ki(t, e) {
      s.rawpidcontroller_set_ki(this.__wbg_ptr, t, e);
    }
    set_kd(t, e) {
      s.rawpidcontroller_set_kd(this.__wbg_ptr, t, e);
    }
    set_axes_mask(t) {
      s.rawpidcontroller_set_axes_mask(this.__wbg_ptr, t);
    }
    reset_integrals() {
      s.rawpidcontroller_reset_integrals(this.__wbg_ptr);
    }
    apply_linear_correction(t, e, r, n, o) {
      d(e, K), d(n, u), d(o, u), s.rawpidcontroller_apply_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
    }
    apply_angular_correction(t, e, r, n, o) {
      d(e, K), d(n, N), d(o, u), s.rawpidcontroller_apply_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
    }
    linear_correction(t, e, r, n, o) {
      d(e, K), d(n, u), d(o, u);
      const c = s.rawpidcontroller_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
      return u.__wrap(c);
    }
    angular_correction(t, e, r, n, o) {
      d(e, K), d(n, N), d(o, u);
      const c = s.rawpidcontroller_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
      return u.__wrap(c);
    }
  }
  const yi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointcolliderprojection_free(i >>> 0, 1));
  class De {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(De.prototype);
      return e.__wbg_ptr = t, yi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, yi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpointcolliderprojection_free(t, 0);
    }
    colliderHandle() {
      return s.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    point() {
      const t = s.rawpointcolliderprojection_point(this.__wbg_ptr);
      return u.__wrap(t);
    }
    isInside() {
      return s.rawpointcolliderprojection_isInside(this.__wbg_ptr) !== 0;
    }
    featureType() {
      return s.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const t = s.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
  }
  const vi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointprojection_free(i >>> 0, 1));
  class Ve {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ve.prototype);
      return e.__wbg_ptr = t, vi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, vi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpointprojection_free(t, 0);
    }
    point() {
      const t = s.rawpointprojection_point(this.__wbg_ptr);
      return u.__wrap(t);
    }
    isInside() {
      return s.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
    }
  }
  const Ri = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawraycolliderhit_free(i >>> 0, 1));
  class Nr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Nr.prototype);
      return e.__wbg_ptr = t, Ri.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ri.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawraycolliderhit_free(t, 0);
    }
    colliderHandle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    timeOfImpact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
  }
  const Si = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawraycolliderintersection_free(i >>> 0, 1));
  class We {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(We.prototype);
      return e.__wbg_ptr = t, Si.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Si.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawraycolliderintersection_free(t, 0);
    }
    colliderHandle() {
      return s.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    normal() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return u.__wrap(t);
    }
    time_of_impact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
      return s.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const t = s.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
  }
  const Ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrayintersection_free(i >>> 0, 1));
  class Ue {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ue.prototype);
      return e.__wbg_ptr = t, Ci.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ci.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrayintersection_free(t, 0);
    }
    normal() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return u.__wrap(t);
    }
    time_of_impact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
      return s.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const t = s.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
  }
  const hr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrigidbodyset_free(i >>> 0, 1));
  class K {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(K.prototype);
      return e.__wbg_ptr = t, hr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, hr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrigidbodyset_free(t, 0);
    }
    rbTranslation(t) {
      const e = s.rawrigidbodyset_rbTranslation(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbRotation(t) {
      const e = s.rawrigidbodyset_rbRotation(this.__wbg_ptr, t);
      return N.__wrap(e);
    }
    rbSleep(t) {
      s.rawrigidbodyset_rbSleep(this.__wbg_ptr, t);
    }
    rbIsSleeping(t) {
      return s.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, t) !== 0;
    }
    rbIsMoving(t) {
      return s.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, t) !== 0;
    }
    rbNextTranslation(t) {
      const e = s.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbNextRotation(t) {
      const e = s.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, t);
      return N.__wrap(e);
    }
    rbSetTranslation(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, t, e, r, n, o);
    }
    rbSetRotation(t, e, r, n, o, c) {
      s.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, t, e, r, n, o, c);
    }
    rbSetLinvel(t, e, r) {
      d(e, u), s.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetAngvel(t, e, r) {
      d(e, u), s.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetNextKinematicTranslation(t, e, r, n) {
      s.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, t, e, r, n);
    }
    rbSetNextKinematicRotation(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, t, e, r, n, o);
    }
    rbRecomputeMassPropertiesFromColliders(t, e) {
      d(e, Q), s.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    rbSetAdditionalMass(t, e, r) {
      s.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, t, e, r);
    }
    rbSetAdditionalMassProperties(t, e, r, n, o, c) {
      d(r, u), d(n, u), d(o, N), s.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c);
    }
    rbLinvel(t) {
      const e = s.rawrigidbodyset_rbLinvel(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbAngvel(t) {
      const e = s.rawrigidbodyset_rbAngvel(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbVelocityAtPoint(t, e) {
      d(e, u);
      const r = s.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr, t, e.__wbg_ptr);
      return u.__wrap(r);
    }
    rbLockTranslations(t, e, r) {
      s.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, t, e, r);
    }
    rbSetEnabledTranslations(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, t, e, r, n, o);
    }
    rbLockRotations(t, e, r) {
      s.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, t, e, r);
    }
    rbSetEnabledRotations(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr, t, e, r, n, o);
    }
    rbDominanceGroup(t) {
      return s.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, t);
    }
    rbSetDominanceGroup(t, e) {
      s.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, t, e);
    }
    rbEnableCcd(t, e) {
      s.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, t, e);
    }
    rbSetSoftCcdPrediction(t, e) {
      s.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, t, e);
    }
    rbMass(t) {
      return s.rawrigidbodyset_rbMass(this.__wbg_ptr, t);
    }
    rbInvMass(t) {
      return s.rawrigidbodyset_rbInvMass(this.__wbg_ptr, t);
    }
    rbEffectiveInvMass(t) {
      const e = s.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbLocalCom(t) {
      const e = s.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbWorldCom(t) {
      const e = s.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbInvPrincipalInertia(t) {
      const e = s.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbPrincipalInertiaLocalFrame(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr, t);
      return N.__wrap(e);
    }
    rbPrincipalInertia(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbEffectiveWorldInvInertia(t) {
      const e = s.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr, t);
      return Te.__wrap(e);
    }
    rbEffectiveAngularInertia(t) {
      const e = s.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, t);
      return Te.__wrap(e);
    }
    rbWakeUp(t) {
      s.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, t);
    }
    rbIsCcdEnabled(t) {
      return s.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, t) !== 0;
    }
    rbSoftCcdPrediction(t) {
      return s.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, t);
    }
    rbNumColliders(t) {
      return s.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, t) >>> 0;
    }
    rbCollider(t, e) {
      return s.rawrigidbodyset_rbCollider(this.__wbg_ptr, t, e);
    }
    rbBodyType(t) {
      return s.rawrigidbodyset_rbBodyType(this.__wbg_ptr, t);
    }
    rbSetBodyType(t, e, r) {
      s.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, t, e, r);
    }
    rbIsFixed(t) {
      return s.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, t) !== 0;
    }
    rbIsKinematic(t) {
      return s.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, t) !== 0;
    }
    rbIsDynamic(t) {
      return s.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, t) !== 0;
    }
    rbLinearDamping(t) {
      return s.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, t);
    }
    rbAngularDamping(t) {
      return s.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, t);
    }
    rbSetLinearDamping(t, e) {
      s.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, t, e);
    }
    rbSetAngularDamping(t, e) {
      s.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, t, e);
    }
    rbSetEnabled(t, e) {
      s.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, t, e);
    }
    rbIsEnabled(t) {
      return s.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, t) !== 0;
    }
    rbGravityScale(t) {
      return s.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, t);
    }
    rbSetGravityScale(t, e, r) {
      s.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, t, e, r);
    }
    rbResetForces(t, e) {
      s.rawrigidbodyset_rbResetForces(this.__wbg_ptr, t, e);
    }
    rbResetTorques(t, e) {
      s.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, t, e);
    }
    rbAddForce(t, e, r) {
      d(e, u), s.rawrigidbodyset_rbAddForce(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbApplyImpulse(t, e, r) {
      d(e, u), s.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbAddTorque(t, e, r) {
      d(e, u), s.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbApplyTorqueImpulse(t, e, r) {
      d(e, u), s.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbAddForceAtPoint(t, e, r, n) {
      d(e, u), d(r, u), s.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    rbApplyImpulseAtPoint(t, e, r, n) {
      d(e, u), d(r, u), s.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    rbAdditionalSolverIterations(t) {
      return s.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, t) >>> 0;
    }
    rbSetAdditionalSolverIterations(t, e) {
      s.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, t, e);
    }
    rbUserData(t) {
      return s.rawrigidbodyset_rbUserData(this.__wbg_ptr, t) >>> 0;
    }
    rbSetUserData(t, e) {
      s.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, t, e);
    }
    rbUserForce(t) {
      const e = s.rawrigidbodyset_rbUserForce(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbUserTorque(t) {
      const e = s.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    constructor() {
      const t = s.rawrigidbodyset_new();
      return this.__wbg_ptr = t >>> 0, hr.register(this, this.__wbg_ptr, this), this;
    }
    createRigidBody(t, e, r, n, o, c, l, _, h, p, w, b, f, R, D, P, I, v, S, E, yt, bt, tt, Nt, Et, jt) {
      return d(e, u), d(r, N), d(l, u), d(_, u), d(h, u), d(p, u), d(w, N), s.rawrigidbodyset_createRigidBody(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, o, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, p.__wbg_ptr, w.__wbg_ptr, b, f, R, D, P, I, v, S, E, yt, bt, tt, Nt, Et, jt);
    }
    remove(t, e, r, n, o) {
      d(e, kt), d(r, Q), d(n, Ft), d(o, Mt), s.rawrigidbodyset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr);
    }
    len() {
      return s.rawrigidbodyset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawrigidbodyset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachRigidBodyHandle(t) {
      try {
        s.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, X(t));
      } finally {
        G[U++] = void 0;
      }
    }
    propagateModifiedBodyPositionsToColliders(t) {
      d(t, Q), s.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  const wr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrotation_free(i >>> 0, 1));
  class N {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(N.prototype);
      return e.__wbg_ptr = t, wr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, wr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrotation_free(t, 0);
    }
    constructor(t, e, r, n) {
      const o = s.rawrotation_new(t, e, r, n);
      return this.__wbg_ptr = o >>> 0, wr.register(this, this.__wbg_ptr, this), this;
    }
    static identity() {
      const t = s.rawrotation_identity();
      return N.__wrap(t);
    }
    get x() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get y() {
      return s.rawkinematiccharactercontroller_offset(this.__wbg_ptr);
    }
    get z() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    get w() {
      return s.rawrotation_w(this.__wbg_ptr);
    }
  }
  const Ei = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawsdpmatrix3_free(i >>> 0, 1));
  class Te {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Te.prototype);
      return e.__wbg_ptr = t, Ei.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ei.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawsdpmatrix3_free(t, 0);
    }
    elements() {
      const t = s.rawsdpmatrix3_elements(this.__wbg_ptr);
      return ye(t);
    }
  }
  const xi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawserializationpipeline_free(i >>> 0, 1));
  class za {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawserializationpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawccdsolver_new();
      return this.__wbg_ptr = t >>> 0, xi.register(this, this.__wbg_ptr, this), this;
    }
    serializeAll(t, e, r, n, o, c, l, _, h) {
      d(t, u), d(e, Xt), d(r, kt), d(n, zt), d(o, rt), d(c, K), d(l, Q), d(_, Ft), d(h, Mt);
      const p = s.rawserializationpipeline_serializeAll(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr);
      return ye(p);
    }
    deserializeAll(t) {
      const e = s.rawserializationpipeline_deserializeAll(this.__wbg_ptr, J(t));
      return e === 0 ? void 0 : Mr.__wrap(e);
    }
  }
  const Ai = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshape_free(i >>> 0, 1));
  class z {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(z.prototype);
      return e.__wbg_ptr = t, Ai.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ai.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshape_free(t, 0);
    }
    static cuboid(t, e, r) {
      const n = s.rawshape_cuboid(t, e, r);
      return z.__wrap(n);
    }
    static roundCuboid(t, e, r, n) {
      const o = s.rawshape_roundCuboid(t, e, r, n);
      return z.__wrap(o);
    }
    static ball(t) {
      const e = s.rawshape_ball(t);
      return z.__wrap(e);
    }
    static halfspace(t) {
      d(t, u);
      const e = s.rawshape_halfspace(t.__wbg_ptr);
      return z.__wrap(e);
    }
    static capsule(t, e) {
      const r = s.rawshape_capsule(t, e);
      return z.__wrap(r);
    }
    static cylinder(t, e) {
      const r = s.rawshape_cylinder(t, e);
      return z.__wrap(r);
    }
    static roundCylinder(t, e, r) {
      const n = s.rawshape_roundCylinder(t, e, r);
      return z.__wrap(n);
    }
    static cone(t, e) {
      const r = s.rawshape_cone(t, e);
      return z.__wrap(r);
    }
    static roundCone(t, e, r) {
      const n = s.rawshape_roundCone(t, e, r);
      return z.__wrap(n);
    }
    static voxels(t, e) {
      d(t, u);
      const r = pe(e, s.__wbindgen_export_2), n = ht, o = s.rawshape_voxels(t.__wbg_ptr, r, n);
      return z.__wrap(o);
    }
    static voxelsFromPoints(t, e) {
      d(t, u);
      const r = Ht(e, s.__wbindgen_export_2), n = ht, o = s.rawshape_voxelsFromPoints(t.__wbg_ptr, r, n);
      return z.__wrap(o);
    }
    static polyline(t, e) {
      const r = Ht(t, s.__wbindgen_export_2), n = ht, o = pe(e, s.__wbindgen_export_2), c = ht, l = s.rawshape_polyline(r, n, o, c);
      return z.__wrap(l);
    }
    static trimesh(t, e, r) {
      const n = Ht(t, s.__wbindgen_export_2), o = ht, c = pe(e, s.__wbindgen_export_2), l = ht, _ = s.rawshape_trimesh(n, o, c, l, r);
      return _ === 0 ? void 0 : z.__wrap(_);
    }
    static heightfield(t, e, r, n, o) {
      const c = Ht(r, s.__wbindgen_export_2), l = ht;
      d(n, u);
      const _ = s.rawshape_heightfield(t, e, c, l, n.__wbg_ptr, o);
      return z.__wrap(_);
    }
    static segment(t, e) {
      d(t, u), d(e, u);
      const r = s.rawshape_segment(t.__wbg_ptr, e.__wbg_ptr);
      return z.__wrap(r);
    }
    static triangle(t, e, r) {
      d(t, u), d(e, u), d(r, u);
      const n = s.rawshape_triangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return z.__wrap(n);
    }
    static roundTriangle(t, e, r, n) {
      d(t, u), d(e, u), d(r, u);
      const o = s.rawshape_roundTriangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return z.__wrap(o);
    }
    static convexHull(t) {
      const e = Ht(t, s.__wbindgen_export_2), r = ht, n = s.rawshape_convexHull(e, r);
      return n === 0 ? void 0 : z.__wrap(n);
    }
    static roundConvexHull(t, e) {
      const r = Ht(t, s.__wbindgen_export_2), n = ht, o = s.rawshape_roundConvexHull(r, n, e);
      return o === 0 ? void 0 : z.__wrap(o);
    }
    static convexMesh(t, e) {
      const r = Ht(t, s.__wbindgen_export_2), n = ht, o = pe(e, s.__wbindgen_export_2), c = ht, l = s.rawshape_convexMesh(r, n, o, c);
      return l === 0 ? void 0 : z.__wrap(l);
    }
    static roundConvexMesh(t, e, r) {
      const n = Ht(t, s.__wbindgen_export_2), o = ht, c = pe(e, s.__wbindgen_export_2), l = ht, _ = s.rawshape_roundConvexMesh(n, o, c, l, r);
      return _ === 0 ? void 0 : z.__wrap(_);
    }
    castShape(t, e, r, n, o, c, l, _, h, p) {
      d(t, u), d(e, N), d(r, u), d(n, z), d(o, u), d(c, N), d(l, u);
      const w = s.rawshape_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, p);
      return w === 0 ? void 0 : Je.__wrap(w);
    }
    intersectsShape(t, e, r, n, o) {
      return d(t, u), d(e, N), d(r, z), d(n, u), d(o, N), s.rawshape_intersectsShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr) !== 0;
    }
    contactShape(t, e, r, n, o, c) {
      d(t, u), d(e, N), d(r, z), d(n, u), d(o, N);
      const l = s.rawshape_contactShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c);
      return l === 0 ? void 0 : ve.__wrap(l);
    }
    containsPoint(t, e, r) {
      return d(t, u), d(e, N), d(r, u), s.rawshape_containsPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr) !== 0;
    }
    projectPoint(t, e, r, n) {
      d(t, u), d(e, N), d(r, u);
      const o = s.rawshape_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return Ve.__wrap(o);
    }
    intersectsRay(t, e, r, n, o) {
      return d(t, u), d(e, N), d(r, u), d(n, u), s.rawshape_intersectsRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o) !== 0;
    }
    castRay(t, e, r, n, o, c) {
      return d(t, u), d(e, N), d(r, u), d(n, u), s.rawshape_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c);
    }
    castRayAndGetNormal(t, e, r, n, o, c) {
      d(t, u), d(e, N), d(r, u), d(n, u);
      const l = s.rawshape_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c);
      return l === 0 ? void 0 : Ue.__wrap(l);
    }
  }
  const Pi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecasthit_free(i >>> 0, 1));
  class Je {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Je.prototype);
      return e.__wbg_ptr = t, Pi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Pi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshapecasthit_free(t, 0);
    }
    time_of_impact() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    witness1() {
      const t = s.rawshapecasthit_witness1(this.__wbg_ptr);
      return u.__wrap(t);
    }
    witness2() {
      const t = s.rawcontactforceevent_total_force(this.__wbg_ptr);
      return u.__wrap(t);
    }
    normal1() {
      const t = s.rawshapecasthit_normal1(this.__wbg_ptr);
      return u.__wrap(t);
    }
    normal2() {
      const t = s.rawshapecasthit_normal2(this.__wbg_ptr);
      return u.__wrap(t);
    }
  }
  const ji = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecontact_free(i >>> 0, 1));
  class ve {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ve.prototype);
      return e.__wbg_ptr = t, ji.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ji.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshapecontact_free(t, 0);
    }
    distance() {
      return s.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
    }
    point1() {
      const t = s.rawpointprojection_point(this.__wbg_ptr);
      return u.__wrap(t);
    }
    point2() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return u.__wrap(t);
    }
    normal1() {
      const t = s.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return u.__wrap(t);
    }
    normal2() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return u.__wrap(t);
    }
  }
  const ur = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawvector_free(i >>> 0, 1));
  class u {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(u.prototype);
      return e.__wbg_ptr = t, ur.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ur.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawvector_free(t, 0);
    }
    static zero() {
      const t = s.rawvector_zero();
      return u.__wrap(t);
    }
    constructor(t, e, r) {
      const n = s.rawvector_new(t, e, r);
      return this.__wbg_ptr = n >>> 0, ur.register(this, this.__wbg_ptr, this), this;
    }
    get x() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    set x(t) {
      s.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
    }
    get y() {
      return s.rawkinematiccharactercontroller_offset(this.__wbg_ptr);
    }
    set y(t) {
      s.rawvector_set_y(this.__wbg_ptr, t);
    }
    get z() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    set z(t) {
      s.rawvector_set_z(this.__wbg_ptr, t);
    }
    xyz() {
      const t = s.rawvector_xyz(this.__wbg_ptr);
      return u.__wrap(t);
    }
    yxz() {
      const t = s.rawvector_yxz(this.__wbg_ptr);
      return u.__wrap(t);
    }
    zxy() {
      const t = s.rawvector_zxy(this.__wbg_ptr);
      return u.__wrap(t);
    }
    xzy() {
      const t = s.rawvector_xzy(this.__wbg_ptr);
      return u.__wrap(t);
    }
    yzx() {
      const t = s.rawvector_yzx(this.__wbg_ptr);
      return u.__wrap(t);
    }
    zyx() {
      const t = s.rawvector_zyx(this.__wbg_ptr);
      return u.__wrap(t);
    }
  }
  function Fa(i, t, e, r) {
    const n = O(i).bind(O(t), O(e), O(r));
    return J(n);
  }
  function ka(i) {
    const t = O(i).buffer;
    return J(t);
  }
  function Ma() {
    return Oe(function(i, t) {
      const e = O(i).call(O(t));
      return J(e);
    }, arguments);
  }
  function Na() {
    return Oe(function(i, t, e) {
      const r = O(i).call(O(t), O(e));
      return J(r);
    }, arguments);
  }
  function La() {
    return Oe(function(i, t, e, r) {
      const n = O(i).call(O(t), O(e), O(r));
      return J(n);
    }, arguments);
  }
  function Ba() {
    return Oe(function(i, t, e, r, n) {
      const o = O(i).call(O(t), O(e), O(r), O(n));
      return J(o);
    }, arguments);
  }
  function Oa(i) {
    return O(i).length;
  }
  function Ha(i) {
    return O(i).length;
  }
  function Ga(i) {
    const t = new Uint8Array(O(i));
    return J(t);
  }
  function Va(i, t) {
    const e = new Function(hn(i, t));
    return J(e);
  }
  function Wa(i, t, e) {
    const r = new Uint8Array(O(i), t >>> 0, e >>> 0);
    return J(r);
  }
  function Ua(i, t, e) {
    const r = new Float32Array(O(i), t >>> 0, e >>> 0);
    return J(r);
  }
  function Ja(i) {
    const t = new Float32Array(i >>> 0);
    return J(t);
  }
  function Ka(i) {
    return O(i).now();
  }
  function qa(i) {
    const t = O(i).performance;
    return J(t);
  }
  function Xa(i) {
    const t = zr.__wrap(i);
    return J(t);
  }
  function Ya(i) {
    const t = We.__wrap(i);
    return J(t);
  }
  function Qa(i, t, e) {
    O(i).set(O(t), e >>> 0);
  }
  function Za(i, t, e) {
    O(i).set(O(t), e >>> 0);
  }
  function $a() {
    const i = typeof global > "u" ? null : global;
    return F(i) ? 0 : J(i);
  }
  function to() {
    const i = typeof globalThis > "u" ? null : globalThis;
    return F(i) ? 0 : J(i);
  }
  function eo() {
    const i = typeof self > "u" ? null : self;
    return F(i) ? 0 : J(i);
  }
  function ro() {
    const i = typeof window > "u" ? null : window;
    return F(i) ? 0 : J(i);
  }
  function io(i) {
    const t = O(i);
    return typeof t == "boolean" ? t ? 1 : 0 : 2;
  }
  function no(i) {
    return typeof O(i) == "function";
  }
  function so(i) {
    return O(i) === void 0;
  }
  function ao() {
    const i = s.memory;
    return J(i);
  }
  function oo(i, t) {
    const e = O(t), r = typeof e == "number" ? e : void 0;
    ct().setFloat64(i + 8, F(r) ? 0 : r, true), ct().setInt32(i + 0, !F(r), true);
  }
  function co(i) {
    return J(i);
  }
  function lo(i) {
    const t = O(i);
    return J(t);
  }
  function _o(i) {
    ye(i);
  }
  function ho(i, t) {
    throw new Error(hn(i, t));
  }
  URL = globalThis.URL;
  const a = await ya({
    "./rapier_wasm3d_bg.js": {
      __wbindgen_number_new: co,
      __wbindgen_boolean_get: io,
      __wbindgen_object_drop_ref: _o,
      __wbindgen_number_get: oo,
      __wbindgen_is_function: no,
      __wbg_rawraycolliderintersection_new: Ya,
      __wbg_rawcontactforceevent_new: Xa,
      __wbg_performance_7a3ffd0b17f663ad: qa,
      __wbindgen_is_undefined: so,
      __wbg_now_2c95c9de01293173: Ka,
      __wbindgen_object_clone_ref: lo,
      __wbg_newnoargs_105ed471475aaf50: Va,
      __wbg_call_672a4d21634d4a24: Ma,
      __wbg_call_7cccdd69e0791ae2: Na,
      __wbg_call_833bed5770ea2041: La,
      __wbg_call_b8adc8b1d0a0d8eb: Ba,
      __wbg_bind_c8359b1cba058168: Fa,
      __wbg_buffer_609cc3eee51ed158: ka,
      __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: to,
      __wbg_static_accessor_SELF_37c5d418e4bf5819: eo,
      __wbg_static_accessor_WINDOW_5de37043a91a9c40: ro,
      __wbg_static_accessor_GLOBAL_88a902d13a557d07: $a,
      __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: Wa,
      __wbg_new_a12002a7f91c75be: Ga,
      __wbg_set_65595bdd868b3009: Za,
      __wbg_length_a446193dc22c12f8: Ha,
      __wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354: Ua,
      __wbg_set_10bad9bee0e9c58b: Qa,
      __wbg_length_3b4f022188ae8db6: Oa,
      __wbg_newwithlength_5a5efe313cfd59f1: Ja,
      __wbindgen_throw: ho,
      __wbindgen_memory: ao
    }
  }, fa), wo = a.memory, uo = a.version, po = a.__wbg_rawkinematiccharactercontroller_free, go = a.rawkinematiccharactercontroller_new, bo = a.rawkinematiccharactercontroller_setUp, mo = a.rawkinematiccharactercontroller_normalNudgeFactor, fo = a.rawkinematiccharactercontroller_setNormalNudgeFactor, yo = a.rawkinematiccharactercontroller_offset, vo = a.rawkinematiccharactercontroller_setOffset, Ro = a.rawkinematiccharactercontroller_slideEnabled, So = a.rawkinematiccharactercontroller_setSlideEnabled, Co = a.rawkinematiccharactercontroller_autostepMaxHeight, Eo = a.rawkinematiccharactercontroller_autostepMinWidth, xo = a.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, Ao = a.rawkinematiccharactercontroller_autostepEnabled, Po = a.rawkinematiccharactercontroller_enableAutostep, jo = a.rawkinematiccharactercontroller_disableAutostep, Io = a.rawkinematiccharactercontroller_maxSlopeClimbAngle, Do = a.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, To = a.rawkinematiccharactercontroller_minSlopeSlideAngle, zo = a.rawkinematiccharactercontroller_setMinSlopeSlideAngle, Fo = a.rawkinematiccharactercontroller_snapToGroundDistance, ko = a.rawkinematiccharactercontroller_enableSnapToGround, Mo = a.rawkinematiccharactercontroller_disableSnapToGround, No = a.rawkinematiccharactercontroller_snapToGroundEnabled, Lo = a.rawkinematiccharactercontroller_computeColliderMovement, Bo = a.rawkinematiccharactercontroller_computedMovement, Oo = a.rawkinematiccharactercontroller_computedGrounded, Ho = a.rawkinematiccharactercontroller_numComputedCollisions, Go = a.rawkinematiccharactercontroller_computedCollision, Vo = a.__wbg_rawcharactercollision_free, Wo = a.rawcharactercollision_new, Uo = a.rawcharactercollision_handle, Jo = a.rawcharactercollision_translationDeltaApplied, Ko = a.rawcharactercollision_translationDeltaRemaining, qo = a.rawcharactercollision_toi, Xo = a.rawcharactercollision_worldWitness1, Yo = a.rawcharactercollision_worldWitness2, Qo = a.rawcharactercollision_worldNormal1, Zo = a.rawcharactercollision_worldNormal2, $o = a.__wbg_rawpidcontroller_free, tc = a.rawpidcontroller_new, ec = a.rawpidcontroller_set_kp, rc = a.rawpidcontroller_set_ki, ic = a.rawpidcontroller_set_kd, nc = a.rawpidcontroller_set_axes_mask, sc = a.rawpidcontroller_reset_integrals, ac = a.rawpidcontroller_apply_linear_correction, oc = a.rawpidcontroller_apply_angular_correction, cc = a.rawpidcontroller_linear_correction, lc = a.rawpidcontroller_angular_correction, _c = a.__wbg_rawdynamicraycastvehiclecontroller_free, dc = a.rawdynamicraycastvehiclecontroller_new, hc = a.rawdynamicraycastvehiclecontroller_current_vehicle_speed, wc = a.rawdynamicraycastvehiclecontroller_chassis, uc = a.rawdynamicraycastvehiclecontroller_index_up_axis, pc = a.rawdynamicraycastvehiclecontroller_set_index_up_axis, gc = a.rawdynamicraycastvehiclecontroller_index_forward_axis, bc = a.rawdynamicraycastvehiclecontroller_set_index_forward_axis, mc = a.rawdynamicraycastvehiclecontroller_add_wheel, fc = a.rawdynamicraycastvehiclecontroller_num_wheels, yc = a.rawdynamicraycastvehiclecontroller_update_vehicle, vc = a.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs, Rc = a.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs, Sc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length, Cc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length, Ec = a.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel, xc = a.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel, Ac = a.rawdynamicraycastvehiclecontroller_wheel_radius, Pc = a.rawdynamicraycastvehiclecontroller_set_wheel_radius, jc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness, Ic = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness, Dc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_compression, Tc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression, zc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation, Fc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation, kc = a.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force, Mc = a.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force, Nc = a.rawdynamicraycastvehiclecontroller_wheel_brake, Lc = a.rawdynamicraycastvehiclecontroller_set_wheel_brake, Bc = a.rawdynamicraycastvehiclecontroller_wheel_steering, Oc = a.rawdynamicraycastvehiclecontroller_set_wheel_steering, Hc = a.rawdynamicraycastvehiclecontroller_wheel_engine_force, Gc = a.rawdynamicraycastvehiclecontroller_set_wheel_engine_force, Vc = a.rawdynamicraycastvehiclecontroller_wheel_direction_cs, Wc = a.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs, Uc = a.rawdynamicraycastvehiclecontroller_wheel_axle_cs, Jc = a.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs, Kc = a.rawdynamicraycastvehiclecontroller_wheel_friction_slip, qc = a.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip, Xc = a.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness, Yc = a.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness, Qc = a.rawdynamicraycastvehiclecontroller_wheel_rotation, Zc = a.rawdynamicraycastvehiclecontroller_wheel_forward_impulse, $c = a.rawdynamicraycastvehiclecontroller_wheel_side_impulse, tl = a.rawdynamicraycastvehiclecontroller_wheel_suspension_force, el = a.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws, rl = a.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws, il = a.rawdynamicraycastvehiclecontroller_wheel_suspension_length, nl = a.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws, sl = a.rawdynamicraycastvehiclecontroller_wheel_is_in_contact, al = a.rawdynamicraycastvehiclecontroller_wheel_ground_object, ol = a.__wbg_rawccdsolver_free, cl = a.rawimpulsejointset_jointType, ll = a.rawimpulsejointset_jointBodyHandle1, _l = a.rawimpulsejointset_jointBodyHandle2, dl = a.rawimpulsejointset_jointFrameX1, hl = a.rawimpulsejointset_jointFrameX2, wl = a.rawimpulsejointset_jointAnchor1, ul = a.rawimpulsejointset_jointAnchor2, pl = a.rawimpulsejointset_jointSetAnchor1, gl = a.rawimpulsejointset_jointSetAnchor2, bl = a.rawimpulsejointset_jointContactsEnabled, ml = a.rawimpulsejointset_jointSetContactsEnabled, fl = a.rawimpulsejointset_jointLimitsEnabled, yl = a.rawimpulsejointset_jointLimitsMin, vl = a.rawimpulsejointset_jointLimitsMax, Rl = a.rawimpulsejointset_jointSetLimits, Sl = a.rawimpulsejointset_jointConfigureMotorModel, Cl = a.rawimpulsejointset_jointConfigureMotorVelocity, El = a.rawimpulsejointset_jointConfigureMotorPosition, xl = a.rawimpulsejointset_jointConfigureMotor, Al = a.__wbg_rawimpulsejointset_free, Pl = a.rawimpulsejointset_new, jl = a.rawimpulsejointset_createJoint, Il = a.rawimpulsejointset_remove, Dl = a.rawimpulsejointset_len, Tl = a.rawimpulsejointset_contains, zl = a.rawimpulsejointset_forEachJointHandle, Fl = a.rawimpulsejointset_forEachJointAttachedToRigidBody, kl = a.__wbg_rawintegrationparameters_free, Ml = a.rawintegrationparameters_new, Nl = a.rawintegrationparameters_dt, Ll = a.rawintegrationparameters_contact_erp, Bl = a.rawintegrationparameters_normalizedAllowedLinearError, Ol = a.rawintegrationparameters_normalizedPredictionDistance, Hl = a.rawintegrationparameters_numSolverIterations, Gl = a.rawintegrationparameters_minIslandSize, Vl = a.rawintegrationparameters_maxCcdSubsteps, Wl = a.rawintegrationparameters_set_dt, Ul = a.rawintegrationparameters_set_contact_natural_frequency, Jl = a.rawintegrationparameters_set_normalizedAllowedLinearError, Kl = a.rawintegrationparameters_set_normalizedPredictionDistance, ql = a.rawintegrationparameters_set_numSolverIterations, Xl = a.rawintegrationparameters_set_minIslandSize, Yl = a.rawintegrationparameters_set_maxCcdSubsteps, Ql = a.rawintegrationparameters_set_lengthUnit, Zl = a.__wbg_rawislandmanager_free, $l = a.rawislandmanager_new, t_ = a.rawislandmanager_forEachActiveRigidBodyHandle, e_ = a.__wbg_rawgenericjoint_free, r_ = a.rawgenericjoint_generic, i_ = a.rawgenericjoint_spring, n_ = a.rawgenericjoint_rope, s_ = a.rawgenericjoint_spherical, a_ = a.rawgenericjoint_prismatic, o_ = a.rawgenericjoint_fixed, c_ = a.rawgenericjoint_revolute, l_ = a.rawmultibodyjointset_jointType, __ = a.rawmultibodyjointset_jointFrameX1, d_ = a.rawmultibodyjointset_jointFrameX2, h_ = a.rawmultibodyjointset_jointAnchor1, w_ = a.rawmultibodyjointset_jointAnchor2, u_ = a.rawmultibodyjointset_jointContactsEnabled, p_ = a.rawmultibodyjointset_jointSetContactsEnabled, g_ = a.rawmultibodyjointset_jointLimitsEnabled, b_ = a.rawmultibodyjointset_jointLimitsMin, m_ = a.rawmultibodyjointset_jointLimitsMax, f_ = a.__wbg_rawmultibodyjointset_free, y_ = a.rawmultibodyjointset_new, v_ = a.rawmultibodyjointset_createJoint, R_ = a.rawmultibodyjointset_remove, S_ = a.rawmultibodyjointset_contains, C_ = a.rawmultibodyjointset_forEachJointHandle, E_ = a.rawmultibodyjointset_forEachJointAttachedToRigidBody, x_ = a.rawrigidbodyset_rbTranslation, A_ = a.rawrigidbodyset_rbRotation, P_ = a.rawrigidbodyset_rbSleep, j_ = a.rawrigidbodyset_rbIsSleeping, I_ = a.rawrigidbodyset_rbIsMoving, D_ = a.rawrigidbodyset_rbNextTranslation, T_ = a.rawrigidbodyset_rbNextRotation, z_ = a.rawrigidbodyset_rbSetTranslation, F_ = a.rawrigidbodyset_rbSetRotation, k_ = a.rawrigidbodyset_rbSetLinvel, M_ = a.rawrigidbodyset_rbSetAngvel, N_ = a.rawrigidbodyset_rbSetNextKinematicTranslation, L_ = a.rawrigidbodyset_rbSetNextKinematicRotation, B_ = a.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, O_ = a.rawrigidbodyset_rbSetAdditionalMass, H_ = a.rawrigidbodyset_rbSetAdditionalMassProperties, G_ = a.rawrigidbodyset_rbLinvel, V_ = a.rawrigidbodyset_rbAngvel, W_ = a.rawrigidbodyset_rbVelocityAtPoint, U_ = a.rawrigidbodyset_rbLockTranslations, J_ = a.rawrigidbodyset_rbSetEnabledTranslations, K_ = a.rawrigidbodyset_rbLockRotations, q_ = a.rawrigidbodyset_rbSetEnabledRotations, X_ = a.rawrigidbodyset_rbDominanceGroup, Y_ = a.rawrigidbodyset_rbSetDominanceGroup, Q_ = a.rawrigidbodyset_rbEnableCcd, Z_ = a.rawrigidbodyset_rbSetSoftCcdPrediction, $_ = a.rawrigidbodyset_rbMass, td = a.rawrigidbodyset_rbInvMass, ed = a.rawrigidbodyset_rbEffectiveInvMass, rd = a.rawrigidbodyset_rbLocalCom, id = a.rawrigidbodyset_rbWorldCom, nd = a.rawrigidbodyset_rbInvPrincipalInertia, sd = a.rawrigidbodyset_rbPrincipalInertiaLocalFrame, ad = a.rawrigidbodyset_rbPrincipalInertia, od = a.rawrigidbodyset_rbEffectiveWorldInvInertia, cd = a.rawrigidbodyset_rbEffectiveAngularInertia, ld = a.rawrigidbodyset_rbWakeUp, _d = a.rawrigidbodyset_rbIsCcdEnabled, dd = a.rawrigidbodyset_rbSoftCcdPrediction, hd = a.rawrigidbodyset_rbNumColliders, wd = a.rawrigidbodyset_rbCollider, ud = a.rawrigidbodyset_rbBodyType, pd = a.rawrigidbodyset_rbSetBodyType, gd = a.rawrigidbodyset_rbIsFixed, bd = a.rawrigidbodyset_rbIsKinematic, md = a.rawrigidbodyset_rbIsDynamic, fd = a.rawrigidbodyset_rbLinearDamping, yd = a.rawrigidbodyset_rbAngularDamping, vd = a.rawrigidbodyset_rbSetLinearDamping, Rd = a.rawrigidbodyset_rbSetAngularDamping, Sd = a.rawrigidbodyset_rbSetEnabled, Cd = a.rawrigidbodyset_rbIsEnabled, Ed = a.rawrigidbodyset_rbGravityScale, xd = a.rawrigidbodyset_rbSetGravityScale, Ad = a.rawrigidbodyset_rbResetForces, Pd = a.rawrigidbodyset_rbResetTorques, jd = a.rawrigidbodyset_rbAddForce, Id = a.rawrigidbodyset_rbApplyImpulse, Dd = a.rawrigidbodyset_rbAddTorque, Td = a.rawrigidbodyset_rbApplyTorqueImpulse, zd = a.rawrigidbodyset_rbAddForceAtPoint, Fd = a.rawrigidbodyset_rbApplyImpulseAtPoint, kd = a.rawrigidbodyset_rbAdditionalSolverIterations, Md = a.rawrigidbodyset_rbSetAdditionalSolverIterations, Nd = a.rawrigidbodyset_rbUserData, Ld = a.rawrigidbodyset_rbSetUserData, Bd = a.rawrigidbodyset_rbUserForce, Od = a.rawrigidbodyset_rbUserTorque, Hd = a.__wbg_rawrigidbodyset_free, Gd = a.rawrigidbodyset_new, Vd = a.rawrigidbodyset_createRigidBody, Wd = a.rawrigidbodyset_remove, Ud = a.rawrigidbodyset_len, Jd = a.rawrigidbodyset_contains, Kd = a.rawrigidbodyset_forEachRigidBodyHandle, qd = a.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, Xd = a.__wbg_rawbroadphase_free, Yd = a.rawbroadphase_new, Qd = a.rawbroadphase_castRay, Zd = a.rawbroadphase_castRayAndGetNormal, $d = a.rawbroadphase_intersectionsWithRay, th = a.rawbroadphase_intersectionWithShape, eh = a.rawbroadphase_projectPoint, rh = a.rawbroadphase_projectPointAndGetFeature, ih = a.rawbroadphase_intersectionsWithPoint, nh = a.rawbroadphase_castShape, sh = a.rawbroadphase_intersectionsWithShape, ah = a.rawbroadphase_collidersWithAabbIntersectingAabb, oh = a.rawcolliderset_coTranslation, ch = a.rawcolliderset_coRotation, lh = a.rawcolliderset_coTranslationWrtParent, _h = a.rawcolliderset_coRotationWrtParent, dh = a.rawcolliderset_coSetTranslation, hh = a.rawcolliderset_coSetTranslationWrtParent, wh = a.rawcolliderset_coSetRotation, uh = a.rawcolliderset_coSetRotationWrtParent, ph = a.rawcolliderset_coIsSensor, gh = a.rawcolliderset_coShapeType, bh = a.rawcolliderset_coHalfspaceNormal, mh = a.rawcolliderset_coHalfExtents, fh = a.rawcolliderset_coSetHalfExtents, yh = a.rawcolliderset_coRadius, vh = a.rawcolliderset_coSetRadius, Rh = a.rawcolliderset_coHalfHeight, Sh = a.rawcolliderset_coSetHalfHeight, Ch = a.rawcolliderset_coRoundRadius, Eh = a.rawcolliderset_coSetRoundRadius, xh = a.rawcolliderset_coVoxelData, Ah = a.rawcolliderset_coVoxelSize, Ph = a.rawcolliderset_coSetVoxel, jh = a.rawcolliderset_coPropagateVoxelChange, Ih = a.rawcolliderset_coCombineVoxelStates, Dh = a.rawcolliderset_coVertices, Th = a.rawcolliderset_coIndices, zh = a.rawcolliderset_coTriMeshFlags, Fh = a.rawcolliderset_coHeightFieldFlags, kh = a.rawcolliderset_coHeightfieldHeights, Mh = a.rawcolliderset_coHeightfieldScale, Nh = a.rawcolliderset_coHeightfieldNRows, Lh = a.rawcolliderset_coHeightfieldNCols, Bh = a.rawcolliderset_coParent, Oh = a.rawcolliderset_coSetEnabled, Hh = a.rawcolliderset_coIsEnabled, Gh = a.rawcolliderset_coSetContactSkin, Vh = a.rawcolliderset_coContactSkin, Wh = a.rawcolliderset_coFriction, Uh = a.rawcolliderset_coRestitution, Jh = a.rawcolliderset_coDensity, Kh = a.rawcolliderset_coMass, qh = a.rawcolliderset_coVolume, Xh = a.rawcolliderset_coCollisionGroups, Yh = a.rawcolliderset_coSolverGroups, Qh = a.rawcolliderset_coActiveHooks, Zh = a.rawcolliderset_coActiveCollisionTypes, $h = a.rawcolliderset_coActiveEvents, tw = a.rawcolliderset_coContactForceEventThreshold, ew = a.rawcolliderset_coContainsPoint, rw = a.rawcolliderset_coCastShape, iw = a.rawcolliderset_coCastCollider, nw = a.rawcolliderset_coIntersectsShape, sw = a.rawcolliderset_coContactShape, aw = a.rawcolliderset_coContactCollider, ow = a.rawcolliderset_coProjectPoint, cw = a.rawcolliderset_coIntersectsRay, lw = a.rawcolliderset_coCastRay, _w = a.rawcolliderset_coCastRayAndGetNormal, dw = a.rawcolliderset_coSetSensor, hw = a.rawcolliderset_coSetRestitution, ww = a.rawcolliderset_coSetFriction, uw = a.rawcolliderset_coFrictionCombineRule, pw = a.rawcolliderset_coSetFrictionCombineRule, gw = a.rawcolliderset_coRestitutionCombineRule, bw = a.rawcolliderset_coSetRestitutionCombineRule, mw = a.rawcolliderset_coSetCollisionGroups, fw = a.rawcolliderset_coSetSolverGroups, yw = a.rawcolliderset_coSetActiveHooks, vw = a.rawcolliderset_coSetActiveEvents, Rw = a.rawcolliderset_coSetActiveCollisionTypes, Sw = a.rawcolliderset_coSetShape, Cw = a.rawcolliderset_coSetContactForceEventThreshold, Ew = a.rawcolliderset_coSetDensity, xw = a.rawcolliderset_coSetMass, Aw = a.rawcolliderset_coSetMassProperties, Pw = a.__wbg_rawcolliderset_free, jw = a.rawcolliderset_new, Iw = a.rawcolliderset_len, Dw = a.rawcolliderset_contains, Tw = a.rawcolliderset_createCollider, zw = a.rawcolliderset_remove, Fw = a.rawcolliderset_forEachColliderHandle, kw = a.__wbg_rawshapecontact_free, Mw = a.__wbg_rawnarrowphase_free, Nw = a.rawnarrowphase_new, Lw = a.rawnarrowphase_contact_pairs_with, Bw = a.rawnarrowphase_contact_pair, Ow = a.rawnarrowphase_intersection_pairs_with, Hw = a.rawnarrowphase_intersection_pair, Gw = a.__wbg_rawcontactmanifold_free, Vw = a.rawcontactpair_collider1, Ww = a.rawcontactpair_collider2, Uw = a.rawcontactpair_numContactManifolds, Jw = a.rawcontactpair_contactManifold, Kw = a.rawcontactmanifold_normal, qw = a.rawcontactmanifold_local_n1, Xw = a.rawcontactmanifold_local_n2, Yw = a.rawcontactmanifold_subshape1, Qw = a.rawcontactmanifold_subshape2, Zw = a.rawcontactmanifold_num_contacts, $w = a.rawcontactmanifold_contact_local_p1, tu = a.rawcontactmanifold_contact_local_p2, eu = a.rawcontactmanifold_contact_dist, ru = a.rawcontactmanifold_contact_fid1, iu = a.rawcontactmanifold_contact_fid2, nu = a.rawcontactmanifold_contact_impulse, su = a.rawcontactmanifold_contact_tangent_impulse_x, au = a.rawcontactmanifold_contact_tangent_impulse_y, ou = a.rawcontactmanifold_num_solver_contacts, cu = a.rawcontactmanifold_solver_contact_point, lu = a.rawcontactmanifold_solver_contact_dist, _u = a.rawcontactmanifold_solver_contact_friction, du = a.rawcontactmanifold_solver_contact_restitution, hu = a.rawcontactmanifold_solver_contact_tangent_velocity, wu = a.__wbg_rawpointprojection_free, uu = a.rawpointprojection_point, pu = a.rawpointprojection_isInside, gu = a.__wbg_rawpointcolliderprojection_free, bu = a.rawpointcolliderprojection_colliderHandle, mu = a.rawpointcolliderprojection_point, fu = a.rawpointcolliderprojection_isInside, yu = a.rawpointcolliderprojection_featureType, vu = a.rawpointcolliderprojection_featureId, Ru = a.__wbg_rawrayintersection_free, Su = a.__wbg_rawraycolliderhit_free, Cu = a.__wbg_rawshape_free, Eu = a.rawshape_cuboid, xu = a.rawshape_roundCuboid, Au = a.rawshape_ball, Pu = a.rawshape_halfspace, ju = a.rawshape_capsule, Iu = a.rawshape_cylinder, Du = a.rawshape_roundCylinder, Tu = a.rawshape_cone, zu = a.rawshape_roundCone, Fu = a.rawshape_voxels, ku = a.rawshape_voxelsFromPoints, Mu = a.rawshape_polyline, Nu = a.rawshape_trimesh, Lu = a.rawshape_heightfield, Bu = a.rawshape_segment, Ou = a.rawshape_triangle, Hu = a.rawshape_roundTriangle, Gu = a.rawshape_convexHull, Vu = a.rawshape_roundConvexHull, Wu = a.rawshape_convexMesh, Uu = a.rawshape_roundConvexMesh, Ju = a.rawshape_castShape, Ku = a.rawshape_intersectsShape, qu = a.rawshape_contactShape, Xu = a.rawshape_containsPoint, Yu = a.rawshape_projectPoint, Qu = a.rawshape_intersectsRay, Zu = a.rawshape_castRay, $u = a.rawshape_castRayAndGetNormal, tp = a.__wbg_rawshapecasthit_free, ep = a.rawshapecasthit_witness1, rp = a.rawshapecasthit_normal1, ip = a.rawshapecasthit_normal2, np = a.__wbg_rawcollidershapecasthit_free, sp = a.rawcollidershapecasthit_time_of_impact, ap = a.rawcollidershapecasthit_witness1, op = a.rawcollidershapecasthit_witness2, cp = a.rawrotation_new, lp = a.rawrotation_identity, _p = a.rawrotation_w, dp = a.rawvector_zero, hp = a.rawvector_new, wp = a.rawvector_set_y, up = a.rawvector_set_z, pp = a.rawvector_xyz, gp = a.rawvector_yxz, bp = a.rawvector_zxy, mp = a.rawvector_xzy, fp = a.rawvector_yzx, yp = a.rawvector_zyx, vp = a.rawsdpmatrix3_elements, Rp = a.__wbg_rawdebugrenderpipeline_free, Sp = a.rawdebugrenderpipeline_new, Cp = a.rawdebugrenderpipeline_vertices, Ep = a.rawdebugrenderpipeline_colors, xp = a.rawdebugrenderpipeline_render, Ap = a.__wbg_raweventqueue_free, Pp = a.__wbg_rawcontactforceevent_free, jp = a.rawcontactforceevent_collider2, Ip = a.rawcontactforceevent_total_force, Dp = a.rawcontactforceevent_total_force_magnitude, Tp = a.rawcontactforceevent_max_force_direction, zp = a.rawcontactforceevent_max_force_magnitude, Fp = a.raweventqueue_new, kp = a.raweventqueue_drainCollisionEvents, Mp = a.raweventqueue_drainContactForceEvents, Np = a.raweventqueue_clear, Lp = a.__wbg_rawphysicspipeline_free, Bp = a.rawphysicspipeline_new, Op = a.rawphysicspipeline_set_profiler_enabled, Hp = a.rawphysicspipeline_is_profiler_enabled, Gp = a.rawphysicspipeline_timing_step, Vp = a.rawphysicspipeline_timing_collision_detection, Wp = a.rawphysicspipeline_timing_broad_phase, Up = a.rawphysicspipeline_timing_narrow_phase, Jp = a.rawphysicspipeline_timing_solver, Kp = a.rawphysicspipeline_timing_velocity_assembly, qp = a.rawphysicspipeline_timing_velocity_resolution, Xp = a.rawphysicspipeline_timing_velocity_update, Yp = a.rawphysicspipeline_timing_velocity_writeback, Qp = a.rawphysicspipeline_timing_ccd, Zp = a.rawphysicspipeline_timing_ccd_toi_computation, $p = a.rawphysicspipeline_timing_ccd_broad_phase, tg = a.rawphysicspipeline_timing_ccd_narrow_phase, eg = a.rawphysicspipeline_timing_ccd_solver, rg = a.rawphysicspipeline_timing_island_construction, ig = a.rawphysicspipeline_timing_user_changes, ng = a.rawphysicspipeline_step, sg = a.rawphysicspipeline_stepWithEvents, ag = a.__wbg_rawdeserializedworld_free, og = a.rawdeserializedworld_takeGravity, cg = a.rawdeserializedworld_takeIntegrationParameters, lg = a.rawdeserializedworld_takeIslandManager, _g = a.rawdeserializedworld_takeBroadPhase, dg = a.rawdeserializedworld_takeNarrowPhase, hg = a.rawdeserializedworld_takeBodies, wg = a.rawdeserializedworld_takeColliders, ug = a.rawdeserializedworld_takeImpulseJoints, pg = a.rawdeserializedworld_takeMultibodyJoints, gg = a.rawserializationpipeline_serializeAll, bg = a.rawserializationpipeline_deserializeAll, mg = a.rawcolliderset_isHandleValid, fg = a.rawrayintersection_featureId, yg = a.rawraycolliderintersection_featureId, vg = a.rawintegrationparameters_set_numInternalPgsIterations, Rg = a.rawvector_set_x, Sg = a.reserve_memory, Cg = a.rawkinematiccharactercontroller_up, Eg = a.rawshapecontact_normal2, xg = a.rawshapecontact_point1, Ag = a.rawshapecontact_point2, Pg = a.rawrayintersection_normal, jg = a.rawraycolliderintersection_normal, Ig = a.rawshapecontact_normal1, Dg = a.rawcollidershapecasthit_normal1, Tg = a.rawcollidershapecasthit_normal2, zg = a.rawshapecasthit_witness2, Fg = a.rawintegrationparameters_numInternalPgsIterations, kg = a.rawshapecontact_distance, Mg = a.rawrayintersection_featureType, Ng = a.rawraycolliderintersection_colliderHandle, Lg = a.rawrayintersection_time_of_impact, Bg = a.rawraycolliderintersection_featureType, Og = a.rawraycolliderhit_colliderHandle, Hg = a.rawraycolliderintersection_time_of_impact, Gg = a.rawshapecasthit_time_of_impact, Vg = a.rawcollidershapecasthit_colliderHandle, Wg = a.rawraycolliderhit_timeOfImpact, Ug = a.rawrotation_x, Jg = a.rawrotation_y, Kg = a.rawrotation_z, qg = a.rawvector_x, Xg = a.rawvector_y, Yg = a.rawvector_z, Qg = a.rawcontactforceevent_collider1, Zg = a.rawintegrationparameters_lengthUnit, $g = a.__wbg_rawcontactpair_free, tb = a.__wbg_rawraycolliderintersection_free, eb = a.__wbg_rawrotation_free, rb = a.__wbg_rawvector_free, ib = a.__wbg_rawsdpmatrix3_free, nb = a.__wbg_rawserializationpipeline_free, sb = a.rawccdsolver_new, ab = a.rawserializationpipeline_new, ob = a.__wbindgen_export_0, cb = a.__wbindgen_add_to_stack_pointer, lb = a.__wbindgen_export_1, _b = a.__wbindgen_export_2, db = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_rawbroadphase_free: Xd,
    __wbg_rawccdsolver_free: ol,
    __wbg_rawcharactercollision_free: Vo,
    __wbg_rawcolliderset_free: Pw,
    __wbg_rawcollidershapecasthit_free: np,
    __wbg_rawcontactforceevent_free: Pp,
    __wbg_rawcontactmanifold_free: Gw,
    __wbg_rawcontactpair_free: $g,
    __wbg_rawdebugrenderpipeline_free: Rp,
    __wbg_rawdeserializedworld_free: ag,
    __wbg_rawdynamicraycastvehiclecontroller_free: _c,
    __wbg_raweventqueue_free: Ap,
    __wbg_rawgenericjoint_free: e_,
    __wbg_rawimpulsejointset_free: Al,
    __wbg_rawintegrationparameters_free: kl,
    __wbg_rawislandmanager_free: Zl,
    __wbg_rawkinematiccharactercontroller_free: po,
    __wbg_rawmultibodyjointset_free: f_,
    __wbg_rawnarrowphase_free: Mw,
    __wbg_rawphysicspipeline_free: Lp,
    __wbg_rawpidcontroller_free: $o,
    __wbg_rawpointcolliderprojection_free: gu,
    __wbg_rawpointprojection_free: wu,
    __wbg_rawraycolliderhit_free: Su,
    __wbg_rawraycolliderintersection_free: tb,
    __wbg_rawrayintersection_free: Ru,
    __wbg_rawrigidbodyset_free: Hd,
    __wbg_rawrotation_free: eb,
    __wbg_rawsdpmatrix3_free: ib,
    __wbg_rawserializationpipeline_free: nb,
    __wbg_rawshape_free: Cu,
    __wbg_rawshapecasthit_free: tp,
    __wbg_rawshapecontact_free: kw,
    __wbg_rawvector_free: rb,
    __wbindgen_add_to_stack_pointer: cb,
    __wbindgen_export_0: ob,
    __wbindgen_export_1: lb,
    __wbindgen_export_2: _b,
    memory: wo,
    rawbroadphase_castRay: Qd,
    rawbroadphase_castRayAndGetNormal: Zd,
    rawbroadphase_castShape: nh,
    rawbroadphase_collidersWithAabbIntersectingAabb: ah,
    rawbroadphase_intersectionWithShape: th,
    rawbroadphase_intersectionsWithPoint: ih,
    rawbroadphase_intersectionsWithRay: $d,
    rawbroadphase_intersectionsWithShape: sh,
    rawbroadphase_new: Yd,
    rawbroadphase_projectPoint: eh,
    rawbroadphase_projectPointAndGetFeature: rh,
    rawccdsolver_new: sb,
    rawcharactercollision_handle: Uo,
    rawcharactercollision_new: Wo,
    rawcharactercollision_toi: qo,
    rawcharactercollision_translationDeltaApplied: Jo,
    rawcharactercollision_translationDeltaRemaining: Ko,
    rawcharactercollision_worldNormal1: Qo,
    rawcharactercollision_worldNormal2: Zo,
    rawcharactercollision_worldWitness1: Xo,
    rawcharactercollision_worldWitness2: Yo,
    rawcolliderset_coActiveCollisionTypes: Zh,
    rawcolliderset_coActiveEvents: $h,
    rawcolliderset_coActiveHooks: Qh,
    rawcolliderset_coCastCollider: iw,
    rawcolliderset_coCastRay: lw,
    rawcolliderset_coCastRayAndGetNormal: _w,
    rawcolliderset_coCastShape: rw,
    rawcolliderset_coCollisionGroups: Xh,
    rawcolliderset_coCombineVoxelStates: Ih,
    rawcolliderset_coContactCollider: aw,
    rawcolliderset_coContactForceEventThreshold: tw,
    rawcolliderset_coContactShape: sw,
    rawcolliderset_coContactSkin: Vh,
    rawcolliderset_coContainsPoint: ew,
    rawcolliderset_coDensity: Jh,
    rawcolliderset_coFriction: Wh,
    rawcolliderset_coFrictionCombineRule: uw,
    rawcolliderset_coHalfExtents: mh,
    rawcolliderset_coHalfHeight: Rh,
    rawcolliderset_coHalfspaceNormal: bh,
    rawcolliderset_coHeightFieldFlags: Fh,
    rawcolliderset_coHeightfieldHeights: kh,
    rawcolliderset_coHeightfieldNCols: Lh,
    rawcolliderset_coHeightfieldNRows: Nh,
    rawcolliderset_coHeightfieldScale: Mh,
    rawcolliderset_coIndices: Th,
    rawcolliderset_coIntersectsRay: cw,
    rawcolliderset_coIntersectsShape: nw,
    rawcolliderset_coIsEnabled: Hh,
    rawcolliderset_coIsSensor: ph,
    rawcolliderset_coMass: Kh,
    rawcolliderset_coParent: Bh,
    rawcolliderset_coProjectPoint: ow,
    rawcolliderset_coPropagateVoxelChange: jh,
    rawcolliderset_coRadius: yh,
    rawcolliderset_coRestitution: Uh,
    rawcolliderset_coRestitutionCombineRule: gw,
    rawcolliderset_coRotation: ch,
    rawcolliderset_coRotationWrtParent: _h,
    rawcolliderset_coRoundRadius: Ch,
    rawcolliderset_coSetActiveCollisionTypes: Rw,
    rawcolliderset_coSetActiveEvents: vw,
    rawcolliderset_coSetActiveHooks: yw,
    rawcolliderset_coSetCollisionGroups: mw,
    rawcolliderset_coSetContactForceEventThreshold: Cw,
    rawcolliderset_coSetContactSkin: Gh,
    rawcolliderset_coSetDensity: Ew,
    rawcolliderset_coSetEnabled: Oh,
    rawcolliderset_coSetFriction: ww,
    rawcolliderset_coSetFrictionCombineRule: pw,
    rawcolliderset_coSetHalfExtents: fh,
    rawcolliderset_coSetHalfHeight: Sh,
    rawcolliderset_coSetMass: xw,
    rawcolliderset_coSetMassProperties: Aw,
    rawcolliderset_coSetRadius: vh,
    rawcolliderset_coSetRestitution: hw,
    rawcolliderset_coSetRestitutionCombineRule: bw,
    rawcolliderset_coSetRotation: wh,
    rawcolliderset_coSetRotationWrtParent: uh,
    rawcolliderset_coSetRoundRadius: Eh,
    rawcolliderset_coSetSensor: dw,
    rawcolliderset_coSetShape: Sw,
    rawcolliderset_coSetSolverGroups: fw,
    rawcolliderset_coSetTranslation: dh,
    rawcolliderset_coSetTranslationWrtParent: hh,
    rawcolliderset_coSetVoxel: Ph,
    rawcolliderset_coShapeType: gh,
    rawcolliderset_coSolverGroups: Yh,
    rawcolliderset_coTranslation: oh,
    rawcolliderset_coTranslationWrtParent: lh,
    rawcolliderset_coTriMeshFlags: zh,
    rawcolliderset_coVertices: Dh,
    rawcolliderset_coVolume: qh,
    rawcolliderset_coVoxelData: xh,
    rawcolliderset_coVoxelSize: Ah,
    rawcolliderset_contains: Dw,
    rawcolliderset_createCollider: Tw,
    rawcolliderset_forEachColliderHandle: Fw,
    rawcolliderset_isHandleValid: mg,
    rawcolliderset_len: Iw,
    rawcolliderset_new: jw,
    rawcolliderset_remove: zw,
    rawcollidershapecasthit_colliderHandle: Vg,
    rawcollidershapecasthit_normal1: Dg,
    rawcollidershapecasthit_normal2: Tg,
    rawcollidershapecasthit_time_of_impact: sp,
    rawcollidershapecasthit_witness1: ap,
    rawcollidershapecasthit_witness2: op,
    rawcontactforceevent_collider1: Qg,
    rawcontactforceevent_collider2: jp,
    rawcontactforceevent_max_force_direction: Tp,
    rawcontactforceevent_max_force_magnitude: zp,
    rawcontactforceevent_total_force: Ip,
    rawcontactforceevent_total_force_magnitude: Dp,
    rawcontactmanifold_contact_dist: eu,
    rawcontactmanifold_contact_fid1: ru,
    rawcontactmanifold_contact_fid2: iu,
    rawcontactmanifold_contact_impulse: nu,
    rawcontactmanifold_contact_local_p1: $w,
    rawcontactmanifold_contact_local_p2: tu,
    rawcontactmanifold_contact_tangent_impulse_x: su,
    rawcontactmanifold_contact_tangent_impulse_y: au,
    rawcontactmanifold_local_n1: qw,
    rawcontactmanifold_local_n2: Xw,
    rawcontactmanifold_normal: Kw,
    rawcontactmanifold_num_contacts: Zw,
    rawcontactmanifold_num_solver_contacts: ou,
    rawcontactmanifold_solver_contact_dist: lu,
    rawcontactmanifold_solver_contact_friction: _u,
    rawcontactmanifold_solver_contact_point: cu,
    rawcontactmanifold_solver_contact_restitution: du,
    rawcontactmanifold_solver_contact_tangent_velocity: hu,
    rawcontactmanifold_subshape1: Yw,
    rawcontactmanifold_subshape2: Qw,
    rawcontactpair_collider1: Vw,
    rawcontactpair_collider2: Ww,
    rawcontactpair_contactManifold: Jw,
    rawcontactpair_numContactManifolds: Uw,
    rawdebugrenderpipeline_colors: Ep,
    rawdebugrenderpipeline_new: Sp,
    rawdebugrenderpipeline_render: xp,
    rawdebugrenderpipeline_vertices: Cp,
    rawdeserializedworld_takeBodies: hg,
    rawdeserializedworld_takeBroadPhase: _g,
    rawdeserializedworld_takeColliders: wg,
    rawdeserializedworld_takeGravity: og,
    rawdeserializedworld_takeImpulseJoints: ug,
    rawdeserializedworld_takeIntegrationParameters: cg,
    rawdeserializedworld_takeIslandManager: lg,
    rawdeserializedworld_takeMultibodyJoints: pg,
    rawdeserializedworld_takeNarrowPhase: dg,
    rawdynamicraycastvehiclecontroller_add_wheel: mc,
    rawdynamicraycastvehiclecontroller_chassis: wc,
    rawdynamicraycastvehiclecontroller_current_vehicle_speed: hc,
    rawdynamicraycastvehiclecontroller_index_forward_axis: gc,
    rawdynamicraycastvehiclecontroller_index_up_axis: uc,
    rawdynamicraycastvehiclecontroller_new: dc,
    rawdynamicraycastvehiclecontroller_num_wheels: fc,
    rawdynamicraycastvehiclecontroller_set_index_forward_axis: bc,
    rawdynamicraycastvehiclecontroller_set_index_up_axis: pc,
    rawdynamicraycastvehiclecontroller_set_wheel_axle_cs: Jc,
    rawdynamicraycastvehiclecontroller_set_wheel_brake: Lc,
    rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs: Rc,
    rawdynamicraycastvehiclecontroller_set_wheel_direction_cs: Wc,
    rawdynamicraycastvehiclecontroller_set_wheel_engine_force: Gc,
    rawdynamicraycastvehiclecontroller_set_wheel_friction_slip: qc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force: Mc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel: xc,
    rawdynamicraycastvehiclecontroller_set_wheel_radius: Pc,
    rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness: Yc,
    rawdynamicraycastvehiclecontroller_set_wheel_steering: Oc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression: Tc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation: Fc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length: Cc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness: Ic,
    rawdynamicraycastvehiclecontroller_update_vehicle: yc,
    rawdynamicraycastvehiclecontroller_wheel_axle_cs: Uc,
    rawdynamicraycastvehiclecontroller_wheel_brake: Nc,
    rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs: vc,
    rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws: el,
    rawdynamicraycastvehiclecontroller_wheel_contact_point_ws: rl,
    rawdynamicraycastvehiclecontroller_wheel_direction_cs: Vc,
    rawdynamicraycastvehiclecontroller_wheel_engine_force: Hc,
    rawdynamicraycastvehiclecontroller_wheel_forward_impulse: Zc,
    rawdynamicraycastvehiclecontroller_wheel_friction_slip: Kc,
    rawdynamicraycastvehiclecontroller_wheel_ground_object: al,
    rawdynamicraycastvehiclecontroller_wheel_hard_point_ws: nl,
    rawdynamicraycastvehiclecontroller_wheel_is_in_contact: sl,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_force: kc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel: Ec,
    rawdynamicraycastvehiclecontroller_wheel_radius: Ac,
    rawdynamicraycastvehiclecontroller_wheel_rotation: Qc,
    rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness: Xc,
    rawdynamicraycastvehiclecontroller_wheel_side_impulse: $c,
    rawdynamicraycastvehiclecontroller_wheel_steering: Bc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_compression: Dc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_force: tl,
    rawdynamicraycastvehiclecontroller_wheel_suspension_length: il,
    rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation: zc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length: Sc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness: jc,
    raweventqueue_clear: Np,
    raweventqueue_drainCollisionEvents: kp,
    raweventqueue_drainContactForceEvents: Mp,
    raweventqueue_new: Fp,
    rawgenericjoint_fixed: o_,
    rawgenericjoint_generic: r_,
    rawgenericjoint_prismatic: a_,
    rawgenericjoint_revolute: c_,
    rawgenericjoint_rope: n_,
    rawgenericjoint_spherical: s_,
    rawgenericjoint_spring: i_,
    rawimpulsejointset_contains: Tl,
    rawimpulsejointset_createJoint: jl,
    rawimpulsejointset_forEachJointAttachedToRigidBody: Fl,
    rawimpulsejointset_forEachJointHandle: zl,
    rawimpulsejointset_jointAnchor1: wl,
    rawimpulsejointset_jointAnchor2: ul,
    rawimpulsejointset_jointBodyHandle1: ll,
    rawimpulsejointset_jointBodyHandle2: _l,
    rawimpulsejointset_jointConfigureMotor: xl,
    rawimpulsejointset_jointConfigureMotorModel: Sl,
    rawimpulsejointset_jointConfigureMotorPosition: El,
    rawimpulsejointset_jointConfigureMotorVelocity: Cl,
    rawimpulsejointset_jointContactsEnabled: bl,
    rawimpulsejointset_jointFrameX1: dl,
    rawimpulsejointset_jointFrameX2: hl,
    rawimpulsejointset_jointLimitsEnabled: fl,
    rawimpulsejointset_jointLimitsMax: vl,
    rawimpulsejointset_jointLimitsMin: yl,
    rawimpulsejointset_jointSetAnchor1: pl,
    rawimpulsejointset_jointSetAnchor2: gl,
    rawimpulsejointset_jointSetContactsEnabled: ml,
    rawimpulsejointset_jointSetLimits: Rl,
    rawimpulsejointset_jointType: cl,
    rawimpulsejointset_len: Dl,
    rawimpulsejointset_new: Pl,
    rawimpulsejointset_remove: Il,
    rawintegrationparameters_contact_erp: Ll,
    rawintegrationparameters_dt: Nl,
    rawintegrationparameters_lengthUnit: Zg,
    rawintegrationparameters_maxCcdSubsteps: Vl,
    rawintegrationparameters_minIslandSize: Gl,
    rawintegrationparameters_new: Ml,
    rawintegrationparameters_normalizedAllowedLinearError: Bl,
    rawintegrationparameters_normalizedPredictionDistance: Ol,
    rawintegrationparameters_numInternalPgsIterations: Fg,
    rawintegrationparameters_numSolverIterations: Hl,
    rawintegrationparameters_set_contact_natural_frequency: Ul,
    rawintegrationparameters_set_dt: Wl,
    rawintegrationparameters_set_lengthUnit: Ql,
    rawintegrationparameters_set_maxCcdSubsteps: Yl,
    rawintegrationparameters_set_minIslandSize: Xl,
    rawintegrationparameters_set_normalizedAllowedLinearError: Jl,
    rawintegrationparameters_set_normalizedPredictionDistance: Kl,
    rawintegrationparameters_set_numInternalPgsIterations: vg,
    rawintegrationparameters_set_numSolverIterations: ql,
    rawislandmanager_forEachActiveRigidBodyHandle: t_,
    rawislandmanager_new: $l,
    rawkinematiccharactercontroller_autostepEnabled: Ao,
    rawkinematiccharactercontroller_autostepIncludesDynamicBodies: xo,
    rawkinematiccharactercontroller_autostepMaxHeight: Co,
    rawkinematiccharactercontroller_autostepMinWidth: Eo,
    rawkinematiccharactercontroller_computeColliderMovement: Lo,
    rawkinematiccharactercontroller_computedCollision: Go,
    rawkinematiccharactercontroller_computedGrounded: Oo,
    rawkinematiccharactercontroller_computedMovement: Bo,
    rawkinematiccharactercontroller_disableAutostep: jo,
    rawkinematiccharactercontroller_disableSnapToGround: Mo,
    rawkinematiccharactercontroller_enableAutostep: Po,
    rawkinematiccharactercontroller_enableSnapToGround: ko,
    rawkinematiccharactercontroller_maxSlopeClimbAngle: Io,
    rawkinematiccharactercontroller_minSlopeSlideAngle: To,
    rawkinematiccharactercontroller_new: go,
    rawkinematiccharactercontroller_normalNudgeFactor: mo,
    rawkinematiccharactercontroller_numComputedCollisions: Ho,
    rawkinematiccharactercontroller_offset: yo,
    rawkinematiccharactercontroller_setMaxSlopeClimbAngle: Do,
    rawkinematiccharactercontroller_setMinSlopeSlideAngle: zo,
    rawkinematiccharactercontroller_setNormalNudgeFactor: fo,
    rawkinematiccharactercontroller_setOffset: vo,
    rawkinematiccharactercontroller_setSlideEnabled: So,
    rawkinematiccharactercontroller_setUp: bo,
    rawkinematiccharactercontroller_slideEnabled: Ro,
    rawkinematiccharactercontroller_snapToGroundDistance: Fo,
    rawkinematiccharactercontroller_snapToGroundEnabled: No,
    rawkinematiccharactercontroller_up: Cg,
    rawmultibodyjointset_contains: S_,
    rawmultibodyjointset_createJoint: v_,
    rawmultibodyjointset_forEachJointAttachedToRigidBody: E_,
    rawmultibodyjointset_forEachJointHandle: C_,
    rawmultibodyjointset_jointAnchor1: h_,
    rawmultibodyjointset_jointAnchor2: w_,
    rawmultibodyjointset_jointContactsEnabled: u_,
    rawmultibodyjointset_jointFrameX1: __,
    rawmultibodyjointset_jointFrameX2: d_,
    rawmultibodyjointset_jointLimitsEnabled: g_,
    rawmultibodyjointset_jointLimitsMax: m_,
    rawmultibodyjointset_jointLimitsMin: b_,
    rawmultibodyjointset_jointSetContactsEnabled: p_,
    rawmultibodyjointset_jointType: l_,
    rawmultibodyjointset_new: y_,
    rawmultibodyjointset_remove: R_,
    rawnarrowphase_contact_pair: Bw,
    rawnarrowphase_contact_pairs_with: Lw,
    rawnarrowphase_intersection_pair: Hw,
    rawnarrowphase_intersection_pairs_with: Ow,
    rawnarrowphase_new: Nw,
    rawphysicspipeline_is_profiler_enabled: Hp,
    rawphysicspipeline_new: Bp,
    rawphysicspipeline_set_profiler_enabled: Op,
    rawphysicspipeline_step: ng,
    rawphysicspipeline_stepWithEvents: sg,
    rawphysicspipeline_timing_broad_phase: Wp,
    rawphysicspipeline_timing_ccd: Qp,
    rawphysicspipeline_timing_ccd_broad_phase: $p,
    rawphysicspipeline_timing_ccd_narrow_phase: tg,
    rawphysicspipeline_timing_ccd_solver: eg,
    rawphysicspipeline_timing_ccd_toi_computation: Zp,
    rawphysicspipeline_timing_collision_detection: Vp,
    rawphysicspipeline_timing_island_construction: rg,
    rawphysicspipeline_timing_narrow_phase: Up,
    rawphysicspipeline_timing_solver: Jp,
    rawphysicspipeline_timing_step: Gp,
    rawphysicspipeline_timing_user_changes: ig,
    rawphysicspipeline_timing_velocity_assembly: Kp,
    rawphysicspipeline_timing_velocity_resolution: qp,
    rawphysicspipeline_timing_velocity_update: Xp,
    rawphysicspipeline_timing_velocity_writeback: Yp,
    rawpidcontroller_angular_correction: lc,
    rawpidcontroller_apply_angular_correction: oc,
    rawpidcontroller_apply_linear_correction: ac,
    rawpidcontroller_linear_correction: cc,
    rawpidcontroller_new: tc,
    rawpidcontroller_reset_integrals: sc,
    rawpidcontroller_set_axes_mask: nc,
    rawpidcontroller_set_kd: ic,
    rawpidcontroller_set_ki: rc,
    rawpidcontroller_set_kp: ec,
    rawpointcolliderprojection_colliderHandle: bu,
    rawpointcolliderprojection_featureId: vu,
    rawpointcolliderprojection_featureType: yu,
    rawpointcolliderprojection_isInside: fu,
    rawpointcolliderprojection_point: mu,
    rawpointprojection_isInside: pu,
    rawpointprojection_point: uu,
    rawraycolliderhit_colliderHandle: Og,
    rawraycolliderhit_timeOfImpact: Wg,
    rawraycolliderintersection_colliderHandle: Ng,
    rawraycolliderintersection_featureId: yg,
    rawraycolliderintersection_featureType: Bg,
    rawraycolliderintersection_normal: jg,
    rawraycolliderintersection_time_of_impact: Hg,
    rawrayintersection_featureId: fg,
    rawrayintersection_featureType: Mg,
    rawrayintersection_normal: Pg,
    rawrayintersection_time_of_impact: Lg,
    rawrigidbodyset_contains: Jd,
    rawrigidbodyset_createRigidBody: Vd,
    rawrigidbodyset_forEachRigidBodyHandle: Kd,
    rawrigidbodyset_len: Ud,
    rawrigidbodyset_new: Gd,
    rawrigidbodyset_propagateModifiedBodyPositionsToColliders: qd,
    rawrigidbodyset_rbAddForce: jd,
    rawrigidbodyset_rbAddForceAtPoint: zd,
    rawrigidbodyset_rbAddTorque: Dd,
    rawrigidbodyset_rbAdditionalSolverIterations: kd,
    rawrigidbodyset_rbAngularDamping: yd,
    rawrigidbodyset_rbAngvel: V_,
    rawrigidbodyset_rbApplyImpulse: Id,
    rawrigidbodyset_rbApplyImpulseAtPoint: Fd,
    rawrigidbodyset_rbApplyTorqueImpulse: Td,
    rawrigidbodyset_rbBodyType: ud,
    rawrigidbodyset_rbCollider: wd,
    rawrigidbodyset_rbDominanceGroup: X_,
    rawrigidbodyset_rbEffectiveAngularInertia: cd,
    rawrigidbodyset_rbEffectiveInvMass: ed,
    rawrigidbodyset_rbEffectiveWorldInvInertia: od,
    rawrigidbodyset_rbEnableCcd: Q_,
    rawrigidbodyset_rbGravityScale: Ed,
    rawrigidbodyset_rbInvMass: td,
    rawrigidbodyset_rbInvPrincipalInertia: nd,
    rawrigidbodyset_rbIsCcdEnabled: _d,
    rawrigidbodyset_rbIsDynamic: md,
    rawrigidbodyset_rbIsEnabled: Cd,
    rawrigidbodyset_rbIsFixed: gd,
    rawrigidbodyset_rbIsKinematic: bd,
    rawrigidbodyset_rbIsMoving: I_,
    rawrigidbodyset_rbIsSleeping: j_,
    rawrigidbodyset_rbLinearDamping: fd,
    rawrigidbodyset_rbLinvel: G_,
    rawrigidbodyset_rbLocalCom: rd,
    rawrigidbodyset_rbLockRotations: K_,
    rawrigidbodyset_rbLockTranslations: U_,
    rawrigidbodyset_rbMass: $_,
    rawrigidbodyset_rbNextRotation: T_,
    rawrigidbodyset_rbNextTranslation: D_,
    rawrigidbodyset_rbNumColliders: hd,
    rawrigidbodyset_rbPrincipalInertia: ad,
    rawrigidbodyset_rbPrincipalInertiaLocalFrame: sd,
    rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: B_,
    rawrigidbodyset_rbResetForces: Ad,
    rawrigidbodyset_rbResetTorques: Pd,
    rawrigidbodyset_rbRotation: A_,
    rawrigidbodyset_rbSetAdditionalMass: O_,
    rawrigidbodyset_rbSetAdditionalMassProperties: H_,
    rawrigidbodyset_rbSetAdditionalSolverIterations: Md,
    rawrigidbodyset_rbSetAngularDamping: Rd,
    rawrigidbodyset_rbSetAngvel: M_,
    rawrigidbodyset_rbSetBodyType: pd,
    rawrigidbodyset_rbSetDominanceGroup: Y_,
    rawrigidbodyset_rbSetEnabled: Sd,
    rawrigidbodyset_rbSetEnabledRotations: q_,
    rawrigidbodyset_rbSetEnabledTranslations: J_,
    rawrigidbodyset_rbSetGravityScale: xd,
    rawrigidbodyset_rbSetLinearDamping: vd,
    rawrigidbodyset_rbSetLinvel: k_,
    rawrigidbodyset_rbSetNextKinematicRotation: L_,
    rawrigidbodyset_rbSetNextKinematicTranslation: N_,
    rawrigidbodyset_rbSetRotation: F_,
    rawrigidbodyset_rbSetSoftCcdPrediction: Z_,
    rawrigidbodyset_rbSetTranslation: z_,
    rawrigidbodyset_rbSetUserData: Ld,
    rawrigidbodyset_rbSleep: P_,
    rawrigidbodyset_rbSoftCcdPrediction: dd,
    rawrigidbodyset_rbTranslation: x_,
    rawrigidbodyset_rbUserData: Nd,
    rawrigidbodyset_rbUserForce: Bd,
    rawrigidbodyset_rbUserTorque: Od,
    rawrigidbodyset_rbVelocityAtPoint: W_,
    rawrigidbodyset_rbWakeUp: ld,
    rawrigidbodyset_rbWorldCom: id,
    rawrigidbodyset_remove: Wd,
    rawrotation_identity: lp,
    rawrotation_new: cp,
    rawrotation_w: _p,
    rawrotation_x: Ug,
    rawrotation_y: Jg,
    rawrotation_z: Kg,
    rawsdpmatrix3_elements: vp,
    rawserializationpipeline_deserializeAll: bg,
    rawserializationpipeline_new: ab,
    rawserializationpipeline_serializeAll: gg,
    rawshape_ball: Au,
    rawshape_capsule: ju,
    rawshape_castRay: Zu,
    rawshape_castRayAndGetNormal: $u,
    rawshape_castShape: Ju,
    rawshape_cone: Tu,
    rawshape_contactShape: qu,
    rawshape_containsPoint: Xu,
    rawshape_convexHull: Gu,
    rawshape_convexMesh: Wu,
    rawshape_cuboid: Eu,
    rawshape_cylinder: Iu,
    rawshape_halfspace: Pu,
    rawshape_heightfield: Lu,
    rawshape_intersectsRay: Qu,
    rawshape_intersectsShape: Ku,
    rawshape_polyline: Mu,
    rawshape_projectPoint: Yu,
    rawshape_roundCone: zu,
    rawshape_roundConvexHull: Vu,
    rawshape_roundConvexMesh: Uu,
    rawshape_roundCuboid: xu,
    rawshape_roundCylinder: Du,
    rawshape_roundTriangle: Hu,
    rawshape_segment: Bu,
    rawshape_triangle: Ou,
    rawshape_trimesh: Nu,
    rawshape_voxels: Fu,
    rawshape_voxelsFromPoints: ku,
    rawshapecasthit_normal1: rp,
    rawshapecasthit_normal2: ip,
    rawshapecasthit_time_of_impact: Gg,
    rawshapecasthit_witness1: ep,
    rawshapecasthit_witness2: zg,
    rawshapecontact_distance: kg,
    rawshapecontact_normal1: Ig,
    rawshapecontact_normal2: Eg,
    rawshapecontact_point1: xg,
    rawshapecontact_point2: Ag,
    rawvector_new: hp,
    rawvector_set_x: Rg,
    rawvector_set_y: wp,
    rawvector_set_z: up,
    rawvector_x: qg,
    rawvector_xyz: pp,
    rawvector_xzy: mp,
    rawvector_y: Xg,
    rawvector_yxz: gp,
    rawvector_yzx: fp,
    rawvector_z: Yg,
    rawvector_zero: dp,
    rawvector_zxy: bp,
    rawvector_zyx: yp,
    reserve_memory: Sg,
    version: uo
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  va(db);
  class hb {
    constructor(t, e, r) {
      this.x = t, this.y = e, this.z = r;
    }
  }
  class g {
    static new(t, e, r) {
      return new hb(t, e, r);
    }
    static intoRaw(t) {
      return new u(t.x, t.y, t.z);
    }
    static zeros() {
      return g.new(0, 0, 0);
    }
    static fromRaw(t) {
      if (!t) return null;
      let e = g.new(t.x, t.y, t.z);
      return t.free(), e;
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z;
    }
  }
  class Ii {
    constructor(t, e, r, n) {
      this.x = t, this.y = e, this.z = r, this.w = n;
    }
  }
  class M {
    static identity() {
      return new Ii(0, 0, 0, 1);
    }
    static fromRaw(t) {
      if (!t) return null;
      let e = new Ii(t.x, t.y, t.z, t.w);
      return t.free(), e;
    }
    static intoRaw(t) {
      return new N(t.x, t.y, t.z, t.w);
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w;
    }
  }
  class wb {
    get m11() {
      return this.elements[0];
    }
    get m12() {
      return this.elements[1];
    }
    get m21() {
      return this.m12;
    }
    get m13() {
      return this.elements[2];
    }
    get m31() {
      return this.m13;
    }
    get m22() {
      return this.elements[3];
    }
    get m23() {
      return this.elements[4];
    }
    get m32() {
      return this.m23;
    }
    get m33() {
      return this.elements[5];
    }
    constructor(t) {
      this.elements = t;
    }
  }
  class Di {
    static fromRaw(t) {
      const e = new wb(t.elements());
      return t.free(), e;
    }
  }
  var Rt;
  (function(i) {
    i[i.Dynamic = 0] = "Dynamic", i[i.Fixed = 1] = "Fixed", i[i.KinematicPositionBased = 2] = "KinematicPositionBased", i[i.KinematicVelocityBased = 3] = "KinematicVelocityBased";
  })(Rt || (Rt = {}));
  class Ti {
    constructor(t, e, r) {
      this.rawSet = t, this.colliderSet = e, this.handle = r;
    }
    finalizeDeserialization(t) {
      this.colliderSet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    lockTranslations(t, e) {
      return this.rawSet.rbLockTranslations(this.handle, t, e);
    }
    lockRotations(t, e) {
      return this.rawSet.rbLockRotations(this.handle, t, e);
    }
    setEnabledTranslations(t, e, r, n) {
      return this.rawSet.rbSetEnabledTranslations(this.handle, t, e, r, n);
    }
    restrictTranslations(t, e, r, n) {
      this.setEnabledTranslations(t, e, r, n);
    }
    setEnabledRotations(t, e, r, n) {
      return this.rawSet.rbSetEnabledRotations(this.handle, t, e, r, n);
    }
    restrictRotations(t, e, r, n) {
      this.setEnabledRotations(t, e, r, n);
    }
    dominanceGroup() {
      return this.rawSet.rbDominanceGroup(this.handle);
    }
    setDominanceGroup(t) {
      this.rawSet.rbSetDominanceGroup(this.handle, t);
    }
    additionalSolverIterations() {
      return this.rawSet.rbAdditionalSolverIterations(this.handle);
    }
    setAdditionalSolverIterations(t) {
      this.rawSet.rbSetAdditionalSolverIterations(this.handle, t);
    }
    enableCcd(t) {
      this.rawSet.rbEnableCcd(this.handle, t);
    }
    setSoftCcdPrediction(t) {
      this.rawSet.rbSetSoftCcdPrediction(this.handle, t);
    }
    softCcdPrediction() {
      return this.rawSet.rbSoftCcdPrediction(this.handle);
    }
    translation() {
      let t = this.rawSet.rbTranslation(this.handle);
      return g.fromRaw(t);
    }
    rotation() {
      let t = this.rawSet.rbRotation(this.handle);
      return M.fromRaw(t);
    }
    nextTranslation() {
      let t = this.rawSet.rbNextTranslation(this.handle);
      return g.fromRaw(t);
    }
    nextRotation() {
      let t = this.rawSet.rbNextRotation(this.handle);
      return M.fromRaw(t);
    }
    setTranslation(t, e) {
      this.rawSet.rbSetTranslation(this.handle, t.x, t.y, t.z, e);
    }
    setLinvel(t, e) {
      let r = g.intoRaw(t);
      this.rawSet.rbSetLinvel(this.handle, r, e), r.free();
    }
    gravityScale() {
      return this.rawSet.rbGravityScale(this.handle);
    }
    setGravityScale(t, e) {
      this.rawSet.rbSetGravityScale(this.handle, t, e);
    }
    setRotation(t, e) {
      this.rawSet.rbSetRotation(this.handle, t.x, t.y, t.z, t.w, e);
    }
    setAngvel(t, e) {
      let r = g.intoRaw(t);
      this.rawSet.rbSetAngvel(this.handle, r, e), r.free();
    }
    setNextKinematicTranslation(t) {
      this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
    }
    setNextKinematicRotation(t) {
      this.rawSet.rbSetNextKinematicRotation(this.handle, t.x, t.y, t.z, t.w);
    }
    linvel() {
      return g.fromRaw(this.rawSet.rbLinvel(this.handle));
    }
    velocityAtPoint(t) {
      const e = g.intoRaw(t);
      let r = g.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle, e));
      return e.free(), r;
    }
    angvel() {
      return g.fromRaw(this.rawSet.rbAngvel(this.handle));
    }
    mass() {
      return this.rawSet.rbMass(this.handle);
    }
    effectiveInvMass() {
      return g.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
    }
    invMass() {
      return this.rawSet.rbInvMass(this.handle);
    }
    localCom() {
      return g.fromRaw(this.rawSet.rbLocalCom(this.handle));
    }
    worldCom() {
      return g.fromRaw(this.rawSet.rbWorldCom(this.handle));
    }
    invPrincipalInertia() {
      return g.fromRaw(this.rawSet.rbInvPrincipalInertia(this.handle));
    }
    principalInertia() {
      return g.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
    }
    principalInertiaLocalFrame() {
      return M.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
    }
    effectiveWorldInvInertia() {
      return Di.fromRaw(this.rawSet.rbEffectiveWorldInvInertia(this.handle));
    }
    effectiveAngularInertia() {
      return Di.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
    }
    sleep() {
      this.rawSet.rbSleep(this.handle);
    }
    wakeUp() {
      this.rawSet.rbWakeUp(this.handle);
    }
    isCcdEnabled() {
      return this.rawSet.rbIsCcdEnabled(this.handle);
    }
    numColliders() {
      return this.rawSet.rbNumColliders(this.handle);
    }
    collider(t) {
      return this.colliderSet.get(this.rawSet.rbCollider(this.handle, t));
    }
    setEnabled(t) {
      this.rawSet.rbSetEnabled(this.handle, t);
    }
    isEnabled() {
      return this.rawSet.rbIsEnabled(this.handle);
    }
    bodyType() {
      return this.rawSet.rbBodyType(this.handle);
    }
    setBodyType(t, e) {
      return this.rawSet.rbSetBodyType(this.handle, t, e);
    }
    isSleeping() {
      return this.rawSet.rbIsSleeping(this.handle);
    }
    isMoving() {
      return this.rawSet.rbIsMoving(this.handle);
    }
    isFixed() {
      return this.rawSet.rbIsFixed(this.handle);
    }
    isKinematic() {
      return this.rawSet.rbIsKinematic(this.handle);
    }
    isDynamic() {
      return this.rawSet.rbIsDynamic(this.handle);
    }
    linearDamping() {
      return this.rawSet.rbLinearDamping(this.handle);
    }
    angularDamping() {
      return this.rawSet.rbAngularDamping(this.handle);
    }
    setLinearDamping(t) {
      this.rawSet.rbSetLinearDamping(this.handle, t);
    }
    recomputeMassPropertiesFromColliders() {
      this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
    }
    setAdditionalMass(t, e) {
      this.rawSet.rbSetAdditionalMass(this.handle, t, e);
    }
    setAdditionalMassProperties(t, e, r, n, o) {
      let c = g.intoRaw(e), l = g.intoRaw(r), _ = M.intoRaw(n);
      this.rawSet.rbSetAdditionalMassProperties(this.handle, t, c, l, _, o), c.free(), l.free(), _.free();
    }
    setAngularDamping(t) {
      this.rawSet.rbSetAngularDamping(this.handle, t);
    }
    resetForces(t) {
      this.rawSet.rbResetForces(this.handle, t);
    }
    resetTorques(t) {
      this.rawSet.rbResetTorques(this.handle, t);
    }
    addForce(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbAddForce(this.handle, r, e), r.free();
    }
    applyImpulse(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbApplyImpulse(this.handle, r, e), r.free();
    }
    addTorque(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbAddTorque(this.handle, r, e), r.free();
    }
    applyTorqueImpulse(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbApplyTorqueImpulse(this.handle, r, e), r.free();
    }
    addForceAtPoint(t, e, r) {
      const n = g.intoRaw(t), o = g.intoRaw(e);
      this.rawSet.rbAddForceAtPoint(this.handle, n, o, r), n.free(), o.free();
    }
    applyImpulseAtPoint(t, e, r) {
      const n = g.intoRaw(t), o = g.intoRaw(e);
      this.rawSet.rbApplyImpulseAtPoint(this.handle, n, o, r), n.free(), o.free();
    }
    userForce() {
      return g.fromRaw(this.rawSet.rbUserForce(this.handle));
    }
    userTorque() {
      return g.fromRaw(this.rawSet.rbUserTorque(this.handle));
    }
  }
  class xt {
    constructor(t) {
      this.enabled = true, this.status = t, this.translation = g.zeros(), this.rotation = M.identity(), this.gravityScale = 1, this.linvel = g.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = g.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = g.zeros(), this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = M.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
    }
    static dynamic() {
      return new xt(Rt.Dynamic);
    }
    static kinematicPositionBased() {
      return new xt(Rt.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
      return new xt(Rt.KinematicVelocityBased);
    }
    static fixed() {
      return new xt(Rt.Fixed);
    }
    static newDynamic() {
      return new xt(Rt.Dynamic);
    }
    static newKinematicPositionBased() {
      return new xt(Rt.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
      return new xt(Rt.KinematicVelocityBased);
    }
    static newStatic() {
      return new xt(Rt.Fixed);
    }
    setDominanceGroup(t) {
      return this.dominanceGroup = t, this;
    }
    setAdditionalSolverIterations(t) {
      return this.additionalSolverIterations = t, this;
    }
    setEnabled(t) {
      return this.enabled = t, this;
    }
    setTranslation(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setRotation(t) {
      return M.copy(this.rotation, t), this;
    }
    setGravityScale(t) {
      return this.gravityScale = t, this;
    }
    setAdditionalMass(t) {
      return this.mass = t, this.massOnly = true, this;
    }
    setLinvel(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The linvel components must be numbers.");
      return this.linvel = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setAngvel(t) {
      return g.copy(this.angvel, t), this;
    }
    setAdditionalMassProperties(t, e, r, n) {
      return this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), M.copy(this.angularInertiaLocalFrame, n), this.massOnly = false, this;
    }
    enabledTranslations(t, e, r) {
      return this.translationsEnabledX = t, this.translationsEnabledY = e, this.translationsEnabledZ = r, this;
    }
    restrictTranslations(t, e, r) {
      return this.enabledTranslations(t, e, r);
    }
    lockTranslations() {
      return this.enabledTranslations(false, false, false);
    }
    enabledRotations(t, e, r) {
      return this.rotationsEnabledX = t, this.rotationsEnabledY = e, this.rotationsEnabledZ = r, this;
    }
    restrictRotations(t, e, r) {
      return this.enabledRotations(t, e, r);
    }
    lockRotations() {
      return this.restrictRotations(false, false, false);
    }
    setLinearDamping(t) {
      return this.linearDamping = t, this;
    }
    setAngularDamping(t) {
      return this.angularDamping = t, this;
    }
    setCanSleep(t) {
      return this.canSleep = t, this;
    }
    setSleeping(t) {
      return this.sleeping = t, this;
    }
    setCcdEnabled(t) {
      return this.ccdEnabled = t, this;
    }
    setSoftCcdPrediction(t) {
      return this.softCcdPrediction = t, this;
    }
    setUserData(t) {
      return this.userData = t, this;
    }
  }
  class Ke {
    constructor() {
      this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
    }
    set(t, e) {
      let r = this.index(t);
      for (; this.data.length <= r; ) this.data.push(null);
      this.data[r] == null && (this.size += 1), this.data[r] = e;
    }
    len() {
      return this.size;
    }
    delete(t) {
      let e = this.index(t);
      e < this.data.length && (this.data[e] != null && (this.size -= 1), this.data[e] = null);
    }
    clear() {
      this.data = new Array();
    }
    get(t) {
      let e = this.index(t);
      return e < this.data.length ? this.data[e] : null;
    }
    forEach(t) {
      for (const e of this.data) e != null && t(e);
    }
    getAll() {
      return this.data.filter((t) => t != null);
    }
    index(t) {
      return this.fconv[0] = t, this.uconv[0];
    }
  }
  class ub {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new K(), this.map = new Ke(), t && t.forEachRigidBodyHandle((e) => {
        this.map.set(e, new Ti(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createRigidBody(t, e) {
      let r = g.intoRaw(e.translation), n = M.intoRaw(e.rotation), o = g.intoRaw(e.linvel), c = g.intoRaw(e.centerOfMass), l = g.intoRaw(e.angvel), _ = g.intoRaw(e.principalAngularInertia), h = M.intoRaw(e.angularInertiaLocalFrame), p = this.raw.createRigidBody(e.enabled, r, n, e.gravityScale, e.mass, e.massOnly, c, o, l, _, h, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.softCcdPrediction, e.ccdEnabled, e.dominanceGroup, e.additionalSolverIterations);
      r.free(), n.free(), o.free(), c.free(), l.free(), _.free(), h.free();
      const w = new Ti(this.raw, t, p);
      return w.userData = e.userData, this.map.set(p, w), w;
    }
    remove(t, e, r, n, o) {
      for (let c = 0; c < this.raw.rbNumColliders(t); c += 1) r.unmap(this.raw.rbCollider(t, c));
      n.forEachJointHandleAttachedToRigidBody(t, (c) => n.unmap(c)), o.forEachJointHandleAttachedToRigidBody(t, (c) => o.unmap(c)), this.raw.remove(t, e.raw, r.raw, n.raw, o.raw), this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachActiveRigidBody(t, e) {
      t.forEachActiveRigidBodyHandle((r) => {
        e(this.get(r));
      });
    }
    getAll() {
      return this.map.getAll();
    }
  }
  class pb {
    constructor(t) {
      this.raw = t || new Xt();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    get dt() {
      return this.raw.dt;
    }
    get contact_erp() {
      return this.raw.contact_erp;
    }
    get lengthUnit() {
      return this.raw.lengthUnit;
    }
    get normalizedAllowedLinearError() {
      return this.raw.normalizedAllowedLinearError;
    }
    get normalizedPredictionDistance() {
      return this.raw.normalizedPredictionDistance;
    }
    get numSolverIterations() {
      return this.raw.numSolverIterations;
    }
    get numInternalPgsIterations() {
      return this.raw.numInternalPgsIterations;
    }
    get minIslandSize() {
      return this.raw.minIslandSize;
    }
    get maxCcdSubsteps() {
      return this.raw.maxCcdSubsteps;
    }
    set dt(t) {
      this.raw.dt = t;
    }
    set contact_natural_frequency(t) {
      this.raw.contact_natural_frequency = t;
    }
    set lengthUnit(t) {
      this.raw.lengthUnit = t;
    }
    set normalizedAllowedLinearError(t) {
      this.raw.normalizedAllowedLinearError = t;
    }
    set normalizedPredictionDistance(t) {
      this.raw.normalizedPredictionDistance = t;
    }
    set numSolverIterations(t) {
      this.raw.numSolverIterations = t;
    }
    set numInternalPgsIterations(t) {
      this.raw.numInternalPgsIterations = t;
    }
    set minIslandSize(t) {
      this.raw.minIslandSize = t;
    }
    set maxCcdSubsteps(t) {
      this.raw.maxCcdSubsteps = t;
    }
  }
  var _t;
  (function(i) {
    i[i.Revolute = 0] = "Revolute", i[i.Fixed = 1] = "Fixed", i[i.Prismatic = 2] = "Prismatic", i[i.Rope = 3] = "Rope", i[i.Spring = 4] = "Spring", i[i.Spherical = 5] = "Spherical", i[i.Generic = 6] = "Generic";
  })(_t || (_t = {}));
  var zi;
  (function(i) {
    i[i.AccelerationBased = 0] = "AccelerationBased", i[i.ForceBased = 1] = "ForceBased";
  })(zi || (zi = {}));
  var Fi;
  (function(i) {
    i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ";
  })(Fi || (Fi = {}));
  class Pt {
    constructor(t, e, r) {
      this.rawSet = t, this.bodySet = e, this.handle = r;
    }
    static newTyped(t, e, r) {
      switch (t.jointType(r)) {
        case St.Revolute:
          return new yb(t, e, r);
        case St.Prismatic:
          return new fb(t, e, r);
        case St.Fixed:
          return new gb(t, e, r);
        case St.Spring:
          return new mb(t, e, r);
        case St.Rope:
          return new bb(t, e, r);
        case St.Spherical:
          return new Rb(t, e, r);
        case St.Generic:
          return new vb(t, e, r);
        default:
          return new Pt(t, e, r);
      }
    }
    finalizeDeserialization(t) {
      this.bodySet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    body1() {
      return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
    }
    body2() {
      return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
    }
    type() {
      return this.rawSet.jointType(this.handle);
    }
    frameX1() {
      return M.fromRaw(this.rawSet.jointFrameX1(this.handle));
    }
    frameX2() {
      return M.fromRaw(this.rawSet.jointFrameX2(this.handle));
    }
    anchor1() {
      return g.fromRaw(this.rawSet.jointAnchor1(this.handle));
    }
    anchor2() {
      return g.fromRaw(this.rawSet.jointAnchor2(this.handle));
    }
    setAnchor1(t) {
      const e = g.intoRaw(t);
      this.rawSet.jointSetAnchor1(this.handle, e), e.free();
    }
    setAnchor2(t) {
      const e = g.intoRaw(t);
      this.rawSet.jointSetAnchor2(this.handle, e), e.free();
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  }
  class bn extends Pt {
    limitsEnabled() {
      return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
    }
    limitsMin() {
      return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
    }
    limitsMax() {
      return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
    }
    setLimits(t, e) {
      this.rawSet.jointSetLimits(this.handle, this.rawAxis(), t, e);
    }
    configureMotorModel(t) {
      this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), t);
    }
    configureMotorVelocity(t, e) {
      this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), t, e);
    }
    configureMotorPosition(t, e, r) {
      this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), t, e, r);
    }
    configureMotor(t, e, r, n) {
      this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), t, e, r, n);
    }
  }
  class gb extends Pt {
  }
  class bb extends Pt {
  }
  class mb extends Pt {
  }
  class fb extends bn {
    rawAxis() {
      return He.LinX;
    }
  }
  class yb extends bn {
    rawAxis() {
      return He.AngX;
    }
  }
  class vb extends Pt {
  }
  class Rb extends Pt {
  }
  class Tt {
    constructor() {
    }
    static fixed(t, e, r, n) {
      let o = new Tt();
      return o.anchor1 = t, o.anchor2 = r, o.frame1 = e, o.frame2 = n, o.jointType = _t.Fixed, o;
    }
    static spring(t, e, r, n, o) {
      let c = new Tt();
      return c.anchor1 = n, c.anchor2 = o, c.length = t, c.stiffness = e, c.damping = r, c.jointType = _t.Spring, c;
    }
    static rope(t, e, r) {
      let n = new Tt();
      return n.anchor1 = e, n.anchor2 = r, n.length = t, n.jointType = _t.Rope, n;
    }
    static generic(t, e, r, n) {
      let o = new Tt();
      return o.anchor1 = t, o.anchor2 = e, o.axis = r, o.axesMask = n, o.jointType = _t.Generic, o;
    }
    static spherical(t, e) {
      let r = new Tt();
      return r.anchor1 = t, r.anchor2 = e, r.jointType = _t.Spherical, r;
    }
    static prismatic(t, e, r) {
      let n = new Tt();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = _t.Prismatic, n;
    }
    static revolute(t, e, r) {
      let n = new Tt();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = _t.Revolute, n;
    }
    intoRaw() {
      let t = g.intoRaw(this.anchor1), e = g.intoRaw(this.anchor2), r, n, o = false, c = 0, l = 0;
      switch (this.jointType) {
        case _t.Fixed:
          let _ = M.intoRaw(this.frame1), h = M.intoRaw(this.frame2);
          n = lt.fixed(t, _, e, h), _.free(), h.free();
          break;
        case _t.Spring:
          n = lt.spring(this.length, this.stiffness, this.damping, t, e);
          break;
        case _t.Rope:
          n = lt.rope(this.length, t, e);
          break;
        case _t.Prismatic:
          r = g.intoRaw(this.axis), this.limitsEnabled && (o = true, c = this.limits[0], l = this.limits[1]), n = lt.prismatic(t, e, r, o, c, l), r.free();
          break;
        case _t.Generic:
          r = g.intoRaw(this.axis);
          let p = this.axesMask;
          n = lt.generic(t, e, r, p);
          break;
        case _t.Spherical:
          n = lt.spherical(t, e);
          break;
        case _t.Revolute:
          r = g.intoRaw(this.axis), n = lt.revolute(t, e, r), r.free();
          break;
      }
      return t.free(), e.free(), n;
    }
  }
  class Sb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Ft(), this.map = new Ke(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Pt.newTyped(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createJoint(t, e, r, n, o) {
      const c = e.intoRaw(), l = this.raw.createJoint(c, r, n, o);
      c.free();
      let _ = Pt.newTyped(this.raw, t, l);
      return this.map.set(l, _), _;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.unmap(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  }
  class Yt {
    constructor(t, e) {
      this.rawSet = t, this.handle = e;
    }
    static newTyped(t, e) {
      switch (t.jointType(e)) {
        case St.Revolute:
          return new xb(t, e);
        case St.Prismatic:
          return new Eb(t, e);
        case St.Fixed:
          return new Cb(t, e);
        case St.Spherical:
          return new Ab(t, e);
        default:
          return new Yt(t, e);
      }
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  }
  class mn extends Yt {
  }
  class Cb extends Yt {
  }
  class Eb extends mn {
    rawAxis() {
      return He.LinX;
    }
  }
  class xb extends mn {
    rawAxis() {
      return He.AngX;
    }
  }
  class Ab extends Yt {
  }
  class Pb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Mt(), this.map = new Ke(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Yt.newTyped(this.raw, e));
      });
    }
    createJoint(t, e, r, n) {
      const o = t.intoRaw(), c = this.raw.createJoint(o, e, r, n);
      o.free();
      let l = Yt.newTyped(this.raw, c);
      return this.map.set(c, l), l;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.map.delete(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    getAll() {
      return this.map.getAll();
    }
  }
  var ze;
  (function(i) {
    i[i.Average = 0] = "Average", i[i.Min = 1] = "Min", i[i.Multiply = 2] = "Multiply", i[i.Max = 3] = "Max";
  })(ze || (ze = {}));
  class jb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Rr();
    }
  }
  class Ib {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new kt();
    }
    forEachActiveRigidBodyHandle(t) {
      this.raw.forEachActiveRigidBodyHandle(t);
    }
  }
  var Re;
  (function(i) {
    i[i.Vertex = 0] = "Vertex", i[i.Edge = 1] = "Edge", i[i.Face = 2] = "Face", i[i.Unknown = 3] = "Unknown";
  })(Re || (Re = {}));
  class qe {
    constructor(t, e, r, n) {
      this.featureType = Re.Unknown, this.featureId = void 0, this.timeOfImpact = t, this.normal = e, n !== void 0 && (this.featureId = n), r !== void 0 && (this.featureType = r);
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new qe(t.time_of_impact(), g.fromRaw(t.normal()), t.featureType(), t.featureId());
      return t.free(), e;
    }
  }
  class Fe {
    constructor(t, e, r, n, o) {
      this.featureType = Re.Unknown, this.featureId = void 0, this.collider = t, this.timeOfImpact = e, this.normal = r, o !== void 0 && (this.featureId = o), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Fe(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.normal()), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class Lr {
    constructor(t, e) {
      this.collider = t, this.timeOfImpact = e;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Lr(t.get(e.colliderHandle()), e.timeOfImpact());
      return e.free(), r;
    }
  }
  class Xe {
    constructor(t, e) {
      this.point = t, this.isInside = e;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new Xe(g.fromRaw(t.point()), t.isInside());
      return t.free(), e;
    }
  }
  class ke {
    constructor(t, e, r, n, o) {
      this.featureType = Re.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = r, o !== void 0 && (this.featureId = o), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new ke(t.get(e.colliderHandle()), g.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class Ce {
    constructor(t, e, r, n, o) {
      this.time_of_impact = t, this.witness1 = e, this.witness2 = r, this.normal1 = n, this.normal2 = o;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Ce(e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class Ye extends Ce {
    constructor(t, e, r, n, o, c) {
      super(e, r, n, o, c), this.collider = t;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Ye(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class Db {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new zt();
    }
    castRay(t, e, r, n, o, c, l, _, h, p, w) {
      let b = g.intoRaw(n.origin), f = g.intoRaw(n.dir), R = Lr.fromRaw(r, this.raw.castRay(t.raw, e.raw, r.raw, b, f, o, c, l, _, h, p, w));
      return b.free(), f.free(), R;
    }
    castRayAndGetNormal(t, e, r, n, o, c, l, _, h, p, w) {
      let b = g.intoRaw(n.origin), f = g.intoRaw(n.dir), R = Fe.fromRaw(r, this.raw.castRayAndGetNormal(t.raw, e.raw, r.raw, b, f, o, c, l, _, h, p, w));
      return b.free(), f.free(), R;
    }
    intersectionsWithRay(t, e, r, n, o, c, l, _, h, p, w, b) {
      let f = g.intoRaw(n.origin), R = g.intoRaw(n.dir), D = (P) => l(Fe.fromRaw(r, P));
      this.raw.intersectionsWithRay(t.raw, e.raw, r.raw, f, R, o, c, D, _, h, p, w, b), f.free(), R.free();
    }
    intersectionWithShape(t, e, r, n, o, c, l, _, h, p, w) {
      let b = g.intoRaw(n), f = M.intoRaw(o), R = c.intoRaw(), D = this.raw.intersectionWithShape(t.raw, e.raw, r.raw, b, f, R, l, _, h, p, w);
      return b.free(), f.free(), R.free(), D;
    }
    projectPoint(t, e, r, n, o, c, l, _, h, p) {
      let w = g.intoRaw(n), b = ke.fromRaw(r, this.raw.projectPoint(t.raw, e.raw, r.raw, w, o, c, l, _, h, p));
      return w.free(), b;
    }
    projectPointAndGetFeature(t, e, r, n, o, c, l, _, h) {
      let p = g.intoRaw(n), w = ke.fromRaw(r, this.raw.projectPointAndGetFeature(t.raw, e.raw, r.raw, p, o, c, l, _, h));
      return p.free(), w;
    }
    intersectionsWithPoint(t, e, r, n, o, c, l, _, h, p) {
      let w = g.intoRaw(n);
      this.raw.intersectionsWithPoint(t.raw, e.raw, r.raw, w, o, c, l, _, h, p), w.free();
    }
    castShape(t, e, r, n, o, c, l, _, h, p, w, b, f, R, D) {
      let P = g.intoRaw(n), I = M.intoRaw(o), v = g.intoRaw(c), S = l.intoRaw(), E = Ye.fromRaw(r, this.raw.castShape(t.raw, e.raw, r.raw, P, I, v, S, _, h, p, w, b, f, R, D));
      return P.free(), I.free(), v.free(), S.free(), E;
    }
    intersectionsWithShape(t, e, r, n, o, c, l, _, h, p, w, b) {
      let f = g.intoRaw(n), R = M.intoRaw(o), D = c.intoRaw();
      this.raw.intersectionsWithShape(t.raw, e.raw, r.raw, f, R, D, l, _, h, p, w, b), f.free(), R.free(), D.free();
    }
    collidersWithAabbIntersectingAabb(t, e, r, n, o, c) {
      let l = g.intoRaw(n), _ = g.intoRaw(o);
      this.raw.collidersWithAabbIntersectingAabb(t.raw, e.raw, r.raw, l, _, c), l.free(), _.free();
    }
  }
  class Tb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new rt(), this.tempManifold = new zb(null);
    }
    contactPairsWith(t, e) {
      this.raw.contact_pairs_with(t, e);
    }
    intersectionPairsWith(t, e) {
      this.raw.intersection_pairs_with(t, e);
    }
    contactPair(t, e, r) {
      const n = this.raw.contact_pair(t, e);
      if (n) {
        const o = n.collider1() != t;
        let c;
        for (c = 0; c < n.numContactManifolds(); ++c) this.tempManifold.raw = n.contactManifold(c), this.tempManifold.raw && r(this.tempManifold, o), this.tempManifold.free();
        n.free();
      }
    }
    intersectionPair(t, e) {
      return this.raw.intersection_pair(t, e);
    }
  }
  class zb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t;
    }
    normal() {
      return g.fromRaw(this.raw.normal());
    }
    localNormal1() {
      return g.fromRaw(this.raw.local_n1());
    }
    localNormal2() {
      return g.fromRaw(this.raw.local_n2());
    }
    subshape1() {
      return this.raw.subshape1();
    }
    subshape2() {
      return this.raw.subshape2();
    }
    numContacts() {
      return this.raw.num_contacts();
    }
    localContactPoint1(t) {
      return g.fromRaw(this.raw.contact_local_p1(t));
    }
    localContactPoint2(t) {
      return g.fromRaw(this.raw.contact_local_p2(t));
    }
    contactDist(t) {
      return this.raw.contact_dist(t);
    }
    contactFid1(t) {
      return this.raw.contact_fid1(t);
    }
    contactFid2(t) {
      return this.raw.contact_fid2(t);
    }
    contactImpulse(t) {
      return this.raw.contact_impulse(t);
    }
    contactTangentImpulseX(t) {
      return this.raw.contact_tangent_impulse_x(t);
    }
    contactTangentImpulseY(t) {
      return this.raw.contact_tangent_impulse_y(t);
    }
    numSolverContacts() {
      return this.raw.num_solver_contacts();
    }
    solverContactPoint(t) {
      return g.fromRaw(this.raw.solver_contact_point(t));
    }
    solverContactDist(t) {
      return this.raw.solver_contact_dist(t);
    }
    solverContactFriction(t) {
      return this.raw.solver_contact_friction(t);
    }
    solverContactRestitution(t) {
      return this.raw.solver_contact_restitution(t);
    }
    solverContactTangentVelocity(t) {
      return g.fromRaw(this.raw.solver_contact_tangent_velocity(t));
    }
  }
  class Se {
    constructor(t, e, r, n, o) {
      this.distance = t, this.point1 = e, this.point2 = r, this.normal1 = n, this.normal2 = o;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new Se(t.distance(), g.fromRaw(t.point1()), g.fromRaw(t.point2()), g.fromRaw(t.normal1()), g.fromRaw(t.normal2()));
      return t.free(), e;
    }
  }
  class at {
    static fromRaw(t, e) {
      const r = t.coShapeType(e);
      let n, o, c, l, _, h, p;
      switch (r) {
        case ot.Ball:
          return new Br(t.coRadius(e));
        case ot.Cuboid:
          return n = t.coHalfExtents(e), new Ee(n.x, n.y, n.z);
        case ot.RoundCuboid:
          return n = t.coHalfExtents(e), o = t.coRoundRadius(e), new fn(n.x, n.y, n.z, o);
        case ot.Capsule:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new yn(_, h);
        case ot.Segment:
          return c = t.coVertices(e), new vn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]));
        case ot.Polyline:
          return c = t.coVertices(e), l = t.coIndices(e), new Cn(c, l);
        case ot.Triangle:
          return c = t.coVertices(e), new Rn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]));
        case ot.RoundTriangle:
          return c = t.coVertices(e), o = t.coRoundRadius(e), new Sn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]), o);
        case ot.HalfSpace:
          return p = g.fromRaw(t.coHalfspaceNormal(e)), new Fb(p);
        case ot.Voxels:
          const w = t.coVoxelData(e), b = t.coVoxelSize(e);
          return new En(w, b);
        case ot.TriMesh:
          c = t.coVertices(e), l = t.coIndices(e);
          const f = t.coTriMeshFlags(e);
          return new Or(c, l, f);
        case ot.HeightField:
          const R = t.coHeightfieldScale(e), D = t.coHeightfieldHeights(e), P = t.coHeightfieldNRows(e), I = t.coHeightfieldNCols(e), v = t.coHeightFieldFlags(e);
          return new xn(P, I, D, R, v);
        case ot.ConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), new Cr(c, l);
        case ot.RoundConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), o = t.coRoundRadius(e), new Er(c, l, o);
        case ot.Cylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new An(_, h);
        case ot.RoundCylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), o = t.coRoundRadius(e), new Pn(_, h, o);
        case ot.Cone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new jn(_, h);
        case ot.RoundCone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), o = t.coRoundRadius(e), new In(_, h, o);
        default:
          throw new Error("unknown shape type: " + r);
      }
    }
    castShape(t, e, r, n, o, c, l, _, h, p) {
      let w = g.intoRaw(t), b = M.intoRaw(e), f = g.intoRaw(r), R = g.intoRaw(o), D = M.intoRaw(c), P = g.intoRaw(l), I = this.intoRaw(), v = n.intoRaw(), S = Ce.fromRaw(null, I.castShape(w, b, f, v, R, D, P, _, h, p));
      return w.free(), b.free(), f.free(), R.free(), D.free(), P.free(), I.free(), v.free(), S;
    }
    intersectsShape(t, e, r, n, o) {
      let c = g.intoRaw(t), l = M.intoRaw(e), _ = g.intoRaw(n), h = M.intoRaw(o), p = this.intoRaw(), w = r.intoRaw(), b = p.intersectsShape(c, l, w, _, h);
      return c.free(), l.free(), _.free(), h.free(), p.free(), w.free(), b;
    }
    contactShape(t, e, r, n, o, c) {
      let l = g.intoRaw(t), _ = M.intoRaw(e), h = g.intoRaw(n), p = M.intoRaw(o), w = this.intoRaw(), b = r.intoRaw(), f = Se.fromRaw(w.contactShape(l, _, b, h, p, c));
      return l.free(), _.free(), h.free(), p.free(), w.free(), b.free(), f;
    }
    containsPoint(t, e, r) {
      let n = g.intoRaw(t), o = M.intoRaw(e), c = g.intoRaw(r), l = this.intoRaw(), _ = l.containsPoint(n, o, c);
      return n.free(), o.free(), c.free(), l.free(), _;
    }
    projectPoint(t, e, r, n) {
      let o = g.intoRaw(t), c = M.intoRaw(e), l = g.intoRaw(r), _ = this.intoRaw(), h = Xe.fromRaw(_.projectPoint(o, c, l, n));
      return o.free(), c.free(), l.free(), _.free(), h;
    }
    intersectsRay(t, e, r, n) {
      let o = g.intoRaw(e), c = M.intoRaw(r), l = g.intoRaw(t.origin), _ = g.intoRaw(t.dir), h = this.intoRaw(), p = h.intersectsRay(o, c, l, _, n);
      return o.free(), c.free(), l.free(), _.free(), h.free(), p;
    }
    castRay(t, e, r, n, o) {
      let c = g.intoRaw(e), l = M.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), p = this.intoRaw(), w = p.castRay(c, l, _, h, n, o);
      return c.free(), l.free(), _.free(), h.free(), p.free(), w;
    }
    castRayAndGetNormal(t, e, r, n, o) {
      let c = g.intoRaw(e), l = M.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), p = this.intoRaw(), w = qe.fromRaw(p.castRayAndGetNormal(c, l, _, h, n, o));
      return c.free(), l.free(), _.free(), h.free(), p.free(), w;
    }
  }
  var it;
  (function(i) {
    i[i.Ball = 0] = "Ball", i[i.Cuboid = 1] = "Cuboid", i[i.Capsule = 2] = "Capsule", i[i.Segment = 3] = "Segment", i[i.Polyline = 4] = "Polyline", i[i.Triangle = 5] = "Triangle", i[i.TriMesh = 6] = "TriMesh", i[i.HeightField = 7] = "HeightField", i[i.ConvexPolyhedron = 9] = "ConvexPolyhedron", i[i.Cylinder = 10] = "Cylinder", i[i.Cone = 11] = "Cone", i[i.RoundCuboid = 12] = "RoundCuboid", i[i.RoundTriangle = 13] = "RoundTriangle", i[i.RoundCylinder = 14] = "RoundCylinder", i[i.RoundCone = 15] = "RoundCone", i[i.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", i[i.HalfSpace = 17] = "HalfSpace", i[i.Voxels = 18] = "Voxels";
  })(it || (it = {}));
  var ki;
  (function(i) {
    i[i.FIX_INTERNAL_EDGES = 1] = "FIX_INTERNAL_EDGES";
  })(ki || (ki = {}));
  var Sr;
  (function(i) {
    i[i.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", i[i.ORIENTED = 8] = "ORIENTED", i[i.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", i[i.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", i[i.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", i[i.FIX_INTERNAL_EDGES = 144] = "FIX_INTERNAL_EDGES";
  })(Sr || (Sr = {}));
  class Br extends at {
    constructor(t) {
      super(), this.type = it.Ball, this.radius = t;
    }
    intoRaw() {
      return z.ball(this.radius);
    }
  }
  class Fb extends at {
    constructor(t) {
      super(), this.type = it.HalfSpace, this.normal = t;
    }
    intoRaw() {
      let t = g.intoRaw(this.normal), e = z.halfspace(t);
      return t.free(), e;
    }
  }
  class Ee extends at {
    constructor(t, e, r) {
      super(), this.type = it.Cuboid, this.halfExtents = g.new(t, e, r);
    }
    intoRaw() {
      return z.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
    }
  }
  class fn extends at {
    constructor(t, e, r, n) {
      super(), this.type = it.RoundCuboid, this.halfExtents = g.new(t, e, r), this.borderRadius = n;
    }
    intoRaw() {
      return z.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
    }
  }
  class yn extends at {
    constructor(t, e) {
      super(), this.type = it.Capsule, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return z.capsule(this.halfHeight, this.radius);
    }
  }
  class vn extends at {
    constructor(t, e) {
      super(), this.type = it.Segment, this.a = t, this.b = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = z.segment(t, e);
      return t.free(), e.free(), r;
    }
  }
  class Rn extends at {
    constructor(t, e, r) {
      super(), this.type = it.Triangle, this.a = t, this.b = e, this.c = r;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = z.triangle(t, e, r);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class Sn extends at {
    constructor(t, e, r, n) {
      super(), this.type = it.RoundTriangle, this.a = t, this.b = e, this.c = r, this.borderRadius = n;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = z.roundTriangle(t, e, r, this.borderRadius);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class Cn extends at {
    constructor(t, e) {
      super(), this.type = it.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
    }
    intoRaw() {
      return z.polyline(this.vertices, this.indices);
    }
  }
  class En extends at {
    constructor(t, e) {
      super(), this.type = it.Voxels, this.data = t, this.voxelSize = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.voxelSize), e;
      return this.data instanceof Int32Array ? e = z.voxels(t, this.data) : e = z.voxelsFromPoints(t, this.data), t.free(), e;
    }
  }
  let Or = class extends at {
    constructor(t, e, r) {
      super(), this.type = it.TriMesh, this.vertices = t, this.indices = e, this.flags = r;
    }
    intoRaw() {
      return z.trimesh(this.vertices, this.indices, this.flags);
    }
  };
  class Cr extends at {
    constructor(t, e) {
      super(), this.type = it.ConvexPolyhedron, this.vertices = t, this.indices = e;
    }
    intoRaw() {
      return this.indices ? z.convexMesh(this.vertices, this.indices) : z.convexHull(this.vertices);
    }
  }
  class Er extends at {
    constructor(t, e, r) {
      super(), this.type = it.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = r;
    }
    intoRaw() {
      return this.indices ? z.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : z.roundConvexHull(this.vertices, this.borderRadius);
    }
  }
  class xn extends at {
    constructor(t, e, r, n, o) {
      super(), this.type = it.HeightField, this.nrows = t, this.ncols = e, this.heights = r, this.scale = n, this.flags = o;
    }
    intoRaw() {
      let t = g.intoRaw(this.scale), e = z.heightfield(this.nrows, this.ncols, this.heights, t, this.flags);
      return t.free(), e;
    }
  }
  class An extends at {
    constructor(t, e) {
      super(), this.type = it.Cylinder, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return z.cylinder(this.halfHeight, this.radius);
    }
  }
  class Pn extends at {
    constructor(t, e, r) {
      super(), this.type = it.RoundCylinder, this.borderRadius = r, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return z.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class jn extends at {
    constructor(t, e) {
      super(), this.type = it.Cone, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return z.cone(this.halfHeight, this.radius);
    }
  }
  class In extends at {
    constructor(t, e, r) {
      super(), this.type = it.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = r;
    }
    intoRaw() {
      return z.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class kb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Da();
    }
    step(t, e, r, n, o, c, l, _, h, p, w, b) {
      let f = g.intoRaw(t);
      w ? this.raw.stepWithEvents(f, e.raw, r.raw, n.raw, o.raw, c.raw, l.raw, _.raw, h.raw, p.raw, w.raw, b, b ? b.filterContactPair : null, b ? b.filterIntersectionPair : null) : this.raw.step(f, e.raw, r.raw, n.raw, o.raw, c.raw, l.raw, _.raw, h.raw, p.raw), f.free();
    }
  }
  class Mi {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new za();
    }
    serializeAll(t, e, r, n, o, c, l, _, h) {
      let p = g.intoRaw(t);
      const w = this.raw.serializeAll(p, e.raw, r.raw, n.raw, o.raw, c.raw, l.raw, _.raw, h.raw);
      return p.free(), w;
    }
    deserializeAll(t) {
      return Qe.fromRaw(this.raw.deserializeAll(t));
    }
  }
  class Mb {
    constructor(t, e) {
      this.vertices = t, this.colors = e;
    }
  }
  class Nb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    constructor(t) {
      this.raw = t || new Pa();
    }
    render(t, e, r, n, o, c, l) {
      this.raw.render(t.raw, e.raw, r.raw, n.raw, o.raw, c, e.castClosure(l)), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
  }
  class Lb {
  }
  class Bb {
    constructor(t, e, r, n, o, c) {
      this.params = e, this.bodies = o, this.colliders = c, this.broadPhase = r, this.narrowPhase = n, this.raw = new Ia(t), this.rawCharacterCollision = new pn(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
    }
    free() {
      this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
    }
    up() {
      return this.raw.up();
    }
    setUp(t) {
      let e = g.intoRaw(t);
      return this.raw.setUp(e);
    }
    applyImpulsesToDynamicBodies() {
      return this._applyImpulsesToDynamicBodies;
    }
    setApplyImpulsesToDynamicBodies(t) {
      this._applyImpulsesToDynamicBodies = t;
    }
    characterMass() {
      return this._characterMass;
    }
    setCharacterMass(t) {
      this._characterMass = t;
    }
    offset() {
      return this.raw.offset();
    }
    setOffset(t) {
      this.raw.setOffset(t);
    }
    normalNudgeFactor() {
      return this.raw.normalNudgeFactor();
    }
    setNormalNudgeFactor(t) {
      this.raw.setNormalNudgeFactor(t);
    }
    slideEnabled() {
      return this.raw.slideEnabled();
    }
    setSlideEnabled(t) {
      this.raw.setSlideEnabled(t);
    }
    autostepMaxHeight() {
      return this.raw.autostepMaxHeight();
    }
    autostepMinWidth() {
      return this.raw.autostepMinWidth();
    }
    autostepIncludesDynamicBodies() {
      return this.raw.autostepIncludesDynamicBodies();
    }
    autostepEnabled() {
      return this.raw.autostepEnabled();
    }
    enableAutostep(t, e, r) {
      this.raw.enableAutostep(t, e, r);
    }
    disableAutostep() {
      return this.raw.disableAutostep();
    }
    maxSlopeClimbAngle() {
      return this.raw.maxSlopeClimbAngle();
    }
    setMaxSlopeClimbAngle(t) {
      this.raw.setMaxSlopeClimbAngle(t);
    }
    minSlopeSlideAngle() {
      return this.raw.minSlopeSlideAngle();
    }
    setMinSlopeSlideAngle(t) {
      this.raw.setMinSlopeSlideAngle(t);
    }
    snapToGroundDistance() {
      return this.raw.snapToGroundDistance();
    }
    enableSnapToGround(t) {
      this.raw.enableSnapToGround(t);
    }
    disableSnapToGround() {
      this.raw.disableSnapToGround();
    }
    snapToGroundEnabled() {
      return this.raw.snapToGroundEnabled();
    }
    computeColliderMovement(t, e, r, n, o) {
      let c = g.intoRaw(e);
      this.raw.computeColliderMovement(this.params.dt, this.broadPhase.raw, this.narrowPhase.raw, this.bodies.raw, this.colliders.raw, t.handle, c, this._applyImpulsesToDynamicBodies, this._characterMass, r, n, this.colliders.castClosure(o)), c.free();
    }
    computedMovement() {
      return g.fromRaw(this.raw.computedMovement());
    }
    computedGrounded() {
      return this.raw.computedGrounded();
    }
    numComputedCollisions() {
      return this.raw.numComputedCollisions();
    }
    computedCollision(t, e) {
      if (this.raw.computedCollision(t, this.rawCharacterCollision)) {
        let r = this.rawCharacterCollision;
        return e = e ?? new Lb(), e.translationDeltaApplied = g.fromRaw(r.translationDeltaApplied()), e.translationDeltaRemaining = g.fromRaw(r.translationDeltaRemaining()), e.toi = r.toi(), e.witness1 = g.fromRaw(r.worldWitness1()), e.witness2 = g.fromRaw(r.worldWitness2()), e.normal1 = g.fromRaw(r.worldNormal1()), e.normal2 = g.fromRaw(r.worldNormal2()), e.collider = this.colliders.get(r.handle()), e;
      } else return null;
    }
  }
  var Ni;
  (function(i) {
    i[i.None = 0] = "None", i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ", i[i.AllLin = 7] = "AllLin", i[i.AllAng = 56] = "AllAng", i[i.All = 63] = "All";
  })(Ni || (Ni = {}));
  class Ob {
    constructor(t, e, r, n, o, c) {
      this.params = t, this.bodies = e, this.raw = new Ta(r, n, o, c);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    setKp(t, e) {
      this.raw.set_kp(t, e);
    }
    setKi(t, e) {
      this.raw.set_kp(t, e);
    }
    setKd(t, e) {
      this.raw.set_kp(t, e);
    }
    setAxes(t) {
      this.raw.set_axes_mask(t);
    }
    resetIntegrals() {
      this.raw.reset_integrals();
    }
    applyLinearCorrection(t, e, r) {
      let n = g.intoRaw(e), o = g.intoRaw(r);
      this.raw.apply_linear_correction(this.params.dt, this.bodies.raw, t.handle, n, o), n.free(), o.free();
    }
    applyAngularCorrection(t, e, r) {
      let n = M.intoRaw(e), o = g.intoRaw(r);
      this.raw.apply_angular_correction(this.params.dt, this.bodies.raw, t.handle, n, o), n.free(), o.free();
    }
    linearCorrection(t, e, r) {
      let n = g.intoRaw(e), o = g.intoRaw(r), c = this.raw.linear_correction(this.params.dt, this.bodies.raw, t.handle, n, o);
      return n.free(), o.free(), g.fromRaw(c);
    }
    angularCorrection(t, e, r) {
      let n = M.intoRaw(e), o = g.intoRaw(r), c = this.raw.angular_correction(this.params.dt, this.bodies.raw, t.handle, n, o);
      return n.free(), o.free(), g.fromRaw(c);
    }
  }
  class Hb {
    constructor(t, e, r, n, o) {
      this.raw = new ja(t.handle), this.broadPhase = e, this.narrowPhase = r, this.bodies = n, this.colliders = o, this._chassis = t;
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    updateVehicle(t, e, r, n) {
      this.raw.update_vehicle(t, this.broadPhase.raw, this.narrowPhase.raw, this.bodies.raw, this.colliders.raw, e, r, this.colliders.castClosure(n));
    }
    currentVehicleSpeed() {
      return this.raw.current_vehicle_speed();
    }
    chassis() {
      return this._chassis;
    }
    get indexUpAxis() {
      return this.raw.index_up_axis();
    }
    set indexUpAxis(t) {
      this.raw.set_index_up_axis(t);
    }
    get indexForwardAxis() {
      return this.raw.index_forward_axis();
    }
    set setIndexForwardAxis(t) {
      this.raw.set_index_forward_axis(t);
    }
    addWheel(t, e, r, n, o) {
      let c = g.intoRaw(t), l = g.intoRaw(e), _ = g.intoRaw(r);
      this.raw.add_wheel(c, l, _, n, o), c.free(), l.free(), _.free();
    }
    numWheels() {
      return this.raw.num_wheels();
    }
    wheelChassisConnectionPointCs(t) {
      return g.fromRaw(this.raw.wheel_chassis_connection_point_cs(t));
    }
    setWheelChassisConnectionPointCs(t, e) {
      let r = g.intoRaw(e);
      this.raw.set_wheel_chassis_connection_point_cs(t, r), r.free();
    }
    wheelSuspensionRestLength(t) {
      return this.raw.wheel_suspension_rest_length(t);
    }
    setWheelSuspensionRestLength(t, e) {
      this.raw.set_wheel_suspension_rest_length(t, e);
    }
    wheelMaxSuspensionTravel(t) {
      return this.raw.wheel_max_suspension_travel(t);
    }
    setWheelMaxSuspensionTravel(t, e) {
      this.raw.set_wheel_max_suspension_travel(t, e);
    }
    wheelRadius(t) {
      return this.raw.wheel_radius(t);
    }
    setWheelRadius(t, e) {
      this.raw.set_wheel_radius(t, e);
    }
    wheelSuspensionStiffness(t) {
      return this.raw.wheel_suspension_stiffness(t);
    }
    setWheelSuspensionStiffness(t, e) {
      this.raw.set_wheel_suspension_stiffness(t, e);
    }
    wheelSuspensionCompression(t) {
      return this.raw.wheel_suspension_compression(t);
    }
    setWheelSuspensionCompression(t, e) {
      this.raw.set_wheel_suspension_compression(t, e);
    }
    wheelSuspensionRelaxation(t) {
      return this.raw.wheel_suspension_relaxation(t);
    }
    setWheelSuspensionRelaxation(t, e) {
      this.raw.set_wheel_suspension_relaxation(t, e);
    }
    wheelMaxSuspensionForce(t) {
      return this.raw.wheel_max_suspension_force(t);
    }
    setWheelMaxSuspensionForce(t, e) {
      this.raw.set_wheel_max_suspension_force(t, e);
    }
    wheelBrake(t) {
      return this.raw.wheel_brake(t);
    }
    setWheelBrake(t, e) {
      this.raw.set_wheel_brake(t, e);
    }
    wheelSteering(t) {
      return this.raw.wheel_steering(t);
    }
    setWheelSteering(t, e) {
      this.raw.set_wheel_steering(t, e);
    }
    wheelEngineForce(t) {
      return this.raw.wheel_engine_force(t);
    }
    setWheelEngineForce(t, e) {
      this.raw.set_wheel_engine_force(t, e);
    }
    wheelDirectionCs(t) {
      return g.fromRaw(this.raw.wheel_direction_cs(t));
    }
    setWheelDirectionCs(t, e) {
      let r = g.intoRaw(e);
      this.raw.set_wheel_direction_cs(t, r), r.free();
    }
    wheelAxleCs(t) {
      return g.fromRaw(this.raw.wheel_axle_cs(t));
    }
    setWheelAxleCs(t, e) {
      let r = g.intoRaw(e);
      this.raw.set_wheel_axle_cs(t, r), r.free();
    }
    wheelFrictionSlip(t) {
      return this.raw.wheel_friction_slip(t);
    }
    setWheelFrictionSlip(t, e) {
      this.raw.set_wheel_friction_slip(t, e);
    }
    wheelSideFrictionStiffness(t) {
      return this.raw.wheel_side_friction_stiffness(t);
    }
    setWheelSideFrictionStiffness(t, e) {
      this.raw.set_wheel_side_friction_stiffness(t, e);
    }
    wheelRotation(t) {
      return this.raw.wheel_rotation(t);
    }
    wheelForwardImpulse(t) {
      return this.raw.wheel_forward_impulse(t);
    }
    wheelSideImpulse(t) {
      return this.raw.wheel_side_impulse(t);
    }
    wheelSuspensionForce(t) {
      return this.raw.wheel_suspension_force(t);
    }
    wheelContactNormal(t) {
      return g.fromRaw(this.raw.wheel_contact_normal_ws(t));
    }
    wheelContactPoint(t) {
      return g.fromRaw(this.raw.wheel_contact_point_ws(t));
    }
    wheelSuspensionLength(t) {
      return this.raw.wheel_suspension_length(t);
    }
    wheelHardPoint(t) {
      return g.fromRaw(this.raw.wheel_hard_point_ws(t));
    }
    wheelIsInContact(t) {
      return this.raw.wheel_is_in_contact(t);
    }
    wheelGroundObject(t) {
      return this.colliders.get(this.raw.wheel_ground_object(t));
    }
  }
  class Qe {
    free() {
      this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.pidControllers.forEach((t) => t.free()), this.vehicleControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.pidControllers = void 0, this.vehicleControllers = void 0;
    }
    constructor(t, e, r, n, o, c, l, _, h, p, w, b, f) {
      this.gravity = t, this.integrationParameters = new pb(e), this.islands = new Ib(r), this.broadPhase = new Db(n), this.narrowPhase = new Tb(o), this.bodies = new ub(c), this.colliders = new Wb(l), this.impulseJoints = new Sb(_), this.multibodyJoints = new Pb(h), this.ccdSolver = new jb(p), this.physicsPipeline = new kb(w), this.serializationPipeline = new Mi(b), this.debugRenderPipeline = new Nb(f), this.characterControllers = /* @__PURE__ */ new Set(), this.pidControllers = /* @__PURE__ */ new Set(), this.vehicleControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    static fromRaw(t) {
      return t ? new Qe(g.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
      return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(t) {
      return new Mi().deserializeAll(t);
    }
    debugRender(t, e) {
      return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase, t, e), new Mb(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
    }
    step(t, e) {
      this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, t, e);
    }
    propagateModifiedBodyPositionsToColliders() {
      this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
    }
    get timestep() {
      return this.integrationParameters.dt;
    }
    set timestep(t) {
      this.integrationParameters.dt = t;
    }
    get lengthUnit() {
      return this.integrationParameters.lengthUnit;
    }
    set lengthUnit(t) {
      this.integrationParameters.lengthUnit = t;
    }
    get numSolverIterations() {
      return this.integrationParameters.numSolverIterations;
    }
    set numSolverIterations(t) {
      this.integrationParameters.numSolverIterations = t;
    }
    get numInternalPgsIterations() {
      return this.integrationParameters.numInternalPgsIterations;
    }
    set numInternalPgsIterations(t) {
      this.integrationParameters.numInternalPgsIterations = t;
    }
    get maxCcdSubsteps() {
      return this.integrationParameters.maxCcdSubsteps;
    }
    set maxCcdSubsteps(t) {
      this.integrationParameters.maxCcdSubsteps = t;
    }
    createRigidBody(t) {
      return this.bodies.createRigidBody(this.colliders, t);
    }
    createCharacterController(t) {
      let e = new Bb(t, this.integrationParameters, this.broadPhase, this.narrowPhase, this.bodies, this.colliders);
      return this.characterControllers.add(e), e;
    }
    removeCharacterController(t) {
      this.characterControllers.delete(t), t.free();
    }
    createPidController(t, e, r, n) {
      let o = new Ob(this.integrationParameters, this.bodies, t, e, r, n);
      return this.pidControllers.add(o), o;
    }
    removePidController(t) {
      this.pidControllers.delete(t), t.free();
    }
    createVehicleController(t) {
      let e = new Hb(t, this.broadPhase, this.narrowPhase, this.bodies, this.colliders);
      return this.vehicleControllers.add(e), e;
    }
    removeVehicleController(t) {
      this.vehicleControllers.delete(t), t.free();
    }
    createCollider(t, e) {
      let r = e ? e.handle : void 0;
      return this.colliders.createCollider(this.bodies, t, r);
    }
    createImpulseJoint(t, e, r, n) {
      return this.impulseJoints.createJoint(this.bodies, t, e.handle, r.handle, n);
    }
    createMultibodyJoint(t, e, r, n) {
      return this.multibodyJoints.createJoint(t, e.handle, r.handle, n);
    }
    getRigidBody(t) {
      return this.bodies.get(t);
    }
    getCollider(t) {
      return this.colliders.get(t);
    }
    getImpulseJoint(t) {
      return this.impulseJoints.get(t);
    }
    getMultibodyJoint(t) {
      return this.multibodyJoints.get(t);
    }
    removeRigidBody(t) {
      this.bodies && this.bodies.remove(t.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    removeCollider(t, e) {
      this.colliders && this.colliders.remove(t.handle, this.islands, this.bodies, e);
    }
    removeImpulseJoint(t, e) {
      this.impulseJoints && this.impulseJoints.remove(t.handle, e);
    }
    removeMultibodyJoint(t, e) {
      this.impulseJoints && this.multibodyJoints.remove(t.handle, e);
    }
    forEachCollider(t) {
      this.colliders.forEach(t);
    }
    forEachRigidBody(t) {
      this.bodies.forEach(t);
    }
    forEachActiveRigidBody(t) {
      this.bodies.forEachActiveRigidBody(this.islands, t);
    }
    castRay(t, e, r, n, o, c, l, _) {
      return this.broadPhase.castRay(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, o, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    castRayAndGetNormal(t, e, r, n, o, c, l, _) {
      return this.broadPhase.castRayAndGetNormal(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, o, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    intersectionsWithRay(t, e, r, n, o, c, l, _, h) {
      this.broadPhase.intersectionsWithRay(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, o, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
    }
    intersectionWithShape(t, e, r, n, o, c, l, _) {
      let h = this.broadPhase.intersectionWithShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, o, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
      return h != null ? this.colliders.get(h) : null;
    }
    projectPoint(t, e, r, n, o, c, l) {
      return this.broadPhase.projectPoint(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, o ? o.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    projectPointAndGetFeature(t, e, r, n, o, c) {
      return this.broadPhase.projectPointAndGetFeature(this.narrowPhase, this.bodies, this.colliders, t, e, r, n ? n.handle : null, o ? o.handle : null, this.colliders.castClosure(c));
    }
    intersectionsWithPoint(t, e, r, n, o, c, l) {
      this.broadPhase.intersectionsWithPoint(this.narrowPhase, this.bodies, this.colliders, t, this.colliders.castClosure(e), r, n, o ? o.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    castShape(t, e, r, n, o, c, l, _, h, p, w, b) {
      return this.broadPhase.castShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, o, c, l, _, h, p ? p.handle : null, w ? w.handle : null, this.colliders.castClosure(b));
    }
    intersectionsWithShape(t, e, r, n, o, c, l, _, h) {
      this.broadPhase.intersectionsWithShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, this.colliders.castClosure(n), o, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase, this.bodies, this.colliders, t, e, this.colliders.castClosure(r));
    }
    contactPairsWith(t, e) {
      this.narrowPhase.contactPairsWith(t.handle, this.colliders.castClosure(e));
    }
    intersectionPairsWith(t, e) {
      this.narrowPhase.intersectionPairsWith(t.handle, this.colliders.castClosure(e));
    }
    contactPair(t, e, r) {
      this.narrowPhase.contactPair(t.handle, e.handle, r);
    }
    intersectionPair(t, e) {
      return this.narrowPhase.intersectionPair(t.handle, e.handle);
    }
    set profilerEnabled(t) {
      this.physicsPipeline.raw.set_profiler_enabled(t);
    }
    get profilerEnabled() {
      return this.physicsPipeline.raw.is_profiler_enabled();
    }
    timingStep() {
      return this.physicsPipeline.raw.timing_step();
    }
    timingCollisionDetection() {
      return this.physicsPipeline.raw.timing_collision_detection();
    }
    timingBroadPhase() {
      return this.physicsPipeline.raw.timing_broad_phase();
    }
    timingNarrowPhase() {
      return this.physicsPipeline.raw.timing_narrow_phase();
    }
    timingSolver() {
      return this.physicsPipeline.raw.timing_solver();
    }
    timingVelocityAssembly() {
      return this.physicsPipeline.raw.timing_velocity_assembly();
    }
    timingVelocityResolution() {
      return this.physicsPipeline.raw.timing_velocity_resolution();
    }
    timingVelocityUpdate() {
      return this.physicsPipeline.raw.timing_velocity_update();
    }
    timingVelocityWriteback() {
      return this.physicsPipeline.raw.timing_velocity_writeback();
    }
    timingCcd() {
      return this.physicsPipeline.raw.timing_ccd();
    }
    timingCcdToiComputation() {
      return this.physicsPipeline.raw.timing_ccd_toi_computation();
    }
    timingCcdBroadPhase() {
      return this.physicsPipeline.raw.timing_ccd_broad_phase();
    }
    timingCcdNarrowPhase() {
      return this.physicsPipeline.raw.timing_ccd_narrow_phase();
    }
    timingCcdSolver() {
      return this.physicsPipeline.raw.timing_ccd_solver();
    }
    timingIslandConstruction() {
      return this.physicsPipeline.raw.timing_island_construction();
    }
    timingUserChanges() {
      return this.physicsPipeline.raw.timing_user_changes();
    }
  }
  var Me;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", i[i.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
  })(Me || (Me = {}));
  class Gb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    collider1() {
      return this.raw.collider1();
    }
    collider2() {
      return this.raw.collider2();
    }
    totalForce() {
      return g.fromRaw(this.raw.total_force());
    }
    totalForceMagnitude() {
      return this.raw.total_force_magnitude();
    }
    maxForceDirection() {
      return g.fromRaw(this.raw.max_force_direction());
    }
    maxForceMagnitude() {
      return this.raw.max_force_magnitude();
    }
  }
  class Vb {
    constructor(t, e) {
      this.raw = e || new gn(t);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(t) {
      this.raw.drainCollisionEvents(t);
    }
    drainContactForceEvents(t) {
      let e = new Gb();
      this.raw.drainContactForceEvents((r) => {
        e.raw = r, t(e), e.free();
      });
    }
    clear() {
      this.raw.clear();
    }
  }
  var xr;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", i[i.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
  })(xr || (xr = {}));
  var Li;
  (function(i) {
    i[i.EMPTY = 0] = "EMPTY", i[i.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
  })(Li || (Li = {}));
  var Ne;
  (function(i) {
    i[i.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", i[i.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", i[i.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", i[i.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", i[i.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", i[i.FIXED_FIXED = 32] = "FIXED_FIXED", i[i.DEFAULT = 15] = "DEFAULT", i[i.ALL = 60943] = "ALL";
  })(Ne || (Ne = {}));
  class Bi {
    constructor(t, e, r, n) {
      this.colliderSet = t, this.handle = e, this._parent = r, this._shape = n;
    }
    finalizeDeserialization(t) {
      this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
      this._shape || (this._shape = at.fromRaw(this.colliderSet.raw, this.handle));
    }
    get shape() {
      return this.ensureShapeIsCached(), this._shape;
    }
    clearShapeCache() {
      this._shape = null;
    }
    isValid() {
      return this.colliderSet.raw.contains(this.handle);
    }
    translation() {
      return g.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    translationWrtParent() {
      return g.fromRaw(this.colliderSet.raw.coTranslationWrtParent(this.handle));
    }
    rotation() {
      return M.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    rotationWrtParent() {
      return M.fromRaw(this.colliderSet.raw.coRotationWrtParent(this.handle));
    }
    isSensor() {
      return this.colliderSet.raw.coIsSensor(this.handle);
    }
    setSensor(t) {
      this.colliderSet.raw.coSetSensor(this.handle, t);
    }
    setShape(t) {
      let e = t.intoRaw();
      this.colliderSet.raw.coSetShape(this.handle, e), e.free(), this._shape = t;
    }
    setEnabled(t) {
      this.colliderSet.raw.coSetEnabled(this.handle, t);
    }
    isEnabled() {
      return this.colliderSet.raw.coIsEnabled(this.handle);
    }
    setRestitution(t) {
      this.colliderSet.raw.coSetRestitution(this.handle, t);
    }
    setFriction(t) {
      this.colliderSet.raw.coSetFriction(this.handle, t);
    }
    frictionCombineRule() {
      return this.colliderSet.raw.coFrictionCombineRule(this.handle);
    }
    setFrictionCombineRule(t) {
      this.colliderSet.raw.coSetFrictionCombineRule(this.handle, t);
    }
    restitutionCombineRule() {
      return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
    }
    setRestitutionCombineRule(t) {
      this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, t);
    }
    setCollisionGroups(t) {
      this.colliderSet.raw.coSetCollisionGroups(this.handle, t);
    }
    setSolverGroups(t) {
      this.colliderSet.raw.coSetSolverGroups(this.handle, t);
    }
    contactSkin() {
      return this.colliderSet.raw.coContactSkin(this.handle);
    }
    setContactSkin(t) {
      return this.colliderSet.raw.coSetContactSkin(this.handle, t);
    }
    activeHooks() {
      return this.colliderSet.raw.coActiveHooks(this.handle);
    }
    setActiveHooks(t) {
      this.colliderSet.raw.coSetActiveHooks(this.handle, t);
    }
    activeEvents() {
      return this.colliderSet.raw.coActiveEvents(this.handle);
    }
    setActiveEvents(t) {
      this.colliderSet.raw.coSetActiveEvents(this.handle, t);
    }
    activeCollisionTypes() {
      return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
    }
    setContactForceEventThreshold(t) {
      return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, t);
    }
    contactForceEventThreshold() {
      return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
    }
    setActiveCollisionTypes(t) {
      this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, t);
    }
    setDensity(t) {
      this.colliderSet.raw.coSetDensity(this.handle, t);
    }
    setMass(t) {
      this.colliderSet.raw.coSetMass(this.handle, t);
    }
    setMassProperties(t, e, r, n) {
      let o = g.intoRaw(e), c = g.intoRaw(r), l = M.intoRaw(n);
      this.colliderSet.raw.coSetMassProperties(this.handle, t, o, c, l), o.free(), c.free(), l.free();
    }
    setTranslation(t) {
      this.colliderSet.raw.coSetTranslation(this.handle, t.x, t.y, t.z);
    }
    setTranslationWrtParent(t) {
      this.colliderSet.raw.coSetTranslationWrtParent(this.handle, t.x, t.y, t.z);
    }
    setRotation(t) {
      this.colliderSet.raw.coSetRotation(this.handle, t.x, t.y, t.z, t.w);
    }
    setRotationWrtParent(t) {
      this.colliderSet.raw.coSetRotationWrtParent(this.handle, t.x, t.y, t.z, t.w);
    }
    shapeType() {
      return this.colliderSet.raw.coShapeType(this.handle);
    }
    halfExtents() {
      return g.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    setHalfExtents(t) {
      const e = g.intoRaw(t);
      this.colliderSet.raw.coSetHalfExtents(this.handle, e);
    }
    radius() {
      return this.colliderSet.raw.coRadius(this.handle);
    }
    setRadius(t) {
      this.colliderSet.raw.coSetRadius(this.handle, t);
    }
    roundRadius() {
      return this.colliderSet.raw.coRoundRadius(this.handle);
    }
    setRoundRadius(t) {
      this.colliderSet.raw.coSetRoundRadius(this.handle, t);
    }
    halfHeight() {
      return this.colliderSet.raw.coHalfHeight(this.handle);
    }
    setHalfHeight(t) {
      this.colliderSet.raw.coSetHalfHeight(this.handle, t);
    }
    setVoxel(t, e, r, n) {
      this.colliderSet.raw.coSetVoxel(this.handle, t, e, r, n), this._shape = null;
    }
    propagateVoxelChange(t, e, r, n, o, c, l) {
      this.colliderSet.raw.coPropagateVoxelChange(this.handle, t.handle, e, r, n, o, c, l), this._shape = null;
    }
    combineVoxelStates(t, e, r, n) {
      this.colliderSet.raw.coCombineVoxelStates(this.handle, t.handle, e, r, n), this._shape = null;
    }
    vertices() {
      return this.colliderSet.raw.coVertices(this.handle);
    }
    indices() {
      return this.colliderSet.raw.coIndices(this.handle);
    }
    heightfieldHeights() {
      return this.colliderSet.raw.coHeightfieldHeights(this.handle);
    }
    heightfieldScale() {
      let t = this.colliderSet.raw.coHeightfieldScale(this.handle);
      return g.fromRaw(t);
    }
    heightfieldNRows() {
      return this.colliderSet.raw.coHeightfieldNRows(this.handle);
    }
    heightfieldNCols() {
      return this.colliderSet.raw.coHeightfieldNCols(this.handle);
    }
    parent() {
      return this._parent;
    }
    friction() {
      return this.colliderSet.raw.coFriction(this.handle);
    }
    restitution() {
      return this.colliderSet.raw.coRestitution(this.handle);
    }
    density() {
      return this.colliderSet.raw.coDensity(this.handle);
    }
    mass() {
      return this.colliderSet.raw.coMass(this.handle);
    }
    volume() {
      return this.colliderSet.raw.coVolume(this.handle);
    }
    collisionGroups() {
      return this.colliderSet.raw.coCollisionGroups(this.handle);
    }
    solverGroups() {
      return this.colliderSet.raw.coSolverGroups(this.handle);
    }
    containsPoint(t) {
      let e = g.intoRaw(t), r = this.colliderSet.raw.coContainsPoint(this.handle, e);
      return e.free(), r;
    }
    projectPoint(t, e) {
      let r = g.intoRaw(t), n = Xe.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, r, e));
      return r.free(), n;
    }
    intersectsRay(t, e) {
      let r = g.intoRaw(t.origin), n = g.intoRaw(t.dir), o = this.colliderSet.raw.coIntersectsRay(this.handle, r, n, e);
      return r.free(), n.free(), o;
    }
    castShape(t, e, r, n, o, c, l, _) {
      let h = g.intoRaw(t), p = g.intoRaw(r), w = M.intoRaw(n), b = g.intoRaw(o), f = e.intoRaw(), R = Ce.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, h, f, p, w, b, c, l, _));
      return h.free(), p.free(), w.free(), b.free(), f.free(), R;
    }
    castCollider(t, e, r, n, o, c) {
      let l = g.intoRaw(t), _ = g.intoRaw(r), h = Ye.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, l, e.handle, _, n, o, c));
      return l.free(), _.free(), h;
    }
    intersectsShape(t, e, r) {
      let n = g.intoRaw(e), o = M.intoRaw(r), c = t.intoRaw(), l = this.colliderSet.raw.coIntersectsShape(this.handle, c, n, o);
      return n.free(), o.free(), c.free(), l;
    }
    contactShape(t, e, r, n) {
      let o = g.intoRaw(e), c = M.intoRaw(r), l = t.intoRaw(), _ = Se.fromRaw(this.colliderSet.raw.coContactShape(this.handle, l, o, c, n));
      return o.free(), c.free(), l.free(), _;
    }
    contactCollider(t, e) {
      return Se.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
    }
    castRay(t, e, r) {
      let n = g.intoRaw(t.origin), o = g.intoRaw(t.dir), c = this.colliderSet.raw.coCastRay(this.handle, n, o, e, r);
      return n.free(), o.free(), c;
    }
    castRayAndGetNormal(t, e, r) {
      let n = g.intoRaw(t.origin), o = g.intoRaw(t.dir), c = qe.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, n, o, e, r));
      return n.free(), o.free(), c;
    }
  }
  var re;
  (function(i) {
    i[i.Density = 0] = "Density", i[i.Mass = 1] = "Mass", i[i.MassProps = 2] = "MassProps";
  })(re || (re = {}));
  class et {
    constructor(t) {
      this.enabled = true, this.shape = t, this.massPropsMode = re.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = M.identity(), this.translation = g.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = ze.Average, this.restitutionCombineRule = ze.Average, this.activeCollisionTypes = Ne.DEFAULT, this.activeEvents = Me.NONE, this.activeHooks = xr.NONE, this.mass = 0, this.centerOfMass = g.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = M.identity();
    }
    static ball(t) {
      const e = new Br(t);
      return new et(e);
    }
    static capsule(t, e) {
      const r = new yn(t, e);
      return new et(r);
    }
    static segment(t, e) {
      const r = new vn(t, e);
      return new et(r);
    }
    static triangle(t, e, r) {
      const n = new Rn(t, e, r);
      return new et(n);
    }
    static roundTriangle(t, e, r, n) {
      const o = new Sn(t, e, r, n);
      return new et(o);
    }
    static polyline(t, e) {
      const r = new Cn(t, e);
      return new et(r);
    }
    static voxels(t, e) {
      const r = new En(t, e);
      return new et(r);
    }
    static trimesh(t, e, r) {
      const n = new Or(t, e, r);
      return new et(n);
    }
    static cuboid(t, e, r) {
      const n = new Ee(t, e, r);
      return new et(n);
    }
    static roundCuboid(t, e, r, n) {
      const o = new fn(t, e, r, n);
      return new et(o);
    }
    static heightfield(t, e, r, n, o) {
      const c = new xn(t, e, r, n, o);
      return new et(c);
    }
    static cylinder(t, e) {
      const r = new An(t, e);
      return new et(r);
    }
    static roundCylinder(t, e, r) {
      const n = new Pn(t, e, r);
      return new et(n);
    }
    static cone(t, e) {
      const r = new jn(t, e);
      return new et(r);
    }
    static roundCone(t, e, r) {
      const n = new In(t, e, r);
      return new et(n);
    }
    static convexHull(t) {
      const e = new Cr(t, null);
      return new et(e);
    }
    static convexMesh(t, e) {
      const r = new Cr(t, e);
      return new et(r);
    }
    static roundConvexHull(t, e) {
      const r = new Er(t, null, e);
      return new et(r);
    }
    static roundConvexMesh(t, e, r) {
      const n = new Er(t, e, r);
      return new et(n);
    }
    setTranslation(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setRotation(t) {
      return M.copy(this.rotation, t), this;
    }
    setSensor(t) {
      return this.isSensor = t, this;
    }
    setEnabled(t) {
      return this.enabled = t, this;
    }
    setContactSkin(t) {
      return this.contactSkin = t, this;
    }
    setDensity(t) {
      return this.massPropsMode = re.Density, this.density = t, this;
    }
    setMass(t) {
      return this.massPropsMode = re.Mass, this.mass = t, this;
    }
    setMassProperties(t, e, r, n) {
      return this.massPropsMode = re.MassProps, this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), M.copy(this.angularInertiaLocalFrame, n), this;
    }
    setRestitution(t) {
      return this.restitution = t, this;
    }
    setFriction(t) {
      return this.friction = t, this;
    }
    setFrictionCombineRule(t) {
      return this.frictionCombineRule = t, this;
    }
    setRestitutionCombineRule(t) {
      return this.restitutionCombineRule = t, this;
    }
    setCollisionGroups(t) {
      return this.collisionGroups = t, this;
    }
    setSolverGroups(t) {
      return this.solverGroups = t, this;
    }
    setActiveHooks(t) {
      return this.activeHooks = t, this;
    }
    setActiveEvents(t) {
      return this.activeEvents = t, this;
    }
    setActiveCollisionTypes(t) {
      return this.activeCollisionTypes = t, this;
    }
    setContactForceEventThreshold(t) {
      return this.contactForceEventThreshold = t, this;
    }
  }
  class Wb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Q(), this.map = new Ke(), t && t.forEachColliderHandle((e) => {
        this.map.set(e, new Bi(this, e, null));
      });
    }
    castClosure(t) {
      return (e) => {
        if (t) return t(this.get(e));
      };
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createCollider(t, e, r) {
      let n = r != null && r != null;
      if (n && isNaN(r)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
      let o = e.shape.intoRaw(), c = g.intoRaw(e.translation), l = M.intoRaw(e.rotation), _ = g.intoRaw(e.centerOfMass), h = g.intoRaw(e.principalAngularInertia), p = M.intoRaw(e.angularInertiaLocalFrame), w = this.raw.createCollider(e.enabled, o, c, l, e.massPropsMode, e.mass, _, h, p, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, e.contactSkin, n, n ? r : 0, t.raw);
      o.free(), c.free(), l.free(), _.free(), h.free(), p.free();
      let b = n ? t.get(r) : null, f = new Bi(this, w, b, e.shape);
      return this.map.set(w, f), f;
    }
    remove(t, e, r, n) {
      this.raw.remove(t, e.raw, r.raw, n), this.unmap(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    get(t) {
      return this.map.get(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  }
  class Ub extends Nn {
    constructor(t) {
      super(), this.world = t, this.material = new Ln({
        color: 16777215,
        vertexColors: true
      }), this.geometry = new Bn(), this.frustumCulled = false;
    }
    update() {
      this.visible == true && this.parent != null && (this.buffers = this.world.debugRender(), this.geometry.setAttribute("position", new Hr(this.buffers.vertices, 3)), this.geometry.setAttribute("color", new Hr(this.buffers.colors, 4)));
    }
    enable() {
      this.visible = true;
    }
    isEnabled() {
      return this.visible == true;
    }
    disable() {
      this.visible = false;
    }
    toggle() {
      this.visible = !this.visible;
    }
  }
  class Jb {
    constructor() {
      this.world = new Qe({
        x: 0,
        y: -9.81 * 8,
        z: 0
      }), this.world.numSolverIterations = 4, this.eventQueue = new Vb(true), this.debugger = new Ub(this.world), this.entities = /* @__PURE__ */ new Map(), this.jointQueue = [];
    }
    update(t) {
      this.world.step(this.eventQueue), this.debugger.update(), this.entities.forEach(function(e) {
        e.update(t);
      }), this.eventQueue.drainCollisionEvents(function(e, r, n) {
        const o = this.getEntityFromColliderHandle(e), c = this.getEntityFromColliderHandle(r), l = {
          handle: e,
          pair: c,
          started: n,
          type: "collision"
        }, _ = {
          handle: r,
          pair: o,
          started: n,
          type: "collision"
        };
        o.dispatchEvent(l), c.dispatchEvent(_);
      }.bind(this));
    }
    animate(t, e) {
      this.entities.forEach(function(r) {
        r.animate(t, e);
      });
    }
    setFrequency(t = 60) {
      this.world.timestep = 1 / t;
    }
    add(t) {
      if (t != null) {
        if (arguments.length > 1) for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
        this.entities.set(t.id, t), this.createObject3D(t), this.createRigidBody(t), this.createColliders(t), this.createParentJoint(t), t.dispatchEvent({
          type: "added"
        });
      }
      return t;
    }
    remove(t) {
      return this.removeJoints(t), this.removeColliders(t), this.removeRigidBody(t), t.object.removeFromParent(), this.entities.delete(t.id), t.dispatchEvent({
        type: "removed"
      }), t;
    }
    getEntityById(t) {
      return this.entities.get(t);
    }
    getChildren(t) {
      const e = [], r = [];
      this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(t.rigidBody.handle, function(n) {
        e.push(n);
      });
      for (let n = e.length - 1; n >= 0; n--) {
        const o = e[n], c = this.world.impulseJoints.get(o), l = this.getEntityById(c.body2().userData.id);
        t.id != l.id && r.push(l);
      }
      return r;
    }
    duplicate(t) {
      var e = t.toJSON();
      return this.create(e);
    }
    getEntityFromColliderHandle(t) {
      const r = this.world.getCollider(t)._parent;
      return this.getEntityById(r.userData.id);
    }
    createObject3D(t) {
      const e = t.createObject3D(t.objectDesc);
      t.setObject(e);
    }
    createRigidBody(t) {
      const e = this.world.createRigidBody(t.rigidBodyDesc);
      t.setRigidBody(e);
    }
    removeRigidBody(t) {
      this.world.removeRigidBody(t.rigidBody), t.rigidBody = null;
    }
    createColliders(t) {
      t.rigidBody && t.collidersDesc.forEach(function(e) {
        const r = this.world.createCollider(e, t.rigidBody);
        r.events = e.events;
      }.bind(this));
    }
    removeColliders(t) {
      for (let e = t.rigidBody.numColliders() - 1; e >= 0; e--) {
        const r = t.rigidBody.collider(e);
        this.world.removeCollider(r);
      }
    }
    createJoint(t, e) {
      const r = new pt(), n = new pt().copy(t.rigidBodyDesc.translation).sub(e.rigidBodyDesc.translation), o = new Kt().copy(t.rigidBodyDesc.rotation), c = new Kt().copy(e.rigidBodyDesc.rotation);
      r.applyQuaternion(o.conjugate()), n.applyQuaternion(c.conjugate());
      const l = Tt.fixed(r, o, n, c);
      return this.world.createImpulseJoint(l, t.rigidBody, e.rigidBody, true);
    }
    removeJoint(t) {
      this.world.removeImpulseJoint(t, true);
    }
    createParentJoint(t) {
      let e = t.getParentId(), r = this.getEntityById(e);
      e && (r ? this.createJoint(r, t) : this.jointQueue.push(t.id));
      for (let n = this.jointQueue.length - 1; n >= 0; n--) {
        let o = this.getEntityById(this.jointQueue[n]);
        o && (r = this.getEntityById(o.getParentId()), r && (this.createJoint(r, o), this.jointQueue.splice(n, 1)));
      }
    }
    removeJoints(t) {
      const e = [];
      this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(t.rigidBody.handle, function(r) {
        e.push(r);
      });
      for (let r = e.length - 1; r >= 0; r--) {
        const n = e[r], o = this.world.impulseJoints.get(n), c = this.getEntityById(o.body1().userData.id), l = this.getEntityById(o.body2().userData.id);
        t.id == c.id && l.rigidBodyDesc.userData.parentId != null && (this.jointQueue.push(l.id), l.setParentId(null)), this.removeJoint(o);
      }
    }
    removeParentJoint(t) {
      const e = [], r = this.getEntityById(t.getParentId());
      if (r) {
        this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(r.rigidBody.handle, function(n) {
          e.push(n);
        });
        for (let n = e.length - 1; n >= 0; n--) {
          const o = e[n], c = this.world.impulseJoints.get(o), l = this.getEntityById(c.body2().userData.id);
          t.id == l.id && (this.removeJoint(c), this.jointQueue.push(l.id));
        }
      }
    }
    createController(t) {
      const e = this.world.createCharacterController(0.01);
      return t.setController(e), e.setSlideEnabled(true), e.setMaxSlopeClimbAngle(45 * Math.PI / 180), e.setMinSlopeSlideAngle(30 * Math.PI / 180), e.enableAutostep(0.5, 0.2, true), e.enableSnapToGround(0.5), e.setApplyImpulsesToDynamicBodies(true), e.setCharacterMass(1), e;
    }
    removeController(t) {
      this.world.removeCharacterController(t.controller), t.controller = null;
    }
    clear() {
      this.entities.forEach(function(t) {
        this.remove(t);
      }.bind(this)), this.jointQueue = [];
    }
    toJSON() {
      const t = [];
      return this.entities.forEach(function(e) {
        t.push(e.toJSON());
      }), t;
    }
  }
  class Kb {
    constructor(t) {
      this.interval = new is(), this.physics = new Jb(), this.graphics, this.assets = new ns(this.onLoad.bind(this, t));
    }
    init(t) {
      this.graphics = new ss(t), this.graphics.scene.add(this.physics.debugger), this.physics.debugger.disable(), this.assets.load({
        models: "../json/assets-models.json",
        textures: "../json/assets-textures.json",
        audio: "../json/assets-audio.json",
        json: "../json/assets-json.json"
      });
    }
    update({ delta: t }) {
      this.physics.update(t);
    }
    render({ delta: t, alpha: e }) {
      this.physics.animate(t, e), this.graphics.render();
    }
    onLoad(t) {
      this.interval.add((e) => this.update(e), 1e3 / 60), this.interval.add((e) => this.render(e), -1), this.interval.start(), typeof t == "function" && t();
    }
  }
  const qb = {
    key: 0,
    class: "modal"
  }, Xb = {
    class: "container"
  }, Yb = {
    class: "content"
  }, Qb = {
    key: 0,
    class: "title"
  }, Zb = [
    "innerHTML"
  ], $b = {
    class: "inputs"
  }, tm = [
    "id",
    "type",
    "value",
    "min",
    "max",
    "step",
    "accept"
  ], em = {
    __name: "Modal",
    setup(i) {
      var t = $(""), e = $(""), r = $([]), n = $(false);
      function o() {
        window.addEventListener("openModal", l), window.addEventListener("closeModal", _), window.addEventListener("keydown", w);
      }
      function c() {
        window.removeEventListener("openModal", l), window.removeEventListener("closeModal", _), window.removeEventListener("keydown", w);
      }
      function l(b) {
        n.value = true, b.detail && (b.detail.title && (t.value = b.detail.title), b.detail.text && (e.value = b.detail.text), b.detail.inputs && (r.value = b.detail.inputs, r.value.forEach(function(f) {
          f.type == "file" || f.type == "range" || f.type == "text" ? f.event = "change" : f.event = "click";
        }))), setTimeout(function() {
          window.dispatchEvent(new CustomEvent("modalOpened"));
        }, 100);
      }
      function _() {
        n.value = false, setTimeout(function() {
          window.dispatchEvent(new CustomEvent("modalClosed"));
        }, 100);
      }
      function h(b, f) {
        b == null && (b = _), b(f);
      }
      function p(b) {
        var f = r.value[r.value.length - 1];
        f && h(f.callback, b);
      }
      function w(b) {
        if (n.value == true) {
          var f = [
            "Space",
            "Enter",
            "Escape"
          ];
          f.indexOf(b.code) > -1 && (b.preventDefault(), p(b));
        }
      }
      return Wt(function() {
        o();
      }), Ar(function() {
        c();
      }), (b, f) => (W(), Pr(Le, {
        name: "fade-modal"
      }, {
        default: ne(() => [
          ft(n) == true ? (W(), q("div", qb, [
            A("div", {
              class: "background",
              onClick: _
            }),
            A("div", Xb, [
              A("div", Yb, [
                ft(t) != "" ? (W(), q("h1", Qb, se(ft(t)), 1)) : qt("", true),
                A("p", {
                  class: "text",
                  innerHTML: ft(e)
                }, null, 8, Zb),
                A("div", $b, [
                  (W(true), q(ae, null, me(ft(r), (R, D) => (W(), q("input", On({
                    class: R.class,
                    id: "modal-" + R.type + "-" + D,
                    type: R.type,
                    value: R.value,
                    min: R.min,
                    max: R.max,
                    step: R.step,
                    accept: R.accept,
                    style: R.style
                  }, {
                    [Hn(R.event)]: (P) => h(R.callback, P)
                  }), null, 16, tm))), 256))
                ]),
                A("a", {
                  class: "close",
                  onClick: _
                }, [
                  ...f[0] || (f[0] = [
                    A("span", null, "x", -1)
                  ])
                ])
              ])
            ])
          ])) : qt("", true)
        ]),
        _: 1
      }));
    }
  }, rm = Qt(em, [
    [
      "__scopeId",
      "data-v-7c21f54e"
    ]
  ]), im = {
    __name: "App",
    setup(i) {
      const t = $(false), e = $(), r = window.game = new Kb(o), n = ma();
      function o() {
        t.value = true;
      }
      return Wt(function() {
        r.init(e.value);
      }), (c, l) => {
        const _ = Gn("router-view");
        return W(), q(ae, null, [
          A("canvas", {
            ref_key: "canvas",
            ref: e
          }, null, 512),
          t.value ? (W(), q("div", {
            key: 0,
            class: Vt([
              "page",
              ft(n).name
            ])
          }, [
            At(_, null, {
              default: ne(({ Component: h }) => [
                At(Le, {
                  name: "fade"
                }, {
                  default: ne(() => [
                    (W(), Pr(Vn(h), {
                      game: ft(r)
                    }, null, 8, [
                      "game"
                    ]))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            })
          ], 2)) : qt("", true),
          At(rm),
          At(as)
        ], 64);
      };
    }
  }, nm = Qt(im, [
    [
      "__scopeId",
      "data-v-acc4bc17"
    ]
  ]), sm = {
    __name: "PageHome",
    setup(i) {
      var t = $("Home Page");
      return Wt(function() {
      }), (e, r) => (W(), q("h1", null, se(ft(t)), 1));
    }
  }, am = {
    __name: "PagePlay",
    setup(i) {
      var t = $("Play Page");
      return Wt(function() {
      }), (e, r) => (W(), q("h1", null, se(ft(t)), 1));
    }
  };
  class Ze extends Wn {
    constructor(t) {
      super(), this.name = t.name || "", this.type = t.type || "entity", this.id = t.id || Un.generateUUID(), this.isEntity = true, this.object, this.objectDesc, this.rigidBody, this.rigidBodyDesc, this.collidersDesc = [], this.snapshot = {
        position_1: new pt(),
        position_2: new pt(),
        rotation_1: new Kt(),
        rotation_2: new Kt()
      }, this.tweens = new os(), this.forceDirection = new pt(), this.forceAcceleration = 1, this.forceSpeedMax = 1 / 0, this.setObjectDesc(t), this.setRigidBodyDesc(t), this.addColliderDesc(t), this.onAdded = this.onAdded.bind(this), this.addEventListener("added", this.onAdded);
    }
    update(t) {
      this.updateSnapshot(), this.updateForce(), this.dispatchEvent({
        type: "updated"
      });
    }
    animate(t, e) {
      if (this.rigidBody && this.rigidBody.isFixed()) return false;
      this.tweens.update(), this.lerp(e);
    }
    setObjectDesc(t) {
      t = Object.assign({
        ...{
          scale: {
            x: 1,
            y: 1,
            z: 1
          }
        }
      }, t), this.objectDesc = new Gr(), this.objectDesc.scale.copy(t.scale);
    }
    setObject(t) {
      this.object = t;
    }
    createObject3D(t) {
      const e = new Gr();
      return e.scale.copy(t.scale), e;
    }
    setRigidBodyDesc(t) {
      t = Object.assign({
        ...{
          angularDamping: 0,
          ccd: false,
          enabledRotations: {
            x: true,
            y: true,
            z: true
          },
          enabledTranslations: {
            x: true,
            y: true,
            z: true
          },
          isEnabled: true,
          linearDamping: 0,
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 0,
            w: 1
          },
          sleeping: false,
          softCcdPrediction: 0,
          status: 0
        }
      }, t), this.rigidBodyDesc = new xt(isNaN(t.status) ? Rt[t.status] : t.status), this.rigidBodyDesc.enabledRotations(t.enabledRotations.x, t.enabledRotations.y, t.enabledRotations.z), this.rigidBodyDesc.enabledTranslations(t.enabledTranslations.x, t.enabledTranslations.y, t.enabledTranslations.z), this.rigidBodyDesc.setAngularDamping(t.angularDamping), this.rigidBodyDesc.setCcdEnabled(t.ccd), this.rigidBodyDesc.setEnabled(t.isEnabled), this.rigidBodyDesc.setLinearDamping(t.linearDamping), this.rigidBodyDesc.setRotation(t.rotation), this.rigidBodyDesc.setSleeping(t.sleeping), this.rigidBodyDesc.setSoftCcdPrediction(t.softCcdPrediction), this.rigidBodyDesc.setTranslation(t.position.x, t.position.y, t.position.z), this.rigidBodyDesc.setUserData({
        id: this.id,
        parentId: t.parentId
      });
    }
    setRigidBody(t) {
      this.rigidBody = t;
    }
    addColliderDesc(t) {
      if (t.shape) {
        t = Object.assign({
          ...{
            activeCollisionTypes: "DEFAULT",
            activeEvents: "NONE",
            collisionGroups: 4294967295,
            contactForceEventThreshold: 0,
            density: 1,
            events: [],
            friction: 0.5,
            isSensor: false,
            mass: 0,
            restitution: 0,
            shape: null,
            solverGroups: 4294967295,
            translation: {
              x: 0,
              y: 0,
              z: 0
            }
          }
        }, t);
        const r = new et(t.shape);
        r.setActiveCollisionTypes(isNaN(t.activeCollisionTypes) ? Ne[t.activeCollisionTypes] : t.activeCollisionTypes), r.setActiveEvents(isNaN(t.activeEvents) ? Me[t.activeEvents] : t.activeEvents), r.setCollisionGroups(t.collisionGroups), r.setContactForceEventThreshold(t.contactForceEventThreshold), r.setMass(t.mass), r.setDensity(t.density), r.setFriction(t.friction), r.setRestitution(t.restitution), r.setSensor(t.isSensor), r.setSolverGroups(t.solverGroups), r.setTranslation(t.translation.x, t.translation.y, t.translation.z), r.events = t.events, this.collidersDesc.push(r);
      }
    }
    setController(t) {
      this.controller = t;
    }
    getParentId() {
      return this.rigidBodyDesc.userData.parentId;
    }
    setParentId(t) {
      this.rigidBodyDesc.userData.parentId = t;
    }
    getPosition() {
      return this.rigidBody == null ? this.rigidBodyDesc.translation : this.rigidBody.isKinematic() ? this.rigidBody.nextTranslation() : this.rigidBody.translation();
    }
    setPosition(t) {
      this.rigidBody && this.rigidBody.setTranslation(t);
    }
    resetPosition() {
      this.setPosition(this.rigidBodyDesc.translation);
    }
    getRotation() {
      return this.rigidBody == null ? this.rigidBodyDesc.rotation : this.rigidBody.isKinematic() ? this.rigidBody.nextRotation() : this.rigidBody.rotation();
    }
    setRotation(t) {
      this.rigidBody && this.rigidBody.setRotation(t);
    }
    resetRotation() {
      this.setRotation(this.rigidBodyDesc.rotation);
    }
    getScale() {
      return this.object.scale;
    }
    setScale(t) {
      this.object && this.object.scale.copy(t);
    }
    resetScale() {
      this.setScale(this.objectDesc.scale);
    }
    getLinearVelocity() {
      return this.rigidBody ? this.rigidBody.linvel() : this.rigidBodyDesc.linvel;
    }
    setLinearVelocity(t) {
      this.rigidBody && this.rigidBody.setLinvel(t);
    }
    applyVelocityAtAxisAngle(t = {
      x: 1,
      y: 1,
      z: 1
    }, e = {
      x: 0,
      y: 0,
      z: 0
    }, r = 0) {
      dt.copy(this.getLinearVelocity()), dt.applyAxisAngle(e, -r), dt.multiply(t), dt.applyAxisAngle(e, r), this.setLinearVelocity(dt, true);
    }
    applyImpulse(t = {
      x: 0,
      y: 0,
      z: 0
    }) {
      this.rigidBody.applyImpulse(t, true);
    }
    applyImpulseAtAngle(t = {
      x: 0,
      y: 0,
      z: 0
    }, e = 0) {
      t = dt.copy(t), t.applyAxisAngle({
        x: 0,
        y: 0,
        z: 1
      }, e), this.applyImpulse(t);
    }
    setForce(t = {
      x: 0,
      y: 0,
      z: 0
    }, e = 1, r = 1 / 0) {
      this.forceDirection.copy(t).normalize(), this.forceAcceleration = e, this.forceSpeedMax = r;
    }
    updateForce() {
      if (this.forceDirection.length() > 0) {
        dt.copy(this.getLinearVelocity());
        const t = dt.dot(this.forceDirection), e = t + this.forceAcceleration, n = Math.max(t, Math.min(e, this.forceSpeedMax)) - t;
        dt.x += this.forceDirection.x * n, dt.y += this.forceDirection.y * n, dt.z += this.forceDirection.z * n, this.setLinearVelocity(dt);
      }
    }
    resetLinearVelocity() {
      this.setLinearVelocity(this.rigidBodyDesc.linvel);
    }
    getAngularVelocity() {
      return this.rigidBody == null ? this.rigidBodyDesc.angvel : this.rigidBody.angvel();
    }
    setAngularVelocity(t) {
      this.rigidBody && this.rigidBody.setAngvel(t);
    }
    setAngularVelocityAtAngle(t = {
      x: 1,
      y: 1,
      z: 1
    }, e = 0) {
      const r = dt.copy(this.getLinearVelocity());
      let n = 1;
      r.applyAxisAngle({
        x: 0,
        y: 0,
        z: 1
      }, -e), n *= -Math.sign(Math.round(r.x)), t = dt.copy(t), t.multiplyScalar(n), this.setAngularVelocity(t);
    }
    resetAngularVelocity() {
      this.setAngularVelocity(this.rigidBodyDesc.angvel);
    }
    getStatus() {
      return this.rigidBody ? this.rigidBody.bodyType : this.rigidBodyDesc.status;
    }
    setStatus(t) {
      this.rigidBody && this.rigidBody.setBodyType(t);
    }
    resetStatus() {
      this.setStatus(this.rigidBodyDesc.status);
    }
    resetForces() {
      this.rigidBody && this.rigidBody.resetForces();
    }
    resetTorques() {
      this.rigidBody && this.rigidBody.resetTorques();
    }
    reset() {
      this.resetPosition(), this.resetRotation(), this.resetScale(), this.resetLinearVelocity(), this.resetAngularVelocity(), this.resetForces(), this.resetTorques(), this.resetStatus(), this.updateSnapshot(), this.lerp(1);
    }
    tween(t) {
      return typeof t.easing == "string" && (t.easing = t.easing.split(".").reduce((r, n) => r && r[n] || null, cs)), new ls(t.object, this.tweens).to(t.to, t.duration).dynamic(t.dynamic).easing(t.easing).interpolation(t.interpolation).onStart(t.onStart).onUpdate(t.onUpdate).onComplete(t.onComplete);
    }
    updateSnapshot(t = false) {
      t == true ? (this.snapshot.position_1.copy(this.rigidBodyDesc.translation), this.snapshot.position_2.copy(this.rigidBodyDesc.translation), this.snapshot.rotation_1.copy(this.rigidBodyDesc.rotation), this.snapshot.rotation_2.copy(this.rigidBodyDesc.rotation)) : (this.snapshot.position_1.copy(this.snapshot.position_2), this.snapshot.rotation_1.copy(this.snapshot.rotation_2), this.rigidBody.isKinematic() ? (this.snapshot.position_2.copy(this.rigidBody.nextTranslation()), this.snapshot.rotation_2.copy(this.rigidBody.nextRotation())) : (this.snapshot.position_2.copy(this.rigidBody.translation()), this.snapshot.rotation_2.copy(this.rigidBody.rotation())));
    }
    lerp(t = 0) {
      this.object && (this.object.position.lerpVectors(this.snapshot.position_1, this.snapshot.position_2, t), this.object.quaternion.slerpQuaternions(this.snapshot.rotation_1, this.snapshot.rotation_2, t));
    }
    getCollider(t) {
      for (let e = 0; e < this.rigidBody.numColliders(); e++) {
        const r = this.rigidBody.collider(e);
        if (t == r.handle) return r;
      }
    }
    onCollision(t) {
      this.getCollider(t.handle).events.filter(function(n) {
        return n.started == null && t.started == true || n.started == t.started;
      }.bind(this)).forEach(function(n) {
        try {
          let o = n;
          o && (typeof n == "object" && (o = this[n.name]), o(Object.assign(t, n)));
        } catch (o) {
          console.error(o);
        }
      }.bind(this));
    }
    onAdded(t) {
      this.updateSnapshot(true), this.lerp(1), this.onCollision = this.onCollision.bind(this), this.onRemoved = this.onRemoved.bind(this), this.addEventListener("collision", this.onCollision), this.addEventListener("removed", this.onRemoved);
    }
    onRemoved(t) {
      this.removeEventListener("collision", this.onCollision), this.removeEventListener("removed", this.onRemoved);
    }
    getSpeed() {
      return this.rigidBody == null ? 0 : dt.copy(this.getLinearVelocity()).length();
    }
    toJSON() {
      let t = {
        id: this.id,
        name: this.name,
        type: this.type
      };
      return t = Object.assign({
        angularDamping: this.rigidBodyDesc.angularDamping,
        ccd: this.rigidBodyDesc.ccdEnabled,
        enabledRotations: {
          x: this.rigidBodyDesc.rotationsEnabledX,
          y: this.rigidBodyDesc.rotationsEnabledY,
          z: this.rigidBodyDesc.rotationsEnabledZ
        },
        enabledTranslations: {
          x: this.rigidBodyDesc.translationsEnabledX,
          y: this.rigidBodyDesc.translationsEnabledY,
          z: this.rigidBodyDesc.translationsEnabledZ
        },
        isEnabled: this.rigidBodyDesc.enabled,
        linearDamping: this.rigidBodyDesc.linearDamping,
        parentId: this.rigidBodyDesc.userData.parentId,
        position: {
          x: this.rigidBodyDesc.translation.x,
          y: this.rigidBodyDesc.translation.y,
          z: this.rigidBodyDesc.translation.z
        },
        rotation: {
          x: this.rigidBodyDesc.rotation.x,
          y: this.rigidBodyDesc.rotation.y,
          z: this.rigidBodyDesc.rotation.z,
          w: this.rigidBodyDesc.rotation.w
        },
        scale: {
          x: this.objectDesc.scale.x,
          y: this.objectDesc.scale.y,
          z: this.objectDesc.scale.z
        },
        sleeping: this.rigidBodyDesc.sleeping,
        softCcdPrediction: this.rigidBodyDesc.softCcdPrediction,
        status: this.rigidBodyDesc.status
      }, t), this.collidersDesc.length > 0 && (t = Object.assign({
        activeCollisionTypes: this.collidersDesc[0].activeCollisionTypes,
        activeEvents: this.collidersDesc[0].activeEvents,
        collisionGroups: this.collidersDesc[0].collisionGroups,
        contactForceEventThreshold: this.collidersDesc[0].contactForceEventThreshold,
        density: this.collidersDesc[0].density,
        events: this.collidersDesc[0].events,
        friction: this.collidersDesc[0].friction,
        isSensor: this.collidersDesc[0].isSensor,
        mass: this.collidersDesc[0].mass,
        restitution: this.collidersDesc[0].restitution,
        solverGroups: this.collidersDesc[0].solverGroups,
        translation: this.collidersDesc[0].translation
      }, t)), t;
    }
  }
  let dt = new pt(), gt = class extends Ze {
    static model = {
      name: ""
    };
    constructor(t) {
      if (t = Object.assign({
        color: "#ffffff",
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }, t), t.shape = new Ee(t.scale.x / 2, t.scale.y / 2, t.scale.z / 2), super(t), this.isCube = true, this.type = "cube", this.model = t.model, this.model.isObject3D == null) {
        const e = this.createModel(t);
        this.setModel(e);
      }
      this.onCubeAdded = this.onCubeAdded.bind(this), this.addEventListener("added", this.onCubeAdded);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e), this.model && this.model.mixer && this.model.mixer.update(t);
    }
    onCubeAdded(t) {
      this.onCubeRemoved = this.onCubeRemoved.bind(this), this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onCubeRemoved);
    }
    onCubeRemoved(t) {
      this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onCubeRemoved);
    }
    createModel(t) {
      var e = new Jn(1, 1, 1), r = new Ki({
        color: t.color
      });
      const n = new qi(e, r);
      return n.receiveShadow = true, n.castShadow = true, n;
    }
    setModel(t) {
      this.model = t;
    }
    setScale(t) {
      for (var e = new pt().copy(t), r = e.clone(), n = 0; n < this.rigidBody.numColliders(); n++) {
        var o = this.rigidBody.collider(n), c = this.collidersDesc[n], l = new pt().copy(c.shape.halfExtents), _ = l.clone().multiplyScalar(2), h = new pt().copy(c.translation);
        n == 0 && r.divide(_), o.setHalfExtents(l.multiply(r)), o.setTranslationWrtParent(h.multiply(r));
      }
      super.setScale(e);
    }
    toJSON() {
      const t = super.toJSON();
      return Object.assign(t, {
        type: this.type
      }), this.model.name && (t.model = {
        name: this.model.name
      }), t;
    }
  };
  class Dn extends Ze {
    constructor(t) {
      t = Object.assign({
        status: 1
      }, t), super(t);
    }
  }
  class om extends gt {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        collisionGroups: 0,
        isSensor: true,
        status: 1
      }, t), super(t), this.lightType = t.lightType, this.model = Qi.create(t.lightType, t), this.type = "light";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    toJSON() {
      const t = super.toJSON();
      return t.lightType = this.model.type, t.intensity = this.model.intensity, t;
    }
  }
  class cm extends Ze {
    static model = {
      name: ""
    };
    constructor(t = {}) {
      if (t = Object.assign({
        color: "#ffffff",
        heightSegments: 32,
        radius: 0.5,
        widthSegments: 32
      }, t), t.shape = new Br(t.radius), super(t), this.isSphere = true, this.type = "sphere", this.model = t.model, this.model.isObject3D == null) {
        const e = this.createModel(t);
        this.setModel(e);
      }
      this.onSphereAdded = this.onSphereAdded.bind(this), this.addEventListener("added", this.onSphereAdded);
    }
    onSphereAdded(t) {
      this.onSphereRemoved = this.onSphereRemoved.bind(this), this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onSphereRemoved);
    }
    onSphereRemoved(t) {
      this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onSphereRemoved);
    }
    createModel(t) {
      const e = new Kn(t.radius, t.widthSegments, t.heightSegments), r = new Ki({
        color: t.color
      }), n = new qi(e, r);
      return n.receiveShadow = true, n.castShadow = true, n;
    }
    setModel(t) {
      this.model = t;
    }
    setRadius(t) {
      this.rigidBody.collider(0).setRadius(t), this.object.scale.set(t * 2, t * 2, t * 2);
    }
    setScale(t) {
      this.setRadius(t.x / 2);
    }
  }
  class lm extends Ze {
    constructor(t) {
      t = Object.assign({
        indices: new Uint16Array(),
        status: 1,
        vertices: new Float32Array()
      }, t);
      let e, r = [];
      t.model ? (t.model.traverse(function(n) {
        n.isMesh && (e = n.geometry, e.rotateX(n.rotation.x), e.rotateY(n.rotation.y), e.rotateZ(n.rotation.z), e.scale(n.scale.x, n.scale.y, n.scale.z), e.translate(n.position.x, n.position.y, n.position.z), r.push(e));
      }), e = qn(r), t.vertices = e.attributes.position.array, t.indices = e.index.array, t.shape = new Or(t.vertices, t.indices, Sr.FIX_INTERNAL_EDGES)) : console.error("Error: TriMesh missing model."), super(t), this.isTriMesh = true, this.type = "trimesh", this.model = t.model, this.onTriMeshAdded = this.onTriMeshAdded.bind(this), this.addEventListener("added", this.onTriMeshAdded);
    }
    onTriMeshAdded(t) {
      this.onTriMeshRemoved = this.onTriMeshRemoved.bind(this), this.model && this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onTriMeshRemoved);
    }
    onTriMeshRemoved(t) {
      this.model && this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onTriMeshRemoved);
    }
    toJSON() {
      const t = super.toJSON();
      return Object.assign(t, {
        type: this.type
      }), this.model.name && (t.model = {
        name: this.model.name
      }), t;
    }
  }
  let _m = class Tn {
    static Cube = gt;
    static Empty = Dn;
    static Light = om;
    static Sphere = cm;
    static TriMesh = lm;
    static create(t) {
      return new this[t.className](t);
    }
    static getClassNameByType(t) {
      return Object.keys({
        ...this,
        ...Tn
      }).find((n) => n.toLowerCase() == t);
    }
    static getPropertyByClassName(t, e) {
      const r = this[e];
      if (r) return r[t];
    }
  };
  class dm extends gt {
    static model = {
      name: "cube-bounce"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        },
        status: 1
      }, t), super(t), this.type = "bounce", this.addColliderDesc({
        activeCollisionTypes: "ALL",
        activeEvents: "COLLISION_EVENTS",
        events: [
          {
            name: "bounce"
          }
        ],
        isSensor: true,
        mass: 0,
        shape: new Ee(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.4),
        translation: {
          x: 0,
          y: 0.5 * t.scale.y,
          z: 0
        }
      });
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
  }
  class hm extends gt {
    static model = {
      name: "cube-checkpoint"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setCheckpoint"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "checkpoint";
    }
    setCheckpoint({ pair: t }) {
      console.log(t);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
  }
  class wm extends gt {
    static model = {
      name: "cube-control"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setMode"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "control";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setMode({ pair: t }) {
      t.dispatchEvent({
        type: "setmode",
        value: "control"
      });
    }
  }
  class um extends gt {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        color: "#0290ff"
      }, t), super(t);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
  }
  class pm extends gt {
    static model = {
      name: "cube-direction"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setDirection"
          }
        ],
        status: 1
      }, t), super(t), this.type = "direction";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setDirection({ pair: t, target: e }) {
      var r = new pt(1, 0, 0), n = new Kt().copy(e.rigidBody.rotation()), o = new jr().setFromQuaternion(n), c = o.z;
      r.x = Math.cos(c), r.y = Math.sin(c), t.setForce(r, 0.5, 14);
    }
  }
  class gm extends gt {
    static model = {
      name: "cube-finish"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "finish"
          }
        ],
        status: 1
      }, t), super(t), this.type = "finish";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    finish({ pair: t }) {
      console.log(t);
    }
  }
  class bm extends gt {
    static model = {
      name: "cube-grapple"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setMode"
          }
        ],
        status: 1
      }, t), super(t), this.type = "grapple";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setMode({ pair: t }) {
      t.dispatchEvent({
        type: "setmode",
        value: "grapple"
      });
    }
  }
  class mm extends gt {
    static model = {
      name: "cube-gravity"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setGravity"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "gravity";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setGravity({ pair: t, target: e }) {
      var r = new pt().copy(game.physics.world.gravity), n = r.length(), o = new Kt().copy(e.rigidBody.rotation()), c = new jr().setFromQuaternion(o), l = -(Math.PI / 2 - c.z);
      game.physics.world.gravity.x = n * Math.cos(l), game.physics.world.gravity.y = n * Math.sin(l), t.dispatchEvent({
        type: "setgravity",
        gravity: r,
        value: l
      });
    }
  }
  class zn {
    constructor() {
    }
    static create(t = "PerspectiveCamera", e) {
      var r, n, o = window.innerWidth, c = window.innerHeight, l = o / c;
      return e = Object.assign({
        far: 100,
        fov: 45,
        near: 0.05,
        zoom: 1
      }, e), t == "PerspectiveCamera" ? r = new Xn(e.fov, l, e.near, e.far) : t == "OrthographicCamera" && (r = new Yn(-l, l, 1, -1, e.near, e.far)), r.fov = e.fov, r.zoom = e.zoom, r.updateProjectionMatrix(), e.helper == true && (n = new Qn(r), r.addEventListener("added", function(_) {
        r.parent.add(n);
      }), r.addEventListener("removed", function(_) {
        n.removeFromParent();
      })), r;
    }
  }
  class fm extends gt {
    static model = {
      name: "cube-player"
    };
    constructor(t) {
      t = Object.assign({
        activeCollisionTypes: "ALL",
        activeEvents: "COLLISION_EVENTS",
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "checkCollision"
          }
        ],
        status: 0
      }, t), super(t), this.type = "player", this.keys = {}, this.pointer = {}, this.jumpCount = 0, this.mode = "jump", this.light = Qi.create("PointLight", {
        color: "#dc265a",
        intensity: Math.PI * 10
      }), this.camera = zn.create("PerspectiveCamera"), this.cameraOffset = new pt(0, 0, 20), this.onPlayerAdded = this.onPlayerAdded.bind(this), this.addEventListener("added", this.onPlayerAdded);
    }
    update(t) {
      super.update(t), this.updateControls();
    }
    animate(t, e) {
      super.animate(t, e), this.updateCameraPosition();
    }
    updateCameraPosition() {
      this.camera.position.copy(this.object.position).add(this.cameraOffset);
    }
    checkCollision({ started: t, target: e }) {
      t == true && (e.jumpCount = 1);
    }
    jump() {
      if ((this.mode == "jump" || this.mode == "control") && this.jumpCount > 0) {
        const e = this.rigidBody.mass(), r = new pt(0, 30 * e, 0), n = game.physics.world.gravity, o = Math.atan2(n.y, n.x) + Math.PI / 2;
        this.setAngularVelocityAtAngle({
          x: 0,
          y: 0,
          z: 8
        }, o), this.applyVelocityAtAxisAngle({
          x: 1,
          y: 0,
          z: 1
        }, {
          x: 0,
          y: 0,
          z: 1
        }, o), this.applyImpulseAtAngle(r, o), this.jumpCount--;
      }
    }
    updateControls() {
      if (this.mode == "control") {
        let t = 0, e = game.physics.world.gravity, r = Math.atan2(e.y, e.x) + Math.PI / 2;
        this.keys.KeyA == true ? t = -1 : this.keys.KeyD == true ? t = 1 : this.keys.ArrowLeft == true ? t = -1 : this.keys.ArrowRight == true && (t = 1), pr.copy({
          x: t,
          y: 0,
          z: 0
        }), pr.applyAxisAngle({
          x: 0,
          y: 0,
          z: 1
        }, r), this.setForce(pr, 2, 14);
      }
    }
    onPlayerAdded(t) {
      this.onPlayerRemoved = this.onPlayerRemoved.bind(this), this.keyDown = this.keyDown.bind(this), this.keyUp = this.keyUp.bind(this), this.pointerDown = this.pointerDown.bind(this), this.pointerUp = this.pointerUp.bind(this), this.onSetMode = this.onSetMode.bind(this), this.onSetGravity = this.onSetGravity.bind(this), this.object.add(this.light), this.updateCameraPosition(), this.addEventListener("removed", this.onPlayerRemoved), this.addEventListener("setmode", this.onSetMode), this.addEventListener("setgravity", this.onSetGravity), document.addEventListener("keydown", this.keyDown), document.addEventListener("keyup", this.keyUp), document.addEventListener("pointerdown", this.pointerDown), document.addEventListener("pointerup", this.pointerUp);
    }
    onPlayerRemoved(t) {
      this.removeEventListener("removed", this.onPlayerRemoved), this.removeEventListener("setmode", this.onSetMode), this.removeEventListener("setgravity", this.onSetGravity), this.object.remove(this.light), document.removeEventListener("keydown", this.keyDown), document.removeEventListener("keyup", this.keyUp), document.removeEventListener("pointerdown", this.pointerDown), document.removeEventListener("pointerup", this.pointerUp);
    }
    reset() {
      this.jumpCount = 1, super.reset();
    }
    onSetMode({ value: t }) {
      this.setMode(t);
    }
    setMode(t) {
      this.mode = t;
    }
    onSetGravity({ value: t }) {
      this.tween({
        object: {
          z: this.camera.rotation.z
        },
        to: {
          z: t + Math.PI / 2
        },
        dynamic: true,
        duration: 250,
        easing: "Quadratic.InOut",
        onUpdate: function(e) {
          this.camera.rotation.z = e.z;
        }.bind(this)
      }).start();
    }
    keyDown({ code: t, repeat: e }) {
      e || (this.keys[t] = true, (this.keys.Space == true || this.keys.ArrowUp == true) && this.jump());
    }
    keyUp({ code: t }) {
      this.keys[t] = false;
    }
    pointerDown({ target: t, which: e }) {
      t.nodeName == "CANVAS" && (this.pointer[e] = true, this.pointer[1] == true && this.jump());
    }
    pointerUp({ which: t }) {
      this.pointer[t] = false;
    }
  }
  let pr = new pt();
  class ym extends Dn {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        color: "#ffffff",
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }, t), super(t), this.isProp = true, this.type = "prop", this.model = t.model, this.onPropAdded = this.onPropAdded.bind(this), this.addEventListener("added", this.onPropAdded);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e), this.model && this.model.mixer && this.model.mixer.update(t);
    }
    onPropAdded(t) {
      this.onPropRemoved = this.onPropRemoved.bind(this), this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onPropRemoved);
    }
    onPropRemoved(t) {
      this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onPropRemoved);
    }
    toJSON() {
      const t = super.toJSON();
      return this.model.name && (t.model = {
        name: this.model.name
      }), t;
    }
  }
  class vm extends gt {
    static model = {
      name: "cube-reset"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "reset"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "reset";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    reset({ pair: t }) {
      t.reset();
    }
  }
  class Rm extends gt {
    static model = {
      name: "cube-resize"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setPairScale"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "resize";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setPairScale({ pair: t, target: e }) {
      var r = e.rigidBody.collider(0), n = new pt().copy(r.halfExtents()).multiplyScalar(2);
      t.setScale(n);
    }
  }
  class Sm extends gt {
    static model = {
      name: "cube-spike"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        },
        status: 1
      }, t), super(t), this.type = "spike", this.addColliderDesc({
        activeCollisionTypes: "ALL",
        activeEvents: "COLLISION_EVENTS",
        events: [
          {
            name: "kill"
          }
        ],
        isSensor: true,
        mass: 0,
        shape: new Ee(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.25),
        translation: {
          x: 0,
          y: 0.5 * t.scale.y,
          z: 0
        }
      });
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    kill({ pair: t }) {
      console.log("Spike Sensor Touched!", t);
    }
  }
  class Cm extends gt {
    static model = {
      name: "cube-tip"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "showTip",
            value: "Say something nice!"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "tip";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    showTip({ value: t }) {
      window.dispatchEvent(new CustomEvent("openModal", {
        detail: {
          title: "Tip",
          text: t,
          inputs: [
            {
              type: "button",
              value: "Continue",
              callback: function() {
                window.dispatchEvent(new CustomEvent("closeModal"));
              }
            }
          ]
        }
      }));
    }
  }
  class Oi extends _m {
    static Bounce = dm;
    static Checkpoint = hm;
    static Control = wm;
    static Cube = um;
    static Direction = pm;
    static Finish = gm;
    static Grapple = bm;
    static Gravity = mm;
    static Player = fm;
    static Prop = ym;
    static Reset = vm;
    static Resize = Rm;
    static Spike = Sm;
    static Tip = Cm;
    static create(t) {
      return t.className == null && (t.className = super.getClassNameByType(t.type)), t.model == null && (t.model = super.getPropertyByClassName("model", t.className)), t.model && game.assets.get(t.model.name) && (t.model = game.assets.duplicate(t.model.name)), super.create(t);
    }
  }
  class Em {
    constructor(t, e) {
      this.execute = t, this.undo = e;
    }
  }
  class xm {
    constructor() {
      this.commands = [], this.current = -1;
    }
    add(t, e) {
      const r = new Em(t, e);
      return this.commands.splice(this.current + 1), this.commands.push(r), this.current++, r;
    }
    undo() {
      this.canUndo() && (this.commands[this.current].undo(), this.current--);
    }
    redo() {
      this.canRedo() && (this.current++, this.commands[this.current].execute());
    }
    canUndo() {
      return this.current >= 0;
    }
    canRedo() {
      return this.current < this.commands.length - 1;
    }
  }
  const Am = {
    class: "panel"
  }, Pm = {
    class: "actions"
  }, jm = {
    __name: "PanelActions",
    props: {
      game: Object,
      mode: Object
    },
    emits: [
      "setMode"
    ],
    setup(i, { emit: t }) {
      const e = t;
      function r(n) {
        e("setMode", {
          type: n
        });
      }
      return Wt(function() {
      }), (n, o) => (W(), q("div", Am, [
        A("div", Pm, [
          A("button", {
            class: Vt([
              "action",
              {
                selected: i.mode.type == "select"
              }
            ]),
            onClick: o[0] || (o[0] = (c) => r("select")),
            title: "Select"
          }, [
            ...o[3] || (o[3] = [
              A("span", {
                class: "material-symbols-rounded"
              }, "arrow_selector_tool", -1)
            ])
          ], 2),
          A("button", {
            class: Vt([
              "action",
              {
                selected: i.mode.type == "add"
              }
            ]),
            onClick: o[1] || (o[1] = (c) => r("add")),
            title: "Add"
          }, [
            ...o[4] || (o[4] = [
              A("span", {
                class: "material-symbols-rounded"
              }, "dashboard_customize", -1)
            ])
          ], 2),
          A("button", {
            class: Vt([
              "action",
              {
                selected: i.mode.type == "move"
              }
            ]),
            onClick: o[2] || (o[2] = (c) => r("move")),
            title: "Move camera"
          }, [
            ...o[5] || (o[5] = [
              A("span", {
                class: "material-symbols-rounded"
              }, "back_hand", -1)
            ])
          ], 2)
        ])
      ]));
    }
  }, Im = Qt(jm, [
    [
      "__scopeId",
      "data-v-59459b72"
    ]
  ]), Dm = {
    class: "panel"
  }, Tm = {
    class: "prefabs"
  }, zm = [
    "title",
    "onClick"
  ], Fm = [
    "src"
  ], km = {
    __name: "PanelPrefabs",
    props: {
      game: Object,
      mode: Object
    },
    emits: [
      "addEntity"
    ],
    setup(i, { emit: t }) {
      const e = t, r = i, n = $({}), o = $(false), c = ut(() => _()), l = ut((w) => (r.mode.type == "add" ? o.value = !w : o.value = false, o.value));
      function _() {
        return Object.keys(n.value).map((w) => {
          const b = n.value[w], f = r.game.assets.get(b.model.name);
          return b.thumbnail = r.game.assets.assetModelLoader.renderThumbnail(f, b), b;
        });
      }
      function h(w, b) {
        e("addEntity", w, b);
      }
      function p() {
        o.value = false;
      }
      return Wt(async () => {
        n.value = r.game.assets.get("prefabs");
      }), (w, b) => Xi((W(), q("div", Dm, [
        b[0] || (b[0] = A("div", {
          class: "header"
        }, [
          A("div", {
            class: "title"
          }, "Add")
        ], -1)),
        A("div", Tm, [
          (W(true), q(ae, null, me(c.value, (f) => (W(), q("button", {
            class: "prefab",
            title: f.className,
            onClick: (R) => h(R, f)
          }, [
            A("img", {
              src: f.thumbnail
            }, null, 8, Fm)
          ], 8, zm))), 256))
        ]),
        A("button", {
          class: "close",
          onClick: p
        }, "x")
      ], 512)), [
        [
          Yi,
          l.value
        ]
      ]);
    }
  }, Mm = Qt(km, [
    [
      "__scopeId",
      "data-v-b0bcae3d"
    ]
  ]), Nm = {
    class: "panel"
  }, Lm = {
    class: "header"
  }, Bm = {
    class: "actions"
  }, Om = [
    "disabled"
  ], Hm = [
    "disabled"
  ], Gm = [
    "onClick",
    "onContextmenu",
    "onDragstart",
    "onDragover",
    "onDragend",
    "onDrop"
  ], Vm = [
    "onDblclick"
  ], Wm = [
    "id",
    "value",
    "onChange"
  ], Um = [
    "onClick"
  ], Jm = {
    class: "row"
  }, Km = [
    "value",
    "onChange"
  ], qm = [
    "value",
    "onChange"
  ], Xm = [
    "value",
    "onChange"
  ], Ym = {
    class: "row"
  }, Qm = [
    "value",
    "onChange"
  ], Zm = [
    "value",
    "onChange"
  ], $m = [
    "value",
    "onChange"
  ], tf = {
    class: "row"
  }, ef = [
    "value",
    "onChange"
  ], rf = [
    "value",
    "onChange"
  ], nf = [
    "value",
    "onChange"
  ], sf = {
    class: "row"
  }, af = [
    "onChange"
  ], of = {
    class: "row"
  }, cf = [
    "onChange"
  ], lf = {
    __name: "PanelScene",
    props: {
      canUndo: Boolean,
      canRedo: Boolean,
      entities: Array,
      isPlaying: Boolean
    },
    emits: [
      "addEntity",
      "deleteEntity",
      "editEntity",
      "linkEntity",
      "moveEntity",
      "openContextMenu",
      "pause",
      "play",
      "renameEntity",
      "resetEntities",
      "selectEntity",
      "selectParentEntity",
      "setMode",
      "unlinkEntity",
      "redo",
      "undo"
    ],
    setup(i, { emit: t }) {
      const e = i, r = t, n = $(true), o = $();
      function c() {
        return n.value == true;
      }
      function l(I, v) {
        r("selectEntity", I, v);
      }
      function _(I, v) {
        r("openContextMenu", I, v);
      }
      function h(I) {
        I.target.parentNode.removeAttribute("draggable"), I.target.removeAttribute("readonly");
      }
      function p(I) {
        I.target.parentNode.setAttribute("draggable", true), I.target.setAttribute("readonly", true), I.target.blur();
      }
      function w(I, v) {
        v.isSelected != true && l(I, v);
      }
      function b(I, v) {
      }
      function f(I, v) {
        o.value.style.overflowY = "auto";
      }
      function R(I, v) {
        r("moveEntity", I, v);
      }
      function D(I, v) {
        v.isExpanded = !v.isExpanded;
      }
      function P(I, v, S) {
        r("editEntity", I, v, S);
      }
      return (I, v) => (W(), q("div", Nm, [
        A("div", Lm, [
          A("div", {
            class: "title",
            onClick: v[0] || (v[0] = (S) => n.value = !n.value)
          }, "Scene"),
          A("div", Bm, [
            A("button", {
              class: "action button",
              onClick: v[1] || (v[1] = (S) => r("undo")),
              title: "Undo",
              disabled: e.canUndo == false
            }, [
              ...v[7] || (v[7] = [
                A("span", {
                  class: "material-symbols-rounded"
                }, "undo", -1)
              ])
            ], 8, Om),
            A("button", {
              class: "action button",
              onClick: v[2] || (v[2] = (S) => r("redo")),
              title: "Redo",
              disabled: e.canRedo == false
            }, [
              ...v[8] || (v[8] = [
                A("span", {
                  class: "material-symbols-rounded"
                }, "redo", -1)
              ])
            ], 8, Hm),
            A("button", {
              class: "action button",
              onClick: v[3] || (v[3] = (S) => r("resetEntities")),
              title: "Restart level"
            }, [
              ...v[9] || (v[9] = [
                A("span", {
                  class: "material-symbols-rounded"
                }, "fast_rewind", -1)
              ])
            ]),
            i.isPlaying == true ? (W(), q("button", {
              key: 0,
              onClick: v[4] || (v[4] = (S) => r("pause")),
              class: "action button",
              title: "Pause level"
            }, [
              ...v[10] || (v[10] = [
                A("span", {
                  class: "material-symbols-rounded"
                }, "pause", -1)
              ])
            ])) : (W(), q("button", {
              key: 1,
              class: "action button",
              onClick: v[5] || (v[5] = (S) => r("play")),
              title: "Play level"
            }, [
              ...v[11] || (v[11] = [
                A("span", {
                  class: "material-symbols-rounded"
                }, "play_arrow", -1)
              ])
            ]))
          ])
        ]),
        Xi(A("div", {
          ref_key: "content",
          ref: o,
          class: "content"
        }, [
          A("ul", null, [
            At($n, {
              name: "list"
            }, {
              default: ne(() => [
                (W(true), q(ae, null, me(e.entities, (S) => (W(), q("li", {
                  key: S.id
                }, [
                  A("div", {
                    class: Vt([
                      "entity-title",
                      {
                        selected: S.isSelected
                      }
                    ]),
                    draggable: "true",
                    onClick: (E) => l(E, S),
                    onContextmenu: br((E) => _(E, S), [
                      "prevent"
                    ]),
                    onDragstart: (E) => w(E, S),
                    onDragover: br((E) => void 0, [
                      "prevent"
                    ]),
                    onDragend: (E) => f(E, S),
                    onDrop: (E) => R(E, S)
                  }, [
                    A("span", {
                      onDblclick: (E) => r("selectParentEntity", E, S),
                      class: Vt([
                        {
                          hidden: S.rigidBodyDesc.userData.parentId == null
                        },
                        "link material-symbols-rounded"
                      ]),
                      title: "Double click to select parent"
                    }, " link ", 42, Vm),
                    A("input", {
                      type: "text",
                      readonly: "",
                      id: S.id,
                      value: S.name || S.type,
                      onChange: (E) => r("renameEntity", E, S),
                      onKeyup: Zn(p, [
                        "enter"
                      ]),
                      onFocusout: p,
                      onDblclick: h
                    }, null, 40, Wm),
                    A("span", {
                      onClick: (E) => D(E, S),
                      class: Vt([
                        "toggle material-symbols-rounded",
                        {
                          isExpanded: S.isExpanded
                        }
                      ])
                    }, " keyboard_arrow_down ", 10, Um)
                  ], 42, Gm),
                  At(Le, {
                    name: "properties"
                  }, {
                    default: ne(() => [
                      S.isExpanded ? (W(), q("div", {
                        key: 0,
                        class: Vt([
                          "entity-properties",
                          {
                            expanded: S.isExpanded
                          }
                        ])
                      }, [
                        A("div", Jm, [
                          v[12] || (v[12] = A("span", {
                            class: "material-symbols-rounded"
                          }, "location_on", -1)),
                          A("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.x,
                            onChange: (E) => P(E, S, "rigidBodyDesc.translation.x")
                          }, null, 40, Km),
                          A("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.y,
                            onChange: (E) => P(E, S, "rigidBodyDesc.translation.y")
                          }, null, 40, qm),
                          A("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.z,
                            onChange: (E) => P(E, S, "rigidBodyDesc.translation.z")
                          }, null, 40, Xm)
                        ]),
                        A("div", Ym, [
                          v[13] || (v[13] = A("span", {
                            class: "material-symbols-rounded"
                          }, "orbit", -1)),
                          A("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.x,
                            onChange: (E) => P(E, S, "rigidBodyDesc.rotation.x")
                          }, null, 40, Qm),
                          A("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.y,
                            onChange: (E) => P(E, S, "rigidBodyDesc.rotation.y")
                          }, null, 40, Zm),
                          A("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.z,
                            onChange: (E) => P(E, S, "rigidBodyDesc.rotation.z")
                          }, null, 40, $m)
                        ]),
                        A("div", tf, [
                          v[14] || (v[14] = A("span", {
                            class: "material-symbols-rounded"
                          }, "package_2", -1)),
                          A("input", {
                            type: "text",
                            value: S.objectDesc.scale.x,
                            onChange: (E) => P(E, S, "objectDesc.scale.x")
                          }, null, 40, ef),
                          A("input", {
                            type: "text",
                            value: S.objectDesc.scale.y,
                            onChange: (E) => P(E, S, "objectDesc.scale.y")
                          }, null, 40, rf),
                          A("input", {
                            type: "text",
                            value: S.objectDesc.scale.z,
                            onChange: (E) => P(E, S, "objectDesc.scale.z")
                          }, null, 40, nf)
                        ]),
                        A("div", sf, [
                          v[16] || (v[16] = A("span", {
                            class: "material-symbols-rounded"
                          }, "bolt", -1)),
                          A("select", {
                            onChange: (E) => P(E, S, "collidersDesc[0].events[0].name")
                          }, [
                            v[15] || (v[15] = A("option", null, "None", -1)),
                            (W(true), q(ae, null, me(Object.getOwnPropertyNames(S).filter((E) => typeof S[E] == "function"), (E) => (W(), q("option", null, se(E), 1))), 256))
                          ], 40, af)
                        ]),
                        A("div", of, [
                          v[17] || (v[17] = A("span", {
                            class: "material-symbols-rounded hidden"
                          }, "format_size", -1)),
                          A("input", {
                            type: "text",
                            value: "{x:0,y:0,z:0}",
                            onChange: (E) => P(E, S),
                            placeholder: "{x:0,y:0,z:0}"
                          }, null, 40, cf)
                        ])
                      ], 2)) : qt("", true)
                    ]),
                    _: 2
                  }, 1024)
                ]))), 128))
              ]),
              _: 1
            }),
            e.entities.length == 0 ? (W(), q("li", {
              key: 0,
              onClick: v[6] || (v[6] = (S) => {
                r("setMode", {
                  type: "add"
                });
              })
            }, [
              ...v[18] || (v[18] = [
                A("div", {
                  class: "entity-title"
                }, [
                  A("span", {
                    class: "material-symbols-rounded"
                  }, "add"),
                  A("span", null, "Add entity")
                ], -1)
              ])
            ])) : qt("", true)
          ])
        ], 512), [
          [
            Yi,
            c()
          ]
        ])
      ]));
    }
  }, _f = Qt(lf, [
    [
      "__scopeId",
      "data-v-68bde30e"
    ]
  ]), df = [
    "onClick",
    "disabled"
  ], hf = {
    key: 0,
    class: "material-symbols-rounded"
  }, Hi = 150, wf = {
    __name: "ContextMenu",
    props: {
      event: {
        default: {
          clientX: 0,
          clientY: 0
        },
        required: true,
        type: Object
      },
      actions: {
        default: [],
        required: true,
        type: Array
      }
    },
    setup(i) {
      const t = i, e = $({
        animationDuration: `${Hi}ms`,
        left: "0px",
        top: "0px"
      }), r = $(false), n = $(false), o = $();
      function c(p, w) {
        w.callback && w.callback(p), _();
      }
      function l(p) {
        r.value == false ? (r.value = true, h(p)) : setTimeout(() => l(p), Hi);
      }
      function _(p) {
        n.value == false && (r.value = false);
      }
      async function h(p) {
        await Ji();
        const w = window.innerWidth, b = window.innerHeight, f = o.value.offsetWidth, R = o.value.offsetHeight;
        let D = p.clientX, P = p.clientY;
        D + f > w && (D = w - f), P + R > b && (P = b - R), e.value.left = D + "px", e.value.top = P + "px";
      }
      return Ui(() => t.event, () => {
        l(t.event);
      }), Wt(function() {
        document.addEventListener("pointerup", _);
      }), Ar(function() {
        document.removeEventListener("pointerup", _);
      }), (p, w) => (W(), Pr(Le, {
        name: "fade",
        onBeforeEnter: w[0] || (w[0] = (b) => n.value = true),
        onAfterEnter: w[1] || (w[1] = (b) => n.value = false)
      }, {
        default: ne(() => [
          r.value ? (W(), q("ul", {
            key: 0,
            ref_key: "menu",
            ref: o,
            style: ts(e.value)
          }, [
            (W(true), q(ae, null, me(t.actions, (b) => (W(), q("li", null, [
              A("button", {
                onClick: br((f) => c(f, b), [
                  "prevent"
                ]),
                disabled: b.disabled
              }, [
                b.icon ? (W(), q("span", hf, se(b.icon), 1)) : qt("", true),
                es(" " + se(b.text), 1)
              ], 8, df)
            ]))), 256))
          ], 4)) : qt("", true)
        ]),
        _: 1
      }));
    }
  }, uf = Qt(wf, [
    [
      "__scopeId",
      "data-v-7804f6c1"
    ]
  ]), Gi = {
    bounce({ pair: i, target: t, value: e = 30 }) {
      const r = new Kt().copy(t.rigidBody.rotation()), o = new jr().setFromQuaternion(r).z;
      t.applyVelocityAtAxisAngle({
        x: 1,
        y: 0,
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, o), t.applyImpulseAtAngle({
        x: 0,
        y: -e * t.object.scale.y,
        z: 0
      }, o), i.applyVelocityAtAxisAngle({
        x: 1,
        y: 0,
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, o), i.applyImpulseAtAngle({
        x: 0,
        y: e * i.rigidBody.mass(),
        z: 0
      }, o);
    },
    teleport({ pair: i, value: t = {
      x: 0,
      y: 0,
      z: 0
    } }) {
      i.setPosition(t);
    },
    toggleVisibility(i) {
      i.target.object.visible = !i.target.object.visible;
    }
  }, pf = {
    class: "panels"
  }, gf = {
    __name: "PageLevelEditor",
    props: {
      game: Object
    },
    setup(i) {
      const t = i, e = $({
        type: "select"
      }), r = $([]), n = $({}), o = [], c = gr(new xm()), l = gr(t.game.interval), _ = ut(() => c.canUndo()), h = ut(() => c.canRedo()), p = ut(() => l.threadRunning), w = $({}), b = $([]), f = new _s(zn.create(), t.game.graphics.canvas);
      f.zoomToCursor = true, f.zoomSpeed = 3, f.minDistance = 1, f.maxDistance = 100, f.mouseButtons = {
        LEFT: 2,
        MIDDLE: 2,
        RIGHT: 0
      }, Ut(false);
      function R(x) {
        e.value = x;
      }
      function D(x, k, j) {
        const m = j.replace(/\[/g, ".").replace(/]/g, "").split("."), y = m[m.length - 1], C = m.reduce((Y, B) => typeof Y[B] == "object" ? Y[B] : Y, k), T = C[y], H = x.target.value;
        c.add(function() {
          C[y] = H, k.reset();
        }, function() {
          C[y] = T, k.reset();
        }).execute();
      }
      function P(x, k) {
        const j = {
          x: Math.round(t.game.graphics.camera.position.x),
          y: Math.round(t.game.graphics.camera.position.y),
          z: 0
        }, m = Oi.create({
          ...k,
          position: j
        }), y = o[o.length - 1], C = y ? r.value.indexOf(y) + 1 : 0;
        m.addEventListener("added", function(T) {
          t.game.graphics.scene.add(m.object);
        }), Object.assign(m, Gi), c.add(function() {
          t.game.physics.add(m), r.value.splice(C, 0, m), E(x, m), vt();
        }, function() {
          t.game.physics.remove(m), r.value.splice(C, 1), tt(x, m), vt();
        }).execute();
      }
      function I(x, k) {
        const j = o.map((m) => ({
          children: t.game.physics.getChildren(m),
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        j.length > 0 && c.add(function() {
          for (let m = j.length - 1; m >= 0; m--) {
            const y = j[m];
            t.game.physics.remove(y.entity), r.value.splice(y.index, 1), tt(x, y.entity, m), vt();
          }
        }, function() {
          for (let m = 0; m < j.length; m++) {
            const y = j[m];
            y.children.forEach((C) => C.setParentId(y.entity.id)), t.game.physics.add(y.entity), r.value.splice(y.index, 0, y.entity), vt();
          }
        }).execute();
      }
      function v(x, k) {
        if (k.isSelected) return;
        const j = o.map((m) => ({
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        c.add(function() {
          for (let y = j.length - 1; y >= 0; y--) r.value.splice(j[y].index, 1);
          const m = r.value.indexOf(k) + 1;
          for (let y = 0; y < j.length; y++) r.value.splice(m + y, 0, j[y].entity);
        }, function() {
          const m = r.value.indexOf(k) + 1;
          for (let y = j.length - 1; y >= 0; y--) r.value.splice(m + y, 1);
          for (let y = 0; y < j.length; y++) r.value.splice(j[y].index, 0, j[y].entity);
        }).execute();
      }
      function S(x, k) {
        const j = k.name || k.type, m = x.target.value;
        c.add(function() {
          k.name = m;
        }, function() {
          k.name = j;
        }).execute();
      }
      function E(x, k) {
        let j = r.value.indexOf(n.value), m = r.value.indexOf(k), y = m, C = m;
        if (x.shiftKey == true ? (C = Math.max(m, j), y = Math.max(0, Math.min(Math.min(m, j), C))) : n.value = k, x.ctrlKey == true) {
          if (k.isSelected) {
            tt(x, k);
            return;
          }
        } else Nt(x);
        for (let T = y; T <= C; T++) r.value[T].isSelected = true, o.push(r.value[T]);
      }
      function yt(x, k) {
        const j = k.getParentId(), m = t.game.physics.getEntityById(j);
        m && E(x, m);
      }
      function bt(x) {
        let k = r.value[0], j = r.value[r.value.length - 1];
        n.value = k, E({
          shiftKey: true
        }, j);
      }
      function tt(x, k, j) {
        j == null && (j = o.indexOf(k)), k.isSelected = false, o.splice(j, 1);
      }
      function Nt(x, k) {
        for (let j = o.length - 1; j >= 0; j--) tt(x, o[j], j);
      }
      function Et(x) {
        r.value.forEach((k) => {
          k.reset();
        }), t.game.graphics.render();
      }
      function jt(x, k) {
        const j = o.map((m) => ({
          index: r.value.indexOf(m),
          parentId: m.getParentId(),
          entity: m
        })).sort((m, y) => m.index - y.index);
        j.length > 0 && c.add(function() {
          for (let m = j.length - 1; m >= 0; m--) {
            const y = j[m];
            y.entity.id != k.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(k.id), t.game.physics.createParentJoint(y.entity), vt());
          }
        }, function() {
          for (let m = 0; m < j.length; m++) {
            const y = j[m];
            y.entity.id != k.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), vt());
          }
        }).execute();
      }
      function Lt(x, k) {
        const j = o.map((m) => ({
          entity: m,
          parentId: m.getParentId()
        }));
        j.length > 0 && c.add(function() {
          for (let m = j.length - 1; m >= 0; m--) {
            const y = j[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(null), vt();
          }
        }, function() {
          for (let m = 0; m < j.length; m++) {
            const y = j[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), vt();
          }
        }).execute();
      }
      function It(x) {
        x.repeat || (x.code == "KeyA" && (x.ctrlKey || x.metaKey) ? (x.preventDefault(), bt()) : x.code == "KeyD" && (x.ctrlKey || x.metaKey) ? (x.preventDefault(), Nt(x)) : x.code == "KeyX" && (x.ctrlKey || x.metaKey) ? I(x) : x.code == "KeyZ" && (x.ctrlKey || x.metaKey) && (x.shiftKey == true ? xe() : Bt()));
      }
      function Bt() {
        c.undo();
      }
      function xe() {
        c.redo();
      }
      function le(x) {
        t.game.physics.clear();
        const k = t.game.assets.get(x), j = [];
        return k && k.children.forEach(function(m) {
          const y = Oi.create({
            ccd: true,
            friction: k.friction || 0,
            softCcdPrediction: 0.5,
            ...m
          });
          y.addEventListener("added", function(C) {
            t.game.graphics.scene.add(y.object);
          }), Object.assign(y, Gi), y.type == "player" && (t.game.player = y, t.game.graphics.setCamera(y.camera)), t.game.physics.add(y), j.push(y);
        }), j;
      }
      function _e(x, k) {
        if (k.isSelected) {
          let j = [], m = {
            text: "Link",
            icon: "link",
            disabled: o.length <= 1,
            callback: () => jt(x, k)
          }, y = {
            text: "Unlink",
            icon: "link_off",
            disabled: Zt() == false,
            callback: () => Lt()
          }, C = {
            text: "Delete",
            icon: "delete",
            callback: () => I(x)
          };
          j.push(m, y, C), w.value = x, b.value = j;
        } else E(x, k), _e(x, k);
      }
      function Zt() {
        for (let x = o.length - 1; x >= 0; x--) if (o[x].getParentId()) return true;
        return false;
      }
      function de() {
        l.stop(), t.game.graphics.setCamera(f.object), t.game.graphics.render(), Ut(true);
      }
      function $e() {
        l.start(), t.game.graphics.setCamera(t.game.player.camera), Ut(false);
      }
      function vt() {
        l.threadRunning == false && (t.game.physics.debugger.update(), t.game.graphics.render());
      }
      function he() {
      }
      function $t() {
        t.game.interval.threadRunning == false && t.game.graphics.render();
      }
      function Ut(x = true) {
        f.enablePan = x, f.enableRotate = x, f.enableZoom = x;
      }
      return Wt(async function() {
        t.game.physics.debugger.enable(), r.value = le("boxel-3d-sandbox"), document.addEventListener("keydown", It), f.addEventListener("start", he), f.addEventListener("change", $t), f.object.rotation.set(0, 0, 0), f.target.copy(t.game.player.getPosition()), t.game.player.camera.getWorldPosition(f.object.position);
      }), Ar(function() {
        document.removeEventListener("keydown", It), f.removeEventListener("start", he), f.removeEventListener("change", $t);
      }), (x, k) => (W(), q("div", pf, [
        At(Im, {
          game: i.game,
          mode: e.value,
          onSetMode: R
        }, null, 8, [
          "game",
          "mode"
        ]),
        At(Mm, {
          game: i.game,
          mode: e.value,
          onAddEntity: P
        }, null, 8, [
          "game",
          "mode"
        ]),
        At(_f, {
          entities: r.value,
          canUndo: _.value,
          canRedo: h.value,
          isPlaying: p.value,
          onAddEntity: P,
          onDeleteEntity: I,
          onEditEntity: D,
          onLinkEntity: jt,
          onMoveEntity: v,
          onPause: de,
          onPlay: $e,
          onRenameEntity: S,
          onResetEntities: Et,
          onSelectEntity: E,
          onSelectParentEntity: yt,
          onSetMode: R,
          onUnlinkEntity: Lt,
          onOpenContextMenu: _e,
          onRedo: xe,
          onUndo: Bt
        }, null, 8, [
          "entities",
          "canUndo",
          "canRedo",
          "isPlaying"
        ]),
        At(uf, {
          event: w.value,
          actions: b.value
        }, null, 8, [
          "event",
          "actions"
        ])
      ]));
    }
  }, bf = Qt(gf, [
    [
      "__scopeId",
      "data-v-1d86fb92"
    ]
  ]), mf = [
    {
      name: "home",
      path: "/",
      component: sm
    },
    {
      name: "play",
      path: "/play",
      component: am
    },
    {
      name: "level-editor",
      path: "/level-editor",
      component: bf
    }
  ], ff = ba({
    history: Xs(),
    routes: mf
  }), Fn = rs(nm);
  Fn.use(ff);
  Fn.mount("#app");
})();
