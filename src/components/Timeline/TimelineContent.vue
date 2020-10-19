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
                        <div class="text-h6">Props only</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <propsonly />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Slots only</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <slotsonly  />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">On a dark background</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <onadarkbackground />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Layouts and side selection</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <layoutsandsideselection />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Responsive</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <responsive />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

</q-page>
</template>

<script>
  import  basic from  'components/Timeline/Basic.vue';
        
        import  responsive from  'components/Timeline/Responsive.vue';

        
        import  layoutsandsideselection from  'components/Timeline/Layoutsandsideselection.vue';
        
        import  onadarkbackground from  'components/Timeline/Onadarkbackground.vue';


         import  slotsonly from  'components/Timeline/Slotsonly.vue';
        
        import  propsonly from  'components/Timeline/Propsonly.vue';
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

        basic ,
        
        responsive ,

        
        layoutsandsideselection,
        
        onadarkbackground ,


         slotsonly ,
        
        propsonly ,

            
        
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
