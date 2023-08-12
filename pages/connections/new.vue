<template>
    <NuxtLayout>
        <template #content>
            <ConnectionRegistration />
        </template>
    </NuxtLayout>
</template>
<script>
import ConnectionRegistration from '@/components/Connections/ConnectionRegistration.vue';
export default {
    name: "NewConnection",
    components: { ConnectionRegistration },
}
</script>
<style scoped>
</style>