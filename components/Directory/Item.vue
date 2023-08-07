<template>
    <div class="item-wrapper flex flex-row items-center w-[400px] py-8 pl-[13px] border border-black rounded-lg">
        <img :src="imageUrl(data.iconurl)" />
        <p class="text-black text-lg font-normal ml-6">{{ data.name }}</p>
    </div>    
</template>
<script>
export default {
    props: ["data"],
    name: 'DirectoryItem',
    methods: {
        imageUrl(img_url) {
            return `${import.meta.env.VITE_APP_BACKEND_BASE}/${img_url}`;
        }
    }
}
</script>
<style>
.item-wrapper:hover {
    cursor: pointer;
}
</style>