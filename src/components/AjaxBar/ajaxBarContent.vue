<template>
  <div class="row items-start ">
            
            <q-card class="my-card text-gray" v-if="isshowprop">
                <q-card-section class="row">
                    <div class="text-h6">Ajax Bar</div>
                <q-space/>
                        <q-btn 
                        v-close-popup
                        flat
                        dense 
                        round
                        icon="close" @click="closefun"/>
                    
                </q-card-section>

                <q-card-section>
                    <!-- ajax bar -->
                    <q-ajax-bar ref="bar" position="bottom" color="accent" size="10px" skip-hijack />
                    <p>The QAjaxBar component captures Ajax calls automatically (unless told not to).</p>
                    <p> The example below triggers events manually for demonstrating purposes only. This one is set to appear at bottom (multiple positions available!) of the page, with a 10px size (default is different) and uses a custom color.</p>
                    <!-- end ajax bar -->
                <q-btn color="primary" label="Trigger" @click="trigger" class="center"></q-btn>
                </q-card-section>

                <q-separator dark />

            
            </q-card>
      </div>
</template>

<script>
export default {
data(){
        return{
            isshowprop:true
        }
    },
    methods: {
        // we manually trigger it (this is not needed if we
        // don't skip Ajax calls hijacking)
        trigger() {
            const bar = this.$refs.bar

            bar.start()

            this.timer = setTimeout(() => {
                if (this.$refs.bar) {
                    this.$refs.bar.stop()
                }
            }, Math.random() * 3000 + 1000)
        },
        closefun(){
             this.isshowprop=false
            
        },
        onItemClick () {
      // console.log('Clicked on an Item')
    }
    }
}
</script>

<style>

</style>