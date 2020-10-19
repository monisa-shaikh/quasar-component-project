<template>
  <q-page>
  
    <!-- first card for Design Overview -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design Overview</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- code for Design Overview-->
                <div >
            <div class="q-gutter-md" style="max-width: 300px">
            <q-input v-model="text" label="Standard" />

            <q-input filled v-model="text" label="Filled" />

            <q-input outlined v-model="text" label="Outlined" />

            <q-input standout v-model="text" label="Standout" />

            <q-input standout="bg-teal text-white" v-model="text" label="Custom standout" />

            <q-input borderless v-model="text" label="Borderless" />

            <q-input rounded filled v-model="text" label="Rounded filled" />

            <q-input rounded outlined v-model="text" label="Rounded outlined" />

            <q-input rounded standout v-model="text" label="Rounded standout" />

            <q-input square filled v-model="text" label="Square filled" />

            <q-input square outlined v-model="text" label="Square outlined" />

            <q-input square standout v-model="text" label="Square standout" />
            </div>
        </div>
          <!-- End code for Design Overview -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Design Overview-->

  

    <!-- Second card for Coloring-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Coloring</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Coloring -->
         <div>
            <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input color="purple-12" v-model="text" label="Label">
                <template v-slot:prepend>
                <q-icon name="event" />
                </template>
            </q-input>

            <q-input color="teal" filled v-model="text" label="Label">
                <template v-slot:prepend>
                <q-icon name="event" />
                </template>
            </q-input>

            <q-input color="grey-3" label-color="orange" outlined v-model="text" label="Label">
                <template v-slot:append>
                <q-icon name="event" color="orange" />
                </template>
            </q-input>

            <q-input color="lime-11" bg-color="green" filled v-model="text" label="Label">
                <template v-slot:prepend>
                <q-icon name="event" />
                </template>
            </q-input>

            <q-input color="teal" outlined v-model="text" label="Label">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>

            <q-input color="orange" standout bottom-slots v-model="text" label="Label" counter clearable>
                <template v-slot:prepend>
                <q-icon name="place" />
                </template>
                <template v-slot:append>
                <q-icon name="favorite" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>
            </div>
        </div>
          <!-- End Code for Coloring-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card for Coloring -->

    <!-- <h5 class="text-blue-5 q-mb-sm">Standard </h5> -->

    <!-- third card for Standard-->

    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Standard</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Standard -->
          <div>
        <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-toggle v-model="dense" label="Dense QInput" />

        <q-input v-model="text" :dense="dense" />

        <q-input v-model="text" label="Label (stacked)" stack-label :dense="dense" />

        <q-input v-model="text" label="Label" :dense="dense" />

        <q-input v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

        <q-input v-model="ph" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

        <q-input v-model="text" :dense="dense">
            <template v-slot:prepend>
            <q-icon name="event" />
            </template>
        </q-input>

        <q-input v-model="text" :dense="dense">
            <template v-slot:append>
            <q-avatar>
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            </template>
        </q-input>

        <q-input bottom-slots v-model="text" label="Label" counter :dense="dense">
            <template v-slot:prepend>
            <q-icon name="place" />
            </template>
            <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
            </template>

            <template v-slot:hint>
            Field hint
            </template>
        </q-input>

        <q-input bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
            <template v-slot:before>
            <q-icon name="flight_takeoff" />
            </template>

            <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
            <q-icon name="search" />
            </template>

            <template v-slot:hint>
            Field hint
            </template>
        </q-input>

        <q-input bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
            <template v-slot:before>
            <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
            </template>

            <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
            <q-icon name="schedule" />
            </template>

            <template v-slot:hint>
            Field hint
            </template>

            <template v-slot:after>
            <q-btn round dense flat icon="send" />
            </template>
        </q-input>

        <q-input bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
            <template v-slot:before>
            <q-icon name="event" />
            </template>

            <template v-slot:hint>
            Field hint
            </template>

            <template v-slot:append>
            <q-btn round dense flat icon="add" />
            </template>
        </q-input>

        <q-input v-model="text" hint="Disable" :dense="dense" disable />

        <q-input v-model="text" hint="Readonly" :dense="dense" readonly />

        <q-input v-model="text" hint="Disable and readonly" :dense="dense" disable readonly />
        </div>
    </div>
          <!-- End Code for Standard-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End third for Standard -->


    <!-- fourth card Filled-->
    
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Filled</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Filled-->
            <div>
            <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-toggle v-model="dense" label="Dense QInput" />

            <q-input filled v-model="text" :dense="dense" />

            <q-input filled v-model="text" label="Label (stacked)" stack-label :dense="dense" />

            <q-input filled v-model="text" label="Label" :dense="dense" />

            <q-input filled v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

            <q-input filled v-model="ph" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

            <q-input filled square v-model="text" hint="With perfect square borders" :dense="dense" />

            <q-input filled v-model="text" :dense="dense">
                <template v-slot:prepend>
                <q-icon name="event" />
                </template>
            </q-input>

            <q-input filled v-model="text" :dense="dense">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>

            <q-input filled bottom-slots v-model="text" label="Label" counter :dense="dense">
                <template v-slot:prepend>
                <q-icon name="place" />
                </template>
                <template v-slot:append>
                <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>

            <q-input filled bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
                <template v-slot:before>
                <q-icon name="flight_takeoff" />
                </template>

                <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="search" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>

            <q-input filled bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
                <template v-slot:before>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                </q-avatar>
                </template>

                <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="schedule" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>

                <template v-slot:after>
                <q-btn round dense flat icon="send" />
                </template>
            </q-input>

            <q-input filled bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
                <template v-slot:before>
                <q-icon name="event" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>

                <template v-slot:append>
                <q-btn round dense flat icon="add" />
                </template>
            </q-input>

            <q-input filled v-model="text" hint="Disable" :dense="dense" disable />

            <q-input filled v-model="text" hint="Readonly" :dense="dense" readonly />

            <q-input filled v-model="text" hint="Disable and readonly" :dense="dense" disable readonly />
            </div>
        </div>
          <!-- End Code for Filled-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End fourth Filled -->



    <!-- Five card for Outlined-->
          <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Outlined</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Outlined-->
            <div>
            <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-toggle v-model="dense" label="Dense QInput" />

            <q-input outlined v-model="text" :dense="dense" />

            <q-input outlined v-model="text" label="Label (stacked)" stack-label :dense="dense" />

            <q-input outlined v-model="text" label="Label" :dense="dense" />

            <q-input outlined v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

            <q-input outlined v-model="ph" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

            <q-input outlined square v-model="text" hint="With perfect square borders" :dense="dense" />

            <q-input outlined v-model="text" :dense="dense">
                <template v-slot:prepend>
                <q-icon name="event" />
                </template>
            </q-input>

            <q-input outlined v-model="text" :dense="dense">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>

            <q-input outlined bottom-slots v-model="text" label="Label" counter :dense="dense">
                <template v-slot:prepend>
                <q-icon name="place" />
                </template>
                <template v-slot:append>
                <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>

            <q-input outlined bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
                <template v-slot:before>
                <q-icon name="flight_takeoff" />
                </template>

                <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="search" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>

            <q-input outlined bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
                <template v-slot:before>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                </q-avatar>
                </template>

                <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="schedule" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>

                <template v-slot:after>
                <q-btn round dense flat icon="send" />
                </template>
            </q-input>

            <q-input outlined bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
                <template v-slot:before>
                <q-icon name="event" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>

                <template v-slot:append>
                <q-btn round dense flat icon="add" />
                </template>
            </q-input>

            <q-input outlined v-model="text" hint="Disable" :dense="dense" disable />

            <q-input outlined v-model="text" hint="Readonly" :dense="dense" readonly />

            <q-input outlined v-model="text" hint="Disable and readonly" :dense="dense" disable readonly />
            </div>
        </div>
          <!-- End Code for Outlined-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Five card for Outlined-->

    <!-- six card for Standout-->
      <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Standout</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Standout-->
                <div >
            <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-toggle v-model="dense" label="Dense QInput" />

            <q-input standout v-model="text" :dense="dense" />

            <q-input standout="bg-teal text-white" v-model="text" label="Custom standout" :dense="dense" />

            <q-input standout v-model="text" label="Label (stacked)" stack-label :dense="dense" />

            <q-input standout v-model="text" label="Label" :dense="dense" />

            <q-input standout v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

            <q-input standout v-model="ph" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

            <q-input standout square v-model="text" hint="With perfect square borders" :dense="dense" />

            <q-input standout v-model="text" :dense="dense">
                <template v-slot:prepend>
                <q-icon name="event" />
                </template>
            </q-input>

            <q-input standout v-model="text" :dense="dense">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>

            <q-input standout bottom-slots v-model="text" label="Label" counter :dense="dense">
                <template v-slot:prepend>
                <q-icon name="place" />
                </template>
                <template v-slot:append>
                <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>

            <q-input standout bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
                <template v-slot:before>
                <q-icon name="flight_takeoff" />
                </template>

                <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="search" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>

            <q-input standout bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
                <template v-slot:before>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                </q-avatar>
                </template>

                <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="schedule" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>

                <template v-slot:after>
                <q-btn round dense flat icon="send" />
                </template>
            </q-input>

            <q-input standout bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
                <template v-slot:before>
                <q-icon name="event" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>

                <template v-slot:append>
                <q-btn round dense flat icon="add" />
                </template>
            </q-input>

            <q-input standout v-model="text" hint="Disable" :dense="dense" disable />

            <q-input standout v-model="text" hint="Readonly" :dense="dense" readonly />

            <q-input standout v-model="text" hint="Disable and readonly" :dense="dense" disable readonly />
            </div>
        </div>
          <!-- End Code for Standout-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End six card for Standout-->


    <!-- seven card for Standout in QToolbar-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Standout in QToolbar</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Standout in QToolbar-->
            <div>
            <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
            <q-toolbar class="bg-primary text-white rounded-borders">
                <q-btn round dense flat icon="menu" class="q-mr-xs" />
                <q-avatar class="gt-xs">
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>

                <q-space />

                <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
                <template v-slot:append>
                    <q-icon v-if="text === ''" name="search" />
                    <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
                </template>
                </q-input>
            </q-toolbar>
            </div>
        </div>
          <!-- Code for Standout in QToolbar-->
          
          <!-- End Code for Standout in QToolbar-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seven card for Standout in QToolbar--------------- -->


        <!-- Eight card for Borderless-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Borderless</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Borderless-->
              <div>
            <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
            <q-toolbar class="bg-primary text-white rounded-borders">
                <q-btn round dense flat icon="menu" class="q-mr-xs" />
                <q-avatar class="gt-xs">
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>

                <q-space />

                <q-input dark borderless v-model="text" input-class="text-right" class="q-ml-md">
                <template v-slot:append>
                    <q-icon v-if="text === ''" name="search" />
                    <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
                </template>
                </q-input>
            </q-toolbar>
            </div>
        </div>
          <!-- Code for Borderless-->
          
          <!-- End Code for Borderless-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Eight card for Borderless--------------- -->


    
        <!-- Nine card for Rounded-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Rounded</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Rounded-->
                <div>
                <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-input rounded filled v-model="text">
                    <template v-slot:prepend>
                    <q-icon name="event" />
                    </template>
                </q-input>

                <q-input rounded outlined v-model="text">
                    <template v-slot:append>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                    </q-avatar>
                    </template>
                </q-input>

                <q-input rounded standout bottom-slots v-model="text" label="Label" counter>
                    <template v-slot:prepend>
                    <q-icon name="place" />
                    </template>
                    <template v-slot:append>
                    <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                    </template>

                    <template v-slot:hint>
                    Field hint
                    </template>
                </q-input>
                </div>
            </div>
          <!-- Code for Roundeds-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Nine card for Rounded--------------- -->




    
        <!-- Ten card for Square borders-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Square borders</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Square borders-->
                <div>
            <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input square filled v-model="text">
                <template v-slot:prepend>
                <q-icon name="event" />
                </template>
            </q-input>

            <q-input square outlined v-model="text">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>

            <q-input square standout bottom-slots v-model="text" label="Label" counter>
                <template v-slot:prepend>
                <q-icon name="place" />
                </template>
                <template v-slot:append>
                <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>
            </div>
        </div>
          <!-- Code for Square borders-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Ten card for Square borders--------------- -->


    
    
        <!-- Eleven card for Dark background-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Dark background</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Dark background-->
                <div class=" bg-grey-10 text-white">
            <div class="q-gutter-y-md column" style="max-width: 300px">
            <div>
                <q-toggle v-model="readonly" label="Readonly" dark />
                <q-toggle v-model="disable" label="Disable" dark />
            </div>

            <q-input dark v-model="text" :readonly="readonly" :disable="disable">
                <template v-slot:prepend>
                <q-icon name="event" />
                </template>
            </q-input>

            <q-input dark filled v-model="text" :readonly="readonly" :disable="disable">
                <template v-slot:prepend>
                <q-icon name="event" />
                </template>
            </q-input>

            <q-input dark outlined v-model="text" :readonly="readonly" :disable="disable">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>

            <q-input dark standout bottom-slots v-model="text" label="Label" counter :readonly="readonly" :disable="disable">
                <template v-slot:prepend>
                <q-icon name="place" />
                </template>
                <template v-slot:append>
                <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>

            <q-input dark borderless v-model="text" :readonly="readonly" :disable="disable">
                <template v-slot:append>
                <q-icon name="search" />
                </template>
            </q-input>
            </div>
        </div>
          <!-- Code for Dark background-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Eleven card for Dark background--------------- -->



            <!-- twoel card for Clearable-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Clearable</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Clearable-->
              <div >
                <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-input clearable filled color="purple-12" v-model="text" label="Label" />

                <!-- equivalent -->
                <q-input color="orange" filled v-model="text" label="Label">
                    <template v-if="text" v-slot:append>
                    <q-icon name="cancel" @click.stop="text = null" class="cursor-pointer" />
                    </template>
                </q-input>

                <!-- clear-icon -->
                <q-input
                    clearable
                    clear-icon="close"
                    filled
                    color="purple-12"
                    v-model="text"
                    label="Label"
                />
                </div>
            </div>
          <!-- Code for Clearable-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End twoel card for Clearable--------------- -->


               <!-- Thirteen card for Input types-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Input types</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Input types-->
           <div>
            <div class="q-gutter-md row items-start">
            <q-input v-model="password" filled type="password" hint="Password" />

            <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
                <template v-slot:append>
                <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                />
                </template>
            </q-input>

            <q-input v-model="email" filled type="email" hint="Email" />

            <q-input v-model="search" filled type="search" hint="Search">
                <template v-slot:append>
                <q-icon name="search" />
                </template>
            </q-input>

            <q-input v-model="tel" filled type="tel" hint="Telephone number" />

            <q-input v-model="url" filled type="url" hint="URL" />

            <q-input v-model="time" filled type="time" hint="Native time" />

            <q-input v-model="date" filled type="date" hint="Native date" />
            </div>
        </div>
          <!-- Code for Input types-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Thirteen card for Input types-------------- -->

    
               <!-- Thirteen card for Input of number type-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Input of number type</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Input of number type-->
         <div >
            <q-input
            v-model.number="model"
            type="number"
            filled
            style="max-width: 200px"
            />
        </div>
          <!-- Code forInput of number type-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Thirteen card for Input of number type-------------- -->


<!-------------- Fourteen card for Input of file type--------------->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Input of file type</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Input of file type-->
            <div>
                <div class="q-gutter-md row items-start">
                <!--
                    Due to browser security policy,
                    we can only read the value, but not
                    write to it, so we only have an @input listener
                -->

                <q-input
                    @input="val => { file = val[0] }"
                    filled
                    type="file"
                    hint="Native file"
                />

                <q-input
                    @input="val => { files = val }"
                    multiple
                    filled
                    type="file"
                    hint="Native file (multiple)"
                />
                </div>
            </div>
          <!-- Code forInput of file type-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Fourteen card for Input of file type-------------- -->

    

<!-------------- Fourteen card for textarea--------------->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">textarea</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for textarea-->
            <div style="max-width: 300px">
            <q-input
              v-model="text"
              filled
              type="textarea"
            />
          </div>
          <!-- Code fortextarea-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Fourteen card for textareae-------------- -->

    
<!-------------- Fifteen card for Autogrow--------------->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Autogrow</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Autogrow-->
             <div style="max-width: 300px">
            <q-input
              v-model="text"
              filled
              autogrow
            />
          </div>
          <!-- Code for Autogrow-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Fifteen card for Autogrow-------------- -->

    <!-------------- Sixteen card for Prefix and suffix--------------->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Prefix and suffix</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Prefix and suffix-->
            <div >
            <div class="q-gutter-y-md column" style="max-width: 300px">
              <q-input filled v-model="email" type="email" suffix="@gmail.com">
                <template v-slot:before>
                  <q-icon name="mail" />
                </template>
              </q-input>

              <q-input outlined v-model="number" type="number" prefix="$">
                <template v-slot:append>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                  </q-avatar>
                </template>
              </q-input>

              <q-input standout v-model="email" type="email" prefix="Email:" suffix="@gmail.com">
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </div>
          </div>
          <!-- Code for Prefix and suffix-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Sixteen card for Prefix and suffix-------------- -->

    
    <!-------------- seventeen card for Custom label--------------->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Custom label</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            Standard
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
             <!-- Code for Custom label-->
              <div>
                  <div class="q-gutter-y-md column" style="max-width: 300px">
                    <q-input filled v-model="email" suffix="@gmail.com" input-class="text-right" label-slot clearable>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          <q-icon class="q-mr-xs" color="deep-orange" size="24px" name="mail" />
                          Email (hover for more info)

                          <q-tooltip content-class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">Email address</q-tooltip>
                        </div>
                      </template>
                    </q-input>

                    <q-input outlined v-model="number" prefix="$" label-slot clearable>
                      <template v-slot:prepend>
                        <q-avatar>
                          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                        </q-avatar>
                      </template>

                      <template v-slot:label>
                        <strong class="text-deep-orange">You</strong>
                        can customize the <em class="q-px-sm bg-deep-orange text-white rounded-borders">label</em>
                      </template>
                    </q-input>
                  </div>
                </div>
          <!-- Code for Custom label-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seventeen card forCustom label-------------- -->


        
      <!-------------- Eighteen card for Shadow text--------------->
      <div class="row items-start q-mt-md">
        <q-card class="my-card text-gray" v-if="isshowprop">
          <q-card-section class="row">
            <div class="text-h6">Shadow text</div>
            <q-space />
            <q-btn
              v-close-popup
              flat
              Standard
              round
              icon="close"
              @click="closefun"
            />
          </q-card-section>

          <q-card-section>
              <!-- Code for Shadow text-->
        <div>
            <div class="q-gutter-y-md column" style="max-width: 300px">
              <q-input
                v-model="inputModel"
                filled
                clearable
                color="purple-12"
                label="Input with shadow text"
                hint="Press TAB to autocomplete suggested value or ESC to cancel suggestion"
                :shadow-text="inputShadowText"
                @keydown="processInputFill"
                @focus="processInputFill"
              />

              <q-input
                v-model="textareaModel"
                filled
                clearable
                autogrow
                color="green-8"
                label="Autogrow textarea with shadow text"
                hint="Press TAB to autocomplete suggested value or ESC to cancel suggestion"
                :shadow-text="textareaShadowText"
                @keydown="processTextareaFill"
                @focus="processTextareaFill"
              />

              <q-input
                v-model="textareaModel"
                filled
                clearable
                type="textarea"
                color="red-12"
                label="Textarea with shadow text"
                hint="Press TAB to autocomplete suggested value or ESC to cancel suggestion"
                :shadow-text="textareaShadowText"
                @keydown="processTextareaFill"
                @focus="processTextareaFill"
              />
            </div>
          </div>
          <!-- Code for Shadow text-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Eighteen card for Shadow text-------------- -->


         
      <!-------------- Nineteen card for Debounce model--------------->
      <div class="row items-start q-mt-md">
        <q-card class="my-card text-gray" v-if="isshowprop">
          <q-card-section class="row">
            <div class="text-h6">Debounce model</div>
            <q-space />
            <q-btn
              v-close-popup
              flat
              Standard
              round
              icon="close"
              @click="closefun"
            />
          </q-card-section>

          <q-card-section>
              <!-- Code for Debounce model-->
            <div style="max-width: 350px">
            <div class="q-gutter-md">
              <div>
                <q-badge color="teal">Model: "{{ search }}"</q-badge>
              </div>

              <q-input
                v-model="search"
                debounce="500"
                filled
                placeholder="Search"
                hint="Debouncing 500ms"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>

              <q-input
                v-model="search"
                debounce="1000"
                filled
                placeholder="Search"
                hint="Debouncing 1000ms"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>
          <!-- Code for Debounce model-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Nineteen card for Debounce model-------------- -->


      <!-------------- twoteen card for Loading state--------------->
      <div class="row items-start q-mt-md">
        <q-card class="my-card text-gray" v-if="isshowprop">
          <q-card-section class="row">
            <div class="text-h6">Loading state</div>
            <q-space />
            <q-btn
              v-close-popup
              flat
              Standard
              round
              icon="close"
              @click="closefun"
            />
          </q-card-section>

          <q-card-section>
              <!-- Code for Loading state-->
              <div >
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input
              :loading="loadingState"
              filled
              v-model="text"
              label="Label"
            />
            <q-toggle v-model="loadingState" label="Loading state" />
          </div>
        </div>
          <!-- Code for Loading state-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End towteen card for Loading state-------------- -->

    <h5 class="q-pa-md" style="padding-left:0px!important;">Mask</h5>

      <!-------------- twenty-one card for Basice--------------->
      <div class="row items-start q-mt-md">
        <q-card class="my-card text-gray" v-if="isshowprop">
          <q-card-section class="row">
            <div class="text-h6">Basic</div>
            <q-space />
            <q-btn
              v-close-popup
              flat
              Standard
              round
              icon="close"
              @click="closefun"
            />
          </q-card-section>

          <q-card-section>
              <!-- Code for Basic-->
               <div style="max-width: 300px">
              <div class="q-gutter-md">
                <q-input
                  filled
                  v-model="id"
                  label="Special ID"
                  mask="###/##"
                  hint="Mask: ###/##"
                />

                <q-input
                  filled
                  v-model="phone"
                  label="Phone"
                  mask="(###) ### - ####"
                  hint="Mask: (###) ### - ####"
                />

                <q-input
                  filled
                  v-model="serialNumber"
                  label="Serial number"
                  mask="AAAA - #### - #### - SSS"
                  hint="Mask: AAAA - #### - #### - SSS"
                />
              </div>
            </div>
          <!-- Code for Basic-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End twenty-one card for Basic-------------- -->


         <!-------------- twenty-two card for Filling the mask--------------->
      <div class="row items-start q-mt-md">
        <q-card class="my-card text-gray" v-if="isshowprop">
          <q-card-section class="row">
            <div class="text-h6">Filling the mask</div>
            <q-space />
            <q-btn
              v-close-popup
              flat
              Standard
              round
              icon="close"
              @click="closefun"
            />
          </q-card-section>

          <q-card-section>
              <!-- Code for Filling the mask-->
            <div style="max-width: 300px">
                <div class="q-gutter-md">
                  <q-input
                    filled
                    v-model="id"
                    label="Special ID"
                    mask="###/##"
                    fill-mask
                    hint="Mask: ###/##"
                  />

                  <q-input
                    filled
                    v-model="phone"
                    label="Phone"
                    mask="(###) ### - ####"
                    fill-mask
                    hint="Mask: (###) ### - ####"
                  />

                  <q-input
                    filled
                    v-model="card"
                    label="Card"
                    mask="#### #### #### ####"
                    fill-mask="#"
                    hint="Mask: #### #### #### ####, FillMask: #"
                  />
                </div>
              </div>
          <!-- Code for Filling the mask-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End twenty-two card for Filling the mask-------------- -->


         <!-------------- twenty-three card for Filling the mask--------------->
      <div class="row items-start q-mt-md">
        <q-card class="my-card text-gray" v-if="isshowprop">
          <q-card-section class="row">
            <div class="text-h6">Unmasked model</div>
            <q-space />
            <q-btn
              v-close-popup
              flat
              Standard
              round
              icon="close"
              @click="closefun"
            />
          </q-card-section>

          <q-card-section>
              <!-- Code for Filling the mask-->
             <div  style="max-width: 300px">
            <div class="q-gutter-md">
              <q-badge color="secondary">Id model: "{{ id }}"</q-badge>
              <q-input
                filled
                v-model="id"
                label="Special Id"
                mask="###/##"
                unmasked-value
                hint="Mask: ###/##"
              />

              <q-badge color="secondary">Phone model: "{{ phone }}"</q-badge>
              <q-input
                filled
                v-model="phone"
                label="Phone"
                mask="(###) ### - ####"
                unmasked-value
                hint="Mask: (###) ### - ####"
              />

              <q-badge color="secondary">Card model: "{{ card }}"</q-badge>
              <q-input
                filled
                v-model="card"
                label="Card"
                mask="#### - #### - #### - ####"
                fill-mask="#"
                unmasked-value
                hint="Mask: #### - #### - #### - ####, FillMask: #"
              />
            </div>
          </div>
          <!-- Code for Filling the mask-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End twenty-three card for Filling the mask-------------- -->



         <!-------------- twenty-four card for Filling the mask in reverse--------------->
      <div class="row items-start q-mt-md">
        <q-card class="my-card text-gray" v-if="isshowprop">
          <q-card-section class="row">
            <div class="text-h6">Filling the mask in reverse</div>
            <q-space />
            <q-btn
              v-close-popup
              flat
              Standard
              round
              icon="close"
              @click="closefun"
            />
          </q-card-section>

          <q-card-section>
              <!-- Code for Filling the mask in reverse-->
              <div style="max-width: 300px">
              <div class="q-gutter-md">
                <q-input
                  filled
                  v-model="price"
                  label="Price with 2 decimals"
                  mask="#.##"
                  fill-mask="0"
                  reverse-fill-mask
                  hint="Mask: #.##"
                  input-class="text-right"
                />
              </div>
            </div>
          <!-- Code for Filling the mask in reverse-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End twenty-four card for Filling the mask in reverse-------------- -->

    <h5 class="q-pa-md" style="padding-left:0px!important;">Validation</h5>
         <!-------------- twenty-five card for Basic--------------->
      <div class="row items-start q-mt-md">
        <q-card class="my-card text-gray" v-if="isshowprop">
          <q-card-section class="row">
            <div class="text-h6">Basic</div>
            <q-space />
            <q-btn
              v-close-popup
              flat
              Standard
              round
              icon="close"
              @click="closefun"
            />
          </q-card-section>

          <q-card-section>
              <!-- Code for Basic-->
          <div  style="max-width: 300px">
          <q-input
            ref="input"
            filled
            v-model="model"
            label="Required Field"
            :rules="[val => !!val || 'Field is required']"
          />

          <q-btn class="q-mt-sm" label="Reset Validation" @click="reset" color="primary"/>
        </div>
          <!-- Code for Basic-->
        
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End twenty-five card for Basic-------------- -->







  </q-page>
</template>

<script>
import { event } from 'quasar'

const { stopAndPrevent } = event
export default {
  data() {
    return {
      isshowprop: true,
      text: '',
       ph: '',
       readonly: false,
      disable: false,
       password: '',
      isPwd: true,
       model: 10,
       number: null,

      email: '',
        inputModel: '',
      textareaModel: '',

      inputFillCancelled: false,
      textareaFillCancelled: false,

      search: '',
      loadingState: false,
       id: null,
      phone: null,
      serialNumber: null,
      card: null, 
       price: null,
        password: '',
      isPwd: true,

      email: '',
      search: '',
      tel: '',
      url: '',
      time: '',
      date: '',
      dense: false
    
      
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
    }, processInputFill (e) {
      if (e === void 0) {
        return
      }

      if (e.keyCode === 27) {
        if (this.inputFillCancelled !== true) {
          this.inputFillCancelled = true
        }
      }
      else if (e.keyCode === 9) {
        if (this.inputFillCancelled !== true && this.inputShadowText.length > 0) {
          stopAndPrevent(e)
          this.inputModel = (typeof this.inputModel === 'string' ? this.inputModel : '') + this.inputShadowText
        }
      }
      else if (this.inputFillCancelled === true) {
        this.inputFillCancelled = false
      }
    },

    processTextareaFill (e) {
      if (e === void 0) {
        return
      }

      if (e.keyCode === 27) {
        if (this.textareaFillCancelled !== true) {
          this.textareaFillCancelled = true
        }
      }
      else if (e.keyCode === 9) {
        if (this.textareaFillCancelled !== true && this.textareaShadowText.length > 0) {
          stopAndPrevent(e)
          this.textareaModel = (typeof this.textareaModel === 'string' ? this.textareaModel : '') + this.textareaShadowText
        }
      }
      else if (this.textareaFillCancelled === true) {
        this.textareaFillCancelled = false
      }
    },
      reset () {
      this.$refs.input.resetValidation()
    }
    },

  beforeDestroy () {
    this.stopCounting()
  },

  computed: {
    inputShadowText () {
      if (this.inputFillCancelled === true) {
        return ''
      }

      const t = 'Text filled when you press TAB'
      const empty = typeof this.inputModel !== 'string' || this.inputModel.length === 0

      if (empty === true) {
        return t
      }
      else if (t.indexOf(this.inputModel) !== 0) {
        return ''
      }

      return t
        .split(this.inputModel)
        .slice(1)
        .join(this.inputModel)
    },

    textareaShadowText () {
      if (this.textareaFillCancelled === true) {
        return ''
      }

      const
        t = 'This text\nwill be filled\non multiple lines\nwhen you press TAB',
        empty = typeof this.textareaModel !== 'string' || this.textareaModel.length === 0

      if (empty === true) {
        return t.split('\n')[0]
      }
      else if (t.indexOf(this.textareaModel) !== 0) {
        return ''
      }

      return t
        .split(this.textareaModel)
        .slice(1)
        .join(this.textareaModel)
        .split('\n')[0]
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}

</style>