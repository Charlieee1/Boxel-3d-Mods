import { _ as G, f as V, b as Q, w as W, c as X, d as $, a as P, n as D, u as B, t as J, T as Z, o as E, P as z, N as f, ba as Y, W as g, bb as y, bc as v, bd as q, a0 as A, $ as S, aw as K, Q as w, R as ee, S as k, U as te, X as R, Y as re, Z as ae, M as ie, V as L, a1 as se, a2 as ne, a3 as F, a5 as U, a6 as oe, a7 as le, a8 as de, aa as he, ab as ue, be as N, bf as ce, bg as fe, aO as pe, bh as ge, am as me, bi as ve, b7 as xe, G as Te, E as Me, I as Se, J as we, aB as ye, C as _e, B as be, D as Pe, bj as Be, K as Ce } from "./SkeletonUtils-Lx6OFsqh.js";
const De = { key: 0, class: "loading" }, Ee = { class: "bar" }, ke = { class: "label" }, Re = { __name: "Loading", setup(d) {
  var e = V({ urls: "", index: 0, max: 1, percent: 0 });
  function r(a) {
    e.value = a;
  }
  function t() {
    return e.value.percent == 100;
  }
  return window.addEventListener("updateLoading", function(a) {
    r(a.detail);
  }), (a, i) => (E(), Q(Z, { name: "fade-loading" }, { default: W(() => [t() == false ? (E(), X("div", De, [P("div", Ee, [P("div", { class: "boxel", style: D({ left: `calc(${B(e).percent}% - 1em)` }) }, null, 4), P("div", { class: "progress", style: D({ width: B(e).percent + "%" }) }, null, 4)]), P("div", ke, "Loading: " + J(B(e).percent) + "%", 1)])) : $("", true)]), _: 1 }));
} }, He = G(Re, [["__scopeId", "data-v-96273571"]]);
class je {
  constructor() {
    this.loops = [], this.speed = 1, this.thread = (e) => this.update(e), this.threadTimestamp = 0, this.threadFrame = 0;
  }
  add(e, r = -1) {
    return this.loops.push({ callback: e, delay: r, delta: 0, alpha: 0, frame: 0, sum: 0, timestamp: 0 });
  }
  get(e) {
    return this.loops[e];
  }
  remove(e) {
    return this.loops.splice(e, 1);
  }
  start() {
    this.threadFrame = requestAnimationFrame((e) => {
      this.threadTimestamp = e, this.loops.forEach((r) => r.timestamp = e), this.thread(e);
    });
  }
  stop() {
    cancelAnimationFrame(this.threadFrame);
  }
  update(e) {
    this.threadFrame = requestAnimationFrame(this.thread);
    const r = e - this.threadTimestamp;
    this.threadTimestamp = e;
    for (let t = this.loops.length - 1; t >= 0; t--) this.loops[t].sum += r * this.speed, this.loops[t].sum >= this.loops[t].delay && (this.loops[t].sum %= this.loops[t].delay, this.loops[t].delta = (e - this.loops[t].timestamp) * this.speed, this.loops[t].alpha = this.loops[0].sum / this.loops[0].delay, this.loops[t].frame++, this.loops[t].timestamp = e, this.loops[t].callback(this.loops[t]));
  }
}
class Le extends z {
  constructor(e, r, t, a = {}) {
    super(), this.pixelSize = e, this.scene = r, this.camera = t, this.normalEdgeStrength = a.normalEdgeStrength || 0.3, this.depthEdgeStrength = a.depthEdgeStrength || 0.4, this.pixelatedMaterial = this._createPixelatedMaterial(), this._resolution = new f(), this._renderResolution = new f(), this._normalMaterial = new Y(), this._beautyRenderTarget = new g(), this._beautyRenderTarget.texture.minFilter = y, this._beautyRenderTarget.texture.magFilter = y, this._beautyRenderTarget.texture.type = v, this._beautyRenderTarget.depthTexture = new q(), this._normalRenderTarget = new g(), this._normalRenderTarget.texture.minFilter = y, this._normalRenderTarget.texture.magFilter = y, this._normalRenderTarget.texture.type = v, this._fsQuad = new A(this.pixelatedMaterial);
  }
  dispose() {
    this._beautyRenderTarget.dispose(), this._normalRenderTarget.dispose(), this.pixelatedMaterial.dispose(), this._normalMaterial.dispose(), this._fsQuad.dispose();
  }
  setSize(e, r) {
    this._resolution.set(e, r), this._renderResolution.set(e / this.pixelSize | 0, r / this.pixelSize | 0);
    const { x: t, y: a } = this._renderResolution;
    this._beautyRenderTarget.setSize(t, a), this._normalRenderTarget.setSize(t, a), this._fsQuad.material.uniforms.resolution.value.set(t, a, 1 / t, 1 / a);
  }
  setPixelSize(e) {
    this.pixelSize = e, this.setSize(this._resolution.x, this._resolution.y);
  }
  render(e, r) {
    const t = this._fsQuad.material.uniforms;
    t.normalEdgeStrength.value = this.normalEdgeStrength, t.depthEdgeStrength.value = this.depthEdgeStrength, e.setRenderTarget(this._beautyRenderTarget), e.render(this.scene, this.camera);
    const a = this.scene.overrideMaterial;
    e.setRenderTarget(this._normalRenderTarget), this.scene.overrideMaterial = this._normalMaterial, e.render(this.scene, this.camera), this.scene.overrideMaterial = a, t.tDiffuse.value = this._beautyRenderTarget.texture, t.tDepth.value = this._beautyRenderTarget.depthTexture, t.tNormal.value = this._normalRenderTarget.texture, this.renderToScreen ? e.setRenderTarget(null) : (e.setRenderTarget(r), this.clear && e.clear()), this._fsQuad.render(e);
  }
  _createPixelatedMaterial() {
    return new S({ uniforms: { tDiffuse: { value: null }, tDepth: { value: null }, tNormal: { value: null }, resolution: { value: new K() }, normalEdgeStrength: { value: 0 }, depthEdgeStrength: { value: 0 } }, vertexShader: `
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`, fragmentShader: `
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			` });
  }
}
class x extends z {
  constructor(e, r, t, a) {
    super(), this.renderScene = r, this.renderCamera = t, this.selectedObjects = a !== void 0 ? a : [], this.visibleEdgeColor = new w(1, 1, 1), this.hiddenEdgeColor = new w(0.1, 0.04, 0.02), this.edgeGlow = 0, this.usePatternTexture = false, this.patternTexture = null, this.edgeThickness = 1, this.edgeStrength = 3, this.downSampleRatio = 2, this.pulsePeriod = 0, this._visibilityCache = /* @__PURE__ */ new Map(), this._selectionCache = /* @__PURE__ */ new Set(), this.resolution = e !== void 0 ? new f(e.x, e.y) : new f(256, 256);
    const i = Math.round(this.resolution.x / this.downSampleRatio), s = Math.round(this.resolution.y / this.downSampleRatio);
    this.renderTargetMaskBuffer = new g(this.resolution.x, this.resolution.y), this.renderTargetMaskBuffer.texture.name = "OutlinePass.mask", this.renderTargetMaskBuffer.texture.generateMipmaps = false, this.depthMaterial = new ee(), this.depthMaterial.side = k, this.depthMaterial.depthPacking = te, this.depthMaterial.blending = R, this.prepareMaskMaterial = this._getPrepareMaskMaterial(), this.prepareMaskMaterial.side = k, this.prepareMaskMaterial.fragmentShader = h(this.prepareMaskMaterial.fragmentShader, this.renderCamera), this.renderTargetDepthBuffer = new g(this.resolution.x, this.resolution.y, { type: v }), this.renderTargetDepthBuffer.texture.name = "OutlinePass.depth", this.renderTargetDepthBuffer.texture.generateMipmaps = false, this.renderTargetMaskDownSampleBuffer = new g(i, s, { type: v }), this.renderTargetMaskDownSampleBuffer.texture.name = "OutlinePass.depthDownSample", this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps = false, this.renderTargetBlurBuffer1 = new g(i, s, { type: v }), this.renderTargetBlurBuffer1.texture.name = "OutlinePass.blur1", this.renderTargetBlurBuffer1.texture.generateMipmaps = false, this.renderTargetBlurBuffer2 = new g(Math.round(i / 2), Math.round(s / 2), { type: v }), this.renderTargetBlurBuffer2.texture.name = "OutlinePass.blur2", this.renderTargetBlurBuffer2.texture.generateMipmaps = false, this.edgeDetectionMaterial = this._getEdgeDetectionMaterial(), this.renderTargetEdgeBuffer1 = new g(i, s, { type: v }), this.renderTargetEdgeBuffer1.texture.name = "OutlinePass.edge1", this.renderTargetEdgeBuffer1.texture.generateMipmaps = false, this.renderTargetEdgeBuffer2 = new g(Math.round(i / 2), Math.round(s / 2), { type: v }), this.renderTargetEdgeBuffer2.texture.name = "OutlinePass.edge2", this.renderTargetEdgeBuffer2.texture.generateMipmaps = false;
    const n = 4, c = 4;
    this.separableBlurMaterial1 = this._getSeparableBlurMaterial(n), this.separableBlurMaterial1.uniforms.texSize.value.set(i, s), this.separableBlurMaterial1.uniforms.kernelRadius.value = 1, this.separableBlurMaterial2 = this._getSeparableBlurMaterial(c), this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(i / 2), Math.round(s / 2)), this.separableBlurMaterial2.uniforms.kernelRadius.value = c, this.overlayMaterial = this._getOverlayMaterial();
    const o = ae;
    this.copyUniforms = re.clone(o.uniforms), this.materialCopy = new S({ uniforms: this.copyUniforms, vertexShader: o.vertexShader, fragmentShader: o.fragmentShader, blending: R, depthTest: false, depthWrite: false }), this.enabled = true, this.needsSwap = false, this._oldClearColor = new w(), this.oldClearAlpha = 1, this._fsQuad = new A(null), this.tempPulseColor1 = new w(), this.tempPulseColor2 = new w(), this.textureMatrix = new ie();
    function h(u, p) {
      const m = p.isPerspectiveCamera ? "perspective" : "orthographic";
      return u.replace(/DEPTH_TO_VIEW_Z/g, m + "DepthToViewZ");
    }
  }
  dispose() {
    this.renderTargetMaskBuffer.dispose(), this.renderTargetDepthBuffer.dispose(), this.renderTargetMaskDownSampleBuffer.dispose(), this.renderTargetBlurBuffer1.dispose(), this.renderTargetBlurBuffer2.dispose(), this.renderTargetEdgeBuffer1.dispose(), this.renderTargetEdgeBuffer2.dispose(), this.depthMaterial.dispose(), this.prepareMaskMaterial.dispose(), this.edgeDetectionMaterial.dispose(), this.separableBlurMaterial1.dispose(), this.separableBlurMaterial2.dispose(), this.overlayMaterial.dispose(), this.materialCopy.dispose(), this._fsQuad.dispose();
  }
  setSize(e, r) {
    this.renderTargetMaskBuffer.setSize(e, r), this.renderTargetDepthBuffer.setSize(e, r);
    let t = Math.round(e / this.downSampleRatio), a = Math.round(r / this.downSampleRatio);
    this.renderTargetMaskDownSampleBuffer.setSize(t, a), this.renderTargetBlurBuffer1.setSize(t, a), this.renderTargetEdgeBuffer1.setSize(t, a), this.separableBlurMaterial1.uniforms.texSize.value.set(t, a), t = Math.round(t / 2), a = Math.round(a / 2), this.renderTargetBlurBuffer2.setSize(t, a), this.renderTargetEdgeBuffer2.setSize(t, a), this.separableBlurMaterial2.uniforms.texSize.value.set(t, a);
  }
  render(e, r, t, a, i) {
    if (this.selectedObjects.length > 0) {
      e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
      const s = e.autoClear;
      e.autoClear = false, i && e.state.buffers.stencil.setTest(false), e.setClearColor(16777215, 1), this._updateSelectionCache(), this._changeVisibilityOfSelectedObjects(false);
      const n = this.renderScene.background, c = this.renderScene.overrideMaterial;
      if (this.renderScene.background = null, this.renderScene.overrideMaterial = this.depthMaterial, e.setRenderTarget(this.renderTargetDepthBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this._changeVisibilityOfSelectedObjects(true), this._visibilityCache.clear(), this._updateTextureMatrix(), this._changeVisibilityOfNonSelectedObjects(false), this.renderScene.overrideMaterial = this.prepareMaskMaterial, this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near, this.renderCamera.far), this.prepareMaskMaterial.uniforms.depthTexture.value = this.renderTargetDepthBuffer.texture, this.prepareMaskMaterial.uniforms.textureMatrix.value = this.textureMatrix, e.setRenderTarget(this.renderTargetMaskBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this._changeVisibilityOfNonSelectedObjects(true), this._visibilityCache.clear(), this._selectionCache.clear(), this.renderScene.background = n, this.renderScene.overrideMaterial = c, this._fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetMaskBuffer.texture, e.setRenderTarget(this.renderTargetMaskDownSampleBuffer), e.clear(), this._fsQuad.render(e), this.tempPulseColor1.copy(this.visibleEdgeColor), this.tempPulseColor2.copy(this.hiddenEdgeColor), this.pulsePeriod > 0) {
        const o = 0.625 + Math.cos(performance.now() * 0.01 / this.pulsePeriod) * 0.75 / 2;
        this.tempPulseColor1.multiplyScalar(o), this.tempPulseColor2.multiplyScalar(o);
      }
      this._fsQuad.material = this.edgeDetectionMaterial, this.edgeDetectionMaterial.uniforms.maskTexture.value = this.renderTargetMaskDownSampleBuffer.texture, this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width, this.renderTargetMaskDownSampleBuffer.height), this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value = this.tempPulseColor1, this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value = this.tempPulseColor2, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this._fsQuad.render(e), this._fsQuad.material = this.separableBlurMaterial1, this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = x.BlurDirectionX, this.separableBlurMaterial1.uniforms.kernelRadius.value = this.edgeThickness, e.setRenderTarget(this.renderTargetBlurBuffer1), e.clear(), this._fsQuad.render(e), this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetBlurBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = x.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this._fsQuad.render(e), this._fsQuad.material = this.separableBlurMaterial2, this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial2.uniforms.direction.value = x.BlurDirectionX, e.setRenderTarget(this.renderTargetBlurBuffer2), e.clear(), this._fsQuad.render(e), this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetBlurBuffer2.texture, this.separableBlurMaterial2.uniforms.direction.value = x.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer2), e.clear(), this._fsQuad.render(e), this._fsQuad.material = this.overlayMaterial, this.overlayMaterial.uniforms.maskTexture.value = this.renderTargetMaskBuffer.texture, this.overlayMaterial.uniforms.edgeTexture1.value = this.renderTargetEdgeBuffer1.texture, this.overlayMaterial.uniforms.edgeTexture2.value = this.renderTargetEdgeBuffer2.texture, this.overlayMaterial.uniforms.patternTexture.value = this.patternTexture, this.overlayMaterial.uniforms.edgeStrength.value = this.edgeStrength, this.overlayMaterial.uniforms.edgeGlow.value = this.edgeGlow, this.overlayMaterial.uniforms.usePatternTexture.value = this.usePatternTexture, i && e.state.buffers.stencil.setTest(true), e.setRenderTarget(t), this._fsQuad.render(e), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = s;
    }
    this.renderToScreen && (this._fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = t.texture, e.setRenderTarget(null), this._fsQuad.render(e));
  }
  _updateSelectionCache() {
    const e = this._selectionCache;
    function r(t) {
      t.isMesh && e.add(t);
    }
    e.clear();
    for (let t = 0; t < this.selectedObjects.length; t++) this.selectedObjects[t].traverse(r);
  }
  _changeVisibilityOfSelectedObjects(e) {
    const r = this._visibilityCache;
    for (const t of this._selectionCache) e === true ? t.visible = r.get(t) : (r.set(t, t.visible), t.visible = e);
  }
  _changeVisibilityOfNonSelectedObjects(e) {
    const r = this._visibilityCache, t = this._selectionCache;
    function a(i) {
      if (i.isPoints || i.isLine || i.isLine2) e === true ? i.visible = r.get(i) : (r.set(i, i.visible), i.visible = e);
      else if ((i.isMesh || i.isSprite) && !t.has(i)) {
        const s = i.visible;
        (e === false || r.get(i) === true) && (i.visible = e), r.set(i, s);
      }
    }
    this.renderScene.traverse(a);
  }
  _updateTextureMatrix() {
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), this.textureMatrix.multiply(this.renderCamera.projectionMatrix), this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse);
  }
  _getPrepareMaskMaterial() {
    return new S({ uniforms: { depthTexture: { value: null }, cameraNearFar: { value: new f(0.5, 0.5) }, textureMatrix: { value: null } }, vertexShader: `#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
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
  _getEdgeDetectionMaterial() {
    return new S({ uniforms: { maskTexture: { value: null }, texSize: { value: new f(0.5, 0.5) }, visibleEdgeColor: { value: new L(1, 1, 1) }, hiddenEdgeColor: { value: new L(1, 1, 1) } }, vertexShader: `varying vec2 vUv;

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
  _getSeparableBlurMaterial(e) {
    return new S({ defines: { MAX_RADIUS: e }, uniforms: { colorTexture: { value: null }, texSize: { value: new f(0.5, 0.5) }, direction: { value: new f(0.5, 0.5) }, kernelRadius: { value: 1 } }, vertexShader: `varying vec2 vUv;

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
  _getOverlayMaterial() {
    return new S({ uniforms: { maskTexture: { value: null }, edgeTexture1: { value: null }, edgeTexture2: { value: null }, patternTexture: { value: null }, edgeStrength: { value: 1 }, edgeGlow: { value: 1 }, usePatternTexture: { value: 0 } }, vertexShader: `varying vec2 vUv;

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
				}`, blending: se, depthTest: false, depthWrite: false, transparent: true });
  }
}
x.BlurDirectionX = new f(1, 0);
x.BlurDirectionY = new f(0, 1);
var _ = function() {
  var d = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) {
    h.preventDefault(), t(++d % e.children.length);
  }, false);
  function r(h) {
    return e.appendChild(h.dom), h;
  }
  function t(h) {
    for (var u = 0; u < e.children.length; u++) e.children[u].style.display = u === h ? "block" : "none";
    d = h;
  }
  var a = (performance || Date).now(), i = a, s = 0, n = r(new _.Panel("FPS", "#0ff", "#002")), c = r(new _.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var o = r(new _.Panel("MB", "#f08", "#201"));
  return t(0), { REVISION: 16, dom: e, addPanel: r, showPanel: t, begin: function() {
    a = (performance || Date).now();
  }, end: function() {
    s++;
    var h = (performance || Date).now();
    if (c.update(h - a, 200), h >= i + 1e3 && (n.update(s * 1e3 / (h - i), 100), i = h, s = 0, o)) {
      var u = performance.memory;
      o.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    a = this.end();
  }, domElement: e, setMode: t };
};
_.Panel = function(d, e, r) {
  var t = 1 / 0, a = 0, i = Math.round, s = i(window.devicePixelRatio || 1), n = 80 * s, c = 48 * s, o = 3 * s, h = 2 * s, u = 3 * s, p = 15 * s, m = 74 * s, T = 30 * s, M = document.createElement("canvas");
  M.width = n, M.height = c, M.style.cssText = "width:80px;height:48px";
  var l = M.getContext("2d");
  return l.font = "bold " + 9 * s + "px Helvetica,Arial,sans-serif", l.textBaseline = "top", l.fillStyle = r, l.fillRect(0, 0, n, c), l.fillStyle = e, l.fillText(d, o, h), l.fillRect(u, p, m, T), l.fillStyle = r, l.globalAlpha = 0.9, l.fillRect(u, p, m, T), { dom: M, update: function(b, j) {
    t = Math.min(t, b), a = Math.max(a, b), l.fillStyle = r, l.globalAlpha = 1, l.fillRect(0, 0, n, p), l.fillStyle = e, l.fillText(i(b) + " " + d + " (" + i(t) + "-" + i(a) + ")", o, h), l.drawImage(M, u + s, p, m - s, T, u, p, m - s, T), l.fillRect(u + m - s, p, s, T), l.fillStyle = r, l.globalAlpha = 0.9, l.fillRect(u + m - s, p, s, i((1 - b / j) * T));
  } };
};
class Ge {
  constructor(e = document.createElement("canvas")) {
    this.camera = new ne(45, window.innerWidth / window.innerHeight, 1, 100), this.scene = new F(), this.canvas = e, this.stats = new _(), window.devicePixelRatio = 1, this.renderer = new U({ alpha: true, canvas: e }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.shadowMap.enabled = false, this.renderer.shadowMap.type = oe, this.renderPass = new le(this.scene, this.camera), this.outputPass = new de(), this.outlinePass = new x({ x: window.innerWidth, y: window.innerHeight }, this.scene, this.camera), this.outlinePass.edgeStrength = 3, this.outlinePass.edgeGlow = 0, this.outlinePass.edgeThickness = 0.125, this.outlinePass.visibleEdgeColor.set("#000000"), this.outlinePass.hiddenEdgeColor.set("#000000"), this.outlinePass.enabled = true, this.smaaPass = new he(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio), this.smaaPass.enabled = false, this.pixelatedPass = new Le(2, this.scene, this.camera), this.pixelatedPass.normalEdgeStrength = 1, this.pixelatedPass.depthEdgeStrength = 1, this.pixelatedPass.enabled = false, this.composer = new ue(this.renderer), this.composer.addPass(this.renderPass), this.composer.addPass(this.pixelatedPass), this.composer.addPass(this.outlinePass), this.composer.addPass(this.smaaPass), this.composer.addPass(this.outputPass), this.resize = this.resize.bind(this), window.addEventListener("resize", this.resize), window.dispatchEvent(new Event("resize"));
  }
  render() {
    this.stats.begin(), this.composer.render(), this.stats.end();
  }
  resize(e) {
    var r = e.target.innerWidth, t = e.target.innerHeight;
    this.setSize(r, t);
  }
  setSize(e, r) {
    var t = e / r;
    this.camera.isOrthographicCamera && (this.camera.left = -t * 0.5, this.camera.right = t * 0.5, this.camera.top = 0.5, this.camera.bottom = -0.5), this.camera.aspect = t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, r), this.composer.setSize(e, r);
  }
  setCamera(e) {
    this.camera = e, this.renderPass.camera = e, this.pixelatedPass.camera = e, this.outlinePass.renderCamera = e;
  }
  setScene(e) {
    this.scene = e, this.scene.fog = this.fog, this.renderPass.scene = e, this.pixelatedPass.scene = e, this.outlinePass.renderScene = e;
  }
  setShadows(e = true) {
    this.renderer.shadowMap.enabled = e, this.scene.traverse(function(r) {
      r.material && (r.castShadow = e, r.receiveShadow = e, r.material.needsUpdate = true);
    });
  }
  setSelectedObjects(e = []) {
    this.outlinePass.selectedObjects = e;
  }
  addStats() {
    document.body.appendChild(this.stats.dom);
  }
  removeStats() {
    document.body.removeChild(this.stats.dom);
  }
}
class Ve {
  constructor() {
  }
  static create(e = "PointLight", r) {
    var t, a;
    if (r = Object.assign({ color: "#ffffff", decay: 2, distance: 0, groundColor: "#000000", intensity: Math.PI, castShadow: false, skyColor: "#ffffff" }, r), e == "AmbientLight" ? t = new N(r.color, r.intensity) : e == "DirectionalLight" ? (t = new ce(r.color, r.intensity), a = new fe(t)) : e == "HemisphereLight" ? (t = new pe(r.skyColor, r.groundColor, r.intensity), a = new ge(t)) : e == "PointLight" && (t = new me(r.color, r.intensity, r.distance, r.decay), a = new ve(t)), t == null) {
      console.error(`Error: Light type "${e}" does not exists.`);
      return;
    }
    return r.castShadow && (t.castShadow = true), r.helper == true && a && (t.addEventListener("added", function(i) {
      t.parent.add(a);
    }), t.addEventListener("removed", function(i) {
      a.removeFromParent();
    })), t;
  }
}
class Oe extends Te {
  constructor(e) {
    super(e);
  }
  async load(e) {
    try {
      var r = await fetch(e), t = await r.json();
      for (const [a, i] of Object.entries(t)) super.load(i.url, function(s) {
        var n = s.scene;
        n.name = a, n.animations = s.animations, n.userData = { ...i.userData }, n.duplicate = this.duplicate.bind(this, n), this.manager.cache[a] = n, this.addMixer(n);
      }.bind(this), function(s) {
      }, function(s) {
        console.error(s);
      });
    } catch (a) {
      console.error(a);
    }
  }
  duplicate(e) {
    const r = Me(e);
    return this.addMixer(r), r;
  }
  addMixer(e) {
    if (e.animations.length > 0) {
      var r = e.userData.loop || 2201;
      e.mixer = new Se(e), e.actions = {};
      for (var t = 0; t < e.animations.length; t++) {
        var a = e.animations[t], i = e.mixer.clipAction(a);
        r == 2200 && (i.setLoop(r), i.clampWhenFinished = true), i.play(), i.setEffectiveWeight(0), e.actions[a.name] = i, t == 0 && (e.actions.active = i, i.setEffectiveWeight(1));
      }
      e.play = function(s, n = 1) {
        var c = e.actions.active, o = e.actions[s];
        o && o != c && (c == null ? (o.setEffectiveWeight(1), o.reset().fadeIn(n)) : (c.setEffectiveWeight(1), o.setEffectiveWeight(1), o.reset().crossFadeFrom(c, n)), o.duration = n, e.actions.active = o);
      };
    }
  }
  renderThumbnail(e, r) {
    r = Object.assign({ height: 64, position: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 }, width: 64 }, r);
    const t = e.position.clone(), a = e.scale.clone();
    return e.position.copy(r.position), e.scale.copy(r.scale), C.add(e), O.setSize(r.width, r.height), O.render(C, H), e.removeFromParent(), e.position.copy(t), e.scale.copy(a), I.toDataURL("image/png");
  }
}
const ze = new N("#ffffff", Math.PI), C = new F(), I = document.createElement("canvas"), O = new U({ alpha: true, canvas: I }), H = new xe(-0.5, 0.5, 0.5, -0.5, 0.01, 100);
C.add(ze);
H.position.z = 10;
class Ae extends we {
  constructor(e) {
    super(e);
  }
  async load(e) {
    try {
      var r = await fetch(e), t = await r.json();
      for (const [a, i] of Object.entries(t)) super.load(i.url, function(s) {
        s.colorSpace = ye, s.name = a, s.magFilter = i.magFilter || y, s.duplicate = this.duplicate.bind(this, s), i.center && s.center.copy(i.center), i.repeat && s.repeat.copy(i.repeat), this.manager.cache[a] = s;
      }.bind(this), void 0, function(s) {
        console.error(`Error: Texture "${i.url}" not found.`);
      });
    } catch (a) {
      console.error(a);
    }
  }
  duplicate(e) {
    return e = e.clone(), e;
  }
}
class Fe extends _e {
  constructor(e) {
    super(e), this.listener = new be();
  }
  async load(e) {
    try {
      var r = await fetch(e), t = await r.json();
      for (const [a, i] of Object.entries(t)) super.load(i.url, function(s) {
        var n = new Pe(this.listener);
        n.name = a, n.setBuffer(s), n.duplicate = this.duplicate.bind(this, n), i.userData && (n.userData = i.userData, n.userData.loop && n.setLoop(n.userData.loop), n.userData.volume && n.setVolume(n.userData.volume)), this.manager.cache[a] = n;
      }.bind(this), function(s) {
      }, function(s) {
        console.error(`Error: Audio "${i.url}" not found.`);
      });
    } catch (a) {
      console.error(a);
    }
  }
  duplicate(e) {
    return console.warn("AudioLoader: Audio cannot be cloned."), e;
  }
}
class Ue extends Be {
  constructor(e) {
    super(e), this.setMimeType("application/json"), this.setResponseType("json");
  }
  async load(e) {
    try {
      var r = await fetch(e), t = await r.json();
      for (const [a, i] of Object.entries(t)) super.load(i.url, function(s) {
        this.manager.cache[a] = s;
      }.bind(this), function(s) {
      }, function(s) {
        console.error(`Error: File ${i.url} not found.`);
      });
    } catch (a) {
      console.error(a);
    }
  }
  duplicate(e) {
    return JSON.parse(JSON.stringify(e));
  }
}
class Qe extends Ce {
  constructor(e, r, t) {
    super(e, Ne.bind(r), t), this.cache = {}, this.assetModelLoader = new Oe(this), this.assetTextureLoader = new Ae(this), this.assetAudioLoader = new Fe(this), this.assetJSONLoader = new Ue(this);
  }
  load(e = {}) {
    e.models && this.assetModelLoader.load(e.models), e.textures && this.assetTextureLoader.load(e.textures), e.audio && this.assetAudioLoader.load(e.audio), e.json && this.assetJSONLoader.load(e.json);
  }
  get(e) {
    var r = this.cache[e];
    return r;
  }
  duplicate(e) {
    var r = this.get(e);
    return r && (r = r.duplicate()), r;
  }
}
function Ne(d, e, r) {
  var t = Math.ceil(e / r * 100);
  dispatchEvent(new CustomEvent("updateLoading", { detail: { url: d, itemsLoaded: e, itemsTotal: r, percent: t } })), typeof this == "function" && this(d, e, r);
}
export {
  Qe as A,
  Ge as G,
  je as I,
  Ve as L,
  He as a
};
