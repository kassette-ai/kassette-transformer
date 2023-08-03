<template>
    <div class="w-[850px] flex flex-row flex-wrap">
        <div
            v-for="content of contents"
            :key="content.id"
            class="mb-8 mr-4"
        >
            <DirectoryItem :data="content"></DirectoryItem>
        </div>
    </div>    
</template>
<script>
import DirectoryItem from "./Item.vue"
export default {
    props: ["type"],
    computed: {
        contents() {
            return this[this.type];
        }
    },
    data() {
        return {
            sources: [
                {
                    id: 1,
                    image: "/google.png",
                    title: "Google Analytics",
                },
                {
                    id: 2,
                    image: "/camunda.png",
                    title: "Camunda",
                },
                {
                    id: 3,
                    image: "/amqp.png",
                    title: "AMQP",
                },
                {
                    id: 4,
                    image: "/javascript.png",
                    title: "Javascript",
                },
                {
                    id: 5,
                    image: "/kafka.png",
                    title: "Kafka",
                }
            ],
            destinations: [
            {
                    id: 1,
                    image: "/anaplan.png",
                    title: "Anaplan",
                },
                {
                    id: 2,
                    image: "/servicenow.png",
                    title: "ServiceNow",
                },
                {
                    id: 3,
                    image: "/sap.png",
                    title: "SAP",
                },
                {
                    id: 4,
                    image: "/postgres.png",
                    title: "Postgres",
                },
                {
                    id: 5,
                    image: "/powerbi.png",
                    title: "PowerBI",
                }
            ]
        }
    },
    name: 'DirectoryContent',
}
</script>
<style>
</style>