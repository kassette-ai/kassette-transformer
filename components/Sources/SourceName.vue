<template>
    <p class="text-3xl font-bold tracking-wide mb-8">New Camunda Source</p>
    <p class="text-2xl tracking-wide mb-8">Add new Camunda Source</p>
    <div class="flex justify-center mt-32">
        <div class="flex flex-col">
            <p class="text-2xl font-bold tracking-wide mb-4">Name this Source</p>
            <input class="w-[537px] h-[54px] rounded-xl border border-[#3F3F3D] mb-4" />
            <p class="text-2xl tracking-wide">Add new Camunda Source</p>
        </div>
    </div>
    <Button title="Continue" size="md" class="absolute bottom-0 right-0" />
</template>
<script>
import Button from "@/components/Button";
export default {
    components: { Button },
    name: 'SourceName',
}
</script>
<style scoped>
</style>