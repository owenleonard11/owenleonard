import { join } from 'path'
import { createRequire } from 'module'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import * as skeletonPlugin from '@skeletonlabs/tw-plugin'
import { earthTheme } from './earth-theme'

const require = createRequire(import.meta.url)

// Handles both CJS/ESM export shapes depending on how the loader resolves the package
const skeleton: typeof import('@skeletonlabs/tw-plugin').skeleton =
  (skeletonPlugin as any).skeleton ?? (skeletonPlugin as any).default?.skeleton

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [earthTheme]
      },
    }),
    plugin(function ({ addVariant }) {
      addVariant('touch', '@media (hover: none)')
    })
  ],
} satisfies Config