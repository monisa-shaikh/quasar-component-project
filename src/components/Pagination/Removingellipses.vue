<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="teal"
      :max="10"
      :max-pages="5"
      :ellipses="false"
      :boundary-numbers="false"
    >
    </q-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 5
    }
  }
}
</script>