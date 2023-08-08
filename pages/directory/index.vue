<template>
    <NuxtLayout>
        <template #content>
            <p class="text-3xl font-bold tracking-wide mb-8">Directory</p>
            <div class="flex justify-between mb-8">
                <div class="flex">
                    <template v-for="tab in tabs" :key="tab.id">
                        <Tab
                            :data="tab"
                            @onTabChange="handleTabChange"
                        />
                    </template>
                </div>
                <NuxtLink :to="addSourceTypeLink">
                    <Button :title="buttonName" />
                </NuxtLink>
            </div>
            <DirectoryContent :type="currentTab"/>
        </template>
    </NuxtLayout>
</template>
<script>
import Tab from "@/components/Tab.vue"
import DirectoryContent from "@/components/Directory/Content.vue"
import Button from "@/components/Button.vue";
export default {
    components: { Tab, DirectoryContent, Button },
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
    computed: {
        buttonName() {
            if (this.currentTab == "sources") {
                return "New Source Type";
            } else if(this.currentTab == "destinations") {
                return "New Destination Type";
            } else {
                return "";
            }
        },
        addSourceTypeLink() {
            if (this.currentTab == "sources") {
                return "/directory/service-catalogue/new?type=src";
            } else if (this.currentTab == "destinations") {
                return "/directory/service-catalogue/new?type=dest";
            } else {
                return "#";
            }
        }
    },
    methods: {
        handleTabChange(id) {
            for (const tab of this.tabs) {
                if (tab.id == id) {
                    tab.selected = true;
                    this.currentTab = tab.value;
                } else {
                    tab.selected = false;
                }
            }
            this.$router.push(`/directory?tab=${this.currentTab}`);
        },
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
    created() {
        this.updateTab()
    }
}
</script>
<style scoped>
</style>