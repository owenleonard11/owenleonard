import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			strokeWidth: {
				'12': '12px',
				'4': '4px'
			},
			height: {
				'128': '32rem'
			},
			width: {
				'128': '32rem'
			}
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [ 'hamlindigo' ]
			},
		}),
	],
} satisfies Config;
