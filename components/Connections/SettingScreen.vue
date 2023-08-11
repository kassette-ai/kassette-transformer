<template>
    <ConnectionInstance
        :sourceDetail="sourceDetail"
        :destinationDetail="destinationDetail"
    />
    <div class="flex flex-col w-1/2 justify-center items-center">
        <p class="text-2xl tracking-wide mt-8 mb-4 font-bold">Transformations</p>
        <template v-for="transform of JSON.parse(connection.transforms)">
            <div class="w-full mb-4">
                <TransformView
                    :data="transform"
                />
            </div>
        </template>
        <Button
            class="mt-4"
            size="md"
            title="Finish"
            @onClick="handleFinish"
        />
    </div>
</template>
<script>
import ConnectionInstance from "@/components/Connections/Connection.vue";
import TransformView from "@/components/Transform/TransformView.vue";
export default {
    name: "SettingScreen",
    props: ["sourceDetail", "destinationDetail", "connection"],
    emits: ["onFinish"],
    components: { ConnectionInstance, TransformView },
    methods: {
        handleFinish() {
            this.$emit("onFinish");
        }
    }
}
</script>
<style scoped>
</style>