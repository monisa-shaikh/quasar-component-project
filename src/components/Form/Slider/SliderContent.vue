<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Design</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!-- first card for Design Overview -->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Standard</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <standard />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Vertical orientation</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <verticalorientation />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                <!-- third card for Coloring-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With step</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Coloring-->
                        <withstep />
                        <!-- End code for Coloring-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End third card for Coloring-->


                           <!-- third card for Coloring-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Floating point</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Coloring-->
                        <floatingpoint />
                        <!-- End code for Coloring-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End third card for Coloring-->

             <!-- third card for Coloring-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Snap to steps</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Coloring-->
                        <snaptosteps />
                        <!-- End code for Coloring-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End third card for Coloring-->

            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End first card Row--------------------------------------->

    <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">With label</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With label</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <withlabel />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Always display label</div>

                    </q-card-section>
                  
                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                              <alwaysdisplaylabel />
                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>
                     <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6"> Custom label value</div>

                    </q-card-section>
                  
                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                              <customlabelvalue />
                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>
                     <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6"> Long label</div>

                    </q-card-section>
                  
                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                              <longlabel />
                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>

             

            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

    <!-- -----------------------------------THIRD card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6"> </div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Markers</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <markers />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Lazy input</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <lazyinput />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Null value</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <nullvalue />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->
                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Reverse</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <reverse/>
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

           
                

            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End THIRD card Row--------------------------------------->

    
    <!-- -----------------------------------THIRD card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Dark, readonly, disable </div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Dark</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <dark />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Readonly</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <readonly />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Disable</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <disable />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->
            

            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End THIRD card Row--------------------------------------->


       <!-- -----------------------------------THIRD card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6"></div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With QItem</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <withQItem />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Native form</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <nativeform />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

               

            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End THIRD card Row--------------------------------------->

</q-page>
</template>

<script>
   import alwaysdisplaylabel  from'components/Form/Slider/Withlabel/Alwaysdisplaylabel.vue';
        import customlabelvalue  from'components/Form/Slider/Withlabel/Customlabelvalue.vue';
    import longlabel  from'components/Form/Slider/Withlabel/Longlabel.vue';
    import withlabel from 'components/Form/Slider/Withlabel/Withlabel.vue';

        import dark from'components/Form/Slider/Dark.vue';
        import disable   from 'components/Form/Slider/Disable.vue';
        import floatingpoint  from'components/Form/Slider/Floatingpoint.vue';
        import lazyinput  from'components/Form/Slider/Lazyinput.vue'

        
        import markers  from'components/Form/Slider/Markers.vue';
        import nativeform  from'components/Form/Slider/Nativeform.vue';
        import nullvalue from'components/Form/Slider/Nullvalue.vue';
        import readonly  from'components/Form/Slider/Readonly.vue';
        import reverse from'components/Form/Slider/Reverse.vue';
           
        import snaptosteps  from'components/Form/Slider/Snaptosteps.vue';
        import Standard  from'components/Form/Slider/Standard.vue';
        import verticalorientation  from'components/Form/Slider/Verticalorientation.vue';
        import WithQItem  from'components/Form/Slider/WithQItem.vue';
        import Withstep  from'components/Form/Slider/Withstep.vue';

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

           alwaysdisplaylabel,
        customlabelvalue,
        longlabel,
        withlabel,

        dark,
        disable,
        floatingpoint,
        lazyinput, 

        
        markers,
        nativeform,
        nullvalue,
        readonly,
        reverse,
        snaptosteps,
        Standard,
        verticalorientation,
        WithQItem,
        Withstep
        // 'alwaysdisplaylabel': require('components/Form/Slider/Withlabel/Alwaysdisplaylabel.vue').default,
        // 'customlabelvalue': require('components/Form/Slider/Withlabel/Customlabelvalue.vue').default,
        // 'longlabel': require('components/Form/Slider/Withlabel/Longlabel.vue').default,
        // 'withlabel': require('components/Form/Slider/Withlabel/Withlabel.vue').default,

        // 'dark': require('components/Form/Slider/Dark.vue').default,
        // 'disable': require('components/Form/Slider/Disable.vue').default,
        // 'floatingpoint': require('components/Form/Slider/Floatingpoint.vue').default,
        // 'lazyinput': require('components/Form/Slider/Lazyinput.vue').default,

        
        // 'markers': require('components/Form/Slider/Markers.vue').default,
        // 'nativeform': require('components/Form/Slider/Nativeform.vue').default,
        // 'nullvalue': require('components/Form/Slider/Nullvalue.vue').default,
        // 'readonly': require('components/Form/Slider/Readonly.vue').default,
        // 'reverse': require('components/Form/Slider/Reverse.vue').default,
           
        // 'snaptosteps': require('components/Form/Slider/Snaptosteps.vue').default,
        // 'Standard': require('components/Form/Slider/Standard.vue').default,
        // 'verticalorientation': require('components/Form/Slider/Verticalorientation.vue').default,
        // 'WithQItem': require('components/Form/Slider/WithQItem.vue').default,
        // 'Withstep': require('components/Form/Slider/Withstep.vue').default


    }
};
</script>

<style scoped>
.my-card {
    width: 100%;
}

.my-card1 {
    width: 100%;
    max-width: 360px;
}

.my-card2 {
    width: 100%;
    max-width: 380px;
}
</style>
