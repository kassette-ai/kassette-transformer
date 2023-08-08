<template>
    <p
        :class="classnames"
        @click="handleClick"
    >
        {{ title }}
    </p>
</template>
<script>
export default {
    name: 'EditButton',
    props: ["size", "title"],
    emits: ["click"],
    computed: {
        classnames() {
            const basenames = "font-bold underline underline-offset-2 edit-button";
            if (this.size == undefined) {
                return basenames + " text-xs";
            }
            return basenames + " text-" + this.size;
        },
        title() {
            if (this.title == undefined) {
                return "Edit";
            } else {
                return this.title;
            } 
        }
    },
    methods: {
        handleClick() {
            this.$emit("click");
        }
    }
}
</script>
<style scoped>
.edit-button:hover {
    cursor: pointer;
}
</style>