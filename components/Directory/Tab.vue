<template>
    <div
        :class="classnames"
        @click="handleClickTab"
    >
        <p class="text-2xl">{{ data.title }}</p>
    </div>
</template>
<script>
export default {
    props: ["data"],
    methods: {
        handleClickTab() {
            this.$router.push(`/directory?tab=${this.data.value}`);
        }
    },
    computed: {
        classnames() {
            const basenames = 'directory-tab-item pr-8 mr-4';
            if (this.data.selected) {
                return basenames + ' text-[#52B788] border-[#52B788] border-b-2'
            }
            return basenames;
        }
    },
    name: 'DirectoryTab',
}
</script>
<style scoped>
.directory-tab-item:hover{
    cursor: pointer;
}
</style>
