import Vue from 'vue'
import { Component, Inject, Model, Prop, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    isGameStarted=false

    health={
        me: 100,
        enemy:100
    }

    turns = [
        {
            me:-1,
            enemy:-2
        },
        {
            me:5,
            enemy:-4
        }
    ]

    startGame(){
        this.isGameStarted = true
        this.health.me = 100
        this.health.enemy = 100
        this.turns = []
        this.health={
            me: 100,
            enemy:100
        }
    }

    monsterTurn(){
        return -1 * Math.round(Math.random()*10)
    }

    attack(){
        this.turns.unshift({
            me: -1 * Math.round(Math.random()*10),
            enemy: this.monsterTurn()
        })
    }
    heal(){
        this.turns.unshift({
            me: Math.round(Math.random()*10),
            enemy: this.monsterTurn()
        })
    }

    giveUp(){
        this.finishGame()
    }

    specialAttack(){
        this.turns.unshift({
            me: -1 * (Math.round(Math.random()*5)*2),
            enemy: this.monsterTurn()
        })
    }

    finishGame(){
        this.isGameStarted = false
    }


    @Watch('turns')
    recountHealth(){
        this.health.enemy = 100 +this.turns.reduce((sum, current) => (sum+(current.me<0?current.me:0)),0);
        this.health.me = 100 + this.turns.reduce((sum, current) => (sum+current.enemy+(current.me>0?current.me:0)),0);

        if (this.health.enemy<=0){
            alert("You Won!")
            this.finishGame()
            return
        }
        if(this.health.me<=0){
            alert("You lose!")
            this.finishGame()
            return
        }
    }
}
