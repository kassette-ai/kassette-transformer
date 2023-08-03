<template>
    <NuxtLayout>
        <template #content>
            <p class="text-3xl font-bold tracking-wide mb-8">Directory</p>
            <div class="flex flex-row mb-8">
                <template v-for="tab in tabs" :key="tab.id">
                    <DirectoryTab
                        :data="tab"    
                    />
                </template>
            </div>
            <DirectoryContent :type="currentTab"/>
        </template>
    </NuxtLayout>
</template>
<script>
import DirectoryTab from "@/components/Directory/Tab.vue"
import DirectoryContent from "@/components/Directory/Content.vue"
export default {
    name: 'Directory',
    data() {
        return {
            currentTab: "",
            tabs: [
                {
                    id: 1,
                    title: 'Sources',
                    value: 'sources',
                },
                {
                    id: 2,
                    title: 'Destinations',
                    value: 'destinations',
                },
            ]
        }
    },
    methods: {
        updateTab() {
            this.currentTab = this.$route.query.tab;
            for (const tab of this.tabs) {
                if (tab.value == this.currentTab) {
                    tab.selected = true;
                } else {
                    tab.selected = false;
                }
            }
        }
    },
    updated() {
        this.updateTab()
    },
    created() {
        this.updateTab()
    }
}
</script>
<style scoped>
</style>