<template>
  <q-page>
  
    <!-- first card for Basic -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Basic</div>
       
        </q-card-section>

        <q-card-section>
          <!-- code for Basic-->
             <div class="q-pa-md row items-start q-gutter-md">
                <q-color v-model="hex" class="my-picker" />
                <q-color v-model="hexa" class="my-picker" />
                <q-color v-model="rgb" class="my-picker" />
                <q-color v-model="rgba" class="my-picker" />
            </div>
          <!-- End code for Basic -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Basic-->

  

    <!-- Second card for Input-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Input</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Input -->
           <div class="q-pa-md">
            <div class="q-gutter-md row items-start">
            <q-input
                filled
                v-model="color"
                class="my-input"
            >
                <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-color v-model="color" />
                    </q-popup-proxy>
                </q-icon>
                </template>
            </q-input>

            <q-input
                filled
                v-model="secondColor"
                :rules="['anyColor']"
                hint="With validation"
                class="my-input"
            >
                <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-color v-model="secondColor" />
                    </q-popup-proxy>
                </q-icon>
                </template>
            </q-input>
            </div>
        </div>
          <!-- End Code for Input-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card for Input -->

    <!-- <h5 class="text-blue-5 q-mb-sm">With icon</h5> -->

    <!-- third card for No header/footer-->

    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">No header/footer</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for No header/footer -->
            <div class="q-pa-md row items-start q-gutter-md">
                <q-color v-model="hex" no-header class="my-picker" />
                <q-color v-model="hex" no-footer class="my-picker" />
                <q-color v-model="hex" no-header no-footer class="my-picker" />
            </div>
          <!-- End Code for No header/footer-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End third for No header/footer -->


    <!-- fourth card Custom default view-->
    
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Custom default view</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Custom default view-->
            <div class="q-pa-md">
            <q-badge color="grey-3" text-color="black" class="q-mb-sm">
            {{ hex }}
            </q-badge>

            <q-color
            v-model="hex"
            no-header
            no-footer
            default-view="palette"
            class="my-picker"
            />
        </div>
          <!-- End Code for Custom default view-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End fourth Custom default view -->



    <!-- Five card for Custom palette-->
       <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Custom palette</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Custom palette-->
            <div class="q-pa-md">
            <q-badge color="grey-3" text-color="black" class="q-mb-sm">
            {{ hex }}
            </q-badge>

            <q-color
            v-model="hex"
            default-view="palette"
            :palette="[
                '#019A9D', '#D9B801', '#E8045A', '#B2028A',
                '#2A0449', '#019A9D'
            ]"
            class="my-picker"
            />
        </div>
          <!-- End Code for Custom palette-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Five card for Custom palette-->

    <!-- six card for Dark version -->
      <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Dark version</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Dark version-->
            <div class="q-pa-md">
                <div class=" row items-start q-gutter-md">
                <q-color v-model="hex" dark class="my-picker" />
                <q-color v-model="hexa" dark class="my-picker" />
                <q-color v-model="rgb" dark class="my-picker" />
                <q-color v-model="rgba" dark class="my-picker" />
                </div>
            </div>
          <!-- End Code for Dark version-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End six card for Dark version-->


    <!-- seven card for Default value-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Default value</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Default value-->
             <div class="q-pa-md">
                <q-color
                v-model="nullModel"
                default-value="#285de0"
                style="max-width: 250px"
                />
            </div>
          <!-- End Code for Default value-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seven card for Default value--------------- -->


        <!-- Eight card for Lazy model-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Lazy model</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Lazy model-->
            <div class="q-pa-md">
            <q-badge color="grey-3" text-color="black" class="q-mb-sm">
            {{ hex }}
            </q-badge>

            <q-color
            :value="hex"
            @change="val => { hex = val }"
            style="max-width: 250px"
            />
        </div>
          <!-- End Code for Lazy model-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Eight card for Lazy model--------------- -->


    
        <!-- Nine card for Disable and readonly-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Disable and readonly</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Disable and readonly-->
                <div class="q-pa-md">
                <div class="row items-start q-gutter-md">
                <q-color
                    v-model="color"
                    disable
                    class="my-picker"
                />

                <q-color
                    v-model="color"
                    readonly
                    class="my-picker"
                />
                </div>
            </div>
          <!-- End Code for Disable and readonly-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Nine card for Disable and readonly--------------- -->



    
    
        <!----------- Ten card for Native form-------------->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Native form</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Native form-->
         <div class="q-pa-md">
                <q-form @submit="onSubmit" class="q-gutter-md">
                <q-color
                    name="accent_color"
                    v-model="color"
                    style="width: 200px; max-width: 100%;"
                />

                <div>
                    <q-btn label="Submit" type="submit" color="primary"/>
                </div>
                </q-form>

                <q-card flat bordered class="q-mt-md bg-grey-2" v-if="submitResult.length > 0">
                <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
                <q-separator />
                <q-card-section class="row q-gutter-sm items-center">
                    <div
                    v-for="(item, index) in submitResult"
                    :key="index"
                    class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
                    >{{ item.name }} = {{ item.value }}</div>
                </q-card-section>
                </q-card>
            </div>
          <!-- End Code for Native form-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End Ten card for Native form--------------- -->



  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isshowprop: true,
       hex: '#FF00FF',
      hexa: '#FF00FFCC',
      rgb: 'rgb(0,0,0)',
      rgba: 'rgba(255,0,255,0.8)',
       color: '#FF00FF',
      secondColor: '#027be3',
      nullModel: null,
      color: '#f66363',
      submitResult: []
 


      
    };
  },
  methods: {
    closefun() {
      this.isshowprop = false;
    
  },
    onSubmit (evt) {
      const formData = new FormData(evt.target)
      const submitResult = []
      for (const [ name, value ] of formData.entries()) {
        submitResult.push({
          name,
          value
        })
      }
      this.submitResult = submitResult
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}
.my-picker .my-input{
  max-width: 250px;
}
</style>