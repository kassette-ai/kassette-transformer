<template>
    <div class="w-full flex flex-row pt-8 pb-2 pl-2 pr-8 border border-[#D9D9D9] rounded-lg">
        <img :src="data.image" class="h-full"/>
        <div class="w-full flex flex-col ml-6 text-xs">
            <p class="text-2xl text-black tracking-wide mb-2">{{ data.title }}</p>
            <div class="w-full flex flex-row items-center justify-between">
                <div class="bg-black text-white p-2 rounded-lg tracking-widest">{{ data.source_name }}</div>
                <p v-if="data.enabled" class="text-[#52B788]">Enabled</p>
                <p v-else class="text-red-500">Disabled</p>
                <p class="font-bold underline underline-offset-2 edit-button">Edit</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],
    name: "ConnectionInstanceItem",
}
</script>
<style scoped>
.edit-button:hover {
    cursor: pointer;
}
</style>
