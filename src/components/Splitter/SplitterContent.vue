<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
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

                    <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Horizontal</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <horizontal />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom dragging limits </div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <customdragginglimits  />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Model in pixels</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <modelinpixels />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->
                                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Reverse model</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <reversemodel />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->


                                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Adding to separator</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <addingtoseparator />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                 <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Dark design</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <darkdesign />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->


              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Embedded</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <embedded />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Image Fun</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <image-fun />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->
                              <!-- first card for Design Overview -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Reactive Images</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <reactive-images />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

    <!-- -----------------------------------End first card Row--------------------------------------->

</q-page>
</template>

<script>


       import  basic  from 'components/Splitter/Basic.vue';
        
       import  reactiveImages  from 'components/Splitter/ReactiveImages.vue';

        
       import  imageFun  from 'components/Splitter/ImageFun.vue';
        
       import  embedded  from 'components/Splitter/Embedded.vue';


        import  darkdesign  from 'components/Splitter/Darkdesign.vue';
        
       import  addingtoseparator  from 'components/Splitter/Addingtoseparator.vue';

        
       import  reversemodel  from 'components/Splitter/Reversemodel.vue';
        
       import  modelinpixels  from 'components/Splitter/Modelinpixels.vue';
        
        import  customdragginglimits  from 'components/Splitter/Customdragginglimits.vue';
    
   import  horizontal  from 'components/Splitter/Horizontal.vue';

        
     
        
       
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
        
        reactiveImages ,

        
        imageFun ,
        
        embedded,


         darkdesign ,
        
        addingtoseparator,

        
        reversemodel,
        
        modelinpixels,
        
         customdragginglimits ,
        
        horizontal,

        
        basic,
        
       

        
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
