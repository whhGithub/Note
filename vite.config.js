import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting';
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            manifest: {
                "name": "Note",
                "short_name": "Note",
                "start_url": "/",
                "icons": [{
                        "src": "./icons/manifest-icon-192.png",
                        "sizes": "192x192",
                        "type": "image/png",
                        "purpose": "maskable any"
                    },
                    {
                        "src": "./icons/manifest-icon-512.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "maskable any"
                    }
                ],
                "theme_color": "#000000",
                "background_color": "#ffffff",
                "display": "standalone",
                "orientation": "portrait"
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