<template>
    <p :class="classnames">{{ content }}</p>
</template>
<script>
export default {
    props: ["enabled", "size"],
    name: "EnableFlag",
    computed: {
        classnames() {
            console.log(this.enabled);
            const color = this.enabled == 'enabled' ? "text-[#52B788]" : "text-red-500";
            const size = this.size == undefined ? "text-xs" : "text-" + this.size;
            return color + " " + size;
        },
        content() {
            return this.enabled.toUpperCase();
        }
    }
}
</script>
<style scoped>
</style>    