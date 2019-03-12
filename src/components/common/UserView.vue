<template>
    <div class="user">
        <div class="user-open">
            <Tooltip content="全屏" placement="bottom">
                <Icon :type="value ? 'md-contract' : 'md-expand'" @click.native="handleFullscreen" />
            </Tooltip>
        </div>

        <div class="user-avator-dropdown">
            <Dropdown trigger="click">
                <Button class="avato" size="small" type="default" shape="circle">
                    情雨随风
                    <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem>首页</DropdownItem>
                    <DropdownItem>项目地址</DropdownItem>
                    <DropdownItem @click.native="signOutEvent">退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>

<script>
import { removeToken } from '../../lib/util'
export default {
    data () {
        return {
            value: false
        }
    },
    methods: {
        //全屏事件
        handleFullscreen () {
            let main = document.body
            if (this.value) {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                }
                this.value = false
            } else {
                if (main.requestFullscreen) {
                    main.requestFullscreen()
                } else if (main.mozRequestFullScreen) {
                    main.mozRequestFullScreen()
                } else if (main.webkitRequestFullScreen) {
                    main.webkitRequestFullScreen()
                } else if (main.msRequestFullscreen) {
                    main.msRequestFullscreen()
                }

                this.value = true
            }
        },
        signOutEvent() {
            this.$Modal.confirm({
                title: '确定退出登录吗？',
                content: '<p>退出登录后会散失全部功能，请您慎重考虑！</p>',
                onOk: () => {
                    console.log(`ok`)
                    removeToken()
                    this.$router.push({ path: `/login` })
                },
                onCancel: () => {
                    console.log(`cancel`)
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.user {
    float right 
    line-height 64px
    padding-right 20px
    height 64px
    display flex
    flex-direction row
    align-items center

    .user-open {
        margin-right 12px
        float right
        
        .ivu-icon {
            font-size 24px
            cursor pointer
        }
    }

    .user-avator-dropdown {
        position relative

        .ivu-icon {
            font-size 18px
        }

        .avato {
            font-size 16px
        }
    }
}
</style>
