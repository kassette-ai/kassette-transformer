<template>
    <p class="text-3xl font-bold tracking-wide mb-8">New Connection</p>
    <p class="text-2xl tracking-wide">New Connection between sources and destinations</p>
    <div class="flex justify-center">
        <div :class="stepClassNames">
            <InstanceSelect
                v-if="step == 1"
                :instances="sources"
                :value="connection.source_id"
                type="source"
                @onNext="handleNext"
                @onChange="handleSourceChange"
            />
            <InstanceSelect
                v-if="step == 2"
                :instances="destinations"
                :value="connection.destination_id"
                type="destination"
                @onNext="handleNext"
                @onChange="handleDestinationChange"
            />
            <TransformSetting
                v-if="step == 3"
                :defaultValue="connection.transforms"
                @onNext="handleNext"
            />
            <SettingScreen
                v-if="step == 4"
                :sourceDetail="sourceDetail(connection.source_id)"
                :destinationDetail="destinationDetail(connection.destination_id)"
                :connection="connection"
                @onFinish="handleFinish"
            />
        </div>
    </div>
</template>
<script>
import InstanceSelect from "@/components/Connections/InstanceSelect";
import TransformSetting from "@/components/Transform/TransformSetting.vue";
import SettingScreen from "@/components/Connections/SettingScreen.vue";
import { FetchAllSources } from "@/apis/source";
import { FetchAllDestinations } from "@/apis/destination";
import { CreateNewConnection, ModifyConnection, GetConnectionDetailByID } from "@/apis/connection";
export default {
    name: "ConnectionRegistration",
    props: ["connectionID"],
    components: { InstanceSelect, TransformSetting, SettingScreen },
    data() {
        return {
            step: 1,
            connection: {},
            sources: [],
            destinations: [],
        }
    },
    computed: {
        stepClassNames() {
            const basenames = "flex flex-col items-center border border-[#D9D9D9] p-8 rounded-lg mt-8";
            if (this.step <= 2) {
                return basenames + " w-7/12";
            } else {
                return basenames + " w-10/12";
            }
        }
    },
    methods: {
        handleNext(payload = null) {
            if (this.step == 3) {
                this.connection.transforms = JSON.stringify(payload);
            }
            this.step ++;
        },
        async handleFinish() {
            if (this.connection.id == -1) {
                const res = await CreateNewConnection(this.connection);
                if (res.success) {
                    alert("Successfully Added!");
                    this.$router.push("/connections");
                } else {
                    alert("Failed!");
                }
            } else {
                const res = await ModifyConnection(this.connection);
                if (res.success) {
                    alert("Successfully Modified!");
                    this.$router.push("/connections");
                } else {
                    alert("Failed!");
                }
            }
        },
        handleSourceChange(value) {
            this.connection.source_id = value;
        },
        handleDestinationChange(value) {
            this.connection.destination_id = value;
        },
        sourceDetail(id) {
            for(const source of this.sources) {
                if (source.source_detail.source.id == id) {
                    return source.source_detail;
                }
            }
            return null;
        },
        destinationDetail(id) {
            for(const destination of this.destinations) {
                if (destination.destination_detail.destination.id == id) {
                    return destination.destination_detail;
                }
            }
            return null;
        },
    },
    async created() {
        this.sources = await FetchAllSources();
        this.destinations = await FetchAllDestinations();
        if (this.connectionID == undefined) {
            this.connection = {
                id: -1,
                source_id: -1,
                destination_id: -1,
                transforms: "[]",
            }
        } else {
            this.connection = await GetConnectionDetailByID(this.connectionID);
        }
    }
}
</script>
<style scoped>
</style>