<template>
  <q-page class="container" >
    <div class="row q-col-gutter-md q-px-md q-pt-md justify-center">
      <div class="col-md-3" v-for="i in 4" :key="i">
        <apex-line-small :bgColorCard="colors[i - 1]"></apex-line-small>
      </div>
    </div>
    <div class="row q-col-gutter-md q-px-md q-py-md">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column></apex-column>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-donut></apex-donut>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line></apex-line>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-multiple-radial-bars></apex-multiple-radial-bars>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-heatmap></apex-heatmap>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-radial-bar></apex-radial-bar>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-bubble></apex-bubble>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-radar></apex-radar>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-polar-map></apex-polar-map>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-candle-stick></apex-candle-stick>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-treemap></apex-treemap>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line-column></apex-line-column>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line-scatter></apex-line-scatter>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-area></apex-area>
      </div>
    </div>
  </q-page>
</template>

<script>
import ApexColumn from 'components/dashboard/ApexColumn'
import ApexArea from 'components/dashboard/ApexArea'
import ApexDonut from 'components/dashboard/ApexDonut'
import ApexLine from 'components/dashboard/ApexLine'
import ApexHeatmap from 'components/dashboard/ApexHeatmap'
import ApexMultipleRadialBars from 'components/dashboard/ApexMultipleRadialBars'
import ApexRadialBar from 'components/dashboard/ApexRadialBar'
import ApexBubble from 'components/dashboard/ApexBubble'
import ApexRadar from 'components/dashboard/ApexRadar'
import ApexCandleStick from 'components/dashboard/ApexCandleStick'
import ApexLineSmall from 'components/dashboard/ApexLineSmall'
import ApexPolarMap from 'components/dashboard/ApexPolarMap'
import ApexLineColumn from 'components/dashboard/ApexLineColumn'
import ApexTreemap from 'components/dashboard/ApexTreemap'
import ApexLineScatter from 'components/dashboard/ApexLineScatter'
export default {
  name: 'PageIndex',
  components: {
    ApexColumn,
    ApexArea,
    ApexDonut,
    ApexLine,
    ApexMultipleRadialBars,
    ApexHeatmap,
    ApexRadialBar,
    ApexBubble,
    ApexRadar,
    ApexLineSmall,
    ApexPolarMap,
    ApexCandleStick,
    ApexLineColumn,
    ApexTreemap,
    ApexLineScatter
  },
  data () {
    return {
      colors: [
        'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
        'linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)',
        'linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%)',
        'linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%)'
      ]
    }
  },
     mounted () {
    this.$emit('stopAjaxBar')
  },
}
</script>