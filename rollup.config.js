import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/entry.js',
  moduleName: 'chromatism',
  plugins: [
    commonjs(),
    resolve(),
    babel()
  ]
}
