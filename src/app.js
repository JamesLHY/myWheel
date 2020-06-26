import Vue from "vue"
import Button from './button/button'
import Icon from './icon'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Sider from './layout/sider'
import Content from './layout/content'
import Footer from './layout/footer'
import Toast from './toast/toast'
import Plugin from './toast/plugin'
import Tabs from './tabs/tabs'
import TabsNav from './tabs/tabs-nav'
import TabsItem from './tabs/tabs-item'
import TabsBody from './tabs/tabs-body'
import TabsPane from './tabs/tabs-pane'

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
Vue.component('g-tabs-nav', TabsNav)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs', Tabs)
Vue.use(Plugin)
new Vue({
    el: '#app',
    data: {
       selectedTab:'1'
    },
    created() {

    },
    methods: {
        showToast() {
            this.$toast('我是message', {
                position:'middle',
                enableHtml: true,
                autoClose: 3
            })
        }
    }
})

