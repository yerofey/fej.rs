// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&amp;display=swap' },
			],
			title: 'Erofei S.'
		},
	},
	css: [
		'@/assets/css/reset.css',
		'modern-normalize/modern-normalize.css',
	],
})
