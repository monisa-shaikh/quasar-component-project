<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Size & colors</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!-- first card for Design Overview -->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
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

                <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">on a dark background</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <onadarkbackground />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->
 <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Dense</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <dense />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

             
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End first card Row--------------------------------------->

    <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">QItemSection</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Left avatar/thumbnail QItemSection</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <leftavatar />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                  <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Right avatar/thumbnail QItemSection</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <rightavatar/>
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                  <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Side QItemSection</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <sideQItemSection/>
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

     <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6"></div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Active prop</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <activeprop />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->


                             <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">ItemLabel</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <itemLabel />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                
                             <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Contact list</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <contactlist />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                  
                             <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Settings</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <settings />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                
                             <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Emails</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <emails />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
        <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Folder listing</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <folderlisting />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
            
<!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Menu</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <menucomponent />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
                  
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

</q-page>
</template>

<script>

  import  basic   from  'components/ListandListItems/Basic.vue' ;
          import  onadarkbackground   from  'components/ListandListItems/Onadarkbackground.vue' ;
            import  dense   from  'components/ListandListItems/Dense.vue' ;
                import  emails   from  'components/ListandListItems/Emails.vue' ;
          import  folderlisting   from  'components/ListandListItems/Folderlisting.vue' ;
            import  menucomponent  from  'components/ListandListItems/Menu.vue'; 

              import  settings   from  'components/ListandListItems/Settings.vue'; 
          import  contactlist   from  'components/ListandListItems/Contactlist.vue' ;
            import  itemLabel   from  'components/ListandListItems/ItemLabel.vue'; 
                import  activeprop   from  'components/ListandListItems/Activeprop.vue'; 
          import  sideQItemSection   from  'components/ListandListItems/SideQItemSection.vue' ;
            import  rightavatar   from  'components/ListandListItems/Rightavatar.vue'; 

                     import  leftavatar   from  'components/ListandListItems/Leftavatar.vue'; 
        
            
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
           onadarkbackground ,
             dense   ,
                 emails  ,
           folderlisting  ,
             menucomponent   ,

               settings ,
           contactlist  ,
             itemLabel  ,
                 activeprop   ,
           sideQItemSection  ,
             rightavatar   ,

                      leftavatar  ,
           sideQItemSection ,
             rightavatar  ,
           
           

          
                
            
            
       
       


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
