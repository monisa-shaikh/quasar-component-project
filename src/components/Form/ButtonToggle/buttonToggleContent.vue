<template>
  <q-page>
 

   <!-- -----------------------------------first card Row--------------------------------------->

      <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design</div>
        
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">
        
             <!-- first card for Design Overview -->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">basic</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Design Overview--------->
                       <basic/>
                    <!--=====End code for Design Overview------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
                <!-- End first card for Design Overview-->

                 <!-- Second card for Decorators-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Some design examples</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Decorators-->
                       <somedesignexamples/>
                    <!-- End code for Decorators-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End Second card for Decorators-->

                <!-- third card for Coloring-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Spread horizontally</div>
                   
                    </q-card-section>
                    
                    <q-card-section>
                    <!-- code for Coloring-->
                       <spreadhorizontally/>
                    <!-- End code for Coloring-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End third card for Coloring-->


          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End first card Row--------------------------------------->  


   
   <!-- -----------------------------------Second card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design</div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Clearable------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">On a dark background</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Clearable-->
                    <onadarkbackground/>
                    <!-- End code for Clearable-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Clearable---------------->

                
        
        <!-- -------------------Second card for Disable and readonly------------------ -->
            
                <q-card class="my-card2 text-gray clearable " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Disable</div>
                   
                    </q-card-section>
                    <disable/>
                    <q-card-section>
                    <!----- code for Disable and readonly--------->
                   
                    <!--=====End code for Disable and readonly------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
          <!-- -----------------End Second card for Disable and readonly------------------>

         <!-- -------------------third card for Menu transitions--------------------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Custom content</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Menu transitions-->
                       <customcontent/>
                    <!-- End code for Menu transitions-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
            <!-- ------------------------End third card for Menu transitions-------------------->

          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End Second card Row--------------------------------------->  





   
   <!-- -----------------------------------THIRD card Row--------------------------------------->

      <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Native form </div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Show options in menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Native form</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Show options in menu-->
                        <nativeform/>
                    <!-- End code for Show options in menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Show options in menu---------------->

            </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 

   <!-- -----------------------------------End THIRD card Row--------------------------------------->  




  </q-page>
</template>

<script>
import  onadarkbackground from  'components/Form/ButtonToggle/Design/Onadarkbackground.vue';
import  Somedesignexamples from  'components/Form/ButtonToggle/Design/Somedesignexamples.vue';

import  Spreadhorizontally from  'components/Form/ButtonToggle/Design/Spreadhorizontally.vue';
import  basic from  'components/Form/ButtonToggle/Basic.vue';

import  customcontent from  'components/Form/ButtonToggle/Customcontent.vue';
import  disable from  'components/Form/ButtonToggle/Disableandreadonly.vue';

import  nativeform from  'components/Form/ButtonToggle/Nativeform.vue';


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
   onadarkbackground,
   Somedesignexamples,
   Spreadhorizontally,
   basic,
   customcontent,
   disable,
   nativeform

    //  'onadarkbackground':require('components/Form/ButtonToggle/Design/Onadarkbackground.vue').default,
    //  'Somedesignexamples':require('components/Form/ButtonToggle/Design/Somedesignexamples.vue').default,
    //  'Spreadhorizontally':require('components/Form/ButtonToggle/Design/Spreadhorizontally.vue').default,

    //  'basic':require('components/Form/ButtonToggle/basic.vue').default,
    //  'customcontent':require('components/Form/ButtonToggle/Customcontent.vue').default,
    //   'disable':require('components/Form/ButtonToggle/Disableandreadonly.vue').default,

     
    //   'nativeform':require('components/Form/ButtonToggle/Nativeform.vue').default,

           
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
  max-width: 450px;
}
</style>