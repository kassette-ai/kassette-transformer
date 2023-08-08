<template>
    <NuxtLayout>
        <template #content>
            <div class="w-10/12 h-4/6 relative">
                <SourceRegistration
                    :sourceID="sourceID"
                />
            </div>
        </template>
    </NuxtLayout>
</template>
<script>
import SourceRegistration from '@/components/Sources/SourceRegistration.vue';
export default {
    name: "SourceEdit",
    components: { SourceRegistration },
    data() {
        return {
            sourceID: "",
        }
    },
    created() {
        this.sourceID = this.$route.query.id;
    }
}
</script>
<style scoped>
</style>