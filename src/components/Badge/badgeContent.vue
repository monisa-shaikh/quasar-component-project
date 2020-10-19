<template>
 <q-page>
     <!-- first card for basic -->
      <div class="row items-start ">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Basic</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- code for basic badge -->

                  <div class=" q-gutter-md">
                        <q-badge color="blue">
                        #4D96F2
                        </q-badge>

                        <q-badge color="orange" text-color="black" label="2" />

                        <q-badge color="purple">
                        <q-icon name="bluetooth" color="white" />
                        </q-badge>

                        <q-badge color="red">
                        12 <q-icon name="warning" color="white" class="q-ml-xs" />
                        </q-badge>

                        <div class="text-h6">
                        Badge <q-badge color="primary">v1.0.0+</q-badge>
                        </div>

                        <div>
                        Feature <q-badge color="primary">v1.0.0+</q-badge>
                        </div>

                        <q-item clickable v-ripple class="bg-grey-2">
                        <q-item-section avatar>
                            <q-avatar rounded>
                            <img src="https://cdn.quasar.dev/img/chaosmonkey.png">
                            </q-avatar>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>
                            Ganglia
                            </q-item-label>
                            <q-item-label caption>
                            <q-badge color="yellow-6" text-color="black">
                                3
                                <q-icon
                                name="warning"
                                size="14px"
                                class="q-ml-xs"
                                />
                            </q-badge>
                            </q-item-label>
                        </q-item-section>

                        <q-item-section side>
                            <span>2 min ago</span>
                        </q-item-section>
                        </q-item>
                    </div>
                 <!-- End code for basic badge -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
      <!-- End first card for basic badge-->

       <!-- Second card for Aligned -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Aligned</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Aligned -->
                  <div class=" q-gutter-sm">
                        <div class="text-h4">
                        Title
                        <q-badge align="top">cli v1.0.0</q-badge>
                        </div>

                        <q-separator />

                        <div class="text-h4">
                        Title
                        <q-badge align="middle">app v1.0.0</q-badge>
                        </div>

                        <q-separator />

                        <div class="text-h4">
                        Title
                        <q-badge align="bottom">docs v1.0.0</q-badge>
                        </div>
                    </div>
                 <!-- End Code for Aligned-->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Second card for Aligned -->

        <!-- third card for Floating -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Floating</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Floating -->
                  <div class=" q-gutter-sm">
                    <q-btn push color="white" text-color="primary" label="Unread Mails">
                    <q-badge color="orange" floating>22</q-badge>
                    </q-btn>

                    <q-btn dense color="purple" round icon="email" class="q-ml-md">
                    <q-badge color="red" floating>4</q-badge>
                    </q-btn>
                </div>
                 <!-- End Code for Floating  -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End third card for Floating  -->


       
        <!-- fourth card for transparent -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">transparent</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for transparent-->
                 <div class=" q-gutter-md">
                    <q-btn color="teal" size="sm" label="Unread Mails">
                    <q-badge color="orange" floating transparent>
                        ∞
                    </q-badge>
                    </q-btn>

                    <q-btn dense round flat icon="email">
                    <q-badge color="red" floating transparent>
                        4
                    </q-badge>
                    </q-btn>

                    <div class="text-h4">
                    Title
                    <q-badge transparent align="middle" color="orange">
                        app v1.0.0
                    </q-badge>
                    </div>
                </div>
                 <!-- End Code for transparent -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End fourth card for transparent -->


          <!-- Five card for Outline -->
        <div class="row items-start q-mt-md">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Outline</div>
              
                    
                </q-card-section>

                <q-card-section>
                 <!-- Code for Outline-->
                <div class=" q-gutter-md">
                    <q-badge outline color="primary" label="Outline" />
                    <q-badge outline color="orange" label="Outline" />
                    <q-badge outline color="secondary" label="Outline" />

                    <div class="text-h4">
                    Text
                    <q-badge outline align="middle" color="teal">
                        v1.0.0
                    </q-badge>
                    </div>
                </div>
                 <!-- End Code for Outline -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
       <!-- End Five card for Outline -->
 </q-page>
</template>

<script>
export default {
data(){
        return{
            isshowprop:true
        }
    },
    methods: {
      
        closefun(){
             this.isshowprop=false
            
        }
    }
}
</script>

<style>

</style>