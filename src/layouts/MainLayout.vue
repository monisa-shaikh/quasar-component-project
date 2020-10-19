<template>
  <q-layout view="lHh Lpr lFf">

    
      <!--  Header -->

 <q-header  v-model="toolbar"  :class="{'bg-teal':attached,'bg-orange':orangeattached,'bg-red':redattached,'text-white':true,'bg-green':greenattached ,'bg-dark':true,'lightcss':lightcssattached}" style="darkcss" v-if="dark">
     
<!-- div start -->

<div v-if="toolbarshow" style="width:100%;">

      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
      
        </q-toolbar-title>



    <!-- search icon -->
   

      <div class="header-item-padding">
        <q-btn dense round flat  icon="search" @click="toolbarshow=!toolbarshow"/>   
       <!-- <q-icon name="search"  -->
      </div>
    <!-- end search icon -->


    <!-- notification -->
    <div class="header-item-padding">
    <q-btn  dense round flat icon="notifications">
      <q-badge color="#7367f0" floating transparent>
        6
      </q-badge>
      
       <q-menu
              transition-show="scale"
              transition-hide="scale"
              :offset="[320, -6]"
              style=""
            >
              <q-toolbar class="bg-indigo-5 text-white shadow-2" style="height:80px;">
                <q-item-section class="text-center">
                  <q-item-label>5 New</q-item-label>
                  <q-item-label caption lines="1" style="color: white"
                    >Notification</q-item-label
                  >
                </q-item-section>
              </q-toolbar>
              <q-scroll-area style="height: 250px; width: 350px;">
                <q-list class="q-py-xs" bordered>
                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="chat" class="text-primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-primary"
                        >New Messages</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Are you going to meet me tonight ?
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 1 min ago </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="info" class="text-red" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-red"
                        >Server Limit Reached!</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Server have 99% CPU usage.
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 2 min ago </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="event" class="text-orange" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-orange"
                        >Bruce's Party</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Chocolate cake oat cake tiramisu
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 12 min ago </q-item-section>
                  </q-item>

                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="mail" class="text-primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-primary"
                        >New Mail From Peter</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Cake sesame snaps cupcake
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 2 hr ago </q-item-section>
                  </q-item>
                </q-list>
              </q-scroll-area>

              <q-item class="bg-grey-4" clickable v-ripple>
                <q-item-section>
                  <q-item-label class="text-primary text-center"
                    >View All Notifications
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
            </q-menu>
      </q-btn>
    </div>
    <!-- end notification -->
    <q-separator vertical inset class="q-ml-sm " />

    <!-- user profile -->

      <q-btn flat >
           <div class="columan hide">
           <q-item-label class="q-mr-md" >John Doe</q-item-label>
           <q-item-label class="q-mt-sm" >Available</q-item-label>
           </div>
          <q-avatar size="42px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
          <q-menu 
          transition-show="scale"
          transition-hide="scale">

               <q-list bordered>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="person" />
                  </q-item-section>

                  <q-item-section>Profile</q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="local_post_office" />
                  </q-item-section>

                  <q-item-section>Inbox</q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="check_box" />
                  </q-item-section>

                  <q-item-section>Tasks</q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="chat_bubble_outline" />
                  </q-item-section>

                  <q-item-section>Chat</q-item-section>
                </q-item>

                   <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="favorite_border" />
                  </q-item-section>

                  <q-item-section>Wish List</q-item-section>
                </q-item>

                <q-separator />
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="login"/>
                  </q-item-section>

                  <q-item-section>Logout</q-item-section>
                </q-item>
            
             </q-list>
          </q-menu>

        </q-btn>
    <!-- end user profile -->

      </q-toolbar>
</div>
 <div class="row" style="width:100%;" v-else>
          
        <q-input bottom-slots v-model="text"  class="q-pa-xs" style="padding-top:0px!important;padding-bottom:0px!important;width:100%;">
  
        <template v-slot:append>
          <q-icon name="close" @click="toolbarshow =true" class="cursor-pointer" />
        </template>

       
      </q-input>
   </div>
  
    </q-header>
    <!-- End Header -->


 
  <!--  Header -->
  <!-- <q-header :class="(dark)?'darkcss':'lightcss'" :class="{darkcss:attached}" v-model="toolbar">  -->
   

 <q-header  v-model="toolbar"  :class="{'bg-teal':attached,'bg-orange':orangeattached,'bg-red':redattached,'bg-green':greenattached ,'text-white':textwhiteattached,'bg-white':true,'bg-dark':darkcssattached,'lightcss':lightcssattached}" style="lightcss" v-else>
     
<!-- div start -->

<div v-if="toolbarshow" style="width:100%;">

      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
      
        </q-toolbar-title>



    <!-- search icon -->
   

      <div class="header-item-padding">
        <q-btn dense round flat  icon="search" @click="toolbarshow=!toolbarshow"/>   
       <!-- <q-icon name="search"  -->
      </div>
    <!-- end search icon -->


    <!-- notification -->
    <div class="header-item-padding">
    <q-btn  dense round flat icon="notifications">
      <q-badge color="#7367f0" floating transparent>
        6
      </q-badge>
      
       <q-menu
              transition-show="scale"
              transition-hide="scale"
              :offset="[300, -4]"
              style=""
            >
              <q-toolbar class="bg-primary text-white shadow-2" style="height:80px;">
                <q-item-section class="text-center">
                  <q-item-label><h5>5 New</h5></q-item-label>
                  <q-item-label caption lines="1" style="color: white"
                    ><p style="font-size:15px;opacity: .75!important;" class="opacity-75">App Notifications</p></q-item-label
                  >
                </q-item-section>
              </q-toolbar>
              <q-scroll-area style="height: 250px; width: 350px;">
                <q-list class="q-py-xs" bordered>
                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="chat" class="text-primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-primary"
                        >New Messages</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Are you going to meet me tonight ?
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 1 min ago </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="info" class="text-red" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-red"
                        >Server Limit Reached!</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Server have 99% CPU usage.
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 2 min ago </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="event" class="text-orange" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-orange"
                        >Bruce's Party</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Chocolate cake oat cake tiramisu
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 12 min ago </q-item-section>
                  </q-item>

                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="mail" class="text-primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-primary"
                        >New Mail From Peter</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Cake sesame snaps cupcake
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 2 hr ago </q-item-section>
                  </q-item>
                </q-list>
              </q-scroll-area>

              <q-item class="bg-grey-4" clickable v-ripple>
                <q-item-section>
                  <q-item-label class="text-primary text-center"
                    >View All Notifications
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
            </q-menu>
      </q-btn>
    </div>
    <!-- end notification -->
    <q-separator vertical inset class="q-ml-sm " />

    <!-- user profile -->

      <q-btn flat >
           <div class="columan hide">
           <q-item-label class="q-mr-md" >John Doe</q-item-label>
           <q-item-label class="q-mt-sm" >Available</q-item-label>
           </div>
          <q-avatar size="42px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
          <q-menu 
          transition-show="scale"
          transition-hide="scale">

               <q-list bordered>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="person" />
                  </q-item-section>

                  <q-item-section>Profile</q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="local_post_office" />
                  </q-item-section>

                  <q-item-section>Inbox</q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="check_box" />
                  </q-item-section>

                  <q-item-section>Tasks</q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="chat_bubble_outline" />
                  </q-item-section>

                  <q-item-section>Chat</q-item-section>
                </q-item>

                   <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="favorite_border" />
                  </q-item-section>

                  <q-item-section>Wish List</q-item-section>
                </q-item>

                <q-separator />
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="login"/>
                  </q-item-section>

                  <q-item-section>Logout</q-item-section>
                </q-item>
            
             </q-list>
          </q-menu>

        </q-btn>
    <!-- end user profile -->

      </q-toolbar>
</div>
 <div class="row" style="width:100%;" v-else>
          
        <q-input bottom-slots v-model="text"  class="q-pa-xs" style="padding-top:0px!important;padding-bottom:0px!important;width:100%;">
  
        <template v-slot:append>
          <q-icon name="close" @click="toolbarshow =true" class="cursor-pointer" />
        </template>

       
      </q-input>
   </div>
  
    </q-header>
    <!-- End Header -->


 
  <!--  Header -->


 
 <!-- footer -->
  <!-- <footercomponent /> -->
<!-- drawer section code -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      
   
    >

    <div class="flex items-end justify-between logotextpos">
      <div class="row  cursor-pointer flex items-center ">
         <q-avatar size="32px" class="q-mr-sm">
          <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
        </q-avatar>
        <span class="logotxt text-primary">Quasar</span>
      </div>
    </div>
      <!-- -----------scroll area------------ -->
   <q-scroll-area
      :thumb-style="thumbStyle"
      style="height:100%; max-width: 300px;"
    >
      <q-list style="padding: 0 15px;">
          <q-expansion-item
        dense-toggle
        :content-inset-level="0.5"
        icon="home"
        label="Dashboard"
        >
          <q-item to="/apexcharts" exact clickable>
            <q-item-section>
                  <q-item-label>apexcharts</q-item-label>
            </q-item-section>
          </q-item>
           <q-item to="/dashboard" exact clickable>
            <q-item-section>
                  <q-item-label>Analytics</q-item-label>
            </q-item-section>
          </q-item>
          </q-expansion-item>
        <q-item-label
          header
          class="text-grey-8"
        >
          Components
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

      <!-- ---------Button submenu code----------- -->
        <q-expansion-item
        dense-toggle
        :content-inset-level="0.5"
        icon="menu_open"
        label="Button"
        >
          <q-item to="/buttons" exact clickable>
            <q-item-section>
                  <q-item-label>Button</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/buttonGroup" exact clickable>
            <q-item-section>
                  <q-item-label>Button Group</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/buttonDropdown" exact clickable>
            <q-item-section>
                  <q-item-label>Button Dropdown</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <!-- ---------End Button submenu code----------- -->
      
        <EssentialLink1
          v-for="link in essentialLinks1"
          :key="link.title"
          v-bind="link"
        />

            <!-- ---------Form components submenu code----------- -->
            <q-separator/>
        <q-expansion-item
        dense-toggle
        :content-inset-level="0.5"
        icon="library_books"
        label="Form component"
        >
         
          <q-item to="/input-textfield" exact clickable>
            <q-item-section>
                  <q-item-label>Input Textfield</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/select" exact clickable>
            <q-item-section>
                  <q-item-label>Select</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/file-Picker" exact clickable>
            <q-item-section>
                  <q-item-label>File Picker</q-item-label>
            </q-item-section>
          </q-item>


           <q-item to="/form" exact clickable>
            <q-item-section>
                  <q-item-label>Form</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/field" exact clickable>
            <q-item-section>
                  <q-item-label>Field(wrapper)</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/radio" exact clickable>
            <q-item-section>
                  <q-item-label>Radio</q-item-label>
            </q-item-section>
          </q-item>

          
           <q-item to="/checkbox" exact clickable>
            <q-item-section>
                  <q-item-label>checkbox</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/toggle" exact clickable>
            <q-item-section>
                  <q-item-label>Toggle</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/button-toggle" exact clickable>
            <q-item-section>
                  <q-item-label>Button Toggle</q-item-label>
            </q-item-section>
          </q-item>

                 
           <q-item to="/option-group" exact clickable>
            <q-item-section>
                  <q-item-label>Option Group</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/slider" exact clickable>
            <q-item-section>
                  <q-item-label>Slider</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/range" exact clickable>
            <q-item-section>
                  <q-item-label>Range</q-item-label>
            </q-item-section>
          </q-item>
               <q-item to="/time" exact clickable>
            <q-item-section>
                  <q-item-label>Time Picker</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/date" exact clickable>
            <q-item-section>
                  <q-item-label>Date Picker</q-item-label>
            </q-item-section>
             
          </q-item>
    
             <q-separator/>
        </q-expansion-item>
        
        <!-- ---------End Form components  submenu code----------- -->
        <!-- ------------third list---------------- -->
         <EssentialLink2
          v-for="link in essentialLinks2"
          :key="link.title"
          v-bind="link"
        />
        <!-- End third list -->

            <!-- ---------Button submenu code----------- -->
        <q-expansion-item
        dense-toggle
        :content-inset-level="0.5"
        icon="crop"
        label="Observers"
        >
          <q-item to="/resize-observer" exact clickable>
            <q-item-section>
                  <q-item-label>Resize Observer</q-item-label>
            </q-item-section>
          </q-item>

        </q-expansion-item>
        <!-- ---------End Button submenu code----------- -->

        <!-- 4th list after observers -->
         <EssentialLink3
          v-for="link in essentialLinks3"
          :key="link.title"
          v-bind="link"
        />
        <!-- end list -->


        <!-- plugin -->
      <!-- ---------Button submenu code----------- -->
        <q-expansion-item
        dense-toggle
        :content-inset-level="0.5"
        icon="menu_open"
        label="Quasar plugins"
        >
          <q-item to="/app-fullscreen" exact clickable>
            <q-item-section>
                  <q-item-label>App Fullscreen</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/bottom-sheet" exact clickable>
            <q-item-section>
                  <q-item-label>Bottom Sheet</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/dialog-plugin" exact clickable>
            <q-item-section>
                  <q-item-label>Dialog</q-item-label>
            </q-item-section>
          </q-item>


               <q-item to="/loading-plugin" exact clickable>
            <q-item-section>
                  <q-item-label>Loading</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/notify" exact clickable>
            <q-item-section>
                  <q-item-label>Notify</q-item-label>
            </q-item-section>
          </q-item>

        </q-expansion-item>
        <!-- ---------End Button submenu code----------- -->
        <!-- end -->

      </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
     
        <div class="router-content" v-if="loading">
           
   <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
              <router-view v-on:startAjaxBar="onStartAjaxBar" v-on:stopAjaxBar="onStopAjaxBar" />
          </transition>

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
        <q-scroll-area
            :thumb-style="thumbStyle"
            style="height:500px;"
          >


                <!-- theme  -->
                  <q-card-section class=" row items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Dark Theme Mode</div>
                    <q-space></q-space>
                         <div class="q-gutter-sm">
                           
                         <!-- <q-btn  val="light"  color="white" @click="lightmode" />
                            <q-btn val="Dark"  color="dark" @click="darkmode"  /> -->

                              <q-toggle v-model="dark" @input="changeDarkMode" />
                            </div>
                </q-card-section>
                <!-- end theme -->
                 <q-separator />

                 

            
                <!-- Navbar  -->
                  <q-card-section class=" items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Navbar Color</div>
                         <div class="q-gutter-sm">
                           
                          <q-btn v-model="navbar" val="white" :color="(dark)?'darkcss':'lightcss'" @click="primarymethod()" />
                           <q-btn v-model="navbar" val="teal"  color="teal"  @click="redmethod()"/>
                             <q-btn v-model="navbar" val="red"  color="red"  @click="redcolormethod()"/>
                           <q-btn v-model="navbar" val="green"  color="green"   @click="greenmethod()" />
                              <q-btn v-model="navbar" val="orange"  color="orange"   @click="orangemethod()" />
                          
                            <!-- <q-btn :dense="$q.screen.xs" no-caps label="Face" icon-right="colorize" color="primary">
                              <q-popup-proxy transition-show="scale" transition-hide="scale">
                                <q-color v-model="colorFace" />
                              </q-popup-proxy>
                            </q-btn> -->

                            </div>
                </q-card-section>
                <!-- end Navbar -->
                 <q-separator />
                 
                    <!-- collapse -->
                <q-card-section class="row items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;">Sidebar Show</div>
                  <q-space></q-space>
                       <q-toggle v-model="leftDrawerOpen" @input="hideleftdrawer" />
                   
                </q-card-section>
                  <!-- collapse End -->
                <q-separator />

              <!-- Navbar type  -->
                  <q-card-section class=" items-center no-wrap">
                  <div class="q-ma-md text-left" style="margin-left:0px!important;"> Navbar Type</div>

                         <div class="q-gutter-sm">
                            <!-- <q-radio v-model="toolbar" val="Floating" label="Floating"  />
                            <q-radio v-model="toolbar" val="Static" label="Static" />
                            <q-radio v-model="toolbar" val="Sticky" label="Sticky"/>
                            <q-radio v-model="toolbar" val="Hidden" label="Hidden" @click="toolbar=!toolbar" ></q-radio> -->
                             <q-btn  color="primary" @click="toolbar=false" label="Hidden" />
                             <q-btn  color="primary" @click="toolbar=true" label="Floating" />

                          
                            </div>
                </q-card-section>
                <!-- end Navbar type -->

                 <q-separator />
                       
           
  </q-scroll-area>
              </q-card>
            </q-dialog>
           <!-- End Dailog -->

          </div>

<div v-else>
  <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />
     <q-btn color="primary" label="Trigger" @click="trigger" />
</div>
          <!---------------setting button page stikcy-------- -->

       <!-- <SettingPageSticky></SettingPageSticky> -->
      <!-------------setting button page stikcy end------------>

  <!-- place QPageScroller at end of page -->
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>

    </q-page-container>
  </q-layout>
</template>

<script>
import footercomponent from 'components/footer/footer.vue'

import EssentialLink from 'components/EssentialLink.vue'


import EssentialLink1 from 'components/EssentialLink1.vue'


import EssentialLink2 from 'components/EssentialLink2.vue'


import EssentialLink3 from 'components/EssentialLink3.vue'
import SettingPageSticky from 'components/PageSettingSticky.vue'
import LocalStorage  from 'quasar'

const linksData = [
  {
    title: 'Ajax bar',
     to:'/ajaxbar',
    icon: 'text_rotation_none',
  
  },
  {
    title: 'Avatar',
     to:'/avatar',
    icon:"account_circle"
  },
  {
    title: 'Badge',
    to:'/badge',
    icon: 'report'
   
  },
  {
    title: 'Banner',
     to:'/banner',
     icon: 'crop_7_5'
    
  },
  {
    title: 'Bar',
    to:'/bar',
    icon: 'dehaze'
 
  },
  {
    title: 'Breadcrumbs',
    to:'/breadcrumbs',
    icon: 'layers'
    
  }
];
// -------------second list data -----------------



const linksData1 = [
  {
    title: 'Card',
     to:'/card',
    icon: 'payment',
  
  },
  {
    title: 'Carousel',
     to:'/carousel',
    icon:"view_carousel"
  },
  {
    title: 'Chat Message',
    to:'/chat-message',
    icon: 'chat'
   
  },
  {
    title: 'Chip',
     to:'/Chip',
     icon: 'copyright'
    
  },
  {
    title: 'Circular Progress',
    to:'/circular-progress',
    icon: 'autorenew'
 
  },
  {
    title: 'Color Picker',
    to:'/color-picker',
    icon: 'colorize'
    
  },
  {
    title: 'Dialog',
    to:'/dialog',
    icon: 'filter_none'
    
  },
  {
    title: 'Editor',
    to:'/editor',
    icon: 'edit'
    
  },
  {
    title: 'Expansion item',
    to:'/expansion-item',
    icon: 'code'
    
  },
  {
    title: 'Floating Action Button',
    to:'/floating-action-button',
    icon: 'add_circle_outline'
    
  }
];
// --------------------third list----------------------
const linksData2 = [
  {
    title: 'Icon',
     to:'/icon',
    icon: 'sentiment_satisfied_alt',
  
  },
  {
    title: 'Img',
     to:'/img',
    icon:"image"
  },
  {
    title: 'Infinite Scroll',
    to:'/infinite-scroll',
    icon: 'all_inclusive'
   
  },
  {
    title: 'Inner Loading',
     to:'/inner-loading',
     icon: 'miscellaneous_services'
    
  },
  {
    title: 'Intersection',
    to:'/intersection',
    icon: 'apps'
 
  },
  {
    title: 'Knob',
    to:'/knob',
    icon: 'touch_app'
    
  },
  {
    title: 'Linear Progress',
    to:'/linear-progress',
    icon: 'blur_linear'
 
  },
  {
    title: 'List and List Items',
    to:'/list-and-list-items',
    icon: 'list_alt'
    
  },
  {
    title: 'Markup Table',
    to:'/markup-table',
    icon: 'table_chart'
 
  },
  {
    title: 'Menu',
    to:'/menu',
    icon: 'clear_all'
    
  }
];

// list 4th


const linksData3 = [
  {
    title: 'Pagination',
     to:'/pagination',
    icon: 'file_copy',
  
  },
  {
    title: 'Parallax',
     to:'/parallax',
    icon:"vertical_split"
  },
  {
    title: 'Popup Edit',
    to:'/popup-edit',
    icon: 'edit_road'
   
  },
  {
    title: 'Popup Proxy',
    to:'/popup-proxy',
    icon: 'error_outline'
   
  },
  {
    title: 'Pull to refresh',
     to:'/pull-to-refresh',
    icon: 'refresh',
  
  },
  {
    title: 'Rating',
     to:'/rating',
    icon:"grade"
  },
  {
    title: 'Responsive',
    to:'/responsive',
    icon: 'important_devices'
   
  },
  {
    title: 'Scroll Area',
     to:'/scroll-area',
    icon:"pan_tool"
  },
  {
    title: 'Separator',
    to:'/separator',
    icon: 'compare'
   
  },
  {
    title: 'Skeleton',
     to:'/skeleton',
    icon: 'web',
  
  },
  {
    title: 'Slide Item',
     to:'/slide-item',
    icon:"toc"
  },
  {
    title: 'Slide Transition',
    to:'/slide-transition',
    icon: 'filter_b_and_w'
   
  },
  {
    title: 'Space',
     to:'/space',
    icon: 'keyboard_tab',
  
  },
  {
    title: 'Spinners',
     to:'/spinners',
    icon:"hourglass_top"
  },
  {
    title: 'Splitter',
    to:'/splitter',
    icon: 'vertical_split'
   
  },
  {
    title: 'Stepper',
     to:'/stepper',
    icon:"more_horiz"
  },
  {
    title: 'Table',
    to:'/table',
    icon: 'view_list'
   
  },
  {
    title: 'Tabs',
     to:'/tabs',
    icon: 'power_input',
  
  },
  {
    title: 'Tab Panels',
     to:'/tab-panels',
    icon:"art_track"
  },
  {
    title: 'Timeline',
    to:'/timeline',
    icon: 'timeline'
   
  },
  {
    title: 'Toolbar',
    to:'/toolbar',
    icon: 'dashboard'
   
  },
  {
    title: 'Tooltip',
     to:'/tooltip',
    icon:"filter_none"
  },
  {
    title: 'Tree',
    to:'/tree',
    icon: 'trending_down'
   
  },
  {
    title: 'Uploader',
     to:'/uploader',
    icon: 'add_box',
  
  },
  {
    title: 'Video',
     to:'/video',
    icon:"slideshow"
  },
  {
    title: 'VirtualScroll',
    to:'/virtual-scroll',
    icon: 'format_line_spacing'
   
  }
];
const contacts = [ {
  id: 1,
  name: 'Ruddy Jedrzej',
  email: 'rjedrzej0@discuz.net',
  letter: 'R'
}, {
  id: 2,
  name: 'Mallorie Alessandrini',
  email: 'malessandrini1@marketwatch.com',
  letter: 'M'
}, {
  id: 3,
  name: 'Elisabetta Wicklen',
  email: 'ewicklen2@microsoft.com',
  letter: 'E'
}, {
  id: 4,
  name: 'Seka Fawdrey',
  email: 'sfawdrey3@wired.com',
  letter: 'S'
} ]

const offline = [ {
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
} ]
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

export default {

  name: 'MainLayout',

  	created() {
    this.dark = this.$q.dark.isActive;
      // this.dark = localStorage.getItem("settings")
    // console.log("settings",dark)

  //     let settings= localStorage.getItem('settings');
  //     console.log("settings",settings);
  //     if(settings)
  //     {
  //        this.$q.dark.set(false)
  //        console.log("false");
  //     }
  //  else{
  //    this.$q.dark.set(true)
  //    console.log("true");
  //  }
  
   
  },
 
	watch: {
		'$q.dark.isActive' (val) {
      console.log(val ? 'On dark mode' : 'On light mode')
			this.dark = val;
		}
  },
  computed: {
    navbarcolor() {
      const colorFace = this.colorFace.replace('#', '%23')
      console.log(colorFace)
    }
  },
  components: { EssentialLink,EssentialLink1,EssentialLink2,EssentialLink3,SettingPageSticky,footercomponent },
  data () {
    return {
      orangeattached:false,
      redattached:false,
      textwhiteattached:false,
      darkcssattached:false,
      lightcssattached:false,
       attached:false,
      greenattached:false,
      primaryattached:true,
      delay: 0,
      
      selectedColor: 'red',
      headershow:true,
    whitebtn:false,
       redbtn:false,
      tealcolor:false,
       colorFace: '#B33636',
      toolbar:true,
      leftdrawer:false,
      toolbarhide:true,
      loading:true,
      //  darkmodeel:this.$q.dark.mode,
       dark: null,
      layout: 'Horizontal',
        dialog: false,
      position: 'top',
      theme:'light',
       redModel: true,
       navbar:'light',
       navbartype:'FloatingStatic',
       footertype:'Static',
      
drawer:'true',
       model: null,
      options: stringOptions,
      text:'explore',
      toolbarshow:true,
      searchModel:true,
      	dark: false,
       dialog: false,
      position: 'top',
      leftDrawerOpen: true,
      essentialLinks: linksData,
      essentialLinks1: linksData1,
      essentialLinks2: linksData2,
       essentialLinks3: linksData3,
       mobileData: true,
      bluetooth: false,
       contacts,
        offline,
         thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: 'gray',
        width: '5px',
        opacity: 0.75,
        show:true
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: 'gray',
        width: '9px',
        opacity: 0.2
      }
    }
  },
   methods: {
     redcolormethod(){
       console.log("red bg calls")
       this.redattached=true;
      this.greenattached=false;
      this.attached=false;
      this.textwhiteattached=true;
        this.orangeattached=false;
      if(!this.attached){
        this.primaryattached=true
      }
     }, 
     orangemethod(){
       console.log("orange bg calls")
       this.redattached=false;
      this.greenattached=false;
      this.attached=false;
      this.textwhiteattached=true;
      this.orangeattached=true;
      
      if(!this.attached){
        this.primaryattached=true
      }
     },
      redmethod(){
      console.log("teal bg calls")
       this.attached=true;
      this.greenattached=false;
      this.textwhiteattached=true;
        this.orangeattached=false;
      if(!this.attached){
        this.primaryattached=true
      }
    },
    greenmethod(){
      console.log("green bg calls")
       this.greenattached=true;
      this.attached=false;
      this.textwhiteattached=true;
        this.orangeattached=false;
       if(!this.greenattached){
        this.primaryattached=true
      }
    },
    primarymethod(){
      console.log("primary bg calls")
       this.primaryattached=true;
      this.attached=false;
      this.greenattached=false;
      this.textwhiteattached=false;
      this.redattached=false;
      this.orangeattached=false;
       
    },
trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
      
    },
      open (position) {
      this.position = position
      this.dialog = true
    },
    onMainClick () {
      // console.log('Clicked on main button')
    },

    onItemClick () {
      // console.log('Clicked on an Item')
    },
    closefun(){
     this.show=false;
    },
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = stringOptions

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
     open (position) {
      this.position = position
      this.dialog = true
    },
    changeDarkMode(value) {
  // get configured status
// console.log(this.$q.dark.mode) ;
      // Dark.toggle(value);
			// this.dark = value;
			this.$q.dark.set(value);
      // localStorage.setItem('settings',value);
    //  let settings= this.$q.localStorage.getItem('settings');
    //   console.log("settings",settings);
      	// this.$q.dark.set('settings');

         this.settings = value
      console.log(this.settings)
      localStorage.setItem("settings", this.settings);
    },
    hideleftdrawer(value){
    
     this.leftDrawerOpen=value;
    },
      onStartAjaxBar () {
      this.$emit('startAjaxBar')
    },
    onStopAjaxBar () {
      this.$emit('stopAjaxBar')
    }
   },
   mounted () {
    let self = this
    this.$router.beforeEach((to, from, next) => {
      self.$emit('startAjaxBar')
      next()
    })
    this.$emit('stopAjaxBar')
    if(this.dark){
      this.darkcssattached=true
    }
    else{
      this.lightcssattached=true
    }
    
    if (localStorage.getItem('settings'))
    this.dark = JSON.parse(localStorage.getItem('settings'));
    
    // this.dark = localStorage.getItem("settings")
    // console.log("settings",dark)
  }
   
}
</script>
<style >
.red{
  background: red;
   color:white;
}
.green{
  background: green;
   color:white;
}
.q-header{

     margin: 20px;
    /* background: rgb(255, 255, 255) none repeat scroll 0% 0%; */
    clear: both;
     display: flex;
    align-items: center;
   justify-content: space-between;
   border-radius: .5rem;
   box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);

}
.q-drawer  {
    /* background: #fff; */
   
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 265px;
    top: 0;
   display: flex;
  
    flex-direction: column;
    
    /* box-shadow: 0 0 15px 0 rgba(0,0,0,.05); */
   
    transition: all .25s ease;
   
}

.q-router-link--exact-active{

box-shadow: 0 0 10px 1px #7367f0;
border-radius: 4px;
padding: 10px 15px;
}

.q-item.q-router-link--active, .q-item--active {
    color: white;
    margin: 10px;
    background: linear-gradient(118deg,rgba(115,103,240,1),rgba(115,103,240,.7));
}
.q-item.q-router-link--active, .q-item--active:hover{
    background: linear-gradient(118deg,rgba(115,103,240,1),rgba(115,103,240,.7));
}
.q-layout__section--marginal {
    color: #928a8a;
}
/* icon hide */
@media only screen and (max-width: 992px)  {
  .hide{
    display: none;
  }
}
/* profile name hide */
@media only screen and (max-width: 575px)  {
  .hidetxt{
    display: none;
  }
}
/* reponsive header */
@media only screen and (min-width: 1024px)  {
  .q-header{
    /* margin-left: 0!important; */
  }
  
}
@media only screen and (max-width: 1024px)  {
 
  .router-content{
    margin-left: 20px!important;
  }
}
@media only screen and (min-width: 433px)  {
 
  .header-item-padding{
   padding: 8px 8px!important;
  }
  .profile-pos{
    margin-left: 8px!important;
    margin-right: 8px!important;
  }
  
}
@media only screen and (max-width: 433px)  {
 
  .q-toolbar__title {
   
    padding: 0px!important;
}
}

/* logo section design */
.logotextpos{
 padding: 20px 19px 16px 23px;
  
}
.logotxt{
  font-size: 22px;
font-weight: 600;
}
/* router view box design */
.router-view{
  padding: 2.2rem;
}
.router-content{
  margin-top: 2rem;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left:20px;
}

/* body basic design */
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    text-transform: none;
    text-decoration: none;
}
/* hover effect */
.q-item--active:hover{
background-color:none!important;
}
/* dropdown icon */
 .vs-dropdown--menu--after {
    right: 1.6rem !important;
}
 .vs-dropdown--menu--after {
    background: rgba(#7367f0,1) !important;
}
.vs-dropdown--menu--after {
    right: 10px;
}
.vs-dropdown--menu--after, .vs-dropdown-right--menu--after {
    position: absolute;
    width: 10px;
    height: 10px;
    display: block;
    background: #fff;
    -webkit-transform: rotate(45deg) translate(-7px);
    transform: rotate(45deg) translate(-7px);
    border-top: 1px solid rgba(0,0,0,.1);
    border-left: 1px solid rgba(0,0,0,.1);
    z-index: 10;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
@media screen (max-width: ){
  .hide{
    display: none;
  }
}
.darkcss{
  background: #1D1D1D;
  color:white;
}
.lightcss{
  background: white;
  color:#1D1D1D;
}
.redbtn
{
   background: teal;
  color:white;
}
.q-dialog__inner > div{
overflow:hidden;
},
.q-dialog__inner--minimized {
    padding: 0px!important;
       
}
.red { background: red}
.blue { background: blue}
</style>
