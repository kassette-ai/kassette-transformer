<template>
    <NuxtLayout>
        <template #content>
            <div class="w-10/12">
                <p class="text-3xl font-bold tracking-wide mb-8">Destinations</p>
                <div class="flex justify-between items-center mb-8">
                    <p class="text-2xl tracking-wide">Existing Destinations of events and Data</p>
                    <NuxtLink to="/directory?tab=destinations">
                        <Button title="New Destination" />
                    </NuxtLink>
                </div>
                <div class="flex flex-col">
                    <template v-for="connection of destConnections" :key="connection.destination_detail.destination.id">
                        <div class="mb-8">
                            <ConnectionGroup
                                :data="connection"
                                :destToSrc="true"
                                @onDelete="handleDeleteChange"
                            />
                        </div>
                    </template>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>
<script>
import ConnectionGroup from "@/components/ConnectionGroup.vue";
import Button from "@/components/Button.vue";
import { FetchAllDestinations } from "@/apis/destination";
export default {
    name: 'sources',
    components: { ConnectionGroup, Button },
    methods: {
        async handleDeleteChange() {
            this.destConnections = await FetchAllDestinations();
        }
    },
    data() {
        return {
            destConnections: [],
        }
    },
    async created() {
        this.destConnections = await FetchAllDestinations();
    }
}
</script>
<style scoped>
</style>