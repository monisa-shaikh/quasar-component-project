<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Basic</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!-- first card for Design Overview -->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Basic</div>

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
                        <div class="text-h6">Landscape</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <landscape />
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
            <div class="text-h6"></div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Multiple days</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <multipledays />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Single Range</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                        <singleRange />
                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>
                <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Multiple ranges</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                        <multipleranges />
                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>
                            <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom title and subtitle</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                        <customtitleandsubtitle />
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



        <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Functionality</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

             

                <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Default year month</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                        <defaultyearmonth />
                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>
                <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Default view</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                        <defaultview />
                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>
                            <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">First day of week</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                        <firstdayofweek />
                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>
                          <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Today button</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                        <todaybutton />
                        <!--=====End code for Disable and readonly------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- -----------------End Second card for Disable and readonly------------------>
                            <!-- -------------------Second card for Disable and readonly------------------ -->

                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Disable and readonly</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Disable and readonly--------->
                        <disableandreadonly />
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
            <div class="text-h6">Model mask </div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Simple mask</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <simplemask />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Mask with escaped characters</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <maskwithescapedcharacters />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">QDate and QTime on same model</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <qDateandQTimeonsamemodel />
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
                        <div class="text-h6">Custom ad-hoc locale</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <customadhoclocale />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Coloring</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                 
                        <div class="q-pa-md">
                            <div class="q-gutter-md">
                            <q-date
                                v-model="date"
                                color="orange"
                            />

                            <q-date
                                v-model="date"
                                color="yellow"
                                text-color="black"
                            />
                            </div>
                        </div>
                        
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

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
                        <div class="text-h6">Options</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <options />
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
            <div class="text-h6">Highlighting events</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Events</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <events />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Event color</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <eventcolor />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->
                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Options</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <options />
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
            <div class="text-h6">Highlighting events</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Navigation boundaries</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <navigationboundaries />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->

                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With additional buttons</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <withadditionalbuttons />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->
                <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With QSplitter and QTabPanels</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <withQSplitterandQTabPanels />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->
                               <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With QInput</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <withQInput />
                        <!-- End code for Show options in menu-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Show options in menu---------------->
                  <!----------- First card for Show options in menu------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">QDate and QTime with QInput</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Show options in menu-->
                        <qDateandQTimewithQInput />
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
import  maskwithescapedcharacters from  'components/Form/Date/Modelmask/Maskwithescapedcharacters.vue';
        import  qDateandQTimeonsamemodel from  'components/Form/Date/Modelmask/QDateandQTimeonsamemodel.vue';
        import  simplemask from  'components/Form/Date/Modelmask/Simplemask.vue';
 import  componentcolor from  'components/Form/Date/coloringcomponent.vue';
        
        import  basic from  'components/Form/Date/Basic.vue';
        // import  coloringcomponent from  'components/Form/Date/Coloring.vue';

        import  customadhoclocale from  'components/Form/Date/Customadhoclocale.vue';
        
        import  customtitleandsubtitle from  'components/Form/Date/Customtitleandsubtitle.vue';

        import  dark from  'components/Form/Date/Dark.vue';
        import  defaultview from  'components/Form/Date/Defaultview.vue';
        import  defaultyearmonth from  'components/Form/Date/Defaultyearmonth.vue';

        import  disableandreadonly from  'components/Form/Date/Disableandreadonly.vue';
        import  eventcolor from  'components/Form/Date/Eventcolor.vue';
        import  events from  'components/Form/Date/Events.vue';
        import  firstdayofweek from  'components/Form/Date/Firstdayofweek.vue';
        import  landscape from  'components/Form/Date/Landscape.vue';
        import  multipledays from  'components/Form/Date/Multipledays.vue';
        import  multipleranges from  'components/Form/Date/Multipleranges.vue';
        import  nativeform from  'components/Form/Date/Nativeform.vue';
        import  options from  'components/Form/Date/Options.vue';
        import  qDateandQTimewithQInput from  'components/Form/Date/QDateandQTimewithQInput.vue';
    import  singleRange from  'components/Form/Date/SingleRange.vue';
        import  withQInput from  'components/Form/Date/WithQInput.vue';
        import  withadditionalbuttons from  'components/Form/Date/Withadditionalbuttons.vue';

        import  todaybutton from  'components/Form/Date/Todaybutton.vue';
          import  navigationboundaries from  'components/Form/Date/Navigationboundaries.vue';

        import  withQSplitterandQTabPanels from  'components/Form/Date/WithQSplitterandQTabPanels.vue';

export default {
    data() {
        return {
            isshowprop: true,

            date: '2019/02/01'
        }
    },
    methods: {

        closefun() {
            this.isshowprop = false;
        }
    },
    components: {
        maskwithescapedcharacters ,
        qDateandQTimeonsamemodel,
        simplemask ,

        
        basic ,

        customadhoclocale,
        
        customtitleandsubtitle,

        dark,
        defaultview,
        defaultyearmonth,

        disableandreadonly ,
        eventcolor,
        events ,
        firstdayofweek,
        landscape,
        multipledays,
        multipleranges,
        nativeform,
        options,
        qDateandQTimewithQInput ,
        singleRange,
        withQInput,
        withadditionalbuttons,
        todaybutton,
          navigationboundaries,

        withQSplitterandQTabPanels

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
