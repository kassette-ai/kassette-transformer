<template>
    <NuxtLayout>
        <template #content>
            <div class="w-10/12">
                <p class="text-3xl font-bold tracking-wide mb-8">Sources</p>
                <div class="flex justify-between items-center mb-8">
                    <p class="text-2xl tracking-wide">Existing Sources of events and Data</p>
                    <NuxtLink to="/directory?tab=sources">
                        <Button title="New Source" />
                    </NuxtLink>
                </div>
                <div class="flex flex-col">
                    <template v-for="connection of srcConnections" :key="connection.source_detail.source.id">
                        <div class="mb-8">
                            <ConnectionGroup
                                :data="connection"
                                :srcToDest="true"
                                @onDelete="handleDeleteChange"
                            />
                        </div>
                    </template>
                    <template v-if="srcConnections.length == 0">
                        <p class="text-xl tracking-wide font-bold">No Available Sources</p>
                    </template>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>
<script>
import ConnectionGroup from "@/components/ConnectionGroup.vue";
import Button from "@/components/Button.vue";
import { FetchAllSources } from "@/apis/source";
export default {
    name: 'sources',
    components: { ConnectionGroup, Button },
    methods: {
        async handleDeleteChange() {
            this.srcConnections = await FetchAllSources();
        }
    },
    data() {
        return {
            srcConnections: [],
        }
    },
    async created() {
        this.srcConnections = await FetchAllSources();
    }
}
</script>
<style scoped>
</style>