<template>
    <SourceName
        v-if="step == 1"
        :name="catalogue.name"
        :sourcename="source.name"
        @onChange="handleSourceNameChange"
        @onNext="handleNextStep"
    />
    <SourceSetting
        v-if="step == 2"
        :source="source"
        :catalogue="catalogue"
    />
</template>
<script>
import SourceName from "@/components/Sources/SourceName";
import SourceSetting from "@/components/Sources/SourceSetting.vue";
import { GetServiceCatalogueByID } from "@/apis/service-catalogue";
import { GetSourceDetailByID } from "@/apis/source";
export default {
    name: 'SourceRegistration',
    props: ["sourceID"],
    components: { SourceName, SourceSetting },
    data() {
        return {
            step: 1,
            catalogue: {},
            source: {},
        }
    },
    methods: {
        handleSourceNameChange(value) {
            this.source.name = value;
        },
        handleNextStep() {
            this.step += 1;
        }
    },
    async created() {
        if (this.sourceID == undefined) {
            const catalogueID = this.$route.query.categoryID;
            this.catalogue = await GetServiceCatalogueByID(catalogueID);
            if (!this.catalogue.id) {
                alert("Service Catalogue does not exist.");
                this.$router.push('/sources');
            }
            this.source = {
                id: null,
                name: "",
                write_key: this.catalogue.name,
                config: "{}",
            }
        } else {
            const sourceDetail = await GetSourceDetailByID(this.sourceID);
            if (!sourceDetail.source.id) {
                alert("Source does not exist!");
                this.$router.push('/sources');
            } else {
                this.catalogue = sourceDetail.catalogue;
                this.source = sourceDetail.source;
            }
        }
    }
}
</script>
<style scoped>
</style>