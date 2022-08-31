import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import svgr from '@svgr/rollup'
import ts from 'rollup-plugin-ts'
import css from 'rollup-plugin-import-css'

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
  jsx: 'react',
  noUnusedLocals: false,
  declaration: true,
  declarationDir: 'dist',
  emitDeclarationOnly: true,
}

const external = ['react', 'react-dom', 'react-select', 'styled-components']

export default [
  {
    input: 'src/index.ts',
    external,
    output: {
      name: 'jobber-ui',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [resolve(), commonjs(), ts({ tsconfig }), svgr()],
  },
  {
    input: 'src/index.ts',
    external,
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
    plugins: [resolve(), commonjs(), ts({ tsconfig }), svgr()],
  },
  {
    input: 'src/shared/colors.ts',
    external,
    output: [
      {
        name: 'colors',
        file: 'dist/shared/colors.umd.js',
        format: 'umd',
      },
      {
        name: 'colors',
        file: 'dist/shared/colors.cjs.js',
        format: 'cjs',
      },
      {
        name: 'colors',
        file: 'dist/shared/colors.esm.js',
        format: 'esm',
      },
    ],
    plugins: [ts({ tsconfig: { ...tsconfig, declarationDir: 'dist/shared' } })],
  },
  {
    input: 'index.js',
    output: { file: 'dist/index.js', format: 'esm' },
    plugins: [css()],
  },
]
