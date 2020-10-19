<template>
    <div class="row items-start ">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Basic</div>
               
                </q-card-section>

                <q-card-section>
                 <!-- code for MacOS-style-->
                      <div class="q-gutter-sm">
                        <q-breadcrumbs>
                        <q-breadcrumbs-el label="Home" />
                        <q-breadcrumbs-el label="Components" />
                        <q-breadcrumbs-el label="Breadcrumbs" />
                        </q-breadcrumbs>

                        <q-breadcrumbs>
                        <q-breadcrumbs-el label="Home" icon="home" />
                        <q-breadcrumbs-el label="Components" icon="widgets" />
                        <q-breadcrumbs-el label="Breadcrumbs" />
                        </q-breadcrumbs>

                        <q-breadcrumbs class="text-grey">
                        <q-breadcrumbs-el icon="home" />
                        <q-breadcrumbs-el icon="widgets" />
                        <q-breadcrumbs-el icon="navigation" />
                        </q-breadcrumbs>
                    </div>
             
                 <!-- End code for MacOS-style -->
                </q-card-section>

                <q-separator dark />

            
            </q-card>
            
      </div>
</template>

<script>
export default {
data(){
        return{
            isshowprop:true,
        
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