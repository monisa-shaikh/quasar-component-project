<template>
<q-page>
  <q-page-sticky position="right" :offset="[18, 18]">
            <q-btn round color="primary" icon="settings" class="rotate-45" @click="open('right')"  />

          </q-page-sticky>
          <!-- Dailog -->
          <q-dialog v-model="dialog" :position="position">
              <q-card style="width: 350px;">
                <q-linear-progress :value="0.6" color="pink" />
                  <!-- heading -->
                <q-card-section class="row items-center no-wrap">
                    <div class="cols">
                         <div class="q-ma-md text-left" style="margin-left:0px!important;"> THEME CUSTOMIZER</div>
                    <q-label>Customize & Preview in Real Time</q-label>
                   
                    </div>
                   <q-space/>
                        <q-btn 
                        v-close-popup
                        flat
                        dense 
                        round
                        icon="close" />
                  
                </q-card-section>
                  <!-- heading End -->
                <q-separator />

                    <!-- -----------scroll area------------ -->
   <!-- <q-scroll-area
      :thumb-style="thumbStyle"
      style="height:650px;"
    > -->
                <!-- layout -->
                <!-- <q-card-section class=" items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Layout</div>
                        <div class="q-gutter-sm">
                        <q-radio class="q-mr-md" dense v-model="layout" val="Vertical" label="Vertical" />
                        <q-radio class="q-mr-md" dense v-model="layout" val="Horizontal" label="Horizontal" />
                      </div>
                </q-card-section> -->
                  <!-- layout End -->
                <q-separator />

                <!-- theme  -->
                  <q-card-section class=" row items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Dark Theme Mode</div>
                    <q-space></q-space>
                         <div class="q-gutter-sm">
                           
                         <!-- <q-btn  val="light"  color="white" @click="lightmode" />
                            <q-btn val="Dark"  color="dark" @click="darkmode"  /> -->

                              <q-toggle v-model="darkmodeel" @input="changeDarkMode" />
                          </div>
                </q-card-section>
                <!-- end theme -->
                 <q-separator />

                  <!-- theme mode  -->
                  <q-card-section class=" items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Theme color</div>
                         <div class="q-gutter-sm">
                            <q-radio v-model="theme" val="light" label="light" color="teal" />
                            <q-radio v-model="theme" val="Dark" label="Dark" color="dark" />
                            <q-radio v-model="theme" val="red" label="Red" color="red" />
                            <q-radio v-model="theme" val="cyan" label="Cyan" color="cyan" />

                          
                            </div>
                </q-card-section>
                <!-- end theme  mode-->
                   <q-separator />

                    <!-- collapse -->
                <q-card-section class="row items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Collapse Sidebar</div>
                  <q-space></q-space>
                       <q-toggle
                    :false-value="true"
                    :true-value="false"
                    color="white"
                    v-model="redModel"
                    />
                   
                </q-card-section>
                  <!-- collapse End -->
                <q-separator />
            
                <!-- Navbar  -->
                  <q-card-section class=" items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Navbar Color</div>
                         <div class="q-gutter-sm">
                           
                            <q-btn v-model="navbar" val="light"  color="teal" @click="lightmode" />
                            <q-btn v-model="navbar" val="Dark"  color="dark" @click="darkmode"  />
                            <q-btn v-model="navbar" val="red" color="red" />
                            <q-btn v-model="navbar" val="green" color="green" />

                            </div>
                </q-card-section>
                <!-- end Navbar -->
                 <q-separator />

              <!-- Navbar type  -->
                  <q-card-section class=" items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Navbar Type</div>

                         <div class="q-gutter-sm">
                            <q-radio v-model="navbartype" val="Floating" label="Floating"  />
                            <q-radio v-model="navbartype" val="Static" label="Static" />
                            <q-radio v-model="navbartype" val="Sticky" label="Sticky"/>
                            <q-radio v-model="navbartype" val="Hidden" label="Hidden" />

                          
                            </div>
                </q-card-section>
                <!-- end Navbar type -->

                 <q-separator />
                          <!-- footer type  -->
                  <q-card-section class=" items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Footer Type</div>
                           <div class="q-gutter-sm">
                            <q-radio v-model="footertype" val="Static" label="Static" />
                            <q-radio v-model="footertype" val="Sticky" label="Sticky"/>
                            <q-radio v-model="footertype" val="Hidden" label="Hidden" />

                          
                            </div>
                </q-card-section>
                <!-- end footer type -->
                 <q-separator />
<!-- </q-scroll-area> -->
              </q-card>
            </q-dialog>
           <!-- End Dailog -->

</q-page>
</template>

<script>
export default {
 data () {
    return {
      darkmodeel:this.$q.dark.mode,
      //  dark:'false',
      layout: 'Horizontal',
        dialog: false,
      position: 'top',
      theme:'light',
       redModel: true,
       navbar:'light',
       navbartype:'FloatingStatic',
       footertype:'Static'
      
    
    }
  },
  methods: {

      open (position) {
      this.position = position
      this.dialog = true
    },
    changeDarkMode(value) {
      Dark.toggle();
			// this.dark = value;
			// this.$q.dark.set(value);
    },
    darkmode(){
      this.$q.dark.set(true) 
    },
     lightmode(){
      this.$q.dark.set(false) 
    }
    
    }
}
</script>

<style>

</style>