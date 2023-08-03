<template>
    <div :class="classnames">{{ title }}</div>
</template>
<script>
export default {
    props: ["title", "size"],
    computed: {
        classnames() {
            const basenames = "bg-black text-white p-2 rounded-lg tracking-widest w-fit";
            if (this.size == undefined) {
                return basenames + " text-xs";
            }
            return basenames + " text-" + this.size;
        },
    },
    name: "NameTag",
}
</script>
<style scoped>
</style>