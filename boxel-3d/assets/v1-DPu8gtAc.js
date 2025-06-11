import { B as hs, C as mo, D as vo, G as go, E as bo, L as ms, H as yo, I as xo, J as Kr, K as wo, M as It, V as J, O as Yt, N as Ne, P as So, Q as Ft, W as pt, R as Co, S as Li, U as _o, X as vs, Y as Wn, Z as Eo, $ as Lt, a0 as ko, a1 as To, a2 as Jr, a3 as ea, a4 as Po, a5 as Mo, a6 as Lo, a7 as Oo, a8 as Ao, a9 as Ro, aa as Do, ab as Io, ac as Xn, ad as St, ae as Bo, af as Ce, ag as At, ah as Z, ai as zo, aj as $o, ak as No, al as jo, am as Fo, an as Uo, ao as Oi, ap as Dn, aq as Ot, ar as qo, as as Zn, at as ta, au as bi, av as yi, aw as ei, ax as Ho, ay as Vo, az as Yn, aA as ia, aB as Go, aC as In, aD as Wo, aE as Ye, aF as Xo, aG as Be, aH as gs, aI as si, aJ as at, aK as Ut, aL as Zo, aM as Yo, aN as Qo, aO as Ko, e as W, c as z, d as Y, u as A, o as I, a as E, x as pe, y as he, t as G, j as Ee, g as ae, F as me, h as Oe, m as ee, aP as Rt, b as be, aQ as na, aR as Bn, w as Bt, aS as zn, aT as $n, T as zt, aU as Qn, f as yt, _ as $t, n as Qt, i as Qe, v as Jo, l as sa, aV as eu, z as st, q as tu, A as iu } from "./SkeletonUtils-ChRJV-qR.js";
import { c as bs, U as Nt, g as ra, S as nu, u as ye, a as su, A as ru, i as au } from "./i18n-5yZ2xy_o.js";
import { G as aa, E as ou, T as oa, O as uu } from "./OrbitControls-CiekcL7P.js";
function lu(f, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const s in n) if (s !== "default" && !(s in f)) {
        const i = Object.getOwnPropertyDescriptor(n, s);
        i && Object.defineProperty(f, s, i.get ? i : { enumerable: true, get: () => n[s] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }));
}
var xi = { exports: {} };
/*!
* matter-js 0.19.0 by @liabru
* http://brm.io/matter-js/
* License MIT
* 
* The MIT License (MIT)
* 
* Copyright (c) Liam Brummitt and contributors.
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
var cu = xi.exports, ys;
function du() {
  return ys || (ys = 1, function(f, e) {
    (function(n, s) {
      f.exports = s();
    })(cu, function() {
      return function(t) {
        var n = {};
        function s(i) {
          if (n[i]) return n[i].exports;
          var a = n[i] = { i, l: false, exports: {} };
          return t[i].call(a.exports, a, a.exports, s), a.l = true, a.exports;
        }
        return s.m = t, s.c = n, s.d = function(i, a, u) {
          s.o(i, a) || Object.defineProperty(i, a, { enumerable: true, get: u });
        }, s.r = function(i) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: true });
        }, s.t = function(i, a) {
          if (a & 1 && (i = s(i)), a & 8 || a & 4 && typeof i == "object" && i && i.__esModule) return i;
          var u = /* @__PURE__ */ Object.create(null);
          if (s.r(u), Object.defineProperty(u, "default", { enumerable: true, value: i }), a & 2 && typeof i != "string") for (var c in i) s.d(u, c, function(p) {
            return i[p];
          }.bind(null, c));
          return u;
        }, s.n = function(i) {
          var a = i && i.__esModule ? function() {
            return i.default;
          } : function() {
            return i;
          };
          return s.d(a, "a", a), a;
        }, s.o = function(i, a) {
          return Object.prototype.hasOwnProperty.call(i, a);
        }, s.p = "", s(s.s = 20);
      }([function(t, n) {
        var s = {};
        t.exports = s, function() {
          s._baseDelta = 1e3 / 60, s._nextId = 0, s._seed = 0, s._nowStartTime = +/* @__PURE__ */ new Date(), s._warnedOnce = {}, s._decomp = null, s.extend = function(a, u) {
            var c, p;
            typeof u == "boolean" ? (c = 2, p = u) : (c = 1, p = true);
            for (var l = c; l < arguments.length; l++) {
              var m = arguments[l];
              if (m) for (var o in m) p && m[o] && m[o].constructor === Object && (!a[o] || a[o].constructor === Object) ? (a[o] = a[o] || {}, s.extend(a[o], p, m[o])) : a[o] = m[o];
            }
            return a;
          }, s.clone = function(a, u) {
            return s.extend({}, u, a);
          }, s.keys = function(a) {
            if (Object.keys) return Object.keys(a);
            var u = [];
            for (var c in a) u.push(c);
            return u;
          }, s.values = function(a) {
            var u = [];
            if (Object.keys) {
              for (var c = Object.keys(a), p = 0; p < c.length; p++) u.push(a[c[p]]);
              return u;
            }
            for (var l in a) u.push(a[l]);
            return u;
          }, s.get = function(a, u, c, p) {
            u = u.split(".").slice(c, p);
            for (var l = 0; l < u.length; l += 1) a = a[u[l]];
            return a;
          }, s.set = function(a, u, c, p, l) {
            var m = u.split(".").slice(p, l);
            return s.get(a, u, 0, -1)[m[m.length - 1]] = c, c;
          }, s.shuffle = function(a) {
            for (var u = a.length - 1; u > 0; u--) {
              var c = Math.floor(s.random() * (u + 1)), p = a[u];
              a[u] = a[c], a[c] = p;
            }
            return a;
          }, s.choose = function(a) {
            return a[Math.floor(s.random() * a.length)];
          }, s.isElement = function(a) {
            return typeof HTMLElement < "u" ? a instanceof HTMLElement : !!(a && a.nodeType && a.nodeName);
          }, s.isArray = function(a) {
            return Object.prototype.toString.call(a) === "[object Array]";
          }, s.isFunction = function(a) {
            return typeof a == "function";
          }, s.isPlainObject = function(a) {
            return typeof a == "object" && a.constructor === Object;
          }, s.isString = function(a) {
            return toString.call(a) === "[object String]";
          }, s.clamp = function(a, u, c) {
            return a < u ? u : a > c ? c : a;
          }, s.sign = function(a) {
            return a < 0 ? -1 : 1;
          }, s.now = function() {
            if (typeof window < "u" && window.performance) {
              if (window.performance.now) return window.performance.now();
              if (window.performance.webkitNow) return window.performance.webkitNow();
            }
            return Date.now ? Date.now() : /* @__PURE__ */ new Date() - s._nowStartTime;
          }, s.random = function(a, u) {
            return a = typeof a < "u" ? a : 0, u = typeof u < "u" ? u : 1, a + i() * (u - a);
          };
          var i = function() {
            return s._seed = (s._seed * 9301 + 49297) % 233280, s._seed / 233280;
          };
          s.colorToNumber = function(a) {
            return a = a.replace("#", ""), a.length == 3 && (a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2)), parseInt(a, 16);
          }, s.logLevel = 1, s.log = function() {
            console && s.logLevel > 0 && s.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
          }, s.info = function() {
            console && s.logLevel > 0 && s.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
          }, s.warn = function() {
            console && s.logLevel > 0 && s.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
          }, s.warnOnce = function() {
            var a = Array.prototype.slice.call(arguments).join(" ");
            s._warnedOnce[a] || (s.warn(a), s._warnedOnce[a] = true);
          }, s.deprecated = function(a, u, c) {
            a[u] = s.chain(function() {
              s.warnOnce("\u{1F505} deprecated \u{1F505}", c);
            }, a[u]);
          }, s.nextId = function() {
            return s._nextId++;
          }, s.indexOf = function(a, u) {
            if (a.indexOf) return a.indexOf(u);
            for (var c = 0; c < a.length; c++) if (a[c] === u) return c;
            return -1;
          }, s.map = function(a, u) {
            if (a.map) return a.map(u);
            for (var c = [], p = 0; p < a.length; p += 1) c.push(u(a[p]));
            return c;
          }, s.topologicalSort = function(a) {
            var u = [], c = [], p = [];
            for (var l in a) !c[l] && !p[l] && s._topologicalSort(l, c, p, a, u);
            return u;
          }, s._topologicalSort = function(a, u, c, p, l) {
            var m = p[a] || [];
            c[a] = true;
            for (var o = 0; o < m.length; o += 1) {
              var r = m[o];
              c[r] || u[r] || s._topologicalSort(r, u, c, p, l);
            }
            c[a] = false, u[a] = true, l.push(a);
          }, s.chain = function() {
            for (var a = [], u = 0; u < arguments.length; u += 1) {
              var c = arguments[u];
              c._chained ? a.push.apply(a, c._chained) : a.push(c);
            }
            var p = function() {
              for (var l, m = new Array(arguments.length), o = 0, r = arguments.length; o < r; o++) m[o] = arguments[o];
              for (o = 0; o < a.length; o += 1) {
                var d = a[o].apply(l, m);
                typeof d < "u" && (l = d);
              }
              return l;
            };
            return p._chained = a, p;
          }, s.chainPathBefore = function(a, u, c) {
            return s.set(a, u, s.chain(c, s.get(a, u)));
          }, s.chainPathAfter = function(a, u, c) {
            return s.set(a, u, s.chain(s.get(a, u), c));
          }, s.setDecomp = function(a) {
            s._decomp = a;
          }, s.getDecomp = function() {
            var a = s._decomp;
            try {
              !a && typeof window < "u" && (a = window.decomp), !a && typeof bs < "u" && (a = bs.decomp);
            } catch {
              a = null;
            }
            return a;
          };
        }();
      }, function(t, n) {
        var s = {};
        t.exports = s, function() {
          s.create = function(i) {
            var a = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
            return i && s.update(a, i), a;
          }, s.update = function(i, a, u) {
            i.min.x = 1 / 0, i.max.x = -1 / 0, i.min.y = 1 / 0, i.max.y = -1 / 0;
            for (var c = 0; c < a.length; c++) {
              var p = a[c];
              p.x > i.max.x && (i.max.x = p.x), p.x < i.min.x && (i.min.x = p.x), p.y > i.max.y && (i.max.y = p.y), p.y < i.min.y && (i.min.y = p.y);
            }
            u && (u.x > 0 ? i.max.x += u.x : i.min.x += u.x, u.y > 0 ? i.max.y += u.y : i.min.y += u.y);
          }, s.contains = function(i, a) {
            return a.x >= i.min.x && a.x <= i.max.x && a.y >= i.min.y && a.y <= i.max.y;
          }, s.overlaps = function(i, a) {
            return i.min.x <= a.max.x && i.max.x >= a.min.x && i.max.y >= a.min.y && i.min.y <= a.max.y;
          }, s.translate = function(i, a) {
            i.min.x += a.x, i.max.x += a.x, i.min.y += a.y, i.max.y += a.y;
          }, s.shift = function(i, a) {
            var u = i.max.x - i.min.x, c = i.max.y - i.min.y;
            i.min.x = a.x, i.max.x = a.x + u, i.min.y = a.y, i.max.y = a.y + c;
          };
        }();
      }, function(t, n) {
        var s = {};
        t.exports = s, function() {
          s.create = function(i, a) {
            return { x: i || 0, y: a || 0 };
          }, s.clone = function(i) {
            return { x: i.x, y: i.y };
          }, s.magnitude = function(i) {
            return Math.sqrt(i.x * i.x + i.y * i.y);
          }, s.magnitudeSquared = function(i) {
            return i.x * i.x + i.y * i.y;
          }, s.rotate = function(i, a, u) {
            var c = Math.cos(a), p = Math.sin(a);
            u || (u = {});
            var l = i.x * c - i.y * p;
            return u.y = i.x * p + i.y * c, u.x = l, u;
          }, s.rotateAbout = function(i, a, u, c) {
            var p = Math.cos(a), l = Math.sin(a);
            c || (c = {});
            var m = u.x + ((i.x - u.x) * p - (i.y - u.y) * l);
            return c.y = u.y + ((i.x - u.x) * l + (i.y - u.y) * p), c.x = m, c;
          }, s.normalise = function(i) {
            var a = s.magnitude(i);
            return a === 0 ? { x: 0, y: 0 } : { x: i.x / a, y: i.y / a };
          }, s.dot = function(i, a) {
            return i.x * a.x + i.y * a.y;
          }, s.cross = function(i, a) {
            return i.x * a.y - i.y * a.x;
          }, s.cross3 = function(i, a, u) {
            return (a.x - i.x) * (u.y - i.y) - (a.y - i.y) * (u.x - i.x);
          }, s.add = function(i, a, u) {
            return u || (u = {}), u.x = i.x + a.x, u.y = i.y + a.y, u;
          }, s.sub = function(i, a, u) {
            return u || (u = {}), u.x = i.x - a.x, u.y = i.y - a.y, u;
          }, s.mult = function(i, a) {
            return { x: i.x * a, y: i.y * a };
          }, s.div = function(i, a) {
            return { x: i.x / a, y: i.y / a };
          }, s.perp = function(i, a) {
            return a = a === true ? -1 : 1, { x: a * -i.y, y: a * i.x };
          }, s.neg = function(i) {
            return { x: -i.x, y: -i.y };
          }, s.angle = function(i, a) {
            return Math.atan2(a.y - i.y, a.x - i.x);
          }, s._temp = [s.create(), s.create(), s.create(), s.create(), s.create(), s.create()];
        }();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(2), u = s(0);
        (function() {
          i.create = function(c, p) {
            for (var l = [], m = 0; m < c.length; m++) {
              var o = c[m], r = { x: o.x, y: o.y, index: m, body: p, isInternal: false };
              l.push(r);
            }
            return l;
          }, i.fromPath = function(c, p) {
            var l = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, m = [];
            return c.replace(l, function(o, r, d) {
              m.push({ x: parseFloat(r), y: parseFloat(d) });
            }), i.create(m, p);
          }, i.centre = function(c) {
            for (var p = i.area(c, true), l = { x: 0, y: 0 }, m, o, r, d = 0; d < c.length; d++) r = (d + 1) % c.length, m = a.cross(c[d], c[r]), o = a.mult(a.add(c[d], c[r]), m), l = a.add(l, o);
            return a.div(l, 6 * p);
          }, i.mean = function(c) {
            for (var p = { x: 0, y: 0 }, l = 0; l < c.length; l++) p.x += c[l].x, p.y += c[l].y;
            return a.div(p, c.length);
          }, i.area = function(c, p) {
            for (var l = 0, m = c.length - 1, o = 0; o < c.length; o++) l += (c[m].x - c[o].x) * (c[m].y + c[o].y), m = o;
            return p ? l / 2 : Math.abs(l) / 2;
          }, i.inertia = function(c, p) {
            for (var l = 0, m = 0, o = c, r, d, h = 0; h < o.length; h++) d = (h + 1) % o.length, r = Math.abs(a.cross(o[d], o[h])), l += r * (a.dot(o[d], o[d]) + a.dot(o[d], o[h]) + a.dot(o[h], o[h])), m += r;
            return p / 6 * (l / m);
          }, i.translate = function(c, p, l) {
            l = typeof l < "u" ? l : 1;
            var m = c.length, o = p.x * l, r = p.y * l, d;
            for (d = 0; d < m; d++) c[d].x += o, c[d].y += r;
            return c;
          }, i.rotate = function(c, p, l) {
            if (p !== 0) {
              var m = Math.cos(p), o = Math.sin(p), r = l.x, d = l.y, h = c.length, v, g, x, w;
              for (w = 0; w < h; w++) v = c[w], g = v.x - r, x = v.y - d, v.x = r + (g * m - x * o), v.y = d + (g * o + x * m);
              return c;
            }
          }, i.contains = function(c, p) {
            for (var l = p.x, m = p.y, o = c.length, r = c[o - 1], d, h = 0; h < o; h++) {
              if (d = c[h], (l - r.x) * (d.y - r.y) + (m - r.y) * (r.x - d.x) > 0) return false;
              r = d;
            }
            return true;
          }, i.scale = function(c, p, l, m) {
            if (p === 1 && l === 1) return c;
            m = m || i.centre(c);
            for (var o, r, d = 0; d < c.length; d++) o = c[d], r = a.sub(o, m), c[d].x = m.x + r.x * p, c[d].y = m.y + r.y * l;
            return c;
          }, i.chamfer = function(c, p, l, m, o) {
            typeof p == "number" ? p = [p] : p = p || [8], l = typeof l < "u" ? l : -1, m = m || 2, o = o || 14;
            for (var r = [], d = 0; d < c.length; d++) {
              var h = c[d - 1 >= 0 ? d - 1 : c.length - 1], v = c[d], g = c[(d + 1) % c.length], x = p[d < p.length ? d : p.length - 1];
              if (x === 0) {
                r.push(v);
                continue;
              }
              var w = a.normalise({ x: v.y - h.y, y: h.x - v.x }), y = a.normalise({ x: g.y - v.y, y: v.x - g.x }), b = Math.sqrt(2 * Math.pow(x, 2)), S = a.mult(u.clone(w), x), C = a.normalise(a.mult(a.add(w, y), 0.5)), _ = a.sub(v, a.mult(C, b)), P = l;
              l === -1 && (P = Math.pow(x, 0.32) * 1.75), P = u.clamp(P, m, o), P % 2 === 1 && (P += 1);
              for (var M = Math.acos(a.dot(w, y)), k = M / P, T = 0; T < P; T++) r.push(a.add(a.rotate(S, k * T), _));
            }
            return r;
          }, i.clockwiseSort = function(c) {
            var p = i.mean(c);
            return c.sort(function(l, m) {
              return a.angle(p, l) - a.angle(p, m);
            }), c;
          }, i.isConvex = function(c) {
            var p = 0, l = c.length, m, o, r, d;
            if (l < 3) return null;
            for (m = 0; m < l; m++) if (o = (m + 1) % l, r = (m + 2) % l, d = (c[o].x - c[m].x) * (c[r].y - c[o].y), d -= (c[o].y - c[m].y) * (c[r].x - c[o].x), d < 0 ? p |= 1 : d > 0 && (p |= 2), p === 3) return false;
            return p !== 0 ? true : null;
          }, i.hull = function(c) {
            var p = [], l = [], m, o;
            for (c = c.slice(0), c.sort(function(r, d) {
              var h = r.x - d.x;
              return h !== 0 ? h : r.y - d.y;
            }), o = 0; o < c.length; o += 1) {
              for (m = c[o]; l.length >= 2 && a.cross3(l[l.length - 2], l[l.length - 1], m) <= 0; ) l.pop();
              l.push(m);
            }
            for (o = c.length - 1; o >= 0; o -= 1) {
              for (m = c[o]; p.length >= 2 && a.cross3(p[p.length - 2], p[p.length - 1], m) <= 0; ) p.pop();
              p.push(m);
            }
            return p.pop(), l.pop(), p.concat(l);
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(3), u = s(2), c = s(7), p = s(0), l = s(1), m = s(11);
        (function() {
          i._timeCorrection = true, i._inertiaScale = 4, i._nextCollidingGroupId = 1, i._nextNonCollidingGroupId = -1, i._nextCategory = 1, i._baseDelta = 1e3 / 60, i.create = function(r) {
            var d = { id: p.nextId(), type: "body", label: "Body", parts: [], plugin: {}, angle: 0, vertices: a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"), position: { x: 0, y: 0 }, force: { x: 0, y: 0 }, torque: 0, positionImpulse: { x: 0, y: 0 }, constraintImpulse: { x: 0, y: 0, angle: 0 }, totalContacts: 0, speed: 0, angularSpeed: 0, velocity: { x: 0, y: 0 }, angularVelocity: 0, isSensor: false, isStatic: false, isSleeping: false, motion: 0, sleepThreshold: 60, density: 1e-3, restitution: 0, friction: 0.1, frictionStatic: 0.5, frictionAir: 0.01, collisionFilter: { category: 1, mask: 4294967295, group: 0 }, slop: 0.05, timeScale: 1, render: { visible: true, opacity: 1, strokeStyle: null, fillStyle: null, lineWidth: null, sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 } }, events: null, bounds: null, chamfer: null, circleRadius: 0, positionPrev: null, anglePrev: 0, parent: null, axes: null, area: 0, mass: 0, inertia: 0, deltaTime: 16.666666666666668, _original: null }, h = p.extend(d, r);
            return o(h, r), h;
          }, i.nextGroup = function(r) {
            return r ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++;
          }, i.nextCategory = function() {
            return i._nextCategory = i._nextCategory << 1, i._nextCategory;
          };
          var o = function(r, d) {
            d = d || {}, i.set(r, { bounds: r.bounds || l.create(r.vertices), positionPrev: r.positionPrev || u.clone(r.position), anglePrev: r.anglePrev || r.angle, vertices: r.vertices, parts: r.parts || [r], isStatic: r.isStatic, isSleeping: r.isSleeping, parent: r.parent || r }), a.rotate(r.vertices, r.angle, r.position), m.rotate(r.axes, r.angle), l.update(r.bounds, r.vertices, r.velocity), i.set(r, { axes: d.axes || r.axes, area: d.area || r.area, mass: d.mass || r.mass, inertia: d.inertia || r.inertia });
            var h = r.isStatic ? "#14151f" : p.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), v = r.isStatic ? "#555" : "#ccc", g = r.isStatic && r.render.fillStyle === null ? 1 : 0;
            r.render.fillStyle = r.render.fillStyle || h, r.render.strokeStyle = r.render.strokeStyle || v, r.render.lineWidth = r.render.lineWidth || g, r.render.sprite.xOffset += -(r.bounds.min.x - r.position.x) / (r.bounds.max.x - r.bounds.min.x), r.render.sprite.yOffset += -(r.bounds.min.y - r.position.y) / (r.bounds.max.y - r.bounds.min.y);
          };
          i.set = function(r, d, h) {
            var v;
            typeof d == "string" && (v = d, d = {}, d[v] = h);
            for (v in d) if (Object.prototype.hasOwnProperty.call(d, v)) switch (h = d[v], v) {
              case "isStatic":
                i.setStatic(r, h);
                break;
              case "isSleeping":
                c.set(r, h);
                break;
              case "mass":
                i.setMass(r, h);
                break;
              case "density":
                i.setDensity(r, h);
                break;
              case "inertia":
                i.setInertia(r, h);
                break;
              case "vertices":
                i.setVertices(r, h);
                break;
              case "position":
                i.setPosition(r, h);
                break;
              case "angle":
                i.setAngle(r, h);
                break;
              case "velocity":
                i.setVelocity(r, h);
                break;
              case "angularVelocity":
                i.setAngularVelocity(r, h);
                break;
              case "speed":
                i.setSpeed(r, h);
                break;
              case "angularSpeed":
                i.setAngularSpeed(r, h);
                break;
              case "parts":
                i.setParts(r, h);
                break;
              case "centre":
                i.setCentre(r, h);
                break;
              default:
                r[v] = h;
            }
          }, i.setStatic = function(r, d) {
            for (var h = 0; h < r.parts.length; h++) {
              var v = r.parts[h];
              v.isStatic = d, d ? (v._original = { restitution: v.restitution, friction: v.friction, mass: v.mass, inertia: v.inertia, density: v.density, inverseMass: v.inverseMass, inverseInertia: v.inverseInertia }, v.restitution = 0, v.friction = 1, v.mass = v.inertia = v.density = 1 / 0, v.inverseMass = v.inverseInertia = 0, v.positionPrev.x = v.position.x, v.positionPrev.y = v.position.y, v.anglePrev = v.angle, v.angularVelocity = 0, v.speed = 0, v.angularSpeed = 0, v.motion = 0) : v._original && (v.restitution = v._original.restitution, v.friction = v._original.friction, v.mass = v._original.mass, v.inertia = v._original.inertia, v.density = v._original.density, v.inverseMass = v._original.inverseMass, v.inverseInertia = v._original.inverseInertia, v._original = null);
            }
          }, i.setMass = function(r, d) {
            var h = r.inertia / (r.mass / 6);
            r.inertia = h * (d / 6), r.inverseInertia = 1 / r.inertia, r.mass = d, r.inverseMass = 1 / r.mass, r.density = r.mass / r.area;
          }, i.setDensity = function(r, d) {
            i.setMass(r, d * r.area), r.density = d;
          }, i.setInertia = function(r, d) {
            r.inertia = d, r.inverseInertia = 1 / r.inertia;
          }, i.setVertices = function(r, d) {
            d[0].body === r ? r.vertices = d : r.vertices = a.create(d, r), r.axes = m.fromVertices(r.vertices), r.area = a.area(r.vertices), i.setMass(r, r.density * r.area);
            var h = a.centre(r.vertices);
            a.translate(r.vertices, h, -1), i.setInertia(r, i._inertiaScale * a.inertia(r.vertices, r.mass)), a.translate(r.vertices, r.position), l.update(r.bounds, r.vertices, r.velocity);
          }, i.setParts = function(r, d, h) {
            var v;
            for (d = d.slice(0), r.parts.length = 0, r.parts.push(r), r.parent = r, v = 0; v < d.length; v++) {
              var g = d[v];
              g !== r && (g.parent = r, r.parts.push(g));
            }
            if (r.parts.length !== 1) {
              if (h = typeof h < "u" ? h : true, h) {
                var x = [];
                for (v = 0; v < d.length; v++) x = x.concat(d[v].vertices);
                a.clockwiseSort(x);
                var w = a.hull(x), y = a.centre(w);
                i.setVertices(r, w), a.translate(r.vertices, y);
              }
              var b = i._totalProperties(r);
              r.area = b.area, r.parent = r, r.position.x = b.centre.x, r.position.y = b.centre.y, r.positionPrev.x = b.centre.x, r.positionPrev.y = b.centre.y, i.setMass(r, b.mass), i.setInertia(r, b.inertia), i.setPosition(r, b.centre);
            }
          }, i.setCentre = function(r, d, h) {
            h ? (r.positionPrev.x += d.x, r.positionPrev.y += d.y, r.position.x += d.x, r.position.y += d.y) : (r.positionPrev.x = d.x - (r.position.x - r.positionPrev.x), r.positionPrev.y = d.y - (r.position.y - r.positionPrev.y), r.position.x = d.x, r.position.y = d.y);
          }, i.setPosition = function(r, d, h) {
            var v = u.sub(d, r.position);
            h ? (r.positionPrev.x = r.position.x, r.positionPrev.y = r.position.y, r.velocity.x = v.x, r.velocity.y = v.y, r.speed = u.magnitude(v)) : (r.positionPrev.x += v.x, r.positionPrev.y += v.y);
            for (var g = 0; g < r.parts.length; g++) {
              var x = r.parts[g];
              x.position.x += v.x, x.position.y += v.y, a.translate(x.vertices, v), l.update(x.bounds, x.vertices, r.velocity);
            }
          }, i.setAngle = function(r, d, h) {
            var v = d - r.angle;
            h ? (r.anglePrev = r.angle, r.angularVelocity = v, r.angularSpeed = Math.abs(v)) : r.anglePrev += v;
            for (var g = 0; g < r.parts.length; g++) {
              var x = r.parts[g];
              x.angle += v, a.rotate(x.vertices, v, r.position), m.rotate(x.axes, v), l.update(x.bounds, x.vertices, r.velocity), g > 0 && u.rotateAbout(x.position, v, r.position, x.position);
            }
          }, i.setVelocity = function(r, d) {
            var h = r.deltaTime / i._baseDelta;
            r.positionPrev.x = r.position.x - d.x * h, r.positionPrev.y = r.position.y - d.y * h, r.velocity.x = (r.position.x - r.positionPrev.x) / h, r.velocity.y = (r.position.y - r.positionPrev.y) / h, r.speed = u.magnitude(r.velocity);
          }, i.getVelocity = function(r) {
            var d = i._baseDelta / r.deltaTime;
            return { x: (r.position.x - r.positionPrev.x) * d, y: (r.position.y - r.positionPrev.y) * d };
          }, i.getSpeed = function(r) {
            return u.magnitude(i.getVelocity(r));
          }, i.setSpeed = function(r, d) {
            i.setVelocity(r, u.mult(u.normalise(i.getVelocity(r)), d));
          }, i.setAngularVelocity = function(r, d) {
            var h = r.deltaTime / i._baseDelta;
            r.anglePrev = r.angle - d * h, r.angularVelocity = (r.angle - r.anglePrev) / h, r.angularSpeed = Math.abs(r.angularVelocity);
          }, i.getAngularVelocity = function(r) {
            return (r.angle - r.anglePrev) * i._baseDelta / r.deltaTime;
          }, i.getAngularSpeed = function(r) {
            return Math.abs(i.getAngularVelocity(r));
          }, i.setAngularSpeed = function(r, d) {
            i.setAngularVelocity(r, p.sign(i.getAngularVelocity(r)) * d);
          }, i.translate = function(r, d, h) {
            i.setPosition(r, u.add(r.position, d), h);
          }, i.rotate = function(r, d, h, v) {
            if (!h) i.setAngle(r, r.angle + d, v);
            else {
              var g = Math.cos(d), x = Math.sin(d), w = r.position.x - h.x, y = r.position.y - h.y;
              i.setPosition(r, { x: h.x + (w * g - y * x), y: h.y + (w * x + y * g) }, v), i.setAngle(r, r.angle + d, v);
            }
          }, i.scale = function(r, d, h, v) {
            var g = 0, x = 0;
            v = v || r.position;
            for (var w = 0; w < r.parts.length; w++) {
              var y = r.parts[w];
              a.scale(y.vertices, d, h, v), y.axes = m.fromVertices(y.vertices), y.area = a.area(y.vertices), i.setMass(y, r.density * y.area), a.translate(y.vertices, { x: -y.position.x, y: -y.position.y }), i.setInertia(y, i._inertiaScale * a.inertia(y.vertices, y.mass)), a.translate(y.vertices, { x: y.position.x, y: y.position.y }), w > 0 && (g += y.area, x += y.inertia), y.position.x = v.x + (y.position.x - v.x) * d, y.position.y = v.y + (y.position.y - v.y) * h, l.update(y.bounds, y.vertices, r.velocity);
            }
            r.parts.length > 1 && (r.area = g, r.isStatic || (i.setMass(r, r.density * g), i.setInertia(r, x))), r.circleRadius && (d === h ? r.circleRadius *= d : r.circleRadius = null);
          }, i.update = function(r, d) {
            d = (typeof d < "u" ? d : 1e3 / 60) * r.timeScale;
            var h = d * d, v = i._timeCorrection ? d / (r.deltaTime || d) : 1, g = 1 - r.frictionAir * (d / p._baseDelta), x = (r.position.x - r.positionPrev.x) * v, w = (r.position.y - r.positionPrev.y) * v;
            r.velocity.x = x * g + r.force.x / r.mass * h, r.velocity.y = w * g + r.force.y / r.mass * h, r.positionPrev.x = r.position.x, r.positionPrev.y = r.position.y, r.position.x += r.velocity.x, r.position.y += r.velocity.y, r.deltaTime = d, r.angularVelocity = (r.angle - r.anglePrev) * g * v + r.torque / r.inertia * h, r.anglePrev = r.angle, r.angle += r.angularVelocity;
            for (var y = 0; y < r.parts.length; y++) {
              var b = r.parts[y];
              a.translate(b.vertices, r.velocity), y > 0 && (b.position.x += r.velocity.x, b.position.y += r.velocity.y), r.angularVelocity !== 0 && (a.rotate(b.vertices, r.angularVelocity, r.position), m.rotate(b.axes, r.angularVelocity), y > 0 && u.rotateAbout(b.position, r.angularVelocity, r.position, b.position)), l.update(b.bounds, b.vertices, r.velocity);
            }
          }, i.updateVelocities = function(r) {
            var d = i._baseDelta / r.deltaTime, h = r.velocity;
            h.x = (r.position.x - r.positionPrev.x) * d, h.y = (r.position.y - r.positionPrev.y) * d, r.speed = Math.sqrt(h.x * h.x + h.y * h.y), r.angularVelocity = (r.angle - r.anglePrev) * d, r.angularSpeed = Math.abs(r.angularVelocity);
          }, i.applyForce = function(r, d, h) {
            var v = { x: d.x - r.position.x, y: d.y - r.position.y };
            r.force.x += h.x, r.force.y += h.y, r.torque += v.x * h.y - v.y * h.x;
          }, i._totalProperties = function(r) {
            for (var d = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } }, h = r.parts.length === 1 ? 0 : 1; h < r.parts.length; h++) {
              var v = r.parts[h], g = v.mass !== 1 / 0 ? v.mass : 1;
              d.mass += g, d.area += v.area, d.inertia += v.inertia, d.centre = u.add(d.centre, u.mult(v.position, g));
            }
            return d.centre = u.div(d.centre, d.mass), d;
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(0);
        (function() {
          i.on = function(u, c, p) {
            for (var l = c.split(" "), m, o = 0; o < l.length; o++) m = l[o], u.events = u.events || {}, u.events[m] = u.events[m] || [], u.events[m].push(p);
            return p;
          }, i.off = function(u, c, p) {
            if (!c) {
              u.events = {};
              return;
            }
            typeof c == "function" && (p = c, c = a.keys(u.events).join(" "));
            for (var l = c.split(" "), m = 0; m < l.length; m++) {
              var o = u.events[l[m]], r = [];
              if (p && o) for (var d = 0; d < o.length; d++) o[d] !== p && r.push(o[d]);
              u.events[l[m]] = r;
            }
          }, i.trigger = function(u, c, p) {
            var l, m, o, r, d = u.events;
            if (d && a.keys(d).length > 0) {
              p || (p = {}), l = c.split(" ");
              for (var h = 0; h < l.length; h++) if (m = l[h], o = d[m], o) {
                r = a.clone(p, false), r.name = m, r.source = u;
                for (var v = 0; v < o.length; v++) o[v].apply(u, [r]);
              }
            }
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(5), u = s(0), c = s(1), p = s(4);
        (function() {
          i.create = function(l) {
            return u.extend({ id: u.nextId(), type: "composite", parent: null, isModified: false, bodies: [], constraints: [], composites: [], label: "Composite", plugin: {}, cache: { allBodies: null, allConstraints: null, allComposites: null } }, l);
          }, i.setModified = function(l, m, o, r) {
            if (l.isModified = m, m && l.cache && (l.cache.allBodies = null, l.cache.allConstraints = null, l.cache.allComposites = null), o && l.parent && i.setModified(l.parent, m, o, r), r) for (var d = 0; d < l.composites.length; d++) {
              var h = l.composites[d];
              i.setModified(h, m, o, r);
            }
          }, i.add = function(l, m) {
            var o = [].concat(m);
            a.trigger(l, "beforeAdd", { object: m });
            for (var r = 0; r < o.length; r++) {
              var d = o[r];
              switch (d.type) {
                case "body":
                  if (d.parent !== d) {
                    u.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                    break;
                  }
                  i.addBody(l, d);
                  break;
                case "constraint":
                  i.addConstraint(l, d);
                  break;
                case "composite":
                  i.addComposite(l, d);
                  break;
                case "mouseConstraint":
                  i.addConstraint(l, d.constraint);
                  break;
              }
            }
            return a.trigger(l, "afterAdd", { object: m }), l;
          }, i.remove = function(l, m, o) {
            var r = [].concat(m);
            a.trigger(l, "beforeRemove", { object: m });
            for (var d = 0; d < r.length; d++) {
              var h = r[d];
              switch (h.type) {
                case "body":
                  i.removeBody(l, h, o);
                  break;
                case "constraint":
                  i.removeConstraint(l, h, o);
                  break;
                case "composite":
                  i.removeComposite(l, h, o);
                  break;
                case "mouseConstraint":
                  i.removeConstraint(l, h.constraint);
                  break;
              }
            }
            return a.trigger(l, "afterRemove", { object: m }), l;
          }, i.addComposite = function(l, m) {
            return l.composites.push(m), m.parent = l, i.setModified(l, true, true, false), l;
          }, i.removeComposite = function(l, m, o) {
            var r = u.indexOf(l.composites, m);
            if (r !== -1 && i.removeCompositeAt(l, r), o) for (var d = 0; d < l.composites.length; d++) i.removeComposite(l.composites[d], m, true);
            return l;
          }, i.removeCompositeAt = function(l, m) {
            return l.composites.splice(m, 1), i.setModified(l, true, true, false), l;
          }, i.addBody = function(l, m) {
            return l.bodies.push(m), i.setModified(l, true, true, false), l;
          }, i.removeBody = function(l, m, o) {
            var r = u.indexOf(l.bodies, m);
            if (r !== -1 && i.removeBodyAt(l, r), o) for (var d = 0; d < l.composites.length; d++) i.removeBody(l.composites[d], m, true);
            return l;
          }, i.removeBodyAt = function(l, m) {
            return l.bodies.splice(m, 1), i.setModified(l, true, true, false), l;
          }, i.addConstraint = function(l, m) {
            return l.constraints.push(m), i.setModified(l, true, true, false), l;
          }, i.removeConstraint = function(l, m, o) {
            var r = u.indexOf(l.constraints, m);
            if (r !== -1 && i.removeConstraintAt(l, r), o) for (var d = 0; d < l.composites.length; d++) i.removeConstraint(l.composites[d], m, true);
            return l;
          }, i.removeConstraintAt = function(l, m) {
            return l.constraints.splice(m, 1), i.setModified(l, true, true, false), l;
          }, i.clear = function(l, m, o) {
            if (o) for (var r = 0; r < l.composites.length; r++) i.clear(l.composites[r], m, true);
            return m ? l.bodies = l.bodies.filter(function(d) {
              return d.isStatic;
            }) : l.bodies.length = 0, l.constraints.length = 0, l.composites.length = 0, i.setModified(l, true, true, false), l;
          }, i.allBodies = function(l) {
            if (l.cache && l.cache.allBodies) return l.cache.allBodies;
            for (var m = [].concat(l.bodies), o = 0; o < l.composites.length; o++) m = m.concat(i.allBodies(l.composites[o]));
            return l.cache && (l.cache.allBodies = m), m;
          }, i.allConstraints = function(l) {
            if (l.cache && l.cache.allConstraints) return l.cache.allConstraints;
            for (var m = [].concat(l.constraints), o = 0; o < l.composites.length; o++) m = m.concat(i.allConstraints(l.composites[o]));
            return l.cache && (l.cache.allConstraints = m), m;
          }, i.allComposites = function(l) {
            if (l.cache && l.cache.allComposites) return l.cache.allComposites;
            for (var m = [].concat(l.composites), o = 0; o < l.composites.length; o++) m = m.concat(i.allComposites(l.composites[o]));
            return l.cache && (l.cache.allComposites = m), m;
          }, i.get = function(l, m, o) {
            var r, d;
            switch (o) {
              case "body":
                r = i.allBodies(l);
                break;
              case "constraint":
                r = i.allConstraints(l);
                break;
              case "composite":
                r = i.allComposites(l).concat(l);
                break;
            }
            return r ? (d = r.filter(function(h) {
              return h.id.toString() === m.toString();
            }), d.length === 0 ? null : d[0]) : null;
          }, i.move = function(l, m, o) {
            return i.remove(l, m), i.add(o, m), l;
          }, i.rebase = function(l) {
            for (var m = i.allBodies(l).concat(i.allConstraints(l)).concat(i.allComposites(l)), o = 0; o < m.length; o++) m[o].id = u.nextId();
            return l;
          }, i.translate = function(l, m, o) {
            for (var r = o ? i.allBodies(l) : l.bodies, d = 0; d < r.length; d++) p.translate(r[d], m);
            return l;
          }, i.rotate = function(l, m, o, r) {
            for (var d = Math.cos(m), h = Math.sin(m), v = r ? i.allBodies(l) : l.bodies, g = 0; g < v.length; g++) {
              var x = v[g], w = x.position.x - o.x, y = x.position.y - o.y;
              p.setPosition(x, { x: o.x + (w * d - y * h), y: o.y + (w * h + y * d) }), p.rotate(x, m);
            }
            return l;
          }, i.scale = function(l, m, o, r, d) {
            for (var h = d ? i.allBodies(l) : l.bodies, v = 0; v < h.length; v++) {
              var g = h[v], x = g.position.x - r.x, w = g.position.y - r.y;
              p.setPosition(g, { x: r.x + x * m, y: r.y + w * o }), p.scale(g, m, o);
            }
            return l;
          }, i.bounds = function(l) {
            for (var m = i.allBodies(l), o = [], r = 0; r < m.length; r += 1) {
              var d = m[r];
              o.push(d.bounds.min, d.bounds.max);
            }
            return c.create(o);
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(4), u = s(5), c = s(0);
        (function() {
          i._motionWakeThreshold = 0.18, i._motionSleepThreshold = 0.08, i._minBias = 0.9, i.update = function(p, l) {
            for (var m = l / c._baseDelta, o = i._motionSleepThreshold, r = 0; r < p.length; r++) {
              var d = p[r], h = a.getSpeed(d), v = a.getAngularSpeed(d), g = h * h + v * v;
              if (d.force.x !== 0 || d.force.y !== 0) {
                i.set(d, false);
                continue;
              }
              var x = Math.min(d.motion, g), w = Math.max(d.motion, g);
              d.motion = i._minBias * x + (1 - i._minBias) * w, d.sleepThreshold > 0 && d.motion < o ? (d.sleepCounter += 1, d.sleepCounter >= d.sleepThreshold / m && i.set(d, true)) : d.sleepCounter > 0 && (d.sleepCounter -= 1);
            }
          }, i.afterCollisions = function(p) {
            for (var l = i._motionSleepThreshold, m = 0; m < p.length; m++) {
              var o = p[m];
              if (o.isActive) {
                var r = o.collision, d = r.bodyA.parent, h = r.bodyB.parent;
                if (!(d.isSleeping && h.isSleeping || d.isStatic || h.isStatic) && (d.isSleeping || h.isSleeping)) {
                  var v = d.isSleeping && !d.isStatic ? d : h, g = v === d ? h : d;
                  !v.isStatic && g.motion > l && i.set(v, false);
                }
              }
            }
          }, i.set = function(p, l) {
            var m = p.isSleeping;
            l ? (p.isSleeping = true, p.sleepCounter = p.sleepThreshold, p.positionImpulse.x = 0, p.positionImpulse.y = 0, p.positionPrev.x = p.position.x, p.positionPrev.y = p.position.y, p.anglePrev = p.angle, p.speed = 0, p.angularSpeed = 0, p.motion = 0, m || u.trigger(p, "sleepStart")) : (p.isSleeping = false, p.sleepCounter = 0, m && u.trigger(p, "sleepEnd"));
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(3), u = s(9);
        (function() {
          var c = [], p = { overlap: 0, axis: null }, l = { overlap: 0, axis: null };
          i.create = function(m, o) {
            return { pair: null, collided: false, bodyA: m, bodyB: o, parentA: m.parent, parentB: o.parent, depth: 0, normal: { x: 0, y: 0 }, tangent: { x: 0, y: 0 }, penetration: { x: 0, y: 0 }, supports: [] };
          }, i.collides = function(m, o, r) {
            if (i._overlapAxes(p, m.vertices, o.vertices, m.axes), p.overlap <= 0 || (i._overlapAxes(l, o.vertices, m.vertices, o.axes), l.overlap <= 0)) return null;
            var d = r && r.table[u.id(m, o)], h;
            d ? h = d.collision : (h = i.create(m, o), h.collided = true, h.bodyA = m.id < o.id ? m : o, h.bodyB = m.id < o.id ? o : m, h.parentA = h.bodyA.parent, h.parentB = h.bodyB.parent), m = h.bodyA, o = h.bodyB;
            var v;
            p.overlap < l.overlap ? v = p : v = l;
            var g = h.normal, x = h.supports, w = v.axis, y = w.x, b = w.y;
            y * (o.position.x - m.position.x) + b * (o.position.y - m.position.y) < 0 ? (g.x = y, g.y = b) : (g.x = -y, g.y = -b), h.tangent.x = -g.y, h.tangent.y = g.x, h.depth = v.overlap, h.penetration.x = g.x * h.depth, h.penetration.y = g.y * h.depth;
            var S = i._findSupports(m, o, g, 1), C = 0;
            if (a.contains(m.vertices, S[0]) && (x[C++] = S[0]), a.contains(m.vertices, S[1]) && (x[C++] = S[1]), C < 2) {
              var _ = i._findSupports(o, m, g, -1);
              a.contains(o.vertices, _[0]) && (x[C++] = _[0]), C < 2 && a.contains(o.vertices, _[1]) && (x[C++] = _[1]);
            }
            return C === 0 && (x[C++] = S[0]), x.length = C, h;
          }, i._overlapAxes = function(m, o, r, d) {
            var h = o.length, v = r.length, g = o[0].x, x = o[0].y, w = r[0].x, y = r[0].y, b = d.length, S = Number.MAX_VALUE, C = 0, _, P, M, k, T, L;
            for (T = 0; T < b; T++) {
              var D = d[T], O = D.x, j = D.y, $ = g * O + x * j, B = w * O + y * j, N = $, V = B;
              for (L = 1; L < h; L += 1) k = o[L].x * O + o[L].y * j, k > N ? N = k : k < $ && ($ = k);
              for (L = 1; L < v; L += 1) k = r[L].x * O + r[L].y * j, k > V ? V = k : k < B && (B = k);
              if (P = N - B, M = V - $, _ = P < M ? P : M, _ < S && (S = _, C = T, _ <= 0)) break;
            }
            m.axis = d[C], m.overlap = S;
          }, i._projectToAxis = function(m, o, r) {
            for (var d = o[0].x * r.x + o[0].y * r.y, h = d, v = 1; v < o.length; v += 1) {
              var g = o[v].x * r.x + o[v].y * r.y;
              g > h ? h = g : g < d && (d = g);
            }
            m.min = d, m.max = h;
          }, i._findSupports = function(m, o, r, d) {
            var h = o.vertices, v = h.length, g = m.position.x, x = m.position.y, w = r.x * d, y = r.y * d, b = Number.MAX_VALUE, S, C, _, P, M;
            for (M = 0; M < v; M += 1) C = h[M], P = w * (g - C.x) + y * (x - C.y), P < b && (b = P, S = C);
            return _ = h[(v + S.index - 1) % v], b = w * (g - _.x) + y * (x - _.y), C = h[(S.index + 1) % v], w * (g - C.x) + y * (x - C.y) < b ? (c[0] = S, c[1] = C, c) : (c[0] = S, c[1] = _, c);
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(16);
        (function() {
          i.create = function(u, c) {
            var p = u.bodyA, l = u.bodyB, m = { id: i.id(p, l), bodyA: p, bodyB: l, collision: u, contacts: [], activeContacts: [], separation: 0, isActive: true, confirmedActive: true, isSensor: p.isSensor || l.isSensor, timeCreated: c, timeUpdated: c, inverseMass: 0, friction: 0, frictionStatic: 0, restitution: 0, slop: 0 };
            return i.update(m, u, c), m;
          }, i.update = function(u, c, p) {
            var l = u.contacts, m = c.supports, o = u.activeContacts, r = c.parentA, d = c.parentB, h = r.vertices.length;
            u.isActive = true, u.timeUpdated = p, u.collision = c, u.separation = c.depth, u.inverseMass = r.inverseMass + d.inverseMass, u.friction = r.friction < d.friction ? r.friction : d.friction, u.frictionStatic = r.frictionStatic > d.frictionStatic ? r.frictionStatic : d.frictionStatic, u.restitution = r.restitution > d.restitution ? r.restitution : d.restitution, u.slop = r.slop > d.slop ? r.slop : d.slop, c.pair = u, o.length = 0;
            for (var v = 0; v < m.length; v++) {
              var g = m[v], x = g.body === r ? g.index : h + g.index, w = l[x];
              w ? o.push(w) : o.push(l[x] = a.create(g));
            }
          }, i.setActive = function(u, c, p) {
            c ? (u.isActive = true, u.timeUpdated = p) : (u.isActive = false, u.activeContacts.length = 0);
          }, i.id = function(u, c) {
            return u.id < c.id ? "A" + u.id + "B" + c.id : "A" + c.id + "B" + u.id;
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(3), u = s(2), c = s(7), p = s(1), l = s(11), m = s(0);
        (function() {
          i._warming = 0.4, i._torqueDampen = 1, i._minLength = 1e-6, i.create = function(o) {
            var r = o;
            r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }), r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 });
            var d = r.bodyA ? u.add(r.bodyA.position, r.pointA) : r.pointA, h = r.bodyB ? u.add(r.bodyB.position, r.pointB) : r.pointB, v = u.magnitude(u.sub(d, h));
            r.length = typeof r.length < "u" ? r.length : v, r.id = r.id || m.nextId(), r.label = r.label || "Constraint", r.type = "constraint", r.stiffness = r.stiffness || (r.length > 0 ? 1 : 0.7), r.damping = r.damping || 0, r.angularStiffness = r.angularStiffness || 0, r.angleA = r.bodyA ? r.bodyA.angle : r.angleA, r.angleB = r.bodyB ? r.bodyB.angle : r.angleB, r.plugin = {};
            var g = { visible: true, lineWidth: 2, strokeStyle: "#ffffff", type: "line", anchors: true };
            return r.length === 0 && r.stiffness > 0.1 ? (g.type = "pin", g.anchors = false) : r.stiffness < 0.9 && (g.type = "spring"), r.render = m.extend(g, r.render), r;
          }, i.preSolveAll = function(o) {
            for (var r = 0; r < o.length; r += 1) {
              var d = o[r], h = d.constraintImpulse;
              d.isStatic || h.x === 0 && h.y === 0 && h.angle === 0 || (d.position.x += h.x, d.position.y += h.y, d.angle += h.angle);
            }
          }, i.solveAll = function(o, r) {
            for (var d = m.clamp(r / m._baseDelta, 0, 1), h = 0; h < o.length; h += 1) {
              var v = o[h], g = !v.bodyA || v.bodyA && v.bodyA.isStatic, x = !v.bodyB || v.bodyB && v.bodyB.isStatic;
              (g || x) && i.solve(o[h], d);
            }
            for (h = 0; h < o.length; h += 1) v = o[h], g = !v.bodyA || v.bodyA && v.bodyA.isStatic, x = !v.bodyB || v.bodyB && v.bodyB.isStatic, !g && !x && i.solve(o[h], d);
          }, i.solve = function(o, r) {
            var d = o.bodyA, h = o.bodyB, v = o.pointA, g = o.pointB;
            if (!(!d && !h)) {
              d && !d.isStatic && (u.rotate(v, d.angle - o.angleA, v), o.angleA = d.angle), h && !h.isStatic && (u.rotate(g, h.angle - o.angleB, g), o.angleB = h.angle);
              var x = v, w = g;
              if (d && (x = u.add(d.position, v)), h && (w = u.add(h.position, g)), !(!x || !w)) {
                var y = u.sub(x, w), b = u.magnitude(y);
                b < i._minLength && (b = i._minLength);
                var S = (b - o.length) / b, C = o.stiffness >= 1 || o.length === 0, _ = C ? o.stiffness * r : o.stiffness * r * r, P = o.damping * r, M = u.mult(y, S * _), k = (d ? d.inverseMass : 0) + (h ? h.inverseMass : 0), T = (d ? d.inverseInertia : 0) + (h ? h.inverseInertia : 0), L = k + T, D, O, j, $, B;
                if (P > 0) {
                  var N = u.create();
                  j = u.div(y, b), B = u.sub(h && u.sub(h.position, h.positionPrev) || N, d && u.sub(d.position, d.positionPrev) || N), $ = u.dot(j, B);
                }
                d && !d.isStatic && (O = d.inverseMass / k, d.constraintImpulse.x -= M.x * O, d.constraintImpulse.y -= M.y * O, d.position.x -= M.x * O, d.position.y -= M.y * O, P > 0 && (d.positionPrev.x -= P * j.x * $ * O, d.positionPrev.y -= P * j.y * $ * O), D = u.cross(v, M) / L * i._torqueDampen * d.inverseInertia * (1 - o.angularStiffness), d.constraintImpulse.angle -= D, d.angle -= D), h && !h.isStatic && (O = h.inverseMass / k, h.constraintImpulse.x += M.x * O, h.constraintImpulse.y += M.y * O, h.position.x += M.x * O, h.position.y += M.y * O, P > 0 && (h.positionPrev.x += P * j.x * $ * O, h.positionPrev.y += P * j.y * $ * O), D = u.cross(g, M) / L * i._torqueDampen * h.inverseInertia * (1 - o.angularStiffness), h.constraintImpulse.angle += D, h.angle += D);
              }
            }
          }, i.postSolveAll = function(o) {
            for (var r = 0; r < o.length; r++) {
              var d = o[r], h = d.constraintImpulse;
              if (!(d.isStatic || h.x === 0 && h.y === 0 && h.angle === 0)) {
                c.set(d, false);
                for (var v = 0; v < d.parts.length; v++) {
                  var g = d.parts[v];
                  a.translate(g.vertices, h), v > 0 && (g.position.x += h.x, g.position.y += h.y), h.angle !== 0 && (a.rotate(g.vertices, h.angle, d.position), l.rotate(g.axes, h.angle), v > 0 && u.rotateAbout(g.position, h.angle, d.position, g.position)), p.update(g.bounds, g.vertices, d.velocity);
                }
                h.angle *= i._warming, h.x *= i._warming, h.y *= i._warming;
              }
            }
          }, i.pointAWorld = function(o) {
            return { x: (o.bodyA ? o.bodyA.position.x : 0) + (o.pointA ? o.pointA.x : 0), y: (o.bodyA ? o.bodyA.position.y : 0) + (o.pointA ? o.pointA.y : 0) };
          }, i.pointBWorld = function(o) {
            return { x: (o.bodyB ? o.bodyB.position.x : 0) + (o.pointB ? o.pointB.x : 0), y: (o.bodyB ? o.bodyB.position.y : 0) + (o.pointB ? o.pointB.y : 0) };
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(2), u = s(0);
        (function() {
          i.fromVertices = function(c) {
            for (var p = {}, l = 0; l < c.length; l++) {
              var m = (l + 1) % c.length, o = a.normalise({ x: c[m].y - c[l].y, y: c[l].x - c[m].x }), r = o.y === 0 ? 1 / 0 : o.x / o.y;
              r = r.toFixed(3).toString(), p[r] = o;
            }
            return u.values(p);
          }, i.rotate = function(c, p) {
            if (p !== 0) for (var l = Math.cos(p), m = Math.sin(p), o = 0; o < c.length; o++) {
              var r = c[o], d;
              d = r.x * l - r.y * m, r.y = r.x * m + r.y * l, r.x = d;
            }
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(3), u = s(0), c = s(4), p = s(1), l = s(2);
        (function() {
          i.rectangle = function(m, o, r, d, h) {
            h = h || {};
            var v = { label: "Rectangle Body", position: { x: m, y: o }, vertices: a.fromPath("L 0 0 L " + r + " 0 L " + r + " " + d + " L 0 " + d) };
            if (h.chamfer) {
              var g = h.chamfer;
              v.vertices = a.chamfer(v.vertices, g.radius, g.quality, g.qualityMin, g.qualityMax), delete h.chamfer;
            }
            return c.create(u.extend({}, v, h));
          }, i.trapezoid = function(m, o, r, d, h, v) {
            v = v || {}, h *= 0.5;
            var g = (1 - h * 2) * r, x = r * h, w = x + g, y = w + x, b;
            h < 0.5 ? b = "L 0 0 L " + x + " " + -d + " L " + w + " " + -d + " L " + y + " 0" : b = "L 0 0 L " + w + " " + -d + " L " + y + " 0";
            var S = { label: "Trapezoid Body", position: { x: m, y: o }, vertices: a.fromPath(b) };
            if (v.chamfer) {
              var C = v.chamfer;
              S.vertices = a.chamfer(S.vertices, C.radius, C.quality, C.qualityMin, C.qualityMax), delete v.chamfer;
            }
            return c.create(u.extend({}, S, v));
          }, i.circle = function(m, o, r, d, h) {
            d = d || {};
            var v = { label: "Circle Body", circleRadius: r };
            h = h || 25;
            var g = Math.ceil(Math.max(10, Math.min(h, r)));
            return g % 2 === 1 && (g += 1), i.polygon(m, o, g, r, u.extend({}, v, d));
          }, i.polygon = function(m, o, r, d, h) {
            if (h = h || {}, r < 3) return i.circle(m, o, d, h);
            for (var v = 2 * Math.PI / r, g = "", x = v * 0.5, w = 0; w < r; w += 1) {
              var y = x + w * v, b = Math.cos(y) * d, S = Math.sin(y) * d;
              g += "L " + b.toFixed(3) + " " + S.toFixed(3) + " ";
            }
            var C = { label: "Polygon Body", position: { x: m, y: o }, vertices: a.fromPath(g) };
            if (h.chamfer) {
              var _ = h.chamfer;
              C.vertices = a.chamfer(C.vertices, _.radius, _.quality, _.qualityMin, _.qualityMax), delete h.chamfer;
            }
            return c.create(u.extend({}, C, h));
          }, i.fromVertices = function(m, o, r, d, h, v, g, x) {
            var w = u.getDecomp(), y, b, S, C, _, P, M, k, T, L, D;
            for (y = !!(w && w.quickDecomp), d = d || {}, S = [], h = typeof h < "u" ? h : false, v = typeof v < "u" ? v : 0.01, g = typeof g < "u" ? g : 10, x = typeof x < "u" ? x : 0.01, u.isArray(r[0]) || (r = [r]), L = 0; L < r.length; L += 1) if (P = r[L], C = a.isConvex(P), _ = !C, _ && !y && u.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."), C || !y) C ? P = a.clockwiseSort(P) : P = a.hull(P), S.push({ position: { x: m, y: o }, vertices: P });
            else {
              var O = P.map(function(de) {
                return [de.x, de.y];
              });
              w.makeCCW(O), v !== false && w.removeCollinearPoints(O, v), x !== false && w.removeDuplicatePoints && w.removeDuplicatePoints(O, x);
              var j = w.quickDecomp(O);
              for (M = 0; M < j.length; M++) {
                var $ = j[M], B = $.map(function(de) {
                  return { x: de[0], y: de[1] };
                });
                g > 0 && a.area(B) < g || S.push({ position: a.centre(B), vertices: B });
              }
            }
            for (M = 0; M < S.length; M++) S[M] = c.create(u.extend(S[M], d));
            if (h) {
              var N = 5;
              for (M = 0; M < S.length; M++) {
                var V = S[M];
                for (k = M + 1; k < S.length; k++) {
                  var q = S[k];
                  if (p.overlaps(V.bounds, q.bounds)) {
                    var R = V.vertices, U = q.vertices;
                    for (T = 0; T < V.vertices.length; T++) for (D = 0; D < q.vertices.length; D++) {
                      var ie = l.magnitudeSquared(l.sub(R[(T + 1) % R.length], U[D])), ve = l.magnitudeSquared(l.sub(R[T], U[(D + 1) % U.length]));
                      ie < N && ve < N && (R[T].isInternal = true, U[D].isInternal = true);
                    }
                  }
                }
              }
            }
            return S.length > 1 ? (b = c.create(u.extend({ parts: S.slice(0) }, d)), c.setPosition(b, { x: m, y: o }), b) : S[0];
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(0), u = s(8);
        (function() {
          i.create = function(c) {
            var p = { bodies: [], pairs: null };
            return a.extend(p, c);
          }, i.setBodies = function(c, p) {
            c.bodies = p.slice(0);
          }, i.clear = function(c) {
            c.bodies = [];
          }, i.collisions = function(c) {
            var p = [], l = c.pairs, m = c.bodies, o = m.length, r = i.canCollide, d = u.collides, h, v;
            for (m.sort(i._compareBoundsX), h = 0; h < o; h++) {
              var g = m[h], x = g.bounds, w = g.bounds.max.x, y = g.bounds.max.y, b = g.bounds.min.y, S = g.isStatic || g.isSleeping, C = g.parts.length, _ = C === 1;
              for (v = h + 1; v < o; v++) {
                var P = m[v], M = P.bounds;
                if (M.min.x > w) break;
                if (!(y < M.min.y || b > M.max.y) && !(S && (P.isStatic || P.isSleeping)) && r(g.collisionFilter, P.collisionFilter)) {
                  var k = P.parts.length;
                  if (_ && k === 1) {
                    var T = d(g, P, l);
                    T && p.push(T);
                  } else for (var L = C > 1 ? 1 : 0, D = k > 1 ? 1 : 0, O = L; O < C; O++) for (var j = g.parts[O], x = j.bounds, $ = D; $ < k; $++) {
                    var B = P.parts[$], M = B.bounds;
                    if (!(x.min.x > M.max.x || x.max.x < M.min.x || x.max.y < M.min.y || x.min.y > M.max.y)) {
                      var T = d(j, B, l);
                      T && p.push(T);
                    }
                  }
                }
              }
            }
            return p;
          }, i.canCollide = function(c, p) {
            return c.group === p.group && c.group !== 0 ? c.group > 0 : (c.mask & p.category) !== 0 && (p.mask & c.category) !== 0;
          }, i._compareBoundsX = function(c, p) {
            return c.bounds.min.x - p.bounds.min.x;
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(0);
        (function() {
          i.create = function(u) {
            var c = {};
            return u || a.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), c.element = u || document.body, c.absolute = { x: 0, y: 0 }, c.position = { x: 0, y: 0 }, c.mousedownPosition = { x: 0, y: 0 }, c.mouseupPosition = { x: 0, y: 0 }, c.offset = { x: 0, y: 0 }, c.scale = { x: 1, y: 1 }, c.wheelDelta = 0, c.button = -1, c.pixelRatio = parseInt(c.element.getAttribute("data-pixel-ratio"), 10) || 1, c.sourceEvents = { mousemove: null, mousedown: null, mouseup: null, mousewheel: null }, c.mousemove = function(p) {
              var l = i._getRelativeMousePosition(p, c.element, c.pixelRatio), m = p.changedTouches;
              m && (c.button = 0, p.preventDefault()), c.absolute.x = l.x, c.absolute.y = l.y, c.position.x = c.absolute.x * c.scale.x + c.offset.x, c.position.y = c.absolute.y * c.scale.y + c.offset.y, c.sourceEvents.mousemove = p;
            }, c.mousedown = function(p) {
              var l = i._getRelativeMousePosition(p, c.element, c.pixelRatio), m = p.changedTouches;
              m ? (c.button = 0, p.preventDefault()) : c.button = p.button, c.absolute.x = l.x, c.absolute.y = l.y, c.position.x = c.absolute.x * c.scale.x + c.offset.x, c.position.y = c.absolute.y * c.scale.y + c.offset.y, c.mousedownPosition.x = c.position.x, c.mousedownPosition.y = c.position.y, c.sourceEvents.mousedown = p;
            }, c.mouseup = function(p) {
              var l = i._getRelativeMousePosition(p, c.element, c.pixelRatio), m = p.changedTouches;
              m && p.preventDefault(), c.button = -1, c.absolute.x = l.x, c.absolute.y = l.y, c.position.x = c.absolute.x * c.scale.x + c.offset.x, c.position.y = c.absolute.y * c.scale.y + c.offset.y, c.mouseupPosition.x = c.position.x, c.mouseupPosition.y = c.position.y, c.sourceEvents.mouseup = p;
            }, c.mousewheel = function(p) {
              c.wheelDelta = Math.max(-1, Math.min(1, p.wheelDelta || -p.detail)), p.preventDefault();
            }, i.setElement(c, c.element), c;
          }, i.setElement = function(u, c) {
            u.element = c, c.addEventListener("mousemove", u.mousemove), c.addEventListener("mousedown", u.mousedown), c.addEventListener("mouseup", u.mouseup), c.addEventListener("mousewheel", u.mousewheel), c.addEventListener("DOMMouseScroll", u.mousewheel), c.addEventListener("touchmove", u.mousemove), c.addEventListener("touchstart", u.mousedown), c.addEventListener("touchend", u.mouseup);
          }, i.clearSourceEvents = function(u) {
            u.sourceEvents.mousemove = null, u.sourceEvents.mousedown = null, u.sourceEvents.mouseup = null, u.sourceEvents.mousewheel = null, u.wheelDelta = 0;
          }, i.setOffset = function(u, c) {
            u.offset.x = c.x, u.offset.y = c.y, u.position.x = u.absolute.x * u.scale.x + u.offset.x, u.position.y = u.absolute.y * u.scale.y + u.offset.y;
          }, i.setScale = function(u, c) {
            u.scale.x = c.x, u.scale.y = c.y, u.position.x = u.absolute.x * u.scale.x + u.offset.x, u.position.y = u.absolute.y * u.scale.y + u.offset.y;
          }, i._getRelativeMousePosition = function(u, c, p) {
            var l = c.getBoundingClientRect(), m = document.documentElement || document.body.parentNode || document.body, o = window.pageXOffset !== void 0 ? window.pageXOffset : m.scrollLeft, r = window.pageYOffset !== void 0 ? window.pageYOffset : m.scrollTop, d = u.changedTouches, h, v;
            return d ? (h = d[0].pageX - l.left - o, v = d[0].pageY - l.top - r) : (h = u.pageX - l.left - o, v = u.pageY - l.top - r), { x: h / (c.clientWidth / (c.width || c.clientWidth) * p), y: v / (c.clientHeight / (c.height || c.clientHeight) * p) };
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(0);
        (function() {
          i._registry = {}, i.register = function(u) {
            if (i.isPlugin(u) || a.warn("Plugin.register:", i.toString(u), "does not implement all required fields."), u.name in i._registry) {
              var c = i._registry[u.name], p = i.versionParse(u.version).number, l = i.versionParse(c.version).number;
              p > l ? (a.warn("Plugin.register:", i.toString(c), "was upgraded to", i.toString(u)), i._registry[u.name] = u) : p < l ? a.warn("Plugin.register:", i.toString(c), "can not be downgraded to", i.toString(u)) : u !== c && a.warn("Plugin.register:", i.toString(u), "is already registered to different plugin object");
            } else i._registry[u.name] = u;
            return u;
          }, i.resolve = function(u) {
            return i._registry[i.dependencyParse(u).name];
          }, i.toString = function(u) {
            return typeof u == "string" ? u : (u.name || "anonymous") + "@" + (u.version || u.range || "0.0.0");
          }, i.isPlugin = function(u) {
            return u && u.name && u.version && u.install;
          }, i.isUsed = function(u, c) {
            return u.used.indexOf(c) > -1;
          }, i.isFor = function(u, c) {
            var p = u.for && i.dependencyParse(u.for);
            return !u.for || c.name === p.name && i.versionSatisfies(c.version, p.range);
          }, i.use = function(u, c) {
            if (u.uses = (u.uses || []).concat(c || []), u.uses.length === 0) {
              a.warn("Plugin.use:", i.toString(u), "does not specify any dependencies to install.");
              return;
            }
            for (var p = i.dependencies(u), l = a.topologicalSort(p), m = [], o = 0; o < l.length; o += 1) if (l[o] !== u.name) {
              var r = i.resolve(l[o]);
              if (!r) {
                m.push("\u274C " + l[o]);
                continue;
              }
              i.isUsed(u, r.name) || (i.isFor(r, u) || (a.warn("Plugin.use:", i.toString(r), "is for", r.for, "but installed on", i.toString(u) + "."), r._warned = true), r.install ? r.install(u) : (a.warn("Plugin.use:", i.toString(r), "does not specify an install function."), r._warned = true), r._warned ? (m.push("\u{1F536} " + i.toString(r)), delete r._warned) : m.push("\u2705 " + i.toString(r)), u.used.push(r.name));
            }
            m.length > 0 && a.info(m.join("  "));
          }, i.dependencies = function(u, c) {
            var p = i.dependencyParse(u), l = p.name;
            if (c = c || {}, !(l in c)) {
              u = i.resolve(u) || u, c[l] = a.map(u.uses || [], function(o) {
                i.isPlugin(o) && i.register(o);
                var r = i.dependencyParse(o), d = i.resolve(o);
                return d && !i.versionSatisfies(d.version, r.range) ? (a.warn("Plugin.dependencies:", i.toString(d), "does not satisfy", i.toString(r), "used by", i.toString(p) + "."), d._warned = true, u._warned = true) : d || (a.warn("Plugin.dependencies:", i.toString(o), "used by", i.toString(p), "could not be resolved."), u._warned = true), r.name;
              });
              for (var m = 0; m < c[l].length; m += 1) i.dependencies(c[l][m], c);
              return c;
            }
          }, i.dependencyParse = function(u) {
            if (a.isString(u)) {
              var c = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
              return c.test(u) || a.warn("Plugin.dependencyParse:", u, "is not a valid dependency string."), { name: u.split("@")[0], range: u.split("@")[1] || "*" };
            }
            return { name: u.name, range: u.range || u.version };
          }, i.versionParse = function(u) {
            var c = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
            c.test(u) || a.warn("Plugin.versionParse:", u, "is not a valid version or range.");
            var p = c.exec(u), l = Number(p[4]), m = Number(p[5]), o = Number(p[6]);
            return { isRange: !!(p[1] || p[2]), version: p[3], range: u, operator: p[1] || p[2] || "", major: l, minor: m, patch: o, parts: [l, m, o], prerelease: p[7], number: l * 1e8 + m * 1e4 + o };
          }, i.versionSatisfies = function(u, c) {
            c = c || "*";
            var p = i.versionParse(c), l = i.versionParse(u);
            if (p.isRange) {
              if (p.operator === "*" || u === "*") return true;
              if (p.operator === ">") return l.number > p.number;
              if (p.operator === ">=") return l.number >= p.number;
              if (p.operator === "~") return l.major === p.major && l.minor === p.minor && l.patch >= p.patch;
              if (p.operator === "^") return p.major > 0 ? l.major === p.major && l.number >= p.number : p.minor > 0 ? l.minor === p.minor && l.patch >= p.patch : l.patch === p.patch;
            }
            return u === c || u === "*";
          };
        })();
      }, function(t, n) {
        var s = {};
        t.exports = s, function() {
          s.create = function(i) {
            return { vertex: i, normalImpulse: 0, tangentImpulse: 0 };
          };
        }();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(7), u = s(18), c = s(13), p = s(19), l = s(5), m = s(6), o = s(10), r = s(0), d = s(4);
        (function() {
          i.create = function(h) {
            h = h || {};
            var v = { positionIterations: 6, velocityIterations: 4, constraintIterations: 2, enableSleeping: false, events: [], plugin: {}, gravity: { x: 0, y: 1, scale: 1e-3 }, timing: { timestamp: 0, timeScale: 1, lastDelta: 0, lastElapsed: 0 } }, g = r.extend(v, h);
            return g.world = h.world || m.create({ label: "World" }), g.pairs = h.pairs || p.create(), g.detector = h.detector || c.create(), g.grid = { buckets: [] }, g.world.gravity = g.gravity, g.broadphase = g.grid, g.metrics = {}, g;
          }, i.update = function(h, v) {
            var g = r.now(), x = h.world, w = h.detector, y = h.pairs, b = h.timing, S = b.timestamp, C;
            v = typeof v < "u" ? v : r._baseDelta, v *= b.timeScale, b.timestamp += v, b.lastDelta = v;
            var _ = { timestamp: b.timestamp, delta: v };
            l.trigger(h, "beforeUpdate", _);
            var P = m.allBodies(x), M = m.allConstraints(x);
            for (x.isModified && (c.setBodies(w, P), m.setModified(x, false, false, true)), h.enableSleeping && a.update(P, v), i._bodiesApplyGravity(P, h.gravity), v > 0 && i._bodiesUpdate(P, v), o.preSolveAll(P), C = 0; C < h.constraintIterations; C++) o.solveAll(M, v);
            o.postSolveAll(P), w.pairs = h.pairs;
            var k = c.collisions(w);
            p.update(y, k, S), h.enableSleeping && a.afterCollisions(y.list), y.collisionStart.length > 0 && l.trigger(h, "collisionStart", { pairs: y.collisionStart });
            var T = r.clamp(20 / h.positionIterations, 0, 1);
            for (u.preSolvePosition(y.list), C = 0; C < h.positionIterations; C++) u.solvePosition(y.list, v, T);
            for (u.postSolvePosition(P), o.preSolveAll(P), C = 0; C < h.constraintIterations; C++) o.solveAll(M, v);
            for (o.postSolveAll(P), u.preSolveVelocity(y.list), C = 0; C < h.velocityIterations; C++) u.solveVelocity(y.list, v);
            return i._bodiesUpdateVelocities(P), y.collisionActive.length > 0 && l.trigger(h, "collisionActive", { pairs: y.collisionActive }), y.collisionEnd.length > 0 && l.trigger(h, "collisionEnd", { pairs: y.collisionEnd }), i._bodiesClearForces(P), l.trigger(h, "afterUpdate", _), h.timing.lastElapsed = r.now() - g, h;
          }, i.merge = function(h, v) {
            if (r.extend(h, v), v.world) {
              h.world = v.world, i.clear(h);
              for (var g = m.allBodies(h.world), x = 0; x < g.length; x++) {
                var w = g[x];
                a.set(w, false), w.id = r.nextId();
              }
            }
          }, i.clear = function(h) {
            p.clear(h.pairs), c.clear(h.detector);
          }, i._bodiesClearForces = function(h) {
            for (var v = h.length, g = 0; g < v; g++) {
              var x = h[g];
              x.force.x = 0, x.force.y = 0, x.torque = 0;
            }
          }, i._bodiesApplyGravity = function(h, v) {
            var g = typeof v.scale < "u" ? v.scale : 1e-3, x = h.length;
            if (!(v.x === 0 && v.y === 0 || g === 0)) for (var w = 0; w < x; w++) {
              var y = h[w];
              y.isStatic || y.isSleeping || (y.force.y += y.mass * v.y * g, y.force.x += y.mass * v.x * g);
            }
          }, i._bodiesUpdate = function(h, v) {
            for (var g = h.length, x = 0; x < g; x++) {
              var w = h[x];
              w.isStatic || w.isSleeping || d.update(w, v);
            }
          }, i._bodiesUpdateVelocities = function(h) {
            for (var v = h.length, g = 0; g < v; g++) d.updateVelocities(h[g]);
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(3), u = s(0), c = s(1);
        (function() {
          i._restingThresh = 2, i._restingThreshTangent = Math.sqrt(6), i._positionDampen = 0.9, i._positionWarming = 0.8, i._frictionNormalMultiplier = 5, i._frictionMaxStatic = Number.MAX_VALUE, i.preSolvePosition = function(p) {
            var l, m, o, r = p.length;
            for (l = 0; l < r; l++) m = p[l], m.isActive && (o = m.activeContacts.length, m.collision.parentA.totalContacts += o, m.collision.parentB.totalContacts += o);
          }, i.solvePosition = function(p, l, m) {
            var o, r, d, h, v, g, x, w, y = i._positionDampen * (m || 1), b = u.clamp(l / u._baseDelta, 0, 1), S = p.length;
            for (o = 0; o < S; o++) r = p[o], !(!r.isActive || r.isSensor) && (d = r.collision, h = d.parentA, v = d.parentB, g = d.normal, r.separation = g.x * (v.positionImpulse.x + d.penetration.x - h.positionImpulse.x) + g.y * (v.positionImpulse.y + d.penetration.y - h.positionImpulse.y));
            for (o = 0; o < S; o++) r = p[o], !(!r.isActive || r.isSensor) && (d = r.collision, h = d.parentA, v = d.parentB, g = d.normal, w = r.separation - r.slop * b, (h.isStatic || v.isStatic) && (w *= 2), h.isStatic || h.isSleeping || (x = y / h.totalContacts, h.positionImpulse.x += g.x * w * x, h.positionImpulse.y += g.y * w * x), v.isStatic || v.isSleeping || (x = y / v.totalContacts, v.positionImpulse.x -= g.x * w * x, v.positionImpulse.y -= g.y * w * x));
          }, i.postSolvePosition = function(p) {
            for (var l = i._positionWarming, m = p.length, o = a.translate, r = c.update, d = 0; d < m; d++) {
              var h = p[d], v = h.positionImpulse, g = v.x, x = v.y, w = h.velocity;
              if (h.totalContacts = 0, g !== 0 || x !== 0) {
                for (var y = 0; y < h.parts.length; y++) {
                  var b = h.parts[y];
                  o(b.vertices, v), r(b.bounds, b.vertices, w), b.position.x += g, b.position.y += x;
                }
                h.positionPrev.x += g, h.positionPrev.y += x, g * w.x + x * w.y < 0 ? (v.x = 0, v.y = 0) : (v.x *= l, v.y *= l);
              }
            }
          }, i.preSolveVelocity = function(p) {
            var l = p.length, m, o;
            for (m = 0; m < l; m++) {
              var r = p[m];
              if (!(!r.isActive || r.isSensor)) {
                var d = r.activeContacts, h = d.length, v = r.collision, g = v.parentA, x = v.parentB, w = v.normal, y = v.tangent;
                for (o = 0; o < h; o++) {
                  var b = d[o], S = b.vertex, C = b.normalImpulse, _ = b.tangentImpulse;
                  if (C !== 0 || _ !== 0) {
                    var P = w.x * C + y.x * _, M = w.y * C + y.y * _;
                    g.isStatic || g.isSleeping || (g.positionPrev.x += P * g.inverseMass, g.positionPrev.y += M * g.inverseMass, g.anglePrev += g.inverseInertia * ((S.x - g.position.x) * M - (S.y - g.position.y) * P)), x.isStatic || x.isSleeping || (x.positionPrev.x -= P * x.inverseMass, x.positionPrev.y -= M * x.inverseMass, x.anglePrev -= x.inverseInertia * ((S.x - x.position.x) * M - (S.y - x.position.y) * P));
                  }
                }
              }
            }
          }, i.solveVelocity = function(p, l) {
            var m = l / u._baseDelta, o = m * m, r = o * m, d = -i._restingThresh * m, h = i._restingThreshTangent, v = i._frictionNormalMultiplier * m, g = i._frictionMaxStatic, x = p.length, w, y, b, S;
            for (b = 0; b < x; b++) {
              var C = p[b];
              if (!(!C.isActive || C.isSensor)) {
                var _ = C.collision, P = _.parentA, M = _.parentB, k = P.velocity, T = M.velocity, L = _.normal.x, D = _.normal.y, O = _.tangent.x, j = _.tangent.y, $ = C.activeContacts, B = $.length, N = 1 / B, V = P.inverseMass + M.inverseMass, q = C.friction * C.frictionStatic * v;
                for (k.x = P.position.x - P.positionPrev.x, k.y = P.position.y - P.positionPrev.y, T.x = M.position.x - M.positionPrev.x, T.y = M.position.y - M.positionPrev.y, P.angularVelocity = P.angle - P.anglePrev, M.angularVelocity = M.angle - M.anglePrev, S = 0; S < B; S++) {
                  var R = $[S], U = R.vertex, ie = U.x - P.position.x, ve = U.y - P.position.y, de = U.x - M.position.x, Re = U.y - M.position.y, Te = k.x - ve * P.angularVelocity, jt = k.y + ie * P.angularVelocity, Tt = T.x - Re * M.angularVelocity, F = T.y + de * M.angularVelocity, X = Te - Tt, H = jt - F, te = L * X + D * H, le = O * X + j * H, xe = C.separation + te, ni = Math.min(xe, 1);
                  ni = xe < 0 ? 0 : ni;
                  var qi = ni * q;
                  le < -qi || le > qi ? (y = le > 0 ? le : -le, w = C.friction * (le > 0 ? 1 : -1) * r, w < -y ? w = -y : w > y && (w = y)) : (w = le, y = g);
                  var oe = ie * D - ve * L, re = de * D - Re * L, Pt = N / (V + P.inverseInertia * oe * oe + M.inverseInertia * re * re), se = (1 + C.restitution) * te * Pt;
                  if (w *= Pt, te < d) R.normalImpulse = 0;
                  else {
                    var ue = R.normalImpulse;
                    R.normalImpulse += se, R.normalImpulse > 0 && (R.normalImpulse = 0), se = R.normalImpulse - ue;
                  }
                  if (le < -h || le > h) R.tangentImpulse = 0;
                  else {
                    var Je = R.tangentImpulse;
                    R.tangentImpulse += w, R.tangentImpulse < -y && (R.tangentImpulse = -y), R.tangentImpulse > y && (R.tangentImpulse = y), w = R.tangentImpulse - Je;
                  }
                  var Ie = L * se + O * w, Pe = D * se + j * w;
                  P.isStatic || P.isSleeping || (P.positionPrev.x += Ie * P.inverseMass, P.positionPrev.y += Pe * P.inverseMass, P.anglePrev += (ie * Pe - ve * Ie) * P.inverseInertia), M.isStatic || M.isSleeping || (M.positionPrev.x -= Ie * M.inverseMass, M.positionPrev.y -= Pe * M.inverseMass, M.anglePrev -= (de * Pe - Re * Ie) * M.inverseInertia);
                }
              }
            }
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(9), u = s(0);
        (function() {
          i.create = function(c) {
            return u.extend({ table: {}, list: [], collisionStart: [], collisionActive: [], collisionEnd: [] }, c);
          }, i.update = function(c, p, l) {
            var m = c.list, o = m.length, r = c.table, d = p.length, h = c.collisionStart, v = c.collisionEnd, g = c.collisionActive, x, w, y, b;
            for (h.length = 0, v.length = 0, g.length = 0, b = 0; b < o; b++) m[b].confirmedActive = false;
            for (b = 0; b < d; b++) x = p[b], y = x.pair, y ? (y.isActive ? g.push(y) : h.push(y), a.update(y, x, l), y.confirmedActive = true) : (y = a.create(x, l), r[y.id] = y, h.push(y), m.push(y));
            var S = [];
            for (o = m.length, b = 0; b < o; b++) y = m[b], y.confirmedActive || (a.setActive(y, false, l), v.push(y), !y.collision.bodyA.isSleeping && !y.collision.bodyB.isSleeping && S.push(b));
            for (b = 0; b < S.length; b++) w = S[b] - b, y = m[w], m.splice(w, 1), delete r[y.id];
          }, i.clear = function(c) {
            return c.table = {}, c.list.length = 0, c.collisionStart.length = 0, c.collisionActive.length = 0, c.collisionEnd.length = 0, c;
          };
        })();
      }, function(t, n, s) {
        var i = t.exports = s(21);
        i.Axes = s(11), i.Bodies = s(12), i.Body = s(4), i.Bounds = s(1), i.Collision = s(8), i.Common = s(0), i.Composite = s(6), i.Composites = s(22), i.Constraint = s(10), i.Contact = s(16), i.Detector = s(13), i.Engine = s(17), i.Events = s(5), i.Grid = s(23), i.Mouse = s(14), i.MouseConstraint = s(24), i.Pair = s(9), i.Pairs = s(19), i.Plugin = s(15), i.Query = s(25), i.Render = s(26), i.Resolver = s(18), i.Runner = s(27), i.SAT = s(28), i.Sleeping = s(7), i.Svg = s(29), i.Vector = s(2), i.Vertices = s(3), i.World = s(30), i.Engine.run = i.Runner.run, i.Common.deprecated(i.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead");
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(15), u = s(0);
        (function() {
          i.name = "matter-js", i.version = "0.19.0", i.uses = [], i.used = [], i.use = function() {
            a.use(i, Array.prototype.slice.call(arguments));
          }, i.before = function(c, p) {
            return c = c.replace(/^Matter./, ""), u.chainPathBefore(i, c, p);
          }, i.after = function(c, p) {
            return c = c.replace(/^Matter./, ""), u.chainPathAfter(i, c, p);
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(6), u = s(10), c = s(0), p = s(4), l = s(12), m = c.deprecated;
        (function() {
          i.stack = function(o, r, d, h, v, g, x) {
            for (var w = a.create({ label: "Stack" }), y = o, b = r, S, C = 0, _ = 0; _ < h; _++) {
              for (var P = 0, M = 0; M < d; M++) {
                var k = x(y, b, M, _, S, C);
                if (k) {
                  var T = k.bounds.max.y - k.bounds.min.y, L = k.bounds.max.x - k.bounds.min.x;
                  T > P && (P = T), p.translate(k, { x: L * 0.5, y: T * 0.5 }), y = k.bounds.max.x + v, a.addBody(w, k), S = k, C += 1;
                } else y += v;
              }
              b += P + g, y = o;
            }
            return w;
          }, i.chain = function(o, r, d, h, v, g) {
            for (var x = o.bodies, w = 1; w < x.length; w++) {
              var y = x[w - 1], b = x[w], S = y.bounds.max.y - y.bounds.min.y, C = y.bounds.max.x - y.bounds.min.x, _ = b.bounds.max.y - b.bounds.min.y, P = b.bounds.max.x - b.bounds.min.x, M = { bodyA: y, pointA: { x: C * r, y: S * d }, bodyB: b, pointB: { x: P * h, y: _ * v } }, k = c.extend(M, g);
              a.addConstraint(o, u.create(k));
            }
            return o.label += " Chain", o;
          }, i.mesh = function(o, r, d, h, v) {
            var g = o.bodies, x, w, y, b, S;
            for (x = 0; x < d; x++) {
              for (w = 1; w < r; w++) y = g[w - 1 + x * r], b = g[w + x * r], a.addConstraint(o, u.create(c.extend({ bodyA: y, bodyB: b }, v)));
              if (x > 0) for (w = 0; w < r; w++) y = g[w + (x - 1) * r], b = g[w + x * r], a.addConstraint(o, u.create(c.extend({ bodyA: y, bodyB: b }, v))), h && w > 0 && (S = g[w - 1 + (x - 1) * r], a.addConstraint(o, u.create(c.extend({ bodyA: S, bodyB: b }, v)))), h && w < r - 1 && (S = g[w + 1 + (x - 1) * r], a.addConstraint(o, u.create(c.extend({ bodyA: S, bodyB: b }, v))));
            }
            return o.label += " Mesh", o;
          }, i.pyramid = function(o, r, d, h, v, g, x) {
            return i.stack(o, r, d, h, v, g, function(w, y, b, S, C, _) {
              var P = Math.min(h, Math.ceil(d / 2)), M = C ? C.bounds.max.x - C.bounds.min.x : 0;
              if (!(S > P)) {
                S = P - S;
                var k = S, T = d - 1 - S;
                if (!(b < k || b > T)) {
                  _ === 1 && p.translate(C, { x: (b + (d % 2 === 1 ? 1 : -1)) * M, y: 0 });
                  var L = C ? b * M : 0;
                  return x(o + L + b * v, y, b, S, C, _);
                }
              }
            });
          }, i.newtonsCradle = function(o, r, d, h, v) {
            for (var g = a.create({ label: "Newtons Cradle" }), x = 0; x < d; x++) {
              var w = 1.9, y = l.circle(o + x * (h * w), r + v, h, { inertia: 1 / 0, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }), b = u.create({ pointA: { x: o + x * (h * w), y: r }, bodyB: y });
              a.addBody(g, y), a.addConstraint(g, b);
            }
            return g;
          }, m(i, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example"), i.car = function(o, r, d, h, v) {
            var g = p.nextGroup(true), x = 20, w = -d * 0.5 + x, y = d * 0.5 - x, b = 0, S = a.create({ label: "Car" }), C = l.rectangle(o, r, d, h, { collisionFilter: { group: g }, chamfer: { radius: h * 0.5 }, density: 2e-4 }), _ = l.circle(o + w, r + b, v, { collisionFilter: { group: g }, friction: 0.8 }), P = l.circle(o + y, r + b, v, { collisionFilter: { group: g }, friction: 0.8 }), M = u.create({ bodyB: C, pointB: { x: w, y: b }, bodyA: _, stiffness: 1, length: 0 }), k = u.create({ bodyB: C, pointB: { x: y, y: b }, bodyA: P, stiffness: 1, length: 0 });
            return a.addBody(S, C), a.addBody(S, _), a.addBody(S, P), a.addConstraint(S, M), a.addConstraint(S, k), S;
          }, m(i, "car", "Composites.car \u27A4 moved to car example"), i.softBody = function(o, r, d, h, v, g, x, w, y, b) {
            y = c.extend({ inertia: 1 / 0 }, y), b = c.extend({ stiffness: 0.2, render: { type: "line", anchors: false } }, b);
            var S = i.stack(o, r, d, h, v, g, function(C, _) {
              return l.circle(C, _, w, y);
            });
            return i.mesh(S, d, h, x, b), S.label = "Soft Body", S;
          }, m(i, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples");
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(9), u = s(0), c = u.deprecated;
        (function() {
          i.create = function(p) {
            var l = { buckets: {}, pairs: {}, pairsList: [], bucketWidth: 48, bucketHeight: 48 };
            return u.extend(l, p);
          }, i.update = function(p, l, m, o) {
            var r, d, h, v = m.world, g = p.buckets, x, w, y = false;
            for (r = 0; r < l.length; r++) {
              var b = l[r];
              if (!(b.isSleeping && !o) && !(v.bounds && (b.bounds.max.x < v.bounds.min.x || b.bounds.min.x > v.bounds.max.x || b.bounds.max.y < v.bounds.min.y || b.bounds.min.y > v.bounds.max.y))) {
                var S = i._getRegion(p, b);
                if (!b.region || S.id !== b.region.id || o) {
                  (!b.region || o) && (b.region = S);
                  var C = i._regionUnion(S, b.region);
                  for (d = C.startCol; d <= C.endCol; d++) for (h = C.startRow; h <= C.endRow; h++) {
                    w = i._getBucketId(d, h), x = g[w];
                    var _ = d >= S.startCol && d <= S.endCol && h >= S.startRow && h <= S.endRow, P = d >= b.region.startCol && d <= b.region.endCol && h >= b.region.startRow && h <= b.region.endRow;
                    !_ && P && P && x && i._bucketRemoveBody(p, x, b), (b.region === S || _ && !P || o) && (x || (x = i._createBucket(g, w)), i._bucketAddBody(p, x, b));
                  }
                  b.region = S, y = true;
                }
              }
            }
            y && (p.pairsList = i._createActivePairsList(p));
          }, c(i, "update", "Grid.update \u27A4 replaced by Matter.Detector"), i.clear = function(p) {
            p.buckets = {}, p.pairs = {}, p.pairsList = [];
          }, c(i, "clear", "Grid.clear \u27A4 replaced by Matter.Detector"), i._regionUnion = function(p, l) {
            var m = Math.min(p.startCol, l.startCol), o = Math.max(p.endCol, l.endCol), r = Math.min(p.startRow, l.startRow), d = Math.max(p.endRow, l.endRow);
            return i._createRegion(m, o, r, d);
          }, i._getRegion = function(p, l) {
            var m = l.bounds, o = Math.floor(m.min.x / p.bucketWidth), r = Math.floor(m.max.x / p.bucketWidth), d = Math.floor(m.min.y / p.bucketHeight), h = Math.floor(m.max.y / p.bucketHeight);
            return i._createRegion(o, r, d, h);
          }, i._createRegion = function(p, l, m, o) {
            return { id: p + "," + l + "," + m + "," + o, startCol: p, endCol: l, startRow: m, endRow: o };
          }, i._getBucketId = function(p, l) {
            return "C" + p + "R" + l;
          }, i._createBucket = function(p, l) {
            var m = p[l] = [];
            return m;
          }, i._bucketAddBody = function(p, l, m) {
            var o = p.pairs, r = a.id, d = l.length, h;
            for (h = 0; h < d; h++) {
              var v = l[h];
              if (!(m.id === v.id || m.isStatic && v.isStatic)) {
                var g = r(m, v), x = o[g];
                x ? x[2] += 1 : o[g] = [m, v, 1];
              }
            }
            l.push(m);
          }, i._bucketRemoveBody = function(p, l, m) {
            var o = p.pairs, r = a.id, d;
            l.splice(u.indexOf(l, m), 1);
            var h = l.length;
            for (d = 0; d < h; d++) {
              var v = o[r(m, l[d])];
              v && (v[2] -= 1);
            }
          }, i._createActivePairsList = function(p) {
            var l, m = p.pairs, o = u.keys(m), r = o.length, d = [], h;
            for (h = 0; h < r; h++) l = m[o[h]], l[2] > 0 ? d.push(l) : delete m[o[h]];
            return d;
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(3), u = s(7), c = s(14), p = s(5), l = s(13), m = s(10), o = s(6), r = s(0), d = s(1);
        (function() {
          i.create = function(h, v) {
            var g = (h ? h.mouse : null) || (v ? v.mouse : null);
            g || (h && h.render && h.render.canvas ? g = c.create(h.render.canvas) : v && v.element ? g = c.create(v.element) : (g = c.create(), r.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
            var x = m.create({ label: "Mouse Constraint", pointA: g.position, pointB: { x: 0, y: 0 }, length: 0.01, stiffness: 0.1, angularStiffness: 1, render: { strokeStyle: "#90EE90", lineWidth: 3 } }), w = { type: "mouseConstraint", mouse: g, element: null, body: null, constraint: x, collisionFilter: { category: 1, mask: 4294967295, group: 0 } }, y = r.extend(w, v);
            return p.on(h, "beforeUpdate", function() {
              var b = o.allBodies(h.world);
              i.update(y, b), i._triggerEvents(y);
            }), y;
          }, i.update = function(h, v) {
            var g = h.mouse, x = h.constraint, w = h.body;
            if (g.button === 0) {
              if (x.bodyB) u.set(x.bodyB, false), x.pointA = g.position;
              else for (var y = 0; y < v.length; y++) if (w = v[y], d.contains(w.bounds, g.position) && l.canCollide(w.collisionFilter, h.collisionFilter)) for (var b = w.parts.length > 1 ? 1 : 0; b < w.parts.length; b++) {
                var S = w.parts[b];
                if (a.contains(S.vertices, g.position)) {
                  x.pointA = g.position, x.bodyB = h.body = w, x.pointB = { x: g.position.x - w.position.x, y: g.position.y - w.position.y }, x.angleB = w.angle, u.set(w, false), p.trigger(h, "startdrag", { mouse: g, body: w });
                  break;
                }
              }
            } else x.bodyB = h.body = null, x.pointB = null, w && p.trigger(h, "enddrag", { mouse: g, body: w });
          }, i._triggerEvents = function(h) {
            var v = h.mouse, g = v.sourceEvents;
            g.mousemove && p.trigger(h, "mousemove", { mouse: v }), g.mousedown && p.trigger(h, "mousedown", { mouse: v }), g.mouseup && p.trigger(h, "mouseup", { mouse: v }), c.clearSourceEvents(v);
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(2), u = s(8), c = s(1), p = s(12), l = s(3);
        (function() {
          i.collides = function(m, o) {
            for (var r = [], d = o.length, h = m.bounds, v = u.collides, g = c.overlaps, x = 0; x < d; x++) {
              var w = o[x], y = w.parts.length, b = y === 1 ? 0 : 1;
              if (g(w.bounds, h)) for (var S = b; S < y; S++) {
                var C = w.parts[S];
                if (g(C.bounds, h)) {
                  var _ = v(C, m);
                  if (_) {
                    r.push(_);
                    break;
                  }
                }
              }
            }
            return r;
          }, i.ray = function(m, o, r, d) {
            d = d || 1e-100;
            for (var h = a.angle(o, r), v = a.magnitude(a.sub(o, r)), g = (r.x + o.x) * 0.5, x = (r.y + o.y) * 0.5, w = p.rectangle(g, x, v, d, { angle: h }), y = i.collides(w, m), b = 0; b < y.length; b += 1) {
              var S = y[b];
              S.body = S.bodyB = S.bodyA;
            }
            return y;
          }, i.region = function(m, o, r) {
            for (var d = [], h = 0; h < m.length; h++) {
              var v = m[h], g = c.overlaps(v.bounds, o);
              (g && !r || !g && r) && d.push(v);
            }
            return d;
          }, i.point = function(m, o) {
            for (var r = [], d = 0; d < m.length; d++) {
              var h = m[d];
              if (c.contains(h.bounds, o)) for (var v = h.parts.length === 1 ? 0 : 1; v < h.parts.length; v++) {
                var g = h.parts[v];
                if (c.contains(g.bounds, o) && l.contains(g.vertices, o)) {
                  r.push(h);
                  break;
                }
              }
            }
            return r;
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(4), u = s(0), c = s(6), p = s(1), l = s(5), m = s(2), o = s(14);
        (function() {
          var r, d;
          typeof window < "u" && (r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(b) {
            window.setTimeout(function() {
              b(u.now());
            }, 1e3 / 60);
          }, d = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), i._goodFps = 30, i._goodDelta = 1e3 / 60, i.create = function(b) {
            var S = { engine: null, element: null, canvas: null, mouse: null, frameRequestId: null, timing: { historySize: 60, delta: 0, deltaHistory: [], lastTime: 0, lastTimestamp: 0, lastElapsed: 0, timestampElapsed: 0, timestampElapsedHistory: [], engineDeltaHistory: [], engineElapsedHistory: [], elapsedHistory: [] }, options: { width: 800, height: 600, pixelRatio: 1, background: "#14151f", wireframeBackground: "#14151f", hasBounds: !!b.bounds, enabled: true, wireframes: true, showSleeping: true, showDebug: false, showStats: false, showPerformance: false, showBounds: false, showVelocity: false, showCollisions: false, showSeparations: false, showAxes: false, showPositions: false, showAngleIndicator: false, showIds: false, showVertexNumbers: false, showConvexHulls: false, showInternalEdges: false, showMousePosition: false } }, C = u.extend(S, b);
            return C.canvas && (C.canvas.width = C.options.width || C.canvas.width, C.canvas.height = C.options.height || C.canvas.height), C.mouse = b.mouse, C.engine = b.engine, C.canvas = C.canvas || g(C.options.width, C.options.height), C.context = C.canvas.getContext("2d"), C.textures = {}, C.bounds = C.bounds || { min: { x: 0, y: 0 }, max: { x: C.canvas.width, y: C.canvas.height } }, C.controller = i, C.options.showBroadphase = false, C.options.pixelRatio !== 1 && i.setPixelRatio(C, C.options.pixelRatio), u.isElement(C.element) && C.element.appendChild(C.canvas), C;
          }, i.run = function(b) {
            (function S(C) {
              b.frameRequestId = r(S), h(b, C), i.world(b, C), (b.options.showStats || b.options.showDebug) && i.stats(b, b.context, C), (b.options.showPerformance || b.options.showDebug) && i.performance(b, b.context, C);
            })();
          }, i.stop = function(b) {
            d(b.frameRequestId);
          }, i.setPixelRatio = function(b, S) {
            var C = b.options, _ = b.canvas;
            S === "auto" && (S = x(_)), C.pixelRatio = S, _.setAttribute("data-pixel-ratio", S), _.width = C.width * S, _.height = C.height * S, _.style.width = C.width + "px", _.style.height = C.height + "px";
          }, i.lookAt = function(b, S, C, _) {
            _ = typeof _ < "u" ? _ : true, S = u.isArray(S) ? S : [S], C = C || { x: 0, y: 0 };
            for (var P = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, M = 0; M < S.length; M += 1) {
              var k = S[M], T = k.bounds ? k.bounds.min : k.min || k.position || k, L = k.bounds ? k.bounds.max : k.max || k.position || k;
              T && L && (T.x < P.min.x && (P.min.x = T.x), L.x > P.max.x && (P.max.x = L.x), T.y < P.min.y && (P.min.y = T.y), L.y > P.max.y && (P.max.y = L.y));
            }
            var D = P.max.x - P.min.x + 2 * C.x, O = P.max.y - P.min.y + 2 * C.y, j = b.canvas.height, $ = b.canvas.width, B = $ / j, N = D / O, V = 1, q = 1;
            N > B ? q = N / B : V = B / N, b.options.hasBounds = true, b.bounds.min.x = P.min.x, b.bounds.max.x = P.min.x + D * V, b.bounds.min.y = P.min.y, b.bounds.max.y = P.min.y + O * q, _ && (b.bounds.min.x += D * 0.5 - D * V * 0.5, b.bounds.max.x += D * 0.5 - D * V * 0.5, b.bounds.min.y += O * 0.5 - O * q * 0.5, b.bounds.max.y += O * 0.5 - O * q * 0.5), b.bounds.min.x -= C.x, b.bounds.max.x -= C.x, b.bounds.min.y -= C.y, b.bounds.max.y -= C.y, b.mouse && (o.setScale(b.mouse, { x: (b.bounds.max.x - b.bounds.min.x) / b.canvas.width, y: (b.bounds.max.y - b.bounds.min.y) / b.canvas.height }), o.setOffset(b.mouse, b.bounds.min));
          }, i.startViewTransform = function(b) {
            var S = b.bounds.max.x - b.bounds.min.x, C = b.bounds.max.y - b.bounds.min.y, _ = S / b.options.width, P = C / b.options.height;
            b.context.setTransform(b.options.pixelRatio / _, 0, 0, b.options.pixelRatio / P, 0, 0), b.context.translate(-b.bounds.min.x, -b.bounds.min.y);
          }, i.endViewTransform = function(b) {
            b.context.setTransform(b.options.pixelRatio, 0, 0, b.options.pixelRatio, 0, 0);
          }, i.world = function(b, S) {
            var C = u.now(), _ = b.engine, P = _.world, M = b.canvas, k = b.context, T = b.options, L = b.timing, D = c.allBodies(P), O = c.allConstraints(P), j = T.wireframes ? T.wireframeBackground : T.background, $ = [], B = [], N, V = { timestamp: _.timing.timestamp };
            if (l.trigger(b, "beforeRender", V), b.currentBackground !== j && y(b, j), k.globalCompositeOperation = "source-in", k.fillStyle = "transparent", k.fillRect(0, 0, M.width, M.height), k.globalCompositeOperation = "source-over", T.hasBounds) {
              for (N = 0; N < D.length; N++) {
                var q = D[N];
                p.overlaps(q.bounds, b.bounds) && $.push(q);
              }
              for (N = 0; N < O.length; N++) {
                var R = O[N], U = R.bodyA, ie = R.bodyB, ve = R.pointA, de = R.pointB;
                U && (ve = m.add(U.position, R.pointA)), ie && (de = m.add(ie.position, R.pointB)), !(!ve || !de) && (p.contains(b.bounds, ve) || p.contains(b.bounds, de)) && B.push(R);
              }
              i.startViewTransform(b), b.mouse && (o.setScale(b.mouse, { x: (b.bounds.max.x - b.bounds.min.x) / b.options.width, y: (b.bounds.max.y - b.bounds.min.y) / b.options.height }), o.setOffset(b.mouse, b.bounds.min));
            } else B = O, $ = D, b.options.pixelRatio !== 1 && b.context.setTransform(b.options.pixelRatio, 0, 0, b.options.pixelRatio, 0, 0);
            !T.wireframes || _.enableSleeping && T.showSleeping ? i.bodies(b, $, k) : (T.showConvexHulls && i.bodyConvexHulls(b, $, k), i.bodyWireframes(b, $, k)), T.showBounds && i.bodyBounds(b, $, k), (T.showAxes || T.showAngleIndicator) && i.bodyAxes(b, $, k), T.showPositions && i.bodyPositions(b, $, k), T.showVelocity && i.bodyVelocity(b, $, k), T.showIds && i.bodyIds(b, $, k), T.showSeparations && i.separations(b, _.pairs.list, k), T.showCollisions && i.collisions(b, _.pairs.list, k), T.showVertexNumbers && i.vertexNumbers(b, $, k), T.showMousePosition && i.mousePosition(b, b.mouse, k), i.constraints(B, k), T.hasBounds && i.endViewTransform(b), l.trigger(b, "afterRender", V), L.lastElapsed = u.now() - C;
          }, i.stats = function(b, S, C) {
            for (var _ = b.engine, P = _.world, M = c.allBodies(P), k = 0, T = 55, L = 44, D = 0, O = 0, j = 0; j < M.length; j += 1) k += M[j].parts.length;
            var $ = { Part: k, Body: M.length, Cons: c.allConstraints(P).length, Comp: c.allComposites(P).length, Pair: _.pairs.list.length };
            S.fillStyle = "#0e0f19", S.fillRect(D, O, T * 5.5, L), S.font = "12px Arial", S.textBaseline = "top", S.textAlign = "right";
            for (var B in $) {
              var N = $[B];
              S.fillStyle = "#aaa", S.fillText(B, D + T, O + 8), S.fillStyle = "#eee", S.fillText(N, D + T, O + 26), D += T;
            }
          }, i.performance = function(b, S) {
            var C = b.engine, _ = b.timing, P = _.deltaHistory, M = _.elapsedHistory, k = _.timestampElapsedHistory, T = _.engineDeltaHistory, L = _.engineElapsedHistory, D = C.timing.lastDelta, O = v(P), j = v(M), $ = v(T), B = v(L), N = v(k), V = N / O || 0, q = 1e3 / O || 0, R = 4, U = 12, ie = 60, ve = 34, de = 10, Re = 69;
            S.fillStyle = "#0e0f19", S.fillRect(0, 50, U * 4 + ie * 5 + 22, ve), i.status(S, de, Re, ie, R, P.length, Math.round(q) + " fps", q / i._goodFps, function(Te) {
              return P[Te] / O - 1;
            }), i.status(S, de + U + ie, Re, ie, R, T.length, D.toFixed(2) + " dt", i._goodDelta / D, function(Te) {
              return T[Te] / $ - 1;
            }), i.status(S, de + (U + ie) * 2, Re, ie, R, L.length, B.toFixed(2) + " ut", 1 - B / i._goodFps, function(Te) {
              return L[Te] / B - 1;
            }), i.status(S, de + (U + ie) * 3, Re, ie, R, M.length, j.toFixed(2) + " rt", 1 - j / i._goodFps, function(Te) {
              return M[Te] / j - 1;
            }), i.status(S, de + (U + ie) * 4, Re, ie, R, k.length, V.toFixed(2) + " x", V * V * V, function(Te) {
              return (k[Te] / P[Te] / V || 0) - 1;
            });
          }, i.status = function(b, S, C, _, P, M, k, T, L) {
            b.strokeStyle = "#888", b.fillStyle = "#444", b.lineWidth = 1, b.fillRect(S, C + 7, _, 1), b.beginPath(), b.moveTo(S, C + 7 - P * u.clamp(0.4 * L(0), -2, 2));
            for (var D = 0; D < _; D += 1) b.lineTo(S + D, C + 7 - (D < M ? P * u.clamp(0.4 * L(D), -2, 2) : 0));
            b.stroke(), b.fillStyle = "hsl(" + u.clamp(25 + 95 * T, 0, 120) + ",100%,60%)", b.fillRect(S, C - 7, 4, 4), b.font = "12px Arial", b.textBaseline = "middle", b.textAlign = "right", b.fillStyle = "#eee", b.fillText(k, S + _, C - 5);
          }, i.constraints = function(b, S) {
            for (var C = S, _ = 0; _ < b.length; _++) {
              var P = b[_];
              if (!(!P.render.visible || !P.pointA || !P.pointB)) {
                var M = P.bodyA, k = P.bodyB, T, L;
                if (M ? T = m.add(M.position, P.pointA) : T = P.pointA, P.render.type === "pin") C.beginPath(), C.arc(T.x, T.y, 3, 0, 2 * Math.PI), C.closePath();
                else {
                  if (k ? L = m.add(k.position, P.pointB) : L = P.pointB, C.beginPath(), C.moveTo(T.x, T.y), P.render.type === "spring") for (var D = m.sub(L, T), O = m.perp(m.normalise(D)), j = Math.ceil(u.clamp(P.length / 5, 12, 20)), $, B = 1; B < j; B += 1) $ = B % 2 === 0 ? 1 : -1, C.lineTo(T.x + D.x * (B / j) + O.x * $ * 4, T.y + D.y * (B / j) + O.y * $ * 4);
                  C.lineTo(L.x, L.y);
                }
                P.render.lineWidth && (C.lineWidth = P.render.lineWidth, C.strokeStyle = P.render.strokeStyle, C.stroke()), P.render.anchors && (C.fillStyle = P.render.strokeStyle, C.beginPath(), C.arc(T.x, T.y, 3, 0, 2 * Math.PI), C.arc(L.x, L.y, 3, 0, 2 * Math.PI), C.closePath(), C.fill());
              }
            }
          }, i.bodies = function(b, S, C) {
            var _ = C;
            b.engine;
            var P = b.options, M = P.showInternalEdges || !P.wireframes, k, T, L, D;
            for (L = 0; L < S.length; L++) if (k = S[L], !!k.render.visible) {
              for (D = k.parts.length > 1 ? 1 : 0; D < k.parts.length; D++) if (T = k.parts[D], !!T.render.visible) {
                if (P.showSleeping && k.isSleeping ? _.globalAlpha = 0.5 * T.render.opacity : T.render.opacity !== 1 && (_.globalAlpha = T.render.opacity), T.render.sprite && T.render.sprite.texture && !P.wireframes) {
                  var O = T.render.sprite, j = w(b, O.texture);
                  _.translate(T.position.x, T.position.y), _.rotate(T.angle), _.drawImage(j, j.width * -O.xOffset * O.xScale, j.height * -O.yOffset * O.yScale, j.width * O.xScale, j.height * O.yScale), _.rotate(-T.angle), _.translate(-T.position.x, -T.position.y);
                } else {
                  if (T.circleRadius) _.beginPath(), _.arc(T.position.x, T.position.y, T.circleRadius, 0, 2 * Math.PI);
                  else {
                    _.beginPath(), _.moveTo(T.vertices[0].x, T.vertices[0].y);
                    for (var $ = 1; $ < T.vertices.length; $++) !T.vertices[$ - 1].isInternal || M ? _.lineTo(T.vertices[$].x, T.vertices[$].y) : _.moveTo(T.vertices[$].x, T.vertices[$].y), T.vertices[$].isInternal && !M && _.moveTo(T.vertices[($ + 1) % T.vertices.length].x, T.vertices[($ + 1) % T.vertices.length].y);
                    _.lineTo(T.vertices[0].x, T.vertices[0].y), _.closePath();
                  }
                  P.wireframes ? (_.lineWidth = 1, _.strokeStyle = "#bbb", _.stroke()) : (_.fillStyle = T.render.fillStyle, T.render.lineWidth && (_.lineWidth = T.render.lineWidth, _.strokeStyle = T.render.strokeStyle, _.stroke()), _.fill());
                }
                _.globalAlpha = 1;
              }
            }
          }, i.bodyWireframes = function(b, S, C) {
            var _ = C, P = b.options.showInternalEdges, M, k, T, L, D;
            for (_.beginPath(), T = 0; T < S.length; T++) if (M = S[T], !!M.render.visible) for (D = M.parts.length > 1 ? 1 : 0; D < M.parts.length; D++) {
              for (k = M.parts[D], _.moveTo(k.vertices[0].x, k.vertices[0].y), L = 1; L < k.vertices.length; L++) !k.vertices[L - 1].isInternal || P ? _.lineTo(k.vertices[L].x, k.vertices[L].y) : _.moveTo(k.vertices[L].x, k.vertices[L].y), k.vertices[L].isInternal && !P && _.moveTo(k.vertices[(L + 1) % k.vertices.length].x, k.vertices[(L + 1) % k.vertices.length].y);
              _.lineTo(k.vertices[0].x, k.vertices[0].y);
            }
            _.lineWidth = 1, _.strokeStyle = "#bbb", _.stroke();
          }, i.bodyConvexHulls = function(b, S, C) {
            var _ = C, P, M, k;
            for (_.beginPath(), M = 0; M < S.length; M++) if (P = S[M], !(!P.render.visible || P.parts.length === 1)) {
              for (_.moveTo(P.vertices[0].x, P.vertices[0].y), k = 1; k < P.vertices.length; k++) _.lineTo(P.vertices[k].x, P.vertices[k].y);
              _.lineTo(P.vertices[0].x, P.vertices[0].y);
            }
            _.lineWidth = 1, _.strokeStyle = "rgba(255,255,255,0.2)", _.stroke();
          }, i.vertexNumbers = function(b, S, C) {
            var _ = C, P, M, k;
            for (P = 0; P < S.length; P++) {
              var T = S[P].parts;
              for (k = T.length > 1 ? 1 : 0; k < T.length; k++) {
                var L = T[k];
                for (M = 0; M < L.vertices.length; M++) _.fillStyle = "rgba(255,255,255,0.2)", _.fillText(P + "_" + M, L.position.x + (L.vertices[M].x - L.position.x) * 0.8, L.position.y + (L.vertices[M].y - L.position.y) * 0.8);
              }
            }
          }, i.mousePosition = function(b, S, C) {
            var _ = C;
            _.fillStyle = "rgba(255,255,255,0.8)", _.fillText(S.position.x + "  " + S.position.y, S.position.x + 5, S.position.y - 5);
          }, i.bodyBounds = function(b, S, C) {
            var _ = C;
            b.engine;
            var P = b.options;
            _.beginPath();
            for (var M = 0; M < S.length; M++) {
              var k = S[M];
              if (k.render.visible) for (var T = S[M].parts, L = T.length > 1 ? 1 : 0; L < T.length; L++) {
                var D = T[L];
                _.rect(D.bounds.min.x, D.bounds.min.y, D.bounds.max.x - D.bounds.min.x, D.bounds.max.y - D.bounds.min.y);
              }
            }
            P.wireframes ? _.strokeStyle = "rgba(255,255,255,0.08)" : _.strokeStyle = "rgba(0,0,0,0.1)", _.lineWidth = 1, _.stroke();
          }, i.bodyAxes = function(b, S, C) {
            var _ = C;
            b.engine;
            var P = b.options, M, k, T, L;
            for (_.beginPath(), k = 0; k < S.length; k++) {
              var D = S[k], O = D.parts;
              if (D.render.visible) if (P.showAxes) for (T = O.length > 1 ? 1 : 0; T < O.length; T++) for (M = O[T], L = 0; L < M.axes.length; L++) {
                var j = M.axes[L];
                _.moveTo(M.position.x, M.position.y), _.lineTo(M.position.x + j.x * 20, M.position.y + j.y * 20);
              }
              else for (T = O.length > 1 ? 1 : 0; T < O.length; T++) for (M = O[T], L = 0; L < M.axes.length; L++) _.moveTo(M.position.x, M.position.y), _.lineTo((M.vertices[0].x + M.vertices[M.vertices.length - 1].x) / 2, (M.vertices[0].y + M.vertices[M.vertices.length - 1].y) / 2);
            }
            P.wireframes ? (_.strokeStyle = "indianred", _.lineWidth = 1) : (_.strokeStyle = "rgba(255, 255, 255, 0.4)", _.globalCompositeOperation = "overlay", _.lineWidth = 2), _.stroke(), _.globalCompositeOperation = "source-over";
          }, i.bodyPositions = function(b, S, C) {
            var _ = C;
            b.engine;
            var P = b.options, M, k, T, L;
            for (_.beginPath(), T = 0; T < S.length; T++) if (M = S[T], !!M.render.visible) for (L = 0; L < M.parts.length; L++) k = M.parts[L], _.arc(k.position.x, k.position.y, 3, 0, 2 * Math.PI, false), _.closePath();
            for (P.wireframes ? _.fillStyle = "indianred" : _.fillStyle = "rgba(0,0,0,0.5)", _.fill(), _.beginPath(), T = 0; T < S.length; T++) M = S[T], M.render.visible && (_.arc(M.positionPrev.x, M.positionPrev.y, 2, 0, 2 * Math.PI, false), _.closePath());
            _.fillStyle = "rgba(255,165,0,0.8)", _.fill();
          }, i.bodyVelocity = function(b, S, C) {
            var _ = C;
            _.beginPath();
            for (var P = 0; P < S.length; P++) {
              var M = S[P];
              if (M.render.visible) {
                var k = a.getVelocity(M);
                _.moveTo(M.position.x, M.position.y), _.lineTo(M.position.x + k.x, M.position.y + k.y);
              }
            }
            _.lineWidth = 3, _.strokeStyle = "cornflowerblue", _.stroke();
          }, i.bodyIds = function(b, S, C) {
            var _ = C, P, M;
            for (P = 0; P < S.length; P++) if (S[P].render.visible) {
              var k = S[P].parts;
              for (M = k.length > 1 ? 1 : 0; M < k.length; M++) {
                var T = k[M];
                _.font = "12px Arial", _.fillStyle = "rgba(255,255,255,0.5)", _.fillText(T.id, T.position.x + 10, T.position.y - 10);
              }
            }
          }, i.collisions = function(b, S, C) {
            var _ = C, P = b.options, M, k, T, L;
            for (_.beginPath(), T = 0; T < S.length; T++) if (M = S[T], !!M.isActive) for (k = M.collision, L = 0; L < M.activeContacts.length; L++) {
              var D = M.activeContacts[L], O = D.vertex;
              _.rect(O.x - 1.5, O.y - 1.5, 3.5, 3.5);
            }
            for (P.wireframes ? _.fillStyle = "rgba(255,255,255,0.7)" : _.fillStyle = "orange", _.fill(), _.beginPath(), T = 0; T < S.length; T++) if (M = S[T], !!M.isActive && (k = M.collision, M.activeContacts.length > 0)) {
              var j = M.activeContacts[0].vertex.x, $ = M.activeContacts[0].vertex.y;
              M.activeContacts.length === 2 && (j = (M.activeContacts[0].vertex.x + M.activeContacts[1].vertex.x) / 2, $ = (M.activeContacts[0].vertex.y + M.activeContacts[1].vertex.y) / 2), k.bodyB === k.supports[0].body || k.bodyA.isStatic === true ? _.moveTo(j - k.normal.x * 8, $ - k.normal.y * 8) : _.moveTo(j + k.normal.x * 8, $ + k.normal.y * 8), _.lineTo(j, $);
            }
            P.wireframes ? _.strokeStyle = "rgba(255,165,0,0.7)" : _.strokeStyle = "orange", _.lineWidth = 1, _.stroke();
          }, i.separations = function(b, S, C) {
            var _ = C, P = b.options, M, k, T, L, D;
            for (_.beginPath(), D = 0; D < S.length; D++) if (M = S[D], !!M.isActive) {
              k = M.collision, T = k.bodyA, L = k.bodyB;
              var O = 1;
              !L.isStatic && !T.isStatic && (O = 0.5), L.isStatic && (O = 0), _.moveTo(L.position.x, L.position.y), _.lineTo(L.position.x - k.penetration.x * O, L.position.y - k.penetration.y * O), O = 1, !L.isStatic && !T.isStatic && (O = 0.5), T.isStatic && (O = 0), _.moveTo(T.position.x, T.position.y), _.lineTo(T.position.x + k.penetration.x * O, T.position.y + k.penetration.y * O);
            }
            P.wireframes ? _.strokeStyle = "rgba(255,165,0,0.5)" : _.strokeStyle = "orange", _.stroke();
          }, i.inspector = function(b, S) {
            b.engine;
            var C = b.selected, _ = b.render, P = _.options, M;
            if (P.hasBounds) {
              var k = _.bounds.max.x - _.bounds.min.x, T = _.bounds.max.y - _.bounds.min.y, L = k / _.options.width, D = T / _.options.height;
              S.scale(1 / L, 1 / D), S.translate(-_.bounds.min.x, -_.bounds.min.y);
            }
            for (var O = 0; O < C.length; O++) {
              var j = C[O].data;
              switch (S.translate(0.5, 0.5), S.lineWidth = 1, S.strokeStyle = "rgba(255,165,0,0.9)", S.setLineDash([1, 2]), j.type) {
                case "body":
                  M = j.bounds, S.beginPath(), S.rect(Math.floor(M.min.x - 3), Math.floor(M.min.y - 3), Math.floor(M.max.x - M.min.x + 6), Math.floor(M.max.y - M.min.y + 6)), S.closePath(), S.stroke();
                  break;
                case "constraint":
                  var $ = j.pointA;
                  j.bodyA && ($ = j.pointB), S.beginPath(), S.arc($.x, $.y, 10, 0, 2 * Math.PI), S.closePath(), S.stroke();
                  break;
              }
              S.setLineDash([]), S.translate(-0.5, -0.5);
            }
            b.selectStart !== null && (S.translate(0.5, 0.5), S.lineWidth = 1, S.strokeStyle = "rgba(255,165,0,0.6)", S.fillStyle = "rgba(255,165,0,0.1)", M = b.selectBounds, S.beginPath(), S.rect(Math.floor(M.min.x), Math.floor(M.min.y), Math.floor(M.max.x - M.min.x), Math.floor(M.max.y - M.min.y)), S.closePath(), S.stroke(), S.fill(), S.translate(-0.5, -0.5)), P.hasBounds && S.setTransform(1, 0, 0, 1, 0, 0);
          };
          var h = function(b, S) {
            var C = b.engine, _ = b.timing, P = _.historySize, M = C.timing.timestamp;
            _.delta = S - _.lastTime || i._goodDelta, _.lastTime = S, _.timestampElapsed = M - _.lastTimestamp || 0, _.lastTimestamp = M, _.deltaHistory.unshift(_.delta), _.deltaHistory.length = Math.min(_.deltaHistory.length, P), _.engineDeltaHistory.unshift(C.timing.lastDelta), _.engineDeltaHistory.length = Math.min(_.engineDeltaHistory.length, P), _.timestampElapsedHistory.unshift(_.timestampElapsed), _.timestampElapsedHistory.length = Math.min(_.timestampElapsedHistory.length, P), _.engineElapsedHistory.unshift(C.timing.lastElapsed), _.engineElapsedHistory.length = Math.min(_.engineElapsedHistory.length, P), _.elapsedHistory.unshift(_.lastElapsed), _.elapsedHistory.length = Math.min(_.elapsedHistory.length, P);
          }, v = function(b) {
            for (var S = 0, C = 0; C < b.length; C += 1) S += b[C];
            return S / b.length || 0;
          }, g = function(b, S) {
            var C = document.createElement("canvas");
            return C.width = b, C.height = S, C.oncontextmenu = function() {
              return false;
            }, C.onselectstart = function() {
              return false;
            }, C;
          }, x = function(b) {
            var S = b.getContext("2d"), C = window.devicePixelRatio || 1, _ = S.webkitBackingStorePixelRatio || S.mozBackingStorePixelRatio || S.msBackingStorePixelRatio || S.oBackingStorePixelRatio || S.backingStorePixelRatio || 1;
            return C / _;
          }, w = function(b, S) {
            var C = b.textures[S];
            return C || (C = b.textures[S] = new Image(), C.src = S, C);
          }, y = function(b, S) {
            var C = S;
            /(jpg|gif|png)$/.test(S) && (C = "url(" + S + ")"), b.canvas.style.background = C, b.canvas.style.backgroundSize = "contain", b.currentBackground = S;
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(5), u = s(17), c = s(0);
        (function() {
          var p, l;
          if (typeof window < "u" && (p = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, l = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), !p) {
            var m;
            p = function(o) {
              m = setTimeout(function() {
                o(c.now());
              }, 1e3 / 60);
            }, l = function() {
              clearTimeout(m);
            };
          }
          i.create = function(o) {
            var r = { fps: 60, deltaSampleSize: 60, counterTimestamp: 0, frameCounter: 0, deltaHistory: [], timePrev: null, frameRequestId: null, isFixed: false, enabled: true }, d = c.extend(r, o);
            return d.delta = d.delta || 1e3 / d.fps, d.deltaMin = d.deltaMin || 1e3 / d.fps, d.deltaMax = d.deltaMax || 1e3 / (d.fps * 0.5), d.fps = 1e3 / d.delta, d;
          }, i.run = function(o, r) {
            return typeof o.positionIterations < "u" && (r = o, o = i.create()), function d(h) {
              o.frameRequestId = p(d), h && o.enabled && i.tick(o, r, h);
            }(), o;
          }, i.tick = function(o, r, d) {
            var h = r.timing, v;
            o.isFixed ? v = o.delta : (v = d - o.timePrev || o.delta, o.timePrev = d, o.deltaHistory.push(v), o.deltaHistory = o.deltaHistory.slice(-o.deltaSampleSize), v = Math.min.apply(null, o.deltaHistory), v = v < o.deltaMin ? o.deltaMin : v, v = v > o.deltaMax ? o.deltaMax : v, o.delta = v);
            var g = { timestamp: h.timestamp };
            a.trigger(o, "beforeTick", g), o.frameCounter += 1, d - o.counterTimestamp >= 1e3 && (o.fps = o.frameCounter * ((d - o.counterTimestamp) / 1e3), o.counterTimestamp = d, o.frameCounter = 0), a.trigger(o, "tick", g), a.trigger(o, "beforeUpdate", g), u.update(r, v), a.trigger(o, "afterUpdate", g), a.trigger(o, "afterTick", g);
          }, i.stop = function(o) {
            l(o.frameRequestId);
          }, i.start = function(o, r) {
            i.run(o, r);
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(8), u = s(0), c = u.deprecated;
        (function() {
          i.collides = function(p, l) {
            return a.collides(p, l);
          }, c(i, "collides", "SAT.collides \u27A4 replaced by Collision.collides");
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i, s(1);
        var a = s(0);
        (function() {
          i.pathToVertices = function(u, c) {
            typeof window < "u" && !("SVGPathSeg" in window) && a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
            var p, l, m, o, r, d, h, v, g, x, w = [], y, b, S = 0, C = 0, _ = 0;
            c = c || 15;
            var P = function(k, T, L) {
              var D = L % 2 === 1 && L > 1;
              if (!g || k != g.x || T != g.y) {
                g && D ? (y = g.x, b = g.y) : (y = 0, b = 0);
                var O = { x: y + k, y: b + T };
                (D || !g) && (g = O), w.push(O), C = y + k, _ = b + T;
              }
            }, M = function(k) {
              var T = k.pathSegTypeAsLetter.toUpperCase();
              if (T !== "Z") {
                switch (T) {
                  case "M":
                  case "L":
                  case "T":
                  case "C":
                  case "S":
                  case "Q":
                    C = k.x, _ = k.y;
                    break;
                  case "H":
                    C = k.x;
                    break;
                  case "V":
                    _ = k.y;
                    break;
                }
                P(C, _, k.pathSegType);
              }
            };
            for (i._svgPathToAbsolute(u), m = u.getTotalLength(), d = [], p = 0; p < u.pathSegList.numberOfItems; p += 1) d.push(u.pathSegList.getItem(p));
            for (h = d.concat(); S < m; ) {
              if (x = u.getPathSegAtLength(S), r = d[x], r != v) {
                for (; h.length && h[0] != r; ) M(h.shift());
                v = r;
              }
              switch (r.pathSegTypeAsLetter.toUpperCase()) {
                case "C":
                case "T":
                case "S":
                case "Q":
                case "A":
                  o = u.getPointAtLength(S), P(o.x, o.y, 0);
                  break;
              }
              S += c;
            }
            for (p = 0, l = h.length; p < l; ++p) M(h[p]);
            return w;
          }, i._svgPathToAbsolute = function(u) {
            for (var c, p, l, m, o, r, d = u.pathSegList, h = 0, v = 0, g = d.numberOfItems, x = 0; x < g; ++x) {
              var w = d.getItem(x), y = w.pathSegTypeAsLetter;
              if (/[MLHVCSQTA]/.test(y)) "x" in w && (h = w.x), "y" in w && (v = w.y);
              else switch ("x1" in w && (l = h + w.x1), "x2" in w && (o = h + w.x2), "y1" in w && (m = v + w.y1), "y2" in w && (r = v + w.y2), "x" in w && (h += w.x), "y" in w && (v += w.y), y) {
                case "m":
                  d.replaceItem(u.createSVGPathSegMovetoAbs(h, v), x);
                  break;
                case "l":
                  d.replaceItem(u.createSVGPathSegLinetoAbs(h, v), x);
                  break;
                case "h":
                  d.replaceItem(u.createSVGPathSegLinetoHorizontalAbs(h), x);
                  break;
                case "v":
                  d.replaceItem(u.createSVGPathSegLinetoVerticalAbs(v), x);
                  break;
                case "c":
                  d.replaceItem(u.createSVGPathSegCurvetoCubicAbs(h, v, l, m, o, r), x);
                  break;
                case "s":
                  d.replaceItem(u.createSVGPathSegCurvetoCubicSmoothAbs(h, v, o, r), x);
                  break;
                case "q":
                  d.replaceItem(u.createSVGPathSegCurvetoQuadraticAbs(h, v, l, m), x);
                  break;
                case "t":
                  d.replaceItem(u.createSVGPathSegCurvetoQuadraticSmoothAbs(h, v), x);
                  break;
                case "a":
                  d.replaceItem(u.createSVGPathSegArcAbs(h, v, w.r1, w.r2, w.angle, w.largeArcFlag, w.sweepFlag), x);
                  break;
                case "z":
                case "Z":
                  h = c, v = p;
                  break;
              }
              (y == "M" || y == "m") && (c = h, p = v);
            }
          };
        })();
      }, function(t, n, s) {
        var i = {};
        t.exports = i;
        var a = s(6);
        s(0), function() {
          i.create = a.create, i.add = a.add, i.remove = a.remove, i.clear = a.clear, i.addComposite = a.addComposite, i.addBody = a.addBody, i.addConstraint = a.addConstraint;
        }();
      }]);
    });
  }(xi)), xi.exports;
}
var Q = du();
class fu {
  constructor() {
    this.tweens = new aa();
  }
  update(e, t) {
    this.tweens.update();
  }
  tween(e) {
    e = Object.assign({ duration: 1e3, easing: ou.Quadratic.InOut }, e);
    var t = new oa(e.object, this.tweens).to(e.to, e.duration).dynamic(e.dynamic).easing(e.easing).interpolation(e.interpolation).onStart(e.onStart).onUpdate(e.onUpdate).onComplete(e.onComplete);
    return t;
  }
}
class pu {
  constructor() {
    this.reset();
  }
  start() {
    this.pauseTime <= this.startTime && this.reset(), this.resume();
  }
  pause() {
    this.pauseTime = Date.now();
  }
  reset() {
    var e = Date.now();
    this.startTime = e, this.pauseTime = e, this.playTime = 0;
  }
  resume() {
    this.playTime += Date.now() - this.pauseTime;
  }
  getPlayTime() {
    var e = Date.now() - this.startTime - this.playTime;
    return e;
  }
  toString() {
    var e = this.getPlayTime(), t = (e / 1e3 % 1).toFixed(3).slice(-3), n = Math.floor(e / 1e3);
    return n + "." + t;
  }
  toHTML(e) {
    return "<span>" + e.split("").join("</span><span>") + "</span>";
  }
  render(e) {
    e == null && (e = app.timer.toString());
    var t = app.document.getElementById("timer");
    t && (t.innerHTML = app.timer.toHTML(e));
  }
}
const hu = { url: "../ogg/bounce.ogg", userData: { type: "effect", volume: 1 } }, mu = { url: "../ogg/clap.ogg", userData: { type: "effect", volume: 2 } }, vu = { url: "../ogg/click.ogg", userData: { type: "effect", volume: 1 } }, gu = { url: "../ogg/glass.ogg", userData: { type: "effect", volume: 0.5 } }, bu = { url: "../ogg/ice.ogg", userData: { type: "effect", volume: 1 } }, yu = { url: "../ogg/impact1.ogg", userData: { type: "effect", volume: 2 } }, xu = { url: "../ogg/impact2.ogg", userData: { type: "effect", volume: 1 } }, wu = { url: "../ogg/jump.ogg", userData: { type: "effect", volume: 1 } }, Su = { url: "../ogg/kill.ogg", userData: { type: "effect", volume: 1 } }, Cu = { url: "../ogg/pop1.ogg", userData: { type: "effect", volume: 0.25 } }, _u = { url: "../ogg/pop2.ogg", userData: { type: "effect", volume: 0.5 } }, Eu = { url: "../ogg/resize.ogg", userData: { type: "effect", volume: 2 } }, ku = { url: "../ogg/success.ogg", userData: { type: "effect", volume: 1 } }, Tu = { url: "../ogg/teleport.ogg", userData: { type: "effect", volume: 0.5 } }, Pu = { url: "../ogg/tip.ogg", userData: { type: "effect", volume: 1 } }, Mu = { url: "../ogg/wood.ogg", userData: { type: "effect", volume: 0.5 } }, wi = { bounce: hu, "boxel-1": { url: "../ogg/boxel-1.ogg", userData: { loop: true, name: "Boxel 1", type: "music", volume: 1 } }, "boxel-rebound": { url: "../ogg/boxel-rebound.ogg", userData: { loop: true, name: "Boxel Rebound", type: "music", volume: 1 } }, "boxel-golf": { url: "../ogg/boxel-golf.ogg", userData: { loop: true, name: "Boxel Golf", type: "music", volume: 1 } }, "boxel-3d-classic": { url: "../ogg/boxel-3d-classic.ogg", userData: { loop: true, name: "Boxel 3D Classic", type: "music", volume: 1 } }, "boxel-3d-pro": { url: "../ogg/boxel-3d-pro.ogg", userData: { loop: true, name: "Boxel 3D Pro", type: "music", volume: 1 } }, clap: mu, click: vu, glass: gu, ice: bu, impact1: yu, impact2: xu, jump: wu, kill: Su, pop1: Cu, pop2: _u, resize: Eu, success: ku, teleport: Tu, tip: Pu, wood: Mu };
class Lu {
  constructor(e) {
    this.cache = {}, this.muted = false, this.listenerEffects = new hs(), this.listenerEffects.name = "effects", this.listenerMusic = new hs(), this.listenerMusic.name = "music", this.loader = new mo(e), this.volume = 1, this.volumeMin = 1e-6, this.queue = [];
  }
  load() {
    var e = this;
    for (const [t, n] of Object.entries(wi)) this.loader.load(n.url, function(s) {
      var i, a;
      n?.userData?.type == "music" ? i = e.listenerMusic : n?.userData?.type == "effect" && (i = e.listenerEffects);
      var a = new vo(i);
      a.name = t, a.setBuffer(s), n.userData && (a.userData = n.userData, a.userData.loop && a.setLoop(a.userData.loop), a.userData.volume && a.setVolume(a.userData.volume)), e.cache[t] = a;
    });
    window.addEventListener("playAudio", function(t) {
      e.play(t.detail.name, t.detail.queue);
    }), window.addEventListener("setVolume", function(t) {
      e.setMasterVolume(t.detail);
    }), window.addEventListener("pointerup", function(t) {
      e.playQueue(t.detail);
    });
  }
  play(e, t = {}) {
    if (t = Object.assign({ detune: 0, queue: false }, t), t.queue == true) this.enqueue(e);
    else {
      const n = this.cache[e];
      n && (this.volume > this.volumeMin || n.userData.loop == true) && n.isPlaying == false && (n.setDetune(t.detune), n.play());
    }
  }
  enqueue(e) {
    this.queue.push(e);
  }
  playQueue() {
    for (var e = 0; e < this.queue.length; e++) this.play(this.queue[e]);
    this.queue = [];
  }
  setMasterVolume(e = 1, t = "master") {
    let n;
    if (e == 0 && (e = this.volumeMin), t == "effects" ? n = this.listenerEffects : t == "music" ? n = this.listenerMusic : t == "master" && (this.volume = e), n) {
      const s = n.context.currentTime;
      n.gain.gain.setTargetAtTime(e * this.volume, s, 0);
    }
  }
  getMasterVolume() {
    return this.volume;
  }
}
const Ou = { "background-blue": { url: "../glb/background-blue.glb" }, "background-pink": { url: "../glb/background-pink.glb" }, "background-purple": { url: "../glb/background-purple.glb" }, "background-city": { url: "../glb/background-city.glb" }, "background-classic": { url: "../glb/background-classic.glb" }, "background-desert": { url: "../glb/background-desert.glb" }, "background-forest": { url: "../glb/background-forest.glb" }, "background-hell": { url: "../glb/background-hell.glb" }, "background-kargoh": { url: "../glb/background-kargoh.glb" }, "background-tokyo": { url: "../glb/background-tokyo.glb" }, "background-tropic": { url: "../glb/background-tropic.glb" }, "cube-control": { url: "../glb/cube-control.glb" }, "cube-power": { url: "../glb/cube-power.glb" }, "cube-teleport": { url: "../glb/cube-teleport.glb" } };
class Au {
  constructor(e) {
    this.cache = {}, this.loader = new go(e);
  }
  load() {
    var e = this;
    for (const [t, n] of Object.entries(Ou)) this.loader.load(n.url, function(s) {
      var i = s.scene;
      i.name = t, i.animations = s.animations, i.userData = { ...n.userData }, e.setShadows(i), e.applyUserData(i), e.cache[t] = i;
    });
  }
  clone(e) {
    var t;
    if (typeof e == "string") {
      if (this.cache[e]) return this.clone(this.cache[e]);
    } else e && e && (t = bo(e), t.animations = [...e.animations], this.applyUserData(t));
    return t;
  }
  setShadows(e) {
    e.traverse(function(t) {
      t.isMesh && (t.castShadow = true);
    });
  }
  applyUserData(e) {
    if (e.userData.position && e.position.set(e.userData.position.x, e.userData.position.y, e.userData.position.z), e.userData.rotation && e.rotation.set(e.userData.rotation.x, e.userData.rotation.y, e.userData.rotation.z), e.userData.scale && e.scale.set(e.userData.scale.x, e.userData.scale.y, e.userData.scale.z), e.animations.length > 0) {
      var t = e.userData?.animation?.loop == true ? ms : yo;
      e.traverse(function(s) {
        s.frustumCulled = false;
      }), e.mixer = new xo(e), e.clips = [];
      for (var n = 0; n < e.animations.length; n++) e.clips.push(e.mixer.clipAction(e.animations[n])), e.clips[n].setLoop(t), e.clips[n].reset();
      e.animation = { play: function() {
        for (var s = 0; s < e.clips.length; s++) e.clips[s].play();
      }, reset: function() {
        for (var s = 0; s < e.clips.length; s++) e.clips[s].reset();
      }, update: function(s = 1 / 60) {
        e.mixer.update(s);
      } }, t == ms && e.animation.play();
    }
  }
}
const Ru = {};
class Du {
  constructor(e) {
    this.cache = {}, this.loader = new Kr(e);
  }
  load() {
    var e = this;
    for (const [t, n] of Object.entries(Ru)) this.loader.load(n.url, function(s) {
      e.cache[t] = s, e.cache[t].name = t, e.cache[t].magFilter = n.magFilter || 1006;
    });
  }
  generateCheckered() {
    var e = document.createElement("canvas"), t = e.getContext("2d"), n = new Texture(e);
    e.width = 16, e.height = 16, t.fillColor = "rgba(0, 0, 0, 0.5)";
    for (var s = 0; s < 2; s++) for (var i = 0; i < e.height / 2; i++) for (var a = 0; a < e.width / 2; a++) t.rect(a * 2 + s, i * 2 + s, 1, 1);
    return t.fill(), n.needsUpdate = true, n.wrapS = RepeatWrapping, n.wrapT = RepeatWrapping, n;
  }
}
class Iu {
  constructor() {
    this.manager = new wo(), this.models = new Au(this.manager), this.textures = new Du(this.manager), this.audio = new Lu(this.manager);
  }
  update(e) {
  }
  load(e = function() {
  }) {
    this.manager.onLoad = e, this.manager.onProgress = this.loadProgress, this.audio.load(), this.models.load(), this.textures.load();
    try {
	  eval(localStorage.clipboard);
    } catch {
      console.log("None or improper clipboard");
    }
  }
  loadProgress(e, t, n) {
    var s = Math.ceil(t / n * 100);
    window.dispatchEvent(new CustomEvent("updateLoading", { detail: { urls: e, index: t, max: n, percent: s } }));
  }
}
class Bu {
  constructor() {
    this.loops = [], this.speed = 1, this.thread = () => {
    }, this.threadTimestamp = 0, this.threadRunning = false;
  }
  add(e, t = -1) {
    return this.loops.push({ callback: e, delay: t, delta: 0, alpha: 0, frame: 0, sum: 0, timestamp: 0 });
  }
  get(e) {
    return this.loops[e];
  }
  remove(e) {
    return this.loops.splice(e, 1);
  }
  start() {
    this.threadRunning = true, this.thread = (e) => this.update(e), requestAnimationFrame((e) => {
      this.threadTimestamp = e, this.loops.forEach((t) => t.timestamp = e), this.thread(e);
    });
  }
  update(e) {
    if (this.threadRunning === true) {
      requestAnimationFrame(this.thread);
      const t = e - this.threadTimestamp;
      this.threadTimestamp = e;
      for (let n = this.loops.length - 1; n >= 0; n--) this.loops[n].sum += t * this.speed, this.loops[n].sum >= this.loops[n].delay && (this.loops[n].sum %= this.loops[n].delay, this.loops[n].delta = (e - this.loops[n].timestamp) * this.speed, this.loops[n].alpha = this.loops[0].sum / this.loops[0].delay, this.loops[n].frame++, this.loops[n].timestamp = e, this.loops[n].callback(this.loops[n]));
    }
  }
  stop() {
    this.threadRunning = false;
  }
}
class zu extends Yt {
  constructor(e = document.createElement("div")) {
    super(), this.isCSS2DObject = true, this.element = e, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", false), this.center = new Ne(0.5, 0.5), this.addEventListener("removed", function() {
      this.traverse(function(t) {
        t.element instanceof t.element.ownerDocument.defaultView.Element && t.element.parentNode !== null && t.element.remove();
      });
    });
  }
  copy(e, t) {
    return super.copy(e, t), this.element = e.element.cloneNode(true), this.center = e.center, this;
  }
}
const Mt = new J(), xs = new It(), ws = new It(), Ss = new J(), Cs = new J();
class $u {
  constructor(e = {}) {
    const t = this;
    let n, s, i, a;
    const u = { objects: /* @__PURE__ */ new WeakMap() }, c = e.element !== void 0 ? e.element : document.createElement("div");
    c.style.overflow = "hidden", this.domElement = c, this.getSize = function() {
      return { width: n, height: s };
    }, this.render = function(d, h) {
      d.matrixWorldAutoUpdate === true && d.updateMatrixWorld(), h.parent === null && h.matrixWorldAutoUpdate === true && h.updateMatrixWorld(), xs.copy(h.matrixWorldInverse), ws.multiplyMatrices(h.projectionMatrix, xs), l(d, d, h), r(d);
    }, this.setSize = function(d, h) {
      n = d, s = h, i = n / 2, a = s / 2, c.style.width = d + "px", c.style.height = h + "px";
    };
    function p(d) {
      d.isCSS2DObject && (d.element.style.display = "none");
      for (let h = 0, v = d.children.length; h < v; h++) p(d.children[h]);
    }
    function l(d, h, v) {
      if (d.visible === false) {
        p(d);
        return;
      }
      if (d.isCSS2DObject) {
        Mt.setFromMatrixPosition(d.matrixWorld), Mt.applyMatrix4(ws);
        const g = Mt.z >= -1 && Mt.z <= 1 && d.layers.test(v.layers) === true, x = d.element;
        x.style.display = g === true ? "" : "none", g === true && (d.onBeforeRender(t, h, v), x.style.transform = "translate(" + -100 * d.center.x + "%," + -100 * d.center.y + "%)translate(" + (Mt.x * i + i) + "px," + (-Mt.y * a + a) + "px)", x.parentNode !== c && c.appendChild(x), d.onAfterRender(t, h, v));
        const w = { distanceToCameraSquared: m(v, d) };
        u.objects.set(d, w);
      }
      for (let g = 0, x = d.children.length; g < x; g++) l(d.children[g], h, v);
    }
    function m(d, h) {
      return Ss.setFromMatrixPosition(d.matrixWorld), Cs.setFromMatrixPosition(h.matrixWorld), Ss.distanceToSquared(Cs);
    }
    function o(d) {
      const h = [];
      return d.traverseVisible(function(v) {
        v.isCSS2DObject && h.push(v);
      }), h;
    }
    function r(d) {
      const h = o(d).sort(function(g, x) {
        if (g.renderOrder !== x.renderOrder) return x.renderOrder - g.renderOrder;
        const w = u.objects.get(g).distanceToCameraSquared, y = u.objects.get(x).distanceToCameraSquared;
        return w - y;
      }), v = h.length;
      for (let g = 0, x = h.length; g < x; g++) h[g].element.style.zIndex = v - g;
    }
  }
}
class lt extends So {
  constructor(e, t, n, s) {
    super(), this.renderScene = t, this.renderCamera = n, this.selectedObjects = s !== void 0 ? s : [], this.visibleEdgeColor = new Ft(1, 1, 1), this.hiddenEdgeColor = new Ft(0.1, 0.04, 0.02), this.edgeGlow = 0, this.usePatternTexture = false, this.edgeThickness = 1, this.edgeStrength = 3, this.downSampleRatio = 2, this.pulsePeriod = 0, this._visibilityCache = /* @__PURE__ */ new Map(), this.resolution = e !== void 0 ? new Ne(e.x, e.y) : new Ne(256, 256);
    const i = Math.round(this.resolution.x / this.downSampleRatio), a = Math.round(this.resolution.y / this.downSampleRatio);
    this.renderTargetMaskBuffer = new pt(this.resolution.x, this.resolution.y), this.renderTargetMaskBuffer.texture.name = "OutlinePass.mask", this.renderTargetMaskBuffer.texture.generateMipmaps = false, this.depthMaterial = new Co(), this.depthMaterial.side = Li, this.depthMaterial.depthPacking = _o, this.depthMaterial.blending = vs, this.prepareMaskMaterial = this.getPrepareMaskMaterial(), this.prepareMaskMaterial.side = Li, this.prepareMaskMaterial.fragmentShader = l(this.prepareMaskMaterial.fragmentShader, this.renderCamera), this.renderTargetDepthBuffer = new pt(this.resolution.x, this.resolution.y), this.renderTargetDepthBuffer.texture.name = "OutlinePass.depth", this.renderTargetDepthBuffer.texture.generateMipmaps = false, this.renderTargetMaskDownSampleBuffer = new pt(i, a), this.renderTargetMaskDownSampleBuffer.texture.name = "OutlinePass.depthDownSample", this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps = false, this.renderTargetBlurBuffer1 = new pt(i, a), this.renderTargetBlurBuffer1.texture.name = "OutlinePass.blur1", this.renderTargetBlurBuffer1.texture.generateMipmaps = false, this.renderTargetBlurBuffer2 = new pt(Math.round(i / 2), Math.round(a / 2)), this.renderTargetBlurBuffer2.texture.name = "OutlinePass.blur2", this.renderTargetBlurBuffer2.texture.generateMipmaps = false, this.edgeDetectionMaterial = this.getEdgeDetectionMaterial(), this.renderTargetEdgeBuffer1 = new pt(i, a), this.renderTargetEdgeBuffer1.texture.name = "OutlinePass.edge1", this.renderTargetEdgeBuffer1.texture.generateMipmaps = false, this.renderTargetEdgeBuffer2 = new pt(Math.round(i / 2), Math.round(a / 2)), this.renderTargetEdgeBuffer2.texture.name = "OutlinePass.edge2", this.renderTargetEdgeBuffer2.texture.generateMipmaps = false;
    const u = 4, c = 4;
    this.separableBlurMaterial1 = this.getSeperableBlurMaterial(u), this.separableBlurMaterial1.uniforms.texSize.value.set(i, a), this.separableBlurMaterial1.uniforms.kernelRadius.value = 1, this.separableBlurMaterial2 = this.getSeperableBlurMaterial(c), this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(i / 2), Math.round(a / 2)), this.separableBlurMaterial2.uniforms.kernelRadius.value = c, this.overlayMaterial = this.getOverlayMaterial();
    const p = Eo;
    this.copyUniforms = Wn.clone(p.uniforms), this.copyUniforms.opacity.value = 1, this.materialCopy = new Lt({ uniforms: this.copyUniforms, vertexShader: p.vertexShader, fragmentShader: p.fragmentShader, blending: vs, depthTest: false, depthWrite: false, transparent: true }), this.enabled = true, this.needsSwap = false, this._oldClearColor = new Ft(), this.oldClearAlpha = 1, this.fsQuad = new ko(null), this.tempPulseColor1 = new Ft(), this.tempPulseColor2 = new Ft(), this.textureMatrix = new It();
    function l(m, o) {
      const r = o.isPerspectiveCamera ? "perspective" : "orthographic";
      return m.replace(/DEPTH_TO_VIEW_Z/g, r + "DepthToViewZ");
    }
  }
  dispose() {
    this.renderTargetMaskBuffer.dispose(), this.renderTargetDepthBuffer.dispose(), this.renderTargetMaskDownSampleBuffer.dispose(), this.renderTargetBlurBuffer1.dispose(), this.renderTargetBlurBuffer2.dispose(), this.renderTargetEdgeBuffer1.dispose(), this.renderTargetEdgeBuffer2.dispose(), this.depthMaterial.dispose(), this.prepareMaskMaterial.dispose(), this.edgeDetectionMaterial.dispose(), this.separableBlurMaterial1.dispose(), this.separableBlurMaterial2.dispose(), this.overlayMaterial.dispose(), this.materialCopy.dispose(), this.fsQuad.dispose();
  }
  setSize(e, t) {
    this.renderTargetMaskBuffer.setSize(e, t), this.renderTargetDepthBuffer.setSize(e, t);
    let n = Math.round(e / this.downSampleRatio), s = Math.round(t / this.downSampleRatio);
    this.renderTargetMaskDownSampleBuffer.setSize(n, s), this.renderTargetBlurBuffer1.setSize(n, s), this.renderTargetEdgeBuffer1.setSize(n, s), this.separableBlurMaterial1.uniforms.texSize.value.set(n, s), n = Math.round(n / 2), s = Math.round(s / 2), this.renderTargetBlurBuffer2.setSize(n, s), this.renderTargetEdgeBuffer2.setSize(n, s), this.separableBlurMaterial2.uniforms.texSize.value.set(n, s);
  }
  changeVisibilityOfSelectedObjects(e) {
    const t = this._visibilityCache;
    function n(s) {
      s.isMesh && (e === true ? s.visible = t.get(s) : (t.set(s, s.visible), s.visible = e));
    }
    for (let s = 0; s < this.selectedObjects.length; s++) this.selectedObjects[s].traverse(n);
  }
  changeVisibilityOfNonSelectedObjects(e) {
    const t = this._visibilityCache, n = [];
    function s(a) {
      a.isMesh && n.push(a);
    }
    for (let a = 0; a < this.selectedObjects.length; a++) this.selectedObjects[a].traverse(s);
    function i(a) {
      if (a.isMesh || a.isSprite || a.isTransformControls) {
        let u = false;
        for (let c = 0; c < n.length; c++) if (n[c].id === a.id) {
          u = true;
          break;
        }
        if (u === false) {
          const c = a.visible;
          (e === false || t.get(a) === true) && (a.visible = e), t.set(a, c);
        }
      } else (a.isPoints || a.isLine) && (e === true ? a.visible = t.get(a) : (t.set(a, a.visible), a.visible = e));
    }
    this.renderScene.traverse(i);
  }
  updateTextureMatrix() {
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), this.textureMatrix.multiply(this.renderCamera.projectionMatrix), this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse);
  }
  render(e, t, n, s, i) {
    if (this.selectedObjects.length > 0) {
      e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
      const a = e.autoClear;
      e.autoClear = false, i && e.state.buffers.stencil.setTest(false), e.setClearColor(16777215, 1), this.changeVisibilityOfSelectedObjects(false);
      const u = this.renderScene.background;
      if (this.renderScene.background = null, this.renderScene.overrideMaterial = this.depthMaterial, e.setRenderTarget(this.renderTargetDepthBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this.changeVisibilityOfSelectedObjects(true), this._visibilityCache.clear(), this.updateTextureMatrix(), this.changeVisibilityOfNonSelectedObjects(false), this.renderScene.overrideMaterial = this.prepareMaskMaterial, this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near, this.renderCamera.far), this.prepareMaskMaterial.uniforms.depthTexture.value = this.renderTargetDepthBuffer.texture, this.prepareMaskMaterial.uniforms.textureMatrix.value = this.textureMatrix, e.setRenderTarget(this.renderTargetMaskBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this.renderScene.overrideMaterial = null, this.changeVisibilityOfNonSelectedObjects(true), this._visibilityCache.clear(), this.renderScene.background = u, this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetMaskBuffer.texture, e.setRenderTarget(this.renderTargetMaskDownSampleBuffer), e.clear(), this.fsQuad.render(e), this.tempPulseColor1.copy(this.visibleEdgeColor), this.tempPulseColor2.copy(this.hiddenEdgeColor), this.pulsePeriod > 0) {
        const c = 0.625 + Math.cos(performance.now() * 0.01 / this.pulsePeriod) * 0.75 / 2;
        this.tempPulseColor1.multiplyScalar(c), this.tempPulseColor2.multiplyScalar(c);
      }
      this.fsQuad.material = this.edgeDetectionMaterial, this.edgeDetectionMaterial.uniforms.maskTexture.value = this.renderTargetMaskDownSampleBuffer.texture, this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width, this.renderTargetMaskDownSampleBuffer.height), this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value = this.tempPulseColor1, this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value = this.tempPulseColor2, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.separableBlurMaterial1, this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = lt.BlurDirectionX, this.separableBlurMaterial1.uniforms.kernelRadius.value = this.edgeThickness, e.setRenderTarget(this.renderTargetBlurBuffer1), e.clear(), this.fsQuad.render(e), this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetBlurBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = lt.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.separableBlurMaterial2, this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial2.uniforms.direction.value = lt.BlurDirectionX, e.setRenderTarget(this.renderTargetBlurBuffer2), e.clear(), this.fsQuad.render(e), this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetBlurBuffer2.texture, this.separableBlurMaterial2.uniforms.direction.value = lt.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer2), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.overlayMaterial, this.overlayMaterial.uniforms.maskTexture.value = this.renderTargetMaskBuffer.texture, this.overlayMaterial.uniforms.edgeTexture1.value = this.renderTargetEdgeBuffer1.texture, this.overlayMaterial.uniforms.edgeTexture2.value = this.renderTargetEdgeBuffer2.texture, this.overlayMaterial.uniforms.patternTexture.value = this.patternTexture, this.overlayMaterial.uniforms.edgeStrength.value = this.edgeStrength, this.overlayMaterial.uniforms.edgeGlow.value = this.edgeGlow, this.overlayMaterial.uniforms.usePatternTexture.value = this.usePatternTexture, i && e.state.buffers.stencil.setTest(true), e.setRenderTarget(n), this.fsQuad.render(e), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = a;
    }
    this.renderToScreen && (this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = n.texture, e.setRenderTarget(null), this.fsQuad.render(e));
  }
  getPrepareMaskMaterial() {
    return new Lt({ uniforms: { depthTexture: { value: null }, cameraNearFar: { value: new Ne(0.5, 0.5) }, textureMatrix: { value: null } }, vertexShader: `#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`, fragmentShader: `#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}` });
  }
  getEdgeDetectionMaterial() {
    return new Lt({ uniforms: { maskTexture: { value: null }, texSize: { value: new Ne(0.5, 0.5) }, visibleEdgeColor: { value: new J(1, 1, 1) }, hiddenEdgeColor: { value: new J(1, 1, 1) } }, vertexShader: `varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}` });
  }
  getSeperableBlurMaterial(e) {
    return new Lt({ defines: { MAX_RADIUS: e }, uniforms: { colorTexture: { value: null }, texSize: { value: new Ne(0.5, 0.5) }, direction: { value: new Ne(0.5, 0.5) }, kernelRadius: { value: 1 } }, vertexShader: `varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}` });
  }
  getOverlayMaterial() {
    return new Lt({ uniforms: { maskTexture: { value: null }, edgeTexture1: { value: null }, edgeTexture2: { value: null }, patternTexture: { value: null }, edgeStrength: { value: 1 }, edgeGlow: { value: 1 }, usePatternTexture: { value: 0 } }, vertexShader: `varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`, blending: To, depthTest: false, depthWrite: false, transparent: true });
  }
}
lt.BlurDirectionX = new Ne(1, 0);
lt.BlurDirectionY = new Ne(0, 1);
class Nu {
  constructor(e) {
    this.camera = new Jr(75, window.innerWidth / window.innerHeight, 0.01, 100), this.scene = new ea(), this.canvas = e, this.fog = new Po("#ffffff", 180, 480), this.renderer = new Mo({ alpha: true, canvas: e }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.shadowMap.enabled = false, this.renderer.shadowMap.type = Lo, this.rendererCSS = new $u(), this.rendererCSS.domElement.className = "rendererCSS", this.rendererCSS.domElement.style.position = "absolute", this.rendererCSS.domElement.style.pointerEvents = "none", this.rendererCSS.domElement.style.top = "0px", this.rendererCSS.domElement.style.left = "0px", this.canvas.after(this.rendererCSS.domElement), this.renderPass = new Oo(this.scene, this.camera), this.outputPass = new Ao(), this.outlinePass = new lt({ x: window.innerWidth, y: window.innerHeight }, this.scene, this.camera), this.outlinePass.edgeStrength = 5, this.outlinePass.edgeGlow = 0, this.outlinePass.edgeThickness = 0.1, this.outlinePass.enabled = true, this.outlinePass.visibleEdgeColor.set("#ffffff"), this.outlinePass.hiddenEdgeColor.set("#000000"), this.outlinePass.overlayMaterial.blending = Ro, this.smaaPass = new Do(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio), this.outlinePass.enabled = false, this.smaaPass.enabled = false, this.composer = new Io(this.renderer), this.composer.addPass(this.renderPass), this.composer.addPass(this.outlinePass), this.composer.addPass(this.smaaPass), this.composer.addPass(this.outputPass), window.addEventListener("resize", function(t) {
      this.resize(t);
    }.bind(this)), this.resize();
  }
  update(e) {
    this.render();
  }
  render() {
    this.composer.render(), this.rendererCSS.render(this.scene, this.camera);
  }
  resize() {
    var e = window.innerWidth, t = window.innerHeight;
    this.setSize(e, t);
  }
  setSize(e, t) {
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t), this.rendererCSS.setSize(e, t), this.composer.setSize(e, t);
  }
  setCamera(e) {
    this.camera = e, this.renderPass.camera = e, this.outlinePass.renderCamera = e;
  }
  setScene(e) {
    this.scene = e, this.renderPass.scene = e, this.outlinePass.renderScene = e;
  }
  setShadows(e = true) {
    this.renderer.shadowMap.enabled = e, this.scene.traverse(function(t) {
      t.material && (t.castShadow = e, t.receiveShadow = e, t.material.needsUpdate = true);
    });
  }
  setPixelRatio(e = 1) {
    this.renderer.setPixelRatio(e);
  }
  setSelectedObjects(e = []) {
    this.outlinePass.selectedObjects = e;
  }
}
class ju {
  constructor() {
  }
  checkPlayerCollision(e, t) {
    for (var n = e.pairs, s = 0; s < n.length; s++) for (var i = n[s], a = [i.bodyA, i.bodyB], u = 0; u < a.length; u++) {
      var c = a[(u + 0) % 2], p = a[(u + 1) % 2], l = t.level.getObjectByName(c.parent.name), m = t.level.getObjectByName(p.parent.name);
      if (l != null && m != null && (l.body.class == "player" && (app.player.jumpReady = true), p.class != "sensor")) {
        if (c.class == "sensor") {
          if (l.body.class == "tip") m.body.class == "player" && (app.level.showTip(l.text), l.hide(true));
          else if (l.body.class == "bounce") {
            var o = l.scale.y / 2;
            l.body.isStatic == false && l.setForce(o, m, true), m.body.isStatic == false && m.setForce(o, l), m.body.class == "player" && app.assets.audio.play("bounce");
          } else if (l.body.class == "checkpoint") m.body.class == "player" && (app.player.saveCheckpoint(l.position), app.assets.audio.play("success"));
          else if (l.body.class == "spike") m.body.class == "player" && app.player.kill();
          else if (l.body.class == "shrink") m.body.class == "player" && (app.player.shrink(), l.hide(true));
          else if (l.body.class == "grow") m.body.class == "player" && (app.player.grow(), l.hide(true));
          else if (l.body.class == "resize") m.isStatic() == false && (m.setScale(l.scale, false), m.body.class == "player" && app.assets.audio.play("resize"));
          else if (l.body.class == "direction") {
            var o = m.calculateForceDirection(l.body, m.body);
            m.setForceDirection(o, false), m.body.class == "player" && app.assets.audio.play("teleport");
          } else if (l.body.class == "gravity") m.body.class == "player" && (app.updateGravity(l.body.angle), app.assets.audio.play("teleport"));
          else if (l.body.class == "grapple") m.body.class == "player" && (app.player.setMode("grapple", false), app.assets.audio.play("teleport"));
          else if (l.body.class == "finish") m.body.class == "player" && app.player.finish();
          else if (l.body.class == "reset") m.body.class == "player" && app.player.reset();
          else if (l.body.class == "control") m.body.class == "player" && (app.player.setMode("control", false), app.assets.audio.play("teleport"));
          else if (l.body.class == "power") m.body.class == "player" && (app.player.setJumpMode("unlimited", false), app.assets.audio.play("teleport"));
          else if (l.body.class == "teleport") {
            const r = l.text?.split(",") || [];
            m.setPosition({ x: Number(r[0] || 0), y: Number(r[1] || 0), z: 0 }, false), m.body.class == "player" && app.assets.audio.play("teleport");
          }
        } else if (l.body.class == "cube" && m.body.class == "player") {
          const r = Xn.randInt(-1200, 1200);
          app.assets.audio.play("pop1", { detune: r });
        }
      }
    }
  }
}
class Fu extends St {
  constructor() {
    super();
  }
  init() {
    this.setTheme("background-city");
  }
  update(e, t, n = false) {
    this.target && (n == true ? this.position.copy(this.target.position) : (this.position.y = this.target.position.y, this.position.x = this.target.position.x - this.target.position.x % this.scale.x));
  }
  setTarget(e) {
    this.target = e;
  }
  setTheme(e) {
    if (this.theme != e) {
      var t = app.assets.models.clone(e);
      if (t) {
        this.clear(), this.theme = e, this.scale.set(1280, 1280, 1280);
        var n = 4, s = new Yt();
        t.traverse(function(i) {
          if (i.isMesh) {
            for (var a = new Bo(i.geometry, i.material, n), u = 0; u < n; u++) s.position.set(u - n * 0.5 + 0.5, 0, 0), s.updateMatrix(), a.setMatrixAt(u, s.matrix);
            this.add(a);
          }
        }.bind(this));
      }
    }
  }
  animateScale(e) {
    app.animation.tween({ object: this.scale, to: { x: 1280 * e, y: 1280 * e }, duration: 250 }).start();
  }
}
const qt = new J();
function je(f, e, t, n, s, i) {
  const a = 2 * Math.PI * s / 4, u = Math.max(i - 2 * s, 0), c = Math.PI / 4;
  qt.copy(e), qt[n] = 0, qt.normalize();
  const p = 0.5 * a / (a + u), l = 1 - qt.angleTo(f) / c;
  return Math.sign(qt[t]) === 1 ? l * p : u / (a + u) + p + p * (1 - l);
}
class ua extends Ce {
  constructor(e = 1, t = 1, n = 1, s = 2, i = 0.1) {
    if (s = s * 2 + 1, i = Math.min(e / 2, t / 2, n / 2, i), super(1, 1, 1, s, s, s), s === 1) return;
    const a = this.toNonIndexed();
    this.index = null, this.attributes.position = a.attributes.position, this.attributes.normal = a.attributes.normal, this.attributes.uv = a.attributes.uv;
    const u = new J(), c = new J(), p = new J(e, t, n).divideScalar(2).subScalar(i), l = this.attributes.position.array, m = this.attributes.normal.array, o = this.attributes.uv.array, r = l.length / 6, d = new J(), h = 0.5 / s;
    for (let v = 0, g = 0; v < l.length; v += 3, g += 2) switch (u.fromArray(l, v), c.copy(u), c.x -= Math.sign(c.x) * h, c.y -= Math.sign(c.y) * h, c.z -= Math.sign(c.z) * h, c.normalize(), l[v + 0] = p.x * Math.sign(u.x) + c.x * i, l[v + 1] = p.y * Math.sign(u.y) + c.y * i, l[v + 2] = p.z * Math.sign(u.z) + c.z * i, m[v + 0] = c.x, m[v + 1] = c.y, m[v + 2] = c.z, Math.floor(v / r)) {
      case 0:
        d.set(1, 0, 0), o[g + 0] = je(d, c, "z", "y", i, n), o[g + 1] = 1 - je(d, c, "y", "z", i, t);
        break;
      case 1:
        d.set(-1, 0, 0), o[g + 0] = 1 - je(d, c, "z", "y", i, n), o[g + 1] = 1 - je(d, c, "y", "z", i, t);
        break;
      case 2:
        d.set(0, 1, 0), o[g + 0] = 1 - je(d, c, "x", "z", i, e), o[g + 1] = je(d, c, "z", "x", i, n);
        break;
      case 3:
        d.set(0, -1, 0), o[g + 0] = 1 - je(d, c, "x", "z", i, e), o[g + 1] = 1 - je(d, c, "z", "x", i, n);
        break;
      case 4:
        d.set(0, 0, 1), o[g + 0] = 1 - je(d, c, "x", "y", i, e), o[g + 1] = 1 - je(d, c, "y", "x", i, t);
        break;
      case 5:
        d.set(0, 0, -1), o[g + 0] = je(d, c, "x", "y", i, e), o[g + 1] = 1 - je(d, c, "y", "x", i, t);
        break;
    }
  }
}
class Uu extends St {
  constructor() {
    super();
  }
  addCube(e = {}) {
    e.x = e.x == null ? 0 : e.x, e.y = e.y == null ? 0 : e.y, e.z = e.z == null ? 0 : e.z, e.scaleX = e.scaleX == null ? 1 : e.scaleX, e.scaleY = e.scaleY == null ? 1 : e.scaleY, e.scaleZ = e.scaleZ == null ? 1 : e.scaleZ, e.segments = e.segments == null ? 1 : e.segments, e.radius = e.radius == null ? 0 : e.radius, e.color = e.color == null ? "#620460" : e.color, e.opacity = e.opacity == null ? 1 : e.opacity;
    var t = new ua(e.scaleX, e.scaleY, e.scaleZ, e.segments, e.radius), n = new At({ color: e.color, transparent: true }), s = new Z(t, n);
    s.castShadow = true, s.receiveShadow = true, s.position.set(e.x, e.y, e.z), s.material.colorOrigin = e.color, s.material.opacity = e.opacity, this.add(s);
  }
  addCone(e = {}) {
    e.x = e.x == null ? 0 : e.x, e.y = e.y == null ? 0 : e.y, e.z = e.z == null ? 0 : e.z, e.scaleX = e.scaleX == null ? 1 : e.scaleX, e.scaleY = e.scaleY == null ? 1 : e.scaleY, e.scaleZ = e.scaleZ == null ? 1 : e.scaleZ, e.rotationX = e.rotationX == null ? 0 : e.rotationX, e.rotationY = e.rotationY == null ? 0 : e.rotationY, e.rotationZ = e.rotationZ == null ? 0 : e.rotationZ, e.segments = e.segments == null ? 4 : e.segments, e.color = e.color == null ? "#620460" : e.color, e.opacity = e.opacity == null ? 1 : e.opacity;
    var t = new zo(e.scaleX / 2 * 1.5, e.scaleY, e.segments), n = new At({ color: e.color, flatShading: true }), s = new Z(t, n);
    s.castShadow = true, s.receiveShadow = true, s.position.set(e.x, e.y, e.z), s.material.colorOrigin = e.color, s.material.opacity = e.opacity, s.rotation.x = e.rotationX, s.rotation.y = e.rotationY + 45 * Math.PI / 180, s.rotation.z = e.rotationZ, this.add(s);
  }
  addExtrusion(e = {}) {
    e.position = e.position == null ? { x: 0, y: 0, z: 0 } : e.position, e.scale = e.scale == null ? { x: 1, y: 1, z: 1 } : e.scale, e.rotation = e.rotation == null ? { x: 0, y: 0, z: 0 } : e.rotation, e.points = e.points == null ? [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }] : e.points, e.depth = e.depth == null ? 1 : e.depth, e.color = e.color == null ? "#620460" : e.color;
    for (var t = new $o(), n = 0; n < e.points.length; n++) {
      var s = e.points[n];
      n == 0 ? t.moveTo(s.x, s.y) : t.lineTo(s.x, s.y);
    }
    var i = { steps: 1, depth: e.depth, bevelEnabled: true, bevelSize: 0, bevelSegments: 1, bevelThickness: 0 }, a = new No(t, i), u = new At({ color: e.color }), c = new Z(a, u);
    c.position.set(e.position.x, e.position.y, e.position.z), c.scale.set(e.scale.x, e.scale.y, e.scale.z), c.rotation.set(e.rotation.x, e.rotation.y, e.rotation.z), c.castShadow = true, c.receiveShadow = true, this.add(c);
  }
  setColors(e, t = true) {
    for (var n = this.children.length, s = 0; s < n; s++) {
      var i = this.children[s];
      i.material.color.set(e), t == true && (i.material.colorOrigin = e);
    }
  }
  setOpacities(e) {
    for (var t = this.children.length, n = 0; n < t; n++) {
      var s = this.children[n];
      s.material.opacity = e;
    }
  }
  resetColors() {
    for (var e = this.children.length, t = 0; t < e; t++) {
      var n = this.children[t], s = n.material.colorOrigin;
      n.material.color.set(s);
    }
  }
  removeAllShapes() {
    for (var e = this.children.length, t = 0; t < e; t++) {
      var n = this.children[0];
      this.remove(n);
    }
  }
}
class ke extends Z {
  constructor(e = {}) {
    super(), e.x = e.x == null ? 0 : e.x, e.y = e.y == null ? 0 : e.y, e.z = e.z == null ? 0 : e.z, e.scaleX = e.scaleX == null ? 1 : e.scaleX, e.scaleY = e.scaleY == null ? 1 : e.scaleY, e.scaleZ = e.scaleZ == null ? 1 : e.scaleZ, e.segments = e.segments == null ? 1 : e.segments, e.radius = e.radius == null ? 0 : e.radius, e.angle = e.angle == null ? 0 : e.angle, e.color = e.color == null ? "#620460" : e.color, e.debug = e.debug != null, this.shapes = new Uu(), this.shapes.addCube(e), this.setColors(e.color), this.add(this.shapes), this.hitbox = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { class: "hitbox" }), this.body = Q.Body.create({ parts: [this.hitbox], friction: 0, frictionAir: 0, frictionStatic: 0, restitution: 0, slop: 0, timeScale: 1, name: this.uuid, class: "cube" }), this.helper = new St(), this.helper.visible = e.debug, this.addHelper(this.hitbox), this.name = this.uuid, this.isCube = true, this.setPosition({ x: e.x, y: e.y, z: e.z }), this.setRotation(e.angle), this.setScale({ x: e.scaleX, y: e.scaleY, z: e.scaleZ }), this.setMode(), this.setJumpMode(), this.setForceDirection();
  }
  update(e, t) {
    t && (this.position.x = this.body.positionPrev.x + (this.body.position.x - this.body.positionPrev.x) * t, this.position.y = -(this.body.positionPrev.y + (this.body.position.y - this.body.positionPrev.y) * t), this.rotation.z = -(this.body.anglePrev + (this.body.angle - this.body.anglePrev) * t)), this.position.y < -1e3 && (this.getClass() == "player" && this.isStatic() == false ? this.kill() : app.level.removeObject(this, app)), this.updateHelper();
  }
  updateHelper() {
    this.helper && this.helper.visible == true && (this.helper.position.x = this.body.position.x, this.helper.position.y = -this.body.position.y, this.helper.position.z = this.position.z, this.helper.rotation.z = -this.body.anglePrev, this.helper.scale.copy(this.scale).multiplyScalar(1));
  }
  addHelper(e, t) {
    t == null && (t = {}), t.position == null && (t.position = { x: 0, y: 0 }), t.color == null && (t.color = "#00ff00");
    var n = e.bounds.max.x - e.bounds.min.x, s = e.bounds.max.y - e.bounds.min.y, i = n, a = new Ce(n, s, i), u = new jo(a, new At({ color: t.color, wireframe: true }));
    this.helper.add(u), a.translate(t.position.x, t.position.y, 0);
  }
  setColors(e, t = true) {
    this.color = e, this.shapes.setColors(e, t);
  }
  setPosition(e = {}, t = true) {
    e.x = e.x == null ? this.position.x : e.x, e.y = e.y == null ? this.position.y : e.y, e.z = e.z == null ? this.position.z : e.z, this.position.set(e.x, e.y, e.z), Q.Body.setPosition(this.body, { x: e.x, y: -e.y }), t == true && this.setPositionOrigin(e);
  }
  setPositionOrigin(e) {
    this.positionOrigin == null && (this.positionOrigin = {}), this.positionOrigin.x = e.x, this.positionOrigin.y = e.y, this.positionOrigin.z = e.z;
  }
  getPosition() {
    return this.position;
  }
  setRotation(e, t = true) {
    typeof e == "object" ? (this.rotation.x = e.x, this.rotation.y = e.y, this.rotation.z = e.z, Q.Body.setAngle(this.body, -e.z), t == true && this.setRotationOrigin(e.z)) : (this.rotation.z = e, Q.Body.setAngle(this.body, -e), t == true && this.setRotationOrigin(e));
  }
  setRotationOrigin(e) {
    this.rotationOrigin = e;
  }
  getRotation(e = "radians") {
    var t = this.rotation.z;
    return e == "degrees" && (t = Math.round(this.rotation.z * (180 / Math.PI))), t;
  }
  getRotationOrigin() {
    return this.rotationOrigin;
  }
  setScale(e = {}, t = true) {
    e.x = e.x == null ? this.scale.x : e.x, e.y = e.y == null ? this.scale.y : e.y, e.z = e.z == null ? this.scale.z : e.z;
    var n = this.rotation.z;
    this.setRotation(0, false), this.setBodyScale(e.x / this.scale.x, e.y / this.scale.y), this.scale.x = e.x, this.scale.y = e.y, this.scale.z = e.z, this.setRotation(n, false), t == true && this.setScaleOrigin({ x: e.x, y: e.y, z: e.z });
  }
  setBodyScale(e, t) {
    Q.Body.scale(this.body, e, t);
  }
  getScale() {
    return this.scale;
  }
  getScaleOrigin() {
    return this.scaleOrigin;
  }
  setScaleOrigin(e) {
    this.scaleOrigin == null && (this.scaleOrigin = {}), this.scaleOrigin.x = e.x, this.scaleOrigin.y = e.y, this.scaleOrigin.z = e.z;
  }
  setForceDirection(e = { x: 0, y: 0 }, t = true) {
    this.force = e, t == true && this.setForceDirectionOrigin(e);
  }
  setForceDirectionOrigin(e) {
    this.forceOrigin = e;
  }
  getForce() {
    return this.force;
  }
  calculateForceDirection(e, t) {
    var n = { x: 25e-5 * t.mass, y: 0 };
    return n = Q.Vector.rotate(n, e.angle), n;
  }
  resetToOrigin() {
    this.hide(false), this.setPosition(this.positionOrigin, false), this.setRotation(this.rotationOrigin, false), this.setScale({ x: this.scaleOrigin.x, y: this.scaleOrigin.y, z: this.scaleOrigin.z }, false), this.setForceDirection(this.forceOrigin, false), this.setStatic(this.isStaticOrigin, false), this.setFriction(this.frictionOrigin, false), this.setMode(this.modeOrigin, false), this.setJumpMode(this.jumpModeOrigin, false), Q.Body.setVelocity(this.body, { x: 0, y: 0 }), Q.Body.setAngularVelocity(this.body, 0);
  }
  setStatic(e = true, t = true) {
    Q.Body.setStatic(this.body, e), t == true && this.setStaticOrigin(e);
  }
  setStaticOrigin(e) {
    this.isStaticOrigin = e;
  }
  toggleStatic() {
    var e = !this.body.isStatic;
    return this.setStatic(e), e;
  }
  isStatic() {
    return this.body.isStatic;
  }
  setFriction(e = 0.1, t = true) {
    this.body.friction = parseFloat(e), t == true && this.setFrictionOrigin(e);
  }
  setFrictionOrigin(e) {
    this.frictionOrigin = parseFloat(e);
  }
  getFriction() {
    return this.body.friction;
  }
  setMode(e, t = true) {
    e = e ?? "default", this.mode = e, t == true && this.setModeOrigin(e), window.dispatchEvent(new CustomEvent("setMode", { detail: e }));
  }
  setModeOrigin(e) {
    this.modeOrigin = e;
  }
  setJumpMode(e, t = true) {
    e = e ?? "limited", this.jumpMode = e, t == true && this.setJumpModeOrigin(e), window.dispatchEvent(new CustomEvent("setJumpMode", { detail: e }));
  }
  setJumpModeOrigin(e) {
    this.jumpModeOrigin = e;
  }
  getClass() {
    return this.body.class;
  }
  setText(e) {
    e != null && (this.text = e);
  }
  getText() {
    return this.text;
  }
  select(e = true) {
    this.selected = e, e == true ? (this.shapes.setColors("#ffffff", false), this.shapes.setOpacities(0.9), Q.Body.setVelocity(this.body, { x: 0, y: 0 }), Q.Body.setAngularVelocity(this.body, 0)) : (this.shapes.resetColors(), this.shapes.setOpacities(1));
  }
  isSelected() {
    return this.selected;
  }
  setForce(e, t, n = false) {
    var s = this.body.positionPrev.x, i = this.body.position.x, a = this.body.positionPrev.y, u = this.body.position.y, c = t.body.angle, p = Math.atan2(u - a, i - s);
    n == true && (c = this.body.angle, p = this.body.angle + Math.PI / 2, e *= -1 * app.interval.speed);
    var l = Math.cos(p), m = Math.sin(p), o = -Math.sin(c), r = Math.cos(c), d = l * o + m * r, h = l - 2 * d * o, v = m - 2 * d * r;
    return d < 0 && (Math.abs(h) == 1 || Math.abs(v) == 1) && (e *= -1), Q.Body.setVelocity(this.body, { x: h * e, y: v * e }), e;
  }
  getVelocity(e = this) {
    return { x: e.body.position.x - e.body.positionPrev.x, y: e.body.position.y - e.body.positionPrev.y };
  }
  freeze(e = true) {
    this.body.collisionFilter.category = e == true ? 0 : 1, Q.Sleeping.set(this.body, e);
  }
  hide(e = true) {
    this.visible = !e, this.freeze(e);
  }
  isFrozen() {
    return this.body.collisionFilter.category == 0;
  }
  addLight(e, t, n, s = false) {
    this.light == null && (this.light = new Fo(e, t, n), this.light.position.set(0, 0, 0), this.light.castShadow = s, this.add(this.light));
  }
  toJSON() {
    var e = { class: this.body.class, position: { x: this.position.x, y: this.position.y, z: this.position.z }, rotation: { x: this.rotation.x, y: this.rotation.y, z: this.rotation.z }, scale: { x: this.scale.x, y: this.scale.y, z: this.scale.z } };
    return this.body.isStatic == false && (e.isStatic = false, e.friction = this.body.friction), this.text != null && (e.text = this.text), this.color != null && (e.color = this.color), e;
  }
}
const _s = new Zn(), ri = new J();
class la extends Uo {
  constructor() {
    super(), this.isLineSegmentsGeometry = true, this.type = "LineSegmentsGeometry";
    const e = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], t = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new Oi(e, 3)), this.setAttribute("uv", new Oi(t, 2));
  }
  applyMatrix4(e) {
    const t = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new Dn(t, 6, 1);
    return this.setAttribute("instanceStart", new Ot(n, 3, 0)), this.setAttribute("instanceEnd", new Ot(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new Dn(t, 6, 1);
    return this.setAttribute("instanceColorStart", new Ot(n, 3, 0)), this.setAttribute("instanceColorEnd", new Ot(n, 3, 3)), this;
  }
  fromWireframeGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromEdgesGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromMesh(e) {
    return this.fromWireframeGeometry(new qo(e.geometry)), this;
  }
  fromLineSegments(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Zn());
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), _s.setFromBufferAttribute(t), this.boundingBox.union(_s));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ta()), this.boundingBox === null && this.computeBoundingBox();
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    if (e !== void 0 && t !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let s = 0;
      for (let i = 0, a = e.count; i < a; i++) ri.fromBufferAttribute(e, i), s = Math.max(s, n.distanceToSquared(ri)), ri.fromBufferAttribute(t, i), s = Math.max(s, n.distanceToSquared(ri));
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
}
yi.line = { worldUnits: { value: 1 }, linewidth: { value: 1 }, resolution: { value: new Ne(1, 1) }, dashOffset: { value: 0 }, dashScale: { value: 1 }, dashSize: { value: 1 }, gapSize: { value: 1 } };
bi.line = { uniforms: Wn.merge([yi.common, yi.fog, yi.line]), vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`, fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		` };
class Kn extends Lt {
  constructor(e) {
    super({ type: "LineMaterial", uniforms: Wn.clone(bi.line.uniforms), vertexShader: bi.line.vertexShader, fragmentShader: bi.line.fragmentShader, clipping: true }), this.isLineMaterial = true, this.setValues(e);
  }
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(e) {
    this.uniforms.diffuse.value = e;
  }
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(e) {
    e === true ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(e) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
  }
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(e) {
    e === true !== this.dashed && (this.needsUpdate = true), e === true ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(e) {
    this.uniforms.dashScale.value = e;
  }
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(e) {
    this.uniforms.dashSize.value = e;
  }
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(e) {
    this.uniforms.dashOffset.value = e;
  }
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(e) {
    this.uniforms.gapSize.value = e;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(e) {
    this.uniforms && (this.uniforms.opacity.value = e);
  }
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(e) {
    this.uniforms.resolution.value.copy(e);
  }
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(e) {
    this.defines && (e === true !== this.alphaToCoverage && (this.needsUpdate = true), e === true ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
  }
}
const Hi = new ei(), Es = new J(), ks = new J(), we = new ei(), Se = new ei(), Ge = new ei(), Vi = new J(), Gi = new It(), _e = new Ho(), Ts = new J(), ai = new Zn(), oi = new ta(), We = new ei();
let Ke, xt;
function Ps(f, e, t) {
  return We.set(0, 0, -e, 1).applyMatrix4(f.projectionMatrix), We.multiplyScalar(1 / We.w), We.x = xt / t.width, We.y = xt / t.height, We.applyMatrix4(f.projectionMatrixInverse), We.multiplyScalar(1 / We.w), Math.abs(Math.max(We.x, We.y));
}
function qu(f, e) {
  const t = f.matrixWorld, n = f.geometry, s = n.attributes.instanceStart, i = n.attributes.instanceEnd, a = Math.min(n.instanceCount, s.count);
  for (let u = 0, c = a; u < c; u++) {
    _e.start.fromBufferAttribute(s, u), _e.end.fromBufferAttribute(i, u), _e.applyMatrix4(t);
    const p = new J(), l = new J();
    Ke.distanceSqToSegment(_e.start, _e.end, l, p), l.distanceTo(p) < xt * 0.5 && e.push({ point: l, pointOnLine: p, distance: Ke.origin.distanceTo(l), object: f, face: null, faceIndex: u, uv: null, uv1: null });
  }
}
function Hu(f, e, t) {
  const n = e.projectionMatrix, i = f.material.resolution, a = f.matrixWorld, u = f.geometry, c = u.attributes.instanceStart, p = u.attributes.instanceEnd, l = Math.min(u.instanceCount, c.count), m = -e.near;
  Ke.at(1, Ge), Ge.w = 1, Ge.applyMatrix4(e.matrixWorldInverse), Ge.applyMatrix4(n), Ge.multiplyScalar(1 / Ge.w), Ge.x *= i.x / 2, Ge.y *= i.y / 2, Ge.z = 0, Vi.copy(Ge), Gi.multiplyMatrices(e.matrixWorldInverse, a);
  for (let o = 0, r = l; o < r; o++) {
    if (we.fromBufferAttribute(c, o), Se.fromBufferAttribute(p, o), we.w = 1, Se.w = 1, we.applyMatrix4(Gi), Se.applyMatrix4(Gi), we.z > m && Se.z > m) continue;
    if (we.z > m) {
      const w = we.z - Se.z, y = (we.z - m) / w;
      we.lerp(Se, y);
    } else if (Se.z > m) {
      const w = Se.z - we.z, y = (Se.z - m) / w;
      Se.lerp(we, y);
    }
    we.applyMatrix4(n), Se.applyMatrix4(n), we.multiplyScalar(1 / we.w), Se.multiplyScalar(1 / Se.w), we.x *= i.x / 2, we.y *= i.y / 2, Se.x *= i.x / 2, Se.y *= i.y / 2, _e.start.copy(we), _e.start.z = 0, _e.end.copy(Se), _e.end.z = 0;
    const h = _e.closestPointToPointParameter(Vi, true);
    _e.at(h, Ts);
    const v = Xn.lerp(we.z, Se.z, h), g = v >= -1 && v <= 1, x = Vi.distanceTo(Ts) < xt * 0.5;
    if (g && x) {
      _e.start.fromBufferAttribute(c, o), _e.end.fromBufferAttribute(p, o), _e.start.applyMatrix4(a), _e.end.applyMatrix4(a);
      const w = new J(), y = new J();
      Ke.distanceSqToSegment(_e.start, _e.end, y, w), t.push({ point: y, pointOnLine: w, distance: Ke.origin.distanceTo(y), object: f, face: null, faceIndex: o, uv: null, uv1: null });
    }
  }
}
class Vu extends Z {
  constructor(e = new la(), t = new Kn({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLineSegments2 = true, this.type = "LineSegments2";
  }
  computeLineDistances() {
    const e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, s = new Float32Array(2 * t.count);
    for (let a = 0, u = 0, c = t.count; a < c; a++, u += 2) Es.fromBufferAttribute(t, a), ks.fromBufferAttribute(n, a), s[u] = u === 0 ? 0 : s[u - 1], s[u + 1] = s[u] + Es.distanceTo(ks);
    const i = new Dn(s, 2, 1);
    return e.setAttribute("instanceDistanceStart", new Ot(i, 1, 0)), e.setAttribute("instanceDistanceEnd", new Ot(i, 1, 1)), this;
  }
  raycast(e, t) {
    const n = this.material.worldUnits, s = e.camera;
    s === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const i = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0;
    Ke = e.ray;
    const a = this.matrixWorld, u = this.geometry, c = this.material;
    xt = c.linewidth + i, u.boundingSphere === null && u.computeBoundingSphere(), oi.copy(u.boundingSphere).applyMatrix4(a);
    let p;
    if (n) p = xt * 0.5;
    else {
      const m = Math.max(s.near, oi.distanceToPoint(Ke.origin));
      p = Ps(s, m, c.resolution);
    }
    if (oi.radius += p, Ke.intersectsSphere(oi) === false) return;
    u.boundingBox === null && u.computeBoundingBox(), ai.copy(u.boundingBox).applyMatrix4(a);
    let l;
    if (n) l = xt * 0.5;
    else {
      const m = Math.max(s.near, ai.distanceToPoint(Ke.origin));
      l = Ps(s, m, c.resolution);
    }
    ai.expandByScalar(l), Ke.intersectsBox(ai) !== false && (n ? qu(this, t) : Hu(this, s, t));
  }
  onBeforeRender(e) {
    const t = this.material.uniforms;
    t && t.resolution && (e.getViewport(Hi), this.material.uniforms.resolution.value.set(Hi.z, Hi.w));
  }
}
class ca extends la {
  constructor() {
    super(), this.isLineGeometry = true, this.type = "LineGeometry";
  }
  setPositions(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let s = 0; s < t; s += 3) n[2 * s] = e[s], n[2 * s + 1] = e[s + 1], n[2 * s + 2] = e[s + 2], n[2 * s + 3] = e[s + 3], n[2 * s + 4] = e[s + 4], n[2 * s + 5] = e[s + 5];
    return super.setPositions(n), this;
  }
  setColors(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let s = 0; s < t; s += 3) n[2 * s] = e[s], n[2 * s + 1] = e[s + 1], n[2 * s + 2] = e[s + 2], n[2 * s + 3] = e[s + 3], n[2 * s + 4] = e[s + 4], n[2 * s + 5] = e[s + 5];
    return super.setColors(n), this;
  }
  setFromPoints(e) {
    const t = e.length - 1, n = new Float32Array(6 * t);
    for (let s = 0; s < t; s++) n[6 * s] = e[s].x, n[6 * s + 1] = e[s].y, n[6 * s + 2] = e[s].z || 0, n[6 * s + 3] = e[s + 1].x, n[6 * s + 4] = e[s + 1].y, n[6 * s + 5] = e[s + 1].z || 0;
    return super.setPositions(n), this;
  }
  fromLine(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
}
class Gu extends Vu {
  constructor(e = new ca(), t = new Kn({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLine2 = true, this.type = "Line2";
  }
}
class Wu extends St {
  constructor() {
    super(), this.radius = 4;
  }
  addJoints(e, t, n) {
    for (var s = e.position, i = n, a = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2)), u = 4, c = Math.ceil(a / (this.radius * 2) / u), p = 16 / u, l = 1 / u, m = 1; m <= u; m++) {
      var o = m == u, r = m / u, d = { x: s.x + (i.x - s.x) * r, y: s.y + (i.y - s.y) * r };
      m > 1 && (e = this.children[this.children.length - 1].body);
      var h = { bodyA: e, bodyB: t, isLastJoint: o, minLength: p, position: d, radius: this.radius, spacing: c, speed: l, texture: this.texture }, v = new Xu(h);
      this.add(v);
    }
  }
  removeJoints() {
    for (var e = this.children.length, t = e - 1; t >= 0; ) {
      var n = this.children[t];
      n.removeConstraint(), n.removeBody(), this.remove(n), t--;
    }
  }
  resetToOrigin() {
    this.removeJoints();
  }
  updateJoints() {
    for (var e = 0; e < this.children.length; e++) {
      var t = [], n = this.children[e], s = n.constraint.bodyA.position, i = n.constraint.bodyB.position;
      n.shrink(), n.line2 != null && (t.push(s.x, -s.y, 0), t.push(i.x + n.offset.x, -(i.y + n.offset.y), 0), n.line2Geometry.setPositions(t), n.line2.computeLineDistances()), n.circleMesh != null && n.circleMesh.position.set(i.x, -i.y, 0);
    }
  }
}
class Xu extends St {
  constructor(e) {
    super(), this.addLineMesh(e), this.addBody(e), this.addConstraint(e);
  }
  addLineMesh(e) {
    this.speed = e.speed, this.minLength = e.minLength, this.line2Geometry = new ca(), this.line2Material = new Kn({ color: "#ffffff", dashed: false, linewidth: 4, dashScale: 1, dashSize: 8, gapSize: 2, worldUnits: true }), this.line2 = new Gu(this.line2Geometry, this.line2Material), this.add(this.line2);
  }
  addCircleMesh(e) {
    this.circle = new Vo(e.radius, 12), this.circleMaterial = new Yn({ color: "#ffffff", opacity: 1, transparent: true }), this.circleMesh = new Z(this.circle, this.circleMaterial), this.add(this.circleMesh);
  }
  removeCircleMesh() {
    this.remove(this.circleMesh);
  }
  addBody(e) {
    this.part = Q.Bodies.circle(e.position.x, e.position.y, e.radius, { isSensor: true }), this.body = Q.Body.create({ parts: [this.part], friction: 0, frictionAir: 0, frictionStatic: 0, restitution: 0 }), Q.World.add(app.engine.world, this.body);
  }
  removeBody() {
    Q.World.remove(app.engine.world, this.body);
  }
  addConstraint(e) {
    var t = this.body, n = { x: 0, y: 0 };
    e.isLastJoint == true && (this.removeBody(), this.removeCircleMesh(), t = e.bodyB, n = { x: -(t.position.x - e.position.x), y: -(t.position.y - e.position.y) }), this.offset = n, this.constraint = Q.Constraint.create({ bodyA: e.bodyA, bodyB: t, mass: 0, pointB: n, stiffness: 1.5, shrink: true }), Q.World.add(app.engine.world, this.constraint);
  }
  removeConstraint() {
    Q.World.remove(app.engine.world, this.constraint);
  }
  shrink() {
    this.constraint.shrink == true && (this.constraint.length > this.minLength ? this.constraint.length -= this.speed : (this.constraint.length = this.minLength, this.constraint.shrink = false));
  }
}
class Jn extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "player", this.setScale({ x: 16, y: 16, z: 16 }), this.setStatic(false), this.setColors("#dc265a"), this.setMode("jump"), this.setJumpMode("limited"), this.util = new Nt(), this.mass = 5, this.jumpReady = false, this.jumpBuffer = 0, this.inputBuffer = 0, this.addLight("#dc265a", 16e3, 500, false), this.controls = { left: 0, right: 0, acceleration: 0.5, speed: 4 }, this.rope = new Wu(), this.skin = { url: "" }, this.plane = new Z(new ia(1e3, 1e3), new At({ visible: false, side: Li })), this.add(this.plane);
  }
  setColors() {
  }
  setScale(e = {}, t = true) {
    super.setScale(e, t);
  }
  update(e, t) {
    this.jumpBuffer > 0 && (this.jumpBuffer -= e, this.jumpReady == true && (this.jumpBuffer = 0, this.jump())), super.update(e, t);
  }
  jump() {
    if (this.mode == "jump" || this.mode == "control") if (this.jumpReady == true || this.jumpMode == "unlimited") {
      this.jumpReady = false;
      var e = app.engine.world.gravity, t = Math.PI / 2 - Q.Vector.angle({ x: 0, y: 0 }, e), n = this.body.velocity, s = 1, i = Math.PI / 20, a = 0.025, u = { x: -(e.x * a * this.body.mass), y: -(e.y * a * this.body.mass) };
      n = Q.Vector.rotate(n, t), n.y = 0, s = n.x >= 0 ? 1 : -1, i *= s, n = Q.Vector.rotate(n, -t), this.body.speed < this.controls.speed * 0.25 && (i = 0), Q.Body.setVelocity(this.body, n), Q.Body.setAngularVelocity(this.body, i), Q.Body.applyForce(this.body, this.body.position, u), app.assets.audio.play("pop2");
    } else this.jumpBuffer = this.inputBuffer;
  }
  setControls(e, t) {
    this.controls[e] = t;
  }
  setInputBuffer(e) {
    this.inputBuffer = e;
  }
  updateControls() {
    if (this.mode == "control") {
      var e = app.engine.world.gravity, t = this.controls.left + this.controls.right, n = { x: e.y * t, y: -e.x * t }, s = this.body.velocity, i = Q.Vector.dot(s, n), a = 4, u = i + this.controls.acceleration, c = Math.max(i, Math.min(u, a)), p = c - i;
      s.x += n.x * p, s.y += n.y * p, Q.Body.setVelocity(this.body, s);
    }
  }
  addRope(e) {
    if (this.mode == "grapple" && this.isFrozen() == false) {
      var t = 4, n = 400, s = e.x - this.position.x, i = e.y - this.position.y, a = Math.sqrt(s * s + i * i), u = { x: this.position.x, y: -this.position.y }, c = { x: this.position.x + (e.x - this.position.x) * n / a, y: -(this.position.y + (e.y - this.position.y) * n / a) };
      this.removeRope();
      for (var p = 0; p < n; p += t) {
        var l = p / n, m = { x: u.x + (c.x - u.x) * l, y: u.y + (c.y - u.y) * l }, o = Q.Query.point(app.engine.world.bodies, m);
        if (o.length > 0 && o[0].class != "player") {
          var r = app.level.getObjectByName(o[0].name);
          if (r.visible == true && r.position.z == 0) {
            app.level.add(this.rope), this.rope.addJoints(this.body, o[0], m), this.updateRope();
            break;
          }
        }
      }
      app.assets.audio.play("ice");
    }
  }
  updateForce() {
    this.body.speed < this.controls.speed && Q.Body.applyForce(this.body, this.body.position, { x: this.force.x, y: this.force.y });
  }
  updateRope() {
    this.rope.updateJoints();
  }
  removeRope() {
    this.rope.removeJoints(), app.level.remove(this.rope);
  }
  kill() {
    if (this.isFrozen() == false) {
      this.freeze(true), this.visible = false, this.killTimeout = setTimeout(function() {
        this.restart();
      }.bind(this), 1e3);
      for (var e = 4, t = 4, n = 4, s = { x: this.scale.x / t, y: this.scale.y / e, z: this.scale.z / n }, i = -e / 2; i < e / 2; i++) for (var a = -t / 2; a < t / 2; a++) {
        var u = this.util.randomNumber(0, 360 * (Math.PI / 180)), c = { color: this.color, position: { x: this.position.x + a * s.x + s.x / 2, y: this.position.y + i * s.y + s.y / 2, z: 0 }, rotation: { x: 0, y: 0, z: u }, scale: { x: s.x, y: s.y, z: s.z }, isStatic: false, friction: 0 }, p = app.level.entityFactory.createObject("cube");
        app.level.setObjectProperties(p, c), app.level.addObject(p, app), p.isParticle = true, p.setColors(this.color), Q.Body.setVelocity(p.body, this.body.velocity);
      }
    }
    window.dispatchEvent(new CustomEvent("playerKill", { detail: { player: this } })), app.assets.audio.play("glass");
  }
  cancelRestart() {
    clearTimeout(this.killTimeout);
  }
  saveCheckpoint(e) {
    this.checkpoint == null && (this.checkpoint = {}), this.checkpoint.x = e.x, this.checkpoint.y = e.y, this.checkpoint.z = e.z;
  }
  removeCheckpoint() {
    this.checkpoint = null;
  }
  setPositionToCheckpoint() {
    this.checkpoint != null && this.setPosition({ x: this.position.x = this.checkpoint.x, y: this.position.y = this.checkpoint.y, z: this.position.z = this.checkpoint.z }, false);
  }
  respawn(e = false) {
    (this.isFrozen() == true || e == true) && (app.level.removeParticles(app), this.resetToOrigin(), this.setPositionToCheckpoint(), window.dispatchEvent(new CustomEvent("playerRespawn", { detail: { player: this } })));
  }
  restart() {
    app.level.retryLevel(app, true), window.dispatchEvent(new CustomEvent("playerRestart", { detail: { player: this } }));
  }
  finish() {
    if (app.play == true) {
      var e = app.level.publishedFileId || app.level.name, t = app.timer.toString(), n = app.storage.saveScore(e, t), s = app.storage.getSettings(app);
      app.timer.render(t), app.play = false, window.dispatchEvent(new CustomEvent("levelFinish", { detail: { time: t, level: e } })), s.buffer == 0 && s.debug == false && (t = '<span class="material-symbols-rounded">verified</span><br>' + t), window.dispatchEvent(new CustomEvent("openPopup", { detail: { title: t, text: "popup.text.seconds", description: n ? "popup.description.new_record" : null, inputs: [{ value: "popup.button.retry", type: "button", shortcut: "KeyR", callback: function() {
        app.level.retryLevel(app), window.dispatchEvent(new CustomEvent("closePopup"));
      } }, { value: "popup.button.continue", type: "button", shortcut: "Space", callback: function() {
        app.level.exitLevel(app), window.dispatchEvent(new CustomEvent("closePopup"));
      } }] } })), app.assets.audio.play("clap"), app.assets.audio.play("success");
    }
  }
  shrink() {
    this.setScale({ x: this.scale.x / 2, y: this.scale.y / 2, z: this.scale.z / 2 }, false);
  }
  grow() {
    this.setScale({ x: this.scale.x * 2, y: this.scale.y * 2, z: this.scale.z * 2 }, false);
  }
  renderSpeed(e) {
    var t = this.body.speed, n = 10, s = 0, i = s + "%;";
    t > n && (t = n), s = t / n * 100, i = "width: calc(" + s + "% - 8px)", e.document.getElementById("speed") && e.document.getElementById("speed").setAttribute("style", i);
  }
  setSkin(e = {}, t = app) {
    this.addTexture(e);
  }
  reset() {
    app.updateGravity(), this.setForceDirection(), this.setScale({ x: this.scaleOrigin.x, y: this.scaleOrigin.y, z: this.scaleOrigin.z }, false), this.setMode(this.modeOrigin, false), this.setJumpMode(this.jumpModeOrigin, false), this.controls.left = this.controls.right = 0, this.jumpBuffer = 0, app.assets.audio.play("teleport");
  }
  addTexture(e) {
    if (e.url) {
      e.url = e.url.replace("img/png/skins/", "../png/");
      var t = new Kr();
      t.load(e.url, function(n) {
        n.colorSpace = Go, this.remove(this.skin), this.shapes.visible = false;
        var s = new ua(1, 1, 1, 1, 0.1), i = new At({ map: n, transparent: true, opacity: 1 });
        this.shapes.setOpacities(0), this.skin = new Z(s, i), this.skin.url = e.url, this.add(this.skin);
      }.bind(this), void 0, function(n) {
        console.error("An error happened: ", n);
      }.bind(this));
    }
  }
}
new Ne();
class Zu extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "tip", this.text = "Do not touch the spikes!", this.hitbox.isSensor = true, this.hitbox.class = "sensor", this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.shapes.setOpacities(0.5), this.addShapes(e);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ color: "#0287ef", z: -(t * 0.5), scaleZ: t * 4 }), this.shapes.addCube({ y: t * 1, z: t * 2, scaleX: t, scaleY: t * 2, scaleZ: t, color: "#fff" }), this.shapes.addCube({ y: -(t * 1.5), z: t * 2, scaleX: t, scaleY: t, scaleZ: t, color: "#fff" });
  }
  setColors() {
  }
}
class Yu extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "bounce";
    var t = { x: 0, y: 0.6 }, n = { x: e.scaleX * 0.6, y: e.scaleY * 0.2 };
    this.sensor = Q.Bodies.rectangle(t.x, -t.y, n.x, n.y, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.addHelper(this.sensor, { position: t, color: "#ffff00" }), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ y: t * 2, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ y: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ y: -(t * 1), scaleY: t * 3, scaleZ: t * 5, color: "#0287ef" });
  }
}
class Qu extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "checkpoint", this.hitbox.isSensor = true, this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ scaleX: t, scaleY: t, scaleZ: t, color: "#fff" }), this.shapes.addCube({ x: t * 0, y: -(t * 2), z: t * 2, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: t * 0, y: -(t * 2), z: -(t * 2), scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: t * 0, y: t * 2, z: t * 2, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: t * 0, y: t * 2, z: -(t * 2), scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: 0, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: 0, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: 0, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: 0, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 5, color: "#0287ef" }), this.shapes.addCube({ x: t * 2, y: 0, z: t * 2, scaleX: t * 1, scaleY: t * 5, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: t * 2, y: 0, z: -(t * 2), scaleX: t * 1, scaleY: t * 5, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: 0, z: t * 2, scaleX: t * 1, scaleY: t * 5, scaleZ: t * 1, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: 0, z: -(t * 2), scaleX: t * 1, scaleY: t * 5, scaleZ: t * 1, color: "#0287ef" });
  }
}
class Ku extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "spike";
    var t = { x: 0, y: 0.6 }, n = { x: e.scaleX * 0.6, y: e.scaleY * 0.2 };
    this.sensor = Q.Bodies.rectangle(t.x, -t.y, n.x, n.y, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.addHelper(this.sensor, { position: t, color: "#ff0000" }), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e), this.setColors(e.color);
  }
  addShapes(e) {
    var t = e.scaleZ * 0.25;
    this.shapes.addCone({ x: -(t * 1), y: t * 0, z: t * 1, scaleX: t * 2, scaleY: t * 4 }), this.shapes.addCone({ x: -(t * 1), y: t * 0, z: -(t * 1), scaleX: t * 2, scaleY: t * 4 }), this.shapes.addCone({ x: t * 1, y: t * 0, z: t * 1, scaleX: t * 2, scaleY: t * 4 }), this.shapes.addCone({ x: t * 1, y: t * 0, z: -(t * 1), scaleX: t * 2, scaleY: t * 4 });
  }
}
class Ju extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "shrink", this.hitbox.isSensor = true, this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ x: -(t * 1), y: t * 1, z: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 1, y: t * 1, z: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 1), y: -(t * 1), z: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 1, y: -(t * 1), z: t * 1, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 1), y: t * 1, z: -(t * 1), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 1, y: t * 1, z: -(t * 1), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 1), y: -(t * 1), z: -(t * 1), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 1, y: -(t * 1), z: -(t * 1), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" });
  }
}
class el extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "grow", this.hitbox.isSensor = true, this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ scaleX: t * 3, scaleY: t * 3, scaleZ: t * 3, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#dc265a" });
  }
}
class tl extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "resize", this.hitbox.isSensor = true, this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ scaleX: t * 3, scaleY: t * 3, scaleZ: t * 3, color: "#0287ef" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: t * 2, scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: -(t * 2), y: t * 2, z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: t * 2, y: t * 2, z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: -(t * 2), y: -(t * 2), z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" }), this.shapes.addCube({ x: t * 2, y: -(t * 2), z: -(t * 2), scaleX: t * 1, scaleY: t * 1, scaleZ: t * 1, color: "#ffffff" });
  }
}
class il extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "direction", this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    var t = e.scaleZ * 0.2;
    this.shapes.addCube({ x: 0, y: 0, z: -(t * 0.5), scaleX: 1, scaleY: 1, scaleZ: t * 4, color: "#0287ef" }), this.shapes.addExtrusion({ position: { x: -0.5, y: -0.5, z: t * 1.5 }, points: [{ x: t, y: t }, { x: t * 4, y: 0.5 }, { x: t, y: t * 4 }, { x: 0.4, y: 0.5 }], depth: t, color: "#fff" });
  }
}
class nl extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "gravity", this.hitbox.isSensor = true, this.hitbox.class = "sensor", this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.shapes.setOpacities(0.5), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    var t = e.scaleZ / 9;
    this.shapes.addCube({ x: 0, y: 0, z: -(t * 0.5), scaleX: 1, scaleY: 1, scaleZ: t * 6, color: "#0287ef" }), this.shapes.addCube({ x: 0, y: -(t * 3), z: t * 3, scaleX: t * 7, scaleY: t * 1, scaleZ: t * 1, color: "#fff" }), this.shapes.addCube({ x: 0, y: t * 3, z: t * 3, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#fff" }), this.shapes.addCube({ x: 0, y: -(t * 1), z: t * 3, scaleX: t * 5, scaleY: t * 1, scaleZ: t * 1, color: "#fff" }), this.shapes.addCube({ x: -(t * 2), y: t * 1, z: t * 3, scaleX: t * 1, scaleY: t * 3, scaleZ: t * 1, color: "#fff" }), this.shapes.addCube({ x: t * 2, y: t * 1, z: t * 3, scaleX: t * 1, scaleY: t * 3, scaleZ: t * 1, color: "#fff" });
  }
}
class sl extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "grapple", this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    var t = e.scaleZ / 8;
    this.shapes.addCube({ x: 0, y: 0, z: -t, scaleX: 1, scaleY: 1, scaleZ: t * 7, color: "#0287ef" }), this.shapes.addExtrusion({ position: { x: 0, y: 0, z: t * 3 }, points: [{ x: 0, y: 0 }, { x: 0, y: -(t * 3) }, { x: -(t * 3), y: -(t * 3) }, { x: -(t * 3), y: 0 }], depth: t, color: "#fff" }), this.shapes.addExtrusion({ position: { x: 0, y: 0, z: t * 3 }, points: [{ x: -(t * 1), y: 0 }, { x: 0, y: -(t * 1) }, { x: t * 2, y: t * 1 }, { x: t * 1, y: t * 2 }], depth: t, color: "#fff" }), this.shapes.addExtrusion({ position: { x: 0, y: 0, z: t * 3 }, points: [{ x: 0, y: t * 3 }, { x: t * 3, y: t * 3 }, { x: t * 3, y: 0 }], depth: t, color: "#fff" });
  }
}
class rl extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "finish", this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    for (var t = 3, n = e.scaleZ * (1 / t), s = -Math.floor(t / 2), i = Math.ceil(t / 2), a = 0, u = "#ffffff", c = s; c < i; c++) for (var p = s; p < i; p++) for (var l = s; l < i; l++) u = a % 2 == 0 ? null : "#ffffff", this.shapes.addCube({ x: n * l, y: n * p, z: n * c, scaleX: n * 1, scaleY: n * 1, scaleZ: n * 1, color: u }), a++;
  }
}
class al extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "reset", this.hitbox.isSensor = true, this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.addShapes(e);
  }
  setColors() {
  }
  addShapes(e) {
    for (var t = 3, n = e.scaleZ * (1 / t), s = -Math.floor(t / 2), i = Math.ceil(t / 2), a = 0, u = "#0287ef", c = s; c < i; c++) for (var p = s; p < i; p++) for (var l = s; l < i; l++) a % 2 != 0 && (c == 0 && p == 0 ? u = "#ffffff" : u = "#0287ef", this.shapes.addCube({ x: n * l, y: n * p, z: n * c, scaleX: n * 1, scaleY: n * 1, scaleZ: n * 1, color: u })), a++;
  }
}
class ol extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "control", this.hitbox.isSensor = true, this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.add(e.model);
  }
  setColors() {
  }
}
class ul extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "power", this.hitbox.isSensor = true, this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.add(e.model);
  }
  setColors() {
  }
}
class ll extends ke {
  constructor(e = {}) {
    super(e), this.body.class = "teleport", this.text = "0,0", this.hitbox.isSensor = true, this.sensor = Q.Bodies.rectangle(0, 0, e.scaleX, e.scaleY, { isSensor: true, density: 0, class: "sensor" }), Q.Body.setParts(this.body, [this.hitbox, this.sensor]), this.setScale({ x: 16, y: 16, z: 16 }), this.shapes.removeAllShapes(), this.add(e.model);
  }
  setColors() {
  }
}
class cl {
  constructor() {
    this.color = "#620460";
  }
  createObject(e, t) {
    var n;
    switch (t == null && (t = { color: this.color }), e) {
      case "player":
        n = new Jn(t);
        break;
      case "tip":
        n = new Zu(t);
        break;
      case "bounce":
        n = new Yu(t);
        break;
      case "checkpoint":
        n = new Qu(t);
        break;
      case "spike":
        n = new Ku(t);
        break;
      case "shrink":
        n = new Ju(t);
        break;
      case "grow":
        n = new el(t);
        break;
      case "resize":
        n = new tl(t);
        break;
      case "direction":
        n = new il(t);
        break;
      case "gravity":
        n = new nl(t);
        break;
      case "grapple":
        n = new sl(t);
        break;
      case "finish":
        n = new rl(t);
        break;
      case "reset":
        n = new al(t);
        break;
      case "control":
        t.model = app.assets.models.clone("cube-control"), n = new ol(t);
        break;
      case "power":
        t.model = app.assets.models.clone("cube-power"), n = new ul(t);
        break;
      case "teleport":
        t.model = app.assets.models.clone("cube-teleport"), n = new ll(t);
        break;
      default:
        n = new ke(t);
    }
    return n;
  }
}
const dl = JSON.parse(`[{"title":"Easy Peasy","theme":"blue-mountains","levels":[{"title":"Campaign Level 1","description":"Slip & Slide","links":["https://www.speedrun.com/boxel_3d?h=Level_1-Glitchless&x=l_5d7p1gvd-jdzlv7v2"]},{"title":"Campaign Level 2","description":"Olympic Ramp","links":["https://www.speedrun.com/boxel_3d?h=Level_2-Glitchless&x=l_kwj0g2zd-jdzlv7v2"]},{"title":"Campaign Level 3","description":"Easy Hop","links":["https://www.speedrun.com/boxel_3d?h=Level_3-Glitchless&x=l_owo8jryd-jdzlv7v2"]},{"title":"Campaign Level 4","description":"Spike Hurdles","links":["https://www.speedrun.com/boxel_3d?h=Level_4-Glitchless&x=l_xd1pmn6d-jdzlv7v2"]},{"title":"Campaign Level 5","description":"Air Jump","links":["https://www.speedrun.com/boxel_3d?h=Level_5-Glitchless&x=l_ewpn3lz9-jdzlv7v2"]}]},{"title":"Lemon Difficult","theme":"orange","levels":[{"title":"Campaign Level 6","description":"Secret Agent","links":["https://www.speedrun.com/boxel_3d?h=Level_6-Glitchless&x=l_y9m06n1w-jdzlv7v2"]},{"title":"Campaign Level 7","description":"Long Boi","links":["https://www.speedrun.com/boxel_3d?h=Level_7-Glitchless&x=l_5wk0x3q9-jdzlv7v2"]},{"title":"Campaign Level 8","description":"Bigger Boi","links":["https://www.speedrun.com/boxel_3d?h=Level_8-Glitchless&x=l_592mkyrw-jdzlv7v2"]},{"title":"Campaign Level 9","description":"Spider Box","links":["https://www.speedrun.com/boxel_3d?h=Level_9-Glitchless&x=l_29vg6qn9-jdzlv7v2"]},{"title":"Campaign Level 10","description":"Rock Climber","links":["https://www.speedrun.com/boxel_3d?h=Level_10-Glitchless&x=l_xd4p1lpd-jdzlv7v2"]}]},{"title":"Zack's Pack","theme":"green","levels":[{"title":"Campaign Level 11","description":"Tippy Tap","links":["https://www.speedrun.com/boxel_3d?h=Level_11-Glitchless&x=l_xd0p181w-jdzlv7v2"]},{"title":"Campaign Level 12","description":"Agility Jumps","links":["https://www.speedrun.com/boxel_3d?h=Level_12-Glitchless&x=l_rw621z7d-jdzlv7v2"]},{"title":"Campaign Level 13","description":"Zack's Coaster","links":["https://www.speedrun.com/boxel_3d?h=Level_13-Glitchless&x=l_n93k1rew-jdzlv7v2"]},{"title":"Campaign Level 14","description":"Simon Says","links":["https://www.speedrun.com/boxel_3d?h=Level_14-Glitchless&x=l_z98p3xlw-jdzlv7v2"]},{"title":"Campaign Level 15","description":"Wall of Finish","links":["https://www.speedrun.com/boxel_3d?h=Level_15-Glitchless&x=l_rdn37yvw-jdzlv7v2"]}]},{"title":"Kargoh's Pack","theme":"purple","levels":[{"title":"Campaign Level 16","description":"Kargoh's World","links":["https://www.speedrun.com/boxel_3d?h=Level_16-Glitchless&x=l_ldyqxozw-jdzlv7v2"]},{"title":"Campaign Level 17","description":"Kargoh's Bobsled","links":["https://www.speedrun.com/boxel_3d?h=Level_17-Glitchless&x=l_gdrrnzzd-jdzlv7v2"]},{"title":"Campaign Level 18","description":"Kargoh's Plinko","links":["https://www.speedrun.com/boxel_3d?h=Level_18-Glitchless&x=l_nwl058rw-jdzlv7v2"]},{"title":"Campaign Level 19","description":"Kargoh's Obstacles","links":["https://www.speedrun.com/boxel_3d?h=Level_19-Glitchless&x=l_ywe0yor9-jdzlv7v2"]},{"title":"Campaign Level 20","description":"Kargoh's Ramp","links":["https://www.speedrun.com/boxel_3d?h=Level_20-Glitchless&x=l_69z751ow-jdzlv7v2"]}]},{"title":"Gravity Hell","theme":"red","levels":[{"title":"Campaign Level 21","description":"Gravity Loop","links":["https://www.speedrun.com/boxel_3d?h=Level_21-Glitchless&x=l_r9g6lvkw-jdzlv7v2"]},{"title":"Campaign Level 22","description":"Gravity Sewer","links":["https://www.speedrun.com/boxel_3d?h=Level_22-Glitchless&x=l_o9x6gp19-jdzlv7v2"]},{"title":"Campaign Level 23","description":"Gravity Twist","links":["https://www.speedrun.com/boxel_3d?h=Level_23-Glitchless&x=l_495p27jw-jdzlv7v2"]},{"title":"Campaign Level 24","description":"Gravity Ramps","links":["https://www.speedrun.com/boxel_3d?h=Level_24-Glitchless&x=l_rdqy8x19-jdzlv7v2"]},{"title":"Campaign Level 25","description":"Gravity Spikes","links":["https://www.speedrun.com/boxel_3d?h=Level_25-Glitchless&x=l_5d7p1ovd-jdzlv7v2"]}]},{"title":"Boxel Classics","theme":"classic","levels":[{"title":"Campaign Level 26","description":"Stairway to Stairs","links":["https://www.speedrun.com/boxel_3d?h=Level_26-Glitchless&x=l_kwj0gnzd-jdzlv7v2"]},{"title":"Campaign Level 27","description":"Extra Hops","links":["https://www.speedrun.com/boxel_3d?h=Level_27-Glitchless&x=l_owo8jzyd-jdzlv7v2"]},{"title":"Campaign Level 28","description":"Butterfly Knot","links":["https://www.speedrun.com/boxel_3d?h=Level_28-Glitchless&x=l_xd1pmg6d-jdzlv7v2"]},{"title":"Campaign Level 29","description":"Jericho","links":["https://www.speedrun.com/boxel_3d?h=Level_29-Glitchless&x=l_ewpn3gz9-jdzlv7v2"]},{"title":"Campaign Level 30","description":"Rock Climber 2","links":["https://www.speedrun.com/boxel_3d?h=Level_30-Glitchless&x=l_y9m06l1w-jdzlv7v2"]}]},{"title":"Spider Cube","theme":"pink","levels":[{"title":"Campaign Level 31","description":"Escape Room","links":["https://www.speedrun.com/boxel_3d?h=Level_31-Glitchless&x=l_5wk0xyq9-jdzlv7v2"]},{"title":"Campaign Level 32","description":"Spider Room","links":["https://www.speedrun.com/boxel_3d?h=Level_32-Glitchless&x=l_592mkxrw-jdzlv7v2"]},{"title":"Campaign Level 33","description":"Kargoh's Spider","links":["https://www.speedrun.com/boxel_3d?h=Level_33-Glitchless&x=l_29vg6on9-jdzlv7v2"]},{"title":"Campaign Level 34","description":"Spider Tower","links":["https://www.speedrun.com/boxel_3d?h=Level_34-Glitchless&x=l_xd4p1qpd-jdzlv7v2"]},{"title":"Campaign Level 35","description":"Spider Cave","links":["https://www.speedrun.com/boxel_3d?h=Level_35-Glitchless&x=l_z983617d-jdzlv7v2"]}]},{"title":"Blue City","theme":"city","levels":[{"title":"Campaign Level 36","description":"Small Boi","links":["https://www.speedrun.com/boxel_3d?h=Level_36-Glitchless&x=l_ldyrvkk9-jdzlv7v2"]},{"title":"Campaign Level 37","description":"Doppler's Plinko","links":["https://www.speedrun.com/boxel_3d?h=level-37-Glitchless&x=l_rdnj8qv9-jdzlv7v2"]},{"title":"Campaign Level 38","description":"Ping Pong","links":["https://www.speedrun.com/boxel_3d?h=level-38-ping-pong-Glitchless&x=l_dy14z5rd-jdzlv7v2"]},{"title":"Campaign Level 39","description":"Boxel Nomad","links":["https://www.speedrun.com/boxel_3d?h=boxel-nomad-level-39-Glitchless&x=l_dqzz66od-jdzlv7v2"]},{"title":"Campaign Level 40","description":"Homework","links":["https://www.speedrun.com/boxel_3d?h=level-40-homework-Glitchless&x=l_wkk27lxw-jdzlv7v2"]}]},{"title":"Community Pack","theme":"classic","description":"Levels are made by the Boxel Community and are picked by the developer.","links":[{"class":"discord","icon":"../svg/discord.svg","target":"_blank","text":"Join the Discord","url":"https://discord.gg/j8fvd4UvbE"}],"levels":[{"title":"Junsie","description":"Junsie","author":"Junsie","links":["https://www.speedrun.com/boxel_3d?h=Level_37-Glitchless&x=l_xd0y241w-jdzlv7v2"]},{"title":"Junsie 2","description":"Junsie 2","author":"Junsie","links":["https://www.speedrun.com/boxel_3d?h=Level_38-Glitchless&x=l_rw6xlm7w-jdzlv7v2"]},{"title":"Metal Machine","description":"Metal Machine","author":"Metal Machine","links":["https://www.speedrun.com/boxel_3d?h=Level_39-Glitchless&x=l_n93enmew-jdzlv7v2"]},{"title":"0123xrulez","description":"0123xrulez","author":"0123xrulez","links":["https://www.speedrun.com/boxel_3d?h=Level_40-Glitchless&x=l_z98qzml9-jdzlv7v2"]},{"title":"Jack TVYT","description":"Jack TVYT","author":"Jack TVYT","links":["https://www.speedrun.com/boxel_3d?h=Level_41-Glitchless&x=l_rdn8lqvd-jdzlv7v2"]},{"title":"16BitPlayer","description":"16BitPlayer","author":"16BitPlayer","links":["https://www.speedrun.com/boxel_3d?h=Level_42-Glitchless&x=l_xd0y6g0w-jdzlv7v2"]},{"title":"uncoho3","description":"uncoho3","author":"uncoho3","links":["https://www.speedrun.com/boxel_3d?h=Level_43-Glitchless&x=l_rw6x54nw-jdzlv7v2"]},{"title":"Metal Machine 2","description":"Metal Machine 2","author":"Metal Machine","links":["https://www.speedrun.com/boxel_3d?h=Level_44-Glitchless&x=l_n93ez77w-jdzlv7v2"]},{"title":"Vyom","description":"Vyom","author":"Vyom","links":["https://www.speedrun.com/boxel_3d?h=Level_45-Glitchless&x=l_rw6x12gw-jdzlv7v2"]},{"title":"0123xrulez 2","description":"0123xrulez 2","author":"0123xrulez","links":["https://www.speedrun.com/boxel_3d?h=Level_46-Glitchless&x=l_n93e1kzw-jdzlv7v2"]},{"title":"16BitPlayer 2","description":"16BitPlayer 2","author":"16BitPlayer","links":["https://www.speedrun.com/boxel_3d?h=Level_47-Glitchless&x=l_z98qvo79-jdzlv7v2"]},{"title":"0123xrulez 3","description":"0123xrulez 3","author":"0123xrulez","links":["https://www.speedrun.com/boxel_3d?h=Level_48-Glitchless&x=l_rdn8jmnd-jdzlv7v2"]},{"title":"Zozo","description":"Zozo","author":"Zozo","links":["https://www.speedrun.com/boxel_3d?h=Level_49-Glitchless&x=l_ldy67rj9-jdzlv7v2"]},{"title":"Junsie 3","description":"Junsie 3","author":"Junsie","links":["https://www.speedrun.com/boxel_3d?h=Level_50-Glitchless&x=l_n93e5xnw-jdzlv7v2"]},{"title":"! __kf","description":"! __kf","author":"! __kf","links":["https://www.speedrun.com/boxel_3d?h=Level_51-Glitchless&x=l_rdqkl8od-jdzlv7v2"]},{"title":"Ice Dodo","description":"Ice Dodo","author":"Winderthedrone","links":["https://www.speedrun.com/boxel_3d?h=level-53-ice-dodo-Glitchless&x=l_9zpm2ggw-jdzlv7v2"]},{"title":"Kllixto","description":"Kllixto","author":"Kllixto","links":["https://www.speedrun.com/boxel_3d?h=kllixto-Glitchless&x=l_dqz6kqgd-jdzlv7v2"]},{"title":"Mountain Climb","description":"Mountain Climb","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=mountain-climb-Glitchless&x=l_92003z6d-jdzlv7v2"]},{"title":"The Arcadium","description":"The Arcadium","author":"rubymaster13","links":["https://www.speedrun.com/boxel_3d?h=the-arcadium-Glitchless&x=l_9vmmj3x9-jdzlv7v2"]},{"title":"The Box Escape","description":"The Box Escape","author":"DonW15","links":["https://www.speedrun.com/boxel_3d?h=the-box-escape-Glitchless&x=l_d400nj89-jdzlv7v2"]},{"title":"Average level attempt","description":"Average level attempt","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-average-level-attempt-Glitchless&x=l_dno5m85w-jdzlv7v2"]},{"title":"Speed Spider","description":"Speed Spider","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-speed-spider-Glitchless&x=l_dy1er6pd-jdzlv7v2"]},{"title":"Dancing on nothing","description":"Dancing on nothing","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-dancing-on-nothing-Glitchless&x=l_drpj0lew-jdzlv7v2"]},{"title":"Strawberry Jam","description":"Strawberry Jam","author":"Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-strawberry-jam-Glitchless&x=l_wlg6m1o9-jdzlv7v2"]},{"title":"Up, Down, and Through","description":"Up, Down, and Through","author":"Ember","links":["https://www.speedrun.com/boxel_3d?h=community-level-up-down-and-through-Glitchless&x=l_we24vglw-jdzlv7v2"]},{"title":"The Bonce House","description":"The Bonce House","author":"rubymaster13","links":["https://www.speedrun.com/boxel_3d?h=community-level-the-bonce-house-Glitchless&x=l_dy1p36kd-jdzlv7v2"]},{"title":"Wallclimb Ascension","description":"Wallclimb Ascension","author":"noobus","links":["https://www.speedrun.com/boxel_3d?h=community-level-wallclimb-ascension-Glitchless&x=l_drpqyl6w-jdzlv7v2"]},{"title":"Spider Number 1","description":"Spider Number 1","author":"Potato Man","links":["https://www.speedrun.com/boxel_3d?h=community-level-spider-number-1-Glitchless&x=l_wlg72109-jdzlv7v2"]},{"title":"Roller Coaster","description":"Roller Coaster","author":"rubymaster13","links":["https://www.speedrun.com/boxel_3d?h=community-level-roller-coaster-Glitchless&x=l_we28qgyw-jdzlv7v2"]},{"title":"Creation Roulette","description":"Creation Roulette","author":"Fisher, Ember, & Charlieee1","links":["https://www.speedrun.com/boxel_3d?h=community-level-creation-roulette-Glitchless&x=l_9zp48jlw-jdzlv7v2"]},{"title":"The Escape","description":"The Escape","author":"AMiner","links":[]},{"title":"Boxelling Over It","description":"Boxelling Over It","author":"Charlieee1","links":[]},{"title":"Dungeon Escape","description":"Dungeon Escape","author":"BoxelBug","links":[]},{"title":"Pizza Time!","description":"Pizza Time!","author":"Poktoshi","links":[]},{"title":"Boxel Summit","description":"Boxel Summit","author":"Green","links":[]}]}]`), Fe = { packs: dl }, fl = { background_color: "#4c7dff", color: "#ffffff", model: "background-blue", thumbnail: "../svg/button-level-editor.svg" }, pl = { background_color: "#4c7dff", color: "#ffffff", model: "background-city", thumbnail: "../svg/button-pack-city.svg" }, hl = { background_color: "#5503A8", color: "#ffffff", model: "background-kargoh", thumbnail: "../svg/button-pack-kargohs-levels.svg" }, ml = { background_color: "#990799", color: "#620460", model: "background-classic", thumbnail: "../svg/button-pack-boxel-classics.svg" }, vl = { background_color: "#de004a", color: "#620460", model: "background-hell", thumbnail: "../svg/button-pack-gravity-hell.svg" }, gl = { background_color: "#c40c4b", color: "#c40c4b", model: "background-desert", thumbnail: "../svg/button-pack-lemon-difficult.svg" }, bl = { background_color: "#EB2B6D", color: "#C40C4B", model: "background-tokyo", thumbnail: "../svg/button-pack-spider-cube.svg" }, yl = { background_color: "#9F00FF", color: "#5503A8", model: "background-forest", thumbnail: "../svg/button-pack-zacks-levels.svg" }, wt = { "blue-mountains": { background_color: "#4c7dff", color: "#ffffff", model: "background-blue", thumbnail: "../svg/button-pack-easy-peasy.svg" }, workshop: fl, city: pl, "purple-mountains": { background_color: "#5503A8", color: "#5503A8", model: "background-purple", thumbnail: "../svg/button-pack-community.svg" }, purple: hl, classic: ml, red: vl, orange: gl, pink: bl, "pink-mountains": { background_color: "#9F00FF", color: "#5503A8", model: "background-pink", thumbnail: "../svg/button-pack-pink.svg" }, green: yl }, Kt = [{ id: 1, title: "Pink", url: "../png/pink.png" }, { id: 2, title: "Blue", url: "../png/blue.png" }, { id: 377, title: "Kargoh Krate", url: "../png/krate.png" }, { id: 680, title: "Custom Skin", url: "../png/custom.png" }, { id: 563, title: "Monkey", url: "../png/monkey.png" }, { id: 668, title: "Puppy", url: "../png/puppy.png" }, { id: 565, title: "Kitty", url: "../png/kitty.png" }, { id: 466, title: "Smile", url: "../png/smile.png" }, { id: 476, title: "Love", url: "../png/love.png" }, { id: 486, title: "Grin", url: "../png/grin.png" }, { id: 488, title: "Sad Boi", url: "../png/sad.png" }, { id: 666, title: "Sick", url: "../png/sick.png" }, { id: 681, title: "Boxel", url: "../png/boxel.png" }, { id: 667, title: "Angry", url: "../png/mad.png" }, { id: 661, title: "Skull", url: "../png/skull.png" }, { id: 562, title: "Doppler", url: "../png/doppler.png" }, { id: 557, title: "Kargoh", url: "../png/kargoh.png" }, { id: 458, title: "USA", url: "../png/usa.png" }, { id: 462, title: "Australia", url: "../png/au.png" }, { id: 460, title: "UK", url: "../png/uk.png" }, { id: 490, title: "Canada", url: "../png/canada.png" }, { id: 465, title: "Japan", url: "../png/jp.png" }, { id: 152, title: "Golden Skin", url: "../png/gold.png" }, { id: 407, title: "Lucky Die", url: "../png/lucky.png" }, { id: 484, title: "Prism", url: "../png/prism.png" }, { id: 500, title: "Boxel Golf", url: "../png/boxel-golf.png" }], da = [], xl = window.electron?.client != null;
Fe.packs.forEach(function(f, e) {
  f.levels.forEach(function(t, n) {
    t.label = t.label || `${e + 1}-${n + 1}`, t.overlay = true;
  });
});
Kt.forEach((f) => {
  f.overlay = true, f.tag = f.title;
});
function wl(f, e) {
  return localStorage.getItem(`item_${f.publishedFileId}_${e}`);
}
if (xl) {
  const f = { title: "Workshop", theme: "workshop", description: "Your Steam Workshop subscriptions.", levels: [] };
  Fe.packs.push(f);
  try {
    const e = window.electron.client.workshop.getSubscribedItems();
    if (e.length > 0) try {
      window.electron.client.workshop.getItems(e).then((t) => {
        const n = t.items.filter((s) => s !== null);
        n.sort((s, i) => i.timeUpdated - s.timeUpdated), n.forEach((s) => {
          let i = wl(s, "enabled");
          i === null ? i = true : i = i === "true";
          const a = window.electron.client.workshop.installInfo(s.publishedFileId);
          a && i === true && window.electron.getFileNames(a.folder).then((u) => {
            u.forEach((c) => {
              Object.assign(s, { title: s.title, description: s.description, thumbnail: s.previewUrl, path: `${a.folder}\\${c}`, overlay: true, links: [`https://steamcommunity.com/sharedfiles/filedetails/?id=${s.publishedFileId.toString()}`] }), [".json"].some((p) => c.includes(p)) ? (Object.assign(s, { description: s.title }), f.levels.push(s)) : [".js"].some((p) => c.includes(p)) ? da.push(s) : [".png", ".jpg"].some((p) => c.includes(p)) && (Object.assign(s, { id: s.publishedFileId.toString(), url: s.path, title: s.title, tag: s.title }), Kt.push(s));
            });
          });
        });
      });
    } catch (t) {
      console.error(t);
    }
  } catch (e) {
    console.error(e);
  }
}
class Sl extends St {
  constructor() {
    super(), this.name = this.defaultName = "My Level", this.theme = this.defaultTheme = "classic", this.entityFactory = new cl(), this.publishedFileId = null;
  }
  addObject(e, t) {
    e.position.z == 0 && (Q.World.add(t.engine.world, e.body), this.parent.add(e.helper)), this.add(e);
  }
  removeObject(e, t, n = false) {
    (t.selectedObject != null && t.selectedObject.getClass() != "player" || n == true) && e != null && (Q.World.remove(t.engine.world, e.body), this.parent.remove(e.helper), this.remove(e), t.level.deselectLevel(t));
  }
  clearLevel(e) {
    var t = e.level.children.length;
    this.name = this.defaultName, this.theme = this.defaultTheme, e.player.removeRope();
    for (var n = 0; n < t; n++) {
      var s = e.level.children[0];
      this.removeObject(s, e, true);
    }
  }
  removeParticles(e) {
    for (var t = e.level.children.length, n = t - 1; n >= 0; ) {
      var s = e.level.children[n];
      s.isParticle != null && this.removeObject(s, e, true), n--;
    }
  }
  refreshLevel(e) {
    var t = this.exportToJSON(e);
    this.clearLevel(e), this.importFromJSON(t, e);
  }
  refreshObject(e, t) {
    this.removeObject(e, t);
    var n = this.duplicateObject(e, t);
    return n;
  }
  changeObjectType(e, t, n) {
    var s = e;
    return e.getClass() != "player" && (e.body.class = t, s = this.refreshObject(e, n)), s;
  }
  duplicateObject(e, t) {
    var n = e.toJSON(), s = this.entityFactory.createObject(n.class);
    return this.setObjectProperties(s, n), this.addObject(s, t), s;
  }
  createNewLevel(e) {
    e.player.setPosition({ x: 0, y: 0, z: 0 }), e.player.setScale({ x: 16, y: 16, z: 16 }), e.player.setRotation(0), e.player.setFriction(0), this.clearLevel(e), this.add(e.player);
    var t = this.entityFactory.createObject("cube", { x: 0, y: -64, z: 0 });
    t.setScale({ x: 64, y: 16, z: 16 }), t.setStatic(true), this.add(t);
  }
  deselectLevel(e) {
    e.selectedObject = null;
    for (var t = 0; t < e.level.children.length; t++) {
      var n = e.level.children[t];
      n.body != null && n.select(false);
    }
  }
  exportToJSON(e) {
    var t = {};
    t.name = this.name, t.theme = this.theme, t.description = this.description, t.version = app.version, t.children = [];
    for (var n = 0; n < e.level.children.length; n++) {
      var s = e.level.children[n];
      if (s.type == "Mesh") {
        var i = s.toJSON();
        t.children.push(i);
      }
    }
    return t;
  }
  saveLevelData(e) {
    e.storage.setLevelData(this.key, this.exportToJSON(e));
  }
  importFromJSON(e, t) {
    this.name = e.name, this.theme = e.theme, this.description = e.description;
    for (var n = 0; n < e.children.length; n++) {
      var s = t.storage.getSettings(t), i = e.children[n], a = this.entityFactory.createObject(i.class);
      i.class == "player" && (a = t.player), a.helper.visible = s.debug, this.setObjectProperties(a, i), this.addObject(a, t);
    }
  }
  resetLevel() {
    for (var e = 0; e < this.children.length; e++) {
      var t = this.children[e];
      t.resetToOrigin();
    }
  }
  retryLevel(e = app, t = false) {
    e.updateGravity(), e.play = true, e.level.removeParticles(e), e.player.cancelRestart(), e.resetScene(e), window.dispatchEvent(new CustomEvent("closePopup")), t == false || e.player.checkpoint == null ? (e.timer.reset(), e.player.removeCheckpoint()) : e.player.respawn(true);
  }
  exitLevel(e) {
    if (e.timer.reset(), e.player.removeCheckpoint(), e.state == "campaign") {
      var t = e.storage.getSettings(e), n = parseInt(t.progress);
      n++, t.progress = n, e.updateSettings(t, e), window.dispatchEvent(new CustomEvent("setPage", { detail: "level-picker" }));
    } else e.state == "level-editor" && (e.updateGravity(), e.resetScene(e), app.levelEditor.controlsOrbit.enabled = true, app.levelEditor.controlsOrbit.reset(), app.background.visible = false);
    window.dispatchEvent(new CustomEvent("exitLevel", { detail: e.state }));
  }
  setObjectProperties(e, t) {
    e.setPosition({ x: t.position.x, y: t.position.y, z: t.position.z }), e.setScale({ x: t.scale.x, y: t.scale.y, z: t.scale.z }), e.setRotation({ x: t.rotation.x, y: t.rotation.y, z: t.rotation.z }), e.setStatic(t.isStatic), e.setText(t.text), e.setFriction(t.friction), e.setColors(t.color);
  }
  showTip(e) {
    app.play = false, app.timer.pause(), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: e, inputs: [{ type: "button", value: "popup.button.continue", callback: function() {
      app.startLevel(), window.dispatchEvent(new CustomEvent("closePopup"));
    } }] } })), app.assets.audio.play("tip");
  }
  showHelpers(e = true) {
    this.traverse(function(t) {
      t.helper && (t.helper.visible = e);
    });
  }
  updateHelpers() {
    this.children.forEach(function(e) {
      e.helper && e.updateHelper();
    });
  }
  getTheme(e) {
    return wt[e];
  }
  getPackTheme(e) {
    var t;
    return Fe.packs.forEach(function(n) {
      n.levels.forEach(function(s) {
        e == s.title && (t = wt[n.theme]);
      });
    }), t;
  }
  getDescriptionByTitle(e) {
    var t;
    return Fe.packs.forEach(function(n) {
      n.levels.forEach(function(s) {
        e == s.title && (t = s.description);
      });
    }), t;
  }
  getAuthorByTitle(e) {
    var t;
    return Fe.packs.forEach(function(n) {
      n.levels.forEach(function(s) {
        e == s.title && (t = s.author);
      });
    }), t;
  }
  getLevelIndex(e) {
    var t = 0, n = -1;
    return Fe.packs.forEach(function(s) {
      s.levels.forEach(function(i) {
        e == i.title && (n = t), t++;
      });
    }), n;
  }
}
class Cl {
  constructor() {
    this.clear();
  }
  save(e = "Edited level", t) {
    this.history.length = this.historyIndex + 1, this.history.push({ data: t.level.exportToJSON(t), description: e }), this.historyIndex++;
  }
  clear() {
    this.history = [], this.historyIndex = 0;
  }
  undo(e) {
    this.historyIndex > 1 && (this.historyIndex--, e.level.clearLevel(e), e.level.importFromJSON(this.history[this.historyIndex].data, e));
  }
  redo(e) {
    this.historyIndex < this.history.length - 1 && (this.historyIndex++, e.level.clearLevel(e), e.level.importFromJSON(this.history[this.historyIndex].data, e));
  }
}
class _l {
  constructor() {
    this.down = new J(), this.move = new J(), this.offset = new J(), this.up = new J(), this.drag = false, this.mode = "draw", this.snap = 1, this.prevMode = this.mode;
  }
  mouseDown(e, t) {
    if (this.setTolerance(), t.play == false) t.levelEditor.mouseDown(e, t);
    else {
      var n = t.mouse.getPosition(e, t);
      t.player.jump(n), t.player.addRope(n);
    }
  }
  mouseMove(e, t) {
    t.play == false && t.levelEditor.mouseMove(e, t);
  }
  mouseUp(e, t) {
    t.play == false && app.state == "level-editor" && t.levelEditor.mouseUp(e, t), t.player.removeRope();
  }
  getPosition(e, t) {
    var n = new In(), s = new J(), i = [];
    return n.setFromCamera(t.mouse.getMouse(e, t), t.camera), i = n.intersectObject(t.player, true), i.length > 0 && s.copy(i[0].point), s;
  }
  clickObject(e, t) {
    var n = new In(), s = new J(), i, a = e.clientX / t.window.innerWidth * 2 - 1, u = -(e.clientY / t.window.innerHeight) * 2 + 1;
    s.set(a, u, 0), n.setFromCamera(s, t.camera);
    for (var c = n.intersectObjects(t.scene.children, true), p = 0; p < c.length; p++) {
      var l = c[p].object;
      if (l.isMesh && l.material.visible && l.traverseAncestors(function(m) {
        i == null && m.isCube && (i = m);
      }), i) break;
    }
    return i;
  }
  wheel(e, t) {
    e.preventDefault();
  }
  setTolerance(e = 0.05) {
    this.tolerance = app.camera.position.z * e;
  }
  setPosition(e, t) {
    e == "down" ? (this.down = t, this.move = t, this.drag = true) : e == "move" ? this.drag == true && (this.move = t) : e == "up" && (this.up = t, this.drag = false);
  }
  setOffset(e) {
    this.offset.x = e.x - this.down.x, this.offset.y = e.y - this.down.y, this.offset.z = e.z - this.down.z;
  }
  getDragDifference() {
    return { x: Math.round(this.down.x - this.move.x - this.offset.x), y: Math.round(this.down.y - this.move.y - this.offset.y), z: Math.round(this.down.z - this.move.z - this.offset.z) };
  }
  getTolerance() {
    var e = this.getDragDifference();
    return Math.abs(e.x + this.offset.x) + Math.abs(e.y + this.offset.y) > this.tolerance;
  }
  snapToValue(e, t) {
    return Math.round(e / t) * t;
  }
  setSnap(e) {
    this.snap = e;
  }
  setMode(e) {
    this.mode = this.prevMode = e;
  }
  getMode() {
    return this.mode;
  }
  getMouse(e, t) {
    return { x: e.clientX / t.window.innerWidth * 2 - 1, y: -(e.clientY / t.window.innerHeight) * 2 + 1, z: 0.5 };
  }
}
const ht = new In(), Me = new J(), ot = new J(), fe = new Ye(), Ms = { X: new J(1, 0, 0), Y: new J(0, 1, 0), Z: new J(0, 0, 1) }, Wi = { type: "change" }, Ls = { type: "mouseDown", mode: null }, Os = { type: "mouseUp", mode: null }, As = { type: "objectChange" };
class El extends Wo {
  constructor(e, t = null) {
    super(void 0, t);
    const n = new Ol(this);
    this._root = n;
    const s = new Al();
    this._gizmo = s, n.add(s);
    const i = new Rl();
    this._plane = i, n.add(i);
    const a = this;
    function u(w, y) {
      let b = y;
      Object.defineProperty(a, w, { get: function() {
        return b !== void 0 ? b : y;
      }, set: function(S) {
        b !== S && (b = S, i[w] = S, s[w] = S, a.dispatchEvent({ type: w + "-changed", value: S }), a.dispatchEvent(Wi));
      } }), a[w] = y, i[w] = y, s[w] = y;
    }
    u("camera", e), u("object", void 0), u("enabled", true), u("axis", null), u("mode", "translate"), u("translationSnap", null), u("rotationSnap", null), u("scaleSnap", null), u("space", "world"), u("size", 1), u("dragging", false), u("showX", true), u("showY", true), u("showZ", true), u("minX", -1 / 0), u("maxX", 1 / 0), u("minY", -1 / 0), u("maxY", 1 / 0), u("minZ", -1 / 0), u("maxZ", 1 / 0);
    const c = new J(), p = new J(), l = new Ye(), m = new Ye(), o = new J(), r = new Ye(), d = new J(), h = new J(), v = new J(), g = 0, x = new J();
    u("worldPosition", c), u("worldPositionStart", p), u("worldQuaternion", l), u("worldQuaternionStart", m), u("cameraPosition", o), u("cameraQuaternion", r), u("pointStart", d), u("pointEnd", h), u("rotationAxis", v), u("rotationAngle", g), u("eye", x), this._offset = new J(), this._startNorm = new J(), this._endNorm = new J(), this._cameraScale = new J(), this._parentPosition = new J(), this._parentQuaternion = new Ye(), this._parentQuaternionInv = new Ye(), this._parentScale = new J(), this._worldScaleStart = new J(), this._worldQuaternionInv = new Ye(), this._worldScale = new J(), this._positionStart = new J(), this._quaternionStart = new Ye(), this._scaleStart = new J(), this._getPointer = kl.bind(this), this._onPointerDown = Pl.bind(this), this._onPointerHover = Tl.bind(this), this._onPointerMove = Ml.bind(this), this._onPointerUp = Ll.bind(this), t !== null && this.connect(t);
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.style.touchAction = "auto";
  }
  getHelper() {
    return this._root;
  }
  pointerHover(e) {
    if (this.object === void 0 || this.dragging === true) return;
    e !== null && ht.setFromCamera(e, this.camera);
    const t = Xi(this._gizmo.picker[this.mode], ht);
    t ? this.axis = t.object.name : this.axis = null;
  }
  pointerDown(e) {
    if (!(this.object === void 0 || this.dragging === true || e != null && e.button !== 0) && this.axis !== null) {
      e !== null && ht.setFromCamera(e, this.camera);
      const t = Xi(this._plane, ht, true);
      t && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(t.point).sub(this.worldPositionStart)), this.dragging = true, Ls.mode = this.mode, this.dispatchEvent(Ls);
    }
  }
  pointerMove(e) {
    const t = this.axis, n = this.mode, s = this.object;
    let i = this.space;
    if (n === "scale" ? i = "local" : (t === "E" || t === "XYZE" || t === "XYZ") && (i = "world"), s === void 0 || t === null || this.dragging === false || e !== null && e.button !== -1) return;
    e !== null && ht.setFromCamera(e, this.camera);
    const a = Xi(this._plane, ht, true);
    if (a) {
      if (this.pointEnd.copy(a.point).sub(this.worldPositionStart), n === "translate") this._offset.copy(this.pointEnd).sub(this.pointStart), i === "local" && t !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv), t.indexOf("X") === -1 && (this._offset.x = 0), t.indexOf("Y") === -1 && (this._offset.y = 0), t.indexOf("Z") === -1 && (this._offset.z = 0), i === "local" && t !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), s.position.copy(this._offset).add(this._positionStart), this.translationSnap && (i === "local" && (s.position.applyQuaternion(fe.copy(this._quaternionStart).invert()), t.search("X") !== -1 && (s.position.x = Math.round(s.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (s.position.y = Math.round(s.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (s.position.z = Math.round(s.position.z / this.translationSnap) * this.translationSnap), s.position.applyQuaternion(this._quaternionStart)), i === "world" && (s.parent && s.position.add(Me.setFromMatrixPosition(s.parent.matrixWorld)), t.search("X") !== -1 && (s.position.x = Math.round(s.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (s.position.y = Math.round(s.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (s.position.z = Math.round(s.position.z / this.translationSnap) * this.translationSnap), s.parent && s.position.sub(Me.setFromMatrixPosition(s.parent.matrixWorld)))), s.position.x = Math.max(this.minX, Math.min(this.maxX, s.position.x)), s.position.y = Math.max(this.minY, Math.min(this.maxY, s.position.y)), s.position.z = Math.max(this.minZ, Math.min(this.maxZ, s.position.z));
      else if (n === "scale") {
        if (t.search("XYZ") !== -1) {
          let u = this.pointEnd.length() / this.pointStart.length();
          this.pointEnd.dot(this.pointStart) < 0 && (u *= -1), ot.set(u, u, u);
        } else Me.copy(this.pointStart), ot.copy(this.pointEnd), Me.applyQuaternion(this._worldQuaternionInv), ot.applyQuaternion(this._worldQuaternionInv), ot.divide(Me), t.search("X") === -1 && (ot.x = 1), t.search("Y") === -1 && (ot.y = 1), t.search("Z") === -1 && (ot.z = 1);
        s.scale.copy(this._scaleStart).multiply(ot), this.scaleSnap && (t.search("X") !== -1 && (s.scale.x = Math.round(s.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Y") !== -1 && (s.scale.y = Math.round(s.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Z") !== -1 && (s.scale.z = Math.round(s.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
      } else if (n === "rotate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const u = 20 / this.worldPosition.distanceTo(Me.setFromMatrixPosition(this.camera.matrixWorld));
        let c = false;
        t === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(Me.copy(this.rotationAxis).cross(this.eye)) * u) : (t === "X" || t === "Y" || t === "Z") && (this.rotationAxis.copy(Ms[t]), Me.copy(Ms[t]), i === "local" && Me.applyQuaternion(this.worldQuaternion), Me.cross(this.eye), Me.length() === 0 ? c = true : this.rotationAngle = this._offset.dot(Me.normalize()) * u), (t === "E" || c) && (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), i === "local" && t !== "E" && t !== "XYZE" ? (s.quaternion.copy(this._quaternionStart), s.quaternion.multiply(fe.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), s.quaternion.copy(fe.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), s.quaternion.multiply(this._quaternionStart).normalize());
      }
      this.dispatchEvent(Wi), this.dispatchEvent(As);
    }
  }
  pointerUp(e) {
    e !== null && e.button !== 0 || (this.dragging && this.axis !== null && (Os.mode = this.mode, this.dispatchEvent(Os)), this.dragging = false, this.axis = null);
  }
  dispose() {
    this.disconnect(), this._root.dispose();
  }
  attach(e) {
    return this.object = e, this._root.visible = true, this;
  }
  detach() {
    return this.object = void 0, this.axis = null, this._root.visible = false, this;
  }
  reset() {
    this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(Wi), this.dispatchEvent(As), this.pointStart.copy(this.pointEnd));
  }
  getRaycaster() {
    return ht;
  }
  getMode() {
    return this.mode;
  }
  setMode(e) {
    this.mode = e;
  }
  setTranslationSnap(e) {
    this.translationSnap = e;
  }
  setRotationSnap(e) {
    this.rotationSnap = e;
  }
  setScaleSnap(e) {
    this.scaleSnap = e;
  }
  setSize(e) {
    this.size = e;
  }
  setSpace(e) {
    this.space = e;
  }
}
function kl(f) {
  if (this.domElement.ownerDocument.pointerLockElement) return { x: 0, y: 0, button: f.button };
  {
    const e = this.domElement.getBoundingClientRect();
    return { x: (f.clientX - e.left) / e.width * 2 - 1, y: -(f.clientY - e.top) / e.height * 2 + 1, button: f.button };
  }
}
function Tl(f) {
  if (this.enabled) switch (f.pointerType) {
    case "mouse":
    case "pen":
      this.pointerHover(this._getPointer(f));
      break;
  }
}
function Pl(f) {
  this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(f.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(f)), this.pointerDown(this._getPointer(f)));
}
function Ml(f) {
  this.enabled && this.pointerMove(this._getPointer(f));
}
function Ll(f) {
  this.enabled && (this.domElement.releasePointerCapture(f.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(f)));
}
function Xi(f, e, t) {
  const n = e.intersectObject(f, true);
  for (let s = 0; s < n.length; s++) if (n[s].object.visible || t) return n[s];
  return false;
}
const ui = new Yo(), ce = new J(0, 1, 0), Rs = new J(0, 0, 0), Ds = new It(), li = new Ye(), Si = new Ye(), Xe = new J(), Is = new It(), Wt = new J(1, 0, 0), bt = new J(0, 1, 0), Xt = new J(0, 0, 1), ci = new J(), Ht = new J(), Vt = new J();
class Ol extends Yt {
  constructor(e) {
    super(), this.isTransformControlsRoot = true, this.controls = e, this.visible = false;
  }
  updateMatrixWorld(e) {
    const t = this.controls;
    t.object !== void 0 && (t.object.updateMatrixWorld(), t.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : t.object.parent.matrixWorld.decompose(t._parentPosition, t._parentQuaternion, t._parentScale), t.object.matrixWorld.decompose(t.worldPosition, t.worldQuaternion, t._worldScale), t._parentQuaternionInv.copy(t._parentQuaternion).invert(), t._worldQuaternionInv.copy(t.worldQuaternion).invert()), t.camera.updateMatrixWorld(), t.camera.matrixWorld.decompose(t.cameraPosition, t.cameraQuaternion, t._cameraScale), t.camera.isOrthographicCamera ? t.camera.getWorldDirection(t.eye).negate() : t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(), super.updateMatrixWorld(e);
  }
  dispose() {
    this.traverse(function(e) {
      e.geometry && e.geometry.dispose(), e.material && e.material.dispose();
    });
  }
}
class Al extends Yt {
  constructor() {
    super(), this.isTransformControlsGizmo = true, this.type = "TransformControlsGizmo";
    const e = new Yn({ depthTest: false, depthWrite: false, fog: false, toneMapped: false, transparent: true }), t = new Xo({ depthTest: false, depthWrite: false, fog: false, toneMapped: false, transparent: true }), n = e.clone();
    n.opacity = 0.15;
    const s = t.clone();
    s.opacity = 0.5;
    const i = e.clone();
    i.color.setHex(16711680);
    const a = e.clone();
    a.color.setHex(65280);
    const u = e.clone();
    u.color.setHex(255);
    const c = e.clone();
    c.color.setHex(16711680), c.opacity = 0.5;
    const p = e.clone();
    p.color.setHex(65280), p.opacity = 0.5;
    const l = e.clone();
    l.color.setHex(255), l.opacity = 0.5;
    const m = e.clone();
    m.opacity = 0.25;
    const o = e.clone();
    o.color.setHex(16776960), o.opacity = 0.25, e.clone().color.setHex(16776960);
    const d = e.clone();
    d.color.setHex(7895160);
    const h = new Be(0, 0.04, 0.1, 12);
    h.translate(0, 0.05, 0);
    const v = new Ce(0.08, 0.08, 0.08);
    v.translate(0, 0.04, 0);
    const g = new gs();
    g.setAttribute("position", new Oi([0, 0, 0, 1, 0, 0], 3));
    const x = new Be(75e-4, 75e-4, 0.5, 3);
    x.translate(0, 0.25, 0);
    function w(O, j) {
      const $ = new Ut(O, 75e-4, 3, 64, j * Math.PI * 2);
      return $.rotateY(Math.PI / 2), $.rotateX(Math.PI / 2), $;
    }
    function y() {
      const O = new gs();
      return O.setAttribute("position", new Oi([0, 0, 0, 1, 1, 1], 3)), O;
    }
    const b = { X: [[new Z(h, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new Z(h, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]], [new Z(x, i), [0, 0, 0], [0, 0, -Math.PI / 2]]], Y: [[new Z(h, a), [0, 0.5, 0]], [new Z(h, a), [0, -0.5, 0], [Math.PI, 0, 0]], [new Z(x, a)]], Z: [[new Z(h, u), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new Z(h, u), [0, 0, -0.5], [-Math.PI / 2, 0, 0]], [new Z(x, u), null, [Math.PI / 2, 0, 0]]], XYZ: [[new Z(new si(0.1, 0), m.clone()), [0, 0, 0]]], XY: [[new Z(new Ce(0.15, 0.15, 0.01), l.clone()), [0.15, 0.15, 0]]], YZ: [[new Z(new Ce(0.15, 0.15, 0.01), c.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]], XZ: [[new Z(new Ce(0.15, 0.15, 0.01), p.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]] }, S = { X: [[new Z(new Be(0.2, 0, 0.6, 4), n), [0.3, 0, 0], [0, 0, -Math.PI / 2]], [new Z(new Be(0.2, 0, 0.6, 4), n), [-0.3, 0, 0], [0, 0, Math.PI / 2]]], Y: [[new Z(new Be(0.2, 0, 0.6, 4), n), [0, 0.3, 0]], [new Z(new Be(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]]], Z: [[new Z(new Be(0.2, 0, 0.6, 4), n), [0, 0, 0.3], [Math.PI / 2, 0, 0]], [new Z(new Be(0.2, 0, 0.6, 4), n), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]], XYZ: [[new Z(new si(0.2, 0), n)]], XY: [[new Z(new Ce(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]], YZ: [[new Z(new Ce(0.2, 0.2, 0.01), n), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]], XZ: [[new Z(new Ce(0.2, 0.2, 0.01), n), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]] }, C = { START: [[new Z(new si(0.01, 2), s), null, null, null, "helper"]], END: [[new Z(new si(0.01, 2), s), null, null, null, "helper"]], DELTA: [[new at(y(), s), null, null, null, "helper"]], X: [[new at(g, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]], Y: [[new at(g, s.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]], Z: [[new at(g, s.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]] }, _ = { XYZE: [[new Z(w(0.5, 1), d), null, [0, Math.PI / 2, 0]]], X: [[new Z(w(0.5, 0.5), i)]], Y: [[new Z(w(0.5, 0.5), a), null, [0, 0, -Math.PI / 2]]], Z: [[new Z(w(0.5, 0.5), u), null, [0, Math.PI / 2, 0]]], E: [[new Z(w(0.75, 1), o), null, [0, Math.PI / 2, 0]]] }, P = { AXIS: [[new at(g, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]] }, M = { XYZE: [[new Z(new Zo(0.25, 10, 8), n)]], X: [[new Z(new Ut(0.5, 0.1, 4, 24), n), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]], Y: [[new Z(new Ut(0.5, 0.1, 4, 24), n), [0, 0, 0], [Math.PI / 2, 0, 0]]], Z: [[new Z(new Ut(0.5, 0.1, 4, 24), n), [0, 0, 0], [0, 0, -Math.PI / 2]]], E: [[new Z(new Ut(0.75, 0.1, 2, 24), n)]] }, k = { X: [[new Z(v, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new Z(x, i), [0, 0, 0], [0, 0, -Math.PI / 2]], [new Z(v, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]]], Y: [[new Z(v, a), [0, 0.5, 0]], [new Z(x, a)], [new Z(v, a), [0, -0.5, 0], [0, 0, Math.PI]]], Z: [[new Z(v, u), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new Z(x, u), [0, 0, 0], [Math.PI / 2, 0, 0]], [new Z(v, u), [0, 0, -0.5], [-Math.PI / 2, 0, 0]]], XY: [[new Z(new Ce(0.15, 0.15, 0.01), l), [0.15, 0.15, 0]]], YZ: [[new Z(new Ce(0.15, 0.15, 0.01), c), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]], XZ: [[new Z(new Ce(0.15, 0.15, 0.01), p), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]], XYZ: [[new Z(new Ce(0.1, 0.1, 0.1), m.clone())]] }, T = { X: [[new Z(new Be(0.2, 0, 0.6, 4), n), [0.3, 0, 0], [0, 0, -Math.PI / 2]], [new Z(new Be(0.2, 0, 0.6, 4), n), [-0.3, 0, 0], [0, 0, Math.PI / 2]]], Y: [[new Z(new Be(0.2, 0, 0.6, 4), n), [0, 0.3, 0]], [new Z(new Be(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]]], Z: [[new Z(new Be(0.2, 0, 0.6, 4), n), [0, 0, 0.3], [Math.PI / 2, 0, 0]], [new Z(new Be(0.2, 0, 0.6, 4), n), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]], XY: [[new Z(new Ce(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]], YZ: [[new Z(new Ce(0.2, 0.2, 0.01), n), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]], XZ: [[new Z(new Ce(0.2, 0.2, 0.01), n), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]], XYZ: [[new Z(new Ce(0.2, 0.2, 0.2), n), [0, 0, 0]]] }, L = { X: [[new at(g, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]], Y: [[new at(g, s.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]], Z: [[new at(g, s.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]] };
    function D(O) {
      const j = new Yt();
      for (const $ in O) for (let B = O[$].length; B--; ) {
        const N = O[$][B][0].clone(), V = O[$][B][1], q = O[$][B][2], R = O[$][B][3], U = O[$][B][4];
        N.name = $, N.tag = U, V && N.position.set(V[0], V[1], V[2]), q && N.rotation.set(q[0], q[1], q[2]), R && N.scale.set(R[0], R[1], R[2]), N.updateMatrix();
        const ie = N.geometry.clone();
        ie.applyMatrix4(N.matrix), N.geometry = ie, N.renderOrder = 1 / 0, N.position.set(0, 0, 0), N.rotation.set(0, 0, 0), N.scale.set(1, 1, 1), j.add(N);
      }
      return j;
    }
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = D(b)), this.add(this.gizmo.rotate = D(_)), this.add(this.gizmo.scale = D(k)), this.add(this.picker.translate = D(S)), this.add(this.picker.rotate = D(M)), this.add(this.picker.scale = D(T)), this.add(this.helper.translate = D(C)), this.add(this.helper.rotate = D(P)), this.add(this.helper.scale = D(L)), this.picker.translate.visible = false, this.picker.rotate.visible = false, this.picker.scale.visible = false;
  }
  updateMatrixWorld(e) {
    const n = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : Si;
    this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
    let s = [];
    s = s.concat(this.picker[this.mode].children), s = s.concat(this.gizmo[this.mode].children), s = s.concat(this.helper[this.mode].children);
    for (let i = 0; i < s.length; i++) {
      const a = s[i];
      a.visible = true, a.rotation.set(0, 0, 0), a.position.copy(this.worldPosition);
      let u;
      if (this.camera.isOrthographicCamera ? u = (this.camera.top - this.camera.bottom) / this.camera.zoom : u = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), a.scale.set(1, 1, 1).multiplyScalar(u * this.size / 4), a.tag === "helper") {
        a.visible = false, a.name === "AXIS" ? (a.visible = !!this.axis, this.axis === "X" && (fe.setFromEuler(ui.set(0, 0, 0)), a.quaternion.copy(n).multiply(fe), Math.abs(ce.copy(Wt).applyQuaternion(n).dot(this.eye)) > 0.9 && (a.visible = false)), this.axis === "Y" && (fe.setFromEuler(ui.set(0, 0, Math.PI / 2)), a.quaternion.copy(n).multiply(fe), Math.abs(ce.copy(bt).applyQuaternion(n).dot(this.eye)) > 0.9 && (a.visible = false)), this.axis === "Z" && (fe.setFromEuler(ui.set(0, Math.PI / 2, 0)), a.quaternion.copy(n).multiply(fe), Math.abs(ce.copy(Xt).applyQuaternion(n).dot(this.eye)) > 0.9 && (a.visible = false)), this.axis === "XYZE" && (fe.setFromEuler(ui.set(0, Math.PI / 2, 0)), ce.copy(this.rotationAxis), a.quaternion.setFromRotationMatrix(Ds.lookAt(Rs, ce, bt)), a.quaternion.multiply(fe), a.visible = this.dragging), this.axis === "E" && (a.visible = false)) : a.name === "START" ? (a.position.copy(this.worldPositionStart), a.visible = this.dragging) : a.name === "END" ? (a.position.copy(this.worldPosition), a.visible = this.dragging) : a.name === "DELTA" ? (a.position.copy(this.worldPositionStart), a.quaternion.copy(this.worldQuaternionStart), Me.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), Me.applyQuaternion(this.worldQuaternionStart.clone().invert()), a.scale.copy(Me), a.visible = this.dragging) : (a.quaternion.copy(n), this.dragging ? a.position.copy(this.worldPositionStart) : a.position.copy(this.worldPosition), this.axis && (a.visible = this.axis.search(a.name) !== -1));
        continue;
      }
      a.quaternion.copy(n), this.mode === "translate" || this.mode === "scale" ? (a.name === "X" && Math.abs(ce.copy(Wt).applyQuaternion(n).dot(this.eye)) > 0.99 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = false), a.name === "Y" && Math.abs(ce.copy(bt).applyQuaternion(n).dot(this.eye)) > 0.99 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = false), a.name === "Z" && Math.abs(ce.copy(Xt).applyQuaternion(n).dot(this.eye)) > 0.99 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = false), a.name === "XY" && Math.abs(ce.copy(Xt).applyQuaternion(n).dot(this.eye)) < 0.2 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = false), a.name === "YZ" && Math.abs(ce.copy(Wt).applyQuaternion(n).dot(this.eye)) < 0.2 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = false), a.name === "XZ" && Math.abs(ce.copy(bt).applyQuaternion(n).dot(this.eye)) < 0.2 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = false)) : this.mode === "rotate" && (li.copy(n), ce.copy(this.eye).applyQuaternion(fe.copy(n).invert()), a.name.search("E") !== -1 && a.quaternion.setFromRotationMatrix(Ds.lookAt(this.eye, Rs, bt)), a.name === "X" && (fe.setFromAxisAngle(Wt, Math.atan2(-ce.y, ce.z)), fe.multiplyQuaternions(li, fe), a.quaternion.copy(fe)), a.name === "Y" && (fe.setFromAxisAngle(bt, Math.atan2(ce.x, ce.z)), fe.multiplyQuaternions(li, fe), a.quaternion.copy(fe)), a.name === "Z" && (fe.setFromAxisAngle(Xt, Math.atan2(ce.y, ce.x)), fe.multiplyQuaternions(li, fe), a.quaternion.copy(fe))), a.visible = a.visible && (a.name.indexOf("X") === -1 || this.showX), a.visible = a.visible && (a.name.indexOf("Y") === -1 || this.showY), a.visible = a.visible && (a.name.indexOf("Z") === -1 || this.showZ), a.visible = a.visible && (a.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), a.material._color = a.material._color || a.material.color.clone(), a.material._opacity = a.material._opacity || a.material.opacity, a.material.color.copy(a.material._color), a.material.opacity = a.material._opacity, this.enabled && this.axis && (a.name === this.axis || this.axis.split("").some(function(c) {
        return a.name === c;
      })) && (a.material.color.setHex(16776960), a.material.opacity = 1);
    }
    super.updateMatrixWorld(e);
  }
}
class Rl extends Z {
  constructor() {
    super(new ia(1e5, 1e5, 2, 2), new Yn({ visible: false, wireframe: true, side: Li, transparent: true, opacity: 0.1, toneMapped: false })), this.isTransformControlsPlane = true, this.type = "TransformControlsPlane";
  }
  updateMatrixWorld(e) {
    let t = this.space;
    switch (this.position.copy(this.worldPosition), this.mode === "scale" && (t = "local"), ci.copy(Wt).applyQuaternion(t === "local" ? this.worldQuaternion : Si), Ht.copy(bt).applyQuaternion(t === "local" ? this.worldQuaternion : Si), Vt.copy(Xt).applyQuaternion(t === "local" ? this.worldQuaternion : Si), ce.copy(Ht), this.mode) {
      case "translate":
      case "scale":
        switch (this.axis) {
          case "X":
            ce.copy(this.eye).cross(ci), Xe.copy(ci).cross(ce);
            break;
          case "Y":
            ce.copy(this.eye).cross(Ht), Xe.copy(Ht).cross(ce);
            break;
          case "Z":
            ce.copy(this.eye).cross(Vt), Xe.copy(Vt).cross(ce);
            break;
          case "XY":
            Xe.copy(Vt);
            break;
          case "YZ":
            Xe.copy(ci);
            break;
          case "XZ":
            ce.copy(Vt), Xe.copy(Ht);
            break;
          case "XYZ":
          case "E":
            Xe.set(0, 0, 0);
            break;
        }
        break;
      case "rotate":
      default:
        Xe.set(0, 0, 0);
    }
    Xe.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (Is.lookAt(Me.set(0, 0, 0), Xe, ce), this.quaternion.setFromRotationMatrix(Is)), super.updateMatrixWorld(e);
  }
}
class Dl {
  constructor(e, t) {
    this.selectedObjectType = "cube", this.controlsTransform = new El(e, t), this.controlsTransform.showZ = true, this.controlsTransform.space = "world", this.controlsTransform.showAll = false, this.controlsTransform.offset = new J(0, 16, 0), this.controlsOrbit = new uu(e, t), this.controlsOrbit.enabled = false, this.controlsOrbit.mouseButtons = { LEFT: 2, MIDDLE: 2, RIGHT: 0 }, this.controlsOrbit.touches = { ONE: 1, TWO: 3 }, this.controlsOrbit.zoomSpeed = 3, this.controlsOrbit.minDistance = 10, this.controlsOrbit.maxDistance = 1e3, this.controlsOrbit.rotateSpeed = 0.5, this.controlsOrbit.rotateSpeedDefault = 0.5, this.controlsOrbit.panSpeed = 1, this.controlsOrbit.panSpeedDefault = 1, this.down = new Ne(), this.move = new Ne(), this.up = new Ne(), this.drag = false, this.snap = 16, this.keys = {}, this.controlsTransform.addEventListener("mouseDown", () => {
      this.controlsOrbit.enabled = false, this.saveSelectedObject();
    }), this.controlsTransform.addEventListener("mouseUp", () => {
      this.controlsOrbit.enabled = true, this.updateSelectedObject();
    }), this.controlsTransform.addEventListener("objectChange", () => {
      this.controlsTransform.moved = true;
    }), this.controlsOrbit.addEventListener("start", () => {
      this.controlsOrbit.moved = false;
    }), this.controlsOrbit.addEventListener("change", () => {
      this.controlsOrbit.moved = true;
    }), t.addEventListener("pointerdown", this.pointerDown.bind(this)), t.addEventListener("pointermove", this.pointerMove.bind(this)), t.addEventListener("pointerup", this.pointerUp.bind(this)), t.addEventListener("wheel", this.updateRender), window.addEventListener("resize", this.updateRender), window.addEventListener("setSelectedObject", this.updateRender), window.addEventListener("setSelectedMode", this.updateRender), window.addEventListener("themeSelected", this.updateRender), window.addEventListener("keydown", this.keyDown.bind(this)), window.addEventListener("keyup", this.keyUp.bind(this));
  }
  pointerDown(e) {
    this.down.set(e.clientX, e.clientY), this.drag = true, this.controlsOrbit.rotateSpeed = 0, this.controlsOrbit.panSpeed = 0, this.updateRender();
  }
  pointerMove(e) {
    this.move.set(e.clientX, e.clientY), this.isSnapped() == false && (this.controlsOrbit.rotateSpeed = this.controlsOrbit.rotateSpeedDefault, this.controlsOrbit.panSpeed = this.controlsOrbit.panSpeedDefault), this.updateRender();
  }
  pointerUp(e) {
    this.up.set(e.clientX, e.clientY), this.drag = false, this.updateRender();
  }
  isSnapped() {
    var e = this.down.distanceTo(this.move);
    return e < this.snap;
  }
  updateRender() {
    app.state == "level-editor" && app.play == false && app.graphics.render();
  }
  mouseDown(e, t) {
    t.mouse.setPosition("down", t.mouse.getPosition(e, t)), this.controlsTransform.moved = false, this.controlsTransform.setTranslationSnap(t.mouse.snap), this.controlsTransform.setScaleSnap(t.mouse.snap), this.controlsTransform.setRotationSnap(t.mouse.snap > 1 ? Math.PI / 12 : null);
  }
  mouseMove(e, t) {
    t.mouse.setPosition("move", t.mouse.getPosition(e, t));
  }
  mouseUp(e, t) {
    var n = t.mouse.clickObject(e, t);
    if (t.mouse.setPosition("up", t.mouse.getPosition(e, t)), e.button == 2 && (t.mouse.mode = "erase"), t.mouse.mode == "draw") if (t.selectedObject == null || n) {
      if (n) this.controlsTransform.moved == false && this.controlsOrbit.moved == false && (t.level.deselectLevel(t), t.selectedObject = n, t.selectedObject.select(true), this.controlsTransform.attach(n), t.selectedObject.getClass() != "player" && window.dispatchEvent(new CustomEvent("selectObjectType", { detail: { type: t.selectedObject.getClass(), checkNull: false } })), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: t.selectedObject })));
      else if (this.controlsOrbit.moved == false && this.isSnapped()) {
        var s = app.levelEditor.selectedObjectType, i = { class: s, color: app.level.entityFactory.color, isStatic: true, position: { x: t.mouse.snapToValue(t.mouse.down.x, t.mouse.snap), y: t.mouse.snapToValue(t.mouse.down.y, t.mouse.snap), z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: t.BOX_SIZE, y: t.BOX_SIZE, z: t.BOX_SIZE } };
        t.level.deselectLevel(t), t.selectedObject = t.level.entityFactory.createObject(s), t.level.setObjectProperties(t.selectedObject, i), t.level.addObject(t.selectedObject, t), t.levelHistory.save("Added " + s, t), t.selectedObject.select(true), this.controlsTransform.attach(t.selectedObject), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: t.selectedObject }));
      }
    } else this.controlsTransform.moved == false && this.controlsOrbit.moved == false && (t.level.deselectLevel(app), this.controlsTransform.detach(), window.dispatchEvent(new CustomEvent("setSelectedObject")));
    else t.mouse.mode == "erase" && (this.controlsOrbit.moved == false && (t.levelEditor.eraseTarget(e, t), t.level.deselectLevel(t), t.levelHistory.save("Erased object", t), this.controlsTransform.detach(), window.dispatchEvent(new CustomEvent("setSelectedObject"))), t.mouse.mode = t.mouse.prevMode);
  }
  keyDown(e) {
    this.keys[e.code] = true;
  }
  keyUp(e) {
    this.keys[e.code] = false, this.updateRender();
  }
  eraseTarget(e, t) {
    var n = t.mouse.clickObject(e, t);
    n != null && n.getClass() != "player" && (n.select(true), t.level.removeObject(n, t, true));
  }
  duplicateSelectedObject(e = { x: 0, y: 0, z: 0 }) {
    app.selectedObject && (app.selectedObject.select(false), app.selectedObject = app.level.duplicateObject(app.selectedObject, app), app.selectedObject.position.add(e), app.selectedObject.select(true), app.levelEditor.controlsTransform.attach(app.selectedObject), app.levelEditor.setMode("translate"), app.levelHistory.save("Duplicated object", app));
  }
  deleteSelectedObject() {
    app.selectedObject && (app.level.removeObject(app.selectedObject, app), app.levelEditor.controlsTransform.detach(), app.levelHistory.save("Deleted object", app), window.dispatchEvent(new CustomEvent("setSelectedObject")));
  }
  saveLevel() {
    app.levelEditor.controlsTransform.detach(), app.resetScene(app), app.level.deselectLevel(app), app.level.saveLevelData(app);
  }
  exitLevel() {
    app.levelHistory.history.length > 2 ? window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "popup.text.save_level", inputs: [{ value: "popup.button.no", type: "button", callback: function() {
      app.levelEditor.saveAndExitLevelEditor(false), window.dispatchEvent(new CustomEvent("closePopup"));
    } }, { value: "popup.button.yes", type: "button", callback: function() {
      app.levelEditor.saveAndExitLevelEditor(true), window.dispatchEvent(new CustomEvent("closePopup"));
    } }] } })) : app.levelEditor.saveAndExitLevelEditor(false);
  }
  saveAndExitLevelEditor(e) {
    app.levelEditor.controlsOrbit.enabled = false, app.levelEditor.controlsOrbit.reset(), app.levelEditor.controlsTransform.detach(), app.play = false, e == true && app.levelEditor.saveLevel(), app.level.clearLevel(app), app.levelHistory.clear(), app.player.removeCheckpoint(), app.player.setPosition({ x: 0, y: 0, z: 0 }), app.levelEditor.controlsOrbit.enabled = false, window.dispatchEvent(new CustomEvent("setPage", { detail: "level-manager" }));
  }
  undo() {
    app.levelEditor.controlsTransform.detach(), app.levelHistory.undo(app), window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  redo() {
    app.levelHistory.redo(app), window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  rewind() {
    app.level.retryLevel(app), app.level.deselectLevel(app), app.pauseLevel(), window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  saveSelectedObject() {
    this.keys.ShiftLeft === true && this.duplicateSelectedObject();
    var e = app.selectedObject;
    e && (e.position0 = e.position.clone(), e.scale0 = e.scale.clone(), e.rotation0 = e.rotation.clone());
  }
  resetZAxis() {
    app.selectedObject && (app.selectedObject.position.z = 0, this.updateSelectedObject());
  }
  updateSelectedObject() {
    var e = app.selectedObject;
    this.keys.ShiftLeft ? this.controlsTransform.offset.copy(e.position).sub(e.position0) : this.controlsTransform.offset.set(0, 0, 0), e.position.z == 0 ? e.body.collisionFilter.mask = -1 : e.body.collisionFilter.mask = 0, e.setPosition(e.getPosition());
    var t = e.rotation.z;
    e.setRotation(0, false), e.setBodyScale(e.scale.x / e.scale0.x, e.scale.y / e.scale0.y), e.setRotation(t, false), e.setScale(e.getScale()), e.setRotation(e.getRotation()), app.levelHistory.save("Object updated", app);
  }
  setMode(e) {
    this.controlsTransform.setMode(e), e == "translate" ? (this.controlsTransform.showX = true, this.controlsTransform.showY = true, this.controlsTransform.showZ = true) : e == "scale" ? (this.controlsTransform.showX = true, this.controlsTransform.showY = true, this.controlsTransform.showZ = true) : e == "rotate" && (this.controlsTransform.showX = this.controlsTransform.showAll, this.controlsTransform.showY = this.controlsTransform.showAll, this.controlsTransform.showZ = true), window.dispatchEvent(new CustomEvent("setSelectedMode", { detail: e }));
  }
  selectObjectType(e, t = true) {
    app.selectedObject != null && t == true && (app.selectedObject = app.level.changeObjectType(app.selectedObject, e, app), app.selectedObject.select(true), app.levelEditor.controlsTransform.attach(app.selectedObject), app.levelHistory.save("Changed object to " + e, app), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: app.selectedObject }))), app.levelEditor.selectedObjectType = e;
  }
  toggleSelectedObjectStaticState() {
    app.selectedObject.toggleStatic(), app.selectedObject = app.level.refreshObject(app.selectedObject, app), app.selectedObject.select(true), app.levelEditor.controlsTransform.attach(app.selectedObject), app.levelHistory.save("Updated object state", app), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: app.selectedObject }));
  }
}
class Il extends zu {
  constructor(e) {
    super(), e = Object.assign({ type: "div", class: "CSS2DObject", text: "Hello, World!" }, e), this.element = document.createElement(e.type), this.element.className = e.class, this.setText(e.text), this.addEventListener("added", function(t) {
      t.target.parent.addEventListener("removed", this.removeFromParent.bind(this));
    }.bind(this));
  }
  setText(e) {
    this.element.innerHTML = e;
  }
  hideText() {
    this.visible = false;
  }
  showText() {
    this.visible = true;
  }
}
class Bl {
  constructor(e) {
    this.network = e, this.players = new St(), this.tweens = new aa(), this.smooth = true, this.tick = 10, this.network.on("peer_open", this.onPeerOpen.bind(this)), this.network.on("peer_close", this.onPeerClose.bind(this)), this.network.on("peer_disconnected", this.onPeerDisconnected.bind(this)), this.network.on("connection_open", this.onConnectionOpen.bind(this)), this.network.on("connection_close", this.onConnectionClose.bind(this)), this.network.on("connection_data", this.onConnectionData.bind(this));
  }
  update(e, t) {
    this.isHost() && this.sendHostDataToGuests(), this.checkHeartbeat();
  }
  render(e, t) {
    this.tweens.update();
  }
  onPeerOpen(e) {
    if (this.isHost()) {
      var t = app.storage.getSettings();
      app.player.setText(t.name);
    }
  }
  onPeerClose(e) {
    this.players.clear();
  }
  onPeerDisconnected(e) {
  }
  onConnectionOpen(e) {
    this.isHost() && this.addPlayerFromConnection(e.connection);
  }
  onConnectionClose(e) {
    this.isHost() ? this.removePlayerFromConnection(e.connection) : this.players.clear();
  }
  onConnectionData(e) {
    e.connection.metadata.time = e.data.time, e.data.type == "players" && (this.isHost() ? this.updatePlayerFromGuest(e.data) : this.updatePlayersFromHost(e.data));
  }
  checkHeartbeat() {
    this.network.connections.forEach(function(e) {
      var t = this.getTime() - e.metadata.time;
      t > 5e3 && e.close();
    }.bind(this));
  }
  updatePlayerFromGuest(e) {
    var t = this.getPlayer(e.players[0]);
    this.updatePlayer(t, e.players[0]);
  }
  updatePlayersFromHost(e) {
    if (e.players.length - 1 != this.players.children.length) {
      var t = this.players.children.filter(function(i) {
        return !e.players.some(function(a) {
          return i.uuid === a.uuid;
        });
      });
      t.forEach(function(i) {
        i.removeFromParent();
      });
    }
    for (var n = e.players.length - 1; n >= 0; n--) if (e.players[n].uuid != app.player.uuid) {
      var s = this.getPlayer(e.players[n]);
      s == null && (s = this.addPlayer(e.players[n])), this.updatePlayer(s, e.players[n]), this.sendGuestDataToHost();
    }
  }
  setHost(e) {
    this.host = e;
  }
  isHost() {
    return this.host != null;
  }
  sendHostDataToGuests() {
    this.updateLocalPlayer();
    for (var e = { type: "players", players: [this.playerToJSON(app.player)], time: this.getTime() }, t = this.players.children.length - 1; t >= 0; t--) {
      var n = this.players.children[t];
      e.players.push(this.playerToJSON(n));
    }
    this.network.connections.forEach(function(s) {
      s.send(e);
    });
  }
  sendGuestDataToHost() {
    this.updateLocalPlayer();
    var e = { type: "players", players: [this.playerToJSON(app.player)], time: this.getTime() };
    this.network.connections.forEach(function(t) {
      t.send(e);
    });
  }
  addPlayerFromConnection(e) {
    return this.addPlayer(e.metadata);
  }
  removePlayerFromConnection(e) {
    return this.removePlayer(e.metadata.uuid);
  }
  getPlayer(e) {
    var t = this.players.getObjectByProperty("uuid", e.uuid);
    return t;
  }
  addPlayer(e) {
    var t = this.getPlayer(e);
    return t == null && (t = new Jn(), t.visible = false, t.setText(e.name), t.add(new Il({ text: t.text })), t.positionPrev = t.position.clone(), t.positionNext = t.position.clone(), t.rotationPrev = t.rotation.clone(), t.rotationNext = t.rotation.clone(), t.uuid = e.uuid, t.light.removeFromParent(), this.players.add(t)), t;
  }
  updatePlayer(e, t) {
    e && (e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.rotationPrev.z = e.rotation.z, e.positionNext.x = t.position.x, e.positionNext.y = t.position.y, e.rotationNext.z = t.rotation.z, e.scale.x = t.scale.x, e.scale.y = t.scale.y, e.scale.z = t.scale.z, e.level = t.level, e.skin.url != t.skin && e.addTexture({ url: t.skin }), e.visible = app.level.name == e.level, this.tween({ object: { alpha: 0 }, to: { alpha: 1 }, duration: 1e3 / this.tick, onUpdate: function(n) {
      e.position.x = e.positionPrev.x + (e.positionNext.x - e.positionPrev.x) * (this.smooth == true ? n.alpha : 1), e.position.y = e.positionPrev.y + (e.positionNext.y - e.positionPrev.y) * (this.smooth == true ? n.alpha : 1), e.rotation.z = e.rotationPrev.z + (e.rotationNext.z - e.rotationPrev.z) * (this.smooth == true ? n.alpha : 1);
    }.bind(this) }).start());
  }
  tween(e) {
    var t = new oa(e.object, this.tweens).to(e.to, e.duration).dynamic(e.dynamic).easing(e.easing).interpolation(e.interpolation).onStart(e.onStart).onUpdate(e.onUpdate).onComplete(e.onComplete);
    return t;
  }
  updateLocalPlayer() {
    app.player.level = app.level.name, app.player.skin.url.startsWith("data:") && (app.player.skin.url = "png/custom.png");
  }
  removePlayer(e) {
    var t = this.players.getObjectByProperty("uuid", e);
    return t && t.removeFromParent(), t;
  }
  setTick(e) {
    this.tick = e;
  }
  playerToJSON(e) {
    return { uuid: e.uuid, position: { x: e.position.x, y: e.position.y, z: 0 }, rotation: { x: 0, y: 0, z: e.rotation.z }, scale: { x: e.scale.x, y: e.scale.y, z: e.scale.z }, name: e.text, skin: e.skin.url, level: e.level };
  }
  getConnectionByUUID(e) {
    var t;
    return app.network.connections.forEach(function(n) {
      e == n.metadata.uuid && (t = n);
    }), t;
  }
  closeConnectionByUUID(e) {
    if (this.isHost()) {
      var t = this.getConnectionByUUID(e);
      t.close();
    }
  }
  getTime() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
}
class zl {
  constructor() {
    this.encoder = new TextEncoder(), this._pieces = [], this._parts = [];
  }
  append_buffer(e) {
    this.flush(), this._parts.push(e);
  }
  append(e) {
    this._pieces.push(e);
  }
  flush() {
    if (this._pieces.length > 0) {
      const e = new Uint8Array(this._pieces);
      this._parts.push(e), this._pieces = [];
    }
  }
  toArrayBuffer() {
    const e = [];
    for (const t of this._parts) e.push(t);
    return $l(e).buffer;
  }
}
function $l(f) {
  let e = 0;
  for (const s of f) e += s.byteLength;
  const t = new Uint8Array(e);
  let n = 0;
  for (const s of f) {
    const i = new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
    t.set(i, n), n += s.byteLength;
  }
  return t;
}
function fa(f) {
  return new Nl(f).unpack();
}
function pa(f) {
  const e = new jl(), t = e.pack(f);
  return t instanceof Promise ? t.then(() => e.getBuffer()) : e.getBuffer();
}
class Nl {
  constructor(e) {
    this.index = 0, this.dataBuffer = e, this.dataView = new Uint8Array(this.dataBuffer), this.length = this.dataBuffer.byteLength;
  }
  unpack() {
    const e = this.unpack_uint8();
    if (e < 128) return e;
    if ((e ^ 224) < 32) return (e ^ 224) - 32;
    let t;
    if ((t = e ^ 160) <= 15) return this.unpack_raw(t);
    if ((t = e ^ 176) <= 15) return this.unpack_string(t);
    if ((t = e ^ 144) <= 15) return this.unpack_array(t);
    if ((t = e ^ 128) <= 15) return this.unpack_map(t);
    switch (e) {
      case 192:
        return null;
      case 193:
        return;
      case 194:
        return false;
      case 195:
        return true;
      case 202:
        return this.unpack_float();
      case 203:
        return this.unpack_double();
      case 204:
        return this.unpack_uint8();
      case 205:
        return this.unpack_uint16();
      case 206:
        return this.unpack_uint32();
      case 207:
        return this.unpack_uint64();
      case 208:
        return this.unpack_int8();
      case 209:
        return this.unpack_int16();
      case 210:
        return this.unpack_int32();
      case 211:
        return this.unpack_int64();
      case 212:
        return;
      case 213:
        return;
      case 214:
        return;
      case 215:
        return;
      case 216:
        return t = this.unpack_uint16(), this.unpack_string(t);
      case 217:
        return t = this.unpack_uint32(), this.unpack_string(t);
      case 218:
        return t = this.unpack_uint16(), this.unpack_raw(t);
      case 219:
        return t = this.unpack_uint32(), this.unpack_raw(t);
      case 220:
        return t = this.unpack_uint16(), this.unpack_array(t);
      case 221:
        return t = this.unpack_uint32(), this.unpack_array(t);
      case 222:
        return t = this.unpack_uint16(), this.unpack_map(t);
      case 223:
        return t = this.unpack_uint32(), this.unpack_map(t);
    }
  }
  unpack_uint8() {
    const e = this.dataView[this.index] & 255;
    return this.index++, e;
  }
  unpack_uint16() {
    const e = this.read(2), t = (e[0] & 255) * 256 + (e[1] & 255);
    return this.index += 2, t;
  }
  unpack_uint32() {
    const e = this.read(4), t = ((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3];
    return this.index += 4, t;
  }
  unpack_uint64() {
    const e = this.read(8), t = ((((((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3]) * 256 + e[4]) * 256 + e[5]) * 256 + e[6]) * 256 + e[7];
    return this.index += 8, t;
  }
  unpack_int8() {
    const e = this.unpack_uint8();
    return e < 128 ? e : e - 256;
  }
  unpack_int16() {
    const e = this.unpack_uint16();
    return e < 32768 ? e : e - 65536;
  }
  unpack_int32() {
    const e = this.unpack_uint32();
    return e < 2 ** 31 ? e : e - 2 ** 32;
  }
  unpack_int64() {
    const e = this.unpack_uint64();
    return e < 2 ** 63 ? e : e - 2 ** 64;
  }
  unpack_raw(e) {
    if (this.length < this.index + e) throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);
    const t = this.dataBuffer.slice(this.index, this.index + e);
    return this.index += e, t;
  }
  unpack_string(e) {
    const t = this.read(e);
    let n = 0, s = "", i, a;
    for (; n < e; ) i = t[n], i < 160 ? (a = i, n++) : (i ^ 192) < 32 ? (a = (i & 31) << 6 | t[n + 1] & 63, n += 2) : (i ^ 224) < 16 ? (a = (i & 15) << 12 | (t[n + 1] & 63) << 6 | t[n + 2] & 63, n += 3) : (a = (i & 7) << 18 | (t[n + 1] & 63) << 12 | (t[n + 2] & 63) << 6 | t[n + 3] & 63, n += 4), s += String.fromCodePoint(a);
    return this.index += e, s;
  }
  unpack_array(e) {
    const t = new Array(e);
    for (let n = 0; n < e; n++) t[n] = this.unpack();
    return t;
  }
  unpack_map(e) {
    const t = {};
    for (let n = 0; n < e; n++) {
      const s = this.unpack();
      t[s] = this.unpack();
    }
    return t;
  }
  unpack_float() {
    const e = this.unpack_uint32(), t = e >> 31, n = (e >> 23 & 255) - 127, s = e & 8388607 | 8388608;
    return (t === 0 ? 1 : -1) * s * 2 ** (n - 23);
  }
  unpack_double() {
    const e = this.unpack_uint32(), t = this.unpack_uint32(), n = e >> 31, s = (e >> 20 & 2047) - 1023, a = (e & 1048575 | 1048576) * 2 ** (s - 20) + t * 2 ** (s - 52);
    return (n === 0 ? 1 : -1) * a;
  }
  read(e) {
    const t = this.index;
    if (t + e <= this.length) return this.dataView.subarray(t, t + e);
    throw new Error("BinaryPackFailure: read index out of range");
  }
}
class jl {
  getBuffer() {
    return this._bufferBuilder.toArrayBuffer();
  }
  pack(e) {
    if (typeof e == "string") this.pack_string(e);
    else if (typeof e == "number") Math.floor(e) === e ? this.pack_integer(e) : this.pack_double(e);
    else if (typeof e == "boolean") e === true ? this._bufferBuilder.append(195) : e === false && this._bufferBuilder.append(194);
    else if (e === void 0) this._bufferBuilder.append(192);
    else if (typeof e == "object") if (e === null) this._bufferBuilder.append(192);
    else {
      const t = e.constructor;
      if (e instanceof Array) {
        const n = this.pack_array(e);
        if (n instanceof Promise) return n.then(() => this._bufferBuilder.flush());
      } else if (e instanceof ArrayBuffer) this.pack_bin(new Uint8Array(e));
      else if ("BYTES_PER_ELEMENT" in e) {
        const n = e;
        this.pack_bin(new Uint8Array(n.buffer, n.byteOffset, n.byteLength));
      } else if (e instanceof Date) this.pack_string(e.toString());
      else {
        if (e instanceof Blob) return e.arrayBuffer().then((n) => {
          this.pack_bin(new Uint8Array(n)), this._bufferBuilder.flush();
        });
        if (t == Object || t.toString().startsWith("class")) {
          const n = this.pack_object(e);
          if (n instanceof Promise) return n.then(() => this._bufferBuilder.flush());
        } else throw new Error(`Type "${t.toString()}" not yet supported`);
      }
    }
    else throw new Error(`Type "${typeof e}" not yet supported`);
    this._bufferBuilder.flush();
  }
  pack_bin(e) {
    const t = e.length;
    if (t <= 15) this.pack_uint8(160 + t);
    else if (t <= 65535) this._bufferBuilder.append(218), this.pack_uint16(t);
    else if (t <= 4294967295) this._bufferBuilder.append(219), this.pack_uint32(t);
    else throw new Error("Invalid length");
    this._bufferBuilder.append_buffer(e);
  }
  pack_string(e) {
    const t = this._textEncoder.encode(e), n = t.length;
    if (n <= 15) this.pack_uint8(176 + n);
    else if (n <= 65535) this._bufferBuilder.append(216), this.pack_uint16(n);
    else if (n <= 4294967295) this._bufferBuilder.append(217), this.pack_uint32(n);
    else throw new Error("Invalid length");
    this._bufferBuilder.append_buffer(t);
  }
  pack_array(e) {
    const t = e.length;
    if (t <= 15) this.pack_uint8(144 + t);
    else if (t <= 65535) this._bufferBuilder.append(220), this.pack_uint16(t);
    else if (t <= 4294967295) this._bufferBuilder.append(221), this.pack_uint32(t);
    else throw new Error("Invalid length");
    const n = (s) => {
      if (s < t) {
        const i = this.pack(e[s]);
        return i instanceof Promise ? i.then(() => n(s + 1)) : n(s + 1);
      }
    };
    return n(0);
  }
  pack_integer(e) {
    if (e >= -32 && e <= 127) this._bufferBuilder.append(e & 255);
    else if (e >= 0 && e <= 255) this._bufferBuilder.append(204), this.pack_uint8(e);
    else if (e >= -128 && e <= 127) this._bufferBuilder.append(208), this.pack_int8(e);
    else if (e >= 0 && e <= 65535) this._bufferBuilder.append(205), this.pack_uint16(e);
    else if (e >= -32768 && e <= 32767) this._bufferBuilder.append(209), this.pack_int16(e);
    else if (e >= 0 && e <= 4294967295) this._bufferBuilder.append(206), this.pack_uint32(e);
    else if (e >= -2147483648 && e <= 2147483647) this._bufferBuilder.append(210), this.pack_int32(e);
    else if (e >= -9223372036854776e3 && e <= 9223372036854776e3) this._bufferBuilder.append(211), this.pack_int64(e);
    else if (e >= 0 && e <= 18446744073709552e3) this._bufferBuilder.append(207), this.pack_uint64(e);
    else throw new Error("Invalid integer");
  }
  pack_double(e) {
    let t = 0;
    e < 0 && (t = 1, e = -e);
    const n = Math.floor(Math.log(e) / Math.LN2), s = e / 2 ** n - 1, i = Math.floor(s * 2 ** 52), a = 2 ** 32, u = t << 31 | n + 1023 << 20 | i / a & 1048575, c = i % a;
    this._bufferBuilder.append(203), this.pack_int32(u), this.pack_int32(c);
  }
  pack_object(e) {
    const t = Object.keys(e), n = t.length;
    if (n <= 15) this.pack_uint8(128 + n);
    else if (n <= 65535) this._bufferBuilder.append(222), this.pack_uint16(n);
    else if (n <= 4294967295) this._bufferBuilder.append(223), this.pack_uint32(n);
    else throw new Error("Invalid length");
    const s = (i) => {
      if (i < t.length) {
        const a = t[i];
        if (e.hasOwnProperty(a)) {
          this.pack(a);
          const u = this.pack(e[a]);
          if (u instanceof Promise) return u.then(() => s(i + 1));
        }
        return s(i + 1);
      }
    };
    return s(0);
  }
  pack_uint8(e) {
    this._bufferBuilder.append(e);
  }
  pack_uint16(e) {
    this._bufferBuilder.append(e >> 8), this._bufferBuilder.append(e & 255);
  }
  pack_uint32(e) {
    const t = e & 4294967295;
    this._bufferBuilder.append((t & 4278190080) >>> 24), this._bufferBuilder.append((t & 16711680) >>> 16), this._bufferBuilder.append((t & 65280) >>> 8), this._bufferBuilder.append(t & 255);
  }
  pack_uint64(e) {
    const t = e / 4294967296, n = e % 2 ** 32;
    this._bufferBuilder.append((t & 4278190080) >>> 24), this._bufferBuilder.append((t & 16711680) >>> 16), this._bufferBuilder.append((t & 65280) >>> 8), this._bufferBuilder.append(t & 255), this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255);
  }
  pack_int8(e) {
    this._bufferBuilder.append(e & 255);
  }
  pack_int16(e) {
    this._bufferBuilder.append((e & 65280) >> 8), this._bufferBuilder.append(e & 255);
  }
  pack_int32(e) {
    this._bufferBuilder.append(e >>> 24 & 255), this._bufferBuilder.append((e & 16711680) >>> 16), this._bufferBuilder.append((e & 65280) >>> 8), this._bufferBuilder.append(e & 255);
  }
  pack_int64(e) {
    const t = Math.floor(e / 4294967296), n = e % 2 ** 32;
    this._bufferBuilder.append((t & 4278190080) >>> 24), this._bufferBuilder.append((t & 16711680) >>> 16), this._bufferBuilder.append((t & 65280) >>> 8), this._bufferBuilder.append(t & 255), this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255);
  }
  constructor() {
    this._bufferBuilder = new zl(), this._textEncoder = new TextEncoder();
  }
}
let ha = true, ma = true;
function Zt(f, e, t) {
  const n = f.match(e);
  return n && n.length >= t && parseFloat(n[t], 10);
}
function Ct(f, e, t) {
  if (!f.RTCPeerConnection) return;
  const n = f.RTCPeerConnection.prototype, s = n.addEventListener;
  n.addEventListener = function(a, u) {
    if (a !== e) return s.apply(this, arguments);
    const c = (p) => {
      const l = t(p);
      l && (u.handleEvent ? u.handleEvent(l) : u(l));
    };
    return this._eventMap = this._eventMap || {}, this._eventMap[e] || (this._eventMap[e] = /* @__PURE__ */ new Map()), this._eventMap[e].set(u, c), s.apply(this, [a, c]);
  };
  const i = n.removeEventListener;
  n.removeEventListener = function(a, u) {
    if (a !== e || !this._eventMap || !this._eventMap[e]) return i.apply(this, arguments);
    if (!this._eventMap[e].has(u)) return i.apply(this, arguments);
    const c = this._eventMap[e].get(u);
    return this._eventMap[e].delete(u), this._eventMap[e].size === 0 && delete this._eventMap[e], Object.keys(this._eventMap).length === 0 && delete this._eventMap, i.apply(this, [a, c]);
  }, Object.defineProperty(n, "on" + e, { get() {
    return this["_on" + e];
  }, set(a) {
    this["_on" + e] && (this.removeEventListener(e, this["_on" + e]), delete this["_on" + e]), a && this.addEventListener(e, this["_on" + e] = a);
  }, enumerable: true, configurable: true });
}
function Fl(f) {
  return typeof f != "boolean" ? new Error("Argument type: " + typeof f + ". Please use a boolean.") : (ha = f, f ? "adapter.js logging disabled" : "adapter.js logging enabled");
}
function Ul(f) {
  return typeof f != "boolean" ? new Error("Argument type: " + typeof f + ". Please use a boolean.") : (ma = !f, "adapter.js deprecation warnings " + (f ? "disabled" : "enabled"));
}
function va() {
  if (typeof window == "object") {
    if (ha) return;
    typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments);
  }
}
function es(f, e) {
  ma && console.warn(f + " is deprecated, please use " + e + " instead.");
}
function ql(f) {
  const e = { browser: null, version: null };
  if (typeof f > "u" || !f.navigator || !f.navigator.userAgent) return e.browser = "Not a browser.", e;
  const { navigator: t } = f;
  if (t.userAgentData && t.userAgentData.brands) {
    const n = t.userAgentData.brands.find((s) => s.brand === "Chromium");
    if (n) return { browser: "chrome", version: parseInt(n.version, 10) };
  }
  if (t.mozGetUserMedia) e.browser = "firefox", e.version = parseInt(Zt(t.userAgent, /Firefox\/(\d+)\./, 1));
  else if (t.webkitGetUserMedia || f.isSecureContext === false && f.webkitRTCPeerConnection) e.browser = "chrome", e.version = parseInt(Zt(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
  else if (f.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./)) e.browser = "safari", e.version = parseInt(Zt(t.userAgent, /AppleWebKit\/(\d+)\./, 1)), e.supportsUnifiedPlan = f.RTCRtpTransceiver && "currentDirection" in f.RTCRtpTransceiver.prototype, e._safariVersion = Zt(t.userAgent, /Version\/(\d+(\.?\d+))/, 1);
  else return e.browser = "Not a supported browser.", e;
  return e;
}
function Bs(f) {
  return Object.prototype.toString.call(f) === "[object Object]";
}
function ga(f) {
  return Bs(f) ? Object.keys(f).reduce(function(e, t) {
    const n = Bs(f[t]), s = n ? ga(f[t]) : f[t], i = n && !Object.keys(s).length;
    return s === void 0 || i ? e : Object.assign(e, { [t]: s });
  }, {}) : f;
}
function Nn(f, e, t) {
  !e || t.has(e.id) || (t.set(e.id, e), Object.keys(e).forEach((n) => {
    n.endsWith("Id") ? Nn(f, f.get(e[n]), t) : n.endsWith("Ids") && e[n].forEach((s) => {
      Nn(f, f.get(s), t);
    });
  }));
}
function zs(f, e, t) {
  const n = t ? "outbound-rtp" : "inbound-rtp", s = /* @__PURE__ */ new Map();
  if (e === null) return s;
  const i = [];
  return f.forEach((a) => {
    a.type === "track" && a.trackIdentifier === e.id && i.push(a);
  }), i.forEach((a) => {
    f.forEach((u) => {
      u.type === n && u.trackId === a.id && Nn(f, u, s);
    });
  }), s;
}
const $s = va;
function ba(f, e) {
  const t = f && f.navigator;
  if (!t.mediaDevices) return;
  const n = function(u) {
    if (typeof u != "object" || u.mandatory || u.optional) return u;
    const c = {};
    return Object.keys(u).forEach((p) => {
      if (p === "require" || p === "advanced" || p === "mediaSource") return;
      const l = typeof u[p] == "object" ? u[p] : { ideal: u[p] };
      l.exact !== void 0 && typeof l.exact == "number" && (l.min = l.max = l.exact);
      const m = function(o, r) {
        return o ? o + r.charAt(0).toUpperCase() + r.slice(1) : r === "deviceId" ? "sourceId" : r;
      };
      if (l.ideal !== void 0) {
        c.optional = c.optional || [];
        let o = {};
        typeof l.ideal == "number" ? (o[m("min", p)] = l.ideal, c.optional.push(o), o = {}, o[m("max", p)] = l.ideal, c.optional.push(o)) : (o[m("", p)] = l.ideal, c.optional.push(o));
      }
      l.exact !== void 0 && typeof l.exact != "number" ? (c.mandatory = c.mandatory || {}, c.mandatory[m("", p)] = l.exact) : ["min", "max"].forEach((o) => {
        l[o] !== void 0 && (c.mandatory = c.mandatory || {}, c.mandatory[m(o, p)] = l[o]);
      });
    }), u.advanced && (c.optional = (c.optional || []).concat(u.advanced)), c;
  }, s = function(u, c) {
    if (e.version >= 61) return c(u);
    if (u = JSON.parse(JSON.stringify(u)), u && typeof u.audio == "object") {
      const p = function(l, m, o) {
        m in l && !(o in l) && (l[o] = l[m], delete l[m]);
      };
      u = JSON.parse(JSON.stringify(u)), p(u.audio, "autoGainControl", "googAutoGainControl"), p(u.audio, "noiseSuppression", "googNoiseSuppression"), u.audio = n(u.audio);
    }
    if (u && typeof u.video == "object") {
      let p = u.video.facingMode;
      p = p && (typeof p == "object" ? p : { ideal: p });
      const l = e.version < 66;
      if (p && (p.exact === "user" || p.exact === "environment" || p.ideal === "user" || p.ideal === "environment") && !(t.mediaDevices.getSupportedConstraints && t.mediaDevices.getSupportedConstraints().facingMode && !l)) {
        delete u.video.facingMode;
        let m;
        if (p.exact === "environment" || p.ideal === "environment" ? m = ["back", "rear"] : (p.exact === "user" || p.ideal === "user") && (m = ["front"]), m) return t.mediaDevices.enumerateDevices().then((o) => {
          o = o.filter((d) => d.kind === "videoinput");
          let r = o.find((d) => m.some((h) => d.label.toLowerCase().includes(h)));
          return !r && o.length && m.includes("back") && (r = o[o.length - 1]), r && (u.video.deviceId = p.exact ? { exact: r.deviceId } : { ideal: r.deviceId }), u.video = n(u.video), $s("chrome: " + JSON.stringify(u)), c(u);
        });
      }
      u.video = n(u.video);
    }
    return $s("chrome: " + JSON.stringify(u)), c(u);
  }, i = function(u) {
    return e.version >= 64 ? u : { name: { PermissionDeniedError: "NotAllowedError", PermissionDismissedError: "NotAllowedError", InvalidStateError: "NotAllowedError", DevicesNotFoundError: "NotFoundError", ConstraintNotSatisfiedError: "OverconstrainedError", TrackStartError: "NotReadableError", MediaDeviceFailedDueToShutdown: "NotAllowedError", MediaDeviceKillSwitchOn: "NotAllowedError", TabCaptureError: "AbortError", ScreenCaptureError: "AbortError", DeviceCaptureError: "AbortError" }[u.name] || u.name, message: u.message, constraint: u.constraint || u.constraintName, toString() {
      return this.name + (this.message && ": ") + this.message;
    } };
  }, a = function(u, c, p) {
    s(u, (l) => {
      t.webkitGetUserMedia(l, c, (m) => {
        p && p(i(m));
      });
    });
  };
  if (t.getUserMedia = a.bind(t), t.mediaDevices.getUserMedia) {
    const u = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    t.mediaDevices.getUserMedia = function(c) {
      return s(c, (p) => u(p).then((l) => {
        if (p.audio && !l.getAudioTracks().length || p.video && !l.getVideoTracks().length) throw l.getTracks().forEach((m) => {
          m.stop();
        }), new DOMException("", "NotFoundError");
        return l;
      }, (l) => Promise.reject(i(l))));
    };
  }
}
function ya(f) {
  f.MediaStream = f.MediaStream || f.webkitMediaStream;
}
function xa(f) {
  if (typeof f == "object" && f.RTCPeerConnection && !("ontrack" in f.RTCPeerConnection.prototype)) {
    Object.defineProperty(f.RTCPeerConnection.prototype, "ontrack", { get() {
      return this._ontrack;
    }, set(t) {
      this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = t);
    }, enumerable: true, configurable: true });
    const e = f.RTCPeerConnection.prototype.setRemoteDescription;
    f.RTCPeerConnection.prototype.setRemoteDescription = function() {
      return this._ontrackpoly || (this._ontrackpoly = (n) => {
        n.stream.addEventListener("addtrack", (s) => {
          let i;
          f.RTCPeerConnection.prototype.getReceivers ? i = this.getReceivers().find((u) => u.track && u.track.id === s.track.id) : i = { track: s.track };
          const a = new Event("track");
          a.track = s.track, a.receiver = i, a.transceiver = { receiver: i }, a.streams = [n.stream], this.dispatchEvent(a);
        }), n.stream.getTracks().forEach((s) => {
          let i;
          f.RTCPeerConnection.prototype.getReceivers ? i = this.getReceivers().find((u) => u.track && u.track.id === s.id) : i = { track: s };
          const a = new Event("track");
          a.track = s, a.receiver = i, a.transceiver = { receiver: i }, a.streams = [n.stream], this.dispatchEvent(a);
        });
      }, this.addEventListener("addstream", this._ontrackpoly)), e.apply(this, arguments);
    };
  } else Ct(f, "track", (e) => (e.transceiver || Object.defineProperty(e, "transceiver", { value: { receiver: e.receiver } }), e));
}
function wa(f) {
  if (typeof f == "object" && f.RTCPeerConnection && !("getSenders" in f.RTCPeerConnection.prototype) && "createDTMFSender" in f.RTCPeerConnection.prototype) {
    const e = function(s, i) {
      return { track: i, get dtmf() {
        return this._dtmf === void 0 && (i.kind === "audio" ? this._dtmf = s.createDTMFSender(i) : this._dtmf = null), this._dtmf;
      }, _pc: s };
    };
    if (!f.RTCPeerConnection.prototype.getSenders) {
      f.RTCPeerConnection.prototype.getSenders = function() {
        return this._senders = this._senders || [], this._senders.slice();
      };
      const s = f.RTCPeerConnection.prototype.addTrack;
      f.RTCPeerConnection.prototype.addTrack = function(u, c) {
        let p = s.apply(this, arguments);
        return p || (p = e(this, u), this._senders.push(p)), p;
      };
      const i = f.RTCPeerConnection.prototype.removeTrack;
      f.RTCPeerConnection.prototype.removeTrack = function(u) {
        i.apply(this, arguments);
        const c = this._senders.indexOf(u);
        c !== -1 && this._senders.splice(c, 1);
      };
    }
    const t = f.RTCPeerConnection.prototype.addStream;
    f.RTCPeerConnection.prototype.addStream = function(i) {
      this._senders = this._senders || [], t.apply(this, [i]), i.getTracks().forEach((a) => {
        this._senders.push(e(this, a));
      });
    };
    const n = f.RTCPeerConnection.prototype.removeStream;
    f.RTCPeerConnection.prototype.removeStream = function(i) {
      this._senders = this._senders || [], n.apply(this, [i]), i.getTracks().forEach((a) => {
        const u = this._senders.find((c) => c.track === a);
        u && this._senders.splice(this._senders.indexOf(u), 1);
      });
    };
  } else if (typeof f == "object" && f.RTCPeerConnection && "getSenders" in f.RTCPeerConnection.prototype && "createDTMFSender" in f.RTCPeerConnection.prototype && f.RTCRtpSender && !("dtmf" in f.RTCRtpSender.prototype)) {
    const e = f.RTCPeerConnection.prototype.getSenders;
    f.RTCPeerConnection.prototype.getSenders = function() {
      const n = e.apply(this, []);
      return n.forEach((s) => s._pc = this), n;
    }, Object.defineProperty(f.RTCRtpSender.prototype, "dtmf", { get() {
      return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
    } });
  }
}
function Sa(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection && f.RTCRtpSender && f.RTCRtpReceiver)) return;
  if (!("getStats" in f.RTCRtpSender.prototype)) {
    const t = f.RTCPeerConnection.prototype.getSenders;
    t && (f.RTCPeerConnection.prototype.getSenders = function() {
      const i = t.apply(this, []);
      return i.forEach((a) => a._pc = this), i;
    });
    const n = f.RTCPeerConnection.prototype.addTrack;
    n && (f.RTCPeerConnection.prototype.addTrack = function() {
      const i = n.apply(this, arguments);
      return i._pc = this, i;
    }), f.RTCRtpSender.prototype.getStats = function() {
      const i = this;
      return this._pc.getStats().then((a) => zs(a, i.track, true));
    };
  }
  if (!("getStats" in f.RTCRtpReceiver.prototype)) {
    const t = f.RTCPeerConnection.prototype.getReceivers;
    t && (f.RTCPeerConnection.prototype.getReceivers = function() {
      const s = t.apply(this, []);
      return s.forEach((i) => i._pc = this), s;
    }), Ct(f, "track", (n) => (n.receiver._pc = n.srcElement, n)), f.RTCRtpReceiver.prototype.getStats = function() {
      const s = this;
      return this._pc.getStats().then((i) => zs(i, s.track, false));
    };
  }
  if (!("getStats" in f.RTCRtpSender.prototype && "getStats" in f.RTCRtpReceiver.prototype)) return;
  const e = f.RTCPeerConnection.prototype.getStats;
  f.RTCPeerConnection.prototype.getStats = function() {
    if (arguments.length > 0 && arguments[0] instanceof f.MediaStreamTrack) {
      const n = arguments[0];
      let s, i, a;
      return this.getSenders().forEach((u) => {
        u.track === n && (s ? a = true : s = u);
      }), this.getReceivers().forEach((u) => (u.track === n && (i ? a = true : i = u), u.track === n)), a || s && i ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : s ? s.getStats() : i ? i.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
    }
    return e.apply(this, arguments);
  };
}
function Ca(f) {
  f.RTCPeerConnection.prototype.getLocalStreams = function() {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((a) => this._shimmedLocalStreams[a][0]);
  };
  const e = f.RTCPeerConnection.prototype.addTrack;
  f.RTCPeerConnection.prototype.addTrack = function(a, u) {
    if (!u) return e.apply(this, arguments);
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    const c = e.apply(this, arguments);
    return this._shimmedLocalStreams[u.id] ? this._shimmedLocalStreams[u.id].indexOf(c) === -1 && this._shimmedLocalStreams[u.id].push(c) : this._shimmedLocalStreams[u.id] = [u, c], c;
  };
  const t = f.RTCPeerConnection.prototype.addStream;
  f.RTCPeerConnection.prototype.addStream = function(a) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a.getTracks().forEach((p) => {
      if (this.getSenders().find((m) => m.track === p)) throw new DOMException("Track already exists.", "InvalidAccessError");
    });
    const u = this.getSenders();
    t.apply(this, arguments);
    const c = this.getSenders().filter((p) => u.indexOf(p) === -1);
    this._shimmedLocalStreams[a.id] = [a].concat(c);
  };
  const n = f.RTCPeerConnection.prototype.removeStream;
  f.RTCPeerConnection.prototype.removeStream = function(a) {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[a.id], n.apply(this, arguments);
  };
  const s = f.RTCPeerConnection.prototype.removeTrack;
  f.RTCPeerConnection.prototype.removeTrack = function(a) {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a && Object.keys(this._shimmedLocalStreams).forEach((u) => {
      const c = this._shimmedLocalStreams[u].indexOf(a);
      c !== -1 && this._shimmedLocalStreams[u].splice(c, 1), this._shimmedLocalStreams[u].length === 1 && delete this._shimmedLocalStreams[u];
    }), s.apply(this, arguments);
  };
}
function _a(f, e) {
  if (!f.RTCPeerConnection) return;
  if (f.RTCPeerConnection.prototype.addTrack && e.version >= 65) return Ca(f);
  const t = f.RTCPeerConnection.prototype.getLocalStreams;
  f.RTCPeerConnection.prototype.getLocalStreams = function() {
    const l = t.apply(this);
    return this._reverseStreams = this._reverseStreams || {}, l.map((m) => this._reverseStreams[m.id]);
  };
  const n = f.RTCPeerConnection.prototype.addStream;
  f.RTCPeerConnection.prototype.addStream = function(l) {
    if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, l.getTracks().forEach((m) => {
      if (this.getSenders().find((r) => r.track === m)) throw new DOMException("Track already exists.", "InvalidAccessError");
    }), !this._reverseStreams[l.id]) {
      const m = new f.MediaStream(l.getTracks());
      this._streams[l.id] = m, this._reverseStreams[m.id] = l, l = m;
    }
    n.apply(this, [l]);
  };
  const s = f.RTCPeerConnection.prototype.removeStream;
  f.RTCPeerConnection.prototype.removeStream = function(l) {
    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, s.apply(this, [this._streams[l.id] || l]), delete this._reverseStreams[this._streams[l.id] ? this._streams[l.id].id : l.id], delete this._streams[l.id];
  }, f.RTCPeerConnection.prototype.addTrack = function(l, m) {
    if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
    const o = [].slice.call(arguments, 1);
    if (o.length !== 1 || !o[0].getTracks().find((h) => h === l)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
    if (this.getSenders().find((h) => h.track === l)) throw new DOMException("Track already exists.", "InvalidAccessError");
    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
    const d = this._streams[m.id];
    if (d) d.addTrack(l), Promise.resolve().then(() => {
      this.dispatchEvent(new Event("negotiationneeded"));
    });
    else {
      const h = new f.MediaStream([l]);
      this._streams[m.id] = h, this._reverseStreams[h.id] = m, this.addStream(h);
    }
    return this.getSenders().find((h) => h.track === l);
  };
  function i(p, l) {
    let m = l.sdp;
    return Object.keys(p._reverseStreams || []).forEach((o) => {
      const r = p._reverseStreams[o], d = p._streams[r.id];
      m = m.replace(new RegExp(d.id, "g"), r.id);
    }), new RTCSessionDescription({ type: l.type, sdp: m });
  }
  function a(p, l) {
    let m = l.sdp;
    return Object.keys(p._reverseStreams || []).forEach((o) => {
      const r = p._reverseStreams[o], d = p._streams[r.id];
      m = m.replace(new RegExp(r.id, "g"), d.id);
    }), new RTCSessionDescription({ type: l.type, sdp: m });
  }
  ["createOffer", "createAnswer"].forEach(function(p) {
    const l = f.RTCPeerConnection.prototype[p], m = { [p]() {
      const o = arguments;
      return arguments.length && typeof arguments[0] == "function" ? l.apply(this, [(d) => {
        const h = i(this, d);
        o[0].apply(null, [h]);
      }, (d) => {
        o[1] && o[1].apply(null, d);
      }, arguments[2]]) : l.apply(this, arguments).then((d) => i(this, d));
    } };
    f.RTCPeerConnection.prototype[p] = m[p];
  });
  const u = f.RTCPeerConnection.prototype.setLocalDescription;
  f.RTCPeerConnection.prototype.setLocalDescription = function() {
    return !arguments.length || !arguments[0].type ? u.apply(this, arguments) : (arguments[0] = a(this, arguments[0]), u.apply(this, arguments));
  };
  const c = Object.getOwnPropertyDescriptor(f.RTCPeerConnection.prototype, "localDescription");
  Object.defineProperty(f.RTCPeerConnection.prototype, "localDescription", { get() {
    const p = c.get.apply(this);
    return p.type === "" ? p : i(this, p);
  } }), f.RTCPeerConnection.prototype.removeTrack = function(l) {
    if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
    if (!l._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
    if (!(l._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
    this._streams = this._streams || {};
    let o;
    Object.keys(this._streams).forEach((r) => {
      this._streams[r].getTracks().find((h) => l.track === h) && (o = this._streams[r]);
    }), o && (o.getTracks().length === 1 ? this.removeStream(this._reverseStreams[o.id]) : o.removeTrack(l.track), this.dispatchEvent(new Event("negotiationneeded")));
  };
}
function jn(f, e) {
  !f.RTCPeerConnection && f.webkitRTCPeerConnection && (f.RTCPeerConnection = f.webkitRTCPeerConnection), f.RTCPeerConnection && e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
    const n = f.RTCPeerConnection.prototype[t], s = { [t]() {
      return arguments[0] = new (t === "addIceCandidate" ? f.RTCIceCandidate : f.RTCSessionDescription)(arguments[0]), n.apply(this, arguments);
    } };
    f.RTCPeerConnection.prototype[t] = s[t];
  });
}
function Ea(f, e) {
  Ct(f, "negotiationneeded", (t) => {
    const n = t.target;
    if (!((e.version < 72 || n.getConfiguration && n.getConfiguration().sdpSemantics === "plan-b") && n.signalingState !== "stable")) return t;
  });
}
const Ns = Object.freeze(Object.defineProperty({ __proto__: null, fixNegotiationNeeded: Ea, shimAddTrackRemoveTrack: _a, shimAddTrackRemoveTrackWithNative: Ca, shimGetSendersWithDtmf: wa, shimGetUserMedia: ba, shimMediaStream: ya, shimOnTrack: xa, shimPeerConnection: jn, shimSenderReceiverGetStats: Sa }, Symbol.toStringTag, { value: "Module" }));
function ka(f, e) {
  const t = f && f.navigator, n = f && f.MediaStreamTrack;
  if (t.getUserMedia = function(s, i, a) {
    es("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), t.mediaDevices.getUserMedia(s).then(i, a);
  }, !(e.version > 55 && "autoGainControl" in t.mediaDevices.getSupportedConstraints())) {
    const s = function(a, u, c) {
      u in a && !(c in a) && (a[c] = a[u], delete a[u]);
    }, i = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    if (t.mediaDevices.getUserMedia = function(a) {
      return typeof a == "object" && typeof a.audio == "object" && (a = JSON.parse(JSON.stringify(a)), s(a.audio, "autoGainControl", "mozAutoGainControl"), s(a.audio, "noiseSuppression", "mozNoiseSuppression")), i(a);
    }, n && n.prototype.getSettings) {
      const a = n.prototype.getSettings;
      n.prototype.getSettings = function() {
        const u = a.apply(this, arguments);
        return s(u, "mozAutoGainControl", "autoGainControl"), s(u, "mozNoiseSuppression", "noiseSuppression"), u;
      };
    }
    if (n && n.prototype.applyConstraints) {
      const a = n.prototype.applyConstraints;
      n.prototype.applyConstraints = function(u) {
        return this.kind === "audio" && typeof u == "object" && (u = JSON.parse(JSON.stringify(u)), s(u, "autoGainControl", "mozAutoGainControl"), s(u, "noiseSuppression", "mozNoiseSuppression")), a.apply(this, [u]);
      };
    }
  }
}
function Hl(f, e) {
  f.navigator.mediaDevices && "getDisplayMedia" in f.navigator.mediaDevices || f.navigator.mediaDevices && (f.navigator.mediaDevices.getDisplayMedia = function(n) {
    if (!(n && n.video)) {
      const s = new DOMException("getDisplayMedia without video constraints is undefined");
      return s.name = "NotFoundError", s.code = 8, Promise.reject(s);
    }
    return n.video === true ? n.video = { mediaSource: e } : n.video.mediaSource = e, f.navigator.mediaDevices.getUserMedia(n);
  });
}
function Ta(f) {
  typeof f == "object" && f.RTCTrackEvent && "receiver" in f.RTCTrackEvent.prototype && !("transceiver" in f.RTCTrackEvent.prototype) && Object.defineProperty(f.RTCTrackEvent.prototype, "transceiver", { get() {
    return { receiver: this.receiver };
  } });
}
function Fn(f, e) {
  if (typeof f != "object" || !(f.RTCPeerConnection || f.mozRTCPeerConnection)) return;
  !f.RTCPeerConnection && f.mozRTCPeerConnection && (f.RTCPeerConnection = f.mozRTCPeerConnection), e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(s) {
    const i = f.RTCPeerConnection.prototype[s], a = { [s]() {
      return arguments[0] = new (s === "addIceCandidate" ? f.RTCIceCandidate : f.RTCSessionDescription)(arguments[0]), i.apply(this, arguments);
    } };
    f.RTCPeerConnection.prototype[s] = a[s];
  });
  const t = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }, n = f.RTCPeerConnection.prototype.getStats;
  f.RTCPeerConnection.prototype.getStats = function() {
    const [i, a, u] = arguments;
    return n.apply(this, [i || null]).then((c) => {
      if (e.version < 53 && !a) try {
        c.forEach((p) => {
          p.type = t[p.type] || p.type;
        });
      } catch (p) {
        if (p.name !== "TypeError") throw p;
        c.forEach((l, m) => {
          c.set(m, Object.assign({}, l, { type: t[l.type] || l.type }));
        });
      }
      return c;
    }).then(a, u);
  };
}
function Pa(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection && f.RTCRtpSender) || f.RTCRtpSender && "getStats" in f.RTCRtpSender.prototype) return;
  const e = f.RTCPeerConnection.prototype.getSenders;
  e && (f.RTCPeerConnection.prototype.getSenders = function() {
    const s = e.apply(this, []);
    return s.forEach((i) => i._pc = this), s;
  });
  const t = f.RTCPeerConnection.prototype.addTrack;
  t && (f.RTCPeerConnection.prototype.addTrack = function() {
    const s = t.apply(this, arguments);
    return s._pc = this, s;
  }), f.RTCRtpSender.prototype.getStats = function() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
  };
}
function Ma(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection && f.RTCRtpSender) || f.RTCRtpSender && "getStats" in f.RTCRtpReceiver.prototype) return;
  const e = f.RTCPeerConnection.prototype.getReceivers;
  e && (f.RTCPeerConnection.prototype.getReceivers = function() {
    const n = e.apply(this, []);
    return n.forEach((s) => s._pc = this), n;
  }), Ct(f, "track", (t) => (t.receiver._pc = t.srcElement, t)), f.RTCRtpReceiver.prototype.getStats = function() {
    return this._pc.getStats(this.track);
  };
}
function La(f) {
  !f.RTCPeerConnection || "removeStream" in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.removeStream = function(t) {
    es("removeStream", "removeTrack"), this.getSenders().forEach((n) => {
      n.track && t.getTracks().includes(n.track) && this.removeTrack(n);
    });
  });
}
function Oa(f) {
  f.DataChannel && !f.RTCDataChannel && (f.RTCDataChannel = f.DataChannel);
}
function Aa(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection)) return;
  const e = f.RTCPeerConnection.prototype.addTransceiver;
  e && (f.RTCPeerConnection.prototype.addTransceiver = function() {
    this.setParametersPromises = [];
    let n = arguments[1] && arguments[1].sendEncodings;
    n === void 0 && (n = []), n = [...n];
    const s = n.length > 0;
    s && n.forEach((a) => {
      if ("rid" in a && !/^[a-z0-9]{0,16}$/i.test(a.rid)) throw new TypeError("Invalid RID value provided.");
      if ("scaleResolutionDownBy" in a && !(parseFloat(a.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
      if ("maxFramerate" in a && !(parseFloat(a.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
    });
    const i = e.apply(this, arguments);
    if (s) {
      const { sender: a } = i, u = a.getParameters();
      (!("encodings" in u) || u.encodings.length === 1 && Object.keys(u.encodings[0]).length === 0) && (u.encodings = n, a.sendEncodings = n, this.setParametersPromises.push(a.setParameters(u).then(() => {
        delete a.sendEncodings;
      }).catch(() => {
        delete a.sendEncodings;
      })));
    }
    return i;
  });
}
function Ra(f) {
  if (!(typeof f == "object" && f.RTCRtpSender)) return;
  const e = f.RTCRtpSender.prototype.getParameters;
  e && (f.RTCRtpSender.prototype.getParameters = function() {
    const n = e.apply(this, arguments);
    return "encodings" in n || (n.encodings = [].concat(this.sendEncodings || [{}])), n;
  });
}
function Da(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection)) return;
  const e = f.RTCPeerConnection.prototype.createOffer;
  f.RTCPeerConnection.prototype.createOffer = function() {
    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
      this.setParametersPromises = [];
    }) : e.apply(this, arguments);
  };
}
function Ia(f) {
  if (!(typeof f == "object" && f.RTCPeerConnection)) return;
  const e = f.RTCPeerConnection.prototype.createAnswer;
  f.RTCPeerConnection.prototype.createAnswer = function() {
    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
      this.setParametersPromises = [];
    }) : e.apply(this, arguments);
  };
}
const js = Object.freeze(Object.defineProperty({ __proto__: null, shimAddTransceiver: Aa, shimCreateAnswer: Ia, shimCreateOffer: Da, shimGetDisplayMedia: Hl, shimGetParameters: Ra, shimGetUserMedia: ka, shimOnTrack: Ta, shimPeerConnection: Fn, shimRTCDataChannel: Oa, shimReceiverGetStats: Ma, shimRemoveStream: La, shimSenderGetStats: Pa }, Symbol.toStringTag, { value: "Module" }));
function Ba(f) {
  if (!(typeof f != "object" || !f.RTCPeerConnection)) {
    if ("getLocalStreams" in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.getLocalStreams = function() {
      return this._localStreams || (this._localStreams = []), this._localStreams;
    }), !("addStream" in f.RTCPeerConnection.prototype)) {
      const e = f.RTCPeerConnection.prototype.addTrack;
      f.RTCPeerConnection.prototype.addStream = function(n) {
        this._localStreams || (this._localStreams = []), this._localStreams.includes(n) || this._localStreams.push(n), n.getAudioTracks().forEach((s) => e.call(this, s, n)), n.getVideoTracks().forEach((s) => e.call(this, s, n));
      }, f.RTCPeerConnection.prototype.addTrack = function(n, ...s) {
        return s && s.forEach((i) => {
          this._localStreams ? this._localStreams.includes(i) || this._localStreams.push(i) : this._localStreams = [i];
        }), e.apply(this, arguments);
      };
    }
    "removeStream" in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.removeStream = function(t) {
      this._localStreams || (this._localStreams = []);
      const n = this._localStreams.indexOf(t);
      if (n === -1) return;
      this._localStreams.splice(n, 1);
      const s = t.getTracks();
      this.getSenders().forEach((i) => {
        s.includes(i.track) && this.removeTrack(i);
      });
    });
  }
}
function za(f) {
  if (!(typeof f != "object" || !f.RTCPeerConnection) && ("getRemoteStreams" in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this._remoteStreams ? this._remoteStreams : [];
  }), !("onaddstream" in f.RTCPeerConnection.prototype))) {
    Object.defineProperty(f.RTCPeerConnection.prototype, "onaddstream", { get() {
      return this._onaddstream;
    }, set(t) {
      this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = t), this.addEventListener("track", this._onaddstreampoly = (n) => {
        n.streams.forEach((s) => {
          if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(s)) return;
          this._remoteStreams.push(s);
          const i = new Event("addstream");
          i.stream = s, this.dispatchEvent(i);
        });
      });
    } });
    const e = f.RTCPeerConnection.prototype.setRemoteDescription;
    f.RTCPeerConnection.prototype.setRemoteDescription = function() {
      const n = this;
      return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(s) {
        s.streams.forEach((i) => {
          if (n._remoteStreams || (n._remoteStreams = []), n._remoteStreams.indexOf(i) >= 0) return;
          n._remoteStreams.push(i);
          const a = new Event("addstream");
          a.stream = i, n.dispatchEvent(a);
        });
      }), e.apply(n, arguments);
    };
  }
}
function $a(f) {
  if (typeof f != "object" || !f.RTCPeerConnection) return;
  const e = f.RTCPeerConnection.prototype, t = e.createOffer, n = e.createAnswer, s = e.setLocalDescription, i = e.setRemoteDescription, a = e.addIceCandidate;
  e.createOffer = function(p, l) {
    const m = arguments.length >= 2 ? arguments[2] : arguments[0], o = t.apply(this, [m]);
    return l ? (o.then(p, l), Promise.resolve()) : o;
  }, e.createAnswer = function(p, l) {
    const m = arguments.length >= 2 ? arguments[2] : arguments[0], o = n.apply(this, [m]);
    return l ? (o.then(p, l), Promise.resolve()) : o;
  };
  let u = function(c, p, l) {
    const m = s.apply(this, [c]);
    return l ? (m.then(p, l), Promise.resolve()) : m;
  };
  e.setLocalDescription = u, u = function(c, p, l) {
    const m = i.apply(this, [c]);
    return l ? (m.then(p, l), Promise.resolve()) : m;
  }, e.setRemoteDescription = u, u = function(c, p, l) {
    const m = a.apply(this, [c]);
    return l ? (m.then(p, l), Promise.resolve()) : m;
  }, e.addIceCandidate = u;
}
function Na(f) {
  const e = f && f.navigator;
  if (e.mediaDevices && e.mediaDevices.getUserMedia) {
    const t = e.mediaDevices, n = t.getUserMedia.bind(t);
    e.mediaDevices.getUserMedia = (s) => n(ja(s));
  }
  !e.getUserMedia && e.mediaDevices && e.mediaDevices.getUserMedia && (e.getUserMedia = function(n, s, i) {
    e.mediaDevices.getUserMedia(n).then(s, i);
  }.bind(e));
}
function ja(f) {
  return f && f.video !== void 0 ? Object.assign({}, f, { video: ga(f.video) }) : f;
}
function Fa(f) {
  if (!f.RTCPeerConnection) return;
  const e = f.RTCPeerConnection;
  f.RTCPeerConnection = function(n, s) {
    if (n && n.iceServers) {
      const i = [];
      for (let a = 0; a < n.iceServers.length; a++) {
        let u = n.iceServers[a];
        u.urls === void 0 && u.url ? (es("RTCIceServer.url", "RTCIceServer.urls"), u = JSON.parse(JSON.stringify(u)), u.urls = u.url, delete u.url, i.push(u)) : i.push(n.iceServers[a]);
      }
      n.iceServers = i;
    }
    return new e(n, s);
  }, f.RTCPeerConnection.prototype = e.prototype, "generateCertificate" in e && Object.defineProperty(f.RTCPeerConnection, "generateCertificate", { get() {
    return e.generateCertificate;
  } });
}
function Ua(f) {
  typeof f == "object" && f.RTCTrackEvent && "receiver" in f.RTCTrackEvent.prototype && !("transceiver" in f.RTCTrackEvent.prototype) && Object.defineProperty(f.RTCTrackEvent.prototype, "transceiver", { get() {
    return { receiver: this.receiver };
  } });
}
function qa(f) {
  const e = f.RTCPeerConnection.prototype.createOffer;
  f.RTCPeerConnection.prototype.createOffer = function(n) {
    if (n) {
      typeof n.offerToReceiveAudio < "u" && (n.offerToReceiveAudio = !!n.offerToReceiveAudio);
      const s = this.getTransceivers().find((a) => a.receiver.track.kind === "audio");
      n.offerToReceiveAudio === false && s ? s.direction === "sendrecv" ? s.setDirection ? s.setDirection("sendonly") : s.direction = "sendonly" : s.direction === "recvonly" && (s.setDirection ? s.setDirection("inactive") : s.direction = "inactive") : n.offerToReceiveAudio === true && !s && this.addTransceiver("audio", { direction: "recvonly" }), typeof n.offerToReceiveVideo < "u" && (n.offerToReceiveVideo = !!n.offerToReceiveVideo);
      const i = this.getTransceivers().find((a) => a.receiver.track.kind === "video");
      n.offerToReceiveVideo === false && i ? i.direction === "sendrecv" ? i.setDirection ? i.setDirection("sendonly") : i.direction = "sendonly" : i.direction === "recvonly" && (i.setDirection ? i.setDirection("inactive") : i.direction = "inactive") : n.offerToReceiveVideo === true && !i && this.addTransceiver("video", { direction: "recvonly" });
    }
    return e.apply(this, arguments);
  };
}
function Ha(f) {
  typeof f != "object" || f.AudioContext || (f.AudioContext = f.webkitAudioContext);
}
const Fs = Object.freeze(Object.defineProperty({ __proto__: null, shimAudioContext: Ha, shimCallbacksAPI: $a, shimConstraints: ja, shimCreateOfferLegacy: qa, shimGetUserMedia: Na, shimLocalStreamsAPI: Ba, shimRTCIceServerUrls: Fa, shimRemoteStreamsAPI: za, shimTrackEventTransceiver: Ua }, Symbol.toStringTag, { value: "Module" }));
var Zi = { exports: {} }, Us;
function Vl() {
  return Us || (Us = 1, function(f) {
    const e = {};
    e.generateIdentifier = function() {
      return Math.random().toString(36).substring(2, 12);
    }, e.localCName = e.generateIdentifier(), e.splitLines = function(t) {
      return t.trim().split(`
`).map((n) => n.trim());
    }, e.splitSections = function(t) {
      return t.split(`
m=`).map((s, i) => (i > 0 ? "m=" + s : s).trim() + `\r
`);
    }, e.getDescription = function(t) {
      const n = e.splitSections(t);
      return n && n[0];
    }, e.getMediaSections = function(t) {
      const n = e.splitSections(t);
      return n.shift(), n;
    }, e.matchPrefix = function(t, n) {
      return e.splitLines(t).filter((s) => s.indexOf(n) === 0);
    }, e.parseCandidate = function(t) {
      let n;
      t.indexOf("a=candidate:") === 0 ? n = t.substring(12).split(" ") : n = t.substring(10).split(" ");
      const s = { foundation: n[0], component: { 1: "rtp", 2: "rtcp" }[n[1]] || n[1], protocol: n[2].toLowerCase(), priority: parseInt(n[3], 10), ip: n[4], address: n[4], port: parseInt(n[5], 10), type: n[7] };
      for (let i = 8; i < n.length; i += 2) switch (n[i]) {
        case "raddr":
          s.relatedAddress = n[i + 1];
          break;
        case "rport":
          s.relatedPort = parseInt(n[i + 1], 10);
          break;
        case "tcptype":
          s.tcpType = n[i + 1];
          break;
        case "ufrag":
          s.ufrag = n[i + 1], s.usernameFragment = n[i + 1];
          break;
        default:
          s[n[i]] === void 0 && (s[n[i]] = n[i + 1]);
          break;
      }
      return s;
    }, e.writeCandidate = function(t) {
      const n = [];
      n.push(t.foundation);
      const s = t.component;
      s === "rtp" ? n.push(1) : s === "rtcp" ? n.push(2) : n.push(s), n.push(t.protocol.toUpperCase()), n.push(t.priority), n.push(t.address || t.ip), n.push(t.port);
      const i = t.type;
      return n.push("typ"), n.push(i), i !== "host" && t.relatedAddress && t.relatedPort && (n.push("raddr"), n.push(t.relatedAddress), n.push("rport"), n.push(t.relatedPort)), t.tcpType && t.protocol.toLowerCase() === "tcp" && (n.push("tcptype"), n.push(t.tcpType)), (t.usernameFragment || t.ufrag) && (n.push("ufrag"), n.push(t.usernameFragment || t.ufrag)), "candidate:" + n.join(" ");
    }, e.parseIceOptions = function(t) {
      return t.substring(14).split(" ");
    }, e.parseRtpMap = function(t) {
      let n = t.substring(9).split(" ");
      const s = { payloadType: parseInt(n.shift(), 10) };
      return n = n[0].split("/"), s.name = n[0], s.clockRate = parseInt(n[1], 10), s.channels = n.length === 3 ? parseInt(n[2], 10) : 1, s.numChannels = s.channels, s;
    }, e.writeRtpMap = function(t) {
      let n = t.payloadType;
      t.preferredPayloadType !== void 0 && (n = t.preferredPayloadType);
      const s = t.channels || t.numChannels || 1;
      return "a=rtpmap:" + n + " " + t.name + "/" + t.clockRate + (s !== 1 ? "/" + s : "") + `\r
`;
    }, e.parseExtmap = function(t) {
      const n = t.substring(9).split(" ");
      return { id: parseInt(n[0], 10), direction: n[0].indexOf("/") > 0 ? n[0].split("/")[1] : "sendrecv", uri: n[1], attributes: n.slice(2).join(" ") };
    }, e.writeExtmap = function(t) {
      return "a=extmap:" + (t.id || t.preferredId) + (t.direction && t.direction !== "sendrecv" ? "/" + t.direction : "") + " " + t.uri + (t.attributes ? " " + t.attributes : "") + `\r
`;
    }, e.parseFmtp = function(t) {
      const n = {};
      let s;
      const i = t.substring(t.indexOf(" ") + 1).split(";");
      for (let a = 0; a < i.length; a++) s = i[a].trim().split("="), n[s[0].trim()] = s[1];
      return n;
    }, e.writeFmtp = function(t) {
      let n = "", s = t.payloadType;
      if (t.preferredPayloadType !== void 0 && (s = t.preferredPayloadType), t.parameters && Object.keys(t.parameters).length) {
        const i = [];
        Object.keys(t.parameters).forEach((a) => {
          t.parameters[a] !== void 0 ? i.push(a + "=" + t.parameters[a]) : i.push(a);
        }), n += "a=fmtp:" + s + " " + i.join(";") + `\r
`;
      }
      return n;
    }, e.parseRtcpFb = function(t) {
      const n = t.substring(t.indexOf(" ") + 1).split(" ");
      return { type: n.shift(), parameter: n.join(" ") };
    }, e.writeRtcpFb = function(t) {
      let n = "", s = t.payloadType;
      return t.preferredPayloadType !== void 0 && (s = t.preferredPayloadType), t.rtcpFeedback && t.rtcpFeedback.length && t.rtcpFeedback.forEach((i) => {
        n += "a=rtcp-fb:" + s + " " + i.type + (i.parameter && i.parameter.length ? " " + i.parameter : "") + `\r
`;
      }), n;
    }, e.parseSsrcMedia = function(t) {
      const n = t.indexOf(" "), s = { ssrc: parseInt(t.substring(7, n), 10) }, i = t.indexOf(":", n);
      return i > -1 ? (s.attribute = t.substring(n + 1, i), s.value = t.substring(i + 1)) : s.attribute = t.substring(n + 1), s;
    }, e.parseSsrcGroup = function(t) {
      const n = t.substring(13).split(" ");
      return { semantics: n.shift(), ssrcs: n.map((s) => parseInt(s, 10)) };
    }, e.getMid = function(t) {
      const n = e.matchPrefix(t, "a=mid:")[0];
      if (n) return n.substring(6);
    }, e.parseFingerprint = function(t) {
      const n = t.substring(14).split(" ");
      return { algorithm: n[0].toLowerCase(), value: n[1].toUpperCase() };
    }, e.getDtlsParameters = function(t, n) {
      return { role: "auto", fingerprints: e.matchPrefix(t + n, "a=fingerprint:").map(e.parseFingerprint) };
    }, e.writeDtlsParameters = function(t, n) {
      let s = "a=setup:" + n + `\r
`;
      return t.fingerprints.forEach((i) => {
        s += "a=fingerprint:" + i.algorithm + " " + i.value + `\r
`;
      }), s;
    }, e.parseCryptoLine = function(t) {
      const n = t.substring(9).split(" ");
      return { tag: parseInt(n[0], 10), cryptoSuite: n[1], keyParams: n[2], sessionParams: n.slice(3) };
    }, e.writeCryptoLine = function(t) {
      return "a=crypto:" + t.tag + " " + t.cryptoSuite + " " + (typeof t.keyParams == "object" ? e.writeCryptoKeyParams(t.keyParams) : t.keyParams) + (t.sessionParams ? " " + t.sessionParams.join(" ") : "") + `\r
`;
    }, e.parseCryptoKeyParams = function(t) {
      if (t.indexOf("inline:") !== 0) return null;
      const n = t.substring(7).split("|");
      return { keyMethod: "inline", keySalt: n[0], lifeTime: n[1], mkiValue: n[2] ? n[2].split(":")[0] : void 0, mkiLength: n[2] ? n[2].split(":")[1] : void 0 };
    }, e.writeCryptoKeyParams = function(t) {
      return t.keyMethod + ":" + t.keySalt + (t.lifeTime ? "|" + t.lifeTime : "") + (t.mkiValue && t.mkiLength ? "|" + t.mkiValue + ":" + t.mkiLength : "");
    }, e.getCryptoParameters = function(t, n) {
      return e.matchPrefix(t + n, "a=crypto:").map(e.parseCryptoLine);
    }, e.getIceParameters = function(t, n) {
      const s = e.matchPrefix(t + n, "a=ice-ufrag:")[0], i = e.matchPrefix(t + n, "a=ice-pwd:")[0];
      return s && i ? { usernameFragment: s.substring(12), password: i.substring(10) } : null;
    }, e.writeIceParameters = function(t) {
      let n = "a=ice-ufrag:" + t.usernameFragment + `\r
a=ice-pwd:` + t.password + `\r
`;
      return t.iceLite && (n += `a=ice-lite\r
`), n;
    }, e.parseRtpParameters = function(t) {
      const n = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] }, i = e.splitLines(t)[0].split(" ");
      n.profile = i[2];
      for (let u = 3; u < i.length; u++) {
        const c = i[u], p = e.matchPrefix(t, "a=rtpmap:" + c + " ")[0];
        if (p) {
          const l = e.parseRtpMap(p), m = e.matchPrefix(t, "a=fmtp:" + c + " ");
          switch (l.parameters = m.length ? e.parseFmtp(m[0]) : {}, l.rtcpFeedback = e.matchPrefix(t, "a=rtcp-fb:" + c + " ").map(e.parseRtcpFb), n.codecs.push(l), l.name.toUpperCase()) {
            case "RED":
            case "ULPFEC":
              n.fecMechanisms.push(l.name.toUpperCase());
              break;
          }
        }
      }
      e.matchPrefix(t, "a=extmap:").forEach((u) => {
        n.headerExtensions.push(e.parseExtmap(u));
      });
      const a = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
      return n.codecs.forEach((u) => {
        a.forEach((c) => {
          u.rtcpFeedback.find((l) => l.type === c.type && l.parameter === c.parameter) || u.rtcpFeedback.push(c);
        });
      }), n;
    }, e.writeRtpDescription = function(t, n) {
      let s = "";
      s += "m=" + t + " ", s += n.codecs.length > 0 ? "9" : "0", s += " " + (n.profile || "UDP/TLS/RTP/SAVPF") + " ", s += n.codecs.map((a) => a.preferredPayloadType !== void 0 ? a.preferredPayloadType : a.payloadType).join(" ") + `\r
`, s += `c=IN IP4 0.0.0.0\r
`, s += `a=rtcp:9 IN IP4 0.0.0.0\r
`, n.codecs.forEach((a) => {
        s += e.writeRtpMap(a), s += e.writeFmtp(a), s += e.writeRtcpFb(a);
      });
      let i = 0;
      return n.codecs.forEach((a) => {
        a.maxptime > i && (i = a.maxptime);
      }), i > 0 && (s += "a=maxptime:" + i + `\r
`), n.headerExtensions && n.headerExtensions.forEach((a) => {
        s += e.writeExtmap(a);
      }), s;
    }, e.parseRtpEncodingParameters = function(t) {
      const n = [], s = e.parseRtpParameters(t), i = s.fecMechanisms.indexOf("RED") !== -1, a = s.fecMechanisms.indexOf("ULPFEC") !== -1, u = e.matchPrefix(t, "a=ssrc:").map((o) => e.parseSsrcMedia(o)).filter((o) => o.attribute === "cname"), c = u.length > 0 && u[0].ssrc;
      let p;
      const l = e.matchPrefix(t, "a=ssrc-group:FID").map((o) => o.substring(17).split(" ").map((d) => parseInt(d, 10)));
      l.length > 0 && l[0].length > 1 && l[0][0] === c && (p = l[0][1]), s.codecs.forEach((o) => {
        if (o.name.toUpperCase() === "RTX" && o.parameters.apt) {
          let r = { ssrc: c, codecPayloadType: parseInt(o.parameters.apt, 10) };
          c && p && (r.rtx = { ssrc: p }), n.push(r), i && (r = JSON.parse(JSON.stringify(r)), r.fec = { ssrc: c, mechanism: a ? "red+ulpfec" : "red" }, n.push(r));
        }
      }), n.length === 0 && c && n.push({ ssrc: c });
      let m = e.matchPrefix(t, "b=");
      return m.length && (m[0].indexOf("b=TIAS:") === 0 ? m = parseInt(m[0].substring(7), 10) : m[0].indexOf("b=AS:") === 0 ? m = parseInt(m[0].substring(5), 10) * 1e3 * 0.95 - 50 * 40 * 8 : m = void 0, n.forEach((o) => {
        o.maxBitrate = m;
      })), n;
    }, e.parseRtcpParameters = function(t) {
      const n = {}, s = e.matchPrefix(t, "a=ssrc:").map((u) => e.parseSsrcMedia(u)).filter((u) => u.attribute === "cname")[0];
      s && (n.cname = s.value, n.ssrc = s.ssrc);
      const i = e.matchPrefix(t, "a=rtcp-rsize");
      n.reducedSize = i.length > 0, n.compound = i.length === 0;
      const a = e.matchPrefix(t, "a=rtcp-mux");
      return n.mux = a.length > 0, n;
    }, e.writeRtcpParameters = function(t) {
      let n = "";
      return t.reducedSize && (n += `a=rtcp-rsize\r
`), t.mux && (n += `a=rtcp-mux\r
`), t.ssrc !== void 0 && t.cname && (n += "a=ssrc:" + t.ssrc + " cname:" + t.cname + `\r
`), n;
    }, e.parseMsid = function(t) {
      let n;
      const s = e.matchPrefix(t, "a=msid:");
      if (s.length === 1) return n = s[0].substring(7).split(" "), { stream: n[0], track: n[1] };
      const i = e.matchPrefix(t, "a=ssrc:").map((a) => e.parseSsrcMedia(a)).filter((a) => a.attribute === "msid");
      if (i.length > 0) return n = i[0].value.split(" "), { stream: n[0], track: n[1] };
    }, e.parseSctpDescription = function(t) {
      const n = e.parseMLine(t), s = e.matchPrefix(t, "a=max-message-size:");
      let i;
      s.length > 0 && (i = parseInt(s[0].substring(19), 10)), isNaN(i) && (i = 65536);
      const a = e.matchPrefix(t, "a=sctp-port:");
      if (a.length > 0) return { port: parseInt(a[0].substring(12), 10), protocol: n.fmt, maxMessageSize: i };
      const u = e.matchPrefix(t, "a=sctpmap:");
      if (u.length > 0) {
        const c = u[0].substring(10).split(" ");
        return { port: parseInt(c[0], 10), protocol: c[1], maxMessageSize: i };
      }
    }, e.writeSctpDescription = function(t, n) {
      let s = [];
      return t.protocol !== "DTLS/SCTP" ? s = ["m=" + t.kind + " 9 " + t.protocol + " " + n.protocol + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctp-port:" + n.port + `\r
`] : s = ["m=" + t.kind + " 9 " + t.protocol + " " + n.port + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctpmap:" + n.port + " " + n.protocol + ` 65535\r
`], n.maxMessageSize !== void 0 && s.push("a=max-message-size:" + n.maxMessageSize + `\r
`), s.join("");
    }, e.generateSessionId = function() {
      return Math.random().toString().substr(2, 22);
    }, e.writeSessionBoilerplate = function(t, n, s) {
      let i;
      const a = n !== void 0 ? n : 2;
      return t ? i = t : i = e.generateSessionId(), `v=0\r
o=` + (s || "thisisadapterortc") + " " + i + " " + a + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`;
    }, e.getDirection = function(t, n) {
      const s = e.splitLines(t);
      for (let i = 0; i < s.length; i++) switch (s[i]) {
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
          return s[i].substring(2);
      }
      return n ? e.getDirection(n) : "sendrecv";
    }, e.getKind = function(t) {
      return e.splitLines(t)[0].split(" ")[0].substring(2);
    }, e.isRejected = function(t) {
      return t.split(" ", 2)[1] === "0";
    }, e.parseMLine = function(t) {
      const s = e.splitLines(t)[0].substring(2).split(" ");
      return { kind: s[0], port: parseInt(s[1], 10), protocol: s[2], fmt: s.slice(3).join(" ") };
    }, e.parseOLine = function(t) {
      const s = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
      return { username: s[0], sessionId: s[1], sessionVersion: parseInt(s[2], 10), netType: s[3], addressType: s[4], address: s[5] };
    }, e.isValidSDP = function(t) {
      if (typeof t != "string" || t.length === 0) return false;
      const n = e.splitLines(t);
      for (let s = 0; s < n.length; s++) if (n[s].length < 2 || n[s].charAt(1) !== "=") return false;
      return true;
    }, f.exports = e;
  }(Zi)), Zi.exports;
}
var Va = Vl();
const Dt = ra(Va), Gl = lu({ __proto__: null, default: Dt }, [Va]);
function Ci(f) {
  if (!f.RTCIceCandidate || f.RTCIceCandidate && "foundation" in f.RTCIceCandidate.prototype) return;
  const e = f.RTCIceCandidate;
  f.RTCIceCandidate = function(n) {
    if (typeof n == "object" && n.candidate && n.candidate.indexOf("a=") === 0 && (n = JSON.parse(JSON.stringify(n)), n.candidate = n.candidate.substring(2)), n.candidate && n.candidate.length) {
      const s = new e(n), i = Dt.parseCandidate(n.candidate);
      for (const a in i) a in s || Object.defineProperty(s, a, { value: i[a] });
      return s.toJSON = function() {
        return { candidate: s.candidate, sdpMid: s.sdpMid, sdpMLineIndex: s.sdpMLineIndex, usernameFragment: s.usernameFragment };
      }, s;
    }
    return new e(n);
  }, f.RTCIceCandidate.prototype = e.prototype, Ct(f, "icecandidate", (t) => (t.candidate && Object.defineProperty(t, "candidate", { value: new f.RTCIceCandidate(t.candidate), writable: "false" }), t));
}
function Un(f) {
  !f.RTCIceCandidate || f.RTCIceCandidate && "relayProtocol" in f.RTCIceCandidate.prototype || Ct(f, "icecandidate", (e) => {
    if (e.candidate) {
      const t = Dt.parseCandidate(e.candidate.candidate);
      t.type === "relay" && (e.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[t.priority >> 24]);
    }
    return e;
  });
}
function _i(f, e) {
  if (!f.RTCPeerConnection) return;
  "sctp" in f.RTCPeerConnection.prototype || Object.defineProperty(f.RTCPeerConnection.prototype, "sctp", { get() {
    return typeof this._sctp > "u" ? null : this._sctp;
  } });
  const t = function(u) {
    if (!u || !u.sdp) return false;
    const c = Dt.splitSections(u.sdp);
    return c.shift(), c.some((p) => {
      const l = Dt.parseMLine(p);
      return l && l.kind === "application" && l.protocol.indexOf("SCTP") !== -1;
    });
  }, n = function(u) {
    const c = u.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (c === null || c.length < 2) return -1;
    const p = parseInt(c[1], 10);
    return p !== p ? -1 : p;
  }, s = function(u) {
    let c = 65536;
    return e.browser === "firefox" && (e.version < 57 ? u === -1 ? c = 16384 : c = 2147483637 : e.version < 60 ? c = e.version === 57 ? 65535 : 65536 : c = 2147483637), c;
  }, i = function(u, c) {
    let p = 65536;
    e.browser === "firefox" && e.version === 57 && (p = 65535);
    const l = Dt.matchPrefix(u.sdp, "a=max-message-size:");
    return l.length > 0 ? p = parseInt(l[0].substring(19), 10) : e.browser === "firefox" && c !== -1 && (p = 2147483637), p;
  }, a = f.RTCPeerConnection.prototype.setRemoteDescription;
  f.RTCPeerConnection.prototype.setRemoteDescription = function() {
    if (this._sctp = null, e.browser === "chrome" && e.version >= 76) {
      const { sdpSemantics: c } = this.getConfiguration();
      c === "plan-b" && Object.defineProperty(this, "sctp", { get() {
        return typeof this._sctp > "u" ? null : this._sctp;
      }, enumerable: true, configurable: true });
    }
    if (t(arguments[0])) {
      const c = n(arguments[0]), p = s(c), l = i(arguments[0], c);
      let m;
      p === 0 && l === 0 ? m = Number.POSITIVE_INFINITY : p === 0 || l === 0 ? m = Math.max(p, l) : m = Math.min(p, l);
      const o = {};
      Object.defineProperty(o, "maxMessageSize", { get() {
        return m;
      } }), this._sctp = o;
    }
    return a.apply(this, arguments);
  };
}
function Ei(f) {
  if (!(f.RTCPeerConnection && "createDataChannel" in f.RTCPeerConnection.prototype)) return;
  function e(n, s) {
    const i = n.send;
    n.send = function() {
      const u = arguments[0], c = u.length || u.size || u.byteLength;
      if (n.readyState === "open" && s.sctp && c > s.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + s.sctp.maxMessageSize + " bytes)");
      return i.apply(n, arguments);
    };
  }
  const t = f.RTCPeerConnection.prototype.createDataChannel;
  f.RTCPeerConnection.prototype.createDataChannel = function() {
    const s = t.apply(this, arguments);
    return e(s, this), s;
  }, Ct(f, "datachannel", (n) => (e(n.channel, n.target), n));
}
function qn(f) {
  if (!f.RTCPeerConnection || "connectionState" in f.RTCPeerConnection.prototype) return;
  const e = f.RTCPeerConnection.prototype;
  Object.defineProperty(e, "connectionState", { get() {
    return { completed: "connected", checking: "connecting" }[this.iceConnectionState] || this.iceConnectionState;
  }, enumerable: true, configurable: true }), Object.defineProperty(e, "onconnectionstatechange", { get() {
    return this._onconnectionstatechange || null;
  }, set(t) {
    this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), t && this.addEventListener("connectionstatechange", this._onconnectionstatechange = t);
  }, enumerable: true, configurable: true }), ["setLocalDescription", "setRemoteDescription"].forEach((t) => {
    const n = e[t];
    e[t] = function() {
      return this._connectionstatechangepoly || (this._connectionstatechangepoly = (s) => {
        const i = s.target;
        if (i._lastConnectionState !== i.connectionState) {
          i._lastConnectionState = i.connectionState;
          const a = new Event("connectionstatechange", s);
          i.dispatchEvent(a);
        }
        return s;
      }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n.apply(this, arguments);
    };
  });
}
function Hn(f, e) {
  if (!f.RTCPeerConnection || e.browser === "chrome" && e.version >= 71 || e.browser === "safari" && e._safariVersion >= 13.1) return;
  const t = f.RTCPeerConnection.prototype.setRemoteDescription;
  f.RTCPeerConnection.prototype.setRemoteDescription = function(s) {
    if (s && s.sdp && s.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
      const i = s.sdp.split(`
`).filter((a) => a.trim() !== "a=extmap-allow-mixed").join(`
`);
      f.RTCSessionDescription && s instanceof f.RTCSessionDescription ? arguments[0] = new f.RTCSessionDescription({ type: s.type, sdp: i }) : s.sdp = i;
    }
    return t.apply(this, arguments);
  };
}
function ki(f, e) {
  if (!(f.RTCPeerConnection && f.RTCPeerConnection.prototype)) return;
  const t = f.RTCPeerConnection.prototype.addIceCandidate;
  !t || t.length === 0 || (f.RTCPeerConnection.prototype.addIceCandidate = function() {
    return arguments[0] ? (e.browser === "chrome" && e.version < 78 || e.browser === "firefox" && e.version < 68 || e.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
  });
}
function Ti(f, e) {
  if (!(f.RTCPeerConnection && f.RTCPeerConnection.prototype)) return;
  const t = f.RTCPeerConnection.prototype.setLocalDescription;
  !t || t.length === 0 || (f.RTCPeerConnection.prototype.setLocalDescription = function() {
    let s = arguments[0] || {};
    if (typeof s != "object" || s.type && s.sdp) return t.apply(this, arguments);
    if (s = { type: s.type, sdp: s.sdp }, !s.type) switch (this.signalingState) {
      case "stable":
      case "have-local-offer":
      case "have-remote-pranswer":
        s.type = "offer";
        break;
      default:
        s.type = "answer";
        break;
    }
    return s.sdp || s.type !== "offer" && s.type !== "answer" ? t.apply(this, [s]) : (s.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then((a) => t.apply(this, [a]));
  });
}
const Wl = Object.freeze(Object.defineProperty({ __proto__: null, removeExtmapAllowMixed: Hn, shimAddIceCandidateNullOrEmpty: ki, shimConnectionState: qn, shimMaxMessageSize: _i, shimParameterlessSetLocalDescription: Ti, shimRTCIceCandidate: Ci, shimRTCIceCandidateRelayProtocol: Un, shimSendThrowTypeError: Ei }, Symbol.toStringTag, { value: "Module" }));
function Xl({ window: f } = {}, e = { shimChrome: true, shimFirefox: true, shimSafari: true }) {
  const t = va, n = ql(f), s = { browserDetails: n, commonShim: Wl, extractVersion: Zt, disableLog: Fl, disableWarnings: Ul, sdp: Gl };
  switch (n.browser) {
    case "chrome":
      if (!Ns || !jn || !e.shimChrome) return t("Chrome shim is not included in this adapter release."), s;
      if (n.version === null) return t("Chrome shim can not determine version, not shimming."), s;
      t("adapter.js shimming chrome."), s.browserShim = Ns, ki(f, n), Ti(f), ba(f, n), ya(f), jn(f, n), xa(f), _a(f, n), wa(f), Sa(f), Ea(f, n), Ci(f), Un(f), qn(f), _i(f, n), Ei(f), Hn(f, n);
      break;
    case "firefox":
      if (!js || !Fn || !e.shimFirefox) return t("Firefox shim is not included in this adapter release."), s;
      t("adapter.js shimming firefox."), s.browserShim = js, ki(f, n), Ti(f), ka(f, n), Fn(f, n), Ta(f), La(f), Pa(f), Ma(f), Oa(f), Aa(f), Ra(f), Da(f), Ia(f), Ci(f), qn(f), _i(f, n), Ei(f);
      break;
    case "safari":
      if (!Fs || !e.shimSafari) return t("Safari shim is not included in this adapter release."), s;
      t("adapter.js shimming safari."), s.browserShim = Fs, ki(f, n), Ti(f), Fa(f), qa(f), $a(f), Ba(f), za(f), Ua(f), Na(f), Ha(f), Ci(f), Un(f), _i(f, n), Ei(f), Hn(f, n);
      break;
    default:
      t("Unsupported browser!");
      break;
  }
  return s;
}
const qs = Xl({ window: typeof window > "u" ? void 0 : window });
function _t(f, e, t, n) {
  Object.defineProperty(f, e, { get: t, set: n, enumerable: true, configurable: true });
}
class Ga {
  constructor() {
    this.chunkedMTU = 16300, this._dataCount = 1, this.chunk = (e) => {
      const t = [], n = e.byteLength, s = Math.ceil(n / this.chunkedMTU);
      let i = 0, a = 0;
      for (; a < n; ) {
        const u = Math.min(n, a + this.chunkedMTU), c = e.slice(a, u), p = { __peerData: this._dataCount, n: i, data: c, total: s };
        t.push(p), a = u, i++;
      }
      return this._dataCount++, t;
    };
  }
}
function Zl(f) {
  let e = 0;
  for (const s of f) e += s.byteLength;
  const t = new Uint8Array(e);
  let n = 0;
  for (const s of f) t.set(s, n), n += s.byteLength;
  return t;
}
const Yi = qs.default || qs, Gt = new class {
  isWebRTCSupported() {
    return typeof RTCPeerConnection < "u";
  }
  isBrowserSupported() {
    const f = this.getBrowser(), e = this.getVersion();
    return this.supportedBrowsers.includes(f) ? f === "chrome" ? e >= this.minChromeVersion : f === "firefox" ? e >= this.minFirefoxVersion : f === "safari" ? !this.isIOS && e >= this.minSafariVersion : false : false;
  }
  getBrowser() {
    return Yi.browserDetails.browser;
  }
  getVersion() {
    return Yi.browserDetails.version || 0;
  }
  isUnifiedPlanSupported() {
    const f = this.getBrowser(), e = Yi.browserDetails.version || 0;
    if (f === "chrome" && e < this.minChromeVersion) return false;
    if (f === "firefox" && e >= this.minFirefoxVersion) return true;
    if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return false;
    let t, n = false;
    try {
      t = new RTCPeerConnection(), t.addTransceiver("audio"), n = true;
    } catch {
    } finally {
      t && t.close();
    }
    return n;
  }
  toString() {
    return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
  }
  constructor() {
    this.isIOS = typeof navigator < "u" ? ["iPad", "iPhone", "iPod"].includes(navigator.platform) : false, this.supportedBrowsers = ["firefox", "chrome", "safari"], this.minFirefoxVersion = 59, this.minChromeVersion = 72, this.minSafariVersion = 605;
  }
}(), Yl = (f) => !f || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(f), Wa = () => Math.random().toString(36).slice(2), Hs = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }, { urls: ["turn:eu-0.turn.peerjs.com:3478", "turn:us-0.turn.peerjs.com:3478"], username: "peerjs", credential: "peerjsp" }], sdpSemantics: "unified-plan" };
class Ql extends Ga {
  noop() {
  }
  blobToArrayBuffer(e, t) {
    const n = new FileReader();
    return n.onload = function(s) {
      s.target && t(s.target.result);
    }, n.readAsArrayBuffer(e), n;
  }
  binaryStringToArrayBuffer(e) {
    const t = new Uint8Array(e.length);
    for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n) & 255;
    return t.buffer;
  }
  isSecure() {
    return location.protocol === "https:";
  }
  constructor(...e) {
    super(...e), this.CLOUD_HOST = "0.peerjs.com", this.CLOUD_PORT = 443, this.chunkedBrowsers = { Chrome: 1, chrome: 1 }, this.defaultConfig = Hs, this.browser = Gt.getBrowser(), this.browserVersion = Gt.getVersion(), this.pack = pa, this.unpack = fa, this.supports = function() {
      const t = { browser: Gt.isBrowserSupported(), webRTC: Gt.isWebRTCSupported(), audioVideo: false, data: false, binaryBlob: false, reliable: false };
      if (!t.webRTC) return t;
      let n;
      try {
        n = new RTCPeerConnection(Hs), t.audioVideo = true;
        let s;
        try {
          s = n.createDataChannel("_PEERJSTEST", { ordered: true }), t.data = true, t.reliable = !!s.ordered;
          try {
            s.binaryType = "blob", t.binaryBlob = !Gt.isIOS;
          } catch {
          }
        } catch {
        } finally {
          s && s.close();
        }
      } catch {
      } finally {
        n && n.close();
      }
      return t;
    }(), this.validateId = Yl, this.randomToken = Wa;
  }
}
const $e = new Ql(), Kl = "PeerJS: ";
class Jl {
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    this._logLevel = e;
  }
  log(...e) {
    this._logLevel >= 3 && this._print(3, ...e);
  }
  warn(...e) {
    this._logLevel >= 2 && this._print(2, ...e);
  }
  error(...e) {
    this._logLevel >= 1 && this._print(1, ...e);
  }
  setLogFunction(e) {
    this._print = e;
  }
  _print(e, ...t) {
    const n = [Kl, ...t];
    for (const s in n) n[s] instanceof Error && (n[s] = "(" + n[s].name + ") " + n[s].message);
    e >= 3 ? console.log(...n) : e >= 2 ? console.warn("WARNING", ...n) : e >= 1 && console.error("ERROR", ...n);
  }
  constructor() {
    this._logLevel = 0;
  }
}
var K = new Jl(), ts = {}, ec = Object.prototype.hasOwnProperty, De = "~";
function Jt() {
}
Object.create && (Jt.prototype = /* @__PURE__ */ Object.create(null), new Jt().__proto__ || (De = false));
function tc(f, e, t) {
  this.fn = f, this.context = e, this.once = t || false;
}
function Xa(f, e, t, n, s) {
  if (typeof t != "function") throw new TypeError("The listener must be a function");
  var i = new tc(t, n || f, s), a = De ? De + e : e;
  return f._events[a] ? f._events[a].fn ? f._events[a] = [f._events[a], i] : f._events[a].push(i) : (f._events[a] = i, f._eventsCount++), f;
}
function Pi(f, e) {
  --f._eventsCount === 0 ? f._events = new Jt() : delete f._events[e];
}
function Ae() {
  this._events = new Jt(), this._eventsCount = 0;
}
Ae.prototype.eventNames = function() {
  var e = [], t, n;
  if (this._eventsCount === 0) return e;
  for (n in t = this._events) ec.call(t, n) && e.push(De ? n.slice(1) : n);
  return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
};
Ae.prototype.listeners = function(e) {
  var t = De ? De + e : e, n = this._events[t];
  if (!n) return [];
  if (n.fn) return [n.fn];
  for (var s = 0, i = n.length, a = new Array(i); s < i; s++) a[s] = n[s].fn;
  return a;
};
Ae.prototype.listenerCount = function(e) {
  var t = De ? De + e : e, n = this._events[t];
  return n ? n.fn ? 1 : n.length : 0;
};
Ae.prototype.emit = function(e, t, n, s, i, a) {
  var u = De ? De + e : e;
  if (!this._events[u]) return false;
  var c = this._events[u], p = arguments.length, l, m;
  if (c.fn) {
    switch (c.once && this.removeListener(e, c.fn, void 0, true), p) {
      case 1:
        return c.fn.call(c.context), true;
      case 2:
        return c.fn.call(c.context, t), true;
      case 3:
        return c.fn.call(c.context, t, n), true;
      case 4:
        return c.fn.call(c.context, t, n, s), true;
      case 5:
        return c.fn.call(c.context, t, n, s, i), true;
      case 6:
        return c.fn.call(c.context, t, n, s, i, a), true;
    }
    for (m = 1, l = new Array(p - 1); m < p; m++) l[m - 1] = arguments[m];
    c.fn.apply(c.context, l);
  } else {
    var o = c.length, r;
    for (m = 0; m < o; m++) switch (c[m].once && this.removeListener(e, c[m].fn, void 0, true), p) {
      case 1:
        c[m].fn.call(c[m].context);
        break;
      case 2:
        c[m].fn.call(c[m].context, t);
        break;
      case 3:
        c[m].fn.call(c[m].context, t, n);
        break;
      case 4:
        c[m].fn.call(c[m].context, t, n, s);
        break;
      default:
        if (!l) for (r = 1, l = new Array(p - 1); r < p; r++) l[r - 1] = arguments[r];
        c[m].fn.apply(c[m].context, l);
    }
  }
  return true;
};
Ae.prototype.on = function(e, t, n) {
  return Xa(this, e, t, n, false);
};
Ae.prototype.once = function(e, t, n) {
  return Xa(this, e, t, n, true);
};
Ae.prototype.removeListener = function(e, t, n, s) {
  var i = De ? De + e : e;
  if (!this._events[i]) return this;
  if (!t) return Pi(this, i), this;
  var a = this._events[i];
  if (a.fn) a.fn === t && (!s || a.once) && (!n || a.context === n) && Pi(this, i);
  else {
    for (var u = 0, c = [], p = a.length; u < p; u++) (a[u].fn !== t || s && !a[u].once || n && a[u].context !== n) && c.push(a[u]);
    c.length ? this._events[i] = c.length === 1 ? c[0] : c : Pi(this, i);
  }
  return this;
};
Ae.prototype.removeAllListeners = function(e) {
  var t;
  return e ? (t = De ? De + e : e, this._events[t] && Pi(this, t)) : (this._events = new Jt(), this._eventsCount = 0), this;
};
Ae.prototype.off = Ae.prototype.removeListener;
Ae.prototype.addListener = Ae.prototype.on;
Ae.prefixed = De;
Ae.EventEmitter = Ae;
ts = Ae;
var Et = {};
_t(Et, "ConnectionType", () => dt);
_t(Et, "PeerErrorType", () => ge);
_t(Et, "BaseConnectionErrorType", () => Vn);
_t(Et, "DataConnectionErrorType", () => is);
_t(Et, "SerializationType", () => Ii);
_t(Et, "SocketEventType", () => ct);
_t(Et, "ServerMessageType", () => Le);
var dt = function(f) {
  return f.Data = "data", f.Media = "media", f;
}({}), ge = function(f) {
  return f.BrowserIncompatible = "browser-incompatible", f.Disconnected = "disconnected", f.InvalidID = "invalid-id", f.InvalidKey = "invalid-key", f.Network = "network", f.PeerUnavailable = "peer-unavailable", f.SslUnavailable = "ssl-unavailable", f.ServerError = "server-error", f.SocketError = "socket-error", f.SocketClosed = "socket-closed", f.UnavailableID = "unavailable-id", f.WebRTC = "webrtc", f;
}({}), Vn = function(f) {
  return f.NegotiationFailed = "negotiation-failed", f.ConnectionClosed = "connection-closed", f;
}({}), is = function(f) {
  return f.NotOpenYet = "not-open-yet", f.MessageToBig = "message-too-big", f;
}({}), Ii = function(f) {
  return f.Binary = "binary", f.BinaryUTF8 = "binary-utf8", f.JSON = "json", f.None = "raw", f;
}({}), ct = function(f) {
  return f.Message = "message", f.Disconnected = "disconnected", f.Error = "error", f.Close = "close", f;
}({}), Le = function(f) {
  return f.Heartbeat = "HEARTBEAT", f.Candidate = "CANDIDATE", f.Offer = "OFFER", f.Answer = "ANSWER", f.Open = "OPEN", f.Error = "ERROR", f.IdTaken = "ID-TAKEN", f.InvalidKey = "INVALID-KEY", f.Leave = "LEAVE", f.Expire = "EXPIRE", f;
}({});
const Za = "1.5.5";
class ic extends ts.EventEmitter {
  constructor(e, t, n, s, i, a = 5e3) {
    super(), this.pingInterval = a, this._disconnected = true, this._messagesQueue = [];
    const u = e ? "wss://" : "ws://";
    this._baseUrl = u + t + ":" + n + s + "peerjs?key=" + i;
  }
  start(e, t) {
    this._id = e;
    const n = `${this._baseUrl}&id=${e}&token=${t}`;
    this._socket || !this._disconnected || (this._socket = new WebSocket(n + "&version=" + Za), this._disconnected = false, this._socket.onmessage = (s) => {
      let i;
      try {
        i = JSON.parse(s.data), K.log("Server message received:", i);
      } catch {
        K.log("Invalid server message", s.data);
        return;
      }
      this.emit(ct.Message, i);
    }, this._socket.onclose = (s) => {
      this._disconnected || (K.log("Socket closed.", s), this._cleanup(), this._disconnected = true, this.emit(ct.Disconnected));
    }, this._socket.onopen = () => {
      this._disconnected || (this._sendQueuedMessages(), K.log("Socket open"), this._scheduleHeartbeat());
    });
  }
  _scheduleHeartbeat() {
    this._wsPingTimer = setTimeout(() => {
      this._sendHeartbeat();
    }, this.pingInterval);
  }
  _sendHeartbeat() {
    if (!this._wsOpen()) {
      K.log("Cannot send heartbeat, because socket closed");
      return;
    }
    const e = JSON.stringify({ type: Le.Heartbeat });
    this._socket.send(e), this._scheduleHeartbeat();
  }
  _wsOpen() {
    return !!this._socket && this._socket.readyState === 1;
  }
  _sendQueuedMessages() {
    const e = [...this._messagesQueue];
    this._messagesQueue = [];
    for (const t of e) this.send(t);
  }
  send(e) {
    if (this._disconnected) return;
    if (!this._id) {
      this._messagesQueue.push(e);
      return;
    }
    if (!e.type) {
      this.emit(ct.Error, "Invalid message");
      return;
    }
    if (!this._wsOpen()) return;
    const t = JSON.stringify(e);
    this._socket.send(t);
  }
  close() {
    this._disconnected || (this._cleanup(), this._disconnected = true);
  }
  _cleanup() {
    this._socket && (this._socket.onopen = this._socket.onmessage = this._socket.onclose = null, this._socket.close(), this._socket = void 0), clearTimeout(this._wsPingTimer);
  }
}
class Ya {
  constructor(e) {
    this.connection = e;
  }
  startConnection(e) {
    const t = this._startPeerConnection();
    if (this.connection.peerConnection = t, this.connection.type === dt.Media && e._stream && this._addTracksToConnection(e._stream, t), e.originator) {
      const n = this.connection, s = { ordered: !!e.reliable }, i = t.createDataChannel(n.label, s);
      n._initializeDataChannel(i), this._makeOffer();
    } else this.handleSDP("OFFER", e.sdp);
  }
  _startPeerConnection() {
    K.log("Creating RTCPeerConnection.");
    const e = new RTCPeerConnection(this.connection.provider.options.config);
    return this._setupListeners(e), e;
  }
  _setupListeners(e) {
    const t = this.connection.peer, n = this.connection.connectionId, s = this.connection.type, i = this.connection.provider;
    K.log("Listening for ICE candidates."), e.onicecandidate = (a) => {
      !a.candidate || !a.candidate.candidate || (K.log(`Received ICE candidates for ${t}:`, a.candidate), i.socket.send({ type: Le.Candidate, payload: { candidate: a.candidate, type: s, connectionId: n }, dst: t }));
    }, e.oniceconnectionstatechange = () => {
      switch (e.iceConnectionState) {
        case "failed":
          K.log("iceConnectionState is failed, closing connections to " + t), this.connection.emitError(Vn.NegotiationFailed, "Negotiation of connection to " + t + " failed."), this.connection.close();
          break;
        case "closed":
          K.log("iceConnectionState is closed, closing connections to " + t), this.connection.emitError(Vn.ConnectionClosed, "Connection to " + t + " closed."), this.connection.close();
          break;
        case "disconnected":
          K.log("iceConnectionState changed to disconnected on the connection with " + t);
          break;
        case "completed":
          e.onicecandidate = () => {
          };
          break;
      }
      this.connection.emit("iceStateChanged", e.iceConnectionState);
    }, K.log("Listening for data channel"), e.ondatachannel = (a) => {
      K.log("Received data channel");
      const u = a.channel;
      i.getConnection(t, n)._initializeDataChannel(u);
    }, K.log("Listening for remote stream"), e.ontrack = (a) => {
      K.log("Received remote stream");
      const u = a.streams[0], c = i.getConnection(t, n);
      if (c.type === dt.Media) {
        const p = c;
        this._addStreamToMediaConnection(u, p);
      }
    };
  }
  cleanup() {
    K.log("Cleaning up PeerConnection to " + this.connection.peer);
    const e = this.connection.peerConnection;
    if (!e) return;
    this.connection.peerConnection = null, e.onicecandidate = e.oniceconnectionstatechange = e.ondatachannel = e.ontrack = () => {
    };
    const t = e.signalingState !== "closed";
    let n = false;
    const s = this.connection.dataChannel;
    s && (n = !!s.readyState && s.readyState !== "closed"), (t || n) && e.close();
  }
  async _makeOffer() {
    const e = this.connection.peerConnection, t = this.connection.provider;
    try {
      const n = await e.createOffer(this.connection.options.constraints);
      K.log("Created offer."), this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (n.sdp = this.connection.options.sdpTransform(n.sdp) || n.sdp);
      try {
        await e.setLocalDescription(n), K.log("Set localDescription:", n, `for:${this.connection.peer}`);
        let s = { sdp: n, type: this.connection.type, connectionId: this.connection.connectionId, metadata: this.connection.metadata };
        if (this.connection.type === dt.Data) {
          const i = this.connection;
          s = { ...s, label: i.label, reliable: i.reliable, serialization: i.serialization };
        }
        t.socket.send({ type: Le.Offer, payload: s, dst: this.connection.peer });
      } catch (s) {
        s != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" && (t.emitError(ge.WebRTC, s), K.log("Failed to setLocalDescription, ", s));
      }
    } catch (n) {
      t.emitError(ge.WebRTC, n), K.log("Failed to createOffer, ", n);
    }
  }
  async _makeAnswer() {
    const e = this.connection.peerConnection, t = this.connection.provider;
    try {
      const n = await e.createAnswer();
      K.log("Created answer."), this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (n.sdp = this.connection.options.sdpTransform(n.sdp) || n.sdp);
      try {
        await e.setLocalDescription(n), K.log("Set localDescription:", n, `for:${this.connection.peer}`), t.socket.send({ type: Le.Answer, payload: { sdp: n, type: this.connection.type, connectionId: this.connection.connectionId }, dst: this.connection.peer });
      } catch (s) {
        t.emitError(ge.WebRTC, s), K.log("Failed to setLocalDescription, ", s);
      }
    } catch (n) {
      t.emitError(ge.WebRTC, n), K.log("Failed to create answer, ", n);
    }
  }
  async handleSDP(e, t) {
    t = new RTCSessionDescription(t);
    const n = this.connection.peerConnection, s = this.connection.provider;
    K.log("Setting remote description", t);
    const i = this;
    try {
      await n.setRemoteDescription(t), K.log(`Set remoteDescription:${e} for:${this.connection.peer}`), e === "OFFER" && await i._makeAnswer();
    } catch (a) {
      s.emitError(ge.WebRTC, a), K.log("Failed to setRemoteDescription, ", a);
    }
  }
  async handleCandidate(e) {
    K.log("handleCandidate:", e);
    try {
      await this.connection.peerConnection.addIceCandidate(e), K.log(`Added ICE candidate for:${this.connection.peer}`);
    } catch (t) {
      this.connection.provider.emitError(ge.WebRTC, t), K.log("Failed to handleCandidate, ", t);
    }
  }
  _addTracksToConnection(e, t) {
    if (K.log(`add tracks from stream ${e.id} to peer connection`), !t.addTrack) return K.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
    e.getTracks().forEach((n) => {
      t.addTrack(n, e);
    });
  }
  _addStreamToMediaConnection(e, t) {
    K.log(`add stream ${e.id} to media connection ${t.connectionId}`), t.addStream(e);
  }
}
class Qa extends ts.EventEmitter {
  emitError(e, t) {
    K.error("Error:", t), this.emit("error", new nc(`${e}`, t));
  }
}
class nc extends Error {
  constructor(e, t) {
    typeof t == "string" ? super(t) : (super(), Object.assign(this, t)), this.type = e;
  }
}
class Ka extends Qa {
  get open() {
    return this._open;
  }
  constructor(e, t, n) {
    super(), this.peer = e, this.provider = t, this.options = n, this._open = false, this.metadata = n.metadata;
  }
}
class Ai extends Ka {
  static #e = this.ID_PREFIX = "mc_";
  get type() {
    return dt.Media;
  }
  get localStream() {
    return this._localStream;
  }
  get remoteStream() {
    return this._remoteStream;
  }
  constructor(e, t, n) {
    super(e, t, n), this._localStream = this.options._stream, this.connectionId = this.options.connectionId || Ai.ID_PREFIX + $e.randomToken(), this._negotiator = new Ya(this), this._localStream && this._negotiator.startConnection({ _stream: this._localStream, originator: true });
  }
  _initializeDataChannel(e) {
    this.dataChannel = e, this.dataChannel.onopen = () => {
      K.log(`DC#${this.connectionId} dc connection success`), this.emit("willCloseOnRemote");
    }, this.dataChannel.onclose = () => {
      K.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
    };
  }
  addStream(e) {
    K.log("Receiving stream", e), this._remoteStream = e, super.emit("stream", e);
  }
  handleMessage(e) {
    const t = e.type, n = e.payload;
    switch (e.type) {
      case Le.Answer:
        this._negotiator.handleSDP(t, n.sdp), this._open = true;
        break;
      case Le.Candidate:
        this._negotiator.handleCandidate(n.candidate);
        break;
      default:
        K.warn(`Unrecognized message type:${t} from peer:${this.peer}`);
        break;
    }
  }
  answer(e, t = {}) {
    if (this._localStream) {
      K.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
      return;
    }
    this._localStream = e, t && t.sdpTransform && (this.options.sdpTransform = t.sdpTransform), this._negotiator.startConnection({ ...this.options._payload, _stream: e });
    const n = this.provider._getMessages(this.connectionId);
    for (const s of n) this.handleMessage(s);
    this._open = true;
  }
  close() {
    this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this._localStream = null, this._remoteStream = null, this.provider && (this.provider._removeConnection(this), this.provider = null), this.options && this.options._stream && (this.options._stream = null), this.open && (this._open = false, super.emit("close"));
  }
}
class sc {
  constructor(e) {
    this._options = e;
  }
  _buildRequest(e) {
    const t = this._options.secure ? "https" : "http", { host: n, port: s, path: i, key: a } = this._options, u = new URL(`${t}://${n}:${s}${i}${a}/${e}`);
    return u.searchParams.set("ts", `${Date.now()}${Math.random()}`), u.searchParams.set("version", Za), fetch(u.href, { referrerPolicy: this._options.referrerPolicy });
  }
  async retrieveId() {
    try {
      const e = await this._buildRequest("id");
      if (e.status !== 200) throw new Error(`Error. Status:${e.status}`);
      return e.text();
    } catch (e) {
      K.error("Error retrieving ID", e);
      let t = "";
      throw this._options.path === "/" && this._options.host !== $e.CLOUD_HOST && (t = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."), new Error("Could not get an ID from the server." + t);
    }
  }
  async listAllPeers() {
    try {
      const e = await this._buildRequest("peers");
      if (e.status !== 200) {
        if (e.status === 401) {
          let t = "";
          throw this._options.host === $e.CLOUD_HOST ? t = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key." : t = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.", new Error("It doesn't look like you have permission to list peers IDs. " + t);
        }
        throw new Error(`Error. Status:${e.status}`);
      }
      return e.json();
    } catch (e) {
      throw K.error("Error retrieving list peers", e), new Error("Could not get list peers from the server." + e);
    }
  }
}
class Ri extends Ka {
  static #e = this.ID_PREFIX = "dc_";
  static #t = this.MAX_BUFFERED_AMOUNT = 8388608;
  get type() {
    return dt.Data;
  }
  constructor(e, t, n) {
    super(e, t, n), this.connectionId = this.options.connectionId || Ri.ID_PREFIX + Wa(), this.label = this.options.label || this.connectionId, this.reliable = !!this.options.reliable, this._negotiator = new Ya(this), this._negotiator.startConnection(this.options._payload || { originator: true, reliable: this.reliable });
  }
  _initializeDataChannel(e) {
    this.dataChannel = e, this.dataChannel.onopen = () => {
      K.log(`DC#${this.connectionId} dc connection success`), this._open = true, this.emit("open");
    }, this.dataChannel.onmessage = (t) => {
      K.log(`DC#${this.connectionId} dc onmessage:`, t.data);
    }, this.dataChannel.onclose = () => {
      K.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
    };
  }
  close(e) {
    if (e?.flush) {
      this.send({ __peerData: { type: "close" } });
      return;
    }
    this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this.provider && (this.provider._removeConnection(this), this.provider = null), this.dataChannel && (this.dataChannel.onopen = null, this.dataChannel.onmessage = null, this.dataChannel.onclose = null, this.dataChannel = null), this.open && (this._open = false, super.emit("close"));
  }
  send(e, t = false) {
    if (!this.open) {
      this.emitError(is.NotOpenYet, "Connection is not open. You should listen for the `open` event before sending messages.");
      return;
    }
    return this._send(e, t);
  }
  async handleMessage(e) {
    const t = e.payload;
    switch (e.type) {
      case Le.Answer:
        await this._negotiator.handleSDP(e.type, t.sdp);
        break;
      case Le.Candidate:
        await this._negotiator.handleCandidate(t.candidate);
        break;
      default:
        K.warn("Unrecognized message type:", e.type, "from peer:", this.peer);
        break;
    }
  }
}
class ns extends Ri {
  get bufferSize() {
    return this._bufferSize;
  }
  _initializeDataChannel(e) {
    super._initializeDataChannel(e), this.dataChannel.binaryType = "arraybuffer", this.dataChannel.addEventListener("message", (t) => this._handleDataMessage(t));
  }
  _bufferedSend(e) {
    (this._buffering || !this._trySend(e)) && (this._buffer.push(e), this._bufferSize = this._buffer.length);
  }
  _trySend(e) {
    if (!this.open) return false;
    if (this.dataChannel.bufferedAmount > Ri.MAX_BUFFERED_AMOUNT) return this._buffering = true, setTimeout(() => {
      this._buffering = false, this._tryBuffer();
    }, 50), false;
    try {
      this.dataChannel.send(e);
    } catch (t) {
      return K.error(`DC#:${this.connectionId} Error when sending:`, t), this._buffering = true, this.close(), false;
    }
    return true;
  }
  _tryBuffer() {
    if (!this.open || this._buffer.length === 0) return;
    const e = this._buffer[0];
    this._trySend(e) && (this._buffer.shift(), this._bufferSize = this._buffer.length, this._tryBuffer());
  }
  close(e) {
    if (e?.flush) {
      this.send({ __peerData: { type: "close" } });
      return;
    }
    this._buffer = [], this._bufferSize = 0, super.close();
  }
  constructor(...e) {
    super(...e), this._buffer = [], this._bufferSize = 0, this._buffering = false;
  }
}
class Qi extends ns {
  close(e) {
    super.close(e), this._chunkedData = {};
  }
  constructor(e, t, n) {
    super(e, t, n), this.chunker = new Ga(), this.serialization = Ii.Binary, this._chunkedData = {};
  }
  _handleDataMessage({ data: e }) {
    const t = fa(e), n = t.__peerData;
    if (n) {
      if (n.type === "close") {
        this.close();
        return;
      }
      this._handleChunk(t);
      return;
    }
    this.emit("data", t);
  }
  _handleChunk(e) {
    const t = e.__peerData, n = this._chunkedData[t] || { data: [], count: 0, total: e.total };
    if (n.data[e.n] = new Uint8Array(e.data), n.count++, this._chunkedData[t] = n, n.total === n.count) {
      delete this._chunkedData[t];
      const s = Zl(n.data);
      this._handleDataMessage({ data: s });
    }
  }
  _send(e, t) {
    const n = pa(e);
    if (n instanceof Promise) return this._send_blob(n);
    if (!t && n.byteLength > this.chunker.chunkedMTU) {
      this._sendChunks(n);
      return;
    }
    this._bufferedSend(n);
  }
  async _send_blob(e) {
    const t = await e;
    if (t.byteLength > this.chunker.chunkedMTU) {
      this._sendChunks(t);
      return;
    }
    this._bufferedSend(t);
  }
  _sendChunks(e) {
    const t = this.chunker.chunk(e);
    K.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);
    for (const n of t) this.send(n, true);
  }
}
class rc extends ns {
  _handleDataMessage({ data: e }) {
    super.emit("data", e);
  }
  _send(e, t) {
    this._bufferedSend(e);
  }
  constructor(...e) {
    super(...e), this.serialization = Ii.None;
  }
}
class ac extends ns {
  _handleDataMessage({ data: e }) {
    const t = this.parse(this.decoder.decode(e)), n = t.__peerData;
    if (n && n.type === "close") {
      this.close();
      return;
    }
    this.emit("data", t);
  }
  _send(e, t) {
    const n = this.encoder.encode(this.stringify(e));
    if (n.byteLength >= $e.chunkedMTU) {
      this.emitError(is.MessageToBig, "Message too big for JSON channel");
      return;
    }
    this._bufferedSend(n);
  }
  constructor(...e) {
    super(...e), this.serialization = Ii.JSON, this.encoder = new TextEncoder(), this.decoder = new TextDecoder(), this.stringify = JSON.stringify, this.parse = JSON.parse;
  }
}
class ss extends Qa {
  static #e = this.DEFAULT_KEY = "peerjs";
  get id() {
    return this._id;
  }
  get options() {
    return this._options;
  }
  get open() {
    return this._open;
  }
  get socket() {
    return this._socket;
  }
  get connections() {
    const e = /* @__PURE__ */ Object.create(null);
    for (const [t, n] of this._connections) e[t] = n;
    return e;
  }
  get destroyed() {
    return this._destroyed;
  }
  get disconnected() {
    return this._disconnected;
  }
  constructor(e, t) {
    super(), this._serializers = { raw: rc, json: ac, binary: Qi, "binary-utf8": Qi, default: Qi }, this._id = null, this._lastServerId = null, this._destroyed = false, this._disconnected = false, this._open = false, this._connections = /* @__PURE__ */ new Map(), this._lostMessages = /* @__PURE__ */ new Map();
    let n;
    if (e && e.constructor == Object ? t = e : e && (n = e.toString()), t = { debug: 0, host: $e.CLOUD_HOST, port: $e.CLOUD_PORT, path: "/", key: ss.DEFAULT_KEY, token: $e.randomToken(), config: $e.defaultConfig, referrerPolicy: "strict-origin-when-cross-origin", serializers: {}, ...t }, this._options = t, this._serializers = { ...this._serializers, ...this.options.serializers }, this._options.host === "/" && (this._options.host = window.location.hostname), this._options.path && (this._options.path[0] !== "/" && (this._options.path = "/" + this._options.path), this._options.path[this._options.path.length - 1] !== "/" && (this._options.path += "/")), this._options.secure === void 0 && this._options.host !== $e.CLOUD_HOST ? this._options.secure = $e.isSecure() : this._options.host == $e.CLOUD_HOST && (this._options.secure = true), this._options.logFunction && K.setLogFunction(this._options.logFunction), K.logLevel = this._options.debug || 0, this._api = new sc(t), this._socket = this._createServerConnection(), !$e.supports.audioVideo && !$e.supports.data) {
      this._delayedAbort(ge.BrowserIncompatible, "The current browser does not support WebRTC");
      return;
    }
    if (n && !$e.validateId(n)) {
      this._delayedAbort(ge.InvalidID, `ID "${n}" is invalid`);
      return;
    }
    n ? this._initialize(n) : this._api.retrieveId().then((s) => this._initialize(s)).catch((s) => this._abort(ge.ServerError, s));
  }
  _createServerConnection() {
    const e = new ic(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
    return e.on(ct.Message, (t) => {
      this._handleMessage(t);
    }), e.on(ct.Error, (t) => {
      this._abort(ge.SocketError, t);
    }), e.on(ct.Disconnected, () => {
      this.disconnected || (this.emitError(ge.Network, "Lost connection to server."), this.disconnect());
    }), e.on(ct.Close, () => {
      this.disconnected || this._abort(ge.SocketClosed, "Underlying socket is already closed.");
    }), e;
  }
  _initialize(e) {
    this._id = e, this.socket.start(e, this._options.token);
  }
  _handleMessage(e) {
    const t = e.type, n = e.payload, s = e.src;
    switch (t) {
      case Le.Open:
        this._lastServerId = this.id, this._open = true, this.emit("open", this.id);
        break;
      case Le.Error:
        this._abort(ge.ServerError, n.msg);
        break;
      case Le.IdTaken:
        this._abort(ge.UnavailableID, `ID "${this.id}" is taken`);
        break;
      case Le.InvalidKey:
        this._abort(ge.InvalidKey, `API KEY "${this._options.key}" is invalid`);
        break;
      case Le.Leave:
        K.log(`Received leave message from ${s}`), this._cleanupPeer(s), this._connections.delete(s);
        break;
      case Le.Expire:
        this.emitError(ge.PeerUnavailable, `Could not connect to peer ${s}`);
        break;
      case Le.Offer: {
        const i = n.connectionId;
        let a = this.getConnection(s, i);
        if (a && (a.close(), K.warn(`Offer received for existing Connection ID:${i}`)), n.type === dt.Media) {
          const c = new Ai(s, this, { connectionId: i, _payload: n, metadata: n.metadata });
          a = c, this._addConnection(s, a), this.emit("call", c);
        } else if (n.type === dt.Data) {
          const c = new this._serializers[n.serialization](s, this, { connectionId: i, _payload: n, metadata: n.metadata, label: n.label, serialization: n.serialization, reliable: n.reliable });
          a = c, this._addConnection(s, a), this.emit("connection", c);
        } else {
          K.warn(`Received malformed connection type:${n.type}`);
          return;
        }
        const u = this._getMessages(i);
        for (const c of u) a.handleMessage(c);
        break;
      }
      default: {
        if (!n) {
          K.warn(`You received a malformed message from ${s} of type ${t}`);
          return;
        }
        const i = n.connectionId, a = this.getConnection(s, i);
        a && a.peerConnection ? a.handleMessage(e) : i ? this._storeMessage(i, e) : K.warn("You received an unrecognized message:", e);
        break;
      }
    }
  }
  _storeMessage(e, t) {
    this._lostMessages.has(e) || this._lostMessages.set(e, []), this._lostMessages.get(e).push(t);
  }
  _getMessages(e) {
    const t = this._lostMessages.get(e);
    return t ? (this._lostMessages.delete(e), t) : [];
  }
  connect(e, t = {}) {
    if (t = { serialization: "default", ...t }, this.disconnected) {
      K.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."), this.emitError(ge.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
      return;
    }
    const n = new this._serializers[t.serialization](e, this, t);
    return this._addConnection(e, n), n;
  }
  call(e, t, n = {}) {
    if (this.disconnected) {
      K.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."), this.emitError(ge.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
      return;
    }
    if (!t) {
      K.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
      return;
    }
    const s = new Ai(e, this, { ...n, _stream: t });
    return this._addConnection(e, s), s;
  }
  _addConnection(e, t) {
    K.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`), this._connections.has(e) || this._connections.set(e, []), this._connections.get(e).push(t);
  }
  _removeConnection(e) {
    const t = this._connections.get(e.peer);
    if (t) {
      const n = t.indexOf(e);
      n !== -1 && t.splice(n, 1);
    }
    this._lostMessages.delete(e.connectionId);
  }
  getConnection(e, t) {
    const n = this._connections.get(e);
    if (!n) return null;
    for (const s of n) if (s.connectionId === t) return s;
    return null;
  }
  _delayedAbort(e, t) {
    setTimeout(() => {
      this._abort(e, t);
    }, 0);
  }
  _abort(e, t) {
    K.error("Aborting!"), this.emitError(e, t), this._lastServerId ? this.disconnect() : this.destroy();
  }
  destroy() {
    this.destroyed || (K.log(`Destroy peer with ID:${this.id}`), this.disconnect(), this._cleanup(), this._destroyed = true, this.emit("close"));
  }
  _cleanup() {
    for (const e of this._connections.keys()) this._cleanupPeer(e), this._connections.delete(e);
    this.socket.removeAllListeners();
  }
  _cleanupPeer(e) {
    const t = this._connections.get(e);
    if (t) for (const n of t) n.close();
  }
  disconnect() {
    if (this.disconnected) return;
    const e = this.id;
    K.log(`Disconnect peer with ID:${e}`), this._disconnected = true, this._open = false, this.socket.close(), this._lastServerId = e, this._id = null, this.emit("disconnected", e);
  }
  reconnect() {
    if (this.disconnected && !this.destroyed) K.log(`Attempting reconnection to server with ID ${this._lastServerId}`), this._disconnected = false, this._initialize(this._lastServerId);
    else {
      if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
      if (!this.disconnected && !this.open) K.error("In a hurry? We're still trying to make the initial connection!");
      else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);
    }
  }
  listAllPeers(e = (t) => {
  }) {
    this._api.listAllPeers().then((t) => e(t)).catch((t) => this._abort(ge.ServerError, t));
  }
}
class oc extends Qo {
  constructor() {
    super(), this.connections = /* @__PURE__ */ new Map(), this.prefix = "boxel-3d";
  }
  open(e) {
    e == null && (e = Xn.generateUUID()), e = (this.prefix + "-" + e).toLowerCase(), this.peer && this.peer.destroy(), this.peer = new ss(e), this.addPeerListeners(this.peer);
  }
  connect(e, t) {
    e = (this.prefix + "-" + e).toLowerCase();
    var n = this.peer.connect(e, t);
    this.addConnectionListeners(n), this.dispatchEvent({ type: "connection_start", connection: n }), this.connections.clear();
  }
  disconnect() {
    this.peer.disconnect();
  }
  destroy() {
    this.peer.destroy();
  }
  addPeerListeners(e) {
    e.on("open", function(t) {
      this.dispatchEvent({ type: "peer_open", id: t });
    }.bind(this)), e.on("connection", function(t) {
      this.addConnectionListeners(t), this.dispatchEvent({ type: "peer_connection", connection: t });
    }.bind(this)), e.on("close", function() {
      this.connections.clear(), this.dispatchEvent({ type: "peer_close", target: this });
    }.bind(this)), e.on("disconnected", function() {
      this.dispatchEvent({ type: "peer_disconnected" });
    }.bind(this)), e.on("error", function(t) {
      this.dispatchEvent({ type: "peer_error", error: t });
    }.bind(this));
  }
  addConnectionListeners(e) {
    e.on("open", function() {
      this.connections.set(e.peer, e), this.dispatchEvent({ type: "connection_open", connection: e });
    }.bind(this)), e.on("close", function() {
      this.connections.delete(e.peer), this.dispatchEvent({ type: "connection_close", connection: e });
    }.bind(this)), e.on("data", function(t) {
      this.dispatchEvent({ type: "connection_data", connection: e, data: t });
    }.bind(this)), e.on("error", function(t) {
      this.dispatchEvent({ type: "connection_error", connection: e, error: t });
    });
  }
  on(e, t) {
    this.addEventListener(e, t);
  }
  off(e, t) {
    this.removeEventListener(e, t);
  }
  isOnline() {
    return this.peer != null && this.peer.open == true;
  }
}
class uc {
  constructor() {
    this.window = window, this.document = document, this.BOX_SIZE = 16, this.screenWidth = this.window.innerWidth, this.screenHeight = this.window.innerHeight, this.engine = Q.Engine.create(), this.util = new Nt(), this.state = "home", this.animation = new fu(), this.storage = new nu(), this.collision = new ju(), this.player = new Jn({ x: 0, y: 0, z: 0 }), this.play = false, this.fov = 75, this.scene = new ea(), this.mouse = new _l(), this.window.Matter = { Composite: Q.Composite, Bodies: Q.Bodies, Body: Q.Body }, this.timer = new pu(), this.interval = new Bu(), this.then = (/* @__PURE__ */ new Date()).getTime(), this.now = this.then, this.delta = 0, this.assets = new Iu(), this.level = new Sl(), this.levelHistory = new Cl(), this.scene.add(this.level), this.camera = new Jr(this.fov, this.screenWidth / this.screenHeight, 1, 2e3), this.camera.tilt = 0, this.camera.position.x = 0, this.camera.position.y = 0, this.camera.position.zDefault = 180, this.camera.position.z = this.camera.position.zDefault, this.light = new Ko("#ffffff", "#000000", 1 * Math.PI), this.light.position.set(0.25, 0.5, 1), this.scene.add(this.light), this.background = new Fu(), this.scene.add(this.background), this.network = new oc(), this.multiplayer = new Bl(this.network), this.scene.add(this.multiplayer.players);
  }
  async init(e, t = function() {
  }) {
    fetch("../manifest.json").then((n) => n.json()).then((n) => this.version = n.version), this.graphics = new Nu(e), this.graphics.setCamera(this.camera), this.graphics.setScene(this.scene), this.graphics.setSelectedObjects([this.level]), this.levelEditor = new Dl(this.camera, e), this.scene.add(this.levelEditor.controlsTransform.getHelper()), this.canvas = e, this.canvas.classList.add("hidden"), this.canvas.addEventListener("contextmenu", function(n) {
      n.preventDefault();
    }, false), this.canvas.addEventListener("pointerdown", function(n) {
      this.mouse.mouseDown(n, this);
    }.bind(this), false), this.canvas.addEventListener("pointermove", function(n) {
      this.mouse.mouseMove(n, this);
    }.bind(this), false), this.canvas.addEventListener("pointerup", function(n) {
      this.mouse.mouseUp(n, this);
    }.bind(this), false), this.canvas.addEventListener("wheel", function(n) {
      this.mouse.wheel(n, this);
    }.bind(this), false), this.window.addEventListener("resize", function(n) {
      this.resizeWindow(n, this);
    }.bind(this)), Q.Events.on(this.engine, "collisionStart", function(n) {
      this.collision.checkPlayerCollision(n, this);
    }.bind(this)), this.assets.load(function() {
      this.load(t), this.updateSettings(null, this);
    }.bind(this));
  }
  load(e = function() {
  }) {
    var t = app.storage.getSettings(app);
    this.assets.audio.play(t.music, { queue: true }), this.background.setTarget(this.player), this.background.init(), this.resizeWindow(null, this), this.interval.add((n) => this.updateEngine(n), 1e3 / 60), this.interval.add((n) => this.updateRender(n)), this.interval.add((n) => this.updateNetwork(n), 1e3 / 8), this.multiplayer.setTick(8), this.interval.start(), e();
  }
  updateEngine({ delay: e }) {
    this.play == true && (this.player.updateControls(), this.player.updateForce(), this.player.renderSpeed(this), this.player.updateRope(), Q.Engine.update(this.engine, e));
  }
  updateRender({ delta: e, alpha: t }) {
    this.play == true && (this.updateChildren(e, t), this.updateCamera(this), this.timer.render(), this.background.update(e, t, app.motion == false), this.animation.update(e, t), this.graphics.update(e)), this.multiplayer.render(e, t);
  }
  updateChildren(e, t) {
    for (var n = this.level.children.length - 1; n >= 0; ) {
      var s = this.level.children[n];
      s.body != null && s.isFrozen() == false && s.update(e, t), n--;
    }
  }
  updateNetwork({ delta: e, alpha: t }) {
    this.multiplayer.update(e, t);
  }
  resizeWindow(e, t = app) {
    var n = t.window.innerWidth, s = t.window.innerHeight;
    t.camera.aspect = n / s, t.camera.updateProjectionMatrix(), t.graphics.setSize(n, s);
  }
  resetScene(e = app) {
    app.camera.position.z = app.camera.position.zDefault, e.level.removeParticles(e), e.level.resetLevel(), e.updateRender({ delta: 0, alpha: 0 }, 0), window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  updateCamera(e) {
    e.camera.position.x = e.player.position.x, e.camera.position.y = e.player.position.y + e.camera.tilt;
  }
  updateSettings(e, t = app) {
    var n = t.storage.getSettings(t);
    e == null && (e = n), Object.keys(n).forEach(function(s) {
      e[s] == null && (e[s] = n[s]);
    }), t.assets.audio.setMasterVolume(e.volume, "master"), t.assets.audio.setMasterVolume(e.volumeEffects, "effects"), t.assets.audio.setMasterVolume(e.volumeMusic, "music"), t.updateQuality(e.quality, t), t.mouse.setSnap(e.snap), t.player.setSkin(e.skin, t), t.player.setInputBuffer(e.buffer, t), t.storage.setSettings(e), t.updateCameraMotion(e.motion, t), window.dispatchEvent(new CustomEvent("updateStatsVisibility")), window.dispatchEvent(new CustomEvent("updateScale", { detail: e.scale }));
  }
  updateGravity(e) {
    var t = this.util.getVectorFromAngle(e), n = app.engine.world.gravity, s = 1;
    n.x = t.x, n.y = t.y, e != null && app.motion == true ? (e *= -1, e < 0 && (app.camera.rotation.z = (app.camera.rotation.z - Math.PI * 2) % (Math.PI * 2)), s = Math.abs((e + Math.PI) % Math.PI) / (Math.PI / 2) + 1, app.animation.tween({ object: app.camera.rotation, to: { z: e }, duration: 250 }).start(), app.background.animateScale(s)) : (app.camera.rotation.z = 0, app.background.animateScale(1));
  }
  updateQuality(e, t = app) {
    e <= 0 && (e = 1), t.graphics.setPixelRatio(t.window.devicePixelRatio / (10 / e));
  }
  updateCameraMotion(e, t = app) {
    t.motion = e;
  }
  exitCampaign() {
    app.play = false, app.resetScene(app), app.level.clearLevel(app), app.player.removeCheckpoint(), app.player.setPosition({ x: 0, y: 0, z: 0 }), window.dispatchEvent(new CustomEvent("setPage", { detail: "level-picker" })), window.dispatchEvent(new CustomEvent("closePopup"));
  }
  startLevel() {
    app.play = true, app.timer.start(), this.assets.audio.play("jump");
  }
  async playLevel(e) {
    if (e.json == null) {
      e.path == null && (e.path = "../json/levels/" + e.title + ".json");
      try {
        const u = await fetch(e.path);
        e.json = await u.json();
      } catch (u) {
        console.error(u);
      }
    }
    if (e.json) {
      var t = app.storage.getSettings(app), n = e.json.name, s = app.level.getDescriptionByTitle(n), i = app.level.getAuthorByTitle(n), a = app.level.getTheme(e.json.theme);
      a == null && (a = app.level.getPackTheme(n)), (t.theme == "origin" || a == null) && (a = app.level.getTheme("classic")), app.level.entityFactory.color = a.color, a.fog ? (app.graphics.fog.color.set(a.fog.color), app.graphics.fog.near = a.fog.near || 0.01, app.graphics.fog.far = a.fog.far || 240) : (app.graphics.fog.color.set("#ffffff"), app.graphics.fog.near = app.graphics.fog.far = 9999), app.background.setTheme(a.model), app.updateGravity(), app.play = true, app.timer.reset(), app.level.clearLevel(app), app.level.importFromJSON(e.json, app), app.level.publishedFileId = e.publishedFileId, app.background.visible = true, app.startLevel(), app.resetScene(), window.dispatchEvent(new CustomEvent("levelStart", { detail: { title: n, description: s } })), setTimeout(function() {
        i && window.dispatchEvent(new CustomEvent("setCredit", { detail: { text: "Level by " + i } }));
      }, 500);
    }
    return e.json;
  }
  pauseLevel() {
    app.timer.pause(), app.play = false;
  }
  resumeLevel() {
    app.timer.start(), app.play = true, window.dispatchEvent(new CustomEvent("closePopup"));
  }
  showCanvas() {
    app.canvas.classList.remove("hidden");
  }
  hideCanvas() {
    app.canvas.classList.add("hidden");
  }
}
const lc = { key: 0, src: "../svg/grow.svg" }, cc = { key: 1, src: "../svg/shrink.svg" }, dc = { __name: "OriginButtonFullscreen", setup(f) {
  const e = new Nt(), t = W(false);
  document.addEventListener("fullscreenchange", function() {
    t.value = e.isFullscreen();
  });
  function n() {
    if (e.isExtension() && window.location.href.includes("?tab=true") == false) {
      e.openLink(window.location.href + "?tab=true");
      return;
    }
    e.isElectronApp() ? window.electron.toggleFullScreen() : e.isFullscreen() ? document.exitFullscreen() : document.body.requestFullscreen();
  }
  return (s, i) => A(e).isNativeApp() == false ? (I(), z("a", { key: 0, class: "button top-right four", onClick: n, title: "Fullscreen (F11)" }, [t.value == false ? (I(), z("img", lc)) : (I(), z("img", cc))])) : Y("", true);
} }, Bi = { __name: "OriginButtonSettings", setup(f) {
  function e() {
    var n = app.storage.getSettings(app), s = [{ label: "Master Volume", name: "volume", type: "range", min: 0, max: 1, step: 0.1, value: n.volume, callback: function(i) {
      t("volume", i.target.value);
    } }, { label: "Graphic Quality", name: "quality", type: "range", min: 2, max: 10, value: n.quality, callback: function(i) {
      t("quality", parseInt(i.target.value));
    } }, { label: "Camera Motion", name: "motion", type: "range", min: 0, max: 1, value: n.motion == true ? 1 : 0, callback: function(i) {
      t("motion", i.target.value == "1");
    } }, { label: "Show FPS", name: "stats", type: "range", min: 0, max: 1, value: n.stats == true ? 1 : 0, callback: function(i) {
      t("stats", i.target.value == "1");
    } }, { label: "New UI", name: "theme", type: "range", min: 0, max: 1, value: n.theme == "bubble" ? 1 : 0, callback: function(i) {
      t("theme", i.target.value == "1" ? "bubble" : "origin"), window.dispatchEvent(new CustomEvent("setTheme"));
    } }];
    app.state == "level-manager" || app.state == "level-editor" ? s.push({ label: "Editor Snap", name: "snap", type: "range", min: 0, max: 16, step: 4, value: n.snap, callback: function(i) {
      var a = Number(i.target.value);
      a == 0 && (a = 1), i.target.title = a, t("snap", a);
    } }) : app.state == "campaign" && (app.timer.pause(), app.play = false), s.push({ type: "button", value: "Close", callback: function(i) {
      app.state == "campaign" && app.resumeLevel(), window.dispatchEvent(new CustomEvent("closePopup"));
    } }), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: '<img src="../svg/gear.svg">', inputs: s } }));
  }
  function t(n, s) {
    var i = app.storage.getSettings(app);
    i[n] = s, app.updateSettings(i);
  }
  return (n, s) => (I(), z("a", { onClick: e, title: "Settings" }, s[0] || (s[0] = [E("img", { src: "../svg/gear.svg" }, null, -1)])));
} }, fc = { class: "home dashboard" }, pc = { class: "wrapper fade-in" }, hc = { class: "message-bar" }, mc = { class: "message" }, vc = ["innerHTML"], gc = { class: "buttons" }, bc = { __name: "OriginPageHome", setup(f) {
  var e = W(), t = W(), n = W("You are currently using the old UI");
  async function s() {
    var o = await fetch("../manifest.json"), r = await o.json();
    e.value = r, t.value = r.version;
  }
  function i() {
    window.location.href = "../index.html";
  }
  function a() {
    var o = [{ value: "Backup to file", type: "button", style: "width: 100%", callback: app.storage.backupToFile }, { value: "Restore from file", type: "button", style: "width: 100%", callback: app.storage.restoreFromFile }, { value: "Close", type: "button" }];
    window.chrome?.storage && o.unshift({ value: "Backup to Google", type: "button", style: "width: 100%", callback: app.storage.backupToChrome }, { value: "Restore from Google", type: "button", style: "width: 100%", callback: app.storage.restoreFromChrome }), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: '<img src="../svg/cloud-check.svg">', inputs: o } }));
  }
  async function u() {
    const o = await fetch("../json/changelog.json").then(function(v) {
      if (v.ok) return v.json();
      throw new Error("Something went wrong");
    }).then(function(v) {
      return v;
    }.bind(this)).catch(function(v) {
      console.error(v);
    });
    for (var r = "", d = o.length - 1; d >= 0; d--) {
      var h = o[d];
      r += "v" + h.version + `
`, h.revisions.forEach(function(v) {
        r += "- " + v + `
`;
      }), r += `
`;
    }
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: '<div style="text-align: left;">' + r + "</div>", inputs: [{ type: "button", value: "Close" }] } }));
  }
  function c(o) {
    var r = document.querySelector(o);
    r.focus();
  }
  function p() {
    window.addEventListener("keydown", m);
  }
  function l() {
    window.removeEventListener("keydown", m);
  }
  function m(o) {
  }
  return pe(function() {
    s(), c(".focus"), p(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "home" }));
  }), he(function() {
    l();
  }), (o, r) => (I(), z("div", fc, [r[11] || (r[11] = E("div", { class: "background-cubes" }, null, -1)), E("a", { class: "version fade-in", onClick: u }, "v" + G(A(t)), 1), E("div", pc, [r[10] || (r[10] = E("img", { src: "../svg/logo-white.svg", class: "logo" }, null, -1)), E("div", hc, [E("div", mc, [r[3] || (r[3] = E("img", { class: "google-icon", src: "../svg/light.svg" }, null, -1)), r[4] || (r[4] = Ee()), E("span", { class: "message-text", innerHTML: A(n) }, null, 8, vc)])]), E("div", gc, [ae(dc, { class: "button top-right" }), E("a", { class: "button top-right three", onClick: i, title: "Go back" }, r[5] || (r[5] = [E("img", { src: "../svg/back.svg" }, null, -1)])), E("a", { class: "button top-right two", onClick: a, title: "Account" }, r[6] || (r[6] = [E("img", { src: "../svg/cloud-check.svg" }, null, -1)])), ae(Bi, { class: "button top-right" }), E("a", { class: "button", onClick: r[0] || (r[0] = (d) => o.$emit("setPage", "level-manager")), tabindex: "0" }, r[7] || (r[7] = [E("span", null, "Level Maker", -1), Ee(), E("img", { src: "../svg/pencil.svg" }, null, -1)])), E("a", { class: "button", onClick: r[1] || (r[1] = (d) => o.$emit("setPage", "skins")), tabindex: "0" }, r[8] || (r[8] = [E("span", null, "Skins", -1), Ee(), E("img", { src: "../svg/smile.svg" }, null, -1)])), E("a", { class: "button focus", onClick: r[2] || (r[2] = (d) => o.$emit("setPage", "level-picker")), tabindex: "0" }, r[9] || (r[9] = [E("span", null, "Play", -1), Ee(), E("img", { src: "../svg/play.svg" }, null, -1)]))])])]));
} }, yc = { class: "level-picker dashboard" }, xc = { class: "wrapper fade-in" }, wc = { class: "levels" }, Sc = { class: "list" }, Cc = { key: 0 }, _c = { key: 1, class: "buttons" }, Ec = ["href", "target"], kc = ["src"], Tc = ["title", "onClick"], Pc = { key: 0, class: "index" }, Mc = { key: 1, class: "score" }, Lc = { class: "title" }, Oc = { __name: "OriginPageLevelPicker", emits: ["setPage"], setup(f, { emit: e }) {
  var t = app.storage.getScores(), n = app.storage.getSettings(), s = parseInt(n.progress), i = m(s - 1), a = e;
  function u() {
    window.addEventListener("keydown", h);
  }
  function c() {
    window.removeEventListener("keydown", h);
  }
  async function p(v) {
    await app.playLevel({ ...v }), a("setPage", "campaign"), n.progress = app.level.getLevelIndex(v.title) + 1, app.updateSettings(n);
  }
  function l(v) {
    return t[v];
  }
  function m(v) {
    var g, x = 0, w = {};
    return Fe.packs.forEach(function(y) {
      y.levels.forEach(function(b) {
        w = b, v == x && (g = b.title), x++;
      });
    }), g == null && (g = w.title), g;
  }
  function o() {
    var v = document.querySelector("[title='" + i + "']");
    v && (v.focus(), v.scrollIntoView({ behavior: "smooth", block: "center" }));
  }
  function r() {
    a("setPage", "home");
  }
  function d(v) {
    i = v.target.getAttribute("title");
  }
  function h(v) {
    var g = ["Space", "Enter", "ArrowUp", "KeyW"];
    if (g.indexOf(v.code) > -1) {
      v.preventDefault();
      var x = document.querySelector("[title='" + i + "']");
      x == document.activeElement && x.click();
    }
    (v.code == "Escape" || v.code == "KeyE") && (v.preventDefault(), r());
  }
  return pe(function() {
    o(), u(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "level-picker" }));
  }), he(function() {
    c();
  }), (v, g) => (I(), z("div", yc, [g[4] || (g[4] = E("div", { class: "background-cubes" }, null, -1)), E("div", xc, [g[3] || (g[3] = E("h1", null, [Ee("Level"), E("strong", null, "Packs")], -1)), E("div", { class: "buttons" }, [E("a", { class: "button top-left", onClick: r, title: "Exit to home (ESC)" }, g[1] || (g[1] = [E("img", { src: "../svg/home.svg" }, null, -1)]))]), E("div", wc, [E("div", Sc, [(I(true), z(me, null, Oe(A(Fe).packs, (x, w) => (I(), z(me, null, [E("h2", null, G(x.title), 1), x.description ? (I(), z("p", Cc, G(x.description), 1)) : Y("", true), x.links ? (I(), z("div", _c, [(I(true), z(me, null, Oe(x.links, (y) => (I(), z("a", { class: ee(["button", y.class]), href: y.url, target: y.target }, [E("span", null, G(y.text), 1), g[2] || (g[2] = Ee()), y.icon ? (I(), z("img", { key: 0, src: "./" + y.icon }, null, 8, kc)) : Y("", true)], 10, Ec))), 256))])) : Y("", true), (I(true), z(me, null, Oe(x.levels, (y, b) => (I(), z("div", { class: ee(["level", { completed: l(y.publishedFileId || y.title) }]), title: y.title, onClick: (S) => p(y), tabindex: "0", onFocus: g[0] || (g[0] = (S) => d(S)) }, [y.label ? (I(), z("span", Pc, G(y.label), 1)) : Y("", true), l(y.publishedFileId || y.title) ? (I(), z("span", Mc, G(l(y.publishedFileId || y.title)), 1)) : Y("", true), E("span", Lc, G(y.description), 1)], 42, Tc))), 256))], 64))), 256))])])])]));
} }, Ac = { class: "wasd" }, Rc = { class: "row" }, Ja = { __name: "OriginControls", setup(f) {
  var e = W(app.storage.getSettings()), t = W(false), n = W(e.value.controls.reverse), s = W(true), i = W({});
  function a() {
    window.addEventListener("keydown", c), window.addEventListener("keyup", p), window.addEventListener("setMode", m), window.addEventListener("updateStatsVisibility", o), window.addEventListener("updateControls", r);
  }
  function u() {
    window.removeEventListener("keydown", c), window.removeEventListener("keyup", p), window.removeEventListener("setMode", m), window.removeEventListener("updateStatsVisibility", o), window.removeEventListener("updateControls", r);
  }
  function c(d) {
    d.isTrusted != true && (s.value = false), d.target.value == null && (i.value[d.code] = true);
  }
  function p(d) {
    i.value[d.code] = false;
  }
  function l(d) {
    window.dispatchEvent(new KeyboardEvent(d.type, { code: d.code })), i.value[d.code] = d.type == "keydown";
  }
  function m(d) {
    var h = d.detail;
    h == "control" ? t.value = true : t.value = false;
  }
  function o() {
    e.value = app.storage.getSettings();
  }
  function r() {
    o(), n.value = e.value.controls.reverse;
  }
  return pe(function() {
    a();
  }), he(function() {
    u();
  }), (d, h) => A(t) ? (I(), z("div", { key: 0, class: ee(["controls", { desktop: A(s), reverse: A(n) }]) }, [E("div", Ac, [E("div", Rc, [E("div", { class: ee(["key key-up fade-in", { active: A(i).KeyW || A(i).ArrowUp || A(i).Space }]), onTouchstart: h[0] || (h[0] = Rt((v) => l({ type: "keydown", code: "KeyW" }), ["prevent"])), onTouchend: h[1] || (h[1] = (v) => l({ type: "keyup", code: "KeyW" })) }, h[6] || (h[6] = [E("span", { class: "material-symbols-rounded" }, "shift", -1)]), 34), E("div", { class: ee(["key key-left fade-in", { active: A(i).KeyA || A(i).ArrowLeft }]), onTouchstart: h[2] || (h[2] = Rt((v) => l({ type: "keydown", code: "KeyA" }), ["prevent"])), onTouchend: h[3] || (h[3] = (v) => l({ type: "keyup", code: "KeyA" })) }, h[7] || (h[7] = [E("span", { class: "material-symbols-rounded" }, "fast_rewind", -1)]), 34), E("div", { class: ee(["key key-right fade-in", { active: A(i).KeyD || A(i).ArrowRight }]), onTouchstart: h[4] || (h[4] = Rt((v) => l({ type: "keydown", code: "KeyD" }), ["prevent"])), onTouchend: h[5] || (h[5] = (v) => l({ type: "keyup", code: "KeyD" })) }, h[8] || (h[8] = [E("span", { class: "material-symbols-rounded" }, "fast_forward", -1)]), 34)])])], 2)) : Y("", true);
} }, Dc = { key: 0, class: "stats" }, Ic = { class: "fps" }, Bc = { __name: "OriginStats", setup(f) {
  var e = W(false), t = Date.now(), n = false, s = 0, i = W(0);
  function a() {
    window.addEventListener("updateStatsVisibility", m);
  }
  function u() {
    window.removeEventListener("updateStatsVisibility", m);
  }
  function c() {
    if (n == true) {
      requestAnimationFrame(function() {
        c();
      });
      var o = Date.now();
      s++, o > t + 1e3 && (i.value = Math.round(s * 1e3 / (o - t)), t = o, s = 0);
    }
  }
  function p() {
    n = true, c();
  }
  function l() {
    n = false;
  }
  function m() {
    var o = app.storage.getSettings(app);
    e.value = o.stats;
  }
  return pe(function() {
    p(), m(), a();
  }), he(function() {
    l(), u();
  }), (o, r) => A(e) ? (I(), z("div", Dc, [E("span", Ic, G(A(i)) + " FPS", 1)])) : Y("", true);
} }, zc = { class: "campaign dashboard" }, $c = ["innerHTML"], Nc = { class: "buttons" }, jc = { __name: "OriginPageCampaign", setup(f) {
  var e = W(""), t = W(true);
  function n() {
    window.addEventListener("setCredit", i), window.addEventListener("popupOpened", u), window.addEventListener("popupClosed", c), window.addEventListener("keydown", p), window.addEventListener("keyup", l);
  }
  function s() {
    window.removeEventListener("setCredit", i), window.removeEventListener("popupOpened", u), window.removeEventListener("popupClosed", c), window.removeEventListener("keydown", p), window.removeEventListener("keyup", l);
  }
  function i(m) {
    m.detail.text && (e.value = m.detail.text);
  }
  function a() {
    app.pauseLevel(), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "Paused", inputs: [{ value: "Exit (E)", type: "button", shortcut: "KeyE", callback: function(m) {
      app.exitCampaign();
    } }, { value: "Retry (R)", type: "button", shortcut: "KeyR", callback: function(m) {
      app.level.retryLevel();
    } }, { value: "Play", type: "button", shortcut: "Space", callback: function(m) {
      setTimeout(function() {
        app.resumeLevel();
      }, 100);
    } }] } }));
  }
  function u() {
    t.value = false;
  }
  function c() {
    t.value = true;
  }
  function p(m) {
    if (t.value == true) if (m.code == "Escape") m.preventDefault(), a();
    else if (m.code == "KeyE") app.exitCampaign();
    else if (m.code == "KeyR") app.level.retryLevel();
    else if (m.code == "KeyC") app.player.restart();
    else if (m.code == "KeyA" || m.code == "ArrowLeft") app.play == true && app.player.setControls("left", -1);
    else if (m.code == "KeyD" || m.code == "ArrowRight") app.play == true && app.player.setControls("right", 1);
    else {
      var o = ["Space", "Enter", "ArrowUp", "KeyW"];
      o.indexOf(m.code) > -1 && app.player.jump();
    }
  }
  function l(m) {
    m.code == "KeyA" || m.code == "ArrowLeft" ? app.player.setControls("left", 0) : (m.code == "KeyD" || m.code == "ArrowRight") && app.player.setControls("right", 0);
  }
  return pe(function() {
    app.showCanvas(), n(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "campaign" }));
  }), he(function() {
    app.hideCanvas(), s();
  }), (m, o) => (I(), z("div", zc, [(I(), be(na, { to: "body" }, [o[0] || (o[0] = E("div", { class: "background-cubes" }, null, -1))])), o[2] || (o[2] = E("div", { id: "timer" }, null, -1)), A(e) ? (I(), z("div", { key: 0, id: "credit", class: "fade-in", innerHTML: A(e) }, null, 8, $c)) : Y("", true), o[3] || (o[3] = E("div", { id: "speedometer" }, [E("span", { id: "speed" })], -1)), E("div", Nc, [E("a", { class: "button top-left", onClick: a, title: "Pause (ESC)" }, o[1] || (o[1] = [E("img", { src: "../svg/pause.svg" }, null, -1)])), ae(Bi, { class: "button top-right" })]), ae(Bc), ae(Ja)]));
} }, Fc = { class: "level-manager" }, Uc = { class: "row top" }, qc = { class: "col" }, Hc = { class: "item", title: "Download level" }, Vc = { class: "row left" }, Gc = { class: "col" }, Wc = { class: "list-item" }, Xc = ["value", "onInput"], Zc = ["onClick"], Yc = ["onClick"], Qc = ["onClick"], Kc = { __name: "OriginPageLevelManager", emits: ["setPage"], setup(f, { emit: e }) {
  var t = W([]), n = e;
  function s() {
    window.addEventListener("keydown", d);
  }
  function i() {
    window.removeEventListener("keydown", d);
  }
  function a() {
    t.value = app.storage.getListOfLevels(), t.value.length < 1 && u();
  }
  function u() {
    var h = {}, v = null;
    app.level.createNewLevel(app), h = app.level.exportToJSON(app), v = app.storage.setLevelData(null, h), t.value.push({ key: v, level: h });
  }
  function c(h) {
    var v = h.target.files[0];
    if (v) {
      var g = new FileReader();
      g.onload = function() {
        var x = JSON.parse(g.result), w = app.level.getTheme(x.theme) || {};
        app.level.clearLevel(app), app.level.key = null, app.background.visible = false, app.level.entityFactory.color = w.color || "#620460", app.background.setTheme(w.model || "background-classic"), app.level.clearLevel(app), app.level.importFromJSON(x, app), app.levelHistory.save("Downloaded level", app), app.levelHistory.save("Loaded level", app), app.resetScene(app), app.levelEditor.controlsOrbit.enabled = true, app.levelEditor.controlsOrbit.reset(), app.graphics.render(), n("setPage", "level-editor");
      }, g.readAsText(v);
    }
  }
  function p(h) {
    var v = app.storage.getLevelData(h.key), g = app.level.getTheme(v.theme) || {}, x = app.storage.getSettings(app);
    v.name = h.level.name, app.level.entityFactory.color = g.color || "#620460", app.background.setTheme(g.model || "background-classic"), app.level.clearLevel(app), app.level.importFromJSON(v, app), app.level.key = h.key, app.level.updateHelpers(), app.updateSettings(x, app), app.background.visible = false, app.levelHistory.save("Edited level", app), app.resetScene(app), app.levelEditor.controlsOrbit.enabled = true, app.levelEditor.controlsOrbit.reset(), app.graphics.render(), n("setPage", "level-editor");
  }
  function l(h, v) {
    h.level.name = v.target.value, app.storage.updateLevelDataName(h.key, h.level.name);
  }
  function m(h) {
    p(h), app.resetScene(app), app.storage.saveLevelToFile(), n("setPage", "level-manager");
  }
  function o(h) {
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "Are you sure you want to <em>delete</em> this level?", inputs: [{ value: "Yes", type: "button", callback: function() {
      var v = t.value.indexOf(h);
      t.value.splice(v, 1), app.storage.removeLevelData(h.key), window.dispatchEvent(new CustomEvent("closePopup"));
    } }, { value: "No", type: "button" }] } }));
  }
  function r() {
    n("setPage", "home"), window.dispatchEvent(new CustomEvent("setTheme"));
  }
  function d(h) {
    if (h.code == "Escape" || h.code == "KeyE") {
      if (h.target.value) return;
      h.preventDefault(), r();
    }
  }
  return pe(function() {
    a(), s(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "level-manager" }));
  }), he(function() {
    i();
  }), (h, v) => (I(), z("div", Fc, [E("div", Uc, [E("div", qc, [E("a", { class: "item", onClick: u, title: "Add level" }, v[0] || (v[0] = [E("img", { src: "../svg/add.svg" }, null, -1)])), E("label", Hc, [E("input", { onChange: c, class: "hidden", type: "file", accept: "application/JSON" }, null, 32), v[1] || (v[1] = E("img", { src: "../svg/download.svg" }, null, -1))]), E("a", { class: "item", onClick: r, title: "Exit level manager (ESC)" }, v[2] || (v[2] = [E("img", { src: "../svg/home.svg" }, null, -1)])), ae(Bi, { class: "item last" })])]), E("div", Vc, [E("div", Gc, [(I(true), z(me, null, Oe(A(t), (g, x) => (I(), z("div", Wc, [E("input", { type: "text", value: g.level.name, onInput: (w) => l(g, w) }, null, 40, Xc), E("a", { onClick: (w) => p(g), class: "item", title: "Edit level" }, v[3] || (v[3] = [E("img", { src: "../svg/pencil.svg" }, null, -1)]), 8, Zc), E("a", { onClick: (w) => m(g), class: "item", title: "Share level" }, v[4] || (v[4] = [E("img", { src: "../svg/upload.svg" }, null, -1)]), 8, Yc), E("a", { onClick: (w) => o(g), class: "item", title: "Delete level" }, v[5] || (v[5] = [E("img", { src: "../svg/trash.svg" }, null, -1)]), 8, Qc)]))), 256))])])]));
} }, Jc = { class: "skins dashboard" }, ed = { class: "wrapper fade-in" }, td = { class: "skin-group" }, id = ["id", "onClick"], nd = ["src"], sd = { class: "title" }, rd = { __name: "OriginPageSkins", emits: ["setPage"], setup(f, { emit: e }) {
  var t = e;
  function n() {
    window.addEventListener("keydown", m);
  }
  function s() {
    window.removeEventListener("keydown", m);
  }
  var i = W(app.storage.getSettings());
  function a(o, r) {
    i.value.skin = { id: o.id, title: o.title, url: o.url }, o.id == 680 ? window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "Custom Skin", inputs: [{ class: "button", type: "file", style: "width: 100%", accept: "image/png, image/jpeg", callback: u }, { type: "button", value: "Close" }] } })) : (app.player.setSkin({ id: o.id, url: o.url }), app.updateSettings(i.value)), p(r.target);
  }
  function u(o) {
    var r = o.target.files[0];
    if (r) {
      var d = new FileReader();
      d.onloadend = function() {
        var h = { id: 680, title: r.name, url: d.result };
        i.value.skin = h, app.player.setSkin(h, app), app.updateSettings(i.value), window.dispatchEvent(new CustomEvent("closePopup"));
      }, d.readAsDataURL(r);
    }
  }
  function c(o) {
    return o.id == i.value.skin.id;
  }
  function p(o) {
    o == null && (o = document.querySelector("[class*='selected']")), o.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  function l() {
    t("setPage", "home");
  }
  function m(o) {
    (o.code == "Escape" || o.code == "KeyE") && (o.preventDefault(), l());
  }
  return pe(function() {
    p(), n(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "skins" }));
  }), he(function() {
    s();
  }), (o, r) => (I(), z("div", Jc, [r[2] || (r[2] = E("div", { class: "background-cubes" }, null, -1)), E("div", ed, [r[1] || (r[1] = E("h1", null, [Ee("My"), E("strong", null, "Skins")], -1)), E("div", td, [(I(true), z(me, null, Oe(A(Kt), (d, h) => (I(), z("div", { class: ee(["skin", { selected: c(d) }]), id: d.id, key: h, onClick: (v) => a(d, v) }, [E("img", { src: d.url, class: "image" }, null, 8, nd), E("div", sd, G(d.title), 1)], 10, id))), 128))]), E("div", { class: "buttons" }, [E("a", { class: "button top-left", onClick: l, title: "Exit to home (ESC)" }, r[0] || (r[0] = [E("img", { src: "../svg/home.svg" }, null, -1)]))])])]));
} }, ad = { key: 0, class: "background-cubes" }, od = { class: "level-editor" }, ud = { class: "row top" }, ld = { class: "col options-level" }, cd = { key: 0 }, dd = ["title", "onClick"], fd = ["src"], pd = { key: 0, class: "row left" }, hd = { class: "col object-type" }, md = { key: 0, class: "col object-options" }, vd = { class: "slider" }, gd = ["value"], bd = { class: "item" }, yd = ["value"], xd = { __name: "OriginPageLevelEditor", emits: ["setPage"], setup(f, { emit: e }) {
  var t = W("draw"), n = W(app.levelEditor.selectedObjectType || "cube"), s = W(true), i = W(), a = W(app.level.theme), u = W(false), c = W(app.levelEditor.controlsTransform), p = W(true);
  function l() {
    window.addEventListener("exitLevel", _), window.addEventListener("setSelectedObject", M), window.addEventListener("selectObjectType", P), window.addEventListener("setTransformMode", T), window.addEventListener("popupOpened", o), window.addEventListener("popupClosed", r), window.addEventListener("keydown", N), window.addEventListener("keyup", V);
  }
  function m() {
    window.removeEventListener("exitLevel", _), window.removeEventListener("setSelectedObject", M), window.removeEventListener("selectObjectType", P), window.removeEventListener("setTransformMode", T), window.removeEventListener("popupOpened", o), window.removeEventListener("popupClosed", r), window.removeEventListener("keydown", N), window.removeEventListener("keyup", V);
  }
  function o() {
    p.value = false;
  }
  function r() {
    p.value = true;
  }
  function d(q) {
    t.value = q, app.mouse.setMode(q);
  }
  function h() {
    app.levelEditor.exitLevel();
  }
  function v() {
    app.levelEditor.saveLevel();
  }
  function g() {
    app.pauseLevel(), app.storage.screenshot({ width: 1280, height: 720, save: true });
  }
  function x(q) {
    b(), app.level.deselectLevel(app), app.levelEditor.controlsTransform.detach();
    const R = app.level.getTheme(q);
    a.value = q, app.background.setTheme(R.model), app.level.entityFactory.color = R.color, app.level.theme = q;
    const U = app.level.exportToJSON(app);
    U.children.forEach((ie) => {
      ie.color && (ie.color = R.color);
    }), app.level.clearLevel(app), app.level.importFromJSON(U, app), app.levelHistory.save("Updated level theme", app), window.dispatchEvent(new CustomEvent("themeSelected", { detail: R }));
  }
  function w() {
    app.levelEditor.undo();
  }
  function y() {
    app.levelEditor.redo();
  }
  function b() {
    S(), app.levelEditor.rewind(), app.levelEditor.controlsOrbit.target.copy(app.player.position);
  }
  function S() {
    s.value = true, app.pauseLevel(), app.level.deselectLevel(app), app.levelEditor.controlsOrbit.enabled = true, app.levelEditor.controlsOrbit.reset(), app.levelEditor.controlsOrbit.target.copy(app.player.position), app.updateCamera(app), app.background.visible = false, window.dispatchEvent(new CustomEvent("setSelectedObject"));
  }
  function C() {
    s.value = false, app.background.visible = true, app.level.deselectLevel(app), app.levelEditor.controlsOrbit.enabled = false, app.levelEditor.controlsOrbit.reset(), app.levelEditor.controlsTransform.detach(), window.dispatchEvent(new CustomEvent("setSelectedObject")), app.startLevel();
  }
  function _() {
    s.value = true;
  }
  function P(q) {
    n.value = q.detail.type, app.levelEditor.selectObjectType(q.detail.type, q.detail.checkNull);
  }
  function M(q) {
    i.value = q.detail;
  }
  function k() {
    app.levelEditor.toggleSelectedObjectStaticState();
  }
  function T(q) {
    c.value.mode = q.detail, app.levelEditor.setMode(q.detail);
  }
  function L(q) {
    i.value.setFriction(q.target.value), app.levelHistory.save("Updated object properties", app);
  }
  function D(q) {
    i.value.setColors(q.target.value), app.levelHistory.save("Updated object properties", app);
  }
  function O() {
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: "Edit", inputs: [{ value: app.selectedObject.text, type: "text", callback: B }, { value: "Cancel", type: "button" }, { value: "Close", type: "button" }] } }));
  }
  function j() {
    app.levelEditor.duplicateSelectedObject(app.levelEditor.controlsTransform.offset), M({ detail: app.selectedObject }), window.dispatchEvent(new CustomEvent("setSelectedObject", { detail: app.selectedObject }));
  }
  function $() {
    app.levelEditor.deleteSelectedObject();
  }
  function B(q) {
    app.selectedObject.text = q.target.value, app.levelHistory.save("Updated tip", app);
  }
  function N(q) {
    if (p.value == true) {
      var R = ["Space", "Enter", "ArrowUp", "KeyW"];
      if (app.play == true) if (q.code == "Escape" || q.code == "KeyE") q.preventDefault(), S();
      else if (q.code == "KeyA" || q.code == "ArrowLeft") app.player.setControls("left", -1);
      else if (q.code == "KeyD" || q.code == "ArrowRight") app.player.setControls("right", 1);
      else if (q.code == "KeyR") app.level.retryLevel();
      else if (q.code == "KeyC") app.player.restart();
      else {
        var R = ["Space", "Enter", "ArrowUp", "KeyW"];
        R.indexOf(q.code) > -1 && app.player.jump();
      }
      else q.code == "Digit0" ? app.levelEditor.resetZAxis() : q.code == "Escape" || q.code == "KeyE" ? (q.preventDefault(), h()) : q.code == "KeyD" ? j() : q.code == "KeyG" ? T({ detail: "translate" }) : q.code == "KeyR" ? (app.levelEditor.controlsTransform.mode == "rotate" && (app.levelEditor.controlsTransform.showAll = !app.levelEditor.controlsTransform.showAll), T({ detail: "rotate" })) : q.code == "KeyS" ? q.ctrlKey == true ? (q.preventDefault(), app.levelEditor.saveLevel()) : T({ detail: "scale" }) : q.code == "KeyT" ? T({ detail: "translate" }) : q.code == "KeyX" ? app.levelEditor.deleteSelectedObject() : q.code == "KeyZ" && (q.ctrlKey == true && q.shiftKey == false && app.levelEditor.undo(), q.ctrlKey == true && q.shiftKey == true && app.levelEditor.redo());
    }
  }
  function V(q) {
    q.code == "KeyA" || q.code == "ArrowLeft" ? app.player.setControls("left", 0) : (q.code == "KeyD" || q.code == "ArrowRight") && app.player.setControls("right", 0);
  }
  return pe(function() {
    app.canvas.classList.remove("hidden"), l(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "level-editor" }));
  }), he(function() {
    app.canvas.classList.add("hidden"), m();
  }), (q, R) => (I(), z(me, null, [(I(), be(na, { to: "body" }, [A(s) == false ? (I(), z("div", ad)) : Y("", true)])), E("div", od, [E("div", ud, [E("div", ld, [E("a", { class: ee(["item", { selected: A(t) == "draw" }]), onClick: R[0] || (R[0] = (U) => d("draw")), action: "draw", title: "Draw cubes" }, R[22] || (R[22] = [E("img", { src: "../svg/pencil.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(t) == "erase" }]), onClick: R[1] || (R[1] = (U) => d("erase")), action: "erase", title: "Erase cubes" }, R[23] || (R[23] = [E("img", { src: "../svg/eraser.svg" }, null, -1)]), 2), E("a", { class: "item", onClick: h, title: "Exit level editor (ESC)" }, R[24] || (R[24] = [E("img", { src: "../svg/home.svg" }, null, -1)])), E("a", { class: "item", onClick: v, title: "Save level (Ctrl + S)" }, R[25] || (R[25] = [E("img", { src: "../svg/save.svg" }, null, -1)])), E("a", { class: "item", onClick: g, title: "Save Screenshot" }, R[26] || (R[26] = [E("img", { src: "../svg/eye.svg" }, null, -1)])), E("a", { class: ee(["item", { selected: A(u) == true }]), onClick: R[2] || (R[2] = (U) => Bn(u) ? u.value = !A(u) : u = !A(u)) }, [R[27] || (R[27] = E("img", { src: "../svg/color.svg" }, null, -1)), A(u) == true ? (I(), z("ul", cd, [(I(true), z(me, null, Oe(A(wt), (U, ie) => (I(), z("li", null, [E("a", { class: ee(["item", { selected: A(a) == ie }]), title: ie, onClick: (ve) => x(ie) }, [E("img", { src: U.thumbnail }, null, 8, fd)], 10, dd)]))), 256))])) : Y("", true)], 2), E("a", { class: "item", onClick: w, title: "Undo edit (Ctrl + Z)" }, R[28] || (R[28] = [E("img", { src: "../svg/undo.svg" }, null, -1)])), E("a", { class: "item", onClick: y, title: "Redo edit (Ctrl + Shift + Z)" }, R[29] || (R[29] = [E("img", { src: "../svg/redo.svg" }, null, -1)])), E("a", { class: "item", onClick: b, title: "Restart level" }, R[30] || (R[30] = [E("img", { src: "../svg/rewind.svg" }, null, -1)])), E("a", { class: "item", onClick: S, title: "Pause level" }, R[31] || (R[31] = [E("img", { src: "../svg/pause.svg" }, null, -1)])), E("a", { class: "item", onClick: C, title: "Play level" }, R[32] || (R[32] = [E("img", { src: "../svg/play.svg" }, null, -1)])), ae(Bi, { class: "item last" })])]), A(t) == "draw" && A(s) == true ? (I(), z("div", pd, [E("div", hd, [E("a", { class: ee(["item", { selected: A(n) == "cube" }]), onClick: R[3] || (R[3] = (U) => P({ detail: { type: "cube" } })), title: "Basic cube" }, R[33] || (R[33] = [E("img", { src: "../svg/cube.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "tip" }]), onClick: R[4] || (R[4] = (U) => P({ detail: { type: "tip" } })), title: "Tip cube" }, R[34] || (R[34] = [E("img", { src: "../svg/tip.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "bounce" }]), onClick: R[5] || (R[5] = (U) => P({ detail: { type: "bounce" } })), title: "Bounce cube" }, R[35] || (R[35] = [E("img", { src: "../svg/bounce.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "checkpoint" }]), onClick: R[6] || (R[6] = (U) => P({ detail: { type: "checkpoint" } })), title: "Checkpoint cube" }, R[36] || (R[36] = [E("img", { src: "../svg/checkpoint.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "spike" }]), onClick: R[7] || (R[7] = (U) => P({ detail: { type: "spike" } })), title: "Spike cube" }, R[37] || (R[37] = [E("img", { src: "../svg/spike.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "resize" }]), onClick: R[8] || (R[8] = (U) => P({ detail: { type: "resize" } })), title: "Resize cube" }, R[38] || (R[38] = [E("img", { src: "../svg/grow.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "direction" }]), onClick: R[9] || (R[9] = (U) => P({ detail: { type: "direction" } })), title: "Direction cube" }, R[39] || (R[39] = [E("img", { src: "../svg/direction.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "gravity" }]), onClick: R[10] || (R[10] = (U) => P({ detail: { type: "gravity" } })), title: "Gravity cube" }, R[40] || (R[40] = [E("img", { src: "../svg/gravity.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "grapple" }]), onClick: R[11] || (R[11] = (U) => P({ detail: { type: "grapple" } })), title: "Grapple cube" }, R[41] || (R[41] = [E("img", { src: "../svg/grapple.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "finish" }]), onClick: R[12] || (R[12] = (U) => P({ detail: { type: "finish" } })), title: "Finish cube" }, R[42] || (R[42] = [E("img", { src: "../svg/finish.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "reset" }]), onClick: R[13] || (R[13] = (U) => P({ detail: { type: "reset" } })), title: "Reset cube" }, R[43] || (R[43] = [E("img", { src: "../svg/reset.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "control" }]), onClick: R[14] || (R[14] = (U) => P({ detail: { type: "control" } })), title: "Control cube" }, R[44] || (R[44] = [E("img", { src: "../svg/control.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "power" }]), onClick: R[15] || (R[15] = (U) => P({ detail: { type: "power" } })), title: "Power cube" }, R[45] || (R[45] = [E("img", { src: "../svg/power.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(n) == "teleport" }]), onClick: R[16] || (R[16] = (U) => P({ detail: { type: "teleport" } })), title: "Teleport cube" }, R[46] || (R[46] = [E("img", { src: "../svg/teleport.svg" }, null, -1)]), 2)]), A(i) != null ? (I(), z("div", md, [E("a", { class: ee(["item", { selected: A(c).mode == "translate" }]), onClick: R[17] || (R[17] = (U) => T({ detail: "translate" })), title: "Move (T or G)" }, R[47] || (R[47] = [E("img", { src: "../svg/move.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(c).mode == "scale" }]), onClick: R[18] || (R[18] = (U) => T({ detail: "scale" })), title: "Scale (S)" }, R[48] || (R[48] = [E("img", { src: "../svg/scale-out-x.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(c).mode == "rotate" }]), onClick: R[19] || (R[19] = (U) => {
    N({ code: "KeyR" });
  }), title: "Rotate (R)" }, R[49] || (R[49] = [E("img", { src: "../svg/rotate-clockwise.svg" }, null, -1)]), 2), E("a", { class: ee(["item", { selected: A(i).isStatic() }]), onClick: k, title: "Pin" }, R[50] || (R[50] = [E("img", { src: "../svg/pin.svg" }, null, -1)]), 2), E("div", { class: ee(["item", { disabled: A(i).isStatic() }]) }, [R[51] || (R[51] = E("a", { action: "friction", title: "Friction" }, [E("img", { src: "../svg/friction.svg" })], -1)), E("div", vd, [E("input", { name: "friction", type: "range", min: "0", max: "1", step: "0.25", value: A(i).body.friction, onChange: R[20] || (R[20] = (U) => L(U)) }, null, 40, gd)])], 2), E("a", { class: ee(["item", { disabled: A(i).text == null }]), onClick: O, title: "Text" }, R[52] || (R[52] = [E("img", { src: "../svg/type.svg" }, null, -1)]), 2), E("div", bd, [E("label", null, [R[53] || (R[53] = E("a", { action: "color", title: "Color" }, [E("img", { src: "../svg/color.svg" })], -1)), E("input", { name: "color", type: "color", style: "display: none;", value: A(i).color, onChange: R[21] || (R[21] = (U) => D(U)) }, null, 40, yd)])]), E("a", { class: "item", onClick: j, title: "Duplicate (D)" }, R[54] || (R[54] = [E("img", { src: "../svg/duplicate.svg" }, null, -1)])), E("a", { class: "item", onClick: $, title: "Delete (X)" }, R[55] || (R[55] = [E("img", { src: "../svg/trash.svg" }, null, -1)]))])) : Y("", true)])) : Y("", true), ae(Ja)])], 64));
} }, wd = { key: 0, class: "dialog" }, Sd = { class: "wrapper" }, Cd = ["innerHTML"], _d = ["innerHTML"], Ed = ["innerHTML"], kd = { class: "inputs" }, Td = ["for"], Pd = ["id", "type", "value", "min", "max", "step", "accept", "title"], Md = { __name: "OriginPopup", setup(f) {
  const e = ye({ useScope: "global" });
  var t = W(""), n = W(""), s = W(""), i = W([]), a = W(false);
  function u() {
    window.addEventListener("openPopup", p), window.addEventListener("closePopup", l), window.addEventListener("keydown", r);
  }
  function c() {
    window.removeEventListener("openPopup", p), window.removeEventListener("closePopup", l), window.removeEventListener("keydown", r);
  }
  function p(d) {
    a.value = true, d.detail && (d.detail.text && (e.te(d.detail.title, e.fallbackLocale.value) ? t.value = e.t(d.detail.title) : t.value = d.detail.title, e.te(d.detail.text, e.fallbackLocale.value) ? n.value = e.t(d.detail.text) : n.value = d.detail.text, e.te(d.detail.description, e.fallbackLocale.value) ? s.value = e.t(d.detail.description) : s.value = d.detail.description), d.detail.inputs && (i.value = d.detail.inputs, i.value.forEach(function(h) {
      h.type == "file" || h.type == "range" || h.type == "text" ? h.event = "change" : h.event = "click", h.value && e.te(h.value, e.fallbackLocale.value) && (h.value = e.t(h.value));
    }))), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("popupOpened"));
    }, 100);
  }
  function l() {
    a.value = false, setTimeout(function() {
      window.dispatchEvent(new CustomEvent("popupClosed"));
    }, 100);
  }
  function m(d, h) {
    d == null && (d = l), d(h);
  }
  function o(d) {
    var h = i.value[i.value.length - 1];
    h && m(h.callback, d);
  }
  function r(d) {
    if (a.value == true && d.target.type != "text") {
      var h = ["Space", "Enter", "Escape"];
      h.indexOf(d.code) > -1 && (d.preventDefault(), o(d)), i.value.forEach((v) => {
        d.code === v.shortcut && (d.preventDefault(), m(v.callback, d));
      });
    }
  }
  return pe(function() {
    u();
  }), he(function() {
    c();
  }), (d, h) => (I(), be(zt, { name: "fade-origin-popup" }, { default: Bt(() => [A(a) == true ? (I(), z("div", wd, [E("div", { class: "background", onClick: o }), E("div", Sd, [A(t) ? (I(), z("h1", { key: 0, class: "title", innerHTML: A(t) }, null, 8, Cd)) : Y("", true), A(n) ? (I(), z("p", { key: 1, class: "text", innerHTML: A(n) }, null, 8, _d)) : Y("", true), A(s) ? (I(), z("p", { key: 2, class: "description", innerHTML: A(s) }, null, 8, Ed)) : Y("", true), E("div", kd, [(I(true), z(me, null, Oe(A(i), (v, g) => (I(), z(me, null, [v.label ? (I(), z("label", { key: 0, for: "popup-" + v.type + "-" + g }, G(v.label), 9, Td)) : Y("", true), E("input", zn({ class: v.class, id: "popup-" + v.type + "-" + g, type: v.type, value: v.value, min: v.min, max: v.max, step: v.step, accept: v.accept, style: v.style, title: v.title || v.value }, { [$n(v.event)]: (x) => m(v.callback, x) }), null, 16, Pd)], 64))), 256))])])])) : Y("", true)]), _: 1 }));
} }, Ld = { class: "ui-origin" }, Od = { __name: "Origin", setup(f) {
  var e = W("home");
  function t() {
    window.addEventListener("setPage", s);
  }
  function n() {
    window.removeEventListener("setPage", s);
  }
  function s(a) {
    a.detail && i(a.detail);
  }
  function i(a) {
    e.value = a, app.state = a;
  }
  return pe(function() {
    t();
  }), he(function() {
    n();
  }), (a, u) => (I(), z("div", Ld, [A(e) == "home" ? (I(), be(bc, { key: 0, onSetPage: i })) : Y("", true), A(e) == "level-picker" ? (I(), be(Oc, { key: 1, onSetPage: i })) : Y("", true), A(e) == "campaign" ? (I(), be(jc, { key: 2, onSetPage: i })) : Y("", true), A(e) == "level-manager" ? (I(), be(Kc, { key: 3, onSetPage: i })) : Y("", true), A(e) == "skins" ? (I(), be(rd, { key: 4, onSetPage: i })) : Y("", true), A(e) == "level-editor" ? (I(), be(xd, { key: 5, onSetPage: i })) : Y("", true), ae(Md)]));
} }, Ad = ["onClick"], Rd = { class: "thumbnail" }, Dd = ["src"], Id = { key: 0, class: "overlay" }, Bd = ["innerHTML"], zd = ["innerHTML"], $d = { key: 3, class: "tag" }, Nd = ["innerHTML"], jd = { key: 0, class: "subtitle" }, Fd = ["innerHTML"], rs = { __name: "BubbleCarousel", props: { hideLabel: Boolean, hideTag: Boolean, hideTitle: Boolean, hideSubtitle: Boolean, items: Object, selected: Object }, setup(f) {
  const e = f;
  var t = W();
  function n() {
    window.addEventListener("keydown", d);
  }
  function s() {
    window.removeEventListener("keydown", d);
  }
  function i(h, v) {
    var g = c(v.target), x = v.isTrusted ? "smooth" : "instant";
    m(g, x), t.value = h, window.dispatchEvent(new CustomEvent("itemSelected", { detail: h })), app.assets.audio.play("click");
  }
  function a() {
    var h = document.querySelector(".item[class*='selected']");
    h && h.nextElementSibling && h.nextElementSibling.click();
  }
  function u() {
    var h = document.querySelector(".item[class*='selected']");
    h && h.previousElementSibling && h.previousElementSibling.click();
  }
  function c(h) {
    return h == null ? null : h.classList.contains("item") ? h : c(h.parentNode);
  }
  function p(h) {
    var v = l(h.target);
    v && (v.scrollLeft += h.deltaX + h.deltaY);
  }
  function l(h) {
    return h == null ? null : h.scrollWidth > h.clientWidth ? h : l(h.parentNode);
  }
  function m(h, v = "smooth") {
    h == null && (h = document.querySelector("[class*='selected']")), h && h.scrollIntoView({ behavior: v, block: "nearest", inline: "center" });
  }
  function o(h) {
    return h.title == null || t.value == null ? false : t.value.title == h.title;
  }
  function r() {
    e.selected && (t.value = e.selected);
  }
  function d(h) {
    h.target.value == null && (h.code == "KeyA" || h.code == "ArrowLeft" ? u() : (h.code == "KeyD" || h.code == "ArrowRight") && a());
  }
  return Qn(function() {
    r();
  }), pe(function() {
    m(null, "instant"), n();
  }), he(function() {
    s();
  }), (h, v) => (I(), z("div", { class: "carousel", onWheelPassive: v[0] || (v[0] = (g) => p(g)) }, [(I(true), z(me, null, Oe(f.items, (g, x) => (I(), z("div", { class: ee(["item", { selected: o(g) }]), onClick: (w) => i(g, w) }, [E("div", Rd, [E("img", { src: g.url }, null, 8, Dd), g.overlay ? (I(), z("div", Id)) : Y("", true), f.hideLabel != true && g.label ? (I(), z("div", { key: 1, class: "label", innerHTML: g.label }, null, 8, Bd)) : Y("", true), f.hideTitle != true ? (I(), z("div", { key: 2, class: "title", innerHTML: g.description || g.title }, null, 8, zd)) : Y("", true), f.hideTag != true && g.tag ? (I(), z("div", $d, [E("div", { innerHTML: g.tag }, null, 8, Nd)])) : Y("", true)]), f.hideSubtitle != true ? (I(), z("div", jd, [E("span", { innerHTML: g.subtitle }, null, 8, Fd)])) : Y("", true)], 10, Ad))), 256))], 32));
} }, Ud = ["title"], zi = { __name: "BubbleButtonSettings", setup(f) {
  const e = ye({ useScope: "global" });
  function t() {
    window.dispatchEvent(new CustomEvent("openSettings"));
  }
  return (n, s) => (I(), z("a", { onClick: t, title: A(e).t("popup.button.settings") }, s[0] || (s[0] = [E("span", { class: "material-symbols-rounded" }, "settings", -1)]), 8, Ud));
} }, qd = { key: 0, class: "material-symbols-rounded" }, Hd = { key: 1, class: "material-symbols-rounded" }, Vd = { __name: "BubbleButtonFullscreen", setup(f) {
  const e = new Nt(), t = W(false);
  document.addEventListener("fullscreenchange", function() {
    t.value = e.isFullscreen();
  });
  function n() {
    if (e.isExtension() && window.location.href.includes("?tab=true") == false) {
      e.openLink(window.location.href + "?tab=true");
      return;
    }
    e.isElectronApp() ? window.electron.toggleFullScreen() : e.isFullscreen() ? document.exitFullscreen() : document.body.requestFullscreen();
  }
  return (s, i) => A(e).isNativeApp() == false ? (I(), z("a", { key: 0, onClick: n, title: "Fullscreen (F11)" }, [t.value == true ? (I(), z("span", qd, "fullscreen_exit")) : (I(), z("span", Hd, "fullscreen"))])) : Y("", true);
} }, Gd = { class: "nav" }, Wd = ["title"], Xd = { class: "content fade-in" }, Zd = ["innerHTML"], Yd = { class: "footer" }, Qd = ["title"], Kd = { __name: "BubblePageHome", emits: ["setPage"], setup(f, { emit: e }) {
  const t = new Nt(), n = ye({ useScope: "global" });
  var s = e, i = W(), a = W(), u = W(app.network.isOnline() == false), c = w(), p = yt(() => y(c)), l = W(0), m = yt(() => [{ title: n.t("home.button.skins"), url: "../svg/button-skins.svg", callback: function() {
    s("setPage", "skins");
  } }, { title: n.t("home.button.level_editor"), url: "../svg/button-level-editor.svg", callback: function() {
    window.dispatchEvent(new CustomEvent("setTheme", { detail: "origin" })), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("setPage", { detail: "level-manager" }));
    }, 0);
  } }, { title: n.t("home.button.multi_player"), url: "../svg/button-multiplayer.svg", callback: function() {
    window.dispatchEvent(new CustomEvent("openSettings", { detail: "multiplayer" }));
  } }, { title: n.t("home.button.play"), url: "../svg/button-play.svg", callback: function() {
    s("setPage", "level-picker");
  } }]);
  function o() {
    window.addEventListener("itemSelected", h), document.addEventListener("keydown", d), app.network.on("peer_open", g), app.network.on("peer_close", x);
  }
  function r() {
    window.removeEventListener("itemSelected", h), document.removeEventListener("keydown", d), app.network.off("peer_open", g), app.network.off("peer_close", x);
  }
  function d(_) {
  }
  function h(_) {
    var P = _.detail;
    P.callback && P.callback();
  }
  async function v() {
    var _ = await fetch("../manifest.json"), P = await _.json();
    i.value = P, a.value = "v" + P.version;
  }
  function g() {
    u.value = false;
  }
  function x() {
    u.value = true;
  }
  function w() {
    const _ = Object.keys(n.messages.value.en.home.messages);
    return Math.floor(Math.random() * _.length);
  }
  function y(_) {
    return n.t("home.messages." + _);
  }
  async function b() {
    const _ = await fetch("../json/changelog.json").then(function(T) {
      if (T.ok) return T.json();
      throw new Error("Something went wrong");
    }).then(function(T) {
      return T;
    }.bind(this)).catch(function(T) {
      console.error(T);
    });
    for (var P = "", M = _.length - 1; M >= 0; M--) {
      var k = _[M];
      P += "v" + k.version + `
`, k.revisions.forEach(function(T) {
        P += "- " + T + `
`;
      }), P += `
`;
    }
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: '<div style="font-size: 0.75em; padding-right: 1em; text-align: left;">' + P + "</div>", inputs: [{ type: "button", value: "popup.button.close" }] } }));
  }
  function S(_) {
    _.preventDefault(_), _.target.href && t.openLink(_.target.href);
  }
  function C() {
    window.location.href = "../index.html";
  }
  return pe(function() {
    v(), o(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "home" }));
  }), he(function() {
    r();
  }), (_, P) => (I(), z("div", { class: "page", key: A(l) }, [P[4] || (P[4] = E("div", { class: "background" }, [E("img", { src: "../svg/background-purple.svg" })], -1)), E("div", Gd, [E("a", { class: "button left fade-in", onClick: C, title: A(n).t("home.button.back") }, P[1] || (P[1] = [E("span", { class: "material-symbols-rounded" }, "undo", -1)]), 8, Wd), ae(Vd, { class: "button fade-in", title: A(n).t("home.button.fullscreen") }, null, 8, ["title"]), ae(zi, { class: "button fade-in" })]), E("div", Xd, [P[2] || (P[2] = E("h1", null, "BOXEL3D", -1)), E("p", { innerHTML: A(p), onClick: P[0] || (P[0] = (M) => S(M)) }, null, 8, Zd), ae(rs, { items: A(m), scrolling: "no" }, null, 8, ["items"])]), E("div", Yd, [A(u) ? (I(), z("a", { key: 0, class: ee(["button fade-in", { hidden: A(a) == "" }]), onClick: b, title: A(n).t("home.button.changelog") }, [P[3] || (P[3] = E("span", { class: "material-symbols-rounded" }, "ink_pen", -1)), Ee(" " + G(A(a)), 1)], 10, Qd)) : Y("", true)])]));
} }, Jd = { class: "page" }, ef = { class: "nav" }, tf = ["title"], nf = { class: "content fade-in" }, sf = { class: "footer" }, rf = { __name: "BubblePageSkins", emits: ["setPage"], setup(f, { emit: e }) {
  const t = ye({ useScope: "global" });
  var n = e, s = W();
  function i() {
    window.addEventListener("keydown", m), window.addEventListener("itemSelected", c);
  }
  function a() {
    window.removeEventListener("keydown", m), window.removeEventListener("itemSelected", c);
  }
  var u = W(app.storage.getSettings());
  function c(r) {
    var d = r.detail;
    u.value.skin = { id: d.id, title: d.title, url: d.url }, d.id == 680 ? window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: t.t("popup.text.custom_skin"), inputs: [{ type: "file", label: t.t("popup.button.upload"), class: "button", style: "width: 100%", accept: "image/png, image/jpeg", callback: p }, { type: "button", value: t.t("popup.button.close") }] } })) : (app.player.setSkin({ id: d.id, url: d.url }), app.updateSettings(u.value));
  }
  function p(r) {
    var d = r.target.files[0];
    if (d) {
      var h = new FileReader();
      h.onloadend = function() {
        var v = { id: 680, title: d.name, url: h.result };
        u.value.skin = v, app.player.setSkin(v, app), app.updateSettings(u.value), window.dispatchEvent(new CustomEvent("closePopup"));
      }, h.readAsDataURL(d);
    }
  }
  function l() {
    n("setPage", "home");
  }
  function m(r) {
    if (r.target.value == null) {
      var d = ["Space", "Enter", "ArrowUp", "KeyW"];
      d.indexOf(r.code) > -1 && (r.preventDefault(), l()), (r.code == "Escape" || r.code == "KeyE") && (r.preventDefault(), l());
    }
  }
  function o() {
    var r = u.value.skin.id;
    Kt.forEach(function(d) {
      d.id == r && (s.value = d);
    });
  }
  return Qn(function() {
    o();
  }), pe(function() {
    i(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "skins" }));
  }), he(function() {
    a();
  }), (r, d) => (I(), z("div", Jd, [d[3] || (d[3] = E("div", { class: "background" }, [E("img", { src: "../svg/background-purple.svg" })], -1)), E("div", ef, [E("a", { class: "button fade-in", onClick: l, title: "Exit to home (ESC)" }, d[0] || (d[0] = [E("span", { class: "material-symbols-rounded" }, "undo", -1)])), E("a", { class: "button fade-in right", href: "../index.html?workshop=true", title: A(t).t("workshop.text.workshop") }, d[1] || (d[1] = [E("img", { src: "../svg/steam.svg" }, null, -1)]), 8, tf), ae(zi, { class: "button fade-in" })]), E("div", nf, [E("h1", null, G(A(t).t("skins.title")), 1), E("p", null, G(A(t).t("skins.description")), 1), ae(rs, { items: A(Kt), selected: A(s), class: "hide-titles" }, null, 8, ["items", "selected"]), E("div", sf, [E("a", { class: "button center fade-in", onClick: l }, [d[2] || (d[2] = E("span", { class: "material-symbols-rounded" }, "check_box", -1)), Ee(" " + G(A(t).t("skins.button.select")), 1)])])])]));
} }, af = $t(rf, [["__scopeId", "data-v-96e9822a"]]), of = { key: 0, class: "level-selector" }, uf = { class: "level-selector__packs" }, lf = { class: "level-selector__packs-header" }, cf = ["onClick"], df = ["src", "alt"], ff = { class: "level-selector__levels" }, pf = { class: "level-selector__levels-header" }, hf = ["placeholder"], mf = ["onClick"], vf = ["src", "alt"], gf = { key: 1, class: "score" }, bf = { class: "level-selector__info" }, yf = { class: "level-selector__info-header" }, xf = { class: "level-selector__info-content" }, wf = ["src", "alt"], Sf = { key: 0 }, Cf = { class: "level-selector__info-details" }, _f = { class: "author" }, Ef = { key: 0 }, kf = { key: 1 }, Tf = { class: "links" }, Pf = ["href", "title"], Mf = { key: 0, src: "../svg/speedrun.svg" }, Lf = { key: 1, class: "material-symbols-rounded" }, Of = ["title"], Af = { __name: "BubblePopupLevelSelector", setup(f) {
  const e = W(false), t = ye({ useScope: "global" }), n = W(), s = yt(() => {
    const k = [...Fe.packs];
    return k.unshift({ title: t.t("popup.text.all"), levels: [] }), k;
  }), i = W(), a = yt(() => {
    const k = [];
    return s.value.forEach((T) => {
      T.levels.forEach((L) => {
        let D = L.publishedFileId || L.title, O = wt[T.theme].thumbnail, j = _(D);
        j != null && (O = j), L.thumbnail && (O = L.thumbnail), k.push({ ...L, background_color: wt[T.theme].background_color, pack: T.title, theme: T.theme, thumbnail: O });
      });
    }), k;
  });
  let u = app.storage.getScores();
  const c = W({}), p = W({}), l = W(""), m = yt(() => a.value.filter((k) => x(k) && Object.values(k).some((T) => T?.toString().toLowerCase().includes(l.value.toLowerCase()))));
  function o() {
    window.addEventListener("openLevelSelectorPopup", d), window.addEventListener("closeLevelSelectorPopup", h), window.addEventListener("keydown", v);
  }
  function r() {
    window.removeEventListener("openLevelSelectorPopup", d), window.removeEventListener("closeLevelSelectorPopup", h), window.removeEventListener("keydown", v);
  }
  function d(k) {
    e.value = true;
    const T = app.storage.getSettings(), L = g(T);
    c.value = a.value[L - 1], p.value = s.value.find((D) => D.title == c.value.pack), M();
  }
  function h() {
    e.value = false, app.assets.audio.play("click");
  }
  function v(k) {
    if (e.value == true && k.target.tagName != "INPUT") {
      var T = ["Space", "Enter"];
      T.indexOf(k.code) > -1 && (k.preventDefault(), S()), k.code == "Escape" && h();
    }
  }
  function g(k) {
    let T = Number(k.progress || 1);
    for (; a.value[T - 1] == null && T > 1; ) T--;
    return T;
  }
  function x(k) {
    const T = p.value.title == k.pack, L = p.value.title == t.t("popup.text.all");
    return T || L;
  }
  function w(k) {
    p.value = k, m.value[0] && (c.value = m.value[0]), l.value = "", app.assets.audio.play("click");
  }
  function y(k) {
    k.title == c.value.title && S(k.title), c.value = k, app.assets.audio.play("click");
  }
  function b() {
    l.value = "";
  }
  async function S() {
    await app.playLevel({ ...c.value }), window.dispatchEvent(new CustomEvent("setPage", { detail: "campaign" }));
    const k = a.value.findIndex((L) => L.title == c.value.title) + 1, T = app.storage.getSettings();
    T.progress = k, app.updateSettings(T);
  }
  function C(k) {
    return u[k];
  }
  function _(k) {
    return app.storage.getThumbnail(k);
  }
  function P(k, T, L, D) {
    const O = T.value.findIndex((j) => j[D] == k.value[D]);
    L.value.children[O].scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function M() {
    sa(() => {
      P(p, s, n, "title"), P(c, m, i, "title");
    });
  }
  return pe(function() {
    o();
  }), he(function() {
    r();
  }), (k, T) => (I(), be(zt, { name: "fade" }, { default: Bt(() => [e.value == true ? (I(), z("div", of, [E("div", { class: "level-selector__background", onClick: T[0] || (T[0] = (L) => h()) }), E("div", { class: "level-selector__container", style: Qt({ "background-color": c.value.background_color }) }, [E("div", uf, [E("div", lf, G(A(t).t("popup.text.level_packs")), 1), E("ul", { class: "level-selector__packs-list", ref_key: "packsRef", ref: n }, [(I(true), z(me, null, Oe(s.value, (L) => (I(), z("li", { key: L.title }, [E("button", { class: ee({ selected: p.value.title == L.title }), onClick: (D) => w(L) }, [L.theme ? (I(), z("img", { key: 0, src: A(wt)[L.theme].thumbnail, alt: L.title }, null, 8, df)) : Y("", true), E("span", null, G(L.title), 1)], 10, cf)]))), 128))], 512)]), E("div", ff, [E("div", pf, [Qe(E("input", { class: "level-selector__search", "onUpdate:modelValue": T[1] || (T[1] = (L) => l.value = L), placeholder: `${A(t).t("popup.text.search")}...`, type: "text", onFocus: T[2] || (T[2] = (L) => w(s.value[0])) }, null, 40, hf), [[Jo, l.value]]), T[7] || (T[7] = E("button", { class: "search-icon", tabindex: "-1" }, [E("span", { class: "material-symbols-rounded" }, "search")], -1)), l.value.length > 0 ? (I(), z("button", { key: 0, class: "clear-icon", onClick: T[3] || (T[3] = (L) => b()) }, T[6] || (T[6] = [E("span", { class: "material-symbols-rounded" }, "close", -1)]))) : Y("", true)]), E("ul", { class: "level-selector__levels-list", ref_key: "levelsRef", ref: i }, [(I(true), z(me, null, Oe(m.value, (L) => (I(), z("li", { key: L.title }, [E("button", { class: ee({ selected: c.value.title == L.title }), onClick: (D) => y(L) }, [L.thumbnail ? (I(), z("img", { key: 0, src: L.thumbnail, alt: L.title }, null, 8, vf)) : Y("", true), E("span", null, G(L.description), 1), C(L.publishedFileId || L.title) ? (I(), z("div", gf, [T[8] || (T[8] = E("span", { class: "material-symbols-rounded" }, "star", -1)), E("span", null, G(C(L.publishedFileId || L.title)), 1)])) : Y("", true)], 10, mf)]))), 128))], 512)]), E("div", bf, [E("div", yf, G(A(t).t("popup.text.info")), 1), E("div", xf, [(I(), z("div", { class: "level-selector__info-thumbnail", key: p.value.title }, [E("img", { src: c.value.thumbnail, alt: c.value.description }, null, 8, wf), c.value.label ? (I(), z("label", Sf, [E("span", null, G(c.value.label), 1)])) : Y("", true)])), E("div", Cf, [E("ul", null, [E("li", _f, [c.value.author ? (I(), z("span", Ef, "Level by " + G(c.value.author || "Doppler"), 1)) : (I(), z("span", kf, G(c.value.description), 1))]), (I(true), z(me, null, Oe(c.value.links, (L) => (I(), z("li", Tf, [E("a", { href: L, target: "_blank", title: L }, [L.includes("speedrun") ? (I(), z("img", Mf)) : (I(), z("span", Lf, "link"))], 8, Pf)]))), 256))])]), E("button", { onClick: T[4] || (T[4] = (L) => S()) }, [T[9] || (T[9] = E("span", { class: "material-symbols-rounded" }, "play_arrow", -1)), E("span", null, G(A(t).t("popup.button.play")), 1)])])]), E("a", { class: "level-selector__close", onClick: T[5] || (T[5] = (L) => h()), title: A(t).t("popup.button.close") }, T[10] || (T[10] = [E("span", { class: "material-symbols-rounded" }, "close", -1)]), 8, Of)], 4)])) : Y("", true)]), _: 1 }));
} }, Rf = $t(Af, [["__scopeId", "data-v-4fbf0e4d"]]), Df = { class: "page" }, If = { class: "nav" }, Bf = ["title"], zf = ["title"], $f = ["title"], Nf = { class: "content fade-in" }, jf = ["innerHTML"], Ff = { class: "footer" }, Uf = { class: "center" }, qf = { __name: "BubblePageLevelPicker", emits: ["setPage"], setup(f, { emit: e }) {
  const t = ye({ useScope: "global" });
  var n = W("Select a level"), s = W([]), i = W(), a = app.storage.getScores(), u = app.storage.getSettings(), c = parseInt(u.progress), p = e;
  function l() {
    window.addEventListener("keydown", b), window.addEventListener("itemSelected", h);
  }
  function m() {
    window.removeEventListener("keydown", b), window.removeEventListener("itemSelected", h);
  }
  async function o() {
    await app.playLevel({ ...i.value }), p("setPage", "campaign");
  }
  function r(S) {
    return a[S];
  }
  function d(S) {
    return app.storage.getThumbnail(S);
  }
  function h(S) {
    i.value == S.detail && o(), i.value = S.detail, u = app.storage.getSettings(), u.progress = app.level.getLevelIndex(i.value.title) + 1, app.updateSettings(u), v();
  }
  function v() {
    var S = app.level.getLevelIndex(i.value.title), C = 0;
    Fe.packs.forEach(function(_) {
      _.levels.forEach(function(P) {
        S == C && (n.value = `${_.title}: <em>${i.value.description || i.value.title}</em>`, _.links && _.links.forEach(function(M) {
          n.value += ' - <a class="' + M.class + '" href="' + M.url + '" target="' + M.target + '"><img src="' + M.icon + '"> ' + M.text + "</a>";
        })), C++;
      });
    });
  }
  function g() {
    var S = c - 1, C = 0, _ = {};
    Fe.packs.forEach(function(P) {
      P.levels.forEach(function(M) {
        _ = M, (S == C || S == C + 1) && (i.value = M), C++;
      });
    }), i.value == null && (c = C, i.value = _);
  }
  function x() {
    p("setPage", "home");
  }
  function w() {
    s.value = [], Fe.packs.forEach(function(S, C) {
      S.levels.forEach(function(_, P) {
        let M = _.publishedFileId || _.title, k = wt[S.theme].thumbnail, T = d(M);
        T != null && (k = T), _.thumbnail && (k = _.thumbnail);
        let L = r(M);
        L ? _.tag = '<span class="material-symbols-rounded">star</span><span>' + L + "</span>" : _.tag = '<span class="material-symbols-rounded">more_horiz</span>', _.url = k, _.subtitle = _.description || _.title, _.theme = S.theme, s.value.push(_);
      });
    });
  }
  function y() {
    window.dispatchEvent(new CustomEvent("openLevelSelectorPopup"));
  }
  function b(S) {
    if (S.target.value == null) {
      var C = ["Space", "Enter", "ArrowUp", "KeyW"];
      C.indexOf(S.code) > -1 && (S.preventDefault(), o()), (S.code == "Escape" || S.code == "KeyE") && (S.preventDefault(), x());
    }
  }
  return Qn(function() {
    w(), g(), v();
  }), pe(function() {
    l(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "level-picker" }));
  }), he(function() {
    m();
  }), (S, C) => (I(), z("div", Df, [C[4] || (C[4] = E("div", { class: "background" }, [E("img", { src: "../svg/background-purple.svg" })], -1)), E("div", If, [E("a", { class: "button fade-in", onClick: x, title: A(t).t("level_picker.button.exit") }, C[0] || (C[0] = [E("span", { class: "material-symbols-rounded" }, "undo", -1)]), 8, Bf), E("a", { class: "button fade-in right", onClick: y, title: A(t).t("popup.text.search") }, C[1] || (C[1] = [E("span", { class: "material-symbols-rounded" }, "view_list", -1)]), 8, zf), E("a", { class: "button fade-in", href: "../index.html?workshop=true", title: A(t).t("workshop.text.workshop") }, C[2] || (C[2] = [E("img", { src: "../svg/steam.svg" }, null, -1)]), 8, $f), ae(zi, { class: "button fade-in" })]), E("div", Nf, [E("h1", null, G(A(t).t("level_picker.title")), 1), E("p", { innerHTML: A(n) }, null, 8, jf), ae(rs, { items: A(s), selected: A(i), hideTitle: true }, null, 8, ["items", "selected"]), E("div", Ff, [E("div", Uf, [E("a", { class: "button fade-in", onClick: o }, [C[3] || (C[3] = E("span", { class: "material-symbols-rounded" }, "slideshow", -1)), Ee(" " + G(A(t).t("level_picker.button.play")), 1)])])])]), ae(Rf)]));
} }, Hf = $t(qf, [["__scopeId", "data-v-46dd3f07"]]), Vf = ["title"], Gf = { __name: "BubbleButtonCheckpoint", setup(f) {
  const e = ye({ useScope: "global" });
  function t() {
    app.player.restart();
  }
  return (n, s) => (I(), z("a", { class: "button fade-in", onClick: t, title: A(e).t("popup.button.checkpoint") }, s[0] || (s[0] = [E("span", { class: "material-symbols-rounded" }, "history", -1)]), 8, Vf));
} }, Wf = $t(Gf, [["__scopeId", "data-v-ae96267e"]]), Xf = { class: "wasd" }, Zf = { class: "row" }, Yf = { __name: "BubbleControls", setup(f) {
  var e = W(app.storage.getSettings()), t = W(false), n = W(e.value.controls.reverse), s = W(true), i = W({});
  function a() {
    window.addEventListener("keydown", c), window.addEventListener("keyup", p), window.addEventListener("setMode", m), window.addEventListener("updateStatsVisibility", o), window.addEventListener("updateControls", r);
  }
  function u() {
    window.removeEventListener("keydown", c), window.removeEventListener("keyup", p), window.removeEventListener("setMode", m), window.removeEventListener("updateStatsVisibility", o), window.removeEventListener("updateControls", r);
  }
  function c(d) {
    d.isTrusted != true && (s.value = false), d.target.value == null && (i.value[d.code] = true);
  }
  function p(d) {
    i.value[d.code] = false;
  }
  function l(d) {
    window.dispatchEvent(new KeyboardEvent(d.type, { code: d.code })), i.value[d.code] = d.type == "keydown";
  }
  function m(d) {
    var h = d.detail;
    h == "control" ? t.value = true : t.value = false;
  }
  function o() {
    e.value = app.storage.getSettings();
  }
  function r() {
    o(), n.value = e.value.controls.reverse;
  }
  return pe(function() {
    a();
  }), he(function() {
    u();
  }), (d, h) => A(t) ? (I(), z("div", { key: 0, class: ee(["controls", { desktop: A(s), reverse: A(n) }]) }, [E("div", Xf, [E("div", Zf, [E("div", { class: ee(["key key-up fade-in", { active: A(i).KeyW || A(i).ArrowUp || A(i).Space }]), onTouchstart: h[0] || (h[0] = Rt((v) => l({ type: "keydown", code: "KeyW" }), ["prevent"])), onTouchend: h[1] || (h[1] = (v) => l({ type: "keyup", code: "KeyW" })) }, h[6] || (h[6] = [E("span", { class: "material-symbols-rounded" }, "shift", -1)]), 34), E("div", { class: ee(["key key-left fade-in", { active: A(i).KeyA || A(i).ArrowLeft }]), onTouchstart: h[2] || (h[2] = Rt((v) => l({ type: "keydown", code: "KeyA" }), ["prevent"])), onTouchend: h[3] || (h[3] = (v) => l({ type: "keyup", code: "KeyA" })) }, h[7] || (h[7] = [E("span", { class: "material-symbols-rounded" }, "fast_rewind", -1)]), 34), E("div", { class: ee(["key key-right fade-in", { active: A(i).KeyD || A(i).ArrowRight }]), onTouchstart: h[4] || (h[4] = Rt((v) => l({ type: "keydown", code: "KeyD" }), ["prevent"])), onTouchend: h[5] || (h[5] = (v) => l({ type: "keyup", code: "KeyD" })) }, h[8] || (h[8] = [E("span", { class: "material-symbols-rounded" }, "fast_forward", -1)]), 34)])])], 2)) : Y("", true);
} }, Qf = { key: 0, class: "material-symbols-rounded" }, Kf = { key: 1, class: "material-symbols-rounded" }, Jf = { key: 2, class: "fps" }, e0 = ["innerHTML"], t0 = { __name: "BubbleStats", setup(f) {
  var e = W(false), t = Date.now(), n = false, s = 0, i = W(app?.stats?.mode || "fps"), a = W(0), u = W(""), c = yt(() => "<span>" + u.value.split("").join("</span><span>") + "</span>");
  function p() {
    window.addEventListener("updateStatsVisibility", d);
  }
  function l() {
    window.removeEventListener("updateStatsVisibility", d);
  }
  function m() {
    if (n == true) if (requestAnimationFrame(function() {
      m();
    }), i.value == "fps") {
      var v = Date.now();
      s++, v > t + 1e3 && (a.value = Math.round(s * 1e3 / (v - t)), t = v, s = 0);
    } else u.value = `x:${Math.floor(app.player.position.x)}, y:${Math.floor(app.player.position.y)}, z:${Math.floor(app.player.position.z)}`;
  }
  function o() {
    n = true, m();
  }
  function r() {
    n = false;
  }
  function d() {
    var v = app.storage.getSettings(app);
    e.value = v.stats;
  }
  function h() {
    i.value == "fps" ? i.value = "position" : i.value = "fps", app.stats = Object.assign(app.stats || {}, { mode: i.value });
  }
  return pe(function() {
    o(), d(), p();
  }), he(function() {
    r(), l();
  }), (v, g) => A(e) ? (I(), z("a", { key: 0, class: ee(["stats button left fade-in", A(i)]), onClick: h }, [A(i) == "fps" ? (I(), z("span", Qf, "speed")) : Y("", true), A(i) == "position" ? (I(), z("span", Kf, "my_location")) : Y("", true), A(i) == "fps" ? (I(), z("span", Jf, G(A(a)) + " FPS", 1)) : Y("", true), A(i) == "position" ? (I(), z("div", { key: 3, class: "position", innerHTML: A(c) }, null, 8, e0)) : Y("", true)], 2)) : Y("", true);
} }, i0 = $t(t0, [["__scopeId", "data-v-b3ef225c"]]), n0 = { class: "page" }, s0 = { class: "nav" }, r0 = ["title"], a0 = { key: 0, class: "record" }, o0 = ["innerHTML"], u0 = { class: "footer" }, l0 = ["innerHTML"], c0 = { __name: "BubblePageCampaign", setup(f) {
  const e = ye({ useScope: "global" });
  var t = W(""), n = W(true), s = W();
  function i() {
    window.addEventListener("setCredit", u), window.addEventListener("popupOpened", p), window.addEventListener("popupClosed", l), window.addEventListener("beforeSettingsOpened", m), window.addEventListener("beforeSettingsClosed", o), window.addEventListener("keydown", r), window.addEventListener("keyup", d);
  }
  function a() {
    window.removeEventListener("setCredit", u), window.removeEventListener("popupOpened", p), window.removeEventListener("popupClosed", l), window.removeEventListener("beforeSettingsOpened", m), window.removeEventListener("beforeSettingsClosed", o), window.removeEventListener("keydown", r), window.removeEventListener("keyup", d);
  }
  function u(v) {
    v.detail.text && (t.value = v.detail.text);
  }
  function c() {
    app.pauseLevel(), window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: e.t("popup.text.paused"), inputs: [{ value: e.t("popup.button.exit"), type: "button", shortcut: "KeyE", callback: function(v) {
      app.exitCampaign();
    } }, { value: e.t("popup.button.retry"), type: "button", shortcut: "KeyR", callback: function(v) {
      app.level.retryLevel();
    } }, { value: e.t("popup.button.play"), type: "button", shortcut: "Space", callback: function(v) {
      setTimeout(function() {
        app.resumeLevel();
      }, 100);
    } }] } }));
  }
  function p() {
    n.value = false;
  }
  function l() {
    n.value = true, h();
  }
  function m() {
    app.pauseLevel();
  }
  function o() {
    app.resumeLevel();
  }
  function r(v) {
    if (n.value == true && v.target.value == null) if (v.code == "Escape") v.preventDefault(), c();
    else if (v.code == "KeyE") app.exitCampaign();
    else if (v.code == "KeyR") app.level.retryLevel();
    else if (v.code == "KeyC") app.player.restart();
    else if (v.code == "KeyA" || v.code == "ArrowLeft") app.play == true && app.player.setControls("left", -1);
    else if (v.code == "KeyD" || v.code == "ArrowRight") app.play == true && app.player.setControls("right", 1);
    else {
      var g = ["Space", "Enter", "ArrowUp", "KeyW"];
      g.indexOf(v.code) > -1 && app.player.jump();
    }
  }
  function d(v) {
    v.code == "KeyA" || v.code == "ArrowLeft" ? app.player.setControls("left", 0) : (v.code == "KeyD" || v.code == "ArrowRight") && app.player.setControls("right", 0);
  }
  function h() {
    var v = app.storage.getScores(), g = v[app.level.publishedFileId || app.level.name];
    g && (s.value = app.timer.toHTML(g));
  }
  return pe(function() {
    app.showCanvas(), h(), i(), window.dispatchEvent(new CustomEvent("pageMounted", { detail: "campaign" }));
  }), he(function() {
    app.hideCanvas(), a();
  }), (v, g) => (I(), z("div", n0, [E("div", s0, [E("div", { class: "score fade-in", onClick: g[0] || (g[0] = (x) => c()), title: A(e).t("campaign.button.pause") }, [g[2] || (g[2] = E("div", { class: "current" }, [E("span", { class: "material-symbols-rounded" }, "pause_circle"), E("div", { id: "timer" })], -1)), A(s) ? (I(), z("div", a0, [g[1] || (g[1] = E("span", { class: "material-symbols-rounded" }, "star", -1)), E("div", { innerHTML: A(s) }, null, 8, o0)])) : Y("", true)], 8, r0), ae(Wf), ae(i0), ae(zi, { class: "button right fade-in" })]), E("div", u0, [A(t) ? (I(), z("div", { key: 0, id: "credit", class: "credit button fade-in disabled", innerHTML: A(t) }, null, 8, l0)) : Y("", true), ae(Yf)])]));
} };
var Ue = {}, qe = {}, Ki = {}, He = {}, di = {}, Vs;
function d0() {
  return Vs || (Vs = 1, Object.defineProperty(di, "__esModule", { value: true }), di.default = new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(f) {
    return f.charCodeAt(0);
  }))), di;
}
var fi = {}, Gs;
function f0() {
  return Gs || (Gs = 1, Object.defineProperty(fi, "__esModule", { value: true }), fi.default = new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(f) {
    return f.charCodeAt(0);
  }))), fi;
}
var Ji = {}, Ws;
function Xs() {
  return Ws || (Ws = 1, function(f) {
    var e;
    Object.defineProperty(f, "__esModule", { value: true }), f.replaceCodePoint = f.fromCodePoint = void 0;
    var t = /* @__PURE__ */ new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
    f.fromCodePoint = (e = String.fromCodePoint) !== null && e !== void 0 ? e : function(i) {
      var a = "";
      return i > 65535 && (i -= 65536, a += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | i & 1023), a += String.fromCharCode(i), a;
    };
    function n(i) {
      var a;
      return i >= 55296 && i <= 57343 || i > 1114111 ? 65533 : (a = t.get(i)) !== null && a !== void 0 ? a : i;
    }
    f.replaceCodePoint = n;
    function s(i) {
      return (0, f.fromCodePoint)(n(i));
    }
    f.default = s;
  }(Ji)), Ji;
}
var Zs;
function Di() {
  return Zs || (Zs = 1, function(f) {
    var e = He && He.__createBinding || (Object.create ? function(k, T, L, D) {
      D === void 0 && (D = L);
      var O = Object.getOwnPropertyDescriptor(T, L);
      (!O || ("get" in O ? !T.__esModule : O.writable || O.configurable)) && (O = { enumerable: true, get: function() {
        return T[L];
      } }), Object.defineProperty(k, D, O);
    } : function(k, T, L, D) {
      D === void 0 && (D = L), k[D] = T[L];
    }), t = He && He.__setModuleDefault || (Object.create ? function(k, T) {
      Object.defineProperty(k, "default", { enumerable: true, value: T });
    } : function(k, T) {
      k.default = T;
    }), n = He && He.__importStar || function(k) {
      if (k && k.__esModule) return k;
      var T = {};
      if (k != null) for (var L in k) L !== "default" && Object.prototype.hasOwnProperty.call(k, L) && e(T, k, L);
      return t(T, k), T;
    }, s = He && He.__importDefault || function(k) {
      return k && k.__esModule ? k : { default: k };
    };
    Object.defineProperty(f, "__esModule", { value: true }), f.decodeXML = f.decodeHTMLStrict = f.decodeHTMLAttribute = f.decodeHTML = f.determineBranch = f.EntityDecoder = f.DecodingMode = f.BinTrieFlags = f.fromCodePoint = f.replaceCodePoint = f.decodeCodePoint = f.xmlDecodeTree = f.htmlDecodeTree = void 0;
    var i = s(d0());
    f.htmlDecodeTree = i.default;
    var a = s(f0());
    f.xmlDecodeTree = a.default;
    var u = n(Xs());
    f.decodeCodePoint = u.default;
    var c = Xs();
    Object.defineProperty(f, "replaceCodePoint", { enumerable: true, get: function() {
      return c.replaceCodePoint;
    } }), Object.defineProperty(f, "fromCodePoint", { enumerable: true, get: function() {
      return c.fromCodePoint;
    } });
    var p;
    (function(k) {
      k[k.NUM = 35] = "NUM", k[k.SEMI = 59] = "SEMI", k[k.EQUALS = 61] = "EQUALS", k[k.ZERO = 48] = "ZERO", k[k.NINE = 57] = "NINE", k[k.LOWER_A = 97] = "LOWER_A", k[k.LOWER_F = 102] = "LOWER_F", k[k.LOWER_X = 120] = "LOWER_X", k[k.LOWER_Z = 122] = "LOWER_Z", k[k.UPPER_A = 65] = "UPPER_A", k[k.UPPER_F = 70] = "UPPER_F", k[k.UPPER_Z = 90] = "UPPER_Z";
    })(p || (p = {}));
    var l = 32, m;
    (function(k) {
      k[k.VALUE_LENGTH = 49152] = "VALUE_LENGTH", k[k.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", k[k.JUMP_TABLE = 127] = "JUMP_TABLE";
    })(m = f.BinTrieFlags || (f.BinTrieFlags = {}));
    function o(k) {
      return k >= p.ZERO && k <= p.NINE;
    }
    function r(k) {
      return k >= p.UPPER_A && k <= p.UPPER_F || k >= p.LOWER_A && k <= p.LOWER_F;
    }
    function d(k) {
      return k >= p.UPPER_A && k <= p.UPPER_Z || k >= p.LOWER_A && k <= p.LOWER_Z || o(k);
    }
    function h(k) {
      return k === p.EQUALS || d(k);
    }
    var v;
    (function(k) {
      k[k.EntityStart = 0] = "EntityStart", k[k.NumericStart = 1] = "NumericStart", k[k.NumericDecimal = 2] = "NumericDecimal", k[k.NumericHex = 3] = "NumericHex", k[k.NamedEntity = 4] = "NamedEntity";
    })(v || (v = {}));
    var g;
    (function(k) {
      k[k.Legacy = 0] = "Legacy", k[k.Strict = 1] = "Strict", k[k.Attribute = 2] = "Attribute";
    })(g = f.DecodingMode || (f.DecodingMode = {}));
    var x = function() {
      function k(T, L, D) {
        this.decodeTree = T, this.emitCodePoint = L, this.errors = D, this.state = v.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = g.Strict;
      }
      return k.prototype.startEntity = function(T) {
        this.decodeMode = T, this.state = v.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, k.prototype.write = function(T, L) {
        switch (this.state) {
          case v.EntityStart:
            return T.charCodeAt(L) === p.NUM ? (this.state = v.NumericStart, this.consumed += 1, this.stateNumericStart(T, L + 1)) : (this.state = v.NamedEntity, this.stateNamedEntity(T, L));
          case v.NumericStart:
            return this.stateNumericStart(T, L);
          case v.NumericDecimal:
            return this.stateNumericDecimal(T, L);
          case v.NumericHex:
            return this.stateNumericHex(T, L);
          case v.NamedEntity:
            return this.stateNamedEntity(T, L);
        }
      }, k.prototype.stateNumericStart = function(T, L) {
        return L >= T.length ? -1 : (T.charCodeAt(L) | l) === p.LOWER_X ? (this.state = v.NumericHex, this.consumed += 1, this.stateNumericHex(T, L + 1)) : (this.state = v.NumericDecimal, this.stateNumericDecimal(T, L));
      }, k.prototype.addToNumericResult = function(T, L, D, O) {
        if (L !== D) {
          var j = D - L;
          this.result = this.result * Math.pow(O, j) + parseInt(T.substr(L, j), O), this.consumed += j;
        }
      }, k.prototype.stateNumericHex = function(T, L) {
        for (var D = L; L < T.length; ) {
          var O = T.charCodeAt(L);
          if (o(O) || r(O)) L += 1;
          else return this.addToNumericResult(T, D, L, 16), this.emitNumericEntity(O, 3);
        }
        return this.addToNumericResult(T, D, L, 16), -1;
      }, k.prototype.stateNumericDecimal = function(T, L) {
        for (var D = L; L < T.length; ) {
          var O = T.charCodeAt(L);
          if (o(O)) L += 1;
          else return this.addToNumericResult(T, D, L, 10), this.emitNumericEntity(O, 2);
        }
        return this.addToNumericResult(T, D, L, 10), -1;
      }, k.prototype.emitNumericEntity = function(T, L) {
        var D;
        if (this.consumed <= L) return (D = this.errors) === null || D === void 0 || D.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (T === p.SEMI) this.consumed += 1;
        else if (this.decodeMode === g.Strict) return 0;
        return this.emitCodePoint((0, u.replaceCodePoint)(this.result), this.consumed), this.errors && (T !== p.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, k.prototype.stateNamedEntity = function(T, L) {
        for (var D = this.decodeTree, O = D[this.treeIndex], j = (O & m.VALUE_LENGTH) >> 14; L < T.length; L++, this.excess++) {
          var $ = T.charCodeAt(L);
          if (this.treeIndex = y(D, O, this.treeIndex + Math.max(1, j), $), this.treeIndex < 0) return this.result === 0 || this.decodeMode === g.Attribute && (j === 0 || h($)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (O = D[this.treeIndex], j = (O & m.VALUE_LENGTH) >> 14, j !== 0) {
            if ($ === p.SEMI) return this.emitNamedEntityData(this.treeIndex, j, this.consumed + this.excess);
            this.decodeMode !== g.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, k.prototype.emitNotTerminatedNamedEntity = function() {
        var T, L = this, D = L.result, O = L.decodeTree, j = (O[D] & m.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(D, j, this.consumed), (T = this.errors) === null || T === void 0 || T.missingSemicolonAfterCharacterReference(), this.consumed;
      }, k.prototype.emitNamedEntityData = function(T, L, D) {
        var O = this.decodeTree;
        return this.emitCodePoint(L === 1 ? O[T] & ~m.VALUE_LENGTH : O[T + 1], D), L === 3 && this.emitCodePoint(O[T + 2], D), D;
      }, k.prototype.end = function() {
        var T;
        switch (this.state) {
          case v.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== g.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case v.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case v.NumericHex:
            return this.emitNumericEntity(0, 3);
          case v.NumericStart:
            return (T = this.errors) === null || T === void 0 || T.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case v.EntityStart:
            return 0;
        }
      }, k;
    }();
    f.EntityDecoder = x;
    function w(k) {
      var T = "", L = new x(k, function(D) {
        return T += (0, u.fromCodePoint)(D);
      });
      return function(O, j) {
        for (var $ = 0, B = 0; (B = O.indexOf("&", B)) >= 0; ) {
          T += O.slice($, B), L.startEntity(j);
          var N = L.write(O, B + 1);
          if (N < 0) {
            $ = B + L.end();
            break;
          }
          $ = B + N, B = N === 0 ? $ + 1 : $;
        }
        var V = T + O.slice($);
        return T = "", V;
      };
    }
    function y(k, T, L, D) {
      var O = (T & m.BRANCH_LENGTH) >> 7, j = T & m.JUMP_TABLE;
      if (O === 0) return j !== 0 && D === j ? L : -1;
      if (j) {
        var $ = D - j;
        return $ < 0 || $ >= O ? -1 : k[L + $] - 1;
      }
      for (var B = L, N = B + O - 1; B <= N; ) {
        var V = B + N >>> 1, q = k[V];
        if (q < D) B = V + 1;
        else if (q > D) N = V - 1;
        else return k[V + O];
      }
      return -1;
    }
    f.determineBranch = y;
    var b = w(i.default), S = w(a.default);
    function C(k, T) {
      return T === void 0 && (T = g.Legacy), b(k, T);
    }
    f.decodeHTML = C;
    function _(k) {
      return b(k, g.Attribute);
    }
    f.decodeHTMLAttribute = _;
    function P(k) {
      return b(k, g.Strict);
    }
    f.decodeHTMLStrict = P;
    function M(k) {
      return S(k, g.Strict);
    }
    f.decodeXML = M;
  }(He)), He;
}
var Ys;
function eo() {
  return Ys || (Ys = 1, function(f) {
    Object.defineProperty(f, "__esModule", { value: true }), f.QuoteType = void 0;
    var e = Di(), t;
    (function(o) {
      o[o.Tab = 9] = "Tab", o[o.NewLine = 10] = "NewLine", o[o.FormFeed = 12] = "FormFeed", o[o.CarriageReturn = 13] = "CarriageReturn", o[o.Space = 32] = "Space", o[o.ExclamationMark = 33] = "ExclamationMark", o[o.Number = 35] = "Number", o[o.Amp = 38] = "Amp", o[o.SingleQuote = 39] = "SingleQuote", o[o.DoubleQuote = 34] = "DoubleQuote", o[o.Dash = 45] = "Dash", o[o.Slash = 47] = "Slash", o[o.Zero = 48] = "Zero", o[o.Nine = 57] = "Nine", o[o.Semi = 59] = "Semi", o[o.Lt = 60] = "Lt", o[o.Eq = 61] = "Eq", o[o.Gt = 62] = "Gt", o[o.Questionmark = 63] = "Questionmark", o[o.UpperA = 65] = "UpperA", o[o.LowerA = 97] = "LowerA", o[o.UpperF = 70] = "UpperF", o[o.LowerF = 102] = "LowerF", o[o.UpperZ = 90] = "UpperZ", o[o.LowerZ = 122] = "LowerZ", o[o.LowerX = 120] = "LowerX", o[o.OpeningSquareBracket = 91] = "OpeningSquareBracket";
    })(t || (t = {}));
    var n;
    (function(o) {
      o[o.Text = 1] = "Text", o[o.BeforeTagName = 2] = "BeforeTagName", o[o.InTagName = 3] = "InTagName", o[o.InSelfClosingTag = 4] = "InSelfClosingTag", o[o.BeforeClosingTagName = 5] = "BeforeClosingTagName", o[o.InClosingTagName = 6] = "InClosingTagName", o[o.AfterClosingTagName = 7] = "AfterClosingTagName", o[o.BeforeAttributeName = 8] = "BeforeAttributeName", o[o.InAttributeName = 9] = "InAttributeName", o[o.AfterAttributeName = 10] = "AfterAttributeName", o[o.BeforeAttributeValue = 11] = "BeforeAttributeValue", o[o.InAttributeValueDq = 12] = "InAttributeValueDq", o[o.InAttributeValueSq = 13] = "InAttributeValueSq", o[o.InAttributeValueNq = 14] = "InAttributeValueNq", o[o.BeforeDeclaration = 15] = "BeforeDeclaration", o[o.InDeclaration = 16] = "InDeclaration", o[o.InProcessingInstruction = 17] = "InProcessingInstruction", o[o.BeforeComment = 18] = "BeforeComment", o[o.CDATASequence = 19] = "CDATASequence", o[o.InSpecialComment = 20] = "InSpecialComment", o[o.InCommentLike = 21] = "InCommentLike", o[o.BeforeSpecialS = 22] = "BeforeSpecialS", o[o.SpecialStartSequence = 23] = "SpecialStartSequence", o[o.InSpecialTag = 24] = "InSpecialTag", o[o.BeforeEntity = 25] = "BeforeEntity", o[o.BeforeNumericEntity = 26] = "BeforeNumericEntity", o[o.InNamedEntity = 27] = "InNamedEntity", o[o.InNumericEntity = 28] = "InNumericEntity", o[o.InHexEntity = 29] = "InHexEntity";
    })(n || (n = {}));
    function s(o) {
      return o === t.Space || o === t.NewLine || o === t.Tab || o === t.FormFeed || o === t.CarriageReturn;
    }
    function i(o) {
      return o === t.Slash || o === t.Gt || s(o);
    }
    function a(o) {
      return o >= t.Zero && o <= t.Nine;
    }
    function u(o) {
      return o >= t.LowerA && o <= t.LowerZ || o >= t.UpperA && o <= t.UpperZ;
    }
    function c(o) {
      return o >= t.UpperA && o <= t.UpperF || o >= t.LowerA && o <= t.LowerF;
    }
    var p;
    (function(o) {
      o[o.NoValue = 0] = "NoValue", o[o.Unquoted = 1] = "Unquoted", o[o.Single = 2] = "Single", o[o.Double = 3] = "Double";
    })(p = f.QuoteType || (f.QuoteType = {}));
    var l = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]) }, m = function() {
      function o(r, d) {
        var h = r.xmlMode, v = h === void 0 ? false : h, g = r.decodeEntities, x = g === void 0 ? true : g;
        this.cbs = d, this.state = n.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = n.Text, this.isSpecial = false, this.running = true, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = v, this.decodeEntities = x, this.entityTrie = v ? e.xmlDecodeTree : e.htmlDecodeTree;
      }
      return o.prototype.reset = function() {
        this.state = n.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = n.Text, this.currentSequence = void 0, this.running = true, this.offset = 0;
      }, o.prototype.write = function(r) {
        this.offset += this.buffer.length, this.buffer = r, this.parse();
      }, o.prototype.end = function() {
        this.running && this.finish();
      }, o.prototype.pause = function() {
        this.running = false;
      }, o.prototype.resume = function() {
        this.running = true, this.index < this.buffer.length + this.offset && this.parse();
      }, o.prototype.getIndex = function() {
        return this.index;
      }, o.prototype.getSectionStart = function() {
        return this.sectionStart;
      }, o.prototype.stateText = function(r) {
        r === t.Lt || !this.decodeEntities && this.fastForwardTo(t.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = n.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && r === t.Amp && (this.state = n.BeforeEntity);
      }, o.prototype.stateSpecialStartSequence = function(r) {
        var d = this.sequenceIndex === this.currentSequence.length, h = d ? i(r) : (r | 32) === this.currentSequence[this.sequenceIndex];
        if (!h) this.isSpecial = false;
        else if (!d) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0, this.state = n.InTagName, this.stateInTagName(r);
      }, o.prototype.stateInSpecialTag = function(r) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (r === t.Gt || s(r)) {
            var d = this.index - this.currentSequence.length;
            if (this.sectionStart < d) {
              var h = this.index;
              this.index = d, this.cbs.ontext(this.sectionStart, d), this.index = h;
            }
            this.isSpecial = false, this.sectionStart = d + 2, this.stateInClosingTagName(r);
            return;
          }
          this.sequenceIndex = 0;
        }
        (r | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === l.TitleEnd ? this.decodeEntities && r === t.Amp && (this.state = n.BeforeEntity) : this.fastForwardTo(t.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(r === t.Lt);
      }, o.prototype.stateCDATASequence = function(r) {
        r === l.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === l.Cdata.length && (this.state = n.InCommentLike, this.currentSequence = l.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = n.InDeclaration, this.stateInDeclaration(r));
      }, o.prototype.fastForwardTo = function(r) {
        for (; ++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === r) return true;
        return this.index = this.buffer.length + this.offset - 1, false;
      }, o.prototype.stateInCommentLike = function(r) {
        r === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === l.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = n.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : r !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }, o.prototype.isTagStartChar = function(r) {
        return this.xmlMode ? !i(r) : u(r);
      }, o.prototype.startSpecial = function(r, d) {
        this.isSpecial = true, this.currentSequence = r, this.sequenceIndex = d, this.state = n.SpecialStartSequence;
      }, o.prototype.stateBeforeTagName = function(r) {
        if (r === t.ExclamationMark) this.state = n.BeforeDeclaration, this.sectionStart = this.index + 1;
        else if (r === t.Questionmark) this.state = n.InProcessingInstruction, this.sectionStart = this.index + 1;
        else if (this.isTagStartChar(r)) {
          var d = r | 32;
          this.sectionStart = this.index, !this.xmlMode && d === l.TitleEnd[2] ? this.startSpecial(l.TitleEnd, 3) : this.state = !this.xmlMode && d === l.ScriptEnd[2] ? n.BeforeSpecialS : n.InTagName;
        } else r === t.Slash ? this.state = n.BeforeClosingTagName : (this.state = n.Text, this.stateText(r));
      }, o.prototype.stateInTagName = function(r) {
        i(r) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(r));
      }, o.prototype.stateBeforeClosingTagName = function(r) {
        s(r) || (r === t.Gt ? this.state = n.Text : (this.state = this.isTagStartChar(r) ? n.InClosingTagName : n.InSpecialComment, this.sectionStart = this.index));
      }, o.prototype.stateInClosingTagName = function(r) {
        (r === t.Gt || s(r)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = n.AfterClosingTagName, this.stateAfterClosingTagName(r));
      }, o.prototype.stateAfterClosingTagName = function(r) {
        (r === t.Gt || this.fastForwardTo(t.Gt)) && (this.state = n.Text, this.baseState = n.Text, this.sectionStart = this.index + 1);
      }, o.prototype.stateBeforeAttributeName = function(r) {
        r === t.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = n.InSpecialTag, this.sequenceIndex = 0) : this.state = n.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : r === t.Slash ? this.state = n.InSelfClosingTag : s(r) || (this.state = n.InAttributeName, this.sectionStart = this.index);
      }, o.prototype.stateInSelfClosingTag = function(r) {
        r === t.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = n.Text, this.baseState = n.Text, this.sectionStart = this.index + 1, this.isSpecial = false) : s(r) || (this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(r));
      }, o.prototype.stateInAttributeName = function(r) {
        (r === t.Eq || i(r)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = n.AfterAttributeName, this.stateAfterAttributeName(r));
      }, o.prototype.stateAfterAttributeName = function(r) {
        r === t.Eq ? this.state = n.BeforeAttributeValue : r === t.Slash || r === t.Gt ? (this.cbs.onattribend(p.NoValue, this.index), this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(r)) : s(r) || (this.cbs.onattribend(p.NoValue, this.index), this.state = n.InAttributeName, this.sectionStart = this.index);
      }, o.prototype.stateBeforeAttributeValue = function(r) {
        r === t.DoubleQuote ? (this.state = n.InAttributeValueDq, this.sectionStart = this.index + 1) : r === t.SingleQuote ? (this.state = n.InAttributeValueSq, this.sectionStart = this.index + 1) : s(r) || (this.sectionStart = this.index, this.state = n.InAttributeValueNq, this.stateInAttributeValueNoQuotes(r));
      }, o.prototype.handleInAttributeValue = function(r, d) {
        r === d || !this.decodeEntities && this.fastForwardTo(d) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(d === t.DoubleQuote ? p.Double : p.Single, this.index), this.state = n.BeforeAttributeName) : this.decodeEntities && r === t.Amp && (this.baseState = this.state, this.state = n.BeforeEntity);
      }, o.prototype.stateInAttributeValueDoubleQuotes = function(r) {
        this.handleInAttributeValue(r, t.DoubleQuote);
      }, o.prototype.stateInAttributeValueSingleQuotes = function(r) {
        this.handleInAttributeValue(r, t.SingleQuote);
      }, o.prototype.stateInAttributeValueNoQuotes = function(r) {
        s(r) || r === t.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(p.Unquoted, this.index), this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(r)) : this.decodeEntities && r === t.Amp && (this.baseState = this.state, this.state = n.BeforeEntity);
      }, o.prototype.stateBeforeDeclaration = function(r) {
        r === t.OpeningSquareBracket ? (this.state = n.CDATASequence, this.sequenceIndex = 0) : this.state = r === t.Dash ? n.BeforeComment : n.InDeclaration;
      }, o.prototype.stateInDeclaration = function(r) {
        (r === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = n.Text, this.sectionStart = this.index + 1);
      }, o.prototype.stateInProcessingInstruction = function(r) {
        (r === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = n.Text, this.sectionStart = this.index + 1);
      }, o.prototype.stateBeforeComment = function(r) {
        r === t.Dash ? (this.state = n.InCommentLike, this.currentSequence = l.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = n.InDeclaration;
      }, o.prototype.stateInSpecialComment = function(r) {
        (r === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = n.Text, this.sectionStart = this.index + 1);
      }, o.prototype.stateBeforeSpecialS = function(r) {
        var d = r | 32;
        d === l.ScriptEnd[3] ? this.startSpecial(l.ScriptEnd, 4) : d === l.StyleEnd[3] ? this.startSpecial(l.StyleEnd, 4) : (this.state = n.InTagName, this.stateInTagName(r));
      }, o.prototype.stateBeforeEntity = function(r) {
        this.entityExcess = 1, this.entityResult = 0, r === t.Number ? this.state = n.BeforeNumericEntity : r === t.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = n.InNamedEntity, this.stateInNamedEntity(r));
      }, o.prototype.stateInNamedEntity = function(r) {
        if (this.entityExcess += 1, this.trieIndex = (0, e.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, r), this.trieIndex < 0) {
          this.emitNamedEntity(), this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        var d = this.trieCurrent & e.BinTrieFlags.VALUE_LENGTH;
        if (d) {
          var h = (d >> 14) - 1;
          if (!this.allowLegacyEntity() && r !== t.Semi) this.trieIndex += h;
          else {
            var v = this.index - this.entityExcess + 1;
            v > this.sectionStart && this.emitPartial(this.sectionStart, v), this.entityResult = this.trieIndex, this.trieIndex += h, this.entityExcess = 0, this.sectionStart = this.index + 1, h === 0 && this.emitNamedEntity();
          }
        }
      }, o.prototype.emitNamedEntity = function() {
        if (this.state = this.baseState, this.entityResult !== 0) {
          var r = (this.entityTrie[this.entityResult] & e.BinTrieFlags.VALUE_LENGTH) >> 14;
          switch (r) {
            case 1: {
              this.emitCodePoint(this.entityTrie[this.entityResult] & ~e.BinTrieFlags.VALUE_LENGTH);
              break;
            }
            case 2: {
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            }
            case 3:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      }, o.prototype.stateBeforeNumericEntity = function(r) {
        (r | 32) === t.LowerX ? (this.entityExcess++, this.state = n.InHexEntity) : (this.state = n.InNumericEntity, this.stateInNumericEntity(r));
      }, o.prototype.emitNumericEntity = function(r) {
        var d = this.index - this.entityExcess - 1, h = d + 2 + +(this.state === n.InHexEntity);
        h !== this.index && (d > this.sectionStart && this.emitPartial(this.sectionStart, d), this.sectionStart = this.index + Number(r), this.emitCodePoint((0, e.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
      }, o.prototype.stateInNumericEntity = function(r) {
        r === t.Semi ? this.emitNumericEntity(true) : a(r) ? (this.entityResult = this.entityResult * 10 + (r - t.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(false) : this.state = this.baseState, this.index--);
      }, o.prototype.stateInHexEntity = function(r) {
        r === t.Semi ? this.emitNumericEntity(true) : a(r) ? (this.entityResult = this.entityResult * 16 + (r - t.Zero), this.entityExcess++) : c(r) ? (this.entityResult = this.entityResult * 16 + ((r | 32) - t.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(false) : this.state = this.baseState, this.index--);
      }, o.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === n.Text || this.baseState === n.InSpecialTag);
      }, o.prototype.cleanup = function() {
        this.running && this.sectionStart !== this.index && (this.state === n.Text || this.state === n.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === n.InAttributeValueDq || this.state === n.InAttributeValueSq || this.state === n.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }, o.prototype.shouldContinue = function() {
        return this.index < this.buffer.length + this.offset && this.running;
      }, o.prototype.parse = function() {
        for (; this.shouldContinue(); ) {
          var r = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case n.Text: {
              this.stateText(r);
              break;
            }
            case n.SpecialStartSequence: {
              this.stateSpecialStartSequence(r);
              break;
            }
            case n.InSpecialTag: {
              this.stateInSpecialTag(r);
              break;
            }
            case n.CDATASequence: {
              this.stateCDATASequence(r);
              break;
            }
            case n.InAttributeValueDq: {
              this.stateInAttributeValueDoubleQuotes(r);
              break;
            }
            case n.InAttributeName: {
              this.stateInAttributeName(r);
              break;
            }
            case n.InCommentLike: {
              this.stateInCommentLike(r);
              break;
            }
            case n.InSpecialComment: {
              this.stateInSpecialComment(r);
              break;
            }
            case n.BeforeAttributeName: {
              this.stateBeforeAttributeName(r);
              break;
            }
            case n.InTagName: {
              this.stateInTagName(r);
              break;
            }
            case n.InClosingTagName: {
              this.stateInClosingTagName(r);
              break;
            }
            case n.BeforeTagName: {
              this.stateBeforeTagName(r);
              break;
            }
            case n.AfterAttributeName: {
              this.stateAfterAttributeName(r);
              break;
            }
            case n.InAttributeValueSq: {
              this.stateInAttributeValueSingleQuotes(r);
              break;
            }
            case n.BeforeAttributeValue: {
              this.stateBeforeAttributeValue(r);
              break;
            }
            case n.BeforeClosingTagName: {
              this.stateBeforeClosingTagName(r);
              break;
            }
            case n.AfterClosingTagName: {
              this.stateAfterClosingTagName(r);
              break;
            }
            case n.BeforeSpecialS: {
              this.stateBeforeSpecialS(r);
              break;
            }
            case n.InAttributeValueNq: {
              this.stateInAttributeValueNoQuotes(r);
              break;
            }
            case n.InSelfClosingTag: {
              this.stateInSelfClosingTag(r);
              break;
            }
            case n.InDeclaration: {
              this.stateInDeclaration(r);
              break;
            }
            case n.BeforeDeclaration: {
              this.stateBeforeDeclaration(r);
              break;
            }
            case n.BeforeComment: {
              this.stateBeforeComment(r);
              break;
            }
            case n.InProcessingInstruction: {
              this.stateInProcessingInstruction(r);
              break;
            }
            case n.InNamedEntity: {
              this.stateInNamedEntity(r);
              break;
            }
            case n.BeforeEntity: {
              this.stateBeforeEntity(r);
              break;
            }
            case n.InHexEntity: {
              this.stateInHexEntity(r);
              break;
            }
            case n.InNumericEntity: {
              this.stateInNumericEntity(r);
              break;
            }
            default:
              this.stateBeforeNumericEntity(r);
          }
          this.index++;
        }
        this.cleanup();
      }, o.prototype.finish = function() {
        this.state === n.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
      }, o.prototype.handleTrailingData = function() {
        var r = this.buffer.length + this.offset;
        this.state === n.InCommentLike ? this.currentSequence === l.CdataEnd ? this.cbs.oncdata(this.sectionStart, r, 0) : this.cbs.oncomment(this.sectionStart, r, 0) : this.state === n.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(false) : this.state === n.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(false) : this.state === n.InTagName || this.state === n.BeforeAttributeName || this.state === n.BeforeAttributeValue || this.state === n.AfterAttributeName || this.state === n.InAttributeName || this.state === n.InAttributeValueSq || this.state === n.InAttributeValueDq || this.state === n.InAttributeValueNq || this.state === n.InClosingTagName || this.cbs.ontext(this.sectionStart, r);
      }, o.prototype.emitPartial = function(r, d) {
        this.baseState !== n.Text && this.baseState !== n.InSpecialTag ? this.cbs.onattribdata(r, d) : this.cbs.ontext(r, d);
      }, o.prototype.emitCodePoint = function(r) {
        this.baseState !== n.Text && this.baseState !== n.InSpecialTag ? this.cbs.onattribentity(r) : this.cbs.ontextentity(r);
      }, o;
    }();
    f.default = m;
  }(Ki)), Ki;
}
var Qs;
function Ks() {
  if (Qs) return qe;
  Qs = 1;
  var f = qe && qe.__createBinding || (Object.create ? function(v, g, x, w) {
    w === void 0 && (w = x);
    var y = Object.getOwnPropertyDescriptor(g, x);
    (!y || ("get" in y ? !g.__esModule : y.writable || y.configurable)) && (y = { enumerable: true, get: function() {
      return g[x];
    } }), Object.defineProperty(v, w, y);
  } : function(v, g, x, w) {
    w === void 0 && (w = x), v[w] = g[x];
  }), e = qe && qe.__setModuleDefault || (Object.create ? function(v, g) {
    Object.defineProperty(v, "default", { enumerable: true, value: g });
  } : function(v, g) {
    v.default = g;
  }), t = qe && qe.__importStar || function(v) {
    if (v && v.__esModule) return v;
    var g = {};
    if (v != null) for (var x in v) x !== "default" && Object.prototype.hasOwnProperty.call(v, x) && f(g, v, x);
    return e(g, v), g;
  };
  Object.defineProperty(qe, "__esModule", { value: true }), qe.Parser = void 0;
  var n = t(eo()), s = Di(), i = /* @__PURE__ */ new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), a = /* @__PURE__ */ new Set(["p"]), u = /* @__PURE__ */ new Set(["thead", "tbody"]), c = /* @__PURE__ */ new Set(["dd", "dt"]), p = /* @__PURE__ */ new Set(["rt", "rp"]), l = /* @__PURE__ */ new Map([["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])], ["th", /* @__PURE__ */ new Set(["th"])], ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])], ["body", /* @__PURE__ */ new Set(["head", "link", "script"])], ["li", /* @__PURE__ */ new Set(["li"])], ["p", a], ["h1", a], ["h2", a], ["h3", a], ["h4", a], ["h5", a], ["h6", a], ["select", i], ["input", i], ["output", i], ["button", i], ["datalist", i], ["textarea", i], ["option", /* @__PURE__ */ new Set(["option"])], ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])], ["dd", c], ["dt", c], ["address", a], ["article", a], ["aside", a], ["blockquote", a], ["details", a], ["div", a], ["dl", a], ["fieldset", a], ["figcaption", a], ["figure", a], ["footer", a], ["form", a], ["header", a], ["hr", a], ["main", a], ["nav", a], ["ol", a], ["pre", a], ["section", a], ["table", a], ["ul", a], ["rt", p], ["rp", p], ["tbody", u], ["tfoot", u]]), m = /* @__PURE__ */ new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), o = /* @__PURE__ */ new Set(["math", "svg"]), r = /* @__PURE__ */ new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), d = /\s|\//, h = function() {
    function v(g, x) {
      x === void 0 && (x = {});
      var w, y, b, S, C;
      this.options = x, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = false, this.cbs = g ?? {}, this.lowerCaseTagNames = (w = x.lowerCaseTags) !== null && w !== void 0 ? w : !x.xmlMode, this.lowerCaseAttributeNames = (y = x.lowerCaseAttributeNames) !== null && y !== void 0 ? y : !x.xmlMode, this.tokenizer = new ((b = x.Tokenizer) !== null && b !== void 0 ? b : n.default)(this.options, this), (C = (S = this.cbs).onparserinit) === null || C === void 0 || C.call(S, this);
    }
    return v.prototype.ontext = function(g, x) {
      var w, y, b = this.getSlice(g, x);
      this.endIndex = x - 1, (y = (w = this.cbs).ontext) === null || y === void 0 || y.call(w, b), this.startIndex = x;
    }, v.prototype.ontextentity = function(g) {
      var x, w, y = this.tokenizer.getSectionStart();
      this.endIndex = y - 1, (w = (x = this.cbs).ontext) === null || w === void 0 || w.call(x, (0, s.fromCodePoint)(g)), this.startIndex = y;
    }, v.prototype.isVoidElement = function(g) {
      return !this.options.xmlMode && m.has(g);
    }, v.prototype.onopentagname = function(g, x) {
      this.endIndex = x;
      var w = this.getSlice(g, x);
      this.lowerCaseTagNames && (w = w.toLowerCase()), this.emitOpenTag(w);
    }, v.prototype.emitOpenTag = function(g) {
      var x, w, y, b;
      this.openTagStart = this.startIndex, this.tagname = g;
      var S = !this.options.xmlMode && l.get(g);
      if (S) for (; this.stack.length > 0 && S.has(this.stack[this.stack.length - 1]); ) {
        var C = this.stack.pop();
        (w = (x = this.cbs).onclosetag) === null || w === void 0 || w.call(x, C, true);
      }
      this.isVoidElement(g) || (this.stack.push(g), o.has(g) ? this.foreignContext.push(true) : r.has(g) && this.foreignContext.push(false)), (b = (y = this.cbs).onopentagname) === null || b === void 0 || b.call(y, g), this.cbs.onopentag && (this.attribs = {});
    }, v.prototype.endOpenTag = function(g) {
      var x, w;
      this.startIndex = this.openTagStart, this.attribs && ((w = (x = this.cbs).onopentag) === null || w === void 0 || w.call(x, this.tagname, this.attribs, g), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, true), this.tagname = "";
    }, v.prototype.onopentagend = function(g) {
      this.endIndex = g, this.endOpenTag(false), this.startIndex = g + 1;
    }, v.prototype.onclosetag = function(g, x) {
      var w, y, b, S, C, _;
      this.endIndex = x;
      var P = this.getSlice(g, x);
      if (this.lowerCaseTagNames && (P = P.toLowerCase()), (o.has(P) || r.has(P)) && this.foreignContext.pop(), this.isVoidElement(P)) !this.options.xmlMode && P === "br" && ((y = (w = this.cbs).onopentagname) === null || y === void 0 || y.call(w, "br"), (S = (b = this.cbs).onopentag) === null || S === void 0 || S.call(b, "br", {}, true), (_ = (C = this.cbs).onclosetag) === null || _ === void 0 || _.call(C, "br", false));
      else {
        var M = this.stack.lastIndexOf(P);
        if (M !== -1) if (this.cbs.onclosetag) for (var k = this.stack.length - M; k--; ) this.cbs.onclosetag(this.stack.pop(), k !== 0);
        else this.stack.length = M;
        else !this.options.xmlMode && P === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(true));
      }
      this.startIndex = x + 1;
    }, v.prototype.onselfclosingtag = function(g) {
      this.endIndex = g, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(false), this.startIndex = g + 1) : this.onopentagend(g);
    }, v.prototype.closeCurrentTag = function(g) {
      var x, w, y = this.tagname;
      this.endOpenTag(g), this.stack[this.stack.length - 1] === y && ((w = (x = this.cbs).onclosetag) === null || w === void 0 || w.call(x, y, !g), this.stack.pop());
    }, v.prototype.onattribname = function(g, x) {
      this.startIndex = g;
      var w = this.getSlice(g, x);
      this.attribname = this.lowerCaseAttributeNames ? w.toLowerCase() : w;
    }, v.prototype.onattribdata = function(g, x) {
      this.attribvalue += this.getSlice(g, x);
    }, v.prototype.onattribentity = function(g) {
      this.attribvalue += (0, s.fromCodePoint)(g);
    }, v.prototype.onattribend = function(g, x) {
      var w, y;
      this.endIndex = x, (y = (w = this.cbs).onattribute) === null || y === void 0 || y.call(w, this.attribname, this.attribvalue, g === n.QuoteType.Double ? '"' : g === n.QuoteType.Single ? "'" : g === n.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
    }, v.prototype.getInstructionName = function(g) {
      var x = g.search(d), w = x < 0 ? g : g.substr(0, x);
      return this.lowerCaseTagNames && (w = w.toLowerCase()), w;
    }, v.prototype.ondeclaration = function(g, x) {
      this.endIndex = x;
      var w = this.getSlice(g, x);
      if (this.cbs.onprocessinginstruction) {
        var y = this.getInstructionName(w);
        this.cbs.onprocessinginstruction("!".concat(y), "!".concat(w));
      }
      this.startIndex = x + 1;
    }, v.prototype.onprocessinginstruction = function(g, x) {
      this.endIndex = x;
      var w = this.getSlice(g, x);
      if (this.cbs.onprocessinginstruction) {
        var y = this.getInstructionName(w);
        this.cbs.onprocessinginstruction("?".concat(y), "?".concat(w));
      }
      this.startIndex = x + 1;
    }, v.prototype.oncomment = function(g, x, w) {
      var y, b, S, C;
      this.endIndex = x, (b = (y = this.cbs).oncomment) === null || b === void 0 || b.call(y, this.getSlice(g, x - w)), (C = (S = this.cbs).oncommentend) === null || C === void 0 || C.call(S), this.startIndex = x + 1;
    }, v.prototype.oncdata = function(g, x, w) {
      var y, b, S, C, _, P, M, k, T, L;
      this.endIndex = x;
      var D = this.getSlice(g, x - w);
      this.options.xmlMode || this.options.recognizeCDATA ? ((b = (y = this.cbs).oncdatastart) === null || b === void 0 || b.call(y), (C = (S = this.cbs).ontext) === null || C === void 0 || C.call(S, D), (P = (_ = this.cbs).oncdataend) === null || P === void 0 || P.call(_)) : ((k = (M = this.cbs).oncomment) === null || k === void 0 || k.call(M, "[CDATA[".concat(D, "]]")), (L = (T = this.cbs).oncommentend) === null || L === void 0 || L.call(T)), this.startIndex = x + 1;
    }, v.prototype.onend = function() {
      var g, x;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var w = this.stack.length; w > 0; this.cbs.onclosetag(this.stack[--w], true)) ;
      }
      (x = (g = this.cbs).onend) === null || x === void 0 || x.call(g);
    }, v.prototype.reset = function() {
      var g, x, w, y;
      (x = (g = this.cbs).onreset) === null || x === void 0 || x.call(g), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (y = (w = this.cbs).onparserinit) === null || y === void 0 || y.call(w, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = false;
    }, v.prototype.parseComplete = function(g) {
      this.reset(), this.end(g);
    }, v.prototype.getSlice = function(g, x) {
      for (; g - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
      for (var w = this.buffers[0].slice(g - this.bufferOffset, x - this.bufferOffset); x - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), w += this.buffers[0].slice(0, x - this.bufferOffset);
      return w;
    }, v.prototype.shiftBuffer = function() {
      this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
    }, v.prototype.write = function(g) {
      var x, w;
      if (this.ended) {
        (w = (x = this.cbs).onerror) === null || w === void 0 || w.call(x, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(g), this.tokenizer.running && (this.tokenizer.write(g), this.writeIndex++);
    }, v.prototype.end = function(g) {
      var x, w;
      if (this.ended) {
        (w = (x = this.cbs).onerror) === null || w === void 0 || w.call(x, new Error(".end() after done!"));
        return;
      }
      g && this.write(g), this.ended = true, this.tokenizer.end();
    }, v.prototype.pause = function() {
      this.tokenizer.pause();
    }, v.prototype.resume = function() {
      for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
      this.ended && this.tokenizer.end();
    }, v.prototype.parseChunk = function(g) {
      this.write(g);
    }, v.prototype.done = function(g) {
      this.end(g);
    }, v;
  }();
  return qe.Parser = h, qe;
}
var mt = {}, en = {}, Js;
function ti() {
  return Js || (Js = 1, function(f) {
    Object.defineProperty(f, "__esModule", { value: true }), f.Doctype = f.CDATA = f.Tag = f.Style = f.Script = f.Comment = f.Directive = f.Text = f.Root = f.isTag = f.ElementType = void 0;
    var e;
    (function(n) {
      n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
    })(e = f.ElementType || (f.ElementType = {}));
    function t(n) {
      return n.type === e.Tag || n.type === e.Script || n.type === e.Style;
    }
    f.isTag = t, f.Root = e.Root, f.Text = e.Text, f.Directive = e.Directive, f.Comment = e.Comment, f.Script = e.Script, f.Style = e.Style, f.Tag = e.Tag, f.CDATA = e.CDATA, f.Doctype = e.Doctype;
  }(en)), en;
}
var ne = {}, er;
function tr() {
  if (er) return ne;
  er = 1;
  var f = ne && ne.__extends || /* @__PURE__ */ function() {
    var b = function(S, C) {
      return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(_, P) {
        _.__proto__ = P;
      } || function(_, P) {
        for (var M in P) Object.prototype.hasOwnProperty.call(P, M) && (_[M] = P[M]);
      }, b(S, C);
    };
    return function(S, C) {
      if (typeof C != "function" && C !== null) throw new TypeError("Class extends value " + String(C) + " is not a constructor or null");
      b(S, C);
      function _() {
        this.constructor = S;
      }
      S.prototype = C === null ? Object.create(C) : (_.prototype = C.prototype, new _());
    };
  }(), e = ne && ne.__assign || function() {
    return e = Object.assign || function(b) {
      for (var S, C = 1, _ = arguments.length; C < _; C++) {
        S = arguments[C];
        for (var P in S) Object.prototype.hasOwnProperty.call(S, P) && (b[P] = S[P]);
      }
      return b;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(ne, "__esModule", { value: true }), ne.cloneNode = ne.hasChildren = ne.isDocument = ne.isDirective = ne.isComment = ne.isText = ne.isCDATA = ne.isTag = ne.Element = ne.Document = ne.CDATA = ne.NodeWithChildren = ne.ProcessingInstruction = ne.Comment = ne.Text = ne.DataNode = ne.Node = void 0;
  var t = ti(), n = function() {
    function b() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(b.prototype, "parentNode", { get: function() {
      return this.parent;
    }, set: function(S) {
      this.parent = S;
    }, enumerable: false, configurable: true }), Object.defineProperty(b.prototype, "previousSibling", { get: function() {
      return this.prev;
    }, set: function(S) {
      this.prev = S;
    }, enumerable: false, configurable: true }), Object.defineProperty(b.prototype, "nextSibling", { get: function() {
      return this.next;
    }, set: function(S) {
      this.next = S;
    }, enumerable: false, configurable: true }), b.prototype.cloneNode = function(S) {
      return S === void 0 && (S = false), w(this, S);
    }, b;
  }();
  ne.Node = n;
  var s = function(b) {
    f(S, b);
    function S(C) {
      var _ = b.call(this) || this;
      return _.data = C, _;
    }
    return Object.defineProperty(S.prototype, "nodeValue", { get: function() {
      return this.data;
    }, set: function(C) {
      this.data = C;
    }, enumerable: false, configurable: true }), S;
  }(n);
  ne.DataNode = s;
  var i = function(b) {
    f(S, b);
    function S() {
      var C = b !== null && b.apply(this, arguments) || this;
      return C.type = t.ElementType.Text, C;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 3;
    }, enumerable: false, configurable: true }), S;
  }(s);
  ne.Text = i;
  var a = function(b) {
    f(S, b);
    function S() {
      var C = b !== null && b.apply(this, arguments) || this;
      return C.type = t.ElementType.Comment, C;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 8;
    }, enumerable: false, configurable: true }), S;
  }(s);
  ne.Comment = a;
  var u = function(b) {
    f(S, b);
    function S(C, _) {
      var P = b.call(this, _) || this;
      return P.name = C, P.type = t.ElementType.Directive, P;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 1;
    }, enumerable: false, configurable: true }), S;
  }(s);
  ne.ProcessingInstruction = u;
  var c = function(b) {
    f(S, b);
    function S(C) {
      var _ = b.call(this) || this;
      return _.children = C, _;
    }
    return Object.defineProperty(S.prototype, "firstChild", { get: function() {
      var C;
      return (C = this.children[0]) !== null && C !== void 0 ? C : null;
    }, enumerable: false, configurable: true }), Object.defineProperty(S.prototype, "lastChild", { get: function() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }, enumerable: false, configurable: true }), Object.defineProperty(S.prototype, "childNodes", { get: function() {
      return this.children;
    }, set: function(C) {
      this.children = C;
    }, enumerable: false, configurable: true }), S;
  }(n);
  ne.NodeWithChildren = c;
  var p = function(b) {
    f(S, b);
    function S() {
      var C = b !== null && b.apply(this, arguments) || this;
      return C.type = t.ElementType.CDATA, C;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 4;
    }, enumerable: false, configurable: true }), S;
  }(c);
  ne.CDATA = p;
  var l = function(b) {
    f(S, b);
    function S() {
      var C = b !== null && b.apply(this, arguments) || this;
      return C.type = t.ElementType.Root, C;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 9;
    }, enumerable: false, configurable: true }), S;
  }(c);
  ne.Document = l;
  var m = function(b) {
    f(S, b);
    function S(C, _, P, M) {
      P === void 0 && (P = []), M === void 0 && (M = C === "script" ? t.ElementType.Script : C === "style" ? t.ElementType.Style : t.ElementType.Tag);
      var k = b.call(this, P) || this;
      return k.name = C, k.attribs = _, k.type = M, k;
    }
    return Object.defineProperty(S.prototype, "nodeType", { get: function() {
      return 1;
    }, enumerable: false, configurable: true }), Object.defineProperty(S.prototype, "tagName", { get: function() {
      return this.name;
    }, set: function(C) {
      this.name = C;
    }, enumerable: false, configurable: true }), Object.defineProperty(S.prototype, "attributes", { get: function() {
      var C = this;
      return Object.keys(this.attribs).map(function(_) {
        var P, M;
        return { name: _, value: C.attribs[_], namespace: (P = C["x-attribsNamespace"]) === null || P === void 0 ? void 0 : P[_], prefix: (M = C["x-attribsPrefix"]) === null || M === void 0 ? void 0 : M[_] };
      });
    }, enumerable: false, configurable: true }), S;
  }(c);
  ne.Element = m;
  function o(b) {
    return (0, t.isTag)(b);
  }
  ne.isTag = o;
  function r(b) {
    return b.type === t.ElementType.CDATA;
  }
  ne.isCDATA = r;
  function d(b) {
    return b.type === t.ElementType.Text;
  }
  ne.isText = d;
  function h(b) {
    return b.type === t.ElementType.Comment;
  }
  ne.isComment = h;
  function v(b) {
    return b.type === t.ElementType.Directive;
  }
  ne.isDirective = v;
  function g(b) {
    return b.type === t.ElementType.Root;
  }
  ne.isDocument = g;
  function x(b) {
    return Object.prototype.hasOwnProperty.call(b, "children");
  }
  ne.hasChildren = x;
  function w(b, S) {
    S === void 0 && (S = false);
    var C;
    if (d(b)) C = new i(b.data);
    else if (h(b)) C = new a(b.data);
    else if (o(b)) {
      var _ = S ? y(b.children) : [], P = new m(b.name, e({}, b.attribs), _);
      _.forEach(function(L) {
        return L.parent = P;
      }), b.namespace != null && (P.namespace = b.namespace), b["x-attribsNamespace"] && (P["x-attribsNamespace"] = e({}, b["x-attribsNamespace"])), b["x-attribsPrefix"] && (P["x-attribsPrefix"] = e({}, b["x-attribsPrefix"])), C = P;
    } else if (r(b)) {
      var _ = S ? y(b.children) : [], M = new p(_);
      _.forEach(function(D) {
        return D.parent = M;
      }), C = M;
    } else if (g(b)) {
      var _ = S ? y(b.children) : [], k = new l(_);
      _.forEach(function(D) {
        return D.parent = k;
      }), b["x-mode"] && (k["x-mode"] = b["x-mode"]), C = k;
    } else if (v(b)) {
      var T = new u(b.name, b.data);
      b["x-name"] != null && (T["x-name"] = b["x-name"], T["x-publicId"] = b["x-publicId"], T["x-systemId"] = b["x-systemId"]), C = T;
    } else throw new Error("Not implemented yet: ".concat(b.type));
    return C.startIndex = b.startIndex, C.endIndex = b.endIndex, b.sourceCodeLocation != null && (C.sourceCodeLocation = b.sourceCodeLocation), C;
  }
  ne.cloneNode = w;
  function y(b) {
    for (var S = b.map(function(_) {
      return w(_, true);
    }), C = 1; C < S.length; C++) S[C].prev = S[C - 1], S[C - 1].next = S[C];
    return S;
  }
  return ne;
}
var ir;
function ft() {
  return ir || (ir = 1, function(f) {
    var e = mt && mt.__createBinding || (Object.create ? function(u, c, p, l) {
      l === void 0 && (l = p);
      var m = Object.getOwnPropertyDescriptor(c, p);
      (!m || ("get" in m ? !c.__esModule : m.writable || m.configurable)) && (m = { enumerable: true, get: function() {
        return c[p];
      } }), Object.defineProperty(u, l, m);
    } : function(u, c, p, l) {
      l === void 0 && (l = p), u[l] = c[p];
    }), t = mt && mt.__exportStar || function(u, c) {
      for (var p in u) p !== "default" && !Object.prototype.hasOwnProperty.call(c, p) && e(c, u, p);
    };
    Object.defineProperty(f, "__esModule", { value: true }), f.DomHandler = void 0;
    var n = ti(), s = tr();
    t(tr(), f);
    var i = { withStartIndices: false, withEndIndices: false, xmlMode: false }, a = function() {
      function u(c, p, l) {
        this.dom = [], this.root = new s.Document(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof p == "function" && (l = p, p = i), typeof c == "object" && (p = c, c = void 0), this.callback = c ?? null, this.options = p ?? i, this.elementCB = l ?? null;
      }
      return u.prototype.onparserinit = function(c) {
        this.parser = c;
      }, u.prototype.onreset = function() {
        this.dom = [], this.root = new s.Document(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, u.prototype.onend = function() {
        this.done || (this.done = true, this.parser = null, this.handleCallback(null));
      }, u.prototype.onerror = function(c) {
        this.handleCallback(c);
      }, u.prototype.onclosetag = function() {
        this.lastNode = null;
        var c = this.tagStack.pop();
        this.options.withEndIndices && (c.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(c);
      }, u.prototype.onopentag = function(c, p) {
        var l = this.options.xmlMode ? n.ElementType.Tag : void 0, m = new s.Element(c, p, void 0, l);
        this.addNode(m), this.tagStack.push(m);
      }, u.prototype.ontext = function(c) {
        var p = this.lastNode;
        if (p && p.type === n.ElementType.Text) p.data += c, this.options.withEndIndices && (p.endIndex = this.parser.endIndex);
        else {
          var l = new s.Text(c);
          this.addNode(l), this.lastNode = l;
        }
      }, u.prototype.oncomment = function(c) {
        if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
          this.lastNode.data += c;
          return;
        }
        var p = new s.Comment(c);
        this.addNode(p), this.lastNode = p;
      }, u.prototype.oncommentend = function() {
        this.lastNode = null;
      }, u.prototype.oncdatastart = function() {
        var c = new s.Text(""), p = new s.CDATA([c]);
        this.addNode(p), c.parent = p, this.lastNode = c;
      }, u.prototype.oncdataend = function() {
        this.lastNode = null;
      }, u.prototype.onprocessinginstruction = function(c, p) {
        var l = new s.ProcessingInstruction(c, p);
        this.addNode(l);
      }, u.prototype.handleCallback = function(c) {
        if (typeof this.callback == "function") this.callback(c, this.dom);
        else if (c) throw c;
      }, u.prototype.addNode = function(c) {
        var p = this.tagStack[this.tagStack.length - 1], l = p.children[p.children.length - 1];
        this.options.withStartIndices && (c.startIndex = this.parser.startIndex), this.options.withEndIndices && (c.endIndex = this.parser.endIndex), p.children.push(c), l && (c.prev = l, l.next = c), c.parent = p, this.lastNode = null;
      }, u;
    }();
    f.DomHandler = a, f.default = a;
  }(mt)), mt;
}
var vt = {}, Ze = {}, ze = {}, tn = {}, et = {}, pi = {}, nr;
function p0() {
  if (nr) return pi;
  nr = 1, Object.defineProperty(pi, "__esModule", { value: true });
  function f(e) {
    for (var t = 1; t < e.length; t++) e[t][0] += e[t - 1][0] + 1;
    return e;
  }
  return pi.default = new Map(f([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(f([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(f([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(f([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]])), pi;
}
var nn = {}, sr;
function Gn() {
  return sr || (sr = 1, function(f) {
    Object.defineProperty(f, "__esModule", { value: true }), f.escapeText = f.escapeAttribute = f.escapeUTF8 = f.escape = f.encodeXML = f.getCodePoint = f.xmlReplacer = void 0, f.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    var e = /* @__PURE__ */ new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]);
    f.getCodePoint = String.prototype.codePointAt != null ? function(s, i) {
      return s.codePointAt(i);
    } : function(s, i) {
      return (s.charCodeAt(i) & 64512) === 55296 ? (s.charCodeAt(i) - 55296) * 1024 + s.charCodeAt(i + 1) - 56320 + 65536 : s.charCodeAt(i);
    };
    function t(s) {
      for (var i = "", a = 0, u; (u = f.xmlReplacer.exec(s)) !== null; ) {
        var c = u.index, p = s.charCodeAt(c), l = e.get(p);
        l !== void 0 ? (i += s.substring(a, c) + l, a = c + 1) : (i += "".concat(s.substring(a, c), "&#x").concat((0, f.getCodePoint)(s, c).toString(16), ";"), a = f.xmlReplacer.lastIndex += +((p & 64512) === 55296));
      }
      return i + s.substr(a);
    }
    f.encodeXML = t, f.escape = t;
    function n(s, i) {
      return function(u) {
        for (var c, p = 0, l = ""; c = s.exec(u); ) p !== c.index && (l += u.substring(p, c.index)), l += i.get(c[0].charCodeAt(0)), p = c.index + 1;
        return l + u.substring(p);
      };
    }
    f.escapeUTF8 = n(/[&<>'"]/g, e), f.escapeAttribute = n(/["&\u00A0]/g, /* @__PURE__ */ new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), f.escapeText = n(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
  }(nn)), nn;
}
var rr;
function ar() {
  if (rr) return et;
  rr = 1;
  var f = et && et.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(et, "__esModule", { value: true }), et.encodeNonAsciiHTML = et.encodeHTML = void 0;
  var e = f(p0()), t = Gn(), n = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
  function s(u) {
    return a(n, u);
  }
  et.encodeHTML = s;
  function i(u) {
    return a(t.xmlReplacer, u);
  }
  et.encodeNonAsciiHTML = i;
  function a(u, c) {
    for (var p = "", l = 0, m; (m = u.exec(c)) !== null; ) {
      var o = m.index;
      p += c.substring(l, o);
      var r = c.charCodeAt(o), d = e.default.get(r);
      if (typeof d == "object") {
        if (o + 1 < c.length) {
          var h = c.charCodeAt(o + 1), v = typeof d.n == "number" ? d.n === h ? d.o : void 0 : d.n.get(h);
          if (v !== void 0) {
            p += v, l = u.lastIndex += 1;
            continue;
          }
        }
        d = d.v;
      }
      if (d !== void 0) p += d, l = o + 1;
      else {
        var g = (0, t.getCodePoint)(c, o);
        p += "&#x".concat(g.toString(16), ";"), l = u.lastIndex += +(g !== r);
      }
    }
    return p + c.substr(l);
  }
  return et;
}
var or;
function h0() {
  return or || (or = 1, function(f) {
    Object.defineProperty(f, "__esModule", { value: true }), f.decodeXMLStrict = f.decodeHTML5Strict = f.decodeHTML4Strict = f.decodeHTML5 = f.decodeHTML4 = f.decodeHTMLAttribute = f.decodeHTMLStrict = f.decodeHTML = f.decodeXML = f.DecodingMode = f.EntityDecoder = f.encodeHTML5 = f.encodeHTML4 = f.encodeNonAsciiHTML = f.encodeHTML = f.escapeText = f.escapeAttribute = f.escapeUTF8 = f.escape = f.encodeXML = f.encode = f.decodeStrict = f.decode = f.EncodingMode = f.EntityLevel = void 0;
    var e = Di(), t = ar(), n = Gn(), s;
    (function(o) {
      o[o.XML = 0] = "XML", o[o.HTML = 1] = "HTML";
    })(s = f.EntityLevel || (f.EntityLevel = {}));
    var i;
    (function(o) {
      o[o.UTF8 = 0] = "UTF8", o[o.ASCII = 1] = "ASCII", o[o.Extensive = 2] = "Extensive", o[o.Attribute = 3] = "Attribute", o[o.Text = 4] = "Text";
    })(i = f.EncodingMode || (f.EncodingMode = {}));
    function a(o, r) {
      r === void 0 && (r = s.XML);
      var d = typeof r == "number" ? r : r.level;
      if (d === s.HTML) {
        var h = typeof r == "object" ? r.mode : void 0;
        return (0, e.decodeHTML)(o, h);
      }
      return (0, e.decodeXML)(o);
    }
    f.decode = a;
    function u(o, r) {
      var d;
      r === void 0 && (r = s.XML);
      var h = typeof r == "number" ? { level: r } : r;
      return (d = h.mode) !== null && d !== void 0 || (h.mode = e.DecodingMode.Strict), a(o, h);
    }
    f.decodeStrict = u;
    function c(o, r) {
      r === void 0 && (r = s.XML);
      var d = typeof r == "number" ? { level: r } : r;
      return d.mode === i.UTF8 ? (0, n.escapeUTF8)(o) : d.mode === i.Attribute ? (0, n.escapeAttribute)(o) : d.mode === i.Text ? (0, n.escapeText)(o) : d.level === s.HTML ? d.mode === i.ASCII ? (0, t.encodeNonAsciiHTML)(o) : (0, t.encodeHTML)(o) : (0, n.encodeXML)(o);
    }
    f.encode = c;
    var p = Gn();
    Object.defineProperty(f, "encodeXML", { enumerable: true, get: function() {
      return p.encodeXML;
    } }), Object.defineProperty(f, "escape", { enumerable: true, get: function() {
      return p.escape;
    } }), Object.defineProperty(f, "escapeUTF8", { enumerable: true, get: function() {
      return p.escapeUTF8;
    } }), Object.defineProperty(f, "escapeAttribute", { enumerable: true, get: function() {
      return p.escapeAttribute;
    } }), Object.defineProperty(f, "escapeText", { enumerable: true, get: function() {
      return p.escapeText;
    } });
    var l = ar();
    Object.defineProperty(f, "encodeHTML", { enumerable: true, get: function() {
      return l.encodeHTML;
    } }), Object.defineProperty(f, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return l.encodeNonAsciiHTML;
    } }), Object.defineProperty(f, "encodeHTML4", { enumerable: true, get: function() {
      return l.encodeHTML;
    } }), Object.defineProperty(f, "encodeHTML5", { enumerable: true, get: function() {
      return l.encodeHTML;
    } });
    var m = Di();
    Object.defineProperty(f, "EntityDecoder", { enumerable: true, get: function() {
      return m.EntityDecoder;
    } }), Object.defineProperty(f, "DecodingMode", { enumerable: true, get: function() {
      return m.DecodingMode;
    } }), Object.defineProperty(f, "decodeXML", { enumerable: true, get: function() {
      return m.decodeXML;
    } }), Object.defineProperty(f, "decodeHTML", { enumerable: true, get: function() {
      return m.decodeHTML;
    } }), Object.defineProperty(f, "decodeHTMLStrict", { enumerable: true, get: function() {
      return m.decodeHTMLStrict;
    } }), Object.defineProperty(f, "decodeHTMLAttribute", { enumerable: true, get: function() {
      return m.decodeHTMLAttribute;
    } }), Object.defineProperty(f, "decodeHTML4", { enumerable: true, get: function() {
      return m.decodeHTML;
    } }), Object.defineProperty(f, "decodeHTML5", { enumerable: true, get: function() {
      return m.decodeHTML;
    } }), Object.defineProperty(f, "decodeHTML4Strict", { enumerable: true, get: function() {
      return m.decodeHTMLStrict;
    } }), Object.defineProperty(f, "decodeHTML5Strict", { enumerable: true, get: function() {
      return m.decodeHTMLStrict;
    } }), Object.defineProperty(f, "decodeXMLStrict", { enumerable: true, get: function() {
      return m.decodeXML;
    } });
  }(tn)), tn;
}
var gt = {}, ur;
function m0() {
  return ur || (ur = 1, Object.defineProperty(gt, "__esModule", { value: true }), gt.attributeNames = gt.elementNames = void 0, gt.elementNames = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function(f) {
    return [f.toLowerCase(), f];
  })), gt.attributeNames = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function(f) {
    return [f.toLowerCase(), f];
  }))), gt;
}
var lr;
function v0() {
  if (lr) return ze;
  lr = 1;
  var f = ze && ze.__assign || function() {
    return f = Object.assign || function(y) {
      for (var b, S = 1, C = arguments.length; S < C; S++) {
        b = arguments[S];
        for (var _ in b) Object.prototype.hasOwnProperty.call(b, _) && (y[_] = b[_]);
      }
      return y;
    }, f.apply(this, arguments);
  }, e = ze && ze.__createBinding || (Object.create ? function(y, b, S, C) {
    C === void 0 && (C = S);
    var _ = Object.getOwnPropertyDescriptor(b, S);
    (!_ || ("get" in _ ? !b.__esModule : _.writable || _.configurable)) && (_ = { enumerable: true, get: function() {
      return b[S];
    } }), Object.defineProperty(y, C, _);
  } : function(y, b, S, C) {
    C === void 0 && (C = S), y[C] = b[S];
  }), t = ze && ze.__setModuleDefault || (Object.create ? function(y, b) {
    Object.defineProperty(y, "default", { enumerable: true, value: b });
  } : function(y, b) {
    y.default = b;
  }), n = ze && ze.__importStar || function(y) {
    if (y && y.__esModule) return y;
    var b = {};
    if (y != null) for (var S in y) S !== "default" && Object.prototype.hasOwnProperty.call(y, S) && e(b, y, S);
    return t(b, y), b;
  };
  Object.defineProperty(ze, "__esModule", { value: true }), ze.render = void 0;
  var s = n(ti()), i = h0(), a = m0(), u = /* @__PURE__ */ new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
  function c(y) {
    return y.replace(/"/g, "&quot;");
  }
  function p(y, b) {
    var S;
    if (y) {
      var C = ((S = b.encodeEntities) !== null && S !== void 0 ? S : b.decodeEntities) === false ? c : b.xmlMode || b.encodeEntities !== "utf8" ? i.encodeXML : i.escapeAttribute;
      return Object.keys(y).map(function(_) {
        var P, M, k = (P = y[_]) !== null && P !== void 0 ? P : "";
        return b.xmlMode === "foreign" && (_ = (M = a.attributeNames.get(_)) !== null && M !== void 0 ? M : _), !b.emptyAttrs && !b.xmlMode && k === "" ? _ : "".concat(_, '="').concat(C(k), '"');
      }).join(" ");
    }
  }
  var l = /* @__PURE__ */ new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
  function m(y, b) {
    b === void 0 && (b = {});
    for (var S = ("length" in y) ? y : [y], C = "", _ = 0; _ < S.length; _++) C += o(S[_], b);
    return C;
  }
  ze.render = m, ze.default = m;
  function o(y, b) {
    switch (y.type) {
      case s.Root:
        return m(y.children, b);
      case s.Doctype:
      case s.Directive:
        return v(y);
      case s.Comment:
        return w(y);
      case s.CDATA:
        return x(y);
      case s.Script:
      case s.Style:
      case s.Tag:
        return h(y, b);
      case s.Text:
        return g(y, b);
    }
  }
  var r = /* @__PURE__ */ new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), d = /* @__PURE__ */ new Set(["svg", "math"]);
  function h(y, b) {
    var S;
    b.xmlMode === "foreign" && (y.name = (S = a.elementNames.get(y.name)) !== null && S !== void 0 ? S : y.name, y.parent && r.has(y.parent.name) && (b = f(f({}, b), { xmlMode: false }))), !b.xmlMode && d.has(y.name) && (b = f(f({}, b), { xmlMode: "foreign" }));
    var C = "<".concat(y.name), _ = p(y.attribs, b);
    return _ && (C += " ".concat(_)), y.children.length === 0 && (b.xmlMode ? b.selfClosingTags !== false : b.selfClosingTags && l.has(y.name)) ? (b.xmlMode || (C += " "), C += "/>") : (C += ">", y.children.length > 0 && (C += m(y.children, b)), (b.xmlMode || !l.has(y.name)) && (C += "</".concat(y.name, ">"))), C;
  }
  function v(y) {
    return "<".concat(y.data, ">");
  }
  function g(y, b) {
    var S, C = y.data || "";
    return ((S = b.encodeEntities) !== null && S !== void 0 ? S : b.decodeEntities) !== false && !(!b.xmlMode && y.parent && u.has(y.parent.name)) && (C = b.xmlMode || b.encodeEntities !== "utf8" ? (0, i.encodeXML)(C) : (0, i.escapeText)(C)), C;
  }
  function x(y) {
    return "<![CDATA[".concat(y.children[0].data, "]]>");
  }
  function w(y) {
    return "<!--".concat(y.data, "-->");
  }
  return ze;
}
var cr;
function to() {
  if (cr) return Ze;
  cr = 1;
  var f = Ze && Ze.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(Ze, "__esModule", { value: true }), Ze.getOuterHTML = s, Ze.getInnerHTML = i, Ze.getText = a, Ze.textContent = u, Ze.innerText = c;
  var e = ft(), t = f(v0()), n = ti();
  function s(p, l) {
    return (0, t.default)(p, l);
  }
  function i(p, l) {
    return (0, e.hasChildren)(p) ? p.children.map(function(m) {
      return s(m, l);
    }).join("") : "";
  }
  function a(p) {
    return Array.isArray(p) ? p.map(a).join("") : (0, e.isTag)(p) ? p.name === "br" ? `
` : a(p.children) : (0, e.isCDATA)(p) ? a(p.children) : (0, e.isText)(p) ? p.data : "";
  }
  function u(p) {
    return Array.isArray(p) ? p.map(u).join("") : (0, e.hasChildren)(p) && !(0, e.isComment)(p) ? u(p.children) : (0, e.isText)(p) ? p.data : "";
  }
  function c(p) {
    return Array.isArray(p) ? p.map(c).join("") : (0, e.hasChildren)(p) && (p.type === n.ElementType.Tag || (0, e.isCDATA)(p)) ? c(p.children) : (0, e.isText)(p) ? p.data : "";
  }
  return Ze;
}
var Ve = {}, dr;
function g0() {
  if (dr) return Ve;
  dr = 1, Object.defineProperty(Ve, "__esModule", { value: true }), Ve.getChildren = e, Ve.getParent = t, Ve.getSiblings = n, Ve.getAttributeValue = s, Ve.hasAttrib = i, Ve.getName = a, Ve.nextElementSibling = u, Ve.prevElementSibling = c;
  var f = ft();
  function e(p) {
    return (0, f.hasChildren)(p) ? p.children : [];
  }
  function t(p) {
    return p.parent || null;
  }
  function n(p) {
    var l, m, o = t(p);
    if (o != null) return e(o);
    for (var r = [p], d = p.prev, h = p.next; d != null; ) r.unshift(d), l = d, d = l.prev;
    for (; h != null; ) r.push(h), m = h, h = m.next;
    return r;
  }
  function s(p, l) {
    var m;
    return (m = p.attribs) === null || m === void 0 ? void 0 : m[l];
  }
  function i(p, l) {
    return p.attribs != null && Object.prototype.hasOwnProperty.call(p.attribs, l) && p.attribs[l] != null;
  }
  function a(p) {
    return p.name;
  }
  function u(p) {
    for (var l, m = p.next; m !== null && !(0, f.isTag)(m); ) l = m, m = l.next;
    return m;
  }
  function c(p) {
    for (var l, m = p.prev; m !== null && !(0, f.isTag)(m); ) l = m, m = l.prev;
    return m;
  }
  return Ve;
}
var tt = {}, fr;
function b0() {
  if (fr) return tt;
  fr = 1, Object.defineProperty(tt, "__esModule", { value: true }), tt.removeElement = f, tt.replaceElement = e, tt.appendChild = t, tt.append = n, tt.prependChild = s, tt.prepend = i;
  function f(a) {
    if (a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), a.parent) {
      var u = a.parent.children, c = u.lastIndexOf(a);
      c >= 0 && u.splice(c, 1);
    }
    a.next = null, a.prev = null, a.parent = null;
  }
  function e(a, u) {
    var c = u.prev = a.prev;
    c && (c.next = u);
    var p = u.next = a.next;
    p && (p.prev = u);
    var l = u.parent = a.parent;
    if (l) {
      var m = l.children;
      m[m.lastIndexOf(a)] = u, a.parent = null;
    }
  }
  function t(a, u) {
    if (f(u), u.next = null, u.parent = a, a.children.push(u) > 1) {
      var c = a.children[a.children.length - 2];
      c.next = u, u.prev = c;
    } else u.prev = null;
  }
  function n(a, u) {
    f(u);
    var c = a.parent, p = a.next;
    if (u.next = p, u.prev = a, a.next = u, u.parent = c, p) {
      if (p.prev = u, c) {
        var l = c.children;
        l.splice(l.lastIndexOf(p), 0, u);
      }
    } else c && c.children.push(u);
  }
  function s(a, u) {
    if (f(u), u.parent = a, u.prev = null, a.children.unshift(u) !== 1) {
      var c = a.children[1];
      c.prev = u, u.next = c;
    } else u.next = null;
  }
  function i(a, u) {
    f(u);
    var c = a.parent;
    if (c) {
      var p = c.children;
      p.splice(p.indexOf(a), 0, u);
    }
    a.prev && (a.prev.next = u), u.parent = c, u.prev = a.prev, u.next = a, a.prev = u;
  }
  return tt;
}
var it = {}, pr;
function io() {
  if (pr) return it;
  pr = 1, Object.defineProperty(it, "__esModule", { value: true }), it.filter = e, it.find = t, it.findOneChild = n, it.findOne = s, it.existsOne = i, it.findAll = a;
  var f = ft();
  function e(u, c, p, l) {
    return p === void 0 && (p = true), l === void 0 && (l = 1 / 0), t(u, Array.isArray(c) ? c : [c], p, l);
  }
  function t(u, c, p, l) {
    for (var m = [], o = [Array.isArray(c) ? c : [c]], r = [0]; ; ) {
      if (r[0] >= o[0].length) {
        if (r.length === 1) return m;
        o.shift(), r.shift();
        continue;
      }
      var d = o[0][r[0]++];
      if (u(d) && (m.push(d), --l <= 0)) return m;
      p && (0, f.hasChildren)(d) && d.children.length > 0 && (r.unshift(0), o.unshift(d.children));
    }
  }
  function n(u, c) {
    return c.find(u);
  }
  function s(u, c, p) {
    p === void 0 && (p = true);
    for (var l = Array.isArray(c) ? c : [c], m = 0; m < l.length; m++) {
      var o = l[m];
      if ((0, f.isTag)(o) && u(o)) return o;
      if (p && (0, f.hasChildren)(o) && o.children.length > 0) {
        var r = s(u, o.children, true);
        if (r) return r;
      }
    }
    return null;
  }
  function i(u, c) {
    return (Array.isArray(c) ? c : [c]).some(function(p) {
      return (0, f.isTag)(p) && u(p) || (0, f.hasChildren)(p) && i(u, p.children);
    });
  }
  function a(u, c) {
    for (var p = [], l = [Array.isArray(c) ? c : [c]], m = [0]; ; ) {
      if (m[0] >= l[0].length) {
        if (l.length === 1) return p;
        l.shift(), m.shift();
        continue;
      }
      var o = l[0][m[0]++];
      (0, f.isTag)(o) && u(o) && p.push(o), (0, f.hasChildren)(o) && o.children.length > 0 && (m.unshift(0), l.unshift(o.children));
    }
  }
  return it;
}
var nt = {}, hr;
function no() {
  if (hr) return nt;
  hr = 1, Object.defineProperty(nt, "__esModule", { value: true }), nt.testElement = a, nt.getElements = u, nt.getElementById = c, nt.getElementsByTagName = p, nt.getElementsByClassName = l, nt.getElementsByTagType = m;
  var f = ft(), e = io(), t = { tag_name: function(o) {
    return typeof o == "function" ? function(r) {
      return (0, f.isTag)(r) && o(r.name);
    } : o === "*" ? f.isTag : function(r) {
      return (0, f.isTag)(r) && r.name === o;
    };
  }, tag_type: function(o) {
    return typeof o == "function" ? function(r) {
      return o(r.type);
    } : function(r) {
      return r.type === o;
    };
  }, tag_contains: function(o) {
    return typeof o == "function" ? function(r) {
      return (0, f.isText)(r) && o(r.data);
    } : function(r) {
      return (0, f.isText)(r) && r.data === o;
    };
  } };
  function n(o, r) {
    return typeof r == "function" ? function(d) {
      return (0, f.isTag)(d) && r(d.attribs[o]);
    } : function(d) {
      return (0, f.isTag)(d) && d.attribs[o] === r;
    };
  }
  function s(o, r) {
    return function(d) {
      return o(d) || r(d);
    };
  }
  function i(o) {
    var r = Object.keys(o).map(function(d) {
      var h = o[d];
      return Object.prototype.hasOwnProperty.call(t, d) ? t[d](h) : n(d, h);
    });
    return r.length === 0 ? null : r.reduce(s);
  }
  function a(o, r) {
    var d = i(o);
    return d ? d(r) : true;
  }
  function u(o, r, d, h) {
    h === void 0 && (h = 1 / 0);
    var v = i(o);
    return v ? (0, e.filter)(v, r, d, h) : [];
  }
  function c(o, r, d) {
    return d === void 0 && (d = true), Array.isArray(r) || (r = [r]), (0, e.findOne)(n("id", o), r, d);
  }
  function p(o, r, d, h) {
    return d === void 0 && (d = true), h === void 0 && (h = 1 / 0), (0, e.filter)(t.tag_name(o), r, d, h);
  }
  function l(o, r, d, h) {
    return d === void 0 && (d = true), h === void 0 && (h = 1 / 0), (0, e.filter)(n("class", o), r, d, h);
  }
  function m(o, r, d, h) {
    return d === void 0 && (d = true), h === void 0 && (h = 1 / 0), (0, e.filter)(t.tag_type(o), r, d, h);
  }
  return nt;
}
var ut = {}, mr;
function y0() {
  if (mr) return ut;
  mr = 1, Object.defineProperty(ut, "__esModule", { value: true }), ut.DocumentPosition = void 0, ut.removeSubsets = e, ut.compareDocumentPosition = n, ut.uniqueSort = s;
  var f = ft();
  function e(i) {
    for (var a = i.length; --a >= 0; ) {
      var u = i[a];
      if (a > 0 && i.lastIndexOf(u, a - 1) >= 0) {
        i.splice(a, 1);
        continue;
      }
      for (var c = u.parent; c; c = c.parent) if (i.includes(c)) {
        i.splice(a, 1);
        break;
      }
    }
    return i;
  }
  var t;
  (function(i) {
    i[i.DISCONNECTED = 1] = "DISCONNECTED", i[i.PRECEDING = 2] = "PRECEDING", i[i.FOLLOWING = 4] = "FOLLOWING", i[i.CONTAINS = 8] = "CONTAINS", i[i.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(t || (ut.DocumentPosition = t = {}));
  function n(i, a) {
    var u = [], c = [];
    if (i === a) return 0;
    for (var p = (0, f.hasChildren)(i) ? i : i.parent; p; ) u.unshift(p), p = p.parent;
    for (p = (0, f.hasChildren)(a) ? a : a.parent; p; ) c.unshift(p), p = p.parent;
    for (var l = Math.min(u.length, c.length), m = 0; m < l && u[m] === c[m]; ) m++;
    if (m === 0) return t.DISCONNECTED;
    var o = u[m - 1], r = o.children, d = u[m], h = c[m];
    return r.indexOf(d) > r.indexOf(h) ? o === a ? t.FOLLOWING | t.CONTAINED_BY : t.FOLLOWING : o === i ? t.PRECEDING | t.CONTAINS : t.PRECEDING;
  }
  function s(i) {
    return i = i.filter(function(a, u, c) {
      return !c.includes(a, u + 1);
    }), i.sort(function(a, u) {
      var c = n(a, u);
      return c & t.PRECEDING ? -1 : c & t.FOLLOWING ? 1 : 0;
    }), i;
  }
  return ut;
}
var hi = {}, vr;
function x0() {
  if (vr) return hi;
  vr = 1, Object.defineProperty(hi, "__esModule", { value: true }), hi.getFeed = t;
  var f = to(), e = no();
  function t(o) {
    var r = c(m, o);
    return r ? r.name === "feed" ? n(r) : s(r) : null;
  }
  function n(o) {
    var r, d = o.children, h = { type: "atom", items: (0, e.getElementsByTagName)("entry", d).map(function(x) {
      var w, y = x.children, b = { media: u(y) };
      l(b, "id", "id", y), l(b, "title", "title", y);
      var S = (w = c("link", y)) === null || w === void 0 ? void 0 : w.attribs.href;
      S && (b.link = S);
      var C = p("summary", y) || p("content", y);
      C && (b.description = C);
      var _ = p("updated", y);
      return _ && (b.pubDate = new Date(_)), b;
    }) };
    l(h, "id", "id", d), l(h, "title", "title", d);
    var v = (r = c("link", d)) === null || r === void 0 ? void 0 : r.attribs.href;
    v && (h.link = v), l(h, "description", "subtitle", d);
    var g = p("updated", d);
    return g && (h.updated = new Date(g)), l(h, "author", "email", d, true), h;
  }
  function s(o) {
    var r, d, h = (d = (r = c("channel", o.children)) === null || r === void 0 ? void 0 : r.children) !== null && d !== void 0 ? d : [], v = { type: o.name.substr(0, 3), id: "", items: (0, e.getElementsByTagName)("item", o.children).map(function(x) {
      var w = x.children, y = { media: u(w) };
      l(y, "id", "guid", w), l(y, "title", "title", w), l(y, "link", "link", w), l(y, "description", "description", w);
      var b = p("pubDate", w) || p("dc:date", w);
      return b && (y.pubDate = new Date(b)), y;
    }) };
    l(v, "title", "title", h), l(v, "link", "link", h), l(v, "description", "description", h);
    var g = p("lastBuildDate", h);
    return g && (v.updated = new Date(g)), l(v, "author", "managingEditor", h, true), v;
  }
  var i = ["url", "type", "lang"], a = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
  function u(o) {
    return (0, e.getElementsByTagName)("media:content", o).map(function(r) {
      for (var d = r.attribs, h = { medium: d.medium, isDefault: !!d.isDefault }, v = 0, g = i; v < g.length; v++) {
        var x = g[v];
        d[x] && (h[x] = d[x]);
      }
      for (var w = 0, y = a; w < y.length; w++) {
        var x = y[w];
        d[x] && (h[x] = parseInt(d[x], 10));
      }
      return d.expression && (h.expression = d.expression), h;
    });
  }
  function c(o, r) {
    return (0, e.getElementsByTagName)(o, r, true, 1)[0];
  }
  function p(o, r, d) {
    return d === void 0 && (d = false), (0, f.textContent)((0, e.getElementsByTagName)(o, r, d, 1)).trim();
  }
  function l(o, r, d, h, v) {
    v === void 0 && (v = false);
    var g = p(d, h, v);
    g && (o[r] = g);
  }
  function m(o) {
    return o === "rss" || o === "feed" || o === "rdf:RDF";
  }
  return hi;
}
var gr;
function sn() {
  return gr || (gr = 1, function(f) {
    var e = vt && vt.__createBinding || (Object.create ? function(s, i, a, u) {
      u === void 0 && (u = a);
      var c = Object.getOwnPropertyDescriptor(i, a);
      (!c || ("get" in c ? !i.__esModule : c.writable || c.configurable)) && (c = { enumerable: true, get: function() {
        return i[a];
      } }), Object.defineProperty(s, u, c);
    } : function(s, i, a, u) {
      u === void 0 && (u = a), s[u] = i[a];
    }), t = vt && vt.__exportStar || function(s, i) {
      for (var a in s) a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && e(i, s, a);
    };
    Object.defineProperty(f, "__esModule", { value: true }), f.hasChildren = f.isDocument = f.isComment = f.isText = f.isCDATA = f.isTag = void 0, t(to(), f), t(g0(), f), t(b0(), f), t(io(), f), t(no(), f), t(y0(), f), t(x0(), f);
    var n = ft();
    Object.defineProperty(f, "isTag", { enumerable: true, get: function() {
      return n.isTag;
    } }), Object.defineProperty(f, "isCDATA", { enumerable: true, get: function() {
      return n.isCDATA;
    } }), Object.defineProperty(f, "isText", { enumerable: true, get: function() {
      return n.isText;
    } }), Object.defineProperty(f, "isComment", { enumerable: true, get: function() {
      return n.isComment;
    } }), Object.defineProperty(f, "isDocument", { enumerable: true, get: function() {
      return n.isDocument;
    } }), Object.defineProperty(f, "hasChildren", { enumerable: true, get: function() {
      return n.hasChildren;
    } });
  }(vt)), vt;
}
var br;
function w0() {
  return br || (br = 1, function(f) {
    var e = Ue && Ue.__createBinding || (Object.create ? function(g, x, w, y) {
      y === void 0 && (y = w);
      var b = Object.getOwnPropertyDescriptor(x, w);
      (!b || ("get" in b ? !x.__esModule : b.writable || b.configurable)) && (b = { enumerable: true, get: function() {
        return x[w];
      } }), Object.defineProperty(g, y, b);
    } : function(g, x, w, y) {
      y === void 0 && (y = w), g[y] = x[w];
    }), t = Ue && Ue.__setModuleDefault || (Object.create ? function(g, x) {
      Object.defineProperty(g, "default", { enumerable: true, value: x });
    } : function(g, x) {
      g.default = x;
    }), n = Ue && Ue.__importStar || function(g) {
      if (g && g.__esModule) return g;
      var x = {};
      if (g != null) for (var w in g) w !== "default" && Object.prototype.hasOwnProperty.call(g, w) && e(x, g, w);
      return t(x, g), x;
    }, s = Ue && Ue.__importDefault || function(g) {
      return g && g.__esModule ? g : { default: g };
    };
    Object.defineProperty(f, "__esModule", { value: true }), f.DomUtils = f.parseFeed = f.getFeed = f.ElementType = f.Tokenizer = f.createDomStream = f.parseDOM = f.parseDocument = f.DefaultHandler = f.DomHandler = f.Parser = void 0;
    var i = Ks(), a = Ks();
    Object.defineProperty(f, "Parser", { enumerable: true, get: function() {
      return a.Parser;
    } });
    var u = ft(), c = ft();
    Object.defineProperty(f, "DomHandler", { enumerable: true, get: function() {
      return c.DomHandler;
    } }), Object.defineProperty(f, "DefaultHandler", { enumerable: true, get: function() {
      return c.DomHandler;
    } });
    function p(g, x) {
      var w = new u.DomHandler(void 0, x);
      return new i.Parser(w, x).end(g), w.root;
    }
    f.parseDocument = p;
    function l(g, x) {
      return p(g, x).children;
    }
    f.parseDOM = l;
    function m(g, x, w) {
      var y = new u.DomHandler(g, x, w);
      return new i.Parser(y, x);
    }
    f.createDomStream = m;
    var o = eo();
    Object.defineProperty(f, "Tokenizer", { enumerable: true, get: function() {
      return s(o).default;
    } }), f.ElementType = n(ti());
    var r = sn(), d = sn();
    Object.defineProperty(f, "getFeed", { enumerable: true, get: function() {
      return d.getFeed;
    } });
    var h = { xmlMode: true };
    function v(g, x) {
      return x === void 0 && (x = h), (0, r.getFeed)(l(g, x));
    }
    f.parseFeed = v, f.DomUtils = n(sn());
  }(Ue)), Ue;
}
var rn, yr;
function S0() {
  return yr || (yr = 1, rn = (f) => {
    if (typeof f != "string") throw new TypeError("Expected a string");
    return f.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }), rn;
}
var mi = {}, xr;
function C0() {
  if (xr) return mi;
  xr = 1, Object.defineProperty(mi, "__esModule", { value: true });
  /*!
  * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
  *
  * Copyright (c) 2014-2017, Jon Schlinkert.
  * Released under the MIT License.
  */
  function f(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function e(t) {
    var n, s;
    return f(t) === false ? false : (n = t.constructor, n === void 0 ? true : (s = n.prototype, !(f(s) === false || s.hasOwnProperty("isPrototypeOf") === false)));
  }
  return mi.isPlainObject = e, mi;
}
var an, wr;
function _0() {
  if (wr) return an;
  wr = 1;
  var f = function(x) {
    return e(x) && !t(x);
  };
  function e(g) {
    return !!g && typeof g == "object";
  }
  function t(g) {
    var x = Object.prototype.toString.call(g);
    return x === "[object RegExp]" || x === "[object Date]" || i(g);
  }
  var n = typeof Symbol == "function" && Symbol.for, s = n ? Symbol.for("react.element") : 60103;
  function i(g) {
    return g.$$typeof === s;
  }
  function a(g) {
    return Array.isArray(g) ? [] : {};
  }
  function u(g, x) {
    return x.clone !== false && x.isMergeableObject(g) ? h(a(g), g, x) : g;
  }
  function c(g, x, w) {
    return g.concat(x).map(function(y) {
      return u(y, w);
    });
  }
  function p(g, x) {
    if (!x.customMerge) return h;
    var w = x.customMerge(g);
    return typeof w == "function" ? w : h;
  }
  function l(g) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(g).filter(function(x) {
      return Object.propertyIsEnumerable.call(g, x);
    }) : [];
  }
  function m(g) {
    return Object.keys(g).concat(l(g));
  }
  function o(g, x) {
    try {
      return x in g;
    } catch {
      return false;
    }
  }
  function r(g, x) {
    return o(g, x) && !(Object.hasOwnProperty.call(g, x) && Object.propertyIsEnumerable.call(g, x));
  }
  function d(g, x, w) {
    var y = {};
    return w.isMergeableObject(g) && m(g).forEach(function(b) {
      y[b] = u(g[b], w);
    }), m(x).forEach(function(b) {
      r(g, b) || (o(g, b) && w.isMergeableObject(x[b]) ? y[b] = p(b, w)(g[b], x[b], w) : y[b] = u(x[b], w));
    }), y;
  }
  function h(g, x, w) {
    w = w || {}, w.arrayMerge = w.arrayMerge || c, w.isMergeableObject = w.isMergeableObject || f, w.cloneUnlessOtherwiseSpecified = u;
    var y = Array.isArray(x), b = Array.isArray(g), S = y === b;
    return S ? y ? w.arrayMerge(g, x, w) : d(g, x, w) : u(x, w);
  }
  h.all = function(x, w) {
    if (!Array.isArray(x)) throw new Error("first argument should be an array");
    return x.reduce(function(y, b) {
      return h(y, b, w);
    }, {});
  };
  var v = h;
  return an = v, an;
}
var Mi = { exports: {} }, E0 = Mi.exports, Sr;
function k0() {
  return Sr || (Sr = 1, function(f) {
    (function(e, t) {
      f.exports ? f.exports = t() : e.parseSrcset = t();
    })(E0, function() {
      return function(e) {
        function t(y) {
          return y === " " || y === "	" || y === `
` || y === "\f" || y === "\r";
        }
        function n(y) {
          var b, S = y.exec(e.substring(v));
          if (S) return b = S[0], v += b.length, b;
        }
        for (var s = e.length, i = /^[ \t\n\r\u000c]+/, a = /^[, \t\n\r\u000c]+/, u = /^[^ \t\n\r\u000c]+/, c = /[,]+$/, p = /^\d+$/, l = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, m, o, r, d, h, v = 0, g = []; ; ) {
          if (n(a), v >= s) return g;
          m = n(u), o = [], m.slice(-1) === "," ? (m = m.replace(c, ""), w()) : x();
        }
        function x() {
          for (n(i), r = "", d = "in descriptor"; ; ) {
            if (h = e.charAt(v), d === "in descriptor") if (t(h)) r && (o.push(r), r = "", d = "after descriptor");
            else if (h === ",") {
              v += 1, r && o.push(r), w();
              return;
            } else if (h === "(") r = r + h, d = "in parens";
            else if (h === "") {
              r && o.push(r), w();
              return;
            } else r = r + h;
            else if (d === "in parens") if (h === ")") r = r + h, d = "in descriptor";
            else if (h === "") {
              o.push(r), w();
              return;
            } else r = r + h;
            else if (d === "after descriptor" && !t(h)) if (h === "") {
              w();
              return;
            } else d = "in descriptor", v -= 1;
            v += 1;
          }
        }
        function w() {
          var y = false, b, S, C, _, P = {}, M, k, T, L, D;
          for (_ = 0; _ < o.length; _++) M = o[_], k = M[M.length - 1], T = M.substring(0, M.length - 1), L = parseInt(T, 10), D = parseFloat(T), p.test(T) && k === "w" ? ((b || S) && (y = true), L === 0 ? y = true : b = L) : l.test(T) && k === "x" ? ((b || S || C) && (y = true), D < 0 ? y = true : S = D) : p.test(T) && k === "h" ? ((C || S) && (y = true), L === 0 ? y = true : C = L) : y = true;
          y ? console && console.log && console.log("Invalid srcset descriptor found in '" + e + "' at '" + M + "'.") : (P.url = m, b && (P.w = b), S && (P.d = S), C && (P.h = C), g.push(P));
        }
      };
    });
  }(Mi)), Mi.exports;
}
var vi = { exports: {} }, Cr;
function T0() {
  if (Cr) return vi.exports;
  Cr = 1;
  var f = String, e = function() {
    return { isColorSupported: false, reset: f, bold: f, dim: f, italic: f, underline: f, inverse: f, hidden: f, strikethrough: f, black: f, red: f, green: f, yellow: f, blue: f, magenta: f, cyan: f, white: f, gray: f, bgBlack: f, bgRed: f, bgGreen: f, bgYellow: f, bgBlue: f, bgMagenta: f, bgCyan: f, bgWhite: f, blackBright: f, redBright: f, greenBright: f, yellowBright: f, blueBright: f, magentaBright: f, cyanBright: f, whiteBright: f, bgBlackBright: f, bgRedBright: f, bgGreenBright: f, bgYellowBright: f, bgBlueBright: f, bgMagentaBright: f, bgCyanBright: f, bgWhiteBright: f };
  };
  return vi.exports = e(), vi.exports.createColors = e, vi.exports;
}
const P0 = {}, M0 = Object.freeze(Object.defineProperty({ __proto__: null, default: P0 }, Symbol.toStringTag, { value: "Module" })), so = su(M0);
var on, _r;
function as() {
  if (_r) return on;
  _r = 1;
  let f = T0(), e = so;
  class t extends Error {
    constructor(s, i, a, u, c, p) {
      super(s), this.name = "CssSyntaxError", this.reason = s, c && (this.file = c), u && (this.source = u), p && (this.plugin = p), typeof i < "u" && typeof a < "u" && (typeof i == "number" ? (this.line = i, this.column = a) : (this.line = i.line, this.column = i.column, this.endLine = a.line, this.endColumn = a.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, t);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(s) {
      if (!this.source) return "";
      let i = this.source;
      s == null && (s = f.isColorSupported);
      let a = (r) => r, u = (r) => r, c = (r) => r;
      if (s) {
        let { bold: r, gray: d, red: h } = f.createColors(true);
        u = (v) => r(h(v)), a = (v) => d(v), e && (c = (v) => e(v));
      }
      let p = i.split(/\r?\n/), l = Math.max(this.line - 3, 0), m = Math.min(this.line + 2, p.length), o = String(m).length;
      return p.slice(l, m).map((r, d) => {
        let h = l + 1 + d, v = " " + (" " + h).slice(-o) + " | ";
        if (h === this.line) {
          if (r.length > 160) {
            let x = 20, w = Math.max(0, this.column - x), y = Math.max(this.column + x, this.endColumn + x), b = r.slice(w, y), S = a(v.replace(/\d/g, " ")) + r.slice(0, Math.min(this.column - 1, x - 1)).replace(/[^\t]/g, " ");
            return u(">") + a(v) + c(b) + `
 ` + S + u("^");
          }
          let g = a(v.replace(/\d/g, " ")) + r.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return u(">") + a(v) + c(r) + `
 ` + g + u("^");
        }
        return " " + a(v) + c(r);
      }).join(`
`);
    }
    toString() {
      let s = this.showSourceCode();
      return s && (s = `

` + s + `
`), this.name + ": " + this.message + s;
    }
  }
  return on = t, t.default = t, on;
}
var un, Er;
function ro() {
  if (Er) return un;
  Er = 1;
  const f = { after: `
`, beforeClose: `
`, beforeComment: `
`, beforeDecl: `
`, beforeOpen: " ", beforeRule: `
`, colon: ": ", commentLeft: " ", commentRight: " ", emptyBody: "", indent: "    ", semicolon: false };
  function e(n) {
    return n[0].toUpperCase() + n.slice(1);
  }
  class t {
    constructor(s) {
      this.builder = s;
    }
    atrule(s, i) {
      let a = "@" + s.name, u = s.params ? this.rawValue(s, "params") : "";
      if (typeof s.raws.afterName < "u" ? a += s.raws.afterName : u && (a += " "), s.nodes) this.block(s, a + u);
      else {
        let c = (s.raws.between || "") + (i ? ";" : "");
        this.builder(a + u + c, s);
      }
    }
    beforeAfter(s, i) {
      let a;
      s.type === "decl" ? a = this.raw(s, null, "beforeDecl") : s.type === "comment" ? a = this.raw(s, null, "beforeComment") : i === "before" ? a = this.raw(s, null, "beforeRule") : a = this.raw(s, null, "beforeClose");
      let u = s.parent, c = 0;
      for (; u && u.type !== "root"; ) c += 1, u = u.parent;
      if (a.includes(`
`)) {
        let p = this.raw(s, null, "indent");
        if (p.length) for (let l = 0; l < c; l++) a += p;
      }
      return a;
    }
    block(s, i) {
      let a = this.raw(s, "between", "beforeOpen");
      this.builder(i + a + "{", s, "start");
      let u;
      s.nodes && s.nodes.length ? (this.body(s), u = this.raw(s, "after")) : u = this.raw(s, "after", "emptyBody"), u && this.builder(u), this.builder("}", s, "end");
    }
    body(s) {
      let i = s.nodes.length - 1;
      for (; i > 0 && s.nodes[i].type === "comment"; ) i -= 1;
      let a = this.raw(s, "semicolon");
      for (let u = 0; u < s.nodes.length; u++) {
        let c = s.nodes[u], p = this.raw(c, "before");
        p && this.builder(p), this.stringify(c, i !== u || a);
      }
    }
    comment(s) {
      let i = this.raw(s, "left", "commentLeft"), a = this.raw(s, "right", "commentRight");
      this.builder("/*" + i + s.text + a + "*/", s);
    }
    decl(s, i) {
      let a = this.raw(s, "between", "colon"), u = s.prop + a + this.rawValue(s, "value");
      s.important && (u += s.raws.important || " !important"), i && (u += ";"), this.builder(u, s);
    }
    document(s) {
      this.body(s);
    }
    raw(s, i, a) {
      let u;
      if (a || (a = i), i && (u = s.raws[i], typeof u < "u")) return u;
      let c = s.parent;
      if (a === "before" && (!c || c.type === "root" && c.first === s || c && c.type === "document")) return "";
      if (!c) return f[a];
      let p = s.root();
      if (p.rawCache || (p.rawCache = {}), typeof p.rawCache[a] < "u") return p.rawCache[a];
      if (a === "before" || a === "after") return this.beforeAfter(s, a);
      {
        let l = "raw" + e(a);
        this[l] ? u = this[l](p, s) : p.walk((m) => {
          if (u = m.raws[i], typeof u < "u") return false;
        });
      }
      return typeof u > "u" && (u = f[a]), p.rawCache[a] = u, u;
    }
    rawBeforeClose(s) {
      let i;
      return s.walk((a) => {
        if (a.nodes && a.nodes.length > 0 && typeof a.raws.after < "u") return i = a.raws.after, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), false;
      }), i && (i = i.replace(/\S/g, "")), i;
    }
    rawBeforeComment(s, i) {
      let a;
      return s.walkComments((u) => {
        if (typeof u.raws.before < "u") return a = u.raws.before, a.includes(`
`) && (a = a.replace(/[^\n]+$/, "")), false;
      }), typeof a > "u" ? a = this.raw(i, null, "beforeDecl") : a && (a = a.replace(/\S/g, "")), a;
    }
    rawBeforeDecl(s, i) {
      let a;
      return s.walkDecls((u) => {
        if (typeof u.raws.before < "u") return a = u.raws.before, a.includes(`
`) && (a = a.replace(/[^\n]+$/, "")), false;
      }), typeof a > "u" ? a = this.raw(i, null, "beforeRule") : a && (a = a.replace(/\S/g, "")), a;
    }
    rawBeforeOpen(s) {
      let i;
      return s.walk((a) => {
        if (a.type !== "decl" && (i = a.raws.between, typeof i < "u")) return false;
      }), i;
    }
    rawBeforeRule(s) {
      let i;
      return s.walk((a) => {
        if (a.nodes && (a.parent !== s || s.first !== a) && typeof a.raws.before < "u") return i = a.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), false;
      }), i && (i = i.replace(/\S/g, "")), i;
    }
    rawColon(s) {
      let i;
      return s.walkDecls((a) => {
        if (typeof a.raws.between < "u") return i = a.raws.between.replace(/[^\s:]/g, ""), false;
      }), i;
    }
    rawEmptyBody(s) {
      let i;
      return s.walk((a) => {
        if (a.nodes && a.nodes.length === 0 && (i = a.raws.after, typeof i < "u")) return false;
      }), i;
    }
    rawIndent(s) {
      if (s.raws.indent) return s.raws.indent;
      let i;
      return s.walk((a) => {
        let u = a.parent;
        if (u && u !== s && u.parent && u.parent === s && typeof a.raws.before < "u") {
          let c = a.raws.before.split(`
`);
          return i = c[c.length - 1], i = i.replace(/\S/g, ""), false;
        }
      }), i;
    }
    rawSemicolon(s) {
      let i;
      return s.walk((a) => {
        if (a.nodes && a.nodes.length && a.last.type === "decl" && (i = a.raws.semicolon, typeof i < "u")) return false;
      }), i;
    }
    rawValue(s, i) {
      let a = s[i], u = s.raws[i];
      return u && u.value === a ? u.raw : a;
    }
    root(s) {
      this.body(s), s.raws.after && this.builder(s.raws.after);
    }
    rule(s) {
      this.block(s, this.rawValue(s, "selector")), s.raws.ownSemicolon && this.builder(s.raws.ownSemicolon, s, "end");
    }
    stringify(s, i) {
      if (!this[s.type]) throw new Error("Unknown AST node type " + s.type + ". Maybe you need to change PostCSS stringifier.");
      this[s.type](s, i);
    }
  }
  return un = t, t.default = t, un;
}
var ln, kr;
function $i() {
  if (kr) return ln;
  kr = 1;
  let f = ro();
  function e(t, n) {
    new f(n).stringify(t);
  }
  return ln = e, e.default = e, ln;
}
var gi = {}, Tr;
function os() {
  return Tr || (Tr = 1, gi.isClean = Symbol("isClean"), gi.my = Symbol("my")), gi;
}
var cn, Pr;
function Ni() {
  if (Pr) return cn;
  Pr = 1;
  let f = as(), e = ro(), t = $i(), { isClean: n, my: s } = os();
  function i(c, p) {
    let l = new c.constructor();
    for (let m in c) {
      if (!Object.prototype.hasOwnProperty.call(c, m) || m === "proxyCache") continue;
      let o = c[m], r = typeof o;
      m === "parent" && r === "object" ? p && (l[m] = p) : m === "source" ? l[m] = o : Array.isArray(o) ? l[m] = o.map((d) => i(d, l)) : (r === "object" && o !== null && (o = i(o)), l[m] = o);
    }
    return l;
  }
  function a(c, p) {
    if (p && typeof p.offset < "u") return p.offset;
    let l = 1, m = 1, o = 0;
    for (let r = 0; r < c.length; r++) {
      if (m === p.line && l === p.column) {
        o = r;
        break;
      }
      c[r] === `
` ? (l = 1, m += 1) : l += 1;
    }
    return o;
  }
  class u {
    get proxyOf() {
      return this;
    }
    constructor(p = {}) {
      this.raws = {}, this[n] = false, this[s] = true;
      for (let l in p) if (l === "nodes") {
        this.nodes = [];
        for (let m of p[l]) typeof m.clone == "function" ? this.append(m.clone()) : this.append(m);
      } else this[l] = p[l];
    }
    addToError(p) {
      if (p.postcssNode = this, p.stack && this.source && /\n\s{4}at /.test(p.stack)) {
        let l = this.source;
        p.stack = p.stack.replace(/\n\s{4}at /, `$&${l.input.from}:${l.start.line}:${l.start.column}$&`);
      }
      return p;
    }
    after(p) {
      return this.parent.insertAfter(this, p), this;
    }
    assign(p = {}) {
      for (let l in p) this[l] = p[l];
      return this;
    }
    before(p) {
      return this.parent.insertBefore(this, p), this;
    }
    cleanRaws(p) {
      delete this.raws.before, delete this.raws.after, p || delete this.raws.between;
    }
    clone(p = {}) {
      let l = i(this);
      for (let m in p) l[m] = p[m];
      return l;
    }
    cloneAfter(p = {}) {
      let l = this.clone(p);
      return this.parent.insertAfter(this, l), l;
    }
    cloneBefore(p = {}) {
      let l = this.clone(p);
      return this.parent.insertBefore(this, l), l;
    }
    error(p, l = {}) {
      if (this.source) {
        let { end: m, start: o } = this.rangeBy(l);
        return this.source.input.error(p, { column: o.column, line: o.line }, { column: m.column, line: m.line }, l);
      }
      return new f(p);
    }
    getProxyProcessor() {
      return { get(p, l) {
        return l === "proxyOf" ? p : l === "root" ? () => p.root().toProxy() : p[l];
      }, set(p, l, m) {
        return p[l] === m || (p[l] = m, (l === "prop" || l === "value" || l === "name" || l === "params" || l === "important" || l === "text") && p.markDirty()), true;
      } };
    }
    markClean() {
      this[n] = true;
    }
    markDirty() {
      if (this[n]) {
        this[n] = false;
        let p = this;
        for (; p = p.parent; ) p[n] = false;
      }
    }
    next() {
      if (!this.parent) return;
      let p = this.parent.index(this);
      return this.parent.nodes[p + 1];
    }
    positionBy(p = {}) {
      let l = this.source.start;
      if (p.index) l = this.positionInside(p.index);
      else if (p.word) {
        let m = "document" in this.source.input ? this.source.input.document : this.source.input.css, r = m.slice(a(m, this.source.start), a(m, this.source.end)).indexOf(p.word);
        r !== -1 && (l = this.positionInside(r));
      }
      return l;
    }
    positionInside(p) {
      let l = this.source.start.column, m = this.source.start.line, o = "document" in this.source.input ? this.source.input.document : this.source.input.css, r = a(o, this.source.start), d = r + p;
      for (let h = r; h < d; h++) o[h] === `
` ? (l = 1, m += 1) : l += 1;
      return { column: l, line: m, offset: d };
    }
    prev() {
      if (!this.parent) return;
      let p = this.parent.index(this);
      return this.parent.nodes[p - 1];
    }
    rangeBy(p = {}) {
      let l = "document" in this.source.input ? this.source.input.document : this.source.input.css, m = { column: this.source.start.column, line: this.source.start.line, offset: a(l, this.source.start) }, o = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line, offset: typeof this.source.end.offset == "number" ? this.source.end.offset : a(l, this.source.end) + 1 } : { column: m.column + 1, line: m.line, offset: m.offset + 1 };
      if (p.word) {
        let d = l.slice(a(l, this.source.start), a(l, this.source.end)).indexOf(p.word);
        d !== -1 && (m = this.positionInside(d), o = this.positionInside(d + p.word.length));
      } else p.start ? m = { column: p.start.column, line: p.start.line, offset: a(l, p.start) } : p.index && (m = this.positionInside(p.index)), p.end ? o = { column: p.end.column, line: p.end.line, offset: a(l, p.end) } : typeof p.endIndex == "number" ? o = this.positionInside(p.endIndex) : p.index && (o = this.positionInside(p.index + 1));
      return (o.line < m.line || o.line === m.line && o.column <= m.column) && (o = { column: m.column + 1, line: m.line, offset: m.offset + 1 }), { end: o, start: m };
    }
    raw(p, l) {
      return new e().raw(this, p, l);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...p) {
      if (this.parent) {
        let l = this, m = false;
        for (let o of p) o === this ? m = true : m ? (this.parent.insertAfter(l, o), l = o) : this.parent.insertBefore(l, o);
        m || this.remove();
      }
      return this;
    }
    root() {
      let p = this;
      for (; p.parent && p.parent.type !== "document"; ) p = p.parent;
      return p;
    }
    toJSON(p, l) {
      let m = {}, o = l == null;
      l = l || /* @__PURE__ */ new Map();
      let r = 0;
      for (let d in this) {
        if (!Object.prototype.hasOwnProperty.call(this, d) || d === "parent" || d === "proxyCache") continue;
        let h = this[d];
        if (Array.isArray(h)) m[d] = h.map((v) => typeof v == "object" && v.toJSON ? v.toJSON(null, l) : v);
        else if (typeof h == "object" && h.toJSON) m[d] = h.toJSON(null, l);
        else if (d === "source") {
          if (h == null) continue;
          let v = l.get(h.input);
          v == null && (v = r, l.set(h.input, r), r++), m[d] = { end: h.end, inputId: v, start: h.start };
        } else m[d] = h;
      }
      return o && (m.inputs = [...l.keys()].map((d) => d.toJSON())), m;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(p = t) {
      p.stringify && (p = p.stringify);
      let l = "";
      return p(this, (m) => {
        l += m;
      }), l;
    }
    warn(p, l, m = {}) {
      let o = { node: this };
      for (let r in m) o[r] = m[r];
      return p.warn(l, o);
    }
  }
  return cn = u, u.default = u, cn;
}
var dn, Mr;
function ji() {
  if (Mr) return dn;
  Mr = 1;
  let f = Ni();
  class e extends f {
    constructor(n) {
      super(n), this.type = "comment";
    }
  }
  return dn = e, e.default = e, dn;
}
var fn, Lr;
function Fi() {
  if (Lr) return fn;
  Lr = 1;
  let f = Ni();
  class e extends f {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(n) {
      n && typeof n.value < "u" && typeof n.value != "string" && (n = { ...n, value: String(n.value) }), super(n), this.type = "decl";
    }
  }
  return fn = e, e.default = e, fn;
}
var pn, Or;
function kt() {
  if (Or) return pn;
  Or = 1;
  let f = ji(), e = Fi(), t = Ni(), { isClean: n, my: s } = os(), i, a, u, c;
  function p(o) {
    return o.map((r) => (r.nodes && (r.nodes = p(r.nodes)), delete r.source, r));
  }
  function l(o) {
    if (o[n] = false, o.proxyOf.nodes) for (let r of o.proxyOf.nodes) l(r);
  }
  class m extends t {
    get first() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...r) {
      for (let d of r) {
        let h = this.normalize(d, this.last);
        for (let v of h) this.proxyOf.nodes.push(v);
      }
      return this.markDirty(), this;
    }
    cleanRaws(r) {
      if (super.cleanRaws(r), this.nodes) for (let d of this.nodes) d.cleanRaws(r);
    }
    each(r) {
      if (!this.proxyOf.nodes) return;
      let d = this.getIterator(), h, v;
      for (; this.indexes[d] < this.proxyOf.nodes.length && (h = this.indexes[d], v = r(this.proxyOf.nodes[h], h), v !== false); ) this.indexes[d] += 1;
      return delete this.indexes[d], v;
    }
    every(r) {
      return this.nodes.every(r);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let r = this.lastEach;
      return this.indexes[r] = 0, r;
    }
    getProxyProcessor() {
      return { get(r, d) {
        return d === "proxyOf" ? r : r[d] ? d === "each" || typeof d == "string" && d.startsWith("walk") ? (...h) => r[d](...h.map((v) => typeof v == "function" ? (g, x) => v(g.toProxy(), x) : v)) : d === "every" || d === "some" ? (h) => r[d]((v, ...g) => h(v.toProxy(), ...g)) : d === "root" ? () => r.root().toProxy() : d === "nodes" ? r.nodes.map((h) => h.toProxy()) : d === "first" || d === "last" ? r[d].toProxy() : r[d] : r[d];
      }, set(r, d, h) {
        return r[d] === h || (r[d] = h, (d === "name" || d === "params" || d === "selector") && r.markDirty()), true;
      } };
    }
    index(r) {
      return typeof r == "number" ? r : (r.proxyOf && (r = r.proxyOf), this.proxyOf.nodes.indexOf(r));
    }
    insertAfter(r, d) {
      let h = this.index(r), v = this.normalize(d, this.proxyOf.nodes[h]).reverse();
      h = this.index(r);
      for (let x of v) this.proxyOf.nodes.splice(h + 1, 0, x);
      let g;
      for (let x in this.indexes) g = this.indexes[x], h < g && (this.indexes[x] = g + v.length);
      return this.markDirty(), this;
    }
    insertBefore(r, d) {
      let h = this.index(r), v = h === 0 ? "prepend" : false, g = this.normalize(d, this.proxyOf.nodes[h], v).reverse();
      h = this.index(r);
      for (let w of g) this.proxyOf.nodes.splice(h, 0, w);
      let x;
      for (let w in this.indexes) x = this.indexes[w], h <= x && (this.indexes[w] = x + g.length);
      return this.markDirty(), this;
    }
    normalize(r, d) {
      if (typeof r == "string") r = p(a(r).nodes);
      else if (typeof r > "u") r = [];
      else if (Array.isArray(r)) {
        r = r.slice(0);
        for (let v of r) v.parent && v.parent.removeChild(v, "ignore");
      } else if (r.type === "root" && this.type !== "document") {
        r = r.nodes.slice(0);
        for (let v of r) v.parent && v.parent.removeChild(v, "ignore");
      } else if (r.type) r = [r];
      else if (r.prop) {
        if (typeof r.value > "u") throw new Error("Value field is missed in node creation");
        typeof r.value != "string" && (r.value = String(r.value)), r = [new e(r)];
      } else if (r.selector || r.selectors) r = [new c(r)];
      else if (r.name) r = [new i(r)];
      else if (r.text) r = [new f(r)];
      else throw new Error("Unknown node type in node creation");
      return r.map((v) => (v[s] || m.rebuild(v), v = v.proxyOf, v.parent && v.parent.removeChild(v), v[n] && l(v), v.raws || (v.raws = {}), typeof v.raws.before > "u" && d && typeof d.raws.before < "u" && (v.raws.before = d.raws.before.replace(/\S/g, "")), v.parent = this.proxyOf, v));
    }
    prepend(...r) {
      r = r.reverse();
      for (let d of r) {
        let h = this.normalize(d, this.first, "prepend").reverse();
        for (let v of h) this.proxyOf.nodes.unshift(v);
        for (let v in this.indexes) this.indexes[v] = this.indexes[v] + h.length;
      }
      return this.markDirty(), this;
    }
    push(r) {
      return r.parent = this, this.proxyOf.nodes.push(r), this;
    }
    removeAll() {
      for (let r of this.proxyOf.nodes) r.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(r) {
      r = this.index(r), this.proxyOf.nodes[r].parent = void 0, this.proxyOf.nodes.splice(r, 1);
      let d;
      for (let h in this.indexes) d = this.indexes[h], d >= r && (this.indexes[h] = d - 1);
      return this.markDirty(), this;
    }
    replaceValues(r, d, h) {
      return h || (h = d, d = {}), this.walkDecls((v) => {
        d.props && !d.props.includes(v.prop) || d.fast && !v.value.includes(d.fast) || (v.value = v.value.replace(r, h));
      }), this.markDirty(), this;
    }
    some(r) {
      return this.nodes.some(r);
    }
    walk(r) {
      return this.each((d, h) => {
        let v;
        try {
          v = r(d, h);
        } catch (g) {
          throw d.addToError(g);
        }
        return v !== false && d.walk && (v = d.walk(r)), v;
      });
    }
    walkAtRules(r, d) {
      return d ? r instanceof RegExp ? this.walk((h, v) => {
        if (h.type === "atrule" && r.test(h.name)) return d(h, v);
      }) : this.walk((h, v) => {
        if (h.type === "atrule" && h.name === r) return d(h, v);
      }) : (d = r, this.walk((h, v) => {
        if (h.type === "atrule") return d(h, v);
      }));
    }
    walkComments(r) {
      return this.walk((d, h) => {
        if (d.type === "comment") return r(d, h);
      });
    }
    walkDecls(r, d) {
      return d ? r instanceof RegExp ? this.walk((h, v) => {
        if (h.type === "decl" && r.test(h.prop)) return d(h, v);
      }) : this.walk((h, v) => {
        if (h.type === "decl" && h.prop === r) return d(h, v);
      }) : (d = r, this.walk((h, v) => {
        if (h.type === "decl") return d(h, v);
      }));
    }
    walkRules(r, d) {
      return d ? r instanceof RegExp ? this.walk((h, v) => {
        if (h.type === "rule" && r.test(h.selector)) return d(h, v);
      }) : this.walk((h, v) => {
        if (h.type === "rule" && h.selector === r) return d(h, v);
      }) : (d = r, this.walk((h, v) => {
        if (h.type === "rule") return d(h, v);
      }));
    }
  }
  return m.registerParse = (o) => {
    a = o;
  }, m.registerRule = (o) => {
    c = o;
  }, m.registerAtRule = (o) => {
    i = o;
  }, m.registerRoot = (o) => {
    u = o;
  }, pn = m, m.default = m, m.rebuild = (o) => {
    o.type === "atrule" ? Object.setPrototypeOf(o, i.prototype) : o.type === "rule" ? Object.setPrototypeOf(o, c.prototype) : o.type === "decl" ? Object.setPrototypeOf(o, e.prototype) : o.type === "comment" ? Object.setPrototypeOf(o, f.prototype) : o.type === "root" && Object.setPrototypeOf(o, u.prototype), o[s] = true, o.nodes && o.nodes.forEach((r) => {
      m.rebuild(r);
    });
  }, pn;
}
var hn, Ar;
function us() {
  if (Ar) return hn;
  Ar = 1;
  let f = kt();
  class e extends f {
    constructor(n) {
      super(n), this.type = "atrule";
    }
    append(...n) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...n);
    }
    prepend(...n) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...n);
    }
  }
  return hn = e, e.default = e, f.registerAtRule(e), hn;
}
var mn, Rr;
function ls() {
  if (Rr) return mn;
  Rr = 1;
  let f = kt(), e, t;
  class n extends f {
    constructor(i) {
      super({ type: "document", ...i }), this.nodes || (this.nodes = []);
    }
    toResult(i = {}) {
      return new e(new t(), this, i).stringify();
    }
  }
  return n.registerLazyResult = (s) => {
    e = s;
  }, n.registerProcessor = (s) => {
    t = s;
  }, mn = n, n.default = n, mn;
}
var vn, Dr;
function L0() {
  if (Dr) return vn;
  Dr = 1;
  let f = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  return vn = { nanoid: (n = 21) => {
    let s = "", i = n | 0;
    for (; i--; ) s += f[Math.random() * 64 | 0];
    return s;
  }, customAlphabet: (n, s = 21) => (i = s) => {
    let a = "", u = i | 0;
    for (; u--; ) a += n[Math.random() * n.length | 0];
    return a;
  } }, vn;
}
const rt = {};
var gn, Ir;
function ao() {
  if (Ir) return gn;
  Ir = 1;
  let { existsSync: f, readFileSync: e } = rt, { dirname: t, join: n } = rt, { SourceMapConsumer: s, SourceMapGenerator: i } = rt;
  function a(c) {
    return Buffer ? Buffer.from(c, "base64").toString() : window.atob(c);
  }
  class u {
    constructor(p, l) {
      if (l.map === false) return;
      this.loadAnnotation(p), this.inline = this.startWith(this.annotation, "data:");
      let m = l.map ? l.map.prev : void 0, o = this.loadMap(l.from, m);
      !this.mapFile && l.from && (this.mapFile = l.from), this.mapFile && (this.root = t(this.mapFile)), o && (this.text = o);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new s(this.text)), this.consumerCache;
    }
    decodeInline(p) {
      let l = /^data:application\/json;charset=utf-?8;base64,/, m = /^data:application\/json;base64,/, o = /^data:application\/json;charset=utf-?8,/, r = /^data:application\/json,/, d = p.match(o) || p.match(r);
      if (d) return decodeURIComponent(p.substr(d[0].length));
      let h = p.match(l) || p.match(m);
      if (h) return a(p.substr(h[0].length));
      let v = p.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + v);
    }
    getAnnotationURL(p) {
      return p.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(p) {
      return typeof p != "object" ? false : typeof p.mappings == "string" || typeof p._mappings == "string" || Array.isArray(p.sections);
    }
    loadAnnotation(p) {
      let l = p.match(/\/\*\s*# sourceMappingURL=/g);
      if (!l) return;
      let m = p.lastIndexOf(l.pop()), o = p.indexOf("*/", m);
      m > -1 && o > -1 && (this.annotation = this.getAnnotationURL(p.substring(m, o)));
    }
    loadFile(p) {
      if (this.root = t(p), f(p)) return this.mapFile = p, e(p, "utf-8").toString().trim();
    }
    loadMap(p, l) {
      if (l === false) return false;
      if (l) {
        if (typeof l == "string") return l;
        if (typeof l == "function") {
          let m = l(p);
          if (m) {
            let o = this.loadFile(m);
            if (!o) throw new Error("Unable to load previous source map: " + m.toString());
            return o;
          }
        } else {
          if (l instanceof s) return i.fromSourceMap(l).toString();
          if (l instanceof i) return l.toString();
          if (this.isMap(l)) return JSON.stringify(l);
          throw new Error("Unsupported previous source map format: " + l.toString());
        }
      } else {
        if (this.inline) return this.decodeInline(this.annotation);
        if (this.annotation) {
          let m = this.annotation;
          return p && (m = n(t(p), m)), this.loadFile(m);
        }
      }
    }
    startWith(p, l) {
      return p ? p.substr(0, l.length) === l : false;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  }
  return gn = u, u.default = u, gn;
}
var bn, Br;
function Ui() {
  if (Br) return bn;
  Br = 1;
  let { nanoid: f } = L0(), { isAbsolute: e, resolve: t } = rt, { SourceMapConsumer: n, SourceMapGenerator: s } = rt, { fileURLToPath: i, pathToFileURL: a } = rt, u = as(), c = ao(), p = so, l = Symbol("lineToIndexCache"), m = !!(n && s), o = !!(t && e);
  function r(h) {
    if (h[l]) return h[l];
    let v = h.css.split(`
`), g = new Array(v.length), x = 0;
    for (let w = 0, y = v.length; w < y; w++) g[w] = x, x += v[w].length + 1;
    return h[l] = g, g;
  }
  class d {
    get from() {
      return this.file || this.id;
    }
    constructor(v, g = {}) {
      if (v === null || typeof v > "u" || typeof v == "object" && !v.toString) throw new Error(`PostCSS received ${v} instead of CSS string`);
      if (this.css = v.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, this.document = this.css, g.document && (this.document = g.document.toString()), g.from && (!o || /^\w+:\/\//.test(g.from) || e(g.from) ? this.file = g.from : this.file = t(g.from)), o && m) {
        let x = new c(this.css, g);
        if (x.text) {
          this.map = x;
          let w = x.consumer().file;
          !this.file && w && (this.file = this.mapResolve(w));
        }
      }
      this.file || (this.id = "<input css " + f(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(v, g, x, w = {}) {
      let y, b, S, C, _;
      if (g && typeof g == "object") {
        let M = g, k = x;
        if (typeof M.offset == "number") {
          C = M.offset;
          let T = this.fromOffset(C);
          g = T.line, x = T.col;
        } else g = M.line, x = M.column, C = this.fromLineAndColumn(g, x);
        if (typeof k.offset == "number") {
          S = k.offset;
          let T = this.fromOffset(S);
          b = T.line, y = T.col;
        } else b = k.line, y = k.column, S = this.fromLineAndColumn(k.line, k.column);
      } else if (x) C = this.fromLineAndColumn(g, x);
      else {
        C = g;
        let M = this.fromOffset(C);
        g = M.line, x = M.col;
      }
      let P = this.origin(g, x, b, y);
      return P ? _ = new u(v, P.endLine === void 0 ? P.line : { column: P.column, line: P.line }, P.endLine === void 0 ? P.column : { column: P.endColumn, line: P.endLine }, P.source, P.file, w.plugin) : _ = new u(v, b === void 0 ? g : { column: x, line: g }, b === void 0 ? x : { column: y, line: b }, this.css, this.file, w.plugin), _.input = { column: x, endColumn: y, endLine: b, endOffset: S, line: g, offset: C, source: this.css }, this.file && (a && (_.input.url = a(this.file).toString()), _.input.file = this.file), _;
    }
    fromLineAndColumn(v, g) {
      return r(this)[v - 1] + g - 1;
    }
    fromOffset(v) {
      let g = r(this), x = g[g.length - 1], w = 0;
      if (v >= x) w = g.length - 1;
      else {
        let y = g.length - 2, b;
        for (; w < y; ) if (b = w + (y - w >> 1), v < g[b]) y = b - 1;
        else if (v >= g[b + 1]) w = b + 1;
        else {
          w = b;
          break;
        }
      }
      return { col: v - g[w] + 1, line: w + 1 };
    }
    mapResolve(v) {
      return /^\w+:\/\//.test(v) ? v : t(this.map.consumer().sourceRoot || this.map.root || ".", v);
    }
    origin(v, g, x, w) {
      if (!this.map) return false;
      let y = this.map.consumer(), b = y.originalPositionFor({ column: g, line: v });
      if (!b.source) return false;
      let S;
      typeof x == "number" && (S = y.originalPositionFor({ column: w, line: x }));
      let C;
      e(b.source) ? C = a(b.source) : C = new URL(b.source, this.map.consumer().sourceRoot || a(this.map.mapFile));
      let _ = { column: b.column, endColumn: S && S.column, endLine: S && S.line, line: b.line, url: C.toString() };
      if (C.protocol === "file:") if (i) _.file = i(C);
      else throw new Error("file: protocol is not available in this PostCSS build");
      let P = y.sourceContentFor(b.source);
      return P && (_.source = P), _;
    }
    toJSON() {
      let v = {};
      for (let g of ["hasBOM", "css", "file", "id"]) this[g] != null && (v[g] = this[g]);
      return this.map && (v.map = { ...this.map }, v.map.consumerCache && (v.map.consumerCache = void 0)), v;
    }
  }
  return bn = d, d.default = d, p && p.registerInput && p.registerInput(d), bn;
}
var yn, zr;
function ii() {
  if (zr) return yn;
  zr = 1;
  let f = kt(), e, t;
  class n extends f {
    constructor(i) {
      super(i), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(i, a, u) {
      let c = super.normalize(i);
      if (a) {
        if (u === "prepend") this.nodes.length > 1 ? a.raws.before = this.nodes[1].raws.before : delete a.raws.before;
        else if (this.first !== a) for (let p of c) p.raws.before = a.raws.before;
      }
      return c;
    }
    removeChild(i, a) {
      let u = this.index(i);
      return !a && u === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[u].raws.before), super.removeChild(i);
    }
    toResult(i = {}) {
      return new e(new t(), this, i).stringify();
    }
  }
  return n.registerLazyResult = (s) => {
    e = s;
  }, n.registerProcessor = (s) => {
    t = s;
  }, yn = n, n.default = n, f.registerRoot(n), yn;
}
var xn, $r;
function oo() {
  if ($r) return xn;
  $r = 1;
  let f = { comma(e) {
    return f.split(e, [","], true);
  }, space(e) {
    let t = [" ", `
`, "	"];
    return f.split(e, t);
  }, split(e, t, n) {
    let s = [], i = "", a = false, u = 0, c = false, p = "", l = false;
    for (let m of e) l ? l = false : m === "\\" ? l = true : c ? m === p && (c = false) : m === '"' || m === "'" ? (c = true, p = m) : m === "(" ? u += 1 : m === ")" ? u > 0 && (u -= 1) : u === 0 && t.includes(m) && (a = true), a ? (i !== "" && s.push(i.trim()), i = "", a = false) : i += m;
    return (n || i !== "") && s.push(i.trim()), s;
  } };
  return xn = f, f.default = f, xn;
}
var wn, Nr;
function cs() {
  if (Nr) return wn;
  Nr = 1;
  let f = kt(), e = oo();
  class t extends f {
    get selectors() {
      return e.comma(this.selector);
    }
    set selectors(s) {
      let i = this.selector ? this.selector.match(/,\s*/) : null, a = i ? i[0] : "," + this.raw("between", "beforeOpen");
      this.selector = s.join(a);
    }
    constructor(s) {
      super(s), this.type = "rule", this.nodes || (this.nodes = []);
    }
  }
  return wn = t, t.default = t, f.registerRule(t), wn;
}
var Sn, jr;
function O0() {
  if (jr) return Sn;
  jr = 1;
  let f = us(), e = ji(), t = Fi(), n = Ui(), s = ao(), i = ii(), a = cs();
  function u(c, p) {
    if (Array.isArray(c)) return c.map((o) => u(o));
    let { inputs: l, ...m } = c;
    if (l) {
      p = [];
      for (let o of l) {
        let r = { ...o, __proto__: n.prototype };
        r.map && (r.map = { ...r.map, __proto__: s.prototype }), p.push(r);
      }
    }
    if (m.nodes && (m.nodes = c.nodes.map((o) => u(o, p))), m.source) {
      let { inputId: o, ...r } = m.source;
      m.source = r, o != null && (m.source.input = p[o]);
    }
    if (m.type === "root") return new i(m);
    if (m.type === "decl") return new t(m);
    if (m.type === "rule") return new a(m);
    if (m.type === "comment") return new e(m);
    if (m.type === "atrule") return new f(m);
    throw new Error("Unknown node type: " + c.type);
  }
  return Sn = u, u.default = u, Sn;
}
var Cn, Fr;
function uo() {
  if (Fr) return Cn;
  Fr = 1;
  let { dirname: f, relative: e, resolve: t, sep: n } = rt, { SourceMapConsumer: s, SourceMapGenerator: i } = rt, { pathToFileURL: a } = rt, u = Ui(), c = !!(s && i), p = !!(f && t && e && n);
  class l {
    constructor(o, r, d, h) {
      this.stringify = o, this.mapOpts = d.map || {}, this.root = r, this.opts = d, this.css = h, this.originalCSS = h, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let o;
      this.isInline() ? o = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? o = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? o = this.mapOpts.annotation(this.opts.to, this.root) : o = this.outputFile() + ".map";
      let r = `
`;
      this.css.includes(`\r
`) && (r = `\r
`), this.css += r + "/*# sourceMappingURL=" + o + " */";
    }
    applyPrevMaps() {
      for (let o of this.previous()) {
        let r = this.toUrl(this.path(o.file)), d = o.root || f(o.file), h;
        this.mapOpts.sourcesContent === false ? (h = new s(o.text), h.sourcesContent && (h.sourcesContent = null)) : h = o.consumer(), this.map.applySourceMap(h, r, this.toUrl(this.path(d)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== false) if (this.root) {
        let o;
        for (let r = this.root.nodes.length - 1; r >= 0; r--) o = this.root.nodes[r], o.type === "comment" && o.text.startsWith("# sourceMappingURL=") && this.root.removeChild(r);
      } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if (this.clearAnnotation(), p && c && this.isMap()) return this.generateMap();
      {
        let o = "";
        return this.stringify(this.root, (r) => {
          o += r;
        }), [o];
      }
    }
    generateMap() {
      if (this.root) this.generateString();
      else if (this.previous().length === 1) {
        let o = this.previous()[0].consumer();
        o.file = this.outputFile(), this.map = i.fromSourceMap(o, { ignoreInvalidMapping: true });
      } else this.map = new i({ file: this.outputFile(), ignoreInvalidMapping: true }), this.map.addMapping({ generated: { column: 0, line: 1 }, original: { column: 0, line: 1 }, source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>" });
      return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
    }
    generateString() {
      this.css = "", this.map = new i({ file: this.outputFile(), ignoreInvalidMapping: true });
      let o = 1, r = 1, d = "<no source>", h = { generated: { column: 0, line: 0 }, original: { column: 0, line: 0 }, source: "" }, v, g;
      this.stringify(this.root, (x, w, y) => {
        if (this.css += x, w && y !== "end" && (h.generated.line = o, h.generated.column = r - 1, w.source && w.source.start ? (h.source = this.sourcePath(w), h.original.line = w.source.start.line, h.original.column = w.source.start.column - 1, this.map.addMapping(h)) : (h.source = d, h.original.line = 1, h.original.column = 0, this.map.addMapping(h))), g = x.match(/\n/g), g ? (o += g.length, v = x.lastIndexOf(`
`), r = x.length - v) : r += x.length, w && y !== "start") {
          let b = w.parent || { raws: {} };
          (!(w.type === "decl" || w.type === "atrule" && !w.nodes) || w !== b.last || b.raws.semicolon) && (w.source && w.source.end ? (h.source = this.sourcePath(w), h.original.line = w.source.end.line, h.original.column = w.source.end.column - 1, h.generated.line = o, h.generated.column = r - 2, this.map.addMapping(h)) : (h.source = d, h.original.line = 1, h.original.column = 0, h.generated.line = o, h.generated.column = r - 1, this.map.addMapping(h)));
        }
      });
    }
    isAnnotation() {
      return this.isInline() ? true : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((o) => o.annotation) : true;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
      let o = this.mapOpts.annotation;
      return typeof o < "u" && o !== true ? false : this.previous().length ? this.previous().some((r) => r.inline) : true;
    }
    isMap() {
      return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((o) => o.withContent()) : true;
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    path(o) {
      if (this.mapOpts.absolute || o.charCodeAt(0) === 60 || /^\w+:\/\//.test(o)) return o;
      let r = this.memoizedPaths.get(o);
      if (r) return r;
      let d = this.opts.to ? f(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" && (d = f(t(d, this.mapOpts.annotation)));
      let h = e(d, o);
      return this.memoizedPaths.set(o, h), h;
    }
    previous() {
      if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk((o) => {
        if (o.source && o.source.input.map) {
          let r = o.source.input.map;
          this.previousMaps.includes(r) || this.previousMaps.push(r);
        }
      });
      else {
        let o = new u(this.originalCSS, this.opts);
        o.map && this.previousMaps.push(o.map);
      }
      return this.previousMaps;
    }
    setSourcesContent() {
      let o = {};
      if (this.root) this.root.walk((r) => {
        if (r.source) {
          let d = r.source.input.from;
          if (d && !o[d]) {
            o[d] = true;
            let h = this.usesFileUrls ? this.toFileUrl(d) : this.toUrl(this.path(d));
            this.map.setSourceContent(h, r.source.input.css);
          }
        }
      });
      else if (this.css) {
        let r = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(r, this.css);
      }
    }
    sourcePath(o) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(o.source.input.from) : this.toUrl(this.path(o.source.input.from));
    }
    toBase64(o) {
      return Buffer ? Buffer.from(o).toString("base64") : window.btoa(unescape(encodeURIComponent(o)));
    }
    toFileUrl(o) {
      let r = this.memoizedFileURLs.get(o);
      if (r) return r;
      if (a) {
        let d = a(o).toString();
        return this.memoizedFileURLs.set(o, d), d;
      } else throw new Error("`map.absolute` option is not available in this PostCSS build");
    }
    toUrl(o) {
      let r = this.memoizedURLs.get(o);
      if (r) return r;
      n === "\\" && (o = o.replace(/\\/g, "/"));
      let d = encodeURI(o).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(o, d), d;
    }
  }
  return Cn = l, Cn;
}
var _n, Ur;
function A0() {
  if (Ur) return _n;
  Ur = 1;
  const f = 39, e = 34, t = 92, n = 47, s = 10, i = 32, a = 12, u = 9, c = 13, p = 91, l = 93, m = 40, o = 41, r = 123, d = 125, h = 59, v = 42, g = 58, x = 64, w = /[\t\n\f\r "#'()/;[\\\]{}]/g, y = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, b = /.[\r\n"'(/\\]/, S = /[\da-f]/i;
  return _n = function(_, P = {}) {
    let M = _.css.valueOf(), k = P.ignoreErrors, T, L, D, O, j, $, B, N, V, q, R = M.length, U = 0, ie = [], ve = [];
    function de() {
      return U;
    }
    function Re(F) {
      throw _.error("Unclosed " + F, U);
    }
    function Te() {
      return ve.length === 0 && U >= R;
    }
    function jt(F) {
      if (ve.length) return ve.pop();
      if (U >= R) return;
      let X = F ? F.ignoreUnclosed : false;
      switch (T = M.charCodeAt(U), T) {
        case s:
        case i:
        case u:
        case c:
        case a: {
          O = U;
          do
            O += 1, T = M.charCodeAt(O);
          while (T === i || T === s || T === u || T === c || T === a);
          $ = ["space", M.slice(U, O)], U = O - 1;
          break;
        }
        case p:
        case l:
        case r:
        case d:
        case g:
        case h:
        case o: {
          let H = String.fromCharCode(T);
          $ = [H, H, U];
          break;
        }
        case m: {
          if (q = ie.length ? ie.pop()[1] : "", V = M.charCodeAt(U + 1), q === "url" && V !== f && V !== e && V !== i && V !== s && V !== u && V !== a && V !== c) {
            O = U;
            do {
              if (B = false, O = M.indexOf(")", O + 1), O === -1) if (k || X) {
                O = U;
                break;
              } else Re("bracket");
              for (N = O; M.charCodeAt(N - 1) === t; ) N -= 1, B = !B;
            } while (B);
            $ = ["brackets", M.slice(U, O + 1), U, O], U = O;
          } else O = M.indexOf(")", U + 1), L = M.slice(U, O + 1), O === -1 || b.test(L) ? $ = ["(", "(", U] : ($ = ["brackets", L, U, O], U = O);
          break;
        }
        case f:
        case e: {
          j = T === f ? "'" : '"', O = U;
          do {
            if (B = false, O = M.indexOf(j, O + 1), O === -1) if (k || X) {
              O = U + 1;
              break;
            } else Re("string");
            for (N = O; M.charCodeAt(N - 1) === t; ) N -= 1, B = !B;
          } while (B);
          $ = ["string", M.slice(U, O + 1), U, O], U = O;
          break;
        }
        case x: {
          w.lastIndex = U + 1, w.test(M), w.lastIndex === 0 ? O = M.length - 1 : O = w.lastIndex - 2, $ = ["at-word", M.slice(U, O + 1), U, O], U = O;
          break;
        }
        case t: {
          for (O = U, D = true; M.charCodeAt(O + 1) === t; ) O += 1, D = !D;
          if (T = M.charCodeAt(O + 1), D && T !== n && T !== i && T !== s && T !== u && T !== c && T !== a && (O += 1, S.test(M.charAt(O)))) {
            for (; S.test(M.charAt(O + 1)); ) O += 1;
            M.charCodeAt(O + 1) === i && (O += 1);
          }
          $ = ["word", M.slice(U, O + 1), U, O], U = O;
          break;
        }
        default: {
          T === n && M.charCodeAt(U + 1) === v ? (O = M.indexOf("*/", U + 2) + 1, O === 0 && (k || X ? O = M.length : Re("comment")), $ = ["comment", M.slice(U, O + 1), U, O], U = O) : (y.lastIndex = U + 1, y.test(M), y.lastIndex === 0 ? O = M.length - 1 : O = y.lastIndex - 2, $ = ["word", M.slice(U, O + 1), U, O], ie.push($), U = O);
          break;
        }
      }
      return U++, $;
    }
    function Tt(F) {
      ve.push(F);
    }
    return { back: Tt, endOfFile: Te, nextToken: jt, position: de };
  }, _n;
}
var En, qr;
function R0() {
  if (qr) return En;
  qr = 1;
  let f = us(), e = ji(), t = Fi(), n = ii(), s = cs(), i = A0();
  const a = { empty: true, space: true };
  function u(p) {
    for (let l = p.length - 1; l >= 0; l--) {
      let m = p[l], o = m[3] || m[2];
      if (o) return o;
    }
  }
  class c {
    constructor(l) {
      this.input = l, this.root = new n(), this.current = this.root, this.spaces = "", this.semicolon = false, this.createTokenizer(), this.root.source = { input: l, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(l) {
      let m = new f();
      m.name = l[1].slice(1), m.name === "" && this.unnamedAtrule(m, l), this.init(m, l[2]);
      let o, r, d, h = false, v = false, g = [], x = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (l = this.tokenizer.nextToken(), o = l[0], o === "(" || o === "[" ? x.push(o === "(" ? ")" : "]") : o === "{" && x.length > 0 ? x.push("}") : o === x[x.length - 1] && x.pop(), x.length === 0) if (o === ";") {
          m.source.end = this.getPosition(l[2]), m.source.end.offset++, this.semicolon = true;
          break;
        } else if (o === "{") {
          v = true;
          break;
        } else if (o === "}") {
          if (g.length > 0) {
            for (d = g.length - 1, r = g[d]; r && r[0] === "space"; ) r = g[--d];
            r && (m.source.end = this.getPosition(r[3] || r[2]), m.source.end.offset++);
          }
          this.end(l);
          break;
        } else g.push(l);
        else g.push(l);
        if (this.tokenizer.endOfFile()) {
          h = true;
          break;
        }
      }
      m.raws.between = this.spacesAndCommentsFromEnd(g), g.length ? (m.raws.afterName = this.spacesAndCommentsFromStart(g), this.raw(m, "params", g), h && (l = g[g.length - 1], m.source.end = this.getPosition(l[3] || l[2]), m.source.end.offset++, this.spaces = m.raws.between, m.raws.between = "")) : (m.raws.afterName = "", m.params = ""), v && (m.nodes = [], this.current = m);
    }
    checkMissedSemicolon(l) {
      let m = this.colon(l);
      if (m === false) return;
      let o = 0, r;
      for (let d = m - 1; d >= 0 && (r = l[d], !(r[0] !== "space" && (o += 1, o === 2))); d--) ;
      throw this.input.error("Missed semicolon", r[0] === "word" ? r[3] + 1 : r[2]);
    }
    colon(l) {
      let m = 0, o, r, d;
      for (let [h, v] of l.entries()) {
        if (r = v, d = r[0], d === "(" && (m += 1), d === ")" && (m -= 1), m === 0 && d === ":") if (!o) this.doubleColon(r);
        else {
          if (o[0] === "word" && o[1] === "progid") continue;
          return h;
        }
        o = r;
      }
      return false;
    }
    comment(l) {
      let m = new e();
      this.init(m, l[2]), m.source.end = this.getPosition(l[3] || l[2]), m.source.end.offset++;
      let o = l[1].slice(2, -2);
      if (/^\s*$/.test(o)) m.text = "", m.raws.left = o, m.raws.right = "";
      else {
        let r = o.match(/^(\s*)([^]*\S)(\s*)$/);
        m.text = r[2], m.raws.left = r[1], m.raws.right = r[3];
      }
    }
    createTokenizer() {
      this.tokenizer = i(this.input);
    }
    decl(l, m) {
      let o = new t();
      this.init(o, l[0][2]);
      let r = l[l.length - 1];
      for (r[0] === ";" && (this.semicolon = true, l.pop()), o.source.end = this.getPosition(r[3] || r[2] || u(l)), o.source.end.offset++; l[0][0] !== "word"; ) l.length === 1 && this.unknownWord(l), o.raws.before += l.shift()[1];
      for (o.source.start = this.getPosition(l[0][2]), o.prop = ""; l.length; ) {
        let x = l[0][0];
        if (x === ":" || x === "space" || x === "comment") break;
        o.prop += l.shift()[1];
      }
      o.raws.between = "";
      let d;
      for (; l.length; ) if (d = l.shift(), d[0] === ":") {
        o.raws.between += d[1];
        break;
      } else d[0] === "word" && /\w/.test(d[1]) && this.unknownWord([d]), o.raws.between += d[1];
      (o.prop[0] === "_" || o.prop[0] === "*") && (o.raws.before += o.prop[0], o.prop = o.prop.slice(1));
      let h = [], v;
      for (; l.length && (v = l[0][0], !(v !== "space" && v !== "comment")); ) h.push(l.shift());
      this.precheckMissedSemicolon(l);
      for (let x = l.length - 1; x >= 0; x--) {
        if (d = l[x], d[1].toLowerCase() === "!important") {
          o.important = true;
          let w = this.stringFrom(l, x);
          w = this.spacesFromEnd(l) + w, w !== " !important" && (o.raws.important = w);
          break;
        } else if (d[1].toLowerCase() === "important") {
          let w = l.slice(0), y = "";
          for (let b = x; b > 0; b--) {
            let S = w[b][0];
            if (y.trim().startsWith("!") && S !== "space") break;
            y = w.pop()[1] + y;
          }
          y.trim().startsWith("!") && (o.important = true, o.raws.important = y, l = w);
        }
        if (d[0] !== "space" && d[0] !== "comment") break;
      }
      l.some((x) => x[0] !== "space" && x[0] !== "comment") && (o.raws.between += h.map((x) => x[1]).join(""), h = []), this.raw(o, "value", h.concat(l), m), o.value.includes(":") && !m && this.checkMissedSemicolon(l);
    }
    doubleColon(l) {
      throw this.input.error("Double colon", { offset: l[2] }, { offset: l[2] + l[1].length });
    }
    emptyRule(l) {
      let m = new s();
      this.init(m, l[2]), m.selector = "", m.raws.between = "", this.current = m;
    }
    end(l) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(l[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(l);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(l) {
      if (this.spaces += l[1], this.current.nodes) {
        let m = this.current.nodes[this.current.nodes.length - 1];
        m && m.type === "rule" && !m.raws.ownSemicolon && (m.raws.ownSemicolon = this.spaces, this.spaces = "", m.source.end = this.getPosition(l[2]), m.source.end.offset += m.raws.ownSemicolon.length);
      }
    }
    getPosition(l) {
      let m = this.input.fromOffset(l);
      return { column: m.col, line: m.line, offset: l };
    }
    init(l, m) {
      this.current.push(l), l.source = { input: this.input, start: this.getPosition(m) }, l.raws.before = this.spaces, this.spaces = "", l.type !== "comment" && (this.semicolon = false);
    }
    other(l) {
      let m = false, o = null, r = false, d = null, h = [], v = l[1].startsWith("--"), g = [], x = l;
      for (; x; ) {
        if (o = x[0], g.push(x), o === "(" || o === "[") d || (d = x), h.push(o === "(" ? ")" : "]");
        else if (v && r && o === "{") d || (d = x), h.push("}");
        else if (h.length === 0) if (o === ";") if (r) {
          this.decl(g, v);
          return;
        } else break;
        else if (o === "{") {
          this.rule(g);
          return;
        } else if (o === "}") {
          this.tokenizer.back(g.pop()), m = true;
          break;
        } else o === ":" && (r = true);
        else o === h[h.length - 1] && (h.pop(), h.length === 0 && (d = null));
        x = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (m = true), h.length > 0 && this.unclosedBracket(d), m && r) {
        if (!v) for (; g.length && (x = g[g.length - 1][0], !(x !== "space" && x !== "comment")); ) this.tokenizer.back(g.pop());
        this.decl(g, v);
      } else this.unknownWord(g);
    }
    parse() {
      let l;
      for (; !this.tokenizer.endOfFile(); ) switch (l = this.tokenizer.nextToken(), l[0]) {
        case "space":
          this.spaces += l[1];
          break;
        case ";":
          this.freeSemicolon(l);
          break;
        case "}":
          this.end(l);
          break;
        case "comment":
          this.comment(l);
          break;
        case "at-word":
          this.atrule(l);
          break;
        case "{":
          this.emptyRule(l);
          break;
        default:
          this.other(l);
          break;
      }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(l, m, o, r) {
      let d, h, v = o.length, g = "", x = true, w, y;
      for (let b = 0; b < v; b += 1) d = o[b], h = d[0], h === "space" && b === v - 1 && !r ? x = false : h === "comment" ? (y = o[b - 1] ? o[b - 1][0] : "empty", w = o[b + 1] ? o[b + 1][0] : "empty", !a[y] && !a[w] ? g.slice(-1) === "," ? x = false : g += d[1] : x = false) : g += d[1];
      if (!x) {
        let b = o.reduce((S, C) => S + C[1], "");
        l.raws[m] = { raw: b, value: g };
      }
      l[m] = g;
    }
    rule(l) {
      l.pop();
      let m = new s();
      this.init(m, l[0][2]), m.raws.between = this.spacesAndCommentsFromEnd(l), this.raw(m, "selector", l), this.current = m;
    }
    spacesAndCommentsFromEnd(l) {
      let m, o = "";
      for (; l.length && (m = l[l.length - 1][0], !(m !== "space" && m !== "comment")); ) o = l.pop()[1] + o;
      return o;
    }
    spacesAndCommentsFromStart(l) {
      let m, o = "";
      for (; l.length && (m = l[0][0], !(m !== "space" && m !== "comment")); ) o += l.shift()[1];
      return o;
    }
    spacesFromEnd(l) {
      let m, o = "";
      for (; l.length && (m = l[l.length - 1][0], m === "space"); ) o = l.pop()[1] + o;
      return o;
    }
    stringFrom(l, m) {
      let o = "";
      for (let r = m; r < l.length; r++) o += l[r][1];
      return l.splice(m, l.length - m), o;
    }
    unclosedBlock() {
      let l = this.current.source.start;
      throw this.input.error("Unclosed block", l.line, l.column);
    }
    unclosedBracket(l) {
      throw this.input.error("Unclosed bracket", { offset: l[2] }, { offset: l[2] + 1 });
    }
    unexpectedClose(l) {
      throw this.input.error("Unexpected }", { offset: l[2] }, { offset: l[2] + 1 });
    }
    unknownWord(l) {
      throw this.input.error("Unknown word " + l[0][1], { offset: l[0][2] }, { offset: l[0][2] + l[0][1].length });
    }
    unnamedAtrule(l, m) {
      throw this.input.error("At-rule without name", { offset: m[2] }, { offset: m[2] + m[1].length });
    }
  }
  return En = c, En;
}
var kn, Hr;
function ds() {
  if (Hr) return kn;
  Hr = 1;
  let f = kt(), e = Ui(), t = R0();
  function n(s, i) {
    let a = new e(s, i), u = new t(a);
    try {
      u.parse();
    } catch (c) {
      throw c;
    }
    return u.root;
  }
  return kn = n, n.default = n, f.registerParse(n), kn;
}
var Tn, Vr;
function lo() {
  if (Vr) return Tn;
  Vr = 1;
  class f {
    constructor(t, n = {}) {
      if (this.type = "warning", this.text = t, n.node && n.node.source) {
        let s = n.node.rangeBy(n);
        this.line = s.start.line, this.column = s.start.column, this.endLine = s.end.line, this.endColumn = s.end.column;
      }
      for (let s in n) this[s] = n[s];
    }
    toString() {
      return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  }
  return Tn = f, f.default = f, Tn;
}
var Pn, Gr;
function fs() {
  if (Gr) return Pn;
  Gr = 1;
  let f = lo();
  class e {
    get content() {
      return this.css;
    }
    constructor(n, s, i) {
      this.processor = n, this.messages = [], this.root = s, this.opts = i, this.css = "", this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(n, s = {}) {
      s.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (s.plugin = this.lastPlugin.postcssPlugin);
      let i = new f(n, s);
      return this.messages.push(i), i;
    }
    warnings() {
      return this.messages.filter((n) => n.type === "warning");
    }
  }
  return Pn = e, e.default = e, Pn;
}
var Mn, Wr;
function co() {
  if (Wr) return Mn;
  Wr = 1;
  let f = kt(), e = ls(), t = uo(), n = ds(), s = fs(), i = ii(), a = $i(), { isClean: u, my: c } = os();
  const p = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" }, l = { AtRule: true, AtRuleExit: true, Comment: true, CommentExit: true, Declaration: true, DeclarationExit: true, Document: true, DocumentExit: true, Once: true, OnceExit: true, postcssPlugin: true, prepare: true, Root: true, RootExit: true, Rule: true, RuleExit: true }, m = { Once: true, postcssPlugin: true, prepare: true }, o = 0;
  function r(w) {
    return typeof w == "object" && typeof w.then == "function";
  }
  function d(w) {
    let y = false, b = p[w.type];
    return w.type === "decl" ? y = w.prop.toLowerCase() : w.type === "atrule" && (y = w.name.toLowerCase()), y && w.append ? [b, b + "-" + y, o, b + "Exit", b + "Exit-" + y] : y ? [b, b + "-" + y, b + "Exit", b + "Exit-" + y] : w.append ? [b, o, b + "Exit"] : [b, b + "Exit"];
  }
  function h(w) {
    let y;
    return w.type === "document" ? y = ["Document", o, "DocumentExit"] : w.type === "root" ? y = ["Root", o, "RootExit"] : y = d(w), { eventIndex: 0, events: y, iterator: 0, node: w, visitorIndex: 0, visitors: [] };
  }
  function v(w) {
    return w[u] = false, w.nodes && w.nodes.forEach((y) => v(y)), w;
  }
  let g = {};
  class x {
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
    constructor(y, b, S) {
      this.stringified = false, this.processed = false;
      let C;
      if (typeof b == "object" && b !== null && (b.type === "root" || b.type === "document")) C = v(b);
      else if (b instanceof x || b instanceof s) C = v(b.root), b.map && (typeof S.map > "u" && (S.map = {}), S.map.inline || (S.map.inline = false), S.map.prev = b.map);
      else {
        let _ = n;
        S.syntax && (_ = S.syntax.parse), S.parser && (_ = S.parser), _.parse && (_ = _.parse);
        try {
          C = _(b, S);
        } catch (P) {
          this.processed = true, this.error = P;
        }
        C && !C[c] && f.rebuild(C);
      }
      this.result = new s(y, C, S), this.helpers = { ...g, postcss: g, result: this.result }, this.plugins = this.processor.plugins.map((_) => typeof _ == "object" && _.prepare ? { ..._, ..._.prepare(this.result) } : _);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(y) {
      return this.async().catch(y);
    }
    finally(y) {
      return this.async().then(y, y);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(y, b) {
      let S = this.result.lastPlugin;
      try {
        b && b.addToError(y), this.error = y, y.name === "CssSyntaxError" && !y.plugin ? (y.plugin = S.postcssPlugin, y.setMessage()) : S.postcssVersion;
      } catch (C) {
        console && console.error && console.error(C);
      }
      return y;
    }
    prepareVisitors() {
      this.listeners = {};
      let y = (b, S, C) => {
        this.listeners[S] || (this.listeners[S] = []), this.listeners[S].push([b, C]);
      };
      for (let b of this.plugins) if (typeof b == "object") for (let S in b) {
        if (!l[S] && /^[A-Z]/.test(S)) throw new Error(`Unknown event ${S} in ${b.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
        if (!m[S]) if (typeof b[S] == "object") for (let C in b[S]) C === "*" ? y(b, S, b[S][C]) : y(b, S + "-" + C.toLowerCase(), b[S][C]);
        else typeof b[S] == "function" && y(b, S, b[S]);
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let y = 0; y < this.plugins.length; y++) {
        let b = this.plugins[y], S = this.runOnRoot(b);
        if (r(S)) try {
          await S;
        } catch (C) {
          throw this.handleError(C);
        }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let y = this.result.root;
        for (; !y[u]; ) {
          y[u] = true;
          let b = [h(y)];
          for (; b.length > 0; ) {
            let S = this.visitTick(b);
            if (r(S)) try {
              await S;
            } catch (C) {
              let _ = b[b.length - 1].node;
              throw this.handleError(C, _);
            }
          }
        }
        if (this.listeners.OnceExit) for (let [b, S] of this.listeners.OnceExit) {
          this.result.lastPlugin = b;
          try {
            if (y.type === "document") {
              let C = y.nodes.map((_) => S(_, this.helpers));
              await Promise.all(C);
            } else await S(y, this.helpers);
          } catch (C) {
            throw this.handleError(C);
          }
        }
      }
      return this.processed = true, this.stringify();
    }
    runOnRoot(y) {
      this.result.lastPlugin = y;
      try {
        if (typeof y == "object" && y.Once) {
          if (this.result.root.type === "document") {
            let b = this.result.root.nodes.map((S) => y.Once(S, this.helpers));
            return r(b[0]) ? Promise.all(b) : b;
          }
          return y.Once(this.result.root, this.helpers);
        } else if (typeof y == "function") return y(this.result.root, this.result);
      } catch (b) {
        throw this.handleError(b);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true, this.sync();
      let y = this.result.opts, b = a;
      y.syntax && (b = y.syntax.stringify), y.stringifier && (b = y.stringifier), b.stringify && (b = b.stringify);
      let C = new t(b, this.result.root, this.result.opts).generate();
      return this.result.css = C[0], this.result.map = C[1], this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = true, this.processing) throw this.getAsyncError();
      for (let y of this.plugins) {
        let b = this.runOnRoot(y);
        if (r(b)) throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let y = this.result.root;
        for (; !y[u]; ) y[u] = true, this.walkSync(y);
        if (this.listeners.OnceExit) if (y.type === "document") for (let b of y.nodes) this.visitSync(this.listeners.OnceExit, b);
        else this.visitSync(this.listeners.OnceExit, y);
      }
      return this.result;
    }
    then(y, b) {
      return this.async().then(y, b);
    }
    toString() {
      return this.css;
    }
    visitSync(y, b) {
      for (let [S, C] of y) {
        this.result.lastPlugin = S;
        let _;
        try {
          _ = C(b, this.helpers);
        } catch (P) {
          throw this.handleError(P, b.proxyOf);
        }
        if (b.type !== "root" && b.type !== "document" && !b.parent) return true;
        if (r(_)) throw this.getAsyncError();
      }
    }
    visitTick(y) {
      let b = y[y.length - 1], { node: S, visitors: C } = b;
      if (S.type !== "root" && S.type !== "document" && !S.parent) {
        y.pop();
        return;
      }
      if (C.length > 0 && b.visitorIndex < C.length) {
        let [P, M] = C[b.visitorIndex];
        b.visitorIndex += 1, b.visitorIndex === C.length && (b.visitors = [], b.visitorIndex = 0), this.result.lastPlugin = P;
        try {
          return M(S.toProxy(), this.helpers);
        } catch (k) {
          throw this.handleError(k, S);
        }
      }
      if (b.iterator !== 0) {
        let P = b.iterator, M;
        for (; M = S.nodes[S.indexes[P]]; ) if (S.indexes[P] += 1, !M[u]) {
          M[u] = true, y.push(h(M));
          return;
        }
        b.iterator = 0, delete S.indexes[P];
      }
      let _ = b.events;
      for (; b.eventIndex < _.length; ) {
        let P = _[b.eventIndex];
        if (b.eventIndex += 1, P === o) {
          S.nodes && S.nodes.length && (S[u] = true, b.iterator = S.getIterator());
          return;
        } else if (this.listeners[P]) {
          b.visitors = this.listeners[P];
          return;
        }
      }
      y.pop();
    }
    walkSync(y) {
      y[u] = true;
      let b = d(y);
      for (let S of b) if (S === o) y.nodes && y.each((C) => {
        C[u] || this.walkSync(C);
      });
      else {
        let C = this.listeners[S];
        if (C && this.visitSync(C, y.toProxy())) return;
      }
    }
    warnings() {
      return this.sync().warnings();
    }
  }
  return x.registerPostcss = (w) => {
    g = w;
  }, Mn = x, x.default = x, i.registerLazyResult(x), e.registerLazyResult(x), Mn;
}
var Ln, Xr;
function D0() {
  if (Xr) return Ln;
  Xr = 1;
  let f = uo(), e = ds();
  const t = fs();
  let n = $i();
  class s {
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root) return this._root;
      let a, u = e;
      try {
        a = u(this._css, this._opts);
      } catch (c) {
        this.error = c;
      }
      if (this.error) throw this.error;
      return this._root = a, a;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    constructor(a, u, c) {
      u = u.toString(), this.stringified = false, this._processor = a, this._css = u, this._opts = c, this._map = void 0;
      let p, l = n;
      this.result = new t(this._processor, p, this._opts), this.result.css = u;
      let m = this;
      Object.defineProperty(this.result, "root", { get() {
        return m.root;
      } });
      let o = new f(l, p, this._opts, u);
      if (o.isMap()) {
        let [r, d] = o.generate();
        r && (this.result.css = r), d && (this.result.map = d);
      } else o.clearAnnotation(), this.result.css = o.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(a) {
      return this.async().catch(a);
    }
    finally(a) {
      return this.async().then(a, a);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(a, u) {
      return this.async().then(a, u);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  }
  return Ln = s, s.default = s, Ln;
}
var On, Zr;
function I0() {
  if (Zr) return On;
  Zr = 1;
  let f = ls(), e = co(), t = D0(), n = ii();
  class s {
    constructor(a = []) {
      this.version = "8.5.4", this.plugins = this.normalize(a);
    }
    normalize(a) {
      let u = [];
      for (let c of a) if (c.postcss === true ? c = c() : c.postcss && (c = c.postcss), typeof c == "object" && Array.isArray(c.plugins)) u = u.concat(c.plugins);
      else if (typeof c == "object" && c.postcssPlugin) u.push(c);
      else if (typeof c == "function") u.push(c);
      else if (!(typeof c == "object" && (c.parse || c.stringify))) throw new Error(c + " is not a PostCSS plugin");
      return u;
    }
    process(a, u = {}) {
      return !this.plugins.length && !u.parser && !u.stringifier && !u.syntax ? new t(this, a, u) : new e(this, a, u);
    }
    use(a) {
      return this.plugins = this.plugins.concat(this.normalize([a])), this;
    }
  }
  return On = s, s.default = s, n.registerProcessor(s), f.registerProcessor(s), On;
}
var An, Yr;
function B0() {
  if (Yr) return An;
  Yr = 1;
  var f = {};
  let e = us(), t = ji(), n = kt(), s = as(), i = Fi(), a = ls(), u = O0(), c = Ui(), p = co(), l = oo(), m = Ni(), o = ds(), r = I0(), d = fs(), h = ii(), v = cs(), g = $i(), x = lo();
  function w(...y) {
    return y.length === 1 && Array.isArray(y[0]) && (y = y[0]), new r(y);
  }
  return w.plugin = function(b, S) {
    let C = false;
    function _(...M) {
      console && console.warn && !C && (C = true, console.warn(b + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), f.LANG && f.LANG.startsWith("cn") && console.warn(b + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
      let k = S(...M);
      return k.postcssPlugin = b, k.postcssVersion = new r().version, k;
    }
    let P;
    return Object.defineProperty(_, "postcss", { get() {
      return P || (P = _()), P;
    } }), _.process = function(M, k, T) {
      return w([_(T)]).process(M, k);
    }, _;
  }, w.stringify = g, w.parse = o, w.fromJSON = u, w.list = l, w.comment = (y) => new t(y), w.atRule = (y) => new e(y), w.decl = (y) => new i(y), w.rule = (y) => new v(y), w.root = (y) => new h(y), w.document = (y) => new a(y), w.CssSyntaxError = s, w.Declaration = i, w.Container = n, w.Processor = r, w.Document = a, w.Comment = t, w.Warning = x, w.AtRule = e, w.Result = d, w.Input = c, w.Rule = v, w.Root = h, w.Node = m, p.registerPostcss(w), An = w, w.default = w, An;
}
var Rn, Qr;
function z0() {
  if (Qr) return Rn;
  Qr = 1;
  const f = w0(), e = S0(), { isPlainObject: t } = C0(), n = _0(), s = k0(), { parse: i } = B0(), a = ["img", "audio", "video", "picture", "svg", "object", "map", "iframe", "embed"], u = ["script", "style"];
  function c(v, g) {
    v && Object.keys(v).forEach(function(x) {
      g(v[x], x);
    });
  }
  function p(v, g) {
    return {}.hasOwnProperty.call(v, g);
  }
  function l(v, g) {
    const x = [];
    return c(v, function(w) {
      g(w) && x.push(w);
    }), x;
  }
  function m(v) {
    for (const g in v) if (p(v, g)) return false;
    return true;
  }
  function o(v) {
    return v.map(function(g) {
      if (!g.url) throw new Error("URL missing");
      return g.url + (g.w ? ` ${g.w}w` : "") + (g.h ? ` ${g.h}h` : "") + (g.d ? ` ${g.d}x` : "");
    }).join(", ");
  }
  Rn = d;
  const r = /^[^\0\t\n\f\r /<=>]+$/;
  function d(v, g, x) {
    if (v == null) return "";
    typeof v == "number" && (v = v.toString());
    let w = "", y = "";
    function b(F, X) {
      const H = this;
      this.tag = F, this.attribs = X || {}, this.tagPosition = w.length, this.text = "", this.openingTagLength = 0, this.mediaChildren = [], this.updateParentNodeText = function() {
        if (j.length) {
          const te = j[j.length - 1];
          te.text += H.text;
        }
      }, this.updateParentNodeMediaChildren = function() {
        j.length && a.includes(this.tag) && j[j.length - 1].mediaChildren.push(this.tag);
      };
    }
    g = Object.assign({}, d.defaults, g), g.parser = Object.assign({}, h, g.parser);
    const S = function(F) {
      return g.allowedTags === false || (g.allowedTags || []).indexOf(F) > -1;
    };
    u.forEach(function(F) {
      S(F) && !g.allowVulnerableTags && console.warn(`

\u26A0\uFE0F Your \`allowedTags\` option includes, \`${F}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
    });
    const C = g.nonTextTags || ["script", "style", "textarea", "option"];
    let _, P;
    g.allowedAttributes && (_ = {}, P = {}, c(g.allowedAttributes, function(F, X) {
      _[X] = [];
      const H = [];
      F.forEach(function(te) {
        typeof te == "string" && te.indexOf("*") >= 0 ? H.push(e(te).replace(/\\\*/g, ".*")) : _[X].push(te);
      }), H.length && (P[X] = new RegExp("^(" + H.join("|") + ")$"));
    }));
    const M = {}, k = {}, T = {};
    c(g.allowedClasses, function(F, X) {
      if (_ && (p(_, X) || (_[X] = []), _[X].push("class")), M[X] = F, Array.isArray(F)) {
        const H = [];
        M[X] = [], T[X] = [], F.forEach(function(te) {
          typeof te == "string" && te.indexOf("*") >= 0 ? H.push(e(te).replace(/\\\*/g, ".*")) : te instanceof RegExp ? T[X].push(te) : M[X].push(te);
        }), H.length && (k[X] = new RegExp("^(" + H.join("|") + ")$"));
      }
    });
    const L = {};
    let D;
    c(g.transformTags, function(F, X) {
      let H;
      typeof F == "function" ? H = F : typeof F == "string" && (H = d.simpleTransform(F)), X === "*" ? D = H : L[X] = H;
    });
    let O, j, $, B, N, V, q = false;
    U();
    const R = new f.Parser({ onopentag: function(F, X) {
      if (g.onOpenTag && g.onOpenTag(F, X), g.enforceHtmlBoundary && F === "html" && U(), N) {
        V++;
        return;
      }
      const H = new b(F, X);
      j.push(H);
      let te = false;
      const le = !!H.text;
      let xe;
      if (p(L, F) && (xe = L[F](F, X), H.attribs = X = xe.attribs, xe.text !== void 0 && (H.innerText = xe.text), F !== xe.tagName && (H.name = F = xe.tagName, B[O] = xe.tagName)), D && (xe = D(F, X), H.attribs = X = xe.attribs, F !== xe.tagName && (H.name = F = xe.tagName, B[O] = xe.tagName)), (!S(F) || g.disallowedTagsMode === "recursiveEscape" && !m($) || g.nestingLimit != null && O >= g.nestingLimit) && (te = true, $[O] = true, (g.disallowedTagsMode === "discard" || g.disallowedTagsMode === "completelyDiscard") && C.indexOf(F) !== -1 && (N = true, V = 1)), O++, te) {
        if (g.disallowedTagsMode === "discard" || g.disallowedTagsMode === "completelyDiscard") {
          if (H.innerText && !le) {
            const oe = ie(H.innerText);
            g.textFilter ? w += g.textFilter(oe, F) : w += oe, q = true;
          }
          return;
        }
        y = w, w = "";
      }
      w += "<" + F, F === "script" && (g.allowedScriptHostnames || g.allowedScriptDomains) && (H.innerText = ""), te && (g.disallowedTagsMode === "escape" || g.disallowedTagsMode === "recursiveEscape") && g.preserveEscapedAttributes ? c(X, function(oe, re) {
        w += " " + re + '="' + ie(oe || "", true) + '"';
      }) : (!_ || p(_, F) || _["*"]) && c(X, function(oe, re) {
        if (!r.test(re)) {
          delete H.attribs[re];
          return;
        }
        if (oe === "" && !g.allowedEmptyAttributes.includes(re) && (g.nonBooleanAttributes.includes(re) || g.nonBooleanAttributes.includes("*"))) {
          delete H.attribs[re];
          return;
        }
        let Pt = false;
        if (!_ || p(_, F) && _[F].indexOf(re) !== -1 || _["*"] && _["*"].indexOf(re) !== -1 || p(P, F) && P[F].test(re) || P["*"] && P["*"].test(re)) Pt = true;
        else if (_ && _[F]) {
          for (const se of _[F]) if (t(se) && se.name && se.name === re) {
            Pt = true;
            let ue = "";
            if (se.multiple === true) {
              const Je = oe.split(" ");
              for (const Ie of Je) se.values.indexOf(Ie) !== -1 && (ue === "" ? ue = Ie : ue += " " + Ie);
            } else se.values.indexOf(oe) >= 0 && (ue = oe);
            oe = ue;
          }
        }
        if (Pt) {
          if (g.allowedSchemesAppliedToAttributes.indexOf(re) !== -1 && ve(F, oe)) {
            delete H.attribs[re];
            return;
          }
          if (F === "script" && re === "src") {
            let se = true;
            try {
              const ue = de(oe);
              if (g.allowedScriptHostnames || g.allowedScriptDomains) {
                const Je = (g.allowedScriptHostnames || []).find(function(Pe) {
                  return Pe === ue.url.hostname;
                }), Ie = (g.allowedScriptDomains || []).find(function(Pe) {
                  return ue.url.hostname === Pe || ue.url.hostname.endsWith(`.${Pe}`);
                });
                se = Je || Ie;
              }
            } catch {
              se = false;
            }
            if (!se) {
              delete H.attribs[re];
              return;
            }
          }
          if (F === "iframe" && re === "src") {
            let se = true;
            try {
              const ue = de(oe);
              if (ue.isRelativeUrl) se = p(g, "allowIframeRelativeUrls") ? g.allowIframeRelativeUrls : !g.allowedIframeHostnames && !g.allowedIframeDomains;
              else if (g.allowedIframeHostnames || g.allowedIframeDomains) {
                const Je = (g.allowedIframeHostnames || []).find(function(Pe) {
                  return Pe === ue.url.hostname;
                }), Ie = (g.allowedIframeDomains || []).find(function(Pe) {
                  return ue.url.hostname === Pe || ue.url.hostname.endsWith(`.${Pe}`);
                });
                se = Je || Ie;
              }
            } catch {
              se = false;
            }
            if (!se) {
              delete H.attribs[re];
              return;
            }
          }
          if (re === "srcset") try {
            let se = s(oe);
            if (se.forEach(function(ue) {
              ve("srcset", ue.url) && (ue.evil = true);
            }), se = l(se, function(ue) {
              return !ue.evil;
            }), se.length) oe = o(l(se, function(ue) {
              return !ue.evil;
            })), H.attribs[re] = oe;
            else {
              delete H.attribs[re];
              return;
            }
          } catch {
            delete H.attribs[re];
            return;
          }
          if (re === "class") {
            const se = M[F], ue = M["*"], Je = k[F], Ie = T[F], Pe = T["*"], po = k["*"], ps = [Je, po].concat(Ie, Pe).filter(function(ho) {
              return ho;
            });
            if (se && ue ? oe = Tt(oe, n(se, ue), ps) : oe = Tt(oe, se || ue, ps), !oe.length) {
              delete H.attribs[re];
              return;
            }
          }
          if (re === "style") {
            if (g.parseStyleAttributes) try {
              const se = i(F + " {" + oe + "}", { map: false }), ue = Re(se, g.allowedStyles);
              if (oe = Te(ue), oe.length === 0) {
                delete H.attribs[re];
                return;
              }
            } catch {
              typeof window < "u" && console.warn('Failed to parse "' + F + " {" + oe + `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`), delete H.attribs[re];
              return;
            }
            else if (g.allowedStyles) throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
          }
          w += " " + re, oe && oe.length ? w += '="' + ie(oe, true) + '"' : g.allowedEmptyAttributes.includes(re) && (w += '=""');
        } else delete H.attribs[re];
      }), g.selfClosing.indexOf(F) !== -1 ? w += " />" : (w += ">", H.innerText && !le && !g.textFilter && (w += ie(H.innerText), q = true)), te && (w = y + ie(w), y = ""), H.openingTagLength = w.length - H.tagPosition;
    }, ontext: function(F) {
      if (N) return;
      const X = j[j.length - 1];
      let H;
      if (X && (H = X.tag, F = X.innerText !== void 0 ? X.innerText : F), g.disallowedTagsMode === "completelyDiscard" && !S(H)) F = "";
      else if ((g.disallowedTagsMode === "discard" || g.disallowedTagsMode === "completelyDiscard") && (H === "script" || H === "style")) w += F;
      else if (!q) {
        const te = ie(F, false);
        g.textFilter ? w += g.textFilter(te, H) : w += te;
      }
      if (j.length) {
        const te = j[j.length - 1];
        te.text += F;
      }
    }, onclosetag: function(F, X) {
      if (g.onCloseTag && g.onCloseTag(F, X), N) if (V--, !V) N = false;
      else return;
      const H = j.pop();
      if (!H) return;
      if (H.tag !== F) {
        j.push(H);
        return;
      }
      N = g.enforceHtmlBoundary ? F === "html" : false, O--;
      const te = $[O];
      if (te) {
        if (delete $[O], g.disallowedTagsMode === "discard" || g.disallowedTagsMode === "completelyDiscard") {
          H.updateParentNodeText();
          return;
        }
        y = w, w = "";
      }
      if (B[O] && (F = B[O], delete B[O]), g.exclusiveFilter) {
        const le = g.exclusiveFilter(H);
        if (le === "excludeTag") {
          te && (w = y, y = ""), w = w.substring(0, H.tagPosition) + w.substring(H.tagPosition + H.openingTagLength);
          return;
        } else if (le) {
          w = w.substring(0, H.tagPosition);
          return;
        }
      }
      if (H.updateParentNodeMediaChildren(), H.updateParentNodeText(), g.selfClosing.indexOf(F) !== -1 || X && !S(F) && ["escape", "recursiveEscape"].indexOf(g.disallowedTagsMode) >= 0) {
        te && (w = y, y = "");
        return;
      }
      w += "</" + F + ">", te && (w = y + ie(w), y = ""), q = false;
    } }, g.parser);
    return R.write(v), R.end(), w;
    function U() {
      w = "", O = 0, j = [], $ = {}, B = {}, N = false, V = 0;
    }
    function ie(F, X) {
      return typeof F != "string" && (F = F + ""), g.parser.decodeEntities && (F = F.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), X && (F = F.replace(/"/g, "&quot;"))), F = F.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), X && (F = F.replace(/"/g, "&quot;")), F;
    }
    function ve(F, X) {
      for (X = X.replace(/[\x00-\x20]+/g, ""); ; ) {
        const le = X.indexOf("<!--");
        if (le === -1) break;
        const xe = X.indexOf("-->", le + 4);
        if (xe === -1) break;
        X = X.substring(0, le) + X.substring(xe + 3);
      }
      const H = X.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
      if (!H) return X.match(/^[/\\]{2}/) ? !g.allowProtocolRelative : false;
      const te = H[1].toLowerCase();
      return p(g.allowedSchemesByTag, F) ? g.allowedSchemesByTag[F].indexOf(te) === -1 : !g.allowedSchemes || g.allowedSchemes.indexOf(te) === -1;
    }
    function de(F) {
      if (F = F.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), F.startsWith("relative:")) throw new Error("relative: exploit attempt");
      let X = "relative://relative-site";
      for (let le = 0; le < 100; le++) X += `/${le}`;
      const H = new URL(F, X);
      return { isRelativeUrl: H && H.hostname === "relative-site" && H.protocol === "relative:", url: H };
    }
    function Re(F, X) {
      if (!X) return F;
      const H = F.nodes[0];
      let te;
      return X[H.selector] && X["*"] ? te = n(X[H.selector], X["*"]) : te = X[H.selector] || X["*"], te && (F.nodes[0].nodes = H.nodes.reduce(jt(te), [])), F;
    }
    function Te(F) {
      return F.nodes[0].nodes.reduce(function(X, H) {
        return X.push(`${H.prop}:${H.value}${H.important ? " !important" : ""}`), X;
      }, []).join(";");
    }
    function jt(F) {
      return function(X, H) {
        return p(F, H.prop) && F[H.prop].some(function(le) {
          return le.test(H.value);
        }) && X.push(H), X;
      };
    }
    function Tt(F, X, H) {
      return X ? (F = F.split(/\s+/), F.filter(function(te) {
        return X.indexOf(te) !== -1 || H.some(function(le) {
          return le.test(te);
        });
      }).join(" ")) : F;
    }
  }
  const h = { decodeEntities: true };
  return d.defaults = { allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "menu", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"], nonBooleanAttributes: ["abbr", "accept", "accept-charset", "accesskey", "action", "allow", "alt", "as", "autocapitalize", "autocomplete", "blocking", "charset", "cite", "class", "color", "cols", "colspan", "content", "contenteditable", "coords", "crossorigin", "data", "datetime", "decoding", "dir", "dirname", "download", "draggable", "enctype", "enterkeyhint", "fetchpriority", "for", "form", "formaction", "formenctype", "formmethod", "formtarget", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "id", "imagesizes", "imagesrcset", "inputmode", "integrity", "is", "itemid", "itemprop", "itemref", "itemtype", "kind", "label", "lang", "list", "loading", "low", "max", "maxlength", "media", "method", "min", "minlength", "name", "nonce", "optimum", "pattern", "ping", "placeholder", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "referrerpolicy", "rel", "rows", "rowspan", "sandbox", "scope", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "tabindex", "target", "title", "translate", "type", "usemap", "value", "width", "wrap", "onauxclick", "onafterprint", "onbeforematch", "onbeforeprint", "onbeforeunload", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "onhashchange", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmessage", "onmessageerror", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onoffline", "ononline", "onpagehide", "onpageshow", "onpaste", "onpause", "onplay", "onplaying", "onpopstate", "onprogress", "onratechange", "onreset", "onresize", "onrejectionhandled", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onunhandledrejection", "onunload", "onvolumechange", "onwaiting", "onwheel"], disallowedTagsMode: "discard", allowedAttributes: { a: ["href", "name", "target"], img: ["src", "srcset", "alt", "title", "width", "height", "loading"] }, allowedEmptyAttributes: ["alt"], selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"], allowedSchemes: ["http", "https", "ftp", "mailto", "tel"], allowedSchemesByTag: {}, allowedSchemesAppliedToAttributes: ["href", "src", "cite"], allowProtocolRelative: true, enforceHtmlBoundary: false, parseStyleAttributes: true, preserveEscapedAttributes: false }, d.simpleTransform = function(v, g, x) {
    return x = x === void 0 ? true : x, g = g || {}, function(w, y) {
      let b;
      if (x) for (b in g) y[b] = g[b];
      else y = g;
      return { tagName: v, attribs: y };
    };
  }, Rn;
}
var $0 = z0();
const N0 = ra($0), j0 = { key: 0, class: "multiplayer" }, F0 = { class: "container" }, U0 = { class: "tabs" }, q0 = { key: 0, class: "notifications" }, H0 = { class: "panel" }, V0 = ["title"], G0 = ["innerHTML"], W0 = { key: 1, class: "text" }, X0 = { class: "message-input" }, Z0 = { class: "panel" }, Y0 = { class: "lobby" }, Q0 = { class: "player" }, K0 = { class: "name" }, J0 = ["onDblclick", "title"], ep = ["onClick", "title"], tp = { __name: "BubbleMultiplayer", setup(f) {
  ye({ useScope: "global" });
  var e = W("chat"), t = W(false), n = W(false), s = W(0), i = W(""), a = W([]), u = W(), c = W([]), p = app.storage.getSettings(), l;
  function m() {
    app.network.on("peer_open", r), app.network.on("peer_close", d), app.network.on("peer_disconnected", h), app.network.on("connection_start", v), app.network.on("connection_open", g), app.network.on("connection_close", x), app.network.on("connection_data", w), window.addEventListener("levelStart", y), window.addEventListener("levelFinish", b);
  }
  function o() {
    app.network.off("peer_open", r), app.network.off("peer_close", d), app.network.off("peer_disconnected", h), app.network.off("connection_start", v), app.network.off("connection_open", g), app.network.off("connection_close", x), app.network.off("connection_data", w), window.removeEventListener("levelStart", y), window.removeEventListener("levelFinish", b);
  }
  function r(B) {
    t.value = true, P() && C({ name: "Server", text: "Server is ready! \u{1F60A}", time: $(), color: "#4ca9ff" });
  }
  function d(B) {
    t.value = false, P() && C({ name: "Server", text: "Server closed! \u{1F614}", time: $(), color: "#ff674c" });
  }
  function h(B) {
    C({ name: "Server", text: "Weak connection... \u{1F6DC}", time: $(), color: "#4ca9ff" });
  }
  function v(B) {
    P() || (C({ name: "Server", text: "Searching... \u{1F50D}", time: $(), color: "#4ca9ff" }), l = setTimeout(function() {
      C({ name: "Error", text: "Host not found. Your connection may be blocked on this network. \u{1F614}", time: $(), color: "#ff674c" });
    }, 5e3));
  }
  function g(B) {
    if (clearTimeout(l), P()) {
      var N = { type: "message", name: "Server", text: B.connection.metadata.name + " has connected! \u{1F44B}", time: $(), color: "#4ca9ff" };
      S(N);
    }
  }
  function x(B) {
    var N = { type: "message", name: "Server", text: B.connection.metadata.name + " has disconnected! \u{1F44B}", time: $(), color: "#4ca9ff" };
    P() ? S(N) : (N.name = "Server", N.text = "The host has disconnected! \u{1F614}", N.color = "#4ca9ff", C(N)), c.value = app.multiplayer.players.children.slice(0);
  }
  function w(B) {
    B.data.type == "message" ? (C(B.data), P() && (B.data.name = B.connection.metadata.name, app.network.connections.forEach(function(N) {
      N.send(B.data);
    }))) : B.data.type == "players" && c.value.length != app.multiplayer.players.children.length && (c.value = app.multiplayer.players.children.slice(0));
  }
  function y(B) {
    var N = app.storage.getSettings(), V = B.detail.title, q = B.detail.description, R = { type: "message", name: N.name, text: 'Is now playing <a href="' + V + '">' + q + "</a> \u25B6\uFE0F", time: $(), color: "#4cff64", raw: true };
    app.network.isOnline() && S(R);
  }
  function b(B) {
    var N = B.detail.time, V = B.detail.level, q = app.level.getDescriptionByTitle(V), R = app.storage.getSettings(), U = { type: "message", name: R.name, text: 'Finished <a href="' + V + '">' + q + "</a> in \u{1F552}<strong>" + N + "s</strong>", time: $(), color: "#4cff64", raw: true };
    app.network.isOnline() && S(U);
  }
  function S(B) {
    var N = app.storage.getSettings();
    if (B == null) {
      if (i.value.value == "") return;
      B = { type: "message", name: N.name + (P() ? " [host]" : ""), text: i.value.value, time: $(), color: "#ffcc4d", raw: true }, i.value.value = "";
    }
    P() ? C(B) : app.network.connections.size == 0 && (B.name = "Error", B.text = "Host not found! \u{1F614}", B.color = "#ff674c", C(B)), app.network.connections.forEach(function(V) {
      V.send(B);
    });
  }
  function C(B) {
    var N = N0(B.text, { allowedTags: ["a", "em", "h1", "h2", "h3", "h4", "h5", "h6", "img"], allowedAttributes: { a: ["href"], img: ["src", "width", "height"] } });
    B.text = N, a.value.push(B), (e.value != "chat" || k()) && s.value++, _();
  }
  async function _(B = false) {
    if (u.value) {
      var N = u.value, V = N.scrollTop + 1 > N.scrollHeight - N.clientHeight;
      await sa(), (V || B == true) && (N.scrollTop = N.scrollHeight + 1);
    }
  }
  function P() {
    return app.multiplayer.isHost();
  }
  function M() {
    return t.value;
  }
  function k() {
    return n.value;
  }
  function T(B) {
    app.multiplayer.closeConnectionByUUID(B.uuid);
  }
  async function L(B, N, V) {
    var q = await app.playLevel(B);
    q ? (window.dispatchEvent(new CustomEvent("setPage", { detail: "campaign" })), p = app.storage.getSettings(), p.progress = app.level.getLevelIndex(B.title) + 1, app.updateSettings(p), typeof N == "function" && N()) : typeof V == "function" && V();
  }
  function D(B) {
    L({ title: B.level }, () => {
      var N = app.multiplayer.getPlayer({ uuid: B.uuid });
      N && app.player.setPosition(N.position, false);
    }, () => {
      C({ name: "Server", text: B.text + " is currently picking a level... \u23F3", time: $(), color: "#4ca9ff" });
    });
  }
  async function O(B) {
    B.preventDefault();
    var N = B.target;
    if (N.nodeName == "A") {
      var V = N.getAttribute("href");
      L({ title: V }, () => {
      }, () => {
        C({ name: "Server", text: V + " is not an official level... \u{1F614}", time: $(), color: "#4ca9ff" });
      });
    }
  }
  function j(B) {
    B == e.value ? n.value = !n.value : n.value = false, B == "chat" && (s.value = 0), e.value = B;
  }
  function $() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  return pe(function() {
    m();
  }), he(function() {
    o();
  }), (B, N) => (I(), be(zt, { name: "fade-multiplayer" }, { default: Bt(() => [M() ? (I(), z("div", j0, [E("div", F0, [E("div", U0, [E("div", { class: ee(["tab", { selected: A(e) == "chat" }]), onClick: N[0] || (N[0] = (V) => j("chat")), title: "Chat" }, [N[5] || (N[5] = E("span", { class: "material-symbols-rounded" }, "chat", -1)), A(s) > 0 ? (I(), z("span", q0, G(A(s)), 1)) : Y("", true)], 2), E("div", { class: ee(["tab", { selected: A(e) == "lobby" }]), onClick: N[1] || (N[1] = (V) => j("lobby")), title: "Lobby" }, N[6] || (N[6] = [E("span", { class: "material-symbols-rounded" }, "group", -1)]), 2)]), E("div", { class: ee(["content", { collapsed: k() }]) }, [Qe(E("div", H0, [E("ul", { class: "messages", ref_key: "messageBox", ref: u, onClick: O }, [(I(true), z(me, null, Oe(A(a), (V) => (I(), z("li", { class: "message", title: V.name }, [E("span", { class: "name", style: Qt({ color: V.color || "#ffffff" }) }, G(V.name), 5), N[7] || (N[7] = E("span", null, ": ", -1)), V.raw ? (I(), z("span", { key: 0, class: "text", innerHTML: V.text }, null, 8, G0)) : (I(), z("span", W0, G(V.text), 1))], 8, V0))), 256))], 512), E("div", X0, [E("input", { type: "text", ref_key: "message", ref: i, placeholder: "Message", onKeydown: N[2] || (N[2] = eu((V) => {
    S(null);
  }, ["enter"])), onFocus: N[3] || (N[3] = (V) => {
    Bn(n) ? n.value = false : n = false, Bn(s) ? s.value = 0 : s = 0;
  }), maxlength: "128" }, null, 544), E("button", { onClick: N[4] || (N[4] = (V) => S(null)) }, N[8] || (N[8] = [E("span", { class: "material-symbols-rounded" }, "send", -1)]))])], 512), [[st, A(e) == "chat"]]), Qe(E("div", Z0, [E("ul", Y0, [(I(true), z(me, null, Oe(A(c), (V) => (I(), z("li", Q0, [E("span", K0, G(V.text), 1), P() ? (I(), z("span", { key: 0, class: "action material-symbols-rounded", onDblclick: (q) => T(V), title: "Double-click to kick " + V.text }, "close", 40, J0)) : Y("", true), E("span", { class: "action material-symbols-rounded", onClick: (q) => D(V), title: "Teleport to " + V.text }, "play_arrow", 8, ep)]))), 256))])], 512), [[st, A(e) == "lobby"]])], 2)])])) : Y("", true)]), _: 1 }));
} }, ip = { class: "tabs" }, np = { __name: "BubbleSettingsTabs", props: ["tab"], setup(f) {
  const e = ye({ useScope: "global" });
  return (t, n) => (I(), z("div", ip, [E("div", { class: ee(["tab", { selected: f.tab == "audio" }]), onClick: n[0] || (n[0] = (s) => {
    t.$emit("changeTab", "audio");
  }) }, [E("label", null, G(A(e).t("settings.audio.title")), 1), n[6] || (n[6] = E("span", { class: "material-symbols-rounded" }, "volume_up", -1))], 2), E("div", { class: ee(["tab", { selected: f.tab == "controls" }]), onClick: n[1] || (n[1] = (s) => {
    t.$emit("changeTab", "controls");
  }) }, [E("label", null, G(A(e).t("settings.controls.title")), 1), n[7] || (n[7] = E("span", { class: "material-symbols-rounded" }, "gamepad", -1))], 2), E("div", { class: ee(["tab", { selected: f.tab == "graphics" }]), onClick: n[2] || (n[2] = (s) => {
    t.$emit("changeTab", "graphics");
  }) }, [E("label", null, G(A(e).t("settings.graphics.title")), 1), n[8] || (n[8] = E("span", { class: "material-symbols-rounded" }, "visibility", -1))], 2), E("div", { class: ee(["tab", { selected: f.tab == "multiplayer" }]), onClick: n[3] || (n[3] = (s) => {
    t.$emit("changeTab", "multiplayer");
  }) }, [E("label", null, G(A(e).t("settings.multiplayer.title")), 1), n[9] || (n[9] = E("span", { class: "material-symbols-rounded" }, "group", -1))], 2), E("div", { class: ee(["tab", { selected: f.tab == "language" }]), onClick: n[4] || (n[4] = (s) => {
    t.$emit("changeTab", "language");
  }) }, [E("label", null, G(A(e).t("settings.language.title")), 1), n[10] || (n[10] = E("span", { class: "material-symbols-rounded" }, "translate", -1))], 2), E("div", { class: ee(["tab", { selected: f.tab == "data" }]), onClick: n[5] || (n[5] = (s) => {
    t.$emit("changeTab", "data");
  }) }, [E("label", null, G(A(e).t("settings.data.title")), 1), n[11] || (n[11] = E("span", { class: "material-symbols-rounded" }, "save", -1))], 2)]));
} }, sp = { class: "panel" }, rp = { class: "group" }, ap = { class: "option" }, op = { for: "quality" }, up = { class: "option" }, lp = ["value"], cp = { for: "quality" }, dp = { class: "option" }, fp = { for: "scale" }, pp = { class: "option" }, hp = ["value"], mp = { for: "scale" }, vp = { class: "group" }, gp = { class: "option" }, bp = { for: "motion" }, yp = { class: "option" }, xp = ["checked"], wp = { for: "motion" }, Sp = { class: "group" }, Cp = { class: "option" }, _p = { class: "option" }, Ep = ["checked"], kp = { for: "stats" }, Tp = { class: "option" }, Pp = ["checked"], Mp = { for: "debug" }, Lp = { class: "option" }, Op = ["checked"], Ap = { for: "theme" }, Rp = { __name: "BubbleSettingsPanelGraphics", props: ["settings"], setup(f) {
  const e = ye({ useScope: "global" });
  var t = f;
  function n() {
    window.dispatchEvent(new CustomEvent("setTheme"));
  }
  function s() {
    app.level.showHelpers(t.settings.debug);
  }
  return (i, a) => (I(), z("div", sp, [E("p", null, G(A(e).t("settings.graphics.title")), 1), E("div", rp, [E("div", ap, [E("label", op, G(A(e).t("settings.graphics.quality")), 1)]), E("div", up, [E("input", { type: "range", id: "quality", min: "1", max: "10", step: "1", value: f.settings.quality, onChange: a[0] || (a[0] = (u) => i.$emit("updateSettings", u)) }, null, 40, lp), E("label", cp, G(f.settings.quality * 10) + "%", 1)]), E("div", dp, [E("label", fp, G(A(e).t("settings.graphics.scale")), 1)]), E("div", pp, [E("input", { type: "range", id: "scale", min: "0.5", max: "1.5", step: "0.125", value: f.settings.scale, onChange: a[1] || (a[1] = (u) => i.$emit("updateSettings", u)) }, null, 40, hp), E("label", mp, G(f.settings.scale * 100) + "%", 1)])]), E("div", vp, [E("div", gp, [E("label", bp, G(A(e).t("settings.graphics.camera")), 1)]), E("div", yp, [E("input", { type: "checkbox", id: "motion", checked: f.settings.motion == true, onChange: a[2] || (a[2] = (u) => i.$emit("updateSettings", u)) }, null, 40, xp), E("label", wp, G(A(e).t("settings.graphics.auto_rotate")), 1)])]), E("div", Sp, [E("div", Cp, [E("label", null, G(A(e).t("settings.graphics.developer_tools")), 1)]), E("div", _p, [E("input", { type: "checkbox", id: "stats", checked: f.settings.stats == true, onChange: a[3] || (a[3] = (u) => i.$emit("updateSettings", u)) }, null, 40, Ep), E("label", kp, G(A(e).t("settings.graphics.show_fps")), 1)]), E("div", Tp, [E("input", { type: "checkbox", id: "debug", checked: f.settings.debug == true, onChange: a[4] || (a[4] = (u) => i.$emit("updateSettings", u, null, s)) }, null, 40, Pp), E("label", Mp, G(A(e).t("settings.graphics.debug_mode")), 1)]), E("div", Lp, [E("input", { type: "checkbox", id: "theme", checked: f.settings.theme == "origin", onChange: a[5] || (a[5] = (u) => i.$emit("updateSettings", u, { true: "origin", false: "bubble" }, n)) }, null, 40, Op), E("label", Ap, G(A(e).t("settings.graphics.old_ui")), 1)])])]));
} }, Dp = { class: "panel" }, Ip = { class: "group gap" }, Bp = { class: "option wrap" }, zp = { for: "name" }, $p = ["value"], Np = { class: "option gap" }, jp = { key: 0, class: "option wrap" }, Fp = { for: "connection" }, Up = { class: "flex gap" }, qp = ["value"], Hp = { key: 0, class: "option flex-basis-50" }, Vp = ["checked"], Gp = { for: "join-multiplayer" }, Wp = { key: 1, class: "option wrap" }, Xp = { for: "peer" }, Zp = { class: "flex gap" }, Yp = ["value"], Qp = { key: 0, class: "option flex-basis-50" }, Kp = ["checked"], Jp = { for: "host-multiplayer" }, eh = { __name: "BubbleSettingsPanelMultiplayer", props: ["settings"], setup(f) {
  const e = ye({ useScope: "global" }), t = f, n = W("");
  function s(l) {
    if (app.network.off("peer_open", s), app.network.off("peer_error", i), app.multiplayer.setHost(null), l.target.checked == false) {
      app.network.destroy();
      return;
    }
    a() ? app.network.connect(t.settings.connection, { metadata: { name: t.settings.name, uuid: app.player.uuid, time: app.multiplayer.getTime() } }) : (app.network.on("peer_open", s), app.network.on("peer_error", i), app.network.open(t.settings.peer));
  }
  function i(l) {
    window.dispatchEvent(new CustomEvent("openPopup", { detail: { text: l.error.message, inputs: [{ type: "button", value: "popup.button.continue", callback: function() {
      window.dispatchEvent(new CustomEvent("closePopup"));
    } }] } }));
  }
  function a() {
    return app.network.isOnline();
  }
  function u() {
    return app.multiplayer.isHost();
  }
  function c() {
    u() ? (app.network.off("peer_error", i), app.network.destroy(), app.multiplayer.setHost(null)) : (app.network.on("peer_error", i), app.network.open(t.settings.peer), app.multiplayer.setHost(t.settings.peer));
  }
  function p(l) {
    var m = l.target, o = m.value;
    m.value = "Copied!", m.disabled = true, navigator.clipboard.writeText(o), setTimeout(function() {
      m.value = o, m.disabled = false;
    }, 1e3);
  }
  return (l, m) => (I(), z("div", Dp, [E("p", null, G(A(e).t("settings.multiplayer.title")), 1), E("div", Ip, [E("div", Bp, [E("label", zp, G(A(e).t("settings.multiplayer.your_name")), 1), E("input", { type: "text", id: "name", autocomplete: "off", value: f.settings.name, onChange: m[0] || (m[0] = (o) => l.$emit("updateSettings", o)) }, null, 40, $p)]), E("div", Np, [E("button", { class: ee([{ selected: n.value == "guest" }, "center flex-basis-50"]), onClick: m[1] || (m[1] = (o) => n.value = "guest") }, [m[7] || (m[7] = E("span", { class: "material-symbols-rounded" }, "login", -1)), Ee(" " + G(A(e).t("settings.multiplayer.join")), 1)], 2), E("button", { class: ee([{ selected: n.value == "host" }, "center flex-basis-50"]), onClick: m[2] || (m[2] = (o) => n.value = "host") }, [m[8] || (m[8] = E("span", { class: "material-symbols-rounded" }, "home", -1)), Ee(" " + G(A(e).t("settings.multiplayer.host")), 1)], 2)]), n.value != "" ? (I(), z(me, { key: 0 }, [n.value == "guest" ? (I(), z("div", jp, [E("label", Fp, G(A(e).t("settings.multiplayer.paste_friend_code")), 1), E("div", Up, [E("input", { type: "text", id: "connection", autocomplete: "off", maxlength: "6", class: "flex-basis-50", value: f.settings.connection, placeholder: "ex: DC265A", onChange: m[3] || (m[3] = (o) => l.$emit("updateSettings", o)) }, null, 40, qp), n.value == "guest" ? (I(), z("div", Hp, [E("input", { type: "checkbox", id: "join-multiplayer", checked: a() && u() == false, onChange: m[4] || (m[4] = (o) => s(o)) }, null, 40, Vp), E("label", Gp, G(A(e).t("settings.multiplayer.join")), 1)])) : Y("", true)])])) : Y("", true), n.value == "host" ? (I(), z("div", Wp, [E("label", Xp, G(A(e).t("settings.multiplayer.share_friend_code")), 1), E("div", Zp, [E("input", { type: "text", id: "peer", autocomplete: "off", maxlength: "6", class: ee(["flex-basis-50", { hex: f.settings.peer.length <= 6 }]), readonly: "", value: f.settings.peer, onClick: m[5] || (m[5] = (o) => p(o)) }, null, 10, Yp), n.value == "host" ? (I(), z("div", Qp, [E("input", { type: "checkbox", id: "host-multiplayer", checked: u(), onChange: m[6] || (m[6] = (o) => c()) }, null, 40, Kp), E("label", Jp, G(A(e).t("settings.multiplayer.host")), 1)])) : Y("", true)])])) : Y("", true)], 64)) : Y("", true)])]));
} }, th = $t(eh, [["__scopeId", "data-v-b2a17d79"]]), ih = { class: "panel" }, nh = { class: "group" }, sh = { class: "option" }, rh = { for: "buffer" }, ah = { class: "option" }, oh = ["value"], uh = { for: "buffer" }, lh = { class: "group" }, ch = { class: "option" }, dh = { class: "option" }, fh = ["checked"], ph = { for: "controls" }, hh = { __name: "BubbleSettingsPanelControls", props: ["settings"], emits: ["updateSettings"], setup(f, { emit: e }) {
  const t = ye({ useScope: "global" }), n = f, s = e;
  function i(a) {
    const u = a.target, c = n.settings.controls;
    c.reverse = u.checked, s("updateSettings", a, { true: { ...c, reverse: true }, false: { ...c, reverse: false } }), window.dispatchEvent(new CustomEvent("updateControls"));
  }
  return (a, u) => (I(), z("div", ih, [E("p", null, G(A(t).t("settings.controls.title")), 1), E("div", nh, [E("div", sh, [E("label", rh, G(A(t).t("settings.controls.buffer")), 1)]), E("div", ah, [E("input", { type: "range", id: "buffer", min: "0", max: "100", step: "10", value: f.settings.buffer, onChange: u[0] || (u[0] = (c) => a.$emit("updateSettings", c)) }, null, 40, oh), E("label", uh, G(f.settings.buffer) + "ms", 1)])]), E("div", lh, [E("div", ch, [E("label", null, G(A(t).t("settings.controls.controller")), 1)]), E("div", dh, [E("input", { type: "checkbox", id: "controls", checked: f.settings.controls?.reverse == true, onChange: i }, null, 40, fh), E("label", ph, G(A(t).t("settings.controls.reverse")), 1)])])]));
} }, mh = { class: "panel" }, vh = { class: "group" }, gh = { class: "option" }, bh = { for: "music" }, yh = { class: "option" }, xh = ["value"], wh = ["value", "selected"], Sh = { class: "group" }, Ch = { class: "option" }, _h = { for: "volume" }, Eh = { class: "option" }, kh = ["value"], Th = { for: "volume" }, Ph = { class: "option" }, Mh = { for: "volumeMusic" }, Lh = { class: "option" }, Oh = ["value"], Ah = { for: "volumeMusic" }, Rh = { class: "option" }, Dh = { for: "volumeEffects" }, Ih = { class: "option" }, Bh = ["value"], zh = { for: "volumeEffects" }, $h = { __name: "BubbleSettingsPanelAudio", props: ["settings"], emits: ["updateSettings"], setup(f, { emit: e }) {
  const t = ye({ useScope: "global" }), n = e;
  var s = Object.keys(wi).filter((a) => wi[a].userData.type == "music").map((a) => ({ text: wi[a].userData.name, value: a }));
  function i(a) {
    s.forEach((u) => {
      app.assets.audio.cache[u.value].stop();
    }), app.assets.audio.cache[a.target.value].play(), n("updateSettings", a);
  }
  return (a, u) => (I(), z("div", mh, [E("p", null, G(A(t).t("settings.audio.title")), 1), E("div", vh, [E("div", gh, [E("label", bh, G(A(t).t("settings.audio.music")), 1)]), E("div", yh, [E("select", { id: "music", value: f.settings.music, onChange: u[0] || (u[0] = (c) => i(c)) }, [(I(true), z(me, null, Oe(A(s), (c, p) => (I(), z("option", { value: c.value, key: c.value, selected: f.settings.music == c.value }, G(c.text), 9, wh))), 128))], 40, xh)])]), E("div", Sh, [E("div", Ch, [E("label", _h, G(A(t).t("settings.audio.volume_main")), 1)]), E("div", Eh, [E("input", { type: "range", id: "volume", min: "0", max: "1", step: "0.1", value: f.settings.volume, onChange: u[1] || (u[1] = (c) => a.$emit("updateSettings", c)) }, null, 40, kh), E("label", Th, G(f.settings.volume * 100) + "%", 1)]), E("div", Ph, [E("label", Mh, G(A(t).t("settings.audio.volume_music")), 1)]), E("div", Lh, [E("input", { type: "range", id: "volumeMusic", min: "0", max: "1", step: "0.1", value: f.settings.volumeMusic, onChange: u[2] || (u[2] = (c) => a.$emit("updateSettings", c)) }, null, 40, Oh), E("label", Ah, G(f.settings.volumeMusic * 100) + "%", 1)]), E("div", Rh, [E("label", Dh, G(A(t).t("settings.audio.volume_effects")), 1)]), E("div", Ih, [E("input", { type: "range", id: "volumeEffects", min: "0", max: "1", step: "0.1", value: f.settings.volumeEffects, onChange: u[3] || (u[3] = (c) => a.$emit("updateSettings", c)) }, null, 40, Bh), E("label", zh, G(f.settings.volumeEffects * 100) + "%", 1)])])]));
} }, Nh = { class: "panel" }, jh = { class: "group" }, Fh = { class: "option" }, Uh = { class: "option gap" }, qh = { class: "group" }, Hh = { class: "option" }, Vh = { class: "option gap" }, Gh = { class: "group" }, Wh = { class: "option wrap" }, Xh = { for: "mods" }, Zh = ["value"], Yh = { __name: "BubbleSettingsPanelData", props: ["settings"], setup(f) {
  const e = ye({ useScope: "global" });
  function t() {
    return window.chrome?.storage != null;
  }
  function n() {
    app.storage.backupToFile();
  }
  function s() {
    app.storage.backupToChrome();
  }
  function i() {
    app.storage.restoreFromFile();
  }
  function a() {
    app.storage.restoreFromChrome();
  }
  function u() {
    var p = localStorage.getItem("clipboard");
    return (p == null || p == "") && (p = "Hello, World!"), p;
  }
  function c(p) {
    var l = p.target.value;
    localStorage.setItem("clipboard", l);
  }
  return (p, l) => (I(), z("div", Nh, [E("p", null, G(A(e).t("settings.data.title")), 1), E("div", jh, [E("div", Fh, [E("label", null, G(A(e).t("settings.data.backup_to")), 1)]), E("div", Uh, [E("button", { onClick: n }, [l[0] || (l[0] = E("span", { class: "material-symbols-rounded" }, "folder", -1)), Ee(" " + G(A(e).t("settings.data.file")), 1)]), t() ? (I(), z("button", { key: 0, onClick: s }, [l[1] || (l[1] = E("span", { class: "material-symbols-rounded" }, "cloud_done", -1)), Ee(" " + G(A(e).t("settings.data.google")), 1)])) : Y("", true)])]), E("div", qh, [E("div", Hh, [E("label", null, G(A(e).t("settings.data.restore_from")), 1)]), E("div", Vh, [E("button", { onClick: i }, [l[2] || (l[2] = E("span", { class: "material-symbols-rounded" }, "folder", -1)), Ee(" " + G(A(e).t("settings.data.file")), 1)]), t() ? (I(), z("button", { key: 0, onClick: a }, [l[3] || (l[3] = E("span", { class: "material-symbols-rounded" }, "cloud_done", -1)), Ee(" " + G(A(e).t("settings.data.google")), 1)])) : Y("", true)])]), E("div", Gh, [E("div", Wh, [E("label", Xh, [l[4] || (l[4] = E("span", { class: "material-symbols-rounded" }, "assignment", -1)), Ee(" " + G(A(e).t("settings.mods.clipboard")), 1)]), E("textarea", { value: u(), id: "mods", onChange: c, spellcheck: "false" }, null, 40, Zh)])])]));
} }, Qh = { class: "panel" }, Kh = { class: "group" }, Jh = { class: "option" }, em = { class: "option" }, tm = ["value"], im = ["value", "selected"], nm = { class: "group" }, sm = { class: "option" }, rm = { __name: "BubbleSettingsPanelLanguage", props: ["settings"], emits: ["updateSettings"], setup(f, { emit: e }) {
  const t = ye({ useScope: "global" }), n = e;
  var s = yt(() => {
    const a = t.availableLocales.map((c) => [c, t.t(`locales.${c}`)]);
    return Object.fromEntries(a);
  });
  function i(a) {
    t.locale.value = a.target.value, n("updateSettings", a);
  }
  return (a, u) => (I(), z("div", Qh, [E("p", null, G(A(t).t("settings.language.title")), 1), E("div", Kh, [E("div", Jh, [E("label", null, G(A(t).t("settings.language.select_language")), 1)]), E("div", em, [E("select", { id: "language", value: f.settings.language, onChange: u[0] || (u[0] = (c) => i(c)) }, [(I(true), z(me, null, Oe(A(s), (c, p) => (I(), z("option", { value: p, key: p, selected: f.settings.language == p }, G(c), 9, im))), 128))], 40, tm)])]), E("div", nm, [E("div", sm, [E("label", null, G(A(t).t("settings.language.credit")), 1)]), u[1] || (u[1] = E("div", { class: "option" }, [E("ul", null, [E("li", null, "outerbound (Spanish)"), E("li", null, "Zeta (Persian/Farsi)"), E("li", null, "R - G - C\u2122 (French)"), E("li", null, "SangSang2 (Korean)")])], -1))])]));
} }, am = { class: "popup settings" }, om = { class: "container" }, um = { class: "content compact" }, lm = ["title"], cm = { __name: "BubbleSettings", setup(f) {
  const e = ye({ useScope: "global" });
  var t = W("audio"), n = W([]), s = W(false), i = W({});
  function a() {
    window.addEventListener("openSettings", c), window.addEventListener("closeSettings", p), window.addEventListener("keydown", r);
  }
  function u() {
    window.removeEventListener("openSettings", c), window.removeEventListener("closeSettings", p), window.removeEventListener("keydown", r);
  }
  function c(h) {
    s.value = true, i.value = app.storage.getSettings(), h.detail && (t.value = h.detail), window.dispatchEvent(new CustomEvent("beforeSettingsOpened")), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("settingsOpened"));
    }, 100);
  }
  function p() {
    s.value = false, window.dispatchEvent(new CustomEvent("beforeSettingsClosed")), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("settingsClosed"));
    }, 100);
  }
  function l(h) {
    t.value = h;
  }
  function m(h, v) {
    h == null && (h = p), h(v);
  }
  function o(h) {
    var v = n.value[n.value.length - 1];
    v ? m(v.callback, h) : p();
  }
  function r(h) {
    if (s.value == true && h.target.tagName != "INPUT" && h.target.tagName != "TEXTAREA") {
      var v = ["Escape", "KeyE"];
      v.indexOf(h.code) > -1 && (h.preventDefault(), o(h));
    }
  }
  function d(h, v, g = function() {
  }) {
    var x = h.target, w = x.id, y = x.value, b = h.target.type;
    b == "range" && (y = parseFloat(y)), b == "checkbox" && (y = x.checked), v && (y = v[y]), i.value[w] = y, app.updateSettings(i.value), g();
  }
  return pe(function() {
    a();
  }), he(function() {
    u();
  }), (h, v) => (I(), be(zt, { name: "fade-settings" }, { default: Bt(() => [Qe(E("div", am, [E("div", { class: "background", onClick: o }), E("div", om, [ae(np, { tab: A(t), onChangeTab: l }, null, 8, ["tab"]), E("div", um, [Qe(ae($h, { settings: A(i), onUpdateSettings: d }, null, 8, ["settings"]), [[st, A(t) == "audio"]]), Qe(ae(Rp, { settings: A(i), onUpdateSettings: d }, null, 8, ["settings"]), [[st, A(t) == "graphics"]]), Qe(ae(hh, { settings: A(i), onUpdateSettings: d }, null, 8, ["settings"]), [[st, A(t) == "controls"]]), Qe(ae(th, { settings: A(i), onUpdateSettings: d }, null, 8, ["settings"]), [[st, A(t) == "multiplayer"]]), Qe(ae(Yh, { settings: A(i), onUpdateSettings: d }, null, 8, ["settings"]), [[st, A(t) == "data"]]), Qe(ae(rm, { settings: A(i), onUpdateSettings: d }, null, 8, ["settings"]), [[st, A(t) == "language"]]), E("a", { class: "close", onClick: o, title: A(e).t("popup.button.close") }, v[0] || (v[0] = [E("span", { class: "material-symbols-rounded" }, "close", -1)]), 8, lm)])])], 512), [[st, A(s) == true]])]), _: 1 }));
} }, dm = { key: 0, class: "popup" }, fm = { class: "container" }, pm = { class: "content" }, hm = ["innerHTML"], mm = ["innerHTML"], vm = ["innerHTML"], gm = { class: "inputs" }, bm = ["for"], ym = ["id"], xm = ["id", "type", "value", "min", "max", "step", "accept"], wm = ["title"], Sm = { __name: "BubblePopup", setup(f) {
  const e = ye({ useScope: "global" });
  var t = W(""), n = W(""), s = W(""), i = W([]), a = W(false);
  function u() {
    window.addEventListener("openPopup", p), window.addEventListener("closePopup", l), window.addEventListener("keydown", r);
  }
  function c() {
    window.removeEventListener("openPopup", p), window.removeEventListener("closePopup", l), window.removeEventListener("keydown", r);
  }
  function p(d) {
    a.value = true, d.detail && (d.detail.text && (e.te(d.detail.title, e.fallbackLocale.value) ? t.value = e.t(d.detail.title) : t.value = d.detail.title, e.te(d.detail.text, e.fallbackLocale.value) ? n.value = e.t(d.detail.text) : n.value = d.detail.text, e.te(d.detail.description, e.fallbackLocale.value) ? s.value = e.t(d.detail.description) : s.value = d.detail.description), d.detail.inputs && (i.value = d.detail.inputs, i.value.forEach(function(h) {
      h.type == "file" || h.type == "range" || h.type == "text" ? h.event = "change" : h.event = "click", h.value && e.te(h.value, e.fallbackLocale.value) && (h.value = e.t(h.value));
    }))), setTimeout(function() {
      window.dispatchEvent(new CustomEvent("popupOpened"));
    }, 100);
  }
  function l() {
    a.value = false, setTimeout(function() {
      window.dispatchEvent(new CustomEvent("popupClosed"));
    }, 100);
  }
  function m(d, h) {
    d == null && (d = l), d(h);
  }
  function o(d) {
    var h = i.value[i.value.length - 1];
    h && m(h.callback, d);
  }
  function r(d) {
    if (a.value == true) {
      var h = ["Space", "Enter", "Escape"];
      h.indexOf(d.code) > -1 && (d.preventDefault(), o(d)), i.value.forEach((v) => {
        d.code === v.shortcut && (d.preventDefault(), m(v.callback, d));
      });
    }
  }
  return pe(function() {
    u();
  }), he(function() {
    c();
  }), (d, h) => (I(), be(zt, { name: "fade-bubble-popup" }, { default: Bt(() => [A(a) == true ? (I(), z("div", dm, [E("div", { class: "background", onClick: o }), E("div", fm, [E("div", pm, [A(t) ? (I(), z("h1", { key: 0, class: "title", innerHTML: A(t) }, null, 8, hm)) : Y("", true), A(n) ? (I(), z("p", { key: 1, class: "text", innerHTML: A(n) }, null, 8, mm)) : Y("", true), A(s) ? (I(), z("p", { key: 2, class: "description", innerHTML: A(s) }, null, 8, vm)) : Y("", true), E("div", gm, [(I(true), z(me, null, Oe(A(i), (v, g) => (I(), z(me, null, [v.label ? (I(), z("label", { key: 0, for: "popup-" + v.type + "-" + g }, G(v.label), 9, bm)) : Y("", true), v.type == "button" ? (I(), z("button", zn({ key: 1, class: { [v.class]: v.class, selected: g == A(i).length - 1 }, id: "popup-" + v.type + "-" + g, style: v.style }, { [$n(v.event)]: (x) => m(v.callback, x) }), G(v.value), 17, ym)) : (I(), z("input", zn({ key: 2, class: v.class, id: "popup-" + v.type + "-" + g, type: v.type, value: v.value, min: v.min, max: v.max, step: v.step, accept: v.accept, style: v.style }, { [$n(v.event)]: (x) => m(v.callback, x) }), null, 16, xm))], 64))), 256))]), E("a", { class: "close", onClick: o, title: A(e).t("popup.button.close") }, h[0] || (h[0] = [E("span", { class: "material-symbols-rounded" }, "close", -1)]), 8, wm)])])])) : Y("", true)]), _: 1 }));
} }, Cm = { __name: "Bubble", setup(f) {
  var e = W("home"), t = W();
  function n() {
    window.addEventListener("setPage", i), window.addEventListener("updateScale", u);
  }
  function s() {
    window.removeEventListener("setPage", i), window.removeEventListener("updateScale", u);
  }
  function i(c) {
    c.detail && a(c.detail);
  }
  function a(c) {
    e.value = c, app.state = c;
  }
  function u(c) {
    t.value = null, (c.detail < 1 || c.detail > 1) && (t.value = c.detail * 4 + "vh");
  }
  return pe(function() {
    n();
  }), he(function() {
    s();
  }), (c, p) => (I(), z("div", { class: "ui-bubble", style: Qt({ fontSize: A(t) }) }, [A(e) == "home" ? (I(), be(Kd, { key: 0, onSetPage: a })) : Y("", true), A(e) == "skins" ? (I(), be(af, { key: 1, onSetPage: a })) : Y("", true), A(e) == "level-picker" ? (I(), be(Hf, { key: 2, onSetPage: a })) : Y("", true), A(e) == "campaign" ? (I(), be(c0, { key: 3, onSetPage: a })) : Y("", true), ae(tp), ae(cm), ae(Sm)], 4));
} }, _m = { key: 0, class: "loading" }, Em = { class: "bar" }, km = { __name: "Loading", setup(f) {
  var e = W({ urls: "", index: 0, max: 1, percent: 0 });
  function t(s) {
    e.value = s;
  }
  function n() {
    return e.value.percent == 100;
  }
  return window.addEventListener("updateLoading", function(s) {
    t(s.detail);
  }), (s, i) => (I(), be(zt, { name: "fade-loading" }, { default: Bt(() => [n() == false ? (I(), z("div", _m, [E("div", Em, [E("div", { class: "boxel", style: Qt({ left: `calc(${A(e).percent}% - 1em)` }) }, null, 4), E("div", { class: "progress", style: Qt({ width: A(e).percent + "%" }) }, null, 4)]), E("label", null, "Loading: " + G(A(e).percent) + "%", 1)])) : Y("", true)]), _: 1 }));
} }, Tm = { __name: "UI", setup(f) {
  var e = W("bubble"), t = ["origin", "bubble"];
  function n() {
    window.addEventListener("setTheme", i);
  }
  function s() {
    window.removeEventListener("setTheme", i);
  }
  function i(u) {
    if (u && u.detail) a(u.detail);
    else {
      var c = JSON.parse(localStorage.getItem("settings"));
      c && c.theme != null && (t.includes(c.theme) ? a(c.theme) : (c.theme = e.value, localStorage.setItem("settings", JSON.stringify(c))));
    }
  }
  function a(u) {
    e.value = u;
  }
  return pe(function() {
    i(), n();
  }), he(function() {
    s();
  }), (u, c) => (I(), z(me, null, [A(e) == "origin" ? (I(), be(Od, { key: 0 })) : Y("", true), A(e) == "bubble" ? (I(), be(Cm, { key: 1 })) : Y("", true), ae(km)], 64));
} }, Pm = { __name: "App", setup(f) {
  const e = new Nt(), t = ye({ useScope: "global" });
  var n = W(), s = window.app = new uc();
  ru.addListener("appStateChange", ({ isActive: l }) => {
    const m = s.storage.getSettings(s);
    s.assets.audio.setMasterVolume(l ? m.volume : 0, "master"), s.assets.audio.setMasterVolume(l ? m.volumeEffects : 0, "effects"), s.assets.audio.setMasterVolume(l ? m.volumeMusic : 0, "music");
  });
  function i() {
    document.documentElement.lang = t.locale.value;
  }
  function a() {
    e.isSteamEnabled() && da.forEach((l) => {
      window.electron.loadScript(l.path);
    });
  }
  function u() {
    document.addEventListener("keydown", p);
  }
  function c() {
    document.removeEventListener("keydown", p);
  }
  function p(l) {
    e.isElectronApp() && (l.code === "KeyI" && (l.ctrlKey && l.shiftKey || l.metaKey && l.shiftKey) ? window.electron.openDevTools() : l.code === "F11" ? window.electron.toggleFullScreen() : l.code === "KeyQ" && l.metaKey && window.electron.quit());
  }
  return tu(t.locale, () => {
    i();
  }), pe(function() {
    s.init(n.value, a), u(), i();
  }), he(function() {
    c();
  }), (l, m) => (I(), z(me, null, [E("canvas", { ref_key: "canvas", ref: n }, null, 512), ae(Tm)], 64));
} }, fo = iu(Pm);
fo.use(au);
fo.mount("#app");
