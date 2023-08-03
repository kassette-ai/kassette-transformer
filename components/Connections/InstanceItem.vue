<template>
    <div class="w-full flex flex-row pt-8 pb-2 pl-2 pr-8 border border-[#D9D9D9] rounded-lg">
        <img :src="data.image" class="h-full"/>
        <div class="w-full flex flex-col ml-6 text-xs">
            <p class="text-xl text-black tracking-wide mb-2">{{ data.title }}</p>
            <div class="w-full flex flex-row items-center justify-between">
                <NameTag :title="data.source_name" />
                <EnableFlag :enabled="data.enabled" />
                <EditButton />
            </div>
        </div>
    </div>
</template>
<script>
import EditButton from "@/components/EditButton.vue";
import NameTag from "@/components/NameTag.vue";
import EnableFlag from "@/components/EnableFlag.vue";
export default {
    props: ["data"],
    name: "ConnectionInstanceItem",
    components: { EditButton, NameTag, EnableFlag },
}
</script>
<style scoped>
.edit-button:hover {
    cursor: pointer;
}
</style>
