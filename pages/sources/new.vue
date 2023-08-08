<template>
    <NuxtLayout>
        <template #content>
            <div class="w-10/12 h-4/6 relative">
                <SourceRegistration />
            </div>
        </template>
    </NuxtLayout>
</template>
<script>
import SourceRegistration from "@/components/Sources/SourceRegistration.vue";
export default {
    name: 'NewSource',
    components: { SourceRegistration },
}
</script>
<style scoped>
</style>