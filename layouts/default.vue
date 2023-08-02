<template>
    <div class="flex flex-row">
        <Sidebar/>
        <div class="px-12 py-6">
            <slot name="content"/>
        </div>
    </div>
</template>

<script>
import { Sidebar } from "components";
</script>