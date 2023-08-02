<template>
    <div>
        <Sidebar/>
        <slot name="content"/>
    </div>
</template>

<script>
import { Sidebar } from "components";
</script>