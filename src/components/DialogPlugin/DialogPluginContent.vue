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
                        <div class="text-h6">Dark mode</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <darkmode />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                      <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Radios, Checkboxes, Toggles</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <radiosCheckboxesToggles />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                    <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Other options</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <otheroptions />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                   <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Prompt with validation</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <promptwithvalidation />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                    <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Options with validation</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <optionswithvalidation />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                
                   <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Showing progress</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <showingprogress />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                    <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Unsafe HTML message</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <unsafeHTMLmessage />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

             
              
</q-page>
</template>

<script>
import  basic from  'components/DialogPlugin/Basic.vue';
import  darkmode from  'components/DialogPlugin/Darkmode.vue';


import  radiosCheckboxesToggles from  'components/DialogPlugin/RadiosCheckboxesToggles.vue';
import  otheroptions from  'components/DialogPlugin/Otheroptions.vue';

import  promptwithvalidation from  'components/DialogPlugin/Promptwithvalidation.vue';
import  optionswithvalidation from  'components/DialogPlugin/Optionswithvalidation.vue';
import  showingprogress from  'components/DialogPlugin/Showingprogress.vue';
import  unsafeHTMLmessage from  'components/DialogPlugin/UnsafeHTMLmessage.vue';
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
          darkmode,
      radiosCheckboxesToggles,
          otheroptions,
      
             promptwithvalidation,
          optionswithvalidation,
      showingprogress,
          unsafeHTMLmessage,
      
        
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
