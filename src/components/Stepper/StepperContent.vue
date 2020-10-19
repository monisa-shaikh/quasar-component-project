<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Horizontal</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <horizontal />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                    <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Vertical</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <vertical />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Non-linear header navigation</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <nonlinearheadernavigation  />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Linear header navigation</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <linearheadernavigation />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->
                                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Signaling step error</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <signalingsteperror />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->


                                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Alternative labels</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <alternativelabels />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                 <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Contracted</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <contracted />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->


              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Coloring</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <coloring />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Step prefix</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <stepprefix />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->
                              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Dark</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <dark />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                                   <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Header Class</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <headerClass />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->
                              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Message slot with fixed height steps</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <messageslot />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

    <!-- -----------------------------------End first card Row--------------------------------------->

</q-page>
</template>

<script>

    import  messageslot  from  'components/Stepper/Messageslot.vue';
        
         import  headerClass  from  'components/Stepper/HeaderClass.vue';

        
         import  dark  from  'components/Stepper/Dark.vue';
        
         import  stepprefix  from  'components/Stepper/Stepprefix.vue';


          import  coloring  from  'components/Stepper/Coloring.vue';
        
         import  contracted  from  'components/Stepper/Contracted.vue';

        
         import  alternativelabels  from  'components/Stepper/Alternativelabels.vue';
        
         import  signalingsteperror  from  'components/Stepper/Signalingsteperror.vue';
        
          import  linearheadernavigation  from  'components/Stepper/Linearheadernavigation.vue';
        
         import  horizontal  from  'components/Stepper/Horizontal.vue';

        
         import  nonlinearheadernavigation  from  'components/Stepper/Nonlinearheadernavigation.vue';

                
         import  vertical  from  'components/Stepper/Vertical.vue';

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

        messageslot,
        
        headerClass,

        
        dark ,
        
        stepprefix ,


         coloring,
        
        contracted,

        
        alternativelabels,
        
        signalingsteperror,
        
         linearheadernavigation,
        
        horizontal,

        
        nonlinearheadernavigation,

                
        vertical,

        
       

        
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
