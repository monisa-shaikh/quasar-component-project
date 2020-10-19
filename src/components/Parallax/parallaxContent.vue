<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6"></div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!-- first card for Design Overview -->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Image background</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <imagebackground />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6"> height with video background</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <heightwithvideobackground />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                  <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom speed</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <customspeed />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->
                              <!-- Second card for Decorators-->

                <q-card class="my-card1 text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Scoped Slot</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <scopedslot />
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

</q-page>
</template>

<script>
   import  imagebackground from    'components/Parallax/Imagebackground.vue';
       import  heightwithvideobackground from    'components/Parallax/heightwithvideobackground.vue';
       import  customspeed from    'components/Parallax/Customspeed.vue';
  import   scopedslot from    'components/Parallax/ScopedSlot.vue';
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
    
        imagebackground,
        heightwithvideobackground,
        customspeed ,
        scopedslot,
       
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
