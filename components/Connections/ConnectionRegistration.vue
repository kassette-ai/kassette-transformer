<template>
    <p class="text-3xl font-bold tracking-wide mb-8">New Connection</p>
    <p class="text-2xl tracking-wide">New Connection between sources and destinations</p>
    <div class="flex justify-center">
        <div class="w-7/12 flex flex-col items-center border border-[#D9D9D9] p-8 rounded-lg mt-8">
            <InstanceSelect
                v-if="step == 1"
                :instances="sources"
                type="source"
                @onNext="handleNext"
            />
            <InstanceSelect
                v-if="step == 2"
                :instances="destinations"
                type="destination"
                @onNext="handleNext"
            />
            <TransformSetting
                v-if="step == 3"
                @onNext="handleNext"
            />
        </div>
    </div>
</template>
<script>
import InstanceSelect from "@/components/Connections/InstanceSelect";
import TransformSetting from "@/components/Transform/TransformSetting.vue";
export default {
    name: "ConnectionRegistration",
    components: { InstanceSelect },
    data() {
        return {
            sources: [
                {
                    id: 1,
                    name: 'Google Analytics Workflow',
                    catalogue_name: 'Google Analytics',
                    enabled: "enabled",
                    iconurl: '/google.png',
                },
                {
                    id: 2,
                    name: 'Camunda Workflow',
                    catalogue_name: 'Camunda',
                    enabled: "enabled",
                    iconurl: '/camunda.png',
                },
                {
                    id: 3,
                    name: 'AMQP Workflow',
                    catalogue_name: 'AMQP',
                    enabled: "enabled",
                    iconurl: '/amqp.png',
                },
                {
                    id: 4,
                    name: 'Javascript Workflow',
                    catalogue_name: 'Javascript',
                    enabled: "enabled",
                    iconurl: '/javascript.png',
                },
                {
                    id: 5,
                    name: 'Kafka Workflow',
                    catalogue_name: 'Kafka',
                    enabled: "enabled",
                    iconurl: '/kafka.png',
                },
            ],
            destinations: [
                {
                    id: 1,
                    name: 'Anaplan Workflow',
                    catalogue_name: 'Anaplan',
                    enabled: "enabled",
                    iconurl: '/anaplan.png',
                },
                {
                    id: 2,
                    name: 'ServiceNow Workflow',
                    catalogue_name: 'ServiceNow',
                    enabled: "enabled",
                    iconurl: '/servicenow.png',
                },
                {
                    id: 3,
                    name: 'SAP Workflow',
                    catalogue_name: 'SAP',
                    enabled: "enabled",
                    iconurl: '/sap.png',
                },
                {
                    id: 4,
                    name: 'Postgres Workflow',
                    catalogue_name: 'Postgres',
                    enabled: "enabled",
                    iconurl: '/postgres.png',
                },
                {
                    id: 5,
                    name: 'Power BI Workflow',
                    catalogue_name: 'Power BI',
                    enabled: "enabled",
                    iconurl: '/powerbi.png',
                },
            ],
            step: 1,
        }
    },
    methods: {
        handleNext() {
            this.step ++;
        }  
    },
}
</script>
<style scoped>
</style>