import Toast from './toast'
let currentToast
function createToast({Vue,propsData,message,onclose}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close',onclose)
    document.body.appendChild(toast.$el)
    return toast
}


export default {
    install(Vue,option){
     Vue.prototype.$toast= function (message,toastOptions) {
         if(currentToast){
             currentToast.close()
         }
       currentToast = createToast({
           Vue,
           message,
           propsData:toastOptions,
           onclose: ()=>{
               currentToast = null
           }
       })
     }
    }
}