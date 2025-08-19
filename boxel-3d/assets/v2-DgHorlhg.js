import { aX as Tn, aY as Oi, u as gt, s as wr, a$ as Zt, p as Fn, g as dt, aZ as Hi, b1 as Qe, f as Q, q as Gi, l as Wi, al as kn, aF as Dn, aH as Mn, b2 as Lr, V as ht, aE as Wt, _ as qt, x as Ht, y as Rr, b as Cr, o as W, w as te, c as K, d as Vt, a as P, t as ee, F as re, i as pe, aS as Ln, aT as Bn, T as Me, b3 as Nn, h as Ct, m as Ot, b4 as On, aN as Hn, ac as Gn, O as Br, af as Wn, b5 as Vi, ah as Ui, aL as Vn, b6 as Un, aM as xr, a2 as Jn, b7 as qn, b8 as Kn, j as Ji, z as qi, aP as ur, aR as $n, b9 as Xn, n as Yn, e as Qn, A as Zn } from "./SkeletonUtils-Bd8KjIp5.js";
import { I as ts, A as es, G as rs, a as is, L as Ki } from "./AssetLoader-Cz29yyUe.js";
import { G as ns, E as ss, T as as, O as os } from "./OrbitControls-BgbWpcXB.js";
(async () => {
  const Yt = typeof document < "u";
  function $i(i) {
    return typeof i == "object" || "displayName" in i || "props" in i || "__vccOpts" in i;
  }
  function cs(i) {
    return i.__esModule || i[Symbol.toStringTag] === "Module" || i.default && $i(i.default);
  }
  const G = Object.assign;
  function Ze(i, t) {
    const e = {};
    for (const r in t) {
      const n = t[r];
      e[r] = vt(n) ? n.map(i) : i(n);
    }
    return e;
  }
  const he = () => {
  }, vt = Array.isArray, Xi = /#/g, ls = /&/g, _s = /\//g, ds = /=/g, hs = /\?/g, Yi = /\+/g, ws = /%5B/g, us = /%5D/g, Qi = /%5E/g, ps = /%60/g, Zi = /%7B/g, gs = /%7C/g, tn = /%7D/g, bs = /%20/g;
  function Er(i) {
    return encodeURI("" + i).replace(gs, "|").replace(ws, "[").replace(us, "]");
  }
  function ms(i) {
    return Er(i).replace(Zi, "{").replace(tn, "}").replace(Qi, "^");
  }
  function pr(i) {
    return Er(i).replace(Yi, "%2B").replace(bs, "+").replace(Xi, "%23").replace(ls, "%26").replace(ps, "`").replace(Zi, "{").replace(tn, "}").replace(Qi, "^");
  }
  function fs(i) {
    return pr(i).replace(ds, "%3D");
  }
  function ys(i) {
    return Er(i).replace(Xi, "%23").replace(hs, "%3F");
  }
  function vs(i) {
    return i == null ? "" : ys(i).replace(_s, "%2F");
  }
  function ge(i) {
    try {
      return decodeURIComponent("" + i);
    } catch {
    }
    return "" + i;
  }
  const Ss = /\/$/, Rs = (i) => i.replace(Ss, "");
  function tr(i, t, e = "/") {
    let r, n = {}, o = "", c = "";
    const l = t.indexOf("#");
    let _ = t.indexOf("?");
    return l < _ && l >= 0 && (_ = -1), _ > -1 && (r = t.slice(0, _), o = t.slice(_ + 1, l > -1 ? l : t.length), n = i(o)), l > -1 && (r = r || t.slice(0, l), c = t.slice(l, t.length)), r = Ps(r ?? t, e), {
      fullPath: r + (o && "?") + o + c,
      path: r,
      query: n,
      hash: ge(c)
    };
  }
  function Cs(i, t) {
    const e = t.query ? i(t.query) : "";
    return t.path + (e && "?") + e + (t.hash || "");
  }
  function Nr(i, t) {
    return !t || !i.toLowerCase().startsWith(t.toLowerCase()) ? i : i.slice(t.length) || "/";
  }
  function xs(i, t, e) {
    const r = t.matched.length - 1, n = e.matched.length - 1;
    return r > -1 && r === n && ie(t.matched[r], e.matched[n]) && en(t.params, e.params) && i(t.query) === i(e.query) && t.hash === e.hash;
  }
  function ie(i, t) {
    return (i.aliasOf || i) === (t.aliasOf || t);
  }
  function en(i, t) {
    if (Object.keys(i).length !== Object.keys(t).length) return false;
    for (const e in i) if (!Es(i[e], t[e])) return false;
    return true;
  }
  function Es(i, t) {
    return vt(i) ? Or(i, t) : vt(t) ? Or(t, i) : i === t;
  }
  function Or(i, t) {
    return vt(t) ? i.length === t.length && i.every((e, r) => e === t[r]) : i.length === 1 && i[0] === t;
  }
  function Ps(i, t) {
    if (i.startsWith("/")) return i;
    if (!i) return t;
    const e = t.split("/"), r = i.split("/"), n = r[r.length - 1];
    (n === ".." || n === ".") && r.push("");
    let o = e.length - 1, c, l;
    for (c = 0; c < r.length; c++) if (l = r[c], l !== ".") if (l === "..") o > 1 && o--;
    else break;
    return e.slice(0, o).join("/") + "/" + r.slice(c).join("/");
  }
  const Lt = {
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
  function js(i) {
    if (!i) if (Yt) {
      const t = document.querySelector("base");
      i = t && t.getAttribute("href") || "/", i = i.replace(/^\w+:\/\/[^\/]+/, "");
    } else i = "/";
    return i[0] !== "/" && i[0] !== "#" && (i = "/" + i), Rs(i);
  }
  const As = /^[^#]+#/;
  function Is(i, t) {
    return i.replace(As, "#") + t;
  }
  function zs(i, t) {
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
  function Ts(i) {
    let t;
    if ("el" in i) {
      const e = i.el, r = typeof e == "string" && e.startsWith("#"), n = typeof e == "string" ? r ? document.getElementById(e.slice(1)) : document.querySelector(e) : e;
      if (!n) return;
      t = zs(n, i);
    } else t = i;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Hr(i, t) {
    return (history.state ? history.state.position - t : -1) + i;
  }
  const gr = /* @__PURE__ */ new Map();
  function Fs(i, t) {
    gr.set(i, t);
  }
  function ks(i) {
    const t = gr.get(i);
    return gr.delete(i), t;
  }
  let Ds = () => location.protocol + "//" + location.host;
  function rn(i, t) {
    const { pathname: e, search: r, hash: n } = t, o = i.indexOf("#");
    if (o > -1) {
      let l = n.includes(i.slice(o)) ? i.slice(o).length : 1, _ = n.slice(l);
      return _[0] !== "/" && (_ = "/" + _), Nr(_, "");
    }
    return Nr(e, i) + r + n;
  }
  function Ms(i, t, e, r) {
    let n = [], o = [], c = null;
    const l = ({ state: b }) => {
      const f = rn(i, location), S = e.value, T = t.value;
      let j = 0;
      if (b) {
        if (e.value = f, t.value = b, c && c === S) {
          c = null;
          return;
        }
        j = T ? b.position - T.position : 0;
      } else r(f);
      n.forEach((I) => {
        I(e.value, S, {
          delta: j,
          type: be.pop,
          direction: j ? j > 0 ? we.forward : we.back : we.unknown
        });
      });
    };
    function _() {
      c = e.value;
    }
    function h(b) {
      n.push(b);
      const f = () => {
        const S = n.indexOf(b);
        S > -1 && n.splice(S, 1);
      };
      return o.push(f), f;
    }
    function u() {
      const { history: b } = window;
      b.state && b.replaceState(G({}, b.state, {
        scroll: Le()
      }), "");
    }
    function w() {
      for (const b of o) b();
      o = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u);
    }
    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u, {
      passive: true
    }), {
      pauseListeners: _,
      listen: h,
      destroy: w
    };
  }
  function Gr(i, t, e, r = false, n = false) {
    return {
      back: i,
      current: t,
      forward: e,
      replaced: r,
      position: window.history.length,
      scroll: n ? Le() : null
    };
  }
  function Ls(i) {
    const { history: t, location: e } = window, r = {
      value: rn(i, e)
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
    function o(_, h, u) {
      const w = i.indexOf("#"), b = w > -1 ? (e.host && document.querySelector("base") ? i : i.slice(w)) + _ : Ds() + i + _;
      try {
        t[u ? "replaceState" : "pushState"](h, "", b), n.value = h;
      } catch (f) {
        console.error(f), e[u ? "replace" : "assign"](b);
      }
    }
    function c(_, h) {
      const u = G({}, t.state, Gr(n.value.back, _, n.value.forward, true), h, {
        position: n.value.position
      });
      o(_, u, true), r.value = _;
    }
    function l(_, h) {
      const u = G({}, n.value, t.state, {
        forward: _,
        scroll: Le()
      });
      o(u.current, u, true);
      const w = G({}, Gr(r.value, _, null), {
        position: u.position + 1
      }, h);
      o(_, w, false), r.value = _;
    }
    return {
      location: r,
      state: n,
      push: l,
      replace: c
    };
  }
  function Bs(i) {
    i = js(i);
    const t = Ls(i), e = Ms(i, t.state, t.location, t.replace);
    function r(o, c = true) {
      c || e.pauseListeners(), history.go(o);
    }
    const n = G({
      location: "",
      base: i,
      go: r,
      createHref: Is.bind(null, i)
    }, t, e);
    return Object.defineProperty(n, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(n, "state", {
      enumerable: true,
      get: () => t.state.value
    }), n;
  }
  function Ns(i) {
    return i = location.host ? i || location.pathname + location.search : "", i.includes("#") || (i += "#"), Bs(i);
  }
  function Os(i) {
    return typeof i == "string" || i && typeof i == "object";
  }
  function nn(i) {
    return typeof i == "string" || typeof i == "symbol";
  }
  const sn = Symbol("");
  var Wr;
  (function(i) {
    i[i.aborted = 4] = "aborted", i[i.cancelled = 8] = "cancelled", i[i.duplicated = 16] = "duplicated";
  })(Wr || (Wr = {}));
  function ne(i, t) {
    return G(new Error(), {
      type: i,
      [sn]: true
    }, t);
  }
  function jt(i, t) {
    return i instanceof Error && sn in i && (t == null || !!(i.type & t));
  }
  const Vr = "[^/]+?", Hs = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, Gs = /[.+*?^${}()[\]/\\]/g;
  function Ws(i, t) {
    const e = G({}, Hs, t), r = [];
    let n = e.start ? "^" : "";
    const o = [];
    for (const h of i) {
      const u = h.length ? [] : [
        90
      ];
      e.strict && !h.length && (n += "/");
      for (let w = 0; w < h.length; w++) {
        const b = h[w];
        let f = 40 + (e.sensitive ? 0.25 : 0);
        if (b.type === 0) w || (n += "/"), n += b.value.replace(Gs, "\\$&"), f += 40;
        else if (b.type === 1) {
          const { value: S, repeatable: T, optional: j, regexp: I } = b;
          o.push({
            name: S,
            repeatable: T,
            optional: j
          });
          const v = I || Vr;
          if (v !== Vr) {
            f += 10;
            try {
              new RegExp(`(${v})`);
            } catch (x) {
              throw new Error(`Invalid custom RegExp for param "${S}" (${v}): ` + x.message);
            }
          }
          let R = T ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
          w || (R = j && h.length < 2 ? `(?:/${R})` : "/" + R), j && (R += "?"), n += R, f += 20, j && (f += -8), T && (f += -20), v === ".*" && (f += -50);
        }
        u.push(f);
      }
      r.push(u);
    }
    if (e.strict && e.end) {
      const h = r.length - 1;
      r[h][r[h].length - 1] += 0.7000000000000001;
    }
    e.strict || (n += "/?"), e.end ? n += "$" : e.strict && !n.endsWith("/") && (n += "(?:/|$)");
    const c = new RegExp(n, e.sensitive ? "" : "i");
    function l(h) {
      const u = h.match(c), w = {};
      if (!u) return null;
      for (let b = 1; b < u.length; b++) {
        const f = u[b] || "", S = o[b - 1];
        w[S.name] = f && S.repeatable ? f.split("/") : f;
      }
      return w;
    }
    function _(h) {
      let u = "", w = false;
      for (const b of i) {
        (!w || !u.endsWith("/")) && (u += "/"), w = false;
        for (const f of b) if (f.type === 0) u += f.value;
        else if (f.type === 1) {
          const { value: S, repeatable: T, optional: j } = f, I = S in h ? h[S] : "";
          if (vt(I) && !T) throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);
          const v = vt(I) ? I.join("/") : I;
          if (!v) if (j) b.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : w = true);
          else throw new Error(`Missing required param "${S}"`);
          u += v;
        }
      }
      return u || "/";
    }
    return {
      re: c,
      score: r,
      keys: o,
      parse: l,
      stringify: _
    };
  }
  function Vs(i, t) {
    let e = 0;
    for (; e < i.length && e < t.length; ) {
      const r = t[e] - i[e];
      if (r) return r;
      e++;
    }
    return i.length < t.length ? i.length === 1 && i[0] === 80 ? -1 : 1 : i.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function an(i, t) {
    let e = 0;
    const r = i.score, n = t.score;
    for (; e < r.length && e < n.length; ) {
      const o = Vs(r[e], n[e]);
      if (o) return o;
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
  const Us = {
    type: 0,
    value: ""
  }, Js = /[a-zA-Z0-9_]/;
  function qs(i) {
    if (!i) return [
      []
    ];
    if (i === "/") return [
      [
        Us
      ]
    ];
    if (!i.startsWith("/")) throw new Error(`Invalid path "${i}"`);
    function t(f) {
      throw new Error(`ERR (${e})/"${h}": ${f}`);
    }
    let e = 0, r = e;
    const n = [];
    let o;
    function c() {
      o && n.push(o), o = [];
    }
    let l = 0, _, h = "", u = "";
    function w() {
      h && (e === 0 ? o.push({
        type: 0,
        value: h
      }) : e === 1 || e === 2 || e === 3 ? (o.length > 1 && (_ === "*" || _ === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), o.push({
        type: 1,
        value: h,
        regexp: u,
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
          _ === "(" ? e = 2 : Js.test(_) ? b() : (w(), e = 0, _ !== "*" && _ !== "?" && _ !== "+" && l--);
          break;
        case 2:
          _ === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + _ : e = 3 : u += _;
          break;
        case 3:
          w(), e = 0, _ !== "*" && _ !== "?" && _ !== "+" && l--, u = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return e === 2 && t(`Unfinished custom RegExp for param "${h}"`), w(), c(), n;
  }
  function Ks(i, t, e) {
    const r = Ws(qs(i.path), e), n = G(r, {
      record: i,
      parent: t,
      children: [],
      alias: []
    });
    return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
  }
  function $s(i, t) {
    const e = [], r = /* @__PURE__ */ new Map();
    t = $r({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function n(w) {
      return r.get(w);
    }
    function o(w, b, f) {
      const S = !f, T = qr(w);
      T.aliasOf = f && f.record;
      const j = $r(t, w), I = [
        T
      ];
      if ("alias" in w) {
        const x = typeof w.alias == "string" ? [
          w.alias
        ] : w.alias;
        for (const bt of x) I.push(qr(G({}, T, {
          components: f ? f.record.components : T.components,
          path: bt,
          aliasOf: f ? f.record : T
        })));
      }
      let v, R;
      for (const x of I) {
        const { path: bt } = x;
        if (b && bt[0] !== "/") {
          const ut = b.record.path, Z = ut[ut.length - 1] === "/" ? "" : "/";
          x.path = b.record.path + (bt && Z + bt);
        }
        if (v = Ks(x, b, j), f ? f.alias.push(v) : (R = R || v, R !== v && R.alias.push(v), S && w.name && !Kr(v) && c(w.name)), on(v) && _(v), T.children) {
          const ut = T.children;
          for (let Z = 0; Z < ut.length; Z++) o(ut[Z], v, f && f.children[Z]);
        }
        f = f || v;
      }
      return R ? () => {
        c(R);
      } : he;
    }
    function c(w) {
      if (nn(w)) {
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
      const b = Qs(w, e);
      e.splice(b, 0, w), w.record.name && !Kr(w) && r.set(w.record.name, w);
    }
    function h(w, b) {
      let f, S = {}, T, j;
      if ("name" in w && w.name) {
        if (f = r.get(w.name), !f) throw ne(1, {
          location: w
        });
        j = f.record.name, S = G(Jr(b.params, f.keys.filter((R) => !R.optional).concat(f.parent ? f.parent.keys.filter((R) => R.optional) : []).map((R) => R.name)), w.params && Jr(w.params, f.keys.map((R) => R.name))), T = f.stringify(S);
      } else if (w.path != null) T = w.path, f = e.find((R) => R.re.test(T)), f && (S = f.parse(T), j = f.record.name);
      else {
        if (f = b.name ? r.get(b.name) : e.find((R) => R.re.test(b.path)), !f) throw ne(1, {
          location: w,
          currentLocation: b
        });
        j = f.record.name, S = G({}, b.params, w.params), T = f.stringify(S);
      }
      const I = [];
      let v = f;
      for (; v; ) I.unshift(v.record), v = v.parent;
      return {
        name: j,
        path: T,
        params: S,
        matched: I,
        meta: Ys(I)
      };
    }
    i.forEach((w) => o(w));
    function u() {
      e.length = 0, r.clear();
    }
    return {
      addRoute: o,
      resolve: h,
      removeRoute: c,
      clearRoutes: u,
      getRoutes: l,
      getRecordMatcher: n
    };
  }
  function Jr(i, t) {
    const e = {};
    for (const r of t) r in i && (e[r] = i[r]);
    return e;
  }
  function qr(i) {
    const t = {
      path: i.path,
      redirect: i.redirect,
      name: i.name,
      meta: i.meta || {},
      aliasOf: i.aliasOf,
      beforeEnter: i.beforeEnter,
      props: Xs(i),
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
  function Xs(i) {
    const t = {}, e = i.props || false;
    if ("component" in i) t.default = e;
    else for (const r in i.components) t[r] = typeof e == "object" ? e[r] : e;
    return t;
  }
  function Kr(i) {
    for (; i; ) {
      if (i.record.aliasOf) return true;
      i = i.parent;
    }
    return false;
  }
  function Ys(i) {
    return i.reduce((t, e) => G(t, e.meta), {});
  }
  function $r(i, t) {
    const e = {};
    for (const r in i) e[r] = r in t ? t[r] : i[r];
    return e;
  }
  function Qs(i, t) {
    let e = 0, r = t.length;
    for (; e !== r; ) {
      const o = e + r >> 1;
      an(i, t[o]) < 0 ? r = o : e = o + 1;
    }
    const n = Zs(i);
    return n && (r = t.lastIndexOf(n, r - 1)), r;
  }
  function Zs(i) {
    let t = i;
    for (; t = t.parent; ) if (on(t) && an(i, t) === 0) return t;
  }
  function on({ record: i }) {
    return !!(i.name || i.components && Object.keys(i.components).length || i.redirect);
  }
  function ta(i) {
    const t = {};
    if (i === "" || i === "?") return t;
    const r = (i[0] === "?" ? i.slice(1) : i).split("&");
    for (let n = 0; n < r.length; ++n) {
      const o = r[n].replace(Yi, " "), c = o.indexOf("="), l = ge(c < 0 ? o : o.slice(0, c)), _ = c < 0 ? null : ge(o.slice(c + 1));
      if (l in t) {
        let h = t[l];
        vt(h) || (h = t[l] = [
          h
        ]), h.push(_);
      } else t[l] = _;
    }
    return t;
  }
  function Xr(i) {
    let t = "";
    for (let e in i) {
      const r = i[e];
      if (e = fs(e), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + e);
        continue;
      }
      (vt(r) ? r.map((o) => o && pr(o)) : [
        r && pr(r)
      ]).forEach((o) => {
        o !== void 0 && (t += (t.length ? "&" : "") + e, o != null && (t += "=" + o));
      });
    }
    return t;
  }
  function ea(i) {
    const t = {};
    for (const e in i) {
      const r = i[e];
      r !== void 0 && (t[e] = vt(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
    }
    return t;
  }
  const ra = Symbol(""), Yr = Symbol(""), Pr = Symbol(""), jr = Symbol(""), br = Symbol("");
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
  function Nt(i, t, e, r, n, o = (c) => c()) {
    const c = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
    return () => new Promise((l, _) => {
      const h = (b) => {
        b === false ? _(ne(4, {
          from: e,
          to: t
        })) : b instanceof Error ? _(b) : Os(b) ? _(ne(2, {
          from: t,
          to: b
        })) : (c && r.enterCallbacks[n] === c && typeof b == "function" && c.push(b), l());
      }, u = o(() => i.call(r && r.instances[n], t, e, h));
      let w = Promise.resolve(u);
      i.length < 3 && (w = w.then(h)), w.catch((b) => _(b));
    });
  }
  function er(i, t, e, r, n = (o) => o()) {
    const o = [];
    for (const c of i) for (const l in c.components) {
      let _ = c.components[l];
      if (!(t !== "beforeRouteEnter" && !c.instances[l])) if ($i(_)) {
        const u = (_.__vccOpts || _)[t];
        u && o.push(Nt(u, e, r, c, l, n));
      } else {
        let h = _();
        o.push(() => h.then((u) => {
          if (!u) throw new Error(`Couldn't resolve component "${l}" at "${c.path}"`);
          const w = cs(u) ? u.default : u;
          c.mods[l] = u, c.components[l] = w;
          const f = (w.__vccOpts || w)[t];
          return f && Nt(f, e, r, c, l, n)();
        }));
      }
    }
    return o;
  }
  function Qr(i) {
    const t = Zt(Pr), e = Zt(jr), r = dt(() => {
      const _ = gt(i.to);
      return t.resolve(_);
    }), n = dt(() => {
      const { matched: _ } = r.value, { length: h } = _, u = _[h - 1], w = e.matched;
      if (!u || !w.length) return -1;
      const b = w.findIndex(ie.bind(null, u));
      if (b > -1) return b;
      const f = Zr(_[h - 2]);
      return h > 1 && Zr(u) === f && w[w.length - 1].path !== f ? w.findIndex(ie.bind(null, _[h - 2])) : b;
    }), o = dt(() => n.value > -1 && oa(e.params, r.value.params)), c = dt(() => n.value > -1 && n.value === e.matched.length - 1 && en(e.params, r.value.params));
    function l(_ = {}) {
      if (aa(_)) {
        const h = t[gt(i.replace) ? "replace" : "push"](gt(i.to)).catch(he);
        return i.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: dt(() => r.value.href),
      isActive: o,
      isExactActive: c,
      navigate: l
    };
  }
  function ia(i) {
    return i.length === 1 ? i[0] : i;
  }
  const na = Oi({
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
      const e = Fn(Qr(i)), { options: r } = Zt(Pr), n = dt(() => ({
        [ti(i.activeClass, r.linkActiveClass, "router-link-active")]: e.isActive,
        [ti(i.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: e.isExactActive
      }));
      return () => {
        const o = t.default && ia(t.default(e));
        return i.custom ? o : Hi("a", {
          "aria-current": e.isExactActive ? i.ariaCurrentValue : null,
          href: e.href,
          onClick: e.navigate,
          class: n.value
        }, o);
      };
    }
  }), sa = na;
  function aa(i) {
    if (!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey) && !i.defaultPrevented && !(i.button !== void 0 && i.button !== 0)) {
      if (i.currentTarget && i.currentTarget.getAttribute) {
        const t = i.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return i.preventDefault && i.preventDefault(), true;
    }
  }
  function oa(i, t) {
    for (const e in t) {
      const r = t[e], n = i[e];
      if (typeof r == "string") {
        if (r !== n) return false;
      } else if (!vt(n) || n.length !== r.length || r.some((o, c) => o !== n[c])) return false;
    }
    return true;
  }
  function Zr(i) {
    return i ? i.aliasOf ? i.aliasOf.path : i.path : "";
  }
  const ti = (i, t, e) => i ?? t ?? e, ca = Oi({
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
      const r = Zt(br), n = dt(() => i.route || r.value), o = Zt(Yr, 0), c = dt(() => {
        let h = gt(o);
        const { matched: u } = n.value;
        let w;
        for (; (w = u[h]) && !w.components; ) h++;
        return h;
      }), l = dt(() => n.value.matched[c.value]);
      Qe(Yr, dt(() => c.value + 1)), Qe(ra, l), Qe(br, n);
      const _ = Q();
      return Gi(() => [
        _.value,
        l.value,
        i.name
      ], ([h, u, w], [b, f, S]) => {
        u && (u.instances[w] = h, f && f !== u && h && h === b && (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards), u.updateGuards.size || (u.updateGuards = f.updateGuards))), h && u && (!f || !ie(u, f) || !b) && (u.enterCallbacks[w] || []).forEach((T) => T(h));
      }, {
        flush: "post"
      }), () => {
        const h = n.value, u = i.name, w = l.value, b = w && w.components[u];
        if (!b) return ei(e.default, {
          Component: b,
          route: h
        });
        const f = w.props[u], S = f ? f === true ? h.params : typeof f == "function" ? f(h) : f : null, j = Hi(b, G({}, S, t, {
          onVnodeUnmounted: (I) => {
            I.component.isUnmounted && (w.instances[u] = null);
          },
          ref: _
        }));
        return ei(e.default, {
          Component: j,
          route: h
        }) || j;
      };
    }
  });
  function ei(i, t) {
    if (!i) return null;
    const e = i(t);
    return e.length === 1 ? e[0] : e;
  }
  const la = ca;
  function _a(i) {
    const t = $s(i.routes, i), e = i.parseQuery || ta, r = i.stringifyQuery || Xr, n = i.history, o = _e(), c = _e(), l = _e(), _ = Tn(Lt);
    let h = Lt;
    Yt && i.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = Ze.bind(null, (m) => "" + m), w = Ze.bind(null, vs), b = Ze.bind(null, ge);
    function f(m, y) {
      let C, z;
      return nn(m) ? (C = t.getRecordMatcher(m), z = y) : z = m, t.addRoute(z, C);
    }
    function S(m) {
      const y = t.getRecordMatcher(m);
      y && t.removeRoute(y);
    }
    function T() {
      return t.getRoutes().map((m) => m.record);
    }
    function j(m) {
      return !!t.getRecordMatcher(m);
    }
    function I(m, y) {
      if (y = G({}, y || _.value), typeof m == "string") {
        const B = tr(e, m, y.path), it = t.resolve({
          path: B.path
        }, y), le = n.createHref(B.fullPath);
        return G(B, it, {
          params: b(it.params),
          hash: ge(B.hash),
          redirectedFrom: void 0,
          href: le
        });
      }
      let C;
      if (m.path != null) C = G({}, m, {
        path: tr(e, m.path, y.path).path
      });
      else {
        const B = G({}, m.params);
        for (const it in B) B[it] == null && delete B[it];
        C = G({}, m, {
          params: w(B)
        }), y.params = w(y.params);
      }
      const z = t.resolve(C, y), V = m.hash || "";
      z.params = u(b(z.params));
      const X = Cs(r, G({}, m, {
        hash: ms(V),
        path: z.path
      })), N = n.createHref(X);
      return G({
        fullPath: X,
        hash: V,
        query: r === Xr ? ea(m.query) : m.query || {}
      }, z, {
        redirectedFrom: void 0,
        href: N
      });
    }
    function v(m) {
      return typeof m == "string" ? tr(e, m, _.value.path) : G({}, m);
    }
    function R(m, y) {
      if (h !== m) return ne(8, {
        from: y,
        to: m
      });
    }
    function x(m) {
      return Z(m);
    }
    function bt(m) {
      return x(G(v(m), {
        replace: true
      }));
    }
    function ut(m) {
      const y = m.matched[m.matched.length - 1];
      if (y && y.redirect) {
        const { redirect: C } = y;
        let z = typeof C == "function" ? C(m) : C;
        return typeof z == "string" && (z = z.includes("?") || z.includes("#") ? z = v(z) : {
          path: z
        }, z.params = {}), G({
          query: m.query,
          hash: m.hash,
          params: z.path != null ? {} : m.params
        }, z);
      }
    }
    function Z(m, y) {
      const C = h = I(m), z = _.value, V = m.state, X = m.force, N = m.replace === true, B = ut(C);
      if (B) return Z(G(v(B), {
        state: typeof B == "object" ? G({}, V, B.state) : V,
        force: X,
        replace: N
      }), y || C);
      const it = C;
      it.redirectedFrom = y;
      let le;
      return !X && xs(r, z, C) && (le = ne(16, {
        to: it,
        from: z
      }), ce(z, z, true, false)), (le ? Promise.resolve(le) : Et(it, z)).catch((pt) => jt(pt) ? jt(pt, 2) ? pt : mt(pt) : oe(pt, it, z)).then((pt) => {
        if (pt) {
          if (jt(pt, 2)) return Z(G({
            replace: N
          }, v(pt.to), {
            state: typeof pt.to == "object" ? G({}, V, pt.to.state) : V,
            force: X
          }), y || it);
        } else pt = Pt(it, z, true, N, V);
        return Dt(it, z, pt), pt;
      });
    }
    function kt(m, y) {
      const C = R(m, y);
      return C ? Promise.reject(C) : Promise.resolve();
    }
    function St(m) {
      const y = E.values().next().value;
      return y && typeof y.runWithContext == "function" ? y.runWithContext(m) : m();
    }
    function Et(m, y) {
      let C;
      const [z, V, X] = da(m, y);
      C = er(z.reverse(), "beforeRouteLeave", m, y);
      for (const B of z) B.leaveGuards.forEach((it) => {
        C.push(Nt(it, m, y));
      });
      const N = kt.bind(null, m, y);
      return C.push(N), A(C).then(() => {
        C = [];
        for (const B of o.list()) C.push(Nt(B, m, y));
        return C.push(N), A(C);
      }).then(() => {
        C = er(V, "beforeRouteUpdate", m, y);
        for (const B of V) B.updateGuards.forEach((it) => {
          C.push(Nt(it, m, y));
        });
        return C.push(N), A(C);
      }).then(() => {
        C = [];
        for (const B of X) if (B.beforeEnter) if (vt(B.beforeEnter)) for (const it of B.beforeEnter) C.push(Nt(it, m, y));
        else C.push(Nt(B.beforeEnter, m, y));
        return C.push(N), A(C);
      }).then(() => (m.matched.forEach((B) => B.enterCallbacks = {}), C = er(X, "beforeRouteEnter", m, y, St), C.push(N), A(C))).then(() => {
        C = [];
        for (const B of c.list()) C.push(Nt(B, m, y));
        return C.push(N), A(C);
      }).catch((B) => jt(B, 8) ? B : Promise.reject(B));
    }
    function Dt(m, y, C) {
      l.list().forEach((z) => St(() => z(m, y, C)));
    }
    function Pt(m, y, C, z, V) {
      const X = R(m, y);
      if (X) return X;
      const N = y === Lt, B = Yt ? history.state : {};
      C && (z || N ? n.replace(m.fullPath, G({
        scroll: N && B && B.scroll
      }, V)) : n.push(m.fullPath, V)), _.value = m, ce(m, y, C, N), mt();
    }
    let Mt;
    function Ce() {
      Mt || (Mt = n.listen((m, y, C) => {
        if (!D.listening) return;
        const z = I(m), V = ut(z);
        if (V) {
          Z(G(V, {
            replace: true,
            force: true
          }), z).catch(he);
          return;
        }
        h = z;
        const X = _.value;
        Yt && Fs(Hr(X.fullPath, C.delta), Le()), Et(z, X).catch((N) => jt(N, 12) ? N : jt(N, 2) ? (Z(G(v(N.to), {
          force: true
        }), z).then((B) => {
          jt(B, 20) && !C.delta && C.type === be.pop && n.go(-1, false);
        }).catch(he), Promise.reject()) : (C.delta && n.go(-C.delta, false), oe(N, z, X))).then((N) => {
          N = N || Pt(z, X, false), N && (C.delta && !jt(N, 8) ? n.go(-C.delta, false) : C.type === be.pop && jt(N, 20) && n.go(-1, false)), Dt(z, X, N);
        }).catch(he);
      }));
    }
    let se = _e(), ae = _e(), Kt;
    function oe(m, y, C) {
      mt(m);
      const z = ae.list();
      return z.length ? z.forEach((V) => V(m, y, C)) : console.error(m), Promise.reject(m);
    }
    function Ye() {
      return Kt && _.value !== Lt ? Promise.resolve() : new Promise((m, y) => {
        se.add([
          m,
          y
        ]);
      });
    }
    function mt(m) {
      return Kt || (Kt = !m, Ce(), se.list().forEach(([y, C]) => m ? C(m) : y()), se.reset()), m;
    }
    function ce(m, y, C, z) {
      const { scrollBehavior: V } = i;
      if (!Yt || !V) return Promise.resolve();
      const X = !C && ks(Hr(m.fullPath, 0)) || (z || !C) && history.state && history.state.scroll || null;
      return Wi().then(() => V(m, y, X)).then((N) => N && Ts(N)).catch((N) => oe(N, m, y));
    }
    const $t = (m) => n.go(m);
    let Gt;
    const E = /* @__PURE__ */ new Set(), D = {
      currentRoute: _,
      listening: true,
      addRoute: f,
      removeRoute: S,
      clearRoutes: t.clearRoutes,
      hasRoute: j,
      getRoutes: T,
      resolve: I,
      options: i,
      push: x,
      replace: bt,
      go: $t,
      back: () => $t(-1),
      forward: () => $t(1),
      beforeEach: o.add,
      beforeResolve: c.add,
      afterEach: l.add,
      onError: ae.add,
      isReady: Ye,
      install(m) {
        const y = this;
        m.component("RouterLink", sa), m.component("RouterView", la), m.config.globalProperties.$router = y, Object.defineProperty(m.config.globalProperties, "$route", {
          enumerable: true,
          get: () => gt(_)
        }), Yt && !Gt && _.value === Lt && (Gt = true, x(n.location).catch((V) => {
        }));
        const C = {};
        for (const V in Lt) Object.defineProperty(C, V, {
          get: () => _.value[V],
          enumerable: true
        });
        m.provide(Pr, y), m.provide(jr, wr(C)), m.provide(br, _);
        const z = m.unmount;
        E.add(m), m.unmount = function() {
          E.delete(m), E.size < 1 && (h = Lt, Mt && Mt(), Mt = null, _.value = Lt, Gt = false, Kt = false), z();
        };
      }
    };
    function A(m) {
      return m.reduce((y, C) => y.then(() => St(C)), Promise.resolve());
    }
    return D;
  }
  function da(i, t) {
    const e = [], r = [], n = [], o = Math.max(t.matched.length, i.matched.length);
    for (let c = 0; c < o; c++) {
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
  function ha(i) {
    return Zt(jr);
  }
  const wa = "" + new URL("rapier_wasm3d_bg-DvGJ34iZ.wasm", import.meta.url).href, ua = async (i = {}, t) => {
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
  function pa(i) {
    s = i;
  }
  const H = new Array(128).fill(void 0);
  H.push(void 0, null, true, false);
  function O(i) {
    return H[i];
  }
  let ue = H.length;
  function J(i) {
    ue === H.length && H.push(H.length + 1);
    const t = ue;
    return ue = H[t], H[t] = i, t;
  }
  function Be(i, t) {
    try {
      return i.apply(this, t);
    } catch (e) {
      s.__wbindgen_export_0(J(e));
    }
  }
  const ga = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let cn = new ga("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  cn.decode();
  let xe = null;
  function ba() {
    return (xe === null || xe.byteLength === 0) && (xe = new Uint8Array(s.memory.buffer)), xe;
  }
  function ln(i, t) {
    return i = i >>> 0, cn.decode(ba().subarray(i, i + t));
  }
  function k(i) {
    return i == null;
  }
  let Xt = null;
  function at() {
    return (Xt === null || Xt.buffer.detached === true || Xt.buffer.detached === void 0 && Xt.buffer !== s.memory.buffer) && (Xt = new DataView(s.memory.buffer)), Xt;
  }
  function ma(i) {
    i < 132 || (H[i] = ue, ue = i);
  }
  function me(i) {
    const t = O(i);
    return ma(i), t;
  }
  function d(i, t) {
    if (!(i instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  let U = 128;
  function $(i) {
    if (U == 1) throw new Error("out of js stack");
    return H[--U] = i, U;
  }
  let Ee = null;
  function fa() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Int32Array(s.memory.buffer)), Ee;
  }
  function ya(i, t) {
    return i = i >>> 0, fa().subarray(i / 4, i / 4 + t);
  }
  let Pe = null;
  function _n() {
    return (Pe === null || Pe.byteLength === 0) && (Pe = new Float32Array(s.memory.buffer)), Pe;
  }
  function ri(i, t) {
    return i = i >>> 0, _n().subarray(i / 4, i / 4 + t);
  }
  let je = null;
  function dn() {
    return (je === null || je.byteLength === 0) && (je = new Uint32Array(s.memory.buffer)), je;
  }
  function va(i, t) {
    return i = i >>> 0, dn().subarray(i / 4, i / 4 + t);
  }
  let _t = 0;
  function de(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return dn().set(i, e / 4), _t = i.length, e;
  }
  function Bt(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return _n().set(i, e / 4), _t = i.length, e;
  }
  const Ne = Object.freeze({
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
  }), yt = Object.freeze({
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
  }), st = Object.freeze({
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
  }), rr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawbroadphase_free(i >>> 0, 1));
  class It {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(It.prototype);
      return e.__wbg_ptr = t, rr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, rr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawbroadphase_free(t, 0);
    }
    constructor() {
      const t = s.rawbroadphase_new();
      return this.__wbg_ptr = t >>> 0, rr.register(this, this.__wbg_ptr, this), this;
    }
    castRay(t, e, r, n, o, c, l, _, h, u, w, b) {
      try {
        d(t, et), d(e, q), d(r, Y), d(n, p), d(o, p);
        const f = s.rawbroadphase_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, l, _, k(h) ? 4294967297 : h >>> 0, !k(u), k(u) ? 0 : u, !k(w), k(w) ? 0 : w, $(b));
        return f === 0 ? void 0 : Fr.__wrap(f);
      } finally {
        H[U++] = void 0;
      }
    }
    castRayAndGetNormal(t, e, r, n, o, c, l, _, h, u, w, b) {
      try {
        d(t, et), d(e, q), d(r, Y), d(n, p), d(o, p);
        const f = s.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, l, _, k(h) ? 4294967297 : h >>> 0, !k(u), k(u) ? 0 : u, !k(w), k(w) ? 0 : w, $(b));
        return f === 0 ? void 0 : Ge.__wrap(f);
      } finally {
        H[U++] = void 0;
      }
    }
    intersectionsWithRay(t, e, r, n, o, c, l, _, h, u, w, b, f) {
      try {
        d(t, et), d(e, q), d(r, Y), d(n, p), d(o, p), s.rawbroadphase_intersectionsWithRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, l, $(_), h, k(u) ? 4294967297 : u >>> 0, !k(w), k(w) ? 0 : w, !k(b), k(b) ? 0 : b, $(f));
      } finally {
        H[U++] = void 0, H[U++] = void 0;
      }
    }
    intersectionWithShape(t, e, r, n, o, c, l, _, h, u, w) {
      try {
        const S = s.__wbindgen_add_to_stack_pointer(-16);
        d(t, et), d(e, q), d(r, Y), d(n, p), d(o, L), d(c, F), s.rawbroadphase_intersectionWithShape(S, this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l, k(_) ? 4294967297 : _ >>> 0, !k(h), k(h) ? 0 : h, !k(u), k(u) ? 0 : u, $(w));
        var b = at().getInt32(S + 4 * 0, true), f = at().getFloat64(S + 8 * 1, true);
        return b === 0 ? void 0 : f;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16), H[U++] = void 0;
      }
    }
    projectPoint(t, e, r, n, o, c, l, _, h, u) {
      try {
        d(t, et), d(e, q), d(r, Y), d(n, p);
        const w = s.rawbroadphase_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c, k(l) ? 4294967297 : l >>> 0, !k(_), k(_) ? 0 : _, !k(h), k(h) ? 0 : h, $(u));
        return w === 0 ? void 0 : Ae.__wrap(w);
      } finally {
        H[U++] = void 0;
      }
    }
    projectPointAndGetFeature(t, e, r, n, o, c, l, _, h) {
      try {
        d(t, et), d(e, q), d(r, Y), d(n, p);
        const u = s.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, k(c) ? 4294967297 : c >>> 0, !k(l), k(l) ? 0 : l, !k(_), k(_) ? 0 : _, $(h));
        return u === 0 ? void 0 : Ae.__wrap(u);
      } finally {
        H[U++] = void 0;
      }
    }
    intersectionsWithPoint(t, e, r, n, o, c, l, _, h, u) {
      try {
        d(t, et), d(e, q), d(r, Y), d(n, p), s.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, $(o), c, k(l) ? 4294967297 : l >>> 0, !k(_), k(_) ? 0 : _, !k(h), k(h) ? 0 : h, $(u));
      } finally {
        H[U++] = void 0, H[U++] = void 0;
      }
    }
    castShape(t, e, r, n, o, c, l, _, h, u, w, b, f, S, T) {
      try {
        d(t, et), d(e, q), d(r, Y), d(n, p), d(o, L), d(c, p), d(l, F);
        const j = s.rawbroadphase_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, u, w, k(b) ? 4294967297 : b >>> 0, !k(f), k(f) ? 0 : f, !k(S), k(S) ? 0 : S, $(T));
        return j === 0 ? void 0 : Oe.__wrap(j);
      } finally {
        H[U++] = void 0;
      }
    }
    intersectionsWithShape(t, e, r, n, o, c, l, _, h, u, w, b) {
      try {
        d(t, et), d(e, q), d(r, Y), d(n, p), d(o, L), d(c, F), s.rawbroadphase_intersectionsWithShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, $(l), _, k(h) ? 4294967297 : h >>> 0, !k(u), k(u) ? 0 : u, !k(w), k(w) ? 0 : w, $(b));
      } finally {
        H[U++] = void 0, H[U++] = void 0;
      }
    }
    collidersWithAabbIntersectingAabb(t, e, r, n, o, c) {
      try {
        d(t, et), d(e, q), d(r, Y), d(n, p), d(o, p), s.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, $(c));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const ii = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawccdsolver_free(i >>> 0, 1));
  class mr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ii.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawccdsolver_free(t, 0);
    }
    constructor() {
      const t = s.rawccdsolver_new();
      return this.__wbg_ptr = t >>> 0, ii.register(this, this.__wbg_ptr, this), this;
    }
  }
  const ni = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcharactercollision_free(i >>> 0, 1));
  class hn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ni.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcharactercollision_free(t, 0);
    }
    constructor() {
      const t = s.rawcharactercollision_new();
      return this.__wbg_ptr = t >>> 0, ni.register(this, this.__wbg_ptr, this), this;
    }
    handle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    translationDeltaApplied() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
    translationDeltaRemaining() {
      const t = s.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
      return p.__wrap(t);
    }
    toi() {
      return s.rawcharactercollision_toi(this.__wbg_ptr);
    }
    worldWitness1() {
      const t = s.rawcharactercollision_worldWitness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    worldWitness2() {
      const t = s.rawcharactercollision_worldWitness2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    worldNormal1() {
      const t = s.rawcharactercollision_worldNormal1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    worldNormal2() {
      const t = s.rawcharactercollision_worldNormal2(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const ir = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcolliderset_free(i >>> 0, 1));
  class Y {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Y.prototype);
      return e.__wbg_ptr = t, ir.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ir.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcolliderset_free(t, 0);
    }
    coTranslation(t) {
      const e = s.rawcolliderset_coTranslation(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    coRotation(t) {
      const e = s.rawcolliderset_coRotation(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    coTranslationWrtParent(t) {
      const e = s.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coRotationWrtParent(t) {
      const e = s.rawcolliderset_coRotationWrtParent(this.__wbg_ptr, t);
      return e === 0 ? void 0 : L.__wrap(e);
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
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coHalfExtents(t) {
      const e = s.rawcolliderset_coHalfExtents(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coSetHalfExtents(t, e) {
      d(e, p), s.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, t, e.__wbg_ptr);
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
        var e = at().getInt32(n + 4 * 0, true), r = at().getInt32(n + 4 * 1, true);
        let o;
        return e !== 0 && (o = ya(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coVoxelSize(t) {
      const e = s.rawcolliderset_coVoxelSize(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
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
        var e = at().getInt32(n + 4 * 0, true), r = at().getInt32(n + 4 * 1, true);
        let o;
        return e !== 0 && (o = ri(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coIndices(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coIndices(n, this.__wbg_ptr, t);
        var e = at().getInt32(n + 4 * 0, true), r = at().getInt32(n + 4 * 1, true);
        let o;
        return e !== 0 && (o = va(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
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
        var e = at().getInt32(n + 4 * 0, true), r = at().getInt32(n + 4 * 1, true);
        let o;
        return e !== 0 && (o = ri(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), o;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coHeightfieldScale(t) {
      const e = s.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
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
        var e = at().getInt32(n + 4 * 0, true), r = at().getFloat64(n + 8 * 1, true);
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
      return d(e, p), s.rawcolliderset_coContainsPoint(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
    coCastShape(t, e, r, n, o, c, l, _, h) {
      d(e, p), d(r, F), d(n, p), d(o, L), d(c, p);
      const u = s.rawcolliderset_coCastShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l, _, h);
      return u === 0 ? void 0 : Ve.__wrap(u);
    }
    coCastCollider(t, e, r, n, o, c, l) {
      d(e, p), d(n, p);
      const _ = s.rawcolliderset_coCastCollider(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o, c, l);
      return _ === 0 ? void 0 : Oe.__wrap(_);
    }
    coIntersectsShape(t, e, r, n) {
      return d(e, F), d(r, p), d(n, L), s.rawcolliderset_coIntersectsShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr) !== 0;
    }
    coContactShape(t, e, r, n, o) {
      d(e, F), d(r, p), d(n, L);
      const c = s.rawcolliderset_coContactShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o);
      return c === 0 ? void 0 : fe.__wrap(c);
    }
    coContactCollider(t, e, r) {
      const n = s.rawcolliderset_coContactCollider(this.__wbg_ptr, t, e, r);
      return n === 0 ? void 0 : fe.__wrap(n);
    }
    coProjectPoint(t, e, r) {
      d(e, p);
      const n = s.rawcolliderset_coProjectPoint(this.__wbg_ptr, t, e.__wbg_ptr, r);
      return He.__wrap(n);
    }
    coIntersectsRay(t, e, r, n) {
      return d(e, p), d(r, p), s.rawcolliderset_coIntersectsRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n) !== 0;
    }
    coCastRay(t, e, r, n, o) {
      return d(e, p), d(r, p), s.rawcolliderset_coCastRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, o);
    }
    coCastRayAndGetNormal(t, e, r, n, o) {
      d(e, p), d(r, p);
      const c = s.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, o);
      return c === 0 ? void 0 : We.__wrap(c);
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
      d(e, F), s.rawcolliderset_coSetShape(this.__wbg_ptr, t, e.__wbg_ptr);
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
      d(r, p), d(n, p), d(o, L), s.rawcolliderset_coSetMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr);
    }
    constructor() {
      const t = s.rawcolliderset_new();
      return this.__wbg_ptr = t >>> 0, ir.register(this, this.__wbg_ptr, this), this;
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    createCollider(t, e, r, n, o, c, l, _, h, u, w, b, f, S, T, j, I, v, R, x, bt, ut, Z, kt, St) {
      try {
        const Pt = s.__wbindgen_add_to_stack_pointer(-16);
        d(e, F), d(r, p), d(n, L), d(l, p), d(_, p), d(h, L), d(St, q), s.rawcolliderset_createCollider(Pt, this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u, w, b, f, S, T, j, I, v, R, x, bt, ut, Z, kt, St.__wbg_ptr);
        var Et = at().getInt32(Pt + 4 * 0, true), Dt = at().getFloat64(Pt + 8 * 1, true);
        return Et === 0 ? void 0 : Dt;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    remove(t, e, r, n) {
      d(e, Tt), d(r, q), s.rawcolliderset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    isHandleValid(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachColliderHandle(t) {
      try {
        s.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const si = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcollidershapecasthit_free(i >>> 0, 1));
  class Oe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Oe.prototype);
      return e.__wbg_ptr = t, si.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, si.unregister(this), t;
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
      return p.__wrap(t);
    }
    witness2() {
      const t = s.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal1() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal2() {
      const t = s.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const ai = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactforceevent_free(i >>> 0, 1));
  class Ar {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ar.prototype);
      return e.__wbg_ptr = t, ai.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ai.unregister(this), t;
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
      return p.__wrap(t);
    }
    total_force_magnitude() {
      return s.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    max_force_direction() {
      const t = s.rawcontactforceevent_max_force_direction(this.__wbg_ptr);
      return p.__wrap(t);
    }
    max_force_magnitude() {
      return s.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
  }
  const oi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactmanifold_free(i >>> 0, 1));
  class Ir {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ir.prototype);
      return e.__wbg_ptr = t, oi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, oi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactmanifold_free(t, 0);
    }
    normal() {
      const t = s.rawcontactmanifold_normal(this.__wbg_ptr);
      return p.__wrap(t);
    }
    local_n1() {
      const t = s.rawcontactmanifold_local_n1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    local_n2() {
      const t = s.rawcontactmanifold_local_n2(this.__wbg_ptr);
      return p.__wrap(t);
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
      return e === 0 ? void 0 : p.__wrap(e);
    }
    contact_local_p2(t) {
      const e = s.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
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
      return e === 0 ? void 0 : p.__wrap(e);
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
      return p.__wrap(e);
    }
  }
  const ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactpair_free(i >>> 0, 1));
  class zr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zr.prototype);
      return e.__wbg_ptr = t, ci.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ci.unregister(this), t;
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
  const li = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdebugrenderpipeline_free(i >>> 0, 1));
  class Sa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, li.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdebugrenderpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawdebugrenderpipeline_new();
      return this.__wbg_ptr = t >>> 0, li.register(this, this.__wbg_ptr, this), this;
    }
    vertices() {
      const t = s.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
      return me(t);
    }
    colors() {
      const t = s.rawdebugrenderpipeline_colors(this.__wbg_ptr);
      return me(t);
    }
    render(t, e, r, n, o, c, l) {
      try {
        d(t, q), d(e, Y), d(r, zt), d(n, Ft), d(o, et), s.rawdebugrenderpipeline_render(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, $(l));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const _i = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdeserializedworld_free(i >>> 0, 1));
  class Tr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tr.prototype);
      return e.__wbg_ptr = t, _i.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _i.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdeserializedworld_free(t, 0);
    }
    takeGravity() {
      const t = s.rawdeserializedworld_takeGravity(this.__wbg_ptr);
      return t === 0 ? void 0 : p.__wrap(t);
    }
    takeIntegrationParameters() {
      const t = s.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
      return t === 0 ? void 0 : Ut.__wrap(t);
    }
    takeIslandManager() {
      const t = s.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
      return t === 0 ? void 0 : Tt.__wrap(t);
    }
    takeBroadPhase() {
      const t = s.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : It.__wrap(t);
    }
    takeNarrowPhase() {
      const t = s.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : et.__wrap(t);
    }
    takeBodies() {
      const t = s.rawdeserializedworld_takeBodies(this.__wbg_ptr);
      return t === 0 ? void 0 : q.__wrap(t);
    }
    takeColliders() {
      const t = s.rawdeserializedworld_takeColliders(this.__wbg_ptr);
      return t === 0 ? void 0 : Y.__wrap(t);
    }
    takeImpulseJoints() {
      const t = s.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : zt.__wrap(t);
    }
    takeMultibodyJoints() {
      const t = s.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : Ft.__wrap(t);
    }
  }
  const di = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdynamicraycastvehiclecontroller_free(i >>> 0, 1));
  class Ra {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, di.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdynamicraycastvehiclecontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawdynamicraycastvehiclecontroller_new(t);
      return this.__wbg_ptr = e >>> 0, di.register(this, this.__wbg_ptr, this), this;
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
      d(t, p), d(e, p), d(r, p), s.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, o);
    }
    num_wheels() {
      return s.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
    }
    update_vehicle(t, e, r, n, o, c, l, _) {
      try {
        d(e, It), d(r, et), d(n, q), d(o, Y), s.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, k(l) ? 4294967297 : l >>> 0, $(_));
      } finally {
        H[U++] = void 0;
      }
    }
    wheel_chassis_connection_point_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    set_wheel_chassis_connection_point_cs(t, e) {
      d(e, p), s.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr, t, e.__wbg_ptr);
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
      return e === 0 ? void 0 : p.__wrap(e);
    }
    set_wheel_direction_cs(t, e) {
      d(e, p), s.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_axle_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    set_wheel_axle_cs(t, e) {
      d(e, p), s.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr, t, e.__wbg_ptr);
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
      return e === 0 ? void 0 : p.__wrap(e);
    }
    wheel_contact_point_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    wheel_suspension_length(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_hard_point_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    wheel_is_in_contact(t) {
      return s.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr, t) !== 0;
    }
    wheel_ground_object(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawdynamicraycastvehiclecontroller_wheel_ground_object(n, this.__wbg_ptr, t);
        var e = at().getInt32(n + 4 * 0, true), r = at().getFloat64(n + 8 * 1, true);
        return e === 0 ? void 0 : r;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  const hi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_raweventqueue_free(i >>> 0, 1));
  class wn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, hi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_raweventqueue_free(t, 0);
    }
    constructor(t) {
      const e = s.raweventqueue_new(t);
      return this.__wbg_ptr = e >>> 0, hi.register(this, this.__wbg_ptr, this), this;
    }
    drainCollisionEvents(t) {
      try {
        s.raweventqueue_drainCollisionEvents(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    drainContactForceEvents(t) {
      try {
        s.raweventqueue_drainContactForceEvents(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    clear() {
      s.raweventqueue_clear(this.__wbg_ptr);
    }
  }
  const wi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawgenericjoint_free(i >>> 0, 1));
  class ot {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ot.prototype);
      return e.__wbg_ptr = t, wi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, wi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawgenericjoint_free(t, 0);
    }
    static generic(t, e, r, n) {
      d(t, p), d(e, p), d(r, p);
      const o = s.rawgenericjoint_generic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return o === 0 ? void 0 : ot.__wrap(o);
    }
    static spring(t, e, r, n, o) {
      d(n, p), d(o, p);
      const c = s.rawgenericjoint_spring(t, e, r, n.__wbg_ptr, o.__wbg_ptr);
      return ot.__wrap(c);
    }
    static rope(t, e, r) {
      d(e, p), d(r, p);
      const n = s.rawgenericjoint_rope(t, e.__wbg_ptr, r.__wbg_ptr);
      return ot.__wrap(n);
    }
    static spherical(t, e) {
      d(t, p), d(e, p);
      const r = s.rawgenericjoint_spherical(t.__wbg_ptr, e.__wbg_ptr);
      return ot.__wrap(r);
    }
    static prismatic(t, e, r, n, o, c) {
      d(t, p), d(e, p), d(r, p);
      const l = s.rawgenericjoint_prismatic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, o, c);
      return l === 0 ? void 0 : ot.__wrap(l);
    }
    static fixed(t, e, r, n) {
      d(t, p), d(e, L), d(r, p), d(n, L);
      const o = s.rawgenericjoint_fixed(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr);
      return ot.__wrap(o);
    }
    static revolute(t, e, r) {
      d(t, p), d(e, p), d(r, p);
      const n = s.rawgenericjoint_revolute(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return n === 0 ? void 0 : ot.__wrap(n);
    }
  }
  const nr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawimpulsejointset_free(i >>> 0, 1));
  class zt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zt.prototype);
      return e.__wbg_ptr = t, nr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, nr.unregister(this), t;
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
      return p.__wrap(e);
    }
    jointAnchor2(t) {
      const e = s.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    jointSetAnchor1(t, e) {
      d(e, p), s.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    jointSetAnchor2(t, e) {
      d(e, p), s.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, t, e.__wbg_ptr);
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
      return this.__wbg_ptr = t >>> 0, nr.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, ot), s.rawimpulsejointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
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
        s.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, $(e));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const sr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawintegrationparameters_free(i >>> 0, 1));
  class Ut {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ut.prototype);
      return e.__wbg_ptr = t, sr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, sr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawintegrationparameters_free(t, 0);
    }
    constructor() {
      const t = s.rawintegrationparameters_new();
      return this.__wbg_ptr = t >>> 0, sr.register(this, this.__wbg_ptr, this), this;
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
  const ar = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawislandmanager_free(i >>> 0, 1));
  class Tt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tt.prototype);
      return e.__wbg_ptr = t, ar.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ar.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawislandmanager_free(t, 0);
    }
    constructor() {
      const t = s.rawislandmanager_new();
      return this.__wbg_ptr = t >>> 0, ar.register(this, this.__wbg_ptr, this), this;
    }
    forEachActiveRigidBodyHandle(t) {
      try {
        s.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const ui = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawkinematiccharactercontroller_free(i >>> 0, 1));
  class Ca {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ui.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawkinematiccharactercontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawkinematiccharactercontroller_new(t);
      return this.__wbg_ptr = e >>> 0, ui.register(this, this.__wbg_ptr, this), this;
    }
    up() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
    setUp(t) {
      d(t, p), s.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, t.__wbg_ptr);
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
    computeColliderMovement(t, e, r, n, o, c, l, _, h, u, w, b) {
      try {
        d(e, It), d(r, et), d(n, q), d(o, Y), d(l, p), s.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c, l.__wbg_ptr, _, k(h) ? 4294967297 : Math.fround(h), u, k(w) ? 4294967297 : w >>> 0, $(b));
      } finally {
        H[U++] = void 0;
      }
    }
    computedMovement() {
      const t = s.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
      return p.__wrap(t);
    }
    computedGrounded() {
      return s.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr) !== 0;
    }
    numComputedCollisions() {
      return s.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
    }
    computedCollision(t, e) {
      return d(e, hn), s.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
  }
  const or = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawmultibodyjointset_free(i >>> 0, 1));
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
      return p.__wrap(e);
    }
    jointAnchor2(t) {
      const e = s.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, t);
      return p.__wrap(e);
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
      return this.__wbg_ptr = t >>> 0, or.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, ot), s.rawmultibodyjointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
    }
    remove(t, e) {
      s.rawmultibodyjointset_remove(this.__wbg_ptr, t, e);
    }
    contains(t) {
      return s.rawmultibodyjointset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        s.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, $(e));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const cr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawnarrowphase_free(i >>> 0, 1));
  class et {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(et.prototype);
      return e.__wbg_ptr = t, cr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, cr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawnarrowphase_free(t, 0);
    }
    constructor() {
      const t = s.rawnarrowphase_new();
      return this.__wbg_ptr = t >>> 0, cr.register(this, this.__wbg_ptr, this), this;
    }
    contact_pairs_with(t, e) {
      s.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, t, J(e));
    }
    contact_pair(t, e) {
      const r = s.rawnarrowphase_contact_pair(this.__wbg_ptr, t, e);
      return r === 0 ? void 0 : zr.__wrap(r);
    }
    intersection_pairs_with(t, e) {
      s.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, t, J(e));
    }
    intersection_pair(t, e) {
      return s.rawnarrowphase_intersection_pair(this.__wbg_ptr, t, e) !== 0;
    }
  }
  const pi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawphysicspipeline_free(i >>> 0, 1));
  class xa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, pi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawphysicspipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawphysicspipeline_new();
      return this.__wbg_ptr = t >>> 0, pi.register(this, this.__wbg_ptr, this), this;
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
    step(t, e, r, n, o, c, l, _, h, u) {
      d(t, p), d(e, Ut), d(r, Tt), d(n, It), d(o, et), d(c, q), d(l, Y), d(_, zt), d(h, Ft), d(u, mr), s.rawphysicspipeline_step(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr);
    }
    stepWithEvents(t, e, r, n, o, c, l, _, h, u, w, b, f, S) {
      d(t, p), d(e, Ut), d(r, Tt), d(n, It), d(o, et), d(c, q), d(l, Y), d(_, zt), d(h, Ft), d(u, mr), d(w, wn), s.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, w.__wbg_ptr, J(b), J(f), J(S));
    }
  }
  const gi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpidcontroller_free(i >>> 0, 1));
  class Ea {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpidcontroller_free(t, 0);
    }
    constructor(t, e, r, n) {
      const o = s.rawpidcontroller_new(t, e, r, n);
      return this.__wbg_ptr = o >>> 0, gi.register(this, this.__wbg_ptr, this), this;
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
      d(e, q), d(n, p), d(o, p), s.rawpidcontroller_apply_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
    }
    apply_angular_correction(t, e, r, n, o) {
      d(e, q), d(n, L), d(o, p), s.rawpidcontroller_apply_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
    }
    linear_correction(t, e, r, n, o) {
      d(e, q), d(n, p), d(o, p);
      const c = s.rawpidcontroller_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
      return p.__wrap(c);
    }
    angular_correction(t, e, r, n, o) {
      d(e, q), d(n, L), d(o, p);
      const c = s.rawpidcontroller_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, o.__wbg_ptr);
      return p.__wrap(c);
    }
  }
  const bi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointcolliderprojection_free(i >>> 0, 1));
  class Ae {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ae.prototype);
      return e.__wbg_ptr = t, bi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, bi.unregister(this), t;
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
      return p.__wrap(t);
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
  const mi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointprojection_free(i >>> 0, 1));
  class He {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(He.prototype);
      return e.__wbg_ptr = t, mi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, mi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpointprojection_free(t, 0);
    }
    point() {
      const t = s.rawpointprojection_point(this.__wbg_ptr);
      return p.__wrap(t);
    }
    isInside() {
      return s.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
    }
  }
  const fi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawraycolliderhit_free(i >>> 0, 1));
  class Fr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Fr.prototype);
      return e.__wbg_ptr = t, fi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, fi.unregister(this), t;
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
  const yi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawraycolliderintersection_free(i >>> 0, 1));
  class Ge {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ge.prototype);
      return e.__wbg_ptr = t, yi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, yi.unregister(this), t;
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
      return p.__wrap(t);
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
  const vi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrayintersection_free(i >>> 0, 1));
  class We {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(We.prototype);
      return e.__wbg_ptr = t, vi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, vi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrayintersection_free(t, 0);
    }
    normal() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
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
  const lr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrigidbodyset_free(i >>> 0, 1));
  class q {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(q.prototype);
      return e.__wbg_ptr = t, lr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, lr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrigidbodyset_free(t, 0);
    }
    rbTranslation(t) {
      const e = s.rawrigidbodyset_rbTranslation(this.__wbg_ptr, t);
      return p.__wrap(e);
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
      return p.__wrap(e);
    }
    rbNextRotation(t) {
      const e = s.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    rbSetTranslation(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, t, e, r, n, o);
    }
    rbSetRotation(t, e, r, n, o, c) {
      s.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, t, e, r, n, o, c);
    }
    rbSetLinvel(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetAngvel(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetNextKinematicTranslation(t, e, r, n) {
      s.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, t, e, r, n);
    }
    rbSetNextKinematicRotation(t, e, r, n, o) {
      s.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, t, e, r, n, o);
    }
    rbRecomputeMassPropertiesFromColliders(t, e) {
      d(e, Y), s.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    rbSetAdditionalMass(t, e, r) {
      s.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, t, e, r);
    }
    rbSetAdditionalMassProperties(t, e, r, n, o, c) {
      d(r, p), d(n, p), d(o, L), s.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c);
    }
    rbLinvel(t) {
      const e = s.rawrigidbodyset_rbLinvel(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbAngvel(t) {
      const e = s.rawrigidbodyset_rbAngvel(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbVelocityAtPoint(t, e) {
      d(e, p);
      const r = s.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr, t, e.__wbg_ptr);
      return p.__wrap(r);
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
      return p.__wrap(e);
    }
    rbLocalCom(t) {
      const e = s.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbWorldCom(t) {
      const e = s.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbInvPrincipalInertiaSqrt(t) {
      const e = s.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbPrincipalInertiaLocalFrame(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    rbPrincipalInertia(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, t);
      return p.__wrap(e);
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
      d(e, p), s.rawrigidbodyset_rbAddForce(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbApplyImpulse(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbAddTorque(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbApplyTorqueImpulse(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbAddForceAtPoint(t, e, r, n) {
      d(e, p), d(r, p), s.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    rbApplyImpulseAtPoint(t, e, r, n) {
      d(e, p), d(r, p), s.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
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
      return p.__wrap(e);
    }
    rbUserTorque(t) {
      const e = s.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    constructor() {
      const t = s.rawrigidbodyset_new();
      return this.__wbg_ptr = t >>> 0, lr.register(this, this.__wbg_ptr, this), this;
    }
    createRigidBody(t, e, r, n, o, c, l, _, h, u, w, b, f, S, T, j, I, v, R, x, bt, ut, Z, kt, St, Et) {
      return d(e, p), d(r, L), d(l, p), d(_, p), d(h, p), d(u, p), d(w, L), s.rawrigidbodyset_createRigidBody(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, o, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, w.__wbg_ptr, b, f, S, T, j, I, v, R, x, bt, ut, Z, kt, St, Et);
    }
    remove(t, e, r, n, o) {
      d(e, Tt), d(r, Y), d(n, zt), d(o, Ft), s.rawrigidbodyset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr);
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawrigidbodyset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachRigidBodyHandle(t) {
      try {
        s.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    propagateModifiedBodyPositionsToColliders(t) {
      d(t, Y), s.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  const _r = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrotation_free(i >>> 0, 1));
  class L {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(L.prototype);
      return e.__wbg_ptr = t, _r.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _r.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrotation_free(t, 0);
    }
    constructor(t, e, r, n) {
      const o = s.rawrotation_new(t, e, r, n);
      return this.__wbg_ptr = o >>> 0, _r.register(this, this.__wbg_ptr, this), this;
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
  const Si = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawsdpmatrix3_free(i >>> 0, 1));
  class Ie {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ie.prototype);
      return e.__wbg_ptr = t, Si.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Si.unregister(this), t;
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
  const Ri = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawserializationpipeline_free(i >>> 0, 1));
  class Pa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ri.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawserializationpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawccdsolver_new();
      return this.__wbg_ptr = t >>> 0, Ri.register(this, this.__wbg_ptr, this), this;
    }
    serializeAll(t, e, r, n, o, c, l, _, h) {
      d(t, p), d(e, Ut), d(r, Tt), d(n, It), d(o, et), d(c, q), d(l, Y), d(_, zt), d(h, Ft);
      const u = s.rawserializationpipeline_serializeAll(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr);
      return me(u);
    }
    deserializeAll(t) {
      const e = s.rawserializationpipeline_deserializeAll(this.__wbg_ptr, J(t));
      return e === 0 ? void 0 : Tr.__wrap(e);
    }
  }
  const Ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshape_free(i >>> 0, 1));
  class F {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(F.prototype);
      return e.__wbg_ptr = t, Ci.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ci.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshape_free(t, 0);
    }
    static cuboid(t, e, r) {
      const n = s.rawshape_cuboid(t, e, r);
      return F.__wrap(n);
    }
    static roundCuboid(t, e, r, n) {
      const o = s.rawshape_roundCuboid(t, e, r, n);
      return F.__wrap(o);
    }
    static ball(t) {
      const e = s.rawshape_ball(t);
      return F.__wrap(e);
    }
    static halfspace(t) {
      d(t, p);
      const e = s.rawshape_halfspace(t.__wbg_ptr);
      return F.__wrap(e);
    }
    static capsule(t, e) {
      const r = s.rawshape_capsule(t, e);
      return F.__wrap(r);
    }
    static cylinder(t, e) {
      const r = s.rawshape_cylinder(t, e);
      return F.__wrap(r);
    }
    static roundCylinder(t, e, r) {
      const n = s.rawshape_roundCylinder(t, e, r);
      return F.__wrap(n);
    }
    static cone(t, e) {
      const r = s.rawshape_cone(t, e);
      return F.__wrap(r);
    }
    static roundCone(t, e, r) {
      const n = s.rawshape_roundCone(t, e, r);
      return F.__wrap(n);
    }
    static voxels(t, e) {
      d(t, p);
      const r = de(e, s.__wbindgen_export_2), n = _t, o = s.rawshape_voxels(t.__wbg_ptr, r, n);
      return F.__wrap(o);
    }
    static voxelsFromPoints(t, e) {
      d(t, p);
      const r = Bt(e, s.__wbindgen_export_2), n = _t, o = s.rawshape_voxelsFromPoints(t.__wbg_ptr, r, n);
      return F.__wrap(o);
    }
    static polyline(t, e) {
      const r = Bt(t, s.__wbindgen_export_2), n = _t, o = de(e, s.__wbindgen_export_2), c = _t, l = s.rawshape_polyline(r, n, o, c);
      return F.__wrap(l);
    }
    static trimesh(t, e, r) {
      const n = Bt(t, s.__wbindgen_export_2), o = _t, c = de(e, s.__wbindgen_export_2), l = _t, _ = s.rawshape_trimesh(n, o, c, l, r);
      return _ === 0 ? void 0 : F.__wrap(_);
    }
    static heightfield(t, e, r, n, o) {
      const c = Bt(r, s.__wbindgen_export_2), l = _t;
      d(n, p);
      const _ = s.rawshape_heightfield(t, e, c, l, n.__wbg_ptr, o);
      return F.__wrap(_);
    }
    static segment(t, e) {
      d(t, p), d(e, p);
      const r = s.rawshape_segment(t.__wbg_ptr, e.__wbg_ptr);
      return F.__wrap(r);
    }
    static triangle(t, e, r) {
      d(t, p), d(e, p), d(r, p);
      const n = s.rawshape_triangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return F.__wrap(n);
    }
    static roundTriangle(t, e, r, n) {
      d(t, p), d(e, p), d(r, p);
      const o = s.rawshape_roundTriangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return F.__wrap(o);
    }
    static convexHull(t) {
      const e = Bt(t, s.__wbindgen_export_2), r = _t, n = s.rawshape_convexHull(e, r);
      return n === 0 ? void 0 : F.__wrap(n);
    }
    static roundConvexHull(t, e) {
      const r = Bt(t, s.__wbindgen_export_2), n = _t, o = s.rawshape_roundConvexHull(r, n, e);
      return o === 0 ? void 0 : F.__wrap(o);
    }
    static convexMesh(t, e) {
      const r = Bt(t, s.__wbindgen_export_2), n = _t, o = de(e, s.__wbindgen_export_2), c = _t, l = s.rawshape_convexMesh(r, n, o, c);
      return l === 0 ? void 0 : F.__wrap(l);
    }
    static roundConvexMesh(t, e, r) {
      const n = Bt(t, s.__wbindgen_export_2), o = _t, c = de(e, s.__wbindgen_export_2), l = _t, _ = s.rawshape_roundConvexMesh(n, o, c, l, r);
      return _ === 0 ? void 0 : F.__wrap(_);
    }
    castShape(t, e, r, n, o, c, l, _, h, u) {
      d(t, p), d(e, L), d(r, p), d(n, F), d(o, p), d(c, L), d(l, p);
      const w = s.rawshape_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, u);
      return w === 0 ? void 0 : Ve.__wrap(w);
    }
    intersectsShape(t, e, r, n, o) {
      return d(t, p), d(e, L), d(r, F), d(n, p), d(o, L), s.rawshape_intersectsShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr) !== 0;
    }
    contactShape(t, e, r, n, o, c) {
      d(t, p), d(e, L), d(r, F), d(n, p), d(o, L);
      const l = s.rawshape_contactShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, c);
      return l === 0 ? void 0 : fe.__wrap(l);
    }
    containsPoint(t, e, r) {
      return d(t, p), d(e, L), d(r, p), s.rawshape_containsPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr) !== 0;
    }
    projectPoint(t, e, r, n) {
      d(t, p), d(e, L), d(r, p);
      const o = s.rawshape_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return He.__wrap(o);
    }
    intersectsRay(t, e, r, n, o) {
      return d(t, p), d(e, L), d(r, p), d(n, p), s.rawshape_intersectsRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o) !== 0;
    }
    castRay(t, e, r, n, o, c) {
      return d(t, p), d(e, L), d(r, p), d(n, p), s.rawshape_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c);
    }
    castRayAndGetNormal(t, e, r, n, o, c) {
      d(t, p), d(e, L), d(r, p), d(n, p);
      const l = s.rawshape_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, o, c);
      return l === 0 ? void 0 : We.__wrap(l);
    }
  }
  const xi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecasthit_free(i >>> 0, 1));
  class Ve {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ve.prototype);
      return e.__wbg_ptr = t, xi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xi.unregister(this), t;
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
      return p.__wrap(t);
    }
    witness2() {
      const t = s.rawcontactforceevent_total_force(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal1() {
      const t = s.rawshapecasthit_normal1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal2() {
      const t = s.rawshapecasthit_normal2(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const Ei = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecontact_free(i >>> 0, 1));
  class fe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(fe.prototype);
      return e.__wbg_ptr = t, Ei.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ei.unregister(this), t;
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
      return p.__wrap(t);
    }
    point2() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal1() {
      const t = s.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal2() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const dr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawvector_free(i >>> 0, 1));
  class p {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(p.prototype);
      return e.__wbg_ptr = t, dr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, dr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawvector_free(t, 0);
    }
    static zero() {
      const t = s.rawvector_zero();
      return p.__wrap(t);
    }
    constructor(t, e, r) {
      const n = s.rawvector_new(t, e, r);
      return this.__wbg_ptr = n >>> 0, dr.register(this, this.__wbg_ptr, this), this;
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
      return p.__wrap(t);
    }
    yxz() {
      const t = s.rawvector_yxz(this.__wbg_ptr);
      return p.__wrap(t);
    }
    zxy() {
      const t = s.rawvector_zxy(this.__wbg_ptr);
      return p.__wrap(t);
    }
    xzy() {
      const t = s.rawvector_xzy(this.__wbg_ptr);
      return p.__wrap(t);
    }
    yzx() {
      const t = s.rawvector_yzx(this.__wbg_ptr);
      return p.__wrap(t);
    }
    zyx() {
      const t = s.rawvector_zyx(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  function ja(i, t, e, r) {
    const n = O(i).bind(O(t), O(e), O(r));
    return J(n);
  }
  function Aa(i) {
    const t = O(i).buffer;
    return J(t);
  }
  function Ia() {
    return Be(function(i, t) {
      const e = O(i).call(O(t));
      return J(e);
    }, arguments);
  }
  function za() {
    return Be(function(i, t, e) {
      const r = O(i).call(O(t), O(e));
      return J(r);
    }, arguments);
  }
  function Ta() {
    return Be(function(i, t, e, r) {
      const n = O(i).call(O(t), O(e), O(r));
      return J(n);
    }, arguments);
  }
  function Fa() {
    return Be(function(i, t, e, r, n) {
      const o = O(i).call(O(t), O(e), O(r), O(n));
      return J(o);
    }, arguments);
  }
  function ka(i) {
    return O(i).length;
  }
  function Da(i) {
    return O(i).length;
  }
  function Ma(i) {
    const t = new Uint8Array(O(i));
    return J(t);
  }
  function La(i, t) {
    const e = new Function(ln(i, t));
    return J(e);
  }
  function Ba(i, t, e) {
    const r = new Uint8Array(O(i), t >>> 0, e >>> 0);
    return J(r);
  }
  function Na(i, t, e) {
    const r = new Float32Array(O(i), t >>> 0, e >>> 0);
    return J(r);
  }
  function Oa(i) {
    const t = new Float32Array(i >>> 0);
    return J(t);
  }
  function Ha(i) {
    return O(i).now();
  }
  function Ga(i) {
    const t = O(i).performance;
    return J(t);
  }
  function Wa(i) {
    const t = Ar.__wrap(i);
    return J(t);
  }
  function Va(i) {
    const t = Ge.__wrap(i);
    return J(t);
  }
  function Ua(i, t, e) {
    O(i).set(O(t), e >>> 0);
  }
  function Ja(i, t, e) {
    O(i).set(O(t), e >>> 0);
  }
  function qa() {
    const i = typeof global > "u" ? null : global;
    return k(i) ? 0 : J(i);
  }
  function Ka() {
    const i = typeof globalThis > "u" ? null : globalThis;
    return k(i) ? 0 : J(i);
  }
  function $a() {
    const i = typeof self > "u" ? null : self;
    return k(i) ? 0 : J(i);
  }
  function Xa() {
    const i = typeof window > "u" ? null : window;
    return k(i) ? 0 : J(i);
  }
  function Ya(i) {
    const t = O(i);
    return typeof t == "boolean" ? t ? 1 : 0 : 2;
  }
  function Qa(i) {
    return typeof O(i) == "function";
  }
  function Za(i) {
    return O(i) === void 0;
  }
  function to() {
    const i = s.memory;
    return J(i);
  }
  function eo(i, t) {
    const e = O(t), r = typeof e == "number" ? e : void 0;
    at().setFloat64(i + 8 * 1, k(r) ? 0 : r, true), at().setInt32(i + 4 * 0, !k(r), true);
  }
  function ro(i) {
    return J(i);
  }
  function io(i) {
    const t = O(i);
    return J(t);
  }
  function no(i) {
    me(i);
  }
  function so(i, t) {
    throw new Error(ln(i, t));
  }
  URL = globalThis.URL;
  const a = await ua({
    "./rapier_wasm3d_bg.js": {
      __wbindgen_number_new: ro,
      __wbindgen_boolean_get: Ya,
      __wbindgen_object_drop_ref: no,
      __wbindgen_number_get: eo,
      __wbindgen_is_function: Qa,
      __wbg_rawraycolliderintersection_new: Va,
      __wbg_rawcontactforceevent_new: Wa,
      __wbg_performance_7a3ffd0b17f663ad: Ga,
      __wbindgen_is_undefined: Za,
      __wbg_now_2c95c9de01293173: Ha,
      __wbindgen_object_clone_ref: io,
      __wbg_newnoargs_105ed471475aaf50: La,
      __wbg_call_672a4d21634d4a24: Ia,
      __wbg_call_7cccdd69e0791ae2: za,
      __wbg_call_833bed5770ea2041: Ta,
      __wbg_call_b8adc8b1d0a0d8eb: Fa,
      __wbg_bind_c8359b1cba058168: ja,
      __wbg_buffer_609cc3eee51ed158: Aa,
      __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: Ka,
      __wbg_static_accessor_SELF_37c5d418e4bf5819: $a,
      __wbg_static_accessor_WINDOW_5de37043a91a9c40: Xa,
      __wbg_static_accessor_GLOBAL_88a902d13a557d07: qa,
      __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: Ba,
      __wbg_new_a12002a7f91c75be: Ma,
      __wbg_set_65595bdd868b3009: Ja,
      __wbg_length_a446193dc22c12f8: Da,
      __wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354: Na,
      __wbg_set_10bad9bee0e9c58b: Ua,
      __wbg_length_3b4f022188ae8db6: ka,
      __wbg_newwithlength_5a5efe313cfd59f1: Oa,
      __wbindgen_throw: so,
      __wbindgen_memory: to
    }
  }, wa), ao = a.memory, oo = a.version, co = a.__wbg_rawkinematiccharactercontroller_free, lo = a.rawkinematiccharactercontroller_new, _o = a.rawkinematiccharactercontroller_setUp, ho = a.rawkinematiccharactercontroller_normalNudgeFactor, wo = a.rawkinematiccharactercontroller_setNormalNudgeFactor, uo = a.rawkinematiccharactercontroller_setOffset, po = a.rawkinematiccharactercontroller_slideEnabled, go = a.rawkinematiccharactercontroller_setSlideEnabled, bo = a.rawkinematiccharactercontroller_autostepMaxHeight, mo = a.rawkinematiccharactercontroller_autostepMinWidth, fo = a.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, yo = a.rawkinematiccharactercontroller_autostepEnabled, vo = a.rawkinematiccharactercontroller_enableAutostep, So = a.rawkinematiccharactercontroller_disableAutostep, Ro = a.rawkinematiccharactercontroller_maxSlopeClimbAngle, Co = a.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, xo = a.rawkinematiccharactercontroller_minSlopeSlideAngle, Eo = a.rawkinematiccharactercontroller_setMinSlopeSlideAngle, Po = a.rawkinematiccharactercontroller_snapToGroundDistance, jo = a.rawkinematiccharactercontroller_enableSnapToGround, Ao = a.rawkinematiccharactercontroller_disableSnapToGround, Io = a.rawkinematiccharactercontroller_snapToGroundEnabled, zo = a.rawkinematiccharactercontroller_computeColliderMovement, To = a.rawkinematiccharactercontroller_computedMovement, Fo = a.rawkinematiccharactercontroller_computedGrounded, ko = a.rawkinematiccharactercontroller_numComputedCollisions, Do = a.rawkinematiccharactercontroller_computedCollision, Mo = a.__wbg_rawcharactercollision_free, Lo = a.rawcharactercollision_new, Bo = a.rawcharactercollision_handle, No = a.rawcharactercollision_translationDeltaApplied, Oo = a.rawcharactercollision_translationDeltaRemaining, Ho = a.rawcharactercollision_toi, Go = a.rawcharactercollision_worldWitness1, Wo = a.rawcharactercollision_worldWitness2, Vo = a.rawcharactercollision_worldNormal1, Uo = a.rawcharactercollision_worldNormal2, Jo = a.__wbg_rawpidcontroller_free, qo = a.rawpidcontroller_new, Ko = a.rawpidcontroller_set_kp, $o = a.rawpidcontroller_set_ki, Xo = a.rawpidcontroller_set_kd, Yo = a.rawpidcontroller_set_axes_mask, Qo = a.rawpidcontroller_reset_integrals, Zo = a.rawpidcontroller_apply_linear_correction, tc = a.rawpidcontroller_apply_angular_correction, ec = a.rawpidcontroller_linear_correction, rc = a.rawpidcontroller_angular_correction, ic = a.__wbg_rawdynamicraycastvehiclecontroller_free, nc = a.rawdynamicraycastvehiclecontroller_new, sc = a.rawdynamicraycastvehiclecontroller_current_vehicle_speed, ac = a.rawdynamicraycastvehiclecontroller_chassis, oc = a.rawdynamicraycastvehiclecontroller_index_up_axis, cc = a.rawdynamicraycastvehiclecontroller_set_index_up_axis, lc = a.rawdynamicraycastvehiclecontroller_index_forward_axis, _c = a.rawdynamicraycastvehiclecontroller_set_index_forward_axis, dc = a.rawdynamicraycastvehiclecontroller_add_wheel, hc = a.rawdynamicraycastvehiclecontroller_num_wheels, wc = a.rawdynamicraycastvehiclecontroller_update_vehicle, uc = a.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs, pc = a.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs, gc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length, bc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length, mc = a.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel, fc = a.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel, yc = a.rawdynamicraycastvehiclecontroller_wheel_radius, vc = a.rawdynamicraycastvehiclecontroller_set_wheel_radius, Sc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness, Rc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness, Cc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_compression, xc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression, Ec = a.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation, Pc = a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation, jc = a.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force, Ac = a.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force, Ic = a.rawdynamicraycastvehiclecontroller_wheel_brake, zc = a.rawdynamicraycastvehiclecontroller_set_wheel_brake, Tc = a.rawdynamicraycastvehiclecontroller_wheel_steering, Fc = a.rawdynamicraycastvehiclecontroller_set_wheel_steering, kc = a.rawdynamicraycastvehiclecontroller_wheel_engine_force, Dc = a.rawdynamicraycastvehiclecontroller_set_wheel_engine_force, Mc = a.rawdynamicraycastvehiclecontroller_wheel_direction_cs, Lc = a.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs, Bc = a.rawdynamicraycastvehiclecontroller_wheel_axle_cs, Nc = a.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs, Oc = a.rawdynamicraycastvehiclecontroller_wheel_friction_slip, Hc = a.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip, Gc = a.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness, Wc = a.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness, Vc = a.rawdynamicraycastvehiclecontroller_wheel_rotation, Uc = a.rawdynamicraycastvehiclecontroller_wheel_forward_impulse, Jc = a.rawdynamicraycastvehiclecontroller_wheel_side_impulse, qc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_force, Kc = a.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws, $c = a.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws, Xc = a.rawdynamicraycastvehiclecontroller_wheel_suspension_length, Yc = a.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws, Qc = a.rawdynamicraycastvehiclecontroller_wheel_is_in_contact, Zc = a.rawdynamicraycastvehiclecontroller_wheel_ground_object, tl = a.__wbg_rawccdsolver_free, el = a.rawccdsolver_new, rl = a.rawimpulsejointset_jointType, il = a.rawimpulsejointset_jointBodyHandle1, nl = a.rawimpulsejointset_jointBodyHandle2, sl = a.rawimpulsejointset_jointFrameX1, al = a.rawimpulsejointset_jointFrameX2, ol = a.rawimpulsejointset_jointAnchor1, cl = a.rawimpulsejointset_jointAnchor2, ll = a.rawimpulsejointset_jointSetAnchor1, _l = a.rawimpulsejointset_jointSetAnchor2, dl = a.rawimpulsejointset_jointContactsEnabled, hl = a.rawimpulsejointset_jointSetContactsEnabled, wl = a.rawimpulsejointset_jointLimitsEnabled, ul = a.rawimpulsejointset_jointLimitsMin, pl = a.rawimpulsejointset_jointLimitsMax, gl = a.rawimpulsejointset_jointSetLimits, bl = a.rawimpulsejointset_jointConfigureMotorModel, ml = a.rawimpulsejointset_jointConfigureMotorVelocity, fl = a.rawimpulsejointset_jointConfigureMotorPosition, yl = a.rawimpulsejointset_jointConfigureMotor, vl = a.__wbg_rawimpulsejointset_free, Sl = a.rawimpulsejointset_new, Rl = a.rawimpulsejointset_createJoint, Cl = a.rawimpulsejointset_remove, xl = a.rawimpulsejointset_len, El = a.rawimpulsejointset_contains, Pl = a.rawimpulsejointset_forEachJointHandle, jl = a.rawimpulsejointset_forEachJointAttachedToRigidBody, Al = a.__wbg_rawintegrationparameters_free, Il = a.rawintegrationparameters_new, zl = a.rawintegrationparameters_dt, Tl = a.rawintegrationparameters_contact_erp, Fl = a.rawintegrationparameters_numSolverIterations, kl = a.rawintegrationparameters_minIslandSize, Dl = a.rawintegrationparameters_maxCcdSubsteps, Ml = a.rawintegrationparameters_lengthUnit, Ll = a.rawintegrationparameters_set_dt, Bl = a.rawintegrationparameters_set_contact_natural_frequency, Nl = a.rawintegrationparameters_set_normalizedAllowedLinearError, Ol = a.rawintegrationparameters_set_normalizedPredictionDistance, Hl = a.rawintegrationparameters_set_numSolverIterations, Gl = a.rawintegrationparameters_set_minIslandSize, Wl = a.rawintegrationparameters_set_maxCcdSubsteps, Vl = a.rawintegrationparameters_set_lengthUnit, Ul = a.rawintegrationparameters_switchToStandardPgsSolver, Jl = a.rawintegrationparameters_switchToSmallStepsPgsSolver, ql = a.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart, Kl = a.__wbg_rawislandmanager_free, $l = a.rawislandmanager_new, Xl = a.rawislandmanager_forEachActiveRigidBodyHandle, Yl = a.__wbg_rawgenericjoint_free, Ql = a.rawgenericjoint_generic, Zl = a.rawgenericjoint_spring, t_ = a.rawgenericjoint_rope, e_ = a.rawgenericjoint_spherical, r_ = a.rawgenericjoint_prismatic, i_ = a.rawgenericjoint_fixed, n_ = a.rawgenericjoint_revolute, s_ = a.rawmultibodyjointset_jointType, a_ = a.rawmultibodyjointset_jointFrameX1, o_ = a.rawmultibodyjointset_jointFrameX2, c_ = a.rawmultibodyjointset_jointAnchor1, l_ = a.rawmultibodyjointset_jointAnchor2, __ = a.rawmultibodyjointset_jointContactsEnabled, d_ = a.rawmultibodyjointset_jointSetContactsEnabled, h_ = a.rawmultibodyjointset_jointLimitsEnabled, w_ = a.rawmultibodyjointset_jointLimitsMin, u_ = a.rawmultibodyjointset_jointLimitsMax, p_ = a.__wbg_rawmultibodyjointset_free, g_ = a.rawmultibodyjointset_new, b_ = a.rawmultibodyjointset_createJoint, m_ = a.rawmultibodyjointset_remove, f_ = a.rawmultibodyjointset_contains, y_ = a.rawmultibodyjointset_forEachJointHandle, v_ = a.rawmultibodyjointset_forEachJointAttachedToRigidBody, S_ = a.rawrigidbodyset_rbTranslation, R_ = a.rawrigidbodyset_rbRotation, C_ = a.rawrigidbodyset_rbSleep, x_ = a.rawrigidbodyset_rbIsSleeping, E_ = a.rawrigidbodyset_rbIsMoving, P_ = a.rawrigidbodyset_rbNextTranslation, j_ = a.rawrigidbodyset_rbNextRotation, A_ = a.rawrigidbodyset_rbSetTranslation, I_ = a.rawrigidbodyset_rbSetRotation, z_ = a.rawrigidbodyset_rbSetLinvel, T_ = a.rawrigidbodyset_rbSetAngvel, F_ = a.rawrigidbodyset_rbSetNextKinematicTranslation, k_ = a.rawrigidbodyset_rbSetNextKinematicRotation, D_ = a.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, M_ = a.rawrigidbodyset_rbSetAdditionalMass, L_ = a.rawrigidbodyset_rbSetAdditionalMassProperties, B_ = a.rawrigidbodyset_rbLinvel, N_ = a.rawrigidbodyset_rbAngvel, O_ = a.rawrigidbodyset_rbVelocityAtPoint, H_ = a.rawrigidbodyset_rbLockTranslations, G_ = a.rawrigidbodyset_rbSetEnabledTranslations, W_ = a.rawrigidbodyset_rbLockRotations, V_ = a.rawrigidbodyset_rbSetEnabledRotations, U_ = a.rawrigidbodyset_rbDominanceGroup, J_ = a.rawrigidbodyset_rbSetDominanceGroup, q_ = a.rawrigidbodyset_rbEnableCcd, K_ = a.rawrigidbodyset_rbSetSoftCcdPrediction, $_ = a.rawrigidbodyset_rbMass, X_ = a.rawrigidbodyset_rbInvMass, Y_ = a.rawrigidbodyset_rbEffectiveInvMass, Q_ = a.rawrigidbodyset_rbLocalCom, Z_ = a.rawrigidbodyset_rbWorldCom, td = a.rawrigidbodyset_rbInvPrincipalInertiaSqrt, ed = a.rawrigidbodyset_rbPrincipalInertiaLocalFrame, rd = a.rawrigidbodyset_rbPrincipalInertia, id = a.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt, nd = a.rawrigidbodyset_rbEffectiveAngularInertia, sd = a.rawrigidbodyset_rbWakeUp, ad = a.rawrigidbodyset_rbIsCcdEnabled, od = a.rawrigidbodyset_rbSoftCcdPrediction, cd = a.rawrigidbodyset_rbNumColliders, ld = a.rawrigidbodyset_rbCollider, _d = a.rawrigidbodyset_rbBodyType, dd = a.rawrigidbodyset_rbSetBodyType, hd = a.rawrigidbodyset_rbIsFixed, wd = a.rawrigidbodyset_rbIsKinematic, ud = a.rawrigidbodyset_rbIsDynamic, pd = a.rawrigidbodyset_rbLinearDamping, gd = a.rawrigidbodyset_rbAngularDamping, bd = a.rawrigidbodyset_rbSetLinearDamping, md = a.rawrigidbodyset_rbSetAngularDamping, fd = a.rawrigidbodyset_rbSetEnabled, yd = a.rawrigidbodyset_rbIsEnabled, vd = a.rawrigidbodyset_rbGravityScale, Sd = a.rawrigidbodyset_rbSetGravityScale, Rd = a.rawrigidbodyset_rbResetForces, Cd = a.rawrigidbodyset_rbResetTorques, xd = a.rawrigidbodyset_rbAddForce, Ed = a.rawrigidbodyset_rbApplyImpulse, Pd = a.rawrigidbodyset_rbAddTorque, jd = a.rawrigidbodyset_rbApplyTorqueImpulse, Ad = a.rawrigidbodyset_rbAddForceAtPoint, Id = a.rawrigidbodyset_rbApplyImpulseAtPoint, zd = a.rawrigidbodyset_rbAdditionalSolverIterations, Td = a.rawrigidbodyset_rbSetAdditionalSolverIterations, Fd = a.rawrigidbodyset_rbUserData, kd = a.rawrigidbodyset_rbSetUserData, Dd = a.rawrigidbodyset_rbUserForce, Md = a.rawrigidbodyset_rbUserTorque, Ld = a.__wbg_rawrigidbodyset_free, Bd = a.rawrigidbodyset_new, Nd = a.rawrigidbodyset_createRigidBody, Od = a.rawrigidbodyset_remove, Hd = a.rawrigidbodyset_contains, Gd = a.rawrigidbodyset_forEachRigidBodyHandle, Wd = a.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, Vd = a.__wbg_rawbroadphase_free, Ud = a.rawbroadphase_new, Jd = a.rawbroadphase_castRay, qd = a.rawbroadphase_castRayAndGetNormal, Kd = a.rawbroadphase_intersectionsWithRay, $d = a.rawbroadphase_intersectionWithShape, Xd = a.rawbroadphase_projectPoint, Yd = a.rawbroadphase_projectPointAndGetFeature, Qd = a.rawbroadphase_intersectionsWithPoint, Zd = a.rawbroadphase_castShape, th = a.rawbroadphase_intersectionsWithShape, eh = a.rawbroadphase_collidersWithAabbIntersectingAabb, rh = a.rawcolliderset_coTranslation, ih = a.rawcolliderset_coRotation, nh = a.rawcolliderset_coTranslationWrtParent, sh = a.rawcolliderset_coRotationWrtParent, ah = a.rawcolliderset_coSetTranslation, oh = a.rawcolliderset_coSetTranslationWrtParent, ch = a.rawcolliderset_coSetRotation, lh = a.rawcolliderset_coSetRotationWrtParent, _h = a.rawcolliderset_coIsSensor, dh = a.rawcolliderset_coShapeType, hh = a.rawcolliderset_coHalfspaceNormal, wh = a.rawcolliderset_coHalfExtents, uh = a.rawcolliderset_coSetHalfExtents, ph = a.rawcolliderset_coRadius, gh = a.rawcolliderset_coSetRadius, bh = a.rawcolliderset_coHalfHeight, mh = a.rawcolliderset_coSetHalfHeight, fh = a.rawcolliderset_coRoundRadius, yh = a.rawcolliderset_coSetRoundRadius, vh = a.rawcolliderset_coVoxelData, Sh = a.rawcolliderset_coVoxelSize, Rh = a.rawcolliderset_coSetVoxel, Ch = a.rawcolliderset_coPropagateVoxelChange, xh = a.rawcolliderset_coCombineVoxelStates, Eh = a.rawcolliderset_coVertices, Ph = a.rawcolliderset_coIndices, jh = a.rawcolliderset_coTriMeshFlags, Ah = a.rawcolliderset_coHeightFieldFlags, Ih = a.rawcolliderset_coHeightfieldHeights, zh = a.rawcolliderset_coHeightfieldScale, Th = a.rawcolliderset_coHeightfieldNRows, Fh = a.rawcolliderset_coHeightfieldNCols, kh = a.rawcolliderset_coParent, Dh = a.rawcolliderset_coSetEnabled, Mh = a.rawcolliderset_coIsEnabled, Lh = a.rawcolliderset_coSetContactSkin, Bh = a.rawcolliderset_coContactSkin, Nh = a.rawcolliderset_coFriction, Oh = a.rawcolliderset_coRestitution, Hh = a.rawcolliderset_coDensity, Gh = a.rawcolliderset_coMass, Wh = a.rawcolliderset_coVolume, Vh = a.rawcolliderset_coCollisionGroups, Uh = a.rawcolliderset_coSolverGroups, Jh = a.rawcolliderset_coActiveHooks, qh = a.rawcolliderset_coActiveCollisionTypes, Kh = a.rawcolliderset_coActiveEvents, $h = a.rawcolliderset_coContactForceEventThreshold, Xh = a.rawcolliderset_coContainsPoint, Yh = a.rawcolliderset_coCastShape, Qh = a.rawcolliderset_coCastCollider, Zh = a.rawcolliderset_coIntersectsShape, tw = a.rawcolliderset_coContactShape, ew = a.rawcolliderset_coContactCollider, rw = a.rawcolliderset_coProjectPoint, iw = a.rawcolliderset_coIntersectsRay, nw = a.rawcolliderset_coCastRay, sw = a.rawcolliderset_coCastRayAndGetNormal, aw = a.rawcolliderset_coSetSensor, ow = a.rawcolliderset_coSetRestitution, cw = a.rawcolliderset_coSetFriction, lw = a.rawcolliderset_coFrictionCombineRule, _w = a.rawcolliderset_coSetFrictionCombineRule, dw = a.rawcolliderset_coRestitutionCombineRule, hw = a.rawcolliderset_coSetRestitutionCombineRule, ww = a.rawcolliderset_coSetCollisionGroups, uw = a.rawcolliderset_coSetSolverGroups, pw = a.rawcolliderset_coSetActiveHooks, gw = a.rawcolliderset_coSetActiveEvents, bw = a.rawcolliderset_coSetActiveCollisionTypes, mw = a.rawcolliderset_coSetShape, fw = a.rawcolliderset_coSetContactForceEventThreshold, yw = a.rawcolliderset_coSetDensity, vw = a.rawcolliderset_coSetMass, Sw = a.rawcolliderset_coSetMassProperties, Rw = a.__wbg_rawcolliderset_free, Cw = a.rawcolliderset_new, xw = a.rawcolliderset_len, Ew = a.rawcolliderset_contains, Pw = a.rawcolliderset_createCollider, jw = a.rawcolliderset_remove, Aw = a.rawcolliderset_forEachColliderHandle, Iw = a.__wbg_rawshapecontact_free, zw = a.__wbg_rawnarrowphase_free, Tw = a.rawnarrowphase_new, Fw = a.rawnarrowphase_contact_pairs_with, kw = a.rawnarrowphase_contact_pair, Dw = a.rawnarrowphase_intersection_pairs_with, Mw = a.rawnarrowphase_intersection_pair, Lw = a.__wbg_rawcontactmanifold_free, Bw = a.rawcontactpair_collider1, Nw = a.rawcontactpair_collider2, Ow = a.rawcontactpair_numContactManifolds, Hw = a.rawcontactpair_contactManifold, Gw = a.rawcontactmanifold_normal, Ww = a.rawcontactmanifold_local_n1, Vw = a.rawcontactmanifold_local_n2, Uw = a.rawcontactmanifold_subshape1, Jw = a.rawcontactmanifold_subshape2, qw = a.rawcontactmanifold_num_contacts, Kw = a.rawcontactmanifold_contact_local_p1, $w = a.rawcontactmanifold_contact_local_p2, Xw = a.rawcontactmanifold_contact_dist, Yw = a.rawcontactmanifold_contact_fid1, Qw = a.rawcontactmanifold_contact_fid2, Zw = a.rawcontactmanifold_contact_impulse, tu = a.rawcontactmanifold_contact_tangent_impulse_x, eu = a.rawcontactmanifold_contact_tangent_impulse_y, ru = a.rawcontactmanifold_num_solver_contacts, iu = a.rawcontactmanifold_solver_contact_point, nu = a.rawcontactmanifold_solver_contact_dist, su = a.rawcontactmanifold_solver_contact_friction, au = a.rawcontactmanifold_solver_contact_restitution, ou = a.rawcontactmanifold_solver_contact_tangent_velocity, cu = a.__wbg_rawpointprojection_free, lu = a.rawpointprojection_point, _u = a.rawpointprojection_isInside, du = a.__wbg_rawpointcolliderprojection_free, hu = a.rawpointcolliderprojection_colliderHandle, wu = a.rawpointcolliderprojection_point, uu = a.rawpointcolliderprojection_isInside, pu = a.rawpointcolliderprojection_featureType, gu = a.rawpointcolliderprojection_featureId, bu = a.__wbg_rawrayintersection_free, mu = a.__wbg_rawraycolliderhit_free, fu = a.__wbg_rawshape_free, yu = a.rawshape_cuboid, vu = a.rawshape_roundCuboid, Su = a.rawshape_ball, Ru = a.rawshape_halfspace, Cu = a.rawshape_capsule, xu = a.rawshape_cylinder, Eu = a.rawshape_roundCylinder, Pu = a.rawshape_cone, ju = a.rawshape_roundCone, Au = a.rawshape_voxels, Iu = a.rawshape_voxelsFromPoints, zu = a.rawshape_polyline, Tu = a.rawshape_trimesh, Fu = a.rawshape_heightfield, ku = a.rawshape_segment, Du = a.rawshape_triangle, Mu = a.rawshape_roundTriangle, Lu = a.rawshape_convexHull, Bu = a.rawshape_roundConvexHull, Nu = a.rawshape_convexMesh, Ou = a.rawshape_roundConvexMesh, Hu = a.rawshape_castShape, Gu = a.rawshape_intersectsShape, Wu = a.rawshape_contactShape, Vu = a.rawshape_containsPoint, Uu = a.rawshape_projectPoint, Ju = a.rawshape_intersectsRay, qu = a.rawshape_castRay, Ku = a.rawshape_castRayAndGetNormal, $u = a.__wbg_rawshapecasthit_free, Xu = a.rawshapecasthit_witness1, Yu = a.rawshapecasthit_normal1, Qu = a.rawshapecasthit_normal2, Zu = a.__wbg_rawcollidershapecasthit_free, tp = a.rawcollidershapecasthit_time_of_impact, ep = a.rawcollidershapecasthit_witness1, rp = a.rawcollidershapecasthit_witness2, ip = a.rawrotation_new, np = a.rawrotation_identity, sp = a.rawrotation_x, ap = a.rawrotation_w, op = a.rawvector_zero, cp = a.rawvector_new, lp = a.rawvector_set_x, _p = a.rawvector_set_z, dp = a.rawvector_xyz, hp = a.rawvector_yxz, wp = a.rawvector_zxy, up = a.rawvector_xzy, pp = a.rawvector_yzx, gp = a.rawvector_zyx, bp = a.rawsdpmatrix3_elements, mp = a.__wbg_rawdebugrenderpipeline_free, fp = a.rawdebugrenderpipeline_new, yp = a.rawdebugrenderpipeline_vertices, vp = a.rawdebugrenderpipeline_colors, Sp = a.rawdebugrenderpipeline_render, Rp = a.__wbg_raweventqueue_free, Cp = a.__wbg_rawcontactforceevent_free, xp = a.rawcontactforceevent_collider2, Ep = a.rawcontactforceevent_total_force, Pp = a.rawcontactforceevent_total_force_magnitude, jp = a.rawcontactforceevent_max_force_direction, Ap = a.rawcontactforceevent_max_force_magnitude, Ip = a.raweventqueue_new, zp = a.raweventqueue_drainCollisionEvents, Tp = a.raweventqueue_drainContactForceEvents, Fp = a.raweventqueue_clear, kp = a.__wbg_rawphysicspipeline_free, Dp = a.rawphysicspipeline_new, Mp = a.rawphysicspipeline_set_profiler_enabled, Lp = a.rawphysicspipeline_is_profiler_enabled, Bp = a.rawphysicspipeline_timing_step, Np = a.rawphysicspipeline_timing_collision_detection, Op = a.rawphysicspipeline_timing_broad_phase, Hp = a.rawphysicspipeline_timing_narrow_phase, Gp = a.rawphysicspipeline_timing_solver, Wp = a.rawphysicspipeline_timing_velocity_assembly, Vp = a.rawphysicspipeline_timing_velocity_resolution, Up = a.rawphysicspipeline_timing_velocity_update, Jp = a.rawphysicspipeline_timing_velocity_writeback, qp = a.rawphysicspipeline_timing_ccd, Kp = a.rawphysicspipeline_timing_ccd_toi_computation, $p = a.rawphysicspipeline_timing_ccd_broad_phase, Xp = a.rawphysicspipeline_timing_ccd_narrow_phase, Yp = a.rawphysicspipeline_timing_ccd_solver, Qp = a.rawphysicspipeline_timing_island_construction, Zp = a.rawphysicspipeline_timing_user_changes, tg = a.rawphysicspipeline_step, eg = a.rawphysicspipeline_stepWithEvents, rg = a.__wbg_rawdeserializedworld_free, ig = a.rawdeserializedworld_takeGravity, ng = a.rawdeserializedworld_takeIntegrationParameters, sg = a.rawdeserializedworld_takeIslandManager, ag = a.rawdeserializedworld_takeBroadPhase, og = a.rawdeserializedworld_takeNarrowPhase, cg = a.rawdeserializedworld_takeBodies, lg = a.rawdeserializedworld_takeColliders, _g = a.rawdeserializedworld_takeImpulseJoints, dg = a.rawdeserializedworld_takeMultibodyJoints, hg = a.rawserializationpipeline_serializeAll, wg = a.rawserializationpipeline_deserializeAll, ug = a.rawserializationpipeline_new, pg = a.rawintegrationparameters_set_numAdditionalFrictionIterations, gg = a.rawintegrationparameters_set_numInternalPgsIterations, bg = a.rawvector_set_y, mg = a.reserve_memory, fg = a.rawkinematiccharactercontroller_up, yg = a.rawshapecontact_normal2, vg = a.rawshapecontact_point1, Sg = a.rawshapecontact_point2, Rg = a.rawrayintersection_normal, Cg = a.rawraycolliderintersection_normal, xg = a.rawshapecontact_normal1, Eg = a.rawcollidershapecasthit_normal1, Pg = a.rawcollidershapecasthit_normal2, jg = a.rawshapecasthit_witness2, Ag = a.rawkinematiccharactercontroller_offset, Ig = a.rawintegrationparameters_normalizedAllowedLinearError, zg = a.rawintegrationparameters_numAdditionalFrictionIterations, Tg = a.rawintegrationparameters_numInternalPgsIterations, Fg = a.rawrigidbodyset_len, kg = a.rawshapecontact_distance, Dg = a.rawrayintersection_featureType, Mg = a.rawraycolliderintersection_colliderHandle, Lg = a.rawrayintersection_time_of_impact, Bg = a.rawraycolliderintersection_featureType, Ng = a.rawraycolliderhit_colliderHandle, Og = a.rawraycolliderintersection_time_of_impact, Hg = a.rawcollidershapecasthit_colliderHandle, Gg = a.rawraycolliderhit_timeOfImpact, Wg = a.rawshapecasthit_time_of_impact, Vg = a.rawrotation_y, Ug = a.rawrotation_z, Jg = a.rawvector_x, qg = a.rawvector_y, Kg = a.rawvector_z, $g = a.rawcontactforceevent_collider1, Xg = a.rawintegrationparameters_normalizedPredictionDistance, Yg = a.rawrayintersection_featureId, Qg = a.rawraycolliderintersection_featureId, Zg = a.rawcolliderset_isHandleValid, tb = a.__wbg_rawcontactpair_free, eb = a.__wbg_rawraycolliderintersection_free, rb = a.__wbg_rawrotation_free, ib = a.__wbg_rawvector_free, nb = a.__wbg_rawsdpmatrix3_free, sb = a.__wbg_rawserializationpipeline_free, ab = a.__wbindgen_export_0, ob = a.__wbindgen_add_to_stack_pointer, cb = a.__wbindgen_export_1, lb = a.__wbindgen_export_2, _b = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_rawbroadphase_free: Vd,
    __wbg_rawccdsolver_free: tl,
    __wbg_rawcharactercollision_free: Mo,
    __wbg_rawcolliderset_free: Rw,
    __wbg_rawcollidershapecasthit_free: Zu,
    __wbg_rawcontactforceevent_free: Cp,
    __wbg_rawcontactmanifold_free: Lw,
    __wbg_rawcontactpair_free: tb,
    __wbg_rawdebugrenderpipeline_free: mp,
    __wbg_rawdeserializedworld_free: rg,
    __wbg_rawdynamicraycastvehiclecontroller_free: ic,
    __wbg_raweventqueue_free: Rp,
    __wbg_rawgenericjoint_free: Yl,
    __wbg_rawimpulsejointset_free: vl,
    __wbg_rawintegrationparameters_free: Al,
    __wbg_rawislandmanager_free: Kl,
    __wbg_rawkinematiccharactercontroller_free: co,
    __wbg_rawmultibodyjointset_free: p_,
    __wbg_rawnarrowphase_free: zw,
    __wbg_rawphysicspipeline_free: kp,
    __wbg_rawpidcontroller_free: Jo,
    __wbg_rawpointcolliderprojection_free: du,
    __wbg_rawpointprojection_free: cu,
    __wbg_rawraycolliderhit_free: mu,
    __wbg_rawraycolliderintersection_free: eb,
    __wbg_rawrayintersection_free: bu,
    __wbg_rawrigidbodyset_free: Ld,
    __wbg_rawrotation_free: rb,
    __wbg_rawsdpmatrix3_free: nb,
    __wbg_rawserializationpipeline_free: sb,
    __wbg_rawshape_free: fu,
    __wbg_rawshapecasthit_free: $u,
    __wbg_rawshapecontact_free: Iw,
    __wbg_rawvector_free: ib,
    __wbindgen_add_to_stack_pointer: ob,
    __wbindgen_export_0: ab,
    __wbindgen_export_1: cb,
    __wbindgen_export_2: lb,
    memory: ao,
    rawbroadphase_castRay: Jd,
    rawbroadphase_castRayAndGetNormal: qd,
    rawbroadphase_castShape: Zd,
    rawbroadphase_collidersWithAabbIntersectingAabb: eh,
    rawbroadphase_intersectionWithShape: $d,
    rawbroadphase_intersectionsWithPoint: Qd,
    rawbroadphase_intersectionsWithRay: Kd,
    rawbroadphase_intersectionsWithShape: th,
    rawbroadphase_new: Ud,
    rawbroadphase_projectPoint: Xd,
    rawbroadphase_projectPointAndGetFeature: Yd,
    rawccdsolver_new: el,
    rawcharactercollision_handle: Bo,
    rawcharactercollision_new: Lo,
    rawcharactercollision_toi: Ho,
    rawcharactercollision_translationDeltaApplied: No,
    rawcharactercollision_translationDeltaRemaining: Oo,
    rawcharactercollision_worldNormal1: Vo,
    rawcharactercollision_worldNormal2: Uo,
    rawcharactercollision_worldWitness1: Go,
    rawcharactercollision_worldWitness2: Wo,
    rawcolliderset_coActiveCollisionTypes: qh,
    rawcolliderset_coActiveEvents: Kh,
    rawcolliderset_coActiveHooks: Jh,
    rawcolliderset_coCastCollider: Qh,
    rawcolliderset_coCastRay: nw,
    rawcolliderset_coCastRayAndGetNormal: sw,
    rawcolliderset_coCastShape: Yh,
    rawcolliderset_coCollisionGroups: Vh,
    rawcolliderset_coCombineVoxelStates: xh,
    rawcolliderset_coContactCollider: ew,
    rawcolliderset_coContactForceEventThreshold: $h,
    rawcolliderset_coContactShape: tw,
    rawcolliderset_coContactSkin: Bh,
    rawcolliderset_coContainsPoint: Xh,
    rawcolliderset_coDensity: Hh,
    rawcolliderset_coFriction: Nh,
    rawcolliderset_coFrictionCombineRule: lw,
    rawcolliderset_coHalfExtents: wh,
    rawcolliderset_coHalfHeight: bh,
    rawcolliderset_coHalfspaceNormal: hh,
    rawcolliderset_coHeightFieldFlags: Ah,
    rawcolliderset_coHeightfieldHeights: Ih,
    rawcolliderset_coHeightfieldNCols: Fh,
    rawcolliderset_coHeightfieldNRows: Th,
    rawcolliderset_coHeightfieldScale: zh,
    rawcolliderset_coIndices: Ph,
    rawcolliderset_coIntersectsRay: iw,
    rawcolliderset_coIntersectsShape: Zh,
    rawcolliderset_coIsEnabled: Mh,
    rawcolliderset_coIsSensor: _h,
    rawcolliderset_coMass: Gh,
    rawcolliderset_coParent: kh,
    rawcolliderset_coProjectPoint: rw,
    rawcolliderset_coPropagateVoxelChange: Ch,
    rawcolliderset_coRadius: ph,
    rawcolliderset_coRestitution: Oh,
    rawcolliderset_coRestitutionCombineRule: dw,
    rawcolliderset_coRotation: ih,
    rawcolliderset_coRotationWrtParent: sh,
    rawcolliderset_coRoundRadius: fh,
    rawcolliderset_coSetActiveCollisionTypes: bw,
    rawcolliderset_coSetActiveEvents: gw,
    rawcolliderset_coSetActiveHooks: pw,
    rawcolliderset_coSetCollisionGroups: ww,
    rawcolliderset_coSetContactForceEventThreshold: fw,
    rawcolliderset_coSetContactSkin: Lh,
    rawcolliderset_coSetDensity: yw,
    rawcolliderset_coSetEnabled: Dh,
    rawcolliderset_coSetFriction: cw,
    rawcolliderset_coSetFrictionCombineRule: _w,
    rawcolliderset_coSetHalfExtents: uh,
    rawcolliderset_coSetHalfHeight: mh,
    rawcolliderset_coSetMass: vw,
    rawcolliderset_coSetMassProperties: Sw,
    rawcolliderset_coSetRadius: gh,
    rawcolliderset_coSetRestitution: ow,
    rawcolliderset_coSetRestitutionCombineRule: hw,
    rawcolliderset_coSetRotation: ch,
    rawcolliderset_coSetRotationWrtParent: lh,
    rawcolliderset_coSetRoundRadius: yh,
    rawcolliderset_coSetSensor: aw,
    rawcolliderset_coSetShape: mw,
    rawcolliderset_coSetSolverGroups: uw,
    rawcolliderset_coSetTranslation: ah,
    rawcolliderset_coSetTranslationWrtParent: oh,
    rawcolliderset_coSetVoxel: Rh,
    rawcolliderset_coShapeType: dh,
    rawcolliderset_coSolverGroups: Uh,
    rawcolliderset_coTranslation: rh,
    rawcolliderset_coTranslationWrtParent: nh,
    rawcolliderset_coTriMeshFlags: jh,
    rawcolliderset_coVertices: Eh,
    rawcolliderset_coVolume: Wh,
    rawcolliderset_coVoxelData: vh,
    rawcolliderset_coVoxelSize: Sh,
    rawcolliderset_contains: Ew,
    rawcolliderset_createCollider: Pw,
    rawcolliderset_forEachColliderHandle: Aw,
    rawcolliderset_isHandleValid: Zg,
    rawcolliderset_len: xw,
    rawcolliderset_new: Cw,
    rawcolliderset_remove: jw,
    rawcollidershapecasthit_colliderHandle: Hg,
    rawcollidershapecasthit_normal1: Eg,
    rawcollidershapecasthit_normal2: Pg,
    rawcollidershapecasthit_time_of_impact: tp,
    rawcollidershapecasthit_witness1: ep,
    rawcollidershapecasthit_witness2: rp,
    rawcontactforceevent_collider1: $g,
    rawcontactforceevent_collider2: xp,
    rawcontactforceevent_max_force_direction: jp,
    rawcontactforceevent_max_force_magnitude: Ap,
    rawcontactforceevent_total_force: Ep,
    rawcontactforceevent_total_force_magnitude: Pp,
    rawcontactmanifold_contact_dist: Xw,
    rawcontactmanifold_contact_fid1: Yw,
    rawcontactmanifold_contact_fid2: Qw,
    rawcontactmanifold_contact_impulse: Zw,
    rawcontactmanifold_contact_local_p1: Kw,
    rawcontactmanifold_contact_local_p2: $w,
    rawcontactmanifold_contact_tangent_impulse_x: tu,
    rawcontactmanifold_contact_tangent_impulse_y: eu,
    rawcontactmanifold_local_n1: Ww,
    rawcontactmanifold_local_n2: Vw,
    rawcontactmanifold_normal: Gw,
    rawcontactmanifold_num_contacts: qw,
    rawcontactmanifold_num_solver_contacts: ru,
    rawcontactmanifold_solver_contact_dist: nu,
    rawcontactmanifold_solver_contact_friction: su,
    rawcontactmanifold_solver_contact_point: iu,
    rawcontactmanifold_solver_contact_restitution: au,
    rawcontactmanifold_solver_contact_tangent_velocity: ou,
    rawcontactmanifold_subshape1: Uw,
    rawcontactmanifold_subshape2: Jw,
    rawcontactpair_collider1: Bw,
    rawcontactpair_collider2: Nw,
    rawcontactpair_contactManifold: Hw,
    rawcontactpair_numContactManifolds: Ow,
    rawdebugrenderpipeline_colors: vp,
    rawdebugrenderpipeline_new: fp,
    rawdebugrenderpipeline_render: Sp,
    rawdebugrenderpipeline_vertices: yp,
    rawdeserializedworld_takeBodies: cg,
    rawdeserializedworld_takeBroadPhase: ag,
    rawdeserializedworld_takeColliders: lg,
    rawdeserializedworld_takeGravity: ig,
    rawdeserializedworld_takeImpulseJoints: _g,
    rawdeserializedworld_takeIntegrationParameters: ng,
    rawdeserializedworld_takeIslandManager: sg,
    rawdeserializedworld_takeMultibodyJoints: dg,
    rawdeserializedworld_takeNarrowPhase: og,
    rawdynamicraycastvehiclecontroller_add_wheel: dc,
    rawdynamicraycastvehiclecontroller_chassis: ac,
    rawdynamicraycastvehiclecontroller_current_vehicle_speed: sc,
    rawdynamicraycastvehiclecontroller_index_forward_axis: lc,
    rawdynamicraycastvehiclecontroller_index_up_axis: oc,
    rawdynamicraycastvehiclecontroller_new: nc,
    rawdynamicraycastvehiclecontroller_num_wheels: hc,
    rawdynamicraycastvehiclecontroller_set_index_forward_axis: _c,
    rawdynamicraycastvehiclecontroller_set_index_up_axis: cc,
    rawdynamicraycastvehiclecontroller_set_wheel_axle_cs: Nc,
    rawdynamicraycastvehiclecontroller_set_wheel_brake: zc,
    rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs: pc,
    rawdynamicraycastvehiclecontroller_set_wheel_direction_cs: Lc,
    rawdynamicraycastvehiclecontroller_set_wheel_engine_force: Dc,
    rawdynamicraycastvehiclecontroller_set_wheel_friction_slip: Hc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force: Ac,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel: fc,
    rawdynamicraycastvehiclecontroller_set_wheel_radius: vc,
    rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness: Wc,
    rawdynamicraycastvehiclecontroller_set_wheel_steering: Fc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression: xc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation: Pc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length: bc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness: Rc,
    rawdynamicraycastvehiclecontroller_update_vehicle: wc,
    rawdynamicraycastvehiclecontroller_wheel_axle_cs: Bc,
    rawdynamicraycastvehiclecontroller_wheel_brake: Ic,
    rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs: uc,
    rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws: Kc,
    rawdynamicraycastvehiclecontroller_wheel_contact_point_ws: $c,
    rawdynamicraycastvehiclecontroller_wheel_direction_cs: Mc,
    rawdynamicraycastvehiclecontroller_wheel_engine_force: kc,
    rawdynamicraycastvehiclecontroller_wheel_forward_impulse: Uc,
    rawdynamicraycastvehiclecontroller_wheel_friction_slip: Oc,
    rawdynamicraycastvehiclecontroller_wheel_ground_object: Zc,
    rawdynamicraycastvehiclecontroller_wheel_hard_point_ws: Yc,
    rawdynamicraycastvehiclecontroller_wheel_is_in_contact: Qc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_force: jc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel: mc,
    rawdynamicraycastvehiclecontroller_wheel_radius: yc,
    rawdynamicraycastvehiclecontroller_wheel_rotation: Vc,
    rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness: Gc,
    rawdynamicraycastvehiclecontroller_wheel_side_impulse: Jc,
    rawdynamicraycastvehiclecontroller_wheel_steering: Tc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_compression: Cc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_force: qc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_length: Xc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation: Ec,
    rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length: gc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness: Sc,
    raweventqueue_clear: Fp,
    raweventqueue_drainCollisionEvents: zp,
    raweventqueue_drainContactForceEvents: Tp,
    raweventqueue_new: Ip,
    rawgenericjoint_fixed: i_,
    rawgenericjoint_generic: Ql,
    rawgenericjoint_prismatic: r_,
    rawgenericjoint_revolute: n_,
    rawgenericjoint_rope: t_,
    rawgenericjoint_spherical: e_,
    rawgenericjoint_spring: Zl,
    rawimpulsejointset_contains: El,
    rawimpulsejointset_createJoint: Rl,
    rawimpulsejointset_forEachJointAttachedToRigidBody: jl,
    rawimpulsejointset_forEachJointHandle: Pl,
    rawimpulsejointset_jointAnchor1: ol,
    rawimpulsejointset_jointAnchor2: cl,
    rawimpulsejointset_jointBodyHandle1: il,
    rawimpulsejointset_jointBodyHandle2: nl,
    rawimpulsejointset_jointConfigureMotor: yl,
    rawimpulsejointset_jointConfigureMotorModel: bl,
    rawimpulsejointset_jointConfigureMotorPosition: fl,
    rawimpulsejointset_jointConfigureMotorVelocity: ml,
    rawimpulsejointset_jointContactsEnabled: dl,
    rawimpulsejointset_jointFrameX1: sl,
    rawimpulsejointset_jointFrameX2: al,
    rawimpulsejointset_jointLimitsEnabled: wl,
    rawimpulsejointset_jointLimitsMax: pl,
    rawimpulsejointset_jointLimitsMin: ul,
    rawimpulsejointset_jointSetAnchor1: ll,
    rawimpulsejointset_jointSetAnchor2: _l,
    rawimpulsejointset_jointSetContactsEnabled: hl,
    rawimpulsejointset_jointSetLimits: gl,
    rawimpulsejointset_jointType: rl,
    rawimpulsejointset_len: xl,
    rawimpulsejointset_new: Sl,
    rawimpulsejointset_remove: Cl,
    rawintegrationparameters_contact_erp: Tl,
    rawintegrationparameters_dt: zl,
    rawintegrationparameters_lengthUnit: Ml,
    rawintegrationparameters_maxCcdSubsteps: Dl,
    rawintegrationparameters_minIslandSize: kl,
    rawintegrationparameters_new: Il,
    rawintegrationparameters_normalizedAllowedLinearError: Ig,
    rawintegrationparameters_normalizedPredictionDistance: Xg,
    rawintegrationparameters_numAdditionalFrictionIterations: zg,
    rawintegrationparameters_numInternalPgsIterations: Tg,
    rawintegrationparameters_numSolverIterations: Fl,
    rawintegrationparameters_set_contact_natural_frequency: Bl,
    rawintegrationparameters_set_dt: Ll,
    rawintegrationparameters_set_lengthUnit: Vl,
    rawintegrationparameters_set_maxCcdSubsteps: Wl,
    rawintegrationparameters_set_minIslandSize: Gl,
    rawintegrationparameters_set_normalizedAllowedLinearError: Nl,
    rawintegrationparameters_set_normalizedPredictionDistance: Ol,
    rawintegrationparameters_set_numAdditionalFrictionIterations: pg,
    rawintegrationparameters_set_numInternalPgsIterations: gg,
    rawintegrationparameters_set_numSolverIterations: Hl,
    rawintegrationparameters_switchToSmallStepsPgsSolver: Jl,
    rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart: ql,
    rawintegrationparameters_switchToStandardPgsSolver: Ul,
    rawislandmanager_forEachActiveRigidBodyHandle: Xl,
    rawislandmanager_new: $l,
    rawkinematiccharactercontroller_autostepEnabled: yo,
    rawkinematiccharactercontroller_autostepIncludesDynamicBodies: fo,
    rawkinematiccharactercontroller_autostepMaxHeight: bo,
    rawkinematiccharactercontroller_autostepMinWidth: mo,
    rawkinematiccharactercontroller_computeColliderMovement: zo,
    rawkinematiccharactercontroller_computedCollision: Do,
    rawkinematiccharactercontroller_computedGrounded: Fo,
    rawkinematiccharactercontroller_computedMovement: To,
    rawkinematiccharactercontroller_disableAutostep: So,
    rawkinematiccharactercontroller_disableSnapToGround: Ao,
    rawkinematiccharactercontroller_enableAutostep: vo,
    rawkinematiccharactercontroller_enableSnapToGround: jo,
    rawkinematiccharactercontroller_maxSlopeClimbAngle: Ro,
    rawkinematiccharactercontroller_minSlopeSlideAngle: xo,
    rawkinematiccharactercontroller_new: lo,
    rawkinematiccharactercontroller_normalNudgeFactor: ho,
    rawkinematiccharactercontroller_numComputedCollisions: ko,
    rawkinematiccharactercontroller_offset: Ag,
    rawkinematiccharactercontroller_setMaxSlopeClimbAngle: Co,
    rawkinematiccharactercontroller_setMinSlopeSlideAngle: Eo,
    rawkinematiccharactercontroller_setNormalNudgeFactor: wo,
    rawkinematiccharactercontroller_setOffset: uo,
    rawkinematiccharactercontroller_setSlideEnabled: go,
    rawkinematiccharactercontroller_setUp: _o,
    rawkinematiccharactercontroller_slideEnabled: po,
    rawkinematiccharactercontroller_snapToGroundDistance: Po,
    rawkinematiccharactercontroller_snapToGroundEnabled: Io,
    rawkinematiccharactercontroller_up: fg,
    rawmultibodyjointset_contains: f_,
    rawmultibodyjointset_createJoint: b_,
    rawmultibodyjointset_forEachJointAttachedToRigidBody: v_,
    rawmultibodyjointset_forEachJointHandle: y_,
    rawmultibodyjointset_jointAnchor1: c_,
    rawmultibodyjointset_jointAnchor2: l_,
    rawmultibodyjointset_jointContactsEnabled: __,
    rawmultibodyjointset_jointFrameX1: a_,
    rawmultibodyjointset_jointFrameX2: o_,
    rawmultibodyjointset_jointLimitsEnabled: h_,
    rawmultibodyjointset_jointLimitsMax: u_,
    rawmultibodyjointset_jointLimitsMin: w_,
    rawmultibodyjointset_jointSetContactsEnabled: d_,
    rawmultibodyjointset_jointType: s_,
    rawmultibodyjointset_new: g_,
    rawmultibodyjointset_remove: m_,
    rawnarrowphase_contact_pair: kw,
    rawnarrowphase_contact_pairs_with: Fw,
    rawnarrowphase_intersection_pair: Mw,
    rawnarrowphase_intersection_pairs_with: Dw,
    rawnarrowphase_new: Tw,
    rawphysicspipeline_is_profiler_enabled: Lp,
    rawphysicspipeline_new: Dp,
    rawphysicspipeline_set_profiler_enabled: Mp,
    rawphysicspipeline_step: tg,
    rawphysicspipeline_stepWithEvents: eg,
    rawphysicspipeline_timing_broad_phase: Op,
    rawphysicspipeline_timing_ccd: qp,
    rawphysicspipeline_timing_ccd_broad_phase: $p,
    rawphysicspipeline_timing_ccd_narrow_phase: Xp,
    rawphysicspipeline_timing_ccd_solver: Yp,
    rawphysicspipeline_timing_ccd_toi_computation: Kp,
    rawphysicspipeline_timing_collision_detection: Np,
    rawphysicspipeline_timing_island_construction: Qp,
    rawphysicspipeline_timing_narrow_phase: Hp,
    rawphysicspipeline_timing_solver: Gp,
    rawphysicspipeline_timing_step: Bp,
    rawphysicspipeline_timing_user_changes: Zp,
    rawphysicspipeline_timing_velocity_assembly: Wp,
    rawphysicspipeline_timing_velocity_resolution: Vp,
    rawphysicspipeline_timing_velocity_update: Up,
    rawphysicspipeline_timing_velocity_writeback: Jp,
    rawpidcontroller_angular_correction: rc,
    rawpidcontroller_apply_angular_correction: tc,
    rawpidcontroller_apply_linear_correction: Zo,
    rawpidcontroller_linear_correction: ec,
    rawpidcontroller_new: qo,
    rawpidcontroller_reset_integrals: Qo,
    rawpidcontroller_set_axes_mask: Yo,
    rawpidcontroller_set_kd: Xo,
    rawpidcontroller_set_ki: $o,
    rawpidcontroller_set_kp: Ko,
    rawpointcolliderprojection_colliderHandle: hu,
    rawpointcolliderprojection_featureId: gu,
    rawpointcolliderprojection_featureType: pu,
    rawpointcolliderprojection_isInside: uu,
    rawpointcolliderprojection_point: wu,
    rawpointprojection_isInside: _u,
    rawpointprojection_point: lu,
    rawraycolliderhit_colliderHandle: Ng,
    rawraycolliderhit_timeOfImpact: Gg,
    rawraycolliderintersection_colliderHandle: Mg,
    rawraycolliderintersection_featureId: Qg,
    rawraycolliderintersection_featureType: Bg,
    rawraycolliderintersection_normal: Cg,
    rawraycolliderintersection_time_of_impact: Og,
    rawrayintersection_featureId: Yg,
    rawrayintersection_featureType: Dg,
    rawrayintersection_normal: Rg,
    rawrayintersection_time_of_impact: Lg,
    rawrigidbodyset_contains: Hd,
    rawrigidbodyset_createRigidBody: Nd,
    rawrigidbodyset_forEachRigidBodyHandle: Gd,
    rawrigidbodyset_len: Fg,
    rawrigidbodyset_new: Bd,
    rawrigidbodyset_propagateModifiedBodyPositionsToColliders: Wd,
    rawrigidbodyset_rbAddForce: xd,
    rawrigidbodyset_rbAddForceAtPoint: Ad,
    rawrigidbodyset_rbAddTorque: Pd,
    rawrigidbodyset_rbAdditionalSolverIterations: zd,
    rawrigidbodyset_rbAngularDamping: gd,
    rawrigidbodyset_rbAngvel: N_,
    rawrigidbodyset_rbApplyImpulse: Ed,
    rawrigidbodyset_rbApplyImpulseAtPoint: Id,
    rawrigidbodyset_rbApplyTorqueImpulse: jd,
    rawrigidbodyset_rbBodyType: _d,
    rawrigidbodyset_rbCollider: ld,
    rawrigidbodyset_rbDominanceGroup: U_,
    rawrigidbodyset_rbEffectiveAngularInertia: nd,
    rawrigidbodyset_rbEffectiveInvMass: Y_,
    rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt: id,
    rawrigidbodyset_rbEnableCcd: q_,
    rawrigidbodyset_rbGravityScale: vd,
    rawrigidbodyset_rbInvMass: X_,
    rawrigidbodyset_rbInvPrincipalInertiaSqrt: td,
    rawrigidbodyset_rbIsCcdEnabled: ad,
    rawrigidbodyset_rbIsDynamic: ud,
    rawrigidbodyset_rbIsEnabled: yd,
    rawrigidbodyset_rbIsFixed: hd,
    rawrigidbodyset_rbIsKinematic: wd,
    rawrigidbodyset_rbIsMoving: E_,
    rawrigidbodyset_rbIsSleeping: x_,
    rawrigidbodyset_rbLinearDamping: pd,
    rawrigidbodyset_rbLinvel: B_,
    rawrigidbodyset_rbLocalCom: Q_,
    rawrigidbodyset_rbLockRotations: W_,
    rawrigidbodyset_rbLockTranslations: H_,
    rawrigidbodyset_rbMass: $_,
    rawrigidbodyset_rbNextRotation: j_,
    rawrigidbodyset_rbNextTranslation: P_,
    rawrigidbodyset_rbNumColliders: cd,
    rawrigidbodyset_rbPrincipalInertia: rd,
    rawrigidbodyset_rbPrincipalInertiaLocalFrame: ed,
    rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: D_,
    rawrigidbodyset_rbResetForces: Rd,
    rawrigidbodyset_rbResetTorques: Cd,
    rawrigidbodyset_rbRotation: R_,
    rawrigidbodyset_rbSetAdditionalMass: M_,
    rawrigidbodyset_rbSetAdditionalMassProperties: L_,
    rawrigidbodyset_rbSetAdditionalSolverIterations: Td,
    rawrigidbodyset_rbSetAngularDamping: md,
    rawrigidbodyset_rbSetAngvel: T_,
    rawrigidbodyset_rbSetBodyType: dd,
    rawrigidbodyset_rbSetDominanceGroup: J_,
    rawrigidbodyset_rbSetEnabled: fd,
    rawrigidbodyset_rbSetEnabledRotations: V_,
    rawrigidbodyset_rbSetEnabledTranslations: G_,
    rawrigidbodyset_rbSetGravityScale: Sd,
    rawrigidbodyset_rbSetLinearDamping: bd,
    rawrigidbodyset_rbSetLinvel: z_,
    rawrigidbodyset_rbSetNextKinematicRotation: k_,
    rawrigidbodyset_rbSetNextKinematicTranslation: F_,
    rawrigidbodyset_rbSetRotation: I_,
    rawrigidbodyset_rbSetSoftCcdPrediction: K_,
    rawrigidbodyset_rbSetTranslation: A_,
    rawrigidbodyset_rbSetUserData: kd,
    rawrigidbodyset_rbSleep: C_,
    rawrigidbodyset_rbSoftCcdPrediction: od,
    rawrigidbodyset_rbTranslation: S_,
    rawrigidbodyset_rbUserData: Fd,
    rawrigidbodyset_rbUserForce: Dd,
    rawrigidbodyset_rbUserTorque: Md,
    rawrigidbodyset_rbVelocityAtPoint: O_,
    rawrigidbodyset_rbWakeUp: sd,
    rawrigidbodyset_rbWorldCom: Z_,
    rawrigidbodyset_remove: Od,
    rawrotation_identity: np,
    rawrotation_new: ip,
    rawrotation_w: ap,
    rawrotation_x: sp,
    rawrotation_y: Vg,
    rawrotation_z: Ug,
    rawsdpmatrix3_elements: bp,
    rawserializationpipeline_deserializeAll: wg,
    rawserializationpipeline_new: ug,
    rawserializationpipeline_serializeAll: hg,
    rawshape_ball: Su,
    rawshape_capsule: Cu,
    rawshape_castRay: qu,
    rawshape_castRayAndGetNormal: Ku,
    rawshape_castShape: Hu,
    rawshape_cone: Pu,
    rawshape_contactShape: Wu,
    rawshape_containsPoint: Vu,
    rawshape_convexHull: Lu,
    rawshape_convexMesh: Nu,
    rawshape_cuboid: yu,
    rawshape_cylinder: xu,
    rawshape_halfspace: Ru,
    rawshape_heightfield: Fu,
    rawshape_intersectsRay: Ju,
    rawshape_intersectsShape: Gu,
    rawshape_polyline: zu,
    rawshape_projectPoint: Uu,
    rawshape_roundCone: ju,
    rawshape_roundConvexHull: Bu,
    rawshape_roundConvexMesh: Ou,
    rawshape_roundCuboid: vu,
    rawshape_roundCylinder: Eu,
    rawshape_roundTriangle: Mu,
    rawshape_segment: ku,
    rawshape_triangle: Du,
    rawshape_trimesh: Tu,
    rawshape_voxels: Au,
    rawshape_voxelsFromPoints: Iu,
    rawshapecasthit_normal1: Yu,
    rawshapecasthit_normal2: Qu,
    rawshapecasthit_time_of_impact: Wg,
    rawshapecasthit_witness1: Xu,
    rawshapecasthit_witness2: jg,
    rawshapecontact_distance: kg,
    rawshapecontact_normal1: xg,
    rawshapecontact_normal2: yg,
    rawshapecontact_point1: vg,
    rawshapecontact_point2: Sg,
    rawvector_new: cp,
    rawvector_set_x: lp,
    rawvector_set_y: bg,
    rawvector_set_z: _p,
    rawvector_x: Jg,
    rawvector_xyz: dp,
    rawvector_xzy: up,
    rawvector_y: qg,
    rawvector_yxz: hp,
    rawvector_yzx: pp,
    rawvector_z: Kg,
    rawvector_zero: op,
    rawvector_zxy: wp,
    rawvector_zyx: gp,
    reserve_memory: mg,
    version: oo
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  pa(_b);
  class db {
    constructor(t, e, r) {
      this.x = t, this.y = e, this.z = r;
    }
  }
  class g {
    static new(t, e, r) {
      return new db(t, e, r);
    }
    static intoRaw(t) {
      return new p(t.x, t.y, t.z);
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
  class M {
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
  class hb {
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
  class ji {
    static fromRaw(t) {
      const e = new hb(t.elements());
      return t.free(), e;
    }
  }
  var ft;
  (function(i) {
    i[i.Dynamic = 0] = "Dynamic", i[i.Fixed = 1] = "Fixed", i[i.KinematicPositionBased = 2] = "KinematicPositionBased", i[i.KinematicVelocityBased = 3] = "KinematicVelocityBased";
  })(ft || (ft = {}));
  class Ai {
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
    invPrincipalInertiaSqrt() {
      return g.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
    }
    principalInertia() {
      return g.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
    }
    principalInertiaLocalFrame() {
      return M.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
    }
    effectiveWorldInvInertiaSqrt() {
      return ji.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
    }
    effectiveAngularInertia() {
      return ji.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
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
  class Rt {
    constructor(t) {
      this.enabled = true, this.status = t, this.translation = g.zeros(), this.rotation = M.identity(), this.gravityScale = 1, this.linvel = g.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = g.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = g.zeros(), this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = M.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
    }
    static dynamic() {
      return new Rt(ft.Dynamic);
    }
    static kinematicPositionBased() {
      return new Rt(ft.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
      return new Rt(ft.KinematicVelocityBased);
    }
    static fixed() {
      return new Rt(ft.Fixed);
    }
    static newDynamic() {
      return new Rt(ft.Dynamic);
    }
    static newKinematicPositionBased() {
      return new Rt(ft.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
      return new Rt(ft.KinematicVelocityBased);
    }
    static newStatic() {
      return new Rt(ft.Fixed);
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
  class Ue {
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
  class wb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new q(), this.map = new Ue(), t && t.forEachRigidBodyHandle((e) => {
        this.map.set(e, new Ai(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createRigidBody(t, e) {
      let r = g.intoRaw(e.translation), n = M.intoRaw(e.rotation), o = g.intoRaw(e.linvel), c = g.intoRaw(e.centerOfMass), l = g.intoRaw(e.angvel), _ = g.intoRaw(e.principalAngularInertia), h = M.intoRaw(e.angularInertiaLocalFrame), u = this.raw.createRigidBody(e.enabled, r, n, e.gravityScale, e.mass, e.massOnly, c, o, l, _, h, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.softCcdPrediction, e.ccdEnabled, e.dominanceGroup, e.additionalSolverIterations);
      r.free(), n.free(), o.free(), c.free(), l.free(), _.free(), h.free();
      const w = new Ai(this.raw, t, u);
      return w.userData = e.userData, this.map.set(u, w), w;
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
  class ub {
    constructor(t) {
      this.raw = t || new Ut();
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
  var ct;
  (function(i) {
    i[i.Revolute = 0] = "Revolute", i[i.Fixed = 1] = "Fixed", i[i.Prismatic = 2] = "Prismatic", i[i.Rope = 3] = "Rope", i[i.Spring = 4] = "Spring", i[i.Spherical = 5] = "Spherical", i[i.Generic = 6] = "Generic";
  })(ct || (ct = {}));
  var Ii;
  (function(i) {
    i[i.AccelerationBased = 0] = "AccelerationBased", i[i.ForceBased = 1] = "ForceBased";
  })(Ii || (Ii = {}));
  var zi;
  (function(i) {
    i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ";
  })(zi || (zi = {}));
  class xt {
    constructor(t, e, r) {
      this.rawSet = t, this.bodySet = e, this.handle = r;
    }
    static newTyped(t, e, r) {
      switch (t.jointType(r)) {
        case yt.Revolute:
          return new fb(t, e, r);
        case yt.Prismatic:
          return new mb(t, e, r);
        case yt.Fixed:
          return new pb(t, e, r);
        case yt.Spring:
          return new bb(t, e, r);
        case yt.Rope:
          return new gb(t, e, r);
        case yt.Spherical:
          return new vb(t, e, r);
        case yt.Generic:
          return new yb(t, e, r);
        default:
          return new xt(t, e, r);
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
  class un extends xt {
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
  class pb extends xt {
  }
  class gb extends xt {
  }
  class bb extends xt {
  }
  class mb extends un {
    rawAxis() {
      return Ne.LinX;
    }
  }
  class fb extends un {
    rawAxis() {
      return Ne.AngX;
    }
  }
  class yb extends xt {
  }
  class vb extends xt {
  }
  class At {
    constructor() {
    }
    static fixed(t, e, r, n) {
      let o = new At();
      return o.anchor1 = t, o.anchor2 = r, o.frame1 = e, o.frame2 = n, o.jointType = ct.Fixed, o;
    }
    static spring(t, e, r, n, o) {
      let c = new At();
      return c.anchor1 = n, c.anchor2 = o, c.length = t, c.stiffness = e, c.damping = r, c.jointType = ct.Spring, c;
    }
    static rope(t, e, r) {
      let n = new At();
      return n.anchor1 = e, n.anchor2 = r, n.length = t, n.jointType = ct.Rope, n;
    }
    static generic(t, e, r, n) {
      let o = new At();
      return o.anchor1 = t, o.anchor2 = e, o.axis = r, o.axesMask = n, o.jointType = ct.Generic, o;
    }
    static spherical(t, e) {
      let r = new At();
      return r.anchor1 = t, r.anchor2 = e, r.jointType = ct.Spherical, r;
    }
    static prismatic(t, e, r) {
      let n = new At();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = ct.Prismatic, n;
    }
    static revolute(t, e, r) {
      let n = new At();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = ct.Revolute, n;
    }
    intoRaw() {
      let t = g.intoRaw(this.anchor1), e = g.intoRaw(this.anchor2), r, n, o = false, c = 0, l = 0;
      switch (this.jointType) {
        case ct.Fixed:
          let _ = M.intoRaw(this.frame1), h = M.intoRaw(this.frame2);
          n = ot.fixed(t, _, e, h), _.free(), h.free();
          break;
        case ct.Spring:
          n = ot.spring(this.length, this.stiffness, this.damping, t, e);
          break;
        case ct.Rope:
          n = ot.rope(this.length, t, e);
          break;
        case ct.Prismatic:
          r = g.intoRaw(this.axis), this.limitsEnabled && (o = true, c = this.limits[0], l = this.limits[1]), n = ot.prismatic(t, e, r, o, c, l), r.free();
          break;
        case ct.Generic:
          r = g.intoRaw(this.axis);
          let u = this.axesMask;
          n = ot.generic(t, e, r, u);
          break;
        case ct.Spherical:
          n = ot.spherical(t, e);
          break;
        case ct.Revolute:
          r = g.intoRaw(this.axis), n = ot.revolute(t, e, r), r.free();
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
      this.raw = t || new zt(), this.map = new Ue(), t && t.forEachJointHandle((e) => {
        this.map.set(e, xt.newTyped(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createJoint(t, e, r, n, o) {
      const c = e.intoRaw(), l = this.raw.createJoint(c, r, n, o);
      c.free();
      let _ = xt.newTyped(this.raw, t, l);
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
  class Jt {
    constructor(t, e) {
      this.rawSet = t, this.handle = e;
    }
    static newTyped(t, e) {
      switch (t.jointType(e)) {
        case yt.Revolute:
          return new xb(t, e);
        case yt.Prismatic:
          return new Cb(t, e);
        case yt.Fixed:
          return new Rb(t, e);
        case yt.Spherical:
          return new Eb(t, e);
        default:
          return new Jt(t, e);
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
  class pn extends Jt {
  }
  class Rb extends Jt {
  }
  class Cb extends pn {
    rawAxis() {
      return Ne.LinX;
    }
  }
  class xb extends pn {
    rawAxis() {
      return Ne.AngX;
    }
  }
  class Eb extends Jt {
  }
  class Pb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Ft(), this.map = new Ue(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Jt.newTyped(this.raw, e));
      });
    }
    createJoint(t, e, r, n) {
      const o = t.intoRaw(), c = this.raw.createJoint(o, e, r, n);
      o.free();
      let l = Jt.newTyped(this.raw, c);
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
      this.raw = t || new mr();
    }
  }
  class Ab {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Tt();
    }
    forEachActiveRigidBodyHandle(t) {
      this.raw.forEachActiveRigidBodyHandle(t);
    }
  }
  var ye;
  (function(i) {
    i[i.Vertex = 0] = "Vertex", i[i.Edge = 1] = "Edge", i[i.Face = 2] = "Face", i[i.Unknown = 3] = "Unknown";
  })(ye || (ye = {}));
  class Je {
    constructor(t, e, r, n) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.timeOfImpact = t, this.normal = e, n !== void 0 && (this.featureId = n), r !== void 0 && (this.featureType = r);
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new Je(t.time_of_impact(), g.fromRaw(t.normal()), t.featureType(), t.featureId());
      return t.free(), e;
    }
  }
  class Te {
    constructor(t, e, r, n, o) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.collider = t, this.timeOfImpact = e, this.normal = r, o !== void 0 && (this.featureId = o), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Te(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.normal()), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class kr {
    constructor(t, e) {
      this.collider = t, this.timeOfImpact = e;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new kr(t.get(e.colliderHandle()), e.timeOfImpact());
      return e.free(), r;
    }
  }
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
  class Fe {
    constructor(t, e, r, n, o) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = r, o !== void 0 && (this.featureId = o), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Fe(t.get(e.colliderHandle()), g.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class Se {
    constructor(t, e, r, n, o) {
      this.time_of_impact = t, this.witness1 = e, this.witness2 = r, this.normal1 = n, this.normal2 = o;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Se(e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class Ke extends Se {
    constructor(t, e, r, n, o, c) {
      super(e, r, n, o, c), this.collider = t;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Ke(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class Ib {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new It();
    }
    castRay(t, e, r, n, o, c, l, _, h, u, w) {
      let b = g.intoRaw(n.origin), f = g.intoRaw(n.dir), S = kr.fromRaw(r, this.raw.castRay(t.raw, e.raw, r.raw, b, f, o, c, l, _, h, u, w));
      return b.free(), f.free(), S;
    }
    castRayAndGetNormal(t, e, r, n, o, c, l, _, h, u, w) {
      let b = g.intoRaw(n.origin), f = g.intoRaw(n.dir), S = Te.fromRaw(r, this.raw.castRayAndGetNormal(t.raw, e.raw, r.raw, b, f, o, c, l, _, h, u, w));
      return b.free(), f.free(), S;
    }
    intersectionsWithRay(t, e, r, n, o, c, l, _, h, u, w, b) {
      let f = g.intoRaw(n.origin), S = g.intoRaw(n.dir), T = (j) => l(Te.fromRaw(r, j));
      this.raw.intersectionsWithRay(t.raw, e.raw, r.raw, f, S, o, c, T, _, h, u, w, b), f.free(), S.free();
    }
    intersectionWithShape(t, e, r, n, o, c, l, _, h, u, w) {
      let b = g.intoRaw(n), f = M.intoRaw(o), S = c.intoRaw(), T = this.raw.intersectionWithShape(t.raw, e.raw, r.raw, b, f, S, l, _, h, u, w);
      return b.free(), f.free(), S.free(), T;
    }
    projectPoint(t, e, r, n, o, c, l, _, h, u) {
      let w = g.intoRaw(n), b = Fe.fromRaw(r, this.raw.projectPoint(t.raw, e.raw, r.raw, w, o, c, l, _, h, u));
      return w.free(), b;
    }
    projectPointAndGetFeature(t, e, r, n, o, c, l, _, h) {
      let u = g.intoRaw(n), w = Fe.fromRaw(r, this.raw.projectPointAndGetFeature(t.raw, e.raw, r.raw, u, o, c, l, _, h));
      return u.free(), w;
    }
    intersectionsWithPoint(t, e, r, n, o, c, l, _, h, u) {
      let w = g.intoRaw(n);
      this.raw.intersectionsWithPoint(t.raw, e.raw, r.raw, w, o, c, l, _, h, u), w.free();
    }
    castShape(t, e, r, n, o, c, l, _, h, u, w, b, f, S, T) {
      let j = g.intoRaw(n), I = M.intoRaw(o), v = g.intoRaw(c), R = l.intoRaw(), x = Ke.fromRaw(r, this.raw.castShape(t.raw, e.raw, r.raw, j, I, v, R, _, h, u, w, b, f, S, T));
      return j.free(), I.free(), v.free(), R.free(), x;
    }
    intersectionsWithShape(t, e, r, n, o, c, l, _, h, u, w, b) {
      let f = g.intoRaw(n), S = M.intoRaw(o), T = c.intoRaw();
      this.raw.intersectionsWithShape(t.raw, e.raw, r.raw, f, S, T, l, _, h, u, w, b), f.free(), S.free(), T.free();
    }
    collidersWithAabbIntersectingAabb(t, e, r, n, o, c) {
      let l = g.intoRaw(n), _ = g.intoRaw(o);
      this.raw.collidersWithAabbIntersectingAabb(t.raw, e.raw, r.raw, l, _, c), l.free(), _.free();
    }
  }
  class zb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new et(), this.tempManifold = new Tb(null);
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
  class Tb {
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
  class ve {
    constructor(t, e, r, n, o) {
      this.distance = t, this.point1 = e, this.point2 = r, this.normal1 = n, this.normal2 = o;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new ve(t.distance(), g.fromRaw(t.point1()), g.fromRaw(t.point2()), g.fromRaw(t.normal1()), g.fromRaw(t.normal2()));
      return t.free(), e;
    }
  }
  class nt {
    static fromRaw(t, e) {
      const r = t.coShapeType(e);
      let n, o, c, l, _, h, u;
      switch (r) {
        case st.Ball:
          return new Dr(t.coRadius(e));
        case st.Cuboid:
          return n = t.coHalfExtents(e), new Re(n.x, n.y, n.z);
        case st.RoundCuboid:
          return n = t.coHalfExtents(e), o = t.coRoundRadius(e), new gn(n.x, n.y, n.z, o);
        case st.Capsule:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new bn(_, h);
        case st.Segment:
          return c = t.coVertices(e), new mn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]));
        case st.Polyline:
          return c = t.coVertices(e), l = t.coIndices(e), new vn(c, l);
        case st.Triangle:
          return c = t.coVertices(e), new fn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]));
        case st.RoundTriangle:
          return c = t.coVertices(e), o = t.coRoundRadius(e), new yn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]), o);
        case st.HalfSpace:
          return u = g.fromRaw(t.coHalfspaceNormal(e)), new Fb(u);
        case st.Voxels:
          const w = t.coVoxelData(e), b = t.coVoxelSize(e);
          return new Sn(w, b);
        case st.TriMesh:
          c = t.coVertices(e), l = t.coIndices(e);
          const f = t.coTriMeshFlags(e);
          return new Mr(c, l, f);
        case st.HeightField:
          const S = t.coHeightfieldScale(e), T = t.coHeightfieldHeights(e), j = t.coHeightfieldNRows(e), I = t.coHeightfieldNCols(e), v = t.coHeightFieldFlags(e);
          return new Rn(j, I, T, S, v);
        case st.ConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), new yr(c, l);
        case st.RoundConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), o = t.coRoundRadius(e), new vr(c, l, o);
        case st.Cylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new Cn(_, h);
        case st.RoundCylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), o = t.coRoundRadius(e), new xn(_, h, o);
        case st.Cone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new En(_, h);
        case st.RoundCone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), o = t.coRoundRadius(e), new Pn(_, h, o);
        default:
          throw new Error("unknown shape type: " + r);
      }
    }
    castShape(t, e, r, n, o, c, l, _, h, u) {
      let w = g.intoRaw(t), b = M.intoRaw(e), f = g.intoRaw(r), S = g.intoRaw(o), T = M.intoRaw(c), j = g.intoRaw(l), I = this.intoRaw(), v = n.intoRaw(), R = Se.fromRaw(null, I.castShape(w, b, f, v, S, T, j, _, h, u));
      return w.free(), b.free(), f.free(), S.free(), T.free(), j.free(), I.free(), v.free(), R;
    }
    intersectsShape(t, e, r, n, o) {
      let c = g.intoRaw(t), l = M.intoRaw(e), _ = g.intoRaw(n), h = M.intoRaw(o), u = this.intoRaw(), w = r.intoRaw(), b = u.intersectsShape(c, l, w, _, h);
      return c.free(), l.free(), _.free(), h.free(), u.free(), w.free(), b;
    }
    contactShape(t, e, r, n, o, c) {
      let l = g.intoRaw(t), _ = M.intoRaw(e), h = g.intoRaw(n), u = M.intoRaw(o), w = this.intoRaw(), b = r.intoRaw(), f = ve.fromRaw(w.contactShape(l, _, b, h, u, c));
      return l.free(), _.free(), h.free(), u.free(), w.free(), b.free(), f;
    }
    containsPoint(t, e, r) {
      let n = g.intoRaw(t), o = M.intoRaw(e), c = g.intoRaw(r), l = this.intoRaw(), _ = l.containsPoint(n, o, c);
      return n.free(), o.free(), c.free(), l.free(), _;
    }
    projectPoint(t, e, r, n) {
      let o = g.intoRaw(t), c = M.intoRaw(e), l = g.intoRaw(r), _ = this.intoRaw(), h = qe.fromRaw(_.projectPoint(o, c, l, n));
      return o.free(), c.free(), l.free(), _.free(), h;
    }
    intersectsRay(t, e, r, n) {
      let o = g.intoRaw(e), c = M.intoRaw(r), l = g.intoRaw(t.origin), _ = g.intoRaw(t.dir), h = this.intoRaw(), u = h.intersectsRay(o, c, l, _, n);
      return o.free(), c.free(), l.free(), _.free(), h.free(), u;
    }
    castRay(t, e, r, n, o) {
      let c = g.intoRaw(e), l = M.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), u = this.intoRaw(), w = u.castRay(c, l, _, h, n, o);
      return c.free(), l.free(), _.free(), h.free(), u.free(), w;
    }
    castRayAndGetNormal(t, e, r, n, o) {
      let c = g.intoRaw(e), l = M.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), u = this.intoRaw(), w = Je.fromRaw(u.castRayAndGetNormal(c, l, _, h, n, o));
      return c.free(), l.free(), _.free(), h.free(), u.free(), w;
    }
  }
  var rt;
  (function(i) {
    i[i.Ball = 0] = "Ball", i[i.Cuboid = 1] = "Cuboid", i[i.Capsule = 2] = "Capsule", i[i.Segment = 3] = "Segment", i[i.Polyline = 4] = "Polyline", i[i.Triangle = 5] = "Triangle", i[i.TriMesh = 6] = "TriMesh", i[i.HeightField = 7] = "HeightField", i[i.ConvexPolyhedron = 9] = "ConvexPolyhedron", i[i.Cylinder = 10] = "Cylinder", i[i.Cone = 11] = "Cone", i[i.RoundCuboid = 12] = "RoundCuboid", i[i.RoundTriangle = 13] = "RoundTriangle", i[i.RoundCylinder = 14] = "RoundCylinder", i[i.RoundCone = 15] = "RoundCone", i[i.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", i[i.HalfSpace = 17] = "HalfSpace", i[i.Voxels = 18] = "Voxels";
  })(rt || (rt = {}));
  var Ti;
  (function(i) {
    i[i.FIX_INTERNAL_EDGES = 1] = "FIX_INTERNAL_EDGES";
  })(Ti || (Ti = {}));
  var fr;
  (function(i) {
    i[i.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", i[i.ORIENTED = 8] = "ORIENTED", i[i.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", i[i.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", i[i.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", i[i.FIX_INTERNAL_EDGES = 144] = "FIX_INTERNAL_EDGES";
  })(fr || (fr = {}));
  class Dr extends nt {
    constructor(t) {
      super(), this.type = rt.Ball, this.radius = t;
    }
    intoRaw() {
      return F.ball(this.radius);
    }
  }
  class Fb extends nt {
    constructor(t) {
      super(), this.type = rt.HalfSpace, this.normal = t;
    }
    intoRaw() {
      let t = g.intoRaw(this.normal), e = F.halfspace(t);
      return t.free(), e;
    }
  }
  class Re extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.Cuboid, this.halfExtents = g.new(t, e, r);
    }
    intoRaw() {
      return F.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
    }
  }
  class gn extends nt {
    constructor(t, e, r, n) {
      super(), this.type = rt.RoundCuboid, this.halfExtents = g.new(t, e, r), this.borderRadius = n;
    }
    intoRaw() {
      return F.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
    }
  }
  class bn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Capsule, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return F.capsule(this.halfHeight, this.radius);
    }
  }
  class mn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Segment, this.a = t, this.b = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = F.segment(t, e);
      return t.free(), e.free(), r;
    }
  }
  class fn extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.Triangle, this.a = t, this.b = e, this.c = r;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = F.triangle(t, e, r);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class yn extends nt {
    constructor(t, e, r, n) {
      super(), this.type = rt.RoundTriangle, this.a = t, this.b = e, this.c = r, this.borderRadius = n;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = F.roundTriangle(t, e, r, this.borderRadius);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class vn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
    }
    intoRaw() {
      return F.polyline(this.vertices, this.indices);
    }
  }
  class Sn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Voxels, this.data = t, this.voxelSize = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.voxelSize), e;
      return this.data instanceof Int32Array ? e = F.voxels(t, this.data) : e = F.voxelsFromPoints(t, this.data), t.free(), e;
    }
  }
  let Mr = class extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.TriMesh, this.vertices = t, this.indices = e, this.flags = r;
    }
    intoRaw() {
      return F.trimesh(this.vertices, this.indices, this.flags);
    }
  };
  class yr extends nt {
    constructor(t, e) {
      super(), this.type = rt.ConvexPolyhedron, this.vertices = t, this.indices = e;
    }
    intoRaw() {
      return this.indices ? F.convexMesh(this.vertices, this.indices) : F.convexHull(this.vertices);
    }
  }
  class vr extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = r;
    }
    intoRaw() {
      return this.indices ? F.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : F.roundConvexHull(this.vertices, this.borderRadius);
    }
  }
  class Rn extends nt {
    constructor(t, e, r, n, o) {
      super(), this.type = rt.HeightField, this.nrows = t, this.ncols = e, this.heights = r, this.scale = n, this.flags = o;
    }
    intoRaw() {
      let t = g.intoRaw(this.scale), e = F.heightfield(this.nrows, this.ncols, this.heights, t, this.flags);
      return t.free(), e;
    }
  }
  class Cn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Cylinder, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return F.cylinder(this.halfHeight, this.radius);
    }
  }
  class xn extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.RoundCylinder, this.borderRadius = r, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return F.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class En extends nt {
    constructor(t, e) {
      super(), this.type = rt.Cone, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return F.cone(this.halfHeight, this.radius);
    }
  }
  class Pn extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = r;
    }
    intoRaw() {
      return F.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class kb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new xa();
    }
    step(t, e, r, n, o, c, l, _, h, u, w, b) {
      let f = g.intoRaw(t);
      w ? this.raw.stepWithEvents(f, e.raw, r.raw, n.raw, o.raw, c.raw, l.raw, _.raw, h.raw, u.raw, w.raw, b, b ? b.filterContactPair : null, b ? b.filterIntersectionPair : null) : this.raw.step(f, e.raw, r.raw, n.raw, o.raw, c.raw, l.raw, _.raw, h.raw, u.raw), f.free();
    }
  }
  class Fi {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Pa();
    }
    serializeAll(t, e, r, n, o, c, l, _, h) {
      let u = g.intoRaw(t);
      const w = this.raw.serializeAll(u, e.raw, r.raw, n.raw, o.raw, c.raw, l.raw, _.raw, h.raw);
      return u.free(), w;
    }
    deserializeAll(t) {
      return $e.fromRaw(this.raw.deserializeAll(t));
    }
  }
  class Db {
    constructor(t, e) {
      this.vertices = t, this.colors = e;
    }
  }
  class Mb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    constructor(t) {
      this.raw = t || new Sa();
    }
    render(t, e, r, n, o, c, l) {
      this.raw.render(t.raw, e.raw, r.raw, n.raw, o.raw, c, e.castClosure(l)), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
  }
  class Lb {
  }
  class Bb {
    constructor(t, e, r, n, o, c) {
      this.params = e, this.bodies = o, this.colliders = c, this.broadPhase = r, this.narrowPhase = n, this.raw = new Ca(t), this.rawCharacterCollision = new hn(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
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
  var ki;
  (function(i) {
    i[i.None = 0] = "None", i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ", i[i.AllLin = 7] = "AllLin", i[i.AllAng = 56] = "AllAng", i[i.All = 63] = "All";
  })(ki || (ki = {}));
  class Nb {
    constructor(t, e, r, n, o, c) {
      this.params = t, this.bodies = e, this.raw = new Ea(r, n, o, c);
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
  class Ob {
    constructor(t, e, r, n, o) {
      this.raw = new Ra(t.handle), this.broadPhase = e, this.narrowPhase = r, this.bodies = n, this.colliders = o, this._chassis = t;
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
  class $e {
    free() {
      this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.pidControllers.forEach((t) => t.free()), this.vehicleControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.pidControllers = void 0, this.vehicleControllers = void 0;
    }
    constructor(t, e, r, n, o, c, l, _, h, u, w, b, f) {
      this.gravity = t, this.integrationParameters = new ub(e), this.islands = new Ab(r), this.broadPhase = new Ib(n), this.narrowPhase = new zb(o), this.bodies = new wb(c), this.colliders = new Wb(l), this.impulseJoints = new Sb(_), this.multibodyJoints = new Pb(h), this.ccdSolver = new jb(u), this.physicsPipeline = new kb(w), this.serializationPipeline = new Fi(b), this.debugRenderPipeline = new Mb(f), this.characterControllers = /* @__PURE__ */ new Set(), this.pidControllers = /* @__PURE__ */ new Set(), this.vehicleControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    static fromRaw(t) {
      return t ? new $e(g.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
      return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(t) {
      return new Fi().deserializeAll(t);
    }
    debugRender(t, e) {
      return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase, t, e), new Db(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
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
    get maxCcdSubsteps() {
      return this.integrationParameters.maxCcdSubsteps;
    }
    set maxCcdSubsteps(t) {
      this.integrationParameters.maxCcdSubsteps = t;
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
      let e = new Bb(t, this.integrationParameters, this.broadPhase, this.narrowPhase, this.bodies, this.colliders);
      return this.characterControllers.add(e), e;
    }
    removeCharacterController(t) {
      this.characterControllers.delete(t), t.free();
    }
    createPidController(t, e, r, n) {
      let o = new Nb(this.integrationParameters, this.bodies, t, e, r, n);
      return this.pidControllers.add(o), o;
    }
    removePidController(t) {
      this.pidControllers.delete(t), t.free();
    }
    createVehicleController(t) {
      let e = new Ob(t, this.broadPhase, this.narrowPhase, this.bodies, this.colliders);
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
    castShape(t, e, r, n, o, c, l, _, h, u, w, b) {
      return this.broadPhase.castShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, o, c, l, _, h, u ? u.handle : null, w ? w.handle : null, this.colliders.castClosure(b));
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
  var ke;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", i[i.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
  })(ke || (ke = {}));
  class Hb {
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
  class Gb {
    constructor(t, e) {
      this.raw = e || new wn(t);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(t) {
      this.raw.drainCollisionEvents(t);
    }
    drainContactForceEvents(t) {
      let e = new Hb();
      this.raw.drainContactForceEvents((r) => {
        e.raw = r, t(e), e.free();
      });
    }
    clear() {
      this.raw.clear();
    }
  }
  var Sr;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", i[i.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
  })(Sr || (Sr = {}));
  var Di;
  (function(i) {
    i[i.EMPTY = 0] = "EMPTY", i[i.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
  })(Di || (Di = {}));
  var De;
  (function(i) {
    i[i.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", i[i.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", i[i.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", i[i.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", i[i.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", i[i.FIXED_FIXED = 32] = "FIXED_FIXED", i[i.DEFAULT = 15] = "DEFAULT", i[i.ALL = 60943] = "ALL";
  })(De || (De = {}));
  class Mi {
    constructor(t, e, r, n) {
      this.colliderSet = t, this.handle = e, this._parent = r, this._shape = n;
    }
    finalizeDeserialization(t) {
      this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
      this._shape || (this._shape = nt.fromRaw(this.colliderSet.raw, this.handle));
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
      let r = g.intoRaw(t), n = qe.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, r, e));
      return r.free(), n;
    }
    intersectsRay(t, e) {
      let r = g.intoRaw(t.origin), n = g.intoRaw(t.dir), o = this.colliderSet.raw.coIntersectsRay(this.handle, r, n, e);
      return r.free(), n.free(), o;
    }
    castShape(t, e, r, n, o, c, l, _) {
      let h = g.intoRaw(t), u = g.intoRaw(r), w = M.intoRaw(n), b = g.intoRaw(o), f = e.intoRaw(), S = Se.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, h, f, u, w, b, c, l, _));
      return h.free(), u.free(), w.free(), b.free(), f.free(), S;
    }
    castCollider(t, e, r, n, o, c) {
      let l = g.intoRaw(t), _ = g.intoRaw(r), h = Ke.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, l, e.handle, _, n, o, c));
      return l.free(), _.free(), h;
    }
    intersectsShape(t, e, r) {
      let n = g.intoRaw(e), o = M.intoRaw(r), c = t.intoRaw(), l = this.colliderSet.raw.coIntersectsShape(this.handle, c, n, o);
      return n.free(), o.free(), c.free(), l;
    }
    contactShape(t, e, r, n) {
      let o = g.intoRaw(e), c = M.intoRaw(r), l = t.intoRaw(), _ = ve.fromRaw(this.colliderSet.raw.coContactShape(this.handle, l, o, c, n));
      return o.free(), c.free(), l.free(), _;
    }
    contactCollider(t, e) {
      return ve.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
    }
    castRay(t, e, r) {
      let n = g.intoRaw(t.origin), o = g.intoRaw(t.dir), c = this.colliderSet.raw.coCastRay(this.handle, n, o, e, r);
      return n.free(), o.free(), c;
    }
    castRayAndGetNormal(t, e, r) {
      let n = g.intoRaw(t.origin), o = g.intoRaw(t.dir), c = Je.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, n, o, e, r));
      return n.free(), o.free(), c;
    }
  }
  var Qt;
  (function(i) {
    i[i.Density = 0] = "Density", i[i.Mass = 1] = "Mass", i[i.MassProps = 2] = "MassProps";
  })(Qt || (Qt = {}));
  class tt {
    constructor(t) {
      this.enabled = true, this.shape = t, this.massPropsMode = Qt.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = M.identity(), this.translation = g.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = ze.Average, this.restitutionCombineRule = ze.Average, this.activeCollisionTypes = De.DEFAULT, this.activeEvents = ke.NONE, this.activeHooks = Sr.NONE, this.mass = 0, this.centerOfMass = g.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = M.identity();
    }
    static ball(t) {
      const e = new Dr(t);
      return new tt(e);
    }
    static capsule(t, e) {
      const r = new bn(t, e);
      return new tt(r);
    }
    static segment(t, e) {
      const r = new mn(t, e);
      return new tt(r);
    }
    static triangle(t, e, r) {
      const n = new fn(t, e, r);
      return new tt(n);
    }
    static roundTriangle(t, e, r, n) {
      const o = new yn(t, e, r, n);
      return new tt(o);
    }
    static polyline(t, e) {
      const r = new vn(t, e);
      return new tt(r);
    }
    static voxels(t, e) {
      const r = new Sn(t, e);
      return new tt(r);
    }
    static trimesh(t, e, r) {
      const n = new Mr(t, e, r);
      return new tt(n);
    }
    static cuboid(t, e, r) {
      const n = new Re(t, e, r);
      return new tt(n);
    }
    static roundCuboid(t, e, r, n) {
      const o = new gn(t, e, r, n);
      return new tt(o);
    }
    static heightfield(t, e, r, n, o) {
      const c = new Rn(t, e, r, n, o);
      return new tt(c);
    }
    static cylinder(t, e) {
      const r = new Cn(t, e);
      return new tt(r);
    }
    static roundCylinder(t, e, r) {
      const n = new xn(t, e, r);
      return new tt(n);
    }
    static cone(t, e) {
      const r = new En(t, e);
      return new tt(r);
    }
    static roundCone(t, e, r) {
      const n = new Pn(t, e, r);
      return new tt(n);
    }
    static convexHull(t) {
      const e = new yr(t, null);
      return new tt(e);
    }
    static convexMesh(t, e) {
      const r = new yr(t, e);
      return new tt(r);
    }
    static roundConvexHull(t, e) {
      const r = new vr(t, null, e);
      return new tt(r);
    }
    static roundConvexMesh(t, e, r) {
      const n = new vr(t, e, r);
      return new tt(n);
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
      return this.massPropsMode = Qt.Density, this.density = t, this;
    }
    setMass(t) {
      return this.massPropsMode = Qt.Mass, this.mass = t, this;
    }
    setMassProperties(t, e, r, n) {
      return this.massPropsMode = Qt.MassProps, this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), M.copy(this.angularInertiaLocalFrame, n), this;
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
      this.raw = t || new Y(), this.map = new Ue(), t && t.forEachColliderHandle((e) => {
        this.map.set(e, new Mi(this, e, null));
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
      let o = e.shape.intoRaw(), c = g.intoRaw(e.translation), l = M.intoRaw(e.rotation), _ = g.intoRaw(e.centerOfMass), h = g.intoRaw(e.principalAngularInertia), u = M.intoRaw(e.angularInertiaLocalFrame), w = this.raw.createCollider(e.enabled, o, c, l, e.massPropsMode, e.mass, _, h, u, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, e.contactSkin, n, n ? r : 0, t.raw);
      o.free(), c.free(), l.free(), _.free(), h.free(), u.free();
      let b = n ? t.get(r) : null, f = new Mi(this, w, b, e.shape);
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
  class Vb extends kn {
    constructor(t) {
      super(), this.world = t, this.material = new Dn({
        color: 16777215,
        vertexColors: true
      }), this.geometry = new Mn(), this.frustumCulled = false;
    }
    update() {
      this.visible == true && this.parent != null && (this.buffers = this.world.debugRender(), this.geometry.setAttribute("position", new Lr(this.buffers.vertices, 3)), this.geometry.setAttribute("color", new Lr(this.buffers.colors, 4)));
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
  class Ub {
    constructor() {
      this.world = new $e({
        x: 0,
        y: -9.81 * 8,
        z: 0
      }), this.world.numSolverIterations = 4, this.eventQueue = new Gb(true), this.debugger = new Vb(this.world), this.entities = /* @__PURE__ */ new Map(), this.jointQueue = [];
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
      const r = new ht(), n = new ht().copy(t.rigidBodyDesc.translation).sub(e.rigidBodyDesc.translation), o = new Wt().copy(t.rigidBodyDesc.rotation), c = new Wt().copy(e.rigidBodyDesc.rotation);
      r.applyQuaternion(o.conjugate()), n.applyQuaternion(c.conjugate());
      const l = At.fixed(r, o, n, c);
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
  class Jb {
    constructor(t) {
      this.interval = new ts(), this.physics = new Ub(), this.graphics, this.assets = new es(this.onLoad.bind(this, t));
    }
    init(t) {
      this.graphics = new rs(t), this.graphics.scene.add(this.physics.debugger), this.physics.debugger.disable(), this.assets.load({
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
  }, Kb = {
    class: "container"
  }, $b = {
    class: "content"
  }, Xb = {
    key: 0,
    class: "title"
  }, Yb = [
    "innerHTML"
  ], Qb = {
    class: "inputs"
  }, Zb = [
    "id",
    "type",
    "value",
    "min",
    "max",
    "step",
    "accept"
  ], tm = {
    __name: "Modal",
    setup(i) {
      var t = Q(""), e = Q(""), r = Q([]), n = Q(false);
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
      function u(b) {
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
          f.indexOf(b.code) > -1 && (b.preventDefault(), u(b));
        }
      }
      return Ht(function() {
        o();
      }), Rr(function() {
        c();
      }), (b, f) => (W(), Cr(Me, {
        name: "fade-modal"
      }, {
        default: te(() => [
          gt(n) == true ? (W(), K("div", qb, [
            P("div", {
              class: "background",
              onClick: _
            }),
            P("div", Kb, [
              P("div", $b, [
                gt(t) != "" ? (W(), K("h1", Xb, ee(gt(t)), 1)) : Vt("", true),
                P("p", {
                  class: "text",
                  innerHTML: gt(e)
                }, null, 8, Yb),
                P("div", Qb, [
                  (W(true), K(re, null, pe(gt(r), (S, T) => (W(), K("input", Ln({
                    class: S.class,
                    id: "modal-" + S.type + "-" + T,
                    type: S.type,
                    value: S.value,
                    min: S.min,
                    max: S.max,
                    step: S.step,
                    accept: S.accept,
                    style: S.style
                  }, {
                    [Bn(S.event)]: (j) => h(S.callback, j)
                  }), null, 16, Zb))), 256))
                ]),
                P("a", {
                  class: "close",
                  onClick: _
                }, f[0] || (f[0] = [
                  P("span", null, "x", -1)
                ]))
              ])
            ])
          ])) : Vt("", true)
        ]),
        _: 1
      }));
    }
  }, em = qt(tm, [
    [
      "__scopeId",
      "data-v-7c21f54e"
    ]
  ]), rm = {
    __name: "App",
    setup(i) {
      const t = Q(false), e = Q(), r = window.game = new Jb(o), n = ha();
      function o() {
        t.value = true;
      }
      return Ht(function() {
        r.init(e.value);
      }), (c, l) => {
        const _ = Nn("router-view");
        return W(), K(re, null, [
          P("canvas", {
            ref_key: "canvas",
            ref: e
          }, null, 512),
          t.value ? (W(), K("div", {
            key: 0,
            class: Ot([
              "page",
              gt(n).name
            ])
          }, [
            Ct(_, null, {
              default: te(({ Component: h }) => [
                Ct(Me, {
                  name: "fade"
                }, {
                  default: te(() => [
                    (W(), Cr(On(h), {
                      game: gt(r)
                    }, null, 8, [
                      "game"
                    ]))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            })
          ], 2)) : Vt("", true),
          Ct(em),
          Ct(is)
        ], 64);
      };
    }
  }, im = qt(rm, [
    [
      "__scopeId",
      "data-v-acc4bc17"
    ]
  ]), nm = {
    __name: "PageHome",
    setup(i) {
      var t = Q("Home Page");
      return Ht(function() {
      }), (e, r) => (W(), K("h1", null, ee(gt(t)), 1));
    }
  }, sm = {
    __name: "PagePlay",
    setup(i) {
      var t = Q("Play Page");
      return Ht(function() {
      }), (e, r) => (W(), K("h1", null, ee(gt(t)), 1));
    }
  };
  class Xe extends Hn {
    constructor(t) {
      super(), this.name = t.name || "", this.type = t.type || "entity", this.id = t.id || Gn.generateUUID(), this.isEntity = true, this.object, this.objectDesc, this.rigidBody, this.rigidBodyDesc, this.collidersDesc = [], this.snapshot = {
        position_1: new ht(),
        position_2: new ht(),
        rotation_1: new Wt(),
        rotation_2: new Wt()
      }, this.tweens = new ns(), this.forceDirection = new ht(), this.forceAcceleration = 1, this.forceSpeedMax = 1 / 0, this.setObjectDesc(t), this.setRigidBodyDesc(t), this.addColliderDesc(t), this.onAdded = this.onAdded.bind(this), this.addEventListener("added", this.onAdded);
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
      }, t), this.objectDesc = new Br(), this.objectDesc.scale.copy(t.scale);
    }
    setObject(t) {
      this.object = t;
    }
    createObject3D(t) {
      const e = new Br();
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
      }, t), this.rigidBodyDesc = new Rt(isNaN(t.status) ? ft[t.status] : t.status), this.rigidBodyDesc.enabledRotations(t.enabledRotations.x, t.enabledRotations.y, t.enabledRotations.z), this.rigidBodyDesc.enabledTranslations(t.enabledTranslations.x, t.enabledTranslations.y, t.enabledTranslations.z), this.rigidBodyDesc.setAngularDamping(t.angularDamping), this.rigidBodyDesc.setCcdEnabled(t.ccd), this.rigidBodyDesc.setEnabled(t.isEnabled), this.rigidBodyDesc.setLinearDamping(t.linearDamping), this.rigidBodyDesc.setRotation(t.rotation), this.rigidBodyDesc.setSleeping(t.sleeping), this.rigidBodyDesc.setSoftCcdPrediction(t.softCcdPrediction), this.rigidBodyDesc.setTranslation(t.position.x, t.position.y, t.position.z), this.rigidBodyDesc.setUserData({
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
        const r = new tt(t.shape);
        r.setActiveCollisionTypes(isNaN(t.activeCollisionTypes) ? De[t.activeCollisionTypes] : t.activeCollisionTypes), r.setActiveEvents(isNaN(t.activeEvents) ? ke[t.activeEvents] : t.activeEvents), r.setCollisionGroups(t.collisionGroups), r.setContactForceEventThreshold(t.contactForceEventThreshold), r.setMass(t.mass), r.setDensity(t.density), r.setFriction(t.friction), r.setRestitution(t.restitution), r.setSensor(t.isSensor), r.setSolverGroups(t.solverGroups), r.setTranslation(t.translation.x, t.translation.y, t.translation.z), r.events = t.events, this.collidersDesc.push(r);
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
      lt.copy(this.getLinearVelocity()), lt.applyAxisAngle(e, -r), lt.multiply(t), lt.applyAxisAngle(e, r), this.setLinearVelocity(lt, true);
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
      t = lt.copy(t), t.applyAxisAngle({
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
        lt.copy(this.getLinearVelocity());
        const t = lt.dot(this.forceDirection), e = t + this.forceAcceleration, n = Math.max(t, Math.min(e, this.forceSpeedMax)) - t;
        lt.x += this.forceDirection.x * n, lt.y += this.forceDirection.y * n, lt.z += this.forceDirection.z * n, this.setLinearVelocity(lt);
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
      const r = lt.copy(this.getLinearVelocity());
      let n = 1;
      r.applyAxisAngle({
        x: 0,
        y: 0,
        z: 1
      }, -e), n *= -Math.sign(Math.round(r.x)), t = lt.copy(t), t.multiplyScalar(n), this.setAngularVelocity(t);
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
      return typeof t.easing == "string" && (t.easing = t.easing.split(".").reduce((r, n) => r && r[n] || null, ss)), new as(t.object, this.tweens).to(t.to, t.duration).dynamic(t.dynamic).easing(t.easing).interpolation(t.interpolation).onStart(t.onStart).onUpdate(t.onUpdate).onComplete(t.onComplete);
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
      return this.rigidBody == null ? 0 : lt.copy(this.getLinearVelocity()).length();
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
  let lt = new ht(), wt = class extends Xe {
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
      var e = new Wn(1, 1, 1), r = new Vi({
        color: t.color
      });
      const n = new Ui(e, r);
      return n.receiveShadow = true, n.castShadow = true, n;
    }
    setModel(t) {
      this.model = t;
    }
    setScale(t) {
      for (var e = new ht().copy(t), r = e.clone(), n = 0; n < this.rigidBody.numColliders(); n++) {
        var o = this.rigidBody.collider(n), c = this.collidersDesc[n], l = new ht().copy(c.shape.halfExtents), _ = l.clone().multiplyScalar(2), h = new ht().copy(c.translation);
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
  class jn extends Xe {
    constructor(t) {
      t = Object.assign({
        status: 1
      }, t), super(t);
    }
  }
  class am extends wt {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        collisionGroups: 0,
        isSensor: true,
        status: 1
      }, t), super(t), this.lightType = t.lightType, this.model = Ki.create(t.lightType, t), this.type = "light";
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
  class om extends Xe {
    static model = {
      name: ""
    };
    constructor(t = {}) {
      if (t = Object.assign({
        color: "#ffffff",
        heightSegments: 32,
        radius: 0.5,
        widthSegments: 32
      }, t), t.shape = new Dr(t.radius), super(t), this.isSphere = true, this.type = "sphere", this.model = t.model, this.model.isObject3D == null) {
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
      const e = new Vn(t.radius, t.widthSegments, t.heightSegments), r = new Vi({
        color: t.color
      }), n = new Ui(e, r);
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
  class cm extends Xe {
    constructor(t) {
      t = Object.assign({
        indices: new Uint16Array(),
        status: 1,
        vertices: new Float32Array()
      }, t);
      let e, r = [];
      t.model ? (t.model.traverse(function(n) {
        n.isMesh && (e = n.geometry, e.rotateX(n.rotation.x), e.rotateY(n.rotation.y), e.rotateZ(n.rotation.z), e.scale(n.scale.x, n.scale.y, n.scale.z), e.translate(n.position.x, n.position.y, n.position.z), r.push(e));
      }), e = Un(r), t.vertices = e.attributes.position.array, t.indices = e.index.array, t.shape = new Mr(t.vertices, t.indices, fr.FIX_INTERNAL_EDGES)) : console.error("Error: TriMesh missing model."), super(t), this.isTriMesh = true, this.type = "trimesh", this.model = t.model, this.onTriMeshAdded = this.onTriMeshAdded.bind(this), this.addEventListener("added", this.onTriMeshAdded);
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
  let lm = class An {
    static Cube = wt;
    static Empty = jn;
    static Light = am;
    static Sphere = om;
    static TriMesh = cm;
    static create(t) {
      return new this[t.className](t);
    }
    static getClassNameByType(t) {
      return Object.keys({
        ...this,
        ...An
      }).find((n) => n.toLowerCase() == t);
    }
    static getPropertyByClassName(t, e) {
      const r = this[e];
      if (r) return r[t];
    }
  };
  class _m extends wt {
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
  class dm extends wt {
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
  class hm extends wt {
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
  class wm extends wt {
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
  class um extends wt {
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
      var r = new ht(1, 0, 0), n = new Wt().copy(e.rigidBody.rotation()), o = new xr().setFromQuaternion(n), c = o.z;
      r.x = Math.cos(c), r.y = Math.sin(c), t.setForce(r, 0.5, 14);
    }
  }
  class pm extends wt {
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
  class gm extends wt {
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
  class bm extends wt {
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
      var r = new ht().copy(game.physics.world.gravity), n = r.length(), o = new Wt().copy(e.rigidBody.rotation()), c = new xr().setFromQuaternion(o), l = -(Math.PI / 2 - c.z);
      game.physics.world.gravity.x = n * Math.cos(l), game.physics.world.gravity.y = n * Math.sin(l), t.dispatchEvent({
        type: "setgravity",
        gravity: r,
        value: l
      });
    }
  }
  class In {
    constructor() {
    }
    static create(t = "PerspectiveCamera", e) {
      var r, n, o = window.innerWidth, c = window.innerHeight, l = o / c;
      return e = Object.assign({
        far: 100,
        fov: 45,
        near: 0.05,
        zoom: 1
      }, e), t == "PerspectiveCamera" ? r = new Jn(e.fov, l, e.near, e.far) : t == "OrthographicCamera" && (r = new qn(-l, l, 1, -1, e.near, e.far)), r.fov = e.fov, r.zoom = e.zoom, r.updateProjectionMatrix(), e.helper == true && (n = new Kn(r), r.addEventListener("added", function(_) {
        r.parent.add(n);
      }), r.addEventListener("removed", function(_) {
        n.removeFromParent();
      })), r;
    }
  }
  class mm extends wt {
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
      }, t), super(t), this.type = "player", this.keys = {}, this.pointer = {}, this.jumpCount = 0, this.mode = "jump", this.light = Ki.create("PointLight", {
        color: "#dc265a",
        intensity: Math.PI * 10
      }), this.camera = In.create("PerspectiveCamera"), this.cameraOffset = new ht(0, 0, 20), this.onPlayerAdded = this.onPlayerAdded.bind(this), this.addEventListener("added", this.onPlayerAdded);
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
        const e = this.rigidBody.mass(), r = new ht(0, 30 * e, 0), n = game.physics.world.gravity, o = Math.atan2(n.y, n.x) + Math.PI / 2;
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
        this.keys.KeyA == true ? t = -1 : this.keys.KeyD == true ? t = 1 : this.keys.ArrowLeft == true ? t = -1 : this.keys.ArrowRight == true && (t = 1), hr.copy({
          x: t,
          y: 0,
          z: 0
        }), hr.applyAxisAngle({
          x: 0,
          y: 0,
          z: 1
        }, r), this.setForce(hr, 2, 14);
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
  let hr = new ht();
  class fm extends jn {
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
  class ym extends wt {
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
  class vm extends wt {
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
      var r = e.rigidBody.collider(0), n = new ht().copy(r.halfExtents()).multiplyScalar(2);
      t.setScale(n);
    }
  }
  class Sm extends wt {
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
  class Rm extends wt {
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
  class Li extends lm {
    static Bounce = _m;
    static Checkpoint = dm;
    static Control = hm;
    static Cube = wm;
    static Direction = um;
    static Finish = pm;
    static Grapple = gm;
    static Gravity = bm;
    static Player = mm;
    static Prop = fm;
    static Reset = ym;
    static Resize = vm;
    static Spike = Sm;
    static Tip = Rm;
    static create(t) {
      return t.className == null && (t.className = super.getClassNameByType(t.type)), t.model == null && (t.model = super.getPropertyByClassName("model", t.className)), t.model && game.assets.get(t.model.name) && (t.model = game.assets.duplicate(t.model.name)), super.create(t);
    }
  }
  class Cm {
    constructor(t, e) {
      this.execute = t, this.undo = e;
    }
  }
  class xm {
    constructor() {
      this.commands = [], this.current = -1;
    }
    add(t, e) {
      const r = new Cm(t, e);
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
  const Em = {
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
      return Ht(function() {
      }), (n, o) => (W(), K("div", Em, [
        P("div", Pm, [
          P("button", {
            class: Ot([
              "action",
              {
                selected: i.mode.type == "select"
              }
            ]),
            onClick: o[0] || (o[0] = (c) => r("select")),
            title: "Select"
          }, o[3] || (o[3] = [
            P("span", {
              class: "material-symbols-rounded"
            }, "arrow_selector_tool", -1)
          ]), 2),
          P("button", {
            class: Ot([
              "action",
              {
                selected: i.mode.type == "add"
              }
            ]),
            onClick: o[1] || (o[1] = (c) => r("add")),
            title: "Add"
          }, o[4] || (o[4] = [
            P("span", {
              class: "material-symbols-rounded"
            }, "dashboard_customize", -1)
          ]), 2),
          P("button", {
            class: Ot([
              "action",
              {
                selected: i.mode.type == "move"
              }
            ]),
            onClick: o[2] || (o[2] = (c) => r("move")),
            title: "Move camera"
          }, o[5] || (o[5] = [
            P("span", {
              class: "material-symbols-rounded"
            }, "back_hand", -1)
          ]), 2)
        ])
      ]));
    }
  }, Am = qt(jm, [
    [
      "__scopeId",
      "data-v-59459b72"
    ]
  ]), Im = {
    class: "panel"
  }, zm = {
    class: "prefabs"
  }, Tm = [
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
      const e = t, r = i, n = Q({}), o = Q(false), c = dt(() => _()), l = dt((w) => (r.mode.type == "add" ? o.value = !w : o.value = false, o.value));
      function _() {
        return Object.keys(n.value).map((w) => {
          const b = n.value[w], f = r.game.assets.get(b.model.name);
          return b.thumbnail = r.game.assets.assetModelLoader.renderThumbnail(f, b), b;
        });
      }
      function h(w, b) {
        e("addEntity", w, b);
      }
      function u() {
        o.value = false;
      }
      return Ht(async () => {
        n.value = r.game.assets.get("prefabs");
      }), (w, b) => Ji((W(), K("div", Im, [
        b[0] || (b[0] = P("div", {
          class: "header"
        }, [
          P("div", {
            class: "title"
          }, "Add")
        ], -1)),
        P("div", zm, [
          (W(true), K(re, null, pe(c.value, (f) => (W(), K("button", {
            class: "prefab",
            title: f.className,
            onClick: (S) => h(S, f)
          }, [
            P("img", {
              src: f.thumbnail
            }, null, 8, Fm)
          ], 8, Tm))), 256))
        ]),
        P("button", {
          class: "close",
          onClick: u
        }, "x")
      ], 512)), [
        [
          qi,
          l.value
        ]
      ]);
    }
  }, Dm = qt(km, [
    [
      "__scopeId",
      "data-v-b0bcae3d"
    ]
  ]), Mm = {
    class: "panel"
  }, Lm = {
    class: "header"
  }, Bm = {
    class: "actions"
  }, Nm = [
    "disabled"
  ], Om = [
    "disabled"
  ], Hm = [
    "onClick",
    "onContextmenu",
    "onDragstart",
    "onDragover",
    "onDragend",
    "onDrop"
  ], Gm = [
    "onDblclick"
  ], Wm = [
    "id",
    "value",
    "onChange"
  ], Vm = [
    "onClick"
  ], Um = {
    class: "row"
  }, Jm = [
    "value",
    "onChange"
  ], qm = [
    "value",
    "onChange"
  ], Km = [
    "value",
    "onChange"
  ], $m = {
    class: "row"
  }, Xm = [
    "value",
    "onChange"
  ], Ym = [
    "value",
    "onChange"
  ], Qm = [
    "value",
    "onChange"
  ], Zm = {
    class: "row"
  }, tf = [
    "value",
    "onChange"
  ], ef = [
    "value",
    "onChange"
  ], rf = [
    "value",
    "onChange"
  ], nf = {
    class: "row"
  }, sf = [
    "onChange"
  ], af = {
    class: "row"
  }, of = [
    "onChange"
  ], cf = {
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
      const e = i, r = t, n = Q(true), o = Q();
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
      function u(I) {
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
      function S(I, v) {
        r("moveEntity", I, v);
      }
      function T(I, v) {
        v.isExpanded = !v.isExpanded;
      }
      function j(I, v, R) {
        r("editEntity", I, v, R);
      }
      return (I, v) => (W(), K("div", Mm, [
        P("div", Lm, [
          P("div", {
            class: "title",
            onClick: v[0] || (v[0] = (R) => n.value = !n.value)
          }, "Scene"),
          P("div", Bm, [
            P("button", {
              class: "action button",
              onClick: v[1] || (v[1] = (R) => r("undo")),
              title: "Undo",
              disabled: e.canUndo == false
            }, v[7] || (v[7] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "undo", -1)
            ]), 8, Nm),
            P("button", {
              class: "action button",
              onClick: v[2] || (v[2] = (R) => r("redo")),
              title: "Redo",
              disabled: e.canRedo == false
            }, v[8] || (v[8] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "redo", -1)
            ]), 8, Om),
            P("button", {
              class: "action button",
              onClick: v[3] || (v[3] = (R) => r("resetEntities")),
              title: "Restart level"
            }, v[9] || (v[9] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "fast_rewind", -1)
            ])),
            i.isPlaying == true ? (W(), K("button", {
              key: 0,
              onClick: v[4] || (v[4] = (R) => r("pause")),
              class: "action button",
              title: "Pause level"
            }, v[10] || (v[10] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "pause", -1)
            ]))) : (W(), K("button", {
              key: 1,
              class: "action button",
              onClick: v[5] || (v[5] = (R) => r("play")),
              title: "Play level"
            }, v[11] || (v[11] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "play_arrow", -1)
            ])))
          ])
        ]),
        Ji(P("div", {
          ref_key: "content",
          ref: o,
          class: "content"
        }, [
          P("ul", null, [
            Ct(Xn, {
              name: "list"
            }, {
              default: te(() => [
                (W(true), K(re, null, pe(e.entities, (R) => (W(), K("li", {
                  key: R.id
                }, [
                  P("div", {
                    class: Ot([
                      "entity-title",
                      {
                        selected: R.isSelected
                      }
                    ]),
                    draggable: "true",
                    onClick: (x) => l(x, R),
                    onContextmenu: ur((x) => _(x, R), [
                      "prevent"
                    ]),
                    onDragstart: (x) => w(x, R),
                    onDragover: ur((x) => void 0, [
                      "prevent"
                    ]),
                    onDragend: (x) => f(x, R),
                    onDrop: (x) => S(x, R)
                  }, [
                    P("span", {
                      onDblclick: (x) => r("selectParentEntity", x, R),
                      class: Ot([
                        {
                          hidden: R.rigidBodyDesc.userData.parentId == null
                        },
                        "link material-symbols-rounded"
                      ]),
                      title: "Double click to select parent"
                    }, " link ", 42, Gm),
                    P("input", {
                      type: "text",
                      readonly: "",
                      id: R.id,
                      value: R.name || R.type,
                      onChange: (x) => r("renameEntity", x, R),
                      onKeyup: $n(u, [
                        "enter"
                      ]),
                      onFocusout: u,
                      onDblclick: h
                    }, null, 40, Wm),
                    P("span", {
                      onClick: (x) => T(x, R),
                      class: Ot([
                        "toggle material-symbols-rounded",
                        {
                          isExpanded: R.isExpanded
                        }
                      ])
                    }, " keyboard_arrow_down ", 10, Vm)
                  ], 42, Hm),
                  Ct(Me, {
                    name: "properties"
                  }, {
                    default: te(() => [
                      R.isExpanded ? (W(), K("div", {
                        key: 0,
                        class: Ot([
                          "entity-properties",
                          {
                            expanded: R.isExpanded
                          }
                        ])
                      }, [
                        P("div", Um, [
                          v[12] || (v[12] = P("span", {
                            class: "material-symbols-rounded"
                          }, "location_on", -1)),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.translation.x,
                            onChange: (x) => j(x, R, "rigidBodyDesc.translation.x")
                          }, null, 40, Jm),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.translation.y,
                            onChange: (x) => j(x, R, "rigidBodyDesc.translation.y")
                          }, null, 40, qm),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.translation.z,
                            onChange: (x) => j(x, R, "rigidBodyDesc.translation.z")
                          }, null, 40, Km)
                        ]),
                        P("div", $m, [
                          v[13] || (v[13] = P("span", {
                            class: "material-symbols-rounded"
                          }, "orbit", -1)),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.rotation.x,
                            onChange: (x) => j(x, R, "rigidBodyDesc.rotation.x")
                          }, null, 40, Xm),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.rotation.y,
                            onChange: (x) => j(x, R, "rigidBodyDesc.rotation.y")
                          }, null, 40, Ym),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.rotation.z,
                            onChange: (x) => j(x, R, "rigidBodyDesc.rotation.z")
                          }, null, 40, Qm)
                        ]),
                        P("div", Zm, [
                          v[14] || (v[14] = P("span", {
                            class: "material-symbols-rounded"
                          }, "package_2", -1)),
                          P("input", {
                            type: "text",
                            value: R.objectDesc.scale.x,
                            onChange: (x) => j(x, R, "objectDesc.scale.x")
                          }, null, 40, tf),
                          P("input", {
                            type: "text",
                            value: R.objectDesc.scale.y,
                            onChange: (x) => j(x, R, "objectDesc.scale.y")
                          }, null, 40, ef),
                          P("input", {
                            type: "text",
                            value: R.objectDesc.scale.z,
                            onChange: (x) => j(x, R, "objectDesc.scale.z")
                          }, null, 40, rf)
                        ]),
                        P("div", nf, [
                          v[16] || (v[16] = P("span", {
                            class: "material-symbols-rounded"
                          }, "bolt", -1)),
                          P("select", {
                            onChange: (x) => j(x, R, "collidersDesc[0].events[0].name")
                          }, [
                            v[15] || (v[15] = P("option", null, "None", -1)),
                            (W(true), K(re, null, pe(Object.getOwnPropertyNames(R).filter((x) => typeof R[x] == "function"), (x) => (W(), K("option", null, ee(x), 1))), 256))
                          ], 40, sf)
                        ]),
                        P("div", af, [
                          v[17] || (v[17] = P("span", {
                            class: "material-symbols-rounded hidden"
                          }, "format_size", -1)),
                          P("input", {
                            type: "text",
                            value: "{x:0,y:0,z:0}",
                            onChange: (x) => j(x, R),
                            placeholder: "{x:0,y:0,z:0}"
                          }, null, 40, of)
                        ])
                      ], 2)) : Vt("", true)
                    ]),
                    _: 2
                  }, 1024)
                ]))), 128))
              ]),
              _: 1
            }),
            e.entities.length == 0 ? (W(), K("li", {
              key: 0,
              onClick: v[6] || (v[6] = (R) => {
                r("setMode", {
                  type: "add"
                });
              })
            }, v[18] || (v[18] = [
              P("div", {
                class: "entity-title"
              }, [
                P("span", {
                  class: "material-symbols-rounded"
                }, "add"),
                P("span", null, "Add entity")
              ], -1)
            ]))) : Vt("", true)
          ])
        ], 512), [
          [
            qi,
            c()
          ]
        ])
      ]));
    }
  }, lf = qt(cf, [
    [
      "__scopeId",
      "data-v-68bde30e"
    ]
  ]), _f = [
    "onClick",
    "disabled"
  ], df = {
    key: 0,
    class: "material-symbols-rounded"
  }, Bi = 150, hf = {
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
      const t = i, e = Q({
        animationDuration: `${Bi}ms`,
        left: "0px",
        top: "0px"
      }), r = Q(false), n = Q(false), o = Q();
      function c(u, w) {
        w.callback && w.callback(u), _();
      }
      function l(u) {
        r.value == false ? (r.value = true, h(u)) : setTimeout(() => l(u), Bi);
      }
      function _(u) {
        n.value == false && (r.value = false);
      }
      async function h(u) {
        await Wi();
        const w = window.innerWidth, b = window.innerHeight, f = o.value.offsetWidth, S = o.value.offsetHeight;
        let T = u.clientX, j = u.clientY;
        T + f > w && (T = w - f), j + S > b && (j = b - S), e.value.left = T + "px", e.value.top = j + "px";
      }
      return Gi(() => t.event, () => {
        l(t.event);
      }), Ht(function() {
        document.addEventListener("pointerup", _);
      }), Rr(function() {
        document.removeEventListener("pointerup", _);
      }), (u, w) => (W(), Cr(Me, {
        name: "fade",
        onBeforeEnter: w[0] || (w[0] = (b) => n.value = true),
        onAfterEnter: w[1] || (w[1] = (b) => n.value = false)
      }, {
        default: te(() => [
          r.value ? (W(), K("ul", {
            key: 0,
            ref_key: "menu",
            ref: o,
            style: Yn(e.value)
          }, [
            (W(true), K(re, null, pe(t.actions, (b) => (W(), K("li", null, [
              P("button", {
                onClick: ur((f) => c(f, b), [
                  "prevent"
                ]),
                disabled: b.disabled
              }, [
                b.icon ? (W(), K("span", df, ee(b.icon), 1)) : Vt("", true),
                Qn(" " + ee(b.text), 1)
              ], 8, _f)
            ]))), 256))
          ], 4)) : Vt("", true)
        ]),
        _: 1
      }));
    }
  }, wf = qt(hf, [
    [
      "__scopeId",
      "data-v-7804f6c1"
    ]
  ]), Ni = {
    bounce({ pair: i, target: t, value: e = 30 }) {
      const r = new Wt().copy(t.rigidBody.rotation()), o = new xr().setFromQuaternion(r).z;
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
  }, uf = {
    class: "panels"
  }, pf = {
    __name: "PageLevelEditor",
    props: {
      game: Object
    },
    setup(i) {
      const t = i, e = Q({
        type: "select"
      }), r = Q([]), n = Q({}), o = [], c = wr(new xm()), l = wr(t.game.interval), _ = dt(() => c.canUndo()), h = dt(() => c.canRedo()), u = dt(() => l.threadRunning), w = Q({}), b = Q([]), f = new os(In.create(), t.game.graphics.canvas);
      f.zoomToCursor = true, f.zoomSpeed = 3, f.minDistance = 1, f.maxDistance = 100, f.mouseButtons = {
        LEFT: 2,
        MIDDLE: 2,
        RIGHT: 0
      }, Gt(false);
      function S(E) {
        e.value = E;
      }
      function T(E, D, A) {
        const m = A.replace(/\[/g, ".").replace(/]/g, "").split("."), y = m[m.length - 1], C = m.reduce((X, N) => typeof X[N] == "object" ? X[N] : X, D), z = C[y], V = E.target.value;
        c.add(function() {
          C[y] = V, D.reset();
        }, function() {
          C[y] = z, D.reset();
        }).execute();
      }
      function j(E, D) {
        const A = {
          x: Math.round(t.game.graphics.camera.position.x),
          y: Math.round(t.game.graphics.camera.position.y),
          z: 0
        }, m = Li.create({
          ...D,
          position: A
        }), y = o[o.length - 1], C = y ? r.value.indexOf(y) + 1 : 0;
        m.addEventListener("added", function(z) {
          t.game.graphics.scene.add(m.object);
        }), Object.assign(m, Ni), c.add(function() {
          t.game.physics.add(m), r.value.splice(C, 0, m), x(E, m), mt();
        }, function() {
          t.game.physics.remove(m), r.value.splice(C, 1), Z(E, m), mt();
        }).execute();
      }
      function I(E, D) {
        const A = o.map((m) => ({
          children: t.game.physics.getChildren(m),
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            t.game.physics.remove(y.entity), r.value.splice(y.index, 1), Z(E, y.entity, m), mt();
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.children.forEach((C) => C.setParentId(y.entity.id)), t.game.physics.add(y.entity), r.value.splice(y.index, 0, y.entity), mt();
          }
        }).execute();
      }
      function v(E, D) {
        if (D.isSelected) return;
        const A = o.map((m) => ({
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        c.add(function() {
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(A[y].index, 1);
          const m = r.value.indexOf(D) + 1;
          for (let y = 0; y < A.length; y++) r.value.splice(m + y, 0, A[y].entity);
        }, function() {
          const m = r.value.indexOf(D) + 1;
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(m + y, 1);
          for (let y = 0; y < A.length; y++) r.value.splice(A[y].index, 0, A[y].entity);
        }).execute();
      }
      function R(E, D) {
        const A = D.name || D.type, m = E.target.value;
        c.add(function() {
          D.name = m;
        }, function() {
          D.name = A;
        }).execute();
      }
      function x(E, D) {
        let A = r.value.indexOf(n.value), m = r.value.indexOf(D), y = m, C = m;
        if (E.shiftKey == true ? (C = Math.max(m, A), y = Math.max(0, Math.min(Math.min(m, A), C))) : n.value = D, E.ctrlKey == true) {
          if (D.isSelected) {
            Z(E, D);
            return;
          }
        } else kt(E);
        for (let z = y; z <= C; z++) r.value[z].isSelected = true, o.push(r.value[z]);
      }
      function bt(E, D) {
        const A = D.getParentId(), m = t.game.physics.getEntityById(A);
        m && x(E, m);
      }
      function ut(E) {
        let D = r.value[0], A = r.value[r.value.length - 1];
        n.value = D, x({
          shiftKey: true
        }, A);
      }
      function Z(E, D, A) {
        A == null && (A = o.indexOf(D)), D.isSelected = false, o.splice(A, 1);
      }
      function kt(E, D) {
        for (let A = o.length - 1; A >= 0; A--) Z(E, o[A], A);
      }
      function St(E) {
        r.value.forEach((D) => {
          D.reset();
        }), t.game.graphics.render();
      }
      function Et(E, D) {
        const A = o.map((m) => ({
          index: r.value.indexOf(m),
          parentId: m.getParentId(),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            y.entity.id != D.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(D.id), t.game.physics.createParentJoint(y.entity), mt());
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.entity.id != D.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), mt());
          }
        }).execute();
      }
      function Dt(E, D) {
        const A = o.map((m) => ({
          entity: m,
          parentId: m.getParentId()
        }));
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(null), mt();
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), mt();
          }
        }).execute();
      }
      function Pt(E) {
        E.repeat || (E.code == "KeyA" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), ut()) : E.code == "KeyD" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), kt(E)) : E.code == "KeyX" && (E.ctrlKey || E.metaKey) ? I(E) : E.code == "KeyZ" && (E.ctrlKey || E.metaKey) && (E.shiftKey == true ? Ce() : Mt()));
      }
      function Mt() {
        c.undo();
      }
      function Ce() {
        c.redo();
      }
      function se(E) {
        t.game.physics.clear();
        const D = t.game.assets.get(E), A = [];
        return D && D.children.forEach(function(m) {
          const y = Li.create({
            ccd: true,
            friction: D.friction || 0,
            softCcdPrediction: 0.5,
            ...m
          });
          y.addEventListener("added", function(C) {
            t.game.graphics.scene.add(y.object);
          }), Object.assign(y, Ni), y.type == "player" && (t.game.player = y, t.game.graphics.setCamera(y.camera)), t.game.physics.add(y), A.push(y);
        }), A;
      }
      function ae(E, D) {
        if (D.isSelected) {
          let A = [], m = {
            text: "Link",
            icon: "link",
            disabled: o.length <= 1,
            callback: () => Et(E, D)
          }, y = {
            text: "Unlink",
            icon: "link_off",
            disabled: Kt() == false,
            callback: () => Dt()
          }, C = {
            text: "Delete",
            icon: "delete",
            callback: () => I(E)
          };
          A.push(m, y, C), w.value = E, b.value = A;
        } else x(E, D), ae(E, D);
      }
      function Kt() {
        for (let E = o.length - 1; E >= 0; E--) if (o[E].getParentId()) return true;
        return false;
      }
      function oe() {
        l.stop(), t.game.graphics.setCamera(f.object), t.game.graphics.render(), Gt(true);
      }
      function Ye() {
        l.start(), t.game.graphics.setCamera(t.game.player.camera), Gt(false);
      }
      function mt() {
        l.threadRunning == false && (t.game.physics.debugger.update(), t.game.graphics.render());
      }
      function ce() {
      }
      function $t() {
        t.game.interval.threadRunning == false && t.game.graphics.render();
      }
      function Gt(E = true) {
        f.enablePan = E, f.enableRotate = E, f.enableZoom = E;
      }
      return Ht(async function() {
        t.game.physics.debugger.enable(), r.value = se("boxel-3d-sandbox"), document.addEventListener("keydown", Pt), f.addEventListener("start", ce), f.addEventListener("change", $t), f.object.rotation.set(0, 0, 0), f.target.copy(t.game.player.getPosition()), t.game.player.camera.getWorldPosition(f.object.position);
      }), Rr(function() {
        document.removeEventListener("keydown", Pt), f.removeEventListener("start", ce), f.removeEventListener("change", $t);
      }), (E, D) => (W(), K("div", uf, [
        Ct(Am, {
          game: i.game,
          mode: e.value,
          onSetMode: S
        }, null, 8, [
          "game",
          "mode"
        ]),
        Ct(Dm, {
          game: i.game,
          mode: e.value,
          onAddEntity: j
        }, null, 8, [
          "game",
          "mode"
        ]),
        Ct(lf, {
          entities: r.value,
          canUndo: _.value,
          canRedo: h.value,
          isPlaying: u.value,
          onAddEntity: j,
          onDeleteEntity: I,
          onEditEntity: T,
          onLinkEntity: Et,
          onMoveEntity: v,
          onPause: oe,
          onPlay: Ye,
          onRenameEntity: R,
          onResetEntities: St,
          onSelectEntity: x,
          onSelectParentEntity: bt,
          onSetMode: S,
          onUnlinkEntity: Dt,
          onOpenContextMenu: ae,
          onRedo: Ce,
          onUndo: Mt
        }, null, 8, [
          "entities",
          "canUndo",
          "canRedo",
          "isPlaying"
        ]),
        Ct(wf, {
          event: w.value,
          actions: b.value
        }, null, 8, [
          "event",
          "actions"
        ])
      ]));
    }
  }, gf = qt(pf, [
    [
      "__scopeId",
      "data-v-1d86fb92"
    ]
  ]), bf = [
    {
      name: "home",
      path: "/",
      component: nm
    },
    {
      name: "play",
      path: "/play",
      component: sm
    },
    {
      name: "level-editor",
      path: "/level-editor",
      component: gf
    }
  ], mf = _a({
    history: Ns(),
    routes: bf
  }), zn = Zn(im);
  zn.use(mf);
  zn.mount("#app");
})();
