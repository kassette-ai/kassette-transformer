<template>
    <NuxtLayout>
        <template #content>
            <div class="w-10/12 h-4/6 relative">
                <SourceName />
            </div>
        </template>
    </NuxtLayout>
</template>
<script>
import SourceName from "@/components/Sources/SourceName";
export default {
    name: 'SourcesAdd',
    components: {SourceName},
}
</script>
<style scoped>
</style>