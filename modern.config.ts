import {
  defineConfig,
  moduleTools,
} from '@modern-js/module-tools';
const BUILD_TARGET = 'es2020' as const;
const define = {
  EMP_VERSION: '3.0.0-beta.4',
};
const requireShim = {
  // use import.meta['url'] to bypass bundle-require replacement of import.meta.url
  js: `import { createRequire } from 'module';
var require = createRequire(import.meta['url']);\n`,
};

export default defineConfig({
  plugins: [moduleTools()],
  buildConfig: {
    buildType: 'bundle',
    format: 'esm',
    target: BUILD_TARGET,
    define,
    autoExtension: true,
    shims: true,
    banner: requireShim,
  },
});
