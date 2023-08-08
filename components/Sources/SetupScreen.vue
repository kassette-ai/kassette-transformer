<template>
    <div class="flex flex-col items-center justify-center border border-[#3F3F3D] rounded-xl p-8 h-[400px]">
        <p class="text-2xl tracking mb-8">
            Click <a :href="catalogue.url" target="_blank">{{ catalogue.name }} Installation Guide</a> to follow the installation guide.
        </p>
        <p class="text-2xl tracking">
            WriteKey: {{ source.write_key }}
        </p>
    </div>
</template>
<script>
export default {
    name: "SetupScreen",
    props: ["catalogue", "source"],
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: #52B788;
}
</style>