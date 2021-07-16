import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting';
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        VitePWA({
            manifest: {
                // content of manifest
            },
            workbox: {
                // workbox options for generateSW
            },
        })
    ],
    //样式表插件
    css: {
        postcss: {
            plugins: [
                autoprefixer,
                postcssNesting
            ]
        }
    }
})