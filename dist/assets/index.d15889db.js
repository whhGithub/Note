var t = Object.defineProperty,
    e = Object.defineProperties,
    a = Object.getOwnPropertyDescriptors,
    n = Object.getOwnPropertySymbols,
    s = Object.prototype.hasOwnProperty,
    l = Object.prototype.propertyIsEnumerable,
    o = (e, a, n) => a in e ? t(e, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[a] = n;
import { o as i, e as r, a as u, r as d, v as c, c as p, b as m, w as v, u as f, i as h, N as b, F as L, d as w, f as y, g, B as C, h as _, j as M, p as k, k as O, l as j, m as I, n as N, t as x, q as E, s as P, x as S, y as D, z as U, A as q, C as z, D as B, E as J, G as A, H as F, I as G } from "./vendor.1fa15d5f.js";
const H = m("textarea", { id: "text-area" }, null, -1),
    T = M("保存"),
    K = m("div", null, "编辑标题", -1),
    Q = M(" 确定 "),
    R = {
        setup(t) {
            const M = w();
            let k;
            i((() => {
                const t = document.getElementById("text-area");
                k = new r({ element: t, toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "|", "preview"], spellChecker: !1, delay: 1e3 }), M.state.MdeList.length > 0 && (k.value(M.state.MdeList[0].content), I.value = M.state.MdeList[0].title)
            }));
            u((() => { N() }));
            const O = { title: "", status: "INCOMPLETE", content: "" };
            let j = d(!1),
                I = d(O.title);
            const N = t => {
                let i = (r = ((t, e) => {
                    for (var a in e || (e = {})) s.call(e, a) && o(t, a, e[a]);
                    if (n)
                        for (var a of n(e)) l.call(e, a) && o(t, a, e[a]);
                    return t
                })({}, O), u = { id: c(), content: k.value(), title: I.value }, e(r, a(u)));
                var r, u;
                if (0 == M.state.MdeList.length) {
                    if ("" === i.content) { if ("" === i.title) return j.value = !1, 1 } else "" != i.content && "" === i.title && (i.title = i.content);
                    M.commit("addContent", i)
                } else if (M.state.MdeList.length > 0) {
                    if ("" === i.content) { if ("" === i.title) return j.value = !1, 1 } else "" != i.content && "" === i.title && (i.title = i.content);
                    M.commit("updateContent", i)
                }
                M.commit("deleteMdeList"), et.push("preview")
            };
            return (t, e) => { const a = y("n-layout"); return g(), p(L, null, [m(a, { class: "main-n-layout" }, { default: v((() => [H, m(f(C), { onClick: e[1] || (e[1] = t => h(j) ? j.value = !0 : j = !0) }, { default: v((() => [T])), _: 1 })])), _: 1 }), m(f(b), { show: f(j), "onUpdate:show": e[4] || (e[4] = t => h(j) ? j.value = t : j = t), preset: "dialog", title: "Dialog", "show-icon": !1 }, { header: v((() => [K])), action: v((() => [m(f(C), { onClick: e[3] || (e[3] = t => { et.push("preview") }) }, { default: v((() => [Q])), _: 1 })])), default: v((() => [m("div", null, [m(f(_), { value: f(I), "onUpdate:value": e[2] || (e[2] = t => h(I) ? I.value = t : I = t), type: "input", placeholder: "请填写笔记标题..." }, null, 8, ["value"])])])), _: 1 }, 8, ["show"])], 64) }
        }
    };
const V = D();
k("data-v-69370a32");
const W = { style: { "font-size": "23px" } },
    X = M("编辑"),
    Y = m("br", null, null, -1),
    Z = M("添加"),
    $ = M(" 你还未有任何笔记噢 ");
O();
const tt = {
    setup(t) {
        const e = () => { et.push("main") },
            a = w(),
            n = j((() => a.state.contentList));
        return (t, s) => (g(), p(f(S), { vertical: "" }, { default: V((() => [f(n).length ? (g(), p(f(I), { key: 0 }, { default: V((() => [m(f(E), { list: f(n), onStart: s[1] || (s[1] = e => t.drag = !0), onEnd: s[2] || (s[2] = e => t.drag = !1), "item-key": "id" }, { item: V((({ index: t, element: e }) => [m(f(N), { closable: "true", onClose: e => (t => { a.commit("deleteContent", t) })(t), hoverable: "true" }, { default: V((() => [m("div", W, x(e.title), 1), m(f(C), { onClick: e => { return n = t, a.commit("toUpdate", n), console.log(n), void et.push("main"); var n } }, { default: V((() => [X])), _: 2 }, 1032, ["onClick"])])), _: 2 }, 1032, ["onClose"])])), _: 1 }, 8, ["list"]), Y, m(f(C), { onClick: e }, { default: V((() => [Z])), _: 1 })])), _: 1 })) : (g(), p(f(P), { key: 1 }, { default: V((() => [$])), _: 1 }))])), _: 1 }))
    },
    __scopeId: "data-v-69370a32"
};
var et = U({ history: q(), routes: [{ path: "/main", name: "main", component: R }, { path: "/preview", name: "preview", component: tt }, { path: "/:pathMatch(.*)", redirect: "/preview" }] });
const at = D();
k("data-v-0f8b214a");
const nt = { id: "app" },
    st = m("h1", null, "简单笔记", -1);
O();
const lt = {
    setup(t) {
        const e = w(),
            a = A(),
            n = j((() => "main" === a.name ? "预览页" : "preview" === a.name ? "编辑页" : void 0)),
            s = () => { "main" === a.name && et.push("preview"), "preview" === a.name && et.push("main") };
        return i((() => {
            let t = localStorage.getItem("myData");
            t && (t = JSON.parse(t), e.commit("updateContents", t[0]))
        })), window.onbeforeunload = t => {
            let a = [e.state.contentList, e.state.MdeList, e.state.editListNumber];
            localStorage.setItem("myData", JSON.stringify(a))
        }, (t, e) => { const a = y("router-view"); return g(), p("div", nt, [m(f(J), null, { default: at((() => [m(f(z), null, { default: at((() => [st, m(f(C), { onClick: s }, { default: at((() => [m("span", null, x(f(n)), 1)])), _: 1 })])), _: 1 }), m(f(B), null, { default: at((() => [m(a)])), _: 1 })])), _: 1 })]) }
    },
    __scopeId: "data-v-0f8b214a"
};
const ot = F({ state: () => ({ editListNumber: 0, contentList: [], MdeList: [] }), mutations: { addContent(t, e) { t.contentList.unshift(e) }, updateContents(t, e) { t.contentList = e }, updateContent(t, e) { t.contentList[t.editListNumber] = e }, deleteContent(t, e) { t.contentList.splice(e, 1) }, toUpdate(t, e) { t.MdeList.unshift(t.contentList[e]), t.editListNumber = e }, deleteMdeList(t) { t.MdeList = [] } } });
G(lt).use(et).use(ot).mount("#app");