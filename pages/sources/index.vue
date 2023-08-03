<template>
    <NuxtLayout>
        <template #content>
            <div class="w-10/12">
                <p class="text-3xl font-bold tracking-wide mb-8">Sources</p>
                <div class="flex justify-between items-center">
                    <p class="text-2xl tracking-wide mb-8">Existing Sources of events and Data</p>
                    <NuxtLink to="/directory?tab=sources">
                        <Button title="New Source" />
                    </NuxtLink>
                </div>
                <div class="flex flex-col">
                    <template v-for="connection of srcConnections" :key="connection.id">
                        <div class="mb-8">
                            <ConnectionGroup
                                :data="connection"
                                :srcToDest="true"
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
export default {
    data() {
        return {
            srcConnections: [
                {
                    id: 1,
                    name: 'Customer Joining Workflow',
                    image: 'camunda.png',
                    source_name: 'Camunda',
                    enabled: true,
                    destinations: [
                        {
                            id: 1,
                            name: 'ServiceNow',
                            image: 'servicenow.png',
                            enabled: true,
                        },
                        {
                            id: 2,
                            name: 'PowerBI',
                            image: 'powerbi.png',
                            enabled: true,
                        },
                        {
                            id: 3,
                            name: 'Postgres',
                            image: 'postgres.png',
                            enabled: true,
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Customer Event Queue',
                    image: 'amqp.png',
                    source_name: 'AMQP',
                    enabled: true,
                    destinations: [
                        {
                            id: 1,
                            name: 'ServiceNow',
                            image: 'servicenow.png',
                            enabled: true,
                        },
                        {
                            id: 2,
                            name: 'PowerBI',
                            image: 'powerbi.png',
                            enabled: true,
                        },
                    ]
                },
            ]
        }
    },
    components: { ConnectionGroup, Button },
    name: 'sources',
}
</script>
<style scoped>
</style>