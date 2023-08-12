<template>
    <div class="sidebar-wrapper border-solid border-0 border-r flex flex-col items-center">
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
import { markRaw } from "vue";
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
                    href: {
                        path: '/directory',
                        query: {
                            tab: 'sources',
                        }
                    },
                    icon: markRaw(DirectoryIcon),
                },
                {
                    id: 2,
                    title: 'Connections',
                    href: {
                        path: '/connections',
                    },
                    icon: markRaw(ConnectionsIcon),
                },
                {
                    id: 3,
                    title: 'Sources',
                    href: {
                        path: '/sources',
                    },
                    icon: markRaw(SourcesIcon),
                },
                {
                    id: 4,
                    title: 'Destinations',
                    href: {
                        path: '/destinations',
                    },
                    icon: markRaw(DestinationsIcon),
                },
                {
                    id: 5,
                    title: 'Transform',
                    href: {
                        path: '/transform',
                    },
                    icon: markRaw(TransformIcon),
                },
                {
                    id: 6,
                    title: 'Health',
                    href: {
                        path: '/health',
                    },
                    icon: markRaw(HealthIcon),
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
            if (currentPath.startsWith(item.href.path)) {
                item.selected = true;
            }
        }
    },
    name: "SideBar"
}
</script>
<style scoped>
.sidebar-wrapper {
    width: 400px;
    border-color: #9F9F9F;
    min-height: 100vh;
    height: auto;
}
</style>