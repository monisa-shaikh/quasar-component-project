<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Basic</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <basic />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                    <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With QTabs</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withQTabs />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">A more complex example</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <amorecomplexexample  />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Coloring</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <coloring />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With vertical QTabs and QSplitter</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withverticalQTabsandQSplitter />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom transitions</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customtransitions />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                 <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Swipeable and infinite</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <swipeableandinfinite />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Vertical swipeable and infinite</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <verticalswipeableandinfinite />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

             
                  
</q-page>
</template>

<script>

        import basic   from    'components/TabPanels/Basic.vue';
        
        import verticalswipeableandinfinite   from    'components/TabPanels/Verticalswipeableandinfinite.vue';

        
        import swipeableandinfinite   from    'components/TabPanels/Swipeableandinfinite.vue';
        
        import customtransitions   from    'components/TabPanels/Customtransitions.vue';


        import withverticalQTabsandQSplitter   from    'components/TabPanels/WithverticalQTabsandQSplitter.vue';
        
        import coloring   from    'components/TabPanels/Coloring.vue';

        
        import amorecomplexexample   from    'components/TabPanels/Amorecomplexexample.vue';
        
        import withQTabs   from    'components/TabPanels/WithQTabs.vue';
   
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
        
        verticalswipeableandinfinite,

        
        swipeableandinfinite ,
        
        customtransitions,


         withverticalQTabsandQSplitter,
        
        coloring,
        
        amorecomplexexample,
        
        withQTabs,
           
        
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
