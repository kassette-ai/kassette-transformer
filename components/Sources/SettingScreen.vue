<template>
    <div class="flex flex-row flex-wrap border border-[#3F3F3D] rounded-xl p-8">
        <template v-for="field of formFields">
            <template v-if="field.type == 'text'">
                <InputGroup
                    size="lg"
                    class="mb-4 w-1/2 px-8"
                    type="text"
                    :label="field.name"
                    :keyID="field.keyID"
                    :value="value[field.keyID]"
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
                        :fieldOptions="fieldOptions"
                        :isDBSchema="false"
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
import Button from "@/components/Button.vue";
import SchemaRegistration from '@/components/Schema/SchemaRegistration.vue';
import { GetFieldOptions } from "@/apis/source";
export default {
    name: "SettingScreen",
    props: ["source", "catalogue"],
    components: { InputGroup, Button, SchemaRegistration },
    emits: ["onChange", "onNext"],
    data() {
        return {
            fieldOptions: [],
            formFields: [],
            value: {},
            validate: {},
        }
    },
    methods: {
        handleValueChange(keyID, value) {
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
                if (type == 'text') {
                    if (val.length > 0) {
                        this.validate[keyID] = true;
                    } else {
                        this.validate[keyID] = false;
                        passed =false;
                    }
                }
            }
            if (passed) {
                this.$emit("onNext");
            }
        }
    },
    async created() {
        const formFields = JSON.parse(this.catalogue.metadata);
        const configData = JSON.parse(this.source.config);
        for (const field of formFields) {
            const configValue = configData[field.keyID];
            if (configValue == undefined) {
                if (field.defaultValue == undefined) {
                    if(field.type == 'schema') {
                        this.value[field.keyID] = JSON.stringify({'schema_fields': []});
                    }
                    else {
                        this.value[field.keyID] = "";
                    }
                } else {
                    this.value[field.keyID] = field.defaultValue;
                }
                this.handleValueChange(field.keyID, this.value[field.keyID])
            } else {
                this.value[field.keyID] = configValue;
            }
            this.validate[field.keyID] = "";
        }
        this.formFields = formFields;
        const options = await GetFieldOptions(this.catalogue.name);
        this.fieldOptions = []
        for (const key in options) {
            this.fieldOptions.push({value: key, name: key});
        }
    }
}
</script>
<style scoped>
</style>