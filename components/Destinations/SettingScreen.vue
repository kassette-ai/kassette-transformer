<template>
    <div class="flex flex-row flex-wrap border border-[#3F3F3D] rounded-xl p-8">
        <template v-for="field of formFields">
            <template v-if="['text', 'url', 'json'].includes(field.type)">
                <InputGroup
                    size="lg"
                    class="mb-4 w-1/2 px-8"
                    type="text"
                    :label="field.name"
                    :keyID="field.keyID"
                    :value="value[field.keyID]"
                    :textfield="['json'].includes(field.type)"
                    @onChange="handleValueChange"
                    :validate="this.validate[field.keyID]"
                />
            </template>
            <template v-else-if="field.type == 'method'">
                <SelectGroup
                    size="lg"
                    class="mb-4 w-1/2 px-8"
                    :label="field.name"
                    :keyID="field.keyID"
                    :value="value[field.keyID]"
                    :options="methodOptions"
                    @onChange="handleValueChange"
                    :validate="this.validate[field.keyID]"
                />
            </template>
        </template>
        <template v-for="field of formFields">
            <template v-if="field.type == 'schema'">
                <div class="w-full px-8">
                    <SchemaRegistration
                        size="lg"
                        class="p-8"
                        :label="field.name"
                        :keyID="field.keyID"
                        :value="value[field.keyID]"
                        :validate="validate[field.keyID]"
                        @onChange="handleValueChange"
                    />
                </div>
            </template>
        </template>
        <template v-if="formFields.length == 0">
            <p class="text-xl">No options to set.</p>
        </template>
    </div>
    <Button
        title="Finish"
        size="md"
        class="mt-8 float-right"
        @onClick="handleContinue"
    />
</template>
<script>
import InputGroup from '@/components/InputGroup.vue';
import SelectGroup from '@/components/SelectGroup.vue';
import Button from "@/components/Button.vue";
import SchemaRegistration from '@/components/Schema/SchemaRegistration.vue';
export default {
    name: "SettingScreen",
    components: { InputGroup, SelectGroup, Button, SchemaRegistration},
    props: ["destination", "catalogue"],
    emits: ["onChange", "onNext"],
    data() {
        return {
            formFields: [],
            value: {},
            validate: {},
            methodOptions: [
                {
                    "value": "GET",
                    "name": "Get",
                },
                {
                    "value": "POST",
                    "name": "Post",
                },
                {
                    "value": "DELETE",
                    "name": "Delete",
                },
                {
                    "value": "PATCH",
                    "name": "Patch",
                },
                {
                    "value": "PUT",
                    "name": "Put",
                },
            ]
        }
    },
    methods: {
        handleValueChange(keyID, value) {
            console.log(keyID, value);
            this.value[keyID] = value;
            this.$emit("onChange", JSON.stringify(this.value));
        },
        handleContinue() {
            let passed = true;
            for(const keyID in this.value) {
                const val = this.value[keyID];
                let type = '';
                for(const field of this.formFields) {
                    if (field.keyID == keyID) {
                        type = field.type;
                        break;
                    }
                }
                if (['text', 'method'].includes(type)) {
                    if (val.length > 0) {
                        this.validate[keyID] = true;
                    } else {
                        this.validate[keyID] = false;
                        passed = false;
                    }
                }
                else if (type == 'url') {
                    const urlReg = /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\/\S*)?$/
                    this.validate[keyID] = urlReg.test(val);
                    if (!this.validate[keyID]) {
                        passed = false;
                    }
                }
                else if (type == 'json') {
                    try {
                        JSON.parse(val);
                        this.validate[keyID] = true;
                    } catch (e) {
                        this.validate[keyID] = false;
                        passed = false;
                    }
                }
                else if (type == 'schema') {
                    this.validate[keyID] = {}
                    let jsonVal = JSON.parse(val);
                    if (jsonVal.table_name.length > 0) {
                        this.validate[keyID]['table_name'] = true;
                    }
                    else {
                        this.validate[keyID]['table_name'] = false;
                        passed = false;
                    }
                }
            }
            if (passed) {
                this.$emit("onNext");
            }
        }
    },
    created() {
        const formFields = JSON.parse(this.catalogue.metadata);
        const configData = JSON.parse(this.destination.config);
        for (const field of formFields) {
            const configValue = configData[field.keyID];
            if (configValue == undefined) {
                if (field.type == 'json') {
                    this.value[field.keyID] = "{}"
                }
                else if(field.type == 'schema') {
                    this.value[field.keyID] = JSON.stringify({'table_name': '', 'schema_fields': []});
                }
                else {
                    this.value[field.keyID] = "";
                }
            } else {
                this.value[field.keyID] = configValue;
            }
            this.validate[field.keyID] = "";
        }
        this.formFields = formFields;
    }
}
</script>
<style scoped>
</style>