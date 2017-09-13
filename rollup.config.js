import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

const pkg = require('./package.json')

export default {
  entry: pkg.module,
  moduleName: 'chromatism',
  plugins: [
    commonjs(),
    resolve(),
    babel(),
    uglify({}, minify)
  ],
  targets: [
    { dest: pkg.main, format: 'umd' },
    { dest: pkg.browser, format: 'cjs' }
  ]
}
