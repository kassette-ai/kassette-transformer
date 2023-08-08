<template>
    <button
        :class="classnames"
        @click="handleClick"
    >{{ title }}</button>
</template>
<script>
export default {
    name: 'Button',
    props: ["title", "class", "size"],
    emits: ["onClick"],
    computed: {
        classnames() {
            const basenames = "bg-[#52B788] text-white rounded-lg p-2 tracking-widest";
            const extraclass = this.class != undefined ? this.class : "";
            const sizeclass = this.size != undefined ? "text-" + this.size : "text-xs";
            return basenames +  " " + sizeclass + " " + extraclass;
        }
    },
    methods: {
        handleClick() {
            this.$emit("onClick");
        }
    }
}
</script>
<style scoped>
</style>