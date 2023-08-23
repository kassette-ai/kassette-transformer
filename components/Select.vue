<template>
    <select
        :class="classnames"
        :disabled="disabled"
        :value="value"
        @change="onChange"
    >
        <option
            v-for="option of options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>
<script>
export default {
    props: ['class', 'size', 'type', 'disabled', 'value', 'options', 'keyID', 'validate'],
    emit: ['onChange'],
    name: "Select",
    computed: {
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
            return baseclass + ' ' + sizeclass + (this.class == undefined ? "" : this.class);
        }
    },
    methods: {
        onChange(e) {
            this.$emit("onChange", this.keyID, e.target.value);
        }
    }
}
</script>
<style scoped>
select {
    outline-color: #52B788;
}
select:disabled {
    background-color: #c3c3c3;
}
</style>