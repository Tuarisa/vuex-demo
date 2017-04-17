import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
    // initial data
    name = "Kate"
    age=26
    kitten_image = "http://www.eastcottvets.co.uk/uploads/Animals/gingerkitten.jpg"
    // computed

    get helloMsg () {
        return 'Hello, ' + this.name
    }

    // method
    greet () {
        alert(this.helloMsg)
    }
    random () {
        return Math.random()
    }

    mounted () {
        this.greet()
    }

}
