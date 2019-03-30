/*
 * @Author: 情雨随风 
 * @Date: 2019-03-15 22:26:34 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-30 14:05:33
 * @Types 添加文章
 */


<template>
    <div id="root">
        <div class="root-form" v-if="true">
            <i-form>
                <FormItem>
                    <i-input v-model="form.title" placeholder="请输入文章标题"></i-input>
                </FormItem>
                <FormItem>
                    <i-input v-model="form.descript" placeholder="请输入文章描述"></i-input>
                </FormItem>
                <FormItem>
                    <i-input v-model="form.image" placeholder="请输入缩略图链接"></i-input>
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

                <div class="primary"></div>
                <Button type="primary" style="margin: auto;" @click.native="saveClick">保存</Button>
            </div>
        </div>

        <div class="root-edit">
            <mark-down ref="markdown"
                       :theme="markdown.theme"
                       :mode="markdown.mode" 
                       :autoSave="markdown.autoSave" 
                       :initialValue="markdown.initialValue"
                       @on-save="save"/>
        </div>
    </div>
</template>

<script>
import MarkDown from 'vue-meditor'
export default {
    data () {
        return {
            form: {
                title: '',
                descript: '',
                types: '',
                image: ''
            },

            //编辑器配置
            markdown: {
                theme: "OneDark",
                mode: 1,
                autoSave: false,
                initialValue: ``
            }
        }
    },
    methods: {
        //富文本保存监听事件
        save(ops) {
            this.setTubok(ops)
        },
        //保存事件
        async setTubok(body) {
            let { title,descript,types,image } = this.form
            let { markdownValue } = body

            let res = await this.api.setTubok({
                content: markdownValue,
                title: title,
                descript: descript,
                types: types,
                image: image
            })

            console.log(res)
        },
        //根据id获取内容
        async getTubokid() {
            let res = await this.api.getTubokid({
                params: {
                    _id: "5c924fdb5c00c83418896a09"
                }
            })
            
            this.markdown.initialValue = res.data[0].content
        },
        //手动保存
        saveClick() {
            let { title,descript,types,image } = this.form

            if(!title) {
                this.$Message.info('请输入标题')
                return
            } else if (!descript) {
                this.$Message.info('请输入描述')
                return
            } else if (!types) {
                this.$Message.info('请选择标签')
                return
            } else if (!image) {
                this.$Message.info('请输入缩略图地址')
                return
            } else {
                this.$refs.markdown.handleSave()
            }
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
        display flex
        flex-direction row

        .ivu-icon {
            font-size 24px
        }
        .ivu-btn {
            margin-right 12px
        }

        .primary {
            flex 1
        }
    }

    .root-edit {
        position relative

    }
}
</style>
