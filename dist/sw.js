if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let s = Promise.resolve();
            return r[e] || (s = new Promise((async s => {
                if ("document" in self) {
                    const r = document.createElement("script");
                    r.src = e, document.head.appendChild(r), r.onload = s
                } else importScripts(e), s()
            }))), s.then((() => { if (!r[e]) throw new Error(`Module ${e} didn’t register its module`); return r[e] }))
        },
        s = (s, r) => { Promise.all(s.map(e)).then((e => r(1 === e.length ? e[0] : e))) },
        r = { require: Promise.resolve(s) };
    self.define = (s, i, t) => {
        r[s] || (r[s] = Promise.resolve().then((() => {
            let r = {};
            const n = { uri: location.origin + s.slice(1) };
            return Promise.all(i.map((s => {
                switch (s) {
                    case "exports":
                        return r;
                    case "module":
                        return n;
                    default:
                        return e(s)
                }
            }))).then((e => { const s = t(...e); return r.default || (r.default = s), r }))
        })))
    }
}
define("./sw.js", ["./workbox-ac8ffed3"], (function(e) {
    "use strict";
    self.addEventListener("message", (e => { e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting() })), e.precacheAndRoute([{ url: "assets/index.7e6f9788.css", revision: "532457071f8414330355262c007dff11" }, { url: "assets/index.e698e79b.js", revision: "f8a4241a39e01dd5960ebdd10698a558" }, { url: "assets/vendor.c9e47028.js", revision: "367b726867267c003be5a58041e82850" }, { url: "index.html", revision: "d2eeb0cd9020d61edb4a41d724ae4171" }, { url: "manifest.webmanifest", revision: "1536dcb534b29169b7dba957cae7a896" }], {}), e.cleanupOutdatedCaches(), e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))
}));
//# sourceMappingURL=sw.js.map