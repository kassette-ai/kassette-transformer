<template>
  <NuxtLayout>
      <template #content>
          <div class="w-10/12">
              <p class="text-3xl font-bold tracking-wide mb-8">Destinations</p>
              <div class="flex justify-between items-center">
                  <p class="text-2xl tracking-wide mb-8">Existing Destinations of events and Data</p>
                  <NuxtLink to="/directory?tab=destinations">
                      <Button title="New Destination" />
                  </NuxtLink>
              </div>
              <div class="flex flex-col">
                  <template v-for="connection of destConnections" :key="connection.id">
                      <div class="mb-8">
                          <ConnectionGroup
                            :data="connection"
                            :destToSrc="true"
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
          destConnections: [
              {
                  id: 1,
                  name: 'Workforce management BI',
                  image: 'powerbi.png',
                  source_name: 'PowerBI',
                  enabled: true,
                  sources: [
                      {
                          id: 1,
                          name: 'Camunda',
                          image: 'camunda.png',
                          enabled: true,
                      },
                      {
                          id: 2,
                          name: 'AMQP',
                          image: 'amqp.png',
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
                  sources: [
                      {
                          id: 1,
                          name: 'Camunda',
                          image: 'camunda.png',
                          enabled: true,
                      },
                      {
                          id: 2,
                          name: 'AMQP',
                          image: 'amqp.png',
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