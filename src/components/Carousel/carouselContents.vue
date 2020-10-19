<template>
  <q-page>
    <h5 class="text-blue-5 q-mb-sm">Basic</h5>
    <p class="q-ma-md" style="margin-left:0px!important">Below is an almost stripped down basic Carousel (it is just animated and only has custom transitions specified) with no navigation embedded. 
        For this reason, we are controlling the current slide through the model.</p>
    <!-- first card for Basic cards -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Basic cards</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- code for Basic cards-->

            <div class="q-pa-md">
            <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            control-color="primary"
            class="rounded-borders"
            >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" color="primary" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" color="primary" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" color="primary" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" color="primary" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            </q-carousel>

            <div class="row justify-center">
            <q-btn-toggle
                glossy
                v-model="slide"
                :options="[
                { label: 1, value: 'style' },
                { label: 2, value: 'tv' },
                { label: 3, value: 'layers' },
                { label: 4, value: 'map' }
                ]"
            />
            </div>
        </div>
          <!-- End code for Basic cards -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Basic cards-->

    <h5 class="q-pt-md text-blue-5 q-mb-sm">Transitions</h5>
    <p class="q-pa-md" style="padding-left:0px!important;padding-bottom:0px!important;">In the example below:<br>
    <div class="q-pl-md">

        <ul class="q-pa-sm" style="padding-left:0px!important;">
            <li>There are just a few transitions demoed. For a complete list of transitions, head to the Transitions page.</li>
            <li>You can also swipe with your finger (or swiping with the mouse – clicking and quickly dragging to left/right then releasing).</li>
        </ul>
    </div>

    </p>

    <!-- Second card forTransitions, bottom navigation, arrows and auto padding -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Transitions, bottom navigation, arrows and auto padding</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code forTransitions, bottom navigation, arrows and auto padding -->
          <div class="q-pa-md">
            <div class="q-gutter-md">
            <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="white"
                navigation
                padding
                arrows
                height="300px"
                class="bg-primary text-white shadow-1 rounded-borders"
            >
                <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
            </q-carousel>

            <q-carousel
                v-model="slide"
                transition-prev="jump-right"
                transition-next="jump-left"
                swipeable
                animated
                control-color="white"
                prev-icon="arrow_left"
                next-icon="arrow_right"
                navigation-icon="radio_button_unchecked"
                navigation
                padding
                arrows
                height="300px"
                class="bg-purple text-white shadow-1 rounded-borders"
            >
                <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
            </q-carousel>
            </div>
        </div>
          <!-- End Code forTransitions, bottom navigation, arrows and auto padding-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card forTransitions, bottom navigation, arrows and auto padding -->

    <!-- <h5 class="text-blue-5 q-mb-sm">With icon</h5> -->

    <!-- third card for Vertical mode-->

    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Vertical mode</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Vertical mode -->
        <div class="q-pa-md">
            <q-carousel
            v-model="slide"
            vertical
            transition-prev="slide-down"
            transition-next="slide-up"
            swipeable
            animated
            control-color="white"
            navigation-icon="radio_button_unchecked"
            navigation
            padding
            arrows
            height="300px"
            class="bg-purple text-white shadow-1 rounded-borders"
            >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            </q-carousel>
        </div>
          <!-- End Code for Vertical mode-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End third for Vertical mode -->

    <h5 class="text-blue-5 q-mb-sm">Control type</h5>
    <p class="q-pa-md" style="padding-left:0px!important;">The notion of “control” here refers to the arrows and navigation buttons. Since they are buttons, you can also pick their type to better match your design. 
        You also benefit from the control-color and control-text-color props.</p>
    <!-- fourth card Control type-->
    
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Control Type</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Control type-->
       <div class="q-pa-md">
            <q-option-group
            v-model="controlType"
            :options="controlTypeOptions"
            color="purple"
            inline
            class="q-mb-md"
            />

            <q-carousel
            v-model="slide"
            swipeable
            animated
            :control-type="controlType"
            control-color="purple"
            navigation
            padding
            arrows
            height="300px"
            class="text-purple rounded-borders"
            >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center text-black">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center text-black">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center text-black">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center text-black">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            </q-carousel>
        </div>
          <!-- End Code for Control type-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End fourth Control type -->



    <!-- Five card for Navigation position -->
       <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Navigation position</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Navigation position-->
            <div class="q-pa-md">
            <q-option-group
            v-model="navPos"
            :options="navigationPositions"
            color="purple"
            inline
            class="q-mb-md"
            />

            <q-carousel
            v-model="slide"
            swipeable
            animated
            :navigation-position="navPos"
            navigation
            padding
            height="300px"
            class="bg-purple text-white rounded-borders"
            >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            </q-carousel>
        </div>
          <!-- End Code for Navigation position-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Five card for Navigation position -->

    <!-- six card for Custom navigation -->
      <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Custom navigation</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Custom navigation-->
        <div class="q-pa-md">
            <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            arrows
            height="300px"
            class="bg-primary text-white shadow-1 rounded-borders"
            >
            <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
                <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
            </template>

            <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            </q-carousel>
        </div>
          <!-- End Code forCustom navigation-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End six card for Custom navigation-->

    <h5 class="q-pa-md">Auto padding</h5>
  
    <p class="q-pa-md">
      Below is an example with which you can play with different QCarousel settings so you can see the padding (or lack of) in action:
    </p>
   
    <!-- seven card for Auto padding -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Auto padding</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- Code for Auto padding-->
        <div class="q-pa-md">
            <q-toggle
            v-model="padding"
            label="Padding"
            color="purple"
            class="text-weight-bold"
            />

            <q-toggle
            v-model="vertical"
            label="Vertical"
            color="purple"
            />

            <q-toggle
            v-model="arrows"
            label="Arrows"
            color="purple"
            />

            <q-toggle
            v-model="navigation"
            label="Navigation"
            color="purple"
            />

            <div class="row items-center q-mb-md">
            <div>Navigation position:</div>
            <q-option-group
                v-model="navPos"
                :options="navigationPositions"
                color="purple"
                inline
            />
            </div>

            <q-carousel
            v-model="slide"
            swipeable
            animated
            :padding="padding"
            :vertical="vertical"
            :arrows="arrows"
            :navigation="navigation"
            :navigation-position="navPos"
            height="300px"
            class="bg-purple text-white rounded-borders"
            >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            </q-carousel>
        </div>
          <!-- End Code for Auto padding-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seven card for Auto padding--------------- -->

 
    <!-- ---------eight card for Image slides------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Image slides</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Image slides------------------>
           <div class="q-pa-md">
                <q-carousel
                animated
                v-model="slide"
                arrows
                navigation
                infinite
                >
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                </q-carousel>
            </div>
          <!-- ---------------End Code for Image slides-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End eight card forImage slides-------------------- -->

        <!-- ---------nine card for Multi-image slides------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Multi-image slides</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Multi-image slides------------------>
         <div class="q-pa-md">
            <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            navigation
            padding
            arrows
            height="300px"
            class="bg-grey-1 shadow-2 rounded-borders"
            >
            <q-carousel-slide :name="1" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
                </div>
            </q-carousel-slide>
            </q-carousel>
        </div>
          <!-- ---------------End Code for Multi-image slides-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End nine card for Multi-image slides-------------------- -->

   <!-- ---------ten card for Captionss------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Captions</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Captions------------------>
       <div class="q-pa-md">
          <q-carousel
            arrows
            animated
            v-model="slide"
            height="400px"
          >
            <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">First stop</div>
                <div class="text-subtitle1">Mountains</div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Second stop</div>
                <div class="text-subtitle1">Famous City</div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Third stop</div>
                <div class="text-subtitle1">Famous Bridge</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
          <!-- ---------------End Code for Captions-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End ten card for Captions-------------------- -->

   <!-- ---------eleven card for Video slides------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Video slides</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Video slides------------------>
            <div class="q-pa-md q-gutter-sm">
            <q-carousel
            animated
            v-model="slide"
            infinite
            >
            <q-carousel-slide name="soft-jazz">
                <q-video
                class="absolute-full"
                src="https://www.youtube.com/embed/k3_tw44QsZQ"
                />
            </q-carousel-slide>

            <q-carousel-slide name="Rihanna">
                <q-video
                class="absolute-full"
                src="https://www.youtube.com/embed/kOkQ4T5WO9E"
                />
            </q-carousel-slide>

            <q-carousel-slide name="ibiza">
                <q-video
                class="absolute-full"
                src="https://www.youtube.com/embed/p87miJIYEEk"
                />
            </q-carousel-slide>
            </q-carousel>

            <div class="row justify-center">
            <q-btn-toggle
                glossy
                v-model="slide"
                :options="[
                { label: 'Soft Jazz', value: 'soft-jazz' },
                { label: 'Rihanna', value: 'Rihanna' },
                { label: 'Ibiza Mix', value: 'ibiza' }
                ]"
            />
            </div>
        </div>
          <!-- ---------------End Code for Video slides-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End eleven card for Video slides-------------------- -->

 
    <p class="q-pa-md">
     In the example below there are thumbnails being generated automatically. Thumbnails only applies to image slides.

    </p>
   
   <!-- ---------twoel card for Thumbnails------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Thumbnails</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Thumbnails------------------>
            <div class="q-pa-md">
                <q-carousel
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
                >
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                </q-carousel>
            </div>
          <!-- ---------------End Code for Thumbnails-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End twoel card for Thumbnails-------------------- -->

 
    <p class="q-pa-md">
    You can pause autoplay when the pointer is over the carousel or over a region of interest.</p>
      <!-- ---------thirteen card for Autoplay------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Autoplay</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Autoplay------------------>
            <div class="q-pa-md">
            <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
            </q-carousel>
        </div>
          <!-- ---------------End Code for Autoplay-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End thirteen card for Autoplay-------------------- -->

      <!-- ---------fourteen card for Controls------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Controls</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Controls------------------>
           <div class="q-pa-md">
                <q-carousel
                swipeable
                animated
                v-model="slide"
                :autoplay="autoplay1"
                ref="carousel"
                infinite
                >
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

                <template v-slot:control>
                    <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-white rounded-borders"
                    style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
                    >
                    <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play" />
                    </q-carousel-control>

                    <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                    class="q-gutter-xs"
                    >
                    <q-btn
                        push round dense color="orange" text-color="black" icon="arrow_left"
                        @click="$refs.carousel.previous()"
                    />
                    <q-btn
                        push round dense color="orange" text-color="black" icon="arrow_right"
                        @click="$refs.carousel.next()"
                    />
                    </q-carousel-control>
                </template>
                </q-carousel>
            </div>
          <!-- ---------------End Code for Controls-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End fourteen card for Controls-------------------- -->

    

        <p class="q-pa-md">
    Please note how QScrollArea is used in the two examples below. Also note the q-carousel--padding CSS helper class in the second example.</p>
      <!-- ---------fifteen card for With QScrollArea and padding------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">With QScrollArea and padding</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for With QScrollArea and padding------------------>
            <div class="q-pa-md">
            <q-carousel
            v-model="slide"
            swipeable
            animated
            padding
            arrows
            navigation
            navigation-icon="radio_button_unchecked"
            height="300px"
            class="bg-purple text-white rounded-borders"
            >
            <q-carousel-slide name="style" class="text-center">
                <q-scroll-area class="fit">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                </q-scroll-area>
            </q-carousel-slide>

            <q-carousel-slide name="tv" class="text-center">
                <q-scroll-area class="fit">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                </q-scroll-area>
            </q-carousel-slide>

            <q-carousel-slide name="layers" class="text-center">
                <q-scroll-area class="fit">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                </q-scroll-area>
            </q-carousel-slide>

            <q-carousel-slide name="map" class="text-center">
                <q-scroll-area class="fit">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                <div class="q-mt-md">
                    {{ lorem }}
                </div>
                </q-scroll-area>
            </q-carousel-slide>
            </q-carousel>
        </div>
          <!-- ---------------End Code for With QScrollArea and padding-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End fifteen card for With QScrollArea and padding-------------------- -->


       <!-- ---------sixteen card for Fullscreen------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Fullscreen</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Fullscreen------------------>
           <div class="q-pa-md">
            <q-carousel
            swipeable
            animated
            arrows
            v-model="slide"
            :fullscreen.sync="fullscreen"
            infinite
            >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

            <template v-slot:control>
                <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
                >
                <q-btn
                    push round dense color="white" text-color="primary"
                    :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                    @click="fullscreen = !fullscreen"
                />
                </q-carousel-control>
            </template>
            </q-carousel>
        </div>
          <!-- ---------------End Code for Fullscreen-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End sixteen card for Fullscreen-------------------- -->


       <!-- ---------seventeen card for Fullscreen----------------- -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">With QScrollArea on whole slide</div>
          <q-space />
          <q-btn
            v-close-popup
            flat
            dense
            round
            icon="close"
            @click="closefun"
          />
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for With QScrollArea on whole slide------------------>
            <div class="q-pa-md">
            <q-carousel
            v-model="slide"
            swipeable
            animated
            arrows
            navigation
            navigation-icon="radio_button_unchecked"
            control-type="regular"
            control-color="orange"
            control-text-color="grey-8"
            height="300px"
            class="bg-purple text-white rounded-borders"
            >
            <q-carousel-slide name="style" class="q-pa-none">
                <q-scroll-area class="fit">
                <div class="column no-wrap flex-center q-carousel--padding">
                    <q-icon name="style" size="56px" />
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                </div>
                </q-scroll-area>
            </q-carousel-slide>

            <q-carousel-slide name="tv" class="q-pa-none">
                <q-scroll-area class="fit">
                <div class="column no-wrap flex-center q-carousel--padding">
                    <q-icon name="live_tv" size="56px" />
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                </div>
                </q-scroll-area>
            </q-carousel-slide>

            <q-carousel-slide name="layers" class="q-pa-none">
                <q-scroll-area class="fit">
                <div class="column no-wrap flex-center q-carousel--padding">
                    <q-icon name="layers" size="56px" />
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                </div>
                </q-scroll-area>
            </q-carousel-slide>

            <q-carousel-slide name="map" class="q-pa-none">
                <q-scroll-area class="fit">
                <div class="column no-wrap flex-center q-carousel--padding">
                    <q-icon name="terrain" size="56px" />
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                    <div class="q-mt-md">
                    {{ lorem }}
                    </div>
                </div>
                </q-scroll-area>
            </q-carousel-slide>
            </q-carousel>
        </div>
          <!-- ---------------End Code for With QScrollArea on whole slide-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End seventeen card for With QScrollArea on whole slide-------------------- -->
    
    
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isshowprop: true,
      stars: 4,
      tab: "one",
      slide: "style",
      slide: 'first',
      slide: 1,
      expanded: false,
      controlType: "flat",
      navPos: "bottom",
        padding: true,
      vertical: false,
      autoplay1: false,
      arrows: true,
      autoplay: true,
      navigation: true,
        fullscreen: false,
      navigationPositions: [
        { value: "top", label: "top" },
        { value: "right", label: "right" },
        { value: "bottom", label: "bottom (default)" },
        { value: "left", label: "left" },
      ],
      controlTypeOptions: [
        { value: "regular", label: "regular" },
        { value: "unelevated", label: "unelevated" },
        { value: "flat", label: "flat (default)" },
        { value: "outline", label: "outline" },
        { value: "push", label: "push" },
      ],
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    closefun() {
      this.isshowprop = false;
    },
  },

  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}

  .custom-caption{
  
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}

</style>