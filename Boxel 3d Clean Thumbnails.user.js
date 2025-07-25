// ==UserScript==
// @name         Boxel 3d Clean Thumbnails
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  A mod that temporarily sets the player skin to pink when saving thumbnails
// @author       Charlieee1
// @match        *charlieee1.github.io/Boxel-3d-Mods/boxel-3d/v1/index.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    originalSaveThumbnail = app.storage.saveThumbnail;
    app.storage.saveThumbnail = t => {
        const s = app.player.skin.url;
        app.player.setSkin({ url: "../png/pink.png" });
        app.updateRender(0, 0);
        setTimeout(() => {
            originalSaveThumbnail(t);
            app.player.setSkin({ url: s });
        }, 2);
    };

    // Mod List
    addModToList("clean thumbnails");
})();
