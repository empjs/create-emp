import {defineConfig} from '@empjs/cli'
import ReactPlugin from '@empjs/plugin-react'
export default defineConfig(store => {
  return {
    plugins: [ReactPlugin()],
  }
})
