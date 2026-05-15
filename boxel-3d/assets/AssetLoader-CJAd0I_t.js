import{$t as e,D as t,Dt as n,Et as r,Ft as i,H as a,Ht as o,It as s,L as c,Lt as l,M as u,N as d,Nn as f,Nt as p,On as m,Pn as h,Q as g,Rt as _,St as ee,Tt as te,U as ne,V as v,_ as y,_t as b,a as x,b as S,c as C,d as re,en as ie,f as ae,g as w,h as T,j as oe,jn as E,l as D,mn as O,mt as k,n as A,nn as j,o as M,ot as N,pt as P,r as F,rt as I,s as L,st as R,tn as z,u as B,ut as V,v as H,vt as U,xn as W,y as G,zt as K}from"./tauri-desktop-bridge-BmoVjKMC.js";var se={key:0,class:`loading`},ce={class:`bar`},le={class:`label`},ue=ae({__name:`Loading`,setup(t){var n=m({urls:``,index:0,max:1,percent:0});function r(e){n.value=e}function i(){return n.value.percent==100}return window.addEventListener(`updateLoading`,function(e){r(e.detail)}),(t,r)=>(O(),ie(o,{name:`fade-loading`},{default:W(()=>[i()==0?(O(),j(`div`,se,[e(`div`,ce,[e(`div`,{class:`boxel`,style:f({left:`calc(${E(n).percent}% - 1em)`})},null,4),e(`div`,{class:`progress`,style:f({width:E(n).percent+`%`})},null,4)]),e(`div`,le,`Loading: `+h(E(n).percent)+`%`,1)])):z(``,!0)]),_:1}))}},[[`__scopeId`,`data-v-96273571`]]),de=class{constructor(){this.loops=[],this.speed=1,this.thread=e=>this.update(e),this.threadTimestamp=0,this.threadFrame=0}add(e,t=-1){return this.loops.push({callback:e,delay:t,delta:0,alpha:0,frame:0,sum:0,timestamp:0})}get(e){return this.loops[e]}remove(e){return this.loops.splice(e,1)}start(){this.threadFrame=requestAnimationFrame(e=>{this.threadTimestamp=e,this.loops.forEach(t=>t.timestamp=e),this.thread(e)})}stop(){cancelAnimationFrame(this.threadFrame)}update(e){this.threadFrame=requestAnimationFrame(this.thread);let t=e-this.threadTimestamp;this.threadTimestamp=e;for(let n=this.loops.length-1;n>=0;n--)this.loops[n].sum+=t*this.speed,this.loops[n].sum>=this.loops[n].delay&&(this.loops[n].sum%=this.loops[n].delay,this.loops[n].delta=(e-this.loops[n].timestamp)*this.speed,this.loops[n].alpha=this.loops[0].sum/this.loops[0].delay,this.loops[n].frame++,this.loops[n].timestamp=e,this.loops[n].callback(this.loops[n]))}},fe=class extends B{constructor(e,t,n,r={}){super(),this.pixelSize=e,this.scene=t,this.camera=n,this.normalEdgeStrength=r.normalEdgeStrength||.3,this.depthEdgeStrength=r.depthEdgeStrength||.4,this.pixelatedMaterial=this._createPixelatedMaterial(),this._resolution=new s,this._renderResolution=new s,this._normalMaterial=new R,this._beautyRenderTarget=new K,this._beautyRenderTarget.texture.minFilter=V,this._beautyRenderTarget.texture.magFilter=V,this._beautyRenderTarget.texture.type=v,this._beautyRenderTarget.depthTexture=new oe,this._normalRenderTarget=new K,this._normalRenderTarget.texture.minFilter=V,this._normalRenderTarget.texture.magFilter=V,this._normalRenderTarget.texture.type=v,this._fsQuad=new D(this.pixelatedMaterial)}dispose(){this._beautyRenderTarget.dispose(),this._normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this._normalMaterial.dispose(),this._fsQuad.dispose()}setSize(e,t){this._resolution.set(e,t),this._renderResolution.set(e/this.pixelSize|0,t/this.pixelSize|0);let{x:n,y:r}=this._renderResolution;this._beautyRenderTarget.setSize(n,r),this._normalRenderTarget.setSize(n,r),this._fsQuad.material.uniforms.resolution.value.set(n,r,1/n,1/r)}setPixelSize(e){this.pixelSize=e,this.setSize(this._resolution.x,this._resolution.y)}render(e,t){let n=this._fsQuad.material.uniforms;n.normalEdgeStrength.value=this.normalEdgeStrength,n.depthEdgeStrength.value=this.depthEdgeStrength,e.setRenderTarget(this._beautyRenderTarget),e.render(this.scene,this.camera);let r=this.scene.overrideMaterial;e.setRenderTarget(this._normalRenderTarget),this.scene.overrideMaterial=this._normalMaterial,e.render(this.scene,this.camera),this.scene.overrideMaterial=r,n.tDiffuse.value=this._beautyRenderTarget.texture,n.tDepth.value=this._beautyRenderTarget.depthTexture,n.tNormal.value=this._normalRenderTarget.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this._fsQuad.render(e)}_createPixelatedMaterial(){return new n({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new _},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
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
			`})}},q=class e extends B{constructor(e,r,a,o){super(),this.renderScene=r,this.renderCamera=a,this.selectedObjects=o===void 0?[]:o,this.visibleEdgeColor=new t(1,1,1),this.hiddenEdgeColor=new t(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e===void 0?new s(256,256):new s(e.x,e.y);let c=Math.round(this.resolution.x/this.downSampleRatio),l=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new K(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name=`OutlinePass.mask`,this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new N,this.depthMaterial.side=2,this.depthMaterial.depthPacking=ee,this.depthMaterial.blending=0,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=2,this.prepareMaskMaterial.fragmentShader=d(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new K(this.resolution.x,this.resolution.y,{type:v}),this.renderTargetDepthBuffer.texture.name=`OutlinePass.depth`,this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new K(c,l,{type:v}),this.renderTargetMaskDownSampleBuffer.texture.name=`OutlinePass.depthDownSample`,this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new K(c,l,{type:v}),this.renderTargetBlurBuffer1.texture.name=`OutlinePass.blur1`,this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new K(Math.round(c/2),Math.round(l/2),{type:v}),this.renderTargetBlurBuffer2.texture.name=`OutlinePass.blur2`,this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new K(c,l,{type:v}),this.renderTargetEdgeBuffer1.texture.name=`OutlinePass.edge1`,this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new K(Math.round(c/2),Math.round(l/2),{type:v}),this.renderTargetEdgeBuffer2.texture.name=`OutlinePass.edge2`,this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1,this.separableBlurMaterial1=this._getSeparableBlurMaterial(4),this.separableBlurMaterial1.uniforms.texSize.value.set(c,l),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(4),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(c/2),Math.round(l/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=4,this.overlayMaterial=this._getOverlayMaterial();let u=re;this.copyUniforms=i.clone(u.uniforms),this.materialCopy=new n({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new t,this.oldClearAlpha=1,this._fsQuad=new D(null),this.tempPulseColor1=new t,this.tempPulseColor2=new t,this.textureMatrix=new I;function d(e,t){let n=t.isPerspectiveCamera?`perspective`:`orthographic`;return e.replace(/DEPTH_TO_VIEW_Z/g,n+`DepthToViewZ`)}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),r=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,r),this.renderTargetBlurBuffer1.setSize(n,r),this.renderTargetEdgeBuffer1.setSize(n,r),this.separableBlurMaterial1.uniforms.texSize.value.set(n,r),n=Math.round(n/2),r=Math.round(r/2),this.renderTargetBlurBuffer2.setSize(n,r),this.renderTargetEdgeBuffer2.setSize(n,r),this.separableBlurMaterial2.uniforms.texSize.value.set(n,r)}render(t,n,r,i,a){if(this.selectedObjects.length>0){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let n=t.autoClear;t.autoClear=!1,a&&t.state.buffers.stencil.setTest(!1),t.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);let i=this.renderScene.background,o=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,t.setRenderTarget(this.renderTargetDepthBuffer),t.clear(),t.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,t.setRenderTarget(this.renderTargetMaskBuffer),t.clear(),t.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=i,this.renderScene.overrideMaterial=o,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,t.setRenderTarget(this.renderTargetMaskDownSampleBuffer),t.clear(),this._fsQuad.render(t),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){let e=1.25/2+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(e),this.tempPulseColor2.multiplyScalar(e)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,t.setRenderTarget(this.renderTargetEdgeBuffer1),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=e.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,t.setRenderTarget(this.renderTargetBlurBuffer1),t.clear(),this._fsQuad.render(t),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetEdgeBuffer1),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetBlurBuffer2),t.clear(),this._fsQuad.render(t),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetEdgeBuffer2),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,a&&t.state.buffers.stencil.setTest(!0),t.setRenderTarget(r),this._fsQuad.render(t),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=n}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=r.texture,t.setRenderTarget(null),this._fsQuad.render(t))}_updateSelectionCache(){let e=this._selectionCache;function t(t){t.isMesh&&e.add(t)}e.clear();for(let e=0;e<this.selectedObjects.length;e++)this.selectedObjects[e].traverse(t)}_changeVisibilityOfSelectedObjects(e){let t=this._visibilityCache;for(let n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}_changeVisibilityOfNonSelectedObjects(e){let t=this._visibilityCache,n=this._selectionCache;function r(r){if(r.isPoints||r.isLine||r.isLine2)e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e);else if((r.isMesh||r.isSprite)&&!n.has(r)){let n=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,n)}}this.renderScene.traverse(r)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new n({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new s(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
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

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new n({uniforms:{maskTexture:{value:null},texSize:{value:new s(.5,.5)},visibleEdgeColor:{value:new l(1,1,1)},hiddenEdgeColor:{value:new l(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

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
				}`})}_getSeparableBlurMaterial(e){return new n({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new s(.5,.5)},direction:{value:new s(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
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
				}`})}_getOverlayMaterial(){return new n({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

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
				}`,blending:2,depthTest:!1,depthWrite:!1,transparent:!0})}};q.BlurDirectionX=new s(1,0),q.BlurDirectionY=new s(0,1);var J=function(){var e=0,t=document.createElement(`div`);t.style.cssText=`position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000`,t.addEventListener(`click`,function(n){n.preventDefault(),r(++e%t.children.length)},!1);function n(e){return t.appendChild(e.dom),e}function r(n){for(var r=0;r<t.children.length;r++)t.children[r].style.display=r===n?`block`:`none`;e=n}var i=(performance||Date).now(),a=i,o=0,s=n(new J.Panel(`FPS`,`#0ff`,`#002`)),c=n(new J.Panel(`MS`,`#0f0`,`#020`));if(self.performance&&self.performance.memory)var l=n(new J.Panel(`MB`,`#f08`,`#201`));return r(0),{REVISION:16,dom:t,addPanel:n,showPanel:r,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(c.update(e-i,200),e>=a+1e3&&(s.update(o*1e3/(e-a),100),a=e,o=0,l)){var t=performance.memory;l.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:t,setMode:r}};J.Panel=function(e,t,n){var r=1/0,i=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,c=48*o,l=3*o,u=2*o,d=3*o,f=15*o,p=74*o,m=30*o,h=document.createElement(`canvas`);h.width=s,h.height=c,h.style.cssText=`width:80px;height:48px`;var g=h.getContext(`2d`);return g.font=`bold `+9*o+`px Helvetica,Arial,sans-serif`,g.textBaseline=`top`,g.fillStyle=n,g.fillRect(0,0,s,c),g.fillStyle=t,g.fillText(e,l,u),g.fillRect(d,f,p,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d,f,p,m),{dom:h,update:function(c,_){r=Math.min(r,c),i=Math.max(i,c),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,s,f),g.fillStyle=t,g.fillText(a(c)+` `+e+` (`+a(r)+`-`+a(i)+`)`,l,u),g.drawImage(h,d+o,f,p-o,m,d,f,p-o,m),g.fillRect(d+p-o,f,o,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d+p-o,f,o,a((1-c/_)*m))}}};var pe=class{constructor(e=document.createElement(`canvas`)){this.camera=new k(45,window.innerWidth/window.innerHeight,1,100),this.scene=new r,this.canvas=e,this.stats=new J,window.devicePixelRatio=1,this.renderer=new T({alpha:!0,canvas:e}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=2,this.renderPass=new L(this.scene,this.camera),this.outputPass=new M,this.outlinePass=new q({x:window.innerWidth,y:window.innerHeight},this.scene,this.camera),this.outlinePass.edgeStrength=3,this.outlinePass.edgeGlow=0,this.outlinePass.edgeThickness=.125,this.outlinePass.visibleEdgeColor.set(`#000000`),this.outlinePass.hiddenEdgeColor.set(`#000000`),this.outlinePass.enabled=!0,this.smaaPass=new x(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio),this.smaaPass.enabled=!1,this.pixelatedPass=new fe(2,this.scene,this.camera),this.pixelatedPass.normalEdgeStrength=1,this.pixelatedPass.depthEdgeStrength=1,this.pixelatedPass.enabled=!1,this.composer=new C(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(this.pixelatedPass),this.composer.addPass(this.outlinePass),this.composer.addPass(this.smaaPass),this.composer.addPass(this.outputPass),this.resize=this.resize.bind(this),window.addEventListener(`resize`,this.resize),window.dispatchEvent(new Event(`resize`))}render(){this.stats.begin(),this.composer.render(),this.stats.end()}resize(e){var t=e.target.innerWidth,n=e.target.innerHeight;this.setSize(t,n)}setSize(e,t){var n=e/t;this.camera.isOrthographicCamera&&(this.camera.left=-n*.5,this.camera.right=n*.5,this.camera.top=.5,this.camera.bottom=-.5),this.camera.aspect=n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}setCamera(e){this.camera=e,this.renderPass.camera=e,this.pixelatedPass.camera=e,this.outlinePass.renderCamera=e}setScene(e){this.scene=e,this.scene.fog=this.fog,this.renderPass.scene=e,this.pixelatedPass.scene=e,this.outlinePass.renderScene=e}setShadows(e=!0){this.renderer.shadowMap.enabled=e,this.scene.traverse(function(t){t.material&&(t.castShadow=e,t.receiveShadow=e,t.material.needsUpdate=!0)})}setSelectedObjects(e=[]){this.outlinePass.selectedObjects=e}addStats(){document.body.appendChild(this.stats.dom)}removeStats(){document.body.removeChild(this.stats.dom)}},me=class{constructor(){}static create(e=`PointLight`,t){var n,r;if(t=Object.assign({color:`#ffffff`,decay:2,distance:0,groundColor:`#000000`,intensity:Math.PI,castShadow:!1,skyColor:`#ffffff`},t),e==`AmbientLight`?n=new w(t.color,t.intensity):e==`DirectionalLight`?(n=new u(t.color,t.intensity),r=new d(n)):e==`HemisphereLight`?(n=new a(t.skyColor,t.groundColor,t.intensity),r=new ne(n)):e==`PointLight`&&(n=new b(t.color,t.intensity,t.distance,t.decay),r=new U(n)),n==null){console.error(`Error: Light type "${e}" does not exists.`);return}return t.castShadow&&(n.castShadow=!0),t.helper==1&&r&&(n.addEventListener(`added`,function(e){n.parent.add(r)}),n.addEventListener(`removed`,function(e){r.removeFromParent()})),n}},he=class extends A{constructor(e){super(e)}async load(e){try{var t=await(await fetch(e)).json();for(let[e,n]of Object.entries(t))super.load(n.url,function(t){var r=t.scene;r.name=e,r.animations=t.animations,r.userData={...n.userData},r.duplicate=this.duplicate.bind(this,r),this.manager.cache[e]=r,this.addMixer(r)}.bind(this),function(e){},function(e){console.error(e)})}catch(e){console.error(e)}}duplicate(e){let t=F(e);return this.addMixer(t),t}addMixer(e){if(e.animations.length>0){var t=e.userData.loop||2201;e.mixer=new y(e),e.actions={};for(var n=0;n<e.animations.length;n++){var r=e.animations[n],i=e.mixer.clipAction(r);t==2200&&(i.setLoop(t),i.clampWhenFinished=!0),i.play(),i.setEffectiveWeight(0),e.actions[r.name]=i,n==0&&(e.actions.active=i,i.setEffectiveWeight(1))}e.play=function(t,n=1){var r=e.actions.active,i=e.actions[t];i&&i!=r&&(r==null?(i.setEffectiveWeight(1),i.reset().fadeIn(n)):(r.setEffectiveWeight(1),i.setEffectiveWeight(1),i.reset().crossFadeFrom(r,n)),i.duration=n,e.actions.active=i)}}}renderThumbnail(e,t){t=Object.assign({height:64,position:{x:0,y:0,z:0},scale:{x:1,y:1,z:1},width:64},t);let n=e.position.clone(),r=e.scale.clone();return e.position.copy(t.position),e.scale.copy(t.scale),Y.add(e),Z.setSize(t.width,t.height),Z.render(Y,Q),e.removeFromParent(),e.position.copy(n),e.scale.copy(r),X.toDataURL(`image/png`)}},ge=new w(`#ffffff`,Math.PI),Y=new r,X=document.createElement(`canvas`),Z=new T({alpha:!0,canvas:X}),Q=new P(-.5,.5,.5,-.5,.01,100);Y.add(ge),Q.position.z=10;var $=class extends p{constructor(e){super(e)}async load(e){try{var t=await(await fetch(e)).json();for(let[e,n]of Object.entries(t))super.load(n.url,function(t){t.colorSpace=te,t.name=e,t.magFilter=n.magFilter||1003,t.duplicate=this.duplicate.bind(this,t),n.center&&t.center.copy(n.center),n.repeat&&t.repeat.copy(n.repeat),this.manager.cache[e]=t}.bind(this),void 0,function(e){console.error(`Error: Texture "${n.url}" not found.`)})}catch(e){console.error(e)}}duplicate(e){return e=e.clone(),e}},_e=class extends S{constructor(e){super(e),this.listener=new G}async load(e){try{var t=await(await fetch(e)).json();for(let[e,n]of Object.entries(t))super.load(n.url,function(t){var r=new H(this.listener);r.name=e,r.setBuffer(t),r.duplicate=this.duplicate.bind(this,r),n.userData&&(r.userData=n.userData,r.userData.loop&&r.setLoop(r.userData.loop),r.userData.volume&&r.setVolume(r.userData.volume)),this.manager.cache[e]=r}.bind(this),function(e){},function(e){console.error(`Error: Audio "${n.url}" not found.`)})}catch(e){console.error(e)}}duplicate(e){return console.warn(`AudioLoader: Audio cannot be cloned.`),e}},ve=class extends c{constructor(e){super(e),this.setMimeType(`application/json`),this.setResponseType(`json`)}async load(e){try{var t=await(await fetch(e)).json();for(let[e,n]of Object.entries(t))super.load(n.url,function(t){this.manager.cache[e]=t}.bind(this),function(e){},function(e){console.error(`Error: File ${n.url} not found.`)})}catch(e){console.error(e)}}duplicate(e){return JSON.parse(JSON.stringify(e))}},ye=class extends g{constructor(e,t,n){super(e,be.bind(t),n),this.cache={},this.assetModelLoader=new he(this),this.assetTextureLoader=new $(this),this.assetAudioLoader=new _e(this),this.assetJSONLoader=new ve(this)}load(e={}){e.models&&this.assetModelLoader.load(e.models),e.textures&&this.assetTextureLoader.load(e.textures),e.audio&&this.assetAudioLoader.load(e.audio),e.json&&this.assetJSONLoader.load(e.json)}get(e){return this.cache[e]}duplicate(e){var t=this.get(e);return t&&=t.duplicate(),t}};function be(e,t,n){var r=Math.ceil(t/n*100);dispatchEvent(new CustomEvent(`updateLoading`,{detail:{url:e,itemsLoaded:t,itemsTotal:n,percent:r}})),typeof this==`function`&&this(e,t,n)}export{ue as a,de as i,me as n,pe as r,ye as t};