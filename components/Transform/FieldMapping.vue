<template>
    <div class="flex flex-row w-full items-center mb-4">
        <template v-if="isEditMode">
            <div class="flex flex-row w-10/12">
                <template v-if="isMapping">
                    <Input
                        size="md"
                        keyID="from"
                        class="w-5/12 mr-8"
                        placeholder="from"
                        :value="data.from"
                        :validate="validate.from"
                        @onChange="handleValueChange"
                    />
                    <Input
                        size="md"
                        keyID="to"
                        class="w-5/12"
                        placeholder="to"
                        :value="data.to"
                        :validate="validate.to"
                        @onChange="handleValueChange"
                    />
                </template>
                <template v-else-if="isHiding">
                    <Input
                        size="md"
                        keyID="field"
                        class="w-5/12"
                        placeholder="field name to be hide"
                        :value="data.field"
                        :validate="validate.field"
                        @onChange="handleValueChange"
                    />
                </template>
                <template v-else-if="isDeleting">
                    <Input
                        size="md"
                        keyID="field"
                        class="w-5/12 mr-8"
                        placeholder="field name to be deleted"
                        :value="data.field"
                        :validate="validate.field"
                        @onChange="handleValueChange"
                    />
                    <Input
                        size="md"
                        keyID="value"
                        class="w-5/12"
                        placeholder="field value to be matched"
                        :value="data.value"
                        :validate="validate.value"
                        @onChange="handleValueChange"
                    />
                </template>
            </div>
            <div class="flex flex-row w-2/12">
                <Button
                    size="xs"
                    title="save"
                    @onClick="handleSave"
                />
            </div>
        </template>
        <template v-else>
            <div class="flex flex-row w-10/12">
                <template v-if="isMapping">
                    <p class="text-lg tracking-wide mr-8 w-3/12">{{ data.from }}</p>
                    <p class="text-lg tracking-wide mr-8 w-2/12"> -> </p>
                    <p class="text-lg tracking-wide w-3/12">{{ data.to }}</p>
                </template>
                <template v-else-if="isHiding">
                    <p class="text-lg tracking-wide w-8/12">{{ data.field }} <span class="text-xs">WILL BE HIDED</span></p>
                </template>
                <template v-else-if="isDeleting">
                    <p class="text-lg tracking-wide w-8/12">Record with the value of {{ data.value}} in {{ data.field }} field WILL BE DELETED</p>
                </template>
            </div>
            <div class="flex flex-row w-2/12">
                <Button
                    size="xs"
                    title="edit"
                    class="mr-2"
                    @onClick="handleEdit"
                />
                <Button
                    size="xs"
                    title="delete"
                    class="bg-red-500"
                    @onClick="handleDelete"
                />
            </div>
        </template>
    </div>
</template>
<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
export default {
    name: "FieldMapping",
    props: ["data"],
    emits: ["onChange", "onDelete"],
    components: { Input, Button },
    data() {
        return {
            validate: {
                from: "",
                to: "",
                field: "",
            }
        }
    },
    computed: {
        isEditMode() {
            return this.data.mode == "edit";
        },
        isMapping() {
            return this.data.type == "field_map";
        },
        isHiding() {
            return this.data.type == "field_hide";
        },
        isDeleting() {
            return this.data.type == "field_delete";
        },
    },
    methods: {
        handleValueChange(keyID, value) {
            this.$emit("onChange", keyID, value);
        },
        handleSave() {
            let validate = true;
            if (this.data.type == "field_map") {
                if (this.data.from.length == 0) {
                    this.validate.from = false;
                    validate = false;
                } else {
                    this.validate.from = true;
                }
                if (this.data.to.length == 0) {
                    this.validate.to = false;
                    validate = false;
                } else {
                    this.validate.to = true;
                }
            }
            else if (this.data.type == "field_hide") {
                if (this.data.field.length == 0) {
                    this.validate.field = false;
                    validate = false;
                } else {
                    this.validate.field = true;
                    validate = true;
                }
            }
            else if (this.data.type == "field_delete") {
                if (this.data.field.length == 0) {
                    this.validate.field = false;
                    validate = false;
                } else {
                    this.validate.field = true;
                    validate = true;
                }
                if (this.data.value.length == 0) {
                    this.validate.value = false;
                    validate = false;
                } else {
                    this.validate.value = true;
                    validate = true;
                }
            }
            if (validate) {
                this.$emit("onChange", "mode", "view");
            }
        },
        handleEdit() {
            this.$emit("onChange", "mode", "edit");
        },
        handleDelete() {
            this.$emit("onDelete");
        }
    }
}
</script>
<style scoped>
</style>