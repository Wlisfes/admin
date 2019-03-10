<template>
    <div class="user">
        <div class="user-open">
            <Tooltip content="全屏" placement="bottom">
                <Icon :type="value ? 'md-contract' : 'md-expand'" @click.native="handleFullscreen" />
            </Tooltip>
        </div>

        <div class="user-avator-dropdown">
            <Dropdown>
                <Button class="avato" size="small" type="default" shape="circle">
                    情雨随风
                    <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem>个人中心</DropdownItem>
                    <DropdownItem>退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: false
        }
    },
    methods: {
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
