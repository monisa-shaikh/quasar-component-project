<template>
  <div id="q-app">
        <q-ajax-bar ref="bar" size="6px" color="primary" :delay="delay" />
    <router-view v-on:startAjaxBar="onStartAjaxBar" v-on:stopAjaxBar="onStopAjaxBar" />
  </div>
</template>
<script>
export default {
  name: 'App',
   data: () => {
    return {
      delay: 0,
    }
  },
  methods: {
     onStartAjaxBar () {
      this.$refs.bar.start()
    },
    onStopAjaxBar () {
      this.$refs.bar.stop()
    }
  },
   mounted () {
          console.log('App mounted!');
    if (localStorage.getItem('settings'))
    this.dark = JSON.parse(localStorage.getItem('settings'));
    else
    this.$q.dark.set(false);
   },
//  watch: {
//     '$q.dark.isActive' (val) {
//       console.log(val ? 'On dark mode' : 'On light mode')
//     }},
  created(){
    
    // this.$q.dark.set(false)
    //  let settings= this.$q.localStorage.getItem('settings');
    //   console.log("settings",settings);
  //     if(settings)
  //     {
  //        this.$q.dark.set(true)
  //        console.log("true");
  //     }
  //  else{
  //    this.$q.dark.set(false)
  //    console.log("false");
  //  }
  }
}
</script>
