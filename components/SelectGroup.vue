<template>
    <div :class="wrapperclasses">
        <p v-if="hasLabel" :class="labelclasses">{{ label }}</p>
        <Select
            :size="size"
            :type="type"
            :disabled="disabled"
            :value="value"
            :options="options"
            :keyID="keyID"
            :validate="validate"
            @onChange="onChange"
            class="w-full"
        />
    </div>
</template>
<script>
import Select from "@/components/Select.vue";
export default {
    name: "SelectGroup",
    components: { Select },
    props: ["label", "size", "class", "type", "disabled", "value", "options", "keyID", "validate"],
    emits: ["onChange"],
    computed: {
        hasLabel() {
            return this.label !== undefined;
        },
        wrapperclasses() {
            if (this.class == undefined) {
                return "flex flex-col";
            } else {
                return "flex flex-col " + this.class;
            }
        },
        labelclasses() {
            const size = this.size == undefined ? 'xs' : this.size;
            const baseclass = 'text-[#3F3F3D]';
            let sizeclass;
            if (size == 'xs') {
                sizeclass = 'mb-2 text-xs tracking-normal';
            } else if(size == 'md') {
                sizeclass = 'mb-2 text-md tracking-wide';
            } else if(size == 'lg') {
                sizeclass = 'mb-4 text-lg tracking-wider';
            } else if(size == 'xl') {
                sizeclass = 'mb-4 text-xl tracking-widest';
            }
            return baseclass + ' ' + sizeclass;
        }
    },
    methods: {
        onChange(keyID, value) {
            this.$emit("onChange", keyID, value);
        }
    }
}
</script>
<style scoped>
</style>