<template>
  <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="4/3" class="col" style="max-height: 100px">
        <q-card class="column">
          <q-img class="col" src="https://cdn.quasar.dev/img/parallax1.jpg" />

          <q-card-section>
            <div>Ratio 4:3, but max height of 100px</div>
          </q-card-section>
        </q-card>
      </q-responsive>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>