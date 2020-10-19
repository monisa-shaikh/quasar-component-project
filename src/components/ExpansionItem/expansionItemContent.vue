<template>
  <q-page>
  
    <!-- first card for Basic -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Basic</div>
         
        </q-card-section>

        <q-card-section>
          <!-- code for Basic-->
            <div  style="max-width: 350px">
            <q-list bordered class="rounded-borders">
            <q-expansion-item
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

            <q-expansion-item icon="assessment" label="Disabled" disable>
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
          <!-- End code for Basic -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Basic-->

  

    <!-- Second card for Controlling expansion state-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Controlling expansion state</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for Controlling expansion state -->
          <div  style="max-width: 350px">
                <q-toggle v-model="expanded" label="Expanded" class="q-mb-md" />

                <q-expansion-item
                v-model="expanded"
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
            </div>
          <!-- End Code for Controlling expansion state-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card for Controlling expansion state -->

    <h5 class="text-blue-5 q-mb-sm">Style</h5>

    <!-- third card for Dense-->

    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Dense</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for Dense -->
             <div style="max-width: 350px">
            <q-list padding bordered class="rounded-borders">
            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                icon="perm_identity"
                label="Account settings"
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
                dense
                dense-toggle
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
                dense
                dense-toggle
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
          <!-- End Code for Dense-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End third for Dense -->


    <!-- fourth card On a dark background-->
    
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">On a dark background</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for On a dark background-->
       <div class="bg-grey-10 text-white">
            <q-list dark padding bordered class="rounded-borders" style="max-width: 328px">
            <q-expansion-item
                icon="perm_identity"
                label="Account settings"
            >
                <q-card class="bg-grey-9">
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                icon="signal_wifi_off"
                label="Wifi settings"
            >
                <q-card class="bg-grey-9">
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                icon="drafts"
                label="Drafts"
                header-class="text-orange"
            >
                <q-card class="bg-grey-9">
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>
            </q-list>
        </div>
          <!-- End Code for On a dark background-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End fourth On a dark background -->



    <!-- Five card for Switch toggle side-->
       <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Switch toggle side</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for Switch toggle side-->
            <div class="q-pa-md" style="max-width: 350px">
            <q-list bordered class="rounded-borders">
            <q-expansion-item
                switch-toggle-side
                expand-separator
                icon="perm_identity"
                label="Account settings"
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
                switch-toggle-side
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
            </q-list>

            <q-list bordered class="rounded-borders q-mt-md">
            <q-expansion-item
                dense-toggle
                switch-toggle-side
                expand-separator
                icon="perm_identity"
                label="Account settings"
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
                dense-toggle
                switch-toggle-side
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
            </q-list>
        </div>
          <!-- End Code for Switch toggle side-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Five card for Switch toggle side-->

    <!-- six card forHeader slot -->
      <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Header slot</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code forHeader slot-->
            <div style="max-width: 350px">
                <q-list bordered class="rounded-borders">
                <q-expansion-item>
                    <template v-slot:header>
                    <q-item-section avatar>
                        <q-avatar icon="bluetooth" color="primary" text-color="white" />
                    </q-item-section>

                    <q-item-section>
                        Bluetooth technology
                    </q-item-section>

                    <q-item-section side>
                        <div class="row items-center">
                        <q-icon name="star" color="red" size="24px" />
                        <q-icon name="star" color="red" size="24px" />
                        <q-icon name="star" color="red" size="24px" />
                        </div>
                    </q-item-section>
                    </template>

                    <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item>
                    <template v-slot:header>
                    <q-item-section avatar>
                        <q-avatar>
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        John Doe
                    </q-item-section>
                    </template>

                    <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item>
                    <template v-slot:header>
                    <q-item-section avatar>
                        <q-icon color="purple" name="signal_wifi_off" />
                    </q-item-section>

                    <q-item-section>
                        Wifi settings
                    </q-item-section>
                    </template>

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
          <!-- End Code forHeader slot-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End six card forHeader slot-->


    <!-- seven card for Handling events-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Handling events</div>
         
        </q-card-section>

        <q-card-section>
             <!-- Code for Handling events-->
        <div  style="max-width: 350px">
            <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px"
            icon="explore"
            label="Counter"
            @show="startCounting"
            @hide="stopCounting"
            header-class="bg-primary text-white"
            expand-icon-class="text-white"
            >
            <q-card>
                <q-card-section>
                Counting: <q-badge color="secondary">{{ counter }}</q-badge>.
                Will only count when opened, using the show/hide events to control count timer.
                </q-card-section>
            </q-card>
            </q-expansion-item>
        </div>
          <!-- Code for Handling events-->
          
          <!-- End Code for Handling events-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seven card for Handling events--------------- -->


        <!-- Eight card for Playing with inset levels-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Playing with inset levels</div>
         
        </q-card-section>

        <q-card-section>
             <!-- Code for Playing with inset levels-->
       <div style="max-width: 350px">
            <q-list bordered class="rounded-borders">
            <q-expansion-item
                expand-separator
                icon="mail"
                label="Inbox"
                caption="5 unread emails"
                default-opened
            >
                <q-expansion-item
                :header-inset-level="1"
                expand-separator
                icon="receipt"
                label="Receipts"
                default-opened
                >

                <q-expansion-item switch-toggle-side dense-toggle label="Today" :header-inset-level="1" :content-inset-level="2">
                    <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item switch-toggle-side dense-toggle label="Yesterday" :header-inset-level="1" :content-inset-level="2">
                    <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                </q-expansion-item>

                <q-expansion-item :header-inset-level="1" :content-inset-level="1" expand-separator icon="schedule" label="Postponed">
                <q-card>
                    <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                    </q-card-section>
                </q-card>
                </q-expansion-item>

            </q-expansion-item>

            <q-expansion-item :content-inset-level="0.5" expand-separator icon="mail" label="Inbox" caption="5 unread emails" default-opened>
                <q-expansion-item expand-separator :content-inset-level="0.5" icon="receipt" label="Receipts">

                <q-expansion-item label="Today" :content-inset-level="0.5">
                    <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item label="Yesterday" :content-inset-level="0.5">
                    <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                </q-expansion-item>

                <q-expansion-item :content-inset-level="0.5" expand-separator icon="schedule" label="Postponed">
                <q-card>
                    <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                    </q-card-section>
                </q-card>
                </q-expansion-item>

            </q-expansion-item>
            </q-list>
        </div>
          <!-- Code for Playing with inset levels-->
          
          <!-- End Code for Playing with inset levels-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Eight card for Playing with inset levels--------------- -->


    
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




    
        <!-- Ten card for Accordion mode-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Accordion mode</div>
         
        </q-card-section>

        <q-card-section>
             <!-- Code for Accordion mode-->
        <div  style="max-width: 350px">
            <q-list bordered>
            <q-expansion-item
                group="somegroup"
                icon="explore"
                label="First"
                default-opened
                header-class="text-primary"
            >
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item group="somegroup" icon="perm_identity" label="Second" header-class="text-teal">
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item group="somegroup" icon="shopping_cart" label="Third" header-class="text-purple">
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item
                group="somegroup"
                icon="bluetooth"
                label="Fourth"
                header-class="bg-teal text-white"
                expand-icon-class="text-white"
            >
                <q-card class="bg-teal-2">
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>
            </q-list>
        </div>
          <!-- Code for Accordion mode-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Ten card for Accordion mode--------------- -->


    
    
        <!-- Eleven card for Popup mode-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Popup mode</div>
         
        </q-card-section>

        <q-card-section>
             <!-- Code for Popup mode-->
        <div style="max-width: 350px">
            <q-list>
            <q-expansion-item popup default-opened icon="mail" label="Inbox" caption="5 unread emails">
                <q-separator />
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-expansion-item popup icon="send" label="Outbox" caption="Empty">
                <q-separator />
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-expansion-item popup icon="drafts" label="Draft" caption="Draft a new email">
                <q-separator />
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
          <!-- Code for Popup mode-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Eleven card for Popup mode--------------- -->





  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isshowprop: true,
      expanded: false,
       counter: 0,
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
    
  } ,startCounting () {
      this.timer = setInterval(() => {
        this.counter++
      }, 1000)
    },

    stopCounting () {
      clearInterval(this.timer)
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