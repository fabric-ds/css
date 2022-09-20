import fs from 'fs'
import path from 'path'
import postcss from 'postcss'
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import atImport from 'postcss-import';
import presetEnv from 'postcss-preset-env';
import importSvg from 'postcss-import-svg';
import { breakpoints as customMedia } from './src/utils/tailwind/colors.js'
import tailwindConfig from './src/utils/tailwind/tailwind.config.js'
import { createRequire } from 'module'

const require = createRequire(import.meta.url) // have to do these hacks it seems because import.meta.resolve is cranky
const iconsLocation = path.resolve(path.dirname(require.resolve('@fabric-ds/icons/package.json')), 'dist')

const from = './src/fabric.css'
const to = './dist/honk.min.css'
const css = fs.readFileSync(from, 'utf-8')
const plugins = [
  atImport,
  tailwind(tailwindConfig),
  presetEnv({
    stage: 0,
    browsers: 'extends @finn-no/browserslist-config',
    importFrom: { customMedia },
    features: {
      'focus-visible-pseudo-class': false,
    },
  }),
  importSvg({
    paths: [iconsLocation],
  }),
  autoprefixer,
  cssnano({ preset: 'default' })
]
const result = await postcss(plugins).process(css, { from, to })
fs.mkdirSync('./dist', { recursive: true })
fs.writeFileSync(to, result.css, { encoding: 'utf-8' })
