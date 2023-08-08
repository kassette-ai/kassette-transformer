<template>
    <div class="w-[850px] flex flex-row flex-wrap">
        <div
            v-for="content of contents"
            :key="content.id"
            class="mb-8 mr-4"
        >
            <DirectoryItem :data="content"></DirectoryItem>
        </div>
    </div>    
</template>
<script>
import DirectoryItem from "./Item.vue"
import { GetServiceCatalogue } from "@/apis/service-catalogue";
export default {
    name: 'DirectoryContent',
    props: ["type"],
    computed: {
        contents() {
            return this[this.type];
        }
    },
    data() {
        return {
            "sources": [],
            "destinations": [],   
        }
    },
    async mounted() {
        this.sources = await GetServiceCatalogue("sources");
        this.destinations = await GetServiceCatalogue("destinations")
    }
}
</script>
<style>
</style>