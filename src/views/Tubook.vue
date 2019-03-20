/*
 * @Author: 情雨随风 
 * @Date: 2019-03-15 22:26:34 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-19 23:24:29
 * @Types 添加文章
 */


<template>
    <div id="root">
        <div class="root-form" v-if="true">
            <i-form>
                <FormItem>
                    <i-input v-model="form.name" placeholder="请输入文章标题"></i-input>
                </FormItem>
                <FormItem>
                    <i-input v-model="form.subtitle" placeholder="请输入文章描述"></i-input>
                </FormItem>
            </i-form>
            <div class="root-Icon">
                <RadioGroup v-model="form.types" type="button" size="large">
                    <Radio label="vuejs">
                        <Icon custom="iconfont icon-vuejs" size="24" />
                    </Radio>
                    <Radio label="angularjs">
                        <Icon type="logo-angular" />
                    </Radio>
                    <Radio label="reactjs">
                        <Icon custom="iconfont icon-react" size="24" />
                    </Radio>
                    <Radio label="html5">
                        <Icon custom="iconfont icon-html5" size="24" />
                    </Radio>
                    <Radio label="css3">
                        <Icon type="logo-css3" />
                    </Radio>
                    <Radio label="javascript">
                        <Icon type="logo-javascript" />
                    </Radio>
                    <Radio label="linux">
                        <Icon type="logo-tux" />
                    </Radio>
                    <Radio label="ios">
                        <Icon type="ios-leaf" />
                    </Radio>
                    <Radio label="nodejs">
                        <Icon type="logo-nodejs" />
                    </Radio>
                </RadioGroup>
            </div>
        </div>

        <div class="root-edit">
            <mark-down ref="markdown"
                       :theme="markdown.theme"
                       :mode="markdown.mode" 
                       :autoSave="markdown.autoSave" 
                       :initialValue="markdown.initialValue"
                       @on-save="save"/>

            <Button type="primary" @click.native="seta">save</Button>
        </div>
    </div>
</template>

<script>
import MarkDown from 'vue-meditor'
export default {
    data () {
        return {
            form: {
                name: '',
                subtitle: '',
                types: ''
            },

            a: false,

            //编辑器配置
            markdown: {
                theme: "OneDark",
                mode: 2,
                autoSave: false,
                initialValue: ``
            }
        }
    },
    methods: {
        //富文本保存监听事件
        save(ops) {
            console.log(ops)
            if(this.a) this.setTubok(ops)
        },
        //保存事件
        async setTubok(body) {
            let { markdownValue } = body
            let res = await this.api.setTubok({
                content: markdownValue
            })

            console.log(res)
        },
        async getTubokid() {
            let res = await this.api.getTubokid({
                params: {
                    _id: "5c91e142961af747dcba9d3f"
                }
            })
            this.markdown.initialValue = res.data[0].content
            console.log(res)
        },
        seta() {
            this.$refs.markdown.handleSave()
        }
    },
    components: {
        MarkDown
    },
    created () {
        // this.getTubokid()
    }
}
</script>

<style lang="stylus" scoped>
#root {
    
    .root-Icon {
        margin-bottom 20px

        .ivu-icon {
            font-size 24px
        }
        .ivu-btn {
            margin-right 12px
        }
    }

    .root-edit {
        position relative

    }
}
</style>
