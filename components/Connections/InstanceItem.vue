<template>
    <div :class="classnames" @click="handleClick">
        <img :src="data.iconurl" class="h-full"/>
        <div class="w-full flex flex-col ml-6 text-xs">
            <p class="text-xl text-black tracking-wide mb-2">{{ data.name }}</p>
            <div class="w-full flex flex-row items-center justify-between">
                <div class="w-[33%]">
                    <NameTag :title="data.catalogue_name" />
                </div>
                <div class="flex justify-center w-[33%]">
                    <EnableFlag :enabled="data.enabled" />
                </div>
                <div class="flex justify-end w-[33%]">
                    <EditButton />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EditButton from "@/components/EditButton.vue";
import NameTag from "@/components/NameTag.vue";
import EnableFlag from "@/components/EnableFlag.vue";
export default {
    name: "ConnectionInstanceItem",
    props: ["data", "type", "selected"],
    emits: ["onChange"],
    components: { EditButton, NameTag, EnableFlag },
    computed: {
        classnames() {
            const basenames = "w-full flex flex-row pt-8 pb-2 pl-2 pr-8 rounded-lg instance-item-wrapper";
            if (this.selected) {
                return basenames + " border-2 border-[#52B788]";
            } else {
                return basenames + " border border-[#D9D9D9]";
            }
        }
    },
    methods: {
        handleClick() {
            this.$emit("onChange", this.data.id);
        }
    }
}
</script>
<style scoped>
.edit-button:hover {
    cursor: pointer;
}
.instance-item-wrapper:hover {
    cursor: pointer;
}
</style>
