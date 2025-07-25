import { _ as F, c as i, a as t, r as E, o as l, n as fe, b as j, w as g, d as h, u as m, T as ee, e as w, f as Y, g as k, t as b, h as oe, F as V, i as te, v as _e, j as I, k as le, l as we, m as se, p as ge, s as be, q as ke, x as he, y as ye, z as ae, A as $e } from "./SkeletonUtils-Cx5mugYb.js";
import { A as xe, L as Ie, I as Ce, G as Se, a as Fe } from "./AssetLoader-DqaLF4NC.js";
import { U as N, A as Ae, u as ie, S as Le, i as je } from "./i18n-DrEiTwKN.js";
const Ee = { class: "banner" }, Be = { class: "text" }, Ue = { __name: "Banner", setup(v) {
  return (o, r) => (l(), i("div", Ee, [t("span", Be, [E(o.$slots, "default", {}, void 0)])]));
} }, Ne = F(Ue, [["__scopeId", "data-v-b6531436"]]), Te = { __name: "ButtonAction", props: { color: String }, setup(v) {
  const o = v;
  return (r, d) => (l(), i("button", { class: "action", style: fe({ "background-color": o.color }) }, [E(r.$slots, "default", {}, void 0)], 4));
} }, R = F(Te, [["__scopeId", "data-v-515078b3"]]), De = { __name: "ButtonDiscord", props: { assets: Object, volume: Number }, setup(v) {
  return (o, r) => (l(), j(R, { class: "action", title: "Discord Server" }, { default: g(() => r[0] || (r[0] = [t("img", { src: "./svg/discord.svg" }, null, -1)])), _: 1, __: [0] }));
} }, Me = F(De, [["__scopeId", "data-v-e8ca55a2"]]), Oe = { __name: "ButtonExit", setup(v) {
  const o = new N();
  function r() {
    o.isElectronApp() ? window.electron.quit() : o.isNativeApp() && Ae.exitApp();
  }
  return (d, a) => m(o).isElectronApp() || m(o).isNativeApp() ? (l(), j(R, { key: 0, class: "action", title: "Exit", onClick: r }, { default: g(() => a[0] || (a[0] = [t("span", { class: "material-symbols-rounded" }, "undo", -1)])), _: 1, __: [0] })) : h("", true);
} }, Pe = F(Oe, [["__scopeId", "data-v-50103232"]]), Ve = { __name: "ButtonFullScreen", setup(v) {
  const o = new N();
  function r() {
    if (o.isExtension() && window.location.href.includes("?tab=true") == false) {
      o.openLink(window.location.href + "?tab=true");
      return;
    }
    o.isElectronApp() ? window.electron.toggleFullScreen() : o.isFullscreen() ? document.exitFullscreen() : document.body.requestFullscreen();
  }
  return (d, a) => m(o).isNativeApp() == false ? (l(), j(R, { key: 0, class: "action", title: "Fullscreen", onClick: r }, { default: g(() => a[0] || (a[0] = [t("span", { class: "material-symbols-rounded" }, "fullscreen", -1)])), _: 1, __: [0] })) : h("", true);
} }, Re = F(Ve, [["__scopeId", "data-v-633d765d"]]), We = { key: 0, class: "material-symbols-rounded" }, Ke = { key: 1, class: "material-symbols-rounded" }, qe = { __name: "ButtonVolume", props: { assets: Object, volume: Number }, setup(v) {
  return (o, r) => (l(), j(R, { class: "action", title: "Volume" }, { default: g(() => [v.volume != 0 ? (l(), i("span", We, "volume_up")) : (l(), i("span", Ke, "volume_off"))]), _: 1 }));
} }, ze = { __name: "ButtonReview", setup(v) {
  const o = new N();
  async function r() {
    var d = "";
    o.isNativeApp() ? d = "https://play.google.com/store/apps/details?id=com.boxel3d.app" : navigator.userAgent.indexOf("Edg") != -1 ? d = "https://microsoftedge.microsoft.com/addons/detail/boxel-3d/gcklngphfijejfnnicbadhghhdifidek" : navigator.userAgent.indexOf("Chrome") != -1 ? d = "https://chromewebstore.google.com/detail/boxel-3d/mjjgmlmpeaikcaajghilhnioimmaibon/reviews" : navigator.userAgent.indexOf("Firefox") != -1 && (d = "https://addons.mozilla.org/en-US/firefox/addon/boxel-3d-game/"), o.openLink(d);
  }
  return (d, a) => m(o).isExtension() || m(o).isNativeApp() ? (l(), j(R, { key: 0, class: "action", onClick: a[0] || (a[0] = (A) => r()) }, { default: g(() => a[1] || (a[1] = [t("span", { class: "material-symbols-rounded" }, "favorite", -1), t("span", null, "Write a Review", -1)])), _: 1, __: [1] })) : h("", true);
} }, Ge = F(ze, [["__scopeId", "data-v-9e634156"]]), He = { class: "card" }, Qe = ["src"], Je = { __name: "Card", props: ["src"], setup(v) {
  return (o, r) => (l(), i("button", He, [t("img", { src: v.src }, null, 8, Qe), t("label", null, [E(o.$slots, "default", {}, void 0)])]));
} }, Z = F(Je, [["__scopeId", "data-v-8f2fb07e"]]), Xe = {}, Ye = { class: "modal" }, Ze = { class: "container" }, et = { class: "content" }, tt = { class: "title" }, st = { class: "text" }, nt = { class: "buttons" };
function ot(v, o) {
  return l(), j(ee, { name: "fade-modal" }, { default: g(() => [t("div", Ye, [t("div", { class: "background", onClick: o[0] || (o[0] = (r) => v.$emit("close")) }), t("div", Ze, [t("div", et, [E(v.$slots, "default", {}, void 0, true), t("div", tt, [E(v.$slots, "title", {}, void 0, true)]), t("div", st, [E(v.$slots, "text", {}, void 0, true)]), t("div", nt, [E(v.$slots, "buttons", {}, void 0, true)])]), t("a", { class: "close", onClick: o[1] || (o[1] = (r) => v.$emit("close")) }, o[2] || (o[2] = [t("span", null, "x", -1)]))])])]), _: 3 });
}
const lt = F(Xe, [["render", ot], ["__scopeId", "data-v-85394bb8"]]), at = { __name: "ModalAndroid", setup(v) {
  const o = new N();
  return (r, d) => (l(), j(lt, { class: "steam" }, { title: g(() => d[1] || (d[1] = [t("span", { class: "material-symbols-rounded" }, "android", -1)])), text: g(() => d[2] || (d[2] = [t("p", null, "Play Boxel 3D wherever you go!", -1)])), buttons: g(() => [t("button", { onClick: d[0] || (d[0] = (a) => m(o).openLink("https://play.google.com/store/apps/details?id=com.boxel3d.app", "_blank")) }, "Download Now")]), _: 1 }));
} }, it = {}, rt = { class: "loader" };
function ut(v, o) {
  return l(), i("div", rt, o[0] || (o[0] = [t("div", { class: "loader__circle" }, null, -1)]));
}
const dt = F(it, [["render", ut], ["__scopeId", "data-v-b713aee1"]]), ct = { class: "modal workshop" }, pt = { class: "workshop__container" }, vt = { class: "workshop__types" }, mt = { class: "workshop__types-header" }, ft = { class: "workshop__types-list" }, _t = ["onClick"], wt = { class: "material-symbols-rounded" }, gt = { class: "workshop__items" }, bt = { class: "workshop__items-header" }, kt = ["placeholder"], ht = ["disabled"], yt = { key: 0 }, $t = { key: 0 }, xt = ["onClick"], It = ["src", "alt"], Ct = { key: 0 }, St = ["value", "onChange"], Ft = ["onClick", "title"], At = { key: 0, class: "material-symbols-rounded" }, Lt = { key: 1, class: "material-symbols-rounded" }, jt = ["onClick"], Et = ["onClick"], Bt = { class: "workshop__info" }, Ut = { class: "workshop__info-header" }, Nt = { class: "workshop__info-content" }, Tt = { class: "workshop__info-thumbnail" }, Dt = ["src", "alt"], Mt = { key: 0 }, Ot = { class: "workshop__info-details" }, Pt = ["disabled"], Vt = ["disabled"], Rt = { key: 0, class: "workshop__loading" }, Wt = ["title"], Kt = { __name: "ModalWorkshop", setup(v) {
  const o = new N(), r = ie({ useScope: "global" }), d = w(window.electron?.client != null), a = w(false), A = w(), T = w([{ title: "My Downloads", id: "subscriptions", icon: "download" }, { title: "My Uploads", id: "creations", icon: "upload" }]), B = w([]), C = w([]), f = w(T.value[0]), _ = w({}), S = w({}), D = Y(() => (s) => {
    const e = s == _.value, n = s == null && Object.keys(_.value).length > 0;
    return e || n;
  }), y = w(""), L = Y(() => (f.value.id == "subscriptions" ? B : C).value.filter((e) => e && Object.values(e).some((n) => n?.toString().toLowerCase().includes(y.value.toLowerCase())))), W = Y(() => {
    const s = f.value.id == "creations", e = Object.keys(S.value).length > 0;
    return s && e && a.value == false;
  });
  function H() {
    y.value = "";
  }
  async function K(s) {
    f.value = s, f.value.id == "subscriptions" ? await J() : await X(), M();
  }
  function U(s) {
    _.value != s && (S.value = {}, _.value = s);
  }
  function M() {
    U(L.value[0] || {}), u();
  }
  function O(s, e) {
    return localStorage.getItem(`item_${s.publishedFileId}_${e}`);
  }
  function P(s, e, n) {
    s[e] = n, localStorage.setItem(`item_${s.publishedFileId}_${e}`, n);
  }
  function q(s) {
    let e = O(s, "enabled") === "true";
    e === false && ne(s), P(s, "enabled", !e);
  }
  function Q(s) {
    setTimeout(() => {
      s.target.scrollLeft = s.target.scrollWidth, s.target.setSelectionRange(s.target.value.length, s.target.value.length);
    }, 100);
  }
  async function J() {
    if (a.value = true, d.value == true) try {
      const s = window.electron.client.workshop.getSubscribedItems();
      if (s.length > 0) try {
        const n = (await window.electron.client.workshop.getItems(s)).items.filter((c) => c !== null);
        n.sort((c, x) => x.timeUpdated - c.timeUpdated), B.value = n, n.forEach(async (c) => {
          let x = O(c, "enabled");
          x === null ? x = true : x = x === "true", P(c, "enabled", x);
          const G = await window.electron.client.workshop.installInfo(c.publishedFileId);
          G && (await window.electron.getFileNames(G.folder)).length == 0 && ne(c);
        });
      } catch (e) {
        console.error(e);
      }
    } catch (s) {
      console.error(s);
    }
    a.value = false;
  }
  async function X() {
    if (a.value = true, d.value == true) {
      const s = window.electron.client.apps.appOwner(), e = window.electron.client.utils.getAppId();
      try {
        const c = (await window.electron.client.workshop.getUserItems(1, s.accountId, 0, 13, 0, { creator: e })).items;
        c.sort((x, G) => G.timeUpdated - x.timeUpdated), C.value = c;
      } catch (n) {
        console.error(n);
      }
    }
    a.value = false;
  }
  async function z() {
    try {
      a.value = true;
      const s = window.electron.client.utils.getAppId(), e = await window.electron.client.workshop.createItem(s), n = await window.electron.client.workshop.getItem(e.itemId), c = await window.electron.getFilePath("public/png/workshop-thumbnail.png"), x = { title: "New Workshop Item", description: "Workshop item description", previewPath: c, previewUrl: c };
      await p(n, x), a.value = false, Object.assign(n, x), C.value.unshift(n), M();
    } catch (s) {
      console.error(s);
    }
  }
  function u() {
    we(() => {
      const s = L.value.findIndex((e) => e == _.value);
      s >= 0 && A.value.children[s].scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
  async function p(s, e) {
    let n;
    try {
      Object.assign(e, { visibility: 0 }), a.value = true, n = await window.electron.client.workshop.updateItem(s.publishedFileId, e);
    } catch (c) {
      console.error(c);
    }
    return a.value = false, n;
  }
  async function $() {
    const s = await p(le(_.value), le(S.value));
    return S.value = {}, s;
  }
  function ue(s) {
    let e;
    return [".json"].some((n) => s.includes(n)) ? e = "Level" : [".js"].some((n) => s.includes(n)) ? e = "Mod" : [".png", ".jpg"].some((n) => s.includes(n)) && (e = "Skin"), e;
  }
  async function ne(s) {
    a.value = true;
    let e = await window.electron.client.workshop.download(s.publishedFileId, true);
    return a.value = false, e;
  }
  async function de(s) {
    U(s);
    const e = await electron.dialog({ properties: ["openFile", "multiSelections"], filters: [{ name: "Level File(s)", extensions: ["json"] }, { name: "Skin File(s)", extensions: ["jpg", "png"] }, { name: "Mod File(s)", extensions: ["js"] }] });
    if (e.canceled == false) {
      const n = [ue(e.filePaths[0])];
      Object.assign(S.value, { contentPath: e.filePaths[0], tags: n });
    }
  }
  function ce(s, e) {
    s.title = e.target.value, S.value.title = e.target.value;
  }
  function pe(s, e) {
    s.description = e.target.value, S.value.description = e.target.value;
  }
  async function ve(s) {
    U(s);
    const e = await electron.dialog({ properties: ["openFile"], filters: [{ name: "Preview Image", extensions: ["png", "jpg", "gif"] }] });
    e.canceled == false && (s.previewUrl = e.filePaths[0], S.value.previewPath = e.filePaths[0]);
  }
  async function me() {
    await K(f.value), M();
  }
  return (s, e) => (l(), j(ee, { name: "fade-modal", onBeforeEnter: me }, { default: g(() => [t("div", ct, [t("div", { class: "workshop__background", onClick: e[0] || (e[0] = (n) => s.$emit("close")) }), t("div", pt, [t("div", vt, [t("div", mt, b(m(r).t("workshop.text.workshop")), 1), t("ul", ft, [(l(true), i(V, null, oe(T.value, (n) => (l(), i("li", { key: n.id }, [t("button", { class: se({ selected: f.value == n }), onClick: (c) => K(n) }, [t("span", wt, b(n.icon), 1), t("span", null, b(n.title), 1)], 10, _t)]))), 128))])]), t("div", gt, [t("div", bt, [te(t("input", { class: "workshop__search", "onUpdate:modelValue": e[1] || (e[1] = (n) => y.value = n), placeholder: `${m(r).t("popup.text.search")}...`, type: "text" }, null, 8, kt), [[_e, y.value]]), e[11] || (e[11] = t("button", { class: "search-icon", tabindex: "-1" }, [t("span", { class: "material-symbols-rounded" }, "search")], -1)), y.value.length > 0 ? (l(), i("button", { key: 0, class: "clear-icon", onClick: e[2] || (e[2] = (n) => H()) }, e[10] || (e[10] = [t("span", { class: "material-symbols-rounded" }, "close", -1)]))) : h("", true)]), t("ul", { class: "workshop__items-list", ref_key: "itemsRef", ref: A }, [t("li", null, [f.value.id == "subscriptions" ? (l(), i("button", { key: 0, class: "primary", onClick: e[3] || (e[3] = (n) => m(o).openLink("https://steamcommunity.com/workshop/browse/?appid=3208440", "_blank")) }, [e[12] || (e[12] = t("span", { class: "material-symbols-rounded" }, "add", -1)), t("span", null, b(m(r).t("workshop.text.browse_items")), 1)])) : f.value.id == "creations" ? (l(), i("button", { key: 1, class: "primary", onClick: e[4] || (e[4] = (n) => z()), disabled: d.value == false }, [e[13] || (e[13] = t("span", { class: "material-symbols-rounded" }, "add", -1)), t("span", null, b(m(r).t("workshop.text.create_item")), 1)], 8, ht)) : h("", true)]), L.value.length == 0 && a.value == false ? (l(), i("li", yt, [t("div", null, [d.value == true ? (l(), i("ol", $t, e[14] || (e[14] = [t("li", null, [t("span", null, [t("strong", null, "Browse"), I(" the Steam Workshop for community levels, skins, and mods.")])], -1), t("li", null, [t("span", null, [I("Select any item you want to download, then click "), t("strong", null, "Subscribe"), I(".")])], -1), t("li", null, [t("span", null, [I("If you do not see your in-game subscriptions, "), t("strong", null, "restart"), I(" Boxel 3D.")])], -1)]))) : (l(), i(V, { key: 1 }, [e[15] || (e[15] = t("p", null, [I("The Steam Workshop allows players to download & share community content such as "), t("strong", null, "levels"), I(", "), t("strong", null, "skins"), I(", & "), t("strong", null, "mods")], -1)), e[16] || (e[16] = t("p", null, "This feature is only available on Steam.", -1)), e[17] || (e[17] = t("p", null, [t("a", { href: "https://store.steampowered.com/app/3208440/Boxel_3D/", target: "_blank" }, [t("img", { src: "./svg/steam.svg" }), t("span", null, "Download on Steam")])], -1))], 64))])])) : h("", true), (l(true), i(V, null, oe(L.value, (n) => (l(), i("li", { key: n.publishedFileId }, [t("button", { class: se({ selected: _.value == n }), onClick: (c) => U(n) }, [t("img", { src: n.previewUrl || void 0, alt: n.title }, null, 8, It), f.value.id == "subscriptions" ? (l(), i("span", Ct, b(n.title), 1)) : (l(), i(V, { key: 1 }, [t("input", { type: "text", value: n.title, onChange: (c) => ce(n, c), onFocus: e[5] || (e[5] = (c) => Q(c)) }, null, 40, St), e[18] || (e[18] = t("span", { class: "accept material-symbols-rounded" }, "check", -1))], 64))], 10, xt), f.value.id == "subscriptions" ? (l(), i("button", { key: 0, onClick: (c) => q(n), title: n.enabled ? "Enabled" : "Disabled" }, [n.enabled === true ? (l(), i("span", At, "select_check_box")) : (l(), i("span", Lt, "check_box_outline_blank"))], 8, Ft)) : h("", true), f.value.id == "creations" ? (l(), i("button", { key: 1, onClick: (c) => de(n), title: "Upload new content (ex: My Level.json)" }, e[19] || (e[19] = [t("span", { class: "material-symbols-rounded" }, "folder_open", -1)]), 8, jt)) : h("", true), t("button", { onClick: (c) => m(o).openLink("https://steamcommunity.com/sharedfiles/filedetails/?id=" + n.publishedFileId, "_blank"), title: "View item" }, e[20] || (e[20] = [t("span", { class: "material-symbols-rounded" }, "link", -1)]), 8, Et)]))), 128))], 512)]), t("div", Bt, [t("div", Ut, b(m(r).t("popup.text.info")), 1), t("div", Nt, [t("div", Tt, [t("img", { src: _.value.previewUrl || void 0, alt: _.value.description }, null, 8, Dt), _.value.label ? (l(), i("label", Mt, [t("span", null, b(_.value.label), 1)])) : h("", true), D.value(null) && f.value.id == "creations" && d.value == true ? (l(), i("button", { key: 1, onClick: e[6] || (e[6] = (n) => ve(_.value)) }, [e[21] || (e[21] = t("span", { class: "material-symbols-rounded" }, "edit", -1)), t("span", null, b(m(r).t("workshop.text.edit")), 1)])) : h("", true)]), t("div", Ot, [(l(), i("textarea", { disabled: f.value.id == "subscriptions", onChange: e[7] || (e[7] = (n) => pe(_.value, n)), key: _.value.publishedFileId }, b(_.value.description), 41, Pt)), e[22] || (e[22] = t("span", { class: "accept material-symbols-rounded" }, "check", -1))]), f.value.id == "creations" ? (l(), i("button", { key: 0, disabled: W.value == false, onClick: e[8] || (e[8] = (n) => $()) }, e[23] || (e[23] = [t("span", { class: "material-symbols-rounded" }, "save", -1), t("span", null, "Save", -1)]), 8, Vt)) : h("", true)])]), k(ee, { name: "loading" }, { default: g(() => [a.value ? (l(), i("div", Rt, [k(dt)])) : h("", true)]), _: 1 }), t("a", { class: "workshop__close", onClick: e[9] || (e[9] = (n) => s.$emit("close")), title: m(r).t("popup.button.close") }, e[24] || (e[24] = [t("span", { class: "material-symbols-rounded" }, "close", -1)]), 8, Wt)])])]), _: 1 }));
} }, qt = F(Kt, [["__scopeId", "data-v-51bf431f"]]), zt = { class: "ui" }, Gt = { class: "nav" }, Ht = { class: "cards" }, Qt = { class: "footer" }, Jt = { __name: "App", setup(v) {
  const o = ie(), r = new N(), d = new Le(), a = ge(d.getSettings()), A = be(new xe(H)), T = w(), B = w(false), C = w(false), f = w(false), _ = w("./v1/index.html" + document.location.search);
  let S = a.volume, D, y, L, W;
  function H() {
    L = A.get("background-island-night"), W = Ie.create("AmbientLight"), L.traverse(function(u) {
      u.isCamera && y.setCamera(u);
    }), y.setSize(window.innerWidth, window.innerHeight), y.scene.add(L, W), D.add((u) => U(u), 1e3 / 60), D.start(), O(), Q();
  }
  function K(u) {
    var p = A.get(u);
    p.play();
  }
  function U({ delta: u }) {
    C.value == false && (L.mixer.update(u / 1e3), y.render());
  }
  function M() {
    a.volume > 0 ? (S = a.volume, a.volume = 0) : a.volume = S || 0.5, O();
  }
  function O() {
    d.setSettings(a);
    const u = A.assetAudioLoader.listener, p = u.context.currentTime;
    u.gain.gain.setTargetAtTime(a.volume, p, 0);
  }
  function P(u, p = "_self", $ = 0) {
    p == "_self" && (f.value = true, $ = 250), setTimeout(() => {
      window.open(u, p);
    }, $);
  }
  function q() {
    document.documentElement.lang = o.locale.value;
  }
  function Q() {
    location.href.includes("workshop=true") && (y.render(), C.value = true);
  }
  function J() {
    document.addEventListener("keydown", z), document.addEventListener("click", function(u) {
      K("click");
    });
  }
  function X() {
    document.removeEventListener("keydown", z);
  }
  function z(u) {
    r.isElectronApp() && (u.code === "KeyI" && (u.ctrlKey && u.shiftKey || u.metaKey && u.shiftKey) ? window.electron.openDevTools() : u.code === "Escape" ? C.value == true ? C.value = false : window.electron.toggleFullScreen() : u.code === "F11" ? window.electron.toggleFullScreen() : u.code === "KeyQ" && u.metaKey && window.electron.quit());
  }
  return ke(o.locale, () => {
    q();
  }), he(function() {
    D = new Ce(), y = new Se(T.value), A.load({ models: "./json/menu-models.json", textures: "./json/menu-textures.json", audio: "./json/menu-audio.json" }), J(), q();
  }), ye(function() {
    X();
  }), (u, p) => (l(), i(V, null, [t("canvas", { ref_key: "canvas", ref: T }, null, 512), t("div", zt, [t("div", Gt, [k(Pe, { class: "left" }), k(qe, { assets: m(A), volume: a.volume, onClick: p[0] || (p[0] = ($) => {
    M();
  }) }, null, 8, ["assets", "volume"]), k(Re), k(Me, { onClick: p[1] || (p[1] = ($) => P("https://discord.gg/j8fvd4UvbE", "_blank")) })]), k(Ne, null, { default: g(() => [I(b(m(o).t("home.title")), 1)]), _: 1 }), t("div", Ht, [k(Z, { src: "./svg/button-steam.svg", onClick: p[2] || (p[2] = ($) => {
    C.value = true;
  }) }, { default: g(() => [I(b(m(o).t("home.button.workshop")), 1)]), _: 1 }), m(r).isNativeApp() == false ? (l(), j(Z, { key: 0, src: "./svg/button-android.svg", onClick: p[3] || (p[3] = ($) => {
    B.value = true;
  }) }, { default: g(() => [I(b(m(o).t("home.button.android")), 1)]), _: 1 })) : h("", true), k(Z, { src: "./svg/button-play-pro.svg", onClick: p[4] || (p[4] = ($) => P(_.value)) }, { default: g(() => [I(b(m(o).t("home.button.play")), 1)]), _: 1 })]), t("div", Qt, [k(Ge)]), te(k(at, { onClose: p[5] || (p[5] = ($) => B.value = false) }, null, 512), [[ae, B.value == true]]), te(k(qt, { onClose: p[6] || (p[6] = ($) => C.value = false) }, null, 512), [[ae, C.value == true]]), k(Fe), t("div", { class: se(["fade-exit", { "is-exiting": f.value }]) }, null, 2)])], 64));
} }, Xt = F(Jt, [["__scopeId", "data-v-dbf4a5a1"]]), re = $e(Xt);
re.use(je);
re.mount("#app");
