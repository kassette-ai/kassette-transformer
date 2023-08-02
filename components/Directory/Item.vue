<template>
    <div class="item-wrapper flex flex-row items-center w-[400px] py-8 pl-[13px] border border-black rounded-lg">
        <img :src="data.image" />
        <p class="text-black text-lg font-normal ml-6">{{ data.title }}</p>
    </div>    
</template>
<script>
export default {
    props: ["data"],
    name: 'DirectoryItem',
}
</script>
<style>
.item-wrapper:hover {
    cursor: pointer;
}
</style>