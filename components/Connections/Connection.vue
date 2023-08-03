<template>
    <div class="flex flex-row items-center w-10/12">
        <div class="w-5/12">
            <ConnectionInstanceItem :data="data.source"/>
        </div>
        <div class="w-2/12 relative">
            <img src="public/RightArrowIcon.png" class="w-full"/>
            <div class="absolute left-[-16px] top-[-1px] h-full flex items-center bg-white">
                <PlusIcon />
            </div>
        </div>
        <div class="w-5/12">
            <ConnectionInstanceItem :data="data.destination"/>
        </div>
    </div>
</template>
<script>
import ConnectionInstanceItem from "./InstanceItem.vue";
import PlusIcon from "@/components/icons/PlusIcon";
export default {
    props: ["data"],
    name: "ConnectionInstance",
    components: {
        ConnectionInstanceItem,
        PlusIcon,
    },
}
</script>
<style scoped>
</style>
