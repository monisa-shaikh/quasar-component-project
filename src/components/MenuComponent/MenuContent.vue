<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Size & colors</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!-- first card for Design Overview -->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Basic</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <basic />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">idea for content</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <ideaforcontent />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

             
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End first card Row--------------------------------------->

    <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Captions</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Toggle through v-model</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <togglethroughvmodel />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                  <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">menus in menus</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <submenuComponent/>
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

                
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

     <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6"></div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Sizing</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <sizing />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Style</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                      <template>
                    <div class="">
                        <div class="q-gutter-md row">

                        <q-btn color="primary" label="Content Class Menu">
                            <q-menu content-class="bg-purple text-white" auto-close>
                            <q-list style="min-width: 100px">
                                <q-item clickable>
                                <q-item-section>New tab</q-item-section>
                                </q-item>
                                <q-item clickable>
                                <q-item-section>New incognito tab</q-item-section>
                                </q-item>
                                <q-separator dark />
                                <q-item clickable>
                                <q-item-section>Recent tabs</q-item-section>
                                </q-item>
                                <q-item clickable>
                                <q-item-section>History</q-item-section>
                                </q-item>
                                <q-item clickable>
                                <q-item-section>Downloads</q-item-section>
                                </q-item>
                                <q-separator dark />
                                <q-item clickable>
                                <q-item-section>Settings</q-item-section>
                                </q-item>
                                <q-separator dark />
                                <q-item clickable>
                                <q-item-section>Help &amp; Feedback</q-item-section>
                                </q-item>
                            </q-list>
                            </q-menu>
                        </q-btn>

                        <q-btn color="primary" label="Content Style Menu">
                            <q-menu :content-style="{ backgroundColor: '#eee', color: 'blue'}">
                            <q-list style="min-width: 100px">
                                <q-item clickable>
                                <q-item-section>New tab</q-item-section>
                                </q-item>
                                <q-item clickable>
                                <q-item-section>New incognito tab</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable>
                                <q-item-section>Recent tabs</q-item-section>
                                </q-item>
                                <q-item clickable>
                                <q-item-section>History</q-item-section>
                                </q-item>
                                <q-item clickable>
                                <q-item-section>Downloads</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable>
                                <q-item-section>Settings</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable>
                                <q-item-section>Help &amp; Feedback</q-item-section>
                                </q-item>
                            </q-list>
                            </q-menu>
                        </q-btn>

                        </div>
                    </div>
                    </template>
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

            

                  
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

     <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6"></div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Context Menu</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                  
                        <div class="">
                            <q-img
                            src="https://cdn.quasar.dev/img/parallax1.jpg"
                            style="height: 100px"
                            >
                            <q-menu
                                touch-position
                                context-menu
                            >

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
                            </q-img>
                        </div>
                      
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->
                <!----------- First card for Clearable------------->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Persistent</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                  
                        <div class="">
                            <q-btn color="primary" label="Persistent Menu">
                            <q-menu persistent auto-close>
                                <q-list style="min-width: 100px">
                                <q-item clickable>
                                    <q-item-section>New tab</q-item-section>
                                </q-item>
                                <q-item clickable>
                                    <q-item-section>New incognito tab</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable>
                                    <q-item-section>Recent tabs</q-item-section>
                                </q-item>
                                <q-item clickable>
                                    <q-item-section>History</q-item-section>
                                </q-item>
                                <q-item clickable>
                                    <q-item-section>Downloads</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable>
                                    <q-item-section>Settings</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable>
                                    <q-item-section>Help &amp; Feedback</q-item-section>
                                </q-item>
                                </q-list>
                            </q-menu>
                            </q-btn>
                        </div>
                      
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End First card for Clearable---------------->

            

                  
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->



    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Transition examples</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!----------- First card for Clearable------------->

                        <!-- code for Clearable-->
                       
                            <div class="">
                                <div class="q-gutter-md row">

                                <q-btn color="primary" label="Flip Menu">
                                    <q-menu
                                    transition-show="flip-right"
                                    transition-hide="flip-left"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable>
                                        <q-item-section>Having fun</q-item-section>
                                        </q-item>
                                        <q-item clickable>
                                        <q-item-section>Crazy for transitions</q-item-section>
                                        </q-item>
                                        <q-separator />
                                        <q-item clickable>
                                        <q-item-section>Mind blown</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                <q-btn color="primary" label="Scale Menu">
                                    <q-menu
                                    transition-show="scale"
                                    transition-hide="scale"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable>
                                        <q-item-section>Having fun</q-item-section>
                                        </q-item>
                                        <q-item clickable>
                                        <q-item-section>Crazy for transitions</q-item-section>
                                        </q-item>
                                        <q-separator />
                                        <q-item clickable>
                                        <q-item-section>Mind blown</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                <q-btn color="primary" label="Jump Menu">
                                    <q-menu
                                    transition-show="jump-down"
                                    transition-hide="jump-up"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable>
                                        <q-item-section>Having fun</q-item-section>
                                        </q-item>
                                        <q-item clickable>
                                        <q-item-section>Crazy for transitions</q-item-section>
                                        </q-item>
                                        <q-separator />
                                        <q-item clickable>
                                        <q-item-section>Mind blown</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                <q-btn color="primary" label="Rotate Menu">
                                    <q-menu
                                    transition-show="rotate"
                                    transition-hide="rotate"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable>
                                        <q-item-section>Having fun</q-item-section>
                                        </q-item>
                                        <q-item clickable>
                                        <q-item-section>Crazy for transitions</q-item-section>
                                        </q-item>
                                        <q-separator />
                                        <q-item clickable>
                                        <q-item-section>Mind blown</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                </div>
                            </div>
                           
                        <!-- End code for Clearable-->

                  
                <!-- ----------------End First card for Clearable---------------->
                   
                  
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

    
     <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6"></div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                           <!----------- ------------->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Using target</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Clearable-->
                        <usingtarget />
                        <!-- End code for Clearable-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ----------------End---------------->

                        <!----------- ------------->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Position examples</div>

                    </q-card-section>

                    <q-card-section>

                       
                            <div class="">
                                <div class="q-gutter-md row">

                                <q-btn color="primary" label="Anchor/Self Menu">
                                    <q-menu
                                    anchor="top right"
                                    self="top left"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                        <q-item-section>anchor="top right"</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                        <q-item-section>self="top left"</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                <q-btn color="primary" label="Anchor/Self Menu">
                                    <q-menu
                                    anchor="center middle"
                                    self="center middle"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                        <q-item-section>anchor="center middle"</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                        <q-item-section>self="center middle"</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                <q-btn color="primary" label="Anchor/Self Menu">
                                    <q-menu
                                    anchor="bottom right"
                                    self="bottom left"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                        <q-item-section>anchor="bottom right"</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                        <q-item-section>self="bottom left"</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                <q-btn color="primary" label="Offset Menu">
                                    <q-menu
                                    :offset="[0, 20]"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                        <q-item-section>:offset="[0, 20]"</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                        <q-item-section>:offset="[0, 20]"</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                <q-btn color="primary" label="Offset Menu">
                                    <q-menu
                                    :offset="[50, 10]"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                        <q-item-section>:offset="[50, 10]"</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                        <q-item-section>:offset="[50, 10]"</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                <q-btn color="primary" label="Offset Menu">
                                    <q-menu
                                    :offset="[-50, 10]"
                                    >
                                    <q-list style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                        <q-item-section>:offset="[-50, 10]"</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                        <q-item-section>:offset="[-50, 10]"</q-item-section>
                                        </q-item>
                                    </q-list>
                                    </q-menu>
                                </q-btn>

                                </div>
                            </div>


                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- ---------------- ---------------->

            

                  
            </div>
            <!-- row div -->
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

</q-page>
</template>

<script>

import  basic  from  'components/MenuComponent/Basic.vue';
    import  ideaforcontent  from  'components/MenuComponent/Ideaforcontent.vue';
    import  togglethroughvmodel  from  'components/MenuComponent/Togglethroughvmodel.vue';
        import  submenuComponent  from  'components/MenuComponent/submenu.vue';
                import  sizing  from  'components/MenuComponent/Sizing.vue';
            import  usingtarget  from  'components/MenuComponent/Usingtarget.vue' ;    
         import  positionexamples  from  'components/MenuComponent/Positionexamples.vue' ;    
          
     
export default {
    data() {
        return {
            isshowprop: true,
        }
    },
    methods: {

        closefun() {
            this.isshowprop = false;
        }
    },
    components: {
    basic,
        ideaforcontent  ,
        togglethroughvmodel  ,
          submenuComponent ,
                    sizing  ,
               usingtarget ,     
         positionexamples ,     
          
     
       


    }
};
</script>

<style scoped>
.my-card {
    width: 100%;
}

.my-card1 {
    width: 100%;
    max-width: 470px;
}

.my-card2 {
    width: 100%;
    max-width: 380px;
}
</style>
