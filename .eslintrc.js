module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 去除 ESLint 检测不到编译宏报错问题
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
  },
  extends: [
    'plugin:vue/vue3-essential', // 一定要用
    'airbnb-base', // Airbnb 规范
    'plugin:prettier/recommended', // 添加 prettier 插件，抹平与 Airbnb 规范差异
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 'no-console': import.meta.env.PROD ? 'warn' : 'off',
    // 'no-debugger': import.meta.env.PROD ? 'warn' : 'off',
  },
}
