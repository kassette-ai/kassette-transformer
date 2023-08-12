<template>
    <div class="w-full flex flex-row items-center">
        <div class="w-5/12">
            <ConnectionInstanceItem
                :data="sourceDetail.source"
                :catalogue="sourceDetail.catalogue"
                type="source"
            />
        </div>
        <div class="w-2/12 flex flex-col items-center justify-center relative">
            <img :src="RightArrowIcon" class="w-full"/>
            <div class="absolute left-[-16px] top-[-1px] h-full flex items-center bg-white">
                <PlusIcon />
            </div>
            <div class="absolute w-full top-[-25px] flex items-center justify-center">
                <NuxtLink
                    v-if="isViewMode"
                    :to="`/connections/edit?id=${connection.id}`"
                >
                    <EditButton size="md" title="Edit Connection" />
                </NuxtLink>
            </div>
            <div class="absolute w-full top-[25px] flex items-center justify-center">
                <EditButton 
                    v-if="isViewMode"
                    size="md"
                    title="Delete Connection"
                    class="text-red-500"
                    @click="() => handleConnectionDelete(connection.id)"
                />
            </div>
        </div>
        <div class="w-5/12">
            <ConnectionInstanceItem
                :data="destinationDetail.destination"
                :catalogue="destinationDetail.catalogue"
                type="destination"
            />
        </div>
    </div>
</template>
<script>
import ConnectionInstanceItem from "./InstanceItem.vue";
import EditButton from "@/components/EditButton.vue";
import PlusIcon from "@/components/icons/PlusIcon";
import RightArrowIcon from "@/assets/icons/RightArrowIcon.png";
import { DeleteConnectionByID } from "@/apis/connection";
export default {
    props: ["sourceDetail", "destinationDetail", "connection"],
    name: "ConnectionInstance",
    $emits: ["onDeleteConnection"],
    components: {
        ConnectionInstanceItem,
        PlusIcon,
        EditButton,
    },
    data() {
        return {
            RightArrowIcon: RightArrowIcon,
        }
    },
    computed: {
        isViewMode() {
            return this.connection != undefined;
        }
    },
    methods: {
        async handleConnectionDelete(id) {
            if (confirm("Are you sure to delete the connection? It won't be recoverable.")) {
                const res = await DeleteConnectionByID(id);
                if (res.success) {
                    alert("Successfully Deleted!");
                    this.$emit("onDeleteConnection");
                } else {
                    alert("Deletion Failed!");
                }
            }
        }
    }
}
</script>
<style scoped>
</style>
