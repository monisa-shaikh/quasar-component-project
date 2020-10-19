<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

   
                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Basic</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <basic />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                    <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With Avatar</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withAvatar />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Glossy</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <glossy  />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Grouped vertically</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <groupedvertically />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->
                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">Grouped horizontally</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <groupedhorizontally />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


                                <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With Tabs</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withTabs />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                 <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With Button Dropdown</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withButtonDropdown />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->


              <!-- first card  -->

                <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
                    <q-card-section class="row">
                        <div class="text-h6">With Button Toggle</div>

                    </q-card-section>

                    <q-card-section>
                        <!----- code --------->
                        <withButtonToggle />
                        <!--=====End code ------ -->

                    </q-card-section>

                    <q-separator dark />
                </q-card>

                <!-- End first card -->

                 
</q-page>
</template>

<script>

        import  basic  from   'components/Toolbar/Basic.vue';
        
    import  withButtonToggle  from   'components/Toolbar/WithButtonToggle.vue';

        
        import  withButtonDropdown  from   'components/Toolbar/WithButtonDropdown.vue';
        
        import  withTabs  from   'components/Toolbar/WithTabs.vue';


         import  groupedhorizontally  from   'components/Toolbar/Groupedhorizontally.vue';
        
        import  groupedvertically  from   'components/Toolbar/Groupedvertically.vue';

        
        import  glossy  from   'components/Toolbar/Glossy.vue';
        
        import  withAvatar  from   'components/Toolbar/WithAvatar.vue';
        
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

        basic,
        
        withButtonToggle ,

        
        withButtonDropdown ,
        
        withTabs ,


         groupedhorizontally ,
        
        groupedvertically,

        
        glossy,
        
        withAvatar ,
        
      
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
