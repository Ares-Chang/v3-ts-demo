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
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // 'no-console': import.meta.env.PROD ? 'warn' : 'off',
    // 'no-debugger': import.meta.env.PROD ? 'warn' : 'off',
    // 关闭依赖项 生产/开发 树检查 (开启后 eslint 会判断并提示依赖应当处理 生产/开发)
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // 关闭检查必须携带文件后缀名
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off', // 关闭 ESLint 默认导出喜好配置
  },
}
