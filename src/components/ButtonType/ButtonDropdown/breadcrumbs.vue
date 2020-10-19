<template>
   <div class="router-header flex flex-wrap items-center">
          <!-- heading breadcrum -->
          <div>
                <h2 class="headingtxt">Button Dropdown</h2>
        
          </div>
         <!-- End heading breadcrum -->

          <!-- seprate line -->
        <q-separator vertical inset class="q-ml-sm hidden" />

        <!-- breadcrumbs list -->
        <q-breadcrumbs class="text-brown hiddensection" style="margin-left: 1rem !important;">
        <template v-slot:separator>
            <q-icon
            size="1.5em"
            name="double_arrow"
            color="#626262"
            />
        </template>

        <q-breadcrumbs-el  icon="home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Button" />
        <q-breadcrumbs-el label="Button Dropdown" color="gray"/>
        </q-breadcrumbs>
         <!--End breadcrumbs list -->

        <q-space />
         <!-- setting button drop down -->
     
            <div class="header-item-padding">
                <q-btn  dense round flat icon="settings" class="primary" style="background-color: #7367f0;color: white;padding: 2px;">
            
                    <q-menu 
                    transition-show="scale"
                    transition-hide="scale">


                        <q-list>
                    <q-item clickable v-close-popup @click="onItemClick">
                    
                    <q-item-section>
                        <q-item-label class="row"><span class="q-pr-sm"><q-icon name="person" /></span>Profile</q-item-label>
                    </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                        <q-item-label class="row"><span class="q-pr-sm"><q-icon name="check_box" /></span>Tasks</q-item-label>
                    </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                        <q-item-label class="row"><span class="q-pr-sm"><q-icon name="mail" /></span>Inbox</q-item-label>
                    </q-item-section>
                    </q-item>
                </q-list>
                    </q-menu>
                </q-btn>
                </div>


         <!-- setting button drop down -->
      </div>
</template>

<script>
export default {
methods:{
     onItemClick () {
      // console.log('Clicked on an Item')
    }
}
}
</script>

<style>

</style>