import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';
const postcss = require('./postcss.config');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const sourcemap = dev ? 'inline' : false;
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const preprocess = [
  sveltePreprocess({
    defaults: {
      style: 'postcss',
    },
    sourceMap: !!sourcemap,
    postcss,
    preserve: ['ld+json'],
  }),
];

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input().replace(/\.js$/, '.js'),
    output: { ...config.client.output(), sourcemap },
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        preventAssignment: true,
      }),
      svelte({
        compilerOptions: {
          dev,
          hydratable: true,
        },
        preprocess,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs({
        sourceMap: !!sourcemap,
      }),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**', 'node_modules/@fortawesome/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-optional-chaining',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      json(),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: { server: config.server.input().server.replace(/\.js$/, '.js') },
    output: { ...config.server.output(), sourcemap },
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'module.require': 'require',
        preventAssignment: true,
      }),
      svelte({
        compilerOptions: {
          dev,
          generate: 'ssr',
          hydratable: true,
        },
        emitCss: false,
        preprocess,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs({
        sourceMap: !!sourcemap,
      }),
      json(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives')),
    ),

    preserveEntrySignatures: 'strict',
    onwarn,
  },

  // serviceworker: {
  //   input: config.serviceworker.input().replace(/\.js$/, '.ts'),
  //   output: { ...config.serviceworker.output(), sourcemap },
  //   plugins: [
  //     resolve(),
  //     replace({
  //       'process.browser': true,
  //       'process.env.NODE_ENV': JSON.stringify(mode),
  //     }),
  //     commonjs({
  //	     sourceMap: !!sourcemap,
  //	   }),
  //     typescript({ sourceMap: !!sourcemap }),
  //     !dev && terser(),
  //   ],

  //   preserveEntrySignatures: false,
  //   onwarn,
  // },
};