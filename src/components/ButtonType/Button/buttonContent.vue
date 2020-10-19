<template>
 <q-page>
     <!-- <h5 class="text-blue-5 q-mb-sm">Standard</h5> -->
     <!-- first card for Standard buttons -->
      <div class="row items-start ">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Standard buttons</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- code for Standard buttons-->

                <div class="q-gutter-sm">
                    <q-btn color="white" text-color="black" label="Standard" />
                    <q-btn color="primary" label="Primary" />
                    <q-btn color="secondary" label="Secondary" />
                    <q-btn color="amber" glossy label="Amber" />
                    <q-btn color="brown-5" label="Brown 5" />
                    <q-btn color="deep-orange" glossy label="Deep Orange" />
                    <q-btn color="purple" label="Purple" />
                    <q-btn color="black" label="Black" />
                </div>
                 <!-- End code for Standard buttons -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
      <!-- End first card for Standard buttons-->

     <!-- <h5 class="text-blue-5 q-mb-sm">Custom colors</h5> -->

       <!-- Second card for Custom colors -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Custom colors</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Custom colors -->
                <div class="q-gutter-sm">
                    <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
                    <q-btn flat style="color: #FF0080" label="Fuchsia Flat" />
                    <q-btn style="background: goldenrod; color: white" label="Goldenrod" />
                    <q-btn outline style="color: goldenrod;" label="Goldenrod" />
                    <q-btn color="grey-4" text-color="purple" glossy unelevated icon="camera_enhance" label="Purple text" />
                </div>
                 <!-- End Code for Custom colors-->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Second card for Custom colors -->

    <!-- <h5 class="text-blue-5 q-mb-sm">With icon</h5> -->

        <!-- third card for With icon -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">With icon</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for With icon -->
                <div class="q-gutter-sm">
                    <q-btn color="primary" icon="mail" label="On Left" />
                    <q-btn color="secondary" icon-right="mail" label="On Right" />
                    <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
                    <br>
                    <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
                </div>
                 <!-- End Code for With icon  -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End third card for With icon  -->


       <!-- <h5 class="text-blue-5 q-mb-sm">Round buttons</h5> -->
        <!-- fourth card for Round buttons -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Round buttons</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Round buttons-->
             <div class="q-gutter-sm">
                <q-btn round color="primary" icon="shopping_cart" />
                <q-btn round color="secondary" icon="navigation" />
                <q-btn round color="amber" glossy text-color="black" icon="layers_clear" />
                <q-btn round color="brown-5" icon="directions" />
                <q-btn round color="deep-orange" icon="edit_location" />
                <q-btn round color="purple" glossy icon="local_grocery_store" />
                <q-btn round color="black" icon="my_location" />
            </div>
                 <!-- End Code for Round buttons -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End fourth card for Round buttons -->

     <!-- <h5 class="text-blue-5 q-mb-sm q-mt-sm">With other components</h5> -->

          <!-- Five card for Custom content -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Custom content</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Custom content-->
                <div class="q-gutter-md">
                    <q-btn color="teal">
                    <q-icon left size="3em" name="map" />
                    <div>Label</div>
                    </q-btn>

                    <q-btn round>
                    <q-avatar size="42px">
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                    </q-btn>

                    <q-btn color="indigo" no-caps>
                    Multiline<br>Button
                    </q-btn>

                    <q-btn color="deep-orange" push>
                    <div class="row items-center no-wrap">
                        <q-icon left name="map" />
                        <div class="text-center">
                        Custom<br>Content
                        </div>
                    </div>
                    </q-btn>
                </div>
                 <!-- End Code for Custom content -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Five card for Custom content -->

       

          <!-- six card for Truncate label -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Truncate label</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Truncate label-->
               <div class="q-gutter-sm">
                    <q-btn color="primary" style="width: 200px">
                    <div class="ellipsis">
                        This is some very long text that is expected to be truncated
                    </div>
                    </q-btn>
                </div>
                 <!-- End Code for Truncate label -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End six card for Truncate label -->

          <!-- seven card for Button design -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Button design</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Button design-->
             <div class="q-gutter-sm">
                <q-btn flat color="primary" label="Flat" />
                <q-btn flat rounded color="primary" label="Flat Rounded" />
                <q-btn flat round color="primary" icon="card_giftcard" />
                <br>
                <q-btn outline color="primary" label="Outline" />
                <q-btn outline rounded color="primary" label="Outline Rounded" />
                <q-btn outline round color="primary" icon="card_giftcard" />
                <br>
                <q-btn push color="primary" label="Push" />
                <q-btn push color="primary" round icon="card_giftcard" />
                <q-btn push color="white" text-color="primary" label="Push" />
                <q-btn push color="white" text-color="primary" round icon="card_giftcard" />
                <br>
                <q-btn unelevated color="primary" label="Unelevated" />
                <q-btn unelevated rounded color="primary" label="Unelevated Rounded" />
                <q-btn unelevated round color="primary" icon="card_giftcard" />
                <br>
                <q-btn no-caps color="primary" label="No caps" />
                <br>
                <q-btn class="glossy" color="teal" label="Glossy" />
                <q-btn class="glossy" rounded color="deep-orange" label="Glossy Rounded" />
                <q-btn class="glossy" round color="primary" icon="card_giftcard" />
                <q-btn class="glossy" round color="secondary" icon="local_florist" />
                <q-btn class="glossy" round color="deep-orange" icon="local_activity" />
            </div>
                 <!-- End Code for Button design -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End seven card for Button design -->

        <h5 class="q-pa-md">Padding v1.11+</h5>
       <p class="q-pa-md ">The default padding is “xs md”. However, you can use padding prop to customize it:</p>
          <!-- Eight card for Button padding -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Button padding</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Button padding-->
                    <div class="q-gutter-sm">
                        <q-btn
                        padding="none"
                        color="primary"
                        icon="eco"
                        />

                        <q-btn
                        padding="xs"
                        color="primary"
                        icon="eco"
                        />

                        <q-btn
                        padding="lg"
                        color="primary"
                        icon="eco"
                        />

                        <q-btn
                        padding="10px 5px"
                        color="primary"
                        icon="eco"
                        />

                        <q-btn
                        padding="xs lg"
                        color="primary"
                        icon="eco"
                        />

                        <q-btn
                        padding="xl"
                        color="primary"
                        round
                        icon="eco"
                        />

                        <q-btn
                        padding="xs lg"
                        color="primary"
                        round
                        icon="eco"
                        />

                        <q-btn
                        padding="lg xs"
                        color="primary"
                        round
                        icon="eco"
                        />
                    </div>
                 <!-- End Code for Button padding -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Eight card for Button padding -->


       
        <h5 class="q-pa-md">Progress related</h5>
       <p class="q-pa-md ">Some button actions involve contacting a server, so an asynchronous response. 
           It’s best that you inform the user about a background process taking place until the asynchronous response is ready.
            QBtn offers this possibility through the loading prop. 
            This property will display a QSpinner (by default) instead of the icon and/or label of the button. 
            Custom loading content can also be used (not only text or spinners).</p>
          <!-- nine card for Indeterminate progress -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Indeterminate progress</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Indeterminate progress-->
                <div class="q-gutter-sm">
                        <q-btn :loading="loading1" color="secondary" @click="simulateProgress(1)" label="Button" />
                        <q-btn :loading="loading2" color="red" @click="simulateProgress(2)">
                        Button
                        <template v-slot:loading>
                            Loading...
                        </template>
                        </q-btn>
                        <q-btn :loading="loading3" color="purple" @click="simulateProgress(3)">
                        Button
                        <template v-slot:loading>
                            <q-spinner-radio />
                        </template>
                        </q-btn>
                        <q-btn :loading="loading4" color="primary" @click="simulateProgress(4)" style="width: 150px">
                        Button
                        <template v-slot:loading>
                            <q-spinner-hourglass class="on-left" />
                            Loading...
                        </template>
                        </q-btn>
                        <br>
                        <q-btn round :loading="loading5" color="brown" @click="simulateProgress(5)" icon="camera_front">
                        <template v-slot:loading>
                            <q-spinner-facebook />
                        </template>
                        </q-btn>
                        <q-btn round :loading="loading6" color="black" @click="simulateProgress(6)" icon="camera_rear">
                        <template v-slot:loading>
                            <q-spinner-gears />
                        </template>
                        </q-btn>
                        <br>
                        <q-btn :loading="progress" color="primary" @click="progress = true">
                        Controlled from outside
                        <template v-slot:loading>
                            <q-spinner-radio class="on-left" />
                            Click "Stop" Button
                        </template>
                        </q-btn>
                        <q-btn :disable="!progress" color="negative" @click="progress = false" label="Stop" />
                    </div>
                 <!-- End Code for Indeterminate progress -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Nine card for Deterministic progress -->

 <!-- <h5 class="q-pa-md">Progress related</h5> -->
       <p class="q-pa-md ">
        Should you wish, you can also display a deterministic progress within the button by using 
        the additional percentage property along with what you’ve already learned about buttons with progress:</p>
          <!-- Ten card for  Deterministic progress -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Deterministic progress</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for  Deterministic progress-->
                    <div class="q-gutter-sm">
                        <q-btn
                        :loading="loading1"
                        :percentage="percentage1"
                        color="primary"
                        @click="startComputing(1)"
                        style="width: 150px"
                        >
                        Compute PI
                        <template v-slot:loading>
                            <q-spinner-gears class="on-left" />
                            Computing...
                        </template>
                        </q-btn>

                        <q-btn
                        :loading="loading2"
                        :percentage="percentage2"
                        round
                        color="secondary"
                        @click="startComputing(2)"
                        icon="cloud_upload"
                        />

                        <q-btn
                        :loading="loading3"
                        :percentage="percentage3"
                        dark-percentage
                        unelevated
                        color="orange"
                        text-color="grey-9"
                        @click="startComputing(3)"
                        icon="cloud_upload"
                        style="width: 100px"
                        />
                    </div>
                 <!-- End Code for  Deterministic progress -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Ten card for Deterministic progress -->


 <!-- <h5 class="q-pa-md">Progress related</h5> -->
       <p class="q-pa-md ">
        Should you wish, you can also display a deterministic progress within the button by using 
        the additional percentage property along with what you’ve already learned about buttons with progress:</p>
          <!-- Eleven card for  Custom ripple -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Custom ripple</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for  Custom ripple-->
                <div class="q-gutter-sm">
                    <q-btn :ripple="false" color="secondary" label="No ripple" no-caps />
                    <q-btn :ripple="{ color: 'yellow' }" color="secondary" label="Yellow ripple" no-caps />
                    <q-btn :ripple="{ center: true }" color="secondary" label="Center ripple" no-caps />
                </div>
                 <!-- End Code for  Custom ripple -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Eleven card for Custom ripple -->

       
 <h5 class="q-pa-md">Handling links</h5>
       <p class="q-pa-md ">
       The two examples below won’t work with UMD version (so in Codepen/jsFiddle too) because it relies on the existence of Vue Router.</p>
          <!-- twel card for  Links -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Links</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for  Links-->
                 <div class="q-gutter-sm">
                    <q-btn to="/start/pick-quasar-flavour" label="To Docs index" outline color="purple" />
                    <q-btn to="/start/pick-quasar-flavour" label="To Docs index in 2s" @click="linkClick" glossy color="purple" />

                    <q-btn type="a" href="start/pick-quasar-flavour" label="Type 'a'" push color="purple" />
                    <q-btn type="a" href="start/pick-quasar-flavour" target="_blank" label="Type 'a' - external" color="purple" />
                </div>
                 <!-- End Code for  Links -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End twel card for Links -->


        <h5 class="q-pa-md">Handling links</h5>
       <p class="q-pa-md ">
       The two examples below won’t work with UMD version (so in Codepen/jsFiddle too) because it relies on the existence of Vue Router.</p>
          <!-- twel card for  Scoped-slot-of-RouterLink -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Scoped-slot-of-RouterLink</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for  Links-->
               <div class="olumn q-gutter-sm">
                    <router-link :to="{ hash: '#Handling-links' }">
                    <template v-slot="props">
                        <q-btn v-bind="buttonProps(props)" />
                    </template>
                    </router-link>

                    <router-link :to="{ hash: '#Handling-links', query: { search: '1' } }">
                    <template v-slot="props">
                        <q-btn v-bind="buttonProps(props)" />
                    </template>
                    </router-link>

                    <router-link :to="{ hash: '#Handling-links', query: { search: '1', test: '1' } }">
                    <template v-slot="props">
                        <q-btn v-bind="buttonProps(props)" />
                    </template>
                    </router-link>

                    <router-link :to="{ hash: '#Handling-links', query: { search: '1', test: '2' } }">
                    <template v-slot="props">
                        <q-btn v-bind="buttonProps(props)" />
                    </template>
                    </router-link>

                    <router-link :to="{ hash: '#Handling-links', query: { search: '1', test: '1' } }">
                    <template v-slot="props">
                        <q-btn v-bind="buttonProps(props)" icon-right="timer_3" @click="linkClick" />
                    </template>
                    </router-link>
                </div>
                 <!-- End Code for  Links -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End twel card for Links -->


  <!-- <h5 class="q-pa-md">Handling links</h5> -->
          <!-- thirteen card for  Other options -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Other options</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for  Other options-->
                <div >
                    <q-btn color="black" class="full-width" label="Full-width" />

                    <q-btn color="primary" label="With Tooltip" class="q-mt-md">
                    <q-tooltip content-class="bg-accent">I'm a tooltip</q-tooltip>
                    </q-btn>
                </div>
                 <!-- End Code for  Other options -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End thirteen card for Links -->

        <!-- <h5 class="q-pa-md">Handling links</h5> -->
          <!-- Fourteen card for  Disable -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Disable</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Disable-->
                 <div class="q-gutter-sm">
                    <q-btn color="primary" disable label="Disabled" />
                    <q-btn round color="primary" disable icon="card_giftcard" />
                    <q-btn flat color="primary" disable label="Disabled" />
                    <q-btn flat round color="primary" disable icon="card_giftcard" />
                    <q-btn outline color="primary" disable label="Disabled" />
                    <q-btn outline round color="primary" disable icon="card_giftcard" />
                    <q-btn push color="primary" disable label="Disabled" />
                    <q-btn push round color="primary" disable icon="card_giftcard" />
                    <q-btn class="glossy" color="primary" disable label="Disabled" />
                    <q-btn class="glossy" round color="primary" disable icon="card_giftcard" />
                </div>
                 <!-- End Code for  Disable -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Fourteen card for Disable -->


        <h5 class="q-pa-md">Controlling the button for form submission</h5>
        <p class="q-pa-md">
            When you have a button to submit a form’s input to the server, like a “Save” button, more often than not you will also want to give the user the ability to submit the form with a press of the ENTER key. If you would also like to give the user feedback of the saving process being in progress, and to prevent the user repeatedly pressing the button, you would need the button to show a loading spinner and be disabled from click events.
             QBtn allows this behavior if configured so.
        </p>
          <!-- fifteen card for  Form Submission -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Disable</div>
            
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Form Submission-->

                <form @submit.prevent="simulateSubmit" class="q-pa-md">
                <!-- a simple text field watching for the enter key release -->
                <q-input
                filled
                color="teal"
                hint="Type then hit Enter key above"
                v-model="test"
                />

                <!--
                A button with v-model set to submit.
                v-model scope variable must be a strict Boolean
                -->
                <div class="row justify-end">
                <q-btn
                    type="submit"
                    :loading="submitting"
                    label="Save"
                    class="q-mt-md"
                    color="teal"
                >
                    <template v-slot:loading>
                    <q-spinner-facebook />
                    </template>
                </q-btn>
                </div>
            </form>

                 <!-- End Code for  Form Submission -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End fifteen card for Form Submission -->



       


       
 </q-page>
</template>

<script>

export default {
data(){
        return{
            isshowprop:true,
              loading1: false,
                loading2: false,
                loading3: false,
                loading4: false,
                loading5: false,
                loading6: false,
                progress: false,
                //Deterministic progress
                loading1: false,
                percentage1: 0,

                loading2: false,
                percentage2: 0,

                loading3: false,
                percentage3: 0,

                  test: '',
                 submitting: false
            
        }
    },
    methods: {
      
        closefun(){
             this.isshowprop=false
            
        },
          simulateProgress (number) {
        // we set loading state
        this[`loading${number}`] = true
        // simulate a delay
        setTimeout(() => {
            // we're done, we reset loading state
            this[`loading${number}`] = false
        }, 3000)
        },

         startComputing (id) {
      this[`loading${id}`] = true
      this[`percentage${id}`] = 0
      this[`interval${id}`] = setInterval(() => {
        this[`percentage${id}`] += Math.floor(Math.random() * 8 + 10)
        if (this[`percentage${id}`] >= 100) {
          clearInterval(this[`interval${id}`])
          this[`loading${id}`] = false
        }
      }, 700)
    },
        
    linkClick (e, go) {
      e.navigate = false // we choose when we navigate

      // console.log('triggering navigation in 2s')
      setTimeout(() => {
        // console.log('navigating as promised 2s ago')
        go()
      }, 2000)
    },

    linkClick (e, go) {
      e.navigate = false // we choose when we navigate

      // console.log('triggering navigation in 3s')
      setTimeout(() => {
        // console.log('navigating as promised 3s ago')
        go()
      }, 3000)
    },

    buttonProps ({ href, route, isActive, isExactActive }) {
      const props = {
        color: 'black',
        noCaps: true,
        label: `To "${route.fullPath}"`,
        outline: true,
        to: href
      }

      if (isActive === true) {
        props.color = isExactActive === true ? 'primary' : 'amber-9'
      }
      else {
        props.color = 'black'
      }

      return props
    },
     simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false
      }, 3000)
    }
    },

  beforeDestroy () {
    clearInterval(this.interval1)
    clearInterval(this.interval2)
  }
}
</script>

<style>

</style>