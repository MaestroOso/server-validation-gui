import Vue from 'vue'
import VueRouter from 'vue-router'
import ConsultingPageView from '@/views/ConsultPageView.vue'
import HistoryPageView from '@/views/HistoryPageView.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
    path: '/info',
    name: 'Server information',
    component: ConsultingPageView
    },
    {
    path: '/history',
    name: 'Server History',
    component: HistoryPageView
    },
  ]
})

export default router;

Vue.use(VueRouter);
