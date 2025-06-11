import { W as t } from "./i18n-5yZ2xy_o.js";
import "./SkeletonUtils-ChRJV-qR.js";
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
}
export {
  o as AppWeb
};
