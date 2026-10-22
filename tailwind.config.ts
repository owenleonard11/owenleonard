import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { earthTheme } from './earth-theme'
import plugin from 'tailwindcss/plugin'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [ earthTheme ]
			},
		}),
		plugin(function({ addVariant }) {
			addVariant('touch', '@media (hover: none)')
		})
	],
} satisfies Config;
