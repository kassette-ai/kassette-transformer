<template>
    <div>
        <TopNav/>
        <Sidebar/>
        <slot />
    </div>
</template>

<script>

import {defineComponent} from "vue";
import {Sidebar, TopNav} from "components";

// export default defineComponent({
//     components: {Sidebar, TopNav}
// })
</script>