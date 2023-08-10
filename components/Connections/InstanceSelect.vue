<template>
    <p class="text-xl tracking-wide font-bold mb-8">{{ GuideText }}</p>
    <template v-for="instance of instances" :key="instance.id">
        <div class="mb-4 w-full">
            <InstanceItem
                :data="instance"
                :type="type"
                :selected="instance.id == value"
                @onChange="handleSelectChange"
            />
        </div>
    </template>
    <Button
        size="lg"
        class="mt-8"
        title="Next"
        @onClick="handleNext"
    />
</template>
<script>
import Button from "@/components/Button";
import InstanceItem from './InstanceItem.vue';
export default {
    name: "InstanceSelect",
    props: ["instances", "type"],
    emits: ["onNext"],
    components: { InstanceItem },
    data() {
        return {
            value: -1,
        }
    },
    computed: {
        GuideText() {
            if(this.type == "source") {
                return "Select a source instance to create a connection";
            }
            else if(this.type == "destination") {
                return "Select a destination instance to create a destinatino";
            }
        }
    },
    methods: {
        handleSelectChange(value) {
            this.value = value;
        },
        handleNext() {
            if(this.value == -1) {
                alert("You should select 1 instance to continue!");
            } else {
                this.$emit("onNext");
            }
        }
    }
}
</script>
<style scoped>
</style>