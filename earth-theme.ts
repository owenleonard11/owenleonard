
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const earthTheme: CustomThemeConfig = {
    name: 'earth-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #91c2ba 
		"--color-primary-50": "239 246 245", // #eff6f5
		"--color-primary-100": "233 243 241", // #e9f3f1
		"--color-primary-200": "228 240 238", // #e4f0ee
		"--color-primary-300": "211 231 227", // #d3e7e3
		"--color-primary-400": "178 212 207", // #b2d4cf
		"--color-primary-500": "145 194 186", // #91c2ba
		"--color-primary-600": "131 175 167", // #83afa7
		"--color-primary-700": "109 146 140", // #6d928c
		"--color-primary-800": "87 116 112", // #577470
		"--color-primary-900": "71 95 91", // #475f5b
		// secondary | #cf7147 
		"--color-secondary-50": "248 234 227", // #f8eae3
		"--color-secondary-100": "245 227 218", // #f5e3da
		"--color-secondary-200": "243 220 209", // #f3dcd1
		"--color-secondary-300": "236 198 181", // #ecc6b5
		"--color-secondary-400": "221 156 126", // #dd9c7e
		"--color-secondary-500": "207 113 71", // #cf7147
		"--color-secondary-600": "186 102 64", // #ba6640
		"--color-secondary-700": "155 85 53", // #9b5535
		"--color-secondary-800": "124 68 43", // #7c442b
		"--color-secondary-900": "101 55 35", // #653723
		// tertiary | #757068 
		"--color-tertiary-50": "234 234 232", // #eaeae8
		"--color-tertiary-100": "227 226 225", // #e3e2e1
		"--color-tertiary-200": "221 219 217", // #dddbd9
		"--color-tertiary-300": "200 198 195", // #c8c6c3
		"--color-tertiary-400": "158 155 149", // #9e9b95
		"--color-tertiary-500": "117 112 104", // #757068
		"--color-tertiary-600": "105 101 94", // #69655e
		"--color-tertiary-700": "88 84 78", // #58544e
		"--color-tertiary-800": "70 67 62", // #46433e
		"--color-tertiary-900": "57 55 51", // #393733
		// success | #7a8d39 
		"--color-success-50": "235 238 225", // #ebeee1
		"--color-success-100": "228 232 215", // #e4e8d7
		"--color-success-200": "222 227 206", // #dee3ce
		"--color-success-300": "202 209 176", // #cad1b0
		"--color-success-400": "162 175 116", // #a2af74
		"--color-success-500": "122 141 57", // #7a8d39
		"--color-success-600": "110 127 51", // #6e7f33
		"--color-success-700": "92 106 43", // #5c6a2b
		"--color-success-800": "73 85 34", // #495522
		"--color-success-900": "60 69 28", // #3c451c
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #b4583f 
		"--color-error-50": "244 230 226", // #f4e6e2
		"--color-error-100": "240 222 217", // #f0ded9
		"--color-error-200": "236 213 207", // #ecd5cf
		"--color-error-300": "225 188 178", // #e1bcb2
		"--color-error-400": "203 138 121", // #cb8a79
		"--color-error-500": "180 88 63", // #b4583f
		"--color-error-600": "162 79 57", // #a24f39
		"--color-error-700": "135 66 47", // #87422f
		"--color-error-800": "108 53 38", // #6c3526
		"--color-error-900": "88 43 31", // #582b1f
		// surface | #ece1b3 
		"--color-surface-50": "252 251 244", // #fcfbf4
		"--color-surface-100": "251 249 240", // #fbf9f0
		"--color-surface-200": "250 248 236", // #faf8ec
		"--color-surface-300": "247 243 225", // #f7f3e1
		"--color-surface-400": "242 234 202", // #f2eaca
		"--color-surface-500": "236 225 179", // #ece1b3
		"--color-surface-600": "212 203 161", // #d4cba1
		"--color-surface-700": "177 169 134", // #b1a986
		"--color-surface-800": "142 135 107", // #8e876b
		"--color-surface-900": "116 110 88", // #746e58
		
	}
}