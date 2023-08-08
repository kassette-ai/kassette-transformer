<template>
    <img :src="imageUrl(src)" />
</template>
<script>
export default {
    name: "Img",
    props: ["src"],
    methods: {
        imageUrl(img_url) {
            return `${import.meta.env.VITE_APP_BACKEND_BASE}/${img_url}`;
        }
    }
}
</script>
<style scoped>
img {
    width: 36px;
    height: 36px;
}
</style>