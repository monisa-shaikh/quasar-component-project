<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">QSpinner</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <qSpinner />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                    <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Other spinners</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <otherspinners />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Coloring</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <coloring />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Size</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <size />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->
                                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Standard sizes</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <standardsizes />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->



    <!-- -----------------------------------End first card Row--------------------------------------->

</q-page>
</template>

<script>
import   otherspinners from 'components/Spinners/Otherspinners.vue';
      import   qSpinner from 'components/Spinners/QSpinner.vue';
         import   coloring from 'components/Spinners/Coloring.vue';
           
      import   standardsizes from 'components/Spinners/Standardsizes.vue';
      import   size from 'components/Spinners/Size.vue';
    
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

        otherspinners ,
        qSpinner,
           coloring,
           
        standardsizes ,
        size,
         

        
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
