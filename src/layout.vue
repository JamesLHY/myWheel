<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider{
            flex-direction: row;
        }
    }

</style>
<script>
    export default {
        name: 'PureLayout',
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },

        mounted() {
            console.log(this.$children)
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'PureSider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>