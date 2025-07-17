(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const r of s) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: true, subtree: true });
  function t(s) {
    const r = {};
    return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function i(s) {
    if (s.ep) return;
    s.ep = true;
    const r = t(s);
    fetch(s.href, r);
  }
})();
/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function eu(n) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const t of n.split(",")) e[t] = 1;
  return (t) => t in e;
}
const ft = {}, Ds = [], Hn = () => {
}, og = () => false, Ma = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && (n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), tu = (n) => n.startsWith("onUpdate:"), wt = Object.assign, nu = (n, e) => {
  const t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}, ag = Object.prototype.hasOwnProperty, rt = (n, e) => ag.call(n, e), ze = Array.isArray, Ns = (n) => Sa(n) === "[object Map]", Td = (n) => Sa(n) === "[object Set]", We = (n) => typeof n == "function", yt = (n) => typeof n == "string", fi = (n) => typeof n == "symbol", gt = (n) => n !== null && typeof n == "object", Ed = (n) => (gt(n) || We(n)) && We(n.then) && We(n.catch), Ad = Object.prototype.toString, Sa = (n) => Ad.call(n), lg = (n) => Sa(n).slice(8, -1), wd = (n) => Sa(n) === "[object Object]", iu = (n) => yt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Sr = /* @__PURE__ */ eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ba = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = n(t));
}, cg = /-(\w)/g, yn = ba((n) => n.replace(cg, (e, t) => t ? t.toUpperCase() : "")), ug = /\B([A-Z])/g, Ui = ba((n) => n.replace(ug, "-$1").toLowerCase()), Ta = ba((n) => n.charAt(0).toUpperCase() + n.slice(1)), Va = ba((n) => n ? `on${Ta(n)}` : ""), Pi = (n, e) => !Object.is(n, e), jo = (n, ...e) => {
  for (let t = 0; t < n.length; t++) n[t](...e);
}, Rd = (n, e, t, i = false) => {
  Object.defineProperty(n, e, { configurable: true, enumerable: false, writable: i, value: t });
}, Wl = (n) => {
  const e = parseFloat(n);
  return isNaN(e) ? n : e;
}, hg = (n) => {
  const e = yt(n) ? Number(n) : NaN;
  return isNaN(e) ? n : e;
};
let ih;
const Ea = () => ih || (ih = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function su(n) {
  if (ze(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
      const i = n[t], s = yt(i) ? mg(i) : su(i);
      if (s) for (const r in s) e[r] = s[r];
    }
    return e;
  } else if (yt(n) || gt(n)) return n;
}
const fg = /;(?![^(]*\))/g, dg = /:([^]+)/, pg = /\/\*[^]*?\*\//g;
function mg(n) {
  const e = {};
  return n.replace(pg, "").split(fg).forEach((t) => {
    if (t) {
      const i = t.split(dg);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function ru(n) {
  let e = "";
  if (yt(n)) e = n;
  else if (ze(n)) for (let t = 0; t < n.length; t++) {
    const i = ru(n[t]);
    i && (e += i + " ");
  }
  else if (gt(n)) for (const t in n) n[t] && (e += t + " ");
  return e.trim();
}
const gg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _g = /* @__PURE__ */ eu(gg);
function Cd(n) {
  return !!n || n === "";
}
const Pd = (n) => !!(n && n.__v_isRef === true), xg = (n) => yt(n) ? n : n == null ? "" : ze(n) || gt(n) && (n.toString === Ad || !We(n.toString)) ? Pd(n) ? xg(n.value) : JSON.stringify(n, Ld, 2) : String(n), Ld = (n, e) => Pd(e) ? Ld(n, e.value) : Ns(e) ? { [`Map(${e.size})`]: [...e.entries()].reduce((t, [i, s], r) => (t[ka(i, r) + " =>"] = s, t), {}) } : Td(e) ? { [`Set(${e.size})`]: [...e.values()].map((t) => ka(t)) } : fi(e) ? ka(e) : gt(e) && !ze(e) && !wd(e) ? String(e) : e, ka = (n, e = "") => {
  var t;
  return fi(n) ? `Symbol(${(t = n.description) != null ? t : e})` : n;
};
/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $t;
class Id {
  constructor(e = false) {
    this.detached = e, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = $t, !e && $t && (this.index = ($t.scopes || ($t.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let e, t;
      if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let e, t;
      if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const t = $t;
      try {
        return $t = this, e();
      } finally {
        $t = t;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = $t, $t = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && ($t = this.prevScope, this.prevScope = void 0);
  }
  stop(e) {
    if (this._active) {
      this._active = false;
      let t, i;
      for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].stop();
      for (this.effects.length = 0, t = 0, i = this.cleanups.length; t < i; t++) this.cleanups[t]();
      if (this.cleanups.length = 0, this.scopes) {
        for (t = 0, i = this.scopes.length; t < i; t++) this.scopes[t].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function rA(n) {
  return new Id(n);
}
function vg() {
  return $t;
}
let pt;
const Ga = /* @__PURE__ */ new WeakSet();
class Dd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $t && $t.active && $t.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ga.has(this) && (Ga.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ud(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, sh(this), Od(this);
    const e = pt, t = Cn;
    pt = this, Cn = true;
    try {
      return this.fn();
    } finally {
      Fd(this), pt = e, Cn = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) lu(e);
      this.deps = this.depsTail = void 0, sh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ga.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Xl(this) && this.run();
  }
  get dirty() {
    return Xl(this);
  }
}
let Nd = 0, br, Tr;
function Ud(n, e = false) {
  if (n.flags |= 8, e) {
    n.next = Tr, Tr = n;
    return;
  }
  n.next = br, br = n;
}
function ou() {
  Nd++;
}
function au() {
  if (--Nd > 0) return;
  if (Tr) {
    let e = Tr;
    for (Tr = void 0; e; ) {
      const t = e.next;
      e.next = void 0, e.flags &= -9, e = t;
    }
  }
  let n;
  for (; br; ) {
    let e = br;
    for (br = void 0; e; ) {
      const t = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1) try {
        e.trigger();
      } catch (i) {
        n || (n = i);
      }
      e = t;
    }
  }
  if (n) throw n;
}
function Od(n) {
  for (let e = n.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Fd(n) {
  let e, t = n.depsTail, i = t;
  for (; i; ) {
    const s = i.prevDep;
    i.version === -1 ? (i === t && (t = s), lu(i), yg(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = s;
  }
  n.deps = e, n.depsTail = t;
}
function Xl(n) {
  for (let e = n.deps; e; e = e.nextDep) if (e.dep.version !== e.version || e.dep.computed && (Bd(e.dep.computed) || e.dep.version !== e.version)) return true;
  return !!n._dirty;
}
function Bd(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === Dr) || (n.globalVersion = Dr, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !Xl(n)))) return;
  n.flags |= 2;
  const e = n.dep, t = pt, i = Cn;
  pt = n, Cn = true;
  try {
    Od(n);
    const s = n.fn(n._value);
    (e.version === 0 || Pi(s, n._value)) && (n.flags |= 128, n._value = s, e.version++);
  } catch (s) {
    throw e.version++, s;
  } finally {
    pt = t, Cn = i, Fd(n), n.flags &= -3;
  }
}
function lu(n, e = false) {
  const { dep: t, prevSub: i, nextSub: s } = n;
  if (i && (i.nextSub = s, n.prevSub = void 0), s && (s.prevSub = i, n.nextSub = void 0), t.subs === n && (t.subs = i, !i && t.computed)) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep) lu(r, true);
  }
  !e && !--t.sc && t.map && t.map.delete(t.key);
}
function yg(n) {
  const { prevDep: e, nextDep: t } = n;
  e && (e.nextDep = t, n.prevDep = void 0), t && (t.prevDep = e, n.nextDep = void 0);
}
let Cn = true;
const zd = [];
function ci() {
  zd.push(Cn), Cn = false;
}
function ui() {
  const n = zd.pop();
  Cn = n === void 0 ? true : n;
}
function sh(n) {
  const { cleanup: e } = n;
  if (n.cleanup = void 0, e) {
    const t = pt;
    pt = void 0;
    try {
      e();
    } finally {
      pt = t;
    }
  }
}
let Dr = 0;
class Mg {
  constructor(e, t) {
    this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class cu {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(e) {
    if (!pt || !Cn || pt === this.computed) return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== pt) t = this.activeLink = new Mg(pt, this), pt.deps ? (t.prevDep = pt.depsTail, pt.depsTail.nextDep = t, pt.depsTail = t) : pt.deps = pt.depsTail = t, Hd(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const i = t.nextDep;
      i.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = i), t.prevDep = pt.depsTail, t.nextDep = void 0, pt.depsTail.nextDep = t, pt.depsTail = t, pt.deps === t && (pt.deps = i);
    }
    return t;
  }
  trigger(e) {
    this.version++, Dr++, this.notify(e);
  }
  notify(e) {
    ou();
    try {
      for (let t = this.subs; t; t = t.prevSub) t.sub.notify() && t.sub.dep.notify();
    } finally {
      au();
    }
  }
}
function Hd(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const e = n.dep.computed;
    if (e && !n.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep) Hd(i);
    }
    const t = n.dep.subs;
    t !== n && (n.prevSub = t, t && (t.nextSub = n)), n.dep.subs = n;
  }
}
const Yl = /* @__PURE__ */ new WeakMap(), rs = Symbol(""), ql = Symbol(""), Nr = Symbol("");
function Ht(n, e, t) {
  if (Cn && pt) {
    let i = Yl.get(n);
    i || Yl.set(n, i = /* @__PURE__ */ new Map());
    let s = i.get(t);
    s || (i.set(t, s = new cu()), s.map = i, s.key = t), s.track();
  }
}
function ii(n, e, t, i, s, r) {
  const o = Yl.get(n);
  if (!o) {
    Dr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (ou(), e === "clear") o.forEach(a);
  else {
    const l = ze(n), c = l && iu(t);
    if (l && t === "length") {
      const u = Number(i);
      o.forEach((h, f) => {
        (f === "length" || f === Nr || !fi(f) && f >= u) && a(h);
      });
    } else switch ((t !== void 0 || o.has(void 0)) && a(o.get(t)), c && a(o.get(Nr)), e) {
      case "add":
        l ? c && a(o.get("length")) : (a(o.get(rs)), Ns(n) && a(o.get(ql)));
        break;
      case "delete":
        l || (a(o.get(rs)), Ns(n) && a(o.get(ql)));
        break;
      case "set":
        Ns(n) && a(o.get(rs));
        break;
    }
  }
  au();
}
function hs(n) {
  const e = nt(n);
  return e === n ? e : (Ht(e, "iterate", Nr), gn(n) ? e : e.map(Nt));
}
function Aa(n) {
  return Ht(n = nt(n), "iterate", Nr), n;
}
const Sg = { __proto__: null, [Symbol.iterator]() {
  return Wa(this, Symbol.iterator, Nt);
}, concat(...n) {
  return hs(this).concat(...n.map((e) => ze(e) ? hs(e) : e));
}, entries() {
  return Wa(this, "entries", (n) => (n[1] = Nt(n[1]), n));
}, every(n, e) {
  return qn(this, "every", n, e, void 0, arguments);
}, filter(n, e) {
  return qn(this, "filter", n, e, (t) => t.map(Nt), arguments);
}, find(n, e) {
  return qn(this, "find", n, e, Nt, arguments);
}, findIndex(n, e) {
  return qn(this, "findIndex", n, e, void 0, arguments);
}, findLast(n, e) {
  return qn(this, "findLast", n, e, Nt, arguments);
}, findLastIndex(n, e) {
  return qn(this, "findLastIndex", n, e, void 0, arguments);
}, forEach(n, e) {
  return qn(this, "forEach", n, e, void 0, arguments);
}, includes(...n) {
  return Xa(this, "includes", n);
}, indexOf(...n) {
  return Xa(this, "indexOf", n);
}, join(n) {
  return hs(this).join(n);
}, lastIndexOf(...n) {
  return Xa(this, "lastIndexOf", n);
}, map(n, e) {
  return qn(this, "map", n, e, void 0, arguments);
}, pop() {
  return or(this, "pop");
}, push(...n) {
  return or(this, "push", n);
}, reduce(n, ...e) {
  return rh(this, "reduce", n, e);
}, reduceRight(n, ...e) {
  return rh(this, "reduceRight", n, e);
}, shift() {
  return or(this, "shift");
}, some(n, e) {
  return qn(this, "some", n, e, void 0, arguments);
}, splice(...n) {
  return or(this, "splice", n);
}, toReversed() {
  return hs(this).toReversed();
}, toSorted(n) {
  return hs(this).toSorted(n);
}, toSpliced(...n) {
  return hs(this).toSpliced(...n);
}, unshift(...n) {
  return or(this, "unshift", n);
}, values() {
  return Wa(this, "values", Nt);
} };
function Wa(n, e, t) {
  const i = Aa(n), s = i[e]();
  return i !== n && !gn(n) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = t(r.value)), r;
  }), s;
}
const bg = Array.prototype;
function qn(n, e, t, i, s, r) {
  const o = Aa(n), a = o !== n && !gn(n), l = o[e];
  if (l !== bg[e]) {
    const h = l.apply(n, r);
    return a ? Nt(h) : h;
  }
  let c = t;
  o !== n && (a ? c = function(h, f) {
    return t.call(this, Nt(h), f, n);
  } : t.length > 2 && (c = function(h, f) {
    return t.call(this, h, f, n);
  }));
  const u = l.call(o, c, i);
  return a && s ? s(u) : u;
}
function rh(n, e, t, i) {
  const s = Aa(n);
  let r = t;
  return s !== n && (gn(n) ? t.length > 3 && (r = function(o, a, l) {
    return t.call(this, o, a, l, n);
  }) : r = function(o, a, l) {
    return t.call(this, o, Nt(a), l, n);
  }), s[e](r, ...i);
}
function Xa(n, e, t) {
  const i = nt(n);
  Ht(i, "iterate", Nr);
  const s = i[e](...t);
  return (s === -1 || s === false) && du(t[0]) ? (t[0] = nt(t[0]), i[e](...t)) : s;
}
function or(n, e, t = []) {
  ci(), ou();
  const i = nt(n)[e].apply(n, t);
  return au(), ui(), i;
}
const Tg = /* @__PURE__ */ eu("__proto__,__v_isRef,__isVue"), Vd = new Set(Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(fi));
function Eg(n) {
  fi(n) || (n = String(n));
  const e = nt(this);
  return Ht(e, "has", n), e.hasOwnProperty(n);
}
class kd {
  constructor(e = false, t = false) {
    this._isReadonly = e, this._isShallow = t;
  }
  get(e, t, i) {
    if (t === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (t === "__v_isReactive") return !s;
    if (t === "__v_isReadonly") return s;
    if (t === "__v_isShallow") return r;
    if (t === "__v_raw") return i === (s ? r ? Ug : Yd : r ? Xd : Wd).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = ze(e);
    if (!s) {
      let l;
      if (o && (l = Sg[t])) return l;
      if (t === "hasOwnProperty") return Eg;
    }
    const a = Reflect.get(e, t, Gt(e) ? e : i);
    return (fi(t) ? Vd.has(t) : Tg(t)) || (s || Ht(e, "get", t), r) ? a : Gt(a) ? o && iu(t) ? a : a.value : gt(a) ? s ? qd(a) : hu(a) : a;
  }
}
class Gd extends kd {
  constructor(e = false) {
    super(false, e);
  }
  set(e, t, i, s) {
    let r = e[t];
    if (!this._isShallow) {
      const l = Ii(r);
      if (!gn(i) && !Ii(i) && (r = nt(r), i = nt(i)), !ze(e) && Gt(r) && !Gt(i)) return l ? false : (r.value = i, true);
    }
    const o = ze(e) && iu(t) ? Number(t) < e.length : rt(e, t), a = Reflect.set(e, t, i, Gt(e) ? e : s);
    return e === nt(s) && (o ? Pi(i, r) && ii(e, "set", t, i) : ii(e, "add", t, i)), a;
  }
  deleteProperty(e, t) {
    const i = rt(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && i && ii(e, "delete", t, void 0), s;
  }
  has(e, t) {
    const i = Reflect.has(e, t);
    return (!fi(t) || !Vd.has(t)) && Ht(e, "has", t), i;
  }
  ownKeys(e) {
    return Ht(e, "iterate", ze(e) ? "length" : rs), Reflect.ownKeys(e);
  }
}
class Ag extends kd {
  constructor(e = false) {
    super(true, e);
  }
  set(e, t) {
    return true;
  }
  deleteProperty(e, t) {
    return true;
  }
}
const wg = new Gd(), Rg = new Ag(), Cg = new Gd(true);
const jl = (n) => n, ro = (n) => Reflect.getPrototypeOf(n);
function Pg(n, e, t) {
  return function(...i) {
    const s = this.__v_raw, r = nt(s), o = Ns(r), a = n === "entries" || n === Symbol.iterator && o, l = n === "keys" && o, c = s[n](...i), u = t ? jl : e ? oa : Nt;
    return !e && Ht(r, "iterate", l ? ql : rs), { next() {
      const { value: h, done: f } = c.next();
      return f ? { value: h, done: f } : { value: a ? [u(h[0]), u(h[1])] : u(h), done: f };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function oo(n) {
  return function(...e) {
    return n === "delete" ? false : n === "clear" ? void 0 : this;
  };
}
function Lg(n, e) {
  const t = { get(s) {
    const r = this.__v_raw, o = nt(r), a = nt(s);
    n || (Pi(s, a) && Ht(o, "get", s), Ht(o, "get", a));
    const { has: l } = ro(o), c = e ? jl : n ? oa : Nt;
    if (l.call(o, s)) return c(r.get(s));
    if (l.call(o, a)) return c(r.get(a));
    r !== o && r.get(s);
  }, get size() {
    const s = this.__v_raw;
    return !n && Ht(nt(s), "iterate", rs), Reflect.get(s, "size", s);
  }, has(s) {
    const r = this.__v_raw, o = nt(r), a = nt(s);
    return n || (Pi(s, a) && Ht(o, "has", s), Ht(o, "has", a)), s === a ? r.has(s) : r.has(s) || r.has(a);
  }, forEach(s, r) {
    const o = this, a = o.__v_raw, l = nt(a), c = e ? jl : n ? oa : Nt;
    return !n && Ht(l, "iterate", rs), a.forEach((u, h) => s.call(r, c(u), c(h), o));
  } };
  return wt(t, n ? { add: oo("add"), set: oo("set"), delete: oo("delete"), clear: oo("clear") } : { add(s) {
    !e && !gn(s) && !Ii(s) && (s = nt(s));
    const r = nt(this);
    return ro(r).has.call(r, s) || (r.add(s), ii(r, "add", s, s)), this;
  }, set(s, r) {
    !e && !gn(r) && !Ii(r) && (r = nt(r));
    const o = nt(this), { has: a, get: l } = ro(o);
    let c = a.call(o, s);
    c || (s = nt(s), c = a.call(o, s));
    const u = l.call(o, s);
    return o.set(s, r), c ? Pi(r, u) && ii(o, "set", s, r) : ii(o, "add", s, r), this;
  }, delete(s) {
    const r = nt(this), { has: o, get: a } = ro(r);
    let l = o.call(r, s);
    l || (s = nt(s), l = o.call(r, s)), a && a.call(r, s);
    const c = r.delete(s);
    return l && ii(r, "delete", s, void 0), c;
  }, clear() {
    const s = nt(this), r = s.size !== 0, o = s.clear();
    return r && ii(s, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = Pg(s, n, e);
  }), t;
}
function uu(n, e) {
  const t = Lg(n, e);
  return (i, s, r) => s === "__v_isReactive" ? !n : s === "__v_isReadonly" ? n : s === "__v_raw" ? i : Reflect.get(rt(t, s) && s in i ? t : i, s, r);
}
const Ig = { get: uu(false, false) }, Dg = { get: uu(false, true) }, Ng = { get: uu(true, false) };
const Wd = /* @__PURE__ */ new WeakMap(), Xd = /* @__PURE__ */ new WeakMap(), Yd = /* @__PURE__ */ new WeakMap(), Ug = /* @__PURE__ */ new WeakMap();
function Og(n) {
  switch (n) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Fg(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : Og(lg(n));
}
function hu(n) {
  return Ii(n) ? n : fu(n, false, wg, Ig, Wd);
}
function Bg(n) {
  return fu(n, false, Cg, Dg, Xd);
}
function qd(n) {
  return fu(n, true, Rg, Ng, Yd);
}
function fu(n, e, t, i, s) {
  if (!gt(n) || n.__v_raw && !(e && n.__v_isReactive)) return n;
  const r = Fg(n);
  if (r === 0) return n;
  const o = s.get(n);
  if (o) return o;
  const a = new Proxy(n, r === 2 ? i : t);
  return s.set(n, a), a;
}
function Us(n) {
  return Ii(n) ? Us(n.__v_raw) : !!(n && n.__v_isReactive);
}
function Ii(n) {
  return !!(n && n.__v_isReadonly);
}
function gn(n) {
  return !!(n && n.__v_isShallow);
}
function du(n) {
  return n ? !!n.__v_raw : false;
}
function nt(n) {
  const e = n && n.__v_raw;
  return e ? nt(e) : n;
}
function zg(n) {
  return !rt(n, "__v_skip") && Object.isExtensible(n) && Rd(n, "__v_skip", true), n;
}
const Nt = (n) => gt(n) ? hu(n) : n, oa = (n) => gt(n) ? qd(n) : n;
function Gt(n) {
  return n ? n.__v_isRef === true : false;
}
function oA(n) {
  return jd(n, false);
}
function aA(n) {
  return jd(n, true);
}
function jd(n, e) {
  return Gt(n) ? n : new Hg(n, e);
}
class Hg {
  constructor(e, t) {
    this.dep = new cu(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t ? e : nt(e), this._value = t ? e : Nt(e), this.__v_isShallow = t;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const t = this._rawValue, i = this.__v_isShallow || gn(e) || Ii(e);
    e = i ? e : nt(e), Pi(e, t) && (this._rawValue = e, this._value = i ? e : Nt(e), this.dep.trigger());
  }
}
function Vg(n) {
  return Gt(n) ? n.value : n;
}
const kg = { get: (n, e, t) => e === "__v_raw" ? n : Vg(Reflect.get(n, e, t)), set: (n, e, t, i) => {
  const s = n[e];
  return Gt(s) && !Gt(t) ? (s.value = t, true) : Reflect.set(n, e, t, i);
} };
function Kd(n) {
  return Us(n) ? n : new Proxy(n, kg);
}
class Gg {
  constructor(e, t, i) {
    this.fn = e, this.setter = t, this._value = void 0, this.dep = new cu(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = i;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && pt !== this) return Ud(this, true), true;
  }
  get value() {
    const e = this.dep.track();
    return Bd(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function Wg(n, e, t = false) {
  let i, s;
  return We(n) ? i = n : (i = n.get, s = n.set), new Gg(i, s, t);
}
const ao = {}, aa = /* @__PURE__ */ new WeakMap();
let Qi;
function Xg(n, e = false, t = Qi) {
  if (t) {
    let i = aa.get(t);
    i || aa.set(t, i = []), i.push(n);
  }
}
function Yg(n, e, t = ft) {
  const { immediate: i, deep: s, once: r, scheduler: o, augmentJob: a, call: l } = t, c = (x) => s ? x : gn(x) || s === false || s === 0 ? si(x, 1) : si(x);
  let u, h, f, d, m = false, _ = false;
  if (Gt(n) ? (h = () => n.value, m = gn(n)) : Us(n) ? (h = () => c(n), m = true) : ze(n) ? (_ = true, m = n.some((x) => Us(x) || gn(x)), h = () => n.map((x) => {
    if (Gt(x)) return x.value;
    if (Us(x)) return c(x);
    if (We(x)) return l ? l(x, 2) : x();
  })) : We(n) ? e ? h = l ? () => l(n, 2) : n : h = () => {
    if (f) {
      ci();
      try {
        f();
      } finally {
        ui();
      }
    }
    const x = Qi;
    Qi = u;
    try {
      return l ? l(n, 3, [d]) : n(d);
    } finally {
      Qi = x;
    }
  } : h = Hn, e && s) {
    const x = h, P = s === true ? 1 / 0 : s;
    h = () => si(x(), P);
  }
  const g = vg(), p = () => {
    u.stop(), g && g.active && nu(g.effects, u);
  };
  if (r && e) {
    const x = e;
    e = (...P) => {
      x(...P), p();
    };
  }
  let E = _ ? new Array(n.length).fill(ao) : ao;
  const b = (x) => {
    if (!(!(u.flags & 1) || !u.dirty && !x)) if (e) {
      const P = u.run();
      if (s || m || (_ ? P.some((w, C) => Pi(w, E[C])) : Pi(P, E))) {
        f && f();
        const w = Qi;
        Qi = u;
        try {
          const C = [P, E === ao ? void 0 : _ && E[0] === ao ? [] : E, d];
          E = P, l ? l(e, 3, C) : e(...C);
        } finally {
          Qi = w;
        }
      }
    } else u.run();
  };
  return a && a(b), u = new Dd(h), u.scheduler = o ? () => o(b, false) : b, d = (x) => Xg(x, false, u), f = u.onStop = () => {
    const x = aa.get(u);
    if (x) {
      if (l) l(x, 4);
      else for (const P of x) P();
      aa.delete(u);
    }
  }, e ? i ? b(true) : E = u.run() : o ? o(b.bind(null, true), true) : u.run(), p.pause = u.pause.bind(u), p.resume = u.resume.bind(u), p.stop = p, p;
}
function si(n, e = 1 / 0, t) {
  if (e <= 0 || !gt(n) || n.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(n))) return n;
  if (t.add(n), e--, Gt(n)) si(n.value, e, t);
  else if (ze(n)) for (let i = 0; i < n.length; i++) si(n[i], e, t);
  else if (Td(n) || Ns(n)) n.forEach((i) => {
    si(i, e, t);
  });
  else if (wd(n)) {
    for (const i in n) si(n[i], e, t);
    for (const i of Object.getOwnPropertySymbols(n)) Object.prototype.propertyIsEnumerable.call(n, i) && si(n[i], e, t);
  }
  return n;
}
/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Jr(n, e, t, i) {
  try {
    return i ? n(...i) : n();
  } catch (s) {
    wa(s, e, t);
  }
}
function Pn(n, e, t, i) {
  if (We(n)) {
    const s = Jr(n, e, t, i);
    return s && Ed(s) && s.catch((r) => {
      wa(r, e, t);
    }), s;
  }
  if (ze(n)) {
    const s = [];
    for (let r = 0; r < n.length; r++) s.push(Pn(n[r], e, t, i));
    return s;
  }
}
function wa(n, e, t, i = true) {
  const s = e ? e.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = e && e.appContext.config || ft;
  if (e) {
    let a = e.parent;
    const l = e.proxy, c = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let h = 0; h < u.length; h++) if (u[h](n, l, c) === false) return;
      }
      a = a.parent;
    }
    if (r) {
      ci(), Jr(r, null, 10, [n, l, c]), ui();
      return;
    }
  }
  qg(n, t, s, i, o);
}
function qg(n, e, t, i = true, s = false) {
  if (s) throw n;
  console.error(n);
}
const Kt = [];
let Un = -1;
const Os = [];
let Ti = null, ws = 0;
const Zd = Promise.resolve();
let la = null;
function jg(n) {
  const e = la || Zd;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function Kg(n) {
  let e = Un + 1, t = Kt.length;
  for (; e < t; ) {
    const i = e + t >>> 1, s = Kt[i], r = Ur(s);
    r < n || r === n && s.flags & 2 ? e = i + 1 : t = i;
  }
  return e;
}
function pu(n) {
  if (!(n.flags & 1)) {
    const e = Ur(n), t = Kt[Kt.length - 1];
    !t || !(n.flags & 2) && e >= Ur(t) ? Kt.push(n) : Kt.splice(Kg(e), 0, n), n.flags |= 1, Jd();
  }
}
function Jd() {
  la || (la = Zd.then($d));
}
function Zg(n) {
  ze(n) ? Os.push(...n) : Ti && n.id === -1 ? Ti.splice(ws + 1, 0, n) : n.flags & 1 || (Os.push(n), n.flags |= 1), Jd();
}
function oh(n, e, t = Un + 1) {
  for (; t < Kt.length; t++) {
    const i = Kt[t];
    if (i && i.flags & 2) {
      if (n && i.id !== n.uid) continue;
      Kt.splice(t, 1), t--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Qd(n) {
  if (Os.length) {
    const e = [...new Set(Os)].sort((t, i) => Ur(t) - Ur(i));
    if (Os.length = 0, Ti) {
      Ti.push(...e);
      return;
    }
    for (Ti = e, ws = 0; ws < Ti.length; ws++) {
      const t = Ti[ws];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Ti = null, ws = 0;
  }
}
const Ur = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function $d(n) {
  try {
    for (Un = 0; Un < Kt.length; Un++) {
      const e = Kt[Un];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Jr(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Un < Kt.length; Un++) {
      const e = Kt[Un];
      e && (e.flags &= -2);
    }
    Un = -1, Kt.length = 0, Qd(), la = null, (Kt.length || Os.length) && $d();
  }
}
let Lt = null, ep = null;
function ca(n) {
  const e = Lt;
  return Lt = n, ep = n && n.type.__scopeId || null, e;
}
function Jg(n, e = Lt, t) {
  if (!e || n._n) return n;
  const i = (...s) => {
    i._d && yh(-1);
    const r = ca(e);
    let o;
    try {
      o = n(...s);
    } finally {
      ca(r), i._d && yh(1);
    }
    return o;
  };
  return i._n = true, i._c = true, i._d = true, i;
}
function lA(n, e) {
  if (Lt === null) return n;
  const t = Ia(Lt), i = n.dirs || (n.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [r, o, a, l = ft] = e[s];
    r && (We(r) && (r = { mounted: r, updated: r }), r.deep && si(o), i.push({ dir: r, instance: t, value: o, oldValue: void 0, arg: a, modifiers: l }));
  }
  return n;
}
function zi(n, e, t, i) {
  const s = n.dirs, r = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[i];
    l && (ci(), Pn(l, t, 8, [n.el, a, n, e]), ui());
  }
}
const tp = Symbol("_vte"), np = (n) => n.__isTeleport, Er = (n) => n && (n.disabled || n.disabled === ""), ah = (n) => n && (n.defer || n.defer === ""), lh = (n) => typeof SVGElement < "u" && n instanceof SVGElement, ch = (n) => typeof MathMLElement == "function" && n instanceof MathMLElement, Kl = (n, e) => {
  const t = n && n.to;
  return yt(t) ? e ? e(t) : null : t;
}, ip = { name: "Teleport", __isTeleport: true, process(n, e, t, i, s, r, o, a, l, c) {
  const { mc: u, pc: h, pbc: f, o: { insert: d, querySelector: m, createText: _, createComment: g } } = c, p = Er(e.props);
  let { shapeFlag: E, children: b, dynamicChildren: x } = e;
  if (n == null) {
    const P = e.el = _(""), w = e.anchor = _("");
    d(P, t, i), d(w, t, i);
    const C = (S, M) => {
      E & 16 && (s && s.isCE && (s.ce._teleportTarget = S), u(b, S, M, s, r, o, a, l));
    }, I = () => {
      const S = e.target = Kl(e.props, m), M = sp(S, e, _, d);
      S && (o !== "svg" && lh(S) ? o = "svg" : o !== "mathml" && ch(S) && (o = "mathml"), p || (C(S, M), Ko(e, false)));
    };
    p && (C(t, w), Ko(e, true)), ah(e.props) ? (e.el.__isMounted = false, jt(() => {
      I(), delete e.el.__isMounted;
    }, r)) : I();
  } else {
    if (ah(e.props) && n.el.__isMounted === false) {
      jt(() => {
        ip.process(n, e, t, i, s, r, o, a, l, c);
      }, r);
      return;
    }
    e.el = n.el, e.targetStart = n.targetStart;
    const P = e.anchor = n.anchor, w = e.target = n.target, C = e.targetAnchor = n.targetAnchor, I = Er(n.props), S = I ? t : w, M = I ? P : C;
    if (o === "svg" || lh(w) ? o = "svg" : (o === "mathml" || ch(w)) && (o = "mathml"), x ? (f(n.dynamicChildren, x, S, s, r, o, a), xu(n, e, true)) : l || h(n, e, S, M, s, r, o, a, false), p) I ? e.props && n.props && e.props.to !== n.props.to && (e.props.to = n.props.to) : lo(e, t, P, c, 1);
    else if ((e.props && e.props.to) !== (n.props && n.props.to)) {
      const L = e.target = Kl(e.props, m);
      L && lo(e, L, null, c, 0);
    } else I && lo(e, w, C, c, 1);
    Ko(e, p);
  }
}, remove(n, e, t, { um: i, o: { remove: s } }, r) {
  const { shapeFlag: o, children: a, anchor: l, targetStart: c, targetAnchor: u, target: h, props: f } = n;
  if (h && (s(c), s(u)), r && s(l), o & 16) {
    const d = r || !Er(f);
    for (let m = 0; m < a.length; m++) {
      const _ = a[m];
      i(_, e, t, d, !!_.dynamicChildren);
    }
  }
}, move: lo, hydrate: Qg };
function lo(n, e, t, { o: { insert: i }, m: s }, r = 2) {
  r === 0 && i(n.targetAnchor, e, t);
  const { el: o, anchor: a, shapeFlag: l, children: c, props: u } = n, h = r === 2;
  if (h && i(o, e, t), (!h || Er(u)) && l & 16) for (let f = 0; f < c.length; f++) s(c[f], e, t, 2);
  h && i(a, e, t);
}
function Qg(n, e, t, i, s, r, { o: { nextSibling: o, parentNode: a, querySelector: l, insert: c, createText: u } }, h) {
  const f = e.target = Kl(e.props, l);
  if (f) {
    const d = Er(e.props), m = f._lpa || f.firstChild;
    if (e.shapeFlag & 16) if (d) e.anchor = h(o(n), e, a(n), t, i, s, r), e.targetStart = m, e.targetAnchor = m && o(m);
    else {
      e.anchor = o(n);
      let _ = m;
      for (; _; ) {
        if (_ && _.nodeType === 8) {
          if (_.data === "teleport start anchor") e.targetStart = _;
          else if (_.data === "teleport anchor") {
            e.targetAnchor = _, f._lpa = e.targetAnchor && o(e.targetAnchor);
            break;
          }
        }
        _ = o(_);
      }
      e.targetAnchor || sp(f, e, u, c), h(m && o(m), e, f, t, i, s, r);
    }
    Ko(e, d);
  }
  return e.anchor && o(e.anchor);
}
const cA = ip;
function Ko(n, e) {
  const t = n.ctx;
  if (t && t.ut) {
    let i, s;
    for (e ? (i = n.el, s = n.anchor) : (i = n.targetStart, s = n.targetAnchor); i && i !== s; ) i.nodeType === 1 && i.setAttribute("data-v-owner", t.uid), i = i.nextSibling;
    t.ut();
  }
}
function sp(n, e, t, i) {
  const s = e.targetStart = t(""), r = e.targetAnchor = t("");
  return s[tp] = r, n && (i(s, n), i(r, n)), r;
}
const Ei = Symbol("_leaveCb"), co = Symbol("_enterCb");
function rp() {
  const n = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return fp(() => {
    n.isMounted = true;
  }), pp(() => {
    n.isUnmounting = true;
  }), n;
}
const fn = [Function, Array], op = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: fn, onEnter: fn, onAfterEnter: fn, onEnterCancelled: fn, onBeforeLeave: fn, onLeave: fn, onAfterLeave: fn, onLeaveCancelled: fn, onBeforeAppear: fn, onAppear: fn, onAfterAppear: fn, onAppearCancelled: fn }, ap = (n) => {
  const e = n.subTree;
  return e.component ? ap(e.component) : e;
}, $g = { name: "BaseTransition", props: op, setup(n, { slots: e }) {
  const t = zp(), i = rp();
  return () => {
    const s = e.default && mu(e.default(), true);
    if (!s || !s.length) return;
    const r = lp(s), o = nt(n), { mode: a } = o;
    if (i.isLeaving) return Ya(r);
    const l = uh(r);
    if (!l) return Ya(r);
    let c = Or(l, o, i, t, (h) => c = h);
    l.type !== Vt && os(l, c);
    let u = t.subTree && uh(t.subTree);
    if (u && u.type !== Vt && !ts(l, u) && ap(t).type !== Vt) {
      let h = Or(u, o, i, t);
      if (os(u, h), a === "out-in" && l.type !== Vt) return i.isLeaving = true, h.afterLeave = () => {
        i.isLeaving = false, t.job.flags & 8 || t.update(), delete h.afterLeave, u = void 0;
      }, Ya(r);
      a === "in-out" && l.type !== Vt ? h.delayLeave = (f, d, m) => {
        const _ = cp(i, u);
        _[String(u.key)] = u, f[Ei] = () => {
          d(), f[Ei] = void 0, delete c.delayedLeave, u = void 0;
        }, c.delayedLeave = () => {
          m(), delete c.delayedLeave, u = void 0;
        };
      } : u = void 0;
    } else u && (u = void 0);
    return r;
  };
} };
function lp(n) {
  let e = n[0];
  if (n.length > 1) {
    for (const t of n) if (t.type !== Vt) {
      e = t;
      break;
    }
  }
  return e;
}
const e_ = $g;
function cp(n, e) {
  const { leavingVNodes: t } = n;
  let i = t.get(e.type);
  return i || (i = /* @__PURE__ */ Object.create(null), t.set(e.type, i)), i;
}
function Or(n, e, t, i, s) {
  const { appear: r, mode: o, persisted: a = false, onBeforeEnter: l, onEnter: c, onAfterEnter: u, onEnterCancelled: h, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: _, onBeforeAppear: g, onAppear: p, onAfterAppear: E, onAppearCancelled: b } = e, x = String(n.key), P = cp(t, n), w = (S, M) => {
    S && Pn(S, i, 9, M);
  }, C = (S, M) => {
    const L = M[1];
    w(S, M), ze(S) ? S.every((O) => O.length <= 1) && L() : S.length <= 1 && L();
  }, I = { mode: o, persisted: a, beforeEnter(S) {
    let M = l;
    if (!t.isMounted) if (r) M = g || l;
    else return;
    S[Ei] && S[Ei](true);
    const L = P[x];
    L && ts(n, L) && L.el[Ei] && L.el[Ei](), w(M, [S]);
  }, enter(S) {
    let M = c, L = u, O = h;
    if (!t.isMounted) if (r) M = p || c, L = E || u, O = b || h;
    else return;
    let X = false;
    const Q = S[co] = (ne) => {
      X || (X = true, ne ? w(O, [S]) : w(L, [S]), I.delayedLeave && I.delayedLeave(), S[co] = void 0);
    };
    M ? C(M, [S, Q]) : Q();
  }, leave(S, M) {
    const L = String(n.key);
    if (S[co] && S[co](true), t.isUnmounting) return M();
    w(f, [S]);
    let O = false;
    const X = S[Ei] = (Q) => {
      O || (O = true, M(), Q ? w(_, [S]) : w(m, [S]), S[Ei] = void 0, P[L] === n && delete P[L]);
    };
    P[L] = n, d ? C(d, [S, X]) : X();
  }, clone(S) {
    const M = Or(S, e, t, i, s);
    return s && s(M), M;
  } };
  return I;
}
function Ya(n) {
  if (Ra(n)) return n = Di(n), n.children = null, n;
}
function uh(n) {
  if (!Ra(n)) return np(n.type) && n.children ? lp(n.children) : n;
  if (n.component) return n.component.subTree;
  const { shapeFlag: e, children: t } = n;
  if (t) {
    if (e & 16) return t[0];
    if (e & 32 && We(t.default)) return t.default();
  }
}
function os(n, e) {
  n.shapeFlag & 6 && n.component ? (n.transition = e, os(n.component.subTree, e)) : n.shapeFlag & 128 ? (n.ssContent.transition = e.clone(n.ssContent), n.ssFallback.transition = e.clone(n.ssFallback)) : n.transition = e;
}
function mu(n, e = false, t) {
  let i = [], s = 0;
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    const a = t == null ? o.key : String(t) + String(o.key != null ? o.key : r);
    o.type === en ? (o.patchFlag & 128 && s++, i = i.concat(mu(o.children, e, a))) : (e || o.type !== Vt) && i.push(a != null ? Di(o, { key: a }) : o);
  }
  if (s > 1) for (let r = 0; r < i.length; r++) i[r].patchFlag = -2;
  return i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function uA(n, e) {
  return We(n) ? wt({ name: n.name }, e, { setup: n }) : n;
}
function up(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function ua(n, e, t, i, s = false) {
  if (ze(n)) {
    n.forEach((m, _) => ua(m, e && (ze(e) ? e[_] : e), t, i, s));
    return;
  }
  if (Fs(i) && !s) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ua(n, e, t, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Ia(i.component) : i.el, o = s ? null : r, { i: a, r: l } = n, c = e && e.r, u = a.refs === ft ? a.refs = {} : a.refs, h = a.setupState, f = nt(h), d = h === ft ? () => false : (m) => rt(f, m);
  if (c != null && c !== l && (yt(c) ? (u[c] = null, d(c) && (h[c] = null)) : Gt(c) && (c.value = null)), We(l)) Jr(l, a, 12, [o, u]);
  else {
    const m = yt(l), _ = Gt(l);
    if (m || _) {
      const g = () => {
        if (n.f) {
          const p = m ? d(l) ? h[l] : u[l] : l.value;
          s ? ze(p) && nu(p, r) : ze(p) ? p.includes(r) || p.push(r) : m ? (u[l] = [r], d(l) && (h[l] = u[l])) : (l.value = [r], n.k && (u[n.k] = l.value));
        } else m ? (u[l] = o, d(l) && (h[l] = o)) : _ && (l.value = o, n.k && (u[n.k] = o));
      };
      o ? (g.id = -1, jt(g, t)) : g();
    }
  }
}
Ea().requestIdleCallback;
Ea().cancelIdleCallback;
const Fs = (n) => !!n.type.__asyncLoader, Ra = (n) => n.type.__isKeepAlive;
function t_(n, e) {
  hp(n, "a", e);
}
function n_(n, e) {
  hp(n, "da", e);
}
function hp(n, e, t = Ut) {
  const i = n.__wdc || (n.__wdc = () => {
    let s = t;
    for (; s; ) {
      if (s.isDeactivated) return;
      s = s.parent;
    }
    return n();
  });
  if (Ca(e, i, t), t) {
    let s = t.parent;
    for (; s && s.parent; ) Ra(s.parent.vnode) && i_(i, e, t, s), s = s.parent;
  }
}
function i_(n, e, t, i) {
  const s = Ca(e, n, i, true);
  mp(() => {
    nu(i[e], s);
  }, t);
}
function Ca(n, e, t = Ut, i = false) {
  if (t) {
    const s = t[n] || (t[n] = []), r = e.__weh || (e.__weh = (...o) => {
      ci();
      const a = Qr(t), l = Pn(e, t, n, o);
      return a(), ui(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const di = (n) => (e, t = Ut) => {
  (!zr || n === "sp") && Ca(n, (...i) => e(...i), t);
}, s_ = di("bm"), fp = di("m"), r_ = di("bu"), dp = di("u"), pp = di("bum"), mp = di("um"), o_ = di("sp"), a_ = di("rtg"), l_ = di("rtc");
function c_(n, e = Ut) {
  Ca("ec", n, e);
}
const gp = "components";
function hA(n, e) {
  return xp(gp, n, true, e) || n;
}
const _p = Symbol.for("v-ndc");
function fA(n) {
  return yt(n) ? xp(gp, n, false) || n : n || _p;
}
function xp(n, e, t = true, i = false) {
  const s = Lt || Ut;
  if (s) {
    const r = s.type;
    {
      const a = J_(r, false);
      if (a && (a === e || a === yn(e) || a === Ta(yn(e)))) return r;
    }
    const o = hh(s[n] || r[n], e) || hh(s.appContext[n], e);
    return !o && i ? r : o;
  }
}
function hh(n, e) {
  return n && (n[e] || n[yn(e)] || n[Ta(yn(e))]);
}
function dA(n, e, t, i) {
  let s;
  const r = t, o = ze(n);
  if (o || yt(n)) {
    const a = o && Us(n);
    let l = false, c = false;
    a && (l = !gn(n), c = Ii(n), n = Aa(n)), s = new Array(n.length);
    for (let u = 0, h = n.length; u < h; u++) s[u] = e(l ? c ? oa(Nt(n[u])) : Nt(n[u]) : n[u], u, void 0, r);
  } else if (typeof n == "number") {
    s = new Array(n);
    for (let a = 0; a < n; a++) s[a] = e(a + 1, a, void 0, r);
  } else if (gt(n)) if (n[Symbol.iterator]) s = Array.from(n, (a, l) => e(a, l, void 0, r));
  else {
    const a = Object.keys(n);
    s = new Array(a.length);
    for (let l = 0, c = a.length; l < c; l++) {
      const u = a[l];
      s[l] = e(n[u], u, l, r);
    }
  }
  else s = [];
  return s;
}
function pA(n, e, t = {}, i, s) {
  if (Lt.ce || Lt.parent && Fs(Lt.parent) && Lt.parent.ce) return e !== "default" && (t.name = e), ec(), tc(en, null, [Zt("slot", t, i)], 64);
  let r = n[e];
  r && r._c && (r._d = false), ec();
  const o = r && vp(r(t)), a = t.key || o && o.key, l = tc(en, { key: (a && !fi(a) ? a : `_${e}`) + "" }, o || [], o && n._ === 1 ? 64 : -2);
  return r && r._c && (r._d = true), l;
}
function vp(n) {
  return n.some((e) => Br(e) ? !(e.type === Vt || e.type === en && !vp(e.children)) : true) ? n : null;
}
const Zl = (n) => n ? Hp(n) ? Ia(n) : Zl(n.parent) : null, Ar = wt(/* @__PURE__ */ Object.create(null), { $: (n) => n, $el: (n) => n.vnode.el, $data: (n) => n.data, $props: (n) => n.props, $attrs: (n) => n.attrs, $slots: (n) => n.slots, $refs: (n) => n.refs, $parent: (n) => Zl(n.parent), $root: (n) => Zl(n.root), $host: (n) => n.ce, $emit: (n) => n.emit, $options: (n) => Mp(n), $forceUpdate: (n) => n.f || (n.f = () => {
  pu(n.update);
}), $nextTick: (n) => n.n || (n.n = jg.bind(n.proxy)), $watch: (n) => L_.bind(n) }), qa = (n, e) => n !== ft && !n.__isScriptSetup && rt(n, e), u_ = { get({ _: n }, e) {
  if (e === "__v_skip") return true;
  const { ctx: t, setupState: i, data: s, props: r, accessCache: o, type: a, appContext: l } = n;
  let c;
  if (e[0] !== "$") {
    const d = o[e];
    if (d !== void 0) switch (d) {
      case 1:
        return i[e];
      case 2:
        return s[e];
      case 4:
        return t[e];
      case 3:
        return r[e];
    }
    else {
      if (qa(i, e)) return o[e] = 1, i[e];
      if (s !== ft && rt(s, e)) return o[e] = 2, s[e];
      if ((c = n.propsOptions[0]) && rt(c, e)) return o[e] = 3, r[e];
      if (t !== ft && rt(t, e)) return o[e] = 4, t[e];
      Jl && (o[e] = 0);
    }
  }
  const u = Ar[e];
  let h, f;
  if (u) return e === "$attrs" && Ht(n.attrs, "get", ""), u(n);
  if ((h = a.__cssModules) && (h = h[e])) return h;
  if (t !== ft && rt(t, e)) return o[e] = 4, t[e];
  if (f = l.config.globalProperties, rt(f, e)) return f[e];
}, set({ _: n }, e, t) {
  const { data: i, setupState: s, ctx: r } = n;
  return qa(s, e) ? (s[e] = t, true) : i !== ft && rt(i, e) ? (i[e] = t, true) : rt(n.props, e) || e[0] === "$" && e.slice(1) in n ? false : (r[e] = t, true);
}, has({ _: { data: n, setupState: e, accessCache: t, ctx: i, appContext: s, propsOptions: r } }, o) {
  let a;
  return !!t[o] || n !== ft && rt(n, o) || qa(e, o) || (a = r[0]) && rt(a, o) || rt(i, o) || rt(Ar, o) || rt(s.config.globalProperties, o);
}, defineProperty(n, e, t) {
  return t.get != null ? n._.accessCache[e] = 0 : rt(t, "value") && this.set(n, e, t.value, null), Reflect.defineProperty(n, e, t);
} };
function fh(n) {
  return ze(n) ? n.reduce((e, t) => (e[t] = null, e), {}) : n;
}
let Jl = true;
function h_(n) {
  const e = Mp(n), t = n.proxy, i = n.ctx;
  Jl = false, e.beforeCreate && dh(e.beforeCreate, n, "bc");
  const { data: s, computed: r, methods: o, watch: a, provide: l, inject: c, created: u, beforeMount: h, mounted: f, beforeUpdate: d, updated: m, activated: _, deactivated: g, beforeDestroy: p, beforeUnmount: E, destroyed: b, unmounted: x, render: P, renderTracked: w, renderTriggered: C, errorCaptured: I, serverPrefetch: S, expose: M, inheritAttrs: L, components: O, directives: X, filters: Q } = e;
  if (c && f_(c, i, null), o) for (const se in o) {
    const j = o[se];
    We(j) && (i[se] = j.bind(t));
  }
  if (s) {
    const se = s.call(t, t);
    gt(se) && (n.data = hu(se));
  }
  if (Jl = true, r) for (const se in r) {
    const j = r[se], de = We(j) ? j.bind(t, t) : We(j.get) ? j.get.bind(t, t) : Hn, xe = !We(j) && We(j.set) ? j.set.bind(t) : Hn, be = $_({ get: de, set: xe });
    Object.defineProperty(i, se, { enumerable: true, configurable: true, get: () => be.value, set: (Fe) => be.value = Fe });
  }
  if (a) for (const se in a) yp(a[se], i, t, se);
  if (l) {
    const se = We(l) ? l.call(t) : l;
    Reflect.ownKeys(se).forEach((j) => {
      x_(j, se[j]);
    });
  }
  u && dh(u, n, "c");
  function Z(se, j) {
    ze(j) ? j.forEach((de) => se(de.bind(t))) : j && se(j.bind(t));
  }
  if (Z(s_, h), Z(fp, f), Z(r_, d), Z(dp, m), Z(t_, _), Z(n_, g), Z(c_, I), Z(l_, w), Z(a_, C), Z(pp, E), Z(mp, x), Z(o_, S), ze(M)) if (M.length) {
    const se = n.exposed || (n.exposed = {});
    M.forEach((j) => {
      Object.defineProperty(se, j, { get: () => t[j], set: (de) => t[j] = de });
    });
  } else n.exposed || (n.exposed = {});
  P && n.render === Hn && (n.render = P), L != null && (n.inheritAttrs = L), O && (n.components = O), X && (n.directives = X), S && up(n);
}
function f_(n, e, t = Hn) {
  ze(n) && (n = Ql(n));
  for (const i in n) {
    const s = n[i];
    let r;
    gt(s) ? "default" in s ? r = Zo(s.from || i, s.default, true) : r = Zo(s.from || i) : r = Zo(s), Gt(r) ? Object.defineProperty(e, i, { enumerable: true, configurable: true, get: () => r.value, set: (o) => r.value = o }) : e[i] = r;
  }
}
function dh(n, e, t) {
  Pn(ze(n) ? n.map((i) => i.bind(e.proxy)) : n.bind(e.proxy), e, t);
}
function yp(n, e, t, i) {
  let s = i.includes(".") ? Dp(t, i) : () => t[i];
  if (yt(n)) {
    const r = e[n];
    We(r) && Ka(s, r);
  } else if (We(n)) Ka(s, n.bind(t));
  else if (gt(n)) if (ze(n)) n.forEach((r) => yp(r, e, t, i));
  else {
    const r = We(n.handler) ? n.handler.bind(t) : e[n.handler];
    We(r) && Ka(s, r, n);
  }
}
function Mp(n) {
  const e = n.type, { mixins: t, extends: i } = e, { mixins: s, optionsCache: r, config: { optionMergeStrategies: o } } = n.appContext, a = r.get(e);
  let l;
  return a ? l = a : !s.length && !t && !i ? l = e : (l = {}, s.length && s.forEach((c) => ha(l, c, o, true)), ha(l, e, o)), gt(e) && r.set(e, l), l;
}
function ha(n, e, t, i = false) {
  const { mixins: s, extends: r } = e;
  r && ha(n, r, t, true), s && s.forEach((o) => ha(n, o, t, true));
  for (const o in e) if (!(i && o === "expose")) {
    const a = d_[o] || t && t[o];
    n[o] = a ? a(n[o], e[o]) : e[o];
  }
  return n;
}
const d_ = { data: ph, props: mh, emits: mh, methods: xr, computed: xr, beforeCreate: Yt, created: Yt, beforeMount: Yt, mounted: Yt, beforeUpdate: Yt, updated: Yt, beforeDestroy: Yt, beforeUnmount: Yt, destroyed: Yt, unmounted: Yt, activated: Yt, deactivated: Yt, errorCaptured: Yt, serverPrefetch: Yt, components: xr, directives: xr, watch: m_, provide: ph, inject: p_ };
function ph(n, e) {
  return e ? n ? function() {
    return wt(We(n) ? n.call(this, this) : n, We(e) ? e.call(this, this) : e);
  } : e : n;
}
function p_(n, e) {
  return xr(Ql(n), Ql(e));
}
function Ql(n) {
  if (ze(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) e[n[t]] = n[t];
    return e;
  }
  return n;
}
function Yt(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function xr(n, e) {
  return n ? wt(/* @__PURE__ */ Object.create(null), n, e) : e;
}
function mh(n, e) {
  return n ? ze(n) && ze(e) ? [.../* @__PURE__ */ new Set([...n, ...e])] : wt(/* @__PURE__ */ Object.create(null), fh(n), fh(e ?? {})) : e;
}
function m_(n, e) {
  if (!n) return e;
  if (!e) return n;
  const t = wt(/* @__PURE__ */ Object.create(null), n);
  for (const i in e) t[i] = Yt(n[i], e[i]);
  return t;
}
function Sp() {
  return { app: null, config: { isNativeTag: og, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let g_ = 0;
function __(n, e) {
  return function(i, s = null) {
    We(i) || (i = wt({}, i)), s != null && !gt(s) && (s = null);
    const r = Sp(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = false;
    const c = r.app = { _uid: g_++, _component: i, _props: s, _container: null, _context: r, _instance: null, version: tx, get config() {
      return r.config;
    }, set config(u) {
    }, use(u, ...h) {
      return o.has(u) || (u && We(u.install) ? (o.add(u), u.install(c, ...h)) : We(u) && (o.add(u), u(c, ...h))), c;
    }, mixin(u) {
      return r.mixins.includes(u) || r.mixins.push(u), c;
    }, component(u, h) {
      return h ? (r.components[u] = h, c) : r.components[u];
    }, directive(u, h) {
      return h ? (r.directives[u] = h, c) : r.directives[u];
    }, mount(u, h, f) {
      if (!l) {
        const d = c._ceVNode || Zt(i, s);
        return d.appContext = r, f === true ? f = "svg" : f === false && (f = void 0), n(d, u, f), l = true, c._container = u, u.__vue_app__ = c, Ia(d.component);
      }
    }, onUnmount(u) {
      a.push(u);
    }, unmount() {
      l && (Pn(a, c._instance, 16), n(null, c._container), delete c._container.__vue_app__);
    }, provide(u, h) {
      return r.provides[u] = h, c;
    }, runWithContext(u) {
      const h = Bs;
      Bs = c;
      try {
        return u();
      } finally {
        Bs = h;
      }
    } };
    return c;
  };
}
let Bs = null;
function x_(n, e) {
  if (Ut) {
    let t = Ut.provides;
    const i = Ut.parent && Ut.parent.provides;
    i === t && (t = Ut.provides = Object.create(i)), t[n] = e;
  }
}
function Zo(n, e, t = false) {
  const i = Ut || Lt;
  if (i || Bs) {
    let s = Bs ? Bs._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && n in s) return s[n];
    if (arguments.length > 1) return t && We(e) ? e.call(i && i.proxy) : e;
  }
}
const bp = {}, Tp = () => Object.create(bp), Ep = (n) => Object.getPrototypeOf(n) === bp;
function v_(n, e, t, i = false) {
  const s = {}, r = Tp();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), Ap(n, e, s, r);
  for (const o in n.propsOptions[0]) o in s || (s[o] = void 0);
  t ? n.props = i ? s : Bg(s) : n.type.props ? n.props = s : n.props = r, n.attrs = r;
}
function y_(n, e, t, i) {
  const { props: s, attrs: r, vnode: { patchFlag: o } } = n, a = nt(s), [l] = n.propsOptions;
  let c = false;
  if ((i || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = n.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let f = u[h];
        if (Pa(n.emitsOptions, f)) continue;
        const d = e[f];
        if (l) if (rt(r, f)) d !== r[f] && (r[f] = d, c = true);
        else {
          const m = yn(f);
          s[m] = $l(l, a, m, d, n, false);
        }
        else d !== r[f] && (r[f] = d, c = true);
      }
    }
  } else {
    Ap(n, e, s, r) && (c = true);
    let u;
    for (const h in a) (!e || !rt(e, h) && ((u = Ui(h)) === h || !rt(e, u))) && (l ? t && (t[h] !== void 0 || t[u] !== void 0) && (s[h] = $l(l, a, h, void 0, n, true)) : delete s[h]);
    if (r !== a) for (const h in r) (!e || !rt(e, h)) && (delete r[h], c = true);
  }
  c && ii(n.attrs, "set", "");
}
function Ap(n, e, t, i) {
  const [s, r] = n.propsOptions;
  let o = false, a;
  if (e) for (let l in e) {
    if (Sr(l)) continue;
    const c = e[l];
    let u;
    s && rt(s, u = yn(l)) ? !r || !r.includes(u) ? t[u] = c : (a || (a = {}))[u] = c : Pa(n.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, o = true);
  }
  if (r) {
    const l = nt(t), c = a || ft;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      t[h] = $l(s, l, h, c[h], n, !rt(c, h));
    }
  }
  return o;
}
function $l(n, e, t, i, s, r) {
  const o = n[t];
  if (o != null) {
    const a = rt(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && We(l)) {
        const { propsDefaults: c } = s;
        if (t in c) i = c[t];
        else {
          const u = Qr(s);
          i = c[t] = l.call(null, e), u();
        }
      } else i = l;
      s.ce && s.ce._setProp(t, i);
    }
    o[0] && (r && !a ? i = false : o[1] && (i === "" || i === Ui(t)) && (i = true));
  }
  return i;
}
const M_ = /* @__PURE__ */ new WeakMap();
function wp(n, e, t = false) {
  const i = t ? M_ : e.propsCache, s = i.get(n);
  if (s) return s;
  const r = n.props, o = {}, a = [];
  let l = false;
  if (!We(n)) {
    const u = (h) => {
      l = true;
      const [f, d] = wp(h, e, true);
      wt(o, f), d && a.push(...d);
    };
    !t && e.mixins.length && e.mixins.forEach(u), n.extends && u(n.extends), n.mixins && n.mixins.forEach(u);
  }
  if (!r && !l) return gt(n) && i.set(n, Ds), Ds;
  if (ze(r)) for (let u = 0; u < r.length; u++) {
    const h = yn(r[u]);
    gh(h) && (o[h] = ft);
  }
  else if (r) for (const u in r) {
    const h = yn(u);
    if (gh(h)) {
      const f = r[u], d = o[h] = ze(f) || We(f) ? { type: f } : wt({}, f), m = d.type;
      let _ = false, g = true;
      if (ze(m)) for (let p = 0; p < m.length; ++p) {
        const E = m[p], b = We(E) && E.name;
        if (b === "Boolean") {
          _ = true;
          break;
        } else b === "String" && (g = false);
      }
      else _ = We(m) && m.name === "Boolean";
      d[0] = _, d[1] = g, (_ || rt(d, "default")) && a.push(h);
    }
  }
  const c = [o, a];
  return gt(n) && i.set(n, c), c;
}
function gh(n) {
  return n[0] !== "$" && !Sr(n);
}
const gu = (n) => n[0] === "_" || n === "$stable", _u = (n) => ze(n) ? n.map(On) : [On(n)], S_ = (n, e, t) => {
  if (e._n) return e;
  const i = Jg((...s) => _u(e(...s)), t);
  return i._c = false, i;
}, Rp = (n, e, t) => {
  const i = n._ctx;
  for (const s in n) {
    if (gu(s)) continue;
    const r = n[s];
    if (We(r)) e[s] = S_(s, r, i);
    else if (r != null) {
      const o = _u(r);
      e[s] = () => o;
    }
  }
}, Cp = (n, e) => {
  const t = _u(e);
  n.slots.default = () => t;
}, Pp = (n, e, t) => {
  for (const i in e) (t || !gu(i)) && (n[i] = e[i]);
}, b_ = (n, e, t) => {
  const i = n.slots = Tp();
  if (n.vnode.shapeFlag & 32) {
    const s = e._;
    s ? (Pp(i, e, t), t && Rd(i, "_", s, true)) : Rp(e, i);
  } else e && Cp(n, e);
}, T_ = (n, e, t) => {
  const { vnode: i, slots: s } = n;
  let r = true, o = ft;
  if (i.shapeFlag & 32) {
    const a = e._;
    a ? t && a === 1 ? r = false : Pp(s, e, t) : (r = !e.$stable, Rp(e, s)), o = e;
  } else e && (Cp(n, e), o = { default: 1 });
  if (r) for (const a in s) !gu(a) && o[a] == null && delete s[a];
}, jt = B_;
function E_(n) {
  return A_(n);
}
function A_(n, e) {
  const t = Ea();
  t.__VUE__ = true;
  const { insert: i, remove: s, patchProp: r, createElement: o, createText: a, createComment: l, setText: c, setElementText: u, parentNode: h, nextSibling: f, setScopeId: d = Hn, insertStaticContent: m } = n, _ = (R, D, y, V = null, F = null, H = null, z = void 0, J = null, G = !!D.dynamicChildren) => {
    if (R === D) return;
    R && !ts(R, D) && (V = ge(R), Fe(R, F, H, true), R = null), D.patchFlag === -2 && (G = false, D.dynamicChildren = null);
    const { type: q, ref: ae, shapeFlag: T } = D;
    switch (q) {
      case La:
        g(R, D, y, V);
        break;
      case Vt:
        p(R, D, y, V);
        break;
      case Za:
        R == null && E(D, y, V, z);
        break;
      case en:
        O(R, D, y, V, F, H, z, J, G);
        break;
      default:
        T & 1 ? P(R, D, y, V, F, H, z, J, G) : T & 6 ? X(R, D, y, V, F, H, z, J, G) : (T & 64 || T & 128) && q.process(R, D, y, V, F, H, z, J, G, Ne);
    }
    ae != null && F && ua(ae, R && R.ref, H, D || R, !D);
  }, g = (R, D, y, V) => {
    if (R == null) i(D.el = a(D.children), y, V);
    else {
      const F = D.el = R.el;
      D.children !== R.children && c(F, D.children);
    }
  }, p = (R, D, y, V) => {
    R == null ? i(D.el = l(D.children || ""), y, V) : D.el = R.el;
  }, E = (R, D, y, V) => {
    [R.el, R.anchor] = m(R.children, D, y, V, R.el, R.anchor);
  }, b = ({ el: R, anchor: D }, y, V) => {
    let F;
    for (; R && R !== D; ) F = f(R), i(R, y, V), R = F;
    i(D, y, V);
  }, x = ({ el: R, anchor: D }) => {
    let y;
    for (; R && R !== D; ) y = f(R), s(R), R = y;
    s(D);
  }, P = (R, D, y, V, F, H, z, J, G) => {
    D.type === "svg" ? z = "svg" : D.type === "math" && (z = "mathml"), R == null ? w(D, y, V, F, H, z, J, G) : S(R, D, F, H, z, J, G);
  }, w = (R, D, y, V, F, H, z, J) => {
    let G, q;
    const { props: ae, shapeFlag: T, transition: v, dirs: U } = R;
    if (G = R.el = o(R.type, H, ae && ae.is, ae), T & 8 ? u(G, R.children) : T & 16 && I(R.children, G, null, V, F, ja(R, H), z, J), U && zi(R, null, V, "created"), C(G, R, R.scopeId, z, V), ae) {
      for (const te in ae) te !== "value" && !Sr(te) && r(G, te, null, ae[te], H, V);
      "value" in ae && r(G, "value", null, ae.value, H), (q = ae.onVnodeBeforeMount) && Dn(q, V, R);
    }
    U && zi(R, null, V, "beforeMount");
    const Y = w_(F, v);
    Y && v.beforeEnter(G), i(G, D, y), ((q = ae && ae.onVnodeMounted) || Y || U) && jt(() => {
      q && Dn(q, V, R), Y && v.enter(G), U && zi(R, null, V, "mounted");
    }, F);
  }, C = (R, D, y, V, F) => {
    if (y && d(R, y), V) for (let H = 0; H < V.length; H++) d(R, V[H]);
    if (F) {
      let H = F.subTree;
      if (D === H || Up(H.type) && (H.ssContent === D || H.ssFallback === D)) {
        const z = F.vnode;
        C(R, z, z.scopeId, z.slotScopeIds, F.parent);
      }
    }
  }, I = (R, D, y, V, F, H, z, J, G = 0) => {
    for (let q = G; q < R.length; q++) {
      const ae = R[q] = J ? Ai(R[q]) : On(R[q]);
      _(null, ae, D, y, V, F, H, z, J);
    }
  }, S = (R, D, y, V, F, H, z) => {
    const J = D.el = R.el;
    let { patchFlag: G, dynamicChildren: q, dirs: ae } = D;
    G |= R.patchFlag & 16;
    const T = R.props || ft, v = D.props || ft;
    let U;
    if (y && Hi(y, false), (U = v.onVnodeBeforeUpdate) && Dn(U, y, D, R), ae && zi(D, R, y, "beforeUpdate"), y && Hi(y, true), (T.innerHTML && v.innerHTML == null || T.textContent && v.textContent == null) && u(J, ""), q ? M(R.dynamicChildren, q, J, y, V, ja(D, F), H) : z || j(R, D, J, null, y, V, ja(D, F), H, false), G > 0) {
      if (G & 16) L(J, T, v, y, F);
      else if (G & 2 && T.class !== v.class && r(J, "class", null, v.class, F), G & 4 && r(J, "style", T.style, v.style, F), G & 8) {
        const Y = D.dynamicProps;
        for (let te = 0; te < Y.length; te++) {
          const K = Y[te], ve = T[K], ce = v[K];
          (ce !== ve || K === "value") && r(J, K, ve, ce, F, y);
        }
      }
      G & 1 && R.children !== D.children && u(J, D.children);
    } else !z && q == null && L(J, T, v, y, F);
    ((U = v.onVnodeUpdated) || ae) && jt(() => {
      U && Dn(U, y, D, R), ae && zi(D, R, y, "updated");
    }, V);
  }, M = (R, D, y, V, F, H, z) => {
    for (let J = 0; J < D.length; J++) {
      const G = R[J], q = D[J], ae = G.el && (G.type === en || !ts(G, q) || G.shapeFlag & 198) ? h(G.el) : y;
      _(G, q, ae, null, V, F, H, z, true);
    }
  }, L = (R, D, y, V, F) => {
    if (D !== y) {
      if (D !== ft) for (const H in D) !Sr(H) && !(H in y) && r(R, H, D[H], null, F, V);
      for (const H in y) {
        if (Sr(H)) continue;
        const z = y[H], J = D[H];
        z !== J && H !== "value" && r(R, H, J, z, F, V);
      }
      "value" in y && r(R, "value", D.value, y.value, F);
    }
  }, O = (R, D, y, V, F, H, z, J, G) => {
    const q = D.el = R ? R.el : a(""), ae = D.anchor = R ? R.anchor : a("");
    let { patchFlag: T, dynamicChildren: v, slotScopeIds: U } = D;
    U && (J = J ? J.concat(U) : U), R == null ? (i(q, y, V), i(ae, y, V), I(D.children || [], y, ae, F, H, z, J, G)) : T > 0 && T & 64 && v && R.dynamicChildren ? (M(R.dynamicChildren, v, y, F, H, z, J), (D.key != null || F && D === F.subTree) && xu(R, D, true)) : j(R, D, y, ae, F, H, z, J, G);
  }, X = (R, D, y, V, F, H, z, J, G) => {
    D.slotScopeIds = J, R == null ? D.shapeFlag & 512 ? F.ctx.activate(D, y, V, z, G) : Q(D, y, V, F, H, z, G) : ne(R, D, G);
  }, Q = (R, D, y, V, F, H, z) => {
    const J = R.component = Y_(R, V, F);
    if (Ra(R) && (J.ctx.renderer = Ne), q_(J, false, z), J.asyncDep) {
      if (F && F.registerDep(J, Z, z), !R.el) {
        const G = J.subTree = Zt(Vt);
        p(null, G, D, y);
      }
    } else Z(J, R, D, y, F, H, z);
  }, ne = (R, D, y) => {
    const V = D.component = R.component;
    if (O_(R, D, y)) if (V.asyncDep && !V.asyncResolved) {
      se(V, D, y);
      return;
    } else V.next = D, V.update();
    else D.el = R.el, V.vnode = D;
  }, Z = (R, D, y, V, F, H, z) => {
    const J = () => {
      if (R.isMounted) {
        let { next: T, bu: v, u: U, parent: Y, vnode: te } = R;
        {
          const Te = Lp(R);
          if (Te) {
            T && (T.el = te.el, se(R, T, z)), Te.asyncDep.then(() => {
              R.isUnmounted || J();
            });
            return;
          }
        }
        let K = T, ve;
        Hi(R, false), T ? (T.el = te.el, se(R, T, z)) : T = te, v && jo(v), (ve = T.props && T.props.onVnodeBeforeUpdate) && Dn(ve, Y, T, te), Hi(R, true);
        const ce = xh(R), ye = R.subTree;
        R.subTree = ce, _(ye, ce, h(ye.el), ge(ye), R, F, H), T.el = ce.el, K === null && F_(R, ce.el), U && jt(U, F), (ve = T.props && T.props.onVnodeUpdated) && jt(() => Dn(ve, Y, T, te), F);
      } else {
        let T;
        const { el: v, props: U } = D, { bm: Y, m: te, parent: K, root: ve, type: ce } = R, ye = Fs(D);
        Hi(R, false), Y && jo(Y), !ye && (T = U && U.onVnodeBeforeMount) && Dn(T, K, D), Hi(R, true);
        {
          ve.ce && ve.ce._injectChildStyle(ce);
          const Te = R.subTree = xh(R);
          _(null, Te, y, V, R, F, H), D.el = Te.el;
        }
        if (te && jt(te, F), !ye && (T = U && U.onVnodeMounted)) {
          const Te = D;
          jt(() => Dn(T, K, Te), F);
        }
        (D.shapeFlag & 256 || K && Fs(K.vnode) && K.vnode.shapeFlag & 256) && R.a && jt(R.a, F), R.isMounted = true, D = y = V = null;
      }
    };
    R.scope.on();
    const G = R.effect = new Dd(J);
    R.scope.off();
    const q = R.update = G.run.bind(G), ae = R.job = G.runIfDirty.bind(G);
    ae.i = R, ae.id = R.uid, G.scheduler = () => pu(ae), Hi(R, true), q();
  }, se = (R, D, y) => {
    D.component = R;
    const V = R.vnode.props;
    R.vnode = D, R.next = null, y_(R, D.props, V, y), T_(R, D.children, y), ci(), oh(R), ui();
  }, j = (R, D, y, V, F, H, z, J, G = false) => {
    const q = R && R.children, ae = R ? R.shapeFlag : 0, T = D.children, { patchFlag: v, shapeFlag: U } = D;
    if (v > 0) {
      if (v & 128) {
        xe(q, T, y, V, F, H, z, J, G);
        return;
      } else if (v & 256) {
        de(q, T, y, V, F, H, z, J, G);
        return;
      }
    }
    U & 8 ? (ae & 16 && we(q, F, H), T !== q && u(y, T)) : ae & 16 ? U & 16 ? xe(q, T, y, V, F, H, z, J, G) : we(q, F, H, true) : (ae & 8 && u(y, ""), U & 16 && I(T, y, V, F, H, z, J, G));
  }, de = (R, D, y, V, F, H, z, J, G) => {
    R = R || Ds, D = D || Ds;
    const q = R.length, ae = D.length, T = Math.min(q, ae);
    let v;
    for (v = 0; v < T; v++) {
      const U = D[v] = G ? Ai(D[v]) : On(D[v]);
      _(R[v], U, y, null, F, H, z, J, G);
    }
    q > ae ? we(R, F, H, true, false, T) : I(D, y, V, F, H, z, J, G, T);
  }, xe = (R, D, y, V, F, H, z, J, G) => {
    let q = 0;
    const ae = D.length;
    let T = R.length - 1, v = ae - 1;
    for (; q <= T && q <= v; ) {
      const U = R[q], Y = D[q] = G ? Ai(D[q]) : On(D[q]);
      if (ts(U, Y)) _(U, Y, y, null, F, H, z, J, G);
      else break;
      q++;
    }
    for (; q <= T && q <= v; ) {
      const U = R[T], Y = D[v] = G ? Ai(D[v]) : On(D[v]);
      if (ts(U, Y)) _(U, Y, y, null, F, H, z, J, G);
      else break;
      T--, v--;
    }
    if (q > T) {
      if (q <= v) {
        const U = v + 1, Y = U < ae ? D[U].el : V;
        for (; q <= v; ) _(null, D[q] = G ? Ai(D[q]) : On(D[q]), y, Y, F, H, z, J, G), q++;
      }
    } else if (q > v) for (; q <= T; ) Fe(R[q], F, H, true), q++;
    else {
      const U = q, Y = q, te = /* @__PURE__ */ new Map();
      for (q = Y; q <= v; q++) {
        const Ce = D[q] = G ? Ai(D[q]) : On(D[q]);
        Ce.key != null && te.set(Ce.key, q);
      }
      let K, ve = 0;
      const ce = v - Y + 1;
      let ye = false, Te = 0;
      const oe = new Array(ce);
      for (q = 0; q < ce; q++) oe[q] = 0;
      for (q = U; q <= T; q++) {
        const Ce = R[q];
        if (ve >= ce) {
          Fe(Ce, F, H, true);
          continue;
        }
        let Le;
        if (Ce.key != null) Le = te.get(Ce.key);
        else for (K = Y; K <= v; K++) if (oe[K - Y] === 0 && ts(Ce, D[K])) {
          Le = K;
          break;
        }
        Le === void 0 ? Fe(Ce, F, H, true) : (oe[Le - Y] = q + 1, Le >= Te ? Te = Le : ye = true, _(Ce, D[Le], y, null, F, H, z, J, G), ve++);
      }
      const Ee = ye ? R_(oe) : Ds;
      for (K = Ee.length - 1, q = ce - 1; q >= 0; q--) {
        const Ce = Y + q, Le = D[Ce], me = Ce + 1 < ae ? D[Ce + 1].el : V;
        oe[q] === 0 ? _(null, Le, y, me, F, H, z, J, G) : ye && (K < 0 || q !== Ee[K] ? be(Le, y, me, 2) : K--);
      }
    }
  }, be = (R, D, y, V, F = null) => {
    const { el: H, type: z, transition: J, children: G, shapeFlag: q } = R;
    if (q & 6) {
      be(R.component.subTree, D, y, V);
      return;
    }
    if (q & 128) {
      R.suspense.move(D, y, V);
      return;
    }
    if (q & 64) {
      z.move(R, D, y, Ne);
      return;
    }
    if (z === en) {
      i(H, D, y);
      for (let T = 0; T < G.length; T++) be(G[T], D, y, V);
      i(R.anchor, D, y);
      return;
    }
    if (z === Za) {
      b(R, D, y);
      return;
    }
    if (V !== 2 && q & 1 && J) if (V === 0) J.beforeEnter(H), i(H, D, y), jt(() => J.enter(H), F);
    else {
      const { leave: T, delayLeave: v, afterLeave: U } = J, Y = () => {
        R.ctx.isUnmounted ? s(H) : i(H, D, y);
      }, te = () => {
        T(H, () => {
          Y(), U && U();
        });
      };
      v ? v(H, Y, te) : te();
    }
    else i(H, D, y);
  }, Fe = (R, D, y, V = false, F = false) => {
    const { type: H, props: z, ref: J, children: G, dynamicChildren: q, shapeFlag: ae, patchFlag: T, dirs: v, cacheIndex: U } = R;
    if (T === -2 && (F = false), J != null && (ci(), ua(J, null, y, R, true), ui()), U != null && (D.renderCache[U] = void 0), ae & 256) {
      D.ctx.deactivate(R);
      return;
    }
    const Y = ae & 1 && v, te = !Fs(R);
    let K;
    if (te && (K = z && z.onVnodeBeforeUnmount) && Dn(K, D, R), ae & 6) pe(R.component, y, V);
    else {
      if (ae & 128) {
        R.suspense.unmount(y, V);
        return;
      }
      Y && zi(R, null, D, "beforeUnmount"), ae & 64 ? R.type.remove(R, D, y, Ne, V) : q && !q.hasOnce && (H !== en || T > 0 && T & 64) ? we(q, D, y, false, true) : (H === en && T & 384 || !F && ae & 16) && we(G, D, y), V && Ze(R);
    }
    (te && (K = z && z.onVnodeUnmounted) || Y) && jt(() => {
      K && Dn(K, D, R), Y && zi(R, null, D, "unmounted");
    }, y);
  }, Ze = (R) => {
    const { type: D, el: y, anchor: V, transition: F } = R;
    if (D === en) {
      ie(y, V);
      return;
    }
    if (D === Za) {
      x(R);
      return;
    }
    const H = () => {
      s(y), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (R.shapeFlag & 1 && F && !F.persisted) {
      const { leave: z, delayLeave: J } = F, G = () => z(y, H);
      J ? J(R.el, H, G) : G();
    } else H();
  }, ie = (R, D) => {
    let y;
    for (; R !== D; ) y = f(R), s(R), R = y;
    s(D);
  }, pe = (R, D, y) => {
    const { bum: V, scope: F, job: H, subTree: z, um: J, m: G, a: q, parent: ae, slots: { __: T } } = R;
    _h(G), _h(q), V && jo(V), ae && ze(T) && T.forEach((v) => {
      ae.renderCache[v] = void 0;
    }), F.stop(), H && (H.flags |= 8, Fe(z, R, D, y)), J && jt(J, D), jt(() => {
      R.isUnmounted = true;
    }, D), D && D.pendingBranch && !D.isUnmounted && R.asyncDep && !R.asyncResolved && R.suspenseId === D.pendingId && (D.deps--, D.deps === 0 && D.resolve());
  }, we = (R, D, y, V = false, F = false, H = 0) => {
    for (let z = H; z < R.length; z++) Fe(R[z], D, y, V, F);
  }, ge = (R) => {
    if (R.shapeFlag & 6) return ge(R.component.subTree);
    if (R.shapeFlag & 128) return R.suspense.next();
    const D = f(R.anchor || R.el), y = D && D[tp];
    return y ? f(y) : D;
  };
  let Pe = false;
  const ke = (R, D, y) => {
    R == null ? D._vnode && Fe(D._vnode, null, null, true) : _(D._vnode || null, R, D, null, null, null, y), D._vnode = R, Pe || (Pe = true, oh(), Qd(), Pe = false);
  }, Ne = { p: _, um: Fe, m: be, r: Ze, mt: Q, mc: I, pc: j, pbc: M, n: ge, o: n };
  return { render: ke, hydrate: void 0, createApp: __(ke) };
}
function ja({ type: n, props: e }, t) {
  return t === "svg" && n === "foreignObject" || t === "mathml" && n === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t;
}
function Hi({ effect: n, job: e }, t) {
  t ? (n.flags |= 32, e.flags |= 4) : (n.flags &= -33, e.flags &= -5);
}
function w_(n, e) {
  return (!n || n && !n.pendingBranch) && e && !e.persisted;
}
function xu(n, e, t = false) {
  const i = n.children, s = e.children;
  if (ze(i) && ze(s)) for (let r = 0; r < i.length; r++) {
    const o = i[r];
    let a = s[r];
    a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = Ai(s[r]), a.el = o.el), !t && a.patchFlag !== -2 && xu(o, a)), a.type === La && (a.el = o.el), a.type === Vt && !a.el && (a.el = o.el);
  }
}
function R_(n) {
  const e = n.slice(), t = [0];
  let i, s, r, o, a;
  const l = n.length;
  for (i = 0; i < l; i++) {
    const c = n[i];
    if (c !== 0) {
      if (s = t[t.length - 1], n[s] < c) {
        e[i] = s, t.push(i);
        continue;
      }
      for (r = 0, o = t.length - 1; r < o; ) a = r + o >> 1, n[t[a]] < c ? r = a + 1 : o = a;
      c < n[t[r]] && (r > 0 && (e[i] = t[r - 1]), t[r] = i);
    }
  }
  for (r = t.length, o = t[r - 1]; r-- > 0; ) t[r] = o, o = e[o];
  return t;
}
function Lp(n) {
  const e = n.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : Lp(e);
}
function _h(n) {
  if (n) for (let e = 0; e < n.length; e++) n[e].flags |= 8;
}
const C_ = Symbol.for("v-scx"), P_ = () => Zo(C_);
function Ka(n, e, t) {
  return Ip(n, e, t);
}
function Ip(n, e, t = ft) {
  const { immediate: i, deep: s, flush: r, once: o } = t, a = wt({}, t), l = e && i || !e && r !== "post";
  let c;
  if (zr) {
    if (r === "sync") {
      const d = P_();
      c = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = Hn, d.resume = Hn, d.pause = Hn, d;
    }
  }
  const u = Ut;
  a.call = (d, m, _) => Pn(d, u, m, _);
  let h = false;
  r === "post" ? a.scheduler = (d) => {
    jt(d, u && u.suspense);
  } : r !== "sync" && (h = true, a.scheduler = (d, m) => {
    m ? d() : pu(d);
  }), a.augmentJob = (d) => {
    e && (d.flags |= 4), h && (d.flags |= 2, u && (d.id = u.uid, d.i = u));
  };
  const f = Yg(n, e, a);
  return zr && (c ? c.push(f) : l && f()), f;
}
function L_(n, e, t) {
  const i = this.proxy, s = yt(n) ? n.includes(".") ? Dp(i, n) : () => i[n] : n.bind(i, i);
  let r;
  We(e) ? r = e : (r = e.handler, t = e);
  const o = Qr(this), a = Ip(s, r.bind(i), t);
  return o(), a;
}
function Dp(n, e) {
  const t = e.split(".");
  return () => {
    let i = n;
    for (let s = 0; s < t.length && i; s++) i = i[t[s]];
    return i;
  };
}
const I_ = (n, e) => e === "modelValue" || e === "model-value" ? n.modelModifiers : n[`${e}Modifiers`] || n[`${yn(e)}Modifiers`] || n[`${Ui(e)}Modifiers`];
function D_(n, e, ...t) {
  if (n.isUnmounted) return;
  const i = n.vnode.props || ft;
  let s = t;
  const r = e.startsWith("update:"), o = r && I_(i, e.slice(7));
  o && (o.trim && (s = t.map((u) => yt(u) ? u.trim() : u)), o.number && (s = t.map(Wl)));
  let a, l = i[a = Va(e)] || i[a = Va(yn(e))];
  !l && r && (l = i[a = Va(Ui(e))]), l && Pn(l, n, 6, s);
  const c = i[a + "Once"];
  if (c) {
    if (!n.emitted) n.emitted = {};
    else if (n.emitted[a]) return;
    n.emitted[a] = true, Pn(c, n, 6, s);
  }
}
function Np(n, e, t = false) {
  const i = e.emitsCache, s = i.get(n);
  if (s !== void 0) return s;
  const r = n.emits;
  let o = {}, a = false;
  if (!We(n)) {
    const l = (c) => {
      const u = Np(c, e, true);
      u && (a = true, wt(o, u));
    };
    !t && e.mixins.length && e.mixins.forEach(l), n.extends && l(n.extends), n.mixins && n.mixins.forEach(l);
  }
  return !r && !a ? (gt(n) && i.set(n, null), null) : (ze(r) ? r.forEach((l) => o[l] = null) : wt(o, r), gt(n) && i.set(n, o), o);
}
function Pa(n, e) {
  return !n || !Ma(e) ? false : (e = e.slice(2).replace(/Once$/, ""), rt(n, e[0].toLowerCase() + e.slice(1)) || rt(n, Ui(e)) || rt(n, e));
}
function xh(n) {
  const { type: e, vnode: t, proxy: i, withProxy: s, propsOptions: [r], slots: o, attrs: a, emit: l, render: c, renderCache: u, props: h, data: f, setupState: d, ctx: m, inheritAttrs: _ } = n, g = ca(n);
  let p, E;
  try {
    if (t.shapeFlag & 4) {
      const x = s || i, P = x;
      p = On(c.call(P, x, u, h, d, f, m)), E = a;
    } else {
      const x = e;
      p = On(x.length > 1 ? x(h, { attrs: a, slots: o, emit: l }) : x(h, null)), E = e.props ? a : N_(a);
    }
  } catch (x) {
    wr.length = 0, wa(x, n, 1), p = Zt(Vt);
  }
  let b = p;
  if (E && _ !== false) {
    const x = Object.keys(E), { shapeFlag: P } = b;
    x.length && P & 7 && (r && x.some(tu) && (E = U_(E, r)), b = Di(b, E, false, true));
  }
  return t.dirs && (b = Di(b, null, false, true), b.dirs = b.dirs ? b.dirs.concat(t.dirs) : t.dirs), t.transition && os(b, t.transition), p = b, ca(g), p;
}
const N_ = (n) => {
  let e;
  for (const t in n) (t === "class" || t === "style" || Ma(t)) && ((e || (e = {}))[t] = n[t]);
  return e;
}, U_ = (n, e) => {
  const t = {};
  for (const i in n) (!tu(i) || !(i.slice(9) in e)) && (t[i] = n[i]);
  return t;
};
function O_(n, e, t) {
  const { props: i, children: s, component: r } = n, { props: o, children: a, patchFlag: l } = e, c = r.emitsOptions;
  if (e.dirs || e.transition) return true;
  if (t && l >= 0) {
    if (l & 1024) return true;
    if (l & 16) return i ? vh(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const f = u[h];
        if (o[f] !== i[f] && !Pa(c, f)) return true;
      }
    }
  } else return (s || a) && (!a || !a.$stable) ? true : i === o ? false : i ? o ? vh(i, o, c) : true : !!o;
  return false;
}
function vh(n, e, t) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(n).length) return true;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (e[r] !== n[r] && !Pa(t, r)) return true;
  }
  return false;
}
function F_({ vnode: n, parent: e }, t) {
  for (; e; ) {
    const i = e.subTree;
    if (i.suspense && i.suspense.activeBranch === n && (i.el = n.el), i === n) (n = e.vnode).el = t, e = e.parent;
    else break;
  }
}
const Up = (n) => n.__isSuspense;
function B_(n, e) {
  e && e.pendingBranch ? ze(n) ? e.effects.push(...n) : e.effects.push(n) : Zg(n);
}
const en = Symbol.for("v-fgt"), La = Symbol.for("v-txt"), Vt = Symbol.for("v-cmt"), Za = Symbol.for("v-stc"), wr = [];
let cn = null;
function ec(n = false) {
  wr.push(cn = n ? null : []);
}
function z_() {
  wr.pop(), cn = wr[wr.length - 1] || null;
}
let Fr = 1;
function yh(n, e = false) {
  Fr += n, n < 0 && cn && e && (cn.hasOnce = true);
}
function Op(n) {
  return n.dynamicChildren = Fr > 0 ? cn || Ds : null, z_(), Fr > 0 && cn && cn.push(n), n;
}
function mA(n, e, t, i, s, r) {
  return Op(Bp(n, e, t, i, s, r, true));
}
function tc(n, e, t, i, s) {
  return Op(Zt(n, e, t, i, s, true));
}
function Br(n) {
  return n ? n.__v_isVNode === true : false;
}
function ts(n, e) {
  return n.type === e.type && n.key === e.key;
}
const Fp = ({ key: n }) => n ?? null, Jo = ({ ref: n, ref_key: e, ref_for: t }) => (typeof n == "number" && (n = "" + n), n != null ? yt(n) || Gt(n) || We(n) ? { i: Lt, r: n, k: e, f: !!t } : n : null);
function Bp(n, e = null, t = null, i = 0, s = null, r = n === en ? 0 : 1, o = false, a = false) {
  const l = { __v_isVNode: true, __v_skip: true, type: n, props: e, key: e && Fp(e), ref: e && Jo(e), scopeId: ep, slotScopeIds: null, children: t, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: i, dynamicProps: s, dynamicChildren: null, appContext: null, ctx: Lt };
  return a ? (vu(l, t), r & 128 && n.normalize(l)) : t && (l.shapeFlag |= yt(t) ? 8 : 16), Fr > 0 && !o && cn && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && cn.push(l), l;
}
const Zt = H_;
function H_(n, e = null, t = null, i = 0, s = null, r = false) {
  if ((!n || n === _p) && (n = Vt), Br(n)) {
    const a = Di(n, e, true);
    return t && vu(a, t), Fr > 0 && !r && cn && (a.shapeFlag & 6 ? cn[cn.indexOf(n)] = a : cn.push(a)), a.patchFlag = -2, a;
  }
  if (Q_(n) && (n = n.__vccOpts), e) {
    e = V_(e);
    let { class: a, style: l } = e;
    a && !yt(a) && (e.class = ru(a)), gt(l) && (du(l) && !ze(l) && (l = wt({}, l)), e.style = su(l));
  }
  const o = yt(n) ? 1 : Up(n) ? 128 : np(n) ? 64 : gt(n) ? 4 : We(n) ? 2 : 0;
  return Bp(n, e, t, i, s, o, r, true);
}
function V_(n) {
  return n ? du(n) || Ep(n) ? wt({}, n) : n : null;
}
function Di(n, e, t = false, i = false) {
  const { props: s, ref: r, patchFlag: o, children: a, transition: l } = n, c = e ? G_(s || {}, e) : s, u = { __v_isVNode: true, __v_skip: true, type: n.type, props: c, key: c && Fp(c), ref: e && e.ref ? t && r ? ze(r) ? r.concat(Jo(e)) : [r, Jo(e)] : Jo(e) : r, scopeId: n.scopeId, slotScopeIds: n.slotScopeIds, children: a, target: n.target, targetStart: n.targetStart, targetAnchor: n.targetAnchor, staticCount: n.staticCount, shapeFlag: n.shapeFlag, patchFlag: e && n.type !== en ? o === -1 ? 16 : o | 16 : o, dynamicProps: n.dynamicProps, dynamicChildren: n.dynamicChildren, appContext: n.appContext, dirs: n.dirs, transition: l, component: n.component, suspense: n.suspense, ssContent: n.ssContent && Di(n.ssContent), ssFallback: n.ssFallback && Di(n.ssFallback), el: n.el, anchor: n.anchor, ctx: n.ctx, ce: n.ce };
  return l && i && os(u, l.clone(u)), u;
}
function k_(n = " ", e = 0) {
  return Zt(La, null, n, e);
}
function gA(n = "", e = false) {
  return e ? (ec(), tc(Vt, null, n)) : Zt(Vt, null, n);
}
function On(n) {
  return n == null || typeof n == "boolean" ? Zt(Vt) : ze(n) ? Zt(en, null, n.slice()) : Br(n) ? Ai(n) : Zt(La, null, String(n));
}
function Ai(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Di(n);
}
function vu(n, e) {
  let t = 0;
  const { shapeFlag: i } = n;
  if (e == null) e = null;
  else if (ze(e)) t = 16;
  else if (typeof e == "object") if (i & 65) {
    const s = e.default;
    s && (s._c && (s._d = false), vu(n, s()), s._c && (s._d = true));
    return;
  } else {
    t = 32;
    const s = e._;
    !s && !Ep(e) ? e._ctx = Lt : s === 3 && Lt && (Lt.slots._ === 1 ? e._ = 1 : (e._ = 2, n.patchFlag |= 1024));
  }
  else We(e) ? (e = { default: e, _ctx: Lt }, t = 32) : (e = String(e), i & 64 ? (t = 16, e = [k_(e)]) : t = 8);
  n.children = e, n.shapeFlag |= t;
}
function G_(...n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = n[t];
    for (const s in i) if (s === "class") e.class !== i.class && (e.class = ru([e.class, i.class]));
    else if (s === "style") e.style = su([e.style, i.style]);
    else if (Ma(s)) {
      const r = e[s], o = i[s];
      o && r !== o && !(ze(r) && r.includes(o)) && (e[s] = r ? [].concat(r, o) : o);
    } else s !== "" && (e[s] = i[s]);
  }
  return e;
}
function Dn(n, e, t, i = null) {
  Pn(n, e, 7, [t, i]);
}
const W_ = Sp();
let X_ = 0;
function Y_(n, e, t) {
  const i = n.type, s = (e ? e.appContext : n.appContext) || W_, r = { uid: X_++, vnode: n, type: i, parent: e, appContext: s, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Id(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: e ? e.provides : Object.create(s.provides), ids: e ? e.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: wp(i, s), emitsOptions: Np(i, s), emit: null, emitted: null, propsDefaults: ft, inheritAttrs: i.inheritAttrs, ctx: ft, data: ft, props: ft, attrs: ft, slots: ft, refs: ft, setupState: ft, setupContext: null, suspense: t, suspenseId: t ? t.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = D_.bind(null, r), n.ce && n.ce(r), r;
}
let Ut = null;
const zp = () => Ut || Lt;
let fa, nc;
{
  const n = Ea(), e = (t, i) => {
    let s;
    return (s = n[t]) || (s = n[t] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  fa = e("__VUE_INSTANCE_SETTERS__", (t) => Ut = t), nc = e("__VUE_SSR_SETTERS__", (t) => zr = t);
}
const Qr = (n) => {
  const e = Ut;
  return fa(n), n.scope.on(), () => {
    n.scope.off(), fa(e);
  };
}, Mh = () => {
  Ut && Ut.scope.off(), fa(null);
};
function Hp(n) {
  return n.vnode.shapeFlag & 4;
}
let zr = false;
function q_(n, e = false, t = false) {
  e && nc(e);
  const { props: i, children: s } = n.vnode, r = Hp(n);
  v_(n, i, r, e), b_(n, s, t || e);
  const o = r ? j_(n, e) : void 0;
  return e && nc(false), o;
}
function j_(n, e) {
  const t = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, u_);
  const { setup: i } = t;
  if (i) {
    ci();
    const s = n.setupContext = i.length > 1 ? Z_(n) : null, r = Qr(n), o = Jr(i, n, 0, [n.props, s]), a = Ed(o);
    if (ui(), r(), (a || n.sp) && !Fs(n) && up(n), a) {
      if (o.then(Mh, Mh), e) return o.then((l) => {
        Sh(n, l);
      }).catch((l) => {
        wa(l, n, 0);
      });
      n.asyncDep = o;
    } else Sh(n, o);
  } else Vp(n);
}
function Sh(n, e, t) {
  We(e) ? n.type.__ssrInlineRender ? n.ssrRender = e : n.render = e : gt(e) && (n.setupState = Kd(e)), Vp(n);
}
function Vp(n, e, t) {
  const i = n.type;
  n.render || (n.render = i.render || Hn);
  {
    const s = Qr(n);
    ci();
    try {
      h_(n);
    } finally {
      ui(), s();
    }
  }
}
const K_ = { get(n, e) {
  return Ht(n, "get", ""), n[e];
} };
function Z_(n) {
  const e = (t) => {
    n.exposed = t || {};
  };
  return { attrs: new Proxy(n.attrs, K_), slots: n.slots, emit: n.emit, expose: e };
}
function Ia(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Kd(zg(n.exposed)), { get(e, t) {
    if (t in e) return e[t];
    if (t in Ar) return Ar[t](n);
  }, has(e, t) {
    return t in e || t in Ar;
  } })) : n.proxy;
}
function J_(n, e = true) {
  return We(n) ? n.displayName || n.name : n.name || e && n.__name;
}
function Q_(n) {
  return We(n) && "__vccOpts" in n;
}
const $_ = (n, e) => Wg(n, e, zr);
function ex(n, e, t) {
  const i = arguments.length;
  return i === 2 ? gt(e) && !ze(e) ? Br(e) ? Zt(n, null, [e]) : Zt(n, e) : Zt(n, null, e) : (i > 3 ? t = Array.prototype.slice.call(arguments, 2) : i === 3 && Br(t) && (t = [t]), Zt(n, e, t));
}
const tx = "3.5.16";
/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ic;
const bh = typeof window < "u" && window.trustedTypes;
if (bh) try {
  ic = bh.createPolicy("vue", { createHTML: (n) => n });
} catch {
}
const kp = ic ? (n) => ic.createHTML(n) : (n) => n, nx = "http://www.w3.org/2000/svg", ix = "http://www.w3.org/1998/Math/MathML", ti = typeof document < "u" ? document : null, Th = ti && ti.createElement("template"), sx = { insert: (n, e, t) => {
  e.insertBefore(n, t || null);
}, remove: (n) => {
  const e = n.parentNode;
  e && e.removeChild(n);
}, createElement: (n, e, t, i) => {
  const s = e === "svg" ? ti.createElementNS(nx, n) : e === "mathml" ? ti.createElementNS(ix, n) : t ? ti.createElement(n, { is: t }) : ti.createElement(n);
  return n === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
}, createText: (n) => ti.createTextNode(n), createComment: (n) => ti.createComment(n), setText: (n, e) => {
  n.nodeValue = e;
}, setElementText: (n, e) => {
  n.textContent = e;
}, parentNode: (n) => n.parentNode, nextSibling: (n) => n.nextSibling, querySelector: (n) => ti.querySelector(n), setScopeId(n, e) {
  n.setAttribute(e, "");
}, insertStaticContent(n, e, t, i, s, r) {
  const o = t ? t.previousSibling : e.lastChild;
  if (s && (s === r || s.nextSibling)) for (; e.insertBefore(s.cloneNode(true), t), !(s === r || !(s = s.nextSibling)); ) ;
  else {
    Th.innerHTML = kp(i === "svg" ? `<svg>${n}</svg>` : i === "mathml" ? `<math>${n}</math>` : n);
    const a = Th.content;
    if (i === "svg" || i === "mathml") {
      const l = a.firstChild;
      for (; l.firstChild; ) a.appendChild(l.firstChild);
      a.removeChild(l);
    }
    e.insertBefore(a, t);
  }
  return [o ? o.nextSibling : e.firstChild, t ? t.previousSibling : e.lastChild];
} }, mi = "transition", ar = "animation", Ws = Symbol("_vtc"), Gp = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Wp = wt({}, op, Gp), rx = (n) => (n.displayName = "Transition", n.props = Wp, n), _A = rx((n, { slots: e }) => ex(e_, Xp(n), e)), Vi = (n, e = []) => {
  ze(n) ? n.forEach((t) => t(...e)) : n && n(...e);
}, Eh = (n) => n ? ze(n) ? n.some((e) => e.length > 1) : n.length > 1 : false;
function Xp(n) {
  const e = {};
  for (const O in n) O in Gp || (e[O] = n[O]);
  if (n.css === false) return e;
  const { name: t = "v", type: i, duration: s, enterFromClass: r = `${t}-enter-from`, enterActiveClass: o = `${t}-enter-active`, enterToClass: a = `${t}-enter-to`, appearFromClass: l = r, appearActiveClass: c = o, appearToClass: u = a, leaveFromClass: h = `${t}-leave-from`, leaveActiveClass: f = `${t}-leave-active`, leaveToClass: d = `${t}-leave-to` } = n, m = ox(s), _ = m && m[0], g = m && m[1], { onBeforeEnter: p, onEnter: E, onEnterCancelled: b, onLeave: x, onLeaveCancelled: P, onBeforeAppear: w = p, onAppear: C = E, onAppearCancelled: I = b } = e, S = (O, X, Q, ne) => {
    O._enterCancelled = ne, bi(O, X ? u : a), bi(O, X ? c : o), Q && Q();
  }, M = (O, X) => {
    O._isLeaving = false, bi(O, h), bi(O, d), bi(O, f), X && X();
  }, L = (O) => (X, Q) => {
    const ne = O ? C : E, Z = () => S(X, O, Q);
    Vi(ne, [X, Z]), Ah(() => {
      bi(X, O ? l : r), Nn(X, O ? u : a), Eh(ne) || wh(X, i, _, Z);
    });
  };
  return wt(e, { onBeforeEnter(O) {
    Vi(p, [O]), Nn(O, r), Nn(O, o);
  }, onBeforeAppear(O) {
    Vi(w, [O]), Nn(O, l), Nn(O, c);
  }, onEnter: L(false), onAppear: L(true), onLeave(O, X) {
    O._isLeaving = true;
    const Q = () => M(O, X);
    Nn(O, h), O._enterCancelled ? (Nn(O, f), sc()) : (sc(), Nn(O, f)), Ah(() => {
      O._isLeaving && (bi(O, h), Nn(O, d), Eh(x) || wh(O, i, g, Q));
    }), Vi(x, [O, Q]);
  }, onEnterCancelled(O) {
    S(O, false, void 0, true), Vi(b, [O]);
  }, onAppearCancelled(O) {
    S(O, true, void 0, true), Vi(I, [O]);
  }, onLeaveCancelled(O) {
    M(O), Vi(P, [O]);
  } });
}
function ox(n) {
  if (n == null) return null;
  if (gt(n)) return [Ja(n.enter), Ja(n.leave)];
  {
    const e = Ja(n);
    return [e, e];
  }
}
function Ja(n) {
  return hg(n);
}
function Nn(n, e) {
  e.split(/\s+/).forEach((t) => t && n.classList.add(t)), (n[Ws] || (n[Ws] = /* @__PURE__ */ new Set())).add(e);
}
function bi(n, e) {
  e.split(/\s+/).forEach((i) => i && n.classList.remove(i));
  const t = n[Ws];
  t && (t.delete(e), t.size || (n[Ws] = void 0));
}
function Ah(n) {
  requestAnimationFrame(() => {
    requestAnimationFrame(n);
  });
}
let ax = 0;
function wh(n, e, t, i) {
  const s = n._endId = ++ax, r = () => {
    s === n._endId && i();
  };
  if (t != null) return setTimeout(r, t);
  const { type: o, timeout: a, propCount: l } = Yp(n, e);
  if (!o) return i();
  const c = o + "end";
  let u = 0;
  const h = () => {
    n.removeEventListener(c, f), r();
  }, f = (d) => {
    d.target === n && ++u >= l && h();
  };
  setTimeout(() => {
    u < l && h();
  }, a + 1), n.addEventListener(c, f);
}
function Yp(n, e) {
  const t = window.getComputedStyle(n), i = (m) => (t[m] || "").split(", "), s = i(`${mi}Delay`), r = i(`${mi}Duration`), o = Rh(s, r), a = i(`${ar}Delay`), l = i(`${ar}Duration`), c = Rh(a, l);
  let u = null, h = 0, f = 0;
  e === mi ? o > 0 && (u = mi, h = o, f = r.length) : e === ar ? c > 0 && (u = ar, h = c, f = l.length) : (h = Math.max(o, c), u = h > 0 ? o > c ? mi : ar : null, f = u ? u === mi ? r.length : l.length : 0);
  const d = u === mi && /\b(transform|all)(,|$)/.test(i(`${mi}Property`).toString());
  return { type: u, timeout: h, propCount: f, hasTransform: d };
}
function Rh(n, e) {
  for (; n.length < e.length; ) n = n.concat(n);
  return Math.max(...e.map((t, i) => Ch(t) + Ch(n[i])));
}
function Ch(n) {
  return n === "auto" ? 0 : Number(n.slice(0, -1).replace(",", ".")) * 1e3;
}
function sc() {
  return document.body.offsetHeight;
}
function lx(n, e, t) {
  const i = n[Ws];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? n.removeAttribute("class") : t ? n.setAttribute("class", e) : n.className = e;
}
const da = Symbol("_vod"), qp = Symbol("_vsh"), xA = { beforeMount(n, { value: e }, { transition: t }) {
  n[da] = n.style.display === "none" ? "" : n.style.display, t && e ? t.beforeEnter(n) : lr(n, e);
}, mounted(n, { value: e }, { transition: t }) {
  t && e && t.enter(n);
}, updated(n, { value: e, oldValue: t }, { transition: i }) {
  !e != !t && (i ? e ? (i.beforeEnter(n), lr(n, true), i.enter(n)) : i.leave(n, () => {
    lr(n, false);
  }) : lr(n, e));
}, beforeUnmount(n, { value: e }) {
  lr(n, e);
} };
function lr(n, e) {
  n.style.display = e ? n[da] : "none", n[qp] = !e;
}
const cx = Symbol(""), ux = /(^|;)\s*display\s*:/;
function hx(n, e, t) {
  const i = n.style, s = yt(t);
  let r = false;
  if (t && !s) {
    if (e) if (yt(e)) for (const o of e.split(";")) {
      const a = o.slice(0, o.indexOf(":")).trim();
      t[a] == null && Qo(i, a, "");
    }
    else for (const o in e) t[o] == null && Qo(i, o, "");
    for (const o in t) o === "display" && (r = true), Qo(i, o, t[o]);
  } else if (s) {
    if (e !== t) {
      const o = i[cx];
      o && (t += ";" + o), i.cssText = t, r = ux.test(t);
    }
  } else e && n.removeAttribute("style");
  da in n && (n[da] = r ? i.display : "", n[qp] && (i.display = "none"));
}
const Ph = /\s*!important$/;
function Qo(n, e, t) {
  if (ze(t)) t.forEach((i) => Qo(n, e, i));
  else if (t == null && (t = ""), e.startsWith("--")) n.setProperty(e, t);
  else {
    const i = fx(n, e);
    Ph.test(t) ? n.setProperty(Ui(i), t.replace(Ph, ""), "important") : n[i] = t;
  }
}
const Lh = ["Webkit", "Moz", "ms"], Qa = {};
function fx(n, e) {
  const t = Qa[e];
  if (t) return t;
  let i = yn(e);
  if (i !== "filter" && i in n) return Qa[e] = i;
  i = Ta(i);
  for (let s = 0; s < Lh.length; s++) {
    const r = Lh[s] + i;
    if (r in n) return Qa[e] = r;
  }
  return e;
}
const Ih = "http://www.w3.org/1999/xlink";
function Dh(n, e, t, i, s, r = _g(e)) {
  i && e.startsWith("xlink:") ? t == null ? n.removeAttributeNS(Ih, e.slice(6, e.length)) : n.setAttributeNS(Ih, e, t) : t == null || r && !Cd(t) ? n.removeAttribute(e) : n.setAttribute(e, r ? "" : fi(t) ? String(t) : t);
}
function Nh(n, e, t, i, s) {
  if (e === "innerHTML" || e === "textContent") {
    t != null && (n[e] = e === "innerHTML" ? kp(t) : t);
    return;
  }
  const r = n.tagName;
  if (e === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const a = r === "OPTION" ? n.getAttribute("value") || "" : n.value, l = t == null ? n.type === "checkbox" ? "on" : "" : String(t);
    (a !== l || !("_value" in n)) && (n.value = l), t == null && n.removeAttribute(e), n._value = t;
    return;
  }
  let o = false;
  if (t === "" || t == null) {
    const a = typeof n[e];
    a === "boolean" ? t = Cd(t) : t == null && a === "string" ? (t = "", o = true) : a === "number" && (t = 0, o = true);
  }
  try {
    n[e] = t;
  } catch {
  }
  o && n.removeAttribute(s || e);
}
function Rs(n, e, t, i) {
  n.addEventListener(e, t, i);
}
function dx(n, e, t, i) {
  n.removeEventListener(e, t, i);
}
const Uh = Symbol("_vei");
function px(n, e, t, i, s = null) {
  const r = n[Uh] || (n[Uh] = {}), o = r[e];
  if (i && o) o.value = i;
  else {
    const [a, l] = mx(e);
    if (i) {
      const c = r[e] = xx(i, s);
      Rs(n, a, c, l);
    } else o && (dx(n, a, o, l), r[e] = void 0);
  }
}
const Oh = /(?:Once|Passive|Capture)$/;
function mx(n) {
  let e;
  if (Oh.test(n)) {
    e = {};
    let i;
    for (; i = n.match(Oh); ) n = n.slice(0, n.length - i[0].length), e[i[0].toLowerCase()] = true;
  }
  return [n[2] === ":" ? n.slice(3) : Ui(n.slice(2)), e];
}
let $a = 0;
const gx = Promise.resolve(), _x = () => $a || (gx.then(() => $a = 0), $a = Date.now());
function xx(n, e) {
  const t = (i) => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= t.attached) return;
    Pn(vx(i, t.value), e, 5, [i]);
  };
  return t.value = n, t.attached = _x(), t;
}
function vx(n, e) {
  if (ze(e)) {
    const t = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      t.call(n), n._stopped = true;
    }, e.map((i) => (s) => !s._stopped && i && i(s));
  } else return e;
}
const Fh = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, yx = (n, e, t, i, s, r) => {
  const o = s === "svg";
  e === "class" ? lx(n, i, o) : e === "style" ? hx(n, t, i) : Ma(e) ? tu(e) || px(n, e, t, i, r) : (e[0] === "." ? (e = e.slice(1), true) : e[0] === "^" ? (e = e.slice(1), false) : Mx(n, e, i, o)) ? (Nh(n, e, i), !n.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Dh(n, e, i, o, r, e !== "value")) : n._isVueCE && (/[A-Z]/.test(e) || !yt(i)) ? Nh(n, yn(e), i, r, e) : (e === "true-value" ? n._trueValue = i : e === "false-value" && (n._falseValue = i), Dh(n, e, i, o));
};
function Mx(n, e, t, i) {
  if (i) return !!(e === "innerHTML" || e === "textContent" || e in n && Fh(e) && We(t));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "form" || e === "list" && n.tagName === "INPUT" || e === "type" && n.tagName === "TEXTAREA") return false;
  if (e === "width" || e === "height") {
    const s = n.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return false;
  }
  return Fh(e) && yt(t) ? false : e in n;
}
const jp = /* @__PURE__ */ new WeakMap(), Kp = /* @__PURE__ */ new WeakMap(), pa = Symbol("_moveCb"), Bh = Symbol("_enterCb"), Sx = (n) => (delete n.props.mode, n), bx = Sx({ name: "TransitionGroup", props: wt({}, Wp, { tag: String, moveClass: String }), setup(n, { slots: e }) {
  const t = zp(), i = rp();
  let s, r;
  return dp(() => {
    if (!s.length) return;
    const o = n.moveClass || `${n.name || "v"}-move`;
    if (!wx(s[0].el, t.vnode.el, o)) {
      s = [];
      return;
    }
    s.forEach(Tx), s.forEach(Ex);
    const a = s.filter(Ax);
    sc(), a.forEach((l) => {
      const c = l.el, u = c.style;
      Nn(c, o), u.transform = u.webkitTransform = u.transitionDuration = "";
      const h = c[pa] = (f) => {
        f && f.target !== c || (!f || /transform$/.test(f.propertyName)) && (c.removeEventListener("transitionend", h), c[pa] = null, bi(c, o));
      };
      c.addEventListener("transitionend", h);
    }), s = [];
  }), () => {
    const o = nt(n), a = Xp(o);
    let l = o.tag || en;
    if (s = [], r) for (let c = 0; c < r.length; c++) {
      const u = r[c];
      u.el && u.el instanceof Element && (s.push(u), os(u, Or(u, a, i, t)), jp.set(u, u.el.getBoundingClientRect()));
    }
    r = e.default ? mu(e.default()) : [];
    for (let c = 0; c < r.length; c++) {
      const u = r[c];
      u.key != null && os(u, Or(u, a, i, t));
    }
    return Zt(l, null, r);
  };
} }), vA = bx;
function Tx(n) {
  const e = n.el;
  e[pa] && e[pa](), e[Bh] && e[Bh]();
}
function Ex(n) {
  Kp.set(n, n.el.getBoundingClientRect());
}
function Ax(n) {
  const e = jp.get(n), t = Kp.get(n), i = e.left - t.left, s = e.top - t.top;
  if (i || s) {
    const r = n.el.style;
    return r.transform = r.webkitTransform = `translate(${i}px,${s}px)`, r.transitionDuration = "0s", n;
  }
}
function wx(n, e, t) {
  const i = n.cloneNode(), s = n[Ws];
  s && s.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && i.classList.remove(l));
  }), t.split(/\s+/).forEach((a) => a && i.classList.add(a)), i.style.display = "none";
  const r = e.nodeType === 1 ? e : e.parentNode;
  r.appendChild(i);
  const { hasTransform: o } = Yp(i);
  return r.removeChild(i), o;
}
const zh = (n) => {
  const e = n.props["onUpdate:modelValue"] || false;
  return ze(e) ? (t) => jo(e, t) : e;
};
function Rx(n) {
  n.target.composing = true;
}
function Hh(n) {
  const e = n.target;
  e.composing && (e.composing = false, e.dispatchEvent(new Event("input")));
}
const el = Symbol("_assign"), yA = { created(n, { modifiers: { lazy: e, trim: t, number: i } }, s) {
  n[el] = zh(s);
  const r = i || s.props && s.props.type === "number";
  Rs(n, e ? "change" : "input", (o) => {
    if (o.target.composing) return;
    let a = n.value;
    t && (a = a.trim()), r && (a = Wl(a)), n[el](a);
  }), t && Rs(n, "change", () => {
    n.value = n.value.trim();
  }), e || (Rs(n, "compositionstart", Rx), Rs(n, "compositionend", Hh), Rs(n, "change", Hh));
}, mounted(n, { value: e }) {
  n.value = e ?? "";
}, beforeUpdate(n, { value: e, oldValue: t, modifiers: { lazy: i, trim: s, number: r } }, o) {
  if (n[el] = zh(o), n.composing) return;
  const a = (r || n.type === "number") && !/^0\d/.test(n.value) ? Wl(n.value) : n.value, l = e ?? "";
  a !== l && (document.activeElement === n && n.type !== "range" && (i && e === t || s && n.value.trim() === l) || (n.value = l));
} }, Cx = ["ctrl", "shift", "alt", "meta"], Px = { stop: (n) => n.stopPropagation(), prevent: (n) => n.preventDefault(), self: (n) => n.target !== n.currentTarget, ctrl: (n) => !n.ctrlKey, shift: (n) => !n.shiftKey, alt: (n) => !n.altKey, meta: (n) => !n.metaKey, left: (n) => "button" in n && n.button !== 0, middle: (n) => "button" in n && n.button !== 1, right: (n) => "button" in n && n.button !== 2, exact: (n, e) => Cx.some((t) => n[`${t}Key`] && !e.includes(t)) }, MA = (n, e) => {
  const t = n._withMods || (n._withMods = {}), i = e.join(".");
  return t[i] || (t[i] = (s, ...r) => {
    for (let o = 0; o < e.length; o++) {
      const a = Px[e[o]];
      if (a && a(s, e)) return;
    }
    return n(s, ...r);
  });
}, Lx = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" }, SA = (n, e) => {
  const t = n._withKeys || (n._withKeys = {}), i = e.join(".");
  return t[i] || (t[i] = (s) => {
    if (!("key" in s)) return;
    const r = Ui(s.key);
    if (e.some((o) => o === r || Lx[o] === r)) return n(s);
  });
}, Ix = wt({ patchProp: yx }, sx);
let Vh;
function Dx() {
  return Vh || (Vh = E_(Ix));
}
const bA = (...n) => {
  const e = Dx().createApp(...n), { mount: t } = e;
  return e.mount = (i) => {
    const s = Ux(i);
    if (!s) return;
    const r = e._component;
    !We(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = t(s, false, Nx(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, e;
};
function Nx(n) {
  if (n instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement) return "mathml";
}
function Ux(n) {
  return yt(n) ? document.querySelector(n) : n;
}
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const yu = "177", TA = { ROTATE: 0, DOLLY: 1, PAN: 2 }, EA = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Ox = 0, kh = 1, Fx = 2, Zp = 1, Bx = 2, ei = 3, hi = 0, sn = 1, Bn = 2, ai = 0, zs = 1, Gh = 2, Wh = 3, Xh = 4, zx = 5, ns = 100, Hx = 101, Vx = 102, kx = 103, Gx = 104, Wx = 200, Xx = 201, Yx = 202, qx = 203, rc = 204, oc = 205, jx = 206, Kx = 207, Zx = 208, Jx = 209, Qx = 210, $x = 211, ev = 212, tv = 213, nv = 214, ac = 0, lc = 1, cc = 2, Xs = 3, uc = 4, hc = 5, fc = 6, dc = 7, Mu = 0, iv = 1, sv = 2, Li = 0, Jp = 1, Qp = 2, $p = 3, em = 4, tm = 5, nm = 6, im = 7, Yh = "attached", rv = "detached", sm = 300, Ys = 301, qs = 302, pc = 303, mc = 304, Da = 306, js = 1e3, Ri = 1001, ma = 1002, Ot = 1003, rm = 1004, vr = 1005, nn = 1006, $o = 1007, ri = 1008, Vn = 1009, om = 1010, am = 1011, Hr = 1012, Su = 1013, as = 1014, Rn = 1015, Ni = 1016, bu = 1017, Tu = 1018, Vr = 1020, lm = 35902, cm = 1021, um = 1022, mn = 1023, kr = 1026, Gr = 1027, Eu = 1028, Au = 1029, hm = 1030, wu = 1031, Ru = 1033, ea = 33776, ta = 33777, na = 33778, ia = 33779, gc = 35840, _c = 35841, xc = 35842, vc = 35843, yc = 36196, Mc = 37492, Sc = 37496, bc = 37808, Tc = 37809, Ec = 37810, Ac = 37811, wc = 37812, Rc = 37813, Cc = 37814, Pc = 37815, Lc = 37816, Ic = 37817, Dc = 37818, Nc = 37819, Uc = 37820, Oc = 37821, sa = 36492, Fc = 36494, Bc = 36495, fm = 36283, zc = 36284, Hc = 36285, Vc = 36286, ov = 2200, av = 2201, lv = 2202, Wr = 2300, Xr = 2301, tl = 2302, Cs = 2400, Ps = 2401, ga = 2402, Cu = 2500, cv = 2501, uv = 0, dm = 1, kc = 2, hv = 3200, fv = 3201, Na = 0, dv = 1, wi = "", Dt = "srgb", Jt = "srgb-linear", _a = "linear", ct = "srgb", fs = 7680, qh = 519, pv = 512, mv = 513, gv = 514, pm = 515, _v = 516, xv = 517, vv = 518, yv = 519, Gc = 35044, jh = "300 es", zn = 2e3, xa = 2001;
class Oi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    const i = this._listeners;
    return i === void 0 ? false : i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const i = this._listeners;
    if (i === void 0) return;
    const s = i[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      const s = i.slice(0);
      for (let r = 0, o = s.length; r < o; r++) s[r].call(this, e);
      e.target = null;
    }
  }
}
const Bt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Kh = 1234567;
const Rr = Math.PI / 180, Ks = 180 / Math.PI;
function _n() {
  const n = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Bt[n & 255] + Bt[n >> 8 & 255] + Bt[n >> 16 & 255] + Bt[n >> 24 & 255] + "-" + Bt[e & 255] + Bt[e >> 8 & 255] + "-" + Bt[e >> 16 & 15 | 64] + Bt[e >> 24 & 255] + "-" + Bt[t & 63 | 128] + Bt[t >> 8 & 255] + "-" + Bt[t >> 16 & 255] + Bt[t >> 24 & 255] + Bt[i & 255] + Bt[i >> 8 & 255] + Bt[i >> 16 & 255] + Bt[i >> 24 & 255]).toLowerCase();
}
function qe(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function Pu(n, e) {
  return (n % e + e) % e;
}
function Mv(n, e, t, i, s) {
  return i + (n - e) * (s - i) / (t - e);
}
function Sv(n, e, t) {
  return n !== e ? (t - n) / (e - n) : 0;
}
function Cr(n, e, t) {
  return (1 - t) * n + t * e;
}
function bv(n, e, t, i) {
  return Cr(n, e, 1 - Math.exp(-t * i));
}
function Tv(n, e = 1) {
  return e - Math.abs(Pu(n, e * 2) - e);
}
function Ev(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * (3 - 2 * n));
}
function Av(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * n * (n * (n * 6 - 15) + 10));
}
function wv(n, e) {
  return n + Math.floor(Math.random() * (e - n + 1));
}
function Rv(n, e) {
  return n + Math.random() * (e - n);
}
function Cv(n) {
  return n * (0.5 - Math.random());
}
function Pv(n) {
  n !== void 0 && (Kh = n);
  let e = Kh += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Lv(n) {
  return n * Rr;
}
function Iv(n) {
  return n * Ks;
}
function Dv(n) {
  return (n & n - 1) === 0 && n !== 0;
}
function Nv(n) {
  return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2));
}
function Uv(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function Ov(n, e, t, i, s) {
  const r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + i) / 2), u = o((e + i) / 2), h = r((e - i) / 2), f = o((e - i) / 2), d = r((i - e) / 2), m = o((i - e) / 2);
  switch (s) {
    case "XYX":
      n.set(a * u, l * h, l * f, a * c);
      break;
    case "YZY":
      n.set(l * f, a * u, l * h, a * c);
      break;
    case "ZXZ":
      n.set(l * h, l * f, a * u, a * c);
      break;
    case "XZX":
      n.set(a * u, l * m, l * d, a * c);
      break;
    case "YXY":
      n.set(l * d, a * u, l * m, a * c);
      break;
    case "ZYZ":
      n.set(l * m, l * d, a * u, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function An(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ut(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Fv = { DEG2RAD: Rr, RAD2DEG: Ks, generateUUID: _n, clamp: qe, euclideanModulo: Pu, mapLinear: Mv, inverseLerp: Sv, lerp: Cr, damp: bv, pingpong: Tv, smoothstep: Ev, smootherstep: Av, randInt: wv, randFloat: Rv, randFloatSpread: Cv, seededRandom: Pv, degToRad: Lv, radToDeg: Iv, isPowerOfTwo: Dv, ceilPowerOfTwo: Nv, floorPowerOfTwo: Uv, setQuaternionFromProperEuler: Ov, normalize: ut, denormalize: An };
class fe {
  constructor(e = 0, t = 0) {
    fe.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * i + s[6], this.y = s[1] * t + s[4] * i + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = qe(this.x, e.x, t.x), this.y = qe(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = qe(this.x, e, t), this.y = qe(this.y, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(qe(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(qe(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t), s = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * i - o * s + e.x, this.y = r * s + o * i + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class xn {
  constructor(e = 0, t = 0, i = 0, s = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = i, this._w = s;
  }
  static slerpFlat(e, t, i, s, r, o, a) {
    let l = i[s + 0], c = i[s + 1], u = i[s + 2], h = i[s + 3];
    const f = r[o + 0], d = r[o + 1], m = r[o + 2], _ = r[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = d, e[t + 2] = m, e[t + 3] = _;
      return;
    }
    if (h !== _ || l !== f || c !== d || u !== m) {
      let g = 1 - a;
      const p = l * f + c * d + u * m + h * _, E = p >= 0 ? 1 : -1, b = 1 - p * p;
      if (b > Number.EPSILON) {
        const P = Math.sqrt(b), w = Math.atan2(P, p * E);
        g = Math.sin(g * w) / P, a = Math.sin(a * w) / P;
      }
      const x = a * E;
      if (l = l * g + f * x, c = c * g + d * x, u = u * g + m * x, h = h * g + _ * x, g === 1 - a) {
        const P = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= P, c *= P, u *= P, h *= P;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, i, s, r, o) {
    const a = i[s], l = i[s + 1], c = i[s + 2], u = i[s + 3], h = r[o], f = r[o + 1], d = r[o + 2], m = r[o + 3];
    return e[t] = a * m + u * h + l * d - c * f, e[t + 1] = l * m + u * f + c * h - a * d, e[t + 2] = c * m + u * d + a * f - l * h, e[t + 3] = u * m - a * h - l * f - c * d, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, i, s) {
    return this._x = e, this._y = t, this._z = i, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const i = e._x, s = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(i / 2), u = a(s / 2), h = a(r / 2), f = l(i / 2), d = l(s / 2), m = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = f * u * h + c * d * m, this._y = c * d * h - f * u * m, this._z = c * u * m + f * d * h, this._w = c * u * h - f * d * m;
        break;
      case "YXZ":
        this._x = f * u * h + c * d * m, this._y = c * d * h - f * u * m, this._z = c * u * m - f * d * h, this._w = c * u * h + f * d * m;
        break;
      case "ZXY":
        this._x = f * u * h - c * d * m, this._y = c * d * h + f * u * m, this._z = c * u * m + f * d * h, this._w = c * u * h - f * d * m;
        break;
      case "ZYX":
        this._x = f * u * h - c * d * m, this._y = c * d * h + f * u * m, this._z = c * u * m - f * d * h, this._w = c * u * h + f * d * m;
        break;
      case "YZX":
        this._x = f * u * h + c * d * m, this._y = c * d * h + f * u * m, this._z = c * u * m - f * d * h, this._w = c * u * h - f * d * m;
        break;
      case "XZY":
        this._x = f * u * h - c * d * m, this._y = c * d * h - f * u * m, this._z = c * u * m + f * d * h, this._w = c * u * h + f * d * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, s = Math.sin(i);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], s = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], h = t[10], f = i + a + h;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (u - l) * d, this._y = (r - c) * d, this._z = (o - s) * d;
    } else if (i > a && i > h) {
      const d = 2 * Math.sqrt(1 + i - a - h);
      this._w = (u - l) / d, this._x = 0.25 * d, this._y = (s + o) / d, this._z = (r + c) / d;
    } else if (a > h) {
      const d = 2 * Math.sqrt(1 + a - i - h);
      this._w = (r - c) / d, this._x = (s + o) / d, this._y = 0.25 * d, this._z = (l + u) / d;
    } else {
      const d = 2 * Math.sqrt(1 + h - i - a);
      this._w = (o - s) / d, this._x = (r + c) / d, this._y = (l + u) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < Number.EPSILON ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(qe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const s = Math.min(1, t / i);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x, s = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = i * u + o * a + s * c - r * l, this._y = s * u + o * l + r * a - i * c, this._z = r * u + o * c + i * l - s * a, this._w = o * u - i * a - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x, s = this._y, r = this._z, o = this._w;
    let a = o * e._w + i * e._x + s * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = i, this._y = s, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return this._w = d * o + t * this._w, this._x = d * i + t * this._x, this._y = d * s + t * this._y, this._z = d * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, a), h = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
    return this._w = o * h + this._w * f, this._x = i * h + this._x * f, this._y = s * h + this._y * f, this._z = r * h + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), s = Math.sqrt(1 - i), r = Math.sqrt(i);
    return this.set(s * Math.sin(e), s * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class N {
  constructor(e = 0, t = 0, i = 0) {
    N.prototype.isVector3 = true, this.x = e, this.y = t, this.z = i;
  }
  set(e, t, i) {
    return i === void 0 && (i = this.z), this.x = e, this.y = t, this.z = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Zh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Zh.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * i + r[6] * s, this.y = r[1] * t + r[4] * i + r[7] * s, this.z = r[2] * t + r[5] * i + r[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, s = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * i + r[11] * s + r[15]);
    return this.x = (r[0] * t + r[4] * i + r[8] * s + r[12]) * o, this.y = (r[1] * t + r[5] * i + r[9] * s + r[13]) * o, this.z = (r[2] * t + r[6] * i + r[10] * s + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, i = this.y, s = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * s - a * i), u = 2 * (a * t - r * s), h = 2 * (r * i - o * t);
    return this.x = t + l * c + o * h - a * u, this.y = i + l * u + a * c - r * h, this.z = s + l * h + r * u - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, i = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * i + r[8] * s, this.y = r[1] * t + r[5] * i + r[9] * s, this.z = r[2] * t + r[6] * i + r[10] * s, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = qe(this.x, e.x, t.x), this.y = qe(this.y, e.y, t.y), this.z = qe(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = qe(this.x, e, t), this.y = qe(this.y, e, t), this.z = qe(this.z, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(qe(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x, s = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = s * l - r * a, this.y = r * o - i * l, this.z = i * a - s * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return nl.copy(this).projectOnVector(e), this.sub(nl);
  }
  reflect(e) {
    return this.sub(nl.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(qe(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y, s = this.z - e.z;
    return t * t + i * i + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(i), this.y = Math.cos(t) * e, this.z = s * Math.cos(i), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = i, this.z = s, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, i = Math.sqrt(1 - t * t);
    return this.x = i * Math.cos(e), this.y = t, this.z = i * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const nl = new N(), Zh = new xn();
class je {
  constructor(e, t, i, s, r, o, a, l, c) {
    je.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, o, a, l, c);
  }
  set(e, t, i, s, r, o, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = s, u[2] = a, u[3] = t, u[4] = r, u[5] = l, u[6] = i, u[7] = o, u[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, s = t.elements, r = this.elements, o = i[0], a = i[3], l = i[6], c = i[1], u = i[4], h = i[7], f = i[2], d = i[5], m = i[8], _ = s[0], g = s[3], p = s[6], E = s[1], b = s[4], x = s[7], P = s[2], w = s[5], C = s[8];
    return r[0] = o * _ + a * E + l * P, r[3] = o * g + a * b + l * w, r[6] = o * p + a * x + l * C, r[1] = c * _ + u * E + h * P, r[4] = c * g + u * b + h * w, r[7] = c * p + u * x + h * C, r[2] = f * _ + d * E + m * P, r[5] = f * g + d * b + m * w, r[8] = f * p + d * x + m * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * o * u - t * a * c - i * r * u + i * a * l + s * r * c - s * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * o - a * c, f = a * l - u * r, d = c * r - o * l, m = t * h + i * f + s * d;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / m;
    return e[0] = h * _, e[1] = (s * c - u * i) * _, e[2] = (a * i - s * o) * _, e[3] = f * _, e[4] = (u * t - s * l) * _, e[5] = (s * r - a * t) * _, e[6] = d * _, e[7] = (i * l - c * t) * _, e[8] = (o * t - i * r) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, i, s, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(i * l, i * c, -i * (l * o + c * a) + o + e, -s * c, s * l, -s * (-c * o + l * a) + a + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(il.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(il.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(il.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, -i, 0, i, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let s = 0; s < 9; s++) if (t[s] !== i[s]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const il = new je();
function mm(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return true;
  return false;
}
function Yr(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function Bv() {
  const n = Yr("canvas");
  return n.style.display = "block", n;
}
const Jh = {};
function Hs(n) {
  n in Jh || (Jh[n] = true, console.warn(n));
}
function zv(n, e, t) {
  return new Promise(function(i, s) {
    function r() {
      switch (n.clientWaitSync(e, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case n.WAIT_FAILED:
          s();
          break;
        case n.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          i();
      }
    }
    setTimeout(r, t);
  });
}
function Hv(n) {
  const e = n.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Vv(n) {
  const e = n.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Qh = new je().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), $h = new je().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function kv() {
  const n = { enabled: true, workingColorSpace: Jt, spaces: {}, convert: function(s, r, o) {
    return this.enabled === false || r === o || !r || !o || (this.spaces[r].transfer === ct && (s.r = li(s.r), s.g = li(s.g), s.b = li(s.b)), this.spaces[r].primaries !== this.spaces[o].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === ct && (s.r = Vs(s.r), s.g = Vs(s.g), s.b = Vs(s.b))), s;
  }, workingToColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, colorSpaceToWorking: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === wi ? _a : this.spaces[s].transfer;
  }, getLuminanceCoefficients: function(s, r = this.workingColorSpace) {
    return s.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(s) {
    Object.assign(this.spaces, s);
  }, _getMatrix: function(s, r, o) {
    return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ);
  }, _getDrawingBufferColorSpace: function(s) {
    return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(s = this.workingColorSpace) {
    return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(s, r) {
    return Hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), n.workingToColorSpace(s, r);
  }, toWorkingColorSpace: function(s, r) {
    return Hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), n.colorSpaceToWorking(s, r);
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], i = [0.3127, 0.329];
  return n.define({ [Jt]: { primaries: e, whitePoint: i, transfer: _a, toXYZ: Qh, fromXYZ: $h, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Dt }, outputColorSpaceConfig: { drawingBufferColorSpace: Dt } }, [Dt]: { primaries: e, whitePoint: i, transfer: ct, toXYZ: Qh, fromXYZ: $h, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Dt } } }), n;
}
const $e = kv();
function li(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function Vs(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let ds;
class Gv {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let i;
    if (e instanceof HTMLCanvasElement) i = e;
    else {
      ds === void 0 && (ds = Yr("canvas")), ds.width = e.width, ds.height = e.height;
      const s = ds.getContext("2d");
      e instanceof ImageData ? s.putImageData(e, 0, 0) : s.drawImage(e, 0, 0, e.width, e.height), i = ds;
    }
    return i.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Yr("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const s = i.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let o = 0; o < r.length; o++) r[o] = li(r[o] / 255) * 255;
      return i.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(li(t[i] / 255) * 255) : t[i] = li(t[i]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Wv = 0;
class Lu {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Wv++ }), this.uuid = _n(), this.data = e, this.dataReady = true, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let o = 0, a = s.length; o < a; o++) s[o].isDataTexture ? r.push(sl(s[o].image)) : r.push(sl(s[o]));
      } else r = sl(s);
      i.url = r;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function sl(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? Gv.getDataURL(n) : n.data ? { data: Array.from(n.data), width: n.width, height: n.height, type: n.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Xv = 0;
const rl = new N();
class At extends Oi {
  constructor(e = At.DEFAULT_IMAGE, t = At.DEFAULT_MAPPING, i = Ri, s = Ri, r = nn, o = ri, a = mn, l = Vn, c = At.DEFAULT_ANISOTROPY, u = wi) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Xv++ }), this.uuid = _n(), this.name = "", this.source = new Lu(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new fe(0, 0), this.repeat = new fe(1, 1), this.center = new fe(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new je(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(rl).x;
  }
  get height() {
    return this.source.getSize(rl).y;
  }
  get depth() {
    return this.source.getSize(rl).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  setValues(e) {
    for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      s && i && s.isVector2 && i.isVector2 || s && i && s.isVector3 && i.isVector3 || s && i && s.isMatrix3 && i.isMatrix3 ? s.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== sm) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case js:
        e.x = e.x - Math.floor(e.x);
        break;
      case Ri:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case ma:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case js:
        e.y = e.y - Math.floor(e.y);
        break;
      case Ri:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case ma:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
At.DEFAULT_IMAGE = null;
At.DEFAULT_MAPPING = sm;
At.DEFAULT_ANISOTROPY = 1;
class it {
  constructor(e = 0, t = 0, i = 0, s = 1) {
    it.prototype.isVector4 = true, this.x = e, this.y = t, this.z = i, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, s) {
    return this.x = e, this.y = t, this.z = i, this.w = s, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, s = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * i + o[8] * s + o[12] * r, this.y = o[1] * t + o[5] * i + o[9] * s + o[13] * r, this.z = o[2] * t + o[6] * i + o[10] * s + o[14] * r, this.w = o[3] * t + o[7] * i + o[11] * s + o[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, s, r;
    const l = e.elements, c = l[0], u = l[4], h = l[8], f = l[1], d = l[5], m = l[9], _ = l[2], g = l[6], p = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - _) < 0.01 && Math.abs(m - g) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + _) < 0.1 && Math.abs(m + g) < 0.1 && Math.abs(c + d + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (c + 1) / 2, x = (d + 1) / 2, P = (p + 1) / 2, w = (u + f) / 4, C = (h + _) / 4, I = (m + g) / 4;
      return b > x && b > P ? b < 0.01 ? (i = 0, s = 0.707106781, r = 0.707106781) : (i = Math.sqrt(b), s = w / i, r = C / i) : x > P ? x < 0.01 ? (i = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(x), i = w / s, r = I / s) : P < 0.01 ? (i = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(P), i = C / r, s = I / r), this.set(i, s, r, t), this;
    }
    let E = Math.sqrt((g - m) * (g - m) + (h - _) * (h - _) + (f - u) * (f - u));
    return Math.abs(E) < 1e-3 && (E = 1), this.x = (g - m) / E, this.y = (h - _) / E, this.z = (f - u) / E, this.w = Math.acos((c + d + p - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = qe(this.x, e.x, t.x), this.y = qe(this.y, e.y, t.y), this.z = qe(this.z, e.z, t.z), this.w = qe(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = qe(this.x, e, t), this.y = qe(this.y, e, t), this.z = qe(this.z, e, t), this.w = qe(this.w, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(qe(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Yv extends Oi {
  constructor(e = 1, t = 1, i = {}) {
    super(), i = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: nn, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, i), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = i.depth, this.scissor = new it(0, 0, e, t), this.scissorTest = false, this.viewport = new it(0, 0, e, t);
    const s = { width: e, height: t, depth: i.depth }, r = new At(s);
    this.textures = [];
    const o = i.count;
    for (let a = 0; a < o; a++) this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = true, this.textures[a].renderTarget = this;
    this._setTextureOptions(i), this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples, this.multiview = i.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = { minFilter: nn, generateMipmaps: false, flipY: false, internalFormat: null };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let i = 0; i < this.textures.length; i++) this.textures[i].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = i, this.textures[s].isArrayTexture = this.textures[s].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, i = e.textures.length; t < i; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = true, this.textures[t].renderTarget = this;
      const s = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Lu(s);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class kn extends Yv {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = true;
  }
}
class gm extends At {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Ot, this.minFilter = Ot, this.wrapR = Ri, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class qv extends At {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Ot, this.minFilter = Ot, this.wrapR = Ri, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class pi {
  constructor(e = new N(1 / 0, 1 / 0, 1 / 0), t = new N(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3) this.expandByPoint(bn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++) this.expandByPoint(bn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = bn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const i = e.geometry;
    if (i !== void 0) {
      const r = i.getAttribute("position");
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = r.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, bn) : bn.fromBufferAttribute(r, o), bn.applyMatrix4(e.matrixWorld), this.expandByPoint(bn);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), uo.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), uo.copy(i.boundingBox)), uo.applyMatrix4(e.matrixWorld), this.union(uo);
    }
    const s = e.children;
    for (let r = 0, o = s.length; r < o; r++) this.expandByObject(s[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, bn), bn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(cr), ho.subVectors(this.max, cr), ps.subVectors(e.a, cr), ms.subVectors(e.b, cr), gs.subVectors(e.c, cr), gi.subVectors(ms, ps), _i.subVectors(gs, ms), ki.subVectors(ps, gs);
    let t = [0, -gi.z, gi.y, 0, -_i.z, _i.y, 0, -ki.z, ki.y, gi.z, 0, -gi.x, _i.z, 0, -_i.x, ki.z, 0, -ki.x, -gi.y, gi.x, 0, -_i.y, _i.x, 0, -ki.y, ki.x, 0];
    return !ol(t, ps, ms, gs, ho) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ol(t, ps, ms, gs, ho)) ? false : (fo.crossVectors(gi, _i), t = [fo.x, fo.y, fo.z], ol(t, ps, ms, gs, ho));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, bn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(bn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (jn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), jn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), jn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), jn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), jn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), jn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), jn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), jn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(jn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const jn = [new N(), new N(), new N(), new N(), new N(), new N(), new N(), new N()], bn = new N(), uo = new pi(), ps = new N(), ms = new N(), gs = new N(), gi = new N(), _i = new N(), ki = new N(), cr = new N(), ho = new N(), fo = new N(), Gi = new N();
function ol(n, e, t, i, s) {
  for (let r = 0, o = n.length - 3; r <= o; r += 3) {
    Gi.fromArray(n, r);
    const a = s.x * Math.abs(Gi.x) + s.y * Math.abs(Gi.y) + s.z * Math.abs(Gi.z), l = e.dot(Gi), c = t.dot(Gi), u = i.dot(Gi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return false;
  }
  return true;
}
const jv = new pi(), ur = new N(), al = new N();
class Gn {
  constructor(e = new N(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : jv.setFromPoints(e).getCenter(i);
    let s = 0;
    for (let r = 0, o = e.length; r < o; r++) s = Math.max(s, i.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    ur.subVectors(e, this.center);
    const t = ur.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), s = (i - this.radius) * 0.5;
      this.center.addScaledVector(ur, s / i), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (al.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ur.copy(e.center).add(al)), this.expandByPoint(ur.copy(e.center).sub(al))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
const Kn = new N(), ll = new N(), po = new N(), xi = new N(), cl = new N(), mo = new N(), ul = new N();
class $r {
  constructor(e = new N(), t = new N(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Kn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Kn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Kn.copy(this.origin).addScaledVector(this.direction, t), Kn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, s) {
    ll.copy(e).add(t).multiplyScalar(0.5), po.copy(t).sub(e).normalize(), xi.copy(this.origin).sub(ll);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(po), a = xi.dot(this.direction), l = -xi.dot(po), c = xi.lengthSq(), u = Math.abs(1 - o * o);
    let h, f, d, m;
    if (u > 0) if (h = o * l - a, f = o * a - l, m = r * u, h >= 0) if (f >= -m) if (f <= m) {
      const _ = 1 / u;
      h *= _, f *= _, d = h * (h + o * f + 2 * a) + f * (o * h + f + 2 * l) + c;
    } else f = r, h = Math.max(0, -(o * f + a)), d = -h * h + f * (f + 2 * l) + c;
    else f = -r, h = Math.max(0, -(o * f + a)), d = -h * h + f * (f + 2 * l) + c;
    else f <= -m ? (h = Math.max(0, -(-o * r + a)), f = h > 0 ? -r : Math.min(Math.max(-r, -l), r), d = -h * h + f * (f + 2 * l) + c) : f <= m ? (h = 0, f = Math.min(Math.max(-r, -l), r), d = f * (f + 2 * l) + c) : (h = Math.max(0, -(o * r + a)), f = h > 0 ? r : Math.min(Math.max(-r, -l), r), d = -h * h + f * (f + 2 * l) + c);
    else f = o > 0 ? -r : r, h = Math.max(0, -(o * f + a)), d = -h * h + f * (f + 2 * l) + c;
    return i && i.copy(this.origin).addScaledVector(this.direction, h), s && s.copy(ll).addScaledVector(po, f), d;
  }
  intersectSphere(e, t) {
    Kn.subVectors(e.center, this.origin);
    const i = Kn.dot(this.direction), s = Kn.dot(Kn) - i * i, r = e.radius * e.radius;
    if (s > r) return null;
    const o = Math.sqrt(r - s), a = i - o, l = i + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? false : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, s, r, o, a, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (i = (e.min.x - f.x) * c, s = (e.max.x - f.x) * c) : (i = (e.max.x - f.x) * c, s = (e.min.x - f.x) * c), u >= 0 ? (r = (e.min.y - f.y) * u, o = (e.max.y - f.y) * u) : (r = (e.max.y - f.y) * u, o = (e.min.y - f.y) * u), i > o || r > s || ((r > i || isNaN(i)) && (i = r), (o < s || isNaN(s)) && (s = o), h >= 0 ? (a = (e.min.z - f.z) * h, l = (e.max.z - f.z) * h) : (a = (e.max.z - f.z) * h, l = (e.min.z - f.z) * h), i > l || a > s) || ((a > i || i !== i) && (i = a), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(i >= 0 ? i : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Kn) !== null;
  }
  intersectTriangle(e, t, i, s, r) {
    cl.subVectors(t, e), mo.subVectors(i, e), ul.crossVectors(cl, mo);
    let o = this.direction.dot(ul), a;
    if (o > 0) {
      if (s) return null;
      a = 1;
    } else if (o < 0) a = -1, o = -o;
    else return null;
    xi.subVectors(this.origin, e);
    const l = a * this.direction.dot(mo.crossVectors(xi, mo));
    if (l < 0) return null;
    const c = a * this.direction.dot(cl.cross(xi));
    if (c < 0 || l + c > o) return null;
    const u = -a * xi.dot(ul);
    return u < 0 ? null : this.at(u / o, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ye {
  constructor(e, t, i, s, r, o, a, l, c, u, h, f, d, m, _, g) {
    Ye.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, o, a, l, c, u, h, f, d, m, _, g);
  }
  set(e, t, i, s, r, o, a, l, c, u, h, f, d, m, _, g) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = i, p[12] = s, p[1] = r, p[5] = o, p[9] = a, p[13] = l, p[2] = c, p[6] = u, p[10] = h, p[14] = f, p[3] = d, p[7] = m, p[11] = _, p[15] = g, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ye().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this;
  }
  copyPosition(e) {
    const t = this.elements, i = e.elements;
    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, i) {
    return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, i = e.elements, s = 1 / _s.setFromMatrixColumn(e, 0).length(), r = 1 / _s.setFromMatrixColumn(e, 1).length(), o = 1 / _s.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * s, t[1] = i[1] * s, t[2] = i[2] * s, t[3] = 0, t[4] = i[4] * r, t[5] = i[5] * r, t[6] = i[6] * r, t[7] = 0, t[8] = i[8] * o, t[9] = i[9] * o, t[10] = i[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, s = e.y, r = e.z, o = Math.cos(i), a = Math.sin(i), l = Math.cos(s), c = Math.sin(s), u = Math.cos(r), h = Math.sin(r);
    if (e.order === "XYZ") {
      const f = o * u, d = o * h, m = a * u, _ = a * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = d + m * c, t[5] = f - _ * c, t[9] = -a * l, t[2] = _ - f * c, t[6] = m + d * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const f = l * u, d = l * h, m = c * u, _ = c * h;
      t[0] = f + _ * a, t[4] = m * a - d, t[8] = o * c, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = d * a - m, t[6] = _ + f * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const f = l * u, d = l * h, m = c * u, _ = c * h;
      t[0] = f - _ * a, t[4] = -o * h, t[8] = m + d * a, t[1] = d + m * a, t[5] = o * u, t[9] = _ - f * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const f = o * u, d = o * h, m = a * u, _ = a * h;
      t[0] = l * u, t[4] = m * c - d, t[8] = f * c + _, t[1] = l * h, t[5] = _ * c + f, t[9] = d * c - m, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const f = o * l, d = o * c, m = a * l, _ = a * c;
      t[0] = l * u, t[4] = _ - f * h, t[8] = m * h + d, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = d * h + m, t[10] = f - _ * h;
    } else if (e.order === "XZY") {
      const f = o * l, d = o * c, m = a * l, _ = a * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = f * h + _, t[5] = o * u, t[9] = d * h - m, t[2] = m * h - d, t[6] = a * u, t[10] = _ * h + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Kv, e, Zv);
  }
  lookAt(e, t, i) {
    const s = this.elements;
    return an.subVectors(e, t), an.lengthSq() === 0 && (an.z = 1), an.normalize(), vi.crossVectors(i, an), vi.lengthSq() === 0 && (Math.abs(i.z) === 1 ? an.x += 1e-4 : an.z += 1e-4, an.normalize(), vi.crossVectors(i, an)), vi.normalize(), go.crossVectors(an, vi), s[0] = vi.x, s[4] = go.x, s[8] = an.x, s[1] = vi.y, s[5] = go.y, s[9] = an.y, s[2] = vi.z, s[6] = go.z, s[10] = an.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, s = t.elements, r = this.elements, o = i[0], a = i[4], l = i[8], c = i[12], u = i[1], h = i[5], f = i[9], d = i[13], m = i[2], _ = i[6], g = i[10], p = i[14], E = i[3], b = i[7], x = i[11], P = i[15], w = s[0], C = s[4], I = s[8], S = s[12], M = s[1], L = s[5], O = s[9], X = s[13], Q = s[2], ne = s[6], Z = s[10], se = s[14], j = s[3], de = s[7], xe = s[11], be = s[15];
    return r[0] = o * w + a * M + l * Q + c * j, r[4] = o * C + a * L + l * ne + c * de, r[8] = o * I + a * O + l * Z + c * xe, r[12] = o * S + a * X + l * se + c * be, r[1] = u * w + h * M + f * Q + d * j, r[5] = u * C + h * L + f * ne + d * de, r[9] = u * I + h * O + f * Z + d * xe, r[13] = u * S + h * X + f * se + d * be, r[2] = m * w + _ * M + g * Q + p * j, r[6] = m * C + _ * L + g * ne + p * de, r[10] = m * I + _ * O + g * Z + p * xe, r[14] = m * S + _ * X + g * se + p * be, r[3] = E * w + b * M + x * Q + P * j, r[7] = E * C + b * L + x * ne + P * de, r[11] = E * I + b * O + x * Z + P * xe, r[15] = E * S + b * X + x * se + P * be, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[4], s = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], h = e[6], f = e[10], d = e[14], m = e[3], _ = e[7], g = e[11], p = e[15];
    return m * (+r * l * h - s * c * h - r * a * f + i * c * f + s * a * d - i * l * d) + _ * (+t * l * d - t * c * f + r * o * f - s * o * d + s * c * u - r * l * u) + g * (+t * c * h - t * a * d - r * o * h + i * o * d + r * a * u - i * c * u) + p * (-s * a * u - t * l * h + t * a * f + s * o * h - i * o * f + i * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, i) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = i), this;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], f = e[10], d = e[11], m = e[12], _ = e[13], g = e[14], p = e[15], E = h * g * c - _ * f * c + _ * l * d - a * g * d - h * l * p + a * f * p, b = m * f * c - u * g * c - m * l * d + o * g * d + u * l * p - o * f * p, x = u * _ * c - m * h * c + m * a * d - o * _ * d - u * a * p + o * h * p, P = m * h * l - u * _ * l - m * a * f + o * _ * f + u * a * g - o * h * g, w = t * E + i * b + s * x + r * P;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / w;
    return e[0] = E * C, e[1] = (_ * f * r - h * g * r - _ * s * d + i * g * d + h * s * p - i * f * p) * C, e[2] = (a * g * r - _ * l * r + _ * s * c - i * g * c - a * s * p + i * l * p) * C, e[3] = (h * l * r - a * f * r - h * s * c + i * f * c + a * s * d - i * l * d) * C, e[4] = b * C, e[5] = (u * g * r - m * f * r + m * s * d - t * g * d - u * s * p + t * f * p) * C, e[6] = (m * l * r - o * g * r - m * s * c + t * g * c + o * s * p - t * l * p) * C, e[7] = (o * f * r - u * l * r + u * s * c - t * f * c - o * s * d + t * l * d) * C, e[8] = x * C, e[9] = (m * h * r - u * _ * r - m * i * d + t * _ * d + u * i * p - t * h * p) * C, e[10] = (o * _ * r - m * a * r + m * i * c - t * _ * c - o * i * p + t * a * p) * C, e[11] = (u * a * r - o * h * r - u * i * c + t * h * c + o * i * d - t * a * d) * C, e[12] = P * C, e[13] = (u * _ * s - m * h * s + m * i * f - t * _ * f - u * i * g + t * h * g) * C, e[14] = (m * a * s - o * _ * s - m * i * l + t * _ * l + o * i * g - t * a * g) * C, e[15] = (o * h * s - u * a * s + u * i * l - t * h * l - o * i * f + t * a * f) * C, this;
  }
  scale(e) {
    const t = this.elements, i = e.x, s = e.y, r = e.z;
    return t[0] *= i, t[4] *= s, t[8] *= r, t[1] *= i, t[5] *= s, t[9] *= r, t[2] *= i, t[6] *= s, t[10] *= r, t[3] *= i, t[7] *= s, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, s));
  }
  makeTranslation(e, t, i) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t), s = Math.sin(t), r = 1 - i, o = e.x, a = e.y, l = e.z, c = r * o, u = r * a;
    return this.set(c * o + i, c * a - s * l, c * l + s * a, 0, c * a + s * l, u * a + i, u * l - s * o, 0, c * l - s * a, u * l + s * o, r * l * l + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, s, r, o) {
    return this.set(1, i, r, 0, e, 1, o, 0, t, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const s = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, u = o + o, h = a + a, f = r * c, d = r * u, m = r * h, _ = o * u, g = o * h, p = a * h, E = l * c, b = l * u, x = l * h, P = i.x, w = i.y, C = i.z;
    return s[0] = (1 - (_ + p)) * P, s[1] = (d + x) * P, s[2] = (m - b) * P, s[3] = 0, s[4] = (d - x) * w, s[5] = (1 - (f + p)) * w, s[6] = (g + E) * w, s[7] = 0, s[8] = (m + b) * C, s[9] = (g - E) * C, s[10] = (1 - (f + _)) * C, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, i) {
    const s = this.elements;
    let r = _s.set(s[0], s[1], s[2]).length();
    const o = _s.set(s[4], s[5], s[6]).length(), a = _s.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], Tn.copy(this);
    const c = 1 / r, u = 1 / o, h = 1 / a;
    return Tn.elements[0] *= c, Tn.elements[1] *= c, Tn.elements[2] *= c, Tn.elements[4] *= u, Tn.elements[5] *= u, Tn.elements[6] *= u, Tn.elements[8] *= h, Tn.elements[9] *= h, Tn.elements[10] *= h, t.setFromRotationMatrix(Tn), i.x = r, i.y = o, i.z = a, this;
  }
  makePerspective(e, t, i, s, r, o, a = zn) {
    const l = this.elements, c = 2 * r / (t - e), u = 2 * r / (i - s), h = (t + e) / (t - e), f = (i + s) / (i - s);
    let d, m;
    if (a === zn) d = -(o + r) / (o - r), m = -2 * o * r / (o - r);
    else if (a === xa) d = -o / (o - r), m = -o * r / (o - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = d, l[14] = m, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, i, s, r, o, a = zn) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (i - s), h = 1 / (o - r), f = (t + e) * c, d = (i + s) * u;
    let m, _;
    if (a === zn) m = (o + r) * h, _ = -2 * h;
    else if (a === xa) m = r * h, _ = -1 * h;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -d, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -m, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let s = 0; s < 16; s++) if (t[s] !== i[s]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
  }
}
const _s = new N(), Tn = new Ye(), Kv = new N(0, 0, 0), Zv = new N(1, 1, 1), vi = new N(), go = new N(), an = new N(), ef = new Ye(), tf = new xn();
class Ln {
  constructor(e = 0, t = 0, i = 0, s = Ln.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = i, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, i, s = this._order) {
    return this._x = e, this._y = t, this._z = i, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, i = true) {
    const s = e.elements, r = s[0], o = s[4], a = s[8], l = s[1], c = s[5], u = s[9], h = s[2], f = s[6], d = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(qe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-qe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(qe(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-qe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(qe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
        break;
      case "XZY":
        this._z = Math.asin(-qe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return ef.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ef, t, i);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return tf.setFromEuler(this), this.setFromQuaternion(tf, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ln.DEFAULT_ORDER = "XYZ";
class Iu {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Jv = 0;
const nf = new N(), xs = new xn(), Zn = new Ye(), _o = new N(), hr = new N(), Qv = new N(), $v = new xn(), sf = new N(1, 0, 0), rf = new N(0, 1, 0), of = new N(0, 0, 1), af = { type: "added" }, e0 = { type: "removed" }, vs = { type: "childadded", child: null }, hl = { type: "childremoved", child: null };
class ht extends Oi {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Jv++ }), this.uuid = _n(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ht.DEFAULT_UP.clone();
    const e = new N(), t = new Ln(), i = new xn(), s = new N(1, 1, 1);
    function r() {
      i.setFromEuler(t, false);
    }
    function o() {
      t.setFromQuaternion(i, void 0, false);
    }
    t._onChange(r), i._onChange(o), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: i }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new Ye() }, normalMatrix: { value: new je() } }), this.matrix = new Ye(), this.matrixWorld = new Ye(), this.matrixAutoUpdate = ht.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Iu(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return xs.setFromAxisAngle(e, t), this.quaternion.multiply(xs), this;
  }
  rotateOnWorldAxis(e, t) {
    return xs.setFromAxisAngle(e, t), this.quaternion.premultiply(xs), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(sf, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(rf, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(of, e);
  }
  translateOnAxis(e, t) {
    return nf.copy(e).applyQuaternion(this.quaternion), this.position.add(nf.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(sf, e);
  }
  translateY(e) {
    return this.translateOnAxis(rf, e);
  }
  translateZ(e) {
    return this.translateOnAxis(of, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(Zn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? _o.copy(e) : _o.set(e, t, i);
    const s = this.parent;
    this.updateWorldMatrix(true, false), hr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Zn.lookAt(hr, _o, this.up) : Zn.lookAt(_o, hr, this.up), this.quaternion.setFromRotationMatrix(Zn), s && (Zn.extractRotation(s.matrixWorld), xs.setFromRotationMatrix(Zn), this.quaternion.premultiply(xs.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(af), vs.child = e, this.dispatchEvent(vs), vs.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(e0), hl.child = e, this.dispatchEvent(hl), hl.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), Zn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Zn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Zn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(af), vs.child = e, this.dispatchEvent(vs), vs.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const s = this.children;
    for (let r = 0, o = s.length; r < o; r++) s[r].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(hr, e, Qv), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(hr, $v, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (e === true && i !== null && i.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const s = this.children;
      for (let r = 0, o = s.length; r < o; r++) s[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((a) => ({ ...a, boundingBox: a.boundingBox ? a.boundingBox.toJSON() : void 0, boundingSphere: a.boundingSphere ? a.boundingSphere.toJSON() : void 0 })), s.instanceInfo = this._instanceInfo.map((a) => ({ ...a })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(e), s.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) {
          const h = l[c];
          r(e.shapes, h);
        }
        else r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const a = [];
      for (let l = 0, c = this.material.length; l < c; l++) a.push(r(e.materials, this.material[l]));
      s.material = a;
    } else s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let a = 0; a < this.children.length; a++) s.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        s.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), h = o(e.shapes), f = o(e.skeletons), d = o(e.animations), m = o(e.nodes);
      a.length > 0 && (i.geometries = a), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), u.length > 0 && (i.images = u), h.length > 0 && (i.shapes = h), f.length > 0 && (i.skeletons = f), d.length > 0 && (i.animations = d), m.length > 0 && (i.nodes = m);
    }
    return i.object = s, i;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      this.add(s.clone());
    }
    return this;
  }
}
ht.DEFAULT_UP = new N(0, 1, 0);
ht.DEFAULT_MATRIX_AUTO_UPDATE = true;
ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const En = new N(), Jn = new N(), fl = new N(), Qn = new N(), ys = new N(), Ms = new N(), lf = new N(), dl = new N(), pl = new N(), ml = new N(), gl = new it(), _l = new it(), xl = new it();
class wn {
  constructor(e = new N(), t = new N(), i = new N()) {
    this.a = e, this.b = t, this.c = i;
  }
  static getNormal(e, t, i, s) {
    s.subVectors(i, t), En.subVectors(e, t), s.cross(En);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, s, r) {
    En.subVectors(s, t), Jn.subVectors(i, t), fl.subVectors(e, t);
    const o = En.dot(En), a = En.dot(Jn), l = En.dot(fl), c = Jn.dot(Jn), u = Jn.dot(fl), h = o * c - a * a;
    if (h === 0) return r.set(0, 0, 0), null;
    const f = 1 / h, d = (c * l - a * u) * f, m = (o * u - a * l) * f;
    return r.set(1 - d - m, m, d);
  }
  static containsPoint(e, t, i, s) {
    return this.getBarycoord(e, t, i, s, Qn) === null ? false : Qn.x >= 0 && Qn.y >= 0 && Qn.x + Qn.y <= 1;
  }
  static getInterpolation(e, t, i, s, r, o, a, l) {
    return this.getBarycoord(e, t, i, s, Qn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Qn.x), l.addScaledVector(o, Qn.y), l.addScaledVector(a, Qn.z), l);
  }
  static getInterpolatedAttribute(e, t, i, s, r, o) {
    return gl.setScalar(0), _l.setScalar(0), xl.setScalar(0), gl.fromBufferAttribute(e, t), _l.fromBufferAttribute(e, i), xl.fromBufferAttribute(e, s), o.setScalar(0), o.addScaledVector(gl, r.x), o.addScaledVector(_l, r.y), o.addScaledVector(xl, r.z), o;
  }
  static isFrontFacing(e, t, i, s) {
    return En.subVectors(i, t), Jn.subVectors(e, t), En.cross(Jn).dot(s) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, s) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, i, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return En.subVectors(this.c, this.b), Jn.subVectors(this.a, this.b), En.cross(Jn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return wn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return wn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, s, r) {
    return wn.getInterpolation(e, this.a, this.b, this.c, t, i, s, r);
  }
  containsPoint(e) {
    return wn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return wn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a, s = this.b, r = this.c;
    let o, a;
    ys.subVectors(s, i), Ms.subVectors(r, i), dl.subVectors(e, i);
    const l = ys.dot(dl), c = Ms.dot(dl);
    if (l <= 0 && c <= 0) return t.copy(i);
    pl.subVectors(e, s);
    const u = ys.dot(pl), h = Ms.dot(pl);
    if (u >= 0 && h <= u) return t.copy(s);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0) return o = l / (l - u), t.copy(i).addScaledVector(ys, o);
    ml.subVectors(e, r);
    const d = ys.dot(ml), m = Ms.dot(ml);
    if (m >= 0 && d <= m) return t.copy(r);
    const _ = d * c - l * m;
    if (_ <= 0 && c >= 0 && m <= 0) return a = c / (c - m), t.copy(i).addScaledVector(Ms, a);
    const g = u * m - d * h;
    if (g <= 0 && h - u >= 0 && d - m >= 0) return lf.subVectors(r, s), a = (h - u) / (h - u + (d - m)), t.copy(s).addScaledVector(lf, a);
    const p = 1 / (g + _ + f);
    return o = _ * p, a = f * p, t.copy(i).addScaledVector(ys, o).addScaledVector(Ms, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const _m = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, yi = { h: 0, s: 0, l: 0 }, xo = { h: 0, s: 0, l: 0 };
function vl(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t) : n;
}
class Ue {
  constructor(e, t, i) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Dt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, $e.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, i, s = $e.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, $e.colorSpaceToWorking(this, s), this;
  }
  setHSL(e, t, i, s = $e.workingColorSpace) {
    if (e = Pu(e, 1), t = qe(t, 0, 1), i = qe(i, 0, 1), t === 0) this.r = this.g = this.b = i;
    else {
      const r = i <= 0.5 ? i * (1 + t) : i + t - i * t, o = 2 * i - r;
      this.r = vl(o, r, e + 1 / 3), this.g = vl(o, r, e), this.b = vl(o, r, e - 1 / 3);
    }
    return $e.colorSpaceToWorking(this, s), this;
  }
  setStyle(e, t = Dt) {
    function i(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = s[1], a = s[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], o = r.length;
      if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (o === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Dt) {
    const i = _m[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = li(e.r), this.g = li(e.g), this.b = li(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Vs(e.r), this.g = Vs(e.g), this.b = Vs(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Dt) {
    return $e.workingToColorSpace(zt.copy(this), e), Math.round(qe(zt.r * 255, 0, 255)) * 65536 + Math.round(qe(zt.g * 255, 0, 255)) * 256 + Math.round(qe(zt.b * 255, 0, 255));
  }
  getHexString(e = Dt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = $e.workingColorSpace) {
    $e.workingToColorSpace(zt.copy(this), t);
    const i = zt.r, s = zt.g, r = zt.b, o = Math.max(i, s, r), a = Math.min(i, s, r);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) l = 0, c = 0;
    else {
      const h = o - a;
      switch (c = u <= 0.5 ? h / (o + a) : h / (2 - o - a), o) {
        case i:
          l = (s - r) / h + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - i) / h + 2;
          break;
        case r:
          l = (i - s) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = $e.workingColorSpace) {
    return $e.workingToColorSpace(zt.copy(this), t), e.r = zt.r, e.g = zt.g, e.b = zt.b, e;
  }
  getStyle(e = Dt) {
    $e.workingToColorSpace(zt.copy(this), e);
    const t = zt.r, i = zt.g, s = zt.b;
    return e !== Dt ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(yi), this.setHSL(yi.h + e, yi.s + t, yi.l + i);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  lerpHSL(e, t) {
    this.getHSL(yi), e.getHSL(xo);
    const i = Cr(yi.h, xo.h, t), s = Cr(yi.s, xo.s, t), r = Cr(yi.l, xo.l, t);
    return this.setHSL(i, s, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, i = this.g, s = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * i + r[6] * s, this.g = r[1] * t + r[4] * i + r[7] * s, this.b = r[2] * t + r[5] * i + r[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const zt = new Ue();
Ue.NAMES = _m;
let t0 = 0;
class vn extends Oi {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: t0++ }), this.uuid = _n(), this.name = "", this.type = "Material", this.blending = zs, this.side = hi, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = rc, this.blendDst = oc, this.blendEquation = ns, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ue(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Xs, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = qh, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = fs, this.stencilZFail = fs, this.stencilZPass = fs, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(i) : s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== zs && (i.blending = this.blending), this.side !== hi && (i.side = this.side), this.vertexColors === true && (i.vertexColors = true), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === true && (i.transparent = true), this.blendSrc !== rc && (i.blendSrc = this.blendSrc), this.blendDst !== oc && (i.blendDst = this.blendDst), this.blendEquation !== ns && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== Xs && (i.depthFunc = this.depthFunc), this.depthTest === false && (i.depthTest = this.depthTest), this.depthWrite === false && (i.depthWrite = this.depthWrite), this.colorWrite === false && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== qh && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== fs && (i.stencilFail = this.stencilFail), this.stencilZFail !== fs && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== fs && (i.stencilZPass = this.stencilZPass), this.stencilWrite === true && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === true && (i.polygonOffset = true), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === true && (i.dithering = true), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === true && (i.alphaHash = true), this.alphaToCoverage === true && (i.alphaToCoverage = true), this.premultipliedAlpha === true && (i.premultipliedAlpha = true), this.forceSinglePass === true && (i.forceSinglePass = true), this.wireframe === true && (i.wireframe = true), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (i.flatShading = true), this.visible === false && (i.visible = false), this.toneMapped === false && (i.toneMapped = false), this.fog === false && (i.fog = false), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function s(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const r = s(e.textures), o = s(e.images);
      r.length > 0 && (i.textures = r), o.length > 0 && (i.images = o);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const s = t.length;
      i = new Array(s);
      for (let r = 0; r !== s; ++r) i[r] = t[r].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
class oi extends vn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ln(), this.combine = Mu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Et = new N(), vo = new fe();
let n0 = 0;
class Ft {
  constructor(e, t, i = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: n0++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = Gc, this.updateRanges = [], this.gpuType = Rn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++) this.array[e + s] = t.array[i + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, i = this.count; t < i; t++) vo.fromBufferAttribute(this, t), vo.applyMatrix3(e), this.setXY(t, vo.x, vo.y);
    else if (this.itemSize === 3) for (let t = 0, i = this.count; t < i; t++) Et.fromBufferAttribute(this, t), Et.applyMatrix3(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++) Et.fromBufferAttribute(this, t), Et.applyMatrix4(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) Et.fromBufferAttribute(this, t), Et.applyNormalMatrix(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) Et.fromBufferAttribute(this, t), Et.transformDirection(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = An(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = ut(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = ut(t, this.array), i = ut(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e *= this.itemSize, this.normalized && (t = ut(t, this.array), i = ut(i, this.array), s = ut(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e *= this.itemSize, this.normalized && (t = ut(t, this.array), i = ut(i, this.array), s = ut(s, this.array), r = ut(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== Gc && (e.usage = this.usage), e;
  }
}
class xm extends Ft {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class vm extends Ft {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class et extends Ft {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let i0 = 0;
const dn = new Ye(), yl = new ht(), Ss = new N(), ln = new pi(), fr = new pi(), Pt = new N();
class Mt extends Oi {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: i0++ }), this.uuid = _n(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (mm(e) ? vm : xm)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const r = new je().getNormalMatrix(e);
      i.applyNormalMatrix(r), i.needsUpdate = true;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return dn.makeRotationFromQuaternion(e), this.applyMatrix4(dn), this;
  }
  rotateX(e) {
    return dn.makeRotationX(e), this.applyMatrix4(dn), this;
  }
  rotateY(e) {
    return dn.makeRotationY(e), this.applyMatrix4(dn), this;
  }
  rotateZ(e) {
    return dn.makeRotationZ(e), this.applyMatrix4(dn), this;
  }
  translate(e, t, i) {
    return dn.makeTranslation(e, t, i), this.applyMatrix4(dn), this;
  }
  scale(e, t, i) {
    return dn.makeScale(e, t, i), this.applyMatrix4(dn), this;
  }
  lookAt(e) {
    return yl.lookAt(e), yl.updateMatrix(), this.applyMatrix4(yl.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ss).negate(), this.translate(Ss.x, Ss.y, Ss.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const o = e[s];
        i.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new et(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let s = 0; s < i; s++) {
        const r = e[s];
        t.setXYZ(s, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new pi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new N(-1 / 0, -1 / 0, -1 / 0), new N(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let i = 0, s = t.length; i < s; i++) {
        const r = t[i];
        ln.setFromBufferAttribute(r), this.morphTargetsRelative ? (Pt.addVectors(this.boundingBox.min, ln.min), this.boundingBox.expandByPoint(Pt), Pt.addVectors(this.boundingBox.max, ln.max), this.boundingBox.expandByPoint(Pt)) : (this.boundingBox.expandByPoint(ln.min), this.boundingBox.expandByPoint(ln.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Gn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (ln.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r];
        fr.setFromBufferAttribute(a), this.morphTargetsRelative ? (Pt.addVectors(ln.min, fr.min), ln.expandByPoint(Pt), Pt.addVectors(ln.max, fr.max), ln.expandByPoint(Pt)) : (ln.expandByPoint(fr.min), ln.expandByPoint(fr.max));
      }
      ln.getCenter(i);
      let s = 0;
      for (let r = 0, o = e.count; r < o; r++) Pt.fromBufferAttribute(e, r), s = Math.max(s, i.distanceToSquared(Pt));
      if (t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r], l = this.morphTargetsRelative;
        for (let c = 0, u = a.count; c < u; c++) Pt.fromBufferAttribute(a, c), l && (Ss.fromBufferAttribute(e, c), Pt.add(Ss)), s = Math.max(s, i.distanceToSquared(Pt));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.position, s = t.normal, r = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Ft(new Float32Array(4 * i.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let I = 0; I < i.count; I++) a[I] = new N(), l[I] = new N();
    const c = new N(), u = new N(), h = new N(), f = new fe(), d = new fe(), m = new fe(), _ = new N(), g = new N();
    function p(I, S, M) {
      c.fromBufferAttribute(i, I), u.fromBufferAttribute(i, S), h.fromBufferAttribute(i, M), f.fromBufferAttribute(r, I), d.fromBufferAttribute(r, S), m.fromBufferAttribute(r, M), u.sub(c), h.sub(c), d.sub(f), m.sub(f);
      const L = 1 / (d.x * m.y - m.x * d.y);
      isFinite(L) && (_.copy(u).multiplyScalar(m.y).addScaledVector(h, -d.y).multiplyScalar(L), g.copy(h).multiplyScalar(d.x).addScaledVector(u, -m.x).multiplyScalar(L), a[I].add(_), a[S].add(_), a[M].add(_), l[I].add(g), l[S].add(g), l[M].add(g));
    }
    let E = this.groups;
    E.length === 0 && (E = [{ start: 0, count: e.count }]);
    for (let I = 0, S = E.length; I < S; ++I) {
      const M = E[I], L = M.start, O = M.count;
      for (let X = L, Q = L + O; X < Q; X += 3) p(e.getX(X + 0), e.getX(X + 1), e.getX(X + 2));
    }
    const b = new N(), x = new N(), P = new N(), w = new N();
    function C(I) {
      P.fromBufferAttribute(s, I), w.copy(P);
      const S = a[I];
      b.copy(S), b.sub(P.multiplyScalar(P.dot(S))).normalize(), x.crossVectors(w, S);
      const L = x.dot(l[I]) < 0 ? -1 : 1;
      o.setXYZW(I, b.x, b.y, b.z, L);
    }
    for (let I = 0, S = E.length; I < S; ++I) {
      const M = E[I], L = M.start, O = M.count;
      for (let X = L, Q = L + O; X < Q; X += 3) C(e.getX(X + 0)), C(e.getX(X + 1)), C(e.getX(X + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0) i = new Ft(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else for (let f = 0, d = i.count; f < d; f++) i.setXYZ(f, 0, 0, 0);
      const s = new N(), r = new N(), o = new N(), a = new N(), l = new N(), c = new N(), u = new N(), h = new N();
      if (e) for (let f = 0, d = e.count; f < d; f += 3) {
        const m = e.getX(f + 0), _ = e.getX(f + 1), g = e.getX(f + 2);
        s.fromBufferAttribute(t, m), r.fromBufferAttribute(t, _), o.fromBufferAttribute(t, g), u.subVectors(o, r), h.subVectors(s, r), u.cross(h), a.fromBufferAttribute(i, m), l.fromBufferAttribute(i, _), c.fromBufferAttribute(i, g), a.add(u), l.add(u), c.add(u), i.setXYZ(m, a.x, a.y, a.z), i.setXYZ(_, l.x, l.y, l.z), i.setXYZ(g, c.x, c.y, c.z);
      }
      else for (let f = 0, d = t.count; f < d; f += 3) s.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), u.subVectors(o, r), h.subVectors(s, r), u.cross(h), i.setXYZ(f + 0, u.x, u.y, u.z), i.setXYZ(f + 1, u.x, u.y, u.z), i.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), i.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++) Pt.fromBufferAttribute(e, t), Pt.normalize(), e.setXYZ(t, Pt.x, Pt.y, Pt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, u = a.itemSize, h = a.normalized, f = new c.constructor(l.length * u);
      let d = 0, m = 0;
      for (let _ = 0, g = l.length; _ < g; _++) {
        a.isInterleavedBufferAttribute ? d = l[_] * a.data.stride + a.offset : d = l[_] * u;
        for (let p = 0; p < u; p++) f[m++] = c[d++];
      }
      return new Ft(f, u, h);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Mt(), i = this.index.array, s = this.attributes;
    for (const a in s) {
      const l = s[a], c = e(l, i);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u], d = e(f, i);
        l.push(d);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const s = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, f = c.length; h < f; h++) {
        const d = c[h];
        u.push(d.toJSON(e.data));
      }
      u.length > 0 && (s[l] = u, r = true);
    }
    r && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = a.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone());
    const s = e.attributes;
    for (const c in s) {
      const u = s[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [], h = r[c];
      for (let f = 0, d = h.length; f < d; f++) u.push(h[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const h = o[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const cf = new Ye(), Wi = new $r(), yo = new Gn(), uf = new N(), Mo = new N(), So = new N(), bo = new N(), Ml = new N(), To = new N(), hf = new N(), Eo = new N();
class kt extends ht {
  constructor(e = new Mt(), t = new oi()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const s = t[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry, s = i.attributes.position, r = i.morphAttributes.position, o = i.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      To.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = a[l], h = r[l];
        u !== 0 && (Ml.fromBufferAttribute(h, e), o ? To.addScaledVector(Ml, u) : To.addScaledVector(Ml.sub(t), u));
      }
      t.add(To);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), yo.copy(i.boundingSphere), yo.applyMatrix4(r), Wi.copy(e.ray).recast(e.near), !(yo.containsPoint(Wi.origin) === false && (Wi.intersectSphere(yo, uf) === null || Wi.origin.distanceToSquared(uf) > (e.far - e.near) ** 2)) && (cf.copy(r).invert(), Wi.copy(e.ray).applyMatrix4(cf), !(i.boundingBox !== null && Wi.intersectsBox(i.boundingBox) === false) && this._computeIntersections(e, t, Wi)));
  }
  _computeIntersections(e, t, i) {
    let s;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, h = r.attributes.normal, f = r.groups, d = r.drawRange;
    if (a !== null) if (Array.isArray(o)) for (let m = 0, _ = f.length; m < _; m++) {
      const g = f[m], p = o[g.materialIndex], E = Math.max(g.start, d.start), b = Math.min(a.count, Math.min(g.start + g.count, d.start + d.count));
      for (let x = E, P = b; x < P; x += 3) {
        const w = a.getX(x), C = a.getX(x + 1), I = a.getX(x + 2);
        s = Ao(this, p, e, i, c, u, h, w, C, I), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = g.materialIndex, t.push(s));
      }
    }
    else {
      const m = Math.max(0, d.start), _ = Math.min(a.count, d.start + d.count);
      for (let g = m, p = _; g < p; g += 3) {
        const E = a.getX(g), b = a.getX(g + 1), x = a.getX(g + 2);
        s = Ao(this, o, e, i, c, u, h, E, b, x), s && (s.faceIndex = Math.floor(g / 3), t.push(s));
      }
    }
    else if (l !== void 0) if (Array.isArray(o)) for (let m = 0, _ = f.length; m < _; m++) {
      const g = f[m], p = o[g.materialIndex], E = Math.max(g.start, d.start), b = Math.min(l.count, Math.min(g.start + g.count, d.start + d.count));
      for (let x = E, P = b; x < P; x += 3) {
        const w = x, C = x + 1, I = x + 2;
        s = Ao(this, p, e, i, c, u, h, w, C, I), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = g.materialIndex, t.push(s));
      }
    }
    else {
      const m = Math.max(0, d.start), _ = Math.min(l.count, d.start + d.count);
      for (let g = m, p = _; g < p; g += 3) {
        const E = g, b = g + 1, x = g + 2;
        s = Ao(this, o, e, i, c, u, h, E, b, x), s && (s.faceIndex = Math.floor(g / 3), t.push(s));
      }
    }
  }
}
function s0(n, e, t, i, s, r, o, a) {
  let l;
  if (e.side === sn ? l = i.intersectTriangle(o, r, s, true, a) : l = i.intersectTriangle(s, r, o, e.side === hi, a), l === null) return null;
  Eo.copy(a), Eo.applyMatrix4(n.matrixWorld);
  const c = t.ray.origin.distanceTo(Eo);
  return c < t.near || c > t.far ? null : { distance: c, point: Eo.clone(), object: n };
}
function Ao(n, e, t, i, s, r, o, a, l, c) {
  n.getVertexPosition(a, Mo), n.getVertexPosition(l, So), n.getVertexPosition(c, bo);
  const u = s0(n, e, t, i, Mo, So, bo, hf);
  if (u) {
    const h = new N();
    wn.getBarycoord(hf, Mo, So, bo, h), s && (u.uv = wn.getInterpolatedAttribute(s, a, l, c, h, new fe())), r && (u.uv1 = wn.getInterpolatedAttribute(r, a, l, c, h, new fe())), o && (u.normal = wn.getInterpolatedAttribute(o, a, l, c, h, new N()), u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a, b: l, c, normal: new N(), materialIndex: 0 };
    wn.getNormal(Mo, So, bo, f.normal), u.face = f, u.barycoord = h;
  }
  return u;
}
class eo extends Mt {
  constructor(e = 1, t = 1, i = 1, s = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: i, widthSegments: s, heightSegments: r, depthSegments: o };
    const a = this;
    s = Math.floor(s), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], u = [], h = [];
    let f = 0, d = 0;
    m("z", "y", "x", -1, -1, i, t, e, o, r, 0), m("z", "y", "x", 1, -1, i, t, -e, o, r, 1), m("x", "z", "y", 1, 1, e, i, t, s, o, 2), m("x", "z", "y", 1, -1, e, i, -t, s, o, 3), m("x", "y", "z", 1, -1, e, t, i, s, r, 4), m("x", "y", "z", -1, -1, e, t, -i, s, r, 5), this.setIndex(l), this.setAttribute("position", new et(c, 3)), this.setAttribute("normal", new et(u, 3)), this.setAttribute("uv", new et(h, 2));
    function m(_, g, p, E, b, x, P, w, C, I, S) {
      const M = x / C, L = P / I, O = x / 2, X = P / 2, Q = w / 2, ne = C + 1, Z = I + 1;
      let se = 0, j = 0;
      const de = new N();
      for (let xe = 0; xe < Z; xe++) {
        const be = xe * L - X;
        for (let Fe = 0; Fe < ne; Fe++) {
          const Ze = Fe * M - O;
          de[_] = Ze * E, de[g] = be * b, de[p] = Q, c.push(de.x, de.y, de.z), de[_] = 0, de[g] = 0, de[p] = w > 0 ? 1 : -1, u.push(de.x, de.y, de.z), h.push(Fe / C), h.push(1 - xe / I), se += 1;
        }
      }
      for (let xe = 0; xe < I; xe++) for (let be = 0; be < C; be++) {
        const Fe = f + be + ne * xe, Ze = f + be + ne * (xe + 1), ie = f + (be + 1) + ne * (xe + 1), pe = f + (be + 1) + ne * xe;
        l.push(Fe, Ze, pe), l.push(Ze, ie, pe), j += 6;
      }
      a.addGroup(d, j, S), d += j, f += se;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new eo(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Zs(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const s = n[t][i];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = s.clone() : Array.isArray(s) ? e[t][i] = s.slice() : e[t][i] = s;
    }
  }
  return e;
}
function qt(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = Zs(n[t]);
    for (const s in i) e[s] = i[s];
  }
  return e;
}
function r0(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
function ym(n) {
  const e = n.getRenderTarget();
  return e === null ? n.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : $e.workingColorSpace;
}
const ks = { clone: Zs, merge: qt };
var o0 = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, a0 = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class rn extends vn {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = o0, this.fragmentShader = a0, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Zs(e.uniforms), this.uniformsGroups = r0(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const o = this.uniforms[s].value;
      o && o.isTexture ? t.uniforms[s] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[s] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[s] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[s] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[s] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[s] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[s] = { type: "m4", value: o.toArray() } : t.uniforms[s] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const s in this.extensions) this.extensions[s] === true && (i[s] = true);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class Du extends ht {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Ye(), this.projectionMatrix = new Ye(), this.projectionMatrixInverse = new Ye(), this.coordinateSystem = zn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Mi = new N(), ff = new fe(), df = new fe();
class tn extends Du {
  constructor(e = 50, t = 1, i = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ks * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Rr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ks * 2 * Math.atan(Math.tan(Rr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    Mi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Mi.x, Mi.y).multiplyScalar(-e / Mi.z), Mi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(Mi.x, Mi.y).multiplyScalar(-e / Mi.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, ff, df), t.subVectors(df, ff);
  }
  setViewOffset(e, t, i, s, r, o) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Rr * 0.5 * this.fov) / this.zoom, i = 2 * t, s = this.aspect * i, r = -0.5 * s;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * s / l, t -= o.offsetY * i / c, s *= o.width / l, i *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - i, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const bs = -90, Ts = 1;
class l0 extends ht {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new tn(bs, Ts, e, t);
    s.layers = this.layers, this.add(s);
    const r = new tn(bs, Ts, e, t);
    r.layers = this.layers, this.add(r);
    const o = new tn(bs, Ts, e, t);
    o.layers = this.layers, this.add(o);
    const a = new tn(bs, Ts, e, t);
    a.layers = this.layers, this.add(a);
    const l = new tn(bs, Ts, e, t);
    l.layers = this.layers, this.add(l);
    const c = new tn(bs, Ts, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, s, r, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === zn) i.up.set(0, 1, 0), i.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === xa) i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, l, c, u] = this.children, h = e.getRenderTarget(), f = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), m = e.xr.enabled;
    e.xr.enabled = false;
    const _ = i.texture.generateMipmaps;
    i.texture.generateMipmaps = false, e.setRenderTarget(i, 0, s), e.render(t, r), e.setRenderTarget(i, 1, s), e.render(t, o), e.setRenderTarget(i, 2, s), e.render(t, a), e.setRenderTarget(i, 3, s), e.render(t, l), e.setRenderTarget(i, 4, s), e.render(t, c), i.texture.generateMipmaps = _, e.setRenderTarget(i, 5, s), e.render(t, u), e.setRenderTarget(h, f, d), e.xr.enabled = m, i.texture.needsPMREMUpdate = true;
  }
}
class Mm extends At {
  constructor(e = [], t = Ys, i, s, r, o, a, l, c, u) {
    super(e, t, i, s, r, o, a, l, c, u), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class c0 extends kn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const i = { width: e, height: e, depth: 1 }, s = [i, i, i, i, i, i];
    this.texture = new Mm(s), this._setTextureOptions(t), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, s = new eo(5, 5, 5), r = new rn({ name: "CubemapFromEquirect", uniforms: Zs(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: sn, blending: ai });
    r.uniforms.tEquirect.value = t;
    const o = new kt(s, r), a = t.minFilter;
    return t.minFilter === ri && (t.minFilter = nn), new l0(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t = true, i = true, s = true) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, i, s);
    e.setRenderTarget(r);
  }
}
class ss extends ht {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const u0 = { type: "move" };
class Sl {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ss(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ss(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new N(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new N()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ss(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new N(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new N()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const i of e.hand.values()) this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, i) {
    let s = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = true;
        for (const _ of e.hand.values()) {
          const g = t.getJointPose(_, i), p = this._getHandJoint(c, _);
          g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = true, p.jointRadius = g.radius), p.visible = g !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], f = u.position.distanceTo(h.position), d = 0.02, m = 5e-3;
        c.inputState.pinching && f > d + m ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && f <= d - m && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, i), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      a !== null && (s = t.getPose(e.targetRaySpace, i), s === null && r !== null && (s = r), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, s.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = false, s.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(u0)));
    }
    return a !== null && (a.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new ss();
      i.matrixAutoUpdate = false, i.visible = false, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
class Sm {
  constructor(e, t = 1, i = 1e3) {
    this.isFog = true, this.name = "", this.color = new Ue(e), this.near = t, this.far = i;
  }
  clone() {
    return new Sm(this.color, this.near, this.far);
  }
  toJSON() {
    return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
  }
}
class AA extends ht {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Ln(), this.environmentIntensity = 1, this.environmentRotation = new Ln(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class bm {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Gc, this.updateRanges = [], this.version = 0, this.uuid = _n();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, i) {
    e *= this.stride, i *= t.stride;
    for (let s = 0, r = this.stride; s < r; s++) this.array[e + s] = t.array[i + s];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = _n()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(t, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = _n()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Xt = new N();
class Nu {
  constructor(e, t, i, s = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = i, this.normalized = s;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.data.count; t < i; t++) Xt.fromBufferAttribute(this, t), Xt.applyMatrix4(e), this.setXYZ(t, Xt.x, Xt.y, Xt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) Xt.fromBufferAttribute(this, t), Xt.applyNormalMatrix(e), this.setXYZ(t, Xt.x, Xt.y, Xt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) Xt.fromBufferAttribute(this, t), Xt.transformDirection(e), this.setXYZ(t, Xt.x, Xt.y, Xt.z);
    return this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (i = An(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = ut(i, this.array)), this.data.array[e * this.data.stride + this.offset + t] = i, this;
  }
  setX(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = An(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = An(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = An(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setXY(e, t, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ut(t, this.array), i = ut(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ut(t, this.array), i = ut(i, this.array), s = ut(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ut(t, this.array), i = ut(i, this.array), s = ut(s, this.array), r = ut(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return new Ft(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Nu(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
const pf = new N(), mf = new it(), gf = new it(), h0 = new N(), _f = new Ye(), wo = new N(), bl = new Gn(), xf = new Ye(), Tl = new $r();
class f0 extends kt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Yh, this.bindMatrix = new Ye(), this.bindMatrixInverse = new Ye(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new pi()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let i = 0; i < t.count; i++) this.getVertexPosition(i, wo), this.boundingBox.expandByPoint(wo);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Gn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let i = 0; i < t.count; i++) this.getVertexPosition(i, wo), this.boundingSphere.expandByPoint(wo);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const i = this.material, s = this.matrixWorld;
    i !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), bl.copy(this.boundingSphere), bl.applyMatrix4(s), e.ray.intersectsSphere(bl) !== false && (xf.copy(s).invert(), Tl.copy(e.ray).applyMatrix4(xf), !(this.boundingBox !== null && Tl.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, Tl)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new it(), t = this.geometry.attributes.skinWeight;
    for (let i = 0, s = t.count; i < s; i++) {
      e.fromBufferAttribute(t, i);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(i, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Yh ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === rv ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const i = this.skeleton, s = this.geometry;
    mf.fromBufferAttribute(s.attributes.skinIndex, e), gf.fromBufferAttribute(s.attributes.skinWeight, e), pf.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = gf.getComponent(r);
      if (o !== 0) {
        const a = mf.getComponent(r);
        _f.multiplyMatrices(i.bones[a].matrixWorld, i.boneInverses[a]), t.addScaledVector(h0.copy(pf).applyMatrix4(_f), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Tm extends ht {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class Em extends At {
  constructor(e = null, t = 1, i = 1, s, r, o, a, l, c = Ot, u = Ot, h, f) {
    super(null, o, a, l, c, u, s, r, h, f), this.isDataTexture = true, this.image = { data: e, width: t, height: i }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const vf = new Ye(), d0 = new Ye();
class Uu {
  constructor(e = [], t = []) {
    this.uuid = _n(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let i = 0, s = this.bones.length; i < s; i++) this.boneInverses.push(new Ye());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const i = new Ye();
      this.bones[e] && i.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(i);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const i = this.bones[e];
      i && i.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const i = this.bones[e];
      i && (i.parent && i.parent.isBone ? (i.matrix.copy(i.parent.matrixWorld).invert(), i.matrix.multiply(i.matrixWorld)) : i.matrix.copy(i.matrixWorld), i.matrix.decompose(i.position, i.quaternion, i.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, i = this.boneMatrices, s = this.boneTexture;
    for (let r = 0, o = e.length; r < o; r++) {
      const a = e[r] ? e[r].matrixWorld : d0;
      vf.multiplyMatrices(a, t[r]), vf.toArray(i, r * 16);
    }
    s !== null && (s.needsUpdate = true);
  }
  clone() {
    return new Uu(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const i = new Em(t, e, e, mn, Rn);
    return i.needsUpdate = true, this.boneMatrices = t, this.boneTexture = i, this;
  }
  getBoneByName(e) {
    for (let t = 0, i = this.bones.length; t < i; t++) {
      const s = this.bones[t];
      if (s.name === e) return s;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let i = 0, s = e.bones.length; i < s; i++) {
      const r = e.bones[i];
      let o = t[r];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Tm()), this.bones.push(o), this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, i = this.boneInverses;
    for (let s = 0, r = t.length; s < r; s++) {
      const o = t[s];
      e.bones.push(o.uuid);
      const a = i[s];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class Wc extends Ft {
  constructor(e, t, i, s = 1) {
    super(e, t, i), this.isInstancedBufferAttribute = true, this.meshPerAttribute = s;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const Es = new Ye(), yf = new Ye(), Ro = [], Mf = new pi(), p0 = new Ye(), dr = new kt(), pr = new Gn();
class m0 extends kt {
  constructor(e, t, i) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new Wc(new Float32Array(i * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = i, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < i; s++) this.setMatrixAt(s, p0);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new pi()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, Es), Mf.copy(e.boundingBox).applyMatrix4(Es), this.boundingBox.union(Mf);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Gn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, Es), pr.copy(e.boundingSphere).applyMatrix4(Es), this.boundingSphere.union(pr);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const i = t.morphTargetInfluences, s = this.morphTexture.source.data.data, r = i.length + 1, o = e * r + 1;
    for (let a = 0; a < i.length; a++) i[a] = s[o + a];
  }
  raycast(e, t) {
    const i = this.matrixWorld, s = this.count;
    if (dr.geometry = this.geometry, dr.material = this.material, dr.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), pr.copy(this.boundingSphere), pr.applyMatrix4(i), e.ray.intersectsSphere(pr) !== false)) for (let r = 0; r < s; r++) {
      this.getMatrixAt(r, Es), yf.multiplyMatrices(i, Es), dr.matrixWorld = yf, dr.raycast(e, Ro);
      for (let o = 0, a = Ro.length; o < a; o++) {
        const l = Ro[o];
        l.instanceId = r, l.object = this, t.push(l);
      }
      Ro.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Wc(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const i = t.morphTargetInfluences, s = i.length + 1;
    this.morphTexture === null && (this.morphTexture = new Em(new Float32Array(s * this.count), s, this.count, Eu, Rn));
    const r = this.morphTexture.source.data.data;
    let o = 0;
    for (let c = 0; c < i.length; c++) o += i[c];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = s * e;
    r[l] = a, r.set(i, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const El = new N(), g0 = new N(), _0 = new je();
class $i {
  constructor(e = new N(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, i, s) {
    return this.normal.set(e, t, i), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const s = El.subVectors(i, t).cross(g0.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const i = e.delta(El), s = this.normal.dot(i);
    if (s === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(i, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || _0.getNormalMatrix(e), s = this.coplanarPoint(El).applyMatrix4(e), r = this.normal.applyMatrix3(i).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Xi = new Gn(), Co = new N();
class Ou {
  constructor(e = new $i(), t = new $i(), i = new $i(), s = new $i(), r = new $i(), o = new $i()) {
    this.planes = [e, t, i, s, r, o];
  }
  set(e, t, i, s, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(i), a[3].copy(s), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = zn) {
    const i = this.planes, s = e.elements, r = s[0], o = s[1], a = s[2], l = s[3], c = s[4], u = s[5], h = s[6], f = s[7], d = s[8], m = s[9], _ = s[10], g = s[11], p = s[12], E = s[13], b = s[14], x = s[15];
    if (i[0].setComponents(l - r, f - c, g - d, x - p).normalize(), i[1].setComponents(l + r, f + c, g + d, x + p).normalize(), i[2].setComponents(l + o, f + u, g + m, x + E).normalize(), i[3].setComponents(l - o, f - u, g - m, x - E).normalize(), i[4].setComponents(l - a, f - h, g - _, x - b).normalize(), t === zn) i[5].setComponents(l + a, f + h, g + _, x + b).normalize();
    else if (t === xa) i[5].setComponents(a, h, _, b).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Xi);
  }
  intersectsSprite(e) {
    return Xi.center.set(0, 0, 0), Xi.radius = 0.7071067811865476, Xi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Xi);
  }
  intersectsSphere(e) {
    const t = this.planes, i = e.center, s = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(i) < s) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const s = t[i];
      if (Co.x = s.normal.x > 0 ? e.max.x : e.min.x, Co.y = s.normal.y > 0 ? e.max.y : e.min.y, Co.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(Co) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ua extends vn {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Ue(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const va = new N(), ya = new N(), Sf = new Ye(), mr = new $r(), Po = new Gn(), Al = new N(), bf = new N();
class qr extends ht {
  constructor(e = new Mt(), t = new Ua()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [0];
      for (let s = 1, r = t.count; s < r; s++) va.fromBufferAttribute(t, s - 1), ya.fromBufferAttribute(t, s), i[s] = i[s - 1], i[s] += va.distanceTo(ya);
      e.setAttribute("lineDistance", new et(i, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Po.copy(i.boundingSphere), Po.applyMatrix4(s), Po.radius += r, e.ray.intersectsSphere(Po) === false) return;
    Sf.copy(s).invert(), mr.copy(e.ray).applyMatrix4(Sf);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, u = i.index, f = i.attributes.position;
    if (u !== null) {
      const d = Math.max(0, o.start), m = Math.min(u.count, o.start + o.count);
      for (let _ = d, g = m - 1; _ < g; _ += c) {
        const p = u.getX(_), E = u.getX(_ + 1), b = Lo(this, e, mr, l, p, E, _);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const _ = u.getX(m - 1), g = u.getX(d), p = Lo(this, e, mr, l, _, g, m - 1);
        p && t.push(p);
      }
    } else {
      const d = Math.max(0, o.start), m = Math.min(f.count, o.start + o.count);
      for (let _ = d, g = m - 1; _ < g; _ += c) {
        const p = Lo(this, e, mr, l, _, _ + 1, _);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const _ = Lo(this, e, mr, l, m - 1, d, m - 1);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const s = t[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Lo(n, e, t, i, s, r, o) {
  const a = n.geometry.attributes.position;
  if (va.fromBufferAttribute(a, s), ya.fromBufferAttribute(a, r), t.distanceSqToSegment(va, ya, Al, bf) > i) return;
  Al.applyMatrix4(n.matrixWorld);
  const c = e.ray.origin.distanceTo(Al);
  if (!(c < e.near || c > e.far)) return { distance: c, point: bf.clone().applyMatrix4(n.matrixWorld), index: o, face: null, faceIndex: null, barycoord: null, object: n };
}
const Tf = new N(), Ef = new N();
class Am extends qr {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [];
      for (let s = 0, r = t.count; s < r; s += 2) Tf.fromBufferAttribute(t, s), Ef.fromBufferAttribute(t, s + 1), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + Tf.distanceTo(Ef);
      e.setAttribute("lineDistance", new et(i, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class x0 extends qr {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class wm extends vn {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Ue(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Af = new Ye(), Xc = new $r(), Io = new Gn(), Do = new N();
class v0 extends ht {
  constructor(e = new Mt(), t = new wm()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Io.copy(i.boundingSphere), Io.applyMatrix4(s), Io.radius += r, e.ray.intersectsSphere(Io) === false) return;
    Af.copy(s).invert(), Xc.copy(e.ray).applyMatrix4(Af);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = i.index, h = i.attributes.position;
    if (c !== null) {
      const f = Math.max(0, o.start), d = Math.min(c.count, o.start + o.count);
      for (let m = f, _ = d; m < _; m++) {
        const g = c.getX(m);
        Do.fromBufferAttribute(h, g), wf(Do, g, l, s, e, t, this);
      }
    } else {
      const f = Math.max(0, o.start), d = Math.min(h.count, o.start + o.count);
      for (let m = f, _ = d; m < _; m++) Do.fromBufferAttribute(h, m), wf(Do, m, l, s, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const s = t[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function wf(n, e, t, i, s, r, o) {
  const a = Xc.distanceSqToPoint(n);
  if (a < t) {
    const l = new N();
    Xc.closestPointToPoint(n, l), l.applyMatrix4(i);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: o });
  }
}
class Rm extends At {
  constructor(e, t, i = as, s, r, o, a = Ot, l = Ot, c, u = kr, h = 1) {
    if (u !== kr && u !== Gr) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: e, height: t, depth: h };
    super(f, s, r, o, a, l, u, i, c), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Lu(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Cm extends Mt {
  constructor(e = 1, t = 32, i = 0, s = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: i, thetaLength: s }, t = Math.max(3, t);
    const r = [], o = [], a = [], l = [], c = new N(), u = new fe();
    o.push(0, 0, 0), a.push(0, 0, 1), l.push(0.5, 0.5);
    for (let h = 0, f = 3; h <= t; h++, f += 3) {
      const d = i + h / t * s;
      c.x = e * Math.cos(d), c.y = e * Math.sin(d), o.push(c.x, c.y, c.z), a.push(0, 0, 1), u.x = (o[f] / e + 1) / 2, u.y = (o[f + 1] / e + 1) / 2, l.push(u.x, u.y);
    }
    for (let h = 1; h <= t; h++) r.push(h, h + 1, 0);
    this.setIndex(r), this.setAttribute("position", new et(o, 3)), this.setAttribute("normal", new et(a, 3)), this.setAttribute("uv", new et(l, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Cm(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class Fu extends Mt {
  constructor(e = 1, t = 1, i = 1, s = 32, r = 1, o = false, a = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: i, radialSegments: s, heightSegments: r, openEnded: o, thetaStart: a, thetaLength: l };
    const c = this;
    s = Math.floor(s), r = Math.floor(r);
    const u = [], h = [], f = [], d = [];
    let m = 0;
    const _ = [], g = i / 2;
    let p = 0;
    E(), o === false && (e > 0 && b(true), t > 0 && b(false)), this.setIndex(u), this.setAttribute("position", new et(h, 3)), this.setAttribute("normal", new et(f, 3)), this.setAttribute("uv", new et(d, 2));
    function E() {
      const x = new N(), P = new N();
      let w = 0;
      const C = (t - e) / i;
      for (let I = 0; I <= r; I++) {
        const S = [], M = I / r, L = M * (t - e) + e;
        for (let O = 0; O <= s; O++) {
          const X = O / s, Q = X * l + a, ne = Math.sin(Q), Z = Math.cos(Q);
          P.x = L * ne, P.y = -M * i + g, P.z = L * Z, h.push(P.x, P.y, P.z), x.set(ne, C, Z).normalize(), f.push(x.x, x.y, x.z), d.push(X, 1 - M), S.push(m++);
        }
        _.push(S);
      }
      for (let I = 0; I < s; I++) for (let S = 0; S < r; S++) {
        const M = _[S][I], L = _[S + 1][I], O = _[S + 1][I + 1], X = _[S][I + 1];
        (e > 0 || S !== 0) && (u.push(M, L, X), w += 3), (t > 0 || S !== r - 1) && (u.push(L, O, X), w += 3);
      }
      c.addGroup(p, w, 0), p += w;
    }
    function b(x) {
      const P = m, w = new fe(), C = new N();
      let I = 0;
      const S = x === true ? e : t, M = x === true ? 1 : -1;
      for (let O = 1; O <= s; O++) h.push(0, g * M, 0), f.push(0, M, 0), d.push(0.5, 0.5), m++;
      const L = m;
      for (let O = 0; O <= s; O++) {
        const Q = O / s * l + a, ne = Math.cos(Q), Z = Math.sin(Q);
        C.x = S * Z, C.y = g * M, C.z = S * ne, h.push(C.x, C.y, C.z), f.push(0, M, 0), w.x = ne * 0.5 + 0.5, w.y = Z * 0.5 * M + 0.5, d.push(w.x, w.y), m++;
      }
      for (let O = 0; O < s; O++) {
        const X = P + O, Q = L + O;
        x === true ? u.push(Q, Q + 1, X) : u.push(Q + 1, Q, X), I += 3;
      }
      c.addGroup(p, I, x === true ? 1 : 2), p += I;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Fu(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Pm extends Fu {
  constructor(e = 1, t = 1, i = 32, s = 1, r = false, o = 0, a = Math.PI * 2) {
    super(0, e, t, i, s, r, o, a), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: i, heightSegments: s, openEnded: r, thetaStart: o, thetaLength: a };
  }
  static fromJSON(e) {
    return new Pm(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Bu extends Mt {
  constructor(e = [], t = [], i = 1, s = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: i, detail: s };
    const r = [], o = [];
    a(s), c(i), u(), this.setAttribute("position", new et(r, 3)), this.setAttribute("normal", new et(r.slice(), 3)), this.setAttribute("uv", new et(o, 2)), s === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function a(E) {
      const b = new N(), x = new N(), P = new N();
      for (let w = 0; w < t.length; w += 3) d(t[w + 0], b), d(t[w + 1], x), d(t[w + 2], P), l(b, x, P, E);
    }
    function l(E, b, x, P) {
      const w = P + 1, C = [];
      for (let I = 0; I <= w; I++) {
        C[I] = [];
        const S = E.clone().lerp(x, I / w), M = b.clone().lerp(x, I / w), L = w - I;
        for (let O = 0; O <= L; O++) O === 0 && I === w ? C[I][O] = S : C[I][O] = S.clone().lerp(M, O / L);
      }
      for (let I = 0; I < w; I++) for (let S = 0; S < 2 * (w - I) - 1; S++) {
        const M = Math.floor(S / 2);
        S % 2 === 0 ? (f(C[I][M + 1]), f(C[I + 1][M]), f(C[I][M])) : (f(C[I][M + 1]), f(C[I + 1][M + 1]), f(C[I + 1][M]));
      }
    }
    function c(E) {
      const b = new N();
      for (let x = 0; x < r.length; x += 3) b.x = r[x + 0], b.y = r[x + 1], b.z = r[x + 2], b.normalize().multiplyScalar(E), r[x + 0] = b.x, r[x + 1] = b.y, r[x + 2] = b.z;
    }
    function u() {
      const E = new N();
      for (let b = 0; b < r.length; b += 3) {
        E.x = r[b + 0], E.y = r[b + 1], E.z = r[b + 2];
        const x = g(E) / 2 / Math.PI + 0.5, P = p(E) / Math.PI + 0.5;
        o.push(x, 1 - P);
      }
      m(), h();
    }
    function h() {
      for (let E = 0; E < o.length; E += 6) {
        const b = o[E + 0], x = o[E + 2], P = o[E + 4], w = Math.max(b, x, P), C = Math.min(b, x, P);
        w > 0.9 && C < 0.1 && (b < 0.2 && (o[E + 0] += 1), x < 0.2 && (o[E + 2] += 1), P < 0.2 && (o[E + 4] += 1));
      }
    }
    function f(E) {
      r.push(E.x, E.y, E.z);
    }
    function d(E, b) {
      const x = E * 3;
      b.x = e[x + 0], b.y = e[x + 1], b.z = e[x + 2];
    }
    function m() {
      const E = new N(), b = new N(), x = new N(), P = new N(), w = new fe(), C = new fe(), I = new fe();
      for (let S = 0, M = 0; S < r.length; S += 9, M += 6) {
        E.set(r[S + 0], r[S + 1], r[S + 2]), b.set(r[S + 3], r[S + 4], r[S + 5]), x.set(r[S + 6], r[S + 7], r[S + 8]), w.set(o[M + 0], o[M + 1]), C.set(o[M + 2], o[M + 3]), I.set(o[M + 4], o[M + 5]), P.copy(E).add(b).add(x).divideScalar(3);
        const L = g(P);
        _(w, M + 0, E, L), _(C, M + 2, b, L), _(I, M + 4, x, L);
      }
    }
    function _(E, b, x, P) {
      P < 0 && E.x === 1 && (o[b] = E.x - 1), x.x === 0 && x.z === 0 && (o[b] = P / 2 / Math.PI + 0.5);
    }
    function g(E) {
      return Math.atan2(E.z, -E.x);
    }
    function p(E) {
      return Math.atan2(-E.y, Math.sqrt(E.x * E.x + E.z * E.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Bu(e.vertices, e.indices, e.radius, e.details);
  }
}
class Wn {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    console.warn("THREE.Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getPoint(i, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    const t = [];
    let i, s = this.getPoint(0), r = 0;
    t.push(0);
    for (let o = 1; o <= e; o++) i = this.getPoint(o / e), r += i.distanceTo(s), t.push(r), s = i;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const i = this.getLengths();
    let s = 0;
    const r = i.length;
    let o;
    t ? o = t : o = e * i[r - 1];
    let a = 0, l = r - 1, c;
    for (; a <= l; ) if (s = Math.floor(a + (l - a) / 2), c = i[s] - o, c < 0) a = s + 1;
    else if (c > 0) l = s - 1;
    else {
      l = s;
      break;
    }
    if (s = l, i[s] === o) return s / (r - 1);
    const u = i[s], f = i[s + 1] - u, d = (o - u) / f;
    return (s + d) / (r - 1);
  }
  getTangent(e, t) {
    let s = e - 1e-4, r = e + 1e-4;
    s < 0 && (s = 0), r > 1 && (r = 1);
    const o = this.getPoint(s), a = this.getPoint(r), l = t || (o.isVector2 ? new fe() : new N());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getTangent(i, t);
  }
  computeFrenetFrames(e, t = false) {
    const i = new N(), s = [], r = [], o = [], a = new N(), l = new Ye();
    for (let d = 0; d <= e; d++) {
      const m = d / e;
      s[d] = this.getTangentAt(m, new N());
    }
    r[0] = new N(), o[0] = new N();
    let c = Number.MAX_VALUE;
    const u = Math.abs(s[0].x), h = Math.abs(s[0].y), f = Math.abs(s[0].z);
    u <= c && (c = u, i.set(1, 0, 0)), h <= c && (c = h, i.set(0, 1, 0)), f <= c && i.set(0, 0, 1), a.crossVectors(s[0], i).normalize(), r[0].crossVectors(s[0], a), o[0].crossVectors(s[0], r[0]);
    for (let d = 1; d <= e; d++) {
      if (r[d] = r[d - 1].clone(), o[d] = o[d - 1].clone(), a.crossVectors(s[d - 1], s[d]), a.length() > Number.EPSILON) {
        a.normalize();
        const m = Math.acos(qe(s[d - 1].dot(s[d]), -1, 1));
        r[d].applyMatrix4(l.makeRotationAxis(a, m));
      }
      o[d].crossVectors(s[d], r[d]);
    }
    if (t === true) {
      let d = Math.acos(qe(r[0].dot(r[e]), -1, 1));
      d /= e, s[0].dot(a.crossVectors(r[0], r[e])) > 0 && (d = -d);
      for (let m = 1; m <= e; m++) r[m].applyMatrix4(l.makeRotationAxis(s[m], d * m)), o[m].crossVectors(s[m], r[m]);
    }
    return { tangents: s, normals: r, binormals: o };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class zu extends Wn {
  constructor(e = 0, t = 0, i = 1, s = 1, r = 0, o = Math.PI * 2, a = false, l = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = s, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
  }
  getPoint(e, t = new fe()) {
    const i = t, s = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += s;
    for (; r > s; ) r -= s;
    r < Number.EPSILON && (o ? r = 0 : r = s), this.aClockwise === true && !o && (r === s ? r = -s : r = r - s);
    const a = this.aStartAngle + e * r;
    let l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation), h = Math.sin(this.aRotation), f = l - this.aX, d = c - this.aY;
      l = f * u - d * h + this.aX, c = f * h + d * u + this.aY;
    }
    return i.set(l, c);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class y0 extends zu {
  constructor(e, t, i, s, r, o) {
    super(e, t, i, i, s, r, o), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function Hu() {
  let n = 0, e = 0, t = 0, i = 0;
  function s(r, o, a, l) {
    n = r, e = a, t = -3 * r + 3 * o - 2 * a - l, i = 2 * r - 2 * o + a + l;
  }
  return { initCatmullRom: function(r, o, a, l, c) {
    s(o, a, c * (a - r), c * (l - o));
  }, initNonuniformCatmullRom: function(r, o, a, l, c, u, h) {
    let f = (o - r) / c - (a - r) / (c + u) + (a - o) / u, d = (a - o) / u - (l - o) / (u + h) + (l - a) / h;
    f *= u, d *= u, s(o, a, f, d);
  }, calc: function(r) {
    const o = r * r, a = o * r;
    return n + e * r + t * o + i * a;
  } };
}
const No = new N(), wl = new Hu(), Rl = new Hu(), Cl = new Hu();
class M0 extends Wn {
  constructor(e = [], t = false, i = "centripetal", s = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = i, this.tension = s;
  }
  getPoint(e, t = new N()) {
    const i = t, s = this.points, r = s.length, o = (r - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), l = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : l === 0 && a === r - 1 && (a = r - 2, l = 1);
    let c, u;
    this.closed || a > 0 ? c = s[(a - 1) % r] : (No.subVectors(s[0], s[1]).add(s[0]), c = No);
    const h = s[a % r], f = s[(a + 1) % r];
    if (this.closed || a + 2 < r ? u = s[(a + 2) % r] : (No.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), u = No), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(c.distanceToSquared(h), d), _ = Math.pow(h.distanceToSquared(f), d), g = Math.pow(f.distanceToSquared(u), d);
      _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), g < 1e-4 && (g = _), wl.initNonuniformCatmullRom(c.x, h.x, f.x, u.x, m, _, g), Rl.initNonuniformCatmullRom(c.y, h.y, f.y, u.y, m, _, g), Cl.initNonuniformCatmullRom(c.z, h.z, f.z, u.z, m, _, g);
    } else this.curveType === "catmullrom" && (wl.initCatmullRom(c.x, h.x, f.x, u.x, this.tension), Rl.initCatmullRom(c.y, h.y, f.y, u.y, this.tension), Cl.initCatmullRom(c.z, h.z, f.z, u.z, this.tension));
    return i.set(wl.calc(l), Rl.calc(l), Cl.calc(l)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(s.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const s = this.points[t];
      e.points.push(s.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(new N().fromArray(s));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function Rf(n, e, t, i, s) {
  const r = (i - e) * 0.5, o = (s - t) * 0.5, a = n * n, l = n * a;
  return (2 * t - 2 * i + r + o) * l + (-3 * t + 3 * i - 2 * r - o) * a + r * n + t;
}
function S0(n, e) {
  const t = 1 - n;
  return t * t * e;
}
function b0(n, e) {
  return 2 * (1 - n) * n * e;
}
function T0(n, e) {
  return n * n * e;
}
function Pr(n, e, t, i) {
  return S0(n, e) + b0(n, t) + T0(n, i);
}
function E0(n, e) {
  const t = 1 - n;
  return t * t * t * e;
}
function A0(n, e) {
  const t = 1 - n;
  return 3 * t * t * n * e;
}
function w0(n, e) {
  return 3 * (1 - n) * n * n * e;
}
function R0(n, e) {
  return n * n * n * e;
}
function Lr(n, e, t, i, s) {
  return E0(n, e) + A0(n, t) + w0(n, i) + R0(n, s);
}
class Lm extends Wn {
  constructor(e = new fe(), t = new fe(), i = new fe(), s = new fe()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new fe()) {
    const i = t, s = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return i.set(Lr(e, s.x, r.x, o.x, a.x), Lr(e, s.y, r.y, o.y, a.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class C0 extends Wn {
  constructor(e = new N(), t = new N(), i = new N(), s = new N()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new N()) {
    const i = t, s = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return i.set(Lr(e, s.x, r.x, o.x, a.x), Lr(e, s.y, r.y, o.y, a.y), Lr(e, s.z, r.z, o.z, a.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Im extends Wn {
  constructor(e = new fe(), t = new fe()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new fe()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new fe()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class P0 extends Wn {
  constructor(e = new N(), t = new N()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new N()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new N()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Dm extends Wn {
  constructor(e = new fe(), t = new fe(), i = new fe()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new fe()) {
    const i = t, s = this.v0, r = this.v1, o = this.v2;
    return i.set(Pr(e, s.x, r.x, o.x), Pr(e, s.y, r.y, o.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class L0 extends Wn {
  constructor(e = new N(), t = new N(), i = new N()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new N()) {
    const i = t, s = this.v0, r = this.v1, o = this.v2;
    return i.set(Pr(e, s.x, r.x, o.x), Pr(e, s.y, r.y, o.y), Pr(e, s.z, r.z, o.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Nm extends Wn {
  constructor(e = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new fe()) {
    const i = t, s = this.points, r = (s.length - 1) * e, o = Math.floor(r), a = r - o, l = s[o === 0 ? o : o - 1], c = s[o], u = s[o > s.length - 2 ? s.length - 1 : o + 1], h = s[o > s.length - 3 ? s.length - 1 : o + 2];
    return i.set(Rf(a, l.x, c.x, u.x, h.x), Rf(a, l.y, c.y, u.y, h.y)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const s = this.points[t];
      e.points.push(s.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(new fe().fromArray(s));
    }
    return this;
  }
}
var Yc = Object.freeze({ __proto__: null, ArcCurve: y0, CatmullRomCurve3: M0, CubicBezierCurve: Lm, CubicBezierCurve3: C0, EllipseCurve: zu, LineCurve: Im, LineCurve3: P0, QuadraticBezierCurve: Dm, QuadraticBezierCurve3: L0, SplineCurve: Nm });
class I0 extends Wn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const i = e.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new Yc[i](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const i = e * this.getLength(), s = this.getCurveLengths();
    let r = 0;
    for (; r < s.length; ) {
      if (s[r] >= i) {
        const o = s[r] - i, a = this.curves[r], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
        return a.getPointAt(c, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let i = 0, s = this.curves.length; i < s; i++) t += this.curves[i].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let i;
    for (let s = 0, r = this.curves; s < r.length; s++) {
      const o = r[s], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, l = o.getPoints(a);
      for (let c = 0; c < l.length; c++) {
        const u = l[c];
        i && i.equals(u) || (t.push(u), i = u);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const s = e.curves[t];
      this.curves.push(s.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, i = this.curves.length; t < i; t++) {
      const s = this.curves[t];
      e.curves.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const s = e.curves[t];
      this.curves.push(new Yc[s.type]().fromJSON(s));
    }
    return this;
  }
}
class Cf extends I0 {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new fe(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const i = new Im(this.currentPoint.clone(), new fe(e, t));
    return this.curves.push(i), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, i, s) {
    const r = new Dm(this.currentPoint.clone(), new fe(e, t), new fe(i, s));
    return this.curves.push(r), this.currentPoint.set(i, s), this;
  }
  bezierCurveTo(e, t, i, s, r, o) {
    const a = new Lm(this.currentPoint.clone(), new fe(e, t), new fe(i, s), new fe(r, o));
    return this.curves.push(a), this.currentPoint.set(r, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), i = new Nm(t);
    return this.curves.push(i), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, i, s, r, o) {
    const a = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(e + a, t + l, i, s, r, o), this;
  }
  absarc(e, t, i, s, r, o) {
    return this.absellipse(e, t, i, i, s, r, o), this;
  }
  ellipse(e, t, i, s, r, o, a, l) {
    const c = this.currentPoint.x, u = this.currentPoint.y;
    return this.absellipse(e + c, t + u, i, s, r, o, a, l), this;
  }
  absellipse(e, t, i, s, r, o, a, l) {
    const c = new zu(e, t, i, s, r, o, a, l);
    if (this.curves.length > 0) {
      const h = c.getPoint(0);
      h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
    }
    this.curves.push(c);
    const u = c.getPoint(1);
    return this.currentPoint.copy(u), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class D0 extends Cf {
  constructor(e) {
    super(e), this.uuid = _n(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let i = 0, s = this.holes.length; i < s; i++) t[i] = this.holes[i].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const s = e.holes[t];
      this.holes.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, i = this.holes.length; t < i; t++) {
      const s = this.holes[t];
      e.holes.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const s = e.holes[t];
      this.holes.push(new Cf().fromJSON(s));
    }
    return this;
  }
}
function N0(n, e, t = 2) {
  const i = e && e.length, s = i ? e[0] * t : n.length;
  let r = Um(n, 0, s, t, true);
  const o = [];
  if (!r || r.next === r.prev) return o;
  let a, l, c;
  if (i && (r = z0(n, e, r, t)), n.length > 80 * t) {
    a = 1 / 0, l = 1 / 0;
    let u = -1 / 0, h = -1 / 0;
    for (let f = t; f < s; f += t) {
      const d = n[f], m = n[f + 1];
      d < a && (a = d), m < l && (l = m), d > u && (u = d), m > h && (h = m);
    }
    c = Math.max(u - a, h - l), c = c !== 0 ? 32767 / c : 0;
  }
  return jr(r, o, t, a, l, c, 0), o;
}
function Um(n, e, t, i, s) {
  let r;
  if (s === Z0(n, e, t, i) > 0) for (let o = e; o < t; o += i) r = Pf(o / i | 0, n[o], n[o + 1], r);
  else for (let o = t - i; o >= e; o -= i) r = Pf(o / i | 0, n[o], n[o + 1], r);
  return r && Js(r, r.next) && (Zr(r), r = r.next), r;
}
function ls(n, e) {
  if (!n) return n;
  e || (e = n);
  let t = n, i;
  do
    if (i = false, !t.steiner && (Js(t, t.next) || vt(t.prev, t, t.next) === 0)) {
      if (Zr(t), t = e = t.prev, t === t.next) break;
      i = true;
    } else t = t.next;
  while (i || t !== e);
  return e;
}
function jr(n, e, t, i, s, r, o) {
  if (!n) return;
  !o && r && W0(n, i, s, r);
  let a = n;
  for (; n.prev !== n.next; ) {
    const l = n.prev, c = n.next;
    if (r ? O0(n, i, s, r) : U0(n)) {
      e.push(l.i, n.i, c.i), Zr(n), n = c.next, a = c.next;
      continue;
    }
    if (n = c, n === a) {
      o ? o === 1 ? (n = F0(ls(n), e), jr(n, e, t, i, s, r, 2)) : o === 2 && B0(n, e, t, i, s, r) : jr(ls(n), e, t, i, s, r, 1);
      break;
    }
  }
}
function U0(n) {
  const e = n.prev, t = n, i = n.next;
  if (vt(e, t, i) >= 0) return false;
  const s = e.x, r = t.x, o = i.x, a = e.y, l = t.y, c = i.y, u = Math.min(s, r, o), h = Math.min(a, l, c), f = Math.max(s, r, o), d = Math.max(a, l, c);
  let m = i.next;
  for (; m !== e; ) {
    if (m.x >= u && m.x <= f && m.y >= h && m.y <= d && yr(s, a, r, l, o, c, m.x, m.y) && vt(m.prev, m, m.next) >= 0) return false;
    m = m.next;
  }
  return true;
}
function O0(n, e, t, i) {
  const s = n.prev, r = n, o = n.next;
  if (vt(s, r, o) >= 0) return false;
  const a = s.x, l = r.x, c = o.x, u = s.y, h = r.y, f = o.y, d = Math.min(a, l, c), m = Math.min(u, h, f), _ = Math.max(a, l, c), g = Math.max(u, h, f), p = qc(d, m, e, t, i), E = qc(_, g, e, t, i);
  let b = n.prevZ, x = n.nextZ;
  for (; b && b.z >= p && x && x.z <= E; ) {
    if (b.x >= d && b.x <= _ && b.y >= m && b.y <= g && b !== s && b !== o && yr(a, u, l, h, c, f, b.x, b.y) && vt(b.prev, b, b.next) >= 0 || (b = b.prevZ, x.x >= d && x.x <= _ && x.y >= m && x.y <= g && x !== s && x !== o && yr(a, u, l, h, c, f, x.x, x.y) && vt(x.prev, x, x.next) >= 0)) return false;
    x = x.nextZ;
  }
  for (; b && b.z >= p; ) {
    if (b.x >= d && b.x <= _ && b.y >= m && b.y <= g && b !== s && b !== o && yr(a, u, l, h, c, f, b.x, b.y) && vt(b.prev, b, b.next) >= 0) return false;
    b = b.prevZ;
  }
  for (; x && x.z <= E; ) {
    if (x.x >= d && x.x <= _ && x.y >= m && x.y <= g && x !== s && x !== o && yr(a, u, l, h, c, f, x.x, x.y) && vt(x.prev, x, x.next) >= 0) return false;
    x = x.nextZ;
  }
  return true;
}
function F0(n, e) {
  let t = n;
  do {
    const i = t.prev, s = t.next.next;
    !Js(i, s) && Fm(i, t, t.next, s) && Kr(i, s) && Kr(s, i) && (e.push(i.i, t.i, s.i), Zr(t), Zr(t.next), t = n = s), t = t.next;
  } while (t !== n);
  return ls(t);
}
function B0(n, e, t, i, s, r) {
  let o = n;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && q0(o, a)) {
        let l = Bm(o, a);
        o = ls(o, o.next), l = ls(l, l.next), jr(o, e, t, i, s, r, 0), jr(l, e, t, i, s, r, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== n);
}
function z0(n, e, t, i) {
  const s = [];
  for (let r = 0, o = e.length; r < o; r++) {
    const a = e[r] * i, l = r < o - 1 ? e[r + 1] * i : n.length, c = Um(n, a, l, i, false);
    c === c.next && (c.steiner = true), s.push(Y0(c));
  }
  s.sort(H0);
  for (let r = 0; r < s.length; r++) t = V0(s[r], t);
  return t;
}
function H0(n, e) {
  let t = n.x - e.x;
  if (t === 0 && (t = n.y - e.y, t === 0)) {
    const i = (n.next.y - n.y) / (n.next.x - n.x), s = (e.next.y - e.y) / (e.next.x - e.x);
    t = i - s;
  }
  return t;
}
function V0(n, e) {
  const t = k0(n, e);
  if (!t) return e;
  const i = Bm(t, n);
  return ls(i, i.next), ls(t, t.next);
}
function k0(n, e) {
  let t = e;
  const i = n.x, s = n.y;
  let r = -1 / 0, o;
  if (Js(n, t)) return t;
  do {
    if (Js(n, t.next)) return t.next;
    if (s <= t.y && s >= t.next.y && t.next.y !== t.y) {
      const h = t.x + (s - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (h <= i && h > r && (r = h, o = t.x < t.next.x ? t : t.next, h === i)) return o;
    }
    t = t.next;
  } while (t !== e);
  if (!o) return null;
  const a = o, l = o.x, c = o.y;
  let u = 1 / 0;
  t = o;
  do {
    if (i >= t.x && t.x >= l && i !== t.x && Om(s < c ? i : r, s, l, c, s < c ? r : i, s, t.x, t.y)) {
      const h = Math.abs(s - t.y) / (i - t.x);
      Kr(t, n) && (h < u || h === u && (t.x > o.x || t.x === o.x && G0(o, t))) && (o = t, u = h);
    }
    t = t.next;
  } while (t !== a);
  return o;
}
function G0(n, e) {
  return vt(n.prev, n, e.prev) < 0 && vt(e.next, n, n.next) < 0;
}
function W0(n, e, t, i) {
  let s = n;
  do
    s.z === 0 && (s.z = qc(s.x, s.y, e, t, i)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== n);
  s.prevZ.nextZ = null, s.prevZ = null, X0(s);
}
function X0(n) {
  let e, t = 1;
  do {
    let i = n, s;
    n = null;
    let r = null;
    for (e = 0; i; ) {
      e++;
      let o = i, a = 0;
      for (let c = 0; c < t && (a++, o = o.nextZ, !!o); c++) ;
      let l = t;
      for (; a > 0 || l > 0 && o; ) a !== 0 && (l === 0 || !o || i.z <= o.z) ? (s = i, i = i.nextZ, a--) : (s = o, o = o.nextZ, l--), r ? r.nextZ = s : n = s, s.prevZ = r, r = s;
      i = o;
    }
    r.nextZ = null, t *= 2;
  } while (e > 1);
  return n;
}
function qc(n, e, t, i, s) {
  return n = (n - t) * s | 0, e = (e - i) * s | 0, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, n | e << 1;
}
function Y0(n) {
  let e = n, t = n;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== n);
  return t;
}
function Om(n, e, t, i, s, r, o, a) {
  return (s - o) * (e - a) >= (n - o) * (r - a) && (n - o) * (i - a) >= (t - o) * (e - a) && (t - o) * (r - a) >= (s - o) * (i - a);
}
function yr(n, e, t, i, s, r, o, a) {
  return !(n === o && e === a) && Om(n, e, t, i, s, r, o, a);
}
function q0(n, e) {
  return n.next.i !== e.i && n.prev.i !== e.i && !j0(n, e) && (Kr(n, e) && Kr(e, n) && K0(n, e) && (vt(n.prev, n, e.prev) || vt(n, e.prev, e)) || Js(n, e) && vt(n.prev, n, n.next) > 0 && vt(e.prev, e, e.next) > 0);
}
function vt(n, e, t) {
  return (e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y);
}
function Js(n, e) {
  return n.x === e.x && n.y === e.y;
}
function Fm(n, e, t, i) {
  const s = Oo(vt(n, e, t)), r = Oo(vt(n, e, i)), o = Oo(vt(t, i, n)), a = Oo(vt(t, i, e));
  return !!(s !== r && o !== a || s === 0 && Uo(n, t, e) || r === 0 && Uo(n, i, e) || o === 0 && Uo(t, n, i) || a === 0 && Uo(t, e, i));
}
function Uo(n, e, t) {
  return e.x <= Math.max(n.x, t.x) && e.x >= Math.min(n.x, t.x) && e.y <= Math.max(n.y, t.y) && e.y >= Math.min(n.y, t.y);
}
function Oo(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}
function j0(n, e) {
  let t = n;
  do {
    if (t.i !== n.i && t.next.i !== n.i && t.i !== e.i && t.next.i !== e.i && Fm(t, t.next, n, e)) return true;
    t = t.next;
  } while (t !== n);
  return false;
}
function Kr(n, e) {
  return vt(n.prev, n, n.next) < 0 ? vt(n, e, n.next) >= 0 && vt(n, n.prev, e) >= 0 : vt(n, e, n.prev) < 0 || vt(n, n.next, e) < 0;
}
function K0(n, e) {
  let t = n, i = false;
  const s = (n.x + e.x) / 2, r = (n.y + e.y) / 2;
  do
    t.y > r != t.next.y > r && t.next.y !== t.y && s < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (i = !i), t = t.next;
  while (t !== n);
  return i;
}
function Bm(n, e) {
  const t = jc(n.i, n.x, n.y), i = jc(e.i, e.x, e.y), s = n.next, r = e.prev;
  return n.next = e, e.prev = n, t.next = s, s.prev = t, i.next = t, t.prev = i, r.next = i, i.prev = r, i;
}
function Pf(n, e, t, i) {
  const s = jc(n, e, t);
  return i ? (s.next = i.next, s.prev = i, i.next.prev = s, i.next = s) : (s.prev = s, s.next = s), s;
}
function Zr(n) {
  n.next.prev = n.prev, n.prev.next = n.next, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ);
}
function jc(n, e, t) {
  return { i: n, x: e, y: t, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
}
function Z0(n, e, t, i) {
  let s = 0;
  for (let r = e, o = t - i; r < t; r += i) s += (n[o] - n[r]) * (n[r + 1] + n[o + 1]), o = r;
  return s;
}
class J0 {
  static triangulate(e, t, i = 2) {
    return N0(e, t, i);
  }
}
class Ls {
  static area(e) {
    const t = e.length;
    let i = 0;
    for (let s = t - 1, r = 0; r < t; s = r++) i += e[s].x * e[r].y - e[r].x * e[s].y;
    return i * 0.5;
  }
  static isClockWise(e) {
    return Ls.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const i = [], s = [], r = [];
    Lf(e), If(i, e);
    let o = e.length;
    t.forEach(Lf);
    for (let l = 0; l < t.length; l++) s.push(o), o += t[l].length, If(i, t[l]);
    const a = J0.triangulate(i, s);
    for (let l = 0; l < a.length; l += 3) r.push(a.slice(l, l + 3));
    return r;
  }
}
function Lf(n) {
  const e = n.length;
  e > 2 && n[e - 1].equals(n[0]) && n.pop();
}
function If(n, e) {
  for (let t = 0; t < e.length; t++) n.push(e[t].x), n.push(e[t].y);
}
class zm extends Mt {
  constructor(e = new D0([new fe(0.5, 0.5), new fe(-0.5, 0.5), new fe(-0.5, -0.5), new fe(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: e, options: t }, e = Array.isArray(e) ? e : [e];
    const i = this, s = [], r = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a];
      o(c);
    }
    this.setAttribute("position", new et(s, 3)), this.setAttribute("uv", new et(r, 2)), this.computeVertexNormals();
    function o(a) {
      const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, u = t.steps !== void 0 ? t.steps : 1, h = t.depth !== void 0 ? t.depth : 1;
      let f = t.bevelEnabled !== void 0 ? t.bevelEnabled : true, d = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, m = t.bevelSize !== void 0 ? t.bevelSize : d - 0.1, _ = t.bevelOffset !== void 0 ? t.bevelOffset : 0, g = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath, E = t.UVGenerator !== void 0 ? t.UVGenerator : Q0;
      let b, x = false, P, w, C, I;
      p && (b = p.getSpacedPoints(u), x = true, f = false, P = p.computeFrenetFrames(u, false), w = new N(), C = new N(), I = new N()), f || (g = 0, d = 0, m = 0, _ = 0);
      const S = a.extractPoints(c);
      let M = S.shape;
      const L = S.holes;
      if (!Ls.isClockWise(M)) {
        M = M.reverse();
        for (let y = 0, V = L.length; y < V; y++) {
          const F = L[y];
          Ls.isClockWise(F) && (L[y] = F.reverse());
        }
      }
      function X(y) {
        const F = 10000000000000001e-36;
        let H = y[0];
        for (let z = 1; z <= y.length; z++) {
          const J = z % y.length, G = y[J], q = G.x - H.x, ae = G.y - H.y, T = q * q + ae * ae, v = Math.max(Math.abs(G.x), Math.abs(G.y), Math.abs(H.x), Math.abs(H.y)), U = F * v * v;
          if (T <= U) {
            y.splice(J, 1), z--;
            continue;
          }
          H = G;
        }
      }
      X(M), L.forEach(X);
      const Q = L.length, ne = M;
      for (let y = 0; y < Q; y++) {
        const V = L[y];
        M = M.concat(V);
      }
      function Z(y, V, F) {
        return V || console.error("THREE.ExtrudeGeometry: vec does not exist"), y.clone().addScaledVector(V, F);
      }
      const se = M.length;
      function j(y, V, F) {
        let H, z, J;
        const G = y.x - V.x, q = y.y - V.y, ae = F.x - y.x, T = F.y - y.y, v = G * G + q * q, U = G * T - q * ae;
        if (Math.abs(U) > Number.EPSILON) {
          const Y = Math.sqrt(v), te = Math.sqrt(ae * ae + T * T), K = V.x - q / Y, ve = V.y + G / Y, ce = F.x - T / te, ye = F.y + ae / te, Te = ((ce - K) * T - (ye - ve) * ae) / (G * T - q * ae);
          H = K + G * Te - y.x, z = ve + q * Te - y.y;
          const oe = H * H + z * z;
          if (oe <= 2) return new fe(H, z);
          J = Math.sqrt(oe / 2);
        } else {
          let Y = false;
          G > Number.EPSILON ? ae > Number.EPSILON && (Y = true) : G < -Number.EPSILON ? ae < -Number.EPSILON && (Y = true) : Math.sign(q) === Math.sign(T) && (Y = true), Y ? (H = -q, z = G, J = Math.sqrt(v)) : (H = G, z = q, J = Math.sqrt(v / 2));
        }
        return new fe(H / J, z / J);
      }
      const de = [];
      for (let y = 0, V = ne.length, F = V - 1, H = y + 1; y < V; y++, F++, H++) F === V && (F = 0), H === V && (H = 0), de[y] = j(ne[y], ne[F], ne[H]);
      const xe = [];
      let be, Fe = de.concat();
      for (let y = 0, V = Q; y < V; y++) {
        const F = L[y];
        be = [];
        for (let H = 0, z = F.length, J = z - 1, G = H + 1; H < z; H++, J++, G++) J === z && (J = 0), G === z && (G = 0), be[H] = j(F[H], F[J], F[G]);
        xe.push(be), Fe = Fe.concat(be);
      }
      let Ze;
      if (g === 0) Ze = Ls.triangulateShape(ne, L);
      else {
        const y = [], V = [];
        for (let F = 0; F < g; F++) {
          const H = F / g, z = d * Math.cos(H * Math.PI / 2), J = m * Math.sin(H * Math.PI / 2) + _;
          for (let G = 0, q = ne.length; G < q; G++) {
            const ae = Z(ne[G], de[G], J);
            ke(ae.x, ae.y, -z), H === 0 && y.push(ae);
          }
          for (let G = 0, q = Q; G < q; G++) {
            const ae = L[G];
            be = xe[G];
            const T = [];
            for (let v = 0, U = ae.length; v < U; v++) {
              const Y = Z(ae[v], be[v], J);
              ke(Y.x, Y.y, -z), H === 0 && T.push(Y);
            }
            H === 0 && V.push(T);
          }
        }
        Ze = Ls.triangulateShape(y, V);
      }
      const ie = Ze.length, pe = m + _;
      for (let y = 0; y < se; y++) {
        const V = f ? Z(M[y], Fe[y], pe) : M[y];
        x ? (C.copy(P.normals[0]).multiplyScalar(V.x), w.copy(P.binormals[0]).multiplyScalar(V.y), I.copy(b[0]).add(C).add(w), ke(I.x, I.y, I.z)) : ke(V.x, V.y, 0);
      }
      for (let y = 1; y <= u; y++) for (let V = 0; V < se; V++) {
        const F = f ? Z(M[V], Fe[V], pe) : M[V];
        x ? (C.copy(P.normals[y]).multiplyScalar(F.x), w.copy(P.binormals[y]).multiplyScalar(F.y), I.copy(b[y]).add(C).add(w), ke(I.x, I.y, I.z)) : ke(F.x, F.y, h / u * y);
      }
      for (let y = g - 1; y >= 0; y--) {
        const V = y / g, F = d * Math.cos(V * Math.PI / 2), H = m * Math.sin(V * Math.PI / 2) + _;
        for (let z = 0, J = ne.length; z < J; z++) {
          const G = Z(ne[z], de[z], H);
          ke(G.x, G.y, h + F);
        }
        for (let z = 0, J = L.length; z < J; z++) {
          const G = L[z];
          be = xe[z];
          for (let q = 0, ae = G.length; q < ae; q++) {
            const T = Z(G[q], be[q], H);
            x ? ke(T.x, T.y + b[u - 1].y, b[u - 1].x + F) : ke(T.x, T.y, h + F);
          }
        }
      }
      we(), ge();
      function we() {
        const y = s.length / 3;
        if (f) {
          let V = 0, F = se * V;
          for (let H = 0; H < ie; H++) {
            const z = Ze[H];
            Ne(z[2] + F, z[1] + F, z[0] + F);
          }
          V = u + g * 2, F = se * V;
          for (let H = 0; H < ie; H++) {
            const z = Ze[H];
            Ne(z[0] + F, z[1] + F, z[2] + F);
          }
        } else {
          for (let V = 0; V < ie; V++) {
            const F = Ze[V];
            Ne(F[2], F[1], F[0]);
          }
          for (let V = 0; V < ie; V++) {
            const F = Ze[V];
            Ne(F[0] + se * u, F[1] + se * u, F[2] + se * u);
          }
        }
        i.addGroup(y, s.length / 3 - y, 0);
      }
      function ge() {
        const y = s.length / 3;
        let V = 0;
        Pe(ne, V), V += ne.length;
        for (let F = 0, H = L.length; F < H; F++) {
          const z = L[F];
          Pe(z, V), V += z.length;
        }
        i.addGroup(y, s.length / 3 - y, 1);
      }
      function Pe(y, V) {
        let F = y.length;
        for (; --F >= 0; ) {
          const H = F;
          let z = F - 1;
          z < 0 && (z = y.length - 1);
          for (let J = 0, G = u + g * 2; J < G; J++) {
            const q = se * J, ae = se * (J + 1), T = V + H + q, v = V + z + q, U = V + z + ae, Y = V + H + ae;
            dt(T, v, U, Y);
          }
        }
      }
      function ke(y, V, F) {
        l.push(y), l.push(V), l.push(F);
      }
      function Ne(y, V, F) {
        R(y), R(V), R(F);
        const H = s.length / 3, z = E.generateTopUV(i, s, H - 3, H - 2, H - 1);
        D(z[0]), D(z[1]), D(z[2]);
      }
      function dt(y, V, F, H) {
        R(y), R(V), R(H), R(V), R(F), R(H);
        const z = s.length / 3, J = E.generateSideWallUV(i, s, z - 6, z - 3, z - 2, z - 1);
        D(J[0]), D(J[1]), D(J[3]), D(J[1]), D(J[2]), D(J[3]);
      }
      function R(y) {
        s.push(l[y * 3 + 0]), s.push(l[y * 3 + 1]), s.push(l[y * 3 + 2]);
      }
      function D(y) {
        r.push(y.x), r.push(y.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, i = this.parameters.options;
    return $0(t, i, e);
  }
  static fromJSON(e, t) {
    const i = [];
    for (let r = 0, o = e.shapes.length; r < o; r++) {
      const a = t[e.shapes[r]];
      i.push(a);
    }
    const s = e.options.extrudePath;
    return s !== void 0 && (e.options.extrudePath = new Yc[s.type]().fromJSON(s)), new zm(i, e.options);
  }
}
const Q0 = { generateTopUV: function(n, e, t, i, s) {
  const r = e[t * 3], o = e[t * 3 + 1], a = e[i * 3], l = e[i * 3 + 1], c = e[s * 3], u = e[s * 3 + 1];
  return [new fe(r, o), new fe(a, l), new fe(c, u)];
}, generateSideWallUV: function(n, e, t, i, s, r) {
  const o = e[t * 3], a = e[t * 3 + 1], l = e[t * 3 + 2], c = e[i * 3], u = e[i * 3 + 1], h = e[i * 3 + 2], f = e[s * 3], d = e[s * 3 + 1], m = e[s * 3 + 2], _ = e[r * 3], g = e[r * 3 + 1], p = e[r * 3 + 2];
  return Math.abs(a - u) < Math.abs(o - c) ? [new fe(o, 1 - l), new fe(c, 1 - h), new fe(f, 1 - m), new fe(_, 1 - p)] : [new fe(a, 1 - l), new fe(u, 1 - h), new fe(d, 1 - m), new fe(g, 1 - p)];
} };
function $0(n, e, t) {
  if (t.shapes = [], Array.isArray(n)) for (let i = 0, s = n.length; i < s; i++) {
    const r = n[i];
    t.shapes.push(r.uuid);
  }
  else t.shapes.push(n.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class Vu extends Bu {
  constructor(e = 1, t = 0) {
    const i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], s = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
    super(i, s, e, t), this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new Vu(e.radius, e.detail);
  }
}
class Oa extends Mt {
  constructor(e = 1, t = 1, i = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: i, heightSegments: s };
    const r = e / 2, o = t / 2, a = Math.floor(i), l = Math.floor(s), c = a + 1, u = l + 1, h = e / a, f = t / l, d = [], m = [], _ = [], g = [];
    for (let p = 0; p < u; p++) {
      const E = p * f - o;
      for (let b = 0; b < c; b++) {
        const x = b * h - r;
        m.push(x, -E, 0), _.push(0, 0, 1), g.push(b / a), g.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let E = 0; E < a; E++) {
      const b = E + c * p, x = E + c * (p + 1), P = E + 1 + c * (p + 1), w = E + 1 + c * p;
      d.push(b, x, w), d.push(x, P, w);
    }
    this.setIndex(d), this.setAttribute("position", new et(m, 3)), this.setAttribute("normal", new et(_, 3)), this.setAttribute("uv", new et(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Oa(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class ku extends Mt {
  constructor(e = 1, t = 32, i = 16, s = 0, r = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: i, phiStart: s, phiLength: r, thetaStart: o, thetaLength: a }, t = Math.max(3, Math.floor(t)), i = Math.max(2, Math.floor(i));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const u = [], h = new N(), f = new N(), d = [], m = [], _ = [], g = [];
    for (let p = 0; p <= i; p++) {
      const E = [], b = p / i;
      let x = 0;
      p === 0 && o === 0 ? x = 0.5 / t : p === i && l === Math.PI && (x = -0.5 / t);
      for (let P = 0; P <= t; P++) {
        const w = P / t;
        h.x = -e * Math.cos(s + w * r) * Math.sin(o + b * a), h.y = e * Math.cos(o + b * a), h.z = e * Math.sin(s + w * r) * Math.sin(o + b * a), m.push(h.x, h.y, h.z), f.copy(h).normalize(), _.push(f.x, f.y, f.z), g.push(w + x, 1 - b), E.push(c++);
      }
      u.push(E);
    }
    for (let p = 0; p < i; p++) for (let E = 0; E < t; E++) {
      const b = u[p][E + 1], x = u[p][E], P = u[p + 1][E], w = u[p + 1][E + 1];
      (p !== 0 || o > 0) && d.push(b, x, w), (p !== i - 1 || l < Math.PI) && d.push(x, P, w);
    }
    this.setIndex(d), this.setAttribute("position", new et(m, 3)), this.setAttribute("normal", new et(_, 3)), this.setAttribute("uv", new et(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ku(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Hm extends Mt {
  constructor(e = 1, t = 0.4, i = 12, s = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: i, tubularSegments: s, arc: r }, i = Math.floor(i), s = Math.floor(s);
    const o = [], a = [], l = [], c = [], u = new N(), h = new N(), f = new N();
    for (let d = 0; d <= i; d++) for (let m = 0; m <= s; m++) {
      const _ = m / s * r, g = d / i * Math.PI * 2;
      h.x = (e + t * Math.cos(g)) * Math.cos(_), h.y = (e + t * Math.cos(g)) * Math.sin(_), h.z = t * Math.sin(g), a.push(h.x, h.y, h.z), u.x = e * Math.cos(_), u.y = e * Math.sin(_), f.subVectors(h, u).normalize(), l.push(f.x, f.y, f.z), c.push(m / s), c.push(d / i);
    }
    for (let d = 1; d <= i; d++) for (let m = 1; m <= s; m++) {
      const _ = (s + 1) * d + m - 1, g = (s + 1) * (d - 1) + m - 1, p = (s + 1) * (d - 1) + m, E = (s + 1) * d + m;
      o.push(_, g, E), o.push(g, p, E);
    }
    this.setIndex(o), this.setAttribute("position", new et(a, 3)), this.setAttribute("normal", new et(l, 3)), this.setAttribute("uv", new et(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Hm(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class wA extends Mt {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) {
      const t = [], i = /* @__PURE__ */ new Set(), s = new N(), r = new N();
      if (e.index !== null) {
        const o = e.attributes.position, a = e.index;
        let l = e.groups;
        l.length === 0 && (l = [{ start: 0, count: a.count, materialIndex: 0 }]);
        for (let c = 0, u = l.length; c < u; ++c) {
          const h = l[c], f = h.start, d = h.count;
          for (let m = f, _ = f + d; m < _; m += 3) for (let g = 0; g < 3; g++) {
            const p = a.getX(m + g), E = a.getX(m + (g + 1) % 3);
            s.fromBufferAttribute(o, p), r.fromBufferAttribute(o, E), Df(s, r, i) === true && (t.push(s.x, s.y, s.z), t.push(r.x, r.y, r.z));
          }
        }
      } else {
        const o = e.attributes.position;
        for (let a = 0, l = o.count / 3; a < l; a++) for (let c = 0; c < 3; c++) {
          const u = 3 * a + c, h = 3 * a + (c + 1) % 3;
          s.fromBufferAttribute(o, u), r.fromBufferAttribute(o, h), Df(s, r, i) === true && (t.push(s.x, s.y, s.z), t.push(r.x, r.y, r.z));
        }
      }
      this.setAttribute("position", new et(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function Df(n, e, t) {
  const i = `${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`, s = `${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;
  return t.has(i) === true || t.has(s) === true ? false : (t.add(i), t.add(s), true);
}
class ey extends rn {
  constructor(e) {
    super(e), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}
class Gu extends vn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ue(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Na, this.normalScale = new fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ln(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Xn extends Gu {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new fe(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return qe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ue(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ue(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ue(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class RA extends vn {
  constructor(e) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new Ue(16777215), this.specular = new Ue(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Na, this.normalScale = new fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ln(), this.combine = Mu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class CA extends vn {
  constructor(e) {
    super(), this.isMeshNormalMaterial = true, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Na, this.normalScale = new fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class ty extends vn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = hv, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class ny extends vn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function Fo(n, e) {
  return !n || n.constructor === e ? n : typeof e.BYTES_PER_ELEMENT == "number" ? new e(n) : Array.prototype.slice.call(n);
}
function iy(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function sy(n) {
  function e(s, r) {
    return n[s] - n[r];
  }
  const t = n.length, i = new Array(t);
  for (let s = 0; s !== t; ++s) i[s] = s;
  return i.sort(e), i;
}
function Nf(n, e, t) {
  const i = n.length, s = new n.constructor(i);
  for (let r = 0, o = 0; o !== i; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l) s[o++] = n[a + l];
  }
  return s;
}
function Vm(n, e, t, i) {
  let s = 1, r = n[0];
  for (; r !== void 0 && r[i] === void 0; ) r = n[s++];
  if (r === void 0) return;
  let o = r[i];
  if (o !== void 0) if (Array.isArray(o)) do
    o = r[i], o !== void 0 && (e.push(r.time), t.push(...o)), r = n[s++];
  while (r !== void 0);
  else if (o.toArray !== void 0) do
    o = r[i], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = n[s++];
  while (r !== void 0);
  else do
    o = r[i], o !== void 0 && (e.push(r.time), t.push(o)), r = n[s++];
  while (r !== void 0);
}
class to {
  constructor(e, t, i, s) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = s !== void 0 ? s : new t.constructor(i), this.sampleValues = t, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let i = this._cachedIndex, s = t[i], r = t[i - 1];
    e: {
      t: {
        let o;
        n: {
          i: if (!(e < s)) {
            for (let a = i + 2; ; ) {
              if (s === void 0) {
                if (e < r) break i;
                return i = t.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
              }
              if (i === a) break;
              if (r = s, s = t[++i], e < s) break t;
            }
            o = t.length;
            break n;
          }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (i = 2, r = a);
            for (let l = i - 2; ; ) {
              if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (i === l) break;
              if (s = r, r = t[--i - 1], e >= r) break t;
            }
            o = i, i = 0;
            break n;
          }
          break e;
        }
        for (; i < o; ) {
          const a = i + o >>> 1;
          e < t[a] ? o = a : i = a + 1;
        }
        if (s = t[i], r = t[i - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (s === void 0) return i = t.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
      }
      this._cachedIndex = i, this.intervalChanged_(i, r, s);
    }
    return this.interpolate_(i, r, e, s);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, i = this.sampleValues, s = this.valueSize, r = e * s;
    for (let o = 0; o !== s; ++o) t[o] = i[r + o];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class ry extends to {
  constructor(e, t, i, s) {
    super(e, t, i, s), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Cs, endingEnd: Cs };
  }
  intervalChanged_(e, t, i) {
    const s = this.parameterPositions;
    let r = e - 2, o = e + 1, a = s[r], l = s[o];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case Ps:
        r = e, a = 2 * t - i;
        break;
      case ga:
        r = s.length - 2, a = t + s[r] - s[r + 1];
        break;
      default:
        r = e, a = i;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case Ps:
        o = e, l = 2 * i - t;
        break;
      case ga:
        o = 1, l = i + s[1] - s[0];
        break;
      default:
        o = e - 1, l = t;
    }
    const c = (i - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - i), this._offsetPrev = r * u, this._offsetNext = o * u;
  }
  interpolate_(e, t, i, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, f = this._weightPrev, d = this._weightNext, m = (i - t) / (s - t), _ = m * m, g = _ * m, p = -f * g + 2 * f * _ - f * m, E = (1 + f) * g + (-1.5 - 2 * f) * _ + (-0.5 + f) * m + 1, b = (-1 - d) * g + (1.5 + d) * _ + 0.5 * m, x = d * g - d * _;
    for (let P = 0; P !== a; ++P) r[P] = p * o[u + P] + E * o[c + P] + b * o[l + P] + x * o[h + P];
    return r;
  }
}
class km extends to {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  interpolate_(e, t, i, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (i - t) / (s - t), h = 1 - u;
    for (let f = 0; f !== a; ++f) r[f] = o[c + f] * h + o[l + f] * u;
    return r;
  }
}
class oy extends to {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class In {
  constructor(e, t, i, s) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Fo(t, this.TimeBufferType), this.values = Fo(i, this.ValueBufferType), this.setInterpolation(s || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let i;
    if (t.toJSON !== this.toJSON) i = t.toJSON(e);
    else {
      i = { name: e.name, times: Fo(e.times, Array), values: Fo(e.values, Array) };
      const s = e.getInterpolation();
      s !== e.DefaultInterpolation && (i.interpolation = s);
    }
    return i.type = e.ValueTypeName, i;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new oy(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new km(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new ry(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Wr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Xr:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case tl:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(i);
      return console.warn("THREE.KeyframeTrack:", i), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Wr;
      case this.InterpolantFactoryMethodLinear:
        return Xr;
      case this.InterpolantFactoryMethodSmooth:
        return tl;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let i = 0, s = t.length; i !== s; ++i) t[i] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let i = 0, s = t.length; i !== s; ++i) t[i] *= e;
    }
    return this;
  }
  trim(e, t) {
    const i = this.times, s = i.length;
    let r = 0, o = s - 1;
    for (; r !== s && i[r] < e; ) ++r;
    for (; o !== -1 && i[o] > t; ) --o;
    if (++o, r !== 0 || o !== s) {
      r >= o && (o = Math.max(o, 1), r = o - 1);
      const a = this.getValueSize();
      this.times = i.slice(r, o), this.values = this.values.slice(r * a, o * a);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const i = this.times, s = this.values, r = i.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let o = null;
    for (let a = 0; a !== r; a++) {
      const l = i[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = false;
        break;
      }
      if (o !== null && o > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = false;
        break;
      }
      o = l;
    }
    if (s !== void 0 && iy(s)) for (let a = 0, l = s.length; a !== l; ++a) {
      const c = s[a];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), i = this.getValueSize(), s = this.getInterpolation() === tl, r = e.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let l = false;
      const c = e[a], u = e[a + 1];
      if (c !== u && (a !== 1 || c !== e[0])) if (s) l = true;
      else {
        const h = a * i, f = h - i, d = h + i;
        for (let m = 0; m !== i; ++m) {
          const _ = t[h + m];
          if (_ !== t[f + m] || _ !== t[d + m]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (a !== o) {
          e[o] = e[a];
          const h = a * i, f = o * i;
          for (let d = 0; d !== i; ++d) t[f + d] = t[h + d];
        }
        ++o;
      }
    }
    if (r > 0) {
      e[o] = e[r];
      for (let a = r * i, l = o * i, c = 0; c !== i; ++c) t[l + c] = t[a + c];
      ++o;
    }
    return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * i)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), i = this.constructor, s = new i(this.name, e, t);
    return s.createInterpolant = this.createInterpolant, s;
  }
}
In.prototype.ValueTypeName = "";
In.prototype.TimeBufferType = Float32Array;
In.prototype.ValueBufferType = Float32Array;
In.prototype.DefaultInterpolation = Xr;
class tr extends In {
  constructor(e, t, i) {
    super(e, t, i);
  }
}
tr.prototype.ValueTypeName = "bool";
tr.prototype.ValueBufferType = Array;
tr.prototype.DefaultInterpolation = Wr;
tr.prototype.InterpolantFactoryMethodLinear = void 0;
tr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Gm extends In {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
}
Gm.prototype.ValueTypeName = "color";
class Qs extends In {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
}
Qs.prototype.ValueTypeName = "number";
class ay extends to {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  interpolate_(e, t, i, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (i - t) / (s - t);
    let c = e * a;
    for (let u = c + a; c !== u; c += 4) xn.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class $s extends In {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  InterpolantFactoryMethodLinear(e) {
    return new ay(this.times, this.values, this.getValueSize(), e);
  }
}
$s.prototype.ValueTypeName = "quaternion";
$s.prototype.InterpolantFactoryMethodSmooth = void 0;
class nr extends In {
  constructor(e, t, i) {
    super(e, t, i);
  }
}
nr.prototype.ValueTypeName = "string";
nr.prototype.ValueBufferType = Array;
nr.prototype.DefaultInterpolation = Wr;
nr.prototype.InterpolantFactoryMethodLinear = void 0;
nr.prototype.InterpolantFactoryMethodSmooth = void 0;
class er extends In {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
}
er.prototype.ValueTypeName = "vector";
class Kc {
  constructor(e = "", t = -1, i = [], s = Cu) {
    this.name = e, this.tracks = i, this.duration = t, this.blendMode = s, this.uuid = _n(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], i = e.tracks, s = 1 / (e.fps || 1);
    for (let o = 0, a = i.length; o !== a; ++o) t.push(cy(i[o]).scale(s));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], i = e.tracks, s = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let r = 0, o = i.length; r !== o; ++r) t.push(In.toJSON(i[r]));
    return s;
  }
  static CreateFromMorphTargetSequence(e, t, i, s) {
    const r = t.length, o = [];
    for (let a = 0; a < r; a++) {
      let l = [], c = [];
      l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
      const u = sy(l);
      l = Nf(l, 1, u), c = Nf(c, 1, u), !s && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(new Qs(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / i));
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let i = e;
    if (!Array.isArray(e)) {
      const s = e;
      i = s.geometry && s.geometry.animations || s.animations;
    }
    for (let s = 0; s < i.length; s++) if (i[s].name === t) return i[s];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, i) {
    const s = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = c.name.match(r);
      if (u && u.length > 1) {
        const h = u[1];
        let f = s[h];
        f || (s[h] = f = []), f.push(c);
      }
    }
    const o = [];
    for (const a in s) o.push(this.CreateFromMorphTargetSequence(a, s[a], t, i));
    return o;
  }
  static parseAnimation(e, t) {
    if (console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"), !e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const i = function(h, f, d, m, _) {
      if (d.length !== 0) {
        const g = [], p = [];
        Vm(d, g, p, m), g.length !== 0 && _.push(new h(f, g, p));
      }
    }, s = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const f = c[h].keys;
      if (!(!f || f.length === 0)) if (f[0].morphTargets) {
        const d = {};
        let m;
        for (m = 0; m < f.length; m++) if (f[m].morphTargets) for (let _ = 0; _ < f[m].morphTargets.length; _++) d[f[m].morphTargets[_]] = -1;
        for (const _ in d) {
          const g = [], p = [];
          for (let E = 0; E !== f[m].morphTargets.length; ++E) {
            const b = f[m];
            g.push(b.time), p.push(b.morphTarget === _ ? 1 : 0);
          }
          s.push(new Qs(".morphTargetInfluence[" + _ + "]", g, p));
        }
        l = d.length * o;
      } else {
        const d = ".bones[" + t[h].name + "]";
        i(er, d + ".position", f, "pos", s), i($s, d + ".quaternion", f, "rot", s), i(er, d + ".scale", f, "scl", s);
      }
    }
    return s.length === 0 ? null : new this(r, l, s, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let i = 0, s = e.length; i !== s; ++i) {
      const r = this.tracks[i];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = true;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function ly(n) {
  switch (n.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Qs;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return er;
    case "color":
      return Gm;
    case "quaternion":
      return $s;
    case "bool":
    case "boolean":
      return tr;
    case "string":
      return nr;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + n);
}
function cy(n) {
  if (n.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = ly(n.type);
  if (n.times === void 0) {
    const t = [], i = [];
    Vm(n.keys, t, i, "value"), n.times = t, n.values = i;
  }
  return e.parse !== void 0 ? e.parse(n) : new e(n.name, n.times, n.values, n.interpolation);
}
const Ci = { enabled: false, files: {}, add: function(n, e) {
  this.enabled !== false && (this.files[n] = e);
}, get: function(n) {
  if (this.enabled !== false) return this.files[n];
}, remove: function(n) {
  delete this.files[n];
}, clear: function() {
  this.files = {};
} };
class uy {
  constructor(e, t, i) {
    const s = this;
    let r = false, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.itemStart = function(u) {
      a++, r === false && s.onStart !== void 0 && s.onStart(u, o, a), r = true;
    }, this.itemEnd = function(u) {
      o++, s.onProgress !== void 0 && s.onProgress(u, o, a), o === a && (r = false, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(u) {
      s.onError !== void 0 && s.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, f = c.length; h < f; h += 2) {
        const d = c[h], m = c[h + 1];
        if (d.global && (d.lastIndex = 0), d.test(u)) return m;
      }
      return null;
    };
  }
}
const hy = new uy();
class cs {
  constructor(e) {
    this.manager = e !== void 0 ? e : hy, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const i = this;
    return new Promise(function(s, r) {
      i.load(e, s, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
cs.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const $n = {};
class fy extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Wu extends cs {
  constructor(e) {
    super(e), this.mimeType = "", this.responseType = "";
  }
  load(e, t, i, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Ci.get(e);
    if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(r), this.manager.itemEnd(e);
    }, 0), r;
    if ($n[e] !== void 0) {
      $n[e].push({ onLoad: t, onProgress: i, onError: s });
      return;
    }
    $n[e] = [], $n[e].push({ onLoad: t, onProgress: i, onError: s });
    const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, l = this.responseType;
    fetch(o).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const u = $n[e], h = c.body.getReader(), f = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), d = f ? parseInt(f) : 0, m = d !== 0;
        let _ = 0;
        const g = new ReadableStream({ start(p) {
          E();
          function E() {
            h.read().then(({ done: b, value: x }) => {
              if (b) p.close();
              else {
                _ += x.byteLength;
                const P = new ProgressEvent("progress", { lengthComputable: m, loaded: _, total: d });
                for (let w = 0, C = u.length; w < C; w++) {
                  const I = u[w];
                  I.onProgress && I.onProgress(P);
                }
                p.enqueue(x), E();
              }
            }, (b) => {
              p.error(b);
            });
          }
        } });
        return new Response(g);
      } else throw new fy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((u) => new DOMParser().parseFromString(u, a));
        case "json":
          return c.json();
        default:
          if (a === "") return c.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(a), f = h && h[1] ? h[1].toLowerCase() : void 0, d = new TextDecoder(f);
            return c.arrayBuffer().then((m) => d.decode(m));
          }
      }
    }).then((c) => {
      Ci.add(e, c);
      const u = $n[e];
      delete $n[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const d = u[h];
        d.onLoad && d.onLoad(c);
      }
    }).catch((c) => {
      const u = $n[e];
      if (u === void 0) throw this.manager.itemError(e), c;
      delete $n[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const d = u[h];
        d.onError && d.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class dy extends cs {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = Ci.get(e);
    if (o !== void 0) return r.manager.itemStart(e), setTimeout(function() {
      t && t(o), r.manager.itemEnd(e);
    }, 0), o;
    const a = Yr("img");
    function l() {
      u(), Ci.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(h) {
      u(), s && s(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, false), a.removeEventListener("error", c, false);
    }
    return a.addEventListener("load", l, false), a.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
  }
}
class py extends cs {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    const r = new At(), o = new dy(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = true, t !== void 0 && t(r);
    }, i, s), r;
  }
}
class no extends ht {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ue(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
class PA extends no {
  constructor(e, t, i) {
    super(e, i), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(ht.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ue(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const Pl = new Ye(), Uf = new N(), Of = new N();
class Xu {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new fe(512, 512), this.mapType = Vn, this.map = null, this.mapPass = null, this.matrix = new Ye(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Ou(), this._frameExtents = new fe(1, 1), this._viewportCount = 1, this._viewports = [new it(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, i = this.matrix;
    Uf.setFromMatrixPosition(e.matrixWorld), t.position.copy(Uf), Of.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Of), t.updateMatrixWorld(), Pl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Pl), i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i.multiply(Pl);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class my extends Xu {
  constructor() {
    super(new tn(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1, this.aspect = 1;
  }
  updateMatrices(e) {
    const t = this.camera, i = Ks * 2 * e.angle * this.focus, s = this.mapSize.width / this.mapSize.height * this.aspect, r = e.distance || t.far;
    (i !== t.fov || s !== t.aspect || r !== t.far) && (t.fov = i, t.aspect = s, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class gy extends no {
  constructor(e, t, i = 0, s = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(ht.DEFAULT_UP), this.updateMatrix(), this.target = new ht(), this.distance = i, this.angle = s, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new my();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Ff = new Ye(), gr = new N(), Ll = new N();
class _y extends Xu {
  constructor() {
    super(new tn(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new fe(4, 2), this._viewportCount = 6, this._viewports = [new it(2, 1, 1, 1), new it(0, 1, 1, 1), new it(3, 1, 1, 1), new it(1, 1, 1, 1), new it(3, 0, 1, 1), new it(1, 0, 1, 1)], this._cubeDirections = [new N(1, 0, 0), new N(-1, 0, 0), new N(0, 0, 1), new N(0, 0, -1), new N(0, 1, 0), new N(0, -1, 0)], this._cubeUps = [new N(0, 1, 0), new N(0, 1, 0), new N(0, 1, 0), new N(0, 1, 0), new N(0, 0, 1), new N(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const i = this.camera, s = this.matrix, r = e.distance || i.far;
    r !== i.far && (i.far = r, i.updateProjectionMatrix()), gr.setFromMatrixPosition(e.matrixWorld), i.position.copy(gr), Ll.copy(i.position), Ll.add(this._cubeDirections[t]), i.up.copy(this._cubeUps[t]), i.lookAt(Ll), i.updateMatrixWorld(), s.makeTranslation(-gr.x, -gr.y, -gr.z), Ff.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ff);
  }
}
class xy extends no {
  constructor(e, t, i = 0, s = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = i, this.decay = s, this.shadow = new _y();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Fa extends Du {
  constructor(e = -1, t = 1, i = 1, s = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = s, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, i, s, r, o) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = i - e, o = i + e, a = s + t, l = s - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class vy extends Xu {
  constructor() {
    super(new Fa(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class yy extends no {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ht.DEFAULT_UP), this.updateMatrix(), this.target = new ht(), this.shadow = new vy();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class LA extends no {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class Ir {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class IA extends Mt {
  constructor() {
    super(), this.isInstancedBufferGeometry = true, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = true, e;
  }
}
const Il = /* @__PURE__ */ new WeakMap();
class My extends cs {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, i, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = Ci.get(e);
    if (o !== void 0) {
      if (r.manager.itemStart(e), o.then) {
        o.then((c) => {
          if (Il.has(o) === true) s && s(Il.get(o)), r.manager.itemError(e), r.manager.itemEnd(e);
          else return t && t(c), r.manager.itemEnd(e), c;
        });
        return;
      }
      return setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
    const l = fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return Ci.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      s && s(c), Il.set(l, c), Ci.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    Ci.add(e, l), r.manager.itemStart(e);
  }
}
let Bo;
class Wm {
  static getContext() {
    return Bo === void 0 && (Bo = new (window.AudioContext || window.webkitAudioContext)()), Bo;
  }
  static setContext(e) {
    Bo = e;
  }
}
class DA extends cs {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    const r = this, o = new Wu(this.manager);
    o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(l) {
      try {
        const c = l.slice(0);
        Wm.getContext().decodeAudioData(c, function(h) {
          t(h);
        }).catch(a);
      } catch (c) {
        a(c);
      }
    }, i, s);
    function a(l) {
      s ? s(l) : console.error(l), r.manager.itemError(e);
    }
  }
}
class Sy extends tn {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e;
  }
}
class Xm {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = Bf(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Bf();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Bf() {
  return performance.now();
}
const Yi = new N(), Dl = new xn(), by = new N(), qi = new N(), ji = new N();
class NA extends ht {
  constructor() {
    super(), this.type = "AudioListener", this.context = Wm.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Xm();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Yi, Dl, by), qi.set(0, 0, -1).applyQuaternion(Dl), ji.set(0, 1, 0).applyQuaternion(Dl), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(Yi.x, i), t.positionY.linearRampToValueAtTime(Yi.y, i), t.positionZ.linearRampToValueAtTime(Yi.z, i), t.forwardX.linearRampToValueAtTime(qi.x, i), t.forwardY.linearRampToValueAtTime(qi.y, i), t.forwardZ.linearRampToValueAtTime(qi.z, i), t.upX.linearRampToValueAtTime(ji.x, i), t.upY.linearRampToValueAtTime(ji.y, i), t.upZ.linearRampToValueAtTime(ji.z, i);
    } else t.setPosition(Yi.x, Yi.y, Yi.z), t.setOrientation(qi.x, qi.y, qi.z, ji.x, ji.y, ji.z);
  }
}
let UA = class extends ht {
  constructor(e) {
    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = false, this.buffer = null, this.detune = 0, this.loop = false, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = false, this.hasPlaybackControl = true, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = false, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  }
  setMediaElementSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  }
  setMediaStreamSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  }
  setBuffer(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(e = 0) {
    if (this.isPlaying === true) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = true, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === true && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === true && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = false), this;
  }
  stop(e = 0) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + e), this.source.onended = null), this.isPlaying = false, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return this._connected = true, this;
  }
  disconnect() {
    if (this._connected !== false) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return this._connected = false, this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return e || (e = []), this._connected === true ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
  }
  setDetune(e) {
    return this.detune = e, this.isPlaying === true && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === true && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = false, this._progress = 0;
  }
  getLoop() {
    return this.hasPlaybackControl === false ? (console.warn("THREE.Audio: this Audio has no playback control."), false) : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === true && (this.source.loop = this.loop), this;
  }
  setLoopStart(e) {
    return this.loopStart = e, this;
  }
  setLoopEnd(e) {
    return this.loopEnd = e, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  copy(e, t) {
    return super.copy(e, t), e.sourceType !== "buffer" ? (console.warn("THREE.Audio: Audio source type cannot be copied."), this) : (this.autoplay = e.autoplay, this.buffer = e.buffer, this.detune = e.detune, this.loop = e.loop, this.loopStart = e.loopStart, this.loopEnd = e.loopEnd, this.offset = e.offset, this.duration = e.duration, this.playbackRate = e.playbackRate, this.hasPlaybackControl = e.hasPlaybackControl, this.sourceType = e.sourceType, this.filters = e.filters.slice(), this);
  }
  clone(e) {
    return new this.constructor(this.listener).copy(this, e);
  }
};
class Ty {
  constructor(e, t, i) {
    this.binding = e, this.valueSize = i;
    let s, r, o;
    switch (t) {
      case "quaternion":
        s = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(i * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        s = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(i * 5);
        break;
      default:
        s = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(i * 5);
    }
    this._mixBufferRegion = s, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(e, t) {
    const i = this.buffer, s = this.valueSize, r = e * s + s;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== s; ++a) i[r + a] = i[a];
      o = t;
    } else {
      o += t;
      const a = t / o;
      this._mixBufferRegion(i, r, 0, a, s);
    }
    this.cumulativeWeight = o;
  }
  accumulateAdditive(e) {
    const t = this.buffer, i = this.valueSize, s = i * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, s, 0, e, i), this.cumulativeWeightAdditive += e;
  }
  apply(e) {
    const t = this.valueSize, i = this.buffer, s = e * t + t, r = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(i, s, l, 1 - r, t);
    }
    o > 0 && this._mixBufferRegionAdditive(i, s, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l) if (i[l] !== i[l + t]) {
      a.setValue(i, s);
      break;
    }
  }
  saveOriginalState() {
    const e = this.binding, t = this.buffer, i = this.valueSize, s = i * this._origIndex;
    e.getValue(t, s);
    for (let r = i, o = s; r !== o; ++r) t[r] = t[s + r % i];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let i = e; i < t; i++) this.buffer[i] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let i = 0; i < this.valueSize; i++) this.buffer[t + i] = this.buffer[e + i];
  }
  _select(e, t, i, s, r) {
    if (s >= 0.5) for (let o = 0; o !== r; ++o) e[t + o] = e[i + o];
  }
  _slerp(e, t, i, s) {
    xn.slerpFlat(e, t, e, t, e, i, s);
  }
  _slerpAdditive(e, t, i, s, r) {
    const o = this._workIndex * r;
    xn.multiplyQuaternionsFlat(e, o, e, t, e, i), xn.slerpFlat(e, t, e, t, e, o, s);
  }
  _lerp(e, t, i, s, r) {
    const o = 1 - s;
    for (let a = 0; a !== r; ++a) {
      const l = t + a;
      e[l] = e[l] * o + e[i + a] * s;
    }
  }
  _lerpAdditive(e, t, i, s, r) {
    for (let o = 0; o !== r; ++o) {
      const a = t + o;
      e[a] = e[a] + e[i + o] * s;
    }
  }
}
const Yu = "\\[\\]\\.:\\/", Ey = new RegExp("[" + Yu + "]", "g"), qu = "[^" + Yu + "]", Ay = "[^" + Yu.replace("\\.", "") + "]", wy = /((?:WC+[\/:])*)/.source.replace("WC", qu), Ry = /(WCOD+)?/.source.replace("WCOD", Ay), Cy = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", qu), Py = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", qu), Ly = new RegExp("^" + wy + Ry + Cy + Py + "$"), Iy = ["material", "materials", "bones", "map"];
class Dy {
  constructor(e, t, i) {
    const s = i || ot.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, s);
  }
  getValue(e, t) {
    this.bind();
    const i = this._targetGroup.nCachedObjects_, s = this._bindings[i];
    s !== void 0 && s.getValue(e, t);
  }
  setValue(e, t) {
    const i = this._bindings;
    for (let s = this._targetGroup.nCachedObjects_, r = i.length; s !== r; ++s) i[s].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].unbind();
  }
}
class ot {
  constructor(e, t, i) {
    this.path = t, this.parsedPath = i || ot.parseTrackName(t), this.node = ot.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, i) {
    return e && e.isAnimationObjectGroup ? new ot.Composite(e, t, i) : new ot(e, t, i);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Ey, "");
  }
  static parseTrackName(e) {
    const t = Ly.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const i = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, s = i.nodeName && i.nodeName.lastIndexOf(".");
    if (s !== void 0 && s !== -1) {
      const r = i.nodeName.substring(s + 1);
      Iy.indexOf(r) !== -1 && (i.nodeName = i.nodeName.substring(0, s), i.objectName = r);
    }
    if (i.propertyName === null || i.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return i;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      const i = e.skeleton.getBoneByName(t);
      if (i !== void 0) return i;
    }
    if (e.children) {
      const i = function(r) {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          if (a.name === t || a.uuid === t) return a;
          const l = i(a.children);
          if (l) return l;
        }
        return null;
      }, s = i(e.children);
      if (s) return s;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const i = this.resolvedProperty;
    for (let s = 0, r = i.length; s !== r; ++s) e[t++] = i[s];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    const i = this.resolvedProperty;
    for (let s = 0, r = i.length; s !== r; ++s) i[s] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const i = this.resolvedProperty;
    for (let s = 0, r = i.length; s !== r; ++s) i[s] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const i = this.resolvedProperty;
    for (let s = 0, r = i.length; s !== r; ++s) i[s] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, i = t.objectName, s = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = ot.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (i) {
      let c = t.objectIndex;
      switch (i) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++) if (e[u].name === c) {
            c = u;
            break;
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[i] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[i];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const o = e[s];
    if (o === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + s + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.isMaterial === true ? a = this.Versioning.NeedsUpdate : e.isObject3D === true && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (s === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = s;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
ot.Composite = Dy;
ot.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
ot.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
ot.prototype.GetterByBindingType = [ot.prototype._getValue_direct, ot.prototype._getValue_array, ot.prototype._getValue_arrayElement, ot.prototype._getValue_toArray];
ot.prototype.SetterByBindingTypeAndVersioning = [[ot.prototype._setValue_direct, ot.prototype._setValue_direct_setNeedsUpdate, ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [ot.prototype._setValue_array, ot.prototype._setValue_array_setNeedsUpdate, ot.prototype._setValue_array_setMatrixWorldNeedsUpdate], [ot.prototype._setValue_arrayElement, ot.prototype._setValue_arrayElement_setNeedsUpdate, ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [ot.prototype._setValue_fromArray, ot.prototype._setValue_fromArray_setNeedsUpdate, ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class Ny {
  constructor(e, t, i = null, s = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = i, this.blendMode = s;
    const r = t.tracks, o = r.length, a = new Array(o), l = { endingStart: Cs, endingEnd: Cs };
    for (let c = 0; c !== o; ++c) {
      const u = r[c].createInterpolant(null);
      a[c] = u, u.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = av, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, i = false) {
    if (e.fadeOut(t), this.fadeIn(t), i === true) {
      const s = this._clip.duration, r = e._clip.duration, o = r / s, a = s / r;
      e.warp(1, o, t), this.warp(a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, i = false) {
    return e.crossFadeFrom(this, t, i);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, i) {
    const s = this._mixer, r = s.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = s._lendControlInterpolant(), this._timeScaleInterpolant = a);
    const l = a.parameterPositions, c = a.sampleValues;
    return l[0] = r, l[1] = r + i, c[0] = e / o, c[1] = t / o, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, i, s) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const l = (e - r) * i;
      l < 0 || i === 0 ? t = 0 : (this._startTime = null, t = i * l);
    }
    t *= this._updateTimeScale(e);
    const o = this._updateTime(t), a = this._updateWeight(e);
    if (a > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case cv:
          for (let u = 0, h = l.length; u !== h; ++u) l[u].evaluate(o), c[u].accumulateAdditive(a);
          break;
        case Cu:
        default:
          for (let u = 0, h = l.length; u !== h; ++u) l[u].evaluate(o), c[u].accumulate(s, a);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const i = this._weightInterpolant;
      if (i !== null) {
        const s = i.evaluate(e)[0];
        t *= s, e > i.parameterPositions[1] && (this.stopFading(), s === 0 && (this.enabled = false));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const i = this._timeScaleInterpolant;
      if (i !== null) {
        const s = i.evaluate(e)[0];
        t *= s, e > i.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = true : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, i = this.loop;
    let s = this.time + e, r = this._loopCount;
    const o = i === lv;
    if (e === 0) return r === -1 ? s : o && (r & 1) === 1 ? t - s : s;
    if (i === ov) {
      r === -1 && (this._loopCount = 0, this._setEndings(true, true, false));
      e: {
        if (s >= t) s = t;
        else if (s < 0) s = 0;
        else {
          this.time = s;
          break e;
        }
        this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = s, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 });
      }
    } else {
      if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(true, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, true, o)), s >= t || s < 0) {
        const a = Math.floor(s / t);
        s -= t * a, r += Math.abs(a);
        const l = this.repetitions - r;
        if (l <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, s = e > 0 ? t : 0, this.time = s, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, o);
          } else this._setEndings(false, false, o);
          this._loopCount = r, this.time = s, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: a });
        }
      } else this.time = s;
      if (o && (r & 1) === 1) return t - s;
    }
    return s;
  }
  _setEndings(e, t, i) {
    const s = this._interpolantSettings;
    i ? (s.endingStart = Ps, s.endingEnd = Ps) : (e ? s.endingStart = this.zeroSlopeAtStart ? Ps : Cs : s.endingStart = ga, t ? s.endingEnd = this.zeroSlopeAtEnd ? Ps : Cs : s.endingEnd = ga);
  }
  _scheduleFading(e, t, i) {
    const s = this._mixer, r = s.time;
    let o = this._weightInterpolant;
    o === null && (o = s._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, l = o.sampleValues;
    return a[0] = r, l[0] = t, a[1] = r + e, l[1] = i, this;
  }
}
const Uy = new Float32Array(1);
class FA extends Oi {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const i = e._localRoot || this._root, s = e._clip.tracks, r = s.length, o = e._propertyBindings, a = e._interpolants, l = i.uuid, c = this._bindingsByRootAndName;
    let u = c[l];
    u === void 0 && (u = {}, c[l] = u);
    for (let h = 0; h !== r; ++h) {
      const f = s[h], d = f.name;
      let m = u[d];
      if (m !== void 0) ++m.referenceCount, o[h] = m;
      else {
        if (m = o[h], m !== void 0) {
          m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, l, d));
          continue;
        }
        const _ = t && t._propertyBindings[h].binding.parsedPath;
        m = new Ty(ot.create(i, d, _), f.ValueTypeName, f.getValueSize()), ++m.referenceCount, this._addInactiveBinding(m, l, d), o[h] = m;
      }
      a[h].resultBuffer = m.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const i = (e._localRoot || this._root).uuid, s = e._clip.uuid, r = this._actionsByClip[s];
        this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, s, i);
      }
      const t = e._propertyBindings;
      for (let i = 0, s = t.length; i !== s; ++i) {
        const r = t[i];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let i = 0, s = t.length; i !== s; ++i) {
        const r = t[i];
        --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = { actions: { get total() {
      return e._actions.length;
    }, get inUse() {
      return e._nActiveActions;
    } }, bindings: { get total() {
      return e._bindings.length;
    }, get inUse() {
      return e._nActiveBindings;
    } }, controlInterpolants: { get total() {
      return e._controlInterpolants.length;
    }, get inUse() {
      return e._nActiveControlInterpolants;
    } } };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, i) {
    const s = this._actions, r = this._actionsByClip;
    let o = r[t];
    if (o === void 0) o = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, r[t] = o;
    else {
      const a = o.knownActions;
      e._byClipCacheIndex = a.length, a.push(e);
    }
    e._cacheIndex = s.length, s.push(e), o.actionByRoot[i] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, i = t[t.length - 1], s = e._cacheIndex;
    i._cacheIndex = s, t[s] = i, t.pop(), e._cacheIndex = null;
    const r = e._clip.uuid, o = this._actionsByClip, a = o[r], l = a.knownActions, c = l[l.length - 1], u = e._byClipCacheIndex;
    c._byClipCacheIndex = u, l[u] = c, l.pop(), e._byClipCacheIndex = null;
    const h = a.actionByRoot, f = (e._localRoot || this._root).uuid;
    delete h[f], l.length === 0 && delete o[r], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let i = 0, s = t.length; i !== s; ++i) {
      const r = t[i];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(e) {
    const t = this._actions, i = e._cacheIndex, s = this._nActiveActions++, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = i, t[i] = r;
  }
  _takeBackAction(e) {
    const t = this._actions, i = e._cacheIndex, s = --this._nActiveActions, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = i, t[i] = r;
  }
  _addInactiveBinding(e, t, i) {
    const s = this._bindingsByRootAndName, r = this._bindings;
    let o = s[t];
    o === void 0 && (o = {}, s[t] = o), o[i] = e, e._cacheIndex = r.length, r.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, i = e.binding, s = i.rootNode.uuid, r = i.path, o = this._bindingsByRootAndName, a = o[s], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete a[r], Object.keys(a).length === 0 && delete o[s];
  }
  _lendBinding(e) {
    const t = this._bindings, i = e._cacheIndex, s = this._nActiveBindings++, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = i, t[i] = r;
  }
  _takeBackBinding(e) {
    const t = this._bindings, i = e._cacheIndex, s = --this._nActiveBindings, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = i, t[i] = r;
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let i = e[t];
    return i === void 0 && (i = new km(new Float32Array(2), new Float32Array(2), 1, Uy), i.__cacheIndex = t, e[t] = i), i;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, i = e.__cacheIndex, s = --this._nActiveControlInterpolants, r = t[s];
    e.__cacheIndex = s, t[s] = e, r.__cacheIndex = i, t[i] = r;
  }
  clipAction(e, t, i) {
    const s = t || this._root, r = s.uuid;
    let o = typeof e == "string" ? Kc.findByName(s, e) : e;
    const a = o !== null ? o.uuid : e, l = this._actionsByClip[a];
    let c = null;
    if (i === void 0 && (o !== null ? i = o.blendMode : i = Cu), l !== void 0) {
      const h = l.actionByRoot[r];
      if (h !== void 0 && h.blendMode === i) return h;
      c = l.knownActions[0], o === null && (o = c._clip);
    }
    if (o === null) return null;
    const u = new Ny(this, o, t, i);
    return this._bindAction(u, c), this._addInactiveAction(u, a, r), u;
  }
  existingAction(e, t) {
    const i = t || this._root, s = i.uuid, r = typeof e == "string" ? Kc.findByName(i, e) : e, o = r ? r.uuid : e, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[s] || null;
  }
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let i = t - 1; i >= 0; --i) e[i].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions, i = this._nActiveActions, s = this.time += e, r = Math.sign(e), o = this._accuIndex ^= 1;
    for (let c = 0; c !== i; ++c) t[c]._update(s, e, r, o);
    const a = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) a[c].apply(o);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions, i = e.uuid, s = this._actionsByClip, r = s[i];
    if (r !== void 0) {
      const o = r.knownActions;
      for (let a = 0, l = o.length; a !== l; ++a) {
        const c = o[a];
        this._deactivateAction(c);
        const u = c._cacheIndex, h = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = u, t[u] = h, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete s[i];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid, i = this._actionsByClip;
    for (const o in i) {
      const a = i[o].actionByRoot, l = a[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const s = this._bindingsByRootAndName, r = s[t];
    if (r !== void 0) for (const o in r) {
      const a = r[o];
      a.restoreOriginalState(), this._removeInactiveBinding(a);
    }
  }
  uncacheAction(e, t) {
    const i = this.existingAction(e, t);
    i !== null && (this._deactivateAction(i), this._removeInactiveAction(i));
  }
}
class BA extends bm {
  constructor(e, t, i = 1) {
    super(e, t), this.isInstancedInterleavedBuffer = true, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = true, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
const zf = new Ye();
class zA {
  constructor(e, t, i = 0, s = 1 / 0) {
    this.ray = new $r(e, t), this.near = i, this.far = s, this.camera = null, this.layers = new Iu(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return zf.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(zf), this;
  }
  intersectObject(e, t = true, i = []) {
    return Zc(e, this, i, t), i.sort(Hf), i;
  }
  intersectObjects(e, t = true, i = []) {
    for (let s = 0, r = e.length; s < r; s++) Zc(e[s], this, i, t);
    return i.sort(Hf), i;
  }
}
function Hf(n, e) {
  return n.distance - e.distance;
}
function Zc(n, e, t, i) {
  let s = true;
  if (n.layers.test(e.layers) && n.raycast(e, t) === false && (s = false), s === true && i === true) {
    const r = n.children;
    for (let o = 0, a = r.length; o < a; o++) Zc(r[o], e, t, true);
  }
}
class HA {
  constructor(e = 1, t = 0, i = 0) {
    this.radius = e, this.phi = t, this.theta = i;
  }
  set(e, t, i) {
    return this.radius = e, this.phi = t, this.theta = i, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = qe(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, i) {
    return this.radius = Math.sqrt(e * e + t * t + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(qe(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Vf = new N(), zo = new N();
class VA {
  constructor(e = new N(), t = new N()) {
    this.start = e, this.end = t;
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    Vf.subVectors(e, this.start), zo.subVectors(this.end, this.start);
    const i = zo.dot(zo);
    let r = zo.dot(Vf) / i;
    return t && (r = qe(r, 0, 1)), r;
  }
  closestPointToPoint(e, t, i) {
    const s = this.closestPointToPointParameter(e, t);
    return this.delta(i).multiplyScalar(s).add(this.start);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class kA extends kt {
  constructor(e, t, i) {
    const s = new ku(t, 4, 2), r = new oi({ wireframe: true, fog: false, toneMapped: false });
    super(s, r), this.light = e, this.color = i, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = false, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const Oy = new N(), kf = new Ue(), Gf = new Ue();
class GA extends ht {
  constructor(e, t, i) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = i, this.type = "HemisphereLightHelper";
    const s = new Vu(t);
    s.rotateY(Math.PI * 0.5), this.material = new oi({ wireframe: true, fog: false, toneMapped: false }), this.color === void 0 && (this.material.vertexColors = true);
    const r = s.getAttribute("position"), o = new Float32Array(r.count * 3);
    s.setAttribute("color", new Ft(o, 3)), this.add(new kt(s, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (this.color !== void 0) this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      kf.copy(this.light.color), Gf.copy(this.light.groundColor);
      for (let i = 0, s = t.count; i < s; i++) {
        const r = i < s / 2 ? kf : Gf;
        t.setXYZ(i, r.r, r.g, r.b);
      }
      t.needsUpdate = true;
    }
    this.light.updateWorldMatrix(true, false), e.lookAt(Oy.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
const Wf = new N(), Ho = new N(), Xf = new N();
class WA extends ht {
  constructor(e, t, i) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = i, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let s = new Mt();
    s.setAttribute("position", new et([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
    const r = new Ua({ fog: false, toneMapped: false });
    this.lightPlane = new qr(s, r), this.add(this.lightPlane), s = new Mt(), s.setAttribute("position", new et([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new qr(s, r), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.light.target.updateWorldMatrix(true, false), Wf.setFromMatrixPosition(this.light.matrixWorld), Ho.setFromMatrixPosition(this.light.target.matrixWorld), Xf.subVectors(Ho, Wf), this.lightPlane.lookAt(Ho), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Ho), this.targetLine.scale.z = Xf.length();
  }
}
const Vo = new N(), bt = new Du();
class XA extends Am {
  constructor(e) {
    const t = new Mt(), i = new Ua({ color: 16777215, vertexColors: true, toneMapped: false }), s = [], r = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(m, _) {
      l(m), l(_);
    }
    function l(m) {
      s.push(0, 0, 0), r.push(0, 0, 0), o[m] === void 0 && (o[m] = []), o[m].push(s.length / 3 - 1);
    }
    t.setAttribute("position", new et(s, 3)), t.setAttribute("color", new et(r, 3)), super(t, i), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.pointMap = o, this.update();
    const c = new Ue(16755200), u = new Ue(16711680), h = new Ue(43775), f = new Ue(16777215), d = new Ue(3355443);
    this.setColors(c, u, h, f, d);
  }
  setColors(e, t, i, s, r) {
    const a = this.geometry.getAttribute("color");
    a.setXYZ(0, e.r, e.g, e.b), a.setXYZ(1, e.r, e.g, e.b), a.setXYZ(2, e.r, e.g, e.b), a.setXYZ(3, e.r, e.g, e.b), a.setXYZ(4, e.r, e.g, e.b), a.setXYZ(5, e.r, e.g, e.b), a.setXYZ(6, e.r, e.g, e.b), a.setXYZ(7, e.r, e.g, e.b), a.setXYZ(8, e.r, e.g, e.b), a.setXYZ(9, e.r, e.g, e.b), a.setXYZ(10, e.r, e.g, e.b), a.setXYZ(11, e.r, e.g, e.b), a.setXYZ(12, e.r, e.g, e.b), a.setXYZ(13, e.r, e.g, e.b), a.setXYZ(14, e.r, e.g, e.b), a.setXYZ(15, e.r, e.g, e.b), a.setXYZ(16, e.r, e.g, e.b), a.setXYZ(17, e.r, e.g, e.b), a.setXYZ(18, e.r, e.g, e.b), a.setXYZ(19, e.r, e.g, e.b), a.setXYZ(20, e.r, e.g, e.b), a.setXYZ(21, e.r, e.g, e.b), a.setXYZ(22, e.r, e.g, e.b), a.setXYZ(23, e.r, e.g, e.b), a.setXYZ(24, t.r, t.g, t.b), a.setXYZ(25, t.r, t.g, t.b), a.setXYZ(26, t.r, t.g, t.b), a.setXYZ(27, t.r, t.g, t.b), a.setXYZ(28, t.r, t.g, t.b), a.setXYZ(29, t.r, t.g, t.b), a.setXYZ(30, t.r, t.g, t.b), a.setXYZ(31, t.r, t.g, t.b), a.setXYZ(32, i.r, i.g, i.b), a.setXYZ(33, i.r, i.g, i.b), a.setXYZ(34, i.r, i.g, i.b), a.setXYZ(35, i.r, i.g, i.b), a.setXYZ(36, i.r, i.g, i.b), a.setXYZ(37, i.r, i.g, i.b), a.setXYZ(38, s.r, s.g, s.b), a.setXYZ(39, s.r, s.g, s.b), a.setXYZ(40, r.r, r.g, r.b), a.setXYZ(41, r.r, r.g, r.b), a.setXYZ(42, r.r, r.g, r.b), a.setXYZ(43, r.r, r.g, r.b), a.setXYZ(44, r.r, r.g, r.b), a.setXYZ(45, r.r, r.g, r.b), a.setXYZ(46, r.r, r.g, r.b), a.setXYZ(47, r.r, r.g, r.b), a.setXYZ(48, r.r, r.g, r.b), a.setXYZ(49, r.r, r.g, r.b), a.needsUpdate = true;
  }
  update() {
    const e = this.geometry, t = this.pointMap, i = 1, s = 1;
    bt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
    const r = this.camera.coordinateSystem === zn ? -1 : 0;
    Tt("c", t, e, bt, 0, 0, r), Tt("t", t, e, bt, 0, 0, 1), Tt("n1", t, e, bt, -1, -1, r), Tt("n2", t, e, bt, i, -1, r), Tt("n3", t, e, bt, -1, s, r), Tt("n4", t, e, bt, i, s, r), Tt("f1", t, e, bt, -1, -1, 1), Tt("f2", t, e, bt, i, -1, 1), Tt("f3", t, e, bt, -1, s, 1), Tt("f4", t, e, bt, i, s, 1), Tt("u1", t, e, bt, i * 0.7, s * 1.1, r), Tt("u2", t, e, bt, -1 * 0.7, s * 1.1, r), Tt("u3", t, e, bt, 0, s * 2, r), Tt("cf1", t, e, bt, -1, 0, 1), Tt("cf2", t, e, bt, i, 0, 1), Tt("cf3", t, e, bt, 0, -1, 1), Tt("cf4", t, e, bt, 0, s, 1), Tt("cn1", t, e, bt, -1, 0, r), Tt("cn2", t, e, bt, i, 0, r), Tt("cn3", t, e, bt, 0, -1, r), Tt("cn4", t, e, bt, 0, s, r), e.getAttribute("position").needsUpdate = true;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function Tt(n, e, t, i, s, r, o) {
  Vo.set(s, r, o).unproject(i);
  const a = e[n];
  if (a !== void 0) {
    const l = t.getAttribute("position");
    for (let c = 0, u = a.length; c < u; c++) l.setXYZ(a[c], Vo.x, Vo.y, Vo.z);
  }
}
class YA extends Oi {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    if (e === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Yf(n, e, t, i) {
  const s = Fy(i);
  switch (t) {
    case cm:
      return n * e;
    case Eu:
      return n * e / s.components * s.byteLength;
    case Au:
      return n * e / s.components * s.byteLength;
    case hm:
      return n * e * 2 / s.components * s.byteLength;
    case wu:
      return n * e * 2 / s.components * s.byteLength;
    case um:
      return n * e * 3 / s.components * s.byteLength;
    case mn:
      return n * e * 4 / s.components * s.byteLength;
    case Ru:
      return n * e * 4 / s.components * s.byteLength;
    case ea:
    case ta:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case na:
    case ia:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case _c:
    case vc:
      return Math.max(n, 16) * Math.max(e, 8) / 4;
    case gc:
    case xc:
      return Math.max(n, 8) * Math.max(e, 8) / 2;
    case yc:
    case Mc:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Sc:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case bc:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Tc:
      return Math.floor((n + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ec:
      return Math.floor((n + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ac:
      return Math.floor((n + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case wc:
      return Math.floor((n + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Rc:
      return Math.floor((n + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Cc:
      return Math.floor((n + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Pc:
      return Math.floor((n + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Lc:
      return Math.floor((n + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Ic:
      return Math.floor((n + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Dc:
      return Math.floor((n + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Nc:
      return Math.floor((n + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Uc:
      return Math.floor((n + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Oc:
      return Math.floor((n + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case sa:
    case Fc:
    case Bc:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
    case fm:
    case zc:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 8;
    case Hc:
    case Vc:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Fy(n) {
  switch (n) {
    case Vn:
    case om:
      return { byteLength: 1, components: 1 };
    case Hr:
    case am:
    case Ni:
      return { byteLength: 2, components: 1 };
    case bu:
    case Tu:
      return { byteLength: 2, components: 4 };
    case as:
    case Su:
    case Rn:
      return { byteLength: 4, components: 1 };
    case lm:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${n}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: yu } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = yu);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Ym() {
  let n = null, e = false, t = null, i = null;
  function s(r, o) {
    t(r, o), i = n.requestAnimationFrame(s);
  }
  return { start: function() {
    e !== true && t !== null && (i = n.requestAnimationFrame(s), e = true);
  }, stop: function() {
    n.cancelAnimationFrame(i), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    n = r;
  } };
}
function By(n) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, l) {
    const c = a.array, u = a.usage, h = c.byteLength, f = n.createBuffer();
    n.bindBuffer(l, f), n.bufferData(l, c, u), a.onUploadCallback();
    let d;
    if (c instanceof Float32Array) d = n.FLOAT;
    else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? d = n.HALF_FLOAT : d = n.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) d = n.SHORT;
    else if (c instanceof Uint32Array) d = n.UNSIGNED_INT;
    else if (c instanceof Int32Array) d = n.INT;
    else if (c instanceof Int8Array) d = n.BYTE;
    else if (c instanceof Uint8Array) d = n.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) d = n.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: f, type: d, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: h };
  }
  function i(a, l, c) {
    const u = l.array, h = l.updateRanges;
    if (n.bindBuffer(c, a), h.length === 0) n.bufferSubData(c, 0, u);
    else {
      h.sort((d, m) => d.start - m.start);
      let f = 0;
      for (let d = 1; d < h.length; d++) {
        const m = h[f], _ = h[d];
        _.start <= m.start + m.count + 1 ? m.count = Math.max(m.count, _.start + _.count - m.start) : (++f, h[f] = _);
      }
      h.length = f + 1;
      for (let d = 0, m = h.length; d < m; d++) {
        const _ = h[d];
        n.bufferSubData(c, _.start * u.BYTES_PER_ELEMENT, u, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function r(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = e.get(a);
    l && (n.deleteBuffer(l.buffer), e.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const u = e.get(a);
      (!u || u.version < a.version) && e.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version });
      return;
    }
    const c = e.get(a);
    if (c === void 0) e.set(a, t(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(c.buffer, a, l), c.version = a.version;
    }
  }
  return { get: s, remove: r, update: o };
}
var zy = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Hy = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Vy = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, ky = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Gy = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Wy = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Xy = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Yy = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, qy = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, jy = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Ky = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Zy = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Jy = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Qy = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, $y = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, eM = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, tM = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, nM = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, iM = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, sM = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, rM = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, oM = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, aM = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, lM = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, cM = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, uM = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, hM = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, fM = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, dM = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, pM = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, mM = "gl_FragColor = linearToOutputTexel( gl_FragColor );", gM = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, _M = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, xM = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, vM = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, yM = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, MM = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, SM = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, bM = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, TM = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, EM = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, AM = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, wM = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, RM = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, CM = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, PM = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, LM = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, IM = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, DM = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, NM = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, UM = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, OM = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, FM = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, BM = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, zM = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, HM = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, VM = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, kM = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, GM = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, WM = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, XM = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, YM = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, qM = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, jM = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, KM = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, ZM = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, JM = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, QM = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, $M = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, eS = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, tS = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, nS = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, iS = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, sS = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, rS = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, oS = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, aS = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, lS = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, cS = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, uS = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, hS = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, fS = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, dS = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, pS = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, mS = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, gS = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, _S = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, xS = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, vS = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, yS = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, MS = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, SS = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, bS = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, TS = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ES = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, AS = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, wS = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, RS = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, CS = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, PS = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, LS = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, IS = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, DS = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, NS = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, US = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, OS = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, FS = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const BS = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, zS = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, HS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, VS = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, kS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, GS = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, WS = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, XS = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, YS = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, qS = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, jS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, KS = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ZS = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, JS = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, QS = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, $S = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, eb = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, tb = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, nb = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, ib = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, sb = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, rb = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, ob = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ab = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lb = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, cb = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ub = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, hb = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, fb = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, db = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, pb = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, mb = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, gb = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, _b = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ke = { alphahash_fragment: zy, alphahash_pars_fragment: Hy, alphamap_fragment: Vy, alphamap_pars_fragment: ky, alphatest_fragment: Gy, alphatest_pars_fragment: Wy, aomap_fragment: Xy, aomap_pars_fragment: Yy, batching_pars_vertex: qy, batching_vertex: jy, begin_vertex: Ky, beginnormal_vertex: Zy, bsdfs: Jy, iridescence_fragment: Qy, bumpmap_pars_fragment: $y, clipping_planes_fragment: eM, clipping_planes_pars_fragment: tM, clipping_planes_pars_vertex: nM, clipping_planes_vertex: iM, color_fragment: sM, color_pars_fragment: rM, color_pars_vertex: oM, color_vertex: aM, common: lM, cube_uv_reflection_fragment: cM, defaultnormal_vertex: uM, displacementmap_pars_vertex: hM, displacementmap_vertex: fM, emissivemap_fragment: dM, emissivemap_pars_fragment: pM, colorspace_fragment: mM, colorspace_pars_fragment: gM, envmap_fragment: _M, envmap_common_pars_fragment: xM, envmap_pars_fragment: vM, envmap_pars_vertex: yM, envmap_physical_pars_fragment: LM, envmap_vertex: MM, fog_vertex: SM, fog_pars_vertex: bM, fog_fragment: TM, fog_pars_fragment: EM, gradientmap_pars_fragment: AM, lightmap_pars_fragment: wM, lights_lambert_fragment: RM, lights_lambert_pars_fragment: CM, lights_pars_begin: PM, lights_toon_fragment: IM, lights_toon_pars_fragment: DM, lights_phong_fragment: NM, lights_phong_pars_fragment: UM, lights_physical_fragment: OM, lights_physical_pars_fragment: FM, lights_fragment_begin: BM, lights_fragment_maps: zM, lights_fragment_end: HM, logdepthbuf_fragment: VM, logdepthbuf_pars_fragment: kM, logdepthbuf_pars_vertex: GM, logdepthbuf_vertex: WM, map_fragment: XM, map_pars_fragment: YM, map_particle_fragment: qM, map_particle_pars_fragment: jM, metalnessmap_fragment: KM, metalnessmap_pars_fragment: ZM, morphinstance_vertex: JM, morphcolor_vertex: QM, morphnormal_vertex: $M, morphtarget_pars_vertex: eS, morphtarget_vertex: tS, normal_fragment_begin: nS, normal_fragment_maps: iS, normal_pars_fragment: sS, normal_pars_vertex: rS, normal_vertex: oS, normalmap_pars_fragment: aS, clearcoat_normal_fragment_begin: lS, clearcoat_normal_fragment_maps: cS, clearcoat_pars_fragment: uS, iridescence_pars_fragment: hS, opaque_fragment: fS, packing: dS, premultiplied_alpha_fragment: pS, project_vertex: mS, dithering_fragment: gS, dithering_pars_fragment: _S, roughnessmap_fragment: xS, roughnessmap_pars_fragment: vS, shadowmap_pars_fragment: yS, shadowmap_pars_vertex: MS, shadowmap_vertex: SS, shadowmask_pars_fragment: bS, skinbase_vertex: TS, skinning_pars_vertex: ES, skinning_vertex: AS, skinnormal_vertex: wS, specularmap_fragment: RS, specularmap_pars_fragment: CS, tonemapping_fragment: PS, tonemapping_pars_fragment: LS, transmission_fragment: IS, transmission_pars_fragment: DS, uv_pars_fragment: NS, uv_pars_vertex: US, uv_vertex: OS, worldpos_vertex: FS, background_vert: BS, background_frag: zS, backgroundCube_vert: HS, backgroundCube_frag: VS, cube_vert: kS, cube_frag: GS, depth_vert: WS, depth_frag: XS, distanceRGBA_vert: YS, distanceRGBA_frag: qS, equirect_vert: jS, equirect_frag: KS, linedashed_vert: ZS, linedashed_frag: JS, meshbasic_vert: QS, meshbasic_frag: $S, meshlambert_vert: eb, meshlambert_frag: tb, meshmatcap_vert: nb, meshmatcap_frag: ib, meshnormal_vert: sb, meshnormal_frag: rb, meshphong_vert: ob, meshphong_frag: ab, meshphysical_vert: lb, meshphysical_frag: cb, meshtoon_vert: ub, meshtoon_frag: hb, points_vert: fb, points_frag: db, shadow_vert: pb, shadow_frag: mb, sprite_vert: gb, sprite_frag: _b }, _e = { common: { diffuse: { value: new Ue(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new je() }, alphaMap: { value: null }, alphaMapTransform: { value: new je() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new je() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new je() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new je() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new je() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new je() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new je() }, normalScale: { value: new fe(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new je() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new je() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new je() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new je() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ue(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ue(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new je() }, alphaTest: { value: 0 }, uvTransform: { value: new je() } }, sprite: { diffuse: { value: new Ue(16777215) }, opacity: { value: 1 }, center: { value: new fe(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new je() }, alphaMap: { value: null }, alphaMapTransform: { value: new je() }, alphaTest: { value: 0 } } }, Fn = { basic: { uniforms: qt([_e.common, _e.specularmap, _e.envmap, _e.aomap, _e.lightmap, _e.fog]), vertexShader: Ke.meshbasic_vert, fragmentShader: Ke.meshbasic_frag }, lambert: { uniforms: qt([_e.common, _e.specularmap, _e.envmap, _e.aomap, _e.lightmap, _e.emissivemap, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.fog, _e.lights, { emissive: { value: new Ue(0) } }]), vertexShader: Ke.meshlambert_vert, fragmentShader: Ke.meshlambert_frag }, phong: { uniforms: qt([_e.common, _e.specularmap, _e.envmap, _e.aomap, _e.lightmap, _e.emissivemap, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.fog, _e.lights, { emissive: { value: new Ue(0) }, specular: { value: new Ue(1118481) }, shininess: { value: 30 } }]), vertexShader: Ke.meshphong_vert, fragmentShader: Ke.meshphong_frag }, standard: { uniforms: qt([_e.common, _e.envmap, _e.aomap, _e.lightmap, _e.emissivemap, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.roughnessmap, _e.metalnessmap, _e.fog, _e.lights, { emissive: { value: new Ue(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ke.meshphysical_vert, fragmentShader: Ke.meshphysical_frag }, toon: { uniforms: qt([_e.common, _e.aomap, _e.lightmap, _e.emissivemap, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.gradientmap, _e.fog, _e.lights, { emissive: { value: new Ue(0) } }]), vertexShader: Ke.meshtoon_vert, fragmentShader: Ke.meshtoon_frag }, matcap: { uniforms: qt([_e.common, _e.bumpmap, _e.normalmap, _e.displacementmap, _e.fog, { matcap: { value: null } }]), vertexShader: Ke.meshmatcap_vert, fragmentShader: Ke.meshmatcap_frag }, points: { uniforms: qt([_e.points, _e.fog]), vertexShader: Ke.points_vert, fragmentShader: Ke.points_frag }, dashed: { uniforms: qt([_e.common, _e.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ke.linedashed_vert, fragmentShader: Ke.linedashed_frag }, depth: { uniforms: qt([_e.common, _e.displacementmap]), vertexShader: Ke.depth_vert, fragmentShader: Ke.depth_frag }, normal: { uniforms: qt([_e.common, _e.bumpmap, _e.normalmap, _e.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ke.meshnormal_vert, fragmentShader: Ke.meshnormal_frag }, sprite: { uniforms: qt([_e.sprite, _e.fog]), vertexShader: Ke.sprite_vert, fragmentShader: Ke.sprite_frag }, background: { uniforms: { uvTransform: { value: new je() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ke.background_vert, fragmentShader: Ke.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new je() } }, vertexShader: Ke.backgroundCube_vert, fragmentShader: Ke.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ke.cube_vert, fragmentShader: Ke.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ke.equirect_vert, fragmentShader: Ke.equirect_frag }, distanceRGBA: { uniforms: qt([_e.common, _e.displacementmap, { referencePosition: { value: new N() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ke.distanceRGBA_vert, fragmentShader: Ke.distanceRGBA_frag }, shadow: { uniforms: qt([_e.lights, _e.fog, { color: { value: new Ue(0) }, opacity: { value: 1 } }]), vertexShader: Ke.shadow_vert, fragmentShader: Ke.shadow_frag } };
Fn.physical = { uniforms: qt([Fn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new je() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new je() }, clearcoatNormalScale: { value: new fe(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new je() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new je() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new je() }, sheen: { value: 0 }, sheenColor: { value: new Ue(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new je() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new je() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new je() }, transmissionSamplerSize: { value: new fe() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new je() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ue(0) }, specularColor: { value: new Ue(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new je() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new je() }, anisotropyVector: { value: new fe() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new je() } }]), vertexShader: Ke.meshphysical_vert, fragmentShader: Ke.meshphysical_frag };
const ko = { r: 0, b: 0, g: 0 }, Ki = new Ln(), xb = new Ye();
function vb(n, e, t, i, s, r, o) {
  const a = new Ue(0);
  let l = r === true ? 0 : 1, c, u, h = null, f = 0, d = null;
  function m(b) {
    let x = b.isScene === true ? b.background : null;
    return x && x.isTexture && (x = (b.backgroundBlurriness > 0 ? t : e).get(x)), x;
  }
  function _(b) {
    let x = false;
    const P = m(b);
    P === null ? p(a, l) : P && P.isColor && (p(P, 1), x = true);
    const w = n.xr.getEnvironmentBlendMode();
    w === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, o) : w === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o), (n.autoClear || x) && (i.buffers.depth.setTest(true), i.buffers.depth.setMask(true), i.buffers.color.setMask(true), n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function g(b, x) {
    const P = m(x);
    P && (P.isCubeTexture || P.mapping === Da) ? (u === void 0 && (u = new kt(new eo(1, 1, 1), new rn({ name: "BackgroundCubeMaterial", uniforms: Zs(Fn.backgroundCube.uniforms), vertexShader: Fn.backgroundCube.vertexShader, fragmentShader: Fn.backgroundCube.fragmentShader, side: sn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(w, C, I) {
      this.matrixWorld.copyPosition(I.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), s.update(u)), Ki.copy(x.backgroundRotation), Ki.x *= -1, Ki.y *= -1, Ki.z *= -1, P.isCubeTexture && P.isRenderTargetTexture === false && (Ki.y *= -1, Ki.z *= -1), u.material.uniforms.envMap.value = P, u.material.uniforms.flipEnvMap.value = P.isCubeTexture && P.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(xb.makeRotationFromEuler(Ki)), u.material.toneMapped = $e.getTransfer(P.colorSpace) !== ct, (h !== P || f !== P.version || d !== n.toneMapping) && (u.material.needsUpdate = true, h = P, f = P.version, d = n.toneMapping), u.layers.enableAll(), b.unshift(u, u.geometry, u.material, 0, 0, null)) : P && P.isTexture && (c === void 0 && (c = new kt(new Oa(2, 2), new rn({ name: "BackgroundMaterial", uniforms: Zs(Fn.background.uniforms), vertexShader: Fn.background.vertexShader, fragmentShader: Fn.background.fragmentShader, side: hi, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), s.update(c)), c.material.uniforms.t2D.value = P, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = $e.getTransfer(P.colorSpace) !== ct, P.matrixAutoUpdate === true && P.updateMatrix(), c.material.uniforms.uvTransform.value.copy(P.matrix), (h !== P || f !== P.version || d !== n.toneMapping) && (c.material.needsUpdate = true, h = P, f = P.version, d = n.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(b, x) {
    b.getRGB(ko, ym(n)), i.buffers.color.setClear(ko.r, ko.g, ko.b, x, o);
  }
  function E() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(b, x = 1) {
    a.set(b), l = x, p(a, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(b) {
    l = b, p(a, l);
  }, render: _, addToRenderList: g, dispose: E };
}
function yb(n, e) {
  const t = n.getParameter(n.MAX_VERTEX_ATTRIBS), i = {}, s = f(null);
  let r = s, o = false;
  function a(M, L, O, X, Q) {
    let ne = false;
    const Z = h(X, O, L);
    r !== Z && (r = Z, c(r.object)), ne = d(M, X, O, Q), ne && m(M, X, O, Q), Q !== null && e.update(Q, n.ELEMENT_ARRAY_BUFFER), (ne || o) && (o = false, x(M, L, O, X), Q !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.get(Q).buffer));
  }
  function l() {
    return n.createVertexArray();
  }
  function c(M) {
    return n.bindVertexArray(M);
  }
  function u(M) {
    return n.deleteVertexArray(M);
  }
  function h(M, L, O) {
    const X = O.wireframe === true;
    let Q = i[M.id];
    Q === void 0 && (Q = {}, i[M.id] = Q);
    let ne = Q[L.id];
    ne === void 0 && (ne = {}, Q[L.id] = ne);
    let Z = ne[X];
    return Z === void 0 && (Z = f(l()), ne[X] = Z), Z;
  }
  function f(M) {
    const L = [], O = [], X = [];
    for (let Q = 0; Q < t; Q++) L[Q] = 0, O[Q] = 0, X[Q] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: L, enabledAttributes: O, attributeDivisors: X, object: M, attributes: {}, index: null };
  }
  function d(M, L, O, X) {
    const Q = r.attributes, ne = L.attributes;
    let Z = 0;
    const se = O.getAttributes();
    for (const j in se) if (se[j].location >= 0) {
      const xe = Q[j];
      let be = ne[j];
      if (be === void 0 && (j === "instanceMatrix" && M.instanceMatrix && (be = M.instanceMatrix), j === "instanceColor" && M.instanceColor && (be = M.instanceColor)), xe === void 0 || xe.attribute !== be || be && xe.data !== be.data) return true;
      Z++;
    }
    return r.attributesNum !== Z || r.index !== X;
  }
  function m(M, L, O, X) {
    const Q = {}, ne = L.attributes;
    let Z = 0;
    const se = O.getAttributes();
    for (const j in se) if (se[j].location >= 0) {
      let xe = ne[j];
      xe === void 0 && (j === "instanceMatrix" && M.instanceMatrix && (xe = M.instanceMatrix), j === "instanceColor" && M.instanceColor && (xe = M.instanceColor));
      const be = {};
      be.attribute = xe, xe && xe.data && (be.data = xe.data), Q[j] = be, Z++;
    }
    r.attributes = Q, r.attributesNum = Z, r.index = X;
  }
  function _() {
    const M = r.newAttributes;
    for (let L = 0, O = M.length; L < O; L++) M[L] = 0;
  }
  function g(M) {
    p(M, 0);
  }
  function p(M, L) {
    const O = r.newAttributes, X = r.enabledAttributes, Q = r.attributeDivisors;
    O[M] = 1, X[M] === 0 && (n.enableVertexAttribArray(M), X[M] = 1), Q[M] !== L && (n.vertexAttribDivisor(M, L), Q[M] = L);
  }
  function E() {
    const M = r.newAttributes, L = r.enabledAttributes;
    for (let O = 0, X = L.length; O < X; O++) L[O] !== M[O] && (n.disableVertexAttribArray(O), L[O] = 0);
  }
  function b(M, L, O, X, Q, ne, Z) {
    Z === true ? n.vertexAttribIPointer(M, L, O, Q, ne) : n.vertexAttribPointer(M, L, O, X, Q, ne);
  }
  function x(M, L, O, X) {
    _();
    const Q = X.attributes, ne = O.getAttributes(), Z = L.defaultAttributeValues;
    for (const se in ne) {
      const j = ne[se];
      if (j.location >= 0) {
        let de = Q[se];
        if (de === void 0 && (se === "instanceMatrix" && M.instanceMatrix && (de = M.instanceMatrix), se === "instanceColor" && M.instanceColor && (de = M.instanceColor)), de !== void 0) {
          const xe = de.normalized, be = de.itemSize, Fe = e.get(de);
          if (Fe === void 0) continue;
          const Ze = Fe.buffer, ie = Fe.type, pe = Fe.bytesPerElement, we = ie === n.INT || ie === n.UNSIGNED_INT || de.gpuType === Su;
          if (de.isInterleavedBufferAttribute) {
            const ge = de.data, Pe = ge.stride, ke = de.offset;
            if (ge.isInstancedInterleavedBuffer) {
              for (let Ne = 0; Ne < j.locationSize; Ne++) p(j.location + Ne, ge.meshPerAttribute);
              M.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ge.meshPerAttribute * ge.count);
            } else for (let Ne = 0; Ne < j.locationSize; Ne++) g(j.location + Ne);
            n.bindBuffer(n.ARRAY_BUFFER, Ze);
            for (let Ne = 0; Ne < j.locationSize; Ne++) b(j.location + Ne, be / j.locationSize, ie, xe, Pe * pe, (ke + be / j.locationSize * Ne) * pe, we);
          } else {
            if (de.isInstancedBufferAttribute) {
              for (let ge = 0; ge < j.locationSize; ge++) p(j.location + ge, de.meshPerAttribute);
              M.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = de.meshPerAttribute * de.count);
            } else for (let ge = 0; ge < j.locationSize; ge++) g(j.location + ge);
            n.bindBuffer(n.ARRAY_BUFFER, Ze);
            for (let ge = 0; ge < j.locationSize; ge++) b(j.location + ge, be / j.locationSize, ie, xe, be * pe, be / j.locationSize * ge * pe, we);
          }
        } else if (Z !== void 0) {
          const xe = Z[se];
          if (xe !== void 0) switch (xe.length) {
            case 2:
              n.vertexAttrib2fv(j.location, xe);
              break;
            case 3:
              n.vertexAttrib3fv(j.location, xe);
              break;
            case 4:
              n.vertexAttrib4fv(j.location, xe);
              break;
            default:
              n.vertexAttrib1fv(j.location, xe);
          }
        }
      }
    }
    E();
  }
  function P() {
    I();
    for (const M in i) {
      const L = i[M];
      for (const O in L) {
        const X = L[O];
        for (const Q in X) u(X[Q].object), delete X[Q];
        delete L[O];
      }
      delete i[M];
    }
  }
  function w(M) {
    if (i[M.id] === void 0) return;
    const L = i[M.id];
    for (const O in L) {
      const X = L[O];
      for (const Q in X) u(X[Q].object), delete X[Q];
      delete L[O];
    }
    delete i[M.id];
  }
  function C(M) {
    for (const L in i) {
      const O = i[L];
      if (O[M.id] === void 0) continue;
      const X = O[M.id];
      for (const Q in X) u(X[Q].object), delete X[Q];
      delete O[M.id];
    }
  }
  function I() {
    S(), o = true, r !== s && (r = s, c(r.object));
  }
  function S() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: a, reset: I, resetDefaultState: S, dispose: P, releaseStatesOfGeometry: w, releaseStatesOfProgram: C, initAttributes: _, enableAttribute: g, disableUnusedAttributes: E };
}
function Mb(n, e, t) {
  let i;
  function s(c) {
    i = c;
  }
  function r(c, u) {
    n.drawArrays(i, c, u), t.update(u, i, 1);
  }
  function o(c, u, h) {
    h !== 0 && (n.drawArraysInstanced(i, c, u, h), t.update(u, i, h));
  }
  function a(c, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, u, 0, h);
    let d = 0;
    for (let m = 0; m < h; m++) d += u[m];
    t.update(d, i, 1);
  }
  function l(c, u, h, f) {
    if (h === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null) for (let m = 0; m < c.length; m++) o(c[m], u[m], f[m]);
    else {
      d.multiDrawArraysInstancedWEBGL(i, c, 0, u, 0, f, 0, h);
      let m = 0;
      for (let _ = 0; _ < h; _++) m += u[_] * f[_];
      t.update(m, i, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function Sb(n, e, t, i) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const C = e.get("EXT_texture_filter_anisotropic");
      s = n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function o(C) {
    return !(C !== mn && i.convert(C) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(C) {
    const I = C === Ni && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(C !== Vn && i.convert(C) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && C !== Rn && !I);
  }
  function l(C) {
    if (C === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const h = t.logarithmicDepthBuffer === true, f = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), d = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), m = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = n.getParameter(n.MAX_TEXTURE_SIZE), g = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), p = n.getParameter(n.MAX_VERTEX_ATTRIBS), E = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), b = n.getParameter(n.MAX_VARYING_VECTORS), x = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), P = m > 0, w = n.getParameter(n.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: h, reverseDepthBuffer: f, maxTextures: d, maxVertexTextures: m, maxTextureSize: _, maxCubemapSize: g, maxAttributes: p, maxVertexUniforms: E, maxVaryings: b, maxFragmentUniforms: x, vertexTextures: P, maxSamples: w };
}
function bb(n) {
  const e = this;
  let t = null, i = 0, s = false, r = false;
  const o = new $i(), a = new je(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f) {
    const d = h.length !== 0 || f || i !== 0 || s;
    return s = f, i = h.length, d;
  }, this.beginShadows = function() {
    r = true, u(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(h, f) {
    t = u(h, f, 0);
  }, this.setState = function(h, f, d) {
    const m = h.clippingPlanes, _ = h.clipIntersection, g = h.clipShadows, p = n.get(h);
    if (!s || m === null || m.length === 0 || r && !g) r ? u(null) : c();
    else {
      const E = r ? 0 : i, b = E * 4;
      let x = p.clippingState || null;
      l.value = x, x = u(m, f, b, d);
      for (let P = 0; P !== b; ++P) x[P] = t[P];
      p.clippingState = x, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += E;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function u(h, f, d, m) {
    const _ = h !== null ? h.length : 0;
    let g = null;
    if (_ !== 0) {
      if (g = l.value, m !== true || g === null) {
        const p = d + _ * 4, E = f.matrixWorldInverse;
        a.getNormalMatrix(E), (g === null || g.length < p) && (g = new Float32Array(p));
        for (let b = 0, x = d; b !== _; ++b, x += 4) o.copy(h[b]).applyMatrix4(E, a), o.normal.toArray(g, x), g[x + 3] = o.constant;
      }
      l.value = g, l.needsUpdate = true;
    }
    return e.numPlanes = _, e.numIntersection = 0, g;
  }
}
function Tb(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === pc ? o.mapping = Ys : a === mc && (o.mapping = qs), o;
  }
  function i(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === pc || a === mc) if (e.has(o)) {
        const l = e.get(o).texture;
        return t(l, o.mapping);
      } else {
        const l = o.image;
        if (l && l.height > 0) {
          const c = new c0(l.height);
          return c.fromEquirectangularTexture(n, o), e.set(o, c), o.addEventListener("dispose", s), t(c.texture, o.mapping);
        } else return null;
      }
    }
    return o;
  }
  function s(o) {
    const a = o.target;
    a.removeEventListener("dispose", s);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: i, dispose: r };
}
const Is = 4, qf = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], is = 20, Nl = new Fa(), jf = new Ue();
let Ul = null, Ol = 0, Fl = 0, Bl = false;
const es = (1 + Math.sqrt(5)) / 2, As = 1 / es, Kf = [new N(-es, As, 0), new N(es, As, 0), new N(-As, 0, es), new N(As, 0, es), new N(0, es, -As), new N(0, es, As), new N(-1, 1, -1), new N(1, 1, -1), new N(-1, 1, 1), new N(1, 1, 1)], Eb = new N();
class Zf {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, i = 0.1, s = 100, r = {}) {
    const { size: o = 256, position: a = Eb } = r;
    Ul = this._renderer.getRenderTarget(), Ol = this._renderer.getActiveCubeFace(), Fl = this._renderer.getActiveMipmapLevel(), Bl = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(o);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(e, i, s, l, a), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = $f(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Qf(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ul, Ol, Fl), this._renderer.xr.enabled = Bl, e.scissorTest = false, Go(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ys || e.mapping === qs ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ul = this._renderer.getRenderTarget(), Ol = this._renderer.getActiveCubeFace(), Fl = this._renderer.getActiveMipmapLevel(), Bl = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = { magFilter: nn, minFilter: nn, generateMipmaps: false, type: Ni, format: mn, colorSpace: Jt, depthBuffer: false }, s = Jf(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Jf(e, t, i);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Ab(r)), this._blurMaterial = wb(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new kt(this._lodPlanes[0], e);
    this._renderer.compile(t, Nl);
  }
  _sceneToCubeUV(e, t, i, s, r) {
    const l = new tn(90, 1, t, i), c = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], h = this._renderer, f = h.autoClear, d = h.toneMapping;
    h.getClearColor(jf), h.toneMapping = Li, h.autoClear = false;
    const m = new oi({ name: "PMREM.Background", side: sn, depthWrite: false, depthTest: false }), _ = new kt(new eo(), m);
    let g = false;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, g = true) : (m.color.copy(jf), g = true);
    for (let E = 0; E < 6; E++) {
      const b = E % 3;
      b === 0 ? (l.up.set(0, c[E], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + u[E], r.y, r.z)) : b === 1 ? (l.up.set(0, 0, c[E]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + u[E], r.z)) : (l.up.set(0, c[E], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + u[E]));
      const x = this._cubeSize;
      Go(s, b * x, E > 2 ? x : 0, x, x), h.setRenderTarget(s), g && h.render(_, l), h.render(e, l);
    }
    _.geometry.dispose(), _.material.dispose(), h.toneMapping = d, h.autoClear = f, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, s = e.mapping === Ys || e.mapping === qs;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = $f()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Qf());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, o = new kt(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Go(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(o, Nl);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = false;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = Kf[(s - r - 1) % Kf.length];
      this._blur(e, r - 1, r, o, a);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, s, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, i, s, "latitudinal", r), this._halfBlur(o, e, i, i, s, "longitudinal", r);
  }
  _halfBlur(e, t, i, s, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const u = 3, h = new kt(this._lodPlanes[s], c), f = c.uniforms, d = this._sizeLods[i] - 1, m = isFinite(r) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * is - 1), _ = r / m, g = isFinite(r) ? 1 + Math.floor(u * _) : is;
    g > is && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${is}`);
    const p = [];
    let E = 0;
    for (let C = 0; C < is; ++C) {
      const I = C / _, S = Math.exp(-I * I / 2);
      p.push(S), C === 0 ? E += S : C < g && (E += 2 * S);
    }
    for (let C = 0; C < p.length; C++) p[C] = p[C] / E;
    f.envMap.value = e.texture, f.samples.value = g, f.weights.value = p, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: b } = this;
    f.dTheta.value = m, f.mipInt.value = b - i;
    const x = this._sizeLods[s], P = 3 * x * (s > b - Is ? s - b + Is : 0), w = 4 * (this._cubeSize - x);
    Go(t, P, w, 3 * x, 2 * x), l.setRenderTarget(t), l.render(h, Nl);
  }
}
function Ab(n) {
  const e = [], t = [], i = [];
  let s = n;
  const r = n - Is + 1 + qf.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, s);
    t.push(a);
    let l = 1 / a;
    o > n - Is ? l = qf[o - n + Is - 1] : o === 0 && (l = 0), i.push(l);
    const c = 1 / (a - 2), u = -c, h = 1 + c, f = [u, u, h, u, h, h, u, u, h, h, u, h], d = 6, m = 6, _ = 3, g = 2, p = 1, E = new Float32Array(_ * m * d), b = new Float32Array(g * m * d), x = new Float32Array(p * m * d);
    for (let w = 0; w < d; w++) {
      const C = w % 3 * 2 / 3 - 1, I = w > 2 ? 0 : -1, S = [C, I, 0, C + 2 / 3, I, 0, C + 2 / 3, I + 1, 0, C, I, 0, C + 2 / 3, I + 1, 0, C, I + 1, 0];
      E.set(S, _ * m * w), b.set(f, g * m * w);
      const M = [w, w, w, w, w, w];
      x.set(M, p * m * w);
    }
    const P = new Mt();
    P.setAttribute("position", new Ft(E, _)), P.setAttribute("uv", new Ft(b, g)), P.setAttribute("faceIndex", new Ft(x, p)), e.push(P), s > Is && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function Jf(n, e, t) {
  const i = new kn(n, e, t);
  return i.texture.mapping = Da, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
}
function Go(n, e, t, i, s) {
  n.viewport.set(e, t, i, s), n.scissor.set(e, t, i, s);
}
function wb(n, e, t) {
  const i = new Float32Array(is), s = new N(0, 1, 0);
  return new rn({ name: "SphericalGaussianBlur", defines: { n: is, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${n}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: ju(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: ai, depthTest: false, depthWrite: false });
}
function Qf() {
  return new rn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ju(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: ai, depthTest: false, depthWrite: false });
}
function $f() {
  return new rn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ju(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: ai, depthTest: false, depthWrite: false });
}
function ju() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Rb(n) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === pc || l === mc, u = l === Ys || l === qs;
      if (c || u) {
        let h = e.get(a);
        const f = h !== void 0 ? h.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== f) return t === null && (t = new Zf(n)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), h.texture;
        if (h !== void 0) return h.texture;
        {
          const d = a.image;
          return c && d && d.height > 0 || u && d && s(d) ? (t === null && (t = new Zf(n)), h = c ? t.fromEquirectangular(a) : t.fromCubemap(a), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), a.addEventListener("dispose", r), h.texture) : null;
        }
      }
    }
    return a;
  }
  function s(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: i, dispose: o };
}
function Cb(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    let s;
    switch (i) {
      case "WEBGL_depth_texture":
        s = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = n.getExtension(i);
    }
    return e[i] = s, s;
  }
  return { has: function(i) {
    return t(i) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(i) {
    const s = t(i);
    return s === null && Hs("THREE.WebGLRenderer: " + i + " extension not supported."), s;
  } };
}
function Pb(n, e, t, i) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function o(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const m in f.attributes) e.remove(f.attributes[m]);
    f.removeEventListener("dispose", o), delete s[f.id];
    const d = r.get(f);
    d && (e.remove(d), r.delete(f)), i.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(h, f) {
    return s[f.id] === true || (f.addEventListener("dispose", o), s[f.id] = true, t.memory.geometries++), f;
  }
  function l(h) {
    const f = h.attributes;
    for (const d in f) e.update(f[d], n.ARRAY_BUFFER);
  }
  function c(h) {
    const f = [], d = h.index, m = h.attributes.position;
    let _ = 0;
    if (d !== null) {
      const E = d.array;
      _ = d.version;
      for (let b = 0, x = E.length; b < x; b += 3) {
        const P = E[b + 0], w = E[b + 1], C = E[b + 2];
        f.push(P, w, w, C, C, P);
      }
    } else if (m !== void 0) {
      const E = m.array;
      _ = m.version;
      for (let b = 0, x = E.length / 3 - 1; b < x; b += 3) {
        const P = b + 0, w = b + 1, C = b + 2;
        f.push(P, w, w, C, C, P);
      }
    } else return;
    const g = new (mm(f) ? vm : xm)(f, 1);
    g.version = _;
    const p = r.get(h);
    p && e.remove(p), r.set(h, g);
  }
  function u(h) {
    const f = r.get(h);
    if (f) {
      const d = h.index;
      d !== null && f.version < d.version && c(h);
    } else c(h);
    return r.get(h);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function Lb(n, e, t) {
  let i;
  function s(f) {
    i = f;
  }
  let r, o;
  function a(f) {
    r = f.type, o = f.bytesPerElement;
  }
  function l(f, d) {
    n.drawElements(i, d, r, f * o), t.update(d, i, 1);
  }
  function c(f, d, m) {
    m !== 0 && (n.drawElementsInstanced(i, d, r, f * o, m), t.update(d, i, m));
  }
  function u(f, d, m) {
    if (m === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, d, 0, r, f, 0, m);
    let g = 0;
    for (let p = 0; p < m; p++) g += d[p];
    t.update(g, i, 1);
  }
  function h(f, d, m, _) {
    if (m === 0) return;
    const g = e.get("WEBGL_multi_draw");
    if (g === null) for (let p = 0; p < f.length; p++) c(f[p] / o, d[p], _[p]);
    else {
      g.multiDrawElementsInstancedWEBGL(i, d, 0, r, f, 0, _, 0, m);
      let p = 0;
      for (let E = 0; E < m; E++) p += d[E] * _[E];
      t.update(p, i, 1);
    }
  }
  this.setMode = s, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function Ib(n) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(r, o, a) {
    switch (t.calls++, o) {
      case n.TRIANGLES:
        t.triangles += a * (r / 3);
        break;
      case n.LINES:
        t.lines += a * (r / 2);
        break;
      case n.LINE_STRIP:
        t.lines += a * (r - 1);
        break;
      case n.LINE_LOOP:
        t.lines += a * r;
        break;
      case n.POINTS:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: s, update: i };
}
function Db(n, e, t) {
  const i = /* @__PURE__ */ new WeakMap(), s = new it();
  function r(o, a, l) {
    const c = o.morphTargetInfluences, u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let f = i.get(a);
    if (f === void 0 || f.count !== h) {
      let S = function() {
        C.dispose(), i.delete(a), a.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const d = a.morphAttributes.position !== void 0, m = a.morphAttributes.normal !== void 0, _ = a.morphAttributes.color !== void 0, g = a.morphAttributes.position || [], p = a.morphAttributes.normal || [], E = a.morphAttributes.color || [];
      let b = 0;
      d === true && (b = 1), m === true && (b = 2), _ === true && (b = 3);
      let x = a.attributes.position.count * b, P = 1;
      x > e.maxTextureSize && (P = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
      const w = new Float32Array(x * P * 4 * h), C = new gm(w, x, P, h);
      C.type = Rn, C.needsUpdate = true;
      const I = b * 4;
      for (let M = 0; M < h; M++) {
        const L = g[M], O = p[M], X = E[M], Q = x * P * 4 * M;
        for (let ne = 0; ne < L.count; ne++) {
          const Z = ne * I;
          d === true && (s.fromBufferAttribute(L, ne), w[Q + Z + 0] = s.x, w[Q + Z + 1] = s.y, w[Q + Z + 2] = s.z, w[Q + Z + 3] = 0), m === true && (s.fromBufferAttribute(O, ne), w[Q + Z + 4] = s.x, w[Q + Z + 5] = s.y, w[Q + Z + 6] = s.z, w[Q + Z + 7] = 0), _ === true && (s.fromBufferAttribute(X, ne), w[Q + Z + 8] = s.x, w[Q + Z + 9] = s.y, w[Q + Z + 10] = s.z, w[Q + Z + 11] = X.itemSize === 4 ? s.w : 1);
        }
      }
      f = { count: h, texture: C, size: new fe(x, P) }, i.set(a, f), a.addEventListener("dispose", S);
    }
    if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(n, "morphTexture", o.morphTexture, t);
    else {
      let d = 0;
      for (let _ = 0; _ < c.length; _++) d += c[_];
      const m = a.morphTargetsRelative ? 1 : 1 - d;
      l.getUniforms().setValue(n, "morphTargetBaseInfluence", m), l.getUniforms().setValue(n, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(n, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(n, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function Nb(n, e, t, i) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = i.render.frame, u = l.geometry, h = e.get(l, u);
    if (s.get(h) !== c && (e.update(h), s.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), s.get(l) !== c && (t.update(l.instanceMatrix, n.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, n.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      s.get(f) !== c && (f.update(), s.set(f, c));
    }
    return h;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: o };
}
const qm = new At(), ed = new Rm(1, 1), jm = new gm(), Km = new qv(), Zm = new Mm(), td = [], nd = [], id = new Float32Array(16), sd = new Float32Array(9), rd = new Float32Array(4);
function ir(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const s = e * t;
  let r = td[s];
  if (r === void 0 && (r = new Float32Array(s), td[s] = r), e !== 0) {
    i.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o) a += t, n[o].toArray(r, a);
  }
  return r;
}
function Rt(n, e) {
  if (n.length !== e.length) return false;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return false;
  return true;
}
function Ct(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function Ba(n, e) {
  let t = nd[e];
  t === void 0 && (t = new Int32Array(e), nd[e] = t);
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function Ub(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), t[0] = e);
}
function Ob(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Rt(t, e)) return;
    n.uniform2fv(this.addr, e), Ct(t, e);
  }
}
function Fb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (n.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Rt(t, e)) return;
    n.uniform3fv(this.addr, e), Ct(t, e);
  }
}
function Bb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Rt(t, e)) return;
    n.uniform4fv(this.addr, e), Ct(t, e);
  }
}
function zb(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (Rt(t, e)) return;
    n.uniformMatrix2fv(this.addr, false, e), Ct(t, e);
  } else {
    if (Rt(t, i)) return;
    rd.set(i), n.uniformMatrix2fv(this.addr, false, rd), Ct(t, i);
  }
}
function Hb(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (Rt(t, e)) return;
    n.uniformMatrix3fv(this.addr, false, e), Ct(t, e);
  } else {
    if (Rt(t, i)) return;
    sd.set(i), n.uniformMatrix3fv(this.addr, false, sd), Ct(t, i);
  }
}
function Vb(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (Rt(t, e)) return;
    n.uniformMatrix4fv(this.addr, false, e), Ct(t, e);
  } else {
    if (Rt(t, i)) return;
    id.set(i), n.uniformMatrix4fv(this.addr, false, id), Ct(t, i);
  }
}
function kb(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e);
}
function Gb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Rt(t, e)) return;
    n.uniform2iv(this.addr, e), Ct(t, e);
  }
}
function Wb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Rt(t, e)) return;
    n.uniform3iv(this.addr, e), Ct(t, e);
  }
}
function Xb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Rt(t, e)) return;
    n.uniform4iv(this.addr, e), Ct(t, e);
  }
}
function Yb(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), t[0] = e);
}
function qb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Rt(t, e)) return;
    n.uniform2uiv(this.addr, e), Ct(t, e);
  }
}
function jb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Rt(t, e)) return;
    n.uniform3uiv(this.addr, e), Ct(t, e);
  }
}
function Kb(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Rt(t, e)) return;
    n.uniform4uiv(this.addr, e), Ct(t, e);
  }
}
function Zb(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s);
  let r;
  this.type === n.SAMPLER_2D_SHADOW ? (ed.compareFunction = pm, r = ed) : r = qm, t.setTexture2D(e || r, s);
}
function Jb(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture3D(e || Km, s);
}
function Qb(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTextureCube(e || Zm, s);
}
function $b(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture2DArray(e || jm, s);
}
function eT(n) {
  switch (n) {
    case 5126:
      return Ub;
    case 35664:
      return Ob;
    case 35665:
      return Fb;
    case 35666:
      return Bb;
    case 35674:
      return zb;
    case 35675:
      return Hb;
    case 35676:
      return Vb;
    case 5124:
    case 35670:
      return kb;
    case 35667:
    case 35671:
      return Gb;
    case 35668:
    case 35672:
      return Wb;
    case 35669:
    case 35673:
      return Xb;
    case 5125:
      return Yb;
    case 36294:
      return qb;
    case 36295:
      return jb;
    case 36296:
      return Kb;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Zb;
    case 35679:
    case 36299:
    case 36307:
      return Jb;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qb;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $b;
  }
}
function tT(n, e) {
  n.uniform1fv(this.addr, e);
}
function nT(n, e) {
  const t = ir(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function iT(n, e) {
  const t = ir(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function sT(n, e) {
  const t = ir(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function rT(n, e) {
  const t = ir(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, false, t);
}
function oT(n, e) {
  const t = ir(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, false, t);
}
function aT(n, e) {
  const t = ir(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, false, t);
}
function lT(n, e) {
  n.uniform1iv(this.addr, e);
}
function cT(n, e) {
  n.uniform2iv(this.addr, e);
}
function uT(n, e) {
  n.uniform3iv(this.addr, e);
}
function hT(n, e) {
  n.uniform4iv(this.addr, e);
}
function fT(n, e) {
  n.uniform1uiv(this.addr, e);
}
function dT(n, e) {
  n.uniform2uiv(this.addr, e);
}
function pT(n, e) {
  n.uniform3uiv(this.addr, e);
}
function mT(n, e) {
  n.uniform4uiv(this.addr, e);
}
function gT(n, e, t) {
  const i = this.cache, s = e.length, r = Ba(t, s);
  Rt(i, r) || (n.uniform1iv(this.addr, r), Ct(i, r));
  for (let o = 0; o !== s; ++o) t.setTexture2D(e[o] || qm, r[o]);
}
function _T(n, e, t) {
  const i = this.cache, s = e.length, r = Ba(t, s);
  Rt(i, r) || (n.uniform1iv(this.addr, r), Ct(i, r));
  for (let o = 0; o !== s; ++o) t.setTexture3D(e[o] || Km, r[o]);
}
function xT(n, e, t) {
  const i = this.cache, s = e.length, r = Ba(t, s);
  Rt(i, r) || (n.uniform1iv(this.addr, r), Ct(i, r));
  for (let o = 0; o !== s; ++o) t.setTextureCube(e[o] || Zm, r[o]);
}
function vT(n, e, t) {
  const i = this.cache, s = e.length, r = Ba(t, s);
  Rt(i, r) || (n.uniform1iv(this.addr, r), Ct(i, r));
  for (let o = 0; o !== s; ++o) t.setTexture2DArray(e[o] || jm, r[o]);
}
function yT(n) {
  switch (n) {
    case 5126:
      return tT;
    case 35664:
      return nT;
    case 35665:
      return iT;
    case 35666:
      return sT;
    case 35674:
      return rT;
    case 35675:
      return oT;
    case 35676:
      return aT;
    case 5124:
    case 35670:
      return lT;
    case 35667:
    case 35671:
      return cT;
    case 35668:
    case 35672:
      return uT;
    case 35669:
    case 35673:
      return hT;
    case 5125:
      return fT;
    case 36294:
      return dT;
    case 36295:
      return pT;
    case 36296:
      return mT;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return gT;
    case 35679:
    case 36299:
    case 36307:
      return _T;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return xT;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return vT;
  }
}
class MT {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = eT(t.type);
  }
}
class ST {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = yT(t.type);
  }
}
class bT {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const s = this.seq;
    for (let r = 0, o = s.length; r !== o; ++r) {
      const a = s[r];
      a.setValue(e, t[a.id], i);
    }
  }
}
const zl = /(\w+)(\])?(\[|\.)?/g;
function od(n, e) {
  n.seq.push(e), n.map[e.id] = e;
}
function TT(n, e, t) {
  const i = n.name, s = i.length;
  for (zl.lastIndex = 0; ; ) {
    const r = zl.exec(i), o = zl.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === s) {
      od(t, c === void 0 ? new MT(a, n, e) : new ST(a, n, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && (h = new bT(a), od(t, h)), t = h;
    }
  }
}
class ra {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < i; ++s) {
      const r = e.getActiveUniform(t, s), o = e.getUniformLocation(t, r.name);
      TT(r, o, this);
    }
  }
  setValue(e, t, i, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, i, s);
  }
  setOptional(e, t, i) {
    const s = t[i];
    s !== void 0 && this.setValue(e, i, s);
  }
  static upload(e, t, i, s) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], l = i[a.id];
      l.needsUpdate !== false && a.setValue(e, l.value, s);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const o = e[s];
      o.id in t && i.push(o);
    }
    return i;
  }
}
function ad(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
const ET = 37297;
let AT = 0;
function wT(n, e) {
  const t = n.split(`
`), i = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = s; o < r; o++) {
    const a = o + 1;
    i.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return i.join(`
`);
}
const ld = new je();
function RT(n) {
  $e._getMatrix(ld, $e.workingColorSpace, n);
  const e = `mat3( ${ld.elements.map((t) => t.toFixed(4))} )`;
  switch ($e.getTransfer(n)) {
    case _a:
      return [e, "LinearTransferOETF"];
    case ct:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", n), [e, "LinearTransferOETF"];
  }
}
function cd(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS), s = n.getShaderInfoLog(e).trim();
  if (i && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + s + `

` + wT(n.getShaderSource(e), o);
  } else return s;
}
function CT(n, e) {
  const t = RT(e);
  return [`vec4 ${n}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function PT(n, e) {
  let t;
  switch (e) {
    case Jp:
      t = "Linear";
      break;
    case Qp:
      t = "Reinhard";
      break;
    case $p:
      t = "Cineon";
      break;
    case em:
      t = "ACESFilmic";
      break;
    case nm:
      t = "AgX";
      break;
    case im:
      t = "Neutral";
      break;
    case tm:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Wo = new N();
function LT() {
  $e.getLuminanceCoefficients(Wo);
  const n = Wo.x.toFixed(4), e = Wo.y.toFixed(4), t = Wo.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${n}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function IT(n) {
  return [n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Mr).join(`
`);
}
function DT(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== false && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function NT(n, e) {
  const t = {}, i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < i; s++) {
    const r = n.getActiveAttrib(e, s), o = r.name;
    let a = 1;
    r.type === n.FLOAT_MAT2 && (a = 2), r.type === n.FLOAT_MAT3 && (a = 3), r.type === n.FLOAT_MAT4 && (a = 4), t[o] = { type: r.type, location: n.getAttribLocation(e, o), locationSize: a };
  }
  return t;
}
function Mr(n) {
  return n !== "";
}
function ud(n, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function hd(n, e) {
  return n.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const UT = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Jc(n) {
  return n.replace(UT, FT);
}
const OT = /* @__PURE__ */ new Map();
function FT(n, e) {
  let t = Ke[e];
  if (t === void 0) {
    const i = OT.get(e);
    if (i !== void 0) t = Ke[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Jc(t);
}
const BT = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function fd(n) {
  return n.replace(BT, zT);
}
function zT(n, e, t, i) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++) s += i.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function dd(n) {
  let e = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
  return n.precision === "highp" ? e += `
#define HIGH_PRECISION` : n.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function HT(n) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return n.shadowMapType === Zp ? e = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === Bx ? e = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === ei && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function VT(n) {
  let e = "ENVMAP_TYPE_CUBE";
  if (n.envMap) switch (n.envMapMode) {
    case Ys:
    case qs:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case Da:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function kT(n) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (n.envMap) switch (n.envMapMode) {
    case qs:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function GT(n) {
  let e = "ENVMAP_BLENDING_NONE";
  if (n.envMap) switch (n.combine) {
    case Mu:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case iv:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case sv:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function WT(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: i, maxMip: t };
}
function XT(n, e, t, i) {
  const s = n.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = HT(t), c = VT(t), u = kT(t), h = GT(t), f = WT(t), d = IT(t), m = DT(r), _ = s.createProgram();
  let g, p, E = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (g = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m].filter(Mr).join(`
`), g.length > 0 && (g += `
`), p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m].filter(Mr).join(`
`), p.length > 0 && (p += `
`)) : (g = [dd(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Mr).join(`
`), p = [dd(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + h : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Li ? "#define TONE_MAPPING" : "", t.toneMapping !== Li ? Ke.tonemapping_pars_fragment : "", t.toneMapping !== Li ? PT("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ke.colorspace_pars_fragment, CT("linearToOutputTexel", t.outputColorSpace), LT(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Mr).join(`
`)), o = Jc(o), o = ud(o, t), o = hd(o, t), a = Jc(a), a = ud(a, t), a = hd(a, t), o = fd(o), a = fd(a), t.isRawShaderMaterial !== true && (E = `#version 300 es
`, g = [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + g, p = ["#define varying in", t.glslVersion === jh ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === jh ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  const b = E + g + o, x = E + p + a, P = ad(s, s.VERTEX_SHADER, b), w = ad(s, s.FRAGMENT_SHADER, x);
  s.attachShader(_, P), s.attachShader(_, w), t.index0AttributeName !== void 0 ? s.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === true && s.bindAttribLocation(_, 0, "position"), s.linkProgram(_);
  function C(L) {
    if (n.debug.checkShaderErrors) {
      const O = s.getProgramInfoLog(_).trim(), X = s.getShaderInfoLog(P).trim(), Q = s.getShaderInfoLog(w).trim();
      let ne = true, Z = true;
      if (s.getProgramParameter(_, s.LINK_STATUS) === false) if (ne = false, typeof n.debug.onShaderError == "function") n.debug.onShaderError(s, _, P, w);
      else {
        const se = cd(s, P, "vertex"), j = cd(s, w, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(_, s.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + O + `
` + se + `
` + j);
      }
      else O !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", O) : (X === "" || Q === "") && (Z = false);
      Z && (L.diagnostics = { runnable: ne, programLog: O, vertexShader: { log: X, prefix: g }, fragmentShader: { log: Q, prefix: p } });
    }
    s.deleteShader(P), s.deleteShader(w), I = new ra(s, _), S = NT(s, _);
  }
  let I;
  this.getUniforms = function() {
    return I === void 0 && C(this), I;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && C(this), S;
  };
  let M = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = s.getProgramParameter(_, ET)), M;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), s.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = AT++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = P, this.fragmentShader = w, this;
}
let YT = 0;
class qT {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, i = e.fragmentShader, s = this._getShaderStage(t), r = this._getShaderStage(i), o = this._getShaderCacheForMaterial(e);
    return o.has(s) === false && (o.add(s), s.usedTimes++), o.has(r) === false && (o.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new jT(e), t.set(e, i)), i;
  }
}
class jT {
  constructor(e) {
    this.id = YT++, this.code = e, this.usedTimes = 0;
  }
}
function KT(n, e, t, i, s, r, o) {
  const a = new Iu(), l = new qT(), c = /* @__PURE__ */ new Set(), u = [], h = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let d = s.precision;
  const m = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function g(S, M, L, O, X) {
    const Q = O.fog, ne = X.geometry, Z = S.isMeshStandardMaterial ? O.environment : null, se = (S.isMeshStandardMaterial ? t : e).get(S.envMap || Z), j = se && se.mapping === Da ? se.image.height : null, de = m[S.type];
    S.precision !== null && (d = s.getMaxPrecision(S.precision), d !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", d, "instead."));
    const xe = ne.morphAttributes.position || ne.morphAttributes.normal || ne.morphAttributes.color, be = xe !== void 0 ? xe.length : 0;
    let Fe = 0;
    ne.morphAttributes.position !== void 0 && (Fe = 1), ne.morphAttributes.normal !== void 0 && (Fe = 2), ne.morphAttributes.color !== void 0 && (Fe = 3);
    let Ze, ie, pe, we;
    if (de) {
      const at = Fn[de];
      Ze = at.vertexShader, ie = at.fragmentShader;
    } else Ze = S.vertexShader, ie = S.fragmentShader, l.update(S), pe = l.getVertexShaderID(S), we = l.getFragmentShaderID(S);
    const ge = n.getRenderTarget(), Pe = n.state.buffers.depth.getReversed(), ke = X.isInstancedMesh === true, Ne = X.isBatchedMesh === true, dt = !!S.map, R = !!S.matcap, D = !!se, y = !!S.aoMap, V = !!S.lightMap, F = !!S.bumpMap, H = !!S.normalMap, z = !!S.displacementMap, J = !!S.emissiveMap, G = !!S.metalnessMap, q = !!S.roughnessMap, ae = S.anisotropy > 0, T = S.clearcoat > 0, v = S.dispersion > 0, U = S.iridescence > 0, Y = S.sheen > 0, te = S.transmission > 0, K = ae && !!S.anisotropyMap, ve = T && !!S.clearcoatMap, ce = T && !!S.clearcoatNormalMap, ye = T && !!S.clearcoatRoughnessMap, Te = U && !!S.iridescenceMap, oe = U && !!S.iridescenceThicknessMap, Ee = Y && !!S.sheenColorMap, Ce = Y && !!S.sheenRoughnessMap, Le = !!S.specularMap, me = !!S.specularColorMap, Ge = !!S.specularIntensityMap, B = te && !!S.transmissionMap, Me = te && !!S.thicknessMap, le = !!S.gradientMap, Re = !!S.alphaMap, ue = S.alphaTest > 0, re = !!S.alphaHash, Ie = !!S.extensions;
    let Xe = Li;
    S.toneMapped && (ge === null || ge.isXRRenderTarget === true) && (Xe = n.toneMapping);
    const mt = { shaderID: de, shaderType: S.type, shaderName: S.name, vertexShader: Ze, fragmentShader: ie, defines: S.defines, customVertexShaderID: pe, customFragmentShaderID: we, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: d, batching: Ne, batchingColor: Ne && X._colorsTexture !== null, instancing: ke, instancingColor: ke && X.instanceColor !== null, instancingMorph: ke && X.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: ge === null ? n.outputColorSpace : ge.isXRRenderTarget === true ? ge.texture.colorSpace : Jt, alphaToCoverage: !!S.alphaToCoverage, map: dt, matcap: R, envMap: D, envMapMode: D && se.mapping, envMapCubeUVHeight: j, aoMap: y, lightMap: V, bumpMap: F, normalMap: H, displacementMap: f && z, emissiveMap: J, normalMapObjectSpace: H && S.normalMapType === dv, normalMapTangentSpace: H && S.normalMapType === Na, metalnessMap: G, roughnessMap: q, anisotropy: ae, anisotropyMap: K, clearcoat: T, clearcoatMap: ve, clearcoatNormalMap: ce, clearcoatRoughnessMap: ye, dispersion: v, iridescence: U, iridescenceMap: Te, iridescenceThicknessMap: oe, sheen: Y, sheenColorMap: Ee, sheenRoughnessMap: Ce, specularMap: Le, specularColorMap: me, specularIntensityMap: Ge, transmission: te, transmissionMap: B, thicknessMap: Me, gradientMap: le, opaque: S.transparent === false && S.blending === zs && S.alphaToCoverage === false, alphaMap: Re, alphaTest: ue, alphaHash: re, combine: S.combine, mapUv: dt && _(S.map.channel), aoMapUv: y && _(S.aoMap.channel), lightMapUv: V && _(S.lightMap.channel), bumpMapUv: F && _(S.bumpMap.channel), normalMapUv: H && _(S.normalMap.channel), displacementMapUv: z && _(S.displacementMap.channel), emissiveMapUv: J && _(S.emissiveMap.channel), metalnessMapUv: G && _(S.metalnessMap.channel), roughnessMapUv: q && _(S.roughnessMap.channel), anisotropyMapUv: K && _(S.anisotropyMap.channel), clearcoatMapUv: ve && _(S.clearcoatMap.channel), clearcoatNormalMapUv: ce && _(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: ye && _(S.clearcoatRoughnessMap.channel), iridescenceMapUv: Te && _(S.iridescenceMap.channel), iridescenceThicknessMapUv: oe && _(S.iridescenceThicknessMap.channel), sheenColorMapUv: Ee && _(S.sheenColorMap.channel), sheenRoughnessMapUv: Ce && _(S.sheenRoughnessMap.channel), specularMapUv: Le && _(S.specularMap.channel), specularColorMapUv: me && _(S.specularColorMap.channel), specularIntensityMapUv: Ge && _(S.specularIntensityMap.channel), transmissionMapUv: B && _(S.transmissionMap.channel), thicknessMapUv: Me && _(S.thicknessMap.channel), alphaMapUv: Re && _(S.alphaMap.channel), vertexTangents: !!ne.attributes.tangent && (H || ae), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!ne.attributes.color && ne.attributes.color.itemSize === 4, pointsUvs: X.isPoints === true && !!ne.attributes.uv && (dt || Re), fog: !!Q, useFog: S.fog === true, fogExp2: !!Q && Q.isFogExp2, flatShading: S.flatShading === true, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: h, reverseDepthBuffer: Pe, skinning: X.isSkinnedMesh === true, morphTargets: ne.morphAttributes.position !== void 0, morphNormals: ne.morphAttributes.normal !== void 0, morphColors: ne.morphAttributes.color !== void 0, morphTargetsCount: be, morphTextureStride: Fe, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: S.dithering, shadowMapEnabled: n.shadowMap.enabled && L.length > 0, shadowMapType: n.shadowMap.type, toneMapping: Xe, decodeVideoTexture: dt && S.map.isVideoTexture === true && $e.getTransfer(S.map.colorSpace) === ct, decodeVideoTextureEmissive: J && S.emissiveMap.isVideoTexture === true && $e.getTransfer(S.emissiveMap.colorSpace) === ct, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === Bn, flipSided: S.side === sn, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: Ie && S.extensions.clipCullDistance === true && i.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Ie && S.extensions.multiDraw === true || Ne) && i.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
    return mt.vertexUv1s = c.has(1), mt.vertexUv2s = c.has(2), mt.vertexUv3s = c.has(3), c.clear(), mt;
  }
  function p(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0) for (const L in S.defines) M.push(L), M.push(S.defines[L]);
    return S.isRawShaderMaterial === false && (E(M, S), b(M, S), M.push(n.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function E(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function b(S, M) {
    a.disableAll(), M.supportsVertexTextures && a.enable(0), M.instancing && a.enable(1), M.instancingColor && a.enable(2), M.instancingMorph && a.enable(3), M.matcap && a.enable(4), M.envMap && a.enable(5), M.normalMapObjectSpace && a.enable(6), M.normalMapTangentSpace && a.enable(7), M.clearcoat && a.enable(8), M.iridescence && a.enable(9), M.alphaTest && a.enable(10), M.vertexColors && a.enable(11), M.vertexAlphas && a.enable(12), M.vertexUv1s && a.enable(13), M.vertexUv2s && a.enable(14), M.vertexUv3s && a.enable(15), M.vertexTangents && a.enable(16), M.anisotropy && a.enable(17), M.alphaHash && a.enable(18), M.batching && a.enable(19), M.dispersion && a.enable(20), M.batchingColor && a.enable(21), S.push(a.mask), a.disableAll(), M.fog && a.enable(0), M.useFog && a.enable(1), M.flatShading && a.enable(2), M.logarithmicDepthBuffer && a.enable(3), M.reverseDepthBuffer && a.enable(4), M.skinning && a.enable(5), M.morphTargets && a.enable(6), M.morphNormals && a.enable(7), M.morphColors && a.enable(8), M.premultipliedAlpha && a.enable(9), M.shadowMapEnabled && a.enable(10), M.doubleSided && a.enable(11), M.flipSided && a.enable(12), M.useDepthPacking && a.enable(13), M.dithering && a.enable(14), M.transmission && a.enable(15), M.sheen && a.enable(16), M.opaque && a.enable(17), M.pointsUvs && a.enable(18), M.decodeVideoTexture && a.enable(19), M.decodeVideoTextureEmissive && a.enable(20), M.alphaToCoverage && a.enable(21), S.push(a.mask);
  }
  function x(S) {
    const M = m[S.type];
    let L;
    if (M) {
      const O = Fn[M];
      L = ks.clone(O.uniforms);
    } else L = S.uniforms;
    return L;
  }
  function P(S, M) {
    let L;
    for (let O = 0, X = u.length; O < X; O++) {
      const Q = u[O];
      if (Q.cacheKey === M) {
        L = Q, ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && (L = new XT(n, M, S, r), u.push(L)), L;
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const M = u.indexOf(S);
      u[M] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function C(S) {
    l.remove(S);
  }
  function I() {
    l.dispose();
  }
  return { getParameters: g, getProgramCacheKey: p, getUniforms: x, acquireProgram: P, releaseProgram: w, releaseShaderCache: C, programs: u, dispose: I };
}
function ZT() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(o) {
    return n.has(o);
  }
  function t(o) {
    let a = n.get(o);
    return a === void 0 && (a = {}, n.set(o, a)), a;
  }
  function i(o) {
    n.delete(o);
  }
  function s(o, a, l) {
    n.get(o)[a] = l;
  }
  function r() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: i, update: s, dispose: r };
}
function JT(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.material.id !== e.material.id ? n.material.id - e.material.id : n.z !== e.z ? n.z - e.z : n.id - e.id;
}
function pd(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.z !== e.z ? e.z - n.z : n.id - e.id;
}
function md() {
  const n = [];
  let e = 0;
  const t = [], i = [], s = [];
  function r() {
    e = 0, t.length = 0, i.length = 0, s.length = 0;
  }
  function o(h, f, d, m, _, g) {
    let p = n[e];
    return p === void 0 ? (p = { id: h.id, object: h, geometry: f, material: d, groupOrder: m, renderOrder: h.renderOrder, z: _, group: g }, n[e] = p) : (p.id = h.id, p.object = h, p.geometry = f, p.material = d, p.groupOrder = m, p.renderOrder = h.renderOrder, p.z = _, p.group = g), e++, p;
  }
  function a(h, f, d, m, _, g) {
    const p = o(h, f, d, m, _, g);
    d.transmission > 0 ? i.push(p) : d.transparent === true ? s.push(p) : t.push(p);
  }
  function l(h, f, d, m, _, g) {
    const p = o(h, f, d, m, _, g);
    d.transmission > 0 ? i.unshift(p) : d.transparent === true ? s.unshift(p) : t.unshift(p);
  }
  function c(h, f) {
    t.length > 1 && t.sort(h || JT), i.length > 1 && i.sort(f || pd), s.length > 1 && s.sort(f || pd);
  }
  function u() {
    for (let h = e, f = n.length; h < f; h++) {
      const d = n[h];
      if (d.id === null) break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
    }
  }
  return { opaque: t, transmissive: i, transparent: s, init: r, push: a, unshift: l, finish: u, sort: c };
}
function QT() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(i, s) {
    const r = n.get(i);
    let o;
    return r === void 0 ? (o = new md(), n.set(i, [o])) : s >= r.length ? (o = new md(), r.push(o)) : o = r[s], o;
  }
  function t() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function $T() {
  const n = {};
  return { get: function(e) {
    if (n[e.id] !== void 0) return n[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new N(), color: new Ue() };
        break;
      case "SpotLight":
        t = { position: new N(), direction: new N(), color: new Ue(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new N(), color: new Ue(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new N(), skyColor: new Ue(), groundColor: new Ue() };
        break;
      case "RectAreaLight":
        t = { color: new Ue(), position: new N(), halfWidth: new N(), halfHeight: new N() };
        break;
    }
    return n[e.id] = t, t;
  } };
}
function eE() {
  const n = {};
  return { get: function(e) {
    if (n[e.id] !== void 0) return n[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new fe() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new fe() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new fe(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return n[e.id] = t, t;
  } };
}
let tE = 0;
function nE(n, e) {
  return (e.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (n.map ? 1 : 0);
}
function iE(n) {
  const e = new $T(), t = eE(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) i.probe.push(new N());
  const s = new N(), r = new Ye(), o = new Ye();
  function a(c) {
    let u = 0, h = 0, f = 0;
    for (let S = 0; S < 9; S++) i.probe[S].set(0, 0, 0);
    let d = 0, m = 0, _ = 0, g = 0, p = 0, E = 0, b = 0, x = 0, P = 0, w = 0, C = 0;
    c.sort(nE);
    for (let S = 0, M = c.length; S < M; S++) {
      const L = c[S], O = L.color, X = L.intensity, Q = L.distance, ne = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight) u += O.r * X, h += O.g * X, f += O.b * X;
      else if (L.isLightProbe) {
        for (let Z = 0; Z < 9; Z++) i.probe[Z].addScaledVector(L.sh.coefficients[Z], X);
        C++;
      } else if (L.isDirectionalLight) {
        const Z = e.get(L);
        if (Z.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
          const se = L.shadow, j = t.get(L);
          j.shadowIntensity = se.intensity, j.shadowBias = se.bias, j.shadowNormalBias = se.normalBias, j.shadowRadius = se.radius, j.shadowMapSize = se.mapSize, i.directionalShadow[d] = j, i.directionalShadowMap[d] = ne, i.directionalShadowMatrix[d] = L.shadow.matrix, E++;
        }
        i.directional[d] = Z, d++;
      } else if (L.isSpotLight) {
        const Z = e.get(L);
        Z.position.setFromMatrixPosition(L.matrixWorld), Z.color.copy(O).multiplyScalar(X), Z.distance = Q, Z.coneCos = Math.cos(L.angle), Z.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), Z.decay = L.decay, i.spot[_] = Z;
        const se = L.shadow;
        if (L.map && (i.spotLightMap[P] = L.map, P++, se.updateMatrices(L), L.castShadow && w++), i.spotLightMatrix[_] = se.matrix, L.castShadow) {
          const j = t.get(L);
          j.shadowIntensity = se.intensity, j.shadowBias = se.bias, j.shadowNormalBias = se.normalBias, j.shadowRadius = se.radius, j.shadowMapSize = se.mapSize, i.spotShadow[_] = j, i.spotShadowMap[_] = ne, x++;
        }
        _++;
      } else if (L.isRectAreaLight) {
        const Z = e.get(L);
        Z.color.copy(O).multiplyScalar(X), Z.halfWidth.set(L.width * 0.5, 0, 0), Z.halfHeight.set(0, L.height * 0.5, 0), i.rectArea[g] = Z, g++;
      } else if (L.isPointLight) {
        const Z = e.get(L);
        if (Z.color.copy(L.color).multiplyScalar(L.intensity), Z.distance = L.distance, Z.decay = L.decay, L.castShadow) {
          const se = L.shadow, j = t.get(L);
          j.shadowIntensity = se.intensity, j.shadowBias = se.bias, j.shadowNormalBias = se.normalBias, j.shadowRadius = se.radius, j.shadowMapSize = se.mapSize, j.shadowCameraNear = se.camera.near, j.shadowCameraFar = se.camera.far, i.pointShadow[m] = j, i.pointShadowMap[m] = ne, i.pointShadowMatrix[m] = L.shadow.matrix, b++;
        }
        i.point[m] = Z, m++;
      } else if (L.isHemisphereLight) {
        const Z = e.get(L);
        Z.skyColor.copy(L.color).multiplyScalar(X), Z.groundColor.copy(L.groundColor).multiplyScalar(X), i.hemi[p] = Z, p++;
      }
    }
    g > 0 && (n.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = _e.LTC_FLOAT_1, i.rectAreaLTC2 = _e.LTC_FLOAT_2) : (i.rectAreaLTC1 = _e.LTC_HALF_1, i.rectAreaLTC2 = _e.LTC_HALF_2)), i.ambient[0] = u, i.ambient[1] = h, i.ambient[2] = f;
    const I = i.hash;
    (I.directionalLength !== d || I.pointLength !== m || I.spotLength !== _ || I.rectAreaLength !== g || I.hemiLength !== p || I.numDirectionalShadows !== E || I.numPointShadows !== b || I.numSpotShadows !== x || I.numSpotMaps !== P || I.numLightProbes !== C) && (i.directional.length = d, i.spot.length = _, i.rectArea.length = g, i.point.length = m, i.hemi.length = p, i.directionalShadow.length = E, i.directionalShadowMap.length = E, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = x, i.spotShadowMap.length = x, i.directionalShadowMatrix.length = E, i.pointShadowMatrix.length = b, i.spotLightMatrix.length = x + P - w, i.spotLightMap.length = P, i.numSpotLightShadowsWithMaps = w, i.numLightProbes = C, I.directionalLength = d, I.pointLength = m, I.spotLength = _, I.rectAreaLength = g, I.hemiLength = p, I.numDirectionalShadows = E, I.numPointShadows = b, I.numSpotShadows = x, I.numSpotMaps = P, I.numLightProbes = C, i.version = tE++);
  }
  function l(c, u) {
    let h = 0, f = 0, d = 0, m = 0, _ = 0;
    const g = u.matrixWorldInverse;
    for (let p = 0, E = c.length; p < E; p++) {
      const b = c[p];
      if (b.isDirectionalLight) {
        const x = i.directional[h];
        x.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), x.direction.sub(s), x.direction.transformDirection(g), h++;
      } else if (b.isSpotLight) {
        const x = i.spot[d];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(g), x.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), x.direction.sub(s), x.direction.transformDirection(g), d++;
      } else if (b.isRectAreaLight) {
        const x = i.rectArea[m];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(g), o.identity(), r.copy(b.matrixWorld), r.premultiply(g), o.extractRotation(r), x.halfWidth.set(b.width * 0.5, 0, 0), x.halfHeight.set(0, b.height * 0.5, 0), x.halfWidth.applyMatrix4(o), x.halfHeight.applyMatrix4(o), m++;
      } else if (b.isPointLight) {
        const x = i.point[f];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(g), f++;
      } else if (b.isHemisphereLight) {
        const x = i.hemi[_];
        x.direction.setFromMatrixPosition(b.matrixWorld), x.direction.transformDirection(g), _++;
      }
    }
  }
  return { setup: a, setupView: l, state: i };
}
function gd(n) {
  const e = new iE(n), t = [], i = [];
  function s(u) {
    c.camera = u, t.length = 0, i.length = 0;
  }
  function r(u) {
    t.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function a() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = { lightsArray: t, shadowsArray: i, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: s, state: c, setupLights: a, setupLightsView: l, pushLight: r, pushShadow: o };
}
function sE(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, r = 0) {
    const o = e.get(s);
    let a;
    return o === void 0 ? (a = new gd(n), e.set(s, [a])) : r >= o.length ? (a = new gd(n), o.push(a)) : a = o[r], a;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: i };
}
const rE = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, oE = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function aE(n, e, t) {
  let i = new Ou();
  const s = new fe(), r = new fe(), o = new it(), a = new ty({ depthPacking: fv }), l = new ny(), c = {}, u = t.maxTextureSize, h = { [hi]: sn, [sn]: hi, [Bn]: Bn }, f = new rn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new fe() }, radius: { value: 4 } }, vertexShader: rE, fragmentShader: oE }), d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const m = new Mt();
  m.setAttribute("position", new Ft(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new kt(m, f), g = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Zp;
  let p = this.type;
  this.render = function(w, C, I) {
    if (g.enabled === false || g.autoUpdate === false && g.needsUpdate === false || w.length === 0) return;
    const S = n.getRenderTarget(), M = n.getActiveCubeFace(), L = n.getActiveMipmapLevel(), O = n.state;
    O.setBlending(ai), O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(true), O.setScissorTest(false);
    const X = p !== ei && this.type === ei, Q = p === ei && this.type !== ei;
    for (let ne = 0, Z = w.length; ne < Z; ne++) {
      const se = w[ne], j = se.shadow;
      if (j === void 0) {
        console.warn("THREE.WebGLShadowMap:", se, "has no shadow.");
        continue;
      }
      if (j.autoUpdate === false && j.needsUpdate === false) continue;
      s.copy(j.mapSize);
      const de = j.getFrameExtents();
      if (s.multiply(de), r.copy(j.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / de.x), s.x = r.x * de.x, j.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / de.y), s.y = r.y * de.y, j.mapSize.y = r.y)), j.map === null || X === true || Q === true) {
        const be = this.type !== ei ? { minFilter: Ot, magFilter: Ot } : {};
        j.map !== null && j.map.dispose(), j.map = new kn(s.x, s.y, be), j.map.texture.name = se.name + ".shadowMap", j.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(j.map), n.clear();
      const xe = j.getViewportCount();
      for (let be = 0; be < xe; be++) {
        const Fe = j.getViewport(be);
        o.set(r.x * Fe.x, r.y * Fe.y, r.x * Fe.z, r.y * Fe.w), O.viewport(o), j.updateMatrices(se, be), i = j.getFrustum(), x(C, I, j.camera, se, this.type);
      }
      j.isPointLightShadow !== true && this.type === ei && E(j, I), j.needsUpdate = false;
    }
    p = this.type, g.needsUpdate = false, n.setRenderTarget(S, M, L);
  };
  function E(w, C) {
    const I = e.update(_);
    f.defines.VSM_SAMPLES !== w.blurSamples && (f.defines.VSM_SAMPLES = w.blurSamples, d.defines.VSM_SAMPLES = w.blurSamples, f.needsUpdate = true, d.needsUpdate = true), w.mapPass === null && (w.mapPass = new kn(s.x, s.y)), f.uniforms.shadow_pass.value = w.map.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, n.setRenderTarget(w.mapPass), n.clear(), n.renderBufferDirect(C, null, I, f, _, null), d.uniforms.shadow_pass.value = w.mapPass.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, n.setRenderTarget(w.map), n.clear(), n.renderBufferDirect(C, null, I, d, _, null);
  }
  function b(w, C, I, S) {
    let M = null;
    const L = I.isPointLight === true ? w.customDistanceMaterial : w.customDepthMaterial;
    if (L !== void 0) M = L;
    else if (M = I.isPointLight === true ? l : a, n.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === true) {
      const O = M.uuid, X = C.uuid;
      let Q = c[O];
      Q === void 0 && (Q = {}, c[O] = Q);
      let ne = Q[X];
      ne === void 0 && (ne = M.clone(), Q[X] = ne, C.addEventListener("dispose", P)), M = ne;
    }
    if (M.visible = C.visible, M.wireframe = C.wireframe, S === ei ? M.side = C.shadowSide !== null ? C.shadowSide : C.side : M.side = C.shadowSide !== null ? C.shadowSide : h[C.side], M.alphaMap = C.alphaMap, M.alphaTest = C.alphaToCoverage === true ? 0.5 : C.alphaTest, M.map = C.map, M.clipShadows = C.clipShadows, M.clippingPlanes = C.clippingPlanes, M.clipIntersection = C.clipIntersection, M.displacementMap = C.displacementMap, M.displacementScale = C.displacementScale, M.displacementBias = C.displacementBias, M.wireframeLinewidth = C.wireframeLinewidth, M.linewidth = C.linewidth, I.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const O = n.properties.get(M);
      O.light = I;
    }
    return M;
  }
  function x(w, C, I, S, M) {
    if (w.visible === false) return;
    if (w.layers.test(C.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && M === ei) && (!w.frustumCulled || i.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, w.matrixWorld);
      const X = e.update(w), Q = w.material;
      if (Array.isArray(Q)) {
        const ne = X.groups;
        for (let Z = 0, se = ne.length; Z < se; Z++) {
          const j = ne[Z], de = Q[j.materialIndex];
          if (de && de.visible) {
            const xe = b(w, de, S, M);
            w.onBeforeShadow(n, w, C, I, X, xe, j), n.renderBufferDirect(I, null, X, xe, w, j), w.onAfterShadow(n, w, C, I, X, xe, j);
          }
        }
      } else if (Q.visible) {
        const ne = b(w, Q, S, M);
        w.onBeforeShadow(n, w, C, I, X, ne, null), n.renderBufferDirect(I, null, X, ne, w, null), w.onAfterShadow(n, w, C, I, X, ne, null);
      }
    }
    const O = w.children;
    for (let X = 0, Q = O.length; X < Q; X++) x(O[X], C, I, S, M);
  }
  function P(w) {
    w.target.removeEventListener("dispose", P);
    for (const I in c) {
      const S = c[I], M = w.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const lE = { [ac]: lc, [cc]: fc, [uc]: dc, [Xs]: hc, [lc]: ac, [fc]: cc, [dc]: uc, [hc]: Xs };
function cE(n, e) {
  function t() {
    let B = false;
    const Me = new it();
    let le = null;
    const Re = new it(0, 0, 0, 0);
    return { setMask: function(ue) {
      le !== ue && !B && (n.colorMask(ue, ue, ue, ue), le = ue);
    }, setLocked: function(ue) {
      B = ue;
    }, setClear: function(ue, re, Ie, Xe, mt) {
      mt === true && (ue *= Xe, re *= Xe, Ie *= Xe), Me.set(ue, re, Ie, Xe), Re.equals(Me) === false && (n.clearColor(ue, re, Ie, Xe), Re.copy(Me));
    }, reset: function() {
      B = false, le = null, Re.set(-1, 0, 0, 0);
    } };
  }
  function i() {
    let B = false, Me = false, le = null, Re = null, ue = null;
    return { setReversed: function(re) {
      if (Me !== re) {
        const Ie = e.get("EXT_clip_control");
        re ? Ie.clipControlEXT(Ie.LOWER_LEFT_EXT, Ie.ZERO_TO_ONE_EXT) : Ie.clipControlEXT(Ie.LOWER_LEFT_EXT, Ie.NEGATIVE_ONE_TO_ONE_EXT), Me = re;
        const Xe = ue;
        ue = null, this.setClear(Xe);
      }
    }, getReversed: function() {
      return Me;
    }, setTest: function(re) {
      re ? ge(n.DEPTH_TEST) : Pe(n.DEPTH_TEST);
    }, setMask: function(re) {
      le !== re && !B && (n.depthMask(re), le = re);
    }, setFunc: function(re) {
      if (Me && (re = lE[re]), Re !== re) {
        switch (re) {
          case ac:
            n.depthFunc(n.NEVER);
            break;
          case lc:
            n.depthFunc(n.ALWAYS);
            break;
          case cc:
            n.depthFunc(n.LESS);
            break;
          case Xs:
            n.depthFunc(n.LEQUAL);
            break;
          case uc:
            n.depthFunc(n.EQUAL);
            break;
          case hc:
            n.depthFunc(n.GEQUAL);
            break;
          case fc:
            n.depthFunc(n.GREATER);
            break;
          case dc:
            n.depthFunc(n.NOTEQUAL);
            break;
          default:
            n.depthFunc(n.LEQUAL);
        }
        Re = re;
      }
    }, setLocked: function(re) {
      B = re;
    }, setClear: function(re) {
      ue !== re && (Me && (re = 1 - re), n.clearDepth(re), ue = re);
    }, reset: function() {
      B = false, le = null, Re = null, ue = null, Me = false;
    } };
  }
  function s() {
    let B = false, Me = null, le = null, Re = null, ue = null, re = null, Ie = null, Xe = null, mt = null;
    return { setTest: function(at) {
      B || (at ? ge(n.STENCIL_TEST) : Pe(n.STENCIL_TEST));
    }, setMask: function(at) {
      Me !== at && !B && (n.stencilMask(at), Me = at);
    }, setFunc: function(at, Mn, Yn) {
      (le !== at || Re !== Mn || ue !== Yn) && (n.stencilFunc(at, Mn, Yn), le = at, Re = Mn, ue = Yn);
    }, setOp: function(at, Mn, Yn) {
      (re !== at || Ie !== Mn || Xe !== Yn) && (n.stencilOp(at, Mn, Yn), re = at, Ie = Mn, Xe = Yn);
    }, setLocked: function(at) {
      B = at;
    }, setClear: function(at) {
      mt !== at && (n.clearStencil(at), mt = at);
    }, reset: function() {
      B = false, Me = null, le = null, Re = null, ue = null, re = null, Ie = null, Xe = null, mt = null;
    } };
  }
  const r = new t(), o = new i(), a = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), d = [], m = null, _ = false, g = null, p = null, E = null, b = null, x = null, P = null, w = null, C = new Ue(0, 0, 0), I = 0, S = false, M = null, L = null, O = null, X = null, Q = null;
  const ne = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Z = false, se = 0;
  const j = n.getParameter(n.VERSION);
  j.indexOf("WebGL") !== -1 ? (se = parseFloat(/^WebGL (\d)/.exec(j)[1]), Z = se >= 1) : j.indexOf("OpenGL ES") !== -1 && (se = parseFloat(/^OpenGL ES (\d)/.exec(j)[1]), Z = se >= 2);
  let de = null, xe = {};
  const be = n.getParameter(n.SCISSOR_BOX), Fe = n.getParameter(n.VIEWPORT), Ze = new it().fromArray(be), ie = new it().fromArray(Fe);
  function pe(B, Me, le, Re) {
    const ue = new Uint8Array(4), re = n.createTexture();
    n.bindTexture(B, re), n.texParameteri(B, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(B, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let Ie = 0; Ie < le; Ie++) B === n.TEXTURE_3D || B === n.TEXTURE_2D_ARRAY ? n.texImage3D(Me, 0, n.RGBA, 1, 1, Re, 0, n.RGBA, n.UNSIGNED_BYTE, ue) : n.texImage2D(Me + Ie, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, ue);
    return re;
  }
  const we = {};
  we[n.TEXTURE_2D] = pe(n.TEXTURE_2D, n.TEXTURE_2D, 1), we[n.TEXTURE_CUBE_MAP] = pe(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), we[n.TEXTURE_2D_ARRAY] = pe(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), we[n.TEXTURE_3D] = pe(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), ge(n.DEPTH_TEST), o.setFunc(Xs), F(false), H(kh), ge(n.CULL_FACE), y(ai);
  function ge(B) {
    u[B] !== true && (n.enable(B), u[B] = true);
  }
  function Pe(B) {
    u[B] !== false && (n.disable(B), u[B] = false);
  }
  function ke(B, Me) {
    return h[B] !== Me ? (n.bindFramebuffer(B, Me), h[B] = Me, B === n.DRAW_FRAMEBUFFER && (h[n.FRAMEBUFFER] = Me), B === n.FRAMEBUFFER && (h[n.DRAW_FRAMEBUFFER] = Me), true) : false;
  }
  function Ne(B, Me) {
    let le = d, Re = false;
    if (B) {
      le = f.get(Me), le === void 0 && (le = [], f.set(Me, le));
      const ue = B.textures;
      if (le.length !== ue.length || le[0] !== n.COLOR_ATTACHMENT0) {
        for (let re = 0, Ie = ue.length; re < Ie; re++) le[re] = n.COLOR_ATTACHMENT0 + re;
        le.length = ue.length, Re = true;
      }
    } else le[0] !== n.BACK && (le[0] = n.BACK, Re = true);
    Re && n.drawBuffers(le);
  }
  function dt(B) {
    return m !== B ? (n.useProgram(B), m = B, true) : false;
  }
  const R = { [ns]: n.FUNC_ADD, [Hx]: n.FUNC_SUBTRACT, [Vx]: n.FUNC_REVERSE_SUBTRACT };
  R[kx] = n.MIN, R[Gx] = n.MAX;
  const D = { [Wx]: n.ZERO, [Xx]: n.ONE, [Yx]: n.SRC_COLOR, [rc]: n.SRC_ALPHA, [Qx]: n.SRC_ALPHA_SATURATE, [Zx]: n.DST_COLOR, [jx]: n.DST_ALPHA, [qx]: n.ONE_MINUS_SRC_COLOR, [oc]: n.ONE_MINUS_SRC_ALPHA, [Jx]: n.ONE_MINUS_DST_COLOR, [Kx]: n.ONE_MINUS_DST_ALPHA, [$x]: n.CONSTANT_COLOR, [ev]: n.ONE_MINUS_CONSTANT_COLOR, [tv]: n.CONSTANT_ALPHA, [nv]: n.ONE_MINUS_CONSTANT_ALPHA };
  function y(B, Me, le, Re, ue, re, Ie, Xe, mt, at) {
    if (B === ai) {
      _ === true && (Pe(n.BLEND), _ = false);
      return;
    }
    if (_ === false && (ge(n.BLEND), _ = true), B !== zx) {
      if (B !== g || at !== S) {
        if ((p !== ns || x !== ns) && (n.blendEquation(n.FUNC_ADD), p = ns, x = ns), at) switch (B) {
          case zs:
            n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case Gh:
            n.blendFunc(n.ONE, n.ONE);
            break;
          case Wh:
            n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
            break;
          case Xh:
            n.blendFuncSeparate(n.ZERO, n.SRC_COLOR, n.ZERO, n.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", B);
            break;
        }
        else switch (B) {
          case zs:
            n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case Gh:
            n.blendFunc(n.SRC_ALPHA, n.ONE);
            break;
          case Wh:
            n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
            break;
          case Xh:
            n.blendFunc(n.ZERO, n.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", B);
            break;
        }
        E = null, b = null, P = null, w = null, C.set(0, 0, 0), I = 0, g = B, S = at;
      }
      return;
    }
    ue = ue || Me, re = re || le, Ie = Ie || Re, (Me !== p || ue !== x) && (n.blendEquationSeparate(R[Me], R[ue]), p = Me, x = ue), (le !== E || Re !== b || re !== P || Ie !== w) && (n.blendFuncSeparate(D[le], D[Re], D[re], D[Ie]), E = le, b = Re, P = re, w = Ie), (Xe.equals(C) === false || mt !== I) && (n.blendColor(Xe.r, Xe.g, Xe.b, mt), C.copy(Xe), I = mt), g = B, S = false;
  }
  function V(B, Me) {
    B.side === Bn ? Pe(n.CULL_FACE) : ge(n.CULL_FACE);
    let le = B.side === sn;
    Me && (le = !le), F(le), B.blending === zs && B.transparent === false ? y(ai) : y(B.blending, B.blendEquation, B.blendSrc, B.blendDst, B.blendEquationAlpha, B.blendSrcAlpha, B.blendDstAlpha, B.blendColor, B.blendAlpha, B.premultipliedAlpha), o.setFunc(B.depthFunc), o.setTest(B.depthTest), o.setMask(B.depthWrite), r.setMask(B.colorWrite);
    const Re = B.stencilWrite;
    a.setTest(Re), Re && (a.setMask(B.stencilWriteMask), a.setFunc(B.stencilFunc, B.stencilRef, B.stencilFuncMask), a.setOp(B.stencilFail, B.stencilZFail, B.stencilZPass)), J(B.polygonOffset, B.polygonOffsetFactor, B.polygonOffsetUnits), B.alphaToCoverage === true ? ge(n.SAMPLE_ALPHA_TO_COVERAGE) : Pe(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function F(B) {
    M !== B && (B ? n.frontFace(n.CW) : n.frontFace(n.CCW), M = B);
  }
  function H(B) {
    B !== Ox ? (ge(n.CULL_FACE), B !== L && (B === kh ? n.cullFace(n.BACK) : B === Fx ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : Pe(n.CULL_FACE), L = B;
  }
  function z(B) {
    B !== O && (Z && n.lineWidth(B), O = B);
  }
  function J(B, Me, le) {
    B ? (ge(n.POLYGON_OFFSET_FILL), (X !== Me || Q !== le) && (n.polygonOffset(Me, le), X = Me, Q = le)) : Pe(n.POLYGON_OFFSET_FILL);
  }
  function G(B) {
    B ? ge(n.SCISSOR_TEST) : Pe(n.SCISSOR_TEST);
  }
  function q(B) {
    B === void 0 && (B = n.TEXTURE0 + ne - 1), de !== B && (n.activeTexture(B), de = B);
  }
  function ae(B, Me, le) {
    le === void 0 && (de === null ? le = n.TEXTURE0 + ne - 1 : le = de);
    let Re = xe[le];
    Re === void 0 && (Re = { type: void 0, texture: void 0 }, xe[le] = Re), (Re.type !== B || Re.texture !== Me) && (de !== le && (n.activeTexture(le), de = le), n.bindTexture(B, Me || we[B]), Re.type = B, Re.texture = Me);
  }
  function T() {
    const B = xe[de];
    B !== void 0 && B.type !== void 0 && (n.bindTexture(B.type, null), B.type = void 0, B.texture = void 0);
  }
  function v() {
    try {
      n.compressedTexImage2D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function U() {
    try {
      n.compressedTexImage3D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function Y() {
    try {
      n.texSubImage2D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function te() {
    try {
      n.texSubImage3D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function K() {
    try {
      n.compressedTexSubImage2D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function ve() {
    try {
      n.compressedTexSubImage3D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function ce() {
    try {
      n.texStorage2D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function ye() {
    try {
      n.texStorage3D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function Te() {
    try {
      n.texImage2D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function oe() {
    try {
      n.texImage3D(...arguments);
    } catch (B) {
      console.error("THREE.WebGLState:", B);
    }
  }
  function Ee(B) {
    Ze.equals(B) === false && (n.scissor(B.x, B.y, B.z, B.w), Ze.copy(B));
  }
  function Ce(B) {
    ie.equals(B) === false && (n.viewport(B.x, B.y, B.z, B.w), ie.copy(B));
  }
  function Le(B, Me) {
    let le = c.get(Me);
    le === void 0 && (le = /* @__PURE__ */ new WeakMap(), c.set(Me, le));
    let Re = le.get(B);
    Re === void 0 && (Re = n.getUniformBlockIndex(Me, B.name), le.set(B, Re));
  }
  function me(B, Me) {
    const Re = c.get(Me).get(B);
    l.get(Me) !== Re && (n.uniformBlockBinding(Me, Re, B.__bindingPointIndex), l.set(Me, Re));
  }
  function Ge() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(true, true, true, true), n.clearColor(0, 0, 0, 0), n.depthMask(true), n.depthFunc(n.LESS), o.setReversed(false), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), u = {}, de = null, xe = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), d = [], m = null, _ = false, g = null, p = null, E = null, b = null, x = null, P = null, w = null, C = new Ue(0, 0, 0), I = 0, S = false, M = null, L = null, O = null, X = null, Q = null, Ze.set(0, 0, n.canvas.width, n.canvas.height), ie.set(0, 0, n.canvas.width, n.canvas.height), r.reset(), o.reset(), a.reset();
  }
  return { buffers: { color: r, depth: o, stencil: a }, enable: ge, disable: Pe, bindFramebuffer: ke, drawBuffers: Ne, useProgram: dt, setBlending: y, setMaterial: V, setFlipSided: F, setCullFace: H, setLineWidth: z, setPolygonOffset: J, setScissorTest: G, activeTexture: q, bindTexture: ae, unbindTexture: T, compressedTexImage2D: v, compressedTexImage3D: U, texImage2D: Te, texImage3D: oe, updateUBOMapping: Le, uniformBlockBinding: me, texStorage2D: ce, texStorage3D: ye, texSubImage2D: Y, texSubImage3D: te, compressedTexSubImage2D: K, compressedTexSubImage3D: ve, scissor: Ee, viewport: Ce, reset: Ge };
}
function uE(n, e, t, i, s, r, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new fe(), u = /* @__PURE__ */ new WeakMap();
  let h;
  const f = /* @__PURE__ */ new WeakMap();
  let d = false;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function m(T, v) {
    return d ? new OffscreenCanvas(T, v) : Yr("canvas");
  }
  function _(T, v, U) {
    let Y = 1;
    const te = ae(T);
    if ((te.width > U || te.height > U) && (Y = U / Math.max(te.width, te.height)), Y < 1) if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
      const K = Math.floor(Y * te.width), ve = Math.floor(Y * te.height);
      h === void 0 && (h = m(K, ve));
      const ce = v ? m(K, ve) : h;
      return ce.width = K, ce.height = ve, ce.getContext("2d").drawImage(T, 0, 0, K, ve), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + te.width + "x" + te.height + ") to (" + K + "x" + ve + ")."), ce;
    } else return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + te.width + "x" + te.height + ")."), T;
    return T;
  }
  function g(T) {
    return T.generateMipmaps;
  }
  function p(T) {
    n.generateMipmap(T);
  }
  function E(T) {
    return T.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? n.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? n.TEXTURE_2D_ARRAY : n.TEXTURE_2D;
  }
  function b(T, v, U, Y, te = false) {
    if (T !== null) {
      if (n[T] !== void 0) return n[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let K = v;
    if (v === n.RED && (U === n.FLOAT && (K = n.R32F), U === n.HALF_FLOAT && (K = n.R16F), U === n.UNSIGNED_BYTE && (K = n.R8)), v === n.RED_INTEGER && (U === n.UNSIGNED_BYTE && (K = n.R8UI), U === n.UNSIGNED_SHORT && (K = n.R16UI), U === n.UNSIGNED_INT && (K = n.R32UI), U === n.BYTE && (K = n.R8I), U === n.SHORT && (K = n.R16I), U === n.INT && (K = n.R32I)), v === n.RG && (U === n.FLOAT && (K = n.RG32F), U === n.HALF_FLOAT && (K = n.RG16F), U === n.UNSIGNED_BYTE && (K = n.RG8)), v === n.RG_INTEGER && (U === n.UNSIGNED_BYTE && (K = n.RG8UI), U === n.UNSIGNED_SHORT && (K = n.RG16UI), U === n.UNSIGNED_INT && (K = n.RG32UI), U === n.BYTE && (K = n.RG8I), U === n.SHORT && (K = n.RG16I), U === n.INT && (K = n.RG32I)), v === n.RGB_INTEGER && (U === n.UNSIGNED_BYTE && (K = n.RGB8UI), U === n.UNSIGNED_SHORT && (K = n.RGB16UI), U === n.UNSIGNED_INT && (K = n.RGB32UI), U === n.BYTE && (K = n.RGB8I), U === n.SHORT && (K = n.RGB16I), U === n.INT && (K = n.RGB32I)), v === n.RGBA_INTEGER && (U === n.UNSIGNED_BYTE && (K = n.RGBA8UI), U === n.UNSIGNED_SHORT && (K = n.RGBA16UI), U === n.UNSIGNED_INT && (K = n.RGBA32UI), U === n.BYTE && (K = n.RGBA8I), U === n.SHORT && (K = n.RGBA16I), U === n.INT && (K = n.RGBA32I)), v === n.RGB && U === n.UNSIGNED_INT_5_9_9_9_REV && (K = n.RGB9_E5), v === n.RGBA) {
      const ve = te ? _a : $e.getTransfer(Y);
      U === n.FLOAT && (K = n.RGBA32F), U === n.HALF_FLOAT && (K = n.RGBA16F), U === n.UNSIGNED_BYTE && (K = ve === ct ? n.SRGB8_ALPHA8 : n.RGBA8), U === n.UNSIGNED_SHORT_4_4_4_4 && (K = n.RGBA4), U === n.UNSIGNED_SHORT_5_5_5_1 && (K = n.RGB5_A1);
    }
    return (K === n.R16F || K === n.R32F || K === n.RG16F || K === n.RG32F || K === n.RGBA16F || K === n.RGBA32F) && e.get("EXT_color_buffer_float"), K;
  }
  function x(T, v) {
    let U;
    return T ? v === null || v === as || v === Vr ? U = n.DEPTH24_STENCIL8 : v === Rn ? U = n.DEPTH32F_STENCIL8 : v === Hr && (U = n.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === as || v === Vr ? U = n.DEPTH_COMPONENT24 : v === Rn ? U = n.DEPTH_COMPONENT32F : v === Hr && (U = n.DEPTH_COMPONENT16), U;
  }
  function P(T, v) {
    return g(T) === true || T.isFramebufferTexture && T.minFilter !== Ot && T.minFilter !== nn ? Math.log2(Math.max(v.width, v.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? v.mipmaps.length : 1;
  }
  function w(T) {
    const v = T.target;
    v.removeEventListener("dispose", w), I(v), v.isVideoTexture && u.delete(v);
  }
  function C(T) {
    const v = T.target;
    v.removeEventListener("dispose", C), M(v);
  }
  function I(T) {
    const v = i.get(T);
    if (v.__webglInit === void 0) return;
    const U = T.source, Y = f.get(U);
    if (Y) {
      const te = Y[v.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && S(T), Object.keys(Y).length === 0 && f.delete(U);
    }
    i.remove(T);
  }
  function S(T) {
    const v = i.get(T);
    n.deleteTexture(v.__webglTexture);
    const U = T.source, Y = f.get(U);
    delete Y[v.__cacheKey], o.memory.textures--;
  }
  function M(T) {
    const v = i.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), i.remove(T.depthTexture)), T.isWebGLCubeRenderTarget) for (let Y = 0; Y < 6; Y++) {
      if (Array.isArray(v.__webglFramebuffer[Y])) for (let te = 0; te < v.__webglFramebuffer[Y].length; te++) n.deleteFramebuffer(v.__webglFramebuffer[Y][te]);
      else n.deleteFramebuffer(v.__webglFramebuffer[Y]);
      v.__webglDepthbuffer && n.deleteRenderbuffer(v.__webglDepthbuffer[Y]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let Y = 0; Y < v.__webglFramebuffer.length; Y++) n.deleteFramebuffer(v.__webglFramebuffer[Y]);
      else n.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && n.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && n.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let Y = 0; Y < v.__webglColorRenderbuffer.length; Y++) v.__webglColorRenderbuffer[Y] && n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);
      v.__webglDepthRenderbuffer && n.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const U = T.textures;
    for (let Y = 0, te = U.length; Y < te; Y++) {
      const K = i.get(U[Y]);
      K.__webglTexture && (n.deleteTexture(K.__webglTexture), o.memory.textures--), i.remove(U[Y]);
    }
    i.remove(T);
  }
  let L = 0;
  function O() {
    L = 0;
  }
  function X() {
    const T = L;
    return T >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + s.maxTextures), L += 1, T;
  }
  function Q(T) {
    const v = [];
    return v.push(T.wrapS), v.push(T.wrapT), v.push(T.wrapR || 0), v.push(T.magFilter), v.push(T.minFilter), v.push(T.anisotropy), v.push(T.internalFormat), v.push(T.format), v.push(T.type), v.push(T.generateMipmaps), v.push(T.premultiplyAlpha), v.push(T.flipY), v.push(T.unpackAlignment), v.push(T.colorSpace), v.join();
  }
  function ne(T, v) {
    const U = i.get(T);
    if (T.isVideoTexture && G(T), T.isRenderTargetTexture === false && T.version > 0 && U.__version !== T.version) {
      const Y = T.image;
      if (Y === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        we(U, T, v);
        return;
      }
    }
    t.bindTexture(n.TEXTURE_2D, U.__webglTexture, n.TEXTURE0 + v);
  }
  function Z(T, v) {
    const U = i.get(T);
    if (T.version > 0 && U.__version !== T.version) {
      we(U, T, v);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, U.__webglTexture, n.TEXTURE0 + v);
  }
  function se(T, v) {
    const U = i.get(T);
    if (T.version > 0 && U.__version !== T.version) {
      we(U, T, v);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, U.__webglTexture, n.TEXTURE0 + v);
  }
  function j(T, v) {
    const U = i.get(T);
    if (T.version > 0 && U.__version !== T.version) {
      ge(U, T, v);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, U.__webglTexture, n.TEXTURE0 + v);
  }
  const de = { [js]: n.REPEAT, [Ri]: n.CLAMP_TO_EDGE, [ma]: n.MIRRORED_REPEAT }, xe = { [Ot]: n.NEAREST, [rm]: n.NEAREST_MIPMAP_NEAREST, [vr]: n.NEAREST_MIPMAP_LINEAR, [nn]: n.LINEAR, [$o]: n.LINEAR_MIPMAP_NEAREST, [ri]: n.LINEAR_MIPMAP_LINEAR }, be = { [pv]: n.NEVER, [yv]: n.ALWAYS, [mv]: n.LESS, [pm]: n.LEQUAL, [gv]: n.EQUAL, [vv]: n.GEQUAL, [_v]: n.GREATER, [xv]: n.NOTEQUAL };
  function Fe(T, v) {
    if (v.type === Rn && e.has("OES_texture_float_linear") === false && (v.magFilter === nn || v.magFilter === $o || v.magFilter === vr || v.magFilter === ri || v.minFilter === nn || v.minFilter === $o || v.minFilter === vr || v.minFilter === ri) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), n.texParameteri(T, n.TEXTURE_WRAP_S, de[v.wrapS]), n.texParameteri(T, n.TEXTURE_WRAP_T, de[v.wrapT]), (T === n.TEXTURE_3D || T === n.TEXTURE_2D_ARRAY) && n.texParameteri(T, n.TEXTURE_WRAP_R, de[v.wrapR]), n.texParameteri(T, n.TEXTURE_MAG_FILTER, xe[v.magFilter]), n.texParameteri(T, n.TEXTURE_MIN_FILTER, xe[v.minFilter]), v.compareFunction && (n.texParameteri(T, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(T, n.TEXTURE_COMPARE_FUNC, be[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Ot || v.minFilter !== vr && v.minFilter !== ri || v.type === Rn && e.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || i.get(v).__currentAnisotropy) {
        const U = e.get("EXT_texture_filter_anisotropic");
        n.texParameterf(T, U.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, s.getMaxAnisotropy())), i.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function Ze(T, v) {
    let U = false;
    T.__webglInit === void 0 && (T.__webglInit = true, v.addEventListener("dispose", w));
    const Y = v.source;
    let te = f.get(Y);
    te === void 0 && (te = {}, f.set(Y, te));
    const K = Q(v);
    if (K !== T.__cacheKey) {
      te[K] === void 0 && (te[K] = { texture: n.createTexture(), usedTimes: 0 }, o.memory.textures++, U = true), te[K].usedTimes++;
      const ve = te[T.__cacheKey];
      ve !== void 0 && (te[T.__cacheKey].usedTimes--, ve.usedTimes === 0 && S(v)), T.__cacheKey = K, T.__webglTexture = te[K].texture;
    }
    return U;
  }
  function ie(T, v, U) {
    return Math.floor(Math.floor(T / U) / v);
  }
  function pe(T, v, U, Y) {
    const K = T.updateRanges;
    if (K.length === 0) t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, v.width, v.height, U, Y, v.data);
    else {
      K.sort((oe, Ee) => oe.start - Ee.start);
      let ve = 0;
      for (let oe = 1; oe < K.length; oe++) {
        const Ee = K[ve], Ce = K[oe], Le = Ee.start + Ee.count, me = ie(Ce.start, v.width, 4), Ge = ie(Ee.start, v.width, 4);
        Ce.start <= Le + 1 && me === Ge && ie(Ce.start + Ce.count - 1, v.width, 4) === me ? Ee.count = Math.max(Ee.count, Ce.start + Ce.count - Ee.start) : (++ve, K[ve] = Ce);
      }
      K.length = ve + 1;
      const ce = n.getParameter(n.UNPACK_ROW_LENGTH), ye = n.getParameter(n.UNPACK_SKIP_PIXELS), Te = n.getParameter(n.UNPACK_SKIP_ROWS);
      n.pixelStorei(n.UNPACK_ROW_LENGTH, v.width);
      for (let oe = 0, Ee = K.length; oe < Ee; oe++) {
        const Ce = K[oe], Le = Math.floor(Ce.start / 4), me = Math.ceil(Ce.count / 4), Ge = Le % v.width, B = Math.floor(Le / v.width), Me = me, le = 1;
        n.pixelStorei(n.UNPACK_SKIP_PIXELS, Ge), n.pixelStorei(n.UNPACK_SKIP_ROWS, B), t.texSubImage2D(n.TEXTURE_2D, 0, Ge, B, Me, le, U, Y, v.data);
      }
      T.clearUpdateRanges(), n.pixelStorei(n.UNPACK_ROW_LENGTH, ce), n.pixelStorei(n.UNPACK_SKIP_PIXELS, ye), n.pixelStorei(n.UNPACK_SKIP_ROWS, Te);
    }
  }
  function we(T, v, U) {
    let Y = n.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (Y = n.TEXTURE_2D_ARRAY), v.isData3DTexture && (Y = n.TEXTURE_3D);
    const te = Ze(T, v), K = v.source;
    t.bindTexture(Y, T.__webglTexture, n.TEXTURE0 + U);
    const ve = i.get(K);
    if (K.version !== ve.__version || te === true) {
      t.activeTexture(n.TEXTURE0 + U);
      const ce = $e.getPrimaries($e.workingColorSpace), ye = v.colorSpace === wi ? null : $e.getPrimaries(v.colorSpace), Te = v.colorSpace === wi || ce === ye ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Te);
      let oe = _(v.image, false, s.maxTextureSize);
      oe = q(v, oe);
      const Ee = r.convert(v.format, v.colorSpace), Ce = r.convert(v.type);
      let Le = b(v.internalFormat, Ee, Ce, v.colorSpace, v.isVideoTexture);
      Fe(Y, v);
      let me;
      const Ge = v.mipmaps, B = v.isVideoTexture !== true, Me = ve.__version === void 0 || te === true, le = K.dataReady, Re = P(v, oe);
      if (v.isDepthTexture) Le = x(v.format === Gr, v.type), Me && (B ? t.texStorage2D(n.TEXTURE_2D, 1, Le, oe.width, oe.height) : t.texImage2D(n.TEXTURE_2D, 0, Le, oe.width, oe.height, 0, Ee, Ce, null));
      else if (v.isDataTexture) if (Ge.length > 0) {
        B && Me && t.texStorage2D(n.TEXTURE_2D, Re, Le, Ge[0].width, Ge[0].height);
        for (let ue = 0, re = Ge.length; ue < re; ue++) me = Ge[ue], B ? le && t.texSubImage2D(n.TEXTURE_2D, ue, 0, 0, me.width, me.height, Ee, Ce, me.data) : t.texImage2D(n.TEXTURE_2D, ue, Le, me.width, me.height, 0, Ee, Ce, me.data);
        v.generateMipmaps = false;
      } else B ? (Me && t.texStorage2D(n.TEXTURE_2D, Re, Le, oe.width, oe.height), le && pe(v, oe, Ee, Ce)) : t.texImage2D(n.TEXTURE_2D, 0, Le, oe.width, oe.height, 0, Ee, Ce, oe.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        B && Me && t.texStorage3D(n.TEXTURE_2D_ARRAY, Re, Le, Ge[0].width, Ge[0].height, oe.depth);
        for (let ue = 0, re = Ge.length; ue < re; ue++) if (me = Ge[ue], v.format !== mn) if (Ee !== null) if (B) {
          if (le) if (v.layerUpdates.size > 0) {
            const Ie = Yf(me.width, me.height, v.format, v.type);
            for (const Xe of v.layerUpdates) {
              const mt = me.data.subarray(Xe * Ie / me.data.BYTES_PER_ELEMENT, (Xe + 1) * Ie / me.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, ue, 0, 0, Xe, me.width, me.height, 1, Ee, mt);
            }
            v.clearLayerUpdates();
          } else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, ue, 0, 0, 0, me.width, me.height, oe.depth, Ee, me.data);
        } else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY, ue, Le, me.width, me.height, oe.depth, 0, me.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else B ? le && t.texSubImage3D(n.TEXTURE_2D_ARRAY, ue, 0, 0, 0, me.width, me.height, oe.depth, Ee, Ce, me.data) : t.texImage3D(n.TEXTURE_2D_ARRAY, ue, Le, me.width, me.height, oe.depth, 0, Ee, Ce, me.data);
      } else {
        B && Me && t.texStorage2D(n.TEXTURE_2D, Re, Le, Ge[0].width, Ge[0].height);
        for (let ue = 0, re = Ge.length; ue < re; ue++) me = Ge[ue], v.format !== mn ? Ee !== null ? B ? le && t.compressedTexSubImage2D(n.TEXTURE_2D, ue, 0, 0, me.width, me.height, Ee, me.data) : t.compressedTexImage2D(n.TEXTURE_2D, ue, Le, me.width, me.height, 0, me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : B ? le && t.texSubImage2D(n.TEXTURE_2D, ue, 0, 0, me.width, me.height, Ee, Ce, me.data) : t.texImage2D(n.TEXTURE_2D, ue, Le, me.width, me.height, 0, Ee, Ce, me.data);
      }
      else if (v.isDataArrayTexture) if (B) {
        if (Me && t.texStorage3D(n.TEXTURE_2D_ARRAY, Re, Le, oe.width, oe.height, oe.depth), le) if (v.layerUpdates.size > 0) {
          const ue = Yf(oe.width, oe.height, v.format, v.type);
          for (const re of v.layerUpdates) {
            const Ie = oe.data.subarray(re * ue / oe.data.BYTES_PER_ELEMENT, (re + 1) * ue / oe.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, re, oe.width, oe.height, 1, Ee, Ce, Ie);
          }
          v.clearLayerUpdates();
        } else t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, oe.width, oe.height, oe.depth, Ee, Ce, oe.data);
      } else t.texImage3D(n.TEXTURE_2D_ARRAY, 0, Le, oe.width, oe.height, oe.depth, 0, Ee, Ce, oe.data);
      else if (v.isData3DTexture) B ? (Me && t.texStorage3D(n.TEXTURE_3D, Re, Le, oe.width, oe.height, oe.depth), le && t.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, oe.width, oe.height, oe.depth, Ee, Ce, oe.data)) : t.texImage3D(n.TEXTURE_3D, 0, Le, oe.width, oe.height, oe.depth, 0, Ee, Ce, oe.data);
      else if (v.isFramebufferTexture) {
        if (Me) if (B) t.texStorage2D(n.TEXTURE_2D, Re, Le, oe.width, oe.height);
        else {
          let ue = oe.width, re = oe.height;
          for (let Ie = 0; Ie < Re; Ie++) t.texImage2D(n.TEXTURE_2D, Ie, Le, ue, re, 0, Ee, Ce, null), ue >>= 1, re >>= 1;
        }
      } else if (Ge.length > 0) {
        if (B && Me) {
          const ue = ae(Ge[0]);
          t.texStorage2D(n.TEXTURE_2D, Re, Le, ue.width, ue.height);
        }
        for (let ue = 0, re = Ge.length; ue < re; ue++) me = Ge[ue], B ? le && t.texSubImage2D(n.TEXTURE_2D, ue, 0, 0, Ee, Ce, me) : t.texImage2D(n.TEXTURE_2D, ue, Le, Ee, Ce, me);
        v.generateMipmaps = false;
      } else if (B) {
        if (Me) {
          const ue = ae(oe);
          t.texStorage2D(n.TEXTURE_2D, Re, Le, ue.width, ue.height);
        }
        le && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, Ee, Ce, oe);
      } else t.texImage2D(n.TEXTURE_2D, 0, Le, Ee, Ce, oe);
      g(v) && p(Y), ve.__version = K.version, v.onUpdate && v.onUpdate(v);
    }
    T.__version = v.version;
  }
  function ge(T, v, U) {
    if (v.image.length !== 6) return;
    const Y = Ze(T, v), te = v.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, T.__webglTexture, n.TEXTURE0 + U);
    const K = i.get(te);
    if (te.version !== K.__version || Y === true) {
      t.activeTexture(n.TEXTURE0 + U);
      const ve = $e.getPrimaries($e.workingColorSpace), ce = v.colorSpace === wi ? null : $e.getPrimaries(v.colorSpace), ye = v.colorSpace === wi || ve === ce ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ye);
      const Te = v.isCompressedTexture || v.image[0].isCompressedTexture, oe = v.image[0] && v.image[0].isDataTexture, Ee = [];
      for (let re = 0; re < 6; re++) !Te && !oe ? Ee[re] = _(v.image[re], true, s.maxCubemapSize) : Ee[re] = oe ? v.image[re].image : v.image[re], Ee[re] = q(v, Ee[re]);
      const Ce = Ee[0], Le = r.convert(v.format, v.colorSpace), me = r.convert(v.type), Ge = b(v.internalFormat, Le, me, v.colorSpace), B = v.isVideoTexture !== true, Me = K.__version === void 0 || Y === true, le = te.dataReady;
      let Re = P(v, Ce);
      Fe(n.TEXTURE_CUBE_MAP, v);
      let ue;
      if (Te) {
        B && Me && t.texStorage2D(n.TEXTURE_CUBE_MAP, Re, Ge, Ce.width, Ce.height);
        for (let re = 0; re < 6; re++) {
          ue = Ee[re].mipmaps;
          for (let Ie = 0; Ie < ue.length; Ie++) {
            const Xe = ue[Ie];
            v.format !== mn ? Le !== null ? B ? le && t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, Ie, 0, 0, Xe.width, Xe.height, Le, Xe.data) : t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, Ie, Ge, Xe.width, Xe.height, 0, Xe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : B ? le && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, Ie, 0, 0, Xe.width, Xe.height, Le, me, Xe.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, Ie, Ge, Xe.width, Xe.height, 0, Le, me, Xe.data);
          }
        }
      } else {
        if (ue = v.mipmaps, B && Me) {
          ue.length > 0 && Re++;
          const re = ae(Ee[0]);
          t.texStorage2D(n.TEXTURE_CUBE_MAP, Re, Ge, re.width, re.height);
        }
        for (let re = 0; re < 6; re++) if (oe) {
          B ? le && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, 0, 0, Ee[re].width, Ee[re].height, Le, me, Ee[re].data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, Ge, Ee[re].width, Ee[re].height, 0, Le, me, Ee[re].data);
          for (let Ie = 0; Ie < ue.length; Ie++) {
            const mt = ue[Ie].image[re].image;
            B ? le && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, Ie + 1, 0, 0, mt.width, mt.height, Le, me, mt.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, Ie + 1, Ge, mt.width, mt.height, 0, Le, me, mt.data);
          }
        } else {
          B ? le && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, 0, 0, Le, me, Ee[re]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, Ge, Le, me, Ee[re]);
          for (let Ie = 0; Ie < ue.length; Ie++) {
            const Xe = ue[Ie];
            B ? le && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, Ie + 1, 0, 0, Le, me, Xe.image[re]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + re, Ie + 1, Ge, Le, me, Xe.image[re]);
          }
        }
      }
      g(v) && p(n.TEXTURE_CUBE_MAP), K.__version = te.version, v.onUpdate && v.onUpdate(v);
    }
    T.__version = v.version;
  }
  function Pe(T, v, U, Y, te, K) {
    const ve = r.convert(U.format, U.colorSpace), ce = r.convert(U.type), ye = b(U.internalFormat, ve, ce, U.colorSpace), Te = i.get(v), oe = i.get(U);
    if (oe.__renderTarget = v, !Te.__hasExternalTextures) {
      const Ee = Math.max(1, v.width >> K), Ce = Math.max(1, v.height >> K);
      te === n.TEXTURE_3D || te === n.TEXTURE_2D_ARRAY ? t.texImage3D(te, K, ye, Ee, Ce, v.depth, 0, ve, ce, null) : t.texImage2D(te, K, ye, Ee, Ce, 0, ve, ce, null);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, T), J(v) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, Y, te, oe.__webglTexture, 0, z(v)) : (te === n.TEXTURE_2D || te >= n.TEXTURE_CUBE_MAP_POSITIVE_X && te <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, Y, te, oe.__webglTexture, K), t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function ke(T, v, U) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, T), v.depthBuffer) {
      const Y = v.depthTexture, te = Y && Y.isDepthTexture ? Y.type : null, K = x(v.stencilBuffer, te), ve = v.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, ce = z(v);
      J(v) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, ce, K, v.width, v.height) : U ? n.renderbufferStorageMultisample(n.RENDERBUFFER, ce, K, v.width, v.height) : n.renderbufferStorage(n.RENDERBUFFER, K, v.width, v.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, ve, n.RENDERBUFFER, T);
    } else {
      const Y = v.textures;
      for (let te = 0; te < Y.length; te++) {
        const K = Y[te], ve = r.convert(K.format, K.colorSpace), ce = r.convert(K.type), ye = b(K.internalFormat, ve, ce, K.colorSpace), Te = z(v);
        U && J(v) === false ? n.renderbufferStorageMultisample(n.RENDERBUFFER, Te, ye, v.width, v.height) : J(v) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, Te, ye, v.width, v.height) : n.renderbufferStorage(n.RENDERBUFFER, ye, v.width, v.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function Ne(T, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(n.FRAMEBUFFER, T), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Y = i.get(v.depthTexture);
    Y.__renderTarget = v, (!Y.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), ne(v.depthTexture, 0);
    const te = Y.__webglTexture, K = z(v);
    if (v.depthTexture.format === kr) J(v) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, te, 0, K) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, te, 0);
    else if (v.depthTexture.format === Gr) J(v) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, te, 0, K) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, te, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function dt(T) {
    const v = i.get(T), U = T.isWebGLCubeRenderTarget === true;
    if (v.__boundDepthTexture !== T.depthTexture) {
      const Y = T.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), Y) {
        const te = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, Y.removeEventListener("dispose", te);
        };
        Y.addEventListener("dispose", te), v.__depthDisposeCallback = te;
      }
      v.__boundDepthTexture = Y;
    }
    if (T.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (U) throw new Error("target.depthTexture not supported in Cube render targets");
      const Y = T.texture.mipmaps;
      Y && Y.length > 0 ? Ne(v.__webglFramebuffer[0], T) : Ne(v.__webglFramebuffer, T);
    } else if (U) {
      v.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++) if (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer[Y]), v.__webglDepthbuffer[Y] === void 0) v.__webglDepthbuffer[Y] = n.createRenderbuffer(), ke(v.__webglDepthbuffer[Y], T, false);
      else {
        const te = T.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, K = v.__webglDepthbuffer[Y];
        n.bindRenderbuffer(n.RENDERBUFFER, K), n.framebufferRenderbuffer(n.FRAMEBUFFER, te, n.RENDERBUFFER, K);
      }
    } else {
      const Y = T.texture.mipmaps;
      if (Y && Y.length > 0 ? t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer[0]) : t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = n.createRenderbuffer(), ke(v.__webglDepthbuffer, T, false);
      else {
        const te = T.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, K = v.__webglDepthbuffer;
        n.bindRenderbuffer(n.RENDERBUFFER, K), n.framebufferRenderbuffer(n.FRAMEBUFFER, te, n.RENDERBUFFER, K);
      }
    }
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function R(T, v, U) {
    const Y = i.get(T);
    v !== void 0 && Pe(Y.__webglFramebuffer, T, T.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), U !== void 0 && dt(T);
  }
  function D(T) {
    const v = T.texture, U = i.get(T), Y = i.get(v);
    T.addEventListener("dispose", C);
    const te = T.textures, K = T.isWebGLCubeRenderTarget === true, ve = te.length > 1;
    if (ve || (Y.__webglTexture === void 0 && (Y.__webglTexture = n.createTexture()), Y.__version = v.version, o.memory.textures++), K) {
      U.__webglFramebuffer = [];
      for (let ce = 0; ce < 6; ce++) if (v.mipmaps && v.mipmaps.length > 0) {
        U.__webglFramebuffer[ce] = [];
        for (let ye = 0; ye < v.mipmaps.length; ye++) U.__webglFramebuffer[ce][ye] = n.createFramebuffer();
      } else U.__webglFramebuffer[ce] = n.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let ce = 0; ce < v.mipmaps.length; ce++) U.__webglFramebuffer[ce] = n.createFramebuffer();
      } else U.__webglFramebuffer = n.createFramebuffer();
      if (ve) for (let ce = 0, ye = te.length; ce < ye; ce++) {
        const Te = i.get(te[ce]);
        Te.__webglTexture === void 0 && (Te.__webglTexture = n.createTexture(), o.memory.textures++);
      }
      if (T.samples > 0 && J(T) === false) {
        U.__webglMultisampledFramebuffer = n.createFramebuffer(), U.__webglColorRenderbuffer = [], t.bindFramebuffer(n.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < te.length; ce++) {
          const ye = te[ce];
          U.__webglColorRenderbuffer[ce] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, U.__webglColorRenderbuffer[ce]);
          const Te = r.convert(ye.format, ye.colorSpace), oe = r.convert(ye.type), Ee = b(ye.internalFormat, Te, oe, ye.colorSpace, T.isXRRenderTarget === true), Ce = z(T);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, Ce, Ee, T.width, T.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ce, n.RENDERBUFFER, U.__webglColorRenderbuffer[ce]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), T.depthBuffer && (U.__webglDepthRenderbuffer = n.createRenderbuffer(), ke(U.__webglDepthRenderbuffer, T, true)), t.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (K) {
      t.bindTexture(n.TEXTURE_CUBE_MAP, Y.__webglTexture), Fe(n.TEXTURE_CUBE_MAP, v);
      for (let ce = 0; ce < 6; ce++) if (v.mipmaps && v.mipmaps.length > 0) for (let ye = 0; ye < v.mipmaps.length; ye++) Pe(U.__webglFramebuffer[ce][ye], T, v, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + ce, ye);
      else Pe(U.__webglFramebuffer[ce], T, v, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + ce, 0);
      g(v) && p(n.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ve) {
      for (let ce = 0, ye = te.length; ce < ye; ce++) {
        const Te = te[ce], oe = i.get(Te);
        t.bindTexture(n.TEXTURE_2D, oe.__webglTexture), Fe(n.TEXTURE_2D, Te), Pe(U.__webglFramebuffer, T, Te, n.COLOR_ATTACHMENT0 + ce, n.TEXTURE_2D, 0), g(Te) && p(n.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ce = n.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ce = T.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(ce, Y.__webglTexture), Fe(ce, v), v.mipmaps && v.mipmaps.length > 0) for (let ye = 0; ye < v.mipmaps.length; ye++) Pe(U.__webglFramebuffer[ye], T, v, n.COLOR_ATTACHMENT0, ce, ye);
      else Pe(U.__webglFramebuffer, T, v, n.COLOR_ATTACHMENT0, ce, 0);
      g(v) && p(ce), t.unbindTexture();
    }
    T.depthBuffer && dt(T);
  }
  function y(T) {
    const v = T.textures;
    for (let U = 0, Y = v.length; U < Y; U++) {
      const te = v[U];
      if (g(te)) {
        const K = E(T), ve = i.get(te).__webglTexture;
        t.bindTexture(K, ve), p(K), t.unbindTexture();
      }
    }
  }
  const V = [], F = [];
  function H(T) {
    if (T.samples > 0) {
      if (J(T) === false) {
        const v = T.textures, U = T.width, Y = T.height;
        let te = n.COLOR_BUFFER_BIT;
        const K = T.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, ve = i.get(T), ce = v.length > 1;
        if (ce) for (let Te = 0; Te < v.length; Te++) t.bindFramebuffer(n.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + Te, n.RENDERBUFFER, null), t.bindFramebuffer(n.FRAMEBUFFER, ve.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + Te, n.TEXTURE_2D, null, 0);
        t.bindFramebuffer(n.READ_FRAMEBUFFER, ve.__webglMultisampledFramebuffer);
        const ye = T.texture.mipmaps;
        ye && ye.length > 0 ? t.bindFramebuffer(n.DRAW_FRAMEBUFFER, ve.__webglFramebuffer[0]) : t.bindFramebuffer(n.DRAW_FRAMEBUFFER, ve.__webglFramebuffer);
        for (let Te = 0; Te < v.length; Te++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (te |= n.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (te |= n.STENCIL_BUFFER_BIT)), ce) {
            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, ve.__webglColorRenderbuffer[Te]);
            const oe = i.get(v[Te]).__webglTexture;
            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, oe, 0);
          }
          n.blitFramebuffer(0, 0, U, Y, 0, 0, U, Y, te, n.NEAREST), l === true && (V.length = 0, F.length = 0, V.push(n.COLOR_ATTACHMENT0 + Te), T.depthBuffer && T.resolveDepthBuffer === false && (V.push(K), F.push(K), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, F)), n.invalidateFramebuffer(n.READ_FRAMEBUFFER, V));
        }
        if (t.bindFramebuffer(n.READ_FRAMEBUFFER, null), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), ce) for (let Te = 0; Te < v.length; Te++) {
          t.bindFramebuffer(n.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + Te, n.RENDERBUFFER, ve.__webglColorRenderbuffer[Te]);
          const oe = i.get(v[Te]).__webglTexture;
          t.bindFramebuffer(n.FRAMEBUFFER, ve.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + Te, n.TEXTURE_2D, oe, 0);
        }
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, ve.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === false && l) {
        const v = T.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function z(T) {
    return Math.min(s.maxSamples, T.samples);
  }
  function J(T) {
    const v = i.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function G(T) {
    const v = o.render.frame;
    u.get(T) !== v && (u.set(T, v), T.update());
  }
  function q(T, v) {
    const U = T.colorSpace, Y = T.format, te = T.type;
    return T.isCompressedTexture === true || T.isVideoTexture === true || U !== Jt && U !== wi && ($e.getTransfer(U) === ct ? (Y !== mn || te !== Vn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", U)), v;
  }
  function ae(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c;
  }
  this.allocateTextureUnit = X, this.resetTextureUnits = O, this.setTexture2D = ne, this.setTexture2DArray = Z, this.setTexture3D = se, this.setTextureCube = j, this.rebindTextures = R, this.setupRenderTarget = D, this.updateRenderTargetMipmap = y, this.updateMultisampleRenderTarget = H, this.setupDepthRenderbuffer = dt, this.setupFrameBufferTexture = Pe, this.useMultisampledRTT = J;
}
function hE(n, e) {
  function t(i, s = wi) {
    let r;
    const o = $e.getTransfer(s);
    if (i === Vn) return n.UNSIGNED_BYTE;
    if (i === bu) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === Tu) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === lm) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === om) return n.BYTE;
    if (i === am) return n.SHORT;
    if (i === Hr) return n.UNSIGNED_SHORT;
    if (i === Su) return n.INT;
    if (i === as) return n.UNSIGNED_INT;
    if (i === Rn) return n.FLOAT;
    if (i === Ni) return n.HALF_FLOAT;
    if (i === cm) return n.ALPHA;
    if (i === um) return n.RGB;
    if (i === mn) return n.RGBA;
    if (i === kr) return n.DEPTH_COMPONENT;
    if (i === Gr) return n.DEPTH_STENCIL;
    if (i === Eu) return n.RED;
    if (i === Au) return n.RED_INTEGER;
    if (i === hm) return n.RG;
    if (i === wu) return n.RG_INTEGER;
    if (i === Ru) return n.RGBA_INTEGER;
    if (i === ea || i === ta || i === na || i === ia) if (o === ct) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (i === ea) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (i === ta) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (i === na) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (i === ia) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (i === ea) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (i === ta) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (i === na) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (i === ia) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (i === gc || i === _c || i === xc || i === vc) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (i === gc) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (i === _c) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (i === xc) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (i === vc) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (i === yc || i === Mc || i === Sc) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (i === yc || i === Mc) return o === ct ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (i === Sc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (i === bc || i === Tc || i === Ec || i === Ac || i === wc || i === Rc || i === Cc || i === Pc || i === Lc || i === Ic || i === Dc || i === Nc || i === Uc || i === Oc) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (i === bc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (i === Tc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (i === Ec) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (i === Ac) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (i === wc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (i === Rc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (i === Cc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (i === Pc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (i === Lc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (i === Ic) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (i === Dc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (i === Nc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (i === Uc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (i === Oc) return o === ct ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (i === sa || i === Fc || i === Bc) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (i === sa) return o === ct ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (i === Fc) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (i === Bc) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (i === fm || i === zc || i === Hc || i === Vc) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (i === sa) return r.COMPRESSED_RED_RGTC1_EXT;
      if (i === zc) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (i === Hc) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (i === Vc) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return i === Vr ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: t };
}
const fE = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, dE = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class pE {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, i) {
    if (this.texture === null) {
      const s = new At(), r = e.properties.get(s);
      r.__webglTexture = t.texture, (t.depthNear !== i.depthNear || t.depthFar !== i.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = s;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, i = new rn({ vertexShader: fE, fragmentShader: dE, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new kt(new Oa(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class mE extends Oi {
  constructor(e, t) {
    super();
    const i = this;
    let s = null, r = 1, o = null, a = "local-floor", l = 1, c = null, u = null, h = null, f = null, d = null, m = null;
    const _ = new pE(), g = t.getContextAttributes();
    let p = null, E = null;
    const b = [], x = [], P = new fe();
    let w = null;
    const C = new tn();
    C.viewport = new it();
    const I = new tn();
    I.viewport = new it();
    const S = [C, I], M = new Sy();
    let L = null, O = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(ie) {
      let pe = b[ie];
      return pe === void 0 && (pe = new Sl(), b[ie] = pe), pe.getTargetRaySpace();
    }, this.getControllerGrip = function(ie) {
      let pe = b[ie];
      return pe === void 0 && (pe = new Sl(), b[ie] = pe), pe.getGripSpace();
    }, this.getHand = function(ie) {
      let pe = b[ie];
      return pe === void 0 && (pe = new Sl(), b[ie] = pe), pe.getHandSpace();
    };
    function X(ie) {
      const pe = x.indexOf(ie.inputSource);
      if (pe === -1) return;
      const we = b[pe];
      we !== void 0 && (we.update(ie.inputSource, ie.frame, c || o), we.dispatchEvent({ type: ie.type, data: ie.inputSource }));
    }
    function Q() {
      s.removeEventListener("select", X), s.removeEventListener("selectstart", X), s.removeEventListener("selectend", X), s.removeEventListener("squeeze", X), s.removeEventListener("squeezestart", X), s.removeEventListener("squeezeend", X), s.removeEventListener("end", Q), s.removeEventListener("inputsourceschange", ne);
      for (let ie = 0; ie < b.length; ie++) {
        const pe = x[ie];
        pe !== null && (x[ie] = null, b[ie].disconnect(pe));
      }
      L = null, O = null, _.reset(), e.setRenderTarget(p), d = null, f = null, h = null, s = null, E = null, Ze.stop(), i.isPresenting = false, e.setPixelRatio(w), e.setSize(P.width, P.height, false), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(ie) {
      r = ie, i.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(ie) {
      a = ie, i.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(ie) {
      c = ie;
    }, this.getBaseLayer = function() {
      return f !== null ? f : d;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(ie) {
      if (s = ie, s !== null) {
        if (p = e.getRenderTarget(), s.addEventListener("select", X), s.addEventListener("selectstart", X), s.addEventListener("selectend", X), s.addEventListener("squeeze", X), s.addEventListener("squeezestart", X), s.addEventListener("squeezeend", X), s.addEventListener("end", Q), s.addEventListener("inputsourceschange", ne), g.xrCompatible !== true && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(P), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let we = null, ge = null, Pe = null;
          g.depth && (Pe = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, we = g.stencil ? Gr : kr, ge = g.stencil ? Vr : as);
          const ke = { colorFormat: t.RGBA8, depthFormat: Pe, scaleFactor: r };
          h = new XRWebGLBinding(s, t), f = h.createProjectionLayer(ke), s.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, false), E = new kn(f.textureWidth, f.textureHeight, { format: mn, type: Vn, depthTexture: new Rm(f.textureWidth, f.textureHeight, ge, void 0, void 0, void 0, void 0, void 0, void 0, we), stencilBuffer: g.stencil, colorSpace: e.outputColorSpace, samples: g.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const we = { antialias: g.antialias, alpha: true, depth: g.depth, stencil: g.stencil, framebufferScaleFactor: r };
          d = new XRWebGLLayer(s, t, we), s.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, false), E = new kn(d.framebufferWidth, d.framebufferHeight, { format: mn, type: Vn, colorSpace: e.outputColorSpace, stencilBuffer: g.stencil, resolveDepthBuffer: d.ignoreDepthValues === false, resolveStencilBuffer: d.ignoreDepthValues === false });
        }
        E.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await s.requestReferenceSpace(a), Ze.setContext(s), Ze.start(), i.isPresenting = true, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function ne(ie) {
      for (let pe = 0; pe < ie.removed.length; pe++) {
        const we = ie.removed[pe], ge = x.indexOf(we);
        ge >= 0 && (x[ge] = null, b[ge].disconnect(we));
      }
      for (let pe = 0; pe < ie.added.length; pe++) {
        const we = ie.added[pe];
        let ge = x.indexOf(we);
        if (ge === -1) {
          for (let ke = 0; ke < b.length; ke++) if (ke >= x.length) {
            x.push(we), ge = ke;
            break;
          } else if (x[ke] === null) {
            x[ke] = we, ge = ke;
            break;
          }
          if (ge === -1) break;
        }
        const Pe = b[ge];
        Pe && Pe.connect(we);
      }
    }
    const Z = new N(), se = new N();
    function j(ie, pe, we) {
      Z.setFromMatrixPosition(pe.matrixWorld), se.setFromMatrixPosition(we.matrixWorld);
      const ge = Z.distanceTo(se), Pe = pe.projectionMatrix.elements, ke = we.projectionMatrix.elements, Ne = Pe[14] / (Pe[10] - 1), dt = Pe[14] / (Pe[10] + 1), R = (Pe[9] + 1) / Pe[5], D = (Pe[9] - 1) / Pe[5], y = (Pe[8] - 1) / Pe[0], V = (ke[8] + 1) / ke[0], F = Ne * y, H = Ne * V, z = ge / (-y + V), J = z * -y;
      if (pe.matrixWorld.decompose(ie.position, ie.quaternion, ie.scale), ie.translateX(J), ie.translateZ(z), ie.matrixWorld.compose(ie.position, ie.quaternion, ie.scale), ie.matrixWorldInverse.copy(ie.matrixWorld).invert(), Pe[10] === -1) ie.projectionMatrix.copy(pe.projectionMatrix), ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse);
      else {
        const G = Ne + z, q = dt + z, ae = F - J, T = H + (ge - J), v = R * dt / q * G, U = D * dt / q * G;
        ie.projectionMatrix.makePerspective(ae, T, v, U, G, q), ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert();
      }
    }
    function de(ie, pe) {
      pe === null ? ie.matrixWorld.copy(ie.matrix) : ie.matrixWorld.multiplyMatrices(pe.matrixWorld, ie.matrix), ie.matrixWorldInverse.copy(ie.matrixWorld).invert();
    }
    this.updateCamera = function(ie) {
      if (s === null) return;
      let pe = ie.near, we = ie.far;
      _.texture !== null && (_.depthNear > 0 && (pe = _.depthNear), _.depthFar > 0 && (we = _.depthFar)), M.near = I.near = C.near = pe, M.far = I.far = C.far = we, (L !== M.near || O !== M.far) && (s.updateRenderState({ depthNear: M.near, depthFar: M.far }), L = M.near, O = M.far), C.layers.mask = ie.layers.mask | 2, I.layers.mask = ie.layers.mask | 4, M.layers.mask = C.layers.mask | I.layers.mask;
      const ge = ie.parent, Pe = M.cameras;
      de(M, ge);
      for (let ke = 0; ke < Pe.length; ke++) de(Pe[ke], ge);
      Pe.length === 2 ? j(M, C, I) : M.projectionMatrix.copy(C.projectionMatrix), xe(ie, M, ge);
    };
    function xe(ie, pe, we) {
      we === null ? ie.matrix.copy(pe.matrixWorld) : (ie.matrix.copy(we.matrixWorld), ie.matrix.invert(), ie.matrix.multiply(pe.matrixWorld)), ie.matrix.decompose(ie.position, ie.quaternion, ie.scale), ie.updateMatrixWorld(true), ie.projectionMatrix.copy(pe.projectionMatrix), ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse), ie.isPerspectiveCamera && (ie.fov = Ks * 2 * Math.atan(1 / ie.projectionMatrix.elements[5]), ie.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(f === null && d === null)) return l;
    }, this.setFoveation = function(ie) {
      l = ie, f !== null && (f.fixedFoveation = ie), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = ie);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(M);
    };
    let be = null;
    function Fe(ie, pe) {
      if (u = pe.getViewerPose(c || o), m = pe, u !== null) {
        const we = u.views;
        d !== null && (e.setRenderTargetFramebuffer(E, d.framebuffer), e.setRenderTarget(E));
        let ge = false;
        we.length !== M.cameras.length && (M.cameras.length = 0, ge = true);
        for (let Ne = 0; Ne < we.length; Ne++) {
          const dt = we[Ne];
          let R = null;
          if (d !== null) R = d.getViewport(dt);
          else {
            const y = h.getViewSubImage(f, dt);
            R = y.viewport, Ne === 0 && (e.setRenderTargetTextures(E, y.colorTexture, y.depthStencilTexture), e.setRenderTarget(E));
          }
          let D = S[Ne];
          D === void 0 && (D = new tn(), D.layers.enable(Ne), D.viewport = new it(), S[Ne] = D), D.matrix.fromArray(dt.transform.matrix), D.matrix.decompose(D.position, D.quaternion, D.scale), D.projectionMatrix.fromArray(dt.projectionMatrix), D.projectionMatrixInverse.copy(D.projectionMatrix).invert(), D.viewport.set(R.x, R.y, R.width, R.height), Ne === 0 && (M.matrix.copy(D.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), ge === true && M.cameras.push(D);
        }
        const Pe = s.enabledFeatures;
        if (Pe && Pe.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && h) {
          const Ne = h.getDepthInformation(we[0]);
          Ne && Ne.isValid && Ne.texture && _.init(e, Ne, s.renderState);
        }
      }
      for (let we = 0; we < b.length; we++) {
        const ge = x[we], Pe = b[we];
        ge !== null && Pe !== void 0 && Pe.update(ge, pe, c || o);
      }
      be && be(ie, pe), pe.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: pe }), m = null;
    }
    const Ze = new Ym();
    Ze.setAnimationLoop(Fe), this.setAnimationLoop = function(ie) {
      be = ie;
    }, this.dispose = function() {
    };
  }
}
const Zi = new Ln(), gE = new Ye();
function _E(n, e) {
  function t(g, p) {
    g.matrixAutoUpdate === true && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function i(g, p) {
    p.color.getRGB(g.fogColor.value, ym(n)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function s(g, p, E, b, x) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(g, p) : p.isMeshToonMaterial ? (r(g, p), h(g, p)) : p.isMeshPhongMaterial ? (r(g, p), u(g, p)) : p.isMeshStandardMaterial ? (r(g, p), f(g, p), p.isMeshPhysicalMaterial && d(g, p, x)) : p.isMeshMatcapMaterial ? (r(g, p), m(g, p)) : p.isMeshDepthMaterial ? r(g, p) : p.isMeshDistanceMaterial ? (r(g, p), _(g, p)) : p.isMeshNormalMaterial ? r(g, p) : p.isLineBasicMaterial ? (o(g, p), p.isLineDashedMaterial && a(g, p)) : p.isPointsMaterial ? l(g, p, E, b) : p.isSpriteMaterial ? c(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
  }
  function r(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, t(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === sn && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, t(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === sn && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, t(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, t(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
    const E = e.get(p), b = E.envMap, x = E.envMapRotation;
    b && (g.envMap.value = b, Zi.copy(x), Zi.x *= -1, Zi.y *= -1, Zi.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === false && (Zi.y *= -1, Zi.z *= -1), g.envMapRotation.value.setFromMatrix4(gE.makeRotationFromEuler(Zi)), g.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === false ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, g.lightMapTransform)), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, g.aoMapTransform));
  }
  function o(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, t(p.map, g.mapTransform));
  }
  function a(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function l(g, p, E, b) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * E, g.scale.value = b * 0.5, p.map && (g.map.value = p.map, t(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function c(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function u(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function h(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap);
  }
  function f(g, p) {
    g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, g.roughnessMapTransform)), p.envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function d(g, p, E) {
    g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === sn && g.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (g.dispersion.value = p.dispersion), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = E.texture, g.transmissionSamplerSize.value.set(E.width, E.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function m(g, p) {
    p.matcap && (g.matcap.value = p.matcap);
  }
  function _(g, p) {
    const E = e.get(p).light;
    g.referencePosition.value.setFromMatrixPosition(E.matrixWorld), g.nearDistance.value = E.shadow.camera.near, g.farDistance.value = E.shadow.camera.far;
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: s };
}
function xE(n, e, t, i) {
  let s = {}, r = {}, o = [];
  const a = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(E, b) {
    const x = b.program;
    i.uniformBlockBinding(E, x);
  }
  function c(E, b) {
    let x = s[E.id];
    x === void 0 && (m(E), x = u(E), s[E.id] = x, E.addEventListener("dispose", g));
    const P = b.program;
    i.updateUBOMapping(E, P);
    const w = e.render.frame;
    r[E.id] !== w && (f(E), r[E.id] = w);
  }
  function u(E) {
    const b = h();
    E.__bindingPointIndex = b;
    const x = n.createBuffer(), P = E.__size, w = E.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, x), n.bufferData(n.UNIFORM_BUFFER, P, w), n.bindBuffer(n.UNIFORM_BUFFER, null), n.bindBufferBase(n.UNIFORM_BUFFER, b, x), x;
  }
  function h() {
    for (let E = 0; E < a; E++) if (o.indexOf(E) === -1) return o.push(E), E;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(E) {
    const b = s[E.id], x = E.uniforms, P = E.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, b);
    for (let w = 0, C = x.length; w < C; w++) {
      const I = Array.isArray(x[w]) ? x[w] : [x[w]];
      for (let S = 0, M = I.length; S < M; S++) {
        const L = I[S];
        if (d(L, w, S, P) === true) {
          const O = L.__offset, X = Array.isArray(L.value) ? L.value : [L.value];
          let Q = 0;
          for (let ne = 0; ne < X.length; ne++) {
            const Z = X[ne], se = _(Z);
            typeof Z == "number" || typeof Z == "boolean" ? (L.__data[0] = Z, n.bufferSubData(n.UNIFORM_BUFFER, O + Q, L.__data)) : Z.isMatrix3 ? (L.__data[0] = Z.elements[0], L.__data[1] = Z.elements[1], L.__data[2] = Z.elements[2], L.__data[3] = 0, L.__data[4] = Z.elements[3], L.__data[5] = Z.elements[4], L.__data[6] = Z.elements[5], L.__data[7] = 0, L.__data[8] = Z.elements[6], L.__data[9] = Z.elements[7], L.__data[10] = Z.elements[8], L.__data[11] = 0) : (Z.toArray(L.__data, Q), Q += se.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          n.bufferSubData(n.UNIFORM_BUFFER, O, L.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function d(E, b, x, P) {
    const w = E.value, C = b + "_" + x;
    if (P[C] === void 0) return typeof w == "number" || typeof w == "boolean" ? P[C] = w : P[C] = w.clone(), true;
    {
      const I = P[C];
      if (typeof w == "number" || typeof w == "boolean") {
        if (I !== w) return P[C] = w, true;
      } else if (I.equals(w) === false) return I.copy(w), true;
    }
    return false;
  }
  function m(E) {
    const b = E.uniforms;
    let x = 0;
    const P = 16;
    for (let C = 0, I = b.length; C < I; C++) {
      const S = Array.isArray(b[C]) ? b[C] : [b[C]];
      for (let M = 0, L = S.length; M < L; M++) {
        const O = S[M], X = Array.isArray(O.value) ? O.value : [O.value];
        for (let Q = 0, ne = X.length; Q < ne; Q++) {
          const Z = X[Q], se = _(Z), j = x % P, de = j % se.boundary, xe = j + de;
          x += de, xe !== 0 && P - xe < se.storage && (x += P - xe), O.__data = new Float32Array(se.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = x, x += se.storage;
        }
      }
    }
    const w = x % P;
    return w > 0 && (x += P - w), E.__size = x, E.__cache = {}, this;
  }
  function _(E) {
    const b = { boundary: 0, storage: 0 };
    return typeof E == "number" || typeof E == "boolean" ? (b.boundary = 4, b.storage = 4) : E.isVector2 ? (b.boundary = 8, b.storage = 8) : E.isVector3 || E.isColor ? (b.boundary = 16, b.storage = 12) : E.isVector4 ? (b.boundary = 16, b.storage = 16) : E.isMatrix3 ? (b.boundary = 48, b.storage = 48) : E.isMatrix4 ? (b.boundary = 64, b.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), b;
  }
  function g(E) {
    const b = E.target;
    b.removeEventListener("dispose", g);
    const x = o.indexOf(b.__bindingPointIndex);
    o.splice(x, 1), n.deleteBuffer(s[b.id]), delete s[b.id], delete r[b.id];
  }
  function p() {
    for (const E in s) n.deleteBuffer(s[E]);
    o = [], s = {}, r = {};
  }
  return { bind: l, update: c, dispose: p };
}
class qA {
  constructor(e = {}) {
    const { canvas: t = Bv(), context: i = null, depth: s = true, stencil: r = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: h = false, reverseDepthBuffer: f = false } = e;
    this.isWebGLRenderer = true;
    let d;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = i.getContextAttributes().alpha;
    } else d = o;
    const m = new Uint32Array(4), _ = new Int32Array(4);
    let g = null, p = null;
    const E = [], b = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Li, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const x = this;
    let P = false;
    this._outputColorSpace = Dt;
    let w = 0, C = 0, I = null, S = -1, M = null;
    const L = new it(), O = new it();
    let X = null;
    const Q = new Ue(0);
    let ne = 0, Z = t.width, se = t.height, j = 1, de = null, xe = null;
    const be = new it(0, 0, Z, se), Fe = new it(0, 0, Z, se);
    let Ze = false;
    const ie = new Ou();
    let pe = false, we = false;
    const ge = new Ye(), Pe = new Ye(), ke = new N(), Ne = new it(), dt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let R = false;
    function D() {
      return I === null ? j : 1;
    }
    let y = i;
    function V(A, k) {
      return t.getContext(A, k);
    }
    try {
      const A = { alpha: true, depth: s, stencil: r, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: u, failIfMajorPerformanceCaveat: h };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${yu}`), t.addEventListener("webglcontextlost", Re, false), t.addEventListener("webglcontextrestored", ue, false), t.addEventListener("webglcontextcreationerror", re, false), y === null) {
        const k = "webgl2";
        if (y = V(k, A), y === null) throw V(k) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (A) {
      throw console.error("THREE.WebGLRenderer: " + A.message), A;
    }
    let F, H, z, J, G, q, ae, T, v, U, Y, te, K, ve, ce, ye, Te, oe, Ee, Ce, Le, me, Ge, B;
    function Me() {
      F = new Cb(y), F.init(), me = new hE(y, F), H = new Sb(y, F, e, me), z = new cE(y, F), H.reverseDepthBuffer && f && z.buffers.depth.setReversed(true), J = new Ib(y), G = new ZT(), q = new uE(y, F, z, G, H, me, J), ae = new Tb(x), T = new Rb(x), v = new By(y), Ge = new yb(y, v), U = new Pb(y, v, J, Ge), Y = new Nb(y, U, v, J), Ee = new Db(y, H, q), ye = new bb(G), te = new KT(x, ae, T, F, H, Ge, ye), K = new _E(x, G), ve = new QT(), ce = new sE(F), oe = new vb(x, ae, T, z, Y, d, l), Te = new aE(x, Y, H), B = new xE(y, J, H, z), Ce = new Mb(y, F, J), Le = new Lb(y, F, J), J.programs = te.programs, x.capabilities = H, x.extensions = F, x.properties = G, x.renderLists = ve, x.shadowMap = Te, x.state = z, x.info = J;
    }
    Me();
    const le = new mE(x, y);
    this.xr = le, this.getContext = function() {
      return y;
    }, this.getContextAttributes = function() {
      return y.getContextAttributes();
    }, this.forceContextLoss = function() {
      const A = F.get("WEBGL_lose_context");
      A && A.loseContext();
    }, this.forceContextRestore = function() {
      const A = F.get("WEBGL_lose_context");
      A && A.restoreContext();
    }, this.getPixelRatio = function() {
      return j;
    }, this.setPixelRatio = function(A) {
      A !== void 0 && (j = A, this.setSize(Z, se, false));
    }, this.getSize = function(A) {
      return A.set(Z, se);
    }, this.setSize = function(A, k, $ = true) {
      if (le.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Z = A, se = k, t.width = Math.floor(A * j), t.height = Math.floor(k * j), $ === true && (t.style.width = A + "px", t.style.height = k + "px"), this.setViewport(0, 0, A, k);
    }, this.getDrawingBufferSize = function(A) {
      return A.set(Z * j, se * j).floor();
    }, this.setDrawingBufferSize = function(A, k, $) {
      Z = A, se = k, j = $, t.width = Math.floor(A * $), t.height = Math.floor(k * $), this.setViewport(0, 0, A, k);
    }, this.getCurrentViewport = function(A) {
      return A.copy(L);
    }, this.getViewport = function(A) {
      return A.copy(be);
    }, this.setViewport = function(A, k, $, ee) {
      A.isVector4 ? be.set(A.x, A.y, A.z, A.w) : be.set(A, k, $, ee), z.viewport(L.copy(be).multiplyScalar(j).round());
    }, this.getScissor = function(A) {
      return A.copy(Fe);
    }, this.setScissor = function(A, k, $, ee) {
      A.isVector4 ? Fe.set(A.x, A.y, A.z, A.w) : Fe.set(A, k, $, ee), z.scissor(O.copy(Fe).multiplyScalar(j).round());
    }, this.getScissorTest = function() {
      return Ze;
    }, this.setScissorTest = function(A) {
      z.setScissorTest(Ze = A);
    }, this.setOpaqueSort = function(A) {
      de = A;
    }, this.setTransparentSort = function(A) {
      xe = A;
    }, this.getClearColor = function(A) {
      return A.copy(oe.getClearColor());
    }, this.setClearColor = function() {
      oe.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return oe.getClearAlpha();
    }, this.setClearAlpha = function() {
      oe.setClearAlpha(...arguments);
    }, this.clear = function(A = true, k = true, $ = true) {
      let ee = 0;
      if (A) {
        let W = false;
        if (I !== null) {
          const he = I.texture.format;
          W = he === Ru || he === wu || he === Au;
        }
        if (W) {
          const he = I.texture.type, Se = he === Vn || he === as || he === Hr || he === Vr || he === bu || he === Tu, De = oe.getClearColor(), Ae = oe.getClearAlpha(), He = De.r, Ve = De.g, Oe = De.b;
          Se ? (m[0] = He, m[1] = Ve, m[2] = Oe, m[3] = Ae, y.clearBufferuiv(y.COLOR, 0, m)) : (_[0] = He, _[1] = Ve, _[2] = Oe, _[3] = Ae, y.clearBufferiv(y.COLOR, 0, _));
        } else ee |= y.COLOR_BUFFER_BIT;
      }
      k && (ee |= y.DEPTH_BUFFER_BIT), $ && (ee |= y.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), y.clear(ee);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Re, false), t.removeEventListener("webglcontextrestored", ue, false), t.removeEventListener("webglcontextcreationerror", re, false), oe.dispose(), ve.dispose(), ce.dispose(), G.dispose(), ae.dispose(), T.dispose(), Y.dispose(), Ge.dispose(), B.dispose(), te.dispose(), le.dispose(), le.removeEventListener("sessionstart", Zu), le.removeEventListener("sessionend", Ju), Fi.stop();
    };
    function Re(A) {
      A.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), P = true;
    }
    function ue() {
      console.log("THREE.WebGLRenderer: Context Restored."), P = false;
      const A = J.autoReset, k = Te.enabled, $ = Te.autoUpdate, ee = Te.needsUpdate, W = Te.type;
      Me(), J.autoReset = A, Te.enabled = k, Te.autoUpdate = $, Te.needsUpdate = ee, Te.type = W;
    }
    function re(A) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", A.statusMessage);
    }
    function Ie(A) {
      const k = A.target;
      k.removeEventListener("dispose", Ie), Xe(k);
    }
    function Xe(A) {
      mt(A), G.remove(A);
    }
    function mt(A) {
      const k = G.get(A).programs;
      k !== void 0 && (k.forEach(function($) {
        te.releaseProgram($);
      }), A.isShaderMaterial && te.releaseShaderCache(A));
    }
    this.renderBufferDirect = function(A, k, $, ee, W, he) {
      k === null && (k = dt);
      const Se = W.isMesh && W.matrixWorld.determinant() < 0, De = eg(A, k, $, ee, W);
      z.setMaterial(ee, Se);
      let Ae = $.index, He = 1;
      if (ee.wireframe === true) {
        if (Ae = U.getWireframeAttribute($), Ae === void 0) return;
        He = 2;
      }
      const Ve = $.drawRange, Oe = $.attributes.position;
      let Qe = Ve.start * He, lt = (Ve.start + Ve.count) * He;
      he !== null && (Qe = Math.max(Qe, he.start * He), lt = Math.min(lt, (he.start + he.count) * He)), Ae !== null ? (Qe = Math.max(Qe, 0), lt = Math.min(lt, Ae.count)) : Oe != null && (Qe = Math.max(Qe, 0), lt = Math.min(lt, Oe.count));
      const xt = lt - Qe;
      if (xt < 0 || xt === 1 / 0) return;
      Ge.setup(W, ee, De, $, Ae);
      let St, tt = Ce;
      if (Ae !== null && (St = v.get(Ae), tt = Le, tt.setIndex(St)), W.isMesh) ee.wireframe === true ? (z.setLineWidth(ee.wireframeLinewidth * D()), tt.setMode(y.LINES)) : tt.setMode(y.TRIANGLES);
      else if (W.isLine) {
        let Be = ee.linewidth;
        Be === void 0 && (Be = 1), z.setLineWidth(Be * D()), W.isLineSegments ? tt.setMode(y.LINES) : W.isLineLoop ? tt.setMode(y.LINE_LOOP) : tt.setMode(y.LINE_STRIP);
      } else W.isPoints ? tt.setMode(y.POINTS) : W.isSprite && tt.setMode(y.TRIANGLES);
      if (W.isBatchedMesh) if (W._multiDrawInstances !== null) Hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), tt.renderMultiDrawInstances(W._multiDrawStarts, W._multiDrawCounts, W._multiDrawCount, W._multiDrawInstances);
      else if (F.get("WEBGL_multi_draw")) tt.renderMultiDraw(W._multiDrawStarts, W._multiDrawCounts, W._multiDrawCount);
      else {
        const Be = W._multiDrawStarts, It = W._multiDrawCounts, st = W._multiDrawCount, Sn = Ae ? v.get(Ae).bytesPerElement : 1, us = G.get(ee).currentProgram.getUniforms();
        for (let on = 0; on < st; on++) us.setValue(y, "_gl_DrawID", on), tt.render(Be[on] / Sn, It[on]);
      }
      else if (W.isInstancedMesh) tt.renderInstances(Qe, xt, W.count);
      else if ($.isInstancedBufferGeometry) {
        const Be = $._maxInstanceCount !== void 0 ? $._maxInstanceCount : 1 / 0, It = Math.min($.instanceCount, Be);
        tt.renderInstances(Qe, xt, It);
      } else tt.render(Qe, xt);
    };
    function at(A, k, $) {
      A.transparent === true && A.side === Bn && A.forceSinglePass === false ? (A.side = sn, A.needsUpdate = true, so(A, k, $), A.side = hi, A.needsUpdate = true, so(A, k, $), A.side = Bn) : so(A, k, $);
    }
    this.compile = function(A, k, $ = null) {
      $ === null && ($ = A), p = ce.get($), p.init(k), b.push(p), $.traverseVisible(function(W) {
        W.isLight && W.layers.test(k.layers) && (p.pushLight(W), W.castShadow && p.pushShadow(W));
      }), A !== $ && A.traverseVisible(function(W) {
        W.isLight && W.layers.test(k.layers) && (p.pushLight(W), W.castShadow && p.pushShadow(W));
      }), p.setupLights();
      const ee = /* @__PURE__ */ new Set();
      return A.traverse(function(W) {
        if (!(W.isMesh || W.isPoints || W.isLine || W.isSprite)) return;
        const he = W.material;
        if (he) if (Array.isArray(he)) for (let Se = 0; Se < he.length; Se++) {
          const De = he[Se];
          at(De, $, W), ee.add(De);
        }
        else at(he, $, W), ee.add(he);
      }), p = b.pop(), ee;
    }, this.compileAsync = function(A, k, $ = null) {
      const ee = this.compile(A, k, $);
      return new Promise((W) => {
        function he() {
          if (ee.forEach(function(Se) {
            G.get(Se).currentProgram.isReady() && ee.delete(Se);
          }), ee.size === 0) {
            W(A);
            return;
          }
          setTimeout(he, 10);
        }
        F.get("KHR_parallel_shader_compile") !== null ? he() : setTimeout(he, 10);
      });
    };
    let Mn = null;
    function Yn(A) {
      Mn && Mn(A);
    }
    function Zu() {
      Fi.stop();
    }
    function Ju() {
      Fi.start();
    }
    const Fi = new Ym();
    Fi.setAnimationLoop(Yn), typeof self < "u" && Fi.setContext(self), this.setAnimationLoop = function(A) {
      Mn = A, le.setAnimationLoop(A), A === null ? Fi.stop() : Fi.start();
    }, le.addEventListener("sessionstart", Zu), le.addEventListener("sessionend", Ju), this.render = function(A, k) {
      if (k !== void 0 && k.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (P === true) return;
      if (A.matrixWorldAutoUpdate === true && A.updateMatrixWorld(), k.parent === null && k.matrixWorldAutoUpdate === true && k.updateMatrixWorld(), le.enabled === true && le.isPresenting === true && (le.cameraAutoUpdate === true && le.updateCamera(k), k = le.getCamera()), A.isScene === true && A.onBeforeRender(x, A, k, I), p = ce.get(A, b.length), p.init(k), b.push(p), Pe.multiplyMatrices(k.projectionMatrix, k.matrixWorldInverse), ie.setFromProjectionMatrix(Pe), we = this.localClippingEnabled, pe = ye.init(this.clippingPlanes, we), g = ve.get(A, E.length), g.init(), E.push(g), le.enabled === true && le.isPresenting === true) {
        const he = x.xr.getDepthSensingMesh();
        he !== null && za(he, k, -1 / 0, x.sortObjects);
      }
      za(A, k, 0, x.sortObjects), g.finish(), x.sortObjects === true && g.sort(de, xe), R = le.enabled === false || le.isPresenting === false || le.hasDepthSensing() === false, R && oe.addToRenderList(g, A), this.info.render.frame++, pe === true && ye.beginShadows();
      const $ = p.state.shadowsArray;
      Te.render($, A, k), pe === true && ye.endShadows(), this.info.autoReset === true && this.info.reset();
      const ee = g.opaque, W = g.transmissive;
      if (p.setupLights(), k.isArrayCamera) {
        const he = k.cameras;
        if (W.length > 0) for (let Se = 0, De = he.length; Se < De; Se++) {
          const Ae = he[Se];
          $u(ee, W, A, Ae);
        }
        R && oe.render(A);
        for (let Se = 0, De = he.length; Se < De; Se++) {
          const Ae = he[Se];
          Qu(g, A, Ae, Ae.viewport);
        }
      } else W.length > 0 && $u(ee, W, A, k), R && oe.render(A), Qu(g, A, k);
      I !== null && C === 0 && (q.updateMultisampleRenderTarget(I), q.updateRenderTargetMipmap(I)), A.isScene === true && A.onAfterRender(x, A, k), Ge.resetDefaultState(), S = -1, M = null, b.pop(), b.length > 0 ? (p = b[b.length - 1], pe === true && ye.setGlobalState(x.clippingPlanes, p.state.camera)) : p = null, E.pop(), E.length > 0 ? g = E[E.length - 1] : g = null;
    };
    function za(A, k, $, ee) {
      if (A.visible === false) return;
      if (A.layers.test(k.layers)) {
        if (A.isGroup) $ = A.renderOrder;
        else if (A.isLOD) A.autoUpdate === true && A.update(k);
        else if (A.isLight) p.pushLight(A), A.castShadow && p.pushShadow(A);
        else if (A.isSprite) {
          if (!A.frustumCulled || ie.intersectsSprite(A)) {
            ee && Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);
            const Se = Y.update(A), De = A.material;
            De.visible && g.push(A, Se, De, $, Ne.z, null);
          }
        } else if ((A.isMesh || A.isLine || A.isPoints) && (!A.frustumCulled || ie.intersectsObject(A))) {
          const Se = Y.update(A), De = A.material;
          if (ee && (A.boundingSphere !== void 0 ? (A.boundingSphere === null && A.computeBoundingSphere(), Ne.copy(A.boundingSphere.center)) : (Se.boundingSphere === null && Se.computeBoundingSphere(), Ne.copy(Se.boundingSphere.center)), Ne.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)), Array.isArray(De)) {
            const Ae = Se.groups;
            for (let He = 0, Ve = Ae.length; He < Ve; He++) {
              const Oe = Ae[He], Qe = De[Oe.materialIndex];
              Qe && Qe.visible && g.push(A, Se, Qe, $, Ne.z, Oe);
            }
          } else De.visible && g.push(A, Se, De, $, Ne.z, null);
        }
      }
      const he = A.children;
      for (let Se = 0, De = he.length; Se < De; Se++) za(he[Se], k, $, ee);
    }
    function Qu(A, k, $, ee) {
      const W = A.opaque, he = A.transmissive, Se = A.transparent;
      p.setupLightsView($), pe === true && ye.setGlobalState(x.clippingPlanes, $), ee && z.viewport(L.copy(ee)), W.length > 0 && io(W, k, $), he.length > 0 && io(he, k, $), Se.length > 0 && io(Se, k, $), z.buffers.depth.setTest(true), z.buffers.depth.setMask(true), z.buffers.color.setMask(true), z.setPolygonOffset(false);
    }
    function $u(A, k, $, ee) {
      if (($.isScene === true ? $.overrideMaterial : null) !== null) return;
      p.state.transmissionRenderTarget[ee.id] === void 0 && (p.state.transmissionRenderTarget[ee.id] = new kn(1, 1, { generateMipmaps: true, type: F.has("EXT_color_buffer_half_float") || F.has("EXT_color_buffer_float") ? Ni : Vn, minFilter: ri, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: $e.workingColorSpace }));
      const he = p.state.transmissionRenderTarget[ee.id], Se = ee.viewport || L;
      he.setSize(Se.z * x.transmissionResolutionScale, Se.w * x.transmissionResolutionScale);
      const De = x.getRenderTarget();
      x.setRenderTarget(he), x.getClearColor(Q), ne = x.getClearAlpha(), ne < 1 && x.setClearColor(16777215, 0.5), x.clear(), R && oe.render($);
      const Ae = x.toneMapping;
      x.toneMapping = Li;
      const He = ee.viewport;
      if (ee.viewport !== void 0 && (ee.viewport = void 0), p.setupLightsView(ee), pe === true && ye.setGlobalState(x.clippingPlanes, ee), io(A, $, ee), q.updateMultisampleRenderTarget(he), q.updateRenderTargetMipmap(he), F.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ve = false;
        for (let Oe = 0, Qe = k.length; Oe < Qe; Oe++) {
          const lt = k[Oe], xt = lt.object, St = lt.geometry, tt = lt.material, Be = lt.group;
          if (tt.side === Bn && xt.layers.test(ee.layers)) {
            const It = tt.side;
            tt.side = sn, tt.needsUpdate = true, eh(xt, $, ee, St, tt, Be), tt.side = It, tt.needsUpdate = true, Ve = true;
          }
        }
        Ve === true && (q.updateMultisampleRenderTarget(he), q.updateRenderTargetMipmap(he));
      }
      x.setRenderTarget(De), x.setClearColor(Q, ne), He !== void 0 && (ee.viewport = He), x.toneMapping = Ae;
    }
    function io(A, k, $) {
      const ee = k.isScene === true ? k.overrideMaterial : null;
      for (let W = 0, he = A.length; W < he; W++) {
        const Se = A[W], De = Se.object, Ae = Se.geometry, He = Se.group;
        let Ve = Se.material;
        Ve.allowOverride === true && ee !== null && (Ve = ee), De.layers.test($.layers) && eh(De, k, $, Ae, Ve, He);
      }
    }
    function eh(A, k, $, ee, W, he) {
      A.onBeforeRender(x, k, $, ee, W, he), A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse, A.matrixWorld), A.normalMatrix.getNormalMatrix(A.modelViewMatrix), W.onBeforeRender(x, k, $, ee, A, he), W.transparent === true && W.side === Bn && W.forceSinglePass === false ? (W.side = sn, W.needsUpdate = true, x.renderBufferDirect($, k, ee, W, A, he), W.side = hi, W.needsUpdate = true, x.renderBufferDirect($, k, ee, W, A, he), W.side = Bn) : x.renderBufferDirect($, k, ee, W, A, he), A.onAfterRender(x, k, $, ee, W, he);
    }
    function so(A, k, $) {
      k.isScene !== true && (k = dt);
      const ee = G.get(A), W = p.state.lights, he = p.state.shadowsArray, Se = W.state.version, De = te.getParameters(A, W.state, he, k, $), Ae = te.getProgramCacheKey(De);
      let He = ee.programs;
      ee.environment = A.isMeshStandardMaterial ? k.environment : null, ee.fog = k.fog, ee.envMap = (A.isMeshStandardMaterial ? T : ae).get(A.envMap || ee.environment), ee.envMapRotation = ee.environment !== null && A.envMap === null ? k.environmentRotation : A.envMapRotation, He === void 0 && (A.addEventListener("dispose", Ie), He = /* @__PURE__ */ new Map(), ee.programs = He);
      let Ve = He.get(Ae);
      if (Ve !== void 0) {
        if (ee.currentProgram === Ve && ee.lightsStateVersion === Se) return nh(A, De), Ve;
      } else De.uniforms = te.getUniforms(A), A.onBeforeCompile(De, x), Ve = te.acquireProgram(De, Ae), He.set(Ae, Ve), ee.uniforms = De.uniforms;
      const Oe = ee.uniforms;
      return (!A.isShaderMaterial && !A.isRawShaderMaterial || A.clipping === true) && (Oe.clippingPlanes = ye.uniform), nh(A, De), ee.needsLights = ng(A), ee.lightsStateVersion = Se, ee.needsLights && (Oe.ambientLightColor.value = W.state.ambient, Oe.lightProbe.value = W.state.probe, Oe.directionalLights.value = W.state.directional, Oe.directionalLightShadows.value = W.state.directionalShadow, Oe.spotLights.value = W.state.spot, Oe.spotLightShadows.value = W.state.spotShadow, Oe.rectAreaLights.value = W.state.rectArea, Oe.ltc_1.value = W.state.rectAreaLTC1, Oe.ltc_2.value = W.state.rectAreaLTC2, Oe.pointLights.value = W.state.point, Oe.pointLightShadows.value = W.state.pointShadow, Oe.hemisphereLights.value = W.state.hemi, Oe.directionalShadowMap.value = W.state.directionalShadowMap, Oe.directionalShadowMatrix.value = W.state.directionalShadowMatrix, Oe.spotShadowMap.value = W.state.spotShadowMap, Oe.spotLightMatrix.value = W.state.spotLightMatrix, Oe.spotLightMap.value = W.state.spotLightMap, Oe.pointShadowMap.value = W.state.pointShadowMap, Oe.pointShadowMatrix.value = W.state.pointShadowMatrix), ee.currentProgram = Ve, ee.uniformsList = null, Ve;
    }
    function th(A) {
      if (A.uniformsList === null) {
        const k = A.currentProgram.getUniforms();
        A.uniformsList = ra.seqWithValue(k.seq, A.uniforms);
      }
      return A.uniformsList;
    }
    function nh(A, k) {
      const $ = G.get(A);
      $.outputColorSpace = k.outputColorSpace, $.batching = k.batching, $.batchingColor = k.batchingColor, $.instancing = k.instancing, $.instancingColor = k.instancingColor, $.instancingMorph = k.instancingMorph, $.skinning = k.skinning, $.morphTargets = k.morphTargets, $.morphNormals = k.morphNormals, $.morphColors = k.morphColors, $.morphTargetsCount = k.morphTargetsCount, $.numClippingPlanes = k.numClippingPlanes, $.numIntersection = k.numClipIntersection, $.vertexAlphas = k.vertexAlphas, $.vertexTangents = k.vertexTangents, $.toneMapping = k.toneMapping;
    }
    function eg(A, k, $, ee, W) {
      k.isScene !== true && (k = dt), q.resetTextureUnits();
      const he = k.fog, Se = ee.isMeshStandardMaterial ? k.environment : null, De = I === null ? x.outputColorSpace : I.isXRRenderTarget === true ? I.texture.colorSpace : Jt, Ae = (ee.isMeshStandardMaterial ? T : ae).get(ee.envMap || Se), He = ee.vertexColors === true && !!$.attributes.color && $.attributes.color.itemSize === 4, Ve = !!$.attributes.tangent && (!!ee.normalMap || ee.anisotropy > 0), Oe = !!$.morphAttributes.position, Qe = !!$.morphAttributes.normal, lt = !!$.morphAttributes.color;
      let xt = Li;
      ee.toneMapped && (I === null || I.isXRRenderTarget === true) && (xt = x.toneMapping);
      const St = $.morphAttributes.position || $.morphAttributes.normal || $.morphAttributes.color, tt = St !== void 0 ? St.length : 0, Be = G.get(ee), It = p.state.lights;
      if (pe === true && (we === true || A !== M)) {
        const Wt = A === M && ee.id === S;
        ye.setState(ee, A, Wt);
      }
      let st = false;
      ee.version === Be.__version ? (Be.needsLights && Be.lightsStateVersion !== It.state.version || Be.outputColorSpace !== De || W.isBatchedMesh && Be.batching === false || !W.isBatchedMesh && Be.batching === true || W.isBatchedMesh && Be.batchingColor === true && W.colorTexture === null || W.isBatchedMesh && Be.batchingColor === false && W.colorTexture !== null || W.isInstancedMesh && Be.instancing === false || !W.isInstancedMesh && Be.instancing === true || W.isSkinnedMesh && Be.skinning === false || !W.isSkinnedMesh && Be.skinning === true || W.isInstancedMesh && Be.instancingColor === true && W.instanceColor === null || W.isInstancedMesh && Be.instancingColor === false && W.instanceColor !== null || W.isInstancedMesh && Be.instancingMorph === true && W.morphTexture === null || W.isInstancedMesh && Be.instancingMorph === false && W.morphTexture !== null || Be.envMap !== Ae || ee.fog === true && Be.fog !== he || Be.numClippingPlanes !== void 0 && (Be.numClippingPlanes !== ye.numPlanes || Be.numIntersection !== ye.numIntersection) || Be.vertexAlphas !== He || Be.vertexTangents !== Ve || Be.morphTargets !== Oe || Be.morphNormals !== Qe || Be.morphColors !== lt || Be.toneMapping !== xt || Be.morphTargetsCount !== tt) && (st = true) : (st = true, Be.__version = ee.version);
      let Sn = Be.currentProgram;
      st === true && (Sn = so(ee, k, W));
      let us = false, on = false, rr = false;
      const _t = Sn.getUniforms(), un = Be.uniforms;
      if (z.useProgram(Sn.program) && (us = true, on = true, rr = true), ee.id !== S && (S = ee.id, on = true), us || M !== A) {
        z.buffers.depth.getReversed() ? (ge.copy(A.projectionMatrix), Hv(ge), Vv(ge), _t.setValue(y, "projectionMatrix", ge)) : _t.setValue(y, "projectionMatrix", A.projectionMatrix), _t.setValue(y, "viewMatrix", A.matrixWorldInverse);
        const Qt = _t.map.cameraPosition;
        Qt !== void 0 && Qt.setValue(y, ke.setFromMatrixPosition(A.matrixWorld)), H.logarithmicDepthBuffer && _t.setValue(y, "logDepthBufFC", 2 / (Math.log(A.far + 1) / Math.LN2)), (ee.isMeshPhongMaterial || ee.isMeshToonMaterial || ee.isMeshLambertMaterial || ee.isMeshBasicMaterial || ee.isMeshStandardMaterial || ee.isShaderMaterial) && _t.setValue(y, "isOrthographic", A.isOrthographicCamera === true), M !== A && (M = A, on = true, rr = true);
      }
      if (W.isSkinnedMesh) {
        _t.setOptional(y, W, "bindMatrix"), _t.setOptional(y, W, "bindMatrixInverse");
        const Wt = W.skeleton;
        Wt && (Wt.boneTexture === null && Wt.computeBoneTexture(), _t.setValue(y, "boneTexture", Wt.boneTexture, q));
      }
      W.isBatchedMesh && (_t.setOptional(y, W, "batchingTexture"), _t.setValue(y, "batchingTexture", W._matricesTexture, q), _t.setOptional(y, W, "batchingIdTexture"), _t.setValue(y, "batchingIdTexture", W._indirectTexture, q), _t.setOptional(y, W, "batchingColorTexture"), W._colorsTexture !== null && _t.setValue(y, "batchingColorTexture", W._colorsTexture, q));
      const hn = $.morphAttributes;
      if ((hn.position !== void 0 || hn.normal !== void 0 || hn.color !== void 0) && Ee.update(W, $, Sn), (on || Be.receiveShadow !== W.receiveShadow) && (Be.receiveShadow = W.receiveShadow, _t.setValue(y, "receiveShadow", W.receiveShadow)), ee.isMeshGouraudMaterial && ee.envMap !== null && (un.envMap.value = Ae, un.flipEnvMap.value = Ae.isCubeTexture && Ae.isRenderTargetTexture === false ? -1 : 1), ee.isMeshStandardMaterial && ee.envMap === null && k.environment !== null && (un.envMapIntensity.value = k.environmentIntensity), on && (_t.setValue(y, "toneMappingExposure", x.toneMappingExposure), Be.needsLights && tg(un, rr), he && ee.fog === true && K.refreshFogUniforms(un, he), K.refreshMaterialUniforms(un, ee, j, se, p.state.transmissionRenderTarget[A.id]), ra.upload(y, th(Be), un, q)), ee.isShaderMaterial && ee.uniformsNeedUpdate === true && (ra.upload(y, th(Be), un, q), ee.uniformsNeedUpdate = false), ee.isSpriteMaterial && _t.setValue(y, "center", W.center), _t.setValue(y, "modelViewMatrix", W.modelViewMatrix), _t.setValue(y, "normalMatrix", W.normalMatrix), _t.setValue(y, "modelMatrix", W.matrixWorld), ee.isShaderMaterial || ee.isRawShaderMaterial) {
        const Wt = ee.uniformsGroups;
        for (let Qt = 0, Ha = Wt.length; Qt < Ha; Qt++) {
          const Bi = Wt[Qt];
          B.update(Bi, Sn), B.bind(Bi, Sn);
        }
      }
      return Sn;
    }
    function tg(A, k) {
      A.ambientLightColor.needsUpdate = k, A.lightProbe.needsUpdate = k, A.directionalLights.needsUpdate = k, A.directionalLightShadows.needsUpdate = k, A.pointLights.needsUpdate = k, A.pointLightShadows.needsUpdate = k, A.spotLights.needsUpdate = k, A.spotLightShadows.needsUpdate = k, A.rectAreaLights.needsUpdate = k, A.hemisphereLights.needsUpdate = k;
    }
    function ng(A) {
      return A.isMeshLambertMaterial || A.isMeshToonMaterial || A.isMeshPhongMaterial || A.isMeshStandardMaterial || A.isShadowMaterial || A.isShaderMaterial && A.lights === true;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(A, k, $) {
      const ee = G.get(A);
      ee.__autoAllocateDepthBuffer = A.resolveDepthBuffer === false, ee.__autoAllocateDepthBuffer === false && (ee.__useRenderToTexture = false), G.get(A.texture).__webglTexture = k, G.get(A.depthTexture).__webglTexture = ee.__autoAllocateDepthBuffer ? void 0 : $, ee.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(A, k) {
      const $ = G.get(A);
      $.__webglFramebuffer = k, $.__useDefaultFramebuffer = k === void 0;
    };
    const ig = y.createFramebuffer();
    this.setRenderTarget = function(A, k = 0, $ = 0) {
      I = A, w = k, C = $;
      let ee = true, W = null, he = false, Se = false;
      if (A) {
        const Ae = G.get(A);
        if (Ae.__useDefaultFramebuffer !== void 0) z.bindFramebuffer(y.FRAMEBUFFER, null), ee = false;
        else if (Ae.__webglFramebuffer === void 0) q.setupRenderTarget(A);
        else if (Ae.__hasExternalTextures) q.rebindTextures(A, G.get(A.texture).__webglTexture, G.get(A.depthTexture).__webglTexture);
        else if (A.depthBuffer) {
          const Oe = A.depthTexture;
          if (Ae.__boundDepthTexture !== Oe) {
            if (Oe !== null && G.has(Oe) && (A.width !== Oe.image.width || A.height !== Oe.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            q.setupDepthRenderbuffer(A);
          }
        }
        const He = A.texture;
        (He.isData3DTexture || He.isDataArrayTexture || He.isCompressedArrayTexture) && (Se = true);
        const Ve = G.get(A).__webglFramebuffer;
        A.isWebGLCubeRenderTarget ? (Array.isArray(Ve[k]) ? W = Ve[k][$] : W = Ve[k], he = true) : A.samples > 0 && q.useMultisampledRTT(A) === false ? W = G.get(A).__webglMultisampledFramebuffer : Array.isArray(Ve) ? W = Ve[$] : W = Ve, L.copy(A.viewport), O.copy(A.scissor), X = A.scissorTest;
      } else L.copy(be).multiplyScalar(j).floor(), O.copy(Fe).multiplyScalar(j).floor(), X = Ze;
      if ($ !== 0 && (W = ig), z.bindFramebuffer(y.FRAMEBUFFER, W) && ee && z.drawBuffers(A, W), z.viewport(L), z.scissor(O), z.setScissorTest(X), he) {
        const Ae = G.get(A.texture);
        y.framebufferTexture2D(y.FRAMEBUFFER, y.COLOR_ATTACHMENT0, y.TEXTURE_CUBE_MAP_POSITIVE_X + k, Ae.__webglTexture, $);
      } else if (Se) {
        const Ae = G.get(A.texture), He = k;
        y.framebufferTextureLayer(y.FRAMEBUFFER, y.COLOR_ATTACHMENT0, Ae.__webglTexture, $, He);
      } else if (A !== null && $ !== 0) {
        const Ae = G.get(A.texture);
        y.framebufferTexture2D(y.FRAMEBUFFER, y.COLOR_ATTACHMENT0, y.TEXTURE_2D, Ae.__webglTexture, $);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(A, k, $, ee, W, he, Se, De = 0) {
      if (!(A && A.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ae = G.get(A).__webglFramebuffer;
      if (A.isWebGLCubeRenderTarget && Se !== void 0 && (Ae = Ae[Se]), Ae) {
        z.bindFramebuffer(y.FRAMEBUFFER, Ae);
        try {
          const He = A.textures[De], Ve = He.format, Oe = He.type;
          if (!H.textureFormatReadable(Ve)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!H.textureTypeReadable(Oe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          k >= 0 && k <= A.width - ee && $ >= 0 && $ <= A.height - W && (A.textures.length > 1 && y.readBuffer(y.COLOR_ATTACHMENT0 + De), y.readPixels(k, $, ee, W, me.convert(Ve), me.convert(Oe), he));
        } finally {
          const He = I !== null ? G.get(I).__webglFramebuffer : null;
          z.bindFramebuffer(y.FRAMEBUFFER, He);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(A, k, $, ee, W, he, Se, De = 0) {
      if (!(A && A.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Ae = G.get(A).__webglFramebuffer;
      if (A.isWebGLCubeRenderTarget && Se !== void 0 && (Ae = Ae[Se]), Ae) if (k >= 0 && k <= A.width - ee && $ >= 0 && $ <= A.height - W) {
        z.bindFramebuffer(y.FRAMEBUFFER, Ae);
        const He = A.textures[De], Ve = He.format, Oe = He.type;
        if (!H.textureFormatReadable(Ve)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!H.textureTypeReadable(Oe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Qe = y.createBuffer();
        y.bindBuffer(y.PIXEL_PACK_BUFFER, Qe), y.bufferData(y.PIXEL_PACK_BUFFER, he.byteLength, y.STREAM_READ), A.textures.length > 1 && y.readBuffer(y.COLOR_ATTACHMENT0 + De), y.readPixels(k, $, ee, W, me.convert(Ve), me.convert(Oe), 0);
        const lt = I !== null ? G.get(I).__webglFramebuffer : null;
        z.bindFramebuffer(y.FRAMEBUFFER, lt);
        const xt = y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return y.flush(), await zv(y, xt, 4), y.bindBuffer(y.PIXEL_PACK_BUFFER, Qe), y.getBufferSubData(y.PIXEL_PACK_BUFFER, 0, he), y.deleteBuffer(Qe), y.deleteSync(xt), he;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(A, k = null, $ = 0) {
      const ee = Math.pow(2, -$), W = Math.floor(A.image.width * ee), he = Math.floor(A.image.height * ee), Se = k !== null ? k.x : 0, De = k !== null ? k.y : 0;
      q.setTexture2D(A, 0), y.copyTexSubImage2D(y.TEXTURE_2D, $, 0, 0, Se, De, W, he), z.unbindTexture();
    };
    const sg = y.createFramebuffer(), rg = y.createFramebuffer();
    this.copyTextureToTexture = function(A, k, $ = null, ee = null, W = 0, he = null) {
      he === null && (W !== 0 ? (Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), he = W, W = 0) : he = 0);
      let Se, De, Ae, He, Ve, Oe, Qe, lt, xt;
      const St = A.isCompressedTexture ? A.mipmaps[he] : A.image;
      if ($ !== null) Se = $.max.x - $.min.x, De = $.max.y - $.min.y, Ae = $.isBox3 ? $.max.z - $.min.z : 1, He = $.min.x, Ve = $.min.y, Oe = $.isBox3 ? $.min.z : 0;
      else {
        const hn = Math.pow(2, -W);
        Se = Math.floor(St.width * hn), De = Math.floor(St.height * hn), A.isDataArrayTexture ? Ae = St.depth : A.isData3DTexture ? Ae = Math.floor(St.depth * hn) : Ae = 1, He = 0, Ve = 0, Oe = 0;
      }
      ee !== null ? (Qe = ee.x, lt = ee.y, xt = ee.z) : (Qe = 0, lt = 0, xt = 0);
      const tt = me.convert(k.format), Be = me.convert(k.type);
      let It;
      k.isData3DTexture ? (q.setTexture3D(k, 0), It = y.TEXTURE_3D) : k.isDataArrayTexture || k.isCompressedArrayTexture ? (q.setTexture2DArray(k, 0), It = y.TEXTURE_2D_ARRAY) : (q.setTexture2D(k, 0), It = y.TEXTURE_2D), y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL, k.flipY), y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL, k.premultiplyAlpha), y.pixelStorei(y.UNPACK_ALIGNMENT, k.unpackAlignment);
      const st = y.getParameter(y.UNPACK_ROW_LENGTH), Sn = y.getParameter(y.UNPACK_IMAGE_HEIGHT), us = y.getParameter(y.UNPACK_SKIP_PIXELS), on = y.getParameter(y.UNPACK_SKIP_ROWS), rr = y.getParameter(y.UNPACK_SKIP_IMAGES);
      y.pixelStorei(y.UNPACK_ROW_LENGTH, St.width), y.pixelStorei(y.UNPACK_IMAGE_HEIGHT, St.height), y.pixelStorei(y.UNPACK_SKIP_PIXELS, He), y.pixelStorei(y.UNPACK_SKIP_ROWS, Ve), y.pixelStorei(y.UNPACK_SKIP_IMAGES, Oe);
      const _t = A.isDataArrayTexture || A.isData3DTexture, un = k.isDataArrayTexture || k.isData3DTexture;
      if (A.isDepthTexture) {
        const hn = G.get(A), Wt = G.get(k), Qt = G.get(hn.__renderTarget), Ha = G.get(Wt.__renderTarget);
        z.bindFramebuffer(y.READ_FRAMEBUFFER, Qt.__webglFramebuffer), z.bindFramebuffer(y.DRAW_FRAMEBUFFER, Ha.__webglFramebuffer);
        for (let Bi = 0; Bi < Ae; Bi++) _t && (y.framebufferTextureLayer(y.READ_FRAMEBUFFER, y.COLOR_ATTACHMENT0, G.get(A).__webglTexture, W, Oe + Bi), y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER, y.COLOR_ATTACHMENT0, G.get(k).__webglTexture, he, xt + Bi)), y.blitFramebuffer(He, Ve, Se, De, Qe, lt, Se, De, y.DEPTH_BUFFER_BIT, y.NEAREST);
        z.bindFramebuffer(y.READ_FRAMEBUFFER, null), z.bindFramebuffer(y.DRAW_FRAMEBUFFER, null);
      } else if (W !== 0 || A.isRenderTargetTexture || G.has(A)) {
        const hn = G.get(A), Wt = G.get(k);
        z.bindFramebuffer(y.READ_FRAMEBUFFER, sg), z.bindFramebuffer(y.DRAW_FRAMEBUFFER, rg);
        for (let Qt = 0; Qt < Ae; Qt++) _t ? y.framebufferTextureLayer(y.READ_FRAMEBUFFER, y.COLOR_ATTACHMENT0, hn.__webglTexture, W, Oe + Qt) : y.framebufferTexture2D(y.READ_FRAMEBUFFER, y.COLOR_ATTACHMENT0, y.TEXTURE_2D, hn.__webglTexture, W), un ? y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER, y.COLOR_ATTACHMENT0, Wt.__webglTexture, he, xt + Qt) : y.framebufferTexture2D(y.DRAW_FRAMEBUFFER, y.COLOR_ATTACHMENT0, y.TEXTURE_2D, Wt.__webglTexture, he), W !== 0 ? y.blitFramebuffer(He, Ve, Se, De, Qe, lt, Se, De, y.COLOR_BUFFER_BIT, y.NEAREST) : un ? y.copyTexSubImage3D(It, he, Qe, lt, xt + Qt, He, Ve, Se, De) : y.copyTexSubImage2D(It, he, Qe, lt, He, Ve, Se, De);
        z.bindFramebuffer(y.READ_FRAMEBUFFER, null), z.bindFramebuffer(y.DRAW_FRAMEBUFFER, null);
      } else un ? A.isDataTexture || A.isData3DTexture ? y.texSubImage3D(It, he, Qe, lt, xt, Se, De, Ae, tt, Be, St.data) : k.isCompressedArrayTexture ? y.compressedTexSubImage3D(It, he, Qe, lt, xt, Se, De, Ae, tt, St.data) : y.texSubImage3D(It, he, Qe, lt, xt, Se, De, Ae, tt, Be, St) : A.isDataTexture ? y.texSubImage2D(y.TEXTURE_2D, he, Qe, lt, Se, De, tt, Be, St.data) : A.isCompressedTexture ? y.compressedTexSubImage2D(y.TEXTURE_2D, he, Qe, lt, St.width, St.height, tt, St.data) : y.texSubImage2D(y.TEXTURE_2D, he, Qe, lt, Se, De, tt, Be, St);
      y.pixelStorei(y.UNPACK_ROW_LENGTH, st), y.pixelStorei(y.UNPACK_IMAGE_HEIGHT, Sn), y.pixelStorei(y.UNPACK_SKIP_PIXELS, us), y.pixelStorei(y.UNPACK_SKIP_ROWS, on), y.pixelStorei(y.UNPACK_SKIP_IMAGES, rr), he === 0 && k.generateMipmaps && y.generateMipmap(It), z.unbindTexture();
    }, this.copyTextureToTexture3D = function(A, k, $ = null, ee = null, W = 0) {
      return Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(A, k, $, ee, W);
    }, this.initRenderTarget = function(A) {
      G.get(A).__webglFramebuffer === void 0 && q.setupRenderTarget(A);
    }, this.initTexture = function(A) {
      A.isCubeTexture ? q.setTextureCube(A, 0) : A.isData3DTexture ? q.setTexture3D(A, 0) : A.isDataArrayTexture || A.isCompressedArrayTexture ? q.setTexture2DArray(A, 0) : q.setTexture2D(A, 0), z.unbindTexture();
    }, this.resetState = function() {
      w = 0, C = 0, I = null, z.reset(), Ge.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return zn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = $e._getDrawingBufferColorSpace(e), t.unpackColorSpace = $e._getUnpackColorSpace();
  }
}
const jA = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [i, s] of e) t[i] = s;
  return t;
}, vE = { name: "CopyShader", uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}` };
class sr {
  constructor() {
    this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const yE = new Fa(-1, 1, 1, -1, 0, 1);
class ME extends Mt {
  constructor() {
    super(), this.setAttribute("position", new et([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new et([0, 2, 0, 0, 2, 0], 2));
  }
}
const SE = new ME();
class Ku {
  constructor(e) {
    this._mesh = new kt(SE, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, yE);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class bE extends sr {
  constructor(e, t = "tDiffuse") {
    super(), this.textureID = t, this.uniforms = null, this.material = null, e instanceof rn ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = ks.clone(e.uniforms), this.material = new rn({ name: e.name !== void 0 ? e.name : "unspecified", defines: Object.assign({}, e.defines), uniforms: this.uniforms, vertexShader: e.vertexShader, fragmentShader: e.fragmentShader })), this._fsQuad = new Ku(this.material);
  }
  render(e, t, i) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), this._fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this._fsQuad.dispose();
  }
}
class _d extends sr {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = true, this.needsSwap = false, this.inverse = false;
  }
  render(e, t, i) {
    const s = e.getContext(), r = e.state;
    r.buffers.color.setMask(false), r.buffers.depth.setMask(false), r.buffers.color.setLocked(true), r.buffers.depth.setLocked(true);
    let o, a;
    this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), r.buffers.stencil.setTest(true), r.buffers.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE), r.buffers.stencil.setFunc(s.ALWAYS, o, 4294967295), r.buffers.stencil.setClear(a), r.buffers.stencil.setLocked(true), e.setRenderTarget(i), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(false), r.buffers.depth.setLocked(false), r.buffers.color.setMask(true), r.buffers.depth.setMask(true), r.buffers.stencil.setLocked(false), r.buffers.stencil.setFunc(s.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(s.KEEP, s.KEEP, s.KEEP), r.buffers.stencil.setLocked(true);
  }
}
class TE extends sr {
  constructor() {
    super(), this.needsSwap = false;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(false), e.state.buffers.stencil.setTest(false);
  }
}
class KA {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const i = e.getSize(new fe());
      this._width = i.width, this._height = i.height, t = new kn(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: Ni }), t.texture.name = "EffectComposer.rt1";
    } else this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], this.copyPass = new bE(vE), this.copyPass.material.blending = ai, this.clock = new Xm();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return false;
    return true;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let i = false;
    for (let s = 0, r = this.passes.length; s < r; s++) {
      const o = this.passes[s];
      if (o.enabled !== false) {
        if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(s), o.render(this.renderer, this.writeBuffer, this.readBuffer, e, i), o.needsSwap) {
          if (i) {
            const a = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        _d !== void 0 && (o instanceof _d ? i = true : o instanceof TE && (i = false));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new fe());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const i = this._width * this._pixelRatio, s = this._height * this._pixelRatio;
    this.renderTarget1.setSize(i, s), this.renderTarget2.setSize(i, s);
    for (let r = 0; r < this.passes.length; r++) this.passes[r].setSize(i, s);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class ZA extends sr {
  constructor(e, t, i = null, s = null, r = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = i, this.clearColor = s, this.clearAlpha = r, this.clear = true, this.clearDepth = false, this.needsSwap = false, this._oldClearColor = new Ue();
  }
  render(e, t, i) {
    const s = e.autoClear;
    e.autoClear = false;
    let r, o;
    this.overrideMaterial !== null && (o = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (r = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == true && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : i), this.clear === true && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(r), this.overrideMaterial !== null && (this.scene.overrideMaterial = o), e.autoClear = s;
  }
}
const Xo = { name: "OutputShader", uniforms: { tDiffuse: { value: null }, toneMappingExposure: { value: 1 } }, vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}` };
class JA extends sr {
  constructor() {
    super(), this.uniforms = ks.clone(Xo.uniforms), this.material = new ey({ name: Xo.name, uniforms: this.uniforms, vertexShader: Xo.vertexShader, fragmentShader: Xo.fragmentShader }), this._fsQuad = new Ku(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, i) {
    this.uniforms.tDiffuse.value = i.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, $e.getTransfer(this._outputColorSpace) === ct && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === Jp ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === Qp ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === $p ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === em ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === nm ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === im ? this.material.defines.NEUTRAL_TONE_MAPPING = "" : this._toneMapping === tm && (this.material.defines.CUSTOM_TONE_MAPPING = ""), this.material.needsUpdate = true), this.renderToScreen === true ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this._fsQuad.dispose();
  }
}
const Yo = { defines: { SMAA_THRESHOLD: "0.1" }, uniforms: { tDiffuse: { value: null }, resolution: { value: new fe(1 / 1024, 1 / 512) } }, vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}` }, qo = { defines: { SMAA_MAX_SEARCH_STEPS: "8", SMAA_AREATEX_MAX_DISTANCE: "16", SMAA_AREATEX_PIXEL_SIZE: "( 1.0 / vec2( 160.0, 560.0 ) )", SMAA_AREATEX_SUBTEX_SIZE: "( 1.0 / 7.0 )" }, uniforms: { tDiffuse: { value: null }, tArea: { value: null }, tSearch: { value: null }, resolution: { value: new fe(1 / 1024, 1 / 512) } }, vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}` }, Hl = { uniforms: { tDiffuse: { value: null }, tColor: { value: null }, resolution: { value: new fe(1 / 1024, 1 / 512) } }, vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}` };
class QA extends sr {
  constructor() {
    super(), this._edgesRT = new kn(1, 1, { depthBuffer: false, type: Ni }), this._edgesRT.texture.name = "SMAAPass.edges", this._weightsRT = new kn(1, 1, { depthBuffer: false, type: Ni }), this._weightsRT.texture.name = "SMAAPass.weights";
    const e = this, t = new Image();
    t.src = this._getAreaTexture(), t.onload = function() {
      e._areaTexture.needsUpdate = true;
    }, this._areaTexture = new At(), this._areaTexture.name = "SMAAPass.area", this._areaTexture.image = t, this._areaTexture.minFilter = nn, this._areaTexture.generateMipmaps = false, this._areaTexture.flipY = false;
    const i = new Image();
    i.src = this._getSearchTexture(), i.onload = function() {
      e._searchTexture.needsUpdate = true;
    }, this._searchTexture = new At(), this._searchTexture.name = "SMAAPass.search", this._searchTexture.image = i, this._searchTexture.magFilter = Ot, this._searchTexture.minFilter = Ot, this._searchTexture.generateMipmaps = false, this._searchTexture.flipY = false, this._uniformsEdges = ks.clone(Yo.uniforms), this._materialEdges = new rn({ defines: Object.assign({}, Yo.defines), uniforms: this._uniformsEdges, vertexShader: Yo.vertexShader, fragmentShader: Yo.fragmentShader }), this._uniformsWeights = ks.clone(qo.uniforms), this._uniformsWeights.tDiffuse.value = this._edgesRT.texture, this._uniformsWeights.tArea.value = this._areaTexture, this._uniformsWeights.tSearch.value = this._searchTexture, this._materialWeights = new rn({ defines: Object.assign({}, qo.defines), uniforms: this._uniformsWeights, vertexShader: qo.vertexShader, fragmentShader: qo.fragmentShader }), this._uniformsBlend = ks.clone(Hl.uniforms), this._uniformsBlend.tDiffuse.value = this._weightsRT.texture, this._materialBlend = new rn({ uniforms: this._uniformsBlend, vertexShader: Hl.vertexShader, fragmentShader: Hl.fragmentShader }), this._fsQuad = new Ku(null);
  }
  render(e, t, i) {
    this._uniformsEdges.tDiffuse.value = i.texture, this._fsQuad.material = this._materialEdges, e.setRenderTarget(this._edgesRT), this.clear && e.clear(), this._fsQuad.render(e), this._fsQuad.material = this._materialWeights, e.setRenderTarget(this._weightsRT), this.clear && e.clear(), this._fsQuad.render(e), this._uniformsBlend.tColor.value = i.texture, this._fsQuad.material = this._materialBlend, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(), this._fsQuad.render(e));
  }
  setSize(e, t) {
    this._edgesRT.setSize(e, t), this._weightsRT.setSize(e, t), this._materialEdges.uniforms.resolution.value.set(1 / e, 1 / t), this._materialWeights.uniforms.resolution.value.set(1 / e, 1 / t), this._materialBlend.uniforms.resolution.value.set(1 / e, 1 / t);
  }
  dispose() {
    this._edgesRT.dispose(), this._weightsRT.dispose(), this._areaTexture.dispose(), this._searchTexture.dispose(), this._materialEdges.dispose(), this._materialWeights.dispose(), this._materialBlend.dispose(), this._fsQuad.dispose();
  }
  _getAreaTexture() {
    return "data:image/png;base64,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";
  }
  _getSearchTexture() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=";
  }
}
function $A(n, e = false) {
  const t = n[0].index !== null, i = new Set(Object.keys(n[0].attributes)), s = new Set(Object.keys(n[0].morphAttributes)), r = {}, o = {}, a = n[0].morphTargetsRelative, l = new Mt();
  let c = 0;
  for (let u = 0; u < n.length; ++u) {
    const h = n[u];
    let f = 0;
    if (t !== (h.index !== null)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
    for (const d in h.attributes) {
      if (!i.has(d)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + '. All geometries must have compatible attributes; make sure "' + d + '" attribute exists among all geometries, or in none of them.'), null;
      r[d] === void 0 && (r[d] = []), r[d].push(h.attributes[d]), f++;
    }
    if (f !== i.size) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". Make sure all geometries have the same number of attributes."), null;
    if (a !== h.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
    for (const d in h.morphAttributes) {
      if (!s.has(d)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ".  .morphAttributes must be consistent throughout all geometries."), null;
      o[d] === void 0 && (o[d] = []), o[d].push(h.morphAttributes[d]);
    }
    if (e) {
      let d;
      if (t) d = h.index.count;
      else if (h.attributes.position !== void 0) d = h.attributes.position.count;
      else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". The geometry must have either an index or a position attribute"), null;
      l.addGroup(c, d, u), c += d;
    }
  }
  if (t) {
    let u = 0;
    const h = [];
    for (let f = 0; f < n.length; ++f) {
      const d = n[f].index;
      for (let m = 0; m < d.count; ++m) h.push(d.getX(m) + u);
      u += n[f].attributes.position.count;
    }
    l.setIndex(h);
  }
  for (const u in r) {
    const h = xd(r[u]);
    if (!h) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + u + " attribute."), null;
    l.setAttribute(u, h);
  }
  for (const u in o) {
    const h = o[u][0].length;
    if (h === 0) break;
    l.morphAttributes = l.morphAttributes || {}, l.morphAttributes[u] = [];
    for (let f = 0; f < h; ++f) {
      const d = [];
      for (let _ = 0; _ < o[u].length; ++_) d.push(o[u][_][f]);
      const m = xd(d);
      if (!m) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + u + " morphAttribute."), null;
      l.morphAttributes[u].push(m);
    }
  }
  return l;
}
function xd(n) {
  let e, t, i, s = -1, r = 0;
  for (let c = 0; c < n.length; ++c) {
    const u = n[c];
    if (e === void 0 && (e = u.array.constructor), e !== u.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
    if (t === void 0 && (t = u.itemSize), t !== u.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
    if (i === void 0 && (i = u.normalized), i !== u.normalized) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
    if (s === -1 && (s = u.gpuType), s !== u.gpuType) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
    r += u.count * t;
  }
  const o = new e(r), a = new Ft(o, t, i);
  let l = 0;
  for (let c = 0; c < n.length; ++c) {
    const u = n[c];
    if (u.isInterleavedBufferAttribute) {
      const h = l / t;
      for (let f = 0, d = u.count; f < d; f++) for (let m = 0; m < t; m++) {
        const _ = u.getComponent(f, m);
        a.setComponent(f + h, m, _);
      }
    } else o.set(u.array, l);
    l += u.count * t;
  }
  return s !== void 0 && (a.gpuType = s), a;
}
function vd(n, e) {
  if (e === uv) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), n;
  if (e === kc || e === dm) {
    let t = n.getIndex();
    if (t === null) {
      const o = [], a = n.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++) o.push(l);
        n.setIndex(o), t = n.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), n;
    }
    const i = t.count - 2, s = [];
    if (e === kc) for (let o = 1; o <= i; o++) s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
    else for (let o = 0; o < i; o++) o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
    s.length / 3 !== i && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = n.clone();
    return r.setIndex(s), r.clearGroups(), r;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), n;
}
class ew extends cs {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new CE(t);
    }), this.register(function(t) {
      return new PE(t);
    }), this.register(function(t) {
      return new zE(t);
    }), this.register(function(t) {
      return new HE(t);
    }), this.register(function(t) {
      return new VE(t);
    }), this.register(function(t) {
      return new IE(t);
    }), this.register(function(t) {
      return new DE(t);
    }), this.register(function(t) {
      return new NE(t);
    }), this.register(function(t) {
      return new UE(t);
    }), this.register(function(t) {
      return new RE(t);
    }), this.register(function(t) {
      return new OE(t);
    }), this.register(function(t) {
      return new LE(t);
    }), this.register(function(t) {
      return new BE(t);
    }), this.register(function(t) {
      return new FE(t);
    }), this.register(function(t) {
      return new AE(t);
    }), this.register(function(t) {
      return new kE(t);
    }), this.register(function(t) {
      return new GE(t);
    });
  }
  load(e, t, i, s) {
    const r = this;
    let o;
    if (this.resourcePath !== "") o = this.resourcePath;
    else if (this.path !== "") {
      const c = Ir.extractUrlBase(e);
      o = Ir.resolveURL(c, this.path);
    } else o = Ir.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      s ? s(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new Wu(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, o, function(u) {
          t(u), r.manager.itemEnd(e);
        }, a);
      } catch (u) {
        a(u);
      }
    }, i, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, i, s) {
    let r;
    const o = {}, a = {}, l = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === Jm) {
      try {
        o[Je.KHR_BINARY_GLTF] = new WE(e);
      } catch (h) {
        s && s(h);
        return;
      }
      r = JSON.parse(o[Je.KHR_BINARY_GLTF].content);
    } else r = JSON.parse(l.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new iA(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](c);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[h.name] = h, o[h.name] = true;
    }
    if (r.extensionsUsed) for (let u = 0; u < r.extensionsUsed.length; ++u) {
      const h = r.extensionsUsed[u], f = r.extensionsRequired || [];
      switch (h) {
        case Je.KHR_MATERIALS_UNLIT:
          o[h] = new wE();
          break;
        case Je.KHR_DRACO_MESH_COMPRESSION:
          o[h] = new XE(r, this.dracoLoader);
          break;
        case Je.KHR_TEXTURE_TRANSFORM:
          o[h] = new YE();
          break;
        case Je.KHR_MESH_QUANTIZATION:
          o[h] = new qE();
          break;
        default:
          f.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
      }
    }
    c.setExtensions(o), c.setPlugins(a), c.parse(i, s);
  }
  parseAsync(e, t) {
    const i = this;
    return new Promise(function(s, r) {
      i.parse(e, t, s, r);
    });
  }
}
function EE() {
  let n = {};
  return { get: function(e) {
    return n[e];
  }, add: function(e, t) {
    n[e] = t;
  }, remove: function(e) {
    delete n[e];
  }, removeAll: function() {
    n = {};
  } };
}
const Je = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class AE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, i = "light:" + e;
    let s = t.cache.get(i);
    if (s) return s;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new Ue(16777215);
    l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], Jt);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new yy(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new xy(u), c.distance = h;
        break;
      case "spot":
        c = new gy(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), ni(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(i, s), s;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, i = this.parser, r = i.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return i._getNodeRef(t.cache, a, l);
    });
  }
}
class wE {
  constructor() {
    this.name = Je.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return oi;
  }
  extendParams(e, t, i) {
    const s = [];
    e.color = new Ue(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], Jt), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && s.push(i.assignTexture(e, "map", r.baseColorTexture, Dt));
    }
    return Promise.all(s);
  }
}
class RE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = s.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class CE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(i.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(i.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(i.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new fe(a, a);
    }
    return Promise.all(r);
  }
}
class PE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = s.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class LE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(i.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(i.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class IE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [];
    t.sheenColor = new Ue(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = s.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Jt);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(i.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Dt)), o.sheenRoughnessTexture !== void 0 && r.push(i.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class DE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(i.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class NE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(i.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ue().setRGB(a[0], a[1], a[2], Jt), Promise.all(r);
  }
}
class UE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = s.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class OE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(i.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ue().setRGB(a[0], a[1], a[2], Jt), o.specularColorTexture !== void 0 && r.push(i.assignTexture(t, "specularColorMap", o.specularColorTexture, Dt)), Promise.all(r);
  }
}
class FE {
  constructor(e) {
    this.parser = e, this.name = Je.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(i.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class BE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const i = this.parser.json.materials[e];
    return !i.extensions || !i.extensions[this.name] ? null : Xn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser, s = i.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(i.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class zE {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, i = t.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[this.name]) return null;
    const r = s.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, o);
  }
}
class HE {
  constructor(e) {
    this.parser = e, this.name = Je.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, i = this.parser, s = i.json, r = s.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = s.images[o.source];
    let l = i.textureLoader;
    if (a.uri) {
      const c = i.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return i.loadTextureImage(e, o.source, l);
  }
}
class VE {
  constructor(e) {
    this.parser = e, this.name = Je.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, i = this.parser, s = i.json, r = s.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = s.images[o.source];
    let l = i.textureLoader;
    if (a.uri) {
      const c = i.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return i.loadTextureImage(e, o.source, l);
  }
}
class kE {
  constructor(e) {
    this.name = Je.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, i = t.bufferViews[e];
    if (i.extensions && i.extensions[this.name]) {
      const s = i.extensions[this.name], r = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const l = s.byteOffset || 0, c = s.byteLength || 0, u = s.count, h = s.byteStride, f = new Uint8Array(a, l, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, h, f, s.mode, s.filter).then(function(d) {
          return d.buffer;
        }) : o.ready.then(function() {
          const d = new ArrayBuffer(u * h);
          return o.decodeGltfBuffer(new Uint8Array(d), u, h, f, s.mode, s.filter), d;
        });
      });
    } else return null;
  }
}
class GE {
  constructor(e) {
    this.name = Je.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, i = t.nodes[e];
    if (!i.extensions || !i.extensions[this.name] || i.mesh === void 0) return null;
    const s = t.meshes[i.mesh];
    for (const c of s.primitives) if (c.mode !== pn.TRIANGLES && c.mode !== pn.TRIANGLE_STRIP && c.mode !== pn.TRIANGLE_FAN && c.mode !== void 0) return null;
    const o = i.extensions[this.name].attributes, a = [], l = {};
    for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then((u) => (l[c] = u, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], f = c[0].count, d = [];
      for (const m of h) {
        const _ = new Ye(), g = new N(), p = new xn(), E = new N(1, 1, 1), b = new m0(m.geometry, m.material, f);
        for (let x = 0; x < f; x++) l.TRANSLATION && g.fromBufferAttribute(l.TRANSLATION, x), l.ROTATION && p.fromBufferAttribute(l.ROTATION, x), l.SCALE && E.fromBufferAttribute(l.SCALE, x), b.setMatrixAt(x, _.compose(g, p, E));
        for (const x in l) if (x === "_COLOR_0") {
          const P = l[x];
          b.instanceColor = new Wc(P.array, P.itemSize, P.normalized);
        } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && m.geometry.setAttribute(x, l[x]);
        ht.prototype.copy.call(b, m), this.parser.assignFinalMaterial(b), d.push(b);
      }
      return u.isGroup ? (u.clear(), u.add(...d), u) : d[0];
    }));
  }
}
const Jm = "glTF", _r = 12, yd = { JSON: 1313821514, BIN: 5130562 };
class WE {
  constructor(e) {
    this.name = Je.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, _r), i = new TextDecoder();
    if (this.header = { magic: i.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, true), length: t.getUint32(8, true) }, this.header.magic !== Jm) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - _r, r = new DataView(e, _r);
    let o = 0;
    for (; o < s; ) {
      const a = r.getUint32(o, true);
      o += 4;
      const l = r.getUint32(o, true);
      if (o += 4, l === yd.JSON) {
        const c = new Uint8Array(e, _r + o, a);
        this.content = i.decode(c);
      } else if (l === yd.BIN) {
        const c = _r + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class XE {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Je.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const i = this.json, s = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const u in o) {
      const h = Qc[u] || u.toLowerCase();
      a[h] = o[u];
    }
    for (const u in e.attributes) {
      const h = Qc[u] || u.toLowerCase();
      if (o[u] !== void 0) {
        const f = i.accessors[e.attributes[u]], d = Gs[f.componentType];
        c[h] = d.name, l[h] = f.normalized === true;
      }
    }
    return t.getDependency("bufferView", r).then(function(u) {
      return new Promise(function(h, f) {
        s.decodeDracoFile(u, function(d) {
          for (const m in d.attributes) {
            const _ = d.attributes[m], g = l[m];
            g !== void 0 && (_.normalized = g);
          }
          h(d);
        }, a, c, Jt, f);
      });
    });
  }
}
class YE {
  constructor() {
    this.name = Je.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class qE {
  constructor() {
    this.name = Je.KHR_MESH_QUANTIZATION;
  }
}
class Qm extends to {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, i = this.sampleValues, s = this.valueSize, r = e * s * 3 + s;
    for (let o = 0; o !== s; o++) t[o] = i[r + o];
    return t;
  }
  interpolate_(e, t, i, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = s - t, h = (i - t) / u, f = h * h, d = f * h, m = e * c, _ = m - c, g = -2 * d + 3 * f, p = d - f, E = 1 - g, b = p - f + h;
    for (let x = 0; x !== a; x++) {
      const P = o[_ + x + a], w = o[_ + x + l] * u, C = o[m + x + a], I = o[m + x] * u;
      r[x] = E * P + b * w + g * C + p * I;
    }
    return r;
  }
}
const jE = new xn();
class KE extends Qm {
  interpolate_(e, t, i, s) {
    const r = super.interpolate_(e, t, i, s);
    return jE.fromArray(r).normalize().toArray(r), r;
  }
}
const pn = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, Gs = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, Md = { 9728: Ot, 9729: nn, 9984: rm, 9985: $o, 9986: vr, 9987: ri }, Sd = { 33071: Ri, 33648: ma, 10497: js }, Vl = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, Qc = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, Si = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, ZE = { CUBICSPLINE: void 0, LINEAR: Xr, STEP: Wr }, kl = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function JE(n) {
  return n.DefaultMaterial === void 0 && (n.DefaultMaterial = new Gu({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: hi })), n.DefaultMaterial;
}
function Ji(n, e, t) {
  for (const i in t.extensions) n[i] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[i] = t.extensions[i]);
}
function ni(n, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(n.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function QE(n, e, t) {
  let i = false, s = false, r = false;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (i = true), h.NORMAL !== void 0 && (s = true), h.COLOR_0 !== void 0 && (r = true), i && s && r) break;
  }
  if (!i && !s && !r) return Promise.resolve(n);
  const o = [], a = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (i) {
      const f = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : n.attributes.position;
      o.push(f);
    }
    if (s) {
      const f = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : n.attributes.normal;
      a.push(f);
    }
    if (r) {
      const f = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : n.attributes.color;
      l.push(f);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l)]).then(function(c) {
    const u = c[0], h = c[1], f = c[2];
    return i && (n.morphAttributes.position = u), s && (n.morphAttributes.normal = h), r && (n.morphAttributes.color = f), n.morphTargetsRelative = true, n;
  });
}
function $E(n, e) {
  if (n.updateMorphTargets(), e.weights !== void 0) for (let t = 0, i = e.weights.length; t < i; t++) n.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (n.morphTargetInfluences.length === t.length) {
      n.morphTargetDictionary = {};
      for (let i = 0, s = t.length; i < s; i++) n.morphTargetDictionary[t[i]] = i;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function eA(n) {
  let e;
  const t = n.extensions && n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Gl(t.attributes) : e = n.indices + ":" + Gl(n.attributes) + ":" + n.mode, n.targets !== void 0) for (let i = 0, s = n.targets.length; i < s; i++) e += ":" + Gl(n.targets[i]);
  return e;
}
function Gl(n) {
  let e = "";
  const t = Object.keys(n).sort();
  for (let i = 0, s = t.length; i < s; i++) e += t[i] + ":" + n[t[i]] + ";";
  return e;
}
function $c(n) {
  switch (n) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function tA(n) {
  return n.search(/\.jpe?g($|\?)/i) > 0 || n.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : n.search(/\.webp($|\?)/i) > 0 || n.search(/^data\:image\/webp/) === 0 ? "image/webp" : n.search(/\.ktx2($|\?)/i) > 0 || n.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const nA = new Ye();
class iA {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new EE(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let i = false, s = -1, r = false, o = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      i = /^((?!chrome|android).)*safari/i.test(a) === true;
      const l = a.match(/Version\/(\d+)/);
      s = i && l ? parseInt(l[1], 10) : -1, r = a.indexOf("Firefox") > -1, o = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || i && s < 17 || r && o < 98 ? this.textureLoader = new py(this.options.manager) : this.textureLoader = new My(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Wu(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const i = this, s = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([i.getDependencies("scene"), i.getDependencies("animation"), i.getDependencies("camera")]);
    }).then(function(o) {
      const a = { scene: o[0][s.scene || 0], scenes: o[0], animations: o[1], cameras: o[2], asset: s.asset, parser: i, userData: {} };
      return Ji(r, a, s), ni(a, s), Promise.all(i._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        for (const l of a.scenes) l.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], i = this.json.meshes || [];
    for (let s = 0, r = t.length; s < r; s++) {
      const o = t[s].joints;
      for (let a = 0, l = o.length; a < l; a++) e[o[a]].isBone = true;
    }
    for (let s = 0, r = e.length; s < r; s++) {
      const o = e[s];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (i[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, i) {
    if (e.refs[t] <= 1) return i;
    const s = i.clone(), r = (o, a) => {
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, u] of o.children.entries()) r(u, a.children[c]);
    };
    return r(i, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      if (s) return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const r = e(t[s]);
      r && i.push(r);
    }
    return i;
  }
  getDependency(e, t) {
    const i = e + ":" + t;
    let s = this.cache.get(i);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !s) throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(i, s);
    }
    return s;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const i = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(s.map(function(r, o) {
        return i.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], i = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(r, o) {
      i.load(Ir.resolveURL(t.uri, s.path), r, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(i) {
      const s = t.byteLength || 0, r = t.byteOffset || 0;
      return i.slice(r, r + s);
    });
  }
  loadAccessor(e) {
    const t = this, i = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const o = Vl[s.type], a = Gs[s.componentType], l = s.normalized === true, c = new a(s.count * o);
      return Promise.resolve(new Ft(c, o, l));
    }
    const r = [];
    return s.bufferView !== void 0 ? r.push(this.getDependency("bufferView", s.bufferView)) : r.push(null), s.sparse !== void 0 && (r.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = Vl[s.type], c = Gs[s.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, f = s.byteOffset || 0, d = s.bufferView !== void 0 ? i.bufferViews[s.bufferView].byteStride : void 0, m = s.normalized === true;
      let _, g;
      if (d && d !== h) {
        const p = Math.floor(f / d), E = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + p + ":" + s.count;
        let b = t.cache.get(E);
        b || (_ = new c(a, p * d, s.count * d / u), b = new bm(_, d / u), t.cache.add(E, b)), g = new Nu(b, l, f % d / u, m);
      } else a === null ? _ = new c(s.count * l) : _ = new c(a, f, s.count * l), g = new Ft(_, l, m);
      if (s.sparse !== void 0) {
        const p = Vl.SCALAR, E = Gs[s.sparse.indices.componentType], b = s.sparse.indices.byteOffset || 0, x = s.sparse.values.byteOffset || 0, P = new E(o[1], b, s.sparse.count * p), w = new c(o[2], x, s.sparse.count * l);
        a !== null && (g = new Ft(g.array.slice(), g.itemSize, g.normalized)), g.normalized = false;
        for (let C = 0, I = P.length; C < I; C++) {
          const S = P[C];
          if (g.setX(S, w[C * l]), l >= 2 && g.setY(S, w[C * l + 1]), l >= 3 && g.setZ(S, w[C * l + 2]), l >= 4 && g.setW(S, w[C * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        g.normalized = m;
      }
      return g;
    });
  }
  loadTexture(e) {
    const t = this.json, i = this.options, r = t.textures[e].source, o = t.images[r];
    let a = this.textureLoader;
    if (o.uri) {
      const l = i.manager.getHandler(o.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, i) {
    const s = this, r = this.json, o = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, i).then(function(u) {
      u.flipY = false, u.name = o.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (u.name = a.uri);
      const f = (r.samplers || {})[o.sampler] || {};
      return u.magFilter = Md[f.magFilter] || nn, u.minFilter = Md[f.minFilter] || ri, u.wrapS = Sd[f.wrapS] || js, u.wrapT = Sd[f.wrapT] || js, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== Ot && u.minFilter !== nn, s.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const i = this, s = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((h) => h.clone());
    const o = s.images[e], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = false;
    if (o.bufferView !== void 0) l = i.getDependency("bufferView", o.bufferView).then(function(h) {
      c = true;
      const f = new Blob([h], { type: o.mimeType });
      return l = a.createObjectURL(f), l;
    });
    else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(h) {
      return new Promise(function(f, d) {
        let m = f;
        t.isImageBitmapLoader === true && (m = function(_) {
          const g = new At(_);
          g.needsUpdate = true, f(g);
        }), t.load(Ir.resolveURL(h, r.path), m, void 0, d);
      });
    }).then(function(h) {
      return c === true && a.revokeObjectURL(l), ni(h, o), h.userData.mimeType = o.mimeType || tA(o.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), h;
    });
    return this.sourceCache[e] = u, u;
  }
  assignTexture(e, t, i, s) {
    const r = this;
    return this.getDependency("texture", i.index).then(function(o) {
      if (!o) return null;
      if (i.texCoord !== void 0 && i.texCoord > 0 && (o = o.clone(), o.channel = i.texCoord), r.extensions[Je.KHR_TEXTURE_TRANSFORM]) {
        const a = i.extensions !== void 0 ? i.extensions[Je.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = r.associations.get(o);
          o = r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l);
        }
      }
      return s !== void 0 && (o.colorSpace = s), e[t] = o, o;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let i = e.material;
    const s = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + i.uuid;
      let l = this.cache.get(a);
      l || (l = new wm(), vn.prototype.copy.call(l, i), l.color.copy(i.color), l.map = i.map, l.sizeAttenuation = false, this.cache.add(a, l)), i = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + i.uuid;
      let l = this.cache.get(a);
      l || (l = new Ua(), vn.prototype.copy.call(l, i), l.color.copy(i.color), l.map = i.map, this.cache.add(a, l)), i = l;
    }
    if (s || r || o) {
      let a = "ClonedMaterial:" + i.uuid + ":";
      s && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = i.clone(), r && (l.vertexColors = true), o && (l.flatShading = true), s && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(i))), i = l;
    }
    e.material = i;
  }
  getMaterialType() {
    return Gu;
  }
  loadMaterial(e) {
    const t = this, i = this.json, s = this.extensions, r = i.materials[e];
    let o;
    const a = {}, l = r.extensions || {}, c = [];
    if (l[Je.KHR_MATERIALS_UNLIT]) {
      const h = s[Je.KHR_MATERIALS_UNLIT];
      o = h.getMaterialType(), c.push(h.extendParams(a, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (a.color = new Ue(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const f = h.baseColorFactor;
        a.color.setRGB(f[0], f[1], f[2], Jt), a.opacity = f[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, Dt)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), o = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === true && (a.side = Bn);
    const u = r.alphaMode || kl.OPAQUE;
    if (u === kl.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, u === kl.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== oi && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new fe(1, 1), r.normalTexture.scale !== void 0)) {
      const h = r.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    if (r.occlusionTexture !== void 0 && o !== oi && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== oi) {
      const h = r.emissiveFactor;
      a.emissive = new Ue().setRGB(h[0], h[1], h[2], Jt);
    }
    return r.emissiveTexture !== void 0 && o !== oi && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, Dt)), Promise.all(c).then(function() {
      const h = new o(a);
      return r.name && (h.name = r.name), ni(h, r), t.associations.set(h, { materials: e }), r.extensions && Ji(s, h, r), h;
    });
  }
  createUniqueName(e) {
    const t = ot.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, i = this.extensions, s = this.primitiveCache;
    function r(a) {
      return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return bd(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = eA(c), h = s[u];
      if (h) o.push(h.promise);
      else {
        let f;
        c.extensions && c.extensions[Je.KHR_DRACO_MESH_COMPRESSION] ? f = r(c) : f = bd(new Mt(), c, t), s[u] = { primitive: c, promise: f }, o.push(f);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const t = this, i = this.json, s = this.extensions, r = i.meshes[e], o = r.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const u = o[l].material === void 0 ? JE(this.cache) : this.getDependency("material", o[l].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
      for (let d = 0, m = u.length; d < m; d++) {
        const _ = u[d], g = o[d];
        let p;
        const E = c[d];
        if (g.mode === pn.TRIANGLES || g.mode === pn.TRIANGLE_STRIP || g.mode === pn.TRIANGLE_FAN || g.mode === void 0) p = r.isSkinnedMesh === true ? new f0(_, E) : new kt(_, E), p.isSkinnedMesh === true && p.normalizeSkinWeights(), g.mode === pn.TRIANGLE_STRIP ? p.geometry = vd(p.geometry, dm) : g.mode === pn.TRIANGLE_FAN && (p.geometry = vd(p.geometry, kc));
        else if (g.mode === pn.LINES) p = new Am(_, E);
        else if (g.mode === pn.LINE_STRIP) p = new qr(_, E);
        else if (g.mode === pn.LINE_LOOP) p = new x0(_, E);
        else if (g.mode === pn.POINTS) p = new v0(_, E);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && $E(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), ni(p, r), g.extensions && Ji(s, p, g), t.assignFinalMaterial(p), h.push(p);
      }
      for (let d = 0, m = h.length; d < m; d++) t.associations.set(h[d], { meshes: e, primitives: d });
      if (h.length === 1) return r.extensions && Ji(s, h[0], r), h[0];
      const f = new ss();
      r.extensions && Ji(s, f, r), t.associations.set(f, { meshes: e });
      for (let d = 0, m = h.length; d < m; d++) f.add(h[d]);
      return f;
    });
  }
  loadCamera(e) {
    let t;
    const i = this.json.cameras[e], s = i[i.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return i.type === "perspective" ? t = new tn(Fv.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : i.type === "orthographic" && (t = new Fa(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), i.name && (t.name = this.createUniqueName(i.name)), ni(t, i), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], i = [];
    for (let s = 0, r = t.joints.length; s < r; s++) i.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? i.push(this.getDependency("accessor", t.inverseBindMatrices)) : i.push(null), Promise.all(i).then(function(s) {
      const r = s.pop(), o = s, a = [], l = [];
      for (let c = 0, u = o.length; c < u; c++) {
        const h = o[c];
        if (h) {
          a.push(h);
          const f = new Ye();
          r !== null && f.fromArray(r.array, c * 16), l.push(f);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Uu(a, l);
    });
  }
  loadAnimation(e) {
    const t = this.json, i = this, s = t.animations[e], r = s.name ? s.name : "animation_" + e, o = [], a = [], l = [], c = [], u = [];
    for (let h = 0, f = s.channels.length; h < f; h++) {
      const d = s.channels[h], m = s.samplers[d.sampler], _ = d.target, g = _.node, p = s.parameters !== void 0 ? s.parameters[m.input] : m.input, E = s.parameters !== void 0 ? s.parameters[m.output] : m.output;
      _.node !== void 0 && (o.push(this.getDependency("node", g)), a.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", E)), c.push(m), u.push(_));
    }
    return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l), Promise.all(c), Promise.all(u)]).then(function(h) {
      const f = h[0], d = h[1], m = h[2], _ = h[3], g = h[4], p = [];
      for (let E = 0, b = f.length; E < b; E++) {
        const x = f[E], P = d[E], w = m[E], C = _[E], I = g[E];
        if (x === void 0) continue;
        x.updateMatrix && x.updateMatrix();
        const S = i._createAnimationTracks(x, P, w, C, I);
        if (S) for (let M = 0; M < S.length; M++) p.push(S[M]);
      }
      return new Kc(r, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, i = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : i.getDependency("mesh", s.mesh).then(function(r) {
      const o = i._getNodeRef(i.meshCache, s.mesh, r);
      return s.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh) for (let l = 0, c = s.weights.length; l < c; l++) a.morphTargetInfluences[l] = s.weights[l];
      }), o;
    });
  }
  loadNode(e) {
    const t = this.json, i = this, s = t.nodes[e], r = i._loadNodeShallow(e), o = [], a = s.children || [];
    for (let c = 0, u = a.length; c < u; c++) o.push(i.getDependency("node", a[c]));
    const l = s.skin === void 0 ? Promise.resolve(null) : i.getDependency("skin", s.skin);
    return Promise.all([r, Promise.all(o), l]).then(function(c) {
      const u = c[0], h = c[1], f = c[2];
      f !== null && u.traverse(function(d) {
        d.isSkinnedMesh && d.bind(f, nA);
      });
      for (let d = 0, m = h.length; d < m; d++) u.add(h[d]);
      return u;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, i = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], o = r.name ? s.createUniqueName(r.name) : "", a = [], l = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), r.camera !== void 0 && a.push(s.getDependency("camera", r.camera).then(function(c) {
      return s._getNodeRef(s.cameraCache, r.camera, c);
    })), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let u;
      if (r.isBone === true ? u = new Tm() : c.length > 1 ? u = new ss() : c.length === 1 ? u = c[0] : u = new ht(), u !== c[0]) for (let h = 0, f = c.length; h < f; h++) u.add(c[h]);
      if (r.name && (u.userData.name = r.name, u.name = o), ni(u, r), r.extensions && Ji(i, u, r), r.matrix !== void 0) {
        const h = new Ye();
        h.fromArray(r.matrix), u.applyMatrix4(h);
      } else r.translation !== void 0 && u.position.fromArray(r.translation), r.rotation !== void 0 && u.quaternion.fromArray(r.rotation), r.scale !== void 0 && u.scale.fromArray(r.scale);
      if (!s.associations.has(u)) s.associations.set(u, {});
      else if (r.mesh !== void 0 && s.meshCache.refs[r.mesh] > 1) {
        const h = s.associations.get(u);
        s.associations.set(u, { ...h });
      }
      return s.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, i = this.json.scenes[e], s = this, r = new ss();
    i.name && (r.name = s.createUniqueName(i.name)), ni(r, i), i.extensions && Ji(t, r, i);
    const o = i.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++) a.push(s.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let u = 0, h = l.length; u < h; u++) r.add(l[u]);
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [f, d] of s.associations) (f instanceof vn || f instanceof At) && h.set(f, d);
        return u.traverse((f) => {
          const d = s.associations.get(f);
          d != null && h.set(f, d);
        }), h;
      };
      return s.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, i, s, r) {
    const o = [], a = e.name ? e.name : e.uuid, l = [];
    Si[r.path] === Si.weights ? e.traverse(function(f) {
      f.morphTargetInfluences && l.push(f.name ? f.name : f.uuid);
    }) : l.push(a);
    let c;
    switch (Si[r.path]) {
      case Si.weights:
        c = Qs;
        break;
      case Si.rotation:
        c = $s;
        break;
      case Si.translation:
      case Si.scale:
        c = er;
        break;
      default:
        switch (i.itemSize) {
          case 1:
            c = Qs;
            break;
          case 2:
          case 3:
          default:
            c = er;
            break;
        }
        break;
    }
    const u = s.interpolation !== void 0 ? ZE[s.interpolation] : Xr, h = this._getArrayFromAccessor(i);
    for (let f = 0, d = l.length; f < d; f++) {
      const m = new c(l[f] + "." + Si[r.path], t.array, h, u);
      s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), o.push(m);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const i = $c(t.constructor), s = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++) s[r] = t[r] * i;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(i) {
      const s = this instanceof $s ? KE : Qm;
      return new s(this.times, this.values, this.getValueSize() / 3, i);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function sA(n, e, t) {
  const i = e.attributes, s = new pi();
  if (i.POSITION !== void 0) {
    const a = t.json.accessors[i.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (s.set(new N(l[0], l[1], l[2]), new N(c[0], c[1], c[2])), a.normalized) {
        const u = $c(Gs[a.componentType]);
        s.min.multiplyScalar(u), s.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const a = new N(), l = new N();
    for (let c = 0, u = r.length; c < u; c++) {
      const h = r[c];
      if (h.POSITION !== void 0) {
        const f = t.json.accessors[h.POSITION], d = f.min, m = f.max;
        if (d !== void 0 && m !== void 0) {
          if (l.setX(Math.max(Math.abs(d[0]), Math.abs(m[0]))), l.setY(Math.max(Math.abs(d[1]), Math.abs(m[1]))), l.setZ(Math.max(Math.abs(d[2]), Math.abs(m[2]))), f.normalized) {
            const _ = $c(Gs[f.componentType]);
            l.multiplyScalar(_);
          }
          a.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(a);
  }
  n.boundingBox = s;
  const o = new Gn();
  s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, n.boundingSphere = o;
}
function bd(n, e, t) {
  const i = e.attributes, s = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      n.setAttribute(a, l);
    });
  }
  for (const o in i) {
    const a = Qc[o] || o.toLowerCase();
    a in n.attributes || s.push(r(i[o], a));
  }
  if (e.indices !== void 0 && !n.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      n.setIndex(a);
    });
    s.push(o);
  }
  return $e.workingColorSpace !== Jt && "COLOR_0" in i && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`), ni(n, e), sA(n, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? QE(n, e.targets, t) : n;
  });
}
function tw(n) {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), i = n.clone();
  return $m(n, i, function(s, r) {
    e.set(r, s), t.set(s, r);
  }), i.traverse(function(s) {
    if (!s.isSkinnedMesh) return;
    const r = s, o = e.get(s), a = o.skeleton.bones;
    r.skeleton = o.skeleton.clone(), r.bindMatrix.copy(o.bindMatrix), r.skeleton.bones = a.map(function(l) {
      return t.get(l);
    }), r.bind(r.skeleton, r.bindMatrix);
  }), i;
}
function $m(n, e, t) {
  t(n, e);
  for (let i = 0; i < n.children.length; i++) $m(n.children[i], e.children[i], t);
}
export {
  rn as $,
  bA as A,
  NA as B,
  DA as C,
  UA as D,
  tw as E,
  en as F,
  ew as G,
  ov as H,
  FA as I,
  py as J,
  uy as K,
  av as L,
  Ye as M,
  fe as N,
  ht as O,
  sr as P,
  Ue as Q,
  ty as R,
  Bn as S,
  _A as T,
  fv as U,
  N as V,
  kn as W,
  ai as X,
  ks as Y,
  vE as Z,
  jA as _,
  Bp as a,
  Zo as a$,
  Ku as a0,
  Gh as a1,
  tn as a2,
  AA as a3,
  Sm as a4,
  qA as a5,
  Bx as a6,
  ZA as a7,
  JA as a8,
  Wh as a9,
  Oa as aA,
  Dt as aB,
  zA as aC,
  YA as aD,
  xn as aE,
  Ua as aF,
  Fu as aG,
  Mt as aH,
  Vu as aI,
  qr as aJ,
  Hm as aK,
  ku as aL,
  Ln as aM,
  Oi as aN,
  PA as aO,
  MA as aP,
  cA as aQ,
  SA as aR,
  G_ as aS,
  Va as aT,
  s_ as aU,
  Gt as aV,
  rA as aW,
  aA as aX,
  uA as aY,
  ex as aZ,
  zp as a_,
  QA as aa,
  KA as ab,
  Fv as ac,
  ss as ad,
  m0 as ae,
  eo as af,
  RA as ag,
  kt as ah,
  Pm as ai,
  D0 as aj,
  zm as ak,
  Am as al,
  xy as am,
  IA as an,
  et as ao,
  BA as ap,
  Nu as aq,
  wA as ar,
  pi as as,
  Gn as at,
  Fn as au,
  _e as av,
  it as aw,
  VA as ax,
  Cm as ay,
  oi as az,
  tc as b,
  La as b0,
  x_ as b1,
  Ft as b2,
  hA as b3,
  fA as b4,
  Gu as b5,
  $A as b6,
  Fa as b7,
  XA as b8,
  vA as b9,
  CA as ba,
  Ot as bb,
  Ni as bc,
  Rm as bd,
  LA as be,
  yy as bf,
  WA as bg,
  GA as bh,
  kA as bi,
  Wu as bj,
  TA as bk,
  EA as bl,
  HA as bm,
  $r as bn,
  $i as bo,
  mA as c,
  gA as d,
  oA as e,
  $_ as f,
  Zt as g,
  dA as h,
  lA as i,
  k_ as j,
  nt as k,
  jg as l,
  ru as m,
  su as n,
  ec as o,
  hu as p,
  Ka as q,
  pA as r,
  Bg as s,
  xg as t,
  Vg as u,
  yA as v,
  Jg as w,
  fp as x,
  mp as y,
  xA as z
};
