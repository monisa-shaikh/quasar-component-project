<template>
  <div>
      
 <q-header  v-model="toolbar" v-if="redbtn" class="redbtn">
     
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

    <q-header :class="(dark)?'darkcss':'lightcss'" v-model="toolbar" v-else> 
     
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
          <!--icon list with tool tip  -->
            <!-- <div class=" q-gutter-md hide">
                 <q-icon name="check_box"><q-tooltip>Todo</q-tooltip></q-icon>
                 <q-icon name="chat_bubble" ><q-tooltip>Chat</q-tooltip></q-icon>
                 <q-icon name="mail" ><q-tooltip>Email</q-tooltip></q-icon>
                 <q-icon name="calendar_today" ><q-tooltip>Calender</q-tooltip></q-icon>
                 <q-icon name="local_grocery_store" ><q-tooltip>E-Commerce Shop</q-tooltip></q-icon>
                 <q-icon name="star_border" style="color:#ff9f43"></q-icon>
            </div> -->
           <!-- icon list end -->
        </q-toolbar-title>



    <!-- dropdown list -->
         <!-- <div class="header-item-padding" >
    <q-btn  dense  flat icon="folder"  label="English">
  
      
        <q-menu
          transition-show="scale"
          transition-hide="scale"
          :offset="[90,10]"
          
        >
          <div class="vs-dropdown--menu--after" style="top: 10px;"></div>
         <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar icon="folder" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>English</q-item-label>           
                </q-item-section>        
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar icon="assignment" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>French</q-item-label>           
                </q-item-section>   
              </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar icon="folder" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>German</q-item-label>           
                </q-item-section>   
              </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar icon="assignment" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Portuguese</q-item-label>           
                </q-item-section>   
              </q-item>
            </q-list>
        </q-menu>
      </q-btn>
    </div> -->
    <!-- dropdown list end -->

    <!-- search icon -->
   

      <div class="header-item-padding">
        <q-btn dense round flat  icon="search" @click="toolbarshow=!toolbarshow"/>   
       <!-- <q-icon name="search"  -->
      </div>
    <!-- end search icon -->

    <!-- add card  -->
    <!-- <div class="header-item-padding">
    
    <q-btn  dense round flat icon="local_grocery_store">
      <q-badge color="#7367f0" floating transparent>
        6
      </q-badge>
      
        <q-menu
          transition-show="scale"
          transition-hide="scale"
          :offset="[270,10]"
          
        >
          <div class="vs-dropdown--menu--after" style="top: 10px;"></div>
          <q-toolbar class="bg-primary text-white shadow-2">
            <q-toolbar-title>Contacts</q-toolbar-title>
          </q-toolbar>

          <q-list bordered>
            <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  {{ contact.letter }}
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ contact.name }}</q-item-label>
                <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="chat_bubble" color="green" />
              </q-item-section>
            </q-item>

            <q-separator />
          
          </q-list>
          
        </q-menu>
      </q-btn>
    </div> -->
    <!-- end add card -->

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
  </div>
</template>

<script>
export default {
 data () {
    return {
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
}
</script>
<style >
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
</style>
