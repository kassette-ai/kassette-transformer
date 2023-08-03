<template>
    <NuxtLayout>
        <template #content>
            <div class="w-10/12 h-4/6 relative">
                <SourceName :source="source"/>
            </div>
        </template>
    </NuxtLayout>
</template>
<script>
import SourceName from "@/components/Sources/SourceName";
export default {
    data() {
        return {
            source: "",
        }
    },
    name: 'SourcesAdd',
    components: {SourceName},
    created() {
        this.source = this.$route.query.source;
    }
}
</script>
<style scoped>
</style>