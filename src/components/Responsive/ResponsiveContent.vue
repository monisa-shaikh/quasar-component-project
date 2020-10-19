<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6"></div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray " v-if="isshowprop">
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

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Flex row</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <flexrow />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                  <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">On QCard</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <onQCard />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->
                              <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">On QTable</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <onQTable />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                                    <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">On QCarousel</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <onQCarousel />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                                      <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">On QCard</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <onQCard />
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

</q-page>
</template>

<script>

  import basic  from  'components/Responsive/Basic.vue';
        import onQCard  from  'components/Responsive/OnQCard.vue';
       
       import onQCarousel  from  'components/Responsive/OnQCarousel.vue';
        import onQTable  from  'components/Responsive/OnQTable.vue';

        import onQCardSection  from  'components/Responsive/OnQCardSection.vue';
        import flexrow  from  'components/Responsive/Flexrow.vue';
      
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
         onQCard,
       
        onQCarousel,
         onQTable,

         onQCardSection,
         flexrow,
       
    

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
