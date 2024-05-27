/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('tailwind-typewriter')({
			wordsets: {
				welcome: {
					words: ['ci sei quasi...'],
					delay: 0,
					pauseBetween: 0.5
				}
			}
		})
	]
};
