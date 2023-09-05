<template>
    <p v-if="hasLabel" :class="labelclasses">{{ label }}</p>
    <div :class="classnames">
        <div class="flex flex-col">
            <InputGroup
                v-if="isDBSchema"
                :size="size"
                :value="schema.table_name"
                keyID="table_name"
                :validate="validate.table_name"
                label="Table Name"
                class="mb-4 w-1/3"
                @onChange="onTableNameChange"
            />
            <template v-for="(field, idx) of schema.schema_fields" :key="idx">
                <div class="w-full mb-4">
                    <SchemaField
                        :typeOptions="fieldOptions"
                        :data="field"
                        :keyID="idx"
                        :isDBSchema="isDBSchema"
                        @onChange="onFieldChange"
                        @onDelete="() => handleDeleteField(idx)"
                    />
                </div>
            </template>
            <template v-if="schema.schema_fields.length == 0">
                No Schema Fields
            </template>
            <div class="flex w-full justify-end">
                <Button
                    size="md"
                    class="w-[150px]"
                    title="New Field"
                    @onClick="addNewSchemaField"
                />
            </div>
        </div>
    </div>
</template>
<script>
import InputGroup from "@/components/InputGroup.vue";
import Button from "@/components/Button.vue";
import SchemaField from "./SchemaField.vue";
export default {
    name: "SchemaRegistration",
    components: { InputGroup, Button, SchemaField },
    props: ["size", "class", "label", "keyID", "value", "validate", "fieldOptions", "isDBSchema"],
    $emits: ["onChange"],
    computed: {
        schema() {
            return JSON.parse(this.value);
        },
        hasLabel() {
            return this.label !== undefined;
        },
        classnames() {
            const baseclass = (this.validate === false) ? 'border border-red-500 rounded-lg' : 'border border-[#3F3F3D] text-[#3F3F3D] rounded-lg';
            return baseclass + ' ' + (this.class == undefined ? "" : this.class);
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
        onTableNameChange(keyID, value) {
            let newSchema = this.schema;
            newSchema[keyID] = value;
            this.$emit("onChange", this.keyID, JSON.stringify(newSchema));
        },
        onFieldChange(idx, value) {
            let newSchema = this.schema;
            newSchema.schema_fields[idx] = value;
            this.$emit("onChange", this.keyID, JSON.stringify(newSchema));
        },
        handleDeleteField(idx) {
            let newSchema = this.schema;
            let newSchemaFields = [];
            for(let i = 0 ; i < newSchema.schema_fields.length ; i ++) {
                if (i != idx) {
                    newSchemaFields.push(newSchema.schema_fields[i]);
                }
            }
            newSchema.schema_fields = [...newSchemaFields];
            this.$emit("onChange", this.keyID, JSON.stringify(newSchema));
        },
        addNewSchemaField() {
            let newSchema = this.schema;
            if (this.isDBSchema) {
                newSchema.schema_fields.push({
                    "name": "",
                    "type": "",
                    "mode": "edit",
                    "primary_key": false,
                });
            } else {
                newSchema.schema_fields.push({
                    "name": "",
                    "type": "",
                    "mode": "edit",
                })
            }
            this.$emit("onChange", this.keyID, JSON.stringify(newSchema));
        }
    },
}
</script>
<style scoped>
</style>
