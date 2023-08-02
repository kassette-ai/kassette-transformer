<template>
    <div class="sidebar-wrapper h-screen border-solid border-0 border-r flex flex-col items-center">
        <LogoHeader />
        <template v-for="item in navItems" :key="item.id">
            <NavItem
                :data="item"
                @click="handleNavItemClick"
            />
        </template>
    </div>
</template>
<script>
import LogoHeader from "./LogoHeader.vue";
import NavItem from "./NavItem.vue";
import DirectoryIcon from "./icons/DirectoryIcon.vue";
import ConnectionsIcon from "./icons/ConnectionsIcon.vue";
import SourcesIcon from "./icons/SourcesIcon.vue";
import DestinationsIcon from "./icons/DestinationsIcon.vue";
import TransformIcon from "./icons/TransformIcon.vue";
import HealthIcon from "./icons/HealthIcon.vue";
export default {
    components: {
        LogoHeader,
        NavItem,
    },
    data() {
        return {
            navItems: [
                {
                    id: 1,
                    title: 'Directory',
                    href: '/directory',
                    icon: DirectoryIcon,
                },
                {
                    id: 2,
                    title: 'Connections',
                    href: '/connections',
                    icon: ConnectionsIcon,
                },
                {
                    id: 3,
                    title: 'Sources',
                    href: '/sources',
                    icon: SourcesIcon,
                },
                {
                    id: 4,
                    title: 'Destinations',
                    href: '/destinations',
                    icon: DestinationsIcon,
                },
                {
                    id: 5,
                    title: 'Transform',
                    href: '/transform',
                    icon: TransformIcon,
                },
                {
                    id: 6,
                    title: 'Health',
                    href: '/health',
                    icon: HealthIcon,
                },
            ]
        }
    },
    methods: {
        handleNavItemClick(id) {
            for(const item of this.navItems) {
                if (item.id == id) {
                    item.selected = true
                }
                else {
                    item.selected = false;
                }
            }
        }
    },
    created() {
        const currentPath = this.$route.path;
        for (const item of this.navItems) {
            if (item.href == currentPath) {
                item.selected = true;
            }
        }
    },
    name: "SideBar"
}
</script>
<style scoped>
.sidebar-wrapper {
    width: 364px;
    border-color: #c3c3c3;
}
</style>