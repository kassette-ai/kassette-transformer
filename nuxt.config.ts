export default defineNuxtConfig({
    runtimeConfig: {
        KASSETTE_SERVER_BASE: process.env.KASSETTE_SERVER_BASE,
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    vite: {
        optimizeDeps: {
            exclude: [
                'analyticsKassette',
            ]
        }
}})
