<template>
    <div class="flex flex-col justify-center border border-[#3F3F3D] rounded-xl p-8 h-[400px]">
        <p class="text-2xl tracking mb-8">
            Click <a :href="catalogue.url" target="_blank">{{ catalogue.name }} Installation Guide</a> to follow the installation guide.
        </p>
        <template v-if="isNewSource || !isCustomerNameEmpty">    
            <p class="text-2xl tracking break-all mb-4">
                <span class="text-[#52B788]">CustomerName</span>: {{ source.customer_name }}
            </p>
            <p class="text-2xl tracking break-all">
                <span class="text-[#52B788]">SecretKey</span>: {{ source.secret_key }}
            </p>
        </template>
        <template v-else>
            <Button
                title="Generate New Credentials"
                size="lg"
                class="w-fit"
                @onClick="handleClick"
            />
        </template>
    </div>
</template>
<script>
import Button from "@/components/Button.vue";
export default {
    name: "SetupScreen",
    props: ["catalogue", "source"],
    emits: ["onNewCredentials"],
    computed: {
        isNewSource() {
            return this.source.id == null;
        },
        isCustomerNameEmpty() {
            return this.source.customer_name.length == 0;
        }
    },
    methods: {
        handleClick() {
            this.$emit("onNewCredentials");
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: #52B788;
}
</style>
