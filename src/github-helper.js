// ==UserScript==
// @name         github-helper
// @namespace    https://github.com/windboot/
// @version      2024-02-11
// @description  github clone helper
// @author       windboot
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href; 
    window.onkeydown = function (event) {
          // proxy 
        if(event.ctrlKey && event.keyCode === 71){
             //console.log(`url:${url},key down :${event.keyCode}`);
             GM_setClipboard(url);  
        }
        // release proxy
        if(event.ctrlKey && event.keyCode === 82){
            
       }
      }    
})();