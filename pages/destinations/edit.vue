<template>
    <NuxtLayout>
        <template #content>
            <div class="w-10/12 h-4/6 relative">
                <DestinationRegistration
                    :destinationID="destinationID"
                />
            </div>
        </template>
    </NuxtLayout>
</template>
<script>
import DestinationRegistration from '@/components/Destinations/DestinationRegistration.vue';
export default {
    name: "SourceEdit",
    components: { DestinationRegistration },
    data() {
        return {
            destinationID: "",
        }
    },
    created() {
        this.destinationID = this.$route.query.id;
    }
}
</script>
<style scoped>
</style>