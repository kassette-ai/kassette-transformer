<template>
    <button :class="classnames">{{ title }}</button>
</template>
<script>
export default {
    props: ["title", "class", "size"],
    name: 'Button',
    computed: {
        classnames() {
            const basenames = "bg-[#52B788] text-white rounded-lg p-2 tracking-widest";
            const extraclass = this.class != undefined ? this.class : "";
            const sizeclass = this.size != undefined ? "text-" + this.size : "text-xs";
            return basenames +  " " + sizeclass + " " + extraclass;
        }
    }
}
</script>
<style scoped>
</style>