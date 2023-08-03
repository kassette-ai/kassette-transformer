<template>
    <div class="w-full flex items-center justify-between py-4 px-4 border border-[#D9D9D9] rounded-lg">
        <div class="w-5/12 flex items-center justify-between">
            <div class="flex">
                <img :src="data.image" class="h-full"/>
                <div class="relative ml-4">
                    <p class="text-xl text-black tracking-wide mb-2">{{ data.name }}</p>
                    <div class="absolute">
                        <NameTag :title="data.source_name" />
                    </div>
                </div>
            </div>
            <EnableFlag :enabled="data.enabled" size="lg"/>
        </div>
        <div class="w-5/12 flex items-center justify-between">
            <div class="w-8/12 flex flex-col py-2 px-4 border border-[#D9D9D9] rounded-lg">
                <div class="connected-instances flex mb-1">
                    <img
                        v-for="instance of connectedInstances"
                        :key="instance.id"
                        :src="instance.image"
                    >
                </div>
                <p class="text-xs text-[#9F9F9F]">{{ instanceType }}</p>
            </div>
            <EditButton size="lg" />
        </div>
    </div>
</template>
<script>
import EditButton from "@/components/EditButton.vue";
import EnableFlag from "@/components/EnableFlag.vue";
export default {
    components: {EditButton, EnableFlag},
    props: ["data", "srcToDest", "destToSrc"],
    name: 'ConnectionGroup',
    computed: {
        connectedInstances() {
            if (this.srcToDest != undefined) {
                return this.data.destinations;
            }
            else if (this.destToSrc != undefined) {
                return this.data.sources;
            }
        },
        instanceType() {
            if (this.srcToDest != undefined) {
                return "destinations";
            }
            else if (this.destToSrc != undefined) {
                return "sources";
            }
        }
    }
}
</script>
<style scoped>
.connected-instances {
    img {
        height: 100%;
        margin-right: 32px;
    }
}
</style>