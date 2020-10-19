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
                        <div class="text-h6">on custom element</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <oncustomelement />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

             
              
</q-page>
</template>

<script>
  import  basic from 'components/Fullscreen/Basic.vue';
        
        import  oncustomelement from 'components/Fullscreen/Oncustomelement.vue';

        
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
        
        oncustomelement

        
      
      
        
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
