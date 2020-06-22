<template>
    <transition name="slide">
    <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">hide</button>
    </div>
    </transition>
</template>

<style lang="scss" scoped>
 .sider{
     position: relative;
     > button{
         position: absolute;
         top:0;
         right:0;
     }
 }
 .slide-enter-active, .slide-leave-active {
     transition: all .5s;
 }
 .slide-enter, .slide-leave-to {
     margin-left: -200px;
 }
</style>

<script>
    import Button from "./button"
    export default {
        name:'PureSider',
        components: {Button},
        data(){
            return{ visible:true}
        },
    }
</script>