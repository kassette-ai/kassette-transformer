<template>
    <NuxtLink
        :to="data.href"
        @click="onClick"
        class="w-full"
    >
        <div :class="classnames">
            <div class="vertical-bar"></div>
            <div class="w-8">
                <component :is="data.icon" />
            </div>
            <p class="nav-item-title ml-8 p-0 text-[#3F3F3D] text-xl tracking-widest">{{ data.title }}</p>
        </div>
    </NuxtLink>
</template>
<script>
export default {
    props: ["data"],
    emits: ["click"],
    computed: {
        classnames() {
            const basenames = 'nav-item w-full flex flex-row items-center py-4 pl-16';
            if (this.data.selected) {
                return basenames + ' selected';
            }
            return basenames;
        }
    },
    methods: {
        onClick() {
            this.$emit("click", this.data.id);
        }  
    },
    name: "NavItem",
}
</script>
<style scoped>
.nav-item {
    font-family: "Inter";
    position: relative
}
.nav-item:hover {
    cursor: pointer;
}
.selected {
    .nav-item-title {
        color: #52B788;
    }
    background-color: rgba(174, 208, 158, 0.38);
}
.vertical-bar {
    display: none;
}
.selected {
    .vertical-bar {
        position: absolute;
        width: 18px;
        height: 100%;
        left: 0px;
        background: #B7E4C7;
        display: block;
    }
}
</style>
