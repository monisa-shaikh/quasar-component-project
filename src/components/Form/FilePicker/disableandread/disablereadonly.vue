<template>
  <div class="">
    <div class="q-gutter-md row">
      <q-file
        disable
        filled
        v-model="model"
        hint="Disable"
        style="width: 250px"
      />

      <q-file
        readonly
        filled
        v-model="model"
        hint="Readonly"
        style="width: 250px"
      />

      <q-file
        disable
        readonly
        filled
        v-model="model"
        hint="Disable and readonly"
        style="width: 250px"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model: null
    }
  }
}
</script>