<template>
  <q-page>
  
    <!-- first card for Determined state -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Determined state</div>
        
        </q-card-section>

        <q-card-section>
          <!-- code for Determined state-->
           <div class="flex flex-center">
            <q-circular-progress
            :value="value"
            size="50px"
            color="orange"
            class="q-ma-md"
            />

            <q-circular-progress
            :value="value"
            size="90px"
            :thickness="0.2"
            color="orange"
            center-color="grey-8"
            track-color="transparent"
            class="q-ma-md"
            />

            <q-circular-progress
            :value="value"
            size="45px"
            :thickness="1"
            color="grey-8"
            track-color="orange"
            class="q-ma-md"
            />

            <q-circular-progress
            :value="value"
            size="50px"
            :thickness="0.22"
            color="orange"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            :value="value"
            size="75px"
            :thickness="0.6"
            color="orange"
            center-color="grey-8"
            class="q-ma-md"
            />

            <q-circular-progress
            :value="value"
            size="40px"
            :thickness="0.4"
            color="orange"
            track-color="grey-3"
            center-color="grey-8"
            class="q-ma-md"
            />
        </div>
          <!-- End code for Determined state -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Determined state-->

  

    <!-- Second card for Determinate and reverse-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Determinate and reverse</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Determinate and reverse -->
          <div class="q-pa-md flex flex-center">
            <q-circular-progress
            reverse
            :value="value"
            size="50px"
            color="light-blue"
            class="q-ma-md"
            />

            <q-circular-progress
            reverse
            :value="value"
            size="90px"
            :thickness="0.2"
            color="light-blue"
            center-color="grey-9"
            track-color="transparent"
            class="q-ma-md"
            />

            <q-circular-progress
            reverse
            :value="value"
            size="45px"
            :thickness="1"
            color="grey-9"
            track-color="light-blue"
            class="q-ma-md"
            />

            <q-circular-progress
            reverse
            :value="value"
            size="50px"
            :thickness="0.22"
            color="light-blue"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            reverse
            :value="value"
            size="75px"
            :thickness="0.6"
            font-size="50px"
            color="light-blue"
            center-color="grey-9"
            class="q-ma-md"
            />

            <q-circular-progress
            reverse
            :value="value"
            size="40px"
            :thickness="0.4"
            color="light-blue"
            track-color="grey-3"
            center-color="grey-9"
            class="q-ma-md"
            />
        </div>
          <!-- End Code for Determinate and reverse-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card for Determinate and reverse -->

    <!-- <h5 class="text-blue-5 q-mb-sm">With icon</h5> -->

    <!-- third card for Offset angle-->

    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Offset angle</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Offset angle -->
             <div class="q-pa-md flex flex-center">
            <q-circular-progress
            :value="value"
            size="50px"
            :thickness="0.22"
            color="purple"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            :angle="90"
            :value="value"
            size="50px"
            :thickness="0.22"
            color="purple"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            :angle="180"
            :value="value"
            size="50px"
            :thickness="0.22"
            color="purple"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            :angle="270"
            :value="value"
            size="50px"
            :thickness="0.22"
            color="purple"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            :angle="52"
            :value="value"
            size="50px"
            :thickness="0.22"
            color="purple"
            track-color="grey-3"
            class="q-ma-md"
            />
        </div>
          <!-- End Code for Offset angle-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End third for Offset angle -->


    <!-- fourth card Custom min/max (same model)-->
    
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Custom min/max (same model)</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Custom min/max (same model)-->
        <div class="q-pa-md flex flex-center">
            <q-circular-progress
            :min="40"
            :max="70"
            :value="value"
            size="50px"
            :thickness="0.22"
            color="teal"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            :min="55"
            :max="90"
            :value="value"
            size="50px"
            :thickness="0.22"
            color="teal"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            :min="40"
            :max="110"
            :value="value"
            size="50px"
            :thickness="0.22"
            color="teal"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            :min="20"
            :max="70"
            :value="value"
            size="50px"
            :thickness="0.22"
            color="teal"
            track-color="grey-3"
            class="q-ma-md"
            />

            <q-circular-progress
            :value="value"
            size="50px"
            :thickness="0.22"
            color="teal"
            track-color="grey-3"
            class="q-ma-md"
            />
        </div>
          <!-- End Code for Custom min/max (same model)-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End fourth Custom min/max (same model) -->



    <!-- Five card for Show value-->
       <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Show value</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Show value-->
        <div class="q-pa-md flex flex-center">
            <q-circular-progress
            show-value
            class="text-light-blue q-ma-md"
            :value="value"
            size="50px"
            color="light-blue"
            />

            <q-circular-progress
            show-value
            class="text-white q-ma-md"
            :value="value"
            size="90px"
            :thickness="0.2"
            color="orange"
            center-color="grey-8"
            track-color="transparent"
            >
            <q-icon name="volume_up" />
            </q-circular-progress>

            <q-circular-progress
            show-value
            font-size="12px"
            :value="value"
            size="50px"
            :thickness="0.22"
            color="teal"
            track-color="grey-3"
            class="q-ma-md"
            >
            {{ value }}%
            </q-circular-progress>

            <q-circular-progress
            show-value
            font-size="16px"
            class="text-red q-ma-md"
            :value="value"
            size="60px"
            :thickness="0.05"
            color="red"
            track-color="grey-3"
            >
            <q-icon name="volume_up" class="q-mr-xs" />
            {{ value }}
            </q-circular-progress>

            <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="value"
            size="80px"
            :thickness="0.25"
            color="primary"
            track-color="grey-3"
            >
            <q-avatar size="60px">
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            </q-circular-progress>
        </div>
          <!-- End Code for Show value-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Five card for Show value-->

    <!-- six card for Clickable -->
      <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Clickable</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Indeterminate state-->
       <div class="q-pa-md flex flex-center">
        <q-circular-progress
        indeterminate
        size="50px"
        color="lime"
        class="q-ma-md"
        />

        <q-circular-progress
        indeterminate
        size="90px"
        :thickness="0.2"
        color="lime"
        center-color="grey-8"
        track-color="transparent"
        class="q-ma-md"
        />

        <q-circular-progress
        indeterminate
        size="45px"
        :thickness="1"
        color="grey-8"
        track-color="lime"
        class="q-ma-md"
        />

        <q-circular-progress
        indeterminate
        size="50px"
        :thickness="0.22"
        color="lime"
        track-color="grey-3"
        class="q-ma-md"
        />

        <q-circular-progress
        indeterminate
        size="75px"
        :thickness="0.6"
        color="lime"
        center-color="grey-8"
        class="q-ma-md"
        />

        <q-circular-progress
        indeterminate
        size="40px"
        :thickness="0.4"
        font-size="50px"
        color="lime"
        track-color="grey-3"
        center-color="grey-8"
        class="q-ma-md"
        />
    </div>
          <!-- End Code for Indeterminate state-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End six card for Indeterminate state-->


    <!-- seven card for Standard sizes -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Standard sizes</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Standard sizes-->
            <div class="q-pa-md flex flex-center">
            <q-circular-progress
            v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
            :key="size"
            :size="size"
            :value="value"
            color="orange"
            class="q-ma-md"
            />
        </div>
          <!-- End Code for Standard sizes-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seven card for Standard sizes--------------- -->

 
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isshowprop: true,
      value: 71
      
    };
  },
  methods: {
    closefun() {
      this.isshowprop = false;
    
  }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}

</style>