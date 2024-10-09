import {defineConfig} from '@empjs/cli'
import vue from '@empjs/plugin-vue2'
import {pluginRspackEmpShare} from '@empjs/share'
export default defineConfig(store => {
  return {
    plugins: [
      vue(),
      pluginRspackEmpShare({
        name: 'vue2Project',
        empRuntime: {
          runtimeLib: `https://unpkg.yy.com/@empjs/share@3.1.8/output/sdk.js`,
          shareLib: {
            vue: 'Vue@https://unpkg.com/vue@2.7.14/dist/vue.min.js',
            vuex: `Vuex@https://unpkg.com/vuex@3.6.2/dist/vuex.min.js`,
            'element-ui': [
              'ELEMENT@https://unpkg.com/element-ui/lib/index.js',
              `https://unpkg.com/element-ui/lib/theme-chalk/index.css`,
            ],
          },
          framework: 'vue2',
        },
      }),
    ],
    html: {
      title: 'EMP3 vue2 project',
    },
    server: {port: 9002},
    appEntry: 'main.js',
  }
})
 