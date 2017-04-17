import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/vue'
import PracticeOne from '@/components/practice1/vue'
import PracticeTwo from '@/components/practice2/vue'
import example from '@/components/example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/practice1',
      name: 'practice1',
      component: PracticeOne
    },
    {
      path: '/practice2',
      name: 'practice2',
      component: PracticeTwo
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
  ]
})
