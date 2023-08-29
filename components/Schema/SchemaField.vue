<template>
    <div class="flex flex-row w-full">
        <div class="w-2/5 pr-4">
            <template v-if="isEditMode">
                <Input
                    size="md"
                    class="w-full"
                    keyID="name"
                    :value="data.name"
                    :validate="validate.name"
                    @onChange="handleValueChange"
                />
            </template>
            <template v-else>
                <p class="text-[#3F3F3D] mb-4 text-md tracking-wider">{{ data.name }}</p>
            </template>
        </div>
        <div class="w-3/5 flex">
            <div class="w-2/5 flex justify-center">
                <template v-if="isEditMode">
                    <Select
                        size="md"
                        :value="data.type"
                        keyID="type"
                        :options="typeOptions"
                        :validate="validate.type"
                        @onChange="handleValueChange"
                    />
                </template>
                <template v-else>
                    <p class="text-[#3F3F3D] mb-4 text-md tracking-wider">{{ findOptionName(data.type, typeOptions) }}</p>
                </template>
            </div>
            <div class="w-2/5 flex justify-center">
                <template v-if="isEditMode">
                    <Select
                        size="md"
                        :value="data.primary_key"
                        keyID="primary_key"
                        :options="boolOptions"
                        @onChange="handleValueChange"
                    />
                </template>
                <template v-else>
                    <p class="text-[#3F3F3D] mb-4 text-md tracking-wider">{{ findOptionName(data.primary_key, boolOptions) }}</p>
                </template>
            </div>
            <div class="w-1/5 flex justify-end">
                <template v-if="isEditMode">
                    <Button
                        size="xs"
                        title="Finish"
                        @onClick="() => changeEditMode('view')"
                    />
                </template>
                <template v-else>
                    <Button
                        size="xs"
                        title="Edit"
                        @onClick="() => changeEditMode('edit')"
                    />
                </template>
                <Button
                    size="xs"
                    class="ml-2"
                    title="Delete"
                    @onClick="deleteField"
                />
            </div>
        </div>
    </div>
</template>
<script>
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";
import Button from "@/components/Button.vue";
export default {
    name: "SchemaField",
    components: { Input, Select },
    props: ["data", "keyID"],
    emits: ["onChange", "onDelete"],
    data() {
        return {
            typeOptions: [
                {
                    "name": "int",
                    "value": "INT",
                },
                {
                    "name": "serial",
                    "value": "SERIAL",
                },
                {
                    "name": "big serial",
                    "value": "BIGSERIAL",
                },
                {
                    "name": "text",
                    "value": "TEXT",
                },
                {
                    "name": "varchar",
                    "value": "VARCHAR",
                },
                {
                    "name": "jsonb",
                    "value": "JSONB",
                },
                {
                    "name": "boolean",
                    "value": "BOOLEAN",
                },
                {
                    "name": "timestamp",
                    "value": "TIMESTAMP",
                },
            ],
            boolOptions: [
                {
                    "name": "yes",
                    "value": true,
                },
                {
                    "name": "no",
                    "value": false,
                },
            ],
            validate: {},
        }
    },
    computed: {
        isEditMode() {
            return this.data.mode == "edit";
        }
    },
    methods: {
        handleValueChange(keyID, value) {
            let newData = this.data;
            newData[keyID] = value;
            this.$emit("onChange", newData)
        },
        changeEditMode(mode) {
            let validated = true;
            if (mode == 'view') {
                if (this.data.name.length == 0) {
                    this.validate.name = false;
                    validated = false;
                }
                else {
                    this.validate.name = true;
                }
                if (this.data.type.length == 0) {
                    this.validate.type = false;
                    validate = false;
                }
                else {
                    this.validate.type = true;
                }
            }
            if (validated) {
                let newData = this.data;
                newData['mode'] = mode;
                this.$emit("onChange", newData);
            }
        },
        deleteField() {
            this.$emit("onDelete")
        },
        findOptionName(val, options) {
            for (let i = 0 ; i < options.length ; i ++) {
                if (options[i].value == val)
                    return options[i].name;
            }
            return "";
        }
    }
}
</script>
<style scoped>
</style>