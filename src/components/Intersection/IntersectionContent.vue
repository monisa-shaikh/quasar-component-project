<template>
<q-page>

    <!-- -----------------------------------first card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">Basic</div>

        </q-card-section>

        <q-card-section>
             <basic />
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End first card Row--------------------------------------->


    <!-- -----------------------------------Second card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">with transition</div>

        </q-card-section>

        <q-card-section>
             <withtransition />
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Second card Row--------------------------------------->

    <!-- -----------------------------------third card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md" v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">a list with transition</div>

        </q-card-section>

        <q-card-section>
             <alistwithtransition />
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End third card Row--------------------------------------->


    
    <!-- -----------------------------------Fourth card Row--------------------------------------->

    <q-card class="my-card text-gray q-mt-md " v-if="isshowprop">
        <q-card-section class="row">
            <div class="text-h6">triggering only once</div>

        </q-card-section>

        <q-card-section>
             <triggeringonlyonce />
        </q-card-section>

        <q-separator dark />
    </q-card>

    <!-- -----------------------------------End Fourth card Row--------------------------------------->

    




</q-page>
</template>

<script>
 import basic  from  'components/Intersection/Basic.vue';
       import withtransition  from  'components/Intersection/Withtransition.vue';
         import alistwithtransition  from  'components/Intersection/Alistwithtransition.vue';
          import triggeringonlyonce  from  'components/Intersection/Triggeringonlyonce.vue';
 
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
        withtransition,
        alistwithtransition,
        triggeringonlyonce,
 
      
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
