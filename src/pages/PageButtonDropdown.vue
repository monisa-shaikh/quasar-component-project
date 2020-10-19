<template>
  <q-page>
      <!-- content heading and breadcrumbs -->
      <!-- child components breadcrumbs-->
      <breadcrumbs/>
        <!-- End content heading and breadcrumbs -->

      <!--card for bar  -->
      <!-- child components bar-->
      <button-content/>
       <!--End card for bar  -->
          <q-page-scroller position="bottom-right" :scroll-offset="10" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="primary" />
          </q-page-scroller>
  </q-page>
</template>

<script>
import  breadcrumbs  from 'components/ButtonType/ButtonDropdown/breadcrumbs.vue';
import  buttonContent from 'components/ButtonType/ButtonDropdown/buttondropdownContent.vue';
export default {
    
    components:{
        // 'breadcrumbs':require('components/ButtonType/ButtonDropdown/breadcrumbs.vue').default,
        // 'buttonContent':require('components/ButtonType/ButtonDropdown/buttondropdownContent.vue').default
        breadcrumbs,
        buttonContent
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