/*
 * @Author: 情雨随风 
 * @Date: 2019-04-05 18:41:05 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-04-05 19:19:49
 * @Types 添加笔记
 */


<template>
    <div id="root">
        <div class="root-form" v-if="true">
            <i-form>
                <FormItem>
                    <i-input v-model="form.title" placeholder="请输入笔记标题"></i-input>
                </FormItem>
            </i-form>
            <div class="root-Icon">
                <RadioGroup v-model="form.types">
                    <Radio :label="la.name" v-for="(la, i) in labelList" :key="i"></Radio>
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
                types: '',
            },
            //标签列表
            labelList: [],

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
            this.setNotes(ops)
        },
        //保存事件
        async setNotes(body) {
            try {
                let { title,types } = this.form
                let { markdownValue } = body

                var res = await this.api.setNotes({
                    content: markdownValue,
                    title: title,
                    types: types
                })
            } catch (e) {
                console.log(e)
                return
            }
            if(res.code == 200) {
                this.$Message.success('笔记添加成功');
            } else {
                this.$Message.error('笔记添加失败');
            }
        },
        //获取标签
        async getLabel() {
            try {
                var res = await this.api.getLabel()
            } catch (e) {
                console.log(e)
                return
            }
            
            if(res.code == 200) {
                this.labelList = res.data
            }
        },
        //手动保存
        saveClick() {
            let { title,types } = this.form

            if(!title) {
                this.$Message.info('请输入标题')
                return
            } else if (!types) {
                this.$Message.info('请选择笔记类型')
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
        this.getLabel()
    }
}
</script>

<style lang="stylus" scoped>
#root {
    
    .root-Icon {
        margin-bottom 20px
        display flex
        flex-direction row
        align-items center

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