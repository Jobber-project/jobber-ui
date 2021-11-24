import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import ts from 'rollup-plugin-ts'

import pkg from './package.json'

const tsconfig = {
  target: 'es6',
  lib: ['dom', 'dom.iterable', 'esnext'],
  skipLibCheck: true,
  strict: false,
  forceConsistentCasingInFileNames: true,
  esModuleInterop: true,
  module: 'esnext',
  moduleResolution: 'node',
  resolveJsonModule: true,
  isolatedModules: true,
  jsx: 'react-jsx',
  noUnusedLocals: false,
  declaration: true,
  declarationDir: 'dist',
  emitDeclarationOnly: true,
}

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'jobber-ui',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [resolve(), commonjs(), ts({ tsconfig }), image()],
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
    plugins: [ts({ tsconfig }), image()],
  },
  {
    input: 'src/shared/colors.ts',
    output: [
      {
        name: 'colors',
        file: 'dist/shared/colors.js',
        format: 'esm',
      },
    ],
    plugins: [ts({ tsconfig: { ...tsconfig, declarationDir: 'dist/shared' } })],
  },
]
