<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
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

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Vertical </div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <vertical  />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                <!-- Second card for Decorators-->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom colors</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <customcolors />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->
                <!-- Second card for Decorators-->

                <q-card class="my-card text-gray q-mt-md " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">One sided or no sides</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <onesidedornosides />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->


    <!-- -----------------------------------End first card Row--------------------------------------->

</q-page>
</template>

<script>
 import  basic  from 'components/SlideItem/Basic.vue';
           import  vertical  from 'components/SlideItem/Vertical.vue';
        import  customcolors  from 'components/SlideItem/Customcolors.vue';
           import  onesidedornosides  from 'components/SlideItem/Onesidedornosides.vue';
        
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

        basic ,
           vertical,
           
        customcolors,
           onesidedornosides,
        
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
