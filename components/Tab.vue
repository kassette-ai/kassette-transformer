<template>
    <div
        :class="classnames"
        @click="handleClickTab"
    >
        <p :class="pclassnames">{{ data.title }}</p>
    </div>
</template>
<script>
export default {
    props: ["data", "class"],
    emits: ["onTabChange"],
    methods: {
        handleClickTab() {
            this.$emit("onTabChange", this.data.id);
        }
    },
    computed: {
        classnames() {
            let basenames = 'directory-tab-item pr-8 mr-4';
            if (this.data.selected) {
                basenames += ' border-[#52B788] border-b-2'
            }
            return basenames + ' ' + (this.class != undefined ? this.class : '');
        },
        pclassnames() {
            if (this.data.selected) {
                return "text-2xl text-[#52B788]";
            } else {
                return "text-2xl";
            }
        }
    },
    name: 'Tab',
}
</script>
<style scoped>
.directory-tab-item:hover{
    cursor: pointer;
}
</style>
