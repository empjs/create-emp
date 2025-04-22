import {defineConfig} from '@empjs/cli'
import ReactPlugin from '@empjs/plugin-react'
import { externalReact, pluginRspackEmpShare } from '@empjs/share/rspack'
export default defineConfig(store => {
  return {
    plugins: [
      ReactPlugin(),
      pluginRspackEmpShare({
        name: 'app',
        empRuntime: {
            runtime: {
                lib: `https://unpkg.yy.com/@empjs/share@3.6.0/output/sdk.js`,
            },
            framework: {
                global: 'EMP_ADAPTER_REACT',
                libs: [`https://unpkg.yy.com/@empjs/cdn-react@0.18.0/dist/reactRouter.${process.env.NODE_ENV}.umd.js`],
            },
            setExternals:externalReact,
        },
        manifest: true
    })
    ],
    build: {
      polyfill: {
        entryCdn: `https://unpkg.com/@empjs/polyfill@0.0.1/dist/es.js`,
      },
    },
  }
})
