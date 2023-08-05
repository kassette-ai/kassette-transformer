<template>
    <div :class="wrapperclasses">
        <p v-if="hasLabel" :class="labelclasses">{{ label }}</p>
        <Input
            class="w-full"
            :size="size"
            :type="type"
            :disabled="disabled"
            :value="value"
            :textfield="textfield"
            :keyID="keyID"
            :validate="validate"
            @onChange="onChange"
        />
    </div>
</template>
<script>
import Input from "@/components/Input.vue";
export default {
    name: "InputGroup",
    props: ["label", "size", "class", "type", "disabled", "value", "textfield", "keyID", "validate"],
    emit: ["onChange"],
    components: { Input },
    methods: {
        onChange(keyID, value) {
            this.$emit("onChange", keyID, value);
        }
    },
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
    }
}
</script>
<style scoped>
</style>