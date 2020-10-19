<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Default options</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <defaultoptions />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                    <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With message</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withmessage />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                      <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With unsafe message, but sanitized</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withunsafemessagebutsanitized />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                    <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Customized</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customized />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                   <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Show and Change</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <showandChange />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                  
</q-page>
</template>

<script>

       import  defaultoptions  from  'components/LoadingPlugin/Defaultoptions.vue' ;
         import  withmessage  from  'components/LoadingPlugin/Withmessage.vue' ;
     import  withunsafemessagebutsanitized  from  'components/LoadingPlugin/Withunsafemessagebutsanitized.vue'; 
         import  customized  from  'components/LoadingPlugin/Customized.vue' ;
          import  showandChange  from  'components/LoadingPlugin/ShowandChange.vue' ;
      
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

        defaultoptions ,
          withmessage ,
      withunsafemessagebutsanitized   ,
          customized  ,
           showandChange ,
      
       
        
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
