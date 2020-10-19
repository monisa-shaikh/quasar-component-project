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
                        <div class="text-h6">Dark</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <dark />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Multiple</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <multiple  />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Basic restrictions</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <basicrestrictions />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Filter</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <filtercomponents />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Headers</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <headers />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                 <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Auto upload on file selection</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <autouploadonfileselection />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom upload URL</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customuploadURL />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Promise-based factory function</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <promisebasedfactoryfunction />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Immediate return factory function</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <immediatereturnfactoryfunction />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                                   <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom header</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customheader />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom files list</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customfileslist />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

    <!-- -----------------------------------End first card Row--------------------------------------->

       
                  
</q-page>
</template>

<script>

import basic  from  'components/Uploader/Basic.vue';
        
      import customfileslist  from  'components/Uploader/Customfileslist.vue';

        
      import customheader  from  'components/Uploader/Customheader.vue';
        
  import immediatereturnfactoryfunction  from  'components/Uploader/Immediatereturnfactoryfunction.vue';


       import promisebasedfactoryfunction  from  'components/Uploader/Promisebasedfactoryfunction.vue';
        
      import customuploadURL  from  'components/Uploader/CustomuploadURL.vue';

        
      import autouploadonfileselection  from  'components/Uploader/Autouploadonfileselection.vue';
        
      import headers  from  'components/Uploader/Headers.vue';
        
       import filtercomponents  from  'components/Uploader/Filter.vue';

      import basicrestrictions  from  'components/Uploader/Basicrestrictions.vue';

  
      import multiple  from  'components/Uploader/Multiple.vue';

                
      import dark  from  'components/Uploader/Dark.vue';
    
            
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
        
        customfileslist,

        customheader,
        
        immediatereturnfactoryfunction, 


         promisebasedfactoryfunction ,
        
        customuploadURL, 
        autouploadonfileselection, 
        
        headers,
        
         filtercomponents,

        basicrestrictions, 
  
        multiple,

                
        dark
    
            
        
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
