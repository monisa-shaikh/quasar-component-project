<template>
 <q-page>

     <!-- first card for MacOS-style -->
     <basic/>
      <!-- End first card for MacOS-style-->

       <!-- Second card for Windows style -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">In a QToolbar</div>
                        
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Windows style -->
                <div>
                    <div class="bg-cyan text-white">
                    <q-toolbar>
                        <q-btn flat round dense icon="assignment_ind" />

                        <q-toolbar-title>Quasar</q-toolbar-title>

                        <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
                        <q-btn flat round dense icon="gamepad" />
                    </q-toolbar>
                    <q-toolbar inset>
                        <q-breadcrumbs active-color="white" style="font-size: 16px">
                        <q-breadcrumbs-el label="Home" icon="home" />
                        <q-breadcrumbs-el label="Components" icon="widgets" />
                        <q-breadcrumbs-el label="Toolbar" />
                        </q-breadcrumbs>
                    </q-toolbar>
                    </div>
                </div>
                 <!-- End Code for Windows style-->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Second card for Windows style -->

        <!-- third card for iOS style -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Custom separators</div>
               
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for iOS style -->
                <div class="q-gutter-sm">
                    <q-breadcrumbs separator="---" class="text-orange" active-color="secondary">
                    <q-breadcrumbs-el icon="home" />
                    <q-breadcrumbs-el label="Components" icon="widgets" />
                    <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
                    </q-breadcrumbs>

                    <q-breadcrumbs class="text-grey" active-color="purple">
                    <template v-slot:separator>
                        <q-icon
                        size="1.2em"
                        name="arrow_forward"
                        color="purple"
                        />
                    </template>

                    <q-breadcrumbs-el label="Home" icon="home" />
                    <q-breadcrumbs-el label="Components" icon="widgets" />
                    <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
                    </q-breadcrumbs>

                    <q-breadcrumbs class="text-brown">
                    <template v-slot:separator>
                        <q-icon
                        size="1.5em"
                        name="chevron_right"
                        color="primary"
                        />
                    </template>

                    <q-breadcrumbs-el label="Home" icon="home" />
                    <q-breadcrumbs-el label="Components" icon="widgets" />
                    <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
                    </q-breadcrumbs>
                </div>
                 <!-- End Code for iOS style  -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End third card for iOS style  -->


       
        <!-- fourth card for Android style -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Router links</div>
               
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Android style-->
                 <div class="q-gutter-sm">
                    <q-breadcrumbs>
                    <q-breadcrumbs-el icon="home" to="/" />
                    <q-breadcrumbs-el label="Docs" icon="widgets" to="/start/pick-quasar-flavour" />
                    <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/vue-components/breadcrumbs" />
                    <q-breadcrumbs-el label="Build" icon="build" />
                    </q-breadcrumbs>
                </div>
                 <!-- End Code for Android style -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End fourth card for Android style -->

          <!-- Five card for QMenu -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Gutters</div>
               
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for QMenu-->
                    <div class="q-gutter-sm">
                        <q-breadcrumbs gutter="none">
                        <q-breadcrumbs-el label="Home" />
                        <q-breadcrumbs-el label="Components" />
                        <q-breadcrumbs-el label="Breadcrumbs" />
                        </q-breadcrumbs>

                        <q-separator />

                        <q-breadcrumbs gutter="xs">
                        <q-breadcrumbs-el label="Home" />
                        <q-breadcrumbs-el label="Components" />
                        <q-breadcrumbs-el label="Breadcrumbs" />
                        </q-breadcrumbs>

                        <q-separator />

                        <q-breadcrumbs gutter="sm">
                        <q-breadcrumbs-el label="Home" />
                        <q-breadcrumbs-el label="Components" />
                        <q-breadcrumbs-el label="Breadcrumbs" />
                        </q-breadcrumbs>

                        <q-separator />

                        <q-breadcrumbs gutter="md">
                        <q-breadcrumbs-el label="Home" />
                        <q-breadcrumbs-el label="Components" />
                        <q-breadcrumbs-el label="Breadcrumbs" />
                        </q-breadcrumbs>

                        <q-separator />

                        <q-breadcrumbs gutter="lg">
                        <q-breadcrumbs-el label="Home" />
                        <q-breadcrumbs-el label="Components" />
                        <q-breadcrumbs-el label="Breadcrumbs" />
                        </q-breadcrumbs>

                        <q-separator />

                        <q-breadcrumbs gutter="xl">
                        <q-breadcrumbs-el label="Home" />
                        <q-breadcrumbs-el label="Components" />
                        <q-breadcrumbs-el label="Breadcrumbs" />
                        </q-breadcrumbs>
                    </div>
                 <!-- End Code for QMenu -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Five card for QMenu -->

       

          <!-- six card for QDialog -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Align</div>
               
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for QDialog-->
                <div class="q-gutter-sm">
                    <q-breadcrumbs align="left">
                    <q-breadcrumbs-el label="Home" />
                    <q-breadcrumbs-el label="Components" />
                    <q-breadcrumbs-el label="Breadcrumbs" />
                    </q-breadcrumbs>

                    <q-breadcrumbs align="center">
                    <q-breadcrumbs-el label="Home" />
                    <q-breadcrumbs-el label="Components" />
                    <q-breadcrumbs-el label="Breadcrumbs" />
                    </q-breadcrumbs>

                    <q-breadcrumbs align="right">
                    <q-breadcrumbs-el label="Home" />
                    <q-breadcrumbs-el label="Components" />
                    <q-breadcrumbs-el label="Breadcrumbs" />
                    </q-breadcrumbs>

                    <q-breadcrumbs align="between">
                    <q-breadcrumbs-el label="Home" />
                    <q-breadcrumbs-el label="Components" />
                    <q-breadcrumbs-el label="Breadcrumbs" />
                    </q-breadcrumbs>

                    <q-breadcrumbs align="around">
                    <q-breadcrumbs-el label="Home" />
                    <q-breadcrumbs-el label="Components" />
                    <q-breadcrumbs-el label="Breadcrumbs" />
                    </q-breadcrumbs>
                </div>

                 <!-- End Code for QDialog -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End six card for QDialog -->

 </q-page>
</template>

<script>
// import fabApple from '@quasar/extras/fontawesome-v5';

import basic from 'components/Breadcrumbs/Components/basicbreadcrumbs.vue';
export default {
data(){
        return{
            isshowprop:true
        }
    },
    methods: {
      
        closefun(){
             this.isshowprop=false
            
        }
    },
     components:{
        // 'basic':require('components/Breadcrumbs/components/basicbreadcrumbs.vue').default
      basic
    }
}
</script>

<style>

</style>