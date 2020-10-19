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
                        <div class="text-h6">with icon replacement</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <withiconreplacement />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                  <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With input</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <withinput />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->
                              <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With input color</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <withinputcolor />
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



    <!-- -----------------------------------Third card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Handling boundary</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card ------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With boundary numbers</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code -->
                        <withboundarynumbers />
                        <!-- End code -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card ---------------->

                <!----------- Second card ------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With boundary links</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code -->
                        <withboundarylinks />
                        <!-- End code -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End Second card ---------------->
              

                   <!----------- third card ------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With direction links</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code -->
                        <withdirectionlinks />
                        <!-- End code -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End third card ---------------->
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Third card Row--------------------------------------->


</q-page>
</template>

<script>
 import  standard  from    'components/Pagination/Standard.vue';
    import    withiconreplacement  from    'components/Pagination/Withiconreplacement.vue';
     import   withinput  from    'components/Pagination/Withinput.vue';
     import   withinputcolor  from    'components/Pagination/Withinputcolor.vue';

        
      import  Maximumpageshown  from    'components/Pagination/Maximumpageshown.vue';
      import  removingellipses  from    'components/Pagination/Removingellipses.vue';
      import  withboundarynumbers  from    'components/Pagination/Withboundarynumbers.vue';
      import  withboundarylinks  from    'components/Pagination/Withboundarylinks.vue';

       import  withdirectionlinks  from    'components/Pagination/Withdirectionlinks.vue';

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
    
        standard ,
        withiconreplacement,
        withinput,
        withinputcolor,

        
        Maximumpageshown,
        removingellipses,
        withboundarynumbers ,
        withboundarylinks ,

         withdirectionlinks,


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
