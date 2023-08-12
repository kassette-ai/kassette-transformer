<template>
    <NuxtLayout>
        <template #content>
            <ConnectionRegistration
                :connectionID="connectionID"
            />
        </template>
    </NuxtLayout>
</template>
<script>
import ConnectionRegistration from '@/components/Connections/ConnectionRegistration.vue';
export default {
    name: "NewConnection",
    components: { ConnectionRegistration },
    data() {
        return {
            connectionID: 0,
        }
    },
    created() {
        this.connectionID = parseInt(this.$route.query.id);
    }
}
</script>
<style scoped>
</style>