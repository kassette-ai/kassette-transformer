<template>
    <div class="item-wrapper">
        <div class="max-w-[8%] w-[8%]">{{ data.source_name }}</div>
        <div class="max-w-[8%] w-[8%]">{{ data.destination_name}}</div>
        <div class="max-w-[5%] w-[5%] text-center">{{ data.attempt_num}}</div>
        <div class="max-w-[9%] w-[9%]">{{ data.exec_time }}</div>
        <div class="max-w-[20%] w-[20%]">{{ json_to_string(data.destination_config) }}</div>
        <div class="max-w-[25%] w-[25%]">{{ json_to_string(data.error_response) }}</div>
        <div class="max-w-[25%] w-[25%]">{{ json_to_string(data.payload) }}</div>
    </div>
</template>
<script>
export default {
    name: "HealthPageItem",
    props: ["data"],
    methods: {
        json_to_string(jsonData) {
            if (jsonData == null) {
                return ""
            } else {
                return JSON.stringify(jsonData)
            }
        }
    }
}
</script>
<style scoped>
.item-wrapper {
    @apply flex flex-row my-3
}
.item-wrapper div {
    @apply break-all px-2 h-[200px] overflow-y-auto
}
</style>
