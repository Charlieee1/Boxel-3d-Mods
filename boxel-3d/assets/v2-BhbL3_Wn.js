import { aX as kn, aY as Wi, u as pt, s as hr, a$ as Qt, p as Mn, f as _t, aZ as Vi, b1 as Ye, e as Y, q as qi, l as Ui, al as Fn, aF as Ln, aH as Bn, b2 as Br, V as dt, aE as Gt, _ as Jt, x as Ot, y as Sr, b as Rr, o as W, w as te, c as U, d as Wt, a as j, t as ee, F as re, h as pe, aS as Nn, aT as On, T as Fe, b3 as Hn, g as Rt, m as Bt, b4 as Gn, aN as Wn, ac as Vn, O as Nr, af as qn, b5 as Ji, ah as Ki, aL as Un, b6 as Jn, aM as Cr, a2 as Kn, b7 as Xn, b8 as $n, i as Xi, z as $i, aP as wr, aR as Yn, b9 as Zn, n as Qn, j as ts, A as es } from "./SkeletonUtils-Cx5mugYb.js";
import { I as rs, A as is, G as ns, a as ss, L as Yi } from "./AssetLoader-DqaLF4NC.js";
import { G as as, E as os, T as cs, O as ls } from "./OrbitControls-_D4I2B-Q.js";
(async () => {
  const Yt = typeof document < "u";
  function Zi(i) {
    return typeof i == "object" || "displayName" in i || "props" in i || "__vccOpts" in i;
  }
  function _s(i) {
    return i.__esModule || i[Symbol.toStringTag] === "Module" || i.default && Zi(i.default);
  }
  const H = Object.assign;
  function Ze(i, t) {
    const e = {};
    for (const r in t) {
      const n = t[r];
      e[r] = yt(n) ? n.map(i) : i(n);
    }
    return e;
  }
  const he = () => {
  }, yt = Array.isArray, Qi = /#/g, ds = /&/g, hs = /\//g, ws = /=/g, us = /\?/g, tn = /\+/g, ps = /%5B/g, gs = /%5D/g, en = /%5E/g, bs = /%60/g, rn = /%7B/g, ms = /%7C/g, nn = /%7D/g, fs = /%20/g;
  function Er(i) {
    return encodeURI("" + i).replace(ms, "|").replace(ps, "[").replace(gs, "]");
  }
  function ys(i) {
    return Er(i).replace(rn, "{").replace(nn, "}").replace(en, "^");
  }
  function ur(i) {
    return Er(i).replace(tn, "%2B").replace(fs, "+").replace(Qi, "%23").replace(ds, "%26").replace(bs, "`").replace(rn, "{").replace(nn, "}").replace(en, "^");
  }
  function vs(i) {
    return ur(i).replace(ws, "%3D");
  }
  function Ss(i) {
    return Er(i).replace(Qi, "%23").replace(us, "%3F");
  }
  function Rs(i) {
    return i == null ? "" : Ss(i).replace(hs, "%2F");
  }
  function ge(i) {
    try {
      return decodeURIComponent("" + i);
    } catch {
    }
    return "" + i;
  }
  const Cs = /\/$/, Es = (i) => i.replace(Cs, "");
  function Qe(i, t, e = "/") {
    let r, n = {}, a = "", c = "";
    const l = t.indexOf("#");
    let _ = t.indexOf("?");
    return l < _ && l >= 0 && (_ = -1), _ > -1 && (r = t.slice(0, _), a = t.slice(_ + 1, l > -1 ? l : t.length), n = i(a)), l > -1 && (r = r || t.slice(0, l), c = t.slice(l, t.length)), r = Ps(r ?? t, e), {
      fullPath: r + (a && "?") + a + c,
      path: r,
      query: n,
      hash: ge(c)
    };
  }
  function xs(i, t) {
    const e = t.query ? i(t.query) : "";
    return t.path + (e && "?") + e + (t.hash || "");
  }
  function Or(i, t) {
    return !t || !i.toLowerCase().startsWith(t.toLowerCase()) ? i : i.slice(t.length) || "/";
  }
  function js(i, t, e) {
    const r = t.matched.length - 1, n = e.matched.length - 1;
    return r > -1 && r === n && ie(t.matched[r], e.matched[n]) && sn(t.params, e.params) && i(t.query) === i(e.query) && t.hash === e.hash;
  }
  function ie(i, t) {
    return (i.aliasOf || i) === (t.aliasOf || t);
  }
  function sn(i, t) {
    if (Object.keys(i).length !== Object.keys(t).length) return false;
    for (const e in i) if (!As(i[e], t[e])) return false;
    return true;
  }
  function As(i, t) {
    return yt(i) ? Hr(i, t) : yt(t) ? Hr(t, i) : i === t;
  }
  function Hr(i, t) {
    return yt(t) ? i.length === t.length && i.every((e, r) => e === t[r]) : i.length === 1 && i[0] === t;
  }
  function Ps(i, t) {
    if (i.startsWith("/")) return i;
    if (!i) return t;
    const e = t.split("/"), r = i.split("/"), n = r[r.length - 1];
    (n === ".." || n === ".") && r.push("");
    let a = e.length - 1, c, l;
    for (c = 0; c < r.length; c++) if (l = r[c], l !== ".") if (l === "..") a > 1 && a--;
    else break;
    return e.slice(0, a).join("/") + "/" + r.slice(c).join("/");
  }
  const Mt = {
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
  var be;
  (function(i) {
    i.pop = "pop", i.push = "push";
  })(be || (be = {}));
  var we;
  (function(i) {
    i.back = "back", i.forward = "forward", i.unknown = "";
  })(we || (we = {}));
  function Is(i) {
    if (!i) if (Yt) {
      const t = document.querySelector("base");
      i = t && t.getAttribute("href") || "/", i = i.replace(/^\w+:\/\/[^\/]+/, "");
    } else i = "/";
    return i[0] !== "/" && i[0] !== "#" && (i = "/" + i), Es(i);
  }
  const zs = /^[^#]+#/;
  function Ts(i, t) {
    return i.replace(zs, "#") + t;
  }
  function Ds(i, t) {
    const e = document.documentElement.getBoundingClientRect(), r = i.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - e.left - (t.left || 0),
      top: r.top - e.top - (t.top || 0)
    };
  }
  const Le = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function ks(i) {
    let t;
    if ("el" in i) {
      const e = i.el, r = typeof e == "string" && e.startsWith("#"), n = typeof e == "string" ? r ? document.getElementById(e.slice(1)) : document.querySelector(e) : e;
      if (!n) return;
      t = Ds(n, i);
    } else t = i;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Gr(i, t) {
    return (history.state ? history.state.position - t : -1) + i;
  }
  const pr = /* @__PURE__ */ new Map();
  function Ms(i, t) {
    pr.set(i, t);
  }
  function Fs(i) {
    const t = pr.get(i);
    return pr.delete(i), t;
  }
  let Ls = () => location.protocol + "//" + location.host;
  function an(i, t) {
    const { pathname: e, search: r, hash: n } = t, a = i.indexOf("#");
    if (a > -1) {
      let l = n.includes(i.slice(a)) ? i.slice(a).length : 1, _ = n.slice(l);
      return _[0] !== "/" && (_ = "/" + _), Or(_, "");
    }
    return Or(e, i) + r + n;
  }
  function Bs(i, t, e, r) {
    let n = [], a = [], c = null;
    const l = ({ state: b }) => {
      const f = an(i, location), C = e.value, T = t.value;
      let z = 0;
      if (b) {
        if (e.value = f, t.value = b, c && c === C) {
          c = null;
          return;
        }
        z = T ? b.position - T.position : 0;
      } else r(f);
      n.forEach((P) => {
        P(e.value, C, {
          delta: z,
          type: be.pop,
          direction: z ? z > 0 ? we.forward : we.back : we.unknown
        });
      });
    };
    function _() {
      c = e.value;
    }
    function h(b) {
      n.push(b);
      const f = () => {
        const C = n.indexOf(b);
        C > -1 && n.splice(C, 1);
      };
      return a.push(f), f;
    }
    function p() {
      const { history: b } = window;
      b.state && b.replaceState(H({}, b.state, {
        scroll: Le()
      }), "");
    }
    function w() {
      for (const b of a) b();
      a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", p);
    }
    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", p, {
      passive: true
    }), {
      pauseListeners: _,
      listen: h,
      destroy: w
    };
  }
  function Wr(i, t, e, r = false, n = false) {
    return {
      back: i,
      current: t,
      forward: e,
      replaced: r,
      position: window.history.length,
      scroll: n ? Le() : null
    };
  }
  function Ns(i) {
    const { history: t, location: e } = window, r = {
      value: an(i, e)
    }, n = {
      value: t.state
    };
    n.value || a(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function a(_, h, p) {
      const w = i.indexOf("#"), b = w > -1 ? (e.host && document.querySelector("base") ? i : i.slice(w)) + _ : Ls() + i + _;
      try {
        t[p ? "replaceState" : "pushState"](h, "", b), n.value = h;
      } catch (f) {
        console.error(f), e[p ? "replace" : "assign"](b);
      }
    }
    function c(_, h) {
      const p = H({}, t.state, Wr(n.value.back, _, n.value.forward, true), h, {
        position: n.value.position
      });
      a(_, p, true), r.value = _;
    }
    function l(_, h) {
      const p = H({}, n.value, t.state, {
        forward: _,
        scroll: Le()
      });
      a(p.current, p, true);
      const w = H({}, Wr(r.value, _, null), {
        position: p.position + 1
      }, h);
      a(_, w, false), r.value = _;
    }
    return {
      location: r,
      state: n,
      push: l,
      replace: c
    };
  }
  function Os(i) {
    i = Is(i);
    const t = Ns(i), e = Bs(i, t.state, t.location, t.replace);
    function r(a, c = true) {
      c || e.pauseListeners(), history.go(a);
    }
    const n = H({
      location: "",
      base: i,
      go: r,
      createHref: Ts.bind(null, i)
    }, t, e);
    return Object.defineProperty(n, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(n, "state", {
      enumerable: true,
      get: () => t.state.value
    }), n;
  }
  function Hs(i) {
    return i = location.host ? i || location.pathname + location.search : "", i.includes("#") || (i += "#"), Os(i);
  }
  function Gs(i) {
    return typeof i == "string" || i && typeof i == "object";
  }
  function on(i) {
    return typeof i == "string" || typeof i == "symbol";
  }
  const cn = Symbol("");
  var Vr;
  (function(i) {
    i[i.aborted = 4] = "aborted", i[i.cancelled = 8] = "cancelled", i[i.duplicated = 16] = "duplicated";
  })(Vr || (Vr = {}));
  function ne(i, t) {
    return H(new Error(), {
      type: i,
      [cn]: true
    }, t);
  }
  function jt(i, t) {
    return i instanceof Error && cn in i && (t == null || !!(i.type & t));
  }
  const qr = "[^/]+?", Ws = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, Vs = /[.+*?^${}()[\]/\\]/g;
  function qs(i, t) {
    const e = H({}, Ws, t), r = [];
    let n = e.start ? "^" : "";
    const a = [];
    for (const h of i) {
      const p = h.length ? [] : [
        90
      ];
      e.strict && !h.length && (n += "/");
      for (let w = 0; w < h.length; w++) {
        const b = h[w];
        let f = 40 + (e.sensitive ? 0.25 : 0);
        if (b.type === 0) w || (n += "/"), n += b.value.replace(Vs, "\\$&"), f += 40;
        else if (b.type === 1) {
          const { value: C, repeatable: T, optional: z, regexp: P } = b;
          a.push({
            name: C,
            repeatable: T,
            optional: z
          });
          const v = P || qr;
          if (v !== qr) {
            f += 10;
            try {
              new RegExp(`(${v})`);
            } catch (x) {
              throw new Error(`Invalid custom RegExp for param "${C}" (${v}): ` + x.message);
            }
          }
          let S = T ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
          w || (S = z && h.length < 2 ? `(?:/${S})` : "/" + S), z && (S += "?"), n += S, f += 20, z && (f += -8), T && (f += -20), v === ".*" && (f += -50);
        }
        p.push(f);
      }
      r.push(p);
    }
    if (e.strict && e.end) {
      const h = r.length - 1;
      r[h][r[h].length - 1] += 0.7000000000000001;
    }
    e.strict || (n += "/?"), e.end ? n += "$" : e.strict && !n.endsWith("/") && (n += "(?:/|$)");
    const c = new RegExp(n, e.sensitive ? "" : "i");
    function l(h) {
      const p = h.match(c), w = {};
      if (!p) return null;
      for (let b = 1; b < p.length; b++) {
        const f = p[b] || "", C = a[b - 1];
        w[C.name] = f && C.repeatable ? f.split("/") : f;
      }
      return w;
    }
    function _(h) {
      let p = "", w = false;
      for (const b of i) {
        (!w || !p.endsWith("/")) && (p += "/"), w = false;
        for (const f of b) if (f.type === 0) p += f.value;
        else if (f.type === 1) {
          const { value: C, repeatable: T, optional: z } = f, P = C in h ? h[C] : "";
          if (yt(P) && !T) throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);
          const v = yt(P) ? P.join("/") : P;
          if (!v) if (z) b.length < 2 && (p.endsWith("/") ? p = p.slice(0, -1) : w = true);
          else throw new Error(`Missing required param "${C}"`);
          p += v;
        }
      }
      return p || "/";
    }
    return {
      re: c,
      score: r,
      keys: a,
      parse: l,
      stringify: _
    };
  }
  function Us(i, t) {
    let e = 0;
    for (; e < i.length && e < t.length; ) {
      const r = t[e] - i[e];
      if (r) return r;
      e++;
    }
    return i.length < t.length ? i.length === 1 && i[0] === 80 ? -1 : 1 : i.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function ln(i, t) {
    let e = 0;
    const r = i.score, n = t.score;
    for (; e < r.length && e < n.length; ) {
      const a = Us(r[e], n[e]);
      if (a) return a;
      e++;
    }
    if (Math.abs(n.length - r.length) === 1) {
      if (Ur(r)) return 1;
      if (Ur(n)) return -1;
    }
    return n.length - r.length;
  }
  function Ur(i) {
    const t = i[i.length - 1];
    return i.length > 0 && t[t.length - 1] < 0;
  }
  const Js = {
    type: 0,
    value: ""
  }, Ks = /[a-zA-Z0-9_]/;
  function Xs(i) {
    if (!i) return [
      []
    ];
    if (i === "/") return [
      [
        Js
      ]
    ];
    if (!i.startsWith("/")) throw new Error(`Invalid path "${i}"`);
    function t(f) {
      throw new Error(`ERR (${e})/"${h}": ${f}`);
    }
    let e = 0, r = e;
    const n = [];
    let a;
    function c() {
      a && n.push(a), a = [];
    }
    let l = 0, _, h = "", p = "";
    function w() {
      h && (e === 0 ? a.push({
        type: 0,
        value: h
      }) : e === 1 || e === 2 || e === 3 ? (a.length > 1 && (_ === "*" || _ === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), a.push({
        type: 1,
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
      if (_ = i[l++], _ === "\\" && e !== 2) {
        r = e, e = 4;
        continue;
      }
      switch (e) {
        case 0:
          _ === "/" ? (h && w(), c()) : _ === ":" ? (w(), e = 1) : b();
          break;
        case 4:
          b(), e = r;
          break;
        case 1:
          _ === "(" ? e = 2 : Ks.test(_) ? b() : (w(), e = 0, _ !== "*" && _ !== "?" && _ !== "+" && l--);
          break;
        case 2:
          _ === ")" ? p[p.length - 1] == "\\" ? p = p.slice(0, -1) + _ : e = 3 : p += _;
          break;
        case 3:
          w(), e = 0, _ !== "*" && _ !== "?" && _ !== "+" && l--, p = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return e === 2 && t(`Unfinished custom RegExp for param "${h}"`), w(), c(), n;
  }
  function $s(i, t, e) {
    const r = qs(Xs(i.path), e), n = H(r, {
      record: i,
      parent: t,
      children: [],
      alias: []
    });
    return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
  }
  function Ys(i, t) {
    const e = [], r = /* @__PURE__ */ new Map();
    t = $r({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function n(w) {
      return r.get(w);
    }
    function a(w, b, f) {
      const C = !f, T = Kr(w);
      T.aliasOf = f && f.record;
      const z = $r(t, w), P = [
        T
      ];
      if ("alias" in w) {
        const x = typeof w.alias == "string" ? [
          w.alias
        ] : w.alias;
        for (const gt of x) P.push(Kr(H({}, T, {
          components: f ? f.record.components : T.components,
          path: gt,
          aliasOf: f ? f.record : T
        })));
      }
      let v, S;
      for (const x of P) {
        const { path: gt } = x;
        if (b && gt[0] !== "/") {
          const wt = b.record.path, Z = wt[wt.length - 1] === "/" ? "" : "/";
          x.path = b.record.path + (gt && Z + gt);
        }
        if (v = $s(x, b, z), f ? f.alias.push(v) : (S = S || v, S !== v && S.alias.push(v), C && w.name && !Xr(v) && c(w.name)), _n(v) && _(v), T.children) {
          const wt = T.children;
          for (let Z = 0; Z < wt.length; Z++) a(wt[Z], v, f && f.children[Z]);
        }
        f = f || v;
      }
      return S ? () => {
        c(S);
      } : he;
    }
    function c(w) {
      if (on(w)) {
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
      const b = ta(w, e);
      e.splice(b, 0, w), w.record.name && !Xr(w) && r.set(w.record.name, w);
    }
    function h(w, b) {
      let f, C = {}, T, z;
      if ("name" in w && w.name) {
        if (f = r.get(w.name), !f) throw ne(1, {
          location: w
        });
        z = f.record.name, C = H(Jr(b.params, f.keys.filter((S) => !S.optional).concat(f.parent ? f.parent.keys.filter((S) => S.optional) : []).map((S) => S.name)), w.params && Jr(w.params, f.keys.map((S) => S.name))), T = f.stringify(C);
      } else if (w.path != null) T = w.path, f = e.find((S) => S.re.test(T)), f && (C = f.parse(T), z = f.record.name);
      else {
        if (f = b.name ? r.get(b.name) : e.find((S) => S.re.test(b.path)), !f) throw ne(1, {
          location: w,
          currentLocation: b
        });
        z = f.record.name, C = H({}, b.params, w.params), T = f.stringify(C);
      }
      const P = [];
      let v = f;
      for (; v; ) P.unshift(v.record), v = v.parent;
      return {
        name: z,
        path: T,
        params: C,
        matched: P,
        meta: Qs(P)
      };
    }
    i.forEach((w) => a(w));
    function p() {
      e.length = 0, r.clear();
    }
    return {
      addRoute: a,
      resolve: h,
      removeRoute: c,
      clearRoutes: p,
      getRoutes: l,
      getRecordMatcher: n
    };
  }
  function Jr(i, t) {
    const e = {};
    for (const r of t) r in i && (e[r] = i[r]);
    return e;
  }
  function Kr(i) {
    const t = {
      path: i.path,
      redirect: i.redirect,
      name: i.name,
      meta: i.meta || {},
      aliasOf: i.aliasOf,
      beforeEnter: i.beforeEnter,
      props: Zs(i),
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
  function Zs(i) {
    const t = {}, e = i.props || false;
    if ("component" in i) t.default = e;
    else for (const r in i.components) t[r] = typeof e == "object" ? e[r] : e;
    return t;
  }
  function Xr(i) {
    for (; i; ) {
      if (i.record.aliasOf) return true;
      i = i.parent;
    }
    return false;
  }
  function Qs(i) {
    return i.reduce((t, e) => H(t, e.meta), {});
  }
  function $r(i, t) {
    const e = {};
    for (const r in i) e[r] = r in t ? t[r] : i[r];
    return e;
  }
  function ta(i, t) {
    let e = 0, r = t.length;
    for (; e !== r; ) {
      const a = e + r >> 1;
      ln(i, t[a]) < 0 ? r = a : e = a + 1;
    }
    const n = ea(i);
    return n && (r = t.lastIndexOf(n, r - 1)), r;
  }
  function ea(i) {
    let t = i;
    for (; t = t.parent; ) if (_n(t) && ln(i, t) === 0) return t;
  }
  function _n({ record: i }) {
    return !!(i.name || i.components && Object.keys(i.components).length || i.redirect);
  }
  function ra(i) {
    const t = {};
    if (i === "" || i === "?") return t;
    const r = (i[0] === "?" ? i.slice(1) : i).split("&");
    for (let n = 0; n < r.length; ++n) {
      const a = r[n].replace(tn, " "), c = a.indexOf("="), l = ge(c < 0 ? a : a.slice(0, c)), _ = c < 0 ? null : ge(a.slice(c + 1));
      if (l in t) {
        let h = t[l];
        yt(h) || (h = t[l] = [
          h
        ]), h.push(_);
      } else t[l] = _;
    }
    return t;
  }
  function Yr(i) {
    let t = "";
    for (let e in i) {
      const r = i[e];
      if (e = vs(e), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + e);
        continue;
      }
      (yt(r) ? r.map((a) => a && ur(a)) : [
        r && ur(r)
      ]).forEach((a) => {
        a !== void 0 && (t += (t.length ? "&" : "") + e, a != null && (t += "=" + a));
      });
    }
    return t;
  }
  function ia(i) {
    const t = {};
    for (const e in i) {
      const r = i[e];
      r !== void 0 && (t[e] = yt(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
    }
    return t;
  }
  const na = Symbol(""), Zr = Symbol(""), xr = Symbol(""), jr = Symbol(""), gr = Symbol("");
  function _e() {
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
  function Lt(i, t, e, r, n, a = (c) => c()) {
    const c = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
    return () => new Promise((l, _) => {
      const h = (b) => {
        b === false ? _(ne(4, {
          from: e,
          to: t
        })) : b instanceof Error ? _(b) : Gs(b) ? _(ne(2, {
          from: t,
          to: b
        })) : (c && r.enterCallbacks[n] === c && typeof b == "function" && c.push(b), l());
      }, p = a(() => i.call(r && r.instances[n], t, e, h));
      let w = Promise.resolve(p);
      i.length < 3 && (w = w.then(h)), w.catch((b) => _(b));
    });
  }
  function tr(i, t, e, r, n = (a) => a()) {
    const a = [];
    for (const c of i) for (const l in c.components) {
      let _ = c.components[l];
      if (!(t !== "beforeRouteEnter" && !c.instances[l])) if (Zi(_)) {
        const p = (_.__vccOpts || _)[t];
        p && a.push(Lt(p, e, r, c, l, n));
      } else {
        let h = _();
        a.push(() => h.then((p) => {
          if (!p) throw new Error(`Couldn't resolve component "${l}" at "${c.path}"`);
          const w = _s(p) ? p.default : p;
          c.mods[l] = p, c.components[l] = w;
          const f = (w.__vccOpts || w)[t];
          return f && Lt(f, e, r, c, l, n)();
        }));
      }
    }
    return a;
  }
  function Qr(i) {
    const t = Qt(xr), e = Qt(jr), r = _t(() => {
      const _ = pt(i.to);
      return t.resolve(_);
    }), n = _t(() => {
      const { matched: _ } = r.value, { length: h } = _, p = _[h - 1], w = e.matched;
      if (!p || !w.length) return -1;
      const b = w.findIndex(ie.bind(null, p));
      if (b > -1) return b;
      const f = ti(_[h - 2]);
      return h > 1 && ti(p) === f && w[w.length - 1].path !== f ? w.findIndex(ie.bind(null, _[h - 2])) : b;
    }), a = _t(() => n.value > -1 && la(e.params, r.value.params)), c = _t(() => n.value > -1 && n.value === e.matched.length - 1 && sn(e.params, r.value.params));
    function l(_ = {}) {
      if (ca(_)) {
        const h = t[pt(i.replace) ? "replace" : "push"](pt(i.to)).catch(he);
        return i.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: _t(() => r.value.href),
      isActive: a,
      isExactActive: c,
      navigate: l
    };
  }
  function sa(i) {
    return i.length === 1 ? i[0] : i;
  }
  const aa = Wi({
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
    useLink: Qr,
    setup(i, { slots: t }) {
      const e = Mn(Qr(i)), { options: r } = Qt(xr), n = _t(() => ({
        [ei(i.activeClass, r.linkActiveClass, "router-link-active")]: e.isActive,
        [ei(i.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: e.isExactActive
      }));
      return () => {
        const a = t.default && sa(t.default(e));
        return i.custom ? a : Vi("a", {
          "aria-current": e.isExactActive ? i.ariaCurrentValue : null,
          href: e.href,
          onClick: e.navigate,
          class: n.value
        }, a);
      };
    }
  }), oa = aa;
  function ca(i) {
    if (!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey) && !i.defaultPrevented && !(i.button !== void 0 && i.button !== 0)) {
      if (i.currentTarget && i.currentTarget.getAttribute) {
        const t = i.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return i.preventDefault && i.preventDefault(), true;
    }
  }
  function la(i, t) {
    for (const e in t) {
      const r = t[e], n = i[e];
      if (typeof r == "string") {
        if (r !== n) return false;
      } else if (!yt(n) || n.length !== r.length || r.some((a, c) => a !== n[c])) return false;
    }
    return true;
  }
  function ti(i) {
    return i ? i.aliasOf ? i.aliasOf.path : i.path : "";
  }
  const ei = (i, t, e) => i ?? t ?? e, _a = Wi({
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
      const r = Qt(gr), n = _t(() => i.route || r.value), a = Qt(Zr, 0), c = _t(() => {
        let h = pt(a);
        const { matched: p } = n.value;
        let w;
        for (; (w = p[h]) && !w.components; ) h++;
        return h;
      }), l = _t(() => n.value.matched[c.value]);
      Ye(Zr, _t(() => c.value + 1)), Ye(na, l), Ye(gr, n);
      const _ = Y();
      return qi(() => [
        _.value,
        l.value,
        i.name
      ], ([h, p, w], [b, f, C]) => {
        p && (p.instances[w] = h, f && f !== p && h && h === b && (p.leaveGuards.size || (p.leaveGuards = f.leaveGuards), p.updateGuards.size || (p.updateGuards = f.updateGuards))), h && p && (!f || !ie(p, f) || !b) && (p.enterCallbacks[w] || []).forEach((T) => T(h));
      }, {
        flush: "post"
      }), () => {
        const h = n.value, p = i.name, w = l.value, b = w && w.components[p];
        if (!b) return ri(e.default, {
          Component: b,
          route: h
        });
        const f = w.props[p], C = f ? f === true ? h.params : typeof f == "function" ? f(h) : f : null, z = Vi(b, H({}, C, t, {
          onVnodeUnmounted: (P) => {
            P.component.isUnmounted && (w.instances[p] = null);
          },
          ref: _
        }));
        return ri(e.default, {
          Component: z,
          route: h
        }) || z;
      };
    }
  });
  function ri(i, t) {
    if (!i) return null;
    const e = i(t);
    return e.length === 1 ? e[0] : e;
  }
  const da = _a;
  function ha(i) {
    const t = Ys(i.routes, i), e = i.parseQuery || ra, r = i.stringifyQuery || Yr, n = i.history, a = _e(), c = _e(), l = _e(), _ = kn(Mt);
    let h = Mt;
    Yt && i.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const p = Ze.bind(null, (m) => "" + m), w = Ze.bind(null, Rs), b = Ze.bind(null, ge);
    function f(m, y) {
      let R, I;
      return on(m) ? (R = t.getRecordMatcher(m), I = y) : I = m, t.addRoute(I, R);
    }
    function C(m) {
      const y = t.getRecordMatcher(m);
      y && t.removeRoute(y);
    }
    function T() {
      return t.getRoutes().map((m) => m.record);
    }
    function z(m) {
      return !!t.getRecordMatcher(m);
    }
    function P(m, y) {
      if (y = H({}, y || _.value), typeof m == "string") {
        const B = Qe(e, m, y.path), rt = t.resolve({
          path: B.path
        }, y), le = n.createHref(B.fullPath);
        return H(B, rt, {
          params: b(rt.params),
          hash: ge(B.hash),
          redirectedFrom: void 0,
          href: le
        });
      }
      let R;
      if (m.path != null) R = H({}, m, {
        path: Qe(e, m.path, y.path).path
      });
      else {
        const B = H({}, m.params);
        for (const rt in B) B[rt] == null && delete B[rt];
        R = H({}, m, {
          params: w(B)
        }), y.params = w(y.params);
      }
      const I = t.resolve(R, y), V = m.hash || "";
      I.params = p(b(I.params));
      const X = xs(r, H({}, m, {
        hash: ys(V),
        path: I.path
      })), N = n.createHref(X);
      return H({
        fullPath: X,
        hash: V,
        query: r === Yr ? ia(m.query) : m.query || {}
      }, I, {
        redirectedFrom: void 0,
        href: N
      });
    }
    function v(m) {
      return typeof m == "string" ? Qe(e, m, _.value.path) : H({}, m);
    }
    function S(m, y) {
      if (h !== m) return ne(8, {
        from: y,
        to: m
      });
    }
    function x(m) {
      return Z(m);
    }
    function gt(m) {
      return x(H(v(m), {
        replace: true
      }));
    }
    function wt(m) {
      const y = m.matched[m.matched.length - 1];
      if (y && y.redirect) {
        const { redirect: R } = y;
        let I = typeof R == "function" ? R(m) : R;
        return typeof I == "string" && (I = I.includes("?") || I.includes("#") ? I = v(I) : {
          path: I
        }, I.params = {}), H({
          query: m.query,
          hash: m.hash,
          params: I.path != null ? {} : m.params
        }, I);
      }
    }
    function Z(m, y) {
      const R = h = P(m), I = _.value, V = m.state, X = m.force, N = m.replace === true, B = wt(R);
      if (B) return Z(H(v(B), {
        state: typeof B == "object" ? H({}, V, B.state) : V,
        force: X,
        replace: N
      }), y || R);
      const rt = R;
      rt.redirectedFrom = y;
      let le;
      return !X && js(r, I, R) && (le = ne(16, {
        to: rt,
        from: I
      }), ce(I, I, true, false)), (le ? Promise.resolve(le) : Et(rt, I)).catch((ut) => jt(ut) ? jt(ut, 2) ? ut : bt(ut) : oe(ut, rt, I)).then((ut) => {
        if (ut) {
          if (jt(ut, 2)) return Z(H({
            replace: N
          }, v(ut.to), {
            state: typeof ut.to == "object" ? H({}, V, ut.to.state) : V,
            force: X
          }), y || rt);
        } else ut = xt(rt, I, true, N, V);
        return Dt(rt, I, ut), ut;
      });
    }
    function Tt(m, y) {
      const R = S(m, y);
      return R ? Promise.reject(R) : Promise.resolve();
    }
    function vt(m) {
      const y = E.values().next().value;
      return y && typeof y.runWithContext == "function" ? y.runWithContext(m) : m();
    }
    function Et(m, y) {
      let R;
      const [I, V, X] = wa(m, y);
      R = tr(I.reverse(), "beforeRouteLeave", m, y);
      for (const B of I) B.leaveGuards.forEach((rt) => {
        R.push(Lt(rt, m, y));
      });
      const N = Tt.bind(null, m, y);
      return R.push(N), A(R).then(() => {
        R = [];
        for (const B of a.list()) R.push(Lt(B, m, y));
        return R.push(N), A(R);
      }).then(() => {
        R = tr(V, "beforeRouteUpdate", m, y);
        for (const B of V) B.updateGuards.forEach((rt) => {
          R.push(Lt(rt, m, y));
        });
        return R.push(N), A(R);
      }).then(() => {
        R = [];
        for (const B of X) if (B.beforeEnter) if (yt(B.beforeEnter)) for (const rt of B.beforeEnter) R.push(Lt(rt, m, y));
        else R.push(Lt(B.beforeEnter, m, y));
        return R.push(N), A(R);
      }).then(() => (m.matched.forEach((B) => B.enterCallbacks = {}), R = tr(X, "beforeRouteEnter", m, y, vt), R.push(N), A(R))).then(() => {
        R = [];
        for (const B of c.list()) R.push(Lt(B, m, y));
        return R.push(N), A(R);
      }).catch((B) => jt(B, 8) ? B : Promise.reject(B));
    }
    function Dt(m, y, R) {
      l.list().forEach((I) => vt(() => I(m, y, R)));
    }
    function xt(m, y, R, I, V) {
      const X = S(m, y);
      if (X) return X;
      const N = y === Mt, B = Yt ? history.state : {};
      R && (I || N ? n.replace(m.fullPath, H({
        scroll: N && B && B.scroll
      }, V)) : n.push(m.fullPath, V)), _.value = m, ce(m, y, R, N), bt();
    }
    let kt;
    function Ce() {
      kt || (kt = n.listen((m, y, R) => {
        if (!M.listening) return;
        const I = P(m), V = wt(I);
        if (V) {
          Z(H(V, {
            replace: true,
            force: true
          }), I).catch(he);
          return;
        }
        h = I;
        const X = _.value;
        Yt && Ms(Gr(X.fullPath, R.delta), Le()), Et(I, X).catch((N) => jt(N, 12) ? N : jt(N, 2) ? (Z(H(v(N.to), {
          force: true
        }), I).then((B) => {
          jt(B, 20) && !R.delta && R.type === be.pop && n.go(-1, false);
        }).catch(he), Promise.reject()) : (R.delta && n.go(-R.delta, false), oe(N, I, X))).then((N) => {
          N = N || xt(I, X, false), N && (R.delta && !jt(N, 8) ? n.go(-R.delta, false) : R.type === be.pop && jt(N, 20) && n.go(-1, false)), Dt(I, X, N);
        }).catch(he);
      }));
    }
    let se = _e(), ae = _e(), Kt;
    function oe(m, y, R) {
      bt(m);
      const I = ae.list();
      return I.length ? I.forEach((V) => V(m, y, R)) : console.error(m), Promise.reject(m);
    }
    function $e() {
      return Kt && _.value !== Mt ? Promise.resolve() : new Promise((m, y) => {
        se.add([
          m,
          y
        ]);
      });
    }
    function bt(m) {
      return Kt || (Kt = !m, Ce(), se.list().forEach(([y, R]) => m ? R(m) : y()), se.reset()), m;
    }
    function ce(m, y, R, I) {
      const { scrollBehavior: V } = i;
      if (!Yt || !V) return Promise.resolve();
      const X = !R && Fs(Gr(m.fullPath, 0)) || (I || !R) && history.state && history.state.scroll || null;
      return Ui().then(() => V(m, y, X)).then((N) => N && ks(N)).catch((N) => oe(N, m, y));
    }
    const Xt = (m) => n.go(m);
    let Ht;
    const E = /* @__PURE__ */ new Set(), M = {
      currentRoute: _,
      listening: true,
      addRoute: f,
      removeRoute: C,
      clearRoutes: t.clearRoutes,
      hasRoute: z,
      getRoutes: T,
      resolve: P,
      options: i,
      push: x,
      replace: gt,
      go: Xt,
      back: () => Xt(-1),
      forward: () => Xt(1),
      beforeEach: a.add,
      beforeResolve: c.add,
      afterEach: l.add,
      onError: ae.add,
      isReady: $e,
      install(m) {
        const y = this;
        m.component("RouterLink", oa), m.component("RouterView", da), m.config.globalProperties.$router = y, Object.defineProperty(m.config.globalProperties, "$route", {
          enumerable: true,
          get: () => pt(_)
        }), Yt && !Ht && _.value === Mt && (Ht = true, x(n.location).catch((V) => {
        }));
        const R = {};
        for (const V in Mt) Object.defineProperty(R, V, {
          get: () => _.value[V],
          enumerable: true
        });
        m.provide(xr, y), m.provide(jr, hr(R)), m.provide(gr, _);
        const I = m.unmount;
        E.add(m), m.unmount = function() {
          E.delete(m), E.size < 1 && (h = Mt, kt && kt(), kt = null, _.value = Mt, Ht = false, Kt = false), I();
        };
      }
    };
    function A(m) {
      return m.reduce((y, R) => y.then(() => vt(R)), Promise.resolve());
    }
    return M;
  }
  function wa(i, t) {
    const e = [], r = [], n = [], a = Math.max(t.matched.length, i.matched.length);
    for (let c = 0; c < a; c++) {
      const l = t.matched[c];
      l && (i.matched.find((h) => ie(h, l)) ? r.push(l) : e.push(l));
      const _ = i.matched[c];
      _ && (t.matched.find((h) => ie(h, _)) || n.push(_));
    }
    return [
      e,
      r,
      n
    ];
  }
  function ua(i) {
    return Qt(jr);
  }
  const pa = "" + new URL("rapier_wasm3d_bg-0Vyjx73g.wasm", import.meta.url).href, ga = async (i = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") n = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const a = atob(r);
        n = new Uint8Array(a.length);
        for (let c = 0; c < a.length; c++) n[c] = a.charCodeAt(c);
      } else throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(n, i);
    } else {
      const r = await fetch(t), n = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && n.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(r, i);
      else {
        const a = await r.arrayBuffer();
        e = await WebAssembly.instantiate(a, i);
      }
    }
    return e.instance.exports;
  };
  let s;
  function ba(i) {
    s = i;
  }
  const O = new Array(128).fill(void 0);
  O.push(void 0, null, true, false);
  function G(i) {
    return O[i];
  }
  let ue = O.length;
  function tt(i) {
    ue === O.length && O.push(O.length + 1);
    const t = ue;
    return ue = O[t], O[t] = i, t;
  }
  function Ar(i, t) {
    try {
      return i.apply(this, t);
    } catch (e) {
      s.__wbindgen_export_0(tt(e));
    }
  }
  function k(i) {
    return i == null;
  }
  let $t = null;
  function st() {
    return ($t === null || $t.buffer.detached === true || $t.buffer.detached === void 0 && $t.buffer !== s.memory.buffer) && ($t = new DataView(s.memory.buffer)), $t;
  }
  function ma(i) {
    i < 132 || (O[i] = ue, ue = i);
  }
  function me(i) {
    const t = G(i);
    return ma(i), t;
  }
  const fa = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let dn = new fa("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  dn.decode();
  let Ee = null;
  function ya() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Uint8Array(s.memory.buffer)), Ee;
  }
  function va(i, t) {
    return i = i >>> 0, dn.decode(ya().subarray(i, i + t));
  }
  function d(i, t) {
    if (!(i instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  let q = 128;
  function J(i) {
    if (q == 1) throw new Error("out of js stack");
    return O[--q] = i, q;
  }
  let xe = null;
  function Sa() {
    return (xe === null || xe.byteLength === 0) && (xe = new Int32Array(s.memory.buffer)), xe;
  }
  function Ra(i, t) {
    return i = i >>> 0, Sa().subarray(i / 4, i / 4 + t);
  }
  let je = null;
  function hn() {
    return (je === null || je.byteLength === 0) && (je = new Float32Array(s.memory.buffer)), je;
  }
  function ii(i, t) {
    return i = i >>> 0, hn().subarray(i / 4, i / 4 + t);
  }
  let Ae = null;
  function wn() {
    return (Ae === null || Ae.byteLength === 0) && (Ae = new Uint32Array(s.memory.buffer)), Ae;
  }
  function Ca(i, t) {
    return i = i >>> 0, wn().subarray(i / 4, i / 4 + t);
  }
  let lt = 0;
  function de(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return wn().set(i, e / 4), lt = i.length, e;
  }
  function Ft(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return hn().set(i, e / 4), lt = i.length, e;
  }
  const Be = Object.freeze({
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
  }), ft = Object.freeze({
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
  }), nt = Object.freeze({
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
  }), er = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawbroadphase_free(i >>> 0, 1));
  class Vt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Vt.prototype);
      return e.__wbg_ptr = t, er.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, er.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawbroadphase_free(t, 0);
    }
    constructor() {
      const t = s.rawbroadphase_new();
      return this.__wbg_ptr = t >>> 0, er.register(this, this.__wbg_ptr, this), this;
    }
  }
  const ni = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawccdsolver_free(i >>> 0, 1));
  class br {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ni.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawccdsolver_free(t, 0);
    }
    constructor() {
      const t = s.rawccdsolver_new();
      return this.__wbg_ptr = t >>> 0, ni.register(this, this.__wbg_ptr, this), this;
    }
  }
  const si = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcharactercollision_free(i >>> 0, 1));
  class un {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, si.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcharactercollision_free(t, 0);
    }
    constructor() {
      const t = s.rawcharactercollision_new();
      return this.__wbg_ptr = t >>> 0, si.register(this, this.__wbg_ptr, this), this;
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
  const rr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcolliderset_free(i >>> 0, 1));
  class $ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($.prototype);
      return e.__wbg_ptr = t, rr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, rr.unregister(this), t;
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
      return L.__wrap(e);
    }
    coSetTranslation(t, e, r, n) {
      s.rawcolliderset_coSetTranslation(this.__wbg_ptr, t, e, r, n);
    }
    coSetTranslationWrtParent(t, e, r, n) {
      s.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, t, e, r, n);
    }
    coSetRotation(t, e, r, n, a) {
      s.rawcolliderset_coSetRotation(this.__wbg_ptr, t, e, r, n, a);
    }
    coSetRotationWrtParent(t, e, r, n, a) {
      s.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, t, e, r, n, a);
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
        var e = st().getInt32(n + 4 * 0, true), r = st().getInt32(n + 4 * 1, true);
        let a;
        return e !== 0 && (a = Ra(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coVoxelSize(t) {
      const e = s.rawcolliderset_coVoxelSize(this.__wbg_ptr, t);
      return e === 0 ? void 0 : u.__wrap(e);
    }
    coSetVoxel(t, e, r, n, a) {
      s.rawcolliderset_coSetVoxel(this.__wbg_ptr, t, e, r, n, a);
    }
    coPropagateVoxelChange(t, e, r, n, a, c, l, _) {
      s.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr, t, e, r, n, a, c, l, _);
    }
    coCombineVoxelStates(t, e, r, n, a) {
      s.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr, t, e, r, n, a);
    }
    coVertices(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coVertices(n, this.__wbg_ptr, t);
        var e = st().getInt32(n + 4 * 0, true), r = st().getInt32(n + 4 * 1, true);
        let a;
        return e !== 0 && (a = ii(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coIndices(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coIndices(n, this.__wbg_ptr, t);
        var e = st().getInt32(n + 4 * 0, true), r = st().getInt32(n + 4 * 1, true);
        let a;
        return e !== 0 && (a = Ca(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
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
        var e = st().getInt32(n + 4 * 0, true), r = st().getInt32(n + 4 * 1, true);
        let a;
        return e !== 0 && (a = ii(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
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
        var e = st().getInt32(n + 4 * 0, true), r = st().getFloat64(n + 8 * 1, true);
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
    coCastShape(t, e, r, n, a, c, l, _, h) {
      d(e, u), d(r, D), d(n, u), d(a, L), d(c, u);
      const p = s.rawcolliderset_coCastShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l, _, h);
      return p === 0 ? void 0 : We.__wrap(p);
    }
    coCastCollider(t, e, r, n, a, c, l) {
      d(e, u), d(n, u);
      const _ = s.rawcolliderset_coCastCollider(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a, c, l);
      return _ === 0 ? void 0 : Ne.__wrap(_);
    }
    coIntersectsShape(t, e, r, n) {
      return d(e, D), d(r, u), d(n, L), s.rawcolliderset_coIntersectsShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr) !== 0;
    }
    coContactShape(t, e, r, n, a) {
      d(e, D), d(r, u), d(n, L);
      const c = s.rawcolliderset_coContactShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a);
      return c === 0 ? void 0 : fe.__wrap(c);
    }
    coContactCollider(t, e, r) {
      const n = s.rawcolliderset_coContactCollider(this.__wbg_ptr, t, e, r);
      return n === 0 ? void 0 : fe.__wrap(n);
    }
    coProjectPoint(t, e, r) {
      d(e, u);
      const n = s.rawcolliderset_coProjectPoint(this.__wbg_ptr, t, e.__wbg_ptr, r);
      return Oe.__wrap(n);
    }
    coIntersectsRay(t, e, r, n) {
      return d(e, u), d(r, u), s.rawcolliderset_coIntersectsRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n) !== 0;
    }
    coCastRay(t, e, r, n, a) {
      return d(e, u), d(r, u), s.rawcolliderset_coCastRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, a);
    }
    coCastRayAndGetNormal(t, e, r, n, a) {
      d(e, u), d(r, u);
      const c = s.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, a);
      return c === 0 ? void 0 : Ge.__wrap(c);
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
      d(e, D), s.rawcolliderset_coSetShape(this.__wbg_ptr, t, e.__wbg_ptr);
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
    coSetMassProperties(t, e, r, n, a) {
      d(r, u), d(n, u), d(a, L), s.rawcolliderset_coSetMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr);
    }
    constructor() {
      const t = s.rawcolliderset_new();
      return this.__wbg_ptr = t >>> 0, rr.register(this, this.__wbg_ptr, this), this;
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    createCollider(t, e, r, n, a, c, l, _, h, p, w, b, f, C, T, z, P, v, S, x, gt, wt, Z, Tt, vt) {
      try {
        const xt = s.__wbindgen_add_to_stack_pointer(-16);
        d(e, D), d(r, u), d(n, L), d(l, u), d(_, u), d(h, L), d(vt, K), s.rawcolliderset_createCollider(xt, this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, p, w, b, f, C, T, z, P, v, S, x, gt, wt, Z, Tt, vt.__wbg_ptr);
        var Et = st().getInt32(xt + 4 * 0, true), Dt = st().getFloat64(xt + 8 * 1, true);
        return Et === 0 ? void 0 : Dt;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    remove(t, e, r, n) {
      d(e, It), d(r, K), s.rawcolliderset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    isHandleValid(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachColliderHandle(t) {
      try {
        s.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, J(t));
      } finally {
        O[q++] = void 0;
      }
    }
  }
  const ai = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcollidershapecasthit_free(i >>> 0, 1));
  class Ne {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ne.prototype);
      return e.__wbg_ptr = t, ai.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ai.unregister(this), t;
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
  const oi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactforceevent_free(i >>> 0, 1));
  class Pr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pr.prototype);
      return e.__wbg_ptr = t, oi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, oi.unregister(this), t;
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
  const ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactmanifold_free(i >>> 0, 1));
  class Ir {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ir.prototype);
      return e.__wbg_ptr = t, ci.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ci.unregister(this), t;
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
  const li = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactpair_free(i >>> 0, 1));
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
      return e === 0 ? void 0 : Ir.__wrap(e);
    }
  }
  const _i = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdebugrenderpipeline_free(i >>> 0, 1));
  class Ea {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _i.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdebugrenderpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawdebugrenderpipeline_new();
      return this.__wbg_ptr = t >>> 0, _i.register(this, this.__wbg_ptr, this), this;
    }
    vertices() {
      const t = s.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
      return me(t);
    }
    colors() {
      const t = s.rawdebugrenderpipeline_colors(this.__wbg_ptr);
      return me(t);
    }
    render(t, e, r, n, a, c, l) {
      try {
        d(t, K), d(e, $), d(r, Pt), d(n, zt), d(a, Nt), s.rawdebugrenderpipeline_render(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c, J(l));
      } finally {
        O[q++] = void 0;
      }
    }
  }
  const di = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdeserializedworld_free(i >>> 0, 1));
  class Tr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tr.prototype);
      return e.__wbg_ptr = t, di.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, di.unregister(this), t;
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
      return t === 0 ? void 0 : qt.__wrap(t);
    }
    takeIslandManager() {
      const t = s.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
      return t === 0 ? void 0 : It.__wrap(t);
    }
    takeBroadPhase() {
      const t = s.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : Vt.__wrap(t);
    }
    takeNarrowPhase() {
      const t = s.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : Nt.__wrap(t);
    }
    takeBodies() {
      const t = s.rawdeserializedworld_takeBodies(this.__wbg_ptr);
      return t === 0 ? void 0 : K.__wrap(t);
    }
    takeColliders() {
      const t = s.rawdeserializedworld_takeColliders(this.__wbg_ptr);
      return t === 0 ? void 0 : $.__wrap(t);
    }
    takeImpulseJoints() {
      const t = s.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : Pt.__wrap(t);
    }
    takeMultibodyJoints() {
      const t = s.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : zt.__wrap(t);
    }
  }
  const hi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdynamicraycastvehiclecontroller_free(i >>> 0, 1));
  class xa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, hi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdynamicraycastvehiclecontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawdynamicraycastvehiclecontroller_new(t);
      return this.__wbg_ptr = e >>> 0, hi.register(this, this.__wbg_ptr, this), this;
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
    add_wheel(t, e, r, n, a) {
      d(t, u), d(e, u), d(r, u), s.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, a);
    }
    num_wheels() {
      return s.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
    }
    update_vehicle(t, e, r, n, a, c, l) {
      try {
        d(e, K), d(r, $), d(n, Dr), s.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, k(c) ? 4294967297 : c >>> 0, J(l));
      } finally {
        O[q++] = void 0;
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
        var e = st().getInt32(n + 4 * 0, true), r = st().getFloat64(n + 8 * 1, true);
        return e === 0 ? void 0 : r;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  const wi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_raweventqueue_free(i >>> 0, 1));
  class pn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, wi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_raweventqueue_free(t, 0);
    }
    constructor(t) {
      const e = s.raweventqueue_new(t);
      return this.__wbg_ptr = e >>> 0, wi.register(this, this.__wbg_ptr, this), this;
    }
    drainCollisionEvents(t) {
      try {
        s.raweventqueue_drainCollisionEvents(this.__wbg_ptr, J(t));
      } finally {
        O[q++] = void 0;
      }
    }
    drainContactForceEvents(t) {
      try {
        s.raweventqueue_drainContactForceEvents(this.__wbg_ptr, J(t));
      } finally {
        O[q++] = void 0;
      }
    }
    clear() {
      s.raweventqueue_clear(this.__wbg_ptr);
    }
  }
  const ui = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawgenericjoint_free(i >>> 0, 1));
  class at {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(at.prototype);
      return e.__wbg_ptr = t, ui.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ui.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawgenericjoint_free(t, 0);
    }
    static generic(t, e, r, n) {
      d(t, u), d(e, u), d(r, u);
      const a = s.rawgenericjoint_generic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return a === 0 ? void 0 : at.__wrap(a);
    }
    static spring(t, e, r, n, a) {
      d(n, u), d(a, u);
      const c = s.rawgenericjoint_spring(t, e, r, n.__wbg_ptr, a.__wbg_ptr);
      return at.__wrap(c);
    }
    static rope(t, e, r) {
      d(e, u), d(r, u);
      const n = s.rawgenericjoint_rope(t, e.__wbg_ptr, r.__wbg_ptr);
      return at.__wrap(n);
    }
    static spherical(t, e) {
      d(t, u), d(e, u);
      const r = s.rawgenericjoint_spherical(t.__wbg_ptr, e.__wbg_ptr);
      return at.__wrap(r);
    }
    static prismatic(t, e, r, n, a, c) {
      d(t, u), d(e, u), d(r, u);
      const l = s.rawgenericjoint_prismatic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, a, c);
      return l === 0 ? void 0 : at.__wrap(l);
    }
    static fixed(t, e, r, n) {
      d(t, u), d(e, L), d(r, u), d(n, L);
      const a = s.rawgenericjoint_fixed(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr);
      return at.__wrap(a);
    }
    static revolute(t, e, r) {
      d(t, u), d(e, u), d(r, u);
      const n = s.rawgenericjoint_revolute(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return n === 0 ? void 0 : at.__wrap(n);
    }
  }
  const ir = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawimpulsejointset_free(i >>> 0, 1));
  class Pt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pt.prototype);
      return e.__wbg_ptr = t, ir.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ir.unregister(this), t;
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
      return L.__wrap(e);
    }
    jointFrameX2(t) {
      const e = s.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, t);
      return L.__wrap(e);
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
    jointConfigureMotorPosition(t, e, r, n, a) {
      s.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, t, e, r, n, a);
    }
    jointConfigureMotor(t, e, r, n, a, c) {
      s.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, t, e, r, n, a, c);
    }
    constructor() {
      const t = s.rawimpulsejointset_new();
      return this.__wbg_ptr = t >>> 0, ir.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, at), s.rawimpulsejointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
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
        s.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, J(t));
      } finally {
        O[q++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, J(e));
      } finally {
        O[q++] = void 0;
      }
    }
  }
  const nr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawintegrationparameters_free(i >>> 0, 1));
  class qt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(qt.prototype);
      return e.__wbg_ptr = t, nr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, nr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawintegrationparameters_free(t, 0);
    }
    constructor() {
      const t = s.rawintegrationparameters_new();
      return this.__wbg_ptr = t >>> 0, nr.register(this, this.__wbg_ptr, this), this;
    }
    get dt() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get contact_erp() {
      return s.rawintegrationparameters_contact_erp(this.__wbg_ptr);
    }
    get normalizedAllowedLinearError() {
      return s.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
    }
    get normalizedPredictionDistance() {
      return s.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
    get numSolverIterations() {
      return s.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
    }
    get numAdditionalFrictionIterations() {
      return s.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    get numInternalPgsIterations() {
      return s.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
    }
    get minIslandSize() {
      return s.rawintegrationparameters_minIslandSize(this.__wbg_ptr) >>> 0;
    }
    get maxCcdSubsteps() {
      return s.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
    }
    get lengthUnit() {
      return s.rawintegrationparameters_lengthUnit(this.__wbg_ptr);
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
    set numAdditionalFrictionIterations(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
    }
    set numInternalPgsIterations(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
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
    switchToStandardPgsSolver() {
      s.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolver() {
      s.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
      s.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr);
    }
  }
  const sr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawislandmanager_free(i >>> 0, 1));
  class It {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(It.prototype);
      return e.__wbg_ptr = t, sr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, sr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawislandmanager_free(t, 0);
    }
    constructor() {
      const t = s.rawislandmanager_new();
      return this.__wbg_ptr = t >>> 0, sr.register(this, this.__wbg_ptr, this), this;
    }
    forEachActiveRigidBodyHandle(t) {
      try {
        s.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, J(t));
      } finally {
        O[q++] = void 0;
      }
    }
  }
  const pi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawkinematiccharactercontroller_free(i >>> 0, 1));
  class ja {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, pi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawkinematiccharactercontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawkinematiccharactercontroller_new(t);
      return this.__wbg_ptr = e >>> 0, pi.register(this, this.__wbg_ptr, this), this;
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
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
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
    computeColliderMovement(t, e, r, n, a, c, l, _, h, p, w) {
      try {
        d(e, K), d(r, $), d(n, Dr), d(c, u), s.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c.__wbg_ptr, l, k(_) ? 4294967297 : Math.fround(_), h, k(p) ? 4294967297 : p >>> 0, J(w));
      } finally {
        O[q++] = void 0;
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
      return d(e, un), s.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
  }
  const ar = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawmultibodyjointset_free(i >>> 0, 1));
  class zt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zt.prototype);
      return e.__wbg_ptr = t, ar.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ar.unregister(this), t;
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
      return L.__wrap(e);
    }
    jointFrameX2(t) {
      const e = s.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, t);
      return L.__wrap(e);
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
      return this.__wbg_ptr = t >>> 0, ar.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, at), s.rawmultibodyjointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
    }
    remove(t, e) {
      s.rawmultibodyjointset_remove(this.__wbg_ptr, t, e);
    }
    contains(t) {
      return s.rawmultibodyjointset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        s.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, J(t));
      } finally {
        O[q++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, J(e));
      } finally {
        O[q++] = void 0;
      }
    }
  }
  const or = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawnarrowphase_free(i >>> 0, 1));
  class Nt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Nt.prototype);
      return e.__wbg_ptr = t, or.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, or.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawnarrowphase_free(t, 0);
    }
    constructor() {
      const t = s.rawnarrowphase_new();
      return this.__wbg_ptr = t >>> 0, or.register(this, this.__wbg_ptr, this), this;
    }
    contact_pairs_with(t, e) {
      s.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, t, tt(e));
    }
    contact_pair(t, e) {
      const r = s.rawnarrowphase_contact_pair(this.__wbg_ptr, t, e);
      return r === 0 ? void 0 : zr.__wrap(r);
    }
    intersection_pairs_with(t, e) {
      s.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, t, tt(e));
    }
    intersection_pair(t, e) {
      return s.rawnarrowphase_intersection_pair(this.__wbg_ptr, t, e) !== 0;
    }
  }
  const gi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawphysicspipeline_free(i >>> 0, 1));
  class Aa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawphysicspipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawphysicspipeline_new();
      return this.__wbg_ptr = t >>> 0, gi.register(this, this.__wbg_ptr, this), this;
    }
    step(t, e, r, n, a, c, l, _, h, p) {
      d(t, u), d(e, qt), d(r, It), d(n, Vt), d(a, Nt), d(c, K), d(l, $), d(_, Pt), d(h, zt), d(p, br), s.rawphysicspipeline_step(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, p.__wbg_ptr);
    }
    stepWithEvents(t, e, r, n, a, c, l, _, h, p, w, b, f, C) {
      d(t, u), d(e, qt), d(r, It), d(n, Vt), d(a, Nt), d(c, K), d(l, $), d(_, Pt), d(h, zt), d(p, br), d(w, pn), s.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, p.__wbg_ptr, w.__wbg_ptr, tt(b), tt(f), tt(C));
    }
  }
  const bi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpidcontroller_free(i >>> 0, 1));
  class Pa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, bi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpidcontroller_free(t, 0);
    }
    constructor(t, e, r, n) {
      const a = s.rawpidcontroller_new(t, e, r, n);
      return this.__wbg_ptr = a >>> 0, bi.register(this, this.__wbg_ptr, this), this;
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
    apply_linear_correction(t, e, r, n, a) {
      d(e, K), d(n, u), d(a, u), s.rawpidcontroller_apply_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a.__wbg_ptr);
    }
    apply_angular_correction(t, e, r, n, a) {
      d(e, K), d(n, L), d(a, u), s.rawpidcontroller_apply_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a.__wbg_ptr);
    }
    linear_correction(t, e, r, n, a) {
      d(e, K), d(n, u), d(a, u);
      const c = s.rawpidcontroller_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a.__wbg_ptr);
      return u.__wrap(c);
    }
    angular_correction(t, e, r, n, a) {
      d(e, K), d(n, L), d(a, u);
      const c = s.rawpidcontroller_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a.__wbg_ptr);
      return u.__wrap(c);
    }
  }
  const mi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointcolliderprojection_free(i >>> 0, 1));
  class Pe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pe.prototype);
      return e.__wbg_ptr = t, mi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, mi.unregister(this), t;
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
  const fi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointprojection_free(i >>> 0, 1));
  class Oe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Oe.prototype);
      return e.__wbg_ptr = t, fi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, fi.unregister(this), t;
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
  const yi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawquerypipeline_free(i >>> 0, 1));
  class Dr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, yi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawquerypipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawquerypipeline_new();
      return this.__wbg_ptr = t >>> 0, yi.register(this, this.__wbg_ptr, this), this;
    }
    update(t) {
      d(t, $), s.rawquerypipeline_update(this.__wbg_ptr, t.__wbg_ptr);
    }
    castRay(t, e, r, n, a, c, l, _, h, p, w) {
      try {
        d(t, K), d(e, $), d(r, u), d(n, u);
        const b = s.rawquerypipeline_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c, l, k(_) ? 4294967297 : _ >>> 0, !k(h), k(h) ? 0 : h, !k(p), k(p) ? 0 : p, J(w));
        return b === 0 ? void 0 : kr.__wrap(b);
      } finally {
        O[q++] = void 0;
      }
    }
    castRayAndGetNormal(t, e, r, n, a, c, l, _, h, p, w) {
      try {
        d(t, K), d(e, $), d(r, u), d(n, u);
        const b = s.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c, l, k(_) ? 4294967297 : _ >>> 0, !k(h), k(h) ? 0 : h, !k(p), k(p) ? 0 : p, J(w));
        return b === 0 ? void 0 : He.__wrap(b);
      } finally {
        O[q++] = void 0;
      }
    }
    intersectionsWithRay(t, e, r, n, a, c, l, _, h, p, w, b) {
      try {
        d(t, K), d(e, $), d(r, u), d(n, u), s.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c, J(l), _, k(h) ? 4294967297 : h >>> 0, !k(p), k(p) ? 0 : p, !k(w), k(w) ? 0 : w, J(b));
      } finally {
        O[q++] = void 0, O[q++] = void 0;
      }
    }
    intersectionWithShape(t, e, r, n, a, c, l, _, h, p) {
      try {
        const f = s.__wbindgen_add_to_stack_pointer(-16);
        d(t, K), d(e, $), d(r, u), d(n, L), d(a, D), s.rawquerypipeline_intersectionWithShape(f, this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c, k(l) ? 4294967297 : l >>> 0, !k(_), k(_) ? 0 : _, !k(h), k(h) ? 0 : h, J(p));
        var w = st().getInt32(f + 4 * 0, true), b = st().getFloat64(f + 8 * 1, true);
        return w === 0 ? void 0 : b;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16), O[q++] = void 0;
      }
    }
    projectPoint(t, e, r, n, a, c, l, _, h) {
      try {
        d(t, K), d(e, $), d(r, u);
        const p = s.rawquerypipeline_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, a, k(c) ? 4294967297 : c >>> 0, !k(l), k(l) ? 0 : l, !k(_), k(_) ? 0 : _, J(h));
        return p === 0 ? void 0 : Pe.__wrap(p);
      } finally {
        O[q++] = void 0;
      }
    }
    projectPointAndGetFeature(t, e, r, n, a, c, l, _) {
      try {
        d(t, K), d(e, $), d(r, u);
        const h = s.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, k(a) ? 4294967297 : a >>> 0, !k(c), k(c) ? 0 : c, !k(l), k(l) ? 0 : l, J(_));
        return h === 0 ? void 0 : Pe.__wrap(h);
      } finally {
        O[q++] = void 0;
      }
    }
    intersectionsWithPoint(t, e, r, n, a, c, l, _, h) {
      try {
        d(t, K), d(e, $), d(r, u), s.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, J(n), a, k(c) ? 4294967297 : c >>> 0, !k(l), k(l) ? 0 : l, !k(_), k(_) ? 0 : _, J(h));
      } finally {
        O[q++] = void 0, O[q++] = void 0;
      }
    }
    castShape(t, e, r, n, a, c, l, _, h, p, w, b, f, C) {
      try {
        d(t, K), d(e, $), d(r, u), d(n, L), d(a, u), d(c, D);
        const T = s.rawquerypipeline_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l, _, h, p, k(w) ? 4294967297 : w >>> 0, !k(b), k(b) ? 0 : b, !k(f), k(f) ? 0 : f, J(C));
        return T === 0 ? void 0 : Ne.__wrap(T);
      } finally {
        O[q++] = void 0;
      }
    }
    intersectionsWithShape(t, e, r, n, a, c, l, _, h, p, w) {
      try {
        d(t, K), d(e, $), d(r, u), d(n, L), d(a, D), s.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, J(c), l, k(_) ? 4294967297 : _ >>> 0, !k(h), k(h) ? 0 : h, !k(p), k(p) ? 0 : p, J(w));
      } finally {
        O[q++] = void 0, O[q++] = void 0;
      }
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      try {
        d(t, u), d(e, u), s.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, J(r));
      } finally {
        O[q++] = void 0;
      }
    }
  }
  const vi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawraycolliderhit_free(i >>> 0, 1));
  class kr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kr.prototype);
      return e.__wbg_ptr = t, vi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, vi.unregister(this), t;
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
  class He {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(He.prototype);
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
  const Ri = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrayintersection_free(i >>> 0, 1));
  class Ge {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ge.prototype);
      return e.__wbg_ptr = t, Ri.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ri.unregister(this), t;
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
  const cr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrigidbodyset_free(i >>> 0, 1));
  class K {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(K.prototype);
      return e.__wbg_ptr = t, cr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, cr.unregister(this), t;
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
      return L.__wrap(e);
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
      return L.__wrap(e);
    }
    rbSetTranslation(t, e, r, n, a) {
      s.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, t, e, r, n, a);
    }
    rbSetRotation(t, e, r, n, a, c) {
      s.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, t, e, r, n, a, c);
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
    rbSetNextKinematicRotation(t, e, r, n, a) {
      s.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, t, e, r, n, a);
    }
    rbRecomputeMassPropertiesFromColliders(t, e) {
      d(e, $), s.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    rbSetAdditionalMass(t, e, r) {
      s.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, t, e, r);
    }
    rbSetAdditionalMassProperties(t, e, r, n, a, c) {
      d(r, u), d(n, u), d(a, L), s.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c);
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
    rbSetEnabledTranslations(t, e, r, n, a) {
      s.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, t, e, r, n, a);
    }
    rbLockRotations(t, e, r) {
      s.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, t, e, r);
    }
    rbSetEnabledRotations(t, e, r, n, a) {
      s.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr, t, e, r, n, a);
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
    rbInvPrincipalInertiaSqrt(t) {
      const e = s.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbPrincipalInertiaLocalFrame(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    rbPrincipalInertia(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, t);
      return u.__wrap(e);
    }
    rbEffectiveWorldInvInertiaSqrt(t) {
      const e = s.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr, t);
      return Ie.__wrap(e);
    }
    rbEffectiveAngularInertia(t) {
      const e = s.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, t);
      return Ie.__wrap(e);
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
      return this.__wbg_ptr = t >>> 0, cr.register(this, this.__wbg_ptr, this), this;
    }
    createRigidBody(t, e, r, n, a, c, l, _, h, p, w, b, f, C, T, z, P, v, S, x, gt, wt, Z, Tt, vt, Et) {
      return d(e, u), d(r, L), d(l, u), d(_, u), d(h, u), d(p, u), d(w, L), s.rawrigidbodyset_createRigidBody(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, a, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, p.__wbg_ptr, w.__wbg_ptr, b, f, C, T, z, P, v, S, x, gt, wt, Z, Tt, vt, Et);
    }
    remove(t, e, r, n, a) {
      d(e, It), d(r, $), d(n, Pt), d(a, zt), s.rawrigidbodyset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr);
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawrigidbodyset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachRigidBodyHandle(t) {
      try {
        s.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, J(t));
      } finally {
        O[q++] = void 0;
      }
    }
    propagateModifiedBodyPositionsToColliders(t) {
      d(t, $), s.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  const lr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrotation_free(i >>> 0, 1));
  class L {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(L.prototype);
      return e.__wbg_ptr = t, lr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, lr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrotation_free(t, 0);
    }
    constructor(t, e, r, n) {
      const a = s.rawrotation_new(t, e, r, n);
      return this.__wbg_ptr = a >>> 0, lr.register(this, this.__wbg_ptr, this), this;
    }
    static identity() {
      const t = s.rawrotation_identity();
      return L.__wrap(t);
    }
    get x() {
      return s.rawrotation_x(this.__wbg_ptr);
    }
    get y() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get z() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    get w() {
      return s.rawrotation_w(this.__wbg_ptr);
    }
  }
  const Ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawsdpmatrix3_free(i >>> 0, 1));
  class Ie {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ie.prototype);
      return e.__wbg_ptr = t, Ci.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ci.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawsdpmatrix3_free(t, 0);
    }
    elements() {
      const t = s.rawsdpmatrix3_elements(this.__wbg_ptr);
      return me(t);
    }
  }
  const Ei = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawserializationpipeline_free(i >>> 0, 1));
  class Ia {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ei.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawserializationpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawserializationpipeline_new();
      return this.__wbg_ptr = t >>> 0, Ei.register(this, this.__wbg_ptr, this), this;
    }
    serializeAll(t, e, r, n, a, c, l, _, h) {
      d(t, u), d(e, qt), d(r, It), d(n, Vt), d(a, Nt), d(c, K), d(l, $), d(_, Pt), d(h, zt);
      const p = s.rawserializationpipeline_serializeAll(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr);
      return me(p);
    }
    deserializeAll(t) {
      const e = s.rawserializationpipeline_deserializeAll(this.__wbg_ptr, tt(t));
      return e === 0 ? void 0 : Tr.__wrap(e);
    }
  }
  const xi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshape_free(i >>> 0, 1));
  class D {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(D.prototype);
      return e.__wbg_ptr = t, xi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshape_free(t, 0);
    }
    static cuboid(t, e, r) {
      const n = s.rawshape_cuboid(t, e, r);
      return D.__wrap(n);
    }
    static roundCuboid(t, e, r, n) {
      const a = s.rawshape_roundCuboid(t, e, r, n);
      return D.__wrap(a);
    }
    static ball(t) {
      const e = s.rawshape_ball(t);
      return D.__wrap(e);
    }
    static halfspace(t) {
      d(t, u);
      const e = s.rawshape_halfspace(t.__wbg_ptr);
      return D.__wrap(e);
    }
    static capsule(t, e) {
      const r = s.rawshape_capsule(t, e);
      return D.__wrap(r);
    }
    static cylinder(t, e) {
      const r = s.rawshape_cylinder(t, e);
      return D.__wrap(r);
    }
    static roundCylinder(t, e, r) {
      const n = s.rawshape_roundCylinder(t, e, r);
      return D.__wrap(n);
    }
    static cone(t, e) {
      const r = s.rawshape_cone(t, e);
      return D.__wrap(r);
    }
    static roundCone(t, e, r) {
      const n = s.rawshape_roundCone(t, e, r);
      return D.__wrap(n);
    }
    static voxels(t, e) {
      d(t, u);
      const r = de(e, s.__wbindgen_export_2), n = lt, a = s.rawshape_voxels(t.__wbg_ptr, r, n);
      return D.__wrap(a);
    }
    static voxelsFromPoints(t, e) {
      d(t, u);
      const r = Ft(e, s.__wbindgen_export_2), n = lt, a = s.rawshape_voxelsFromPoints(t.__wbg_ptr, r, n);
      return D.__wrap(a);
    }
    static polyline(t, e) {
      const r = Ft(t, s.__wbindgen_export_2), n = lt, a = de(e, s.__wbindgen_export_2), c = lt, l = s.rawshape_polyline(r, n, a, c);
      return D.__wrap(l);
    }
    static trimesh(t, e, r) {
      const n = Ft(t, s.__wbindgen_export_2), a = lt, c = de(e, s.__wbindgen_export_2), l = lt, _ = s.rawshape_trimesh(n, a, c, l, r);
      return _ === 0 ? void 0 : D.__wrap(_);
    }
    static heightfield(t, e, r, n, a) {
      const c = Ft(r, s.__wbindgen_export_2), l = lt;
      d(n, u);
      const _ = s.rawshape_heightfield(t, e, c, l, n.__wbg_ptr, a);
      return D.__wrap(_);
    }
    static segment(t, e) {
      d(t, u), d(e, u);
      const r = s.rawshape_segment(t.__wbg_ptr, e.__wbg_ptr);
      return D.__wrap(r);
    }
    static triangle(t, e, r) {
      d(t, u), d(e, u), d(r, u);
      const n = s.rawshape_triangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return D.__wrap(n);
    }
    static roundTriangle(t, e, r, n) {
      d(t, u), d(e, u), d(r, u);
      const a = s.rawshape_roundTriangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return D.__wrap(a);
    }
    static convexHull(t) {
      const e = Ft(t, s.__wbindgen_export_2), r = lt, n = s.rawshape_convexHull(e, r);
      return n === 0 ? void 0 : D.__wrap(n);
    }
    static roundConvexHull(t, e) {
      const r = Ft(t, s.__wbindgen_export_2), n = lt, a = s.rawshape_roundConvexHull(r, n, e);
      return a === 0 ? void 0 : D.__wrap(a);
    }
    static convexMesh(t, e) {
      const r = Ft(t, s.__wbindgen_export_2), n = lt, a = de(e, s.__wbindgen_export_2), c = lt, l = s.rawshape_convexMesh(r, n, a, c);
      return l === 0 ? void 0 : D.__wrap(l);
    }
    static roundConvexMesh(t, e, r) {
      const n = Ft(t, s.__wbindgen_export_2), a = lt, c = de(e, s.__wbindgen_export_2), l = lt, _ = s.rawshape_roundConvexMesh(n, a, c, l, r);
      return _ === 0 ? void 0 : D.__wrap(_);
    }
    castShape(t, e, r, n, a, c, l, _, h, p) {
      d(t, u), d(e, L), d(r, u), d(n, D), d(a, u), d(c, L), d(l, u);
      const w = s.rawshape_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, p);
      return w === 0 ? void 0 : We.__wrap(w);
    }
    intersectsShape(t, e, r, n, a) {
      return d(t, u), d(e, L), d(r, D), d(n, u), d(a, L), s.rawshape_intersectsShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr) !== 0;
    }
    contactShape(t, e, r, n, a, c) {
      d(t, u), d(e, L), d(r, D), d(n, u), d(a, L);
      const l = s.rawshape_contactShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c);
      return l === 0 ? void 0 : fe.__wrap(l);
    }
    containsPoint(t, e, r) {
      return d(t, u), d(e, L), d(r, u), s.rawshape_containsPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr) !== 0;
    }
    projectPoint(t, e, r, n) {
      d(t, u), d(e, L), d(r, u);
      const a = s.rawshape_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return Oe.__wrap(a);
    }
    intersectsRay(t, e, r, n, a) {
      return d(t, u), d(e, L), d(r, u), d(n, u), s.rawshape_intersectsRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a) !== 0;
    }
    castRay(t, e, r, n, a, c) {
      return d(t, u), d(e, L), d(r, u), d(n, u), s.rawshape_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c);
    }
    castRayAndGetNormal(t, e, r, n, a, c) {
      d(t, u), d(e, L), d(r, u), d(n, u);
      const l = s.rawshape_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c);
      return l === 0 ? void 0 : Ge.__wrap(l);
    }
  }
  const ji = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecasthit_free(i >>> 0, 1));
  class We {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(We.prototype);
      return e.__wbg_ptr = t, ji.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ji.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshapecasthit_free(t, 0);
    }
    time_of_impact() {
      return s.rawrotation_x(this.__wbg_ptr);
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
  const Ai = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecontact_free(i >>> 0, 1));
  class fe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(fe.prototype);
      return e.__wbg_ptr = t, Ai.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ai.unregister(this), t;
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
  const _r = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawvector_free(i >>> 0, 1));
  class u {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(u.prototype);
      return e.__wbg_ptr = t, _r.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _r.unregister(this), t;
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
      return this.__wbg_ptr = n >>> 0, _r.register(this, this.__wbg_ptr, this), this;
    }
    get x() {
      return s.rawrotation_x(this.__wbg_ptr);
    }
    set x(t) {
      s.rawvector_set_x(this.__wbg_ptr, t);
    }
    get y() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    set y(t) {
      s.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
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
  function za(i, t, e, r) {
    const n = G(i).bind(G(t), G(e), G(r));
    return tt(n);
  }
  function Ta(i) {
    const t = G(i).buffer;
    return tt(t);
  }
  function Da() {
    return Ar(function(i, t, e) {
      const r = G(i).call(G(t), G(e));
      return tt(r);
    }, arguments);
  }
  function ka() {
    return Ar(function(i, t, e, r) {
      const n = G(i).call(G(t), G(e), G(r));
      return tt(n);
    }, arguments);
  }
  function Ma() {
    return Ar(function(i, t, e, r, n) {
      const a = G(i).call(G(t), G(e), G(r), G(n));
      return tt(a);
    }, arguments);
  }
  function Fa(i) {
    return G(i).length;
  }
  function La(i) {
    return G(i).length;
  }
  function Ba(i) {
    const t = new Uint8Array(G(i));
    return tt(t);
  }
  function Na(i, t, e) {
    const r = new Uint8Array(G(i), t >>> 0, e >>> 0);
    return tt(r);
  }
  function Oa(i, t, e) {
    const r = new Float32Array(G(i), t >>> 0, e >>> 0);
    return tt(r);
  }
  function Ha(i) {
    const t = new Float32Array(i >>> 0);
    return tt(t);
  }
  function Ga(i) {
    const t = Pr.__wrap(i);
    return tt(t);
  }
  function Wa(i) {
    const t = He.__wrap(i);
    return tt(t);
  }
  function Va(i, t, e) {
    G(i).set(G(t), e >>> 0);
  }
  function qa(i, t, e) {
    G(i).set(G(t), e >>> 0);
  }
  function Ua(i) {
    const t = G(i);
    return typeof t == "boolean" ? t ? 1 : 0 : 2;
  }
  function Ja(i) {
    return typeof G(i) == "function";
  }
  function Ka() {
    const i = s.memory;
    return tt(i);
  }
  function Xa(i, t) {
    const e = G(t), r = typeof e == "number" ? e : void 0;
    st().setFloat64(i + 8 * 1, k(r) ? 0 : r, true), st().setInt32(i + 4 * 0, !k(r), true);
  }
  function $a(i) {
    return tt(i);
  }
  function Ya(i) {
    me(i);
  }
  function Za(i, t) {
    throw new Error(va(i, t));
  }
  URL = globalThis.URL;
  const o = await ga({
    "./rapier_wasm3d_bg.js": {
      __wbindgen_number_new: $a,
      __wbindgen_boolean_get: Ua,
      __wbindgen_object_drop_ref: Ya,
      __wbindgen_number_get: Xa,
      __wbindgen_is_function: Ja,
      __wbg_rawraycolliderintersection_new: Wa,
      __wbg_rawcontactforceevent_new: Ga,
      __wbg_call_7cccdd69e0791ae2: Da,
      __wbg_call_833bed5770ea2041: ka,
      __wbg_call_b8adc8b1d0a0d8eb: Ma,
      __wbg_bind_c8359b1cba058168: za,
      __wbg_buffer_609cc3eee51ed158: Ta,
      __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: Na,
      __wbg_new_a12002a7f91c75be: Ba,
      __wbg_set_65595bdd868b3009: qa,
      __wbg_length_a446193dc22c12f8: La,
      __wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354: Oa,
      __wbg_set_10bad9bee0e9c58b: Va,
      __wbg_length_3b4f022188ae8db6: Fa,
      __wbg_newwithlength_5a5efe313cfd59f1: Ha,
      __wbindgen_throw: Za,
      __wbindgen_memory: Ka
    }
  }, pa), Qa = o.memory, to = o.version, eo = o.__wbg_rawkinematiccharactercontroller_free, ro = o.rawkinematiccharactercontroller_new, io = o.rawkinematiccharactercontroller_setUp, no = o.rawkinematiccharactercontroller_normalNudgeFactor, so = o.rawkinematiccharactercontroller_setNormalNudgeFactor, ao = o.rawkinematiccharactercontroller_setOffset, oo = o.rawkinematiccharactercontroller_slideEnabled, co = o.rawkinematiccharactercontroller_setSlideEnabled, lo = o.rawkinematiccharactercontroller_autostepMaxHeight, _o = o.rawkinematiccharactercontroller_autostepMinWidth, ho = o.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, wo = o.rawkinematiccharactercontroller_autostepEnabled, uo = o.rawkinematiccharactercontroller_enableAutostep, po = o.rawkinematiccharactercontroller_disableAutostep, go = o.rawkinematiccharactercontroller_maxSlopeClimbAngle, bo = o.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, mo = o.rawkinematiccharactercontroller_minSlopeSlideAngle, fo = o.rawkinematiccharactercontroller_setMinSlopeSlideAngle, yo = o.rawkinematiccharactercontroller_snapToGroundDistance, vo = o.rawkinematiccharactercontroller_enableSnapToGround, So = o.rawkinematiccharactercontroller_disableSnapToGround, Ro = o.rawkinematiccharactercontroller_snapToGroundEnabled, Co = o.rawkinematiccharactercontroller_computeColliderMovement, Eo = o.rawkinematiccharactercontroller_computedMovement, xo = o.rawkinematiccharactercontroller_computedGrounded, jo = o.rawkinematiccharactercontroller_numComputedCollisions, Ao = o.rawkinematiccharactercontroller_computedCollision, Po = o.__wbg_rawcharactercollision_free, Io = o.rawcharactercollision_new, zo = o.rawcharactercollision_handle, To = o.rawcharactercollision_translationDeltaApplied, Do = o.rawcharactercollision_translationDeltaRemaining, ko = o.rawcharactercollision_toi, Mo = o.rawcharactercollision_worldWitness1, Fo = o.rawcharactercollision_worldWitness2, Lo = o.rawcharactercollision_worldNormal1, Bo = o.rawcharactercollision_worldNormal2, No = o.__wbg_rawpidcontroller_free, Oo = o.rawpidcontroller_new, Ho = o.rawpidcontroller_set_kp, Go = o.rawpidcontroller_set_ki, Wo = o.rawpidcontroller_set_kd, Vo = o.rawpidcontroller_set_axes_mask, qo = o.rawpidcontroller_reset_integrals, Uo = o.rawpidcontroller_apply_linear_correction, Jo = o.rawpidcontroller_apply_angular_correction, Ko = o.rawpidcontroller_linear_correction, Xo = o.rawpidcontroller_angular_correction, $o = o.__wbg_rawdynamicraycastvehiclecontroller_free, Yo = o.rawdynamicraycastvehiclecontroller_new, Zo = o.rawdynamicraycastvehiclecontroller_current_vehicle_speed, Qo = o.rawdynamicraycastvehiclecontroller_chassis, tc = o.rawdynamicraycastvehiclecontroller_index_up_axis, ec = o.rawdynamicraycastvehiclecontroller_set_index_up_axis, rc = o.rawdynamicraycastvehiclecontroller_index_forward_axis, ic = o.rawdynamicraycastvehiclecontroller_set_index_forward_axis, nc = o.rawdynamicraycastvehiclecontroller_add_wheel, sc = o.rawdynamicraycastvehiclecontroller_num_wheels, ac = o.rawdynamicraycastvehiclecontroller_update_vehicle, oc = o.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs, cc = o.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs, lc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length, _c = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length, dc = o.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel, hc = o.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel, wc = o.rawdynamicraycastvehiclecontroller_wheel_radius, uc = o.rawdynamicraycastvehiclecontroller_set_wheel_radius, pc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness, gc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness, bc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_compression, mc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression, fc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation, yc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation, vc = o.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force, Sc = o.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force, Rc = o.rawdynamicraycastvehiclecontroller_wheel_brake, Cc = o.rawdynamicraycastvehiclecontroller_set_wheel_brake, Ec = o.rawdynamicraycastvehiclecontroller_wheel_steering, xc = o.rawdynamicraycastvehiclecontroller_set_wheel_steering, jc = o.rawdynamicraycastvehiclecontroller_wheel_engine_force, Ac = o.rawdynamicraycastvehiclecontroller_set_wheel_engine_force, Pc = o.rawdynamicraycastvehiclecontroller_wheel_direction_cs, Ic = o.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs, zc = o.rawdynamicraycastvehiclecontroller_wheel_axle_cs, Tc = o.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs, Dc = o.rawdynamicraycastvehiclecontroller_wheel_friction_slip, kc = o.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip, Mc = o.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness, Fc = o.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness, Lc = o.rawdynamicraycastvehiclecontroller_wheel_rotation, Bc = o.rawdynamicraycastvehiclecontroller_wheel_forward_impulse, Nc = o.rawdynamicraycastvehiclecontroller_wheel_side_impulse, Oc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_force, Hc = o.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws, Gc = o.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws, Wc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_length, Vc = o.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws, qc = o.rawdynamicraycastvehiclecontroller_wheel_is_in_contact, Uc = o.rawdynamicraycastvehiclecontroller_wheel_ground_object, Jc = o.__wbg_rawccdsolver_free, Kc = o.rawccdsolver_new, Xc = o.rawimpulsejointset_jointType, $c = o.rawimpulsejointset_jointBodyHandle1, Yc = o.rawimpulsejointset_jointBodyHandle2, Zc = o.rawimpulsejointset_jointFrameX1, Qc = o.rawimpulsejointset_jointFrameX2, tl = o.rawimpulsejointset_jointAnchor1, el = o.rawimpulsejointset_jointAnchor2, rl = o.rawimpulsejointset_jointSetAnchor1, il = o.rawimpulsejointset_jointSetAnchor2, nl = o.rawimpulsejointset_jointContactsEnabled, sl = o.rawimpulsejointset_jointSetContactsEnabled, al = o.rawimpulsejointset_jointLimitsEnabled, ol = o.rawimpulsejointset_jointLimitsMin, cl = o.rawimpulsejointset_jointLimitsMax, ll = o.rawimpulsejointset_jointSetLimits, _l = o.rawimpulsejointset_jointConfigureMotorModel, dl = o.rawimpulsejointset_jointConfigureMotorVelocity, hl = o.rawimpulsejointset_jointConfigureMotorPosition, wl = o.rawimpulsejointset_jointConfigureMotor, ul = o.__wbg_rawimpulsejointset_free, pl = o.rawimpulsejointset_new, gl = o.rawimpulsejointset_createJoint, bl = o.rawimpulsejointset_remove, ml = o.rawimpulsejointset_len, fl = o.rawimpulsejointset_contains, yl = o.rawimpulsejointset_forEachJointHandle, vl = o.rawimpulsejointset_forEachJointAttachedToRigidBody, Sl = o.__wbg_rawintegrationparameters_free, Rl = o.rawintegrationparameters_new, Cl = o.rawintegrationparameters_dt, El = o.rawintegrationparameters_contact_erp, xl = o.rawintegrationparameters_numSolverIterations, jl = o.rawintegrationparameters_minIslandSize, Al = o.rawintegrationparameters_maxCcdSubsteps, Pl = o.rawintegrationparameters_lengthUnit, Il = o.rawintegrationparameters_set_dt, zl = o.rawintegrationparameters_set_contact_natural_frequency, Tl = o.rawintegrationparameters_set_normalizedAllowedLinearError, Dl = o.rawintegrationparameters_set_normalizedPredictionDistance, kl = o.rawintegrationparameters_set_numSolverIterations, Ml = o.rawintegrationparameters_set_minIslandSize, Fl = o.rawintegrationparameters_set_maxCcdSubsteps, Ll = o.rawintegrationparameters_set_lengthUnit, Bl = o.rawintegrationparameters_switchToStandardPgsSolver, Nl = o.rawintegrationparameters_switchToSmallStepsPgsSolver, Ol = o.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart, Hl = o.__wbg_rawislandmanager_free, Gl = o.rawislandmanager_new, Wl = o.rawislandmanager_forEachActiveRigidBodyHandle, Vl = o.__wbg_rawgenericjoint_free, ql = o.rawgenericjoint_generic, Ul = o.rawgenericjoint_spring, Jl = o.rawgenericjoint_rope, Kl = o.rawgenericjoint_spherical, Xl = o.rawgenericjoint_prismatic, $l = o.rawgenericjoint_fixed, Yl = o.rawgenericjoint_revolute, Zl = o.rawmultibodyjointset_jointType, Ql = o.rawmultibodyjointset_jointFrameX1, t_ = o.rawmultibodyjointset_jointFrameX2, e_ = o.rawmultibodyjointset_jointAnchor1, r_ = o.rawmultibodyjointset_jointAnchor2, i_ = o.rawmultibodyjointset_jointContactsEnabled, n_ = o.rawmultibodyjointset_jointSetContactsEnabled, s_ = o.rawmultibodyjointset_jointLimitsEnabled, a_ = o.rawmultibodyjointset_jointLimitsMin, o_ = o.rawmultibodyjointset_jointLimitsMax, c_ = o.__wbg_rawmultibodyjointset_free, l_ = o.rawmultibodyjointset_new, __ = o.rawmultibodyjointset_createJoint, d_ = o.rawmultibodyjointset_remove, h_ = o.rawmultibodyjointset_contains, w_ = o.rawmultibodyjointset_forEachJointHandle, u_ = o.rawmultibodyjointset_forEachJointAttachedToRigidBody, p_ = o.rawrigidbodyset_rbTranslation, g_ = o.rawrigidbodyset_rbRotation, b_ = o.rawrigidbodyset_rbSleep, m_ = o.rawrigidbodyset_rbIsSleeping, f_ = o.rawrigidbodyset_rbIsMoving, y_ = o.rawrigidbodyset_rbNextTranslation, v_ = o.rawrigidbodyset_rbNextRotation, S_ = o.rawrigidbodyset_rbSetTranslation, R_ = o.rawrigidbodyset_rbSetRotation, C_ = o.rawrigidbodyset_rbSetLinvel, E_ = o.rawrigidbodyset_rbSetAngvel, x_ = o.rawrigidbodyset_rbSetNextKinematicTranslation, j_ = o.rawrigidbodyset_rbSetNextKinematicRotation, A_ = o.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, P_ = o.rawrigidbodyset_rbSetAdditionalMass, I_ = o.rawrigidbodyset_rbSetAdditionalMassProperties, z_ = o.rawrigidbodyset_rbLinvel, T_ = o.rawrigidbodyset_rbAngvel, D_ = o.rawrigidbodyset_rbVelocityAtPoint, k_ = o.rawrigidbodyset_rbLockTranslations, M_ = o.rawrigidbodyset_rbSetEnabledTranslations, F_ = o.rawrigidbodyset_rbLockRotations, L_ = o.rawrigidbodyset_rbSetEnabledRotations, B_ = o.rawrigidbodyset_rbDominanceGroup, N_ = o.rawrigidbodyset_rbSetDominanceGroup, O_ = o.rawrigidbodyset_rbEnableCcd, H_ = o.rawrigidbodyset_rbSetSoftCcdPrediction, G_ = o.rawrigidbodyset_rbMass, W_ = o.rawrigidbodyset_rbInvMass, V_ = o.rawrigidbodyset_rbEffectiveInvMass, q_ = o.rawrigidbodyset_rbLocalCom, U_ = o.rawrigidbodyset_rbWorldCom, J_ = o.rawrigidbodyset_rbInvPrincipalInertiaSqrt, K_ = o.rawrigidbodyset_rbPrincipalInertiaLocalFrame, X_ = o.rawrigidbodyset_rbPrincipalInertia, $_ = o.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt, Y_ = o.rawrigidbodyset_rbEffectiveAngularInertia, Z_ = o.rawrigidbodyset_rbWakeUp, Q_ = o.rawrigidbodyset_rbIsCcdEnabled, td = o.rawrigidbodyset_rbSoftCcdPrediction, ed = o.rawrigidbodyset_rbNumColliders, rd = o.rawrigidbodyset_rbCollider, id = o.rawrigidbodyset_rbBodyType, nd = o.rawrigidbodyset_rbSetBodyType, sd = o.rawrigidbodyset_rbIsFixed, ad = o.rawrigidbodyset_rbIsKinematic, od = o.rawrigidbodyset_rbIsDynamic, cd = o.rawrigidbodyset_rbLinearDamping, ld = o.rawrigidbodyset_rbAngularDamping, _d = o.rawrigidbodyset_rbSetLinearDamping, dd = o.rawrigidbodyset_rbSetAngularDamping, hd = o.rawrigidbodyset_rbSetEnabled, wd = o.rawrigidbodyset_rbIsEnabled, ud = o.rawrigidbodyset_rbGravityScale, pd = o.rawrigidbodyset_rbSetGravityScale, gd = o.rawrigidbodyset_rbResetForces, bd = o.rawrigidbodyset_rbResetTorques, md = o.rawrigidbodyset_rbAddForce, fd = o.rawrigidbodyset_rbApplyImpulse, yd = o.rawrigidbodyset_rbAddTorque, vd = o.rawrigidbodyset_rbApplyTorqueImpulse, Sd = o.rawrigidbodyset_rbAddForceAtPoint, Rd = o.rawrigidbodyset_rbApplyImpulseAtPoint, Cd = o.rawrigidbodyset_rbAdditionalSolverIterations, Ed = o.rawrigidbodyset_rbSetAdditionalSolverIterations, xd = o.rawrigidbodyset_rbUserData, jd = o.rawrigidbodyset_rbSetUserData, Ad = o.rawrigidbodyset_rbUserForce, Pd = o.rawrigidbodyset_rbUserTorque, Id = o.__wbg_rawrigidbodyset_free, zd = o.rawrigidbodyset_new, Td = o.rawrigidbodyset_createRigidBody, Dd = o.rawrigidbodyset_remove, kd = o.rawrigidbodyset_contains, Md = o.rawrigidbodyset_forEachRigidBodyHandle, Fd = o.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, Ld = o.__wbg_rawbroadphase_free, Bd = o.rawbroadphase_new, Nd = o.rawcolliderset_coTranslation, Od = o.rawcolliderset_coRotation, Hd = o.rawcolliderset_coSetTranslation, Gd = o.rawcolliderset_coSetTranslationWrtParent, Wd = o.rawcolliderset_coSetRotation, Vd = o.rawcolliderset_coSetRotationWrtParent, qd = o.rawcolliderset_coIsSensor, Ud = o.rawcolliderset_coShapeType, Jd = o.rawcolliderset_coHalfspaceNormal, Kd = o.rawcolliderset_coHalfExtents, Xd = o.rawcolliderset_coSetHalfExtents, $d = o.rawcolliderset_coRadius, Yd = o.rawcolliderset_coSetRadius, Zd = o.rawcolliderset_coHalfHeight, Qd = o.rawcolliderset_coSetHalfHeight, th = o.rawcolliderset_coRoundRadius, eh = o.rawcolliderset_coSetRoundRadius, rh = o.rawcolliderset_coVoxelData, ih = o.rawcolliderset_coVoxelSize, nh = o.rawcolliderset_coSetVoxel, sh = o.rawcolliderset_coPropagateVoxelChange, ah = o.rawcolliderset_coCombineVoxelStates, oh = o.rawcolliderset_coVertices, ch = o.rawcolliderset_coIndices, lh = o.rawcolliderset_coTriMeshFlags, _h = o.rawcolliderset_coHeightFieldFlags, dh = o.rawcolliderset_coHeightfieldHeights, hh = o.rawcolliderset_coHeightfieldScale, wh = o.rawcolliderset_coHeightfieldNRows, uh = o.rawcolliderset_coHeightfieldNCols, ph = o.rawcolliderset_coParent, gh = o.rawcolliderset_coSetEnabled, bh = o.rawcolliderset_coIsEnabled, mh = o.rawcolliderset_coSetContactSkin, fh = o.rawcolliderset_coContactSkin, yh = o.rawcolliderset_coFriction, vh = o.rawcolliderset_coRestitution, Sh = o.rawcolliderset_coDensity, Rh = o.rawcolliderset_coMass, Ch = o.rawcolliderset_coVolume, Eh = o.rawcolliderset_coCollisionGroups, xh = o.rawcolliderset_coSolverGroups, jh = o.rawcolliderset_coActiveHooks, Ah = o.rawcolliderset_coActiveCollisionTypes, Ph = o.rawcolliderset_coActiveEvents, Ih = o.rawcolliderset_coContactForceEventThreshold, zh = o.rawcolliderset_coContainsPoint, Th = o.rawcolliderset_coCastShape, Dh = o.rawcolliderset_coCastCollider, kh = o.rawcolliderset_coIntersectsShape, Mh = o.rawcolliderset_coContactShape, Fh = o.rawcolliderset_coContactCollider, Lh = o.rawcolliderset_coProjectPoint, Bh = o.rawcolliderset_coIntersectsRay, Nh = o.rawcolliderset_coCastRay, Oh = o.rawcolliderset_coCastRayAndGetNormal, Hh = o.rawcolliderset_coSetSensor, Gh = o.rawcolliderset_coSetRestitution, Wh = o.rawcolliderset_coSetFriction, Vh = o.rawcolliderset_coFrictionCombineRule, qh = o.rawcolliderset_coSetFrictionCombineRule, Uh = o.rawcolliderset_coRestitutionCombineRule, Jh = o.rawcolliderset_coSetRestitutionCombineRule, Kh = o.rawcolliderset_coSetCollisionGroups, Xh = o.rawcolliderset_coSetSolverGroups, $h = o.rawcolliderset_coSetActiveHooks, Yh = o.rawcolliderset_coSetActiveEvents, Zh = o.rawcolliderset_coSetActiveCollisionTypes, Qh = o.rawcolliderset_coSetShape, tw = o.rawcolliderset_coSetContactForceEventThreshold, ew = o.rawcolliderset_coSetDensity, rw = o.rawcolliderset_coSetMass, iw = o.rawcolliderset_coSetMassProperties, nw = o.__wbg_rawcolliderset_free, sw = o.rawcolliderset_new, aw = o.rawcolliderset_len, ow = o.rawcolliderset_contains, cw = o.rawcolliderset_createCollider, lw = o.rawcolliderset_remove, _w = o.rawcolliderset_forEachColliderHandle, dw = o.__wbg_rawshapecontact_free, hw = o.__wbg_rawnarrowphase_free, ww = o.rawnarrowphase_new, uw = o.rawnarrowphase_contact_pairs_with, pw = o.rawnarrowphase_contact_pair, gw = o.rawnarrowphase_intersection_pairs_with, bw = o.rawnarrowphase_intersection_pair, mw = o.__wbg_rawcontactmanifold_free, fw = o.rawcontactpair_collider1, yw = o.rawcontactpair_collider2, vw = o.rawcontactpair_numContactManifolds, Sw = o.rawcontactpair_contactManifold, Rw = o.rawcontactmanifold_normal, Cw = o.rawcontactmanifold_local_n1, Ew = o.rawcontactmanifold_local_n2, xw = o.rawcontactmanifold_subshape1, jw = o.rawcontactmanifold_subshape2, Aw = o.rawcontactmanifold_num_contacts, Pw = o.rawcontactmanifold_contact_local_p1, Iw = o.rawcontactmanifold_contact_local_p2, zw = o.rawcontactmanifold_contact_dist, Tw = o.rawcontactmanifold_contact_fid1, Dw = o.rawcontactmanifold_contact_fid2, kw = o.rawcontactmanifold_contact_impulse, Mw = o.rawcontactmanifold_contact_tangent_impulse_x, Fw = o.rawcontactmanifold_contact_tangent_impulse_y, Lw = o.rawcontactmanifold_num_solver_contacts, Bw = o.rawcontactmanifold_solver_contact_point, Nw = o.rawcontactmanifold_solver_contact_dist, Ow = o.rawcontactmanifold_solver_contact_friction, Hw = o.rawcontactmanifold_solver_contact_restitution, Gw = o.rawcontactmanifold_solver_contact_tangent_velocity, Ww = o.__wbg_rawpointprojection_free, Vw = o.rawpointprojection_point, qw = o.rawpointprojection_isInside, Uw = o.__wbg_rawpointcolliderprojection_free, Jw = o.rawpointcolliderprojection_colliderHandle, Kw = o.rawpointcolliderprojection_point, Xw = o.rawpointcolliderprojection_isInside, $w = o.rawpointcolliderprojection_featureType, Yw = o.rawpointcolliderprojection_featureId, Zw = o.__wbg_rawrayintersection_free, Qw = o.__wbg_rawraycolliderhit_free, tu = o.__wbg_rawshape_free, eu = o.rawshape_cuboid, ru = o.rawshape_roundCuboid, iu = o.rawshape_ball, nu = o.rawshape_halfspace, su = o.rawshape_capsule, au = o.rawshape_cylinder, ou = o.rawshape_roundCylinder, cu = o.rawshape_cone, lu = o.rawshape_roundCone, _u = o.rawshape_voxels, du = o.rawshape_voxelsFromPoints, hu = o.rawshape_polyline, wu = o.rawshape_trimesh, uu = o.rawshape_heightfield, pu = o.rawshape_segment, gu = o.rawshape_triangle, bu = o.rawshape_roundTriangle, mu = o.rawshape_convexHull, fu = o.rawshape_roundConvexHull, yu = o.rawshape_convexMesh, vu = o.rawshape_roundConvexMesh, Su = o.rawshape_castShape, Ru = o.rawshape_intersectsShape, Cu = o.rawshape_contactShape, Eu = o.rawshape_containsPoint, xu = o.rawshape_projectPoint, ju = o.rawshape_intersectsRay, Au = o.rawshape_castRay, Pu = o.rawshape_castRayAndGetNormal, Iu = o.__wbg_rawshapecasthit_free, zu = o.rawshapecasthit_witness1, Tu = o.rawshapecasthit_normal1, Du = o.rawshapecasthit_normal2, ku = o.__wbg_rawcollidershapecasthit_free, Mu = o.rawcollidershapecasthit_time_of_impact, Fu = o.rawcollidershapecasthit_witness1, Lu = o.rawcollidershapecasthit_witness2, Bu = o.rawrotation_new, Nu = o.rawrotation_identity, Ou = o.rawrotation_x, Hu = o.rawrotation_w, Gu = o.rawvector_zero, Wu = o.rawvector_new, Vu = o.rawvector_set_x, qu = o.rawvector_set_z, Uu = o.rawvector_xyz, Ju = o.rawvector_yxz, Ku = o.rawvector_zxy, Xu = o.rawvector_xzy, $u = o.rawvector_yzx, Yu = o.rawvector_zyx, Zu = o.rawsdpmatrix3_elements, Qu = o.__wbg_rawdebugrenderpipeline_free, tp = o.rawdebugrenderpipeline_new, ep = o.rawdebugrenderpipeline_vertices, rp = o.rawdebugrenderpipeline_colors, ip = o.rawdebugrenderpipeline_render, np = o.__wbg_raweventqueue_free, sp = o.__wbg_rawcontactforceevent_free, ap = o.rawcontactforceevent_collider2, op = o.rawcontactforceevent_total_force, cp = o.rawcontactforceevent_total_force_magnitude, lp = o.rawcontactforceevent_max_force_direction, _p = o.rawcontactforceevent_max_force_magnitude, dp = o.raweventqueue_new, hp = o.raweventqueue_drainCollisionEvents, wp = o.raweventqueue_drainContactForceEvents, up = o.raweventqueue_clear, pp = o.__wbg_rawphysicspipeline_free, gp = o.rawphysicspipeline_new, bp = o.rawphysicspipeline_step, mp = o.rawphysicspipeline_stepWithEvents, fp = o.rawquerypipeline_new, yp = o.rawquerypipeline_update, vp = o.rawquerypipeline_castRay, Sp = o.rawquerypipeline_castRayAndGetNormal, Rp = o.rawquerypipeline_intersectionsWithRay, Cp = o.rawquerypipeline_intersectionWithShape, Ep = o.rawquerypipeline_projectPoint, xp = o.rawquerypipeline_projectPointAndGetFeature, jp = o.rawquerypipeline_intersectionsWithPoint, Ap = o.rawquerypipeline_castShape, Pp = o.rawquerypipeline_intersectionsWithShape, Ip = o.rawquerypipeline_collidersWithAabbIntersectingAabb, zp = o.__wbg_rawdeserializedworld_free, Tp = o.rawdeserializedworld_takeGravity, Dp = o.rawdeserializedworld_takeIntegrationParameters, kp = o.rawdeserializedworld_takeIslandManager, Mp = o.rawdeserializedworld_takeBroadPhase, Fp = o.rawdeserializedworld_takeNarrowPhase, Lp = o.rawdeserializedworld_takeBodies, Bp = o.rawdeserializedworld_takeColliders, Np = o.rawdeserializedworld_takeImpulseJoints, Op = o.rawdeserializedworld_takeMultibodyJoints, Hp = o.__wbg_rawserializationpipeline_free, Gp = o.rawserializationpipeline_new, Wp = o.rawserializationpipeline_serializeAll, Vp = o.rawserializationpipeline_deserializeAll, qp = o.rawcolliderset_isHandleValid, Up = o.rawkinematiccharactercontroller_offset, Jp = o.rawintegrationparameters_normalizedAllowedLinearError, Kp = o.rawintegrationparameters_numAdditionalFrictionIterations, Xp = o.rawintegrationparameters_numInternalPgsIterations, $p = o.rawrigidbodyset_len, Yp = o.rawshapecontact_distance, Zp = o.rawrayintersection_featureType, Qp = o.rawraycolliderintersection_colliderHandle, tg = o.rawrayintersection_time_of_impact, eg = o.rawraycolliderintersection_featureType, rg = o.rawraycolliderhit_colliderHandle, ig = o.rawraycolliderintersection_time_of_impact, ng = o.rawcollidershapecasthit_colliderHandle, sg = o.rawraycolliderhit_timeOfImpact, ag = o.rawshapecasthit_time_of_impact, og = o.rawrotation_y, cg = o.rawrotation_z, lg = o.rawvector_x, _g = o.rawvector_y, dg = o.rawvector_z, hg = o.rawcontactforceevent_collider1, wg = o.rawintegrationparameters_normalizedPredictionDistance, ug = o.reserve_memory, pg = o.__wbg_rawquerypipeline_free, gg = o.rawrayintersection_featureId, bg = o.rawraycolliderintersection_featureId, mg = o.rawkinematiccharactercontroller_up, fg = o.rawshapecontact_normal2, yg = o.rawshapecontact_point1, vg = o.rawshapecontact_point2, Sg = o.rawrayintersection_normal, Rg = o.rawraycolliderintersection_normal, Cg = o.rawshapecontact_normal1, Eg = o.rawcollidershapecasthit_normal1, xg = o.rawcollidershapecasthit_normal2, jg = o.rawshapecasthit_witness2, Ag = o.rawintegrationparameters_set_numAdditionalFrictionIterations, Pg = o.rawintegrationparameters_set_numInternalPgsIterations, Ig = o.rawvector_set_y, zg = o.__wbg_rawraycolliderintersection_free, Tg = o.__wbg_rawcontactpair_free, Dg = o.__wbg_rawsdpmatrix3_free, kg = o.__wbg_rawvector_free, Mg = o.__wbg_rawrotation_free, Fg = o.__wbindgen_export_0, Lg = o.__wbindgen_add_to_stack_pointer, Bg = o.__wbindgen_export_1, Ng = o.__wbindgen_export_2, Og = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_rawbroadphase_free: Ld,
    __wbg_rawccdsolver_free: Jc,
    __wbg_rawcharactercollision_free: Po,
    __wbg_rawcolliderset_free: nw,
    __wbg_rawcollidershapecasthit_free: ku,
    __wbg_rawcontactforceevent_free: sp,
    __wbg_rawcontactmanifold_free: mw,
    __wbg_rawcontactpair_free: Tg,
    __wbg_rawdebugrenderpipeline_free: Qu,
    __wbg_rawdeserializedworld_free: zp,
    __wbg_rawdynamicraycastvehiclecontroller_free: $o,
    __wbg_raweventqueue_free: np,
    __wbg_rawgenericjoint_free: Vl,
    __wbg_rawimpulsejointset_free: ul,
    __wbg_rawintegrationparameters_free: Sl,
    __wbg_rawislandmanager_free: Hl,
    __wbg_rawkinematiccharactercontroller_free: eo,
    __wbg_rawmultibodyjointset_free: c_,
    __wbg_rawnarrowphase_free: hw,
    __wbg_rawphysicspipeline_free: pp,
    __wbg_rawpidcontroller_free: No,
    __wbg_rawpointcolliderprojection_free: Uw,
    __wbg_rawpointprojection_free: Ww,
    __wbg_rawquerypipeline_free: pg,
    __wbg_rawraycolliderhit_free: Qw,
    __wbg_rawraycolliderintersection_free: zg,
    __wbg_rawrayintersection_free: Zw,
    __wbg_rawrigidbodyset_free: Id,
    __wbg_rawrotation_free: Mg,
    __wbg_rawsdpmatrix3_free: Dg,
    __wbg_rawserializationpipeline_free: Hp,
    __wbg_rawshape_free: tu,
    __wbg_rawshapecasthit_free: Iu,
    __wbg_rawshapecontact_free: dw,
    __wbg_rawvector_free: kg,
    __wbindgen_add_to_stack_pointer: Lg,
    __wbindgen_export_0: Fg,
    __wbindgen_export_1: Bg,
    __wbindgen_export_2: Ng,
    memory: Qa,
    rawbroadphase_new: Bd,
    rawccdsolver_new: Kc,
    rawcharactercollision_handle: zo,
    rawcharactercollision_new: Io,
    rawcharactercollision_toi: ko,
    rawcharactercollision_translationDeltaApplied: To,
    rawcharactercollision_translationDeltaRemaining: Do,
    rawcharactercollision_worldNormal1: Lo,
    rawcharactercollision_worldNormal2: Bo,
    rawcharactercollision_worldWitness1: Mo,
    rawcharactercollision_worldWitness2: Fo,
    rawcolliderset_coActiveCollisionTypes: Ah,
    rawcolliderset_coActiveEvents: Ph,
    rawcolliderset_coActiveHooks: jh,
    rawcolliderset_coCastCollider: Dh,
    rawcolliderset_coCastRay: Nh,
    rawcolliderset_coCastRayAndGetNormal: Oh,
    rawcolliderset_coCastShape: Th,
    rawcolliderset_coCollisionGroups: Eh,
    rawcolliderset_coCombineVoxelStates: ah,
    rawcolliderset_coContactCollider: Fh,
    rawcolliderset_coContactForceEventThreshold: Ih,
    rawcolliderset_coContactShape: Mh,
    rawcolliderset_coContactSkin: fh,
    rawcolliderset_coContainsPoint: zh,
    rawcolliderset_coDensity: Sh,
    rawcolliderset_coFriction: yh,
    rawcolliderset_coFrictionCombineRule: Vh,
    rawcolliderset_coHalfExtents: Kd,
    rawcolliderset_coHalfHeight: Zd,
    rawcolliderset_coHalfspaceNormal: Jd,
    rawcolliderset_coHeightFieldFlags: _h,
    rawcolliderset_coHeightfieldHeights: dh,
    rawcolliderset_coHeightfieldNCols: uh,
    rawcolliderset_coHeightfieldNRows: wh,
    rawcolliderset_coHeightfieldScale: hh,
    rawcolliderset_coIndices: ch,
    rawcolliderset_coIntersectsRay: Bh,
    rawcolliderset_coIntersectsShape: kh,
    rawcolliderset_coIsEnabled: bh,
    rawcolliderset_coIsSensor: qd,
    rawcolliderset_coMass: Rh,
    rawcolliderset_coParent: ph,
    rawcolliderset_coProjectPoint: Lh,
    rawcolliderset_coPropagateVoxelChange: sh,
    rawcolliderset_coRadius: $d,
    rawcolliderset_coRestitution: vh,
    rawcolliderset_coRestitutionCombineRule: Uh,
    rawcolliderset_coRotation: Od,
    rawcolliderset_coRoundRadius: th,
    rawcolliderset_coSetActiveCollisionTypes: Zh,
    rawcolliderset_coSetActiveEvents: Yh,
    rawcolliderset_coSetActiveHooks: $h,
    rawcolliderset_coSetCollisionGroups: Kh,
    rawcolliderset_coSetContactForceEventThreshold: tw,
    rawcolliderset_coSetContactSkin: mh,
    rawcolliderset_coSetDensity: ew,
    rawcolliderset_coSetEnabled: gh,
    rawcolliderset_coSetFriction: Wh,
    rawcolliderset_coSetFrictionCombineRule: qh,
    rawcolliderset_coSetHalfExtents: Xd,
    rawcolliderset_coSetHalfHeight: Qd,
    rawcolliderset_coSetMass: rw,
    rawcolliderset_coSetMassProperties: iw,
    rawcolliderset_coSetRadius: Yd,
    rawcolliderset_coSetRestitution: Gh,
    rawcolliderset_coSetRestitutionCombineRule: Jh,
    rawcolliderset_coSetRotation: Wd,
    rawcolliderset_coSetRotationWrtParent: Vd,
    rawcolliderset_coSetRoundRadius: eh,
    rawcolliderset_coSetSensor: Hh,
    rawcolliderset_coSetShape: Qh,
    rawcolliderset_coSetSolverGroups: Xh,
    rawcolliderset_coSetTranslation: Hd,
    rawcolliderset_coSetTranslationWrtParent: Gd,
    rawcolliderset_coSetVoxel: nh,
    rawcolliderset_coShapeType: Ud,
    rawcolliderset_coSolverGroups: xh,
    rawcolliderset_coTranslation: Nd,
    rawcolliderset_coTriMeshFlags: lh,
    rawcolliderset_coVertices: oh,
    rawcolliderset_coVolume: Ch,
    rawcolliderset_coVoxelData: rh,
    rawcolliderset_coVoxelSize: ih,
    rawcolliderset_contains: ow,
    rawcolliderset_createCollider: cw,
    rawcolliderset_forEachColliderHandle: _w,
    rawcolliderset_isHandleValid: qp,
    rawcolliderset_len: aw,
    rawcolliderset_new: sw,
    rawcolliderset_remove: lw,
    rawcollidershapecasthit_colliderHandle: ng,
    rawcollidershapecasthit_normal1: Eg,
    rawcollidershapecasthit_normal2: xg,
    rawcollidershapecasthit_time_of_impact: Mu,
    rawcollidershapecasthit_witness1: Fu,
    rawcollidershapecasthit_witness2: Lu,
    rawcontactforceevent_collider1: hg,
    rawcontactforceevent_collider2: ap,
    rawcontactforceevent_max_force_direction: lp,
    rawcontactforceevent_max_force_magnitude: _p,
    rawcontactforceevent_total_force: op,
    rawcontactforceevent_total_force_magnitude: cp,
    rawcontactmanifold_contact_dist: zw,
    rawcontactmanifold_contact_fid1: Tw,
    rawcontactmanifold_contact_fid2: Dw,
    rawcontactmanifold_contact_impulse: kw,
    rawcontactmanifold_contact_local_p1: Pw,
    rawcontactmanifold_contact_local_p2: Iw,
    rawcontactmanifold_contact_tangent_impulse_x: Mw,
    rawcontactmanifold_contact_tangent_impulse_y: Fw,
    rawcontactmanifold_local_n1: Cw,
    rawcontactmanifold_local_n2: Ew,
    rawcontactmanifold_normal: Rw,
    rawcontactmanifold_num_contacts: Aw,
    rawcontactmanifold_num_solver_contacts: Lw,
    rawcontactmanifold_solver_contact_dist: Nw,
    rawcontactmanifold_solver_contact_friction: Ow,
    rawcontactmanifold_solver_contact_point: Bw,
    rawcontactmanifold_solver_contact_restitution: Hw,
    rawcontactmanifold_solver_contact_tangent_velocity: Gw,
    rawcontactmanifold_subshape1: xw,
    rawcontactmanifold_subshape2: jw,
    rawcontactpair_collider1: fw,
    rawcontactpair_collider2: yw,
    rawcontactpair_contactManifold: Sw,
    rawcontactpair_numContactManifolds: vw,
    rawdebugrenderpipeline_colors: rp,
    rawdebugrenderpipeline_new: tp,
    rawdebugrenderpipeline_render: ip,
    rawdebugrenderpipeline_vertices: ep,
    rawdeserializedworld_takeBodies: Lp,
    rawdeserializedworld_takeBroadPhase: Mp,
    rawdeserializedworld_takeColliders: Bp,
    rawdeserializedworld_takeGravity: Tp,
    rawdeserializedworld_takeImpulseJoints: Np,
    rawdeserializedworld_takeIntegrationParameters: Dp,
    rawdeserializedworld_takeIslandManager: kp,
    rawdeserializedworld_takeMultibodyJoints: Op,
    rawdeserializedworld_takeNarrowPhase: Fp,
    rawdynamicraycastvehiclecontroller_add_wheel: nc,
    rawdynamicraycastvehiclecontroller_chassis: Qo,
    rawdynamicraycastvehiclecontroller_current_vehicle_speed: Zo,
    rawdynamicraycastvehiclecontroller_index_forward_axis: rc,
    rawdynamicraycastvehiclecontroller_index_up_axis: tc,
    rawdynamicraycastvehiclecontroller_new: Yo,
    rawdynamicraycastvehiclecontroller_num_wheels: sc,
    rawdynamicraycastvehiclecontroller_set_index_forward_axis: ic,
    rawdynamicraycastvehiclecontroller_set_index_up_axis: ec,
    rawdynamicraycastvehiclecontroller_set_wheel_axle_cs: Tc,
    rawdynamicraycastvehiclecontroller_set_wheel_brake: Cc,
    rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs: cc,
    rawdynamicraycastvehiclecontroller_set_wheel_direction_cs: Ic,
    rawdynamicraycastvehiclecontroller_set_wheel_engine_force: Ac,
    rawdynamicraycastvehiclecontroller_set_wheel_friction_slip: kc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force: Sc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel: hc,
    rawdynamicraycastvehiclecontroller_set_wheel_radius: uc,
    rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness: Fc,
    rawdynamicraycastvehiclecontroller_set_wheel_steering: xc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression: mc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation: yc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length: _c,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness: gc,
    rawdynamicraycastvehiclecontroller_update_vehicle: ac,
    rawdynamicraycastvehiclecontroller_wheel_axle_cs: zc,
    rawdynamicraycastvehiclecontroller_wheel_brake: Rc,
    rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs: oc,
    rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws: Hc,
    rawdynamicraycastvehiclecontroller_wheel_contact_point_ws: Gc,
    rawdynamicraycastvehiclecontroller_wheel_direction_cs: Pc,
    rawdynamicraycastvehiclecontroller_wheel_engine_force: jc,
    rawdynamicraycastvehiclecontroller_wheel_forward_impulse: Bc,
    rawdynamicraycastvehiclecontroller_wheel_friction_slip: Dc,
    rawdynamicraycastvehiclecontroller_wheel_ground_object: Uc,
    rawdynamicraycastvehiclecontroller_wheel_hard_point_ws: Vc,
    rawdynamicraycastvehiclecontroller_wheel_is_in_contact: qc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_force: vc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel: dc,
    rawdynamicraycastvehiclecontroller_wheel_radius: wc,
    rawdynamicraycastvehiclecontroller_wheel_rotation: Lc,
    rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness: Mc,
    rawdynamicraycastvehiclecontroller_wheel_side_impulse: Nc,
    rawdynamicraycastvehiclecontroller_wheel_steering: Ec,
    rawdynamicraycastvehiclecontroller_wheel_suspension_compression: bc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_force: Oc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_length: Wc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation: fc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length: lc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness: pc,
    raweventqueue_clear: up,
    raweventqueue_drainCollisionEvents: hp,
    raweventqueue_drainContactForceEvents: wp,
    raweventqueue_new: dp,
    rawgenericjoint_fixed: $l,
    rawgenericjoint_generic: ql,
    rawgenericjoint_prismatic: Xl,
    rawgenericjoint_revolute: Yl,
    rawgenericjoint_rope: Jl,
    rawgenericjoint_spherical: Kl,
    rawgenericjoint_spring: Ul,
    rawimpulsejointset_contains: fl,
    rawimpulsejointset_createJoint: gl,
    rawimpulsejointset_forEachJointAttachedToRigidBody: vl,
    rawimpulsejointset_forEachJointHandle: yl,
    rawimpulsejointset_jointAnchor1: tl,
    rawimpulsejointset_jointAnchor2: el,
    rawimpulsejointset_jointBodyHandle1: $c,
    rawimpulsejointset_jointBodyHandle2: Yc,
    rawimpulsejointset_jointConfigureMotor: wl,
    rawimpulsejointset_jointConfigureMotorModel: _l,
    rawimpulsejointset_jointConfigureMotorPosition: hl,
    rawimpulsejointset_jointConfigureMotorVelocity: dl,
    rawimpulsejointset_jointContactsEnabled: nl,
    rawimpulsejointset_jointFrameX1: Zc,
    rawimpulsejointset_jointFrameX2: Qc,
    rawimpulsejointset_jointLimitsEnabled: al,
    rawimpulsejointset_jointLimitsMax: cl,
    rawimpulsejointset_jointLimitsMin: ol,
    rawimpulsejointset_jointSetAnchor1: rl,
    rawimpulsejointset_jointSetAnchor2: il,
    rawimpulsejointset_jointSetContactsEnabled: sl,
    rawimpulsejointset_jointSetLimits: ll,
    rawimpulsejointset_jointType: Xc,
    rawimpulsejointset_len: ml,
    rawimpulsejointset_new: pl,
    rawimpulsejointset_remove: bl,
    rawintegrationparameters_contact_erp: El,
    rawintegrationparameters_dt: Cl,
    rawintegrationparameters_lengthUnit: Pl,
    rawintegrationparameters_maxCcdSubsteps: Al,
    rawintegrationparameters_minIslandSize: jl,
    rawintegrationparameters_new: Rl,
    rawintegrationparameters_normalizedAllowedLinearError: Jp,
    rawintegrationparameters_normalizedPredictionDistance: wg,
    rawintegrationparameters_numAdditionalFrictionIterations: Kp,
    rawintegrationparameters_numInternalPgsIterations: Xp,
    rawintegrationparameters_numSolverIterations: xl,
    rawintegrationparameters_set_contact_natural_frequency: zl,
    rawintegrationparameters_set_dt: Il,
    rawintegrationparameters_set_lengthUnit: Ll,
    rawintegrationparameters_set_maxCcdSubsteps: Fl,
    rawintegrationparameters_set_minIslandSize: Ml,
    rawintegrationparameters_set_normalizedAllowedLinearError: Tl,
    rawintegrationparameters_set_normalizedPredictionDistance: Dl,
    rawintegrationparameters_set_numAdditionalFrictionIterations: Ag,
    rawintegrationparameters_set_numInternalPgsIterations: Pg,
    rawintegrationparameters_set_numSolverIterations: kl,
    rawintegrationparameters_switchToSmallStepsPgsSolver: Nl,
    rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart: Ol,
    rawintegrationparameters_switchToStandardPgsSolver: Bl,
    rawislandmanager_forEachActiveRigidBodyHandle: Wl,
    rawislandmanager_new: Gl,
    rawkinematiccharactercontroller_autostepEnabled: wo,
    rawkinematiccharactercontroller_autostepIncludesDynamicBodies: ho,
    rawkinematiccharactercontroller_autostepMaxHeight: lo,
    rawkinematiccharactercontroller_autostepMinWidth: _o,
    rawkinematiccharactercontroller_computeColliderMovement: Co,
    rawkinematiccharactercontroller_computedCollision: Ao,
    rawkinematiccharactercontroller_computedGrounded: xo,
    rawkinematiccharactercontroller_computedMovement: Eo,
    rawkinematiccharactercontroller_disableAutostep: po,
    rawkinematiccharactercontroller_disableSnapToGround: So,
    rawkinematiccharactercontroller_enableAutostep: uo,
    rawkinematiccharactercontroller_enableSnapToGround: vo,
    rawkinematiccharactercontroller_maxSlopeClimbAngle: go,
    rawkinematiccharactercontroller_minSlopeSlideAngle: mo,
    rawkinematiccharactercontroller_new: ro,
    rawkinematiccharactercontroller_normalNudgeFactor: no,
    rawkinematiccharactercontroller_numComputedCollisions: jo,
    rawkinematiccharactercontroller_offset: Up,
    rawkinematiccharactercontroller_setMaxSlopeClimbAngle: bo,
    rawkinematiccharactercontroller_setMinSlopeSlideAngle: fo,
    rawkinematiccharactercontroller_setNormalNudgeFactor: so,
    rawkinematiccharactercontroller_setOffset: ao,
    rawkinematiccharactercontroller_setSlideEnabled: co,
    rawkinematiccharactercontroller_setUp: io,
    rawkinematiccharactercontroller_slideEnabled: oo,
    rawkinematiccharactercontroller_snapToGroundDistance: yo,
    rawkinematiccharactercontroller_snapToGroundEnabled: Ro,
    rawkinematiccharactercontroller_up: mg,
    rawmultibodyjointset_contains: h_,
    rawmultibodyjointset_createJoint: __,
    rawmultibodyjointset_forEachJointAttachedToRigidBody: u_,
    rawmultibodyjointset_forEachJointHandle: w_,
    rawmultibodyjointset_jointAnchor1: e_,
    rawmultibodyjointset_jointAnchor2: r_,
    rawmultibodyjointset_jointContactsEnabled: i_,
    rawmultibodyjointset_jointFrameX1: Ql,
    rawmultibodyjointset_jointFrameX2: t_,
    rawmultibodyjointset_jointLimitsEnabled: s_,
    rawmultibodyjointset_jointLimitsMax: o_,
    rawmultibodyjointset_jointLimitsMin: a_,
    rawmultibodyjointset_jointSetContactsEnabled: n_,
    rawmultibodyjointset_jointType: Zl,
    rawmultibodyjointset_new: l_,
    rawmultibodyjointset_remove: d_,
    rawnarrowphase_contact_pair: pw,
    rawnarrowphase_contact_pairs_with: uw,
    rawnarrowphase_intersection_pair: bw,
    rawnarrowphase_intersection_pairs_with: gw,
    rawnarrowphase_new: ww,
    rawphysicspipeline_new: gp,
    rawphysicspipeline_step: bp,
    rawphysicspipeline_stepWithEvents: mp,
    rawpidcontroller_angular_correction: Xo,
    rawpidcontroller_apply_angular_correction: Jo,
    rawpidcontroller_apply_linear_correction: Uo,
    rawpidcontroller_linear_correction: Ko,
    rawpidcontroller_new: Oo,
    rawpidcontroller_reset_integrals: qo,
    rawpidcontroller_set_axes_mask: Vo,
    rawpidcontroller_set_kd: Wo,
    rawpidcontroller_set_ki: Go,
    rawpidcontroller_set_kp: Ho,
    rawpointcolliderprojection_colliderHandle: Jw,
    rawpointcolliderprojection_featureId: Yw,
    rawpointcolliderprojection_featureType: $w,
    rawpointcolliderprojection_isInside: Xw,
    rawpointcolliderprojection_point: Kw,
    rawpointprojection_isInside: qw,
    rawpointprojection_point: Vw,
    rawquerypipeline_castRay: vp,
    rawquerypipeline_castRayAndGetNormal: Sp,
    rawquerypipeline_castShape: Ap,
    rawquerypipeline_collidersWithAabbIntersectingAabb: Ip,
    rawquerypipeline_intersectionWithShape: Cp,
    rawquerypipeline_intersectionsWithPoint: jp,
    rawquerypipeline_intersectionsWithRay: Rp,
    rawquerypipeline_intersectionsWithShape: Pp,
    rawquerypipeline_new: fp,
    rawquerypipeline_projectPoint: Ep,
    rawquerypipeline_projectPointAndGetFeature: xp,
    rawquerypipeline_update: yp,
    rawraycolliderhit_colliderHandle: rg,
    rawraycolliderhit_timeOfImpact: sg,
    rawraycolliderintersection_colliderHandle: Qp,
    rawraycolliderintersection_featureId: bg,
    rawraycolliderintersection_featureType: eg,
    rawraycolliderintersection_normal: Rg,
    rawraycolliderintersection_time_of_impact: ig,
    rawrayintersection_featureId: gg,
    rawrayintersection_featureType: Zp,
    rawrayintersection_normal: Sg,
    rawrayintersection_time_of_impact: tg,
    rawrigidbodyset_contains: kd,
    rawrigidbodyset_createRigidBody: Td,
    rawrigidbodyset_forEachRigidBodyHandle: Md,
    rawrigidbodyset_len: $p,
    rawrigidbodyset_new: zd,
    rawrigidbodyset_propagateModifiedBodyPositionsToColliders: Fd,
    rawrigidbodyset_rbAddForce: md,
    rawrigidbodyset_rbAddForceAtPoint: Sd,
    rawrigidbodyset_rbAddTorque: yd,
    rawrigidbodyset_rbAdditionalSolverIterations: Cd,
    rawrigidbodyset_rbAngularDamping: ld,
    rawrigidbodyset_rbAngvel: T_,
    rawrigidbodyset_rbApplyImpulse: fd,
    rawrigidbodyset_rbApplyImpulseAtPoint: Rd,
    rawrigidbodyset_rbApplyTorqueImpulse: vd,
    rawrigidbodyset_rbBodyType: id,
    rawrigidbodyset_rbCollider: rd,
    rawrigidbodyset_rbDominanceGroup: B_,
    rawrigidbodyset_rbEffectiveAngularInertia: Y_,
    rawrigidbodyset_rbEffectiveInvMass: V_,
    rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt: $_,
    rawrigidbodyset_rbEnableCcd: O_,
    rawrigidbodyset_rbGravityScale: ud,
    rawrigidbodyset_rbInvMass: W_,
    rawrigidbodyset_rbInvPrincipalInertiaSqrt: J_,
    rawrigidbodyset_rbIsCcdEnabled: Q_,
    rawrigidbodyset_rbIsDynamic: od,
    rawrigidbodyset_rbIsEnabled: wd,
    rawrigidbodyset_rbIsFixed: sd,
    rawrigidbodyset_rbIsKinematic: ad,
    rawrigidbodyset_rbIsMoving: f_,
    rawrigidbodyset_rbIsSleeping: m_,
    rawrigidbodyset_rbLinearDamping: cd,
    rawrigidbodyset_rbLinvel: z_,
    rawrigidbodyset_rbLocalCom: q_,
    rawrigidbodyset_rbLockRotations: F_,
    rawrigidbodyset_rbLockTranslations: k_,
    rawrigidbodyset_rbMass: G_,
    rawrigidbodyset_rbNextRotation: v_,
    rawrigidbodyset_rbNextTranslation: y_,
    rawrigidbodyset_rbNumColliders: ed,
    rawrigidbodyset_rbPrincipalInertia: X_,
    rawrigidbodyset_rbPrincipalInertiaLocalFrame: K_,
    rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: A_,
    rawrigidbodyset_rbResetForces: gd,
    rawrigidbodyset_rbResetTorques: bd,
    rawrigidbodyset_rbRotation: g_,
    rawrigidbodyset_rbSetAdditionalMass: P_,
    rawrigidbodyset_rbSetAdditionalMassProperties: I_,
    rawrigidbodyset_rbSetAdditionalSolverIterations: Ed,
    rawrigidbodyset_rbSetAngularDamping: dd,
    rawrigidbodyset_rbSetAngvel: E_,
    rawrigidbodyset_rbSetBodyType: nd,
    rawrigidbodyset_rbSetDominanceGroup: N_,
    rawrigidbodyset_rbSetEnabled: hd,
    rawrigidbodyset_rbSetEnabledRotations: L_,
    rawrigidbodyset_rbSetEnabledTranslations: M_,
    rawrigidbodyset_rbSetGravityScale: pd,
    rawrigidbodyset_rbSetLinearDamping: _d,
    rawrigidbodyset_rbSetLinvel: C_,
    rawrigidbodyset_rbSetNextKinematicRotation: j_,
    rawrigidbodyset_rbSetNextKinematicTranslation: x_,
    rawrigidbodyset_rbSetRotation: R_,
    rawrigidbodyset_rbSetSoftCcdPrediction: H_,
    rawrigidbodyset_rbSetTranslation: S_,
    rawrigidbodyset_rbSetUserData: jd,
    rawrigidbodyset_rbSleep: b_,
    rawrigidbodyset_rbSoftCcdPrediction: td,
    rawrigidbodyset_rbTranslation: p_,
    rawrigidbodyset_rbUserData: xd,
    rawrigidbodyset_rbUserForce: Ad,
    rawrigidbodyset_rbUserTorque: Pd,
    rawrigidbodyset_rbVelocityAtPoint: D_,
    rawrigidbodyset_rbWakeUp: Z_,
    rawrigidbodyset_rbWorldCom: U_,
    rawrigidbodyset_remove: Dd,
    rawrotation_identity: Nu,
    rawrotation_new: Bu,
    rawrotation_w: Hu,
    rawrotation_x: Ou,
    rawrotation_y: og,
    rawrotation_z: cg,
    rawsdpmatrix3_elements: Zu,
    rawserializationpipeline_deserializeAll: Vp,
    rawserializationpipeline_new: Gp,
    rawserializationpipeline_serializeAll: Wp,
    rawshape_ball: iu,
    rawshape_capsule: su,
    rawshape_castRay: Au,
    rawshape_castRayAndGetNormal: Pu,
    rawshape_castShape: Su,
    rawshape_cone: cu,
    rawshape_contactShape: Cu,
    rawshape_containsPoint: Eu,
    rawshape_convexHull: mu,
    rawshape_convexMesh: yu,
    rawshape_cuboid: eu,
    rawshape_cylinder: au,
    rawshape_halfspace: nu,
    rawshape_heightfield: uu,
    rawshape_intersectsRay: ju,
    rawshape_intersectsShape: Ru,
    rawshape_polyline: hu,
    rawshape_projectPoint: xu,
    rawshape_roundCone: lu,
    rawshape_roundConvexHull: fu,
    rawshape_roundConvexMesh: vu,
    rawshape_roundCuboid: ru,
    rawshape_roundCylinder: ou,
    rawshape_roundTriangle: bu,
    rawshape_segment: pu,
    rawshape_triangle: gu,
    rawshape_trimesh: wu,
    rawshape_voxels: _u,
    rawshape_voxelsFromPoints: du,
    rawshapecasthit_normal1: Tu,
    rawshapecasthit_normal2: Du,
    rawshapecasthit_time_of_impact: ag,
    rawshapecasthit_witness1: zu,
    rawshapecasthit_witness2: jg,
    rawshapecontact_distance: Yp,
    rawshapecontact_normal1: Cg,
    rawshapecontact_normal2: fg,
    rawshapecontact_point1: yg,
    rawshapecontact_point2: vg,
    rawvector_new: Wu,
    rawvector_set_x: Vu,
    rawvector_set_y: Ig,
    rawvector_set_z: qu,
    rawvector_x: lg,
    rawvector_xyz: Uu,
    rawvector_xzy: Xu,
    rawvector_y: _g,
    rawvector_yxz: Ju,
    rawvector_yzx: $u,
    rawvector_z: dg,
    rawvector_zero: Gu,
    rawvector_zxy: Ku,
    rawvector_zyx: Yu,
    reserve_memory: ug,
    version: to
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ba(Og);
  class Hg {
    constructor(t, e, r) {
      this.x = t, this.y = e, this.z = r;
    }
  }
  class g {
    static new(t, e, r) {
      return new Hg(t, e, r);
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
  class Pi {
    constructor(t, e, r, n) {
      this.x = t, this.y = e, this.z = r, this.w = n;
    }
  }
  class F {
    static identity() {
      return new Pi(0, 0, 0, 1);
    }
    static fromRaw(t) {
      if (!t) return null;
      let e = new Pi(t.x, t.y, t.z, t.w);
      return t.free(), e;
    }
    static intoRaw(t) {
      return new L(t.x, t.y, t.z, t.w);
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w;
    }
  }
  class Gg {
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
  class Ii {
    static fromRaw(t) {
      const e = new Gg(t.elements());
      return t.free(), e;
    }
  }
  var mt;
  (function(i) {
    i[i.Dynamic = 0] = "Dynamic", i[i.Fixed = 1] = "Fixed", i[i.KinematicPositionBased = 2] = "KinematicPositionBased", i[i.KinematicVelocityBased = 3] = "KinematicVelocityBased";
  })(mt || (mt = {}));
  class zi {
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
      return F.fromRaw(t);
    }
    nextTranslation() {
      let t = this.rawSet.rbNextTranslation(this.handle);
      return g.fromRaw(t);
    }
    nextRotation() {
      let t = this.rawSet.rbNextRotation(this.handle);
      return F.fromRaw(t);
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
    invPrincipalInertiaSqrt() {
      return g.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
    }
    principalInertia() {
      return g.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
    }
    principalInertiaLocalFrame() {
      return F.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
    }
    effectiveWorldInvInertiaSqrt() {
      return Ii.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
    }
    effectiveAngularInertia() {
      return Ii.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
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
    setAdditionalMassProperties(t, e, r, n, a) {
      let c = g.intoRaw(e), l = g.intoRaw(r), _ = F.intoRaw(n);
      this.rawSet.rbSetAdditionalMassProperties(this.handle, t, c, l, _, a), c.free(), l.free(), _.free();
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
      const n = g.intoRaw(t), a = g.intoRaw(e);
      this.rawSet.rbAddForceAtPoint(this.handle, n, a, r), n.free(), a.free();
    }
    applyImpulseAtPoint(t, e, r) {
      const n = g.intoRaw(t), a = g.intoRaw(e);
      this.rawSet.rbApplyImpulseAtPoint(this.handle, n, a, r), n.free(), a.free();
    }
    userForce() {
      return g.fromRaw(this.rawSet.rbUserForce(this.handle));
    }
    userTorque() {
      return g.fromRaw(this.rawSet.rbUserTorque(this.handle));
    }
  }
  class St {
    constructor(t) {
      this.enabled = true, this.status = t, this.translation = g.zeros(), this.rotation = F.identity(), this.gravityScale = 1, this.linvel = g.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = g.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = g.zeros(), this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = F.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
    }
    static dynamic() {
      return new St(mt.Dynamic);
    }
    static kinematicPositionBased() {
      return new St(mt.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
      return new St(mt.KinematicVelocityBased);
    }
    static fixed() {
      return new St(mt.Fixed);
    }
    static newDynamic() {
      return new St(mt.Dynamic);
    }
    static newKinematicPositionBased() {
      return new St(mt.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
      return new St(mt.KinematicVelocityBased);
    }
    static newStatic() {
      return new St(mt.Fixed);
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
      return F.copy(this.rotation, t), this;
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
      return this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), F.copy(this.angularInertiaLocalFrame, n), this.massOnly = false, this;
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
  class Ve {
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
  class Wg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new K(), this.map = new Ve(), t && t.forEachRigidBodyHandle((e) => {
        this.map.set(e, new zi(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createRigidBody(t, e) {
      let r = g.intoRaw(e.translation), n = F.intoRaw(e.rotation), a = g.intoRaw(e.linvel), c = g.intoRaw(e.centerOfMass), l = g.intoRaw(e.angvel), _ = g.intoRaw(e.principalAngularInertia), h = F.intoRaw(e.angularInertiaLocalFrame), p = this.raw.createRigidBody(e.enabled, r, n, e.gravityScale, e.mass, e.massOnly, c, a, l, _, h, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.softCcdPrediction, e.ccdEnabled, e.dominanceGroup, e.additionalSolverIterations);
      r.free(), n.free(), a.free(), c.free(), l.free(), _.free(), h.free();
      const w = new zi(this.raw, t, p);
      return w.userData = e.userData, this.map.set(p, w), w;
    }
    remove(t, e, r, n, a) {
      for (let c = 0; c < this.raw.rbNumColliders(t); c += 1) r.unmap(this.raw.rbCollider(t, c));
      n.forEachJointHandleAttachedToRigidBody(t, (c) => n.unmap(c)), a.forEachJointHandleAttachedToRigidBody(t, (c) => a.unmap(c)), this.raw.remove(t, e.raw, r.raw, n.raw, a.raw), this.map.delete(t);
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
  class Vg {
    constructor(t) {
      this.raw = t || new qt();
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
    get numAdditionalFrictionIterations() {
      return this.raw.numAdditionalFrictionIterations;
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
    set numAdditionalFrictionIterations(t) {
      this.raw.numAdditionalFrictionIterations = t;
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
    switchToStandardPgsSolver() {
      this.raw.switchToStandardPgsSolver();
    }
    switchToSmallStepsPgsSolver() {
      this.raw.switchToSmallStepsPgsSolver();
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
      this.raw.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
  }
  var ot;
  (function(i) {
    i[i.Revolute = 0] = "Revolute", i[i.Fixed = 1] = "Fixed", i[i.Prismatic = 2] = "Prismatic", i[i.Rope = 3] = "Rope", i[i.Spring = 4] = "Spring", i[i.Spherical = 5] = "Spherical", i[i.Generic = 6] = "Generic";
  })(ot || (ot = {}));
  var Ti;
  (function(i) {
    i[i.AccelerationBased = 0] = "AccelerationBased", i[i.ForceBased = 1] = "ForceBased";
  })(Ti || (Ti = {}));
  var Di;
  (function(i) {
    i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ";
  })(Di || (Di = {}));
  class Ct {
    constructor(t, e, r) {
      this.rawSet = t, this.bodySet = e, this.handle = r;
    }
    static newTyped(t, e, r) {
      switch (t.jointType(r)) {
        case ft.Revolute:
          return new Xg(t, e, r);
        case ft.Prismatic:
          return new Kg(t, e, r);
        case ft.Fixed:
          return new qg(t, e, r);
        case ft.Spring:
          return new Jg(t, e, r);
        case ft.Rope:
          return new Ug(t, e, r);
        case ft.Spherical:
          return new Yg(t, e, r);
        case ft.Generic:
          return new $g(t, e, r);
        default:
          return new Ct(t, e, r);
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
      return F.fromRaw(this.rawSet.jointFrameX1(this.handle));
    }
    frameX2() {
      return F.fromRaw(this.rawSet.jointFrameX2(this.handle));
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
  class gn extends Ct {
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
  class qg extends Ct {
  }
  class Ug extends Ct {
  }
  class Jg extends Ct {
  }
  class Kg extends gn {
    rawAxis() {
      return Be.LinX;
    }
  }
  class Xg extends gn {
    rawAxis() {
      return Be.AngX;
    }
  }
  class $g extends Ct {
  }
  class Yg extends Ct {
  }
  class At {
    constructor() {
    }
    static fixed(t, e, r, n) {
      let a = new At();
      return a.anchor1 = t, a.anchor2 = r, a.frame1 = e, a.frame2 = n, a.jointType = ot.Fixed, a;
    }
    static spring(t, e, r, n, a) {
      let c = new At();
      return c.anchor1 = n, c.anchor2 = a, c.length = t, c.stiffness = e, c.damping = r, c.jointType = ot.Spring, c;
    }
    static rope(t, e, r) {
      let n = new At();
      return n.anchor1 = e, n.anchor2 = r, n.length = t, n.jointType = ot.Rope, n;
    }
    static generic(t, e, r, n) {
      let a = new At();
      return a.anchor1 = t, a.anchor2 = e, a.axis = r, a.axesMask = n, a.jointType = ot.Generic, a;
    }
    static spherical(t, e) {
      let r = new At();
      return r.anchor1 = t, r.anchor2 = e, r.jointType = ot.Spherical, r;
    }
    static prismatic(t, e, r) {
      let n = new At();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = ot.Prismatic, n;
    }
    static revolute(t, e, r) {
      let n = new At();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = ot.Revolute, n;
    }
    intoRaw() {
      let t = g.intoRaw(this.anchor1), e = g.intoRaw(this.anchor2), r, n, a = false, c = 0, l = 0;
      switch (this.jointType) {
        case ot.Fixed:
          let _ = F.intoRaw(this.frame1), h = F.intoRaw(this.frame2);
          n = at.fixed(t, _, e, h), _.free(), h.free();
          break;
        case ot.Spring:
          n = at.spring(this.length, this.stiffness, this.damping, t, e);
          break;
        case ot.Rope:
          n = at.rope(this.length, t, e);
          break;
        case ot.Prismatic:
          r = g.intoRaw(this.axis), this.limitsEnabled && (a = true, c = this.limits[0], l = this.limits[1]), n = at.prismatic(t, e, r, a, c, l), r.free();
          break;
        case ot.Generic:
          r = g.intoRaw(this.axis);
          let p = this.axesMask;
          n = at.generic(t, e, r, p);
          break;
        case ot.Spherical:
          n = at.spherical(t, e);
          break;
        case ot.Revolute:
          r = g.intoRaw(this.axis), n = at.revolute(t, e, r), r.free();
          break;
      }
      return t.free(), e.free(), n;
    }
  }
  class Zg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Pt(), this.map = new Ve(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Ct.newTyped(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createJoint(t, e, r, n, a) {
      const c = e.intoRaw(), l = this.raw.createJoint(c, r, n, a);
      c.free();
      let _ = Ct.newTyped(this.raw, t, l);
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
  class Ut {
    constructor(t, e) {
      this.rawSet = t, this.handle = e;
    }
    static newTyped(t, e) {
      switch (t.jointType(e)) {
        case ft.Revolute:
          return new eb(t, e);
        case ft.Prismatic:
          return new tb(t, e);
        case ft.Fixed:
          return new Qg(t, e);
        case ft.Spherical:
          return new rb(t, e);
        default:
          return new Ut(t, e);
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
  class bn extends Ut {
  }
  class Qg extends Ut {
  }
  class tb extends bn {
    rawAxis() {
      return Be.LinX;
    }
  }
  class eb extends bn {
    rawAxis() {
      return Be.AngX;
    }
  }
  class rb extends Ut {
  }
  class ib {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new zt(), this.map = new Ve(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Ut.newTyped(this.raw, e));
      });
    }
    createJoint(t, e, r, n) {
      const a = t.intoRaw(), c = this.raw.createJoint(a, e, r, n);
      a.free();
      let l = Ut.newTyped(this.raw, c);
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
  class nb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new br();
    }
  }
  class sb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new It();
    }
    forEachActiveRigidBodyHandle(t) {
      this.raw.forEachActiveRigidBodyHandle(t);
    }
  }
  class ab {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Vt();
    }
  }
  class ob {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Nt(), this.tempManifold = new cb(null);
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
        const a = n.collider1() != t;
        let c;
        for (c = 0; c < n.numContactManifolds(); ++c) this.tempManifold.raw = n.contactManifold(c), this.tempManifold.raw && r(this.tempManifold, a), this.tempManifold.free();
        n.free();
      }
    }
    intersectionPair(t, e) {
      return this.raw.intersection_pair(t, e);
    }
  }
  class cb {
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
  class ye {
    constructor(t, e, r, n, a) {
      this.distance = t, this.point1 = e, this.point2 = r, this.normal1 = n, this.normal2 = a;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new ye(t.distance(), g.fromRaw(t.point1()), g.fromRaw(t.point2()), g.fromRaw(t.normal1()), g.fromRaw(t.normal2()));
      return t.free(), e;
    }
  }
  var ve;
  (function(i) {
    i[i.Vertex = 0] = "Vertex", i[i.Edge = 1] = "Edge", i[i.Face = 2] = "Face", i[i.Unknown = 3] = "Unknown";
  })(ve || (ve = {}));
  class qe {
    constructor(t, e) {
      this.point = t, this.isInside = e;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new qe(g.fromRaw(t.point()), t.isInside());
      return t.free(), e;
    }
  }
  class Te {
    constructor(t, e, r, n, a) {
      this.featureType = ve.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = r, a !== void 0 && (this.featureId = a), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Te(t.get(e.colliderHandle()), g.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class Ue {
    constructor(t, e, r, n) {
      this.featureType = ve.Unknown, this.featureId = void 0, this.timeOfImpact = t, this.normal = e, n !== void 0 && (this.featureId = n), r !== void 0 && (this.featureType = r);
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new Ue(t.time_of_impact(), g.fromRaw(t.normal()), t.featureType(), t.featureId());
      return t.free(), e;
    }
  }
  class De {
    constructor(t, e, r, n, a) {
      this.featureType = ve.Unknown, this.featureId = void 0, this.collider = t, this.timeOfImpact = e, this.normal = r, a !== void 0 && (this.featureId = a), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new De(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.normal()), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class Mr {
    constructor(t, e) {
      this.collider = t, this.timeOfImpact = e;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Mr(t.get(e.colliderHandle()), e.timeOfImpact());
      return e.free(), r;
    }
  }
  class Se {
    constructor(t, e, r, n, a) {
      this.time_of_impact = t, this.witness1 = e, this.witness2 = r, this.normal1 = n, this.normal2 = a;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Se(e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class Je extends Se {
    constructor(t, e, r, n, a, c) {
      super(e, r, n, a, c), this.collider = t;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Je(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class it {
    static fromRaw(t, e) {
      const r = t.coShapeType(e);
      let n, a, c, l, _, h, p;
      switch (r) {
        case nt.Ball:
          return new Fr(t.coRadius(e));
        case nt.Cuboid:
          return n = t.coHalfExtents(e), new Re(n.x, n.y, n.z);
        case nt.RoundCuboid:
          return n = t.coHalfExtents(e), a = t.coRoundRadius(e), new mn(n.x, n.y, n.z, a);
        case nt.Capsule:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new fn(_, h);
        case nt.Segment:
          return c = t.coVertices(e), new yn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]));
        case nt.Polyline:
          return c = t.coVertices(e), l = t.coIndices(e), new Rn(c, l);
        case nt.Triangle:
          return c = t.coVertices(e), new vn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]));
        case nt.RoundTriangle:
          return c = t.coVertices(e), a = t.coRoundRadius(e), new Sn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]), a);
        case nt.HalfSpace:
          return p = g.fromRaw(t.coHalfspaceNormal(e)), new lb(p);
        case nt.Voxels:
          const w = t.coVoxelData(e), b = t.coVoxelSize(e);
          return new Cn(w, b);
        case nt.TriMesh:
          c = t.coVertices(e), l = t.coIndices(e);
          const f = t.coTriMeshFlags(e);
          return new Lr(c, l, f);
        case nt.HeightField:
          const C = t.coHeightfieldScale(e), T = t.coHeightfieldHeights(e), z = t.coHeightfieldNRows(e), P = t.coHeightfieldNCols(e), v = t.coHeightFieldFlags(e);
          return new En(z, P, T, C, v);
        case nt.ConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), new fr(c, l);
        case nt.RoundConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), a = t.coRoundRadius(e), new yr(c, l, a);
        case nt.Cylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new xn(_, h);
        case nt.RoundCylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), a = t.coRoundRadius(e), new jn(_, h, a);
        case nt.Cone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new An(_, h);
        case nt.RoundCone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), a = t.coRoundRadius(e), new Pn(_, h, a);
        default:
          throw new Error("unknown shape type: " + r);
      }
    }
    castShape(t, e, r, n, a, c, l, _, h, p) {
      let w = g.intoRaw(t), b = F.intoRaw(e), f = g.intoRaw(r), C = g.intoRaw(a), T = F.intoRaw(c), z = g.intoRaw(l), P = this.intoRaw(), v = n.intoRaw(), S = Se.fromRaw(null, P.castShape(w, b, f, v, C, T, z, _, h, p));
      return w.free(), b.free(), f.free(), C.free(), T.free(), z.free(), P.free(), v.free(), S;
    }
    intersectsShape(t, e, r, n, a) {
      let c = g.intoRaw(t), l = F.intoRaw(e), _ = g.intoRaw(n), h = F.intoRaw(a), p = this.intoRaw(), w = r.intoRaw(), b = p.intersectsShape(c, l, w, _, h);
      return c.free(), l.free(), _.free(), h.free(), p.free(), w.free(), b;
    }
    contactShape(t, e, r, n, a, c) {
      let l = g.intoRaw(t), _ = F.intoRaw(e), h = g.intoRaw(n), p = F.intoRaw(a), w = this.intoRaw(), b = r.intoRaw(), f = ye.fromRaw(w.contactShape(l, _, b, h, p, c));
      return l.free(), _.free(), h.free(), p.free(), w.free(), b.free(), f;
    }
    containsPoint(t, e, r) {
      let n = g.intoRaw(t), a = F.intoRaw(e), c = g.intoRaw(r), l = this.intoRaw(), _ = l.containsPoint(n, a, c);
      return n.free(), a.free(), c.free(), l.free(), _;
    }
    projectPoint(t, e, r, n) {
      let a = g.intoRaw(t), c = F.intoRaw(e), l = g.intoRaw(r), _ = this.intoRaw(), h = qe.fromRaw(_.projectPoint(a, c, l, n));
      return a.free(), c.free(), l.free(), _.free(), h;
    }
    intersectsRay(t, e, r, n) {
      let a = g.intoRaw(e), c = F.intoRaw(r), l = g.intoRaw(t.origin), _ = g.intoRaw(t.dir), h = this.intoRaw(), p = h.intersectsRay(a, c, l, _, n);
      return a.free(), c.free(), l.free(), _.free(), h.free(), p;
    }
    castRay(t, e, r, n, a) {
      let c = g.intoRaw(e), l = F.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), p = this.intoRaw(), w = p.castRay(c, l, _, h, n, a);
      return c.free(), l.free(), _.free(), h.free(), p.free(), w;
    }
    castRayAndGetNormal(t, e, r, n, a) {
      let c = g.intoRaw(e), l = F.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), p = this.intoRaw(), w = Ue.fromRaw(p.castRayAndGetNormal(c, l, _, h, n, a));
      return c.free(), l.free(), _.free(), h.free(), p.free(), w;
    }
  }
  var et;
  (function(i) {
    i[i.Ball = 0] = "Ball", i[i.Cuboid = 1] = "Cuboid", i[i.Capsule = 2] = "Capsule", i[i.Segment = 3] = "Segment", i[i.Polyline = 4] = "Polyline", i[i.Triangle = 5] = "Triangle", i[i.TriMesh = 6] = "TriMesh", i[i.HeightField = 7] = "HeightField", i[i.ConvexPolyhedron = 9] = "ConvexPolyhedron", i[i.Cylinder = 10] = "Cylinder", i[i.Cone = 11] = "Cone", i[i.RoundCuboid = 12] = "RoundCuboid", i[i.RoundTriangle = 13] = "RoundTriangle", i[i.RoundCylinder = 14] = "RoundCylinder", i[i.RoundCone = 15] = "RoundCone", i[i.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", i[i.HalfSpace = 17] = "HalfSpace", i[i.Voxels = 18] = "Voxels";
  })(et || (et = {}));
  var ki;
  (function(i) {
    i[i.FIX_INTERNAL_EDGES = 1] = "FIX_INTERNAL_EDGES";
  })(ki || (ki = {}));
  var mr;
  (function(i) {
    i[i.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", i[i.ORIENTED = 8] = "ORIENTED", i[i.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", i[i.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", i[i.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", i[i.FIX_INTERNAL_EDGES = 144] = "FIX_INTERNAL_EDGES";
  })(mr || (mr = {}));
  class Fr extends it {
    constructor(t) {
      super(), this.type = et.Ball, this.radius = t;
    }
    intoRaw() {
      return D.ball(this.radius);
    }
  }
  class lb extends it {
    constructor(t) {
      super(), this.type = et.HalfSpace, this.normal = t;
    }
    intoRaw() {
      let t = g.intoRaw(this.normal), e = D.halfspace(t);
      return t.free(), e;
    }
  }
  class Re extends it {
    constructor(t, e, r) {
      super(), this.type = et.Cuboid, this.halfExtents = g.new(t, e, r);
    }
    intoRaw() {
      return D.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
    }
  }
  class mn extends it {
    constructor(t, e, r, n) {
      super(), this.type = et.RoundCuboid, this.halfExtents = g.new(t, e, r), this.borderRadius = n;
    }
    intoRaw() {
      return D.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
    }
  }
  class fn extends it {
    constructor(t, e) {
      super(), this.type = et.Capsule, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return D.capsule(this.halfHeight, this.radius);
    }
  }
  class yn extends it {
    constructor(t, e) {
      super(), this.type = et.Segment, this.a = t, this.b = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = D.segment(t, e);
      return t.free(), e.free(), r;
    }
  }
  class vn extends it {
    constructor(t, e, r) {
      super(), this.type = et.Triangle, this.a = t, this.b = e, this.c = r;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = D.triangle(t, e, r);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class Sn extends it {
    constructor(t, e, r, n) {
      super(), this.type = et.RoundTriangle, this.a = t, this.b = e, this.c = r, this.borderRadius = n;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = D.roundTriangle(t, e, r, this.borderRadius);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class Rn extends it {
    constructor(t, e) {
      super(), this.type = et.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
    }
    intoRaw() {
      return D.polyline(this.vertices, this.indices);
    }
  }
  class Cn extends it {
    constructor(t, e) {
      super(), this.type = et.Voxels, this.data = t, this.voxelSize = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.voxelSize), e;
      return this.data instanceof Int32Array ? e = D.voxels(t, this.data) : e = D.voxelsFromPoints(t, this.data), t.free(), e;
    }
  }
  let Lr = class extends it {
    constructor(t, e, r) {
      super(), this.type = et.TriMesh, this.vertices = t, this.indices = e, this.flags = r;
    }
    intoRaw() {
      return D.trimesh(this.vertices, this.indices, this.flags);
    }
  };
  class fr extends it {
    constructor(t, e) {
      super(), this.type = et.ConvexPolyhedron, this.vertices = t, this.indices = e;
    }
    intoRaw() {
      return this.indices ? D.convexMesh(this.vertices, this.indices) : D.convexHull(this.vertices);
    }
  }
  class yr extends it {
    constructor(t, e, r) {
      super(), this.type = et.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = r;
    }
    intoRaw() {
      return this.indices ? D.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : D.roundConvexHull(this.vertices, this.borderRadius);
    }
  }
  class En extends it {
    constructor(t, e, r, n, a) {
      super(), this.type = et.HeightField, this.nrows = t, this.ncols = e, this.heights = r, this.scale = n, this.flags = a;
    }
    intoRaw() {
      let t = g.intoRaw(this.scale), e = D.heightfield(this.nrows, this.ncols, this.heights, t, this.flags);
      return t.free(), e;
    }
  }
  class xn extends it {
    constructor(t, e) {
      super(), this.type = et.Cylinder, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return D.cylinder(this.halfHeight, this.radius);
    }
  }
  class jn extends it {
    constructor(t, e, r) {
      super(), this.type = et.RoundCylinder, this.borderRadius = r, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return D.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class An extends it {
    constructor(t, e) {
      super(), this.type = et.Cone, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return D.cone(this.halfHeight, this.radius);
    }
  }
  class Pn extends it {
    constructor(t, e, r) {
      super(), this.type = et.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = r;
    }
    intoRaw() {
      return D.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class _b {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Aa();
    }
    step(t, e, r, n, a, c, l, _, h, p, w, b) {
      let f = g.intoRaw(t);
      w ? this.raw.stepWithEvents(f, e.raw, r.raw, n.raw, a.raw, c.raw, l.raw, _.raw, h.raw, p.raw, w.raw, b, b ? b.filterContactPair : null, b ? b.filterIntersectionPair : null) : this.raw.step(f, e.raw, r.raw, n.raw, a.raw, c.raw, l.raw, _.raw, h.raw, p.raw), f.free();
    }
  }
  var Mi;
  (function(i) {
    i[i.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", i[i.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", i[i.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", i[i.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", i[i.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", i[i.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", i[i.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", i[i.ONLY_FIXED = 6] = "ONLY_FIXED";
  })(Mi || (Mi = {}));
  class db {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Dr();
    }
    update(t) {
      this.raw.update(t.raw);
    }
    castRay(t, e, r, n, a, c, l, _, h, p) {
      let w = g.intoRaw(r.origin), b = g.intoRaw(r.dir), f = Mr.fromRaw(e, this.raw.castRay(t.raw, e.raw, w, b, n, a, c, l, _, h, p));
      return w.free(), b.free(), f;
    }
    castRayAndGetNormal(t, e, r, n, a, c, l, _, h, p) {
      let w = g.intoRaw(r.origin), b = g.intoRaw(r.dir), f = De.fromRaw(e, this.raw.castRayAndGetNormal(t.raw, e.raw, w, b, n, a, c, l, _, h, p));
      return w.free(), b.free(), f;
    }
    intersectionsWithRay(t, e, r, n, a, c, l, _, h, p, w) {
      let b = g.intoRaw(r.origin), f = g.intoRaw(r.dir), C = (T) => c(De.fromRaw(e, T));
      this.raw.intersectionsWithRay(t.raw, e.raw, b, f, n, a, C, l, _, h, p, w), b.free(), f.free();
    }
    intersectionWithShape(t, e, r, n, a, c, l, _, h, p) {
      let w = g.intoRaw(r), b = F.intoRaw(n), f = a.intoRaw(), C = this.raw.intersectionWithShape(t.raw, e.raw, w, b, f, c, l, _, h, p);
      return w.free(), b.free(), f.free(), C;
    }
    projectPoint(t, e, r, n, a, c, l, _, h) {
      let p = g.intoRaw(r), w = Te.fromRaw(e, this.raw.projectPoint(t.raw, e.raw, p, n, a, c, l, _, h));
      return p.free(), w;
    }
    projectPointAndGetFeature(t, e, r, n, a, c, l, _) {
      let h = g.intoRaw(r), p = Te.fromRaw(e, this.raw.projectPointAndGetFeature(t.raw, e.raw, h, n, a, c, l, _));
      return h.free(), p;
    }
    intersectionsWithPoint(t, e, r, n, a, c, l, _, h) {
      let p = g.intoRaw(r);
      this.raw.intersectionsWithPoint(t.raw, e.raw, p, n, a, c, l, _, h), p.free();
    }
    castShape(t, e, r, n, a, c, l, _, h, p, w, b, f, C) {
      let T = g.intoRaw(r), z = F.intoRaw(n), P = g.intoRaw(a), v = c.intoRaw(), S = Je.fromRaw(e, this.raw.castShape(t.raw, e.raw, T, z, P, v, l, _, h, p, w, b, f, C));
      return T.free(), z.free(), P.free(), v.free(), S;
    }
    intersectionsWithShape(t, e, r, n, a, c, l, _, h, p, w) {
      let b = g.intoRaw(r), f = F.intoRaw(n), C = a.intoRaw();
      this.raw.intersectionsWithShape(t.raw, e.raw, b, f, C, c, l, _, h, p, w), b.free(), f.free(), C.free();
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      let n = g.intoRaw(t), a = g.intoRaw(e);
      this.raw.collidersWithAabbIntersectingAabb(n, a, r), n.free(), a.free();
    }
  }
  class Fi {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Ia();
    }
    serializeAll(t, e, r, n, a, c, l, _, h) {
      let p = g.intoRaw(t);
      const w = this.raw.serializeAll(p, e.raw, r.raw, n.raw, a.raw, c.raw, l.raw, _.raw, h.raw);
      return p.free(), w;
    }
    deserializeAll(t) {
      return Ke.fromRaw(this.raw.deserializeAll(t));
    }
  }
  class hb {
    constructor(t, e) {
      this.vertices = t, this.colors = e;
    }
  }
  class wb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    constructor(t) {
      this.raw = t || new Ea();
    }
    render(t, e, r, n, a, c, l) {
      this.raw.render(t.raw, e.raw, r.raw, n.raw, a.raw, c, e.castClosure(l)), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
  }
  class ub {
  }
  class pb {
    constructor(t, e, r, n, a) {
      this.params = e, this.bodies = r, this.colliders = n, this.queries = a, this.raw = new ja(t), this.rawCharacterCollision = new un(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
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
    computeColliderMovement(t, e, r, n, a) {
      let c = g.intoRaw(e);
      this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, t.handle, c, this._applyImpulsesToDynamicBodies, this._characterMass, r, n, this.colliders.castClosure(a)), c.free();
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
        return e = e ?? new ub(), e.translationDeltaApplied = g.fromRaw(r.translationDeltaApplied()), e.translationDeltaRemaining = g.fromRaw(r.translationDeltaRemaining()), e.toi = r.toi(), e.witness1 = g.fromRaw(r.worldWitness1()), e.witness2 = g.fromRaw(r.worldWitness2()), e.normal1 = g.fromRaw(r.worldNormal1()), e.normal2 = g.fromRaw(r.worldNormal2()), e.collider = this.colliders.get(r.handle()), e;
      } else return null;
    }
  }
  var Li;
  (function(i) {
    i[i.None = 0] = "None", i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ", i[i.AllLin = 7] = "AllLin", i[i.AllAng = 56] = "AllAng", i[i.All = 63] = "All";
  })(Li || (Li = {}));
  class gb {
    constructor(t, e, r, n, a, c) {
      this.params = t, this.bodies = e, this.raw = new Pa(r, n, a, c);
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
      let n = g.intoRaw(e), a = g.intoRaw(r);
      this.raw.apply_linear_correction(this.params.dt, this.bodies.raw, t.handle, n, a), n.free(), a.free();
    }
    applyAngularCorrection(t, e, r) {
      let n = F.intoRaw(e), a = g.intoRaw(r);
      this.raw.apply_angular_correction(this.params.dt, this.bodies.raw, t.handle, n, a), n.free(), a.free();
    }
    linearCorrection(t, e, r) {
      let n = g.intoRaw(e), a = g.intoRaw(r), c = this.raw.linear_correction(this.params.dt, this.bodies.raw, t.handle, n, a);
      return n.free(), a.free(), g.fromRaw(c);
    }
    angularCorrection(t, e, r) {
      let n = F.intoRaw(e), a = g.intoRaw(r), c = this.raw.angular_correction(this.params.dt, this.bodies.raw, t.handle, n, a);
      return n.free(), a.free(), g.fromRaw(c);
    }
  }
  class bb {
    constructor(t, e, r, n) {
      this.raw = new xa(t.handle), this.bodies = e, this.colliders = r, this.queries = n, this._chassis = t;
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    updateVehicle(t, e, r, n) {
      this.raw.update_vehicle(t, this.bodies.raw, this.colliders.raw, this.queries.raw, e, r, this.colliders.castClosure(n));
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
    addWheel(t, e, r, n, a) {
      let c = g.intoRaw(t), l = g.intoRaw(e), _ = g.intoRaw(r);
      this.raw.add_wheel(c, l, _, n, a), c.free(), l.free(), _.free();
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
  class Ke {
    free() {
      this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.pidControllers.forEach((t) => t.free()), this.vehicleControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.pidControllers = void 0, this.vehicleControllers = void 0;
    }
    constructor(t, e, r, n, a, c, l, _, h, p, w, b, f, C) {
      this.gravity = t, this.integrationParameters = new Vg(e), this.islands = new sb(r), this.broadPhase = new ab(n), this.narrowPhase = new ob(a), this.bodies = new Wg(c), this.colliders = new yb(l), this.impulseJoints = new Zg(_), this.multibodyJoints = new ib(h), this.ccdSolver = new nb(p), this.queryPipeline = new db(w), this.physicsPipeline = new _b(b), this.serializationPipeline = new Fi(f), this.debugRenderPipeline = new wb(C), this.characterControllers = /* @__PURE__ */ new Set(), this.pidControllers = /* @__PURE__ */ new Set(), this.vehicleControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    static fromRaw(t) {
      return t ? new Ke(g.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
      return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(t) {
      return new Fi().deserializeAll(t);
    }
    debugRender(t, e) {
      return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase, t, e), new hb(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
    }
    step(t, e) {
      this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, t, e), this.queryPipeline.update(this.colliders);
    }
    propagateModifiedBodyPositionsToColliders() {
      this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
    }
    updateSceneQueries() {
      this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.colliders);
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
    get numAdditionalFrictionIterations() {
      return this.integrationParameters.numAdditionalFrictionIterations;
    }
    set numAdditionalFrictionIterations(t) {
      this.integrationParameters.numAdditionalFrictionIterations = t;
    }
    get numInternalPgsIterations() {
      return this.integrationParameters.numInternalPgsIterations;
    }
    set numInternalPgsIterations(t) {
      this.integrationParameters.numInternalPgsIterations = t;
    }
    switchToStandardPgsSolver() {
      this.integrationParameters.switchToStandardPgsSolver();
    }
    switchToSmallStepsPgsSolver() {
      this.integrationParameters.switchToSmallStepsPgsSolver();
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
      this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
    createRigidBody(t) {
      return this.bodies.createRigidBody(this.colliders, t);
    }
    createCharacterController(t) {
      let e = new pb(t, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
      return this.characterControllers.add(e), e;
    }
    removeCharacterController(t) {
      this.characterControllers.delete(t), t.free();
    }
    createPidController(t, e, r, n) {
      let a = new gb(this.integrationParameters, this.bodies, t, e, r, n);
      return this.pidControllers.add(a), a;
    }
    removePidController(t) {
      this.pidControllers.delete(t), t.free();
    }
    createVehicleController(t) {
      let e = new bb(t, this.bodies, this.colliders, this.queryPipeline);
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
    castRay(t, e, r, n, a, c, l, _) {
      return this.queryPipeline.castRay(this.bodies, this.colliders, t, e, r, n, a, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    castRayAndGetNormal(t, e, r, n, a, c, l, _) {
      return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, t, e, r, n, a, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    intersectionsWithRay(t, e, r, n, a, c, l, _, h) {
      this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, t, e, r, n, a, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
    }
    intersectionWithShape(t, e, r, n, a, c, l, _) {
      let h = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, t, e, r, n, a, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
      return h != null ? this.colliders.get(h) : null;
    }
    projectPoint(t, e, r, n, a, c, l) {
      return this.queryPipeline.projectPoint(this.bodies, this.colliders, t, e, r, n, a ? a.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    projectPointAndGetFeature(t, e, r, n, a, c) {
      return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, t, e, r, n ? n.handle : null, a ? a.handle : null, this.colliders.castClosure(c));
    }
    intersectionsWithPoint(t, e, r, n, a, c, l) {
      this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, t, this.colliders.castClosure(e), r, n, a ? a.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    castShape(t, e, r, n, a, c, l, _, h, p, w, b) {
      return this.queryPipeline.castShape(this.bodies, this.colliders, t, e, r, n, a, c, l, _, h, p ? p.handle : null, w ? w.handle : null, this.colliders.castClosure(b));
    }
    intersectionsWithShape(t, e, r, n, a, c, l, _, h) {
      this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, t, e, r, this.colliders.castClosure(n), a, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      this.queryPipeline.collidersWithAabbIntersectingAabb(t, e, this.colliders.castClosure(r));
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
  }
  var ke;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", i[i.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
  })(ke || (ke = {}));
  class mb {
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
  class fb {
    constructor(t, e) {
      this.raw = e || new pn(t);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(t) {
      this.raw.drainCollisionEvents(t);
    }
    drainContactForceEvents(t) {
      let e = new mb();
      this.raw.drainContactForceEvents((r) => {
        e.raw = r, t(e), e.free();
      });
    }
    clear() {
      this.raw.clear();
    }
  }
  var vr;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", i[i.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
  })(vr || (vr = {}));
  var Bi;
  (function(i) {
    i[i.EMPTY = 0] = "EMPTY", i[i.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
  })(Bi || (Bi = {}));
  var Me;
  (function(i) {
    i[i.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", i[i.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", i[i.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", i[i.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", i[i.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", i[i.FIXED_FIXED = 32] = "FIXED_FIXED", i[i.DEFAULT = 15] = "DEFAULT", i[i.ALL = 60943] = "ALL";
  })(Me || (Me = {}));
  class Ni {
    constructor(t, e, r, n) {
      this.colliderSet = t, this.handle = e, this._parent = r, this._shape = n;
    }
    finalizeDeserialization(t) {
      this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
      this._shape || (this._shape = it.fromRaw(this.colliderSet.raw, this.handle));
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
    rotation() {
      return F.fromRaw(this.colliderSet.raw.coRotation(this.handle));
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
      let a = g.intoRaw(e), c = g.intoRaw(r), l = F.intoRaw(n);
      this.colliderSet.raw.coSetMassProperties(this.handle, t, a, c, l), a.free(), c.free(), l.free();
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
    propagateVoxelChange(t, e, r, n, a, c, l) {
      this.colliderSet.raw.coPropagateVoxelChange(this.handle, t.handle, e, r, n, a, c, l), this._shape = null;
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
      let r = g.intoRaw(t), n = qe.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, r, e));
      return r.free(), n;
    }
    intersectsRay(t, e) {
      let r = g.intoRaw(t.origin), n = g.intoRaw(t.dir), a = this.colliderSet.raw.coIntersectsRay(this.handle, r, n, e);
      return r.free(), n.free(), a;
    }
    castShape(t, e, r, n, a, c, l, _) {
      let h = g.intoRaw(t), p = g.intoRaw(r), w = F.intoRaw(n), b = g.intoRaw(a), f = e.intoRaw(), C = Se.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, h, f, p, w, b, c, l, _));
      return h.free(), p.free(), w.free(), b.free(), f.free(), C;
    }
    castCollider(t, e, r, n, a, c) {
      let l = g.intoRaw(t), _ = g.intoRaw(r), h = Je.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, l, e.handle, _, n, a, c));
      return l.free(), _.free(), h;
    }
    intersectsShape(t, e, r) {
      let n = g.intoRaw(e), a = F.intoRaw(r), c = t.intoRaw(), l = this.colliderSet.raw.coIntersectsShape(this.handle, c, n, a);
      return n.free(), a.free(), c.free(), l;
    }
    contactShape(t, e, r, n) {
      let a = g.intoRaw(e), c = F.intoRaw(r), l = t.intoRaw(), _ = ye.fromRaw(this.colliderSet.raw.coContactShape(this.handle, l, a, c, n));
      return a.free(), c.free(), l.free(), _;
    }
    contactCollider(t, e) {
      return ye.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
    }
    castRay(t, e, r) {
      let n = g.intoRaw(t.origin), a = g.intoRaw(t.dir), c = this.colliderSet.raw.coCastRay(this.handle, n, a, e, r);
      return n.free(), a.free(), c;
    }
    castRayAndGetNormal(t, e, r) {
      let n = g.intoRaw(t.origin), a = g.intoRaw(t.dir), c = Ue.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, n, a, e, r));
      return n.free(), a.free(), c;
    }
  }
  var Zt;
  (function(i) {
    i[i.Density = 0] = "Density", i[i.Mass = 1] = "Mass", i[i.MassProps = 2] = "MassProps";
  })(Zt || (Zt = {}));
  class Q {
    constructor(t) {
      this.enabled = true, this.shape = t, this.massPropsMode = Zt.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = F.identity(), this.translation = g.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = ze.Average, this.restitutionCombineRule = ze.Average, this.activeCollisionTypes = Me.DEFAULT, this.activeEvents = ke.NONE, this.activeHooks = vr.NONE, this.mass = 0, this.centerOfMass = g.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = F.identity();
    }
    static ball(t) {
      const e = new Fr(t);
      return new Q(e);
    }
    static capsule(t, e) {
      const r = new fn(t, e);
      return new Q(r);
    }
    static segment(t, e) {
      const r = new yn(t, e);
      return new Q(r);
    }
    static triangle(t, e, r) {
      const n = new vn(t, e, r);
      return new Q(n);
    }
    static roundTriangle(t, e, r, n) {
      const a = new Sn(t, e, r, n);
      return new Q(a);
    }
    static polyline(t, e) {
      const r = new Rn(t, e);
      return new Q(r);
    }
    static voxels(t, e) {
      const r = new Cn(t, e);
      return new Q(r);
    }
    static trimesh(t, e, r) {
      const n = new Lr(t, e, r);
      return new Q(n);
    }
    static cuboid(t, e, r) {
      const n = new Re(t, e, r);
      return new Q(n);
    }
    static roundCuboid(t, e, r, n) {
      const a = new mn(t, e, r, n);
      return new Q(a);
    }
    static heightfield(t, e, r, n, a) {
      const c = new En(t, e, r, n, a);
      return new Q(c);
    }
    static cylinder(t, e) {
      const r = new xn(t, e);
      return new Q(r);
    }
    static roundCylinder(t, e, r) {
      const n = new jn(t, e, r);
      return new Q(n);
    }
    static cone(t, e) {
      const r = new An(t, e);
      return new Q(r);
    }
    static roundCone(t, e, r) {
      const n = new Pn(t, e, r);
      return new Q(n);
    }
    static convexHull(t) {
      const e = new fr(t, null);
      return new Q(e);
    }
    static convexMesh(t, e) {
      const r = new fr(t, e);
      return new Q(r);
    }
    static roundConvexHull(t, e) {
      const r = new yr(t, null, e);
      return new Q(r);
    }
    static roundConvexMesh(t, e, r) {
      const n = new yr(t, e, r);
      return new Q(n);
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
      return F.copy(this.rotation, t), this;
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
      return this.massPropsMode = Zt.Density, this.density = t, this;
    }
    setMass(t) {
      return this.massPropsMode = Zt.Mass, this.mass = t, this;
    }
    setMassProperties(t, e, r, n) {
      return this.massPropsMode = Zt.MassProps, this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), F.copy(this.angularInertiaLocalFrame, n), this;
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
  class yb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new $(), this.map = new Ve(), t && t.forEachColliderHandle((e) => {
        this.map.set(e, new Ni(this, e, null));
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
      let a = e.shape.intoRaw(), c = g.intoRaw(e.translation), l = F.intoRaw(e.rotation), _ = g.intoRaw(e.centerOfMass), h = g.intoRaw(e.principalAngularInertia), p = F.intoRaw(e.angularInertiaLocalFrame), w = this.raw.createCollider(e.enabled, a, c, l, e.massPropsMode, e.mass, _, h, p, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, e.contactSkin, n, n ? r : 0, t.raw);
      a.free(), c.free(), l.free(), _.free(), h.free(), p.free();
      let b = n ? t.get(r) : null, f = new Ni(this, w, b, e.shape);
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
  class vb extends Fn {
    constructor(t) {
      super(), this.world = t, this.material = new Ln({
        color: 16777215,
        vertexColors: true
      }), this.geometry = new Bn(), this.frustumCulled = false;
    }
    update() {
      this.visible == true && this.parent != null && (this.buffers = this.world.debugRender(), this.geometry.setAttribute("position", new Br(this.buffers.vertices, 3)), this.geometry.setAttribute("color", new Br(this.buffers.colors, 4)));
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
  class Sb {
    constructor() {
      this.world = new Ke({
        x: 0,
        y: -9.81 * 8,
        z: 0
      }), this.world.numSolverIterations = 4, this.eventQueue = new fb(true), this.debugger = new vb(this.world), this.entities = /* @__PURE__ */ new Map(), this.jointQueue = [];
    }
    update(t) {
      this.world.step(this.eventQueue), this.debugger.update(), this.entities.forEach(function(e) {
        e.update(t);
      }), this.eventQueue.drainCollisionEvents(function(e, r, n) {
        const a = this.getEntityFromColliderHandle(e), c = this.getEntityFromColliderHandle(r), l = {
          handle: e,
          pair: c,
          started: n,
          type: "collision"
        }, _ = {
          handle: r,
          pair: a,
          started: n,
          type: "collision"
        };
        a.dispatchEvent(l), c.dispatchEvent(_);
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
        const a = e[n], c = this.world.impulseJoints.get(a), l = this.getEntityById(c.body2().userData.id);
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
      const r = new dt(), n = new dt().copy(t.rigidBodyDesc.translation).sub(e.rigidBodyDesc.translation), a = new Gt().copy(t.rigidBodyDesc.rotation), c = new Gt().copy(e.rigidBodyDesc.rotation);
      r.applyQuaternion(a.conjugate()), n.applyQuaternion(c.conjugate());
      const l = At.fixed(r, a, n, c);
      return this.world.createImpulseJoint(l, t.rigidBody, e.rigidBody, true);
    }
    removeJoint(t) {
      this.world.removeImpulseJoint(t, true);
    }
    createParentJoint(t) {
      let e = t.getParentId(), r = this.getEntityById(e);
      e && (r ? this.createJoint(r, t) : this.jointQueue.push(t.id));
      for (let n = this.jointQueue.length - 1; n >= 0; n--) {
        let a = this.getEntityById(this.jointQueue[n]);
        a && (r = this.getEntityById(a.getParentId()), r && (this.createJoint(r, a), this.jointQueue.splice(n, 1)));
      }
    }
    removeJoints(t) {
      const e = [];
      this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(t.rigidBody.handle, function(r) {
        e.push(r);
      });
      for (let r = e.length - 1; r >= 0; r--) {
        const n = e[r], a = this.world.impulseJoints.get(n), c = this.getEntityById(a.body1().userData.id), l = this.getEntityById(a.body2().userData.id);
        t.id == c.id && l.rigidBodyDesc.userData.parentId != null && (this.jointQueue.push(l.id), l.setParentId(null)), this.removeJoint(a);
      }
    }
    removeParentJoint(t) {
      const e = [], r = this.getEntityById(t.getParentId());
      if (r) {
        this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(r.rigidBody.handle, function(n) {
          e.push(n);
        });
        for (let n = e.length - 1; n >= 0; n--) {
          const a = e[n], c = this.world.impulseJoints.get(a), l = this.getEntityById(c.body2().userData.id);
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
  class Rb {
    constructor(t) {
      this.interval = new rs(), this.physics = new Sb(), this.graphics, this.assets = new is(this.onLoad.bind(this, t));
    }
    init(t) {
      this.graphics = new ns(t), this.graphics.scene.add(this.physics.debugger), this.physics.debugger.disable(), this.assets.load({
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
  const Cb = {
    key: 0,
    class: "modal"
  }, Eb = {
    class: "container"
  }, xb = {
    class: "content"
  }, jb = {
    key: 0,
    class: "title"
  }, Ab = [
    "innerHTML"
  ], Pb = {
    class: "inputs"
  }, Ib = [
    "id",
    "type",
    "value",
    "min",
    "max",
    "step",
    "accept"
  ], zb = {
    __name: "Modal",
    setup(i) {
      var t = Y(""), e = Y(""), r = Y([]), n = Y(false);
      function a() {
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
      return Ot(function() {
        a();
      }), Sr(function() {
        c();
      }), (b, f) => (W(), Rr(Fe, {
        name: "fade-modal"
      }, {
        default: te(() => [
          pt(n) == true ? (W(), U("div", Cb, [
            j("div", {
              class: "background",
              onClick: _
            }),
            j("div", Eb, [
              j("div", xb, [
                pt(t) != "" ? (W(), U("h1", jb, ee(pt(t)), 1)) : Wt("", true),
                j("p", {
                  class: "text",
                  innerHTML: pt(e)
                }, null, 8, Ab),
                j("div", Pb, [
                  (W(true), U(re, null, pe(pt(r), (C, T) => (W(), U("input", Nn({
                    class: C.class,
                    id: "modal-" + C.type + "-" + T,
                    type: C.type,
                    value: C.value,
                    min: C.min,
                    max: C.max,
                    step: C.step,
                    accept: C.accept,
                    style: C.style
                  }, {
                    [On(C.event)]: (z) => h(C.callback, z)
                  }), null, 16, Ib))), 256))
                ]),
                j("a", {
                  class: "close",
                  onClick: _
                }, f[0] || (f[0] = [
                  j("span", null, "x", -1)
                ]))
              ])
            ])
          ])) : Wt("", true)
        ]),
        _: 1
      }));
    }
  }, Tb = Jt(zb, [
    [
      "__scopeId",
      "data-v-7c21f54e"
    ]
  ]), Db = {
    __name: "App",
    setup(i) {
      const t = Y(false), e = Y(), r = window.game = new Rb(a), n = ua();
      function a() {
        t.value = true;
      }
      return Ot(function() {
        r.init(e.value);
      }), (c, l) => {
        const _ = Hn("router-view");
        return W(), U(re, null, [
          j("canvas", {
            ref_key: "canvas",
            ref: e
          }, null, 512),
          t.value ? (W(), U("div", {
            key: 0,
            class: Bt([
              "page",
              pt(n).name
            ])
          }, [
            Rt(_, null, {
              default: te(({ Component: h }) => [
                Rt(Fe, {
                  name: "fade"
                }, {
                  default: te(() => [
                    (W(), Rr(Gn(h), {
                      game: pt(r)
                    }, null, 8, [
                      "game"
                    ]))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            })
          ], 2)) : Wt("", true),
          Rt(Tb),
          Rt(ss)
        ], 64);
      };
    }
  }, kb = Jt(Db, [
    [
      "__scopeId",
      "data-v-acc4bc17"
    ]
  ]), Mb = {
    __name: "PageHome",
    setup(i) {
      var t = Y("Home Page");
      return Ot(function() {
      }), (e, r) => (W(), U("h1", null, ee(pt(t)), 1));
    }
  }, Fb = {
    __name: "PagePlay",
    setup(i) {
      var t = Y("Play Page");
      return Ot(function() {
      }), (e, r) => (W(), U("h1", null, ee(pt(t)), 1));
    }
  };
  class Xe extends Wn {
    constructor(t) {
      super(), this.name = t.name || "", this.type = t.type || "entity", this.id = t.id || Vn.generateUUID(), this.isEntity = true, this.object, this.objectDesc, this.rigidBody, this.rigidBodyDesc, this.collidersDesc = [], this.snapshot = {
        position_1: new dt(),
        position_2: new dt(),
        rotation_1: new Gt(),
        rotation_2: new Gt()
      }, this.tweens = new as(), this.forceDirection = new dt(), this.forceAcceleration = 1, this.forceSpeedMax = 1 / 0, this.setObjectDesc(t), this.setRigidBodyDesc(t), this.addColliderDesc(t), this.onAdded = this.onAdded.bind(this), this.addEventListener("added", this.onAdded);
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
      }, t), this.objectDesc = new Nr(), this.objectDesc.scale.copy(t.scale);
    }
    setObject(t) {
      this.object = t;
    }
    createObject3D(t) {
      const e = new Nr();
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
      }, t), this.rigidBodyDesc = new St(isNaN(t.status) ? mt[t.status] : t.status), this.rigidBodyDesc.enabledRotations(t.enabledRotations.x, t.enabledRotations.y, t.enabledRotations.z), this.rigidBodyDesc.enabledTranslations(t.enabledTranslations.x, t.enabledTranslations.y, t.enabledTranslations.z), this.rigidBodyDesc.setAngularDamping(t.angularDamping), this.rigidBodyDesc.setCcdEnabled(t.ccd), this.rigidBodyDesc.setEnabled(t.isEnabled), this.rigidBodyDesc.setLinearDamping(t.linearDamping), this.rigidBodyDesc.setRotation(t.rotation), this.rigidBodyDesc.setSleeping(t.sleeping), this.rigidBodyDesc.setSoftCcdPrediction(t.softCcdPrediction), this.rigidBodyDesc.setTranslation(t.position.x, t.position.y, t.position.z), this.rigidBodyDesc.setUserData({
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
        const r = new Q(t.shape);
        r.setActiveCollisionTypes(isNaN(t.activeCollisionTypes) ? Me[t.activeCollisionTypes] : t.activeCollisionTypes), r.setActiveEvents(isNaN(t.activeEvents) ? ke[t.activeEvents] : t.activeEvents), r.setCollisionGroups(t.collisionGroups), r.setContactForceEventThreshold(t.contactForceEventThreshold), r.setMass(t.mass), r.setDensity(t.density), r.setFriction(t.friction), r.setRestitution(t.restitution), r.setSensor(t.isSensor), r.setSolverGroups(t.solverGroups), r.setTranslation(t.translation.x, t.translation.y, t.translation.z), r.events = t.events, this.collidersDesc.push(r);
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
      ct.copy(this.getLinearVelocity()), ct.applyAxisAngle(e, -r), ct.multiply(t), ct.applyAxisAngle(e, r), this.setLinearVelocity(ct, true);
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
      t = ct.copy(t), t.applyAxisAngle({
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
        ct.copy(this.getLinearVelocity());
        const t = ct.dot(this.forceDirection), e = t + this.forceAcceleration, n = Math.max(t, Math.min(e, this.forceSpeedMax)) - t;
        ct.x += this.forceDirection.x * n, ct.y += this.forceDirection.y * n, ct.z += this.forceDirection.z * n, this.setLinearVelocity(ct);
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
      const r = ct.copy(this.getLinearVelocity());
      let n = 1;
      r.applyAxisAngle({
        x: 0,
        y: 0,
        z: 1
      }, -e), n *= -Math.sign(Math.round(r.x)), t = ct.copy(t), t.multiplyScalar(n), this.setAngularVelocity(t);
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
      return typeof t.easing == "string" && (t.easing = t.easing.split(".").reduce((r, n) => r && r[n] || null, os)), new cs(t.object, this.tweens).to(t.to, t.duration).dynamic(t.dynamic).easing(t.easing).interpolation(t.interpolation).onStart(t.onStart).onUpdate(t.onUpdate).onComplete(t.onComplete);
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
          let a = n;
          a && (typeof n == "object" && (a = this[n.name]), a(Object.assign(t, n)));
        } catch (a) {
          console.error(a);
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
      return this.rigidBody == null ? 0 : ct.copy(this.getLinearVelocity()).length();
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
  let ct = new dt(), ht = class extends Xe {
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
      }, t), t.shape = new Re(t.scale.x / 2, t.scale.y / 2, t.scale.z / 2), super(t), this.isCube = true, this.type = "cube", this.model = t.model, this.model.isObject3D == null) {
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
      var e = new qn(1, 1, 1), r = new Ji({
        color: t.color
      });
      const n = new Ki(e, r);
      return n.receiveShadow = true, n.castShadow = true, n;
    }
    setModel(t) {
      this.model = t;
    }
    setScale(t) {
      for (var e = new dt().copy(t), r = e.clone(), n = 0; n < this.rigidBody.numColliders(); n++) {
        var a = this.rigidBody.collider(n), c = this.collidersDesc[n], l = new dt().copy(c.shape.halfExtents), _ = l.clone().multiplyScalar(2), h = new dt().copy(c.translation);
        n == 0 && r.divide(_), a.setHalfExtents(l.multiply(r)), a.setTranslationWrtParent(h.multiply(r));
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
  class In extends Xe {
    constructor(t) {
      t = Object.assign({
        status: 1
      }, t), super(t);
    }
  }
  class Lb extends ht {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        collisionGroups: 0,
        isSensor: true,
        status: 1
      }, t), super(t), this.lightType = t.lightType, this.model = Yi.create(t.lightType, t), this.type = "light";
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
  class Bb extends Xe {
    static model = {
      name: ""
    };
    constructor(t = {}) {
      if (t = Object.assign({
        color: "#ffffff",
        heightSegments: 32,
        radius: 0.5,
        widthSegments: 32
      }, t), t.shape = new Fr(t.radius), super(t), this.isSphere = true, this.type = "sphere", this.model = t.model, this.model.isObject3D == null) {
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
      const e = new Un(t.radius, t.widthSegments, t.heightSegments), r = new Ji({
        color: t.color
      }), n = new Ki(e, r);
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
  class Nb extends Xe {
    constructor(t) {
      t = Object.assign({
        indices: new Uint16Array(),
        status: 1,
        vertices: new Float32Array()
      }, t);
      let e, r = [];
      t.model ? (t.model.traverse(function(n) {
        n.isMesh && (e = n.geometry, e.rotateX(n.rotation.x), e.rotateY(n.rotation.y), e.rotateZ(n.rotation.z), e.scale(n.scale.x, n.scale.y, n.scale.z), e.translate(n.position.x, n.position.y, n.position.z), r.push(e));
      }), e = Jn(r), t.vertices = e.attributes.position.array, t.indices = e.index.array, t.shape = new Lr(t.vertices, t.indices, mr.FIX_INTERNAL_EDGES)) : console.error("Error: TriMesh missing model."), super(t), this.isTriMesh = true, this.type = "trimesh", this.model = t.model, this.onTriMeshAdded = this.onTriMeshAdded.bind(this), this.addEventListener("added", this.onTriMeshAdded);
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
  let Ob = class zn {
    static Cube = ht;
    static Empty = In;
    static Light = Lb;
    static Sphere = Bb;
    static TriMesh = Nb;
    static create(t) {
      return new this[t.className](t);
    }
    static getClassNameByType(t) {
      return Object.keys({
        ...this,
        ...zn
      }).find((n) => n.toLowerCase() == t);
    }
    static getPropertyByClassName(t, e) {
      const r = this[e];
      if (r) return r[t];
    }
  };
  class Hb extends ht {
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
        shape: new Re(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.4),
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
  class Gb extends ht {
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
  class Wb extends ht {
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
  class Vb extends ht {
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
  class qb extends ht {
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
      var r = new dt(1, 0, 0), n = new Gt().copy(e.rigidBody.rotation()), a = new Cr().setFromQuaternion(n), c = a.z;
      r.x = Math.cos(c), r.y = Math.sin(c), t.setForce(r, 0.5, 14);
    }
  }
  class Ub extends ht {
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
  class Jb extends ht {
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
  class Kb extends ht {
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
      var r = new dt().copy(game.physics.world.gravity), n = r.length(), a = new Gt().copy(e.rigidBody.rotation()), c = new Cr().setFromQuaternion(a), l = -(Math.PI / 2 - c.z);
      game.physics.world.gravity.x = n * Math.cos(l), game.physics.world.gravity.y = n * Math.sin(l), t.dispatchEvent({
        type: "setgravity",
        gravity: r,
        value: l
      });
    }
  }
  class Tn {
    constructor() {
    }
    static create(t = "PerspectiveCamera", e) {
      var r, n, a = window.innerWidth, c = window.innerHeight, l = a / c;
      return e = Object.assign({
        far: 100,
        fov: 45,
        near: 0.05,
        zoom: 1
      }, e), t == "PerspectiveCamera" ? r = new Kn(e.fov, l, e.near, e.far) : t == "OrthographicCamera" && (r = new Xn(-l, l, 1, -1, e.near, e.far)), r.fov = e.fov, r.zoom = e.zoom, r.updateProjectionMatrix(), e.helper == true && (n = new $n(r), r.addEventListener("added", function(_) {
        r.parent.add(n);
      }), r.addEventListener("removed", function(_) {
        n.removeFromParent();
      })), r;
    }
  }
  class Xb extends ht {
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
      }, t), super(t), this.type = "player", this.keys = {}, this.pointer = {}, this.jumpCount = 0, this.mode = "jump", this.light = Yi.create("PointLight", {
        color: "#dc265a",
        intensity: Math.PI * 10
      }), this.camera = Tn.create("PerspectiveCamera"), this.cameraOffset = new dt(0, 0, 20), this.onPlayerAdded = this.onPlayerAdded.bind(this), this.addEventListener("added", this.onPlayerAdded);
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
        const e = this.rigidBody.mass(), r = new dt(0, 30 * e, 0), n = game.physics.world.gravity, a = Math.atan2(n.y, n.x) + Math.PI / 2;
        this.setAngularVelocityAtAngle({
          x: 0,
          y: 0,
          z: 8
        }, a), this.applyVelocityAtAxisAngle({
          x: 1,
          y: 0,
          z: 1
        }, {
          x: 0,
          y: 0,
          z: 1
        }, a), this.applyImpulseAtAngle(r, a), this.jumpCount--;
      }
    }
    updateControls() {
      if (this.mode == "control") {
        let t = 0, e = game.physics.world.gravity, r = Math.atan2(e.y, e.x) + Math.PI / 2;
        this.keys.KeyA == true ? t = -1 : this.keys.KeyD == true ? t = 1 : this.keys.ArrowLeft == true ? t = -1 : this.keys.ArrowRight == true && (t = 1), dr.copy({
          x: t,
          y: 0,
          z: 0
        }), dr.applyAxisAngle({
          x: 0,
          y: 0,
          z: 1
        }, r), this.setForce(dr, 2, 14);
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
  let dr = new dt();
  class $b extends In {
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
  class Yb extends ht {
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
  class Zb extends ht {
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
      var r = e.rigidBody.collider(0), n = new dt().copy(r.halfExtents()).multiplyScalar(2);
      t.setScale(n);
    }
  }
  class Qb extends ht {
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
        shape: new Re(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.25),
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
  class tm extends ht {
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
  class Oi extends Ob {
    static Bounce = Hb;
    static Checkpoint = Gb;
    static Control = Wb;
    static Cube = Vb;
    static Direction = qb;
    static Finish = Ub;
    static Grapple = Jb;
    static Gravity = Kb;
    static Player = Xb;
    static Prop = $b;
    static Reset = Yb;
    static Resize = Zb;
    static Spike = Qb;
    static Tip = tm;
    static create(t) {
      return t.className == null && (t.className = super.getClassNameByType(t.type)), t.model == null && (t.model = super.getPropertyByClassName("model", t.className)), t.model && game.assets.get(t.model.name) && (t.model = game.assets.duplicate(t.model.name)), super.create(t);
    }
  }
  class em {
    constructor(t, e) {
      this.execute = t, this.undo = e;
    }
  }
  class rm {
    constructor() {
      this.commands = [], this.current = -1;
    }
    add(t, e) {
      const r = new em(t, e);
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
  const im = {
    class: "panel"
  }, nm = {
    class: "actions"
  }, sm = {
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
      return Ot(function() {
      }), (n, a) => (W(), U("div", im, [
        j("div", nm, [
          j("button", {
            class: Bt([
              "action",
              {
                selected: i.mode.type == "select"
              }
            ]),
            onClick: a[0] || (a[0] = (c) => r("select")),
            title: "Select"
          }, a[3] || (a[3] = [
            j("span", {
              class: "material-symbols-rounded"
            }, "arrow_selector_tool", -1)
          ]), 2),
          j("button", {
            class: Bt([
              "action",
              {
                selected: i.mode.type == "add"
              }
            ]),
            onClick: a[1] || (a[1] = (c) => r("add")),
            title: "Add"
          }, a[4] || (a[4] = [
            j("span", {
              class: "material-symbols-rounded"
            }, "dashboard_customize", -1)
          ]), 2),
          j("button", {
            class: Bt([
              "action",
              {
                selected: i.mode.type == "move"
              }
            ]),
            onClick: a[2] || (a[2] = (c) => r("move")),
            title: "Move camera"
          }, a[5] || (a[5] = [
            j("span", {
              class: "material-symbols-rounded"
            }, "back_hand", -1)
          ]), 2)
        ])
      ]));
    }
  }, am = Jt(sm, [
    [
      "__scopeId",
      "data-v-59459b72"
    ]
  ]), om = {
    class: "panel"
  }, cm = {
    class: "prefabs"
  }, lm = [
    "title",
    "onClick"
  ], _m = [
    "src"
  ], dm = {
    __name: "PanelPrefabs",
    props: {
      game: Object,
      mode: Object
    },
    emits: [
      "addEntity"
    ],
    setup(i, { emit: t }) {
      const e = t, r = i, n = Y({}), a = Y(false), c = _t(() => _()), l = _t((w) => (r.mode.type == "add" ? a.value = !w : a.value = false, a.value));
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
        a.value = false;
      }
      return Ot(async () => {
        n.value = r.game.assets.get("prefabs");
      }), (w, b) => Xi((W(), U("div", om, [
        b[0] || (b[0] = j("div", {
          class: "header"
        }, [
          j("div", {
            class: "title"
          }, "Add")
        ], -1)),
        j("div", cm, [
          (W(true), U(re, null, pe(c.value, (f) => (W(), U("button", {
            class: "prefab",
            title: f.className,
            onClick: (C) => h(C, f)
          }, [
            j("img", {
              src: f.thumbnail
            }, null, 8, _m)
          ], 8, lm))), 256))
        ]),
        j("button", {
          class: "close",
          onClick: p
        }, "x")
      ], 512)), [
        [
          $i,
          l.value
        ]
      ]);
    }
  }, hm = Jt(dm, [
    [
      "__scopeId",
      "data-v-b0bcae3d"
    ]
  ]), wm = {
    class: "panel"
  }, um = {
    class: "header"
  }, pm = {
    class: "actions"
  }, gm = [
    "disabled"
  ], bm = [
    "disabled"
  ], mm = [
    "onClick",
    "onContextmenu",
    "onDragstart",
    "onDragover",
    "onDragend",
    "onDrop"
  ], fm = [
    "onDblclick"
  ], ym = [
    "id",
    "value",
    "onChange"
  ], vm = [
    "onClick"
  ], Sm = {
    class: "row"
  }, Rm = [
    "value",
    "onChange"
  ], Cm = [
    "value",
    "onChange"
  ], Em = [
    "value",
    "onChange"
  ], xm = {
    class: "row"
  }, jm = [
    "value",
    "onChange"
  ], Am = [
    "value",
    "onChange"
  ], Pm = [
    "value",
    "onChange"
  ], Im = {
    class: "row"
  }, zm = [
    "value",
    "onChange"
  ], Tm = [
    "value",
    "onChange"
  ], Dm = [
    "value",
    "onChange"
  ], km = {
    class: "row"
  }, Mm = [
    "onChange"
  ], Fm = {
    class: "row"
  }, Lm = [
    "onChange"
  ], Bm = {
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
      const e = i, r = t, n = Y(true), a = Y();
      function c() {
        return n.value == true;
      }
      function l(P, v) {
        r("selectEntity", P, v);
      }
      function _(P, v) {
        r("openContextMenu", P, v);
      }
      function h(P) {
        P.target.parentNode.removeAttribute("draggable"), P.target.removeAttribute("readonly");
      }
      function p(P) {
        P.target.parentNode.setAttribute("draggable", true), P.target.setAttribute("readonly", true), P.target.blur();
      }
      function w(P, v) {
        v.isSelected != true && l(P, v);
      }
      function b(P, v) {
      }
      function f(P, v) {
        a.value.style.overflowY = "auto";
      }
      function C(P, v) {
        r("moveEntity", P, v);
      }
      function T(P, v) {
        v.isExpanded = !v.isExpanded;
      }
      function z(P, v, S) {
        r("editEntity", P, v, S);
      }
      return (P, v) => (W(), U("div", wm, [
        j("div", um, [
          j("div", {
            class: "title",
            onClick: v[0] || (v[0] = (S) => n.value = !n.value)
          }, "Scene"),
          j("div", pm, [
            j("button", {
              class: "action button",
              onClick: v[1] || (v[1] = (S) => r("undo")),
              title: "Undo",
              disabled: e.canUndo == false
            }, v[7] || (v[7] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "undo", -1)
            ]), 8, gm),
            j("button", {
              class: "action button",
              onClick: v[2] || (v[2] = (S) => r("redo")),
              title: "Redo",
              disabled: e.canRedo == false
            }, v[8] || (v[8] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "redo", -1)
            ]), 8, bm),
            j("button", {
              class: "action button",
              onClick: v[3] || (v[3] = (S) => r("resetEntities")),
              title: "Restart level"
            }, v[9] || (v[9] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "fast_rewind", -1)
            ])),
            i.isPlaying == true ? (W(), U("button", {
              key: 0,
              onClick: v[4] || (v[4] = (S) => r("pause")),
              class: "action button",
              title: "Pause level"
            }, v[10] || (v[10] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "pause", -1)
            ]))) : (W(), U("button", {
              key: 1,
              class: "action button",
              onClick: v[5] || (v[5] = (S) => r("play")),
              title: "Play level"
            }, v[11] || (v[11] = [
              j("span", {
                class: "material-symbols-rounded"
              }, "play_arrow", -1)
            ])))
          ])
        ]),
        Xi(j("div", {
          ref_key: "content",
          ref: a,
          class: "content"
        }, [
          j("ul", null, [
            Rt(Zn, {
              name: "list"
            }, {
              default: te(() => [
                (W(true), U(re, null, pe(e.entities, (S) => (W(), U("li", {
                  key: S.id
                }, [
                  j("div", {
                    class: Bt([
                      "entity-title",
                      {
                        selected: S.isSelected
                      }
                    ]),
                    draggable: "true",
                    onClick: (x) => l(x, S),
                    onContextmenu: wr((x) => _(x, S), [
                      "prevent"
                    ]),
                    onDragstart: (x) => w(x, S),
                    onDragover: wr((x) => void 0, [
                      "prevent"
                    ]),
                    onDragend: (x) => f(x, S),
                    onDrop: (x) => C(x, S)
                  }, [
                    j("span", {
                      onDblclick: (x) => r("selectParentEntity", x, S),
                      class: Bt([
                        {
                          hidden: S.rigidBodyDesc.userData.parentId == null
                        },
                        "link material-symbols-rounded"
                      ]),
                      title: "Double click to select parent"
                    }, " link ", 42, fm),
                    j("input", {
                      type: "text",
                      readonly: "",
                      id: S.id,
                      value: S.name || S.type,
                      onChange: (x) => r("renameEntity", x, S),
                      onKeyup: Yn(p, [
                        "enter"
                      ]),
                      onFocusout: p,
                      onDblclick: h
                    }, null, 40, ym),
                    j("span", {
                      onClick: (x) => T(x, S),
                      class: Bt([
                        "toggle material-symbols-rounded",
                        {
                          isExpanded: S.isExpanded
                        }
                      ])
                    }, " keyboard_arrow_down ", 10, vm)
                  ], 42, mm),
                  Rt(Fe, {
                    name: "properties"
                  }, {
                    default: te(() => [
                      S.isExpanded ? (W(), U("div", {
                        key: 0,
                        class: Bt([
                          "entity-properties",
                          {
                            expanded: S.isExpanded
                          }
                        ])
                      }, [
                        j("div", Sm, [
                          v[12] || (v[12] = j("span", {
                            class: "material-symbols-rounded"
                          }, "location_on", -1)),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.x,
                            onChange: (x) => z(x, S, "rigidBodyDesc.translation.x")
                          }, null, 40, Rm),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.y,
                            onChange: (x) => z(x, S, "rigidBodyDesc.translation.y")
                          }, null, 40, Cm),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.z,
                            onChange: (x) => z(x, S, "rigidBodyDesc.translation.z")
                          }, null, 40, Em)
                        ]),
                        j("div", xm, [
                          v[13] || (v[13] = j("span", {
                            class: "material-symbols-rounded"
                          }, "orbit", -1)),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.x,
                            onChange: (x) => z(x, S, "rigidBodyDesc.rotation.x")
                          }, null, 40, jm),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.y,
                            onChange: (x) => z(x, S, "rigidBodyDesc.rotation.y")
                          }, null, 40, Am),
                          j("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.z,
                            onChange: (x) => z(x, S, "rigidBodyDesc.rotation.z")
                          }, null, 40, Pm)
                        ]),
                        j("div", Im, [
                          v[14] || (v[14] = j("span", {
                            class: "material-symbols-rounded"
                          }, "package_2", -1)),
                          j("input", {
                            type: "text",
                            value: S.objectDesc.scale.x,
                            onChange: (x) => z(x, S, "objectDesc.scale.x")
                          }, null, 40, zm),
                          j("input", {
                            type: "text",
                            value: S.objectDesc.scale.y,
                            onChange: (x) => z(x, S, "objectDesc.scale.y")
                          }, null, 40, Tm),
                          j("input", {
                            type: "text",
                            value: S.objectDesc.scale.z,
                            onChange: (x) => z(x, S, "objectDesc.scale.z")
                          }, null, 40, Dm)
                        ]),
                        j("div", km, [
                          v[16] || (v[16] = j("span", {
                            class: "material-symbols-rounded"
                          }, "bolt", -1)),
                          j("select", {
                            onChange: (x) => z(x, S, "collidersDesc[0].events[0].name")
                          }, [
                            v[15] || (v[15] = j("option", null, "None", -1)),
                            (W(true), U(re, null, pe(Object.getOwnPropertyNames(S).filter((x) => typeof S[x] == "function"), (x) => (W(), U("option", null, ee(x), 1))), 256))
                          ], 40, Mm)
                        ]),
                        j("div", Fm, [
                          v[17] || (v[17] = j("span", {
                            class: "material-symbols-rounded hidden"
                          }, "format_size", -1)),
                          j("input", {
                            type: "text",
                            value: "{x:0,y:0,z:0}",
                            onChange: (x) => z(x, S),
                            placeholder: "{x:0,y:0,z:0}"
                          }, null, 40, Lm)
                        ])
                      ], 2)) : Wt("", true)
                    ]),
                    _: 2
                  }, 1024)
                ]))), 128))
              ]),
              _: 1
            }),
            e.entities.length == 0 ? (W(), U("li", {
              key: 0,
              onClick: v[6] || (v[6] = (S) => {
                r("setMode", {
                  type: "add"
                });
              })
            }, v[18] || (v[18] = [
              j("div", {
                class: "entity-title"
              }, [
                j("span", {
                  class: "material-symbols-rounded"
                }, "add"),
                j("span", null, "Add entity")
              ], -1)
            ]))) : Wt("", true)
          ])
        ], 512), [
          [
            $i,
            c()
          ]
        ])
      ]));
    }
  }, Nm = Jt(Bm, [
    [
      "__scopeId",
      "data-v-68bde30e"
    ]
  ]), Om = [
    "onClick",
    "disabled"
  ], Hm = {
    key: 0,
    class: "material-symbols-rounded"
  }, Hi = 150, Gm = {
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
      const t = i, e = Y({
        animationDuration: `${Hi}ms`,
        left: "0px",
        top: "0px"
      }), r = Y(false), n = Y(false), a = Y();
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
        await Ui();
        const w = window.innerWidth, b = window.innerHeight, f = a.value.offsetWidth, C = a.value.offsetHeight;
        let T = p.clientX, z = p.clientY;
        T + f > w && (T = w - f), z + C > b && (z = b - C), e.value.left = T + "px", e.value.top = z + "px";
      }
      return qi(() => t.event, () => {
        l(t.event);
      }), Ot(function() {
        document.addEventListener("pointerup", _);
      }), Sr(function() {
        document.removeEventListener("pointerup", _);
      }), (p, w) => (W(), Rr(Fe, {
        name: "fade",
        onBeforeEnter: w[0] || (w[0] = (b) => n.value = true),
        onAfterEnter: w[1] || (w[1] = (b) => n.value = false)
      }, {
        default: te(() => [
          r.value ? (W(), U("ul", {
            key: 0,
            ref_key: "menu",
            ref: a,
            style: Qn(e.value)
          }, [
            (W(true), U(re, null, pe(t.actions, (b) => (W(), U("li", null, [
              j("button", {
                onClick: wr((f) => c(f, b), [
                  "prevent"
                ]),
                disabled: b.disabled
              }, [
                b.icon ? (W(), U("span", Hm, ee(b.icon), 1)) : Wt("", true),
                ts(" " + ee(b.text), 1)
              ], 8, Om)
            ]))), 256))
          ], 4)) : Wt("", true)
        ]),
        _: 1
      }));
    }
  }, Wm = Jt(Gm, [
    [
      "__scopeId",
      "data-v-7804f6c1"
    ]
  ]), Gi = {
    bounce({ pair: i, target: t, value: e = 30 }) {
      const r = new Gt().copy(t.rigidBody.rotation()), a = new Cr().setFromQuaternion(r).z;
      t.applyVelocityAtAxisAngle({
        x: 1,
        y: 0,
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, a), t.applyImpulseAtAngle({
        x: 0,
        y: -e * t.object.scale.y,
        z: 0
      }, a), i.applyVelocityAtAxisAngle({
        x: 1,
        y: 0,
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, a), i.applyImpulseAtAngle({
        x: 0,
        y: e * i.rigidBody.mass(),
        z: 0
      }, a);
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
  }, Vm = {
    class: "panels"
  }, qm = {
    __name: "PageLevelEditor",
    props: {
      game: Object
    },
    setup(i) {
      const t = i, e = Y({
        type: "select"
      }), r = Y([]), n = Y({}), a = [], c = hr(new rm()), l = hr(t.game.interval), _ = _t(() => c.canUndo()), h = _t(() => c.canRedo()), p = _t(() => l.threadRunning), w = Y({}), b = Y([]), f = new ls(Tn.create(), t.game.graphics.canvas);
      f.zoomToCursor = true, f.zoomSpeed = 3, f.minDistance = 1, f.maxDistance = 100, f.mouseButtons = {
        LEFT: 2,
        MIDDLE: 2,
        RIGHT: 0
      }, Ht(false);
      function C(E) {
        e.value = E;
      }
      function T(E, M, A) {
        const m = A.replace(/\[/g, ".").replace(/]/g, "").split("."), y = m[m.length - 1], R = m.reduce((X, N) => typeof X[N] == "object" ? X[N] : X, M), I = R[y], V = E.target.value;
        c.add(function() {
          R[y] = V, M.reset();
        }, function() {
          R[y] = I, M.reset();
        }).execute();
      }
      function z(E, M) {
        const A = {
          x: Math.round(t.game.graphics.camera.position.x),
          y: Math.round(t.game.graphics.camera.position.y),
          z: 0
        }, m = Oi.create({
          ...M,
          position: A
        }), y = a[a.length - 1], R = y ? r.value.indexOf(y) + 1 : 0;
        m.addEventListener("added", function(I) {
          t.game.graphics.scene.add(m.object);
        }), Object.assign(m, Gi), c.add(function() {
          t.game.physics.add(m), r.value.splice(R, 0, m), x(E, m), bt();
        }, function() {
          t.game.physics.remove(m), r.value.splice(R, 1), Z(E, m), bt();
        }).execute();
      }
      function P(E, M) {
        const A = a.map((m) => ({
          children: t.game.physics.getChildren(m),
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            t.game.physics.remove(y.entity), r.value.splice(y.index, 1), Z(E, y.entity, m), bt();
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.children.forEach((R) => R.setParentId(y.entity.id)), t.game.physics.add(y.entity), r.value.splice(y.index, 0, y.entity), bt();
          }
        }).execute();
      }
      function v(E, M) {
        if (M.isSelected) return;
        const A = a.map((m) => ({
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        c.add(function() {
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(A[y].index, 1);
          const m = r.value.indexOf(M) + 1;
          for (let y = 0; y < A.length; y++) r.value.splice(m + y, 0, A[y].entity);
        }, function() {
          const m = r.value.indexOf(M) + 1;
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(m + y, 1);
          for (let y = 0; y < A.length; y++) r.value.splice(A[y].index, 0, A[y].entity);
        }).execute();
      }
      function S(E, M) {
        const A = M.name || M.type, m = E.target.value;
        c.add(function() {
          M.name = m;
        }, function() {
          M.name = A;
        }).execute();
      }
      function x(E, M) {
        let A = r.value.indexOf(n.value), m = r.value.indexOf(M), y = m, R = m;
        if (E.shiftKey == true ? (R = Math.max(m, A), y = Math.max(0, Math.min(Math.min(m, A), R))) : n.value = M, E.ctrlKey == true) {
          if (M.isSelected) {
            Z(E, M);
            return;
          }
        } else Tt(E);
        for (let I = y; I <= R; I++) r.value[I].isSelected = true, a.push(r.value[I]);
      }
      function gt(E, M) {
        const A = M.getParentId(), m = t.game.physics.getEntityById(A);
        m && x(E, m);
      }
      function wt(E) {
        let M = r.value[0], A = r.value[r.value.length - 1];
        n.value = M, x({
          shiftKey: true
        }, A);
      }
      function Z(E, M, A) {
        A == null && (A = a.indexOf(M)), M.isSelected = false, a.splice(A, 1);
      }
      function Tt(E, M) {
        for (let A = a.length - 1; A >= 0; A--) Z(E, a[A], A);
      }
      function vt(E) {
        r.value.forEach((M) => {
          M.reset();
        }), t.game.graphics.render();
      }
      function Et(E, M) {
        const A = a.map((m) => ({
          index: r.value.indexOf(m),
          parentId: m.getParentId(),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            y.entity.id != M.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(M.id), t.game.physics.createParentJoint(y.entity), bt());
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.entity.id != M.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), bt());
          }
        }).execute();
      }
      function Dt(E, M) {
        const A = a.map((m) => ({
          entity: m,
          parentId: m.getParentId()
        }));
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(null), bt();
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), bt();
          }
        }).execute();
      }
      function xt(E) {
        E.repeat || (E.code == "KeyA" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), wt()) : E.code == "KeyD" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), Tt(E)) : E.code == "KeyX" && (E.ctrlKey || E.metaKey) ? P(E) : E.code == "KeyZ" && (E.ctrlKey || E.metaKey) && (E.shiftKey == true ? Ce() : kt()));
      }
      function kt() {
        c.undo();
      }
      function Ce() {
        c.redo();
      }
      function se(E) {
        t.game.physics.clear();
        const M = t.game.assets.get(E), A = [];
        return M && M.children.forEach(function(m) {
          const y = Oi.create({
            ccd: true,
            friction: M.friction || 0,
            softCcdPrediction: 0.5,
            ...m
          });
          y.addEventListener("added", function(R) {
            t.game.graphics.scene.add(y.object);
          }), Object.assign(y, Gi), y.type == "player" && (t.game.player = y, t.game.graphics.setCamera(y.camera)), t.game.physics.add(y), A.push(y);
        }), A;
      }
      function ae(E, M) {
        if (M.isSelected) {
          let A = [], m = {
            text: "Link",
            icon: "link",
            disabled: a.length <= 1,
            callback: () => Et(E, M)
          }, y = {
            text: "Unlink",
            icon: "link_off",
            disabled: Kt() == false,
            callback: () => Dt()
          }, R = {
            text: "Delete",
            icon: "delete",
            callback: () => P(E)
          };
          A.push(m, y, R), w.value = E, b.value = A;
        } else x(E, M), ae(E, M);
      }
      function Kt() {
        for (let E = a.length - 1; E >= 0; E--) if (a[E].getParentId()) return true;
        return false;
      }
      function oe() {
        l.stop(), t.game.graphics.setCamera(f.object), t.game.graphics.render(), Ht(true);
      }
      function $e() {
        l.start(), t.game.graphics.setCamera(t.game.player.camera), Ht(false);
      }
      function bt() {
        l.threadRunning == false && (t.game.physics.debugger.update(), t.game.graphics.render());
      }
      function ce() {
      }
      function Xt() {
        t.game.interval.threadRunning == false && t.game.graphics.render();
      }
      function Ht(E = true) {
        f.enablePan = E, f.enableRotate = E, f.enableZoom = E;
      }
      return Ot(async function() {
        t.game.physics.debugger.enable(), r.value = se("boxel-3d-sandbox"), document.addEventListener("keydown", xt), f.addEventListener("start", ce), f.addEventListener("change", Xt), f.object.rotation.set(0, 0, 0), f.target.copy(t.game.player.getPosition()), t.game.player.camera.getWorldPosition(f.object.position);
      }), Sr(function() {
        document.removeEventListener("keydown", xt), f.removeEventListener("start", ce), f.removeEventListener("change", Xt);
      }), (E, M) => (W(), U("div", Vm, [
        Rt(am, {
          game: i.game,
          mode: e.value,
          onSetMode: C
        }, null, 8, [
          "game",
          "mode"
        ]),
        Rt(hm, {
          game: i.game,
          mode: e.value,
          onAddEntity: z
        }, null, 8, [
          "game",
          "mode"
        ]),
        Rt(Nm, {
          entities: r.value,
          canUndo: _.value,
          canRedo: h.value,
          isPlaying: p.value,
          onAddEntity: z,
          onDeleteEntity: P,
          onEditEntity: T,
          onLinkEntity: Et,
          onMoveEntity: v,
          onPause: oe,
          onPlay: $e,
          onRenameEntity: S,
          onResetEntities: vt,
          onSelectEntity: x,
          onSelectParentEntity: gt,
          onSetMode: C,
          onUnlinkEntity: Dt,
          onOpenContextMenu: ae,
          onRedo: Ce,
          onUndo: kt
        }, null, 8, [
          "entities",
          "canUndo",
          "canRedo",
          "isPlaying"
        ]),
        Rt(Wm, {
          event: w.value,
          actions: b.value
        }, null, 8, [
          "event",
          "actions"
        ])
      ]));
    }
  }, Um = Jt(qm, [
    [
      "__scopeId",
      "data-v-1d86fb92"
    ]
  ]), Jm = [
    {
      name: "home",
      path: "/",
      component: Mb
    },
    {
      name: "play",
      path: "/play",
      component: Fb
    },
    {
      name: "level-editor",
      path: "/level-editor",
      component: Um
    }
  ], Km = ha({
    history: Hs(),
    routes: Jm
  }), Dn = es(kb);
  Dn.use(Km);
  Dn.mount("#app");
})();
