<template>
    <p class="text-3xl font-bold tracking-wide mb-8">New {{ name }} Source</p>
    <p class="text-2xl tracking-wide mb-8">Add new {{ name }} Source</p>
    <div class="flex justify-center mt-32">
        <div class="flex flex-col">
            <p class="text-2xl font-bold tracking-wide mb-4">Name this Source</p>
            <Input
                size="xl"
                class="mb-4 w-[500px]"
                :value="sourcename"
                :validate="validated"
                @onChange="onChange"
            />
            <p class="text-2xl tracking-wide">Add new {{ name }} Source</p>
        </div>
    </div>
    <Button
        title="Continue"
        size="md"
        class="absolute bottom-0 right-0"
        @onClick="onClick"
    />
</template>
<script>
import Button from "@/components/Button";
import Input from "@/components/Input";
export default {
    name: 'SourceName',
    props: ["name", "sourcename"],
    emits: ["onChange", "onNext"],
    components: { Button, Input },
    data() {
        return {
            validated: "",
        }
    },  
    methods: {
        onChange(value) {
            this.$emit("onChange", value);
        },
        onClick() {
            if (this.sourcename.length == 0) {
                this.validated = false;
            } else {
                this.validated = true;
                this.$emit("onNext");
            }
        }
    }
}
</script>
<style scoped>
</style>