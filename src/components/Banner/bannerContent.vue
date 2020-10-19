<template>
 <q-page>
     <!-- first card for basic Banner -->
      <div class="row items-start ">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Basic</div>
            
                </q-card-section>

                <q-card-section>
                 <!-- code for basic Banner -->

                 <div class="q-gutter-sm">
                    <q-banner class="bg-primary text-white">
                    Unfortunately, the credit card did not go through, please try again.
                    <template v-slot:action>
                        <q-btn flat color="white" label="Dismiss" />
                        <q-btn flat color="white" label="Update Credit Card" />
                    </template>
                    </q-banner>

                    <q-banner class="bg-grey-3">
                    <template v-slot:avatar>
                        <q-icon name="signal_wifi_off" color="primary" />
                    </template>
                    You have lost connection to the internet. This app is offline.
                    <template v-slot:action>
                        <q-btn flat color="primary" label="Turn on Wifi" />
                    </template>
                    </q-banner>

                    <q-banner inline-actions class="text-white bg-red">
                    You have lost connection to the internet. This app is offline.
                    <template v-slot:action>
                        <q-btn flat color="white" label="Turn ON Wifi" />
                    </template>
                    </q-banner>
                </div>
                 <!-- End code for basic Banner -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
      <!-- End first card for basic Banner-->

       <!-- Second card for rounded -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">rounded</div>
            
                </q-card-section>

                <q-card-section>
                 <!-- Code for rounded -->
                  <div class="q-gutter-sm">
                    <q-banner rounded class="bg-purple-8 text-white">

                    We can't find your saved recipes until you sign in.

                    <template v-slot:action>
                        <q-btn flat color="white" label="Continue as a Guest" />
                        <q-btn flat color="white" label="Sign in" />
                    </template>
                    </q-banner>
                </div>
                 <!-- End Code for rounded-->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Second card for rounded -->

        <!-- third card for With an image -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">With an image</div>
            
                </q-card-section>

                <q-card-section>
                 <!-- Code for With an image -->
                   <div class="q-gutter-sm">
                        <q-banner rounded class="bg-grey-3">
                        <template v-slot:avatar>
                            <img
                            src="https://cdn.quasar.dev/img/mountains.jpg"
                            style="width: 100px; height: 64px"
                            >
                        </template>

                        Could not retrieve travel data.
                        <template v-slot:action>
                            <q-btn flat label="Retry" />
                        </template>
                        </q-banner>
                    </div>
                 <!-- End Code for With an image  -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End third card for With an image  -->


       
        <!-- fourth card for Inline actions -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Inline actions</div>
            
                </q-card-section>

                <q-card-section>
                 <!-- Code for Inline actions-->
                  <div class="q-gutter-sm">
                    <q-banner inline-actions rounded class="bg-orange text-white">
                    You have lost connection to the internet. This app is offline.

                    <template v-slot:action>
                        <q-btn flat label="Turn ON Wifi" />
                        <q-btn flat label="Dismiss" />
                    </template>
                    </q-banner>
                </div>
                 <!-- End Code for Inline actions -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End fourth card for Inline actions -->


          <!-- Five card for dense -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">dense</div>
            
                </q-card-section>

                <q-card-section>
                 <!-- Code for dense-->
               <div class=" q-gutter-sm">
                    <q-banner dense class="bg-primary text-white">
                    Unfortunately, the credit card did not go through, please try again.
                    <template v-slot:action>
                        <q-btn flat color="white" label="Dismiss" />
                        <q-btn flat color="white" label="Update Credit Card" />
                    </template>
                    </q-banner>

                    <q-banner dense class="bg-grey-3">
                    <template v-slot:avatar>
                        <q-icon name="signal_wifi_off" color="primary" />
                    </template>
                    You have lost connection to the internet. This app is offline.
                    <template v-slot:action>
                        <q-btn flat color="primary" label="Turn on Wifi" />
                    </template>
                    </q-banner>

                    <q-banner dense inline-actions class="text-white bg-red">
                    You have lost connection to the internet. This app is offline.
                    <template v-slot:action>
                        <q-btn flat color="white" label="Turn ON Wifi" />
                    </template>
                    </q-banner>
                </div>
                 <!-- End Code for dense -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Five card for dense -->
 </q-page>
</template>

<script>
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
    }
}
</script>

<style>

</style>