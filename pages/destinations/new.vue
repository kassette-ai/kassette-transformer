<template>
    <NuxtLayout>
        <template #content>
            <div class="w-10/12 h-4/6 relative">
                <DestinationRegistration />
            </div>
        </template>
    </NuxtLayout>
</template>
<script>
import DestinationRegistration from "@/components/Destinations/DestinationRegistration.vue";
export default {
    name: 'NewDestination',
    components: { DestinationRegistration },
}
</script>
<style scoped>
</style>