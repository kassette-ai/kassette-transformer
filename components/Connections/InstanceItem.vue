<template>
    <div :class="classnames" @click="handleClick">
        <Img :src="catalogue.iconurl" class="h-full"/>
        <div class="w-full flex flex-col ml-6 text-xs">
            <p class="text-xl text-black tracking-wide mb-2">{{ data.name }}</p>
            <div class="w-full flex flex-row items-center justify-between">
                <div class="w-[33%]">
                    <NameTag :title="catalogue.name" />
                </div>
                <div class="flex justify-center w-[33%]">
                    <EnableFlag :enabled="data.status" />
                </div>
                <div class="flex justify-end w-[33%]">
                    <NuxtLink :to="editLink">
                        <EditButton />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EditButton from "@/components/EditButton.vue";
import NameTag from "@/components/NameTag.vue";
import EnableFlag from "@/components/EnableFlag.vue";
import Img from "@/components/Img.vue";
export default {
    name: "ConnectionInstanceItem",
    props: ["data", "catalogue", "type", "selected"],
    emits: ["onChange"],
    components: { EditButton, NameTag, EnableFlag, Img },
    computed: {
        classnames() {
            const basenames = "w-full flex flex-row pt-8 pb-2 pl-2 pr-8 rounded-lg instance-item-wrapper";
            if (this.selected) {
                return basenames + " border-2 border-[#52B788]";
            } else {
                return basenames + " border border-[#D9D9D9]";
            }
        },
        editLink() {
            if (this.type == "source") {
                return `/sources/edit?id=${this.data.id}`;
            }
            else if (this.type == "destination") {
                return `/destinations/edit?id=${this.data.id}`;
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
