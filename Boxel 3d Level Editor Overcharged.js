// IN BETA

// Basic utility functions
// https://stackoverflow.com/a/32922084
function deepEqual(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (
        ok(x).length === ok(y).length &&
        ok(x).every(key => deepEqual(x[key], y[key]))
    ) : (x === y);
}

var buttons = [];

function addButton(title, callback) {
    let newButton = document.createElement("a");
    newButton.className = "item";
    newButton.title = title;
    newButton.addEventListener("click", callback);

    let icon = document.createElement("img");
    icon.src = "../svg/cube.svg";

    newButton.appendChild(icon);
    buttons.push(newButton);
}
function canDoAction() {
    // It's tempting to forget about clean code and golf this function
    if (app.state != "level-editor") return; // Make sure user has a level open in the editor
    if (document.getElementsByClassName("dialog").length != 0) return; // Make sure user does not have a popup open
    if (app.play) return; // Make sure user is not playing the level
    return true;
}

function getCoords(object) {
    return {
        x: object.position.x,
        y: object.position.y,
        z: object.position.z,
        rx: object.rotation.x,
        ry: object.rotation.y,
        rz: object.rotation.z,
        sx: object.scale.x,
        sy: object.scale.y,
        sz: object.scale.z
    };
}
function rotatePoint(x, y, z, rotation) {
    let newX;
    let newY;
    let newZ;
    let thetaX = rotation.x;
    let thetaY = rotation.y;
    let thetaZ = rotation.z;
    let cos;
    let sin;

    // Tranform with rotation matrices
    // Z
    cos = Math.cos(thetaZ);
    sin = Math.sin(thetaZ);
    newX = cos * x - sin * y;
    newY = sin * x + cos * y;
    x = newX;
    y = newY;
    // Y
    cos = Math.cos(thetaY);
    sin = Math.sin(thetaY);
    newX = cos * x + sin * z;
    newZ = -sin * x + cos * z;
    x = newX;
    z = newZ;
    // X
    cos = Math.cos(thetaX);
    sin = Math.sin(thetaX);
    newY = cos * y - sin * z;
    newZ = sin * y + cos * z;
    y = newY;
    z = newZ;

    return [x, y, z];
}

function updateObject(obj) {
    app.levelEditor.updateRender();

    // START Modified Doppler's code
    var e = obj;
    app.levelEditor.keys.ShiftLeft ? app.levelEditor.controlsTransform.offset.copy(e.position).sub(e.position0) : app.levelEditor.controlsTransform.offset.set(0, 0, 0), e.position.z == 0 ? e.body.collisionFilter.mask = -1 : e.body.collisionFilter.mask = 0, e.setPosition(e.getPosition());
    var t = e.rotation.z;
    e.setRotation(0, false), e.setBodyScale(e.scale.x / e.scale0?.x || 1, e.scale.y / e.scale0?.y || 1), e.setRotation(t, false), e.setScale(e.getScale()), e.setRotation(e.getRotation()), app.levelHistory.save("Object updated", app);
    // END Modified Doppler's code

    window.dispatchEvent(new CustomEvent("objectChange", { detail: obj }));
    app.levelEditor.controlsTransform.dispatchEvent(new CustomEvent("change"));
}
function fullUpdateObject(obj) {
    app.levelEditor.updateRender();
    let selected = app.selectedObject;

    app.selectedObject = obj;
    app.levelEditor.updateSelectedObject();

    app.selectedObject = selected;

    window.dispatchEvent(new CustomEvent("objectChange", { detail: obj }));
    app.levelEditor.controlsTransform.dispatchEvent(new CustomEvent("change"));

    // Calculate current body scale
    let v1 = obj.body.vertices[2]; // Bottom left
    let v2 = obj.body.vertices[3]; // Bottom right
    let v3 = obj.body.vertices[1]; // Top left
    let dx1 = v2.x - v1.x;
    let dx2 = v3.x - v1.x;
    let dy1 = v2.y - v1.y;
    let dy2 = v3.y - v1.y;
    let sx = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    let sy = Math.sqrt(dx2 * dx2 + dy2 * dy2);

    // Set new body scale
    obj.setBodyScale(
        obj.scale.x / sx,
        obj.scale.y / sy
    );
}

function deselectObject() {
    app.level.deselectLevel(app);
    app.levelEditor.controlsTransform.detach();
    window.dispatchEvent(new CustomEvent("setSelectedObject"));
    app.mouse.mode = app.mouse.prevMode;
}
function resetObjectColour(obj) {
    if (!obj.originalColour) return;
    obj.setColors(obj.originalColour);
    delete obj.originalColour;
}
function resetObjectsColours(objs) {
    objs.forEach(obj => {
        resetObjectColour(obj);
    });
}

// Animate selection objects to make them easier to spot and also to look cool
// Whether to animate control blocks or not
if (!Object.keys(localStorage).includes("controlBlockColour")) {
    localStorage.controlBlockColour = "animated";
}
var animatedObjects = [];
function removeAnimatedObject(obj) {
    if (!(obj in animatedObjects)) return;
    animatedObjects.splice(animatedObjects.indexOf(obj), 1);
}
var prevAnimationUpdate = 0;
var SCALE = Math.PI / 1500;
if (localStorage.controlBlockColour == "animated") {
    function animate() {
        if (Date.now() - prevAnimationUpdate >= 100) {
            let time = Date.now();
            prevAnimationUpdate = time;
            let colour = Math.round(127.5 * Math.sin(SCALE * time) + 127.5);
            animatedObjects.forEach(object => {
                object.setColors(`#ff${colour.toString(16).padStart(2, "0")}00`, true);
            });
        }
        app.levelEditor.updateRender();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

function createControlBlock(x, y, z) {
    let controlBlock = app.level.entityFactory.createObject("cube");
    let colour = localStorage.controlBlockColour;
    if (colour == "animated")
        colour = `#ff${Math.round(127.5 * Math.sin(SCALE * Date.now()) + 127.5).toString(16).padStart(2, "0")}00`;
    app.level.setObjectProperties(controlBlock, {
        class: "cube",
        color: colour,
        isStatic: true,
        position: {
            x: x,
            y: y,
            z: z
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: {
            x: .5 * app.BOX_SIZE,
            y: .5 * app.BOX_SIZE,
            z: .5 * app.BOX_SIZE
        }
    });
    app.level.addObject(controlBlock, app);
    animatedObjects.push(controlBlock);
    updateObject(controlBlock);
    return controlBlock;
}
// Make sure to call deselectObject() whenever using this
function deleteControlBlock(block) {
    removeAnimatedObject(block);
    app.level.removeObject(block, app, true);
}
function listenForControlBlockUpdate(block, callback) {
    let prev = getCoords(block);
    let eventListenerFunc = () => {
        let newCoords = getCoords(block);
        if (!deepEqual(prev, newCoords)) {
            prev = newCoords;
            callback();
            return;
        }
    };

    window.addEventListener("objectChange", eventListenerFunc);
    return () => {
        window.removeEventListener("objectChange", eventListenerFunc);
    };
}
function listenForControlBlocksUpdate(blocks, callback) {
    let clearListenerFuncs = [];
    if (Array.isArray(blocks)) {
        blocks.forEach(block => {
            clearListenerFuncs.push(listenForControlBlockUpdate(block, callback));
        });
    } else {
        Object.keys(blocks).forEach(key => {
            clearListenerFuncs.push(listenForControlBlockUpdate(blocks[key], callback));
        });
    }
    return () => {
        clearListenerFuncs.forEach(func => {
            func();
        });
    };
}

// To ensure only one action is used at a time
var actionEnabled = false;

var actions = {
    confirm: () => { },
    cancel: () => { }
};

// TODO: Handle undo & redo (haha yeah right) (technically the game already handles it as single object modifications, and who cares about polished features anyways?)

// TODO: Support duplication and deletion
// Handle selecting objects via box selection
function multiSelectStage1() {
    if (actionEnabled) return;
    if (!canDoAction()) return;
    actionEnabled = "multiselect-selection";
    deselectObject();
    let block1 = createControlBlock(app.camera.position.x - 16 * 5, app.camera.position.y - 16 * 5, -16);
    let block2 = createControlBlock(app.camera.position.x + 16 * 5, app.camera.position.y + 16 * 5, 16);
    app.levelEditor.updateRender();

    let selectedObjects = [];
    function findSelectedObjects(colour = true) {
        let objs = [];
        app.level.children.forEach(child => {
            if (child.position.x < block1.position.x || child.position.x > block2.position.x) return;
            if (child.position.y < block1.position.y || child.position.y > block2.position.y) return;
            if (child.position.z < block1.position.z || child.position.z > block2.position.z) return;
            if (child == block1 || child == block2 || child == app.player) return;
            objs.push(child);
            if (colour) {
                child.originalColour = child.color;
                if (child.color == "#ffffff")
                    child.setColors("#00ffff");
                else
                    child.setColors("#ffffff");
                updateObject(child);
            }
        });
        return objs;
    }

    selectedObjects = findSelectedObjects();
    let clearListener = listenForControlBlocksUpdate([block1, block2], () => {
        resetObjectsColours(selectedObjects);
        selectedObjects = findSelectedObjects();
    });

    actions.confirm = () => {
        clearListener();
        deleteControlBlock(block1);
        deleteControlBlock(block2);
        deselectObject();
        actions.confirm = () => { };
        actions.cancel = () => { };
        multiSelectStage2(selectedObjects); // Now it's getting serious
    };

    actions.cancel = () => {
        clearListener();
        deleteControlBlock(block1);
        deleteControlBlock(block2);
        deselectObject();
        actions.confirm = () => { };
        actions.cancel = () => { };
        actionEnabled = false;
        resetObjectsColours(selectedObjects);
    };
}
// Handle precise object selection
function multiSelectStage2(selectedObjectsOriginal) {
    if (actionEnabled && actionEnabled != "multiselect-selection") return;
    if (!canDoAction()) return;
    let selectedObjects = selectedObjectsOriginal;
    function objectSelected() {
        let obj = app.selectedObject;
        if (!obj) return;
        if (selectedObjects.includes(obj)) {
            selectedObjects.splice(selectedObjects.indexOf(obj), 1);
            resetObjectColour(obj);
        } else {
            selectedObjects.push(obj);
            obj.originalColour = obj.color;
            if (obj.color == "#ffffff")
                obj.setColors("#00ffff");
            else
                obj.setColors("#ffffff");
            updateObject(obj);
        }
        deselectObject();
    }
    window.addEventListener("setSelectedObject", objectSelected);

    actions.confirm = () => {
        window.removeEventListener("setSelectedObject", objectSelected);
        deselectObject();
        actions.confirm = () => { };
        actions.cancel = () => { };
        resetObjectsColours(selectedObjects);
        multiSelectStage3(selectedObjects); // Now it's getting REALLY serious
    };

    actions.cancel = () => {
        window.removeEventListener("setSelectedObject", objectSelected);
        deselectObject();
        actions.confirm = () => { };
        actions.cancel = () => { };
        actionEnabled = false;
        resetObjectsColours(selectedObjects);
    };
}
// Handle modifying objects
function multiSelectStage3(smallBoiBlocks) {
    actionEnabled = "multiselect-modification";

    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;

    originalStats = [];
    smallBoiBlocks.forEach(smallBoi => {
        if (smallBoi.position.x + .5 * Math.abs(smallBoi.scale.x) > maxX)
            maxX = smallBoi.position.x + .5 * Math.abs(smallBoi.scale.x);
        if (smallBoi.position.x - .5 * Math.abs(smallBoi.scale.x) < minX)
            minX = smallBoi.position.x - .5 * Math.abs(smallBoi.scale.x);

        if (smallBoi.position.y + .5 * Math.abs(smallBoi.scale.y) > maxY)
            maxY = smallBoi.position.y + .5 * Math.abs(smallBoi.scale.y);
        if (smallBoi.position.y - .5 * Math.abs(smallBoi.scale.y) < minY)
            minY = smallBoi.position.y - .5 * Math.abs(smallBoi.scale.y);

        if (smallBoi.position.z + .5 * Math.abs(smallBoi.scale.z) > maxZ)
            maxZ = smallBoi.position.z + .5 * Math.abs(smallBoi.scale.z);
        if (smallBoi.position.z - .5 * Math.abs(smallBoi.scale.z) < minZ)
            minZ = smallBoi.position.z - .5 * Math.abs(smallBoi.scale.z);

        originalStats.push(getCoords(smallBoi));
    });

    let midX = .5 * (minX + maxX);
    let midY = .5 * (minY + maxY);
    let midZ = .5 * (minZ + maxZ);
    let scaleX = maxX - minX;
    let scaleY = maxY - minY;
    let scaleZ = maxZ - minZ;
    let bigBoiBlock = createControlBlock(midX, midY, midZ);
    bigBoiBlock.setScale({ x: scaleX, y: scaleY, z: scaleZ });
    bigBoiBlock.shapes.setOpacities(.1);
    bigBoiBlock.material.transparent = true;
    app.levelEditor.updateRender();
    let setTranslucent = () => {
        bigBoiBlock.shapes.setOpacities(.1);
        bigBoiBlock.material.transparent = true;
        app.levelEditor.updateRender();
    };
    window.addEventListener("setSelectedObject", setTranslucent);

    function updateSmallBoi(i) {
        smallBoi = smallBoiBlocks[i];
        original = originalStats[i];
        let factorX = bigBoiBlock.scale.x / scaleX;
        let factorY = bigBoiBlock.scale.y / scaleY;
        let factorZ = bigBoiBlock.scale.z / scaleZ;
        let posX = factorX * (original.x - midX);
        let posY = factorY * (original.y - midY);
        let posZ = factorZ * (original.z - midZ);

        [posX, posY, posZ] = rotatePoint(posX, posY, posZ, bigBoiBlock.rotation);
        posX += bigBoiBlock.position.x;
        posY += bigBoiBlock.position.y;
        posZ += bigBoiBlock.position.z;

        smallBoi.positionOrigin.x = smallBoi.position.x = posX;
        smallBoi.positionOrigin.y = smallBoi.position.y = posY;
        smallBoi.positionOrigin.z = smallBoi.position.z = posZ;
        smallBoi.scaleOrigin.x = smallBoi.scale.x = original.sx * factorX;
        smallBoi.scaleOrigin.y = smallBoi.scale.y = original.sy * factorY;
        smallBoi.scaleOrigin.z = smallBoi.scale.z = original.sz * factorZ;
        smallBoi.rotationOrigin.x = smallBoi.rotation.x = original.rx + bigBoiBlock.rotation.x;
        smallBoi.rotationOrigin.y = smallBoi.rotation.y = original.ry + bigBoiBlock.rotation.y;
        smallBoi.rotationOrigin.z = smallBoi.rotation.z = original.rz + bigBoiBlock.rotation.z;
        fullUpdateObject(smallBoi);
    }

    function updateSmallBois() {
        for (let i = 0; i < smallBoiBlocks.length; i++) {
            updateSmallBoi(i);
        }
    }

    let clearListener = listenForControlBlockUpdate(bigBoiBlock, () => {
        updateSmallBois();
    });

    actions.confirm = () => {
        clearListener();
        window.removeEventListener("setSelectedObject", setTranslucent);
        deleteControlBlock(bigBoiBlock);
        deselectObject();
        actions.confirm = () => { };
        actions.cancel = () => { };
        actionEnabled = false;
        app.level.refreshLevel(app);
    }

    actions.cancel = () => {
        clearListener();
        window.removeEventListener("setSelectedObject", setTranslucent);

        let originalBigBoi = bigBoiBlock;
        bigBoiBlock = {
            position: { x: midX, y: midY, z: midZ },
            scale: { x: scaleX, y: scaleY, z: scaleZ },
            rotation: { x: 0, y: 0, z: 0 }
        };
        updateSmallBois();

        deleteControlBlock(originalBigBoi);
        deselectObject();
        actions.confirm = () => { };
        actions.cancel = () => { };
        actionEnabled = false;
    }
}

// TODO: make this work with rotation
function singleDirectionScaling() {
    let obj = app.selectedObject;
    if (!obj) return;
    if (actionEnabled && actionEnabled != "multiselect-modification") return;
    if (!canDoAction()) return;

    let multiSelectEnabled = actionEnabled == "multiselect-modification";
    actionEnabled = "singledirectionscaling";
    deselectObject();
    var original = {
        scale: {
            x: obj.scaleOrigin.x,
            y: obj.scaleOrigin.y,
            z: obj.scaleOrigin.z
        },
        position: {
            x: obj.positionOrigin.x,
            y: obj.positionOrigin.y,
            z: obj.positionOrigin.z
        }
    };

    let controlBlocks = {
        left: createControlBlock(obj.position.x - obj.scale.x * .5, obj.position.y, obj.position.z),
        right: createControlBlock(obj.position.x + obj.scale.x * .5, obj.position.y, obj.position.z),
        top: createControlBlock(obj.position.x, obj.position.y + obj.scale.y * .5, obj.position.z),
        bottom: createControlBlock(obj.position.x, obj.position.y - obj.scale.y * .5, obj.position.z),
        front: createControlBlock(obj.position.x, obj.position.y, obj.position.z + obj.scale.z * .5),
        back: createControlBlock(obj.position.x, obj.position.y, obj.position.z - obj.scale.z * .5)
    };

    function getCoords() {
        return {
            left: controlBlocks.left.position.x,
            right: controlBlocks.right.position.x,
            top: controlBlocks.top.position.y,
            bottom: controlBlocks.bottom.position.y,
            front: controlBlocks.front.position.z,
            back: controlBlocks.back.position.z,
        };
    }

    function updateScale() {
        let coords = getCoords();

        let width = coords.right - coords.left;
        let height = coords.top - coords.bottom;
        let depth = coords.front - coords.back;
        let x = .5 * (coords.left + coords.right);
        let y = .5 * (coords.top + coords.bottom);
        let z = .5 * (coords.front + coords.back);

        obj.positionOrigin.x = x;
        obj.position.x = x;
        obj.scaleOrigin.x = width;
        obj.scale.x = width;

        obj.positionOrigin.y = y;
        obj.position.y = y;
        obj.scaleOrigin.y = height;
        obj.scale.y = height;

        obj.positionOrigin.z = z;
        obj.position.z = z;
        obj.scaleOrigin.z = depth;
        obj.scale.z = depth;

        updateObject(obj);

        // Update the control block positions
        (() => {
            controlBlocks.left.positionOrigin.y = y;
            controlBlocks.left.positionOrigin.z = z;
            controlBlocks.left.position.y = y;
            controlBlocks.left.position.z = z;

            controlBlocks.right.positionOrigin.y = y;
            controlBlocks.right.positionOrigin.z = z;
            controlBlocks.right.position.y = y;
            controlBlocks.right.position.z = z;

            controlBlocks.top.positionOrigin.x = x;
            controlBlocks.top.positionOrigin.z = z;
            controlBlocks.top.position.x = x;
            controlBlocks.top.position.z = z;

            controlBlocks.bottom.positionOrigin.x = x;
            controlBlocks.bottom.positionOrigin.z = z;
            controlBlocks.bottom.position.x = x;
            controlBlocks.bottom.position.z = z;

            controlBlocks.front.positionOrigin.x = x;
            controlBlocks.front.positionOrigin.y = y;
            controlBlocks.front.position.x = x;
            controlBlocks.front.position.y = y;

            controlBlocks.back.positionOrigin.x = x;
            controlBlocks.back.positionOrigin.y = y;
            controlBlocks.back.position.x = x;
            controlBlocks.back.position.y = y;
        })();
    }

    let clearListener = listenForControlBlocksUpdate(controlBlocks, updateScale);

    let prevConfirmAction = actions.confirm;
    let prevCancelAction = actions.cancel;
    if (!multiSelectEnabled) {
        delete prevConfirmAction;
        delete prevCancelAction;
    }
    actions.confirm = () => {
        clearListener();
        Object.keys(controlBlocks).forEach(key => {
            deleteControlBlock(controlBlocks[key]);
        });
        deselectObject();
        actions.confirm = () => { };
        actions.cancel = () => { };
        actionEnabled = false;
        fullUpdateObject(obj);
        if (multiSelectEnabled) {
            actions.confirm = prevConfirmAction;
            actions.cancel = prevCancelAction;
        }
    };

    actions.cancel = () => {
        clearListener();
        Object.keys(controlBlocks).forEach(key => {
            let block = controlBlocks[key];
            removeAnimatedObject(block);
            app.level.removeObject(block, app, true);
        });
        deselectObject();
        actions.confirm = prevConfirmAction;
        actions.cancel = prevCancelAction;
        actionEnabled = false;

        obj.positionOrigin.x = original.position.x;
        obj.position.x = original.position.x;
        obj.scaleOrigin.x = original.scale.x;
        obj.scale.x = original.scale.x;

        obj.positionOrigin.y = original.position.y;
        obj.position.y = original.position.y;
        obj.scaleOrigin.y = original.scale.y;
        obj.scale.y = original.scale.y;

        obj.positionOrigin.z = original.position.z;
        obj.position.z = original.position.z;
        obj.scaleOrigin.z = original.scale.z;
        obj.scale.z = original.scale.z;

        fullUpdateObject(obj);

        if (multiSelectEnabled)
            actions.cancel = prevactions.cancel;
    };
}

function toggleIntangibility() {
    let obj = app.selectedObject;
    if (!obj) return;
    if (!canDoAction()) return; // Technically this should never be true, it's just a safety measure
    if (obj.positionOrigin.z == 0) {
        obj.positionOrigin.z = -1e-6;
        obj.position.z = -1e-6;
    } else if (obj.positionOrigin.z == -1e-6) {
        obj.positionOrigin.z = 0;
        obj.position.z = 0;
    } else return;

    updateObject(obj);
}

// TODO: Add icons for the buttons
addButton("Multiselect", multiSelectStage1);
addButton("Single direction scaling", singleDirectionScaling);
addButton("Toggle intagibility", toggleIntangibility);
// TODO: Add buttons for plugins
addButton("Confirm action", () => {
    actions.confirm();
});
addButton("Cancel action", () => {
    actions.cancel();
});
window.addEventListener("keypress", e => {
    let key = e.key;
    switch (key) {
        case "1":
            multiSelectStage1();
            break;
        case "2":
            multiSelectStage2([]);
            break;
        case "3":
            toggleIntangibility();
            break;
        case "y": // "t" is already taken by TAS mod
            singleDirectionScaling();
            break;
        case "c":
            actions.confirm();
            break;
        case "v":
            actions.cancel();
            break;
        default:
            break;
    }
});

// TODO: Add menu element for plugin input settings

// Lock other vanilla actions while user is using a mod action
// I wish I could override the proper functions, but they are not accessible from the global scope
// and I don't know the path to get to it with .bind
// Prevent exiting level
app.levelEditor.originalExitLevel = app.levelEditor.exitLevel;
app.level.originalDeselectLevel = app.level.deselectLevel;
app.levelEditor.controlsOrbit.originalReset = app.levelEditor.controlsOrbit.reset;
app.levelEditor.controlsTransform.originalDetach = app.levelEditor.controlsTransform.detach;
app.originalStartLevel = app.startLevel;
app.levelEditor.exitLevel = () => {
    if (actionEnabled) return;
    app.levelEditor.originalExitLevel();
};
// Prevent playing level
app.level.deselectLevel = (app) => {
    if (actionEnabled) return;
    app.level.originalDeselectLevel(app);
};
app.levelEditor.controlsOrbit.reset = () => {
    if (actionEnabled) return;
    app.levelEditor.controlsOrbit.originalReset();
};
app.levelEditor.controlsTransform.detach = () => {
    if (actionEnabled) return;
    app.levelEditor.controlsTransform.originalDetach();
};
app.startLevel = () => {
    if (actionEnabled) {
        // Doesn't work and I don't know what s is
        // s.value = true;
        // So I do this infinitely cursed alternative instead (which definitely makes some of my code redundant)
        document.getElementsByClassName("item")[9].click(); // Pause the level
        app.background.visible = false;
        app.levelEditor.controlsOrbit.enabled = true;
        return;
    }
    app.originalStartLevel();
};

window.addEventListener("pageMounted", e => {
    if (e.detail != "level-editor") return;
    setTimeout(() => {
        if (app.state != "level-editor") return;

        // Now the code confirmed the user is in the level editor
        let topBar = document.getElementsByClassName("options-level")[0];
        let referenceElement = document.getElementsByClassName("item")[10];
        buttons.reverse();
        buttons.forEach(b => {
            referenceElement.insertAdjacentElement("afterend", b);
        });
        buttons.reverse();
    }, 0);
});
