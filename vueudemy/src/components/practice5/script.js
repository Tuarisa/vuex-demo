import Vue from 'vue'
import { Component, Inject, Model, Prop, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {

    array = ['Max', 'Anna', 'Chris', 'Manu']
    myObject = {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3'
    }
    testData = {
      name: 'TESTOBJECT',
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }

    canYouSee=true

    toggle(){
        this.canYouSee=!this.canYouSee

    }
    isArray(a){
        return typeof a === 'object'
    }
}
