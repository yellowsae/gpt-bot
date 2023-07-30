import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import addShebang from "rollup-plugin-add-shebang";
export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: [
    typescript(),
    addShebang({
      include: 'dist/bundle.js'
    })
  ]
})
