import Vue from 'vue'
import { Component, Inject, Model, Prop, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {

    toggleClasses = ['highlight','shrink']
    currentClassId = 0

    attachClass='border'

    squareClass='square'
    borderClass='border'
    coloredClass='colored'

    checkClassOne=false
    checkClassTwo=false

    attachValue='borderClass'

    progressWidth=1

    startEffect(){
        setInterval(() => (
            this.currentClassId = (this.currentClassId+1) % 2
            ), 3000);
    }

    startProgress(){
        this.progressWidth=0
        let interval = setInterval(() => {
            this.progressWidth+=1
            if (this.progressWidth>100){
                clearInterval(interval)
            }
        }, 100);
    }

    get attachValueComputed() {
        return this[this.attachValue]
    }



}
