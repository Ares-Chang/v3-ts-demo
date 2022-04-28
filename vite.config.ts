import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

/**
 * 配置文档：https://cn.vitejs.dev/config/
 */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  base: './', // 设置打包路径
  server: {
    host: '0.0.0.0',
    port: 8080, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace('/^\/api/', '/')
    //   }
    // }
  },
  esbuild: {
    pure: ['console.log'], // 生产环境自动移除 console.log
    drop: ['debugger'], // 生产环境自动移除 debugger
    minify: true,
  },
})
