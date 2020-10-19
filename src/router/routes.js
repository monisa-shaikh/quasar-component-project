

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
      component: () => import('pages/Index.vue') 
    },
    { 
      path: '/ajaxbar', 
    component: () => import('pages/PageAjaxBar.vue') 
    },
    { 
      path: '/avatar', 
    component: () => import('pages/PageAvatar.vue') 
    }, 
    { 
      path: '/badge', 
    component: () => import('pages/PageBadge.vue') 
    },
    { 
      path: '/banner', 
    component: () => import('pages/PageBanner.vue') 
    },
    { 
      path: '/bar', 
    component: () => import('pages/PageBar.vue') 
    },
    { 
      path: '/breadcrumbs', 
    component: () => import('pages/PageBreadcrumbs.vue') 
    },
    { 
      path: '/buttons', 
    component: () => import('pages/PageButton.vue') 
    },
    { 
      path: '/buttonGroup', 
    component: () => import('pages/PageButtonGroup.vue') 
    },
    { 
      path: '/buttonDropdown', 
    component: () => import('pages/PageButtonDropdown.vue') 
    },
    { 
      path: '/card', 
    component: () => import('pages/PageCard.vue') 
    },
   { 
      path: '/carousel', 
    component: () => import('pages/PageCarousel.vue') 
    },
    { 
      path: '/chat-message', 
    component: () => import('pages/PageChatMessage.vue') 
    },
    { 
      path: '/chip', 
    component: () => import('pages/PageChip.vue') 
    },
    { 
      path: '/circular-progress', 
    component: () => import('pages/PageCircularProgress.vue') 
    },
    { 
      path: '/color-picker', 
    component: () => import('pages/PageColorPicker.vue') 
    },
    { 
      path: '/dialog', 
    component: () => import('pages/PageDialog.vue') 
    },
    { 
      path: '/editor', 
    component: () => import('pages/PageEditor.vue') 
    },
    { 
      path: '/expansion-item', 
    component: () => import('pages/PageExpansionItem.vue') 
    },
    { 
      path: '/floating-action-button', 
    component: () => import('pages/PageFloatingActionButton.vue') 
    },
    { 
      path: '/input-textfield', 
    component: () => import('pages/PageInput.vue') 
    },
    { 
      path: '/select', 
    component: () => import('pages/PageSelect.vue') 
    },
    // error part
    { 
      path: '/file-picker', 
    component: () => import('pages/PageFilepicker.vue') 
    },
    { 
      path: '/form', 
    component: () => import('pages/PageForm.vue') 
    },
    // error part check
    { 
      path: '/field', 
    component: () => import('pages/PageField.vue') 
    },
    { 
      path: '/radio', 
    component: () => import('pages/PageRadio.vue') 
    },
    { 
      path: '/checkbox', 
    component: () => import('pages/PageCheckbox.vue') 
    },
    { 
      path: '/toggle', 
    component: () => import('pages/PageToggle.vue') 
    },
    { 
      path: '/button-toggle', 
    component: () => import('pages/PageButtonToggle.vue') 
    },
    { 
      path: '/option-group', 
    component: () => import('pages/PageOptionGroup.vue') 
    },
    { 
      path: '/slider', 
    component: () => import('pages/PageSlider.vue') 
    },
    { 
      path: '/range', 
    component: () => import('pages/PageRange.vue') 
    },
    { 
      path: '/time', 
    component: () => import('pages/PageTime.vue') 
    },
    { 
      path: '/date', 
    component: () => import('pages/PageDate.vue') 
    },
    { 
      path: '/icon', 
    component: () => import('pages/PageIcon.vue') 
    },
    { 
      path: '/img', 
    component: () => import('pages/PageImg.vue') 
    },
    { 
      path: '/infinite-scroll', 
    component: () => import('pages/PageInfiniteScroll.vue') 
    },
    { 
      path: '/inner-loading', 
    component: () => import('pages/PageInnerLoading.vue') 
    },
    { 
      path: '/intersection', 
    component: () => import('pages/PageIntersection.vue') 
    },
    
    { 
      path: '/knob', 
    component: () => import('pages/PageKnob.vue') 
    },
    { 
      path: '/linear-progress', 
    component: () => import('pages/PageLinearProgress.vue') 
    },
    { 
      path: '/list-and-list-items', 
    component: () => import('pages/PageListandListItems.vue') 
    },
    { 
      path: '/markup-table', 
    component: () => import('pages/PageMarkupTable.vue') 
    },
    { 
      path: '/menu', 
    component: () => import('pages/PageMenu.vue') 
    },
    { 
      path: '/resize-observer', 
    component: () => import('pages/PageResizeObserver.vue') 
    },
    { 
      path: '/pagination', 
    component: () => import('pages/PagePagination.vue') 
    },
    { 
      path: '/parallax', 
    component: () => import('pages/PageParallax.vue') 
    },
    { 
      path: '/popup-edit', 
    component: () => import('pages/PagePopupEdit.vue') 
    },
    { 
      path: '/popup-proxy', 
    component: () => import('pages/PagePopupProxy.vue') 
    },

    { 
      path: '/pull-to-refresh', 
    component: () => import('pages/PagePulltorefresh.vue') 
    },
    { 
      path: '/rating', 
    component: () => import('pages/PageRating.vue') 
    },
    { 
      path: '/responsive', 
    component: () => import('pages/PageResponsive.vue') 
    },
    { 
      path: '/scroll-area', 
    component: () => import('pages/PageScrollArea.vue') 
    },
    { 
      path: '/separator', 
    component: () => import('pages/PageSeparator.vue') 
    },
    { 
      path: '/skeleton', 
    component: () => import('pages/PageSkeleton.vue') 
    },
    { 
      path: '/slide-item', 
    component: () => import('pages/PageSlideItem.vue') 
    },
    { 
      path: '/slide-transition', 
    component: () => import('pages/PageSlideTransition.vue') 
    },
    { 
      path: '/space', 
    component: () => import('pages/PageSpace.vue') 
    },
    { 
      path: '/spinners', 
    component: () => import('pages/PageSpinners.vue') 
    },
    { 
      path: '/splitter', 
    component: () => import('pages/PageSplitter.vue') 
    },
    { 
      path: '/stepper', 
    component: () => import('pages/PageStepper.vue') 
    },
    { 
      path: '/table', 
    component: () => import('pages/PageTable.vue') 
    },
    { 
      path: '/tabs', 
    component: () => import('pages/PageTabs.vue') 
    },
    { 
      path: '/tab-panels', 
    component: () => import('pages/PageTabPanels.vue') 
    },
    { 
      path: '/timeline', 
    component: () => import('pages/PageTimeline.vue') 
    },
    { 
      path: '/toolbar', 
    component: () => import('pages/PageToolbar.vue') 
    },
    { 
      path: '/tooltip', 
    component: () => import('pages/PageTooltip.vue') 
    },
    { 
      path: '/tree', 
    component: () => import('pages/PageTree.vue') 
    },
    { 
      path: '/uploader', 
    component: () => import('pages/PageUploader.vue') 
    },
    { 
      path: '/video', 
    component: () => import('pages/PageVideo.vue') 
    },
    { 
      path: '/virtual-scroll', 
    component: () => import('pages/PageVirtualScroll.vue') 
    },
    { 
      path: '/app-fullscreen', 
    component: () => import('pages/PageFullscreen.vue') 
    },
    { 
      path: '/bottom-sheet', 
    component: () => import('pages/PageBottomSheet.vue') 
    },
    { 
      path: '/dialog-plugin', 
    component: () => import('pages/PageDialogPlugin.vue') 
    },
    { 
      path: '/loading-plugin', 
    component: () => import('pages/PageLoadingPlugin.vue') 
    },
    { 
      path: '/notify', 
    component: () => import('pages/PageNotify.vue') 
    },
    { 
      path: '/dashboard', 
    component: () => import('pages/PageDashboard.vue') 
    },
    { 
      path: '/apexcharts', 
    component: () => import('pages/dashboard.vue') 
    }
    
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
// export default{
//   preFetch ({ /* ... */ }) {
//     Loading.show()

//     return new Promise(resolve => {
 
//     }).then(() => {
//       Loading.hide()
//     })
//   }
// }