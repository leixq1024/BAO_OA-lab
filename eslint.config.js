import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettierRecommendedConfigs from 'eslint-plugin-prettier/recommended'
import vueEslintParser from 'vue-eslint-parser' // vue文件解析器
export default [
  // eslint 默认推荐规则
  pluginJs.configs.recommended,
  // ts 默认推荐规则
  ...tseslint.configs.recommended,
  // vue3 基础推荐规则
  ...pluginVue.configs['flat/recommended'],
  // prettier 默认推荐规则
  pluginPrettierRecommendedConfigs,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      ecmaVersion: 2020,
      parser: vueEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        parser: tseslint.parser, // 在vue文件上使用ts解析器
        sourceType: 'module',
      },
    },
  },
]
