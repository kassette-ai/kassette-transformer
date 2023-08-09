<template>
    <p class="text-3xl font-bold tracking-wide mb-4">{{ destination.name }}</p>
    <div class="flex items-center pl-4">
        <Img :src="catalogue.iconurl"/>
        <p class="text-2xl tracking-wide ml-4">{{ catalogue.name }} Destination</p>
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
            :destination="destination"
        />
        <EventScreen
            v-if="currentTab == 'Events'"
        />
        <SettingScreen
            v-if="currentTab == 'Settings'"
            :catalogue="catalogue"
            :destination="destination"
            @onChange="handleConfigChange"
            @onNext="handleNext"
        />
    </div>
</template>
<script>
import Img from "@/components/Img.vue";
import Tab from "@/components/Tab.vue";
import SetupScreen from "@/components/Destinations/SetupScreen.vue";
import EventScreen from "@/components/Destinations/EventScreen.vue";
import SettingScreen from "@/components/Destinations/SettingScreen.vue";
import { CreateNewDestination, ModifyDestination } from "@/apis/destination";
export default {
    name: "DestinationSetting",
    props: ["destination", "catalogue"],
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
            this.destination.config = config;
        },
        async handleNext() {
            if (this.destination.id == null) {
                this.destination.service_id = this.catalogue.id;
                const res = await CreateNewDestination(this.destination);
                if (res.success) {
                    alert("Successfully Added!");
                    this.$router.push('/destinations');
                } else {
                    alert("Failed");
                }
            } else {
                const res = await ModifyDestination(this.destination);
                if (res.success) {
                    alert("Successfully Modified!");
                    this.$router.push('/destinations');
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