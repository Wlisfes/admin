/*
 * @Author: 情雨随风 
 * @Date: 2019-03-11 23:18:30 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-15 16:57:37
 * @Types 新增项目
 */


<template>
    <div id="#root">
        <i-form>
            <FormItem>
                <i-input v-model="form.name" placeholder="请输入项目名称"></i-input>
            </FormItem>
            <FormItem>
                <i-input v-model="form.description" placeholder="请输入项目描述"></i-input>
            </FormItem>
            <FormItem>
                <i-input v-model="form.github" placeholder="请输入项目GitHub地址"></i-input>
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
        <div style="margin-top: 24px">
            <i-switch size="large" v-model="form.status">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </i-switch>
        </div>
        <Button type="primary" class="submit" @click.native="submitEvent">提 交</Button>
        <Spin size="large" fix v-if="upload"></Spin>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: '',
                description: '',
                types: '',
                github: '',
                status: false
            },
            Types: 'primary',
            upload: false
        }
    },
    methods: {
        //提交
        async submitEvent() {
            let ops = this.form
            
            if(!ops.name) {
                this.$Message.info('请输入项目名称')
            }
            else if(!ops.description) {
                this.$Message.info('请输入项目描述')
            }
            else if(!ops.github) {
                this.$Message.info('请输入项目GitHub地址')
            }
            else if(!ops.types) {
                this.$Message.info('请选择项目类型')
            }
            else {
                this.upload = true

                let res = await this.api.setItem(ops)

                console.log(res)

                this.$Message.success('新增成功！')
                
                this.form.name = ''
                this.form.description = ''
                this.form.types = ''
                this.form.github = ''
                this.form.status = false
                this.upload = false
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
#root {
    position relative
    height auto

    .root-Icon {
        .ivu-icon {
            font-size 24px
        }
        .ivu-btn {
            margin-right 12px
        }
    }

    .submit {
        margin-top 24px
        font-size 14px
    }

}
</style>
