<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Usage</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Horizontal</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <horizontal />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Horizontal with inset</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <horizontalwithinset />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                  <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Vertical</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <vertical />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->
                              <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Custom colored</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <customcolored />
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


        import  horizontal  from  'components/Separator/Horizontal.vue';
        import  customcolored  from  'components/Separator/Customcolored.vue';
        
        import  vertical  from  'components/Separator/Vertical.vue';
    import  horizontalwithinset  from  'components/Separator/Horizontalwithinset.vue';

          
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
    
        horizontal,
        customcolored,
        
        vertical,
        horizontalwithinset,

              horizontal,
    
       
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
