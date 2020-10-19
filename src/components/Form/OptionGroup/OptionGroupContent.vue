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
                        <div class="text-h6">Dense</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <dense />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                <!-- third card for Coloring-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">On a dark background</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Coloring-->
                        <onadarkbackground />
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
            <div class="text-h6">With QCheckbox or QToggle</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">with check boxes</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <withcheckboxes />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">with toggles</div>

                    </q-card-section>
                  
                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                              <withtoggles />
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
            <div class="text-h6">Design </div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With labels on left side</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <withlabelsonleftside />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Inline</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <inline />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Disabled</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <disable />
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
                        <div class="text-h6">Disable Certain Options</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <disableCertainOptions />
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
  import  withcheckboxes  from  'components/Form/OptionGroup/WithQCheckboxorQToggle/Withcheckboxes.vue';
  import  withtoggles  from  'components/Form/OptionGroup/WithQCheckboxorQToggle/Withtoggles.vue';

  import  dense  from  'components/Form/OptionGroup/Dense.vue';
  import  disableCertainOptions  from  'components/Form/OptionGroup/DisableCertainOptions.vue';

  import  disable  from  'components/Form/OptionGroup/Disabled.vue';
  import  inline  from  'components/Form/OptionGroup/Inline.vue';

  import  nativeform  from  'components/Form/OptionGroup/Nativeform.vue';
  import  Onadarkbackground  from  'components/Form/OptionGroup/Onadarkbackground.vue';


  import  optionGroupContent  from  'components/Form/OptionGroup/OptionGroupContent.vue';
  import  standard  from  'components/Form/OptionGroup/Standard.vue';

  import  Withlabelsonleftside  from  'components/Form/OptionGroup/Withlabelsonleftside.vue';

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
        withcheckboxes,
        withtoggles,
        dense,
        disableCertainOptions,
        disable,
        inline,
        nativeform,
        Onadarkbackground,
        optionGroupContent,
        standard,
        Withlabelsonleftside

        // 'withcheckboxes': require('components/Form/OptionGroup/WithQCheckboxorQToggle/Withcheckboxes.vue').default,
        // 'withtoggles': require('components/Form/OptionGroup/WithQCheckboxorQToggle/Withtoggles.vue').default,

        // 'dense': require('components/Form/OptionGroup/Dense.vue').default,
        // 'disableCertainOptions': require('components/Form/OptionGroup/DisableCertainOptions.vue').default,
        // 'disable': require('components/Form/OptionGroup/Disabled.vue').default,

        // 'inline': require('components/Form/OptionGroup/Inline.vue').default,
        // 'nativeform': require('components/Form/OptionGroup/Nativeform.vue').default,
        // 'Onadarkbackground': require('components/Form/OptionGroup/Onadarkbackground.vue').default,

        // 'optionGroupContent': require('components/Form/OptionGroup/OptionGroupContent.vue').default,

        // 'standard': require('components/Form/OptionGroup/Standard.vue').default,

        // 'Withlabelsonleftside': require('components/Form/OptionGroup/Withlabelsonleftside.vue').default,

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
