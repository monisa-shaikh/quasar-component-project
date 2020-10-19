<template>
  <q-page>
  
    <!-- first card for Basic cards -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Basic cards</div>
       
        </q-card-section>

        <q-card-section>
          <!-- code for Basic cards-->
            <div class="q-pa-md row justify-center">
                <div style="width: 100%; max-width: 400px">
                <q-chat-message
                    :text="['hey, how are you?']"
                    sent
                />
                <q-chat-message
                    :text="['doing fine, how r you?']"
                />
                </div>
            </div>
          <!-- End code for Basic cards -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Basic cards-->

  

    <!-- Second card for Name -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Name</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code forName -->
         <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
            <q-chat-message
                name="me"
                :text="['hey, how are you?']"
                sent
            />
            <q-chat-message
                name="Jane"
                :text="['doing fine, how r you?']"
            />
            </div>
        </div>
          <!-- End Code forName-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card forName -->

    <!-- <h5 class="text-blue-5 q-mb-sm">With icon</h5> -->

    <!-- third card for Avatar-->

    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Avatar</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Avatar -->
            <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
            <q-chat-message
                name="me"
                avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                :text="['hey, how are you?']"
                sent
            />
            <q-chat-message
                name="Jane"
                avatar="https://cdn.quasar.dev/img/avatar2.jpg"
                :text="['doing fine, how r you?']"
            />
            </div>
        </div>
          <!-- End Code for Avatar-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End third for Avatar -->


    <!-- fourth card Stamp-->
    
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Stamp</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Stamp-->
            <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
            <q-chat-message
                name="me"
                avatar="https://cdn.quasar.dev/img/avatar4.jpg"
                :text="['hey, how are you?']"
                sent
                stamp="7 minutes ago"
            />
            <q-chat-message
                name="Jane"
                avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                :text="[`doing fine, how r you?`]"
                stamp="4 minutes ago"
            />
            </div>
        </div>
          <!-- End Code for Stamp-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End fourth Stamp -->



    <!-- Five card for Label-->
       <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Label</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Label-->
            <div class="q-pa-md row justify-center">
                <div style="width: 100%; max-width: 400px">
                <q-chat-message
                    label="Sunday, 19th"
                />

                <q-chat-message
                    name="me"
                    avatar="https://cdn.quasar.dev/img/avatar4.jpg"
                    :text="['hey, how are you?']"
                    sent
                    stamp="7 minutes ago"
                />
                <q-chat-message
                    name="Jane"
                    avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                    :text="['doing fine, how r you?']"
                    stamp="4 minutes ago"
                />
                </div>
            </div>
          <!-- End Code for Label-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Five card for Label-->

    <!-- six card for Text and background color -->
      <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Text and background color</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Text and background color-->
                <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
            <q-chat-message
                name="me"
                avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                :text="['hey, how are you?']"
                stamp="7 minutes ago"
                sent
                bg-color="amber-7"
            />
            <q-chat-message
                name="Jane"
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="['doing fine, how r you?']"
                stamp="4 minutes ago"
                text-color="white"
                bg-color="primary"
            />
            </div>
        </div>
          <!-- End Code forText and background color-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End six card for Text and background color-->


    <!-- seven card for Size -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Size</div>
       
        </q-card-section>

        <q-card-section>
          <!-- Code for Size-->
            <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
            <q-chat-message
                name="me"
                avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                :text="['hey, how are you?']"
                stamp="7 minutes ago"
                sent
                bg-color="amber-7"
            />
            <q-chat-message
                name="Jane"
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="[
                'doing fine, how r you?',
                'I just feel like typing a really, really, REALLY long message to annoy you...'
                ]"
                size="6"
                stamp="4 minutes ago"
                text-color="white"
                bg-color="primary"
            />
            <q-chat-message
                name="Jane"
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="['Did it work?']"
                stamp="1 minutes ago"
                size="8"
                text-color="white"
                bg-color="primary"
            />
            </div>
        </div>
          <!-- End Code for Size-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seven card for Size--------------- -->

 
    <!-- ---------eight card for Default slot----------------- -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Default slot</div>
       
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Default slot----------------->
            <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
            <q-chat-message
                name="me"
                avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                stamp="7 minutes ago"
                :text="['Hey there!']"
                sent
                text-color="white"
                bg-color="primary"
            >
                Have you seen Quasar?
                <img src="https://cdn.quasar.dev/img/discord-omq.png" class="my-emoticon">
            </q-chat-message>

            <q-chat-message
                name="Jane"
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                bg-color="amber"
            >
                <q-spinner-dots size="2rem" />
            </q-chat-message>
            </div>
        </div>
          <!-- ---------------End Code for Default slot------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End eight card forImage slides-------------------- -->

        <!-- ---------nine card for Avatar slot------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Avatar slot</div>
       
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Avatar slot------------------>
                <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
            <q-chat-message
                name="me"
                stamp="7 minutes ago"
                :text="['Have you seen Quasar?']"
                sent
                text-color="white"
                bg-color="primary"
            >
                <template v-slot:avatar>
                <img
                    class="q-message-avatar q-message-avatar--sent"
                    src="https://cdn.quasar.dev/img/avatar4.jpg"
                >
                </template>
            </q-chat-message>

            <q-chat-message
                name="Jane"
                :text="['Already building an app with it..']"
                bg-color="amber"
            >
                <template v-slot:avatar>
                <img
                    class="q-message-avatar q-message-avatar--received"
                    src="https://cdn.quasar.dev/img/avatar2.jpg"
                >
                </template>

                <q-spinner-dots size="2rem" />
            </q-chat-message>
            </div>
        </div>
          <!-- ---------------End Code for Avatar slot-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End nine card for Avatar slot-------------------- -->

   <!-- ---------ten card for Sanitized content------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Captions</div>
       
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Sanitized content------------------>
                <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
            <q-chat-message
                name="<span class='text-positive'>Trusted Source</span>"
                avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                :text="['hey, how are <strong>you</strong>?']"
                stamp="7 minutes ago"
                sent
                bg-color="amber-7"
            />
            <q-chat-message
                name="<span class='text-negative'>Jane (untrusted text but trusted name)</span>"
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="[
                'doing fine, how r you?',
                'I just feel like typing a really, really, <strong>REALLY</strong> long message to annoy you...'
                ]"
                text-sanitize
                size="6"
                stamp="4 minutes ago"
                text-color="white"
                bg-color="primary"
            />
            <q-chat-message
                name="<span class='text-negative'>Jao (untrusted)</span>"
                name-sanitize
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="['<strong>Did it work?</strong>']"
                text-sanitize
                stamp="1 minutes ago"
                size="8"
                text-color="white"
                bg-color="primary"
            />
            </div>
        </div>
          <!-- ---------------End Code for Sanitized content-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End ten card for Sanitized content-------------------- -->
 
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isshowprop: true,
      stars: 4,
      tab: "one",
      slide: "style",
      slide: 'first',
      slide: 1,
      expanded: false,
      controlType: "flat",
      navPos: "bottom",
        padding: true,
      vertical: false,
      autoplay1: false,
      arrows: true,
      autoplay: true,
      navigation: true,
        fullscreen: false,
      navigationPositions: [
        { value: "top", label: "top" },
        { value: "right", label: "right" },
        { value: "bottom", label: "bottom (default)" },
        { value: "left", label: "left" },
      ],
      controlTypeOptions: [
        { value: "regular", label: "regular" },
        { value: "unelevated", label: "unelevated" },
        { value: "flat", label: "flat (default)" },
        { value: "outline", label: "outline" },
        { value: "push", label: "push" },
      ],
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    closefun() {
      this.isshowprop = false;
    },
  },

  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}

  .custom-caption{
  
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
 .my-emoticon{ 
  vertical-align: middle;
  height: 2em;
  width: 2em;
}
</style>