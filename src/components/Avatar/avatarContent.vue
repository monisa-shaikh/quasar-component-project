<template>
 <q-page>
     <!-- first card for basic -->
      <div class="row items-start ">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Basic</div>
               
                    
                </q-card-section>

                <q-card-section>
                 <!-- code for basic avatar -->

                 <div class="q-gutter-sm">
                     <q-avatar color="red" text-color="white" icon="directions" />
                            <q-avatar color="primary" text-color="white">J</q-avatar>
                            <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
                            <q-avatar size="24px" color="orange">J</q-avatar>
                            <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar.png">
                       </q-avatar>
                 </div>
                 <!-- End code for basic avatar -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
      <!-- End first card for basic -->

       <!-- Second card for standard size -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Standard sizes</div>
               
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Standard sizes avatar -->
                  <div class="q-gutter-sm">
                        <q-avatar
                        v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
                        :key="size"
                        :size="size"
                        color="primary"
                        text-color="white"
                        icon="directions"
                        />
                    </div>
                 <!-- End Code for Standard sizes avatar -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Second card for standard size -->

        <!-- third card for square -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Square</div>
               
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for square-->
                  <div class="q-gutter-sm">
                        <q-avatar square color="red" text-color="white" icon="directions" />
                        <q-avatar square color="primary" text-color="white">J</q-avatar>
                        <q-avatar square size="100px" font-size="82px" color="teal" text-color="white" icon="directions" />
                        <q-avatar square size="24px" color="orange">J</q-avatar>
                        <q-avatar square>
                        <img src="https://cdn.quasar.dev/img/avatar.png">
                        </q-avatar>
                 </div>
                 <!-- End Code for square -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End third card for standard size -->


       
        <!-- fourth card for Rounded -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Rounded</div>
               
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Rounded-->
                  <div class="q-gutter-sm">
                        <q-avatar rounded color="red" text-color="white" icon="directions" />
                        <q-avatar rounded color="primary" text-color="white">J</q-avatar>
                        <q-avatar rounded size="100px" font-size="82px" color="teal" text-color="white" icon="directions" />
                        <q-avatar rounded size="24px" color="orange">J</q-avatar>
                        <q-avatar rounded>
                        <img src="https://cdn.quasar.dev/img/avatar.png">
                        </q-avatar>
                    </div>
                 <!-- End Code for Rounded -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End fourth card for Rounded -->


          <!-- Five card for With-other-components -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">With-other-components</div>
               
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for With-other-components-->
                 <div class="q-gutter-y-md">
                        <div class="q-gutter-sm">
                        <q-chip>
                            <q-avatar color="red" text-color="white">50</q-avatar>
                            Emails
                        </q-chip>
                        <q-chip>
                            <q-avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                            </q-avatar>
                            John
                        </q-chip>
                        </div>

                        <div class="q-gutter-x-sm">
                        <q-btn round>
                            <q-avatar size="28px">
                            <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
                            </q-avatar>
                        </q-btn>
                        <q-btn round>
                            <q-avatar size="32px">
                            <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
                            </q-avatar>
                        </q-btn>
                        <q-btn round>
                            <q-avatar size="40px">
                            <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
                            </q-avatar>
                        </q-btn>
                        </div>

                        <q-item clickable v-ripple>
                        <q-item-section side>
                            <q-avatar rounded size="48px">
                            <img src="https://cdn.quasar.dev/img/avatar.png" />
                            <q-badge floating color="teal">new</q-badge>
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Mary</q-item-label>
                            <q-item-label caption>2 new messages</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            3 min ago
                        </q-item-section>
                        </q-item>

                        <q-banner rounded class="bg-primary text-white">
                        <template v-slot:avatar>
                            <q-avatar icon="signal_wifi_off" color="white" text-color="primary" />
                        </template>

                        You have lost connection to the internet. This app is offline.

                        <template v-slot:action>
                            <q-btn flat color="white" label="Turn ON Wifi" />
                        </template>
                        </q-banner>
                    </div>
                 <!-- End Code for With-other-components -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Five card for With-other-components -->
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
            
        },
        onItemClick () {
      // console.log('Clicked on an Item')
    }
    }
}
</script>

<style>

</style>