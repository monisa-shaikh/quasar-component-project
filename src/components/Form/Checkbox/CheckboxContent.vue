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
                    <div class="text-h6">Arrayas model</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Menu transitions-->
                       <arrayasmodel/>
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

         <!----------- First card for Show options in menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">custom model values</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Show options in menu-->
                        <custommodelvalues/>
                    <!-- End code for Show options in menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Show options in menu---------------->

         <!----------- First card for Show options in menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">indeterminate state</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Show options in menu-->
                        <indeterminatestate/>
                    <!-- End code for Show options in menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Show options in menu---------------->



         <!----------- First card for Show options in menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">label</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Show options in menu-->
                        <labelcomponents/>
                    <!-- End code for Show options in menu-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
         <!-- ----------------End First card for Show options in menu---------------->


         <!----------- First card for Show options in menu------------->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">toggle order</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Show options in menu-->
                        <toggleorder/>
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
 import  standard   from 'components/Form/Checkbox/Standard.vue';
     import  dense   from 'components/Form/Checkbox/Dense.vue';
      import  coloring   from 'components/Form/Checkbox/Coloring.vue';
     import  onadarkbackground   from 'components/Form/Checkbox/Onadarkbackground.vue';
        import  disable   from 'components/Form/Checkbox/Disable.vue';
        import  arrayasmodel   from 'components/Form/Checkbox/Arrayasmodel.vue';
         import  standardsizes   from 'components/Form/Checkbox/Standardsizes.vue';
          import  withQOptionGroup   from 'components/Form/Checkbox/WithQOptionGroup.vue';
           import  withQItem   from 'components/Form/Checkbox/WithQItem.vue';
            import  nativeform   from 'components/Form/Checkbox/Nativeform.vue';

            import  custommodelvalues   from 'components/Form/Checkbox/Custommodelvalues.vue';
             import  indeterminatestate   from 'components/Form/Checkbox/Indeterminatestate.vue';
             import  labelcomponents   from 'components/Form/Checkbox/Label.vue';
             import  toggleorder   from 'components/Form/Checkbox/Toggleorder.vue';
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
     standard,
     dense  ,
      coloring,
     onadarkbackground ,
        disable ,
        arrayasmodel ,
         standardsizes  ,
          withQOptionGroup ,
           withQItem  ,
            nativeform ,

            custommodelvalues ,
             indeterminatestate ,
             labelcomponents  ,
             toggleorder,
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