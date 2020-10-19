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
                        <div class="text-h6">Toggle through v-model</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <togglethroughvmodel />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Customize</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customize  />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom delay (1 second)</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customdelay  />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With offset</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withoffset />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6"> Custom transition</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <transitions />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                 <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Using target</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <reusable />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


            
</q-page>
</template>

<script>
import basic  from   'components/Tooltip/Basic.vue';
        
       import reusable  from   'components/Tooltip/Reusable.vue';

        
       import transitions  from   'components/Tooltip/Transitions.vue';
        
       import withoffset  from   'components/Tooltip/Withoffset.vue';


        import customdelay  from   'components/Tooltip/Customdelay.vue';
        
       import customize  from   'components/Tooltip/Customize.vue';

        
       import togglethroughvmodel  from   'components/Tooltip/Togglethroughvmodel.vue';
      
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
        
        reusable,

        
        transitions,
        
        withoffset ,
         customdelay, 
        customize ,
        
        togglethroughvmodel,
      
        
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
