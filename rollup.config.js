import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

const tsconfig = {
  target: 'es6',
  lib: ['dom', 'dom.iterable', 'esnext'],
  allowJs: true,
  skipLibCheck: true,
  strict: false,
  forceConsistentCasingInFileNames: true,
  noEmit: true,
  esModuleInterop: true,
  module: 'esnext',
  moduleResolution: 'node',
  resolveJsonModule: true,
  isolatedModules: true,
  jsx: 'react-jsx',
  noUnusedLocals: true,
  include: ['src/**/*.ts', 'src/**/*.tsx'],
  exclude: ['node_modules', '*.stories.tsx', 'dist'],
}

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'jobber-ui',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [resolve(), commonjs(), typescript(tsconfig)],
  },
  {
    input: 'src/index.ts',
    external: ['react', 'styled-components'],
    output: [
      {
        name: 'jobber-ui',
        file: pkg.main,
        format: 'cjs',
      },
      {
        name: 'jobber-ui',
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins: [typescript(tsconfig)],
  },
]
