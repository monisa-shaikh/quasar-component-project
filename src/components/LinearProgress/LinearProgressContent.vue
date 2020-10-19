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

                <!-- first card for Design Overview -->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Determined state</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <determinedstate />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Indeterminate state</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <indeterminatestate />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                  <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Query state</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <querystate />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->
                              <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Reversed</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <reversed />
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
            <div class="text-h6">Style</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom height</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <customheight />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Standard sizes</div>

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
                        <div class="text-h6">Stripe</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <stripe />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">On a dark background</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <onadarkbackground />
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
            <div class="text-h6">Buffer</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Buffer</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <buffer />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
                
                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With a label</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <withalabel />
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

        import  determinedstate  from  'components/LinearProgress/Determinedstate.vue'; 
        import  Indeterminatestate  from  'components/LinearProgress/Indeterminatestate.vue'; 
        import  querystate  from  'components/LinearProgress/Querystate.vue'; 
        import  Reversed  from  'components/LinearProgress/Reversed.vue'; 
        import  customheight  from  'components/LinearProgress/Customheight.vue' ;
        import  standardsizes  from  'components/LinearProgress/Standardsizes.vue' ;
        import  stripe  from  'components/LinearProgress/Stripe.vue' ;
        import  Onadarkbackground  from  'components/LinearProgress/Onadarkbackground.vue' ;
        import  buffer  from  'components/LinearProgress/Buffer.vue' ;
        import  withalabel  from  'components/LinearProgress/Withalabel.vue' ;
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
    
        determinedstate,
        Indeterminatestate  ,
        querystate ,
        Reversed ,
        customheight ,
        standardsizes  ,
        stripe  ,
    Onadarkbackground  ,
        buffer  ,
        withalabel  ,

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
