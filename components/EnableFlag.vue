<template>
    <p :class="classnames">{{ content }}</p>
</template>
<script>
export default {
    props: ["enabled", "size"],
    name: "EnableFlag",
    computed: {
        classnames() {
            const color = this.enabled ? "text-[#52B788]" : "text-red-500";
            const size = this.size == undefined ? "text-xs" : "text-" + this.size;
            return color + " " + size;
        },
        content () {
            return this.enabled ? "Enabled" : "Disabled";
        }
    }
}
</script>
<style scoped>
</style>