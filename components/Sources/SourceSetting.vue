<template>
    <p class="text-3xl font-bold tracking-wide mb-4">{{ source.name }}</p>
    <div class="flex items-center pl-4">
        <Img :src="catalogue.iconurl"/>
        <p class="text-2xl tracking-wide ml-4">{{ catalogue.name }} Source</p>
    </div>
    <div class="flex mt-8">
        <template v-for="tab in tabs" :key="tab.id">
            <Tab
                :data="tab"
                @onTabChange="handleTabChange"
                class="mr-16"
            />
        </template>
    </div>
    <div class="mt-8">
        <SetupScreen
            v-if="currentTab == 'Setup'"
            :catalogue="catalogue"
            :source="source"
        />
        <EventScreen
            v-if="currentTab == 'Events'"
        />
        <SettingScreen
            v-if="currentTab == 'Settings'"
            :catalogue="catalogue"
            :source="source"
            @onChange="handleConfigChange"
            @onNext="handleNext"
        />
    </div>
</template>
<script>
import Img from "@/components/Img.vue";
import Tab from "@/components/Tab.vue";
import SetupScreen from "@/components/Sources/SetupScreen.vue";
import EventScreen from "@/components/Sources/EventScreen.vue";
import SettingScreen from "@/components/Sources/SettingScreen.vue";
import { CreateNewSource, ModifySource } from "@/apis/source";
export default {
    name: "SourceSetting",
    props: ["source", "catalogue"],
    components: { Img, Tab, SetupScreen, EventScreen, SettingScreen },
    data() {
        return {
            currentTab: "Setup",
            tabs: [
                {
                    id: 1,
                    title: 'Setup',
                    selected: true,
                },
                {
                    id: 2,
                    title: 'Events',
                },
                {
                    id: 3,
                    title: 'Settings',
                }
            ],
        }
    },
    methods: {
        handleTabChange(id) {
            for(const tab of this.tabs) {
                if (tab.id == id) {
                    tab.selected = true;
                    this.currentTab = tab.title;
                } else {
                    tab.selected = false;
                }
            }
        },
        handleConfigChange(config) {
            this.source.config = config;
        },
        async handleNext() {
            if (this.source.id == null) {
                this.source.service_id = this.catalogue.id;
                const res = await CreateNewSource(this.source);
                if (res.success) {
                    alert(`Successfully Added! You Write Key is ${res.write_key}`);
                    this.$router.push('/sources');
                } else {
                    alert("Failed");
                }
            } else {
                const res = await ModifySource(this.source);
                if (res.success) {
                    alert("Successfully Modified!");
                    this.$router.push('/sources');
                } else {
                    alert("Failed");
                }
            }
        }
    }
}
</script>
<style>
</style>