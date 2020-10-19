<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Basic</div>

        </q-card-section>

        <q-card-section>
             <basic />
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End first card Row--------------------------------------->
    

    
    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Custom Scroll Target Container</div>

        </q-card-section>

        <q-card-section>
             <customScrollTargetContainer />
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End first card Row--------------------------------------->
        <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Reverse</div>

        </q-card-section>

        <q-card-section>
             <reverse />
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End first card Row--------------------------------------->
        <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">usage in QMenu</div>

        </q-card-section>

        <q-card-section>
             <usageinQMenu />
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End first card Row--------------------------------------->


</q-page>
</template>

<script>

         import basic from  'components/InfiniteScroll/Basic.vue';
       import customScrollTargetContainer from  'components/InfiniteScroll/CustomScrollTargetContainer.vue';
       import reverse from  'components/InfiniteScroll/Reverse.vue';
       import usageinQMenu from  'components/InfiniteScroll/UsageinQMenu.vue';
export default {
    data() {
        return {
            isshowprop: true,
        }
    },
    methods: {

        closefun() {
            this.isshowprop = false;
        }
    },
    components: {
        basic,
        customScrollTargetContainer,
        reverse,
        usageinQMenu,

    }
};
</script>

<style scoped>
.my-card {
    width: 100%;
}

.my-card1 {
    width: 100%;
    max-width: 470px;
}

.my-card2 {
    width: 100%;
    max-width: 380px;
}
</style>
