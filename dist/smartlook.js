"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (({ router }) => {
    if (process.env.NODE_ENV === 'production' && SMARTLOOK_ID && typeof window !== 'undefined') {
        console.log('[vuepress-smartlook-plugin] 👀');
        window.smartlook || (function (d) {
            var o = window.smartlook = function () { o.api.push(arguments); }, h = d.getElementsByTagName('head')[0];
            var c = d.createElement('script');
            o.api = new Array();
            c.async = true;
            c.type = 'text/javascript';
            c.charset = 'utf-8';
            c.src = 'https://rec.smartlook.com/recorder.js';
            h.appendChild(c);
        })(document);
        window.smartlook('init', SMARTLOOK_ID);
        router.afterEach(function (to) {
            window.smartlook('navigation', to.fullPath);
        });
    }
});
