import Vue from "vue"
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './Header'
import Sider from './Sider'
import Content from './Content'
import Footer from './Footer'
import Toast from './toast'
import Plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(Plugin)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: 'hi'
    },
    created() {

    },
    methods: {
        showToast() {
            this.$toast('我是message', {
                position:'middle',
                enableHtml: true,
                autoClose: true
            })
        }
    }
})

