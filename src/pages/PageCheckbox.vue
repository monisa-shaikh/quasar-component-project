<template>
  <q-page>
      <!-- content heading and breadcrumbs -->
      <!-- child components breadcrumbs-->
      <breadcrumbs/>
        <!-- End content heading and breadcrumbs -->

      <!--card for ajax bar  -->
      <!-- child components Ajaxbar-->
      <checkbox-content/>
       <!--End card for ajax bar  -->
        <q-page-scroller position="bottom-right" :scroll-offset="10" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="primary" />
          </q-page-scroller>
  </q-page>
</template>

<script>
import breadcrumbs  from 'components/Form/Checkbox/breadcrumbs.vue';
import checkboxContent  from 'components/Form/Checkbox/CheckboxContent.vue';
export default {
    
    components:{
      breadcrumbs,
    checkboxContent
        // 'breadcrumbs':require('components/Form/Checkbox/breadcrumbs.vue').default,
        // 'checkboxContent':require('components/Form/Checkbox/checkboxContent.vue').default
    },
     mounted () {
    this.$emit('stopAjaxBar')
  },
}
</script>

<style>
.my-card {
    width: 100%;
    /* background: #fff; */
    border-radius: .5rem;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, .1);
    -webkit-transition: all .3s ease-in-out;

}
.router-header{
        margin-bottom: 1.1rem !important;
}
.headingtxt{
    color: #636363;
    font-size: 24.36px;
}
/* hide breabcrumbs and setting button */
@media only screen and (max-width: 767px)  {
  .hiddensection{
    display: none;
  }
}
</style>