<template>
    <Header :style="{padding: 0}" class="layout-header-bar">
        <icon @click.native="collapsedSider" 
            style="cursor: pointer;" 
            :class="ClassName" 
            :style="{margin: '0 20px'}" 
            type="md-menu" size="24">
        </icon>
        <x-home-back></x-home-back>
        <x-user-view></x-user-view>
    </Header>
</template>

<script>
import UserView from '../common/UserView'
import HomeBack from '../common/HomeBack'
export default {
    props: ['ClassName'],
    methods: {
        collapsedSider() {
            this.$emit("collSider")
        }
    },
    components: {
        'x-user-view': UserView,
        'x-home-back': HomeBack
    }
}
</script>

<style lang="stylus" scoped>
.layout-header-bar{
    background #fff
    box-shadow 0 1px 1px rgba(0,0,0,.1)
    background-color #F5F7F9

    .menu-icon{
        transition all .3s
        
    }

    .rotate-icon{
        transform: rotate(-90deg);
    }

    
}
</style>
