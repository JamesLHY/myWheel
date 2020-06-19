import {describe,it,} from "mocha"
const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
   it('接收 gutter 属性', (done)=>{
       Vue.component('g-row',Row)
       Vue.component('g-col', Col)
       const div = document.createElement('div')
       document.body.appendChild(div)
       div.innerHTML= `
        <g-row gutter="20">
            <g-col span="12"></g-col>
            <g-col span="12"></g-col>
        </g-row>
       `
       const vm = new Vue({
           el:div
       })
       setTimeout(()=>{
           const cols = vm.$el.querySelectorAll('.col')

           expect(getComputedStyle(cols[0]).paddingRight).to.equal('10px')
           expect(getComputedStyle(cols[0]).paddingLeft).to.equal('10px')
           done()
           vm.$el.remove()
           vm.$destroy()
       })
   })
})