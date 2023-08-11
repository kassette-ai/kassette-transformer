<template>
    <p class="text-xl tracking-wide font-bold mb-8">{{ guideText }}</p>
    <template v-for="item of instances" :key="item[detailKeyID][itemKeyID].id">
        <div class="mb-4 w-full">
            <InstanceItem
                :data="item[detailKeyID][itemKeyID]"
                :catalogue="item[detailKeyID]['catalogue']"
                :type="type"
                :selected="item[detailKeyID][itemKeyID].id == value"
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
    props: ["instances", "type", "value"],
    emits: ["onNext", "onChange"],
    components: { InstanceItem },
    computed: {
        guideText() {
            if(this.type == "source") {
                return "Select a source instance to create a connection";
            }
            else if(this.type == "destination") {
                return "Select a destination instance to create a connection";
            }
        },
        detailKeyID() {
            if(this.type == "source") {
                return "source_detail";
            }
            else if(this.type == "destination") {
                return "destination_detail";
            }
        },
        itemKeyID() {
            if(this.type == "source") {
                return "source";
            }
            else if(this.type == "destination") {
                return "destination";
            }
        }
    },
    methods: {
        handleSelectChange(value) {
            this.$emit("onChange", value)
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