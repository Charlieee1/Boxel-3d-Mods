import { _ as C, c as r, a as t, r as B, o as l, n as fe, b as E, d as k, u as v, w as g, T as ee, e as h, f as w, g as Y, h as y, t as b, i as oe, F as O, j as te, v as _e, k as le, l as we, m as se, p as ge, s as be, q as ke, x as he, y as ye, z as ae, A as $e } from "./SkeletonUtils-Lx6OFsqh.js";
import { A as xe, L as Ie, I as Ce, G as Se, a as Ae } from "./AssetLoader-CFSrclv1.js";
import { U, A as Fe, u as ie, S as Le, i as Ee } from "./i18n-DcjnNHZg.js";
const je = { class: "banner" }, Be = { class: "text" }, Ue = { __name: "Banner", setup(m) {
  return (o, d) => (l(), r("div", je, [t("span", Be, [B(o.$slots, "default", {}, void 0)])]));
} }, Ne = C(Ue, [["__scopeId", "data-v-b6531436"]]), Te = { __name: "ButtonAction", props: { color: String }, setup(m) {
  const o = m;
  return (d, i) => (l(), r("button", { class: "action", style: fe({ "background-color": o.color }) }, [B(d.$slots, "default", {}, void 0)], 4));
} }, D = C(Te, [["__scopeId", "data-v-e17eb7b2"]]), Me = { __name: "ButtonAndroid", setup(m) {
  const o = new U();
  return (d, i) => v(o).isNativeApp() == false ? (l(), E(D, { key: 0, class: "action notification", title: "Download Android app" }, { default: g(() => [...i[0] || (i[0] = [t("span", { class: "material-symbols-rounded" }, "android", -1)])]), _: 1 })) : k("", true);
} }, Pe = C(Me, [["__scopeId", "data-v-219f44b6"]]), Ve = { __name: "ButtonExit", setup(m) {
  const o = new U();
  function d() {
    o.isElectronApp() ? window.electron.quit() : o.isNativeApp() && Fe.exitApp();
  }
  return (i, a) => v(o).isElectronApp() || v(o).isNativeApp() ? (l(), E(D, { key: 0, class: "action", title: "Exit", onClick: d }, { default: g(() => [...a[0] || (a[0] = [t("span", { class: "material-symbols-rounded" }, "undo", -1)])]), _: 1 })) : k("", true);
} }, Oe = C(Ve, [["__scopeId", "data-v-50103232"]]), De = { __name: "ButtonFullScreen", setup(m) {
  const o = new U();
  function d() {
    if (o.isExtension() && window.location.href.includes("?tab=true") == false) {
      o.openLink(window.location.href + "?tab=true");
      return;
    }
    o.isElectronApp() ? window.electron.toggleFullScreen() : o.isFullscreen() ? document.exitFullscreen() : document.body.requestFullscreen();
  }
  return (i, a) => v(o).isNativeApp() == false ? (l(), E(D, { key: 0, class: "action", title: "Fullscreen", onClick: d }, { default: g(() => [...a[0] || (a[0] = [t("span", { class: "material-symbols-rounded" }, "fullscreen", -1)])]), _: 1 })) : k("", true);
} }, Re = C(De, [["__scopeId", "data-v-633d765d"]]), We = { key: 0, class: "material-symbols-rounded" }, Ke = { key: 1, class: "material-symbols-rounded" }, qe = { __name: "ButtonVolume", props: { assets: Object, volume: Number }, setup(m) {
  return (o, d) => (l(), E(D, { class: "action", title: "Volume" }, { default: g(() => [m.volume != 0 ? (l(), r("span", We, "volume_up")) : (l(), r("span", Ke, "volume_off"))]), _: 1 }));
} }, ze = { __name: "ButtonReview", setup(m) {
  const o = new U();
  async function d() {
    var i = "";
    o.isNativeApp() ? i = "https://play.google.com/store/apps/details?id=com.boxel3d.app" : navigator.userAgent.indexOf("Edg") != -1 ? i = "https://microsoftedge.microsoft.com/addons/detail/boxel-3d/gcklngphfijejfnnicbadhghhdifidek" : navigator.userAgent.indexOf("Chrome") != -1 ? i = "https://chromewebstore.google.com/detail/boxel-3d/mjjgmlmpeaikcaajghilhnioimmaibon/reviews" : navigator.userAgent.indexOf("Firefox") != -1 && (i = "https://addons.mozilla.org/en-US/firefox/addon/boxel-3d-game/"), o.openLink(i);
  }
  return (i, a) => v(o).isExtension() || v(o).isNativeApp() ? (l(), E(D, { key: 0, class: "action", onClick: a[0] || (a[0] = (F) => d()) }, { default: g(() => [...a[1] || (a[1] = [t("span", { class: "material-symbols-rounded" }, "favorite", -1), t("span", null, "Write a Review", -1)])]), _: 1 })) : k("", true);
} }, Ge = C(ze, [["__scopeId", "data-v-9e634156"]]), He = { class: "card" }, Qe = ["src"], Je = { __name: "Card", props: ["src"], setup(m) {
  return (o, d) => (l(), r("button", He, [t("img", { src: m.src }, null, 8, Qe), t("label", null, [B(o.$slots, "default", {}, void 0)])]));
} }, Z = C(Je, [["__scopeId", "data-v-e032054f"]]), Xe = {}, Ye = { class: "modal" }, Ze = { class: "container" }, et = { class: "content" }, tt = { class: "title" }, st = { class: "text" }, nt = { class: "buttons" };
function ot(m, o) {
  return l(), E(ee, { name: "fade-modal" }, { default: g(() => [t("div", Ye, [t("div", { class: "background", onClick: o[0] || (o[0] = (d) => m.$emit("close")) }), t("div", Ze, [t("div", et, [B(m.$slots, "default", {}, void 0, true), t("div", tt, [B(m.$slots, "title", {}, void 0, true)]), t("div", st, [B(m.$slots, "text", {}, void 0, true)]), t("div", nt, [B(m.$slots, "buttons", {}, void 0, true)])]), t("a", { class: "close", onClick: o[1] || (o[1] = (d) => m.$emit("close")) }, [...o[2] || (o[2] = [t("span", null, "x", -1)])])])])]), _: 3 });
}
const lt = C(Xe, [["render", ot], ["__scopeId", "data-v-85394bb8"]]), at = { __name: "ModalAndroid", setup(m) {
  const o = new U();
  return (d, i) => (l(), E(lt, { class: "steam" }, { title: g(() => [...i[1] || (i[1] = [t("span", { class: "material-symbols-rounded" }, "android", -1)])]), text: g(() => [...i[2] || (i[2] = [t("p", null, [h("Boxel 3D is now available on "), t("strong", null, "Google Play!")], -1)])]), buttons: g(() => [t("button", { onClick: i[0] || (i[0] = (a) => v(o).openLink("https://play.google.com/store/apps/details?id=com.boxel3d.app", "_blank")) }, [...i[3] || (i[3] = [t("span", { class: "discount" }, "$2.99", -1), h(), t("span", { class: "price" }, "$0.99", -1)])])]), _: 1 }));
} }, it = C(at, [["__scopeId", "data-v-f78b418d"]]), rt = {}, ut = { class: "loader" };
function dt(m, o) {
  return l(), r("div", ut, [...o[0] || (o[0] = [t("div", { class: "loader__circle" }, null, -1)])]);
}
const ct = C(rt, [["render", dt], ["__scopeId", "data-v-b713aee1"]]), pt = { class: "modal workshop" }, vt = { class: "workshop__container" }, mt = { class: "workshop__types" }, ft = { class: "workshop__types-header" }, _t = { class: "workshop__types-list" }, wt = ["onClick"], gt = { class: "material-symbols-rounded" }, bt = { class: "workshop__items" }, kt = { class: "workshop__items-header" }, ht = ["placeholder"], yt = ["disabled"], $t = { key: 0 }, xt = { key: 0 }, It = ["onClick"], Ct = ["src", "alt"], St = { key: 0 }, At = ["value", "onChange"], Ft = ["onClick", "title"], Lt = { key: 0, class: "material-symbols-rounded" }, Et = { key: 1, class: "material-symbols-rounded" }, jt = ["onClick"], Bt = ["onClick"], Ut = { class: "workshop__info" }, Nt = { class: "workshop__info-header" }, Tt = { class: "workshop__info-content" }, Mt = { class: "workshop__info-thumbnail" }, Pt = ["src", "alt"], Vt = { key: 0 }, Ot = { class: "workshop__info-details" }, Dt = ["disabled"], Rt = ["disabled"], Wt = { key: 0, class: "workshop__loading" }, Kt = ["title"], qt = { __name: "ModalWorkshop", setup(m) {
  const o = new U(), d = ie({ useScope: "global" }), i = w(window.electron?.client != null), a = w(false), F = w(), T = w([{ title: "My Downloads", id: "subscriptions", icon: "download" }, { title: "My Uploads", id: "creations", icon: "upload" }]), j = w([]), S = w([]), f = w(T.value[0]), _ = w({}), A = w({}), M = Y(() => (s) => {
    const e = s == _.value, n = s == null && Object.keys(_.value).length > 0;
    return e || n;
  }), $ = w(""), L = Y(() => (f.value.id == "subscriptions" ? j : S).value.filter((e) => e && Object.values(e).some((n) => n?.toString().toLowerCase().includes($.value.toLowerCase())))), R = Y(() => {
    const s = f.value.id == "creations", e = Object.keys(A.value).length > 0;
    return s && e && a.value == false;
  });
  function H() {
    $.value = "";
  }
  async function W(s) {
    f.value = s, f.value.id == "subscriptions" ? await J() : await X(), P();
  }
  function N(s) {
    _.value != s && (A.value = {}, _.value = s);
  }
  function P() {
    N(L.value[0] || {}), u();
  }
  function V(s, e) {
    return localStorage.getItem(`item_${s.publishedFileId}_${e}`);
  }
  function K(s, e, n) {
    s[e] = n, localStorage.setItem(`item_${s.publishedFileId}_${e}`, n);
  }
  function q(s) {
    let e = V(s, "enabled") === "true";
    e === false && ne(s), K(s, "enabled", !e);
  }
  function Q(s) {
    setTimeout(() => {
      s.target.scrollLeft = s.target.scrollWidth, s.target.setSelectionRange(s.target.value.length, s.target.value.length);
    }, 100);
  }
  async function J() {
    if (a.value = true, i.value == true) try {
      const s = window.electron.client.workshop.getSubscribedItems();
      if (s.length > 0) try {
        const n = (await window.electron.client.workshop.getItems(s)).items.filter((c) => c !== null);
        n.sort((c, I) => I.timeUpdated - c.timeUpdated), j.value = n, n.forEach(async (c) => {
          let I = V(c, "enabled");
          I === null ? I = true : I = I === "true", K(c, "enabled", I);
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
    if (a.value = true, i.value == true) {
      const s = window.electron.client.apps.appOwner(), e = window.electron.client.utils.getAppId();
      try {
        const c = (await window.electron.client.workshop.getUserItems(1, s.accountId, 0, 13, 0, { creator: e })).items;
        c.sort((I, G) => G.timeUpdated - I.timeUpdated), S.value = c;
      } catch (n) {
        console.error(n);
      }
    }
    a.value = false;
  }
  async function z() {
    try {
      a.value = true;
      const s = window.electron.client.utils.getAppId(), e = await window.electron.client.workshop.createItem(s), n = await window.electron.client.workshop.getItem(e.itemId), c = await window.electron.getFilePath("public/png/workshop-thumbnail.png"), I = { title: "New Workshop Item", description: "Workshop item description", previewPath: c, previewUrl: c };
      await p(n, I), a.value = false, Object.assign(n, I), S.value.unshift(n), P();
    } catch (s) {
      console.error(s);
    }
  }
  function u() {
    we(() => {
      const s = L.value.findIndex((e) => e == _.value);
      s >= 0 && F.value.children[s].scrollIntoView({ behavior: "smooth", block: "nearest" });
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
  async function x() {
    const s = await p(le(_.value), le(A.value));
    return A.value = {}, s;
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
    N(s);
    const e = await electron.dialog({ properties: ["openFile", "multiSelections"], filters: [{ name: "Level File(s)", extensions: ["json"] }, { name: "Skin File(s)", extensions: ["jpg", "png"] }, { name: "Mod File(s)", extensions: ["js"] }] });
    if (e.canceled == false) {
      const n = [ue(e.filePaths[0])];
      Object.assign(A.value, { contentPath: e.filePaths[0], tags: n });
    }
  }
  function ce(s, e) {
    s.title = e.target.value, A.value.title = e.target.value;
  }
  function pe(s, e) {
    s.description = e.target.value, A.value.description = e.target.value;
  }
  async function ve(s) {
    N(s);
    const e = await electron.dialog({ properties: ["openFile"], filters: [{ name: "Preview Image", extensions: ["png", "jpg", "gif"] }] });
    e.canceled == false && (s.previewUrl = e.filePaths[0], A.value.previewPath = e.filePaths[0]);
  }
  async function me() {
    await W(f.value), P();
  }
  return (s, e) => (l(), E(ee, { name: "fade-modal", onBeforeEnter: me }, { default: g(() => [t("div", pt, [t("div", { class: "workshop__background", onClick: e[0] || (e[0] = (n) => s.$emit("close")) }), t("div", vt, [t("div", mt, [t("div", ft, b(v(d).t("workshop.text.workshop")), 1), t("ul", _t, [(l(true), r(O, null, oe(T.value, (n) => (l(), r("li", { key: n.id }, [t("button", { class: se({ selected: f.value == n }), onClick: (c) => W(n) }, [t("span", gt, b(n.icon), 1), t("span", null, b(n.title), 1)], 10, wt)]))), 128))])]), t("div", bt, [t("div", kt, [te(t("input", { class: "workshop__search", "onUpdate:modelValue": e[1] || (e[1] = (n) => $.value = n), placeholder: `${v(d).t("popup.text.search")}...`, type: "text" }, null, 8, ht), [[_e, $.value]]), e[11] || (e[11] = t("button", { class: "search-icon", tabindex: "-1" }, [t("span", { class: "material-symbols-rounded" }, "search")], -1)), $.value.length > 0 ? (l(), r("button", { key: 0, class: "clear-icon", onClick: e[2] || (e[2] = (n) => H()) }, [...e[10] || (e[10] = [t("span", { class: "material-symbols-rounded" }, "close", -1)])])) : k("", true)]), t("ul", { class: "workshop__items-list", ref_key: "itemsRef", ref: F }, [t("li", null, [f.value.id == "subscriptions" ? (l(), r("button", { key: 0, class: "primary", onClick: e[3] || (e[3] = (n) => v(o).openLink("https://steamcommunity.com/workshop/browse/?appid=3208440", "_blank")) }, [e[12] || (e[12] = t("span", { class: "material-symbols-rounded" }, "add", -1)), t("span", null, b(v(d).t("workshop.text.browse_items")), 1)])) : f.value.id == "creations" ? (l(), r("button", { key: 1, class: "primary", onClick: e[4] || (e[4] = (n) => z()), disabled: i.value == false }, [e[13] || (e[13] = t("span", { class: "material-symbols-rounded" }, "add", -1)), t("span", null, b(v(d).t("workshop.text.create_item")), 1)], 8, yt)) : k("", true)]), L.value.length == 0 && a.value == false ? (l(), r("li", $t, [t("div", null, [i.value == true ? (l(), r("ol", xt, [...e[14] || (e[14] = [t("li", null, [t("span", null, [t("strong", null, "Browse"), h(" the Steam Workshop for community levels, skins, and mods.")])], -1), t("li", null, [t("span", null, [h("Select any item you want to download, then click "), t("strong", null, "Subscribe"), h(".")])], -1), t("li", null, [t("span", null, [h("If you do not see your in-game subscriptions, "), t("strong", null, "restart"), h(" Boxel 3D.")])], -1)])])) : (l(), r(O, { key: 1 }, [e[15] || (e[15] = t("p", null, [h("The Steam Workshop allows players to download & share community content such as "), t("strong", null, "levels"), h(", "), t("strong", null, "skins"), h(", & "), t("strong", null, "mods")], -1)), e[16] || (e[16] = t("p", null, "This feature is only available on Steam.", -1)), e[17] || (e[17] = t("p", null, [t("a", { href: "https://store.steampowered.com/app/3208440/Boxel_3D/", target: "_blank" }, [t("img", { src: "./svg/steam.svg" }), t("span", null, "Download on Steam")])], -1))], 64))])])) : k("", true), (l(true), r(O, null, oe(L.value, (n) => (l(), r("li", { key: n.publishedFileId }, [t("button", { class: se({ selected: _.value == n }), onClick: (c) => N(n) }, [t("img", { src: n.previewUrl || void 0, alt: n.title }, null, 8, Ct), f.value.id == "subscriptions" ? (l(), r("span", St, b(n.title), 1)) : (l(), r(O, { key: 1 }, [t("input", { type: "text", value: n.title, onChange: (c) => ce(n, c), onFocus: e[5] || (e[5] = (c) => Q(c)) }, null, 40, At), e[18] || (e[18] = t("span", { class: "accept material-symbols-rounded" }, "check", -1))], 64))], 10, It), f.value.id == "subscriptions" ? (l(), r("button", { key: 0, onClick: (c) => q(n), title: n.enabled ? "Enabled" : "Disabled" }, [n.enabled === true ? (l(), r("span", Lt, "select_check_box")) : (l(), r("span", Et, "check_box_outline_blank"))], 8, Ft)) : k("", true), f.value.id == "creations" ? (l(), r("button", { key: 1, onClick: (c) => de(n), title: "Upload new content (ex: My Level.json)" }, [...e[19] || (e[19] = [t("span", { class: "material-symbols-rounded" }, "folder_open", -1)])], 8, jt)) : k("", true), t("button", { onClick: (c) => v(o).openLink("https://steamcommunity.com/sharedfiles/filedetails/?id=" + n.publishedFileId, "_blank"), title: "View item" }, [...e[20] || (e[20] = [t("span", { class: "material-symbols-rounded" }, "link", -1)])], 8, Bt)]))), 128))], 512)]), t("div", Ut, [t("div", Nt, b(v(d).t("popup.text.info")), 1), t("div", Tt, [t("div", Mt, [t("img", { src: _.value.previewUrl || void 0, alt: _.value.description }, null, 8, Pt), _.value.label ? (l(), r("label", Vt, [t("span", null, b(_.value.label), 1)])) : k("", true), M.value(null) && f.value.id == "creations" && i.value == true ? (l(), r("button", { key: 1, onClick: e[6] || (e[6] = (n) => ve(_.value)) }, [e[21] || (e[21] = t("span", { class: "material-symbols-rounded" }, "edit", -1)), t("span", null, b(v(d).t("workshop.text.edit")), 1)])) : k("", true)]), t("div", Ot, [(l(), r("textarea", { disabled: f.value.id == "subscriptions", onChange: e[7] || (e[7] = (n) => pe(_.value, n)), key: _.value.publishedFileId }, b(_.value.description), 41, Dt)), e[22] || (e[22] = t("span", { class: "accept material-symbols-rounded" }, "check", -1))]), f.value.id == "creations" ? (l(), r("button", { key: 0, disabled: R.value == false, onClick: e[8] || (e[8] = (n) => x()) }, [...e[23] || (e[23] = [t("span", { class: "material-symbols-rounded" }, "save", -1), t("span", null, "Save", -1)])], 8, Rt)) : k("", true)])]), y(ee, { name: "loading" }, { default: g(() => [a.value ? (l(), r("div", Wt, [y(ct)])) : k("", true)]), _: 1 }), t("a", { class: "workshop__close", onClick: e[9] || (e[9] = (n) => s.$emit("close")), title: v(d).t("popup.button.close") }, [...e[24] || (e[24] = [t("span", { class: "material-symbols-rounded" }, "close", -1)])], 8, Kt)])])]), _: 1 }));
} }, zt = C(qt, [["__scopeId", "data-v-51bf431f"]]), Gt = { class: "ui" }, Ht = { class: "nav" }, Qt = { class: "cards" }, Jt = { class: "footer" }, Xt = { __name: "App", setup(m) {
  const o = ie(), d = new U(), i = new Le(), a = ge(i.getSettings()), F = be(new xe(H)), T = w(), j = w(false), S = w(false), f = w(false), _ = w("./v1/index.html" + document.location.search);
  let A = a.volume, M, $, L, R;
  function H() {
    L = F.get("background-island-night"), R = Ie.create("AmbientLight"), L.traverse(function(u) {
      u.isCamera && $.setCamera(u);
    }), $.setSize(window.innerWidth, window.innerHeight), $.scene.add(L, R), M.add((u) => N(u), 1e3 / 60), M.start(), V(), Q();
  }
  function W(u) {
    var p = F.get(u);
    p.play();
  }
  function N({ delta: u }) {
    S.value == false && (L.mixer.update(u / 1e3), $.render());
  }
  function P() {
    a.volume > 0 ? (A = a.volume, a.volume = 0) : a.volume = A || 0.5, V();
  }
  function V() {
    i.setSettings(a);
    const u = F.assetAudioLoader.listener, p = u.context.currentTime;
    u.gain.gain.setTargetAtTime(a.volume, p, 0);
  }
  function K(u, p = "_self", x = 0) {
    p == "_self" && (f.value = true, x = 250), setTimeout(() => {
      window.open(u, p);
    }, x);
  }
  function q() {
    document.documentElement.lang = o.locale.value;
  }
  function Q() {
    location.href.includes("workshop=true") && ($.render(), S.value = true);
  }
  function J() {
    document.addEventListener("keydown", z), document.addEventListener("click", function(u) {
      W("click");
    });
  }
  function X() {
    document.removeEventListener("keydown", z);
  }
  function z(u) {
    d.isElectronApp() && (u.code === "KeyI" && (u.ctrlKey && u.shiftKey || u.metaKey && u.shiftKey) ? window.electron.openDevTools() : u.code === "Escape" ? S.value == true ? S.value = false : window.electron.toggleFullScreen() : u.code === "F11" ? window.electron.toggleFullScreen() : u.code === "KeyQ" && u.metaKey && window.electron.quit());
  }
  return ke(o.locale, () => {
    q();
  }), he(function() {
    M = new Ce(), $ = new Se(T.value), F.load({ models: "./json/menu-models.json", textures: "./json/menu-textures.json", audio: "./json/menu-audio.json" }), J(), q();
  }), ye(function() {
    X();
  }), (u, p) => (l(), r(O, null, [t("canvas", { ref_key: "canvas", ref: T }, null, 512), t("div", Gt, [t("div", Ht, [y(Oe, { class: "left" }), y(qe, { assets: v(F), volume: a.volume, onClick: p[0] || (p[0] = (x) => {
    P();
  }) }, null, 8, ["assets", "volume"]), y(Re), y(Pe, { onClick: p[1] || (p[1] = (x) => {
    j.value = true;
  }) })]), y(Ne, null, { default: g(() => [h(b(v(o).t("home.title")), 1)]), _: 1 }), t("div", Qt, [y(Z, { src: "./svg/button-steam.svg", onClick: p[2] || (p[2] = (x) => {
    S.value = true;
  }) }, { default: g(() => [h(b(v(o).t("home.button.workshop")), 1)]), _: 1 }), v(d).isNativeApp() == false ? (l(), E(Z, { key: 0, src: "./svg/button-android.svg", onClick: p[3] || (p[3] = (x) => {
    j.value = true;
  }), class: "pulse" }, { default: g(() => [h(b(v(o).t("home.button.android")), 1)]), _: 1 })) : k("", true), y(Z, { src: "./svg/button-play-pro.svg", onClick: p[4] || (p[4] = (x) => K(_.value)) }, { default: g(() => [h(b(v(o).t("home.button.play")), 1)]), _: 1 })]), t("div", Jt, [y(Ge)]), te(y(it, { onClose: p[5] || (p[5] = (x) => j.value = false) }, null, 512), [[ae, j.value == true]]), te(y(zt, { onClose: p[6] || (p[6] = (x) => S.value = false) }, null, 512), [[ae, S.value == true]]), y(Ae), t("div", { class: se(["fade-exit", { "is-exiting": f.value }]) }, null, 2)])], 64));
} }, Yt = C(Xt, [["__scopeId", "data-v-78736ea5"]]), re = $e(Yt);
re.use(Ee);
re.mount("#app");
