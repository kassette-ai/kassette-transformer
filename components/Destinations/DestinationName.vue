<template>
    <p class="text-3xl font-bold tracking-wide mb-8">{{ title }}</p>
    <p class="text-2xl tracking-wide mb-8">{{ subTitle }}</p>
    <div class="flex justify-center mt-32">
        <div class="flex flex-col">
            <p class="text-2xl font-bold tracking-wide mb-4">Name this Destination</p>
            <Input
                size="xl"
                class="mb-4 w-[500px]"
                :value="destinationname"
                :validate="validated"
                @onChange="onChange"
            />
            <p class="text-2xl tracking-wide">{{ subTitle }}</p>
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
    name: 'DestinationName',
    props: ["name", "destinationname"],
    emits: ["onChange", "onNext"],
    components: { Button, Input },
    data() {
        return {
            validated: "",
        }
    },  
    computed: {
        title() {
            if (!this.destinationname) {
                return `New ${this.name} Destination`;
            } else {
                return `Update ${this.name} Destination`;
            }
        },
        subTitle() {
            if (!this.destinationname) {
                return `Add new ${this.name} Destination`;
            } else {
                return `Modify the ${this.name} Destination`;
            }
        }
    },
    methods: {
        onChange(value) {
            this.$emit("onChange", value);
        },
        onClick() {
            if (this.destinationname.length == 0) {
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