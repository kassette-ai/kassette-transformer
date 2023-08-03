<template>
    <button class="bg-[#52B788] text-white rounded-lg text-xs p-2 tracking-widest">{{ title }}</button>
</template>
<script>
export default {
    props: ["title"],
    name: 'Button'
}
</script>
<style scoped>
</style>