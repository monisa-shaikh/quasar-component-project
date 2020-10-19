<template>
  <q-page>
      <!-- content heading and breadcrumbs -->
      <!-- child components breadcrumbs-->
      <breadcrumbs/>
        <!-- End content heading and breadcrumbs -->

      <!--card for ajax bar  -->
      <!-- child components Ajaxbar-->
      <virtual-scroll-content/>
       <!--End card for ajax bar  -->
  </q-page>
</template>

<script>
export default {
    
    components:{
        'breadcrumbs':require('components/VirtualScroll/breadcrumbs.vue').default,
        'virtualScrollContent':require('components/VirtualScroll/VirtualScrollContent.vue').default
    }
}
</script>

<style>
.my-card {
    width: 100%;
    background: #fff;
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