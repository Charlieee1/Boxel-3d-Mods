// ==UserScript==
// @name         Boxel 3d Deterministic Patch
// @namespace    http://tampermonkey.net/
// @version      v1.0.2
// @description  A failed attempt at making boxel 3d deterministic
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const originalDateNow = Date.now;

(function() {
    // Make sure the velocity is set to 0 at the start of a level
    let alreadyReset = false;
    afterLevelStart.push(() => {
        if (alreadyReset) {
            alreadyReset = false;
            return;
        }
        alreadyReset = true;
        nextFrameUpdateFunction(() => {
            // Pray that the user didn't do anything in the first 1 frame
            pause();
            app.level.children.forEach((child) => {
                if (child.body.isStatic) return;
                Matter.Body.setPosition(child, {x: child.positionOrigin, y: -child.positionOrigin});
                Matter.Body.setAngle(child, -child.rotationOrigin);
                Matter.Body.setVelocity(child, {x: 0, y: 0});
                Matter.Body.setAngularVelocity(child, 0);
            });
            app.level.retryLevel();
        });
    });

    // Date.now coding warcrimes
    let fakeTime = 0;
    let fakeTimeEvery3Frames = 0;
    let counter = 0;
    let incrementConstant = 1 / 60; // Duration of one frame
    Date.now = () => {
        return fakeTime;
    };
    addUpdateFunction(() => {
        fakeTime += incrementConstant;
        counter += 1;
        counter %= 3;
        // Every 3 frames, correct the time to remove large rounding errors
        if (counter == 0) {
            fakeTimeEvery3Frames += .05;
            fakeTime = fakeTimeEvery3Frames;
        }
    });

    // Make the in game timer not at all lenient to lag (as it is normally)
    // All of this is doppler's minified code with Date.now replaced with originalDateNow
    // And this replaced with app.timer
    app.timer.pause = () => {
        app.timer.pauseTime = originalDateNow()
    };
    app.timer.reset = () => {
        var e = originalDateNow();
        app.timer.startTime = e,
        app.timer.pauseTime = e,
        app.timer.playTime = 0
    };
    app.timer.resume = () => {
        app.timer.playTime += originalDateNow() - app.timer.pauseTime
    };
    app.timer.getPlayTime = () => {
        var e = originalDateNow() - app.timer.startTime - app.timer.playTime;
        return e
    };

    // Mod list
    addModToList("deterministic patch");
})();
