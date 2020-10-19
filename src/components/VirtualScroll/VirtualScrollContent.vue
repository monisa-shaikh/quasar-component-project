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
                        <div class="text-h6">Horizontal</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <horizontal />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Different templates for items</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <differenttemplatesforitems  />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Different templates for horizontal items</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <differenttemplatesforhorizontalitems />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Basic table</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <basictable />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Table with scrolling header/footer</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <tablewithscrollingheaderfooter />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                 <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Sticky headers table</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <stickyheaderstable />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Playing with sticky headers</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <playingwithstickyheaders />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom scroll target by id</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customscrolltargetbyid />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom scroll target by ref</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <customscrolltargetbyref />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                                   <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Using QScrollArea</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <usingQScrollArea />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Scroll to position</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <scrolltoposition />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

    <!-- -----------------------------------End first card Row--------------------------------------->

       <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Generate items on the fly</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <generateitemsonthefly />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                
                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Virtual scroll with multiple rows for a data row</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <virtualscrollwithmultiplerowsforadatarow />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                
                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Virtual scroll with expansion model</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <virtualscrollwithexpansionmodel />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                  
</q-page>
</template>

<script>


         import   basic  from 'components/VirtualScroll/Basic.vue';
        
     import   virtualscrollwithexpansionmodel  from 'components/VirtualScroll/Virtualscrollwithexpansionmodel.vue';

        
         import   virtualscrollwithmultiplerowsforadatarow  from 'components/VirtualScroll/Virtualscrollwithmultiplerowsforadatarow.vue';
        
         import   generateitemsonthefly  from 'components/VirtualScroll/Generateitemsonthefly.vue';


          import   scrolltoposition  from 'components/VirtualScroll/Scrolltoposition.vue';
        
         import   usingQScrollArea  from 'components/VirtualScroll/UsingQScrollArea.vue';

        
         import   customscrolltargetbyref  from 'components/VirtualScroll/Customscrolltargetbyref.vue';
        
         import   customscrolltargetbyid  from 'components/VirtualScroll/Customscrolltargetbyid.vue';
        
          import   playingwithstickyheaders  from 'components/VirtualScroll/Playingwithstickyheaders.vue';

         import   stickyheaderstable  from 'components/VirtualScroll/Stickyheaderstable.vue';

  
         import   tablewithscrollingheaderfooter  from 'components/VirtualScroll/Tablewithscrollingheaderfooter.vue';

                
         import   basictable  from 'components/VirtualScroll/Basictable.vue';


           import   differenttemplatesforhorizontalitems  from 'components/VirtualScroll/Differenttemplatesforhorizontalitems.vue';
        
                   import   differenttemplatesforitems  from 'components/VirtualScroll/Differenttemplatesforitems.vue';

  
         import   horizontal  from 'components/VirtualScroll/Horizontal.vue';
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
        
        virtualscrollwithexpansionmodel ,

        
        virtualscrollwithmultiplerowsforadatarow ,
        
        generateitemsonthefly,


         scrolltoposition ,
        
        usingQScrollArea, 

        
        customscrolltargetbyref,
        
        customscrolltargetbyid ,
        
         playingwithstickyheaders,

        stickyheaderstable ,
        tablewithscrollingheaderfooter, 

                
        basictable, 


          differenttemplatesforhorizontalitems,
        
                  differenttemplatesforitems, 


        horizontal ,
     
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
