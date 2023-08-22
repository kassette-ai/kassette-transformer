<template>
    <div class="w-full flex flex-col justify-center mb-8">
        <template v-for="(data, index) in mapdata" :key="index">
            <FieldMapping
                :data="data"
                @onChange="(keyID, value) => handleMapValueChange(index, keyID, value)"
                @onDelete="() => handleMapDataDelete(index)"
            />
        </template>
        <template v-if="this.mapdata.length == 0">
            <p class="text-lg tracking-wide">No transform</p>
        </template>
    </div>
    <div class="flex justify-center">
        <Button
            size="xs"
            title="New Field Mapping"
            class="mr-4"
            @onClick="addNewFieldMapping"
        />
        <Button
            size="xs"
            class="mr-4"
            title="New Field Hiding"
            @onClick="addNewFieldHiding"
        />
        <Button
            size="xs"
            title="New Field Deleting"
            @onClick="addNewFieldDeleting"
        />
    </div>
    <Button
        size="lg"
        class="mt-8"
        title="Finish"
        @onClick="handleNext"
    />
</template>
<script>
import Button from "@/components/Button";
import FieldMapping from "./FieldMapping";
export default {
    name: "TransformSetting",
    components: { Button, FieldMapping },
    props: ["defaultValue"],
    emits: ["onNext"],
    data() {
        return {
            mapdata: [],
        }
    },
    methods: {
        handleMapValueChange(index, keyID, value) {
            this.mapdata[index][keyID] = value;
        },
        handleMapDataDelete(delIdx) {
            let newMapData = [];
            for(const index in this.mapdata) {
                if (index != delIdx) {
                    newMapData.push(this.mapdata[index]);
                }
            }
            this.mapdata = newMapData;
        },
        handleNext() {
            let validate = true;
            for(const data of this.mapdata) {
                if (data.mode == "edit") {
                    validate = false;
                }
            }
            if (validate) {
                this.$emit("onNext", this.mapdata);
            } else {
                alert("Plesae finish the editing!");
            }
        },
        addNewFieldMapping() {
            this.mapdata.push({
                from: "",
                to: "",
                mode: "edit",
                type: "field_map",
            })
        },
        addNewFieldHiding() {
            this.mapdata.push({
                field: "",
                mode: "edit",
                type: "field_hide",
            })
        },
        addNewFieldDeleting() {
            this.mapdata.push({
                field: "",
                mode: "edit",
                type: "field_delete",
            })
        },
    },
    created() {
        if (this.defaultValue != undefined) {
            this.mapdata = JSON.parse(this.defaultValue);
        }
    }
}
</script>
<style scoped>
</style>