import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

export default {
  entry: path.resolve('src', 'index.js'),
  moduleName: 'chromatism',
  plugins: [
    commonjs(),
    resolve(),
    babel(),
    uglify({}, minify)
  ]
}
