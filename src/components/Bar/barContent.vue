<template>
 <q-page>
     <h5 class="text-blue-5 q-mb-sm">Styling</h5>
     <!-- first card for MacOS-style -->
      <!-- <div class="row items-start ">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">MacOS-style</div>
              
                    
                </q-card-section>

                <q-card-section> -->
                 <!-- code for MacOS-style-->

                <!-- <div class="q-gutter-sm">
                    <q-bar>
                    <q-btn dense flat :icon="fabApple" />
                    <div class="text-weight-bold">
                        App
                    </div>
                    <div class="cursor-pointer gt-md">File</div>
                    <div class="cursor-pointer gt-md">Edit</div>
                    <div class="cursor-pointer gt-md">View</div>
                    <div class="cursor-pointer gt-md">Window</div>
                    <div class="cursor-pointer gt-md">Help</div>
                    <q-space />
                    <q-btn dense flat icon="airplay" class="gt-xs" />
                    <q-btn dense flat icon="battery_charging_full" />
                    <q-btn dense flat icon="wifi" />
                    <div>9:41</div>
                    <q-btn dense flat icon="search" />
                    <q-btn dense flat icon="list" />
                    </q-bar>

                    <q-bar class="bg-black text-white">
                    <q-btn dense flat :icon="fabApple" />
                    <div class="text-weight-bold">
                        App
                    </div>
                    <div class="cursor-pointer gt-md">File</div>
                    <div class="cursor-pointer gt-md">Edit</div>
                    <div class="cursor-pointer gt-md">View</div>
                    <div class="cursor-pointer gt-md">Window</div>
                    <div class="cursor-pointer gt-md">Help</div>
                    <q-space />
                    <q-btn dense flat icon="airplay" class="gt-xs" />
                    <q-btn dense flat icon="battery_charging_full" />
                    <q-btn dense flat icon="wifi" />
                    <div>9:41</div>
                    <q-btn dense flat icon="search" />
                    <q-btn dense flat icon="list" />
                    </q-bar>

                    <q-bar>
                    <q-btn dense flat round icon="lens" size="8.5px" color="red" />
                    <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
                    <q-btn dense flat round icon="lens" size="8.5px" color="green" />
                    <div class="col text-center text-weight-bold">
                        My-App
                    </div>
                    </q-bar>

                    <q-bar dark class="bg-primary text-white">
                    <q-btn dense flat round icon="lens" size="8.5px" color="red" />
                    <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
                    <q-btn dense flat round icon="lens" size="8.5px" color="green" />
                    <div class="col text-center text-weight-bold">
                        My-App
                    </div>
                    </q-bar>
                </div> -->
                 <!-- End code for MacOS-style -->
                <!-- </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div> -->
      <!-- End first card for MacOS-style-->

       <!-- Second card for Windows style -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Windows style</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Windows style -->
                 <div class="q-gutter-sm">

                    <q-bar>
                    <div class="cursor-pointer">File</div>
                    <div class="cursor-pointer">Edit</div>
                    <div class="cursor-pointer gt-xs">View</div>
                    <div class="cursor-pointer gt-xs">Window</div>
                    <div class="cursor-pointer">Help</div>
                    <q-space />
                    <q-btn dense flat icon="minimize" />
                    <q-btn dense flat icon="crop_square" />
                    <q-btn dense flat icon="close" />
                    </q-bar>

                    <q-bar class="bg-black text-white">
                    <div class="cursor-pointer">File</div>
                    <div class="cursor-pointer">Edit</div>
                    <div class="cursor-pointer gt-xs">View</div>
                    <div class="cursor-pointer gt-xs">Window</div>
                    <div class="cursor-pointer">Help</div>
                    <q-space />
                    <q-btn dense flat icon="minimize" />
                    <q-btn dense flat icon="crop_square" />
                    <q-btn dense flat icon="close" />
                    </q-bar>

                </div>
                 <!-- End Code for Windows style-->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Second card for Windows style -->

        <!-- third card for iOS style -->
        <!-- <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">iOS style</div>
              
                    
                </q-card-section>

                <q-card-section> -->
                 <!-- Code for iOS style -->
                  <!-- <div class="q-gutter-sm">
                    <q-bar dense class="bg-teal text-white">
                    <q-icon :name="fasSignal" />
                    <div>mobi-net</div>
                    <div>4G</div>
                    <q-icon :name="fasWifi" />
                    <q-space />
                    <q-icon name="near_me" />
                    <div>100%</div>
                    <q-icon :name="fasBatteryFull" />
                    </q-bar>

                    <q-bar dense class="bg-amber text-grey-8">
                    <q-icon :name="fasSignal" />
                    <div>mobi-net</div>
                    <div>4G</div>
                    <q-icon :name="fasWifi" />
                    <q-space />
                    <q-icon name="near_me" />
                    <div>100%</div>
                    <q-icon :name="fasBatteryFull" />
                    </q-bar>
                </div> -->
                 <!-- End Code for iOS style  -->
                <!-- </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div> -->
       <!-- End third card for iOS style  -->


       
        <!-- fourth card for Android style -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Android style</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Android style-->
                 <div class="q-gutter-sm">

                    <q-bar dense class="bg-black text-white">
                    <div>mobi-net</div>
                    <q-icon name="email" />
                    <q-space />
                    <q-icon name="bluetooth" />
                    <q-icon name="signal_wifi_4_bar" />
                    <q-icon name="signal_cellular_4_bar" />
                    <div class="gt-xs">100%</div>
                    <q-icon name="battery_full" />
                    <div>10:00AM</div>
                    </q-bar>

                    <q-bar dense class="bg-green text-white">
                    <div>mobi-net</div>
                    <q-icon name="email" />
                    <q-space />
                    <q-icon name="bluetooth" />
                    <q-icon name="signal_wifi_4_bar" />
                    <q-icon name="signal_cellular_4_bar" />
                    <div class="gt-xs">100%</div>
                    <q-icon name="battery_full" />
                    <div>10:00AM</div>
                    </q-bar>

                 </div>
                 <!-- End Code for Android style -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End fourth card for Android style -->

     <h5 class="text-blue-5 q-mb-sm q-mt-sm">With other components</h5>

          <!-- Five card for QMenu -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">QMenu</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for QMenu-->
                <div >
                    <q-bar>
                    <div class="cursor-pointer non-selectable">
                        File
                        <q-menu>
                        <q-list dense style="min-width: 100px">
                            <q-item clickable v-close-popup>
                            <q-item-section>Open...</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                            <q-item-section>New</q-item-section>
                            </q-item>

                            <q-separator />

                            <q-item clickable>
                            <q-item-section>Preferences</q-item-section>
                            <q-item-section side>
                                <q-icon name="keyboard_arrow_right" />
                            </q-item-section>

                            <q-menu anchor="top right" self="top left">
                                <q-list>
                                <q-item
                                    v-for="n in 3"
                                    :key="n"
                                    dense
                                    clickable
                                >
                                    <q-item-section>Submenu Label</q-item-section>
                                    <q-item-section side>
                                    <q-icon name="keyboard_arrow_right" />
                                    </q-item-section>
                                    <q-menu auto-close anchor="top right" self="top left">
                                    <q-list>
                                        <q-item
                                        v-for="n in 3"
                                        :key="n"
                                        dense
                                        clickable
                                        >
                                        <q-item-section>3rd level Label</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-item>
                                </q-list>
                            </q-menu>
                            </q-item>

                            <q-separator />

                            <q-item clickable v-close-popup>
                            <q-item-section>Quit</q-item-section>
                            </q-item>
                        </q-list>
                        </q-menu>
                    </div>

                    <div class="q-ml-md cursor-pointer non-selectable">
                        Edit
                        <q-menu auto-close>
                        <q-list dense style="min-width: 100px">
                            <q-item clickable>
                            <q-item-section>Cut</q-item-section>
                            </q-item>
                            <q-item clickable>
                            <q-item-section>Copy</q-item-section>
                            </q-item>
                            <q-item clickable>
                            <q-item-section>Paste</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable>
                            <q-item-section>Select All</q-item-section>
                            </q-item>
                        </q-list>
                        </q-menu>
                    </div>

                    <q-space />

                    <q-btn dense flat icon="minimize" />
                    <q-btn dense flat icon="crop_square" />
                    <q-btn dense flat icon="close" />
                    </q-bar>
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
                    <div class="text-h6">QDialog</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for QDialog-->
               <div class="q-gutter-sm">
                <q-btn label="Light" color="primary" @click="lightDialog = true" />
                <q-btn label="Dark" color="grey-8" @click="darkDialog = true" />

                <q-dialog v-model="lightDialog" persistent>
                <q-card>
                    <q-bar>
                    <q-icon name="arrow_forward" />
                    <div>Your Next Steps</div>

                    <q-space />

                    <q-btn dense flat icon="close" v-close-popup>
                        <q-tooltip>Close</q-tooltip>
                    </q-btn>
                    </q-bar>

                    <q-card-section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                    </q-card-section>
                </q-card>
                </q-dialog>

                <q-dialog v-model="darkDialog" persistent transition-show="flip-down" transition-hide="flip-up">
                <q-card class="bg-primary text-white">
                    <q-bar>
                    <q-icon name="warning" />
                    <div>Are you certain?</div>

                    <q-space />

                    <q-btn dense flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                    </q-bar>

                    <q-card-section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                    </q-card-section>
                </q-card>
                </q-dialog>
            </div>
                 <!-- End Code for QDialog -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End six card for QDialog -->

          <!-- seven card for QHeader with QToolbar -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">QHeader with QToolbar</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for QHeader with QToolbar-->
               <div>
                <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
                <q-header elevated>
                    <q-bar>
                    <q-icon name="laptop_chromebook" />
                    <div>Google Chrome</div>

                    <q-space />

                    <q-btn dense flat icon="minimize" />
                    <q-btn dense flat icon="crop_square" />
                    <q-btn dense flat icon="close" />
                    </q-bar>

                    <div class="q-pa-sm q-pl-md row items-center">
                    <div class="cursor-pointer non-selectable">
                        File
                        <q-menu>
                        <q-list dense style="min-width: 100px">
                            <q-item clickable v-close-popup>
                            <q-item-section>Open...</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                            <q-item-section>New</q-item-section>
                            </q-item>

                            <q-separator />

                            <q-item clickable>
                            <q-item-section>Preferences</q-item-section>
                            <q-item-section side>
                                <q-icon name="keyboard_arrow_right" />
                            </q-item-section>

                            <q-menu anchor="top right" self="top left">
                                <q-list>
                                <q-item
                                    v-for="n in 3"
                                    :key="n"
                                    dense
                                    clickable
                                >
                                    <q-item-section>Submenu Label</q-item-section>
                                    <q-item-section side>
                                    <q-icon name="keyboard_arrow_right" />
                                    </q-item-section>
                                    <q-menu auto-close anchor="top right" self="top left">
                                    <q-list>
                                        <q-item
                                        v-for="n in 3"
                                        :key="n"
                                        dense
                                        clickable
                                        >
                                        <q-item-section>3rd level Label</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-item>
                                </q-list>
                            </q-menu>
                            </q-item>

                            <q-separator />

                            <q-item clickable v-close-popup>
                            <q-item-section>Quit</q-item-section>
                            </q-item>
                        </q-list>
                        </q-menu>
                    </div>

                    <div class="q-ml-md cursor-pointer non-selectable">
                        Edit
                        <q-menu auto-close>
                        <q-list dense style="min-width: 100px">
                            <q-item clickable>
                            <q-item-section>Cut</q-item-section>
                            </q-item>
                            <q-item clickable>
                            <q-item-section>Copy</q-item-section>
                            </q-item>
                            <q-item clickable>
                            <q-item-section>Paste</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable>
                            <q-item-section>Select All</q-item-section>
                            </q-item>
                        </q-list>
                        </q-menu>
                    </div>
                    </div>
                </q-header>

                <q-page-container>
                    <q-page class="q-pa-md">
                    <p v-for="n in 15" :key="n">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
                    </p>
                    </q-page>
                </q-page-container>
                </q-layout>
            </div>
                 <!-- End Code for QHeader with QToolbar -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End seven card for QHeader with QToolbar -->


       
 </q-page>
</template>

<script>
import { fabApple } from '@quasar/extras/fontawesome-v5'
import { fasSignal, fasWifi, fasBatteryFull } from '@quasar/extras/fontawesome-v5'
export default {
data(){
        return{
            isshowprop:true,
             lightDialog: false,
            darkDialog: false
        }
    },
    methods: {
      
        closefun(){
             this.isshowprop=false
            
        }
    },
    created () {
    this.fabApple = fabApple

    this.fasSignal = fasSignal
    this.fasWifi = fasWifi
    this.fasBatteryFull = fasBatteryFull
  }
}
</script>

<style>

</style>