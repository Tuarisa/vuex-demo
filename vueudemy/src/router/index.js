import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/vue'
import PracticeOne from '@/components/practice1/vue'
import PracticeTwo from '@/components/practice2/vue'
import PracticeThree from '@/components/practice3/vue'
import Practice4 from '@/components/practice4/vue'
import Practice5 from '@/components/practice5/vue'
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
      path: '/practice3',
      name: 'practice3',
      component: PracticeThree
    },
    {
      path: '/practice4',
      name: 'practice4',
      component: Practice4
    },
    {
      path: '/practice5',
      name: 'practice5',
      component: Practice5
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
  ]
})
