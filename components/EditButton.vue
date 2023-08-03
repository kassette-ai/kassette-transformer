<template>
    <p :class="classnames">Edit</p>
</template>
<script>
export default {
    props: ["size"],
    computed: {
        classnames() {
            const basenames = "font-bold underline underline-offset-2 edit-button";
            if (this.size == undefined) {
                return basenames + " text-xs";
            }
            return basenames + " text-" + this.size;
        }
    },
    name: 'EditButton',
}
</script>
<style scoped>
.edit-button:hover {
    cursor: pointer;
}
</style>