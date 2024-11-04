import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from '@vant/auto-import-resolver';
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    base:'./',
    plugins: [
        vue(),
        AutoImport({
            resolvers: [VantResolver()],
        }),
        Components({
            resolvers: [VantResolver()],
        }),
        // VueDevTools()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
       port:8086,
        proxy: {
            '/another-api': {
               /* target: 'http://192.168.72.249:8082',*/
                target: 'http://192.168.128.1:8082',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/another-api/, '')
            }
        }
    }
})
