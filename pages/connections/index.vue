<template>
    <NuxtLayout>
      <template #content>
        <p class="text-3xl font-bold tracking-wide mb-8">Connections</p>
        <div class="flex justify-between items-center mb-8">
            <p class="text-2xl tracking-wide">Connect to your sources to destinations</p>
            <NuxtLink to="/connections/new">
                <Button title="New Connection" />
            </NuxtLink>
        </div>
        <template v-for="connection of connections" :key="connection.id">
          <div class="mb-8">
            <ConnectionInstance :data="connection"/>
          </div>
        </template>
      </template>
    </NuxtLayout>
  </template>
  <script>
  import ConnectionInstance from "@/components/Connections/Connection.vue";
  import Button from "@/components/Button.vue";
  export default {
    data() {
      return {
        connections: [
          {
            id: 1,
            source: {
              id: 1,
              name: 'Customer Joining Workflow',
              catalogue_name: 'Camunda',
              enabled: "enabled",
              iconurl: 'camunda.png',
            },
            destination: {
              id: 1,
              name: 'ServiceNow Enterprise',
              catalogue_name: 'ServiceNow',
              enabled: "enabled",
              iconurl: 'servicenow.png',
            }
          }
        ]
      }
    },
    name: 'Connections',
    components: { ConnectionInstance }
  }
  </script>
  <style scoped>
  </style>