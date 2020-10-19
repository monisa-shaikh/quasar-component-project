<template>
  <q-page>
 
        
   <!-- -----------------------------------First card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!---------------- First card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Design</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Design-->

                       <designcomponents/>

                    <!-- End code for Design-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card--------------------->

                
        
        <!-- -------------------Second card ------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Decorators</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- Decorators--------->

                   <decoratorscomponents/>

                    <!--=====End Decorators------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card ------------------>

         <!-- -------------------third card--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Coloring</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- Selecting option after filtering-->

                      <coloringcomponents/>

                    <!-- End  Selecting option after filtering-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card------------------------>

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End First card Row--------------------------------------->  
        
   <!-- -----------------------------------Second card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!---------------- First card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">clearable</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for clearable-->

                       <clearablecomponents/>

                    <!-- End code for clearable-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card--------------------->

                
        
        <!-- -------------------Second card ------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Disable and readonly</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- Disable and readonly--------->

                   <drcomponents/>

                    <!--=====End Disable and readonly------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card ------------------>

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Second card Row--------------------------------------->  

      <!-- -----------------------------------Third card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Basic</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!---------------- First card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Single file</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Single file-->

                       <basiccomponents/>

                    <!-- End code for Single file-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card--------------------->

                
        
        <!-- -------------------Second card ------------------ -->
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Disable and readonly</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- Disable and readonly--------->

                   <multifilecomponents/>

                    <!--=====End Disable and readonly------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card ------------------>

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Third card Row--------------------------------------->  

      <!-- -----------------------------------Fourth card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Appending files</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!---------------- First card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Appending files</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Single file-->

                       <appendingfilescomponents/>

                    <!-- End code for Single file-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card--------------------->

      

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Fourth card Row--------------------------------------->  

   <!-- -----------------------------------Five card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Counters</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!---------------- First card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Basic counter</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Single file-->

                       <counterscomponents/>

                    <!-- End code for Single file-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card--------------------->
         
          <!---------------- Second card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Counter label</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Single file-->

                       <counterlabelcomponents/>

                    <!-- End code for Single file-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End Second card--------------------->

      

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Five card Row--------------------------------------->


   
   <!-- -----------------------------------Six card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Using chips</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!---------------- First card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">With chips</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Single file-->

                       <chipscomponents/>

                    <!-- End code for Single file-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card--------------------->
         


      

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Six card Row--------------------------------------->
   
   <!-- -----------------------------------Sevven card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Using file slot</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!---------------- First card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">With progress indicator</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Single file-->

                       <usingfileslotcomponents/>

                    <!-- End code for Single file-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card--------------------->
         


      

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Sevven card Row--------------------------------------->

      
   <!-- -----------------------------------Eight card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Using file slot</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!---------------- First card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Basic restrictions</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Single file-->

                       <basicrestrictionscomponents/>

                    <!-- End code for Single file-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card--------------------->

           <!---------------- Second card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Filter</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Single file-->

                       <filtercomponents/>

                    <!-- End code for Single file-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End Second card--------------------->
         


      

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Eight card Row--------------------------------------->

   
      
   <!-- -----------------------------------Nine card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Native form submit </div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!---------------- First card------------------------>
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Native form</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Single file-->

                       <nativeformcomponents/>

                    <!-- End code for Single file-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card--------------------->

        


      

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Nine card Row--------------------------------------->
   
  </q-page>
</template>

<script>
 import designcomponents from  'components/Form/FilePicker/Design/design.vue';
 import decoratorscomponents from 'components/Form/FilePicker/Decorators/decorators.vue';

 import coloringcomponents from  'components/Form/FilePicker/Coloring/Coloring.vue';
 import clearablecomponents from 'components/Form/FilePicker/Clearable/Clearable.vue';


 import drcomponents from  'components/Form/FilePicker/disableandread/disablereadonly.vue';
 import basiccomponents from 'components/Form/FilePicker/Basic/Basic.vue';

 import multifilecomponents from  'components/Form/FilePicker/Basic/multiplefiles.vue';
 import appendingfilescomponents from 'components/Form/FilePicker/Appendingfiles/appendingfiles.vue';


 import counterscomponents from  'components/Form/FilePicker/Counters/Counters.vue';
 import counterlabelcomponents from 'components/Form/FilePicker/Counterlabel/Counterlabel.vue';

 import chipscomponents from  'components/Form/FilePicker/Usingchips/usingchips.vue';
 import usingfileslotcomponents from 'components/Form/FilePicker/Usingfileslot/Usingfileslot.vue';


 import basicrestrictionscomponents from  'components/Form/FilePicker/Restrictingfiles/Basicrestrictions.vue';
 import filtercomponents from 'components/Form/FilePicker/Restrictingfiles/Filter.vue';

 import nativeformcomponents from  'components/Form/FilePicker/Nativeform/Nativeform.vue';

export default {
  data() {
    return {
    
      isshowprop: true,
     
    };
  },
  methods: {
    closefun() {
      this.isshowprop = false;
  }
 },
 components:{

        designcomponents,
    decoratorscomponents ,

    coloringcomponents,
     clearablecomponents,  
     drcomponents,
       basiccomponents, 

     multifilecomponents , 
     appendingfilescomponents, 

        counterscomponents,  
     counterlabelcomponents, 

      chipscomponents ,
       usingfileslotcomponents , 

        basicrestrictionscomponents, 
        filtercomponents ,
          nativeformcomponents ,
 }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}
.my-card1{
  width: 100%;
  max-width: 300px;
}
</style>