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
export default {
    name: "SettingScreen",
    props: ["destination", "catalogue"],
    emits: ["onChange", "onNext"],
    data() {
        return {
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
    created() {
        const formFields = JSON.parse(this.catalogue.metadata);
        const configData = JSON.parse(this.destination.config);
        for (const field of formFields) {
            const configValue = configData[field.keyID];
            if (configValue == undefined) {
                this.value[field.keyID] = "";
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