import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
    value=''

    alert () {
        alert('hello!')
    }

    putInputInValue (event) {
        this.value = event.target.value
    }

}
