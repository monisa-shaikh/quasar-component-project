<template>
  <q-page>
  
    <!-- first card for Basic cards -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Basic</div>
        
        </q-card-section>

        <q-card-section>
          <!-- code for Basic cards-->
            <div class="q-gutter-md">
            <div>
            <q-chip icon="event">Add to calendar</q-chip>
            <q-chip icon="bookmark">Bookmark</q-chip>
            <q-chip icon="alarm" label="Set alarm" />
            <q-chip class="glossy" icon="directions">Get directions</q-chip>
            </div>
            <div>
            <q-chip color="primary" text-color="white" icon="event">
                Add to calendar
            </q-chip>
            <q-chip color="teal" text-color="white" icon="bookmark">
                Bookmark
            </q-chip>
            <q-chip class="glossy" color="orange" text-color="white" icon-right="star">
                Star
            </q-chip>
            <q-chip color="red" text-color="white" icon="alarm" label="Set alarm" />
            <q-chip color="deep-orange" text-color="white" icon="directions">
                Get directions
            </q-chip>
            <q-chip>
                <q-avatar icon="bookmark" color="red" text-color="white" />
                Bookmark
            </q-chip>
            <q-chip>
                <q-avatar color="red" text-color="white">50</q-avatar>
                Emails
            </q-chip>
            <q-chip>
                <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                </q-avatar>
                John
            </q-chip>
            </div>
        </div>
          <!-- End code for Basic cards -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Basic cards-->

  

    <!-- Second card for Dense -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Dense</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Dense -->
          <div class="q-gutter-md">
            <div>
            <q-chip dense icon="event">Add to calendar</q-chip>
            <q-chip dense icon="bookmark">Bookmark</q-chip>
            <q-chip dense icon="alarm" label="Set alarm" />
            <q-chip dense icon="directions">Get directions</q-chip>
            </div>
            <div>
            <q-chip dense color="primary" text-color="white" icon="event">
                Add to calendar
            </q-chip>
            <q-chip dense color="teal" text-color="white" icon="bookmark">
                Bookmark
            </q-chip>
            <q-chip dense color="orange" text-color="white" icon-right="star">
                Star
            </q-chip>
            <q-chip dense color="red" text-color="white" icon="alarm" label="Set alarm" />
            <q-chip dense color="deep-orange" text-color="white" icon="directions">
                Get directions
            </q-chip>
            <q-chip dense>
                <q-avatar icon="bookmark" color="red" text-color="white" />
                Bookmark
            </q-chip>
            <q-chip dense>
                <q-avatar color="red" text-color="white">50</q-avatar>
                Emails
            </q-chip>
            <q-chip dense>
                <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar3.jpg">
                </q-avatar>
                Mary
            </q-chip>
            </div>
        </div>
          <!-- End Code for Dense-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card for Dense -->

    <!-- <h5 class="text-blue-5 q-mb-sm">With icon</h5> -->

    <!-- third card for Custom size-->

    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Custom size</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Avatar -->
            <div class="q-gutter-md">
                <div>
                <q-chip size="18px" icon="bookmark">
                    Bookmark
                </q-chip>
                </div>

                <div>
                <q-chip size="xs" icon="bookmark">
                    Bookmark
                </q-chip>

                <q-chip size="sm" icon="bookmark">
                    Bookmark
                </q-chip>

                <q-chip size="md" icon="bookmark">
                    Bookmark
                </q-chip>

                <q-chip size="lg" icon="bookmark">
                    Bookmark
                </q-chip>

                <q-chip size="xl" icon="bookmark">
                    Bookmark
                </q-chip>
                </div>

                <div>
                <q-chip dense size="xs" icon="bookmark">
                    Bookmark
                </q-chip>

                <q-chip dense size="sm" icon="bookmark">
                    Bookmark
                </q-chip>

                <q-chip dense size="md" icon="bookmark">
                    Bookmark
                </q-chip>

                <q-chip dense size="lg" icon="bookmark">
                    Bookmark
                </q-chip>

                <q-chip dense size="xl" icon="bookmark">
                    Bookmark
                </q-chip>
                </div>
            </div>
          <!-- End Code for Avatar-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End third for Avatar -->


    <!-- fourth card Square-->
    
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Square</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Square-->
            <div class="q-gutter-md">
                <div>
                <q-chip square icon="event">Add to calendar</q-chip>
                <q-chip class="glossy" square icon="bookmark">Bookmark</q-chip>
                <q-chip square icon="alarm" label="Set alarm" />
                <q-chip square icon="directions">Get directions</q-chip>
                </div>
                <div>
                <q-chip square color="primary" text-color="white" icon="event">
                    Add to calendar
                </q-chip>
                <q-chip class="glossy" square color="teal" text-color="white" icon="bookmark">
                    Bookmark
                </q-chip>
                <q-chip square color="orange" text-color="white" icon-right="star">
                    Star
                </q-chip>
                <q-chip square color="red" text-color="white" icon="alarm" label="Set alarm" />
                <q-chip square color="deep-orange" text-color="white" icon="directions">
                    Get directions
                </q-chip>
                <q-chip square>
                    <q-avatar icon="bookmark" color="red" text-color="white" />
                    Bookmark
                </q-chip>
                <q-chip square>
                    <q-avatar color="red" text-color="white">50</q-avatar>
                    Emails
                </q-chip>
                <q-chip square>
                    <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                    </q-avatar>
                    John
                </q-chip>
                </div>
            </div>
          <!-- End Code for Square-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End fourth Square -->



    <!-- Five card for Outline-->
       <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Outline</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Outline-->
        <div>
            <q-chip outline color="primary" text-color="white" icon="event">
            Add to calendar
            </q-chip>
            <q-chip outline color="teal" text-color="white" icon="bookmark">
            Bookmark
            </q-chip>
            <q-chip outline color="orange" text-color="white" icon-right="star">
            Star
            </q-chip>
            <q-chip outline square color="red" text-color="white" icon="alarm" label="Set alarm" />
            <q-chip outline square color="deep-orange" text-color="white" icon="directions">
            Get directions
            </q-chip>
        </div>
          <!-- End Code for Outline-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Five card for Outline-->

    <!-- six card for Clickable -->
      <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Clickable</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Clickable-->
               <div>
            <q-chip clickable @click="onClick" color="primary" text-color="white" icon="event">
            Add to calendar
            </q-chip>
            <q-chip clickable @click="onClick" icon="bookmark">
            Bookmark
            </q-chip>
            <q-chip clickable @click="onClick" color="teal" text-color="white" icon="bookmark">
            Bookmark
            </q-chip>
            <q-chip clickable @click="onClick" color="red" text-color="white" icon="alarm" label="Set alarm" />
            <q-chip clickable @click="onClick" color="orange" text-color="white" icon="directions">
            Get directions
            </q-chip>
        </div>
          <!-- End Code forClickable-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End six card for Clickable-->


    <!-- seven card for Selected -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Selected</div>
        
        </q-card-section>

        <q-card-section>
          <!-- Code for Selected-->
            <div>
            <div class="q-gutter-xs">
            <q-chip :selected.sync="desert.Icecream" color="primary" text-color="white" icon="cake">
                Ice cream
            </q-chip>
            <q-chip :selected.sync="desert.Eclair" color="teal" text-color="white" icon="cake">
                Eclair
            </q-chip>
            <q-chip :selected.sync="desert.Cupcake" color="orange" text-color="white" icon="cake">
                Cupcake
            </q-chip>
            <q-chip :selected.sync="desert.Gingerbread" color="red" text-color="white" icon="cake">
                Gingerbread
            </q-chip>
            </div>

            <div class="q-mt-sm">
            Your pick: {{ selection }}
            </div>
        </div>
          <!-- End Code for Selected-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seven card for Selected--------------- -->

 
    <!-- ---------eight card for Removable----------------- -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Removable</div>
        
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Removable----------------->
                <div>
            <div class="q-gutter-xs">
            <q-chip removable v-model="icecream" @remove="log('Icecream')" color="primary" text-color="white" icon="cake">
                Ice cream
            </q-chip>
            <q-chip removable v-model="eclair" @remove="log('Icecream')" color="teal" text-color="white" icon="cake">
                Eclair
            </q-chip>
            <q-chip removable v-model="cupcake" @remove="log('Icecream')" color="orange" text-color="white" icon="cake">
                Cupcake
            </q-chip>
            <q-chip disable removable v-model="gingerbread" @remove="log('Icecream')" color="red" text-color="white" icon="cake">
                Gingerbread (disable)
            </q-chip>
            </div>

            <q-btn color="primary" label="Reset" @click="reset" class="q-mt-sm" />
        </div>
          <!-- ---------------End Code for Removable------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End eight card for Removable-------------------- -->

        <!-- ---------nine card for Long label truncation------------------ -->
    <div class="row items-start q-mt-md">
      <q-card class="my-card  text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Long label truncation</div>
        
        </q-card-section>

        <q-card-section>
          <!-- ---------Code for Long label truncation------------------>
              <div>
            <div class="q-gutter-xs row" style="max-width: 300px" :class="{ 'truncate-chip-labels': truncate }">
            <q-chip
                removable
                v-model="vanilla"
                color="primary"
                text-color="white"
                icon="cake"
                :label="vanillaLabel"
                :title="vanillaLabel"
            />
            <q-chip
                removable
                v-model="chocolate"
                color="teal"
                text-color="white"
                icon="cake"
                :label="chocolateLabel"
            >
                <q-tooltip>{{ chocolateLabel }}</q-tooltip>
            </q-chip>
            <q-chip
                removable
                v-model="strawberry"
                color="orange"
                text-color="white"
                icon="cake"
            >
                <div class="ellipsis">
                {{ strawberryLabel }}
                <q-tooltip>{{ strawberryLabel }}</q-tooltip>
                </div>
            </q-chip>
            <q-chip
                removable
                v-model="cookies"
                color="red"
                text-color="white"
            >
                <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <div class="ellipsis">
                {{ cookiesLabel }}
                <q-tooltip>{{ cookiesLabel }}</q-tooltip>
                </div>
            </q-chip>
            </div>

            <div class="row items-center q-mt-sm">
            <q-btn color="primary" label="Reset" @click="reset" class="q-mr-sm" />
            <q-toggle v-model="truncate" label="Truncate labels" />
            </div>
        </div>
          <!-- ---------------End Code for Long label truncation-------------- --->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ---------End nine card for Long label truncation-------------------- -->

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
        icecream: true,
      eclair: true,
      cupcake: true,
      gingerbread: true,
       truncate: true,

      vanilla: true,
      chocolate: true,
      strawberry: true,
      cookies: true,

      vanillaLabel: 'I want vanilla flavoured ice cream',
      chocolateLabel: 'I want chocolate flavoured ice cream',
      strawberryLabel: 'I want strawberry flavoured ice cream',
      cookiesLabel: 'I want cookies flavoured ice cream',
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
         desert: {
        Icecream: false,
        Eclair: true,
        Cupcake: false,
        Gingerbread: false
      },
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    closefun() {
      this.isshowprop = false;
    },
     onClick () {
      // console.log('Clicked on a QChip')
    },
     reset () {
      this.icecream = true
      this.eclair = true
      this.cupcake = true
      this.gingerbread = true
    },

    log (desert) {
      // console.log(`${desert} has been removed`)
    }
  },

  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  },

  computed: {
    selection () {
      return Object.keys(this.desert)
        .filter(type => this.desert[type] === true)
        .join(', ')
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