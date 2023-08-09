<template>
    <DestinationName
        v-if="step == 1"
        :name="catalogue.name"
        :destinationname="destination.name"
        @onChange="handleDestinationNameChange"
        @onNext="handleNextStep"
    />
    <DestinationSetting
        v-if="step == 2"
        :destination="destination"
        :catalogue="catalogue"
    />
</template>
<script>
import DestinationName from "@/components/Destinations/DestinationName.vue";
import DestinationSetting from "@/components/Destinations/DestinationSetting.vue";
import { GetServiceCatalogueByID } from "@/apis/service-catalogue";
import { GetDestinationDetailByID } from "@/apis/destination";
export default {
    name: 'DestinationRegistration',
    props: ["destinationID"],
    components: { DestinationName, DestinationSetting },
    data() {
        return {
            step: 1,
            catalogue: {},
            destination: {},
        }
    },
    methods: {
        handleDestinationNameChange(value) {
            this.destination.name = value;
        },
        handleNextStep() {
            this.step += 1;
        }
    },
    async created() {
        if (this.destinationID == undefined) {
            const catalogueID = this.$route.query.categoryID;
            this.catalogue = await GetServiceCatalogueByID(catalogueID);
            if (!this.catalogue.id) {
                alert("Service Catalogue does not exist.");
                this.$router.push('/destinations');
            }
            this.destination = {
                id: null,
                name: "",
                config: "{}",
            }
        } else {
            const destinationDetail = await GetDestinationDetailByID(this.destinationID);
            if (!destinationDetail.destination.id) {
                alert("Destination does not exist!");
                this.$router.push('/destinations');
            } else {
                this.catalogue = destinationDetail.catalogue;
                this.destination = destinationDetail.destination;
            }
        }
    }
}
</script>
<style scoped>
</style>