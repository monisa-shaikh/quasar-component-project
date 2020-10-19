<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Basic</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <basic />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                    <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With aspect ratio</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withaspectratio />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">HTML markup</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <hTMLmarkup  />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

              
</q-page>
</template>

<script>
 import   basic from  'components/Video/Basic.vue';
        
         import   hTMLmarkup from  'components/Video/HTMLmarkup.vue';

        
         import   withaspectratio from  'components/Video/Withaspectratio.vue';
      
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
        
        hTMLmarkup,

        
        withaspectratio, 
      
        
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
