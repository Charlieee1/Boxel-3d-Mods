import { aD as Y, V as y, bk as E, bl as P, aE as I, bm as L, N as p, bn as F, bo as Z, ac as K } from "./SkeletonUtils-CqlbfaSM.js";
var M = Object.freeze({ Linear: Object.freeze({ None: function(e) {
  return e;
}, In: function(e) {
  return e;
}, Out: function(e) {
  return e;
}, InOut: function(e) {
  return e;
} }), Quadratic: Object.freeze({ In: function(e) {
  return e * e;
}, Out: function(e) {
  return e * (2 - e);
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
} }), Cubic: Object.freeze({ In: function(e) {
  return e * e * e;
}, Out: function(e) {
  return --e * e * e + 1;
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
} }), Quartic: Object.freeze({ In: function(e) {
  return e * e * e * e;
}, Out: function(e) {
  return 1 - --e * e * e * e;
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
} }), Quintic: Object.freeze({ In: function(e) {
  return e * e * e * e * e;
}, Out: function(e) {
  return --e * e * e * e * e + 1;
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
} }), Sinusoidal: Object.freeze({ In: function(e) {
  return 1 - Math.sin((1 - e) * Math.PI / 2);
}, Out: function(e) {
  return Math.sin(e * Math.PI / 2);
}, InOut: function(e) {
  return 0.5 * (1 - Math.sin(Math.PI * (0.5 - e)));
} }), Exponential: Object.freeze({ In: function(e) {
  return e === 0 ? 0 : Math.pow(1024, e - 1);
}, Out: function(e) {
  return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
}, InOut: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
} }), Circular: Object.freeze({ In: function(e) {
  return 1 - Math.sqrt(1 - e * e);
}, Out: function(e) {
  return Math.sqrt(1 - --e * e);
}, InOut: function(e) {
  return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
} }), Elastic: Object.freeze({ In: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI);
}, Out: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e - 0.1) * 5 * Math.PI) + 1;
}, InOut: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : (e *= 2, e < 1 ? -0.5 * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI) : 0.5 * Math.pow(2, -10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI) + 1);
} }), Back: Object.freeze({ In: function(e) {
  var t = 1.70158;
  return e === 1 ? 1 : e * e * ((t + 1) * e - t);
}, Out: function(e) {
  var t = 1.70158;
  return e === 0 ? 0 : --e * e * ((t + 1) * e + t) + 1;
}, InOut: function(e) {
  var t = 2.5949095;
  return (e *= 2) < 1 ? 0.5 * (e * e * ((t + 1) * e - t)) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
} }), Bounce: Object.freeze({ In: function(e) {
  return 1 - M.Bounce.Out(1 - e);
}, Out: function(e) {
  return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
}, InOut: function(e) {
  return e < 0.5 ? M.Bounce.In(e * 2) * 0.5 : M.Bounce.Out(e * 2 - 1) * 0.5 + 0.5;
} }), generatePow: function(e) {
  return e === void 0 && (e = 4), e = e < Number.EPSILON ? Number.EPSILON : e, e = e > 1e4 ? 1e4 : e, { In: function(t) {
    return Math.pow(t, e);
  }, Out: function(t) {
    return 1 - Math.pow(1 - t, e);
  }, InOut: function(t) {
    return t < 0.5 ? Math.pow(t * 2, e) / 2 : (1 - Math.pow(2 - t * 2, e)) / 2 + 0.5;
  } };
} }), S = function() {
  return performance.now();
}, H = (function() {
  function e() {
    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
    this._tweens = {}, this._tweensAddedDuringUpdate = {}, this.add.apply(this, t);
  }
  return e.prototype.getAll = function() {
    var t = this;
    return Object.keys(this._tweens).map(function(i) {
      return t._tweens[i];
    });
  }, e.prototype.removeAll = function() {
    this._tweens = {};
  }, e.prototype.add = function() {
    for (var t, i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s];
    for (var n = 0, o = i; n < o.length; n++) {
      var a = o[n];
      (t = a._group) === null || t === void 0 || t.remove(a), a._group = this, this._tweens[a.getId()] = a, this._tweensAddedDuringUpdate[a.getId()] = a;
    }
  }, e.prototype.remove = function() {
    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
    for (var s = 0, n = t; s < n.length; s++) {
      var o = n[s];
      o._group = void 0, delete this._tweens[o.getId()], delete this._tweensAddedDuringUpdate[o.getId()];
    }
  }, e.prototype.allStopped = function() {
    return this.getAll().every(function(t) {
      return !t.isPlaying();
    });
  }, e.prototype.update = function(t, i) {
    t === void 0 && (t = S()), i === void 0 && (i = true);
    var s = Object.keys(this._tweens);
    if (s.length !== 0) for (; s.length > 0; ) {
      this._tweensAddedDuringUpdate = {};
      for (var n = 0; n < s.length; n++) {
        var o = this._tweens[s[n]], a = !i;
        o && o.update(t, a) === false && !i && this.remove(o);
      }
      s = Object.keys(this._tweensAddedDuringUpdate);
    }
  }, e;
})(), C = { Linear: function(e, t) {
  var i = e.length - 1, s = i * t, n = Math.floor(s), o = C.Utils.Linear;
  return t < 0 ? o(e[0], e[1], s) : t > 1 ? o(e[i], e[i - 1], i - s) : o(e[n], e[n + 1 > i ? i : n + 1], s - n);
}, Utils: { Linear: function(e, t, i) {
  return (t - e) * i + e;
} } }, U = (function() {
  function e() {
  }
  return e.nextId = function() {
    return e._nextId++;
  }, e._nextId = 0, e;
})(), k = new H(), ot = (function() {
  function e(t, i) {
    this._isPaused = false, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = false, this._initialRepeat = 0, this._repeat = 0, this._yoyo = false, this._isPlaying = false, this._reversed = false, this._delayTime = 0, this._startTime = 0, this._easingFunction = M.Linear.None, this._interpolationFunction = C.Linear, this._chainedTweens = [], this._onStartCallbackFired = false, this._onEveryStartCallbackFired = false, this._id = U.nextId(), this._isChainStopped = false, this._propertiesAreSetUp = false, this._goToEnd = false, this._object = t, typeof i == "object" ? (this._group = i, i.add(this)) : i === true && (this._group = k, k.add(this));
  }
  return e.prototype.getId = function() {
    return this._id;
  }, e.prototype.isPlaying = function() {
    return this._isPlaying;
  }, e.prototype.isPaused = function() {
    return this._isPaused;
  }, e.prototype.getDuration = function() {
    return this._duration;
  }, e.prototype.to = function(t, i) {
    if (i === void 0 && (i = 1e3), this._isPlaying) throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
    return this._valuesEnd = t, this._propertiesAreSetUp = false, this._duration = i < 0 ? 0 : i, this;
  }, e.prototype.duration = function(t) {
    return t === void 0 && (t = 1e3), this._duration = t < 0 ? 0 : t, this;
  }, e.prototype.dynamic = function(t) {
    return t === void 0 && (t = false), this._isDynamic = t, this;
  }, e.prototype.start = function(t, i) {
    if (t === void 0 && (t = S()), i === void 0 && (i = false), this._isPlaying) return this;
    if (this._repeat = this._initialRepeat, this._reversed) {
      this._reversed = false;
      for (var s in this._valuesStartRepeat) this._swapEndStartRepeatValues(s), this._valuesStart[s] = this._valuesStartRepeat[s];
    }
    if (this._isPlaying = true, this._isPaused = false, this._onStartCallbackFired = false, this._onEveryStartCallbackFired = false, this._isChainStopped = false, this._startTime = t, this._startTime += this._delayTime, !this._propertiesAreSetUp || i) {
      if (this._propertiesAreSetUp = true, !this._isDynamic) {
        var n = {};
        for (var o in this._valuesEnd) n[o] = this._valuesEnd[o];
        this._valuesEnd = n;
      }
      this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, i);
    }
    return this;
  }, e.prototype.startFromCurrentValues = function(t) {
    return this.start(t, true);
  }, e.prototype._setupProperties = function(t, i, s, n, o) {
    for (var a in s) {
      var r = t[a], c = Array.isArray(r), d = c ? "array" : typeof r, _ = !c && Array.isArray(s[a]);
      if (!(d === "undefined" || d === "function")) {
        if (_) {
          var f = s[a];
          if (f.length === 0) continue;
          for (var T = [r], g = 0, w = f.length; g < w; g += 1) {
            var D = this._handleRelativeValue(r, f[g]);
            if (isNaN(D)) {
              _ = false, console.warn("Found invalid interpolation list. Skipping.");
              break;
            }
            T.push(D);
          }
          _ && (s[a] = T);
        }
        if ((d === "object" || c) && r && !_) {
          i[a] = c ? [] : {};
          var v = r;
          for (var b in v) i[a][b] = v[b];
          n[a] = c ? [] : {};
          var f = s[a];
          if (!this._isDynamic) {
            var A = {};
            for (var b in f) A[b] = f[b];
            s[a] = f = A;
          }
          this._setupProperties(v, i[a], f, n[a], o);
        } else (typeof i[a] > "u" || o) && (i[a] = r), c || (i[a] *= 1), _ ? n[a] = s[a].slice().reverse() : n[a] = i[a] || 0;
      }
    }
  }, e.prototype.stop = function() {
    return this._isChainStopped || (this._isChainStopped = true, this.stopChainedTweens()), this._isPlaying ? (this._isPlaying = false, this._isPaused = false, this._onStopCallback && this._onStopCallback(this._object), this) : this;
  }, e.prototype.end = function() {
    return this._goToEnd = true, this.update(this._startTime + this._duration), this;
  }, e.prototype.pause = function(t) {
    return t === void 0 && (t = S()), this._isPaused || !this._isPlaying ? this : (this._isPaused = true, this._pauseStart = t, this);
  }, e.prototype.resume = function(t) {
    return t === void 0 && (t = S()), !this._isPaused || !this._isPlaying ? this : (this._isPaused = false, this._startTime += t - this._pauseStart, this._pauseStart = 0, this);
  }, e.prototype.stopChainedTweens = function() {
    for (var t = 0, i = this._chainedTweens.length; t < i; t++) this._chainedTweens[t].stop();
    return this;
  }, e.prototype.group = function(t) {
    return t ? (t.add(this), this) : (console.warn("tween.group() without args has been removed, use group.add(tween) instead."), this);
  }, e.prototype.remove = function() {
    var t;
    return (t = this._group) === null || t === void 0 || t.remove(this), this;
  }, e.prototype.delay = function(t) {
    return t === void 0 && (t = 0), this._delayTime = t, this;
  }, e.prototype.repeat = function(t) {
    return t === void 0 && (t = 0), this._initialRepeat = t, this._repeat = t, this;
  }, e.prototype.repeatDelay = function(t) {
    return this._repeatDelayTime = t, this;
  }, e.prototype.yoyo = function(t) {
    return t === void 0 && (t = false), this._yoyo = t, this;
  }, e.prototype.easing = function(t) {
    return t === void 0 && (t = M.Linear.None), this._easingFunction = t, this;
  }, e.prototype.interpolation = function(t) {
    return t === void 0 && (t = C.Linear), this._interpolationFunction = t, this;
  }, e.prototype.chain = function() {
    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
    return this._chainedTweens = t, this;
  }, e.prototype.onStart = function(t) {
    return this._onStartCallback = t, this;
  }, e.prototype.onEveryStart = function(t) {
    return this._onEveryStartCallback = t, this;
  }, e.prototype.onUpdate = function(t) {
    return this._onUpdateCallback = t, this;
  }, e.prototype.onRepeat = function(t) {
    return this._onRepeatCallback = t, this;
  }, e.prototype.onComplete = function(t) {
    return this._onCompleteCallback = t, this;
  }, e.prototype.onStop = function(t) {
    return this._onStopCallback = t, this;
  }, e.prototype.update = function(t, i) {
    var s = this, n;
    if (t === void 0 && (t = S()), i === void 0 && (i = e.autoStartOnUpdate), this._isPaused) return true;
    var o;
    if (!this._goToEnd && !this._isPlaying) if (i) this.start(t, true);
    else return false;
    if (this._goToEnd = false, t < this._startTime) return true;
    this._onStartCallbackFired === false && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = true), this._onEveryStartCallbackFired === false && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = true);
    var a = t - this._startTime, r = this._duration + ((n = this._repeatDelayTime) !== null && n !== void 0 ? n : this._delayTime), c = this._duration + this._repeat * r, d = function() {
      if (s._duration === 0 || a > c) return 1;
      var D = Math.trunc(a / r), v = a - D * r, b = Math.min(v / s._duration, 1);
      return b === 0 && a === s._duration ? 1 : b;
    }, _ = d(), f = this._easingFunction(_);
    if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, f), this._onUpdateCallback && this._onUpdateCallback(this._object, _), this._duration === 0 || a >= this._duration) if (this._repeat > 0) {
      var T = Math.min(Math.trunc((a - this._duration) / r) + 1, this._repeat);
      isFinite(this._repeat) && (this._repeat -= T);
      for (o in this._valuesStartRepeat) !this._yoyo && typeof this._valuesEnd[o] == "string" && (this._valuesStartRepeat[o] = this._valuesStartRepeat[o] + parseFloat(this._valuesEnd[o])), this._yoyo && this._swapEndStartRepeatValues(o), this._valuesStart[o] = this._valuesStartRepeat[o];
      return this._yoyo && (this._reversed = !this._reversed), this._startTime += r * T, this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = false, true;
    } else {
      this._onCompleteCallback && this._onCompleteCallback(this._object);
      for (var g = 0, w = this._chainedTweens.length; g < w; g++) this._chainedTweens[g].start(this._startTime + this._duration, false);
      return this._isPlaying = false, false;
    }
    return true;
  }, e.prototype._updateProperties = function(t, i, s, n) {
    for (var o in s) if (i[o] !== void 0) {
      var a = i[o] || 0, r = s[o], c = Array.isArray(t[o]), d = Array.isArray(r), _ = !c && d;
      _ ? t[o] = this._interpolationFunction(r, n) : typeof r == "object" && r ? this._updateProperties(t[o], a, r, n) : (r = this._handleRelativeValue(a, r), typeof r == "number" && (t[o] = a + (r - a) * n));
    }
  }, e.prototype._handleRelativeValue = function(t, i) {
    return typeof i != "string" ? i : i.charAt(0) === "+" || i.charAt(0) === "-" ? t + parseFloat(i) : parseFloat(i);
  }, e.prototype._swapEndStartRepeatValues = function(t) {
    var i = this._valuesStartRepeat[t], s = this._valuesEnd[t];
    typeof s == "string" ? this._valuesStartRepeat[t] = this._valuesStartRepeat[t] + parseFloat(s) : this._valuesStartRepeat[t] = this._valuesEnd[t], this._valuesEnd[t] = i;
  }, e.autoStartOnUpdate = false, e;
})();
U.nextId;
var m = k;
m.getAll.bind(m);
m.removeAll.bind(m);
m.add.bind(m);
m.remove.bind(m);
m.update.bind(m);
const x = { type: "change" }, j = { type: "start" }, z = { type: "end" }, O = new F(), N = new Z(), X = Math.cos(70 * K.DEG2RAD), l = new y(), u = 2 * Math.PI, h = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, R = 1e-6;
class at extends Y {
  constructor(t, i = null) {
    super(t, i), this.state = h.NONE, this.target = new y(), this.cursor = new y(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: E.ROTATE, MIDDLE: E.DOLLY, RIGHT: E.PAN }, this.touches = { ONE: P.ROTATE, TWO: P.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new y(), this._lastQuaternion = new I(), this._lastTargetPosition = new y(), this._quat = new I().setFromUnitVectors(t.up, new y(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new L(), this._sphericalDelta = new L(), this._scale = 1, this._panOffset = new y(), this._rotateStart = new p(), this._rotateEnd = new p(), this._rotateDelta = new p(), this._panStart = new p(), this._panEnd = new p(), this._panDelta = new p(), this._dollyStart = new p(), this._dollyEnd = new p(), this._dollyDelta = new p(), this._dollyDirection = new y(), this._mouse = new p(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = q.bind(this), this._onPointerDown = W.bind(this), this._onPointerUp = B.bind(this), this._onContextMenu = et.bind(this), this._onMouseWheel = V.bind(this), this._onKeyDown = J.bind(this), this._onTouchStart = $.bind(this), this._onTouchMove = tt.bind(this), this._onMouseDown = G.bind(this), this._onMouseMove = Q.bind(this), this._interceptControlDown = it.bind(this), this._interceptControlUp = st.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(x), this.update(), this.state = h.NONE;
  }
  update(t = null) {
    const i = this.object.position;
    l.copy(i).sub(this.target), l.applyQuaternion(this._quat), this._spherical.setFromVector3(l), this.autoRotate && this.state === h.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, n = this.maxAzimuthAngle;
    isFinite(s) && isFinite(n) && (s < -Math.PI ? s += u : s > Math.PI && (s -= u), n < -Math.PI ? n += u : n > Math.PI && (n -= u), s <= n ? this._spherical.theta = Math.max(s, Math.min(n, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + n) / 2 ? Math.max(s, this._spherical.theta) : Math.min(n, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let o = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), o = a != this._spherical.radius;
    }
    if (l.setFromSpherical(this._spherical), l.applyQuaternion(this._quatInverse), i.copy(this.target).add(l), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const r = l.length();
        a = this._clampDistance(r * this._scale);
        const c = r - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), o = !!c;
      } else if (this.object.isOrthographicCamera) {
        const r = new y(this._mouse.x, this._mouse.y, 0);
        r.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), o = c !== this.object.zoom;
        const d = new y(this._mouse.x, this._mouse.y, 0);
        d.unproject(this.object), this.object.position.sub(d).add(r), this.object.updateMatrixWorld(), a = l.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (O.origin.copy(this.object.position), O.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(O.direction)) < X ? this.object.lookAt(this.target) : (N.setFromNormalAndCoplanarPoint(this.object.up, this.target), O.intersectPlane(N, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), o = true);
    }
    return this._scale = 1, this._performCursorZoom = false, o || this._lastPosition.distanceToSquared(this.object.position) > R || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > R || this._lastTargetPosition.distanceToSquared(this.target) > R ? (this.dispatchEvent(x), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? u / 60 * this.autoRotateSpeed * t : u / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const i = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * i);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, i) {
    l.setFromMatrixColumn(i, 0), l.multiplyScalar(-t), this._panOffset.add(l);
  }
  _panUp(t, i) {
    this.screenSpacePanning === true ? l.setFromMatrixColumn(i, 1) : (l.setFromMatrixColumn(i, 0), l.crossVectors(this.object.up, l)), l.multiplyScalar(t), this._panOffset.add(l);
  }
  _pan(t, i) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const n = this.object.position;
      l.copy(n).sub(this.target);
      let o = l.length();
      o *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * o / s.clientHeight, this.object.matrix), this._panUp(2 * i * o / s.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / s.clientWidth, this.object.matrix), this._panUp(i * (this.object.top - this.object.bottom) / this.object.zoom / s.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(t, i) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const s = this.domElement.getBoundingClientRect(), n = t - s.left, o = i - s.top, a = s.width, r = s.height;
    this._mouse.x = n / a * 2 - 1, this._mouse.y = -(o / r) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const i = this.domElement;
    this._rotateLeft(u * this._rotateDelta.x / i.clientHeight), this._rotateUp(u * this._rotateDelta.y / i.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let i = false;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(u * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), i = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-u * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), i = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(u * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), i = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-u * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), i = true;
        break;
    }
    i && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const i = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + i.x), n = 0.5 * (t.pageY + i.y);
      this._rotateStart.set(s, n);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const i = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + i.x), n = 0.5 * (t.pageY + i.y);
      this._panStart.set(s, n);
    }
  }
  _handleTouchStartDolly(t) {
    const i = this._getSecondPointerPosition(t), s = t.pageX - i.x, n = t.pageY - i.y, o = Math.sqrt(s * s + n * n);
    this._dollyStart.set(0, o);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const s = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + s.x), o = 0.5 * (t.pageY + s.y);
      this._rotateEnd.set(n, o);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const i = this.domElement;
    this._rotateLeft(u * this._rotateDelta.x / i.clientHeight), this._rotateUp(u * this._rotateDelta.y / i.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const i = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + i.x), n = 0.5 * (t.pageY + i.y);
      this._panEnd.set(s, n);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const i = this._getSecondPointerPosition(t), s = t.pageX - i.x, n = t.pageY - i.y, o = Math.sqrt(s * s + n * n);
    this._dollyEnd.set(0, o), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (t.pageX + i.x) * 0.5, r = (t.pageY + i.y) * 0.5;
    this._updateZoomParameters(a, r);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let i = 0; i < this._pointers.length; i++) if (this._pointers[i] == t.pointerId) {
      this._pointers.splice(i, 1);
      return;
    }
  }
  _isTrackingPointer(t) {
    for (let i = 0; i < this._pointers.length; i++) if (this._pointers[i] == t.pointerId) return true;
    return false;
  }
  _trackPointer(t) {
    let i = this._pointerPositions[t.pointerId];
    i === void 0 && (i = new p(), this._pointerPositions[t.pointerId] = i), i.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const i = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[i];
  }
  _customWheelEvent(t) {
    const i = t.deltaMode, s = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (i) {
      case 1:
        s.deltaY *= 16;
        break;
      case 2:
        s.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (s.deltaY *= 10), s;
  }
}
function W(e) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(e) && (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e)));
}
function q(e) {
  this.enabled !== false && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function B(e) {
  switch (this._removePointer(e), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(e.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(z), this.state = h.NONE;
      break;
    case 1:
      const t = this._pointers[0], i = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: i.x, pageY: i.y });
      break;
  }
}
function G(e) {
  let t;
  switch (e.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case E.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(e), this.state = h.DOLLY;
      break;
    case E.ROTATE:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(e), this.state = h.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(e), this.state = h.ROTATE;
      }
      break;
    case E.PAN:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(e), this.state = h.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(e), this.state = h.PAN;
      }
      break;
    default:
      this.state = h.NONE;
  }
  this.state !== h.NONE && this.dispatchEvent(j);
}
function Q(e) {
  switch (this.state) {
    case h.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(e);
      break;
    case h.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(e);
      break;
    case h.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(e);
      break;
  }
}
function V(e) {
  this.enabled === false || this.enableZoom === false || this.state !== h.NONE || (e.preventDefault(), this.dispatchEvent(j), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(z));
}
function J(e) {
  this.enabled !== false && this._handleKeyDown(e);
}
function $(e) {
  switch (this._trackPointer(e), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case P.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(e), this.state = h.TOUCH_ROTATE;
          break;
        case P.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(e), this.state = h.TOUCH_PAN;
          break;
        default:
          this.state = h.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case P.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(e), this.state = h.TOUCH_DOLLY_PAN;
          break;
        case P.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(e), this.state = h.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = h.NONE;
      }
      break;
    default:
      this.state = h.NONE;
  }
  this.state !== h.NONE && this.dispatchEvent(j);
}
function tt(e) {
  switch (this._trackPointer(e), this.state) {
    case h.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(e), this.update();
      break;
    case h.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(e), this.update();
      break;
    case h.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(e), this.update();
      break;
    case h.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(e), this.update();
      break;
    default:
      this.state = h.NONE;
  }
}
function et(e) {
  this.enabled !== false && e.preventDefault();
}
function it(e) {
  e.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function st(e) {
  e.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
export {
  M as E,
  H as G,
  at as O,
  ot as T
};
