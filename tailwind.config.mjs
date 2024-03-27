/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				ieBrandDark: '#006A76',
				ieBrandLight: '#CCF2F7',
				ieBrandLight2: '#00C1D5',
				ieBrandDark1: '#131313',
				ieBrandLight1: '#F8F8F8',
			}
		},
	},
	plugins: [],
}
