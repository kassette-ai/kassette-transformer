<template>
    <template v-if="isTextField">
        <textarea
            :class="classnames"
            :disabled="disabled"
            :value="value"
            @change="onChange"
        />
    </template>
    <template v-else>
        <input
            :class="classnames"
            :disabled="disabled"
            :value="value"
            :type="type"
            :placeholder="placeholder"
            @change="onChange"
        />
    </template>
</template>
<script>
export default {
    name: "Input",
    props: ['class', 'size', 'type', 'disabled', 'value', 'textfield', 'keyID', 'validate', 'placeholder'],
    emits: ['onChange'],
    methods: {
        onChange(e) {
            let value;
            if (this.type == "file") {
                value = e.target.files[0];
            } else {
                value = e.target.value;
            }
            if (this.keyID == undefined) {
                this.$emit("onChange", value);
            } else {
                this.$emit("onChange", this.keyID, value);
            }
        }
    },
    computed: {
        isTextField() {
            return this.textfield != undefined;
        },
        classnames() {
            const size = this.size == undefined ? 'xs' : this.size;
            const baseclass = (this.validate === false) ? 'border border-red-500' : 'border border-[#3F3F3D] text-[#3F3F3D]';
            let sizeclass;
            if (size == 'xs') {
                sizeclass = 'p-2 text-xs rounded-xs tracking-normal';
            } else if(size == 'md') {
                sizeclass = 'p-2 text-md rounded-md tracking-wide';
            } else if(size == 'lg') {
                sizeclass = 'p-4 text-lg rounded-lg tracking-wider';
            } else if(size == 'xl') {
                sizeclass = 'p-4 text-xl rounded-xl tracking-widest';
            }
            return baseclass + ' ' + sizeclass + ' ' + (this.class == undefined ? "" : this.class);
        }
    }
}
</script>
<style scoped>
input, textarea {
    outline-color: #52B788;
}
textarea {
    min-height: 150px;
}
input:disabled {
    background-color: #c3c3c3;
}
</style>