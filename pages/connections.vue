<template>
  <NuxtLayout>
    <template #content>
      <p class="text-3xl font-bold tracking-wide mb-8">Connections</p>
      <p class="text-2xl tracking-wide mb-8">Connect to your sources to destinations</p>
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
export default {
  data() {
    return {
      connections: [
        {
          id: 1,
          source: {
            id: 1,
            title: 'Customer Joining Workflow',
            source_name: 'Camunda',
            enabled: "enabled",
            image: 'camunda.png',
          },
          destination: {
            id: 1,
            title: 'ServiceNow Enterprise',
            source_name: 'ServiceNow',
            enabled: "enabled",
            image: 'servicenow.png',
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