import * as VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Preview from "../views/Preview.vue";
export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [{
            path: "/main",
            name: "main",
            component: Main,
        },
        {
            path: "/preview",
            name: "preview",
            component: Preview,
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/preview'
        }
    ]
})