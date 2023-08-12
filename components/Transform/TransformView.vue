<template>
    <div class="w-full flex flex-row justify-center">
        <template v-if="isMapping">
            <p class="text-lg tracking-wide w-3/12 justify-center flex font-bold">{{ data.from }}</p>
            <p class="text-lg tracking-wide w-2/12 justify-center flex"> -> </p>
            <p class="text-lg tracking-wide w-3/12 justify-center flex font-bold">{{ data.to }}</p>
        </template>
        <template v-else>
            <p class="text-lg tracking-wide w-8/12 justify-center items-center flex font-bold">{{ data.field }} <span class="text-xs ml-2">WILL BE HIDED</span></p>
        </template>
    </div>
</template>
<script>
export default {
    name: "TransformView",
    props: ["data"],
    computed: {
        isMapping() {
            return this.data.type == "field_map";
        }
    }
}
</script>
<style scoped>
</style>