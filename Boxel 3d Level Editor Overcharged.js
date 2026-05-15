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

function getCanvas() {
    return document.getElementById("app").children[0];
}

// Listen for pure clicks without drags
const mouseClickEvents = new Map();
function addMouseClickEventListener(func, element) {
    if (!mouseClickEvents.get(element))
        mouseClickEvents.set(element, []);
    mouseClickEvents.get(element).push(func);
}
function removeMouseClickEventListener(func, element) {
    if (!mouseClickEvents.get(element)) return;
    if (mouseClickEvents.get(element).includes(func)) {
        mouseClickEvents.get(element).splice(mouseClickEvents.get(element).indexOf(func), 1);
    }
}
const eventListener = {
    mouseDownPos: { x: 0, y: 0 },
    mouseMoved: false,

    mousedown(e) {
        this.mouseDownPos = {
            x: e.clientX,
            y: e.clientY
        };
        this.mouseMoved = false;
        e.currentTarget.addEventListener("pointermove", this.boundMouseMove);
    },

    mousemove(e) {
        if (this.mouseMoved) return;
        if (
            Math.abs(e.clientX - this.mouseDownPos.x) > 5 ||
            Math.abs(e.clientY - this.mouseDownPos.y) > 5
        ) {
            this.mouseMoved = true;
        }
    },

    mouseup(e) {
        e.currentTarget.removeEventListener("pointermove", this.boundMouseMove);
        if (this.mouseMoved) return;
        mouseClickEvents.get(e.currentTarget).forEach(func => { func(e); });
    }
};
eventListener.boundMouseDown = eventListener.mousedown.bind(eventListener);
eventListener.boundMouseMove = eventListener.mousemove.bind(eventListener);
eventListener.boundMouseUp = eventListener.mouseup.bind(eventListener);
function startMouseClickListener(element) {
    element.addEventListener("pointerdown", eventListener.boundMouseDown);
    element.addEventListener("pointerup", eventListener.boundMouseUp);
}
function stopMouseClickListener(element) {
    element.removeEventListener("pointerdown", eventListener.boundMouseDown);
    element.removeEventListener("pointerup", eventListener.boundMouseUp);
}
function setupMouseClickListener(func, element) {
    addMouseClickEventListener(func, element);
    startMouseClickListener(element);
}
function setdownMouseClickListener(func, element) {
    removeMouseClickEventListener(func, element);
    stopMouseClickListener(element);
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
    if (strongDisableAction) return;
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
// Projects a ray from the camera to the mouse to the z=0 plane and returns the intersection point
function getCoordsFromMouse(e, snap = true) {
    let pos = app.mouse.getPosition(e, app);
    if (snap) {
        pos.x = app.mouse.snapToValue(pos.x, app.mouse.snap);
        pos.y = app.mouse.snapToValue(pos.y, app.mouse.snap);
    }
    return pos;
}
// Same thing but an arbitrary z-offset for the plane
function getCoordsFromMouseZ(e, zOffset, snap = true) {
    app.camera.position.z -= zOffset;
    let pos = getCoordsFromMouse(e, snap);
    app.camera.position.z += zOffset;
    return pos;
}
// Same thing but finding the block the user is clicking on instead
function getBlockPointedAt(e) {
    return app.mouse.clickObject(e, app);
}

// Disables vanilla mouse clicking functionality
const originalMouseDown = app.mouse.mouseDown;
const originalMouseUp = app.mouse.mouseUp;
function disableVanillaClicking() {
    app.mouse.mouseDown =
    app.mouse.mouseUp = () => {};
}
function enableVanillaClicking() {
    app.mouse.mouseDown = originalMouseDown;
    app.mouse.mouseUp = originalMouseUp;
}

// Disables vanilla camera movement functionality
function disableVanillaCamMove() {
    app.levelEditor.controlsOrbit.enablePan = false;
    app.levelEditor.controlsOrbit.enableRotate = false;
    app.levelEditor.controlsOrbit.enableZoom = false;
}
function enableVanillaCamMove() {
    app.levelEditor.controlsOrbit.enablePan = true;
    app.levelEditor.controlsOrbit.enableRotate = true;
    app.levelEditor.controlsOrbit.enableZoom = true;
}

function updateObject(obj) {
    app.levelEditor.updateRender();

    let tempSelectedObject = app.selectedObject;
    app.selectedObject = obj;
    // app.levelEditor.updateSelectedObject();
    app.levelEditor.updateRender();
    app.selectedObject = tempSelectedObject;
    // obj.updateMatrixWorld();

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
    app.levelEditor.updateRender();
    app.mouse.mode = app.mouse.prevMode;
    app.selectedObject = null;
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
var strongDisableAction = false;

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
    function objectSelected(e) {
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

    // Listen for duplication
    let duplicated = false; // Whether the selection has been duplicated or not already
    let initial; // The local origin for duplication
    let delta = { x: 0, y: 0, z: 0 }; // How much to move the object by after duplication
    let originalDuplicateSelectedObject = app.levelEditor.duplicateSelectedObject;
    app.levelEditor.duplicateSelectedObject = e => {
        if (app.selectedObject != bigBoiBlock) {
            originalDuplicateSelectedObject(e);
            return;
        }
        smallBoiBlocks.forEach(boi => {
            app.level.duplicateObject(boi, app);
        });
        // Handle duplicating in a direction
        if (duplicated) {
            delta = {
                x: bigBoiBlock.position.x - initial.x,
                y: bigBoiBlock.position.y - initial.y,
                z: bigBoiBlock.position.z - initial.z
            };
        }
        initial = {
            x: bigBoiBlock.position.x,
            y: bigBoiBlock.position.y,
            z: bigBoiBlock.position.z
        };
        bigBoiBlock.positionOrigin.x += delta.x;
        bigBoiBlock.positionOrigin.y += delta.y;
        bigBoiBlock.positionOrigin.z += delta.z;
        bigBoiBlock.position.x += delta.x;
        bigBoiBlock.position.y += delta.y;
        bigBoiBlock.position.z += delta.z;
        fullUpdateObject(bigBoiBlock);
        updateSmallBois();
        duplicated = true;
    };
    // Listen for deletion
    let originalDeleteSelectedObject = app.levelEditor.deleteSelectedObject;
    app.levelEditor.deleteSelectedObject = e => {
        if (app.selectedObject != bigBoiBlock) {
            originalDeleteSelectedObject(e);
            return;
        }
        actions.cancel();
        smallBoiBlocks.forEach(boi => {
            app.level.removeObject(boi, app, true);
        });
    };

    actions.confirm = () => {
        clearListener();
        window.removeEventListener("setSelectedObject", setTranslucent);
        deleteControlBlock(bigBoiBlock);
        deselectObject();
        actions.confirm = () => { };
        actions.cancel = () => { };
        actionEnabled = false;
        app.level.refreshLevel(app);
        app.levelEditor.duplicateSelectedObject = originalDuplicateSelectedObject;
        app.levelEditor.deleteSelectedObject = originalDeleteSelectedObject;
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
        app.levelEditor.duplicateSelectedObject = originalDuplicateSelectedObject;
        app.levelEditor.deleteSelectedObject = originalDeleteSelectedObject;
    }
}

async function fbCreate(saved) {
    let resolve;
    let originalCancel = actions.cancel;
    let canvas = getCanvas();
    let eventFunc = e => {
        let pos = getCoordsFromMouse(e);
        saved.block = app.level.entityFactory.createObject(app.levelEditor.selectedObjectType, null);
        app.level.setObjectProperties(saved.block,
            {
                class: app.levelEditor.selectedObjectType,
                isStatic: true,
                position: pos,
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: app.BOX_SIZE, y: app.BOX_SIZE, z: app.BOX_SIZE }
            }
        );
        saved.origin = pos;
        actions.cancel = originalCancel;
        setdownMouseClickListener(eventFunc, canvas);
        app.level.addObject(saved.block, app);
        updateObject(saved.block);
        resolve(1);
    };

    let finish = () => {
        actions.cancel = originalCancel;
        setdownMouseClickListener(eventFunc, canvas);
        resolve(-1);
    };
    actions.cancel = finish;

    setupMouseClickListener(eventFunc, canvas);
    return new Promise(r => {
        resolve = r;
    });
}
async function fbScaleXY(saved) {
    let resolve;
    let originalCancel = actions.cancel;
    let canvas = getCanvas();
    let block = saved.block;
    let origin = saved.origin;

    let eventFunc1 = e => {
        let pos2 = getCoordsFromMouse(e);
        let pos = {
            x: .5 * (origin.x + pos2.x),
            y: .5 * (origin.y + pos2.y),
            z: 0
        };
        let scale = {
            x: Math.abs(origin.x - pos2.x),
            y: Math.abs(origin.y - pos2.y),
            z: app.BOX_SIZE
        };
        app.level.setObjectProperties(block,
            {
                position: pos,
                rotation: { x: 0, y: 0, z: 0 },
                scale: scale
            }
        );
        updateObject(block);
    };
    let eventFunc2 = () => {
        actions.cancel = originalCancel;
        canvas.removeEventListener("mousemove", eventFunc1);
        setdownMouseClickListener(eventFunc2, canvas);
        updateObject(block);
        resolve(2);
    };

    let finish = () => {
        actions.cancel = originalCancel;
        canvas.removeEventListener("mousemove", eventFunc1);
        setdownMouseClickListener(eventFunc2, canvas);
        app.level.removeObject(block, app, true);
        updateObject(block);
        resolve(-1);
    };
    actions.cancel = finish;

    canvas.addEventListener("mousemove", eventFunc1);
    setupMouseClickListener(eventFunc2, canvas);
    return new Promise(r => {
        resolve = r;
    });
}
async function fbRotateXY(saved) {
    let resolve;
    let originalCancel = actions.cancel;
    let canvas = getCanvas();
    let block = saved.block;
    let origin = block.position;
    let rotationSnap = app.mouse.snap > 1 ? Math.PI / 12 : null; // Taken straight from doppler's code
    let snapFunc = rotationSnap
        ? (angle) => {
            return Math.round(angle / rotationSnap) * rotationSnap;
        }
        : (angle) => {
            return angle;
        };

    let eventFunc1 = e => {
        let pos2 = getCoordsFromMouse(e, false);
        let angle = Math.atan2(pos2.y - origin.y, pos2.x - origin.x);
        angle = snapFunc(angle)
        block.setRotation({ x: 0, y: 0, z: angle });
        updateObject(block);
    };
    let eventFunc2 = () => {
        actions.cancel = originalCancel;
        canvas.removeEventListener("mousemove", eventFunc1);
        setdownMouseClickListener(eventFunc2, canvas);
        updateObject(block);
        resolve(3);
    };

    let finish = () => {
        actions.cancel = originalCancel;
        canvas.removeEventListener("mousemove", eventFunc1);
        setdownMouseClickListener(eventFunc2, canvas);
        app.level.removeObject(block, app, true);
        updateObject(block);
        resolve(-1);
    };
    actions.cancel = finish;

    canvas.addEventListener("mousemove", eventFunc1);
    setupMouseClickListener(eventFunc2, canvas);
    return new Promise(r => {
        resolve = r;
    });
}
async function fbMoveXY(saved) {
    let resolve;
    let originalCancel = actions.cancel;
    let canvas = getCanvas();
    let block = saved.block;

    let eventFunc1 = e => {
        let pos = getCoordsFromMouse(e);
        block.setPosition(pos);
        updateObject(block);
    };
    let eventFunc2 = () => {
        actions.cancel = originalCancel;
        canvas.removeEventListener("mousemove", eventFunc1);
        setdownMouseClickListener(eventFunc2, canvas);
        updateObject(block);
        resolve(0);
    };

    let finish = () => {
        actions.cancel = originalCancel;
        canvas.removeEventListener("mousemove", eventFunc1);
        setdownMouseClickListener(eventFunc2, canvas);
        app.level.removeObject(block, app, true);
        updateObject(block);
        resolve(-1);
    };
    actions.cancel = finish;

    canvas.addEventListener("mousemove", eventFunc1);
    setupMouseClickListener(eventFunc2, canvas);
    return new Promise(r => {
        resolve = r;
    });
}

var fastBuildState = "disabled"; // Also can be "enabled" or "shutdown"
async function fastBuild() {
    if (actionEnabled) return;
    if (!canDoAction()) return;
    if (fastBuildState == "disabled") {
        fastBuildState = "enabled";
        actionEnabled = "fastbuild";
    } else if (fastBuildState == "enabled") {
        fastBuildState = "shutdown";
        actions.cancel();
        return;
    } else if (fastBuildState == "shutdown") return;

    disableVanillaClicking();

    let finish = () => {
        fastBuildState = "disabled";
        actions.confirm = actions.cancel = () => { };
        actionEnabled = false;
        enableVanillaClicking();
    }
    actions.cancel = finish;

    const stages = [fbCreate, fbScaleXY, fbRotateXY, fbMoveXY];
    let state = 0;
    let saved = { block: undefined, origin: undefined }
    while (state != -1) {
        if (state == 0 && fastBuildState == "shutdown") break;
        state = await stages[state](saved);
    }
    finish();
}

const dragMove = {
    enabled: false,
    state: "static",
    offset: {x: 0, y: 0},
    mousedown: () => {},
    mousemove: () => {},
    mouseup: () => {}
};
dragMove.mousedown = e => {
    if (dragMove.state == "moving") return;
    let block = getBlockPointedAt(e);
    if (!block) return;
    dragMove.state = "moving"
    app.selectedObject = block;
    let grabPos = getCoordsFromMouseZ(e, block.position.z);
    dragMove.offset = {
        x: grabPos.x - block.position.x,
        y: grabPos.y - block.position.y
    };
};
dragMove.mousemove = e => {
    if (dragMove.state == "static") return;
    if (!app.selectedObject) return;
    let block = app.selectedObject;
    let pos = getCoordsFromMouseZ(e, block.position.z);
    app.selectedObject.setPosition({
        x: pos.x - dragMove.offset.x,
        y: pos.y - dragMove.offset.y,
        z: block.position.z
    });
    updateObject(block);
};
dragMove.mouseup = e => {
    if (dragMove.state == "static") return;
    dragMove.state = "static";
    app.selectedObject = undefined;
};

function enableDragMove() {
    if (!dragMove.enabled) {
        dragMove.enabled = true;
        actionEnabled = true;
    } else return;
    
    disableVanillaClicking();
    disableVanillaCamMove();

    let canvas = getCanvas();
    canvas.addEventListener("pointerdown", dragMove.mousedown);
    canvas.addEventListener("pointerup", dragMove.mouseup);
    canvas.addEventListener("pointermove", dragMove.mousemove);
}
function disableDragMove() {
    if (dragMove.enabled) {
        let canvas = getCanvas();
        canvas.removeEventListener("pointerdown", dragMove.mousedown);
        canvas.removeEventListener("pointerup", dragMove.mouseup);
        canvas.removeEventListener("pointermove", dragMove.mousemove);
        
        if (dragMove.state == "moving") {
            dragMove.mouseup();
        }

        enableVanillaClicking();
        enableVanillaCamMove();
        dragMove.enabled = false;
        actionEnabled = false;
    }
}

function toggleIntangibility() {
    let obj = app.selectedObject;
    if (!obj) return;
    if (!canDoAction()) return;
    if (obj.positionOrigin.z == 0) {
        obj.positionOrigin.z = -1e-6;
        obj.position.z = -1e-6;
    } else if (obj.positionOrigin.z == -1e-6) {
        obj.positionOrigin.z = 0;
        obj.position.z = 0;
    } else return;

    updateObject(obj);
}

function selectBlockType() {
    if (!canDoAction()) return;
    strongDisableAction = true;
    let originalResetZAxis = app.levelEditor.resetZAxis;
    app.levelEditor.resetZAxis = () => { };
    let eventFunc = e => {
        let key = e.key.toLowerCase();
        let selectionComplete = true;
        if (key == "`") { // Basic block
            document.getElementsByClassName("level-editor")[0].children[1].children[0].children[0].click();
        }
        // All 13 other blocks
        else if ("123456789".split("").includes(key)) {
            document.getElementsByClassName("level-editor")[0].children[1].children[0].children[Number(key)].click();
        } else if (key == "0") {
            document.getElementsByClassName("level-editor")[0].children[1].children[0].children[10].click();
        } else if (key == "-") {
            document.getElementsByClassName("level-editor")[0].children[1].children[0].children[11].click();
        } else if (key == "=") {
            document.getElementsByClassName("level-editor")[0].children[1].children[0].children[12].click();
        } else if (key == "\\") {
            document.getElementsByClassName("level-editor")[0].children[1].children[0].children[13].click();
        } else selectionComplete = false;
        if (selectionComplete) finish();
    };
    let prevConfirmAction = actions.confirm;
    let prevCancelAction = actions.cancel;
    let finish = () => {
        actions.confirm = prevConfirmAction;
        actions.cancel = prevCancelAction;
        strongDisableAction = false;
        app.levelEditor.resetZAxis = originalResetZAxis;
        window.removeEventListener("keypress", eventFunc);
    };
    actions.confirm = actions.cancel = finish;

    window.addEventListener("keypress", eventFunc);
}

// TODO: Add icons for the buttons
addButton("Multiselect", multiSelectStage1);
addButton("Toggle intagibility", toggleIntangibility);
// TODO: Add button for multi-modify
addButton("Fast build", fastBuild);
// TODO: Add buttons for plugins
addButton("Confirm action", () => {
    actions.confirm();
});
addButton("Cancel action", () => {
    actions.cancel();
});
/*
Vanill keybinds:
e/esc: exit
0: set block z position to 0
g/t: set control mode to translate
s: set control mode to scale
r: set control mode to rotate
q: set control mode to putty
shift+drag in putty mode: single direction scaling
d: duplicate
x: delete
shift+click: copy colour
shift+translate: duplicate
ctrl+s: save level
ctrl+z: undo
ctrl+shift+z: redo
*/
window.addEventListener("keypress", e => {
    let key = e.key.toLowerCase();
    switch (key) {
        case "4":
            multiSelectStage1();
            break;
        case "2":
            multiSelectStage2([]);
            break;
        case "i":
            toggleIntangibility();
            break;
        case "c":
            actions.confirm();
            break;
        case "v":
            actions.cancel();
            break;
        case "a":
            selectBlockType();
            break;
        case "k":
            fastBuild();
            break;
        default:
            break;
    }
});
window.addEventListener("keydown", e => {
    let key = e.key.toLowerCase();
    switch (key) {
        case "q":
            enableDragMove();
            break;
        default:
            break;
    }
});
window.addEventListener("keyup", e => {
    let key = e.key.toLowerCase();
    switch (key) {
        case "q":
            disableDragMove();
            break;
        default:
            break;
    }
});

// Lock other vanilla actions while user is using a mod action
// I wish I could override the proper functions, but they are not accessible from the global scope
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
app.levelEditor.controlsOrbit.reset = () => {
    if (actionEnabled) return;
    app.levelEditor.controlsOrbit.originalReset();
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
