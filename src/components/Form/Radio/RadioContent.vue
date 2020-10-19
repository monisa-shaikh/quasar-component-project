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
                    <div class="text-h6">Standard</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Design Overview--------->
                       <standard/>
                    <!--=====End code for Design Overview------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
                <!-- End first card for Design Overview-->

                 <!-- Second card for Decorators-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Dense</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Decorators-->
                       <dense/>
                    <!-- End code for Decorators-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End Second card for Decorators-->

                <!-- third card for Coloring-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Coloring</div>
                   
                    </q-card-section>
                    
                    <q-card-section>
                    <!-- code for Coloring-->
                       <coloring/>
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
            
                <q-card class="my-card1 text-gray clearable " v-if="isshowprop">
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
                    <div class="text-h6">Label on left side</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Menu transitions-->
                       <labelonleftside/>
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
          <div class="text-h6">Design </div>
       
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">

          <!----------- First card for Show options in menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Standard sizes</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Show options in menu-->
                        <standardsizes/>
                    <!-- End code for Show options in menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Show options in menu---------------->

          <!----------- First card for Show options in menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">With QOptionGroup</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Show options in menu-->
                        <withQOptionGroup/>
                    <!-- End code for Show options in menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Show options in menu---------------->

         <!----------- First card for Show options in menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">With QItem</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Show options in menu-->
                        <withQItem/>
                    <!-- End code for Show options in menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Show options in menu---------------->
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
   import  standard  from  'components/Form/Radio/Standard.vue';

   import  dense  from  'components/Form/Radio/Dense.vue';
   import  coloring  from  'components/Form/Radio/Coloring.vue';

   import  onadarkbackground  from  'components/Form/Radio/Onadarkbackground.vue';


   import  disable  from  'components/Form/Radio/Disable.vue';

   import  labelonleftside  from  'components/Form/Radio/Labelonleftside.vue';
   import  standardsizes  from  'components/Form/Radio/Standardsizes.vue';

   import  withQOptionGroup  from  'components/Form/Radio/WithQOptionGroup.vue';


   import  withQItem  from  'components/Form/Radio/WithQItem.vue';

   import  nativeform  from  'components/Form/Radio/Nativeform.vue';


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
     'standard':require('components/Form/Radio/Standard.vue').default,
     'dense':require('components/Form/Radio/Dense.vue').default,
      'coloring':require('components/Form/Radio/Coloring.vue').default,
     'onadarkbackground':require('components/Form/Radio/Onadarkbackground.vue').default,
        'disable':require('components/Form/Radio/Disable.vue').default,
        'labelonleftside':require('components/Form/Radio/Labelonleftside.vue').default,
         'standardsizes':require('components/Form/Radio/Standardsizes.vue').default,
          'withQOptionGroup':require('components/Form/Radio/WithQOptionGroup.vue').default,
           'withQItem':require('components/Form/Radio/WithQItem.vue').default,
            'nativeform':require('components/Form/Radio/Nativeform.vue').default,
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