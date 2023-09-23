<template>
  <NuxtLayout>
    <template #content>
      <p class="text-3xl font-bold tracking-wide mb-8">Health</p>
      <div class="tracking-wide rounded-lg px-8 py-4 border border-[#D9D9D9] text-black flex flex-col w-full">
        <div class="health-table-header">
          <div class="w-[8%]">
            Source
          </div>
          <div class="w-[8%]">
            Dest
          </div>
          <div class="w-[5%]">
            Retry
          </div>
          <div class="w-[9%]">
            ExecTime
          </div>
          <div class="w-[20%]">
            DestConfig
          </div>
          <div class="w-[25%]">
            ErrorResponse
          </div>
          <div class="w-[25%]">
            Payload
          </div>
        </div>
        <div class="health-table-body">
          <template v-for="job of failedJobs">
            <HealthPageItem :data="job"/>
          </template>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script>
import HealthPageItem from "@/components/HealthPage/Item.vue"
import { GetServerHealth } from "@/apis/health"
export default {
  name: "health",
  components: {HealthPageItem},
  data() {
    return {
      failedJobs: [],
      refreshIntervalMS: 5 * 60 * 1000,
    }
  },
  async created() {
    this.failedJobs = await GetServerHealth()
    setInterval(async () => {
      this.failedJobs = await GetServerHealth()
    }, this.refreshIntervalMS);
  }
}
</script>
<style scoped>
.health-table-header {
  @apply flex flex-row mb-4
}
.health-table-header div {
  @apply text-lg font-bold text-center
}
</style>
