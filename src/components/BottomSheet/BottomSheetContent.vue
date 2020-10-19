<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">List and Grid</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <listandGrid />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                    <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Dark mode</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <darkmode />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

             
              
</q-page>
</template>

<script>
 import    listandGrid from 'components/BottomSheet/ListandGrid.vue';
 import   darkmode from 'components/BottomSheet/Darkmode.vue';

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

        // 'listandGrid': require('components/BottomSheet/ListandGrid.vue').default,
        
        // 'darkmode': require('components/BottomSheet/Darkmode.vue').default,
darkmode,

listandGrid
      
      
        
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
