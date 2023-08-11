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
        <template v-for="(connectionDetail, idx) of connections" :key="idx">
          <div class="mb-8">
            <ConnectionInstance
              :sourceDetail="connectionDetail.source_detail"
              :destinationDetail="connectionDetail.destination_detail"
              :connection="connectionDetail.connection"
              @onDeleteConnection="handleConnectionDelete"
            />
          </div>
        </template>
        <template v-if="connections.length == 0">
          <p class="text-xl tracking-wide font-bold">No Available Connections</p>
        </template>
      </template>
    </NuxtLayout>
  </template>
  <script>
  import ConnectionInstance from "@/components/Connections/Connection.vue";
  import Button from "@/components/Button.vue";
  import { FetchAllConnections } from "@/apis/connection";
  export default {
    name: 'Connections',
    components: { ConnectionInstance },
    data() {
      return {
        connections: []
      }
    },
    methods: {
      async handleConnectionDelete() {
        this.connections = await FetchAllConnections();
      }
    },
    async created() {
      this.connections = await FetchAllConnections();
    }
  }
  </script>
  <style scoped>
  </style>