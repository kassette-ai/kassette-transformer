<template>
    <Nuxt-Link :to="newLink">
        <div class="item-wrapper flex flex-row items-center w-[400px] py-8 pl-[13px] border border-black rounded-lg">
            <Img :src="data.iconurl" />
            <p class="text-black text-lg font-normal ml-6">{{ data.name }}</p>
        </div>
    </Nuxt-Link>
</template>
<script>
import Img from "@/components/Img.vue";
export default {
    name: 'DirectoryItem',
    components: { Img },
    props: ["data"],
    computed: {
        newLink() {
            const { id, type } = this.data;
            const params = new URLSearchParams({categoryID: id});
            if (type == "Source") {
                return `/sources/new?${params.toString()}`; 
            } else {
                return `/destinations/new?${params.toString()}`;
            }
        }
    },
}
</script>
<style>
.item-wrapper:hover {
    cursor: pointer;
}
</style>