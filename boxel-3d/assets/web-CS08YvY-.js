import { W as t } from "./i18n-C3c_c4US.js";
import "./SkeletonUtils-CqlbfaSM.js";
class o extends t {
  constructor() {
    super(), this.handleVisibilityChange = () => {
      const e = { isActive: document.hidden !== true };
      this.notifyListeners("appStateChange", e), document.hidden ? this.notifyListeners("pause", null) : this.notifyListeners("resume", null);
    }, document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
  }
  exitApp() {
    throw this.unimplemented("Not implemented on web.");
  }
  async getInfo() {
    throw this.unimplemented("Not implemented on web.");
  }
  async getLaunchUrl() {
    return { url: "" };
  }
  async getState() {
    return { isActive: document.hidden !== true };
  }
  async minimizeApp() {
    throw this.unimplemented("Not implemented on web.");
  }
  async toggleBackButtonHandler() {
    throw this.unimplemented("Not implemented on web.");
  }
}
export {
  o as AppWeb
};
