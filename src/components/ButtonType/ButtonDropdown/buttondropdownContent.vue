<template>
 <q-page>


   <!-- -----------------------------------first card Row--------------------------------------->

      <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Design</div>
        
        </q-card-section>

        <q-card-section >
            <!-- row div -->
            <div class="row q-gutter-md">
        
             <!-- first card for Design Overview -->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Basic</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Design Overview--------->
                             <div class="">
                            <q-btn-dropdown color="primary" label="Dropdown Button">
                            <q-list>
                                <q-item clickable v-close-popup @click="onItemClick">
                                <q-item-section>
                                    <q-item-label>Photos</q-item-label>
                                </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup @click="onItemClick">
                                <q-item-section>
                                    <q-item-label>Videos</q-item-label>
                                </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup @click="onItemClick">
                                <q-item-section>
                                    <q-item-label>Articles</q-item-label>
                                </q-item-section>
                                </q-item>
                            </q-list>
                            </q-btn-dropdown>
                        </div>
                    <!--=====End code for Design Overview------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
                <!-- End first card for Design Overview-->

                 <!-- Second card for Decorators-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Various content</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Decorators-->
                       <div class="">
                            <q-btn-dropdown
                            class="glossy"
                            color="purple"
                            label="Account Settings"
                            >
                            <div class="row no-wrap q-pa-md">
                                <div class="column">
                                <div class="text-h6 q-mb-md">Settings</div>
                                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                                <q-toggle v-model="bluetooth" label="Bluetooth" />
                                </div>

                                <q-separator vertical inset class="q-mx-lg" />

                                <div class="column items-center">
                                <q-avatar size="72px">
                                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                </q-avatar>

                                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                                <q-btn
                                    color="primary"
                                    label="Logout"
                                    push
                                    size="sm"
                                    v-close-popup
                                />
                                </div>
                            </div>
                            </q-btn-dropdown>
                        </div>
                    <!-- End code for Decorators-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End Second card for Decorators-->

                <!-- third card for Coloring-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Split</div>
                   
                    </q-card-section>
                    
                    <q-card-section>
                    <!-- code for Coloring-->
                      <div class="">
                            <q-btn-dropdown
                            split
                            class="glossy"
                            color="teal"
                            label="Folders"
                            @click="onMainClick"
                            >
                            <q-list>
                                <q-item clickable v-close-popup @click="onItemClick">
                                <q-item-section avatar>
                                    <q-avatar icon="folder" color="primary" text-color="white" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Photos</q-item-label>
                                    <q-item-label caption>February 22, 2016</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-icon name="info" color="amber" />
                                </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup @click="onItemClick">
                                <q-item-section avatar>
                                    <q-avatar icon="assignment" color="secondary" text-color="white" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Vacation</q-item-label>
                                    <q-item-label caption>February 22, 2016</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-icon name="info" color="amber" />
                                </q-item-section>
                                </q-item>
                            </q-list>
                            </q-btn-dropdown>
                        </div>
                    <!-- End code for Coloring-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End third card for Coloring-->


                   <!-- first card for Design Overview -->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Custom button</div>
                   
                    </q-card-section>

                    <q-card-section>
                    <!----- code for Design Overview--------->
                             <div class="">
                                <q-btn-dropdown
                                split
                                color="orange"
                                push
                                glossy
                                no-caps
                                icon="folder"
                                label="Dropdown Button"
                                @click="onMainClick"
                                >
                                <q-list>
                                    <q-item clickable v-close-popup @click="onItemClick">
                                    <q-item-section avatar>
                                        <q-avatar icon="folder" color="primary" text-color="white" />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Photos</q-item-label>
                                        <q-item-label caption>February 22, 2016</q-item-label>
                                    </q-item-section>
                                    <q-item-section side>
                                        <q-icon name="info" color="amber" />
                                    </q-item-section>
                                    </q-item>

                                    <q-item clickable v-close-popup @click="onItemClick">
                                    <q-item-section avatar>
                                        <q-avatar icon="assignment" color="secondary" text-color="white" />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Vacation</q-item-label>
                                        <q-item-label caption>February 22, 2016</q-item-label>
                                    </q-item-section>
                                    <q-item-section side>
                                        <q-icon name="info" color="amber" />
                                    </q-item-section>
                                    </q-item>
                                </q-list>
                                </q-btn-dropdown>
                            </div>
                    <!--=====End code for Design Overview------ -->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
             
                <!-- End first card for Design Overview-->

                 <!-- Second card for Decorators-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Custom dropdown icon</div>
                    
                    </q-card-section>

                    <q-card-section>
                    <!-- code for Decorators-->
                       <div class="">
                        <q-btn-dropdown color="pink" label="Dropdown Button" dropdown-icon="change_history">
                        <q-list>
                            <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section>
                                <q-item-label>Photos</q-item-label>
                            </q-item-section>
                            </q-item>

                            <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section>
                                <q-item-label>Videos</q-item-label>
                            </q-item-section>
                            </q-item>

                            <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section>
                                <q-item-label>Articles</q-item-label>
                            </q-item-section>
                            </q-item>
                        </q-list>
                        </q-btn-dropdown>
                    </div>
                    <!-- End code for Decorators-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End Second card for Decorators-->

                <!-- third card for Coloring-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Label slot</div>
                   
                    </q-card-section>
                    
                    <q-card-section>
                    <!-- code for Coloring-->
                    <div class="">
                        <q-btn-dropdown
                        split
                        color="cyan"
                        push
                        no-caps
                        @click="onMainClick"
                        >
                        <template v-slot:label>
                            <div class="row items-center no-wrap">
                            <q-icon left name="map" />
                            <div class="text-center">
                                Custom<br>Content
                            </div>
                            </div>
                        </template>

                        <q-list>
                            <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section avatar>
                                <q-avatar icon="folder" color="primary" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Photos</q-item-label>
                                <q-item-label caption>February 22, 2016</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                <q-icon name="info" color="amber" />
                            </q-item-section>
                            </q-item>

                            <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section avatar>
                                <q-avatar icon="assignment" color="secondary" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Vacation</q-item-label>
                                <q-item-label caption>February 22, 2016</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                <q-icon name="info" color="amber" />
                            </q-item-section>
                            </q-item>
                        </q-list>
                        </q-btn-dropdown>
                    </div>
                    <!-- End code for Coloring-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End third card for Coloring-->


                  <!-- third card for Coloring-->
            
                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                    <div class="text-h6">Using v-model</div>
                   
                    </q-card-section>
                    
                    <q-card-section>
                    <!-- code for Coloring-->
                    <div class="">
                        <q-toggle v-model="menu" label="Menu state" />

                        <q-btn-dropdown
                        v-model="menu"
                        class="glossy q-ml-lg"
                        color="primary"
                        label="Dropdown"
                        >
                        <q-list>
                            <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section avatar>
                                <q-avatar icon="folder" color="primary" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Photos</q-item-label>
                                <q-item-label caption>February 22, 2016</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                <q-icon name="info" color="amber" />
                            </q-item-section>
                            </q-item>

                            <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section avatar>
                                <q-avatar icon="assignment" color="secondary" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Vacation</q-item-label>
                                <q-item-label caption>February 22, 2016</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                <q-icon name="info" color="amber" />
                            </q-item-section>
                            </q-item>
                        </q-list>
                        </q-btn-dropdown>
                    </div>
                    <!-- End code for Coloring-->

                    
                    </q-card-section>

                    <q-separator dark />
                </q-card>
          
                <!-- End third card for Coloring-->


          </div>
         <!-- row div -->
        </q-card-section>

        <q-separator dark />
      </q-card>
 


     <!-- ************third row************ -->

     <!-- ************ second row ************ -->

    
     <!-- first card for Disable -->
      <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Disable</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- code for Disable-->
              <div>
                <div class="row q-gutter-sm">
                <q-btn-dropdown
                    disable
                    class="glossy"
                    color="primary"
                    label="Default"
                >
                    <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section avatar>
                        <q-avatar icon="folder" color="primary" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                        <q-item-label>Photos</q-item-label>
                        <q-item-label caption>February 22, 2016</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                        <q-icon name="info" color="amber" />
                        </q-item-section>
                    </q-item>
                    </q-list>
                </q-btn-dropdown>

                <q-btn-dropdown
                    split
                    disable-main-btn
                    class="glossy"
                    color="primary"
                    label="Only main btn"
                >
                    <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section avatar>
                        <q-avatar icon="folder" color="primary" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                        <q-item-label>Photos</q-item-label>
                        <q-item-label caption>February 22, 2016</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                        <q-icon name="info" color="amber" />
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup>
                        <q-item-section avatar>
                        <q-avatar icon="assignment" color="secondary" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                        <q-item-label>Vacation</q-item-label>
                        <q-item-label caption>February 22, 2016</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                        <q-icon name="info" color="amber" />
                        </q-item-section>
                    </q-item>
                    </q-list>
                </q-btn-dropdown>

                <q-btn-dropdown
                    split
                    disable-dropdown
                    class="glossy"
                    color="primary"
                    label="Only dropdown"
                >
                    <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section avatar>
                        <q-avatar icon="folder" color="primary" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                        <q-item-label>Photos</q-item-label>
                        <q-item-label caption>February 22, 2016</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                        <q-icon name="info" color="amber" />
                        </q-item-section>
                    </q-item>
                    </q-list>
                </q-btn-dropdown>
                </div>
            </div>
                 <!-- End code for Disable -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
      <!-- End first card for Disable-->
    <q-space/>

    <p class="q-ma-md">The following example won’t work with UMD version (so in Codepen/jsFiddle too) because it relies on the existence of Vue Router.</p>
       <!-- Second card for Split and router link on main -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Split and router link on main</div>
              
                    
                </q-card-section>

                <q-card-section>
                     <!-- code for Split and router link on main-->
                     <div>
                        <q-btn-dropdown
                        split
                        to="/buttonDropdown"
                        color="teal"
                        rounded
                        label="Go to Docs Index"
                        >
                        <q-list>
                            <q-item clickable v-close-popup>
                            <q-item-section>
                                <q-item-label>Photos</q-item-label>
                            </q-item-section>
                            </q-item>

                            <q-item clickable v-close-popup>
                            <q-item-section>
                                <q-item-label>Videos</q-item-label>
                            </q-item-section>
                            </q-item>

                            <q-item clickable v-close-popup>
                            <q-item-section>
                                <q-item-label>Articles</q-item-label>
                            </q-item-section>
                            </q-item>
                        </q-list>
                        </q-btn-dropdown>
                    </div>
                 <!-- End Code for Split and router link on main-->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Second card for Split and router link on main -->




     <!-- End 3 row -->
 </q-page>
</template>

<script>

export default {
data(){
        return{
            isshowprop:true,
             mobileData: true,
            bluetooth: false,
            menu: false
        }
    },
    methods: {
      
        closefun(){
             this.isshowprop=false
            
        },
         onItemClick () {
      // console.log('Clicked on an Item')
    },
    onMainClick () {
      // console.log('Clicked on main button')
    }
    }
}
</script>

<style>
/* @media screen (max-width: 522px){
    .responsive{
        margin-left:0px!important;
    }
} */
</style>