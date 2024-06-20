// ==UserScript==
// @name         Boxel 3d UI Mod
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  A mod that ads a UI panel in the bottom left of the scren
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var addUIText;
var addUIButton;
var addUIElement;

(function() {
    'use strict';

    let footer = document.getElementsByClassName("footer")[0];
    footer.innerHTML = "<div></div>" + footer.innerHTML;
    var panel = footer.children[0];

    panel.style.backgroundColor = "#00000040";
    panel.style.borderRadius = ".75em";
    panel.style.pointerEvents = "all";
    panel.style.color = "white";
    panel.style.animation = "fade-in .25s ease-in-out";
    panel.style.animationFillMode = "forwards";
    panel.style.minWidth = "100px";
    panel.style.minHeight = "2em";
    panel.style.marginRight = "10px";
    panel.style.display = "flex";
    panel.style.flexDirection = "column-reverse";
    panel.style.paddingBottom = ".5em";
    panel.style.paddingTop = ".5em";
    panel.style.gap = "10px";
    panel.id = "panel";

    addUIText = function(text) {
        let p = document.createElement("p");
        p.innerText = text;
        p.style.marginBottom = "0";
        p.style.paddingLeft = "10px";
        p.style.paddingRight = "10px";
        panel.appendChild(p);
        return p;
    }

    addUIButton = function(text, func) {
        let div = document.createElement("div");
        let btn = document.createElement("button");
        btn.innerText = text;
        btn.onclick = func;

        div.style.marginBottom = "0";
        div.style.paddingLeft = "10px";
        div.style.paddingRight = "10px";
        btn.style.backgroundColor = "#eb2b6d";
        btn.style.boxShadow = "0 .25em #00000040";
        btn.style.minWidth = "100px";
        btn.style.minHeight = ".5em";
        btn.style.borderRadius = ".75em";
        btn.style.borderWidth = "0";
        btn.style.font = "inherit";
        btn.style.color = "white";
        btn.style.textAlign = "center";
        btn.style.textShadow = "0em .125em 0em rgba(0,0,0,.25)";
        btn.style.padding = ".5em .5em .5em .5em";
        btn.style.align = "center";
        btn.style.cursor = "pointer";

        div.appendChild(btn);
        panel.appendChild(div);

        return btn;
    }

    addUIElement = function(element) {
        panel.appendChild(element);
    }

    addModToList("ui mod");
})();
