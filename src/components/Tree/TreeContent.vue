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
                        <div class="text-h6">No connectors</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <noconnectors />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Dark</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <dark  />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With QSplitter and QTabPanels</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withQSplitterandQTabPanels />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Default header and body slots</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <defaultheaderandbodyslots />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Customizing nodes</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customizingnodes />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                 <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Accordion mode</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <accordionmode />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Filtering nodes</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <filteringnodes />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Selectable nodes</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <selectablenodes />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Lazy loading nodes</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <lazyloadingnodes />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                                   <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Syncing node properties</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <syncingnodeproperties />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Tick strategy</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <tickstrategy />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

    <!-- -----------------------------------End first card Row--------------------------------------->

       <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom filter</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customfilter />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                  
</q-page>
</template>

<script>

  import  basic  from  'components/Tree/Basic.vue';
        
        import  customfilter  from  'components/Tree/Customfilter.vue';

        
        import  tickstrategy  from  'components/Tree/Tickstrategy.vue';
        
        import  syncingnodeproperties  from  'components/Tree/Syncingnodeproperties.vue';


         import  lazyloadingnodes  from  'components/Tree/Lazyloadingnodes.vue';
        
        import  selectablenodes  from  'components/Tree/Selectablenodes.vue';

        
        import  filteringnodes  from  'components/Tree/Filteringnodes.vue';
        
        import  accordionmode  from  'components/Tree/Accordionmode.vue';
        
         import  customizingnodes  from  'components/Tree/Customizingnodes.vue';

        import  defaultheaderandbodyslots  from  'components/Tree/Defaultheaderandbodyslots.vue';

  
        import  withQSplitterandQTabPanels  from  'components/Tree/WithQSplitterandQTabPanels.vue';

                
        import  dark  from  'components/Tree/Dark.vue';


          import   noconnectors  from  'components/Tree/Noconnectors.vue';
        
            
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
        
        customfilter, 

        
        tickstrategy,
        syncingnodeproperties,


         lazyloadingnodes,
        
        selectablenodes,

        
        filteringnodes, 
        
        accordionmode ,
        
         customizingnodes ,

        defaultheaderandbodyslots,

  
        withQSplitterandQTabPanels ,

                
        dark, 

          noconnectors ,
        
            
        
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
