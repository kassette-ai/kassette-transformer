<template>
    <div class="w-full flex items-center justify-between py-4 px-4 border border-[#D9D9D9] rounded-lg">
        <div class="w-5/12 flex items-center justify-between">
            <div class="flex">
                <Img :src="catalogue.iconurl" />
                <div class="relative ml-4">
                    <p class="text-xl text-black tracking-wide mb-2">{{ fromInstance.name }}</p>
                    <div class="absolute">
                        <NameTag :title="catalogue.name" />
                    </div>
                </div>
            </div>
            <EnableFlag :enabled="fromInstance.status" size="lg"/>
        </div>
        <div class="w-5/12 flex items-center justify-between">
            <div class="w-8/12 flex flex-col py-2 px-4 border border-[#D9D9D9] rounded-lg">
                <div class="connected-instances flex mb-1 h-[50px]">
                    <img
                        v-for="instance of connectedInstances"
                        :key="instance.id"
                        :src="instance.image"
                    >
                </div>
                <p class="text-xs text-[#9F9F9F]">{{ instanceType }}</p>
            </div>
            <div class="flex flex-col items-center">
                <NuxtLink :to="editLink">
                    <EditButton
                        size="lg"
                        class="mb-3"
                    />
                </NuxtLink>
                <EditButton
                    size="lg"
                    title="Delete"
                    class="text-red-500"
                    @click="() => handleDelete(fromInstance.id)"
                />
            </div>
        </div>
    </div>
</template>
<script>
import EditButton from "@/components/EditButton.vue";
import EnableFlag from "@/components/EnableFlag.vue";
import Img from "@/components/Img.vue";
import { DeleteSourceByID } from "@/apis/source";
import { DeleteDestinationByID } from "@/apis/destination";
export default {
    components: { EditButton, EnableFlag, Img },
    props: ["data", "srcToDest", "destToSrc"],
    emits: ["onDelete"],
    name: 'ConnectionGroup',
    computed: {
        fromInstance() {
            if (this.srcToDest != undefined) {
                return this.data.source_detail.source;
            }
            else if (this.destToSrc != undefined) {
                return this.data.destination_detail.destination;
            }
        },
        editLink() {
            if (this.srcToDest != undefined) {
                return `/sources/edit?id=${this.fromInstance.id}`;
            }
            else if(this.destToSrc != undefined) {
                return `/destinations/edit?id=${this.fromInstance.id}`;
            }
        },
        catalogue() {
            if (this.srcToDest != undefined) {
                return this.data.source_detail.catalogue;
            }
            else if(this.destToSrc != undefined) {
                return this.data.destination_detail.catalogue;
            }
        },
        connectedInstances() {
            if (this.srcToDest != undefined) {
                return this.data.destination_details;
            }
            else if (this.destToSrc != undefined) {
                return this.data.source_details;
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
    },
    methods: {
        async handleDelete(id) {
            if(confirm("Are you sure to delete it? It won't be recoverable!")) {
                if (this.srcToDest != undefined) {
                    const res = await DeleteSourceByID(id);
                    if (res.success) {
                        alert("Successfully Removed!");
                        this.$emit("onDelete");
                    } else {
                        alert("Deletion Failed!");
                    }
                }
                else if (this.destToSrc != undefined) {
                    const res = await DeleteDestinationByID(id);
                    if (res.success) {
                        alert("Successfully Removed!");
                        this.$emit("onDelete");
                    } else {
                        alert("Deletion Failed!");
                    }
                }
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