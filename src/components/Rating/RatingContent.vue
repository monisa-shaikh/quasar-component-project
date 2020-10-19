<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Determined state</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!-- first card  -->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
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

                <!-- End first card for Design Overview-->

                <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom number of choices</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <customnumberofchoices />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

               

            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End first card Row--------------------------------------->

    <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Icons</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Image icons</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <imageicons />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Different icon when selected</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <differenticonwhenselected />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
                
                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Different icon for each rating</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <differenticonforeachrating />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                   
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

    <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6"></div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Different color for each rating</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <differentcolorforeachrating />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
                
                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Different icon and color when half selected
</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <floatingnumber />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
                               <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">No dimming</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <nodimming />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                                          <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Tooltips </div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <tooltip/>
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                                          <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Standard sizes </div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <standardsizes />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
                                   <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Readonly and disable</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <readonlyanddisable />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
                       <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Native form</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <nativeform />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->


</q-page>
</template>

<script>

       import basic  from 'components/Rating/Basic.vue';
       import nativeform  from 'components/Rating/Nativeform.vue';
        import readonlyanddisable  from 'components/Rating/Readonlyanddisable.vue';
       import standardsizes  from 'components/Rating/Standardsizes.vue';
       import differentcolorforeachrating  from 'components/Rating/Differentcolorforeachrating.vue';
       import floatingnumber  from 'components/Rating/Floatingnumber.vue';
        import nodimming  from 'components/Rating/Nodimming.vue';
       import tooltip  from 'components/Rating/WithQTooltip.vue';

           import differenticonforeachrating  from 'components/Rating/Differenticonforeachrating.vue';
       import imageicons  from 'components/Rating/Imageicons.vue';
        import customnumberofchoices  from 'components/Rating/Customnumberofchoices.vue';
         import differenticonwhenselected  from 'components/Rating/Differenticonwhenselected.vue';
    
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
        nativeform,
         readonlyanddisable ,
        standardsizes,
        differentcolorforeachrating,
        floatingnumber,
         nodimming,
        tooltip ,

            differenticonforeachrating,
        imageicons,
         customnumberofchoices ,
          differenticonwhenselected ,
    

      
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
