<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-radio name="shape" v-model="shape" val="line" label="Line" />
      <q-radio name="shape" v-model="shape" val="rectangle" label="Rectangle" />
      <q-radio name="shape" v-model="shape" val="ellipse" label="Ellipse" />
      <q-radio name="shape" v-model="shape" val="polygon" label="Polygon" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

    <q-card v-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
      <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
      <q-separator />
      <q-card-section class="row q-gutter-sm items-center">
        <div
          v-for="(item, index) in submitResult"
          :key="index"
          class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
        >{{ item.name }} = {{ item.value }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      shape: 'line',
      submitResult: []
    }
  },

  methods: {
    onSubmit (evt) {
      const formData = new FormData(evt.target)
      const submitResult = []

      for (const [ name, value ] of formData.entries()) {
        submitResult.push({
          name,
          value
        })
      }

      this.submitResult = submitResult
    }
  }
}
</script>