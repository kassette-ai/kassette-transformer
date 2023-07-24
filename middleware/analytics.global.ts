export default defineNuxtRouteMiddleware((to, from) => {

     const { $analytics } = useNuxtApp();
    $analytics.page()

})