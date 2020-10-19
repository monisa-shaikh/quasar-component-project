<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Determined state</div>

        </q-card-section>

        <q-card-section>
            <!-- row div -->
            <div class="row q-gutter-md">

                <!-- first card for Design Overview -->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Standard</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code for Design Overview--------->
                        <standard />
                        <!--=====End code for Design Overview------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card for Design Overview-->

                <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Context menu</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <contextmenu />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->

                  <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Breakpoint</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <breakpointcomponent />
                        <!-- End code for Decorators-->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End Second card for Decorators-->
                              <!-- Second card for Decorators-->

                <q-card class="my-card text-gray " v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Props from QMenu or QDialog</div>

                    </q-card-section>

                    <q-card-section>
                        <!-- code for Decorators-->
                        <propsfromQMenuorQDialog />
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
  import  standard from   'components/PopupProxy/Standard.vue';
          import  contextmenu from   'components/PopupProxy/Contextmenu.vue';
           import breakpointcomponent from   'components/PopupProxy/Breakpoint.vue';
          import  propsfromQMenuorQDialog from   'components/PopupProxy/PropsfromQMenuorQDialog.vue';
      
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
    
        standard,
         contextmenu,
          breakpointcomponent,
         propsfromQMenuorQDialog,
      

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
