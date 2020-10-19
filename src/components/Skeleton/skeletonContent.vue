<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">On a QCard</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <onaQCard />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                <!-- Second card for Decorators-->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">QSkeleton types</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <qSkeletontypes />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                <!-- Second card for Decorators-->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Animations</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <animations />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->
                <!-- Second card for Decorators-->

                <q-card class="my-card text-gray q-mt-md " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Sizing</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <sizing />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->


    <!-- -----------------------------------End first card Row--------------------------------------->

    <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Styling</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Bordered</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <bordered />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Square borders</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <squareborders />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom color</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <customcolor />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom border</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <customborder />
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
            <div class="text-h6">Recipes</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Youtube</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <youtube />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Facebook</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <facebook />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Twitter</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <twitter />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Table</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <tablecomponent />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Twitch</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <twitch />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">List</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <list />
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
     import  onaQCard   from  'components/Skeleton/OnaQCard.vue';
        import  list   from  'components/Skeleton/List.vue';

        import  tablecomponent   from  'components/Skeleton/Table.vue';
        import  twitch   from  'components/Skeleton/Twitch.vue';

        import  twitter   from  'components/Skeleton/Twitter.vue';
        import  facebook   from  'components/Skeleton/Facebook.vue';

        import  youtube   from  'components/Skeleton/Youtube.vue';
        import  customborder   from  'components/Skeleton/Customborder.vue';

        
        import  customcolor   from  'components/Skeleton/Customcolor.vue';
        import  squareborders   from  'components/Skeleton/Squareborders.vue';

        import  bordered   from  'components/Skeleton/Bordered.vue';
        import  sizing   from  'components/Skeleton/Sizing.vue';

        import  animations   from  'components/Skeleton/Animations.vue';
        import  qSkeletontypes   from  'components/Skeleton/QSkeletontypes.vue';

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

        onaQCard,
        list,

        tablecomponent,
        twitch ,

        twitter ,
        facebook,

        youtube ,
        customborder,

        
        customcolor ,
        squareborders ,

        bordered,
        sizing ,

        animations,
        qSkeletontypes ,

        
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
