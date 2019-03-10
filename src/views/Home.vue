<template>
    <Layout id="root">
        <Sider class="x-Sider" ref="side1" hide-trigger collapsible width="256" :collapsed-width="78" v-model="isCollapsed">
            <div class="logo-con">
                <img src="../assets/image/parker.jpg" alt="情雨随风" srcset="">
            </div>
            <template v-if="isMenu">
                <x-menu :ClassName="menuitemClasses"></x-menu>
            </template>
            <template v-else>
                <x-min-menu :ClassName="menuitemClasses"></x-min-menu>
            </template>
        </Sider>
        <Layout>
            <x-header @collSider="collSider"></x-header>
            <Content :style="{padding: '20px', background: '#F5F7F9', minHeight: '260px',overflow: 'auto' }">
                <x-menuview></x-menuview>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
import Menu from '../components/base/Menu'
import MinMenu from '../components/base/MinMenu'
import Header from '../components/base/Header'
import MenuView from '../components/base/MenuView'


export default {
    name: "home",
    data () {
        return {
            isCollapsed: false,
            isMenu: true
        }
    },
    computed: {
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    methods: {
        collSider () {
            this.$refs.side1.toggleCollapse();
            this.isMenu = !this.isMenu
        },
        ber() {
            this.api.pushToUserAccount().then(res => {
                console.log(res.data)
            })
        }
    },
    components: {
        'x-menu': Menu,
        'x-min-menu': MinMenu,
        'x-header': Header,
        'x-menuview': MenuView
    },
    created () {
        this.ber()
    }
}
</script>

<style lang="stylus" scoped>
#root {
    flex auto 

    .logo-con {
        padding 20px 0
        margin 0 10px
        overflow hidden

        >img {
            width 60%
            display block
            margin 0 auto
            transition width 0.2s
            cursor pointer
            border-radius 100%
        }
    }

    .x-Sider {
        background-color #001529
    }

    
}

</style>