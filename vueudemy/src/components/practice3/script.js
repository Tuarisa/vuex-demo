import Vue from 'vue'
import { Component, Inject, Model, Prop, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    value=0
    timeout=5000

    get result () {

        return this.value==37?"done":"not there yet"

    }
    @Watch('result')
    changedResult(){
        setTimeout(() => (this.value=0), this.timeout);
    }



}
