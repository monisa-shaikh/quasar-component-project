<template>
  <q-page>
  
    <!-- first card for Non expandable -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Non expandable</div>
          
        </q-card-section>

        <q-card-section>
          <!-- code for Non expandable-->
           <div >
            <q-layout view="lhh LpR lff" container style="height: 300px" class="shadow-2 rounded-borders">
            <q-header class="bg-black">
                <q-toolbar>
                <q-btn flat round Internal labels icon="menu" />
                <q-toolbar-title>Header</q-toolbar-title>
                </q-toolbar>
            </q-header>

            <q-page-container>
                <q-page padding>
                <p v-for="n in 15" :key="n">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
                </p>

                <q-page-sticky position="bottom-right" :offset="[18, 18]">
                    <q-btn fab icon="add" color="accent" />
                </q-page-sticky>
                </q-page>
            </q-page-container>
            </q-layout>
        </div>
          <!-- End code for Non expandable -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Non expandable-->

  

    <!-- Second card for Expandable-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Expandable</div>
          
        </q-card-section>

        <q-card-section>
          <!-- Code for Expandable -->
          <div class="q-px-sm q-py-lg">
            <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
            <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
                <q-fab-action color="primary" @click="onClick" icon="mail" />
                <q-fab-action color="secondary" @click="onClick" icon="alarm" />
            </q-fab>

            <br>

            <q-fab color="amber" text-color="black" icon="keyboard_arrow_left" direction="left">
                <q-fab-action color="amber" text-color="black" @click="onClick" icon="mail" />
                <q-fab-action color="amber" text-color="black" @click="onClick" icon="alarm" />
            </q-fab>

            <br>

            <q-fab color="secondary" push icon="keyboard_arrow_right" direction="right">
                <q-fab-action color="primary" @click="onClick" icon="mail" />
                <q-fab-action color="accent" @click="onClick" icon="alarm" />
            </q-fab>

            <br>

            <q-fab color="accent" glossy icon="keyboard_arrow_down" direction="down">
                <q-fab-action color="amber" text-color="black" @click="onClick" icon="mail" />
                <q-fab-action color="amber" text-color="black" @click="onClick" icon="alarm" />
            </q-fab>
            </div>
        </div>
          <!-- End Code for Expandable-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card for Expandable -->

    <!-- <h5 class="text-blue-5 q-mb-sm">Internal labels </h5> -->

    <!-- third card for Internal labels-->

    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Internal labels</div>
          
        </q-card-section>

        <q-card-section>
          <!-- Code for Internal labels -->
           <div style="padding-bottom: 220px">
                <div>
                <q-fab
                    v-model="fab1"
                    label="Actions"
                    label-position="left"
                    color="purple"
                    icon="keyboard_arrow_right"
                    direction="right"
                >
                    <q-fab-action color="primary" @click="onClick" icon="mail" label="Email" />
                    <q-fab-action color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                </q-fab>
                </div>

                <div class="q-mt-md">
                <q-fab
                    v-model="fab2"
                    label="Actions"
                    vertical-actions-align="left"
                    color="purple"
                    icon="keyboard_arrow_down"
                    direction="down"
                >
                    <q-fab-action color="primary" @click="onClick" icon="mail" label="Email" />
                    <q-fab-action color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                    <q-fab-action color="orange" @click="onClick" icon="airplay" label="Airplay" />
                    <q-fab-action color="accent" @click="onClick" icon="room" label="Map" />
                </q-fab>
                </div>
            </div>
          <!-- End Code for Internal labels-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End third for Internal labels -->


    <!-- fourth card On Toggling internal label-->
    
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">On Toggling internal label</div>
          
        </q-card-section>

        <q-card-section>
          <!-- Code for On Toggling internal label-->
       <div style="padding-bottom: 240px">
        <q-toggle v-model="hideLabels" label="Hide labels" />

        <div class="q-mt-md">
        <q-fab
            v-model="fab1"
            label="Actions"
            color="purple"
            icon="keyboard_arrow_right"
            direction="right"
            :hide-label="hideLabels"
        >
            <q-fab-action :hide-label="hideLabels" color="primary" @click="onClick" icon="mail" label="Email" />
            <q-fab-action :hide-label="hideLabels" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        </q-fab>
        </div>

        <div class="q-mt-md row justify-center">
        <q-fab
            v-model="fab2"
            label="Actions"
            label-position="bottom"
            glossy
            color="purple"
            icon="keyboard_arrow_down"
            direction="down"
            :hide-label="hideLabels"
        >
            <q-fab-action :hide-label="hideLabels" color="primary" @click="onClick" icon="mail" label="Email" />
            <q-fab-action :hide-label="hideLabels" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
            <q-fab-action :hide-label="hideLabels" color="orange" @click="onClick" icon="airplay" label="Airplay" />
            <q-fab-action :hide-label="hideLabels" color="accent" @click="onClick" icon="room" label="Map" />
        </q-fab>
        </div>
    </div>
          <!-- End Code for On Toggling internal label-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End fourth On Toggling internal label -->



    <!-- Five card for Switch toggle side-->
          <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Vertical actions alignment</div>
          
        </q-card-section>

        <q-card-section>
          <!-- Code forHeader slot-->
            <div  style="padding-top: 220px">
            <div class="row justify-between">
            <q-fab
                v-model="fabLeft"
                vertical-actions-align="left"
                color="primary"
                glossy
                icon="keyboard_arrow_up"
                direction="up"
            >
                <q-fab-action label-position="right" color="primary" @click="onClick" icon="mail" label="Email" />
                <q-fab-action label-position="right" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                <q-fab-action label-position="right" color="orange" @click="onClick" icon="airplay" label="Airplay" />
                <q-fab-action label-position="right" color="accent" @click="onClick" icon="room" label="Map" />
            </q-fab>

            <q-fab
                v-model="fabCenter"
                vertical-actions-align="center"
                color="primary"
                glossy
                icon="keyboard_arrow_up"
                direction="up"
            >
                <q-fab-action color="primary" @click="onClick" icon="mail" label="Email" />
                <q-fab-action color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                <q-fab-action color="orange" @click="onClick" icon="airplay" label="Airplay" />
                <q-fab-action color="accent" @click="onClick" icon="room" label="Map" />
            </q-fab>

            <q-fab
                v-model="fabRight"
                vertical-actions-align="right"
                color="primary"
                glossy
                icon="keyboard_arrow_up"
                direction="up"
            >
                <q-fab-action label-position="left" color="primary" @click="onClick" icon="mail" label="Email" />
                <q-fab-action label-position="left" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                <q-fab-action label-position="left" color="orange" @click="onClick" icon="airplay" label="Airplay" />
                <q-fab-action label-position="left" color="accent" @click="onClick" icon="room" label="Map" />
            </q-fab>
            </div>
        </div>
          <!-- End Code for Vertical actions alignment-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Five card for Switch toggle side-->

    <!-- six card for External label-->
      <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">External label</div>
          
        </q-card-section>

        <q-card-section>
          <!-- Code for External label-->
           <div style="padding-top: 48px; padding-bottom: 220px">
            <div>
            <q-fab
                v-model="fab1"
                label="Actions"
                label-position="top"
                external-label
                color="purple"
                icon="keyboard_arrow_right"
                direction="right"
            >
                <q-fab-action external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
                <q-fab-action external-label label-position="top" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                <q-fab-action external-label label-position="top" color="orange" @click="onClick" icon="airplay" label="Airplay" />
                <q-fab-action external-label label-position="top" color="accent" @click="onClick" icon="room" label="Map" />
            </q-fab>
            </div>

            <div class="q-mt-md">
            <q-fab
                v-model="fab2"
                label="Actions"
                external-label
                vertical-actions-align="left"
                color="purple"
                icon="keyboard_arrow_down"
                direction="down"
            >
                <q-fab-action external-label color="primary" @click="onClick" icon="mail" label="Email" />
                <q-fab-action external-label color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                <q-fab-action external-label color="orange" @click="onClick" icon="airplay" label="Airplay" />
                <q-fab-action external-label color="accent" @click="onClick" icon="room" label="Map" />
            </q-fab>
            </div>
        </div>
          <!-- End Code for External label-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End six card for External label-->


    <!-- seven card for Custom styled external label-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Custom styled external label</div>
          
        </q-card-section>

        <q-card-section>
             <!-- Code for Custom styled external label-->
            <div style="padding-top: 48px; padding-bottom: 220px">
            <div>
            <q-fab
                v-model="fab1"
                label="Actions"
                label-position="top"
                label-class="bg-grey-3 text-purple"
                external-label
                color="purple"
                icon="keyboard_arrow_right"
                direction="right"
            >
                <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
                <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="orange" @click="onClick" icon="airplay" label="Airplay" />
                <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="accent" @click="onClick" icon="room" label="Map" />
            </q-fab>
            </div>

            <div class="q-mt-md">
            <q-fab
                v-model="fab2"
                label="Actions"
                external-label
                label-class="bg-grey-3 text-purple"
                vertical-actions-align="left"
                color="purple"
                icon="keyboard_arrow_down"
                direction="down"
            >
                <q-fab-action label-class="bg-grey-3 text-grey-8" external-label color="primary" @click="onClick" icon="mail" label="Email" />
                <q-fab-action label-class="bg-grey-3 text-grey-8" external-label color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                <q-fab-action label-class="bg-grey-3 text-grey-8" external-label color="orange" @click="onClick" icon="airplay" label="Airplay" />
                <q-fab-action label-class="bg-grey-3 text-grey-8" external-label color="accent" @click="onClick" icon="room" label="Map" />
            </q-fab>
            </div>
        </div>
          <!-- Code for Custom styled external label-->
          
          <!-- End Code for Custom styled external label-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seven card for Custom styled external label--------------- -->


        <!-- Eight card for Toggling external label-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Toggling external label</div>
          
        </q-card-section>

        <q-card-section>
             <!-- Code for Toggling external label-->
            <div style="padding-bottom: 220px">
                <q-toggle v-model="hideLabels" label="Hide labels" />

                <div style="padding-top: 48px;">
                <q-fab
                    v-model="fab1"
                    label="Actions"
                    label-position="top"
                    external-label
                    color="purple"
                    icon="keyboard_arrow_right"
                    direction="right"
                    :hide-label="hideLabels"
                >
                    <q-fab-action :hide-label="hideLabels" external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
                    <q-fab-action :hide-label="hideLabels" external-label label-position="top" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                    <q-fab-action :hide-label="hideLabels" external-label label-position="top" color="orange" @click="onClick" icon="airplay" label="Airplay" />
                    <q-fab-action :hide-label="hideLabels" external-label label-position="top" color="accent" @click="onClick" icon="room" label="Map" />
                </q-fab>
                </div>

                <div class="q-mt-md">
                <q-fab
                    v-model="fab2"
                    label="Actions"
                    external-label
                    vertical-actions-align="left"
                    color="purple"
                    icon="keyboard_arrow_down"
                    direction="down"
                    :hide-label="hideLabels"
                >
                    <q-fab-action :hide-label="hideLabels" external-label color="primary" @click="onClick" icon="mail" label="Email" />
                    <q-fab-action :hide-label="hideLabels" external-label color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                    <q-fab-action :hide-label="hideLabels" external-label color="orange" @click="onClick" icon="airplay" label="Airplay" />
                    <q-fab-action :hide-label="hideLabels" external-label color="accent" @click="onClick" icon="room" label="Map" />
                </q-fab>
                </div>
            </div>
          <!-- Code for Toggling external label-->
          
          <!-- End Code for Toggling external label-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Eight card for Toggling external label--------------- -->


    
        <!-- Nine card for Toggle by expand icon only-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Toggle by expand icon only</div>
          
        </q-card-section>

        <q-card-section>
             <!-- Code for Toggle by expand icon only-->
            <div style="max-width: 350px">
            <q-list bordered class="rounded-borders">
            <q-expansion-item
                expand-icon-toggle
                expand-separator
                icon="perm_identity"
                label="Account settings"
                caption="John Doe"
            >
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                expand-icon-toggle
                expand-separator
                icon="signal_wifi_off"
                label="Wifi settings"
            >
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                expand-icon-toggle
                expand-separator
                icon="drafts"
                label="Drafts"
                header-class="text-purple"
            >
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>
            </q-list>
        </div>
          <!-- Code for Toggle by expand icon onlys-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Nine card for Toggle by expand icon only--------------- -->




    
        <!-- Ten card for Hide icon-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Hide icon</div>
          
        </q-card-section>

        <q-card-section>
             <!-- Code for Hide icon-->
                <div class="q-pa-md">
                <q-fab
                v-model="fab"
                label="Actions"
                label-position="left"
                color="purple"
                hide-icon
                direction="right"
                >
                <q-fab-action color="primary" @click="onClick" hide-icon label="Email" />
                <q-fab-action color="secondary" @click="onClick" hide-icon label="Alarm" />
                </q-fab>
            </div>
          <!-- Code for Hide icon-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Ten card for Hide icon--------------- -->


    
    
        <!-- Eleven card for Playing with padding-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Playing with padding</div>
          
        </q-card-section>

        <q-card-section>
             <!-- Code for Playing with padding-->
        <div  style="padding-top: 48px; padding-bottom: 220px">
                <div>
                <q-fab
                    v-model="fab1"
                    label="Actions"
                    label-position="top"
                    external-label
                    color="purple"
                    icon="keyboard_arrow_right"
                    direction="right"
                    padding="xs"
                >
                    <q-fab-action padding="5px" external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
                    <q-fab-action padding="5px" external-label label-position="top" color="orange" @click="onClick" icon="room" label="Map" />
                </q-fab>
                </div>

                <div class="q-mt-lg">
                <q-fab
                    v-model="fab2"
                    label="Actions"
                    vertical-actions-align="left"
                    color="purple"
                    padding="none xl"
                    icon="keyboard_arrow_down"
                    direction="down"
                >
                    <q-fab-action padding="3px" external-label color="primary" @click="onClick" icon="mail" label="Email" />
                    <q-fab-action padding="3px" external-label color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                    <q-fab-action padding="3px" external-label color="orange" @click="onClick" icon="airplay" label="Airplay" />
                    <q-fab-action padding="3px" external-label color="accent" @click="onClick" icon="room" label="Map" />
                </q-fab>
                </div>
            </div>
          <!-- Code for Playing with padding-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Eleven card for Playing with padding--------------- -->



            <!-- twoel card for Square style-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Square style</div>
          
        </q-card-section>

        <q-card-section>
             <!-- Code for Square style-->
            <div style="padding-top: 48px; padding-bottom: 220px">
                <div>
                <q-fab
                    v-model="fab1"
                    color="primary"
                    glossy
                    icon="keyboard_arrow_right"
                    direction="right"
                >
                    <q-fab-action square external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
                    <q-fab-action square external-label label-position="top" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
                    <q-fab-action square external-label label-position="top" color="orange" @click="onClick" icon="airplay" label="Airplay" />
                    <q-fab-action square external-label label-position="top" color="accent" @click="onClick" icon="room" label="Map" />
                </q-fab>
                </div>

                <div class="q-mt-md row justify-center">
                <q-fab
                    v-model="fab2"
                    square
                    vertical-actions-align="right"
                    color="secondary"
                    glossy
                    icon="keyboard_arrow_down"
                    direction="down"
                >
                    <q-fab-action square color="primary" @click="onClick" icon="mail" label="Email" label-position="left" />
                    <q-fab-action square color="secondary" @click="onClick" icon="alarm" label="Alarm" label-position="left" />
                    <q-fab-action glossy square color="orange" @click="onClick" icon="airplay" label="Airplay" label-position="left" />
                    <q-fab-action square color="accent" @click="onClick" icon="room" label="Map" label-position="left" />
                </q-fab>
                </div>
            </div>
          <!-- Code for Square style-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End twoel card for Square style--------------- -->


               <!-- Thirteen card for With QPageSticky-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">With QPageSticky</div>
          
        </q-card-section>

        <q-card-section>
             <!-- Code for With QPageSticky-->
            <div>
                <q-layout view="lhh LpR lff" container style="height: 300px" class="shadow-2 rounded-borders">
                <q-header reveal class="bg-black">
                    <q-toolbar>
                    <q-btn flat round dense icon="menu" />
                    <q-toolbar-title>Header</q-toolbar-title>
                    </q-toolbar>
                </q-header>

                <q-page-container>
                    <q-page padding>
                    <p v-for="n in 15" :key="n">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
                    </p>

                    <q-page-sticky position="bottom-right" :offset="[18, 18]">
                        <q-fab
                        icon="add"
                        direction="up"
                        color="accent"
                        >
                        <q-fab-action @click="onClick" color="primary" icon="person_add" />
                        <q-fab-action @click="onClick" color="primary" icon="mail" />
                        </q-fab>
                    </q-page-sticky>
                    </q-page>
                </q-page-container>
                </q-layout>
            </div>
          <!-- Code for With QPageSticky-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Thirteen card for With QPageSticky-------------- -->

    
               <!-- Thirteen card for Draggable-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Draggable</div>
          
        </q-card-section>

        <q-card-section>
             <!-- Code for Draggable-->
          <div>
            <q-layout view="lhh LpR lff" container style="height: 500px" class="shadow-2 rounded-borders">
            <q-page-container>
                <q-page padding>
                <p v-for="n in 15" :key="n">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
                </p>

                <q-page-sticky position="bottom-right" :offset="fabPos">
                    <q-fab
                    icon="add"
                    direction="up"
                    color="accent"
                    :disable="draggingFab"
                    v-touch-pan.prevent.mouse="moveFab"
                    >
                    <q-fab-action @click="onClick" color="primary" icon="person_add" :disable="draggingFab" />
                    <q-fab-action @click="onClick" color="primary" icon="mail" :disable="draggingFab" />
                    </q-fab>
                </q-page-sticky>
                </q-page>
            </q-page-container>
            </q-layout>
        </div>
          <!-- Code forDraggable-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Thirteen card for Draggable-------------- -->





  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isshowprop: true,
      expanded: false,
       counter: 0,
        fab1: true,
      fab2: true,
      hideLabels: false,
      fabRight: true,
           fabLeft: true,
      fabCenter: true,
      fab: true,
      fabPos: [ 18, 18 ],
      draggingFab: false,
      editor: 'What you see is <b>what</b> you get.',
       editor2: 'After you define a new button,' +
        ' you have to make sure to put it in the toolbar too!',
          qeditor: '<pre>Check out the two different types of dropdowns' +
        ' in each of the "Align" buttons.</pre> ',
         editor3: 'Try pasting some rich text here,' +
        ' such as from Discord or Webstorm.' +
        '<br/>You can\'t paste images either!!!',

    
      
    };
  },
  methods: {
    closefun() {
      this.isshowprop = false;
    
  },
   onClick () {
      // console.log('Clicked on a fab action')
    },

    moveFab (ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true

      this.fabPos = [
        this.fabPos[0] - ev.delta.x,
        this.fabPos[1] - ev.delta.y
      ]
    }
    },

  beforeDestroy () {
    this.stopCounting()
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}

</style>