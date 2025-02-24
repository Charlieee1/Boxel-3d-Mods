// ==UserScript==
// @name         Boxel 3d Creation Roulette
// @namespace    http://tampermonkey.net/
// @version      v1.0.1
// @description  Changes the level and skin selectors to position items in a circle instead of a line
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    carousel=document.getElementsByClassName("carousel")[0];
    nodes=carousel.childNodes;
    for(let i=1;i<nodes.length-1;i++){
        nodes[i].style.setProperty("--i",i);
    }
    nodes[1].nextElementSibling=nodes[nodes.length-2];
    nodes[1].nextSibling=nodes[nodes.length-2];
    nodes[nodes.length-2].previousElementSibling=nodes[1];
    nodes[nodes.length-2].previousSibling=nodes[1];
    if (document.getElementsByClassName("selected").length > 0) {
        carousel.style.setProperty("--level-count",nodes.length-2);
        carousel.style.setProperty("--selected-item",document.getElementsByClassName("selected")[0].style.getPropertyValue("--i"));
    }
    document.head.innerHTML+='<style>.ui-bubble .page .content .carousel {--bottom-extend: calc(6.25em + 0em*var(--level-count));--top-extend: calc(11.25em + .0625em + 0em*var(--level-count));margin-bottom: calc(-1*var(--bottom-extend));margin-top: calc(-1*var(--top-extend));--height: calc(7.5em + var(--bottom-extend) + var(--top-extend));height: var(--height);padding-bottom: calc((var(--height) - 7.5em)/2);padding-top: calc((var(--height) - 7.5em)/2);overflow-x: unset;--radius: 1.5;position: relative;z-index: -1;} .ui-bubble .page .content .carousel .item {--angle: calc(360deg/var(--level-count));transform:translateX(calc((var(--i) - 1)* -6.25em)) rotate(calc((var(--i) - var(--selected-item))*var(--angle))) translateY(calc(var(--radius)*-6.25em)) scaleY(.84) scaleX(calc(2*sqrt(2*var(--radius)*var(--radius) - 2*var(--radius)*var(--radius)*cos(var(--angle)))));z-index: 1;} .ui-bubble .page .content .carousel .item.selected {transform: translate(calc((var(--i) - 1)* -6.25em),1.5em);} .ui-bubble .page .content.fade-in h1 {display: inline-block;margin-left: auto;margin-right: auto;} .ui-bubble .content.fade-in > p {transform: translateY(-.5em);z-index:-1;position: relative} .ui-bubble .content.fade-in > p a {border-bottom: none; box-shadow: none; color: rgba(0,0,0,0); text-shadow: none; position: absolute;} .ui-bubble .content.fade-in > p a img {margin-left: .5em;z-index: 2;position: relative;}</style>';
    updateSelectedItem=()=>{
        carousel=document.getElementsByClassName("carousel")[0];
        nodes=carousel.childNodes;
        for(let i=1;i<nodes.length-1;i++){
            nodes[i].style.setProperty("--i",i);
        }
        nodes[1].nextElementSibling=nodes[nodes.length-2];
        nodes[1].nextSibling=nodes[nodes.length-2];
        nodes[nodes.length-2].previousElementSibling=nodes[1];
        nodes[nodes.length-2].previousSibling=nodes[1];
        setTimeout(()=>{
            carousel.style.setProperty("--level-count",nodes.length-2);
            carousel.style.setProperty("--selected-item",document.getElementsByClassName("selected")[0].style.getPropertyValue("--i"));
        },0);
    };
    updateTwice=()=>{
        updateSelectedItem();
        setTimeout(updateSelectedItem,100);
    };
    addEventListener("itemSelected", updateTwice);
    addEventListener("setPage", (event) => {
        if (event.detail == "level-picker") {
            setTimeout(updateSelectedItem,200);
        }
    });

    // Mod list
    addModToList("creation roulette");
})();
