/*
 * @Author: 情雨随风 
 * @Date: 2019-03-11 23:18:30 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-13 23:08:26
 * @Types 新增项目
 */


<template>
    <div id="#root">
        <i-form>
            <FormItem>
                <i-input v-model="formLeft.input1" placeholder="请输入项目名称"></i-input>
            </FormItem>
            <FormItem>
                <i-input v-model="formLeft.input2" placeholder="请输入项目描述"></i-input>
            </FormItem>
            <FormItem>
                <i-input v-model="formLeft.input3" placeholder="请输入项目GitHub地址"></i-input>
            </FormItem>
        </i-form>

        <div class="root-Icon">
            <RadioGroup v-model="button4" type="button" size="large">
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
        <Button type="primary" class="submit" @click.native="submitEvent">提 交</Button>
        <Spin size="large" fix v-if="upload"></Spin>
    </div>
</template>

<script>
export default {
    data () {
        return {
            formLeft: {
                input1: '',
                input2: '',
                input3: ''
            },
            Types: 'primary',
            button4: '',
            upload: false
        }
    },
    methods: {
        submitEvent(ops) {
            this.upload = true
            setTimeout(() => {
                this.upload = false
                this.$Message.success('新增成功！')
            }, 1500)
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
