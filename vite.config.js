import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
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