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
                        <div class="text-h6">basic</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <basic />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">icons</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <icons />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                <!-- third card for Coloring-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">keep color</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Coloring-->
                        <keepcolor />
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
            <div class="text-h6">Design</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

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

                <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Disable</div>

                    </q-card-section>
                    <disable />
                    <q-card-section>
                        <!----- code for Disable and readonly--------->

                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>

                <!-- -------------------third card for Menu transitions--------------------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Arrayas model</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Menu transitions-->
                        <arrayasmodel />
                        <!-- End code for Menu transitions-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ------------------------End third card for Menu transitions-------------------->

            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

    <!-- -----------------------------------THIRD card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Design </div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Standard sizes</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <standardsizes />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With QOptionGroup</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <withQOptionGroup />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

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

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">custom model values</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <custommodelvalues />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">indeterminate state</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <indeterminatestate />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">with labels On</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <withlabelsOn />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">toggle order</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <toggleorder />
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
 import  arrayasmodel from  'components/Form/Toggle/Arraymodel.vue';
      import basic from  'components/Form/Toggle/Basic.vue';
      import custommodelvalues from  'components/Form/Toggle/Custommodelvalues.vue';
      import disable from  'components/Form/Toggle/Disabled.vue';
      import icons from  'components/Form/Toggle/Icons.vue';
      import indeterminatestate from  'components/Form/Toggle/Indeterminatestate.vue';
      import keepcolor from  'components/Form/Toggle/Keepcolor.vue';
      import nativeform from  'components/Form/Toggle/Nativeform.vue';
      import onadarkbackground from  'components/Form/Toggle/Onadarkbackground.vue';
      import standardsizes from  'components/Form/Toggle/Standardsizes.vue';
      import toggleorder from  'components/Form/Toggle/Toggleorder.vue';
      import withlabelsOn from  'components/Form/Toggle/WithlabelsOn.vue';
       import withQItem from  'components/Form/Toggle/WithQItem.vue';
       import withQOptionGroup from  'components/Form/Toggle/WithQOptionGroup.vue';
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
        arrayasmodel,
        basic,
        custommodelvalues,
        disable,
        icons,
        indeterminatestate,
        keepcolor,
        nativeform,
        onadarkbackground,
        standardsizes,
        toggleorder,
        withlabelsOn,
         withQItem,
         withQOptionGroup,
        
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
