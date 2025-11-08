import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(), // 이 부분이 .vue 파일을 처리하는 핵심입니다.
    ],
})