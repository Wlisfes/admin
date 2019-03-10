<template>
    <div id="MenuView">
        <Row :gutter="20">
            <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
                <div class="content-con">
                    <div class="left-area" :style="{ backgroundColor: infor.color, width: '36%'}">
                        <Icon :type="infor.icon" />
                    </div>
                    <div class="right-area">
                        <div>
                            <p v-html="infor.count" style="font-size: 42px;"></p>
                            <p v-html="infor.title"></p>
                        </div>
                    </div>
                </div>
            </i-col>
        </Row>
        

        
    </div>
</template>

<script>

export default {
    data () {
        return {
            inforCardData: [
                { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
                { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
                { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
                { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
                { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
                { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
            ],
            
        }
    }
}
</script>

<style lang="stylus" scoped>
#MenuView {
    width 100%
    height 100%
    background-color #F5F7F9

    .content-con {
        height 100%
        width 100%
        position relative
        border-radius 4px
        overflow hidden
        background-color #fff

        .left-area {
            float left
            height 100%
            display table
            text-align center
            
            .ivu-icon {
                color #fff
                font-size 36px
                display table-cell
                vertical-align middle
            }
        }

        .right-area {
            float left
            height 100%
            display table
            text-align center
            width 64%

            >div {
                display table-cell
                vertical-align middle
            }
        }
    }
}


</style>
