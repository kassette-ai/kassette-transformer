<template>
    <NuxtLayout>
        <template #content>         
            <div class="w-10/12">
                <p class="text-3xl font-bold tracking-wide mb-8">New Service Catalouge</p>
                <p class="text-2xl tracking-wide mb-8">Fill in the details to create a new service category </p>
                <div class="flex">
                    <div class="flex flex-col w-6/12 px-8 items-center">
                        <InputGroup
                            size="lg"
                            class="mb-8 w-full"
                            label="Name"
                            keyID="name"
                            :value="value.name"
                            :validate="validate.name"
                            @onChange="handleValueChange"
                        />
                        <InputGroup
                            size="lg"
                            class="mb-8 w-full"
                            label="Type"
                            keyID="type"
                            :value="value.type"
                            :validate="validate.type"
                            @onChange="handleValueChange"
                            disabled
                        />
                        <SelectGroup
                            size="lg"
                            class="mb-8 w-full"
                            label="Access"
                            keyID="access"
                            :value="value.access"
                            :options="accessOptions"
                            :validate="validate.access"
                            @onChange="handleValueChange"
                        />
                        <InputGroup
                            size="lg"
                            class="mb-8 w-full"
                            label="Category"
                            keyID="category"
                            :value="value.category"
                            :validate="validate.category"
                            @onChange="handleValueChange"
                        />
                        <InputGroup
                            size="lg"
                            class="mb-8 w-full"
                            label="URL"
                            keyID="url"
                            :value="value.url"
                            :validate="validate.url"
                            @onChange="handleValueChange"
                        />
                    </div>
                    <div class="flex flex-col w-6/12 px-8">
                        <InputGroup
                            size="lg"
                            class="mb-8 w-full"
                            label="Notes"
                            keyID="notes"
                            :value="value.notes"
                            :validate="validate.notes"
                            @onChange="handleValueChange"
                            textfield
                        />
                        <InputGroup
                            size="lg"
                            class="mb-8 w-full"
                            label="MetaData"
                            keyID="metadata"
                            :value="value.metadata"
                            :validate="validate.metadata"
                            @onChange="handleValueChange"
                            textfield
                        />
                        <InputGroup
                            size="lg"
                            class="mb-8 w-full"
                            label="Source Icon"
                            keyID="icon"
                            type="file"
                            :validate="validate.icon"
                            @onChange="handleValueChange"
                        />
                        <div class="flex justify-end">
                            <Button
                                title="Create" 
                                size="lg" 
                                class="w-fit"
                                @click="handleSave"   
                            />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>
<script>
import InputGroup from "@/components/InputGroup.vue";
import SelectGroup from "@/components/SelectGroup.vue";
import Button from "@/components/Button.vue";
import { CreateNewServiceCatalogue } from "@/apis/service-catalogue";
export default {
    components: { InputGroup, SelectGroup },
    name: 'NewCateogryService',
    data() {
        return {
            "value": {
                name: "",
                type: this.catalogueType(),
                access: null,
                category: "",
                url: "",
                notes: "",
                metadata: "",
                icon: null,
            },
            "validate": {
                name: true,
                type: true,
                access: true,
                category: true,
                url: true,
                notes: true,
                metadata: true,
                icon: true,
            },
            "accessOptions": [
                {
                    value: null,
                    name: "Select the access type",
                },
                {
                    value: "Rest",
                    name: "Rest",
                },
                {
                    value: "AMQP",
                    name: "AMQP",
                },
                {
                    value: "DBPolling",
                    name: "DBPolling",
                },
                {
                    value: "Agent",
                    name: "Agent",
                }
            ]
        }
    },
    methods: {
        handleValueChange(keyID, value) {
            this.value[keyID] = value;
        },
        async handleSave() {
            const {name, type, access, category, url, notes, metadata, icon} = this.value;
            this.validate.name = name.length > 0;
            this.validate.type = type.length > 0;
            this.validate.access = (access != null);
            this.validate.category = category.length > 0;
            this.validate.url = url.length > 0;
            this.validate.notes = notes.length > 0;
            this.validate.metadata = metadata.length > 0;
            this.validate.icon = icon != null;
            for (const key in this.validate) {
                if (!this.validate[key]) {
                    return;
                }
            }
            console.log(this.value.icon);
            const res = await CreateNewServiceCatalogue(this.value);
            if (res.success) {
                alert("Successfully Added!");
                this.$router.push(`/directory?tab=${this.catalogueTab()}`);
            } else {
                alert("Failed!");
            }
        },
        catalogueType() {
            if (this.$route.query.type == 'dest') {
                return 'Destination';
            } else if(this.$route.query.type == 'src') {
                return 'Source';
            }
        },
        catalogueTab() {
            if (this.$route.query.type == 'src') {
                return 'sources';
            } else if(this.$route.query.type == 'dest') {
                return 'destinations';
            }
        }
    },
}
</script>
<style scoped>
</style>