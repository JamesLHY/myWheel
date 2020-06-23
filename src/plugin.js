import Toast from './toast'
export default {
    install(Vue,option){
     Vue.prototype.$toast= function (message,toastOPtions) {
        let Constructor = Vue.extend(Toast)
         let toast = new Constructor({
             propsData: toastOPtions
         })
         toast.$slots.default = [message]
         toast.$mount()
         document.body.appendChild(toast.$el)
     }
    }
}