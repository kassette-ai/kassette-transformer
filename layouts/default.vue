<template>
    <div>
        <TopNav/>
        <Sidebar/>
        <Nuxt />
    </div>
</template>

<script>
import TopNav from "~/components/TopNav.vue"
import Sidebar from "~/components/Sidebar.vue"
export default{
    components: {
        TopNav,
        Sidebar
    }
}
</script>