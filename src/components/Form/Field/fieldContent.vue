<template>
  <q-page>
 

   <!-- ----------------------------------- card Row--------------------------------------->

      <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">
        
             <!--  card  -->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Design Overview</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code --------->
                       <designcomponents/>
                    <!--=====End code ------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
                <!-- End  card -->

                 <!--  card -->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Coloring</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                       <coloringcomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End  card -->

                <!--  card -->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Standard</div>
                   
                    </q-card-section>
                    
                    <q-card-section>
                    <!-- code -->
                       <standardcomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End  card -->


          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End  card Row--------------------------------------->  


   
   <!-- ----------------------------------- card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!-----------  card ------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Filled</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                    <filledcomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End  card ---------------->

                
        
        <!-- ------------------- card ------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Outlined</div>
                   
                    </q-card-section>
                   
                    <q-card-section>
                    <!----- code --------->
                    <outlinedcomponents/>
                    <!--=====End code ------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End  card ------------------>

         <!-- ------------------- card --------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Standout</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                       <standoutcomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End  card -------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End  card Row--------------------------------------->  





   
   <!-- ----------------------------------- card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design </div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!-----------  card ------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Standout in QToolbar</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                        <standoutinQToolbarcomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End  card ---------------->

          <!-----------  card ------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Borderless</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                        <borderlesscomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End  card ---------------->

         <!-----------  card ------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Rounded</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                        <roundedcomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End  card ---------------->
           <!-----------  card ------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Square borders</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                        <squareborderscomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End  card ---------------->

           <!-----------  card ------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Dark background</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                        <darkbackgroundcomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End  card ---------------->

        

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End  card Row--------------------------------------->  





   
   <!-- ----------------------------------- card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Basic features</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

                   
        
        <!-- ------------------- card for ------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">clearable</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for --------->
                    <clearablecomponents/>
                    <!-- -----End code for ------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End  card for ------------------>

         <!-- ------------------- card --------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Control types</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                       <controltypescomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End  card -------------------->
             <!-- ------------------- card --------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Prefix and suffix</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                       <prefixandsuffixcomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End  card -------------------->
     <!-- ------------------- card --------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Custom Label</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                       <customlabelcomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End  card -------------------->

 <!-- ------------------- card --------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Loading state</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                       <loadingstatecomponents/>
                    <!-- End code -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End  card -------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End  card Row--------------------------------------->  




   
   <!-- -----------------------------------fIVE card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Validation</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!-----------  card ------------->
            
                <q-card class="my-card2 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Basic</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code -->
                         <basiccomponents/>
                    <!-- End code for-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End  card ---------------->

                
        
        <!-- ------------------- card ------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Maximum value</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code --------->
                     <maximumvaluecomponents/>
                    <!--=====End code ------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End  card ------------------>
     <!-- ------------------- card ------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Lazy rules</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code --------->
                     <lazyrulescomponents/>
                    <!--=====End code ------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End  card ------------------>

             <!-- ------------------- card ------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Async rules</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code --------->
                     <asyncrulescomponents/>
                    <!--=====End code ------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End  card ------------------>

             <!-- ------------------- card ------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">External</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code --------->
                     <externalcomponents/>
                    <!--=====End code ------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End  card ------------------>
              
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Slot for error message</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code --------->
                     <slotforerrormessagecomponents/>
                    <!--=====End code ------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End  card ------------------>
    
    

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End fIVE card Row--------------------------------------->  




  </q-page>
</template>

<script>
 import  clearablecomponents from 'components/Form/Field/Basicfeatures/Clearable.vue';
     import  controltypescomponents from 'components/Form/Field/Basicfeatures/Controltypes.vue';
     import  customlabelcomponents from 'components/Form/Field/Basicfeatures/Customlabel.vue';
     import  loadingstatecomponents from 'components/Form/Field/Basicfeatures/Loadingstate.vue';
     import  prefixandsuffixcomponents from 'components/Form/Field/Basicfeatures/Prefixandsuffix.vue';

      import  borderlesscomponents from 'components/Form/Field/Design/Borderless.vue';
      import  coloringcomponents from 'components/Form/Field/Design/Coloring.vue';
       import  darkbackgroundcomponents from 'components/Form/Field/Design/Darkbackground.vue';
     import  designcomponents from 'components/Form/Field/Design/DesignOverview.vue';
      import  filledcomponents from 'components/Form/Field/Design/Filled.vue';
      import  outlinedcomponents from 'components/Form/Field/Design/Outlined.vue';
       import  roundedcomponents from 'components/Form/Field/Design/Rounded.vue';
       import  squareborderscomponents from 'components/Form/Field/Design/Squareborders.vue';
      import  standardcomponents from 'components/Form/Field/Design/Standard.vue';
       import  standoutcomponents from 'components/Form/Field/Design/Standout.vue';
       import  standoutinQToolbarcomponents from 'components/Form/Field/Design/StandoutinQToolbar.vue';

       import  asyncrulescomponents from 'components/Form/Field/Validation/Asyncrules.vue';
       import  basiccomponents from 'components/Form/Field/Validation/Basic.vue';
        import  externalcomponents from 'components/Form/Field/Validation/External.vue';
       import  lazyrulescomponents from 'components/Form/Field/Validation/Lazyrules.vue';
         import  maximumvaluecomponents from 'components/Form/Field/Validation/Maximumvalue.vue';
       import  slotforerrormessagecomponents from 'components/Form/Field/Validation/Slotforerrormessage.vue';
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
 components:{
    clearablecomponents,
    controltypescomponents, 
    customlabelcomponents ,
    loadingstatecomponents,
    prefixandsuffixcomponents, 

     borderlesscomponents, 
     coloringcomponents ,
      darkbackgroundcomponents ,
    designcomponents,
     filledcomponents ,
    outlinedcomponents ,
      roundedcomponents,
      squareborderscomponents,
     standardcomponents, 
      standoutcomponents ,
      standoutinQToolbarcomponents,
    asyncrulescomponents,
      basiccomponents ,
      externalcomponents, 
      lazyrulescomponents ,
        maximumvaluecomponents,
      slotforerrormessagecomponents


 }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}
.my-card1{
  width: 100%;
  max-width: 360px;
}
.my-card2{
  width: 100%;
  max-width: 380px;
}
</style>