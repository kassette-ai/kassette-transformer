export default defineNuxtConfig({
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
