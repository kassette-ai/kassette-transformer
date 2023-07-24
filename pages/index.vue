<template>
    <div class="">
        <div>
            {{ data}}
        </div>
    </div>
</template>

<script setup>


const { data } = await useFetch('http://127.0.0.1:5000/')




</script>

<style scoped>

</style>