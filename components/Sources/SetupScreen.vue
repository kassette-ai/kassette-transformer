<template>
    <div class="flex flex-col justify-center border border-[#3F3F3D] rounded-xl p-8 h-[400px]">
        <p class="text-2xl tracking mb-8">
            Click <a :href="catalogue.url" target="_blank">{{ catalogue.name }} Installation Guide</a> to follow the installation guide.
        </p>
        <p class="text-2xl tracking break-all mb-4">
            CustomerID: {{ source.customer_id }}
        </p>
        <p class="text-2xl tracking break-all">
            {{ writeKey }}
        </p>
    </div>
</template>
<script>
export default {
    name: "SetupScreen",
    props: ["catalogue", "source"],
    computed: {
        writeKey() {
            if (this.source.write_key == null) {
                return "You will get your write key once you finish the registration!";
            } else {
                return `WriteKey: ${ this.source.write_key }`;
            }
        },
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: #52B788;
}
</style>