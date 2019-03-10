<template>
    <div id="login">
        <div class="login-con">
            <div class="ivu-card-head">
                <p>
                    <i class="ivu-icon ivu-icon-log-in"></i>
                    <span>欢迎登录</span>
                </p>
            </div>
            <Form class="login-form" ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username" @keyup.enter.native="handleSubmit('formInline')">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password" @keyup.enter.native="handleSubmit('formInline')">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" :loading="loadShow" @click="handleSubmit('formInline')">登录</Button>
                </FormItem>
                <p class="login-tip">输入任意用户名和密码即可</p>
            </Form>
        </div>
    </div>
</template>

<script>
import { setToken } from '../lib/util.js'
export default {
    data () {
        return {
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
                ]
            },
            loadShow: false
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!')
                    this.loadShow = true
                    
                    setTimeout(() => {
                        this.loadShow = false
                        setToken({
                            code: 200,
                            name: "情雨随风"
                        })
                        this.$router.push({ path: `/` })
                    },1500)
                } else {
                    this.$Message.error('Fail!');
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
#login {
    width 100%
    height 100%
    background-image url('../assets/image/login.jpg')
    background-size cover
    position relative
    background-position 50% center

    .login-con {
        position absolute
        right 160px
        top 50%
        transform translateY(-60%)
        width 300px
        background-color #fff
        border-radius 4px

        .ivu-card-head {
            border-bottom 1px solid #e8eaec
            padding 14px 16px
            line-height 1

            p {
                display inline-block
                width 100%
                height 20px
                line-height 20px
                font-size 14px
                color #17233d
                font-weight 700
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
            }
        }

        .login-form {
            padding 16px

            .ivu-btn {
                width 100%
            }

            .login-tip {
                font-size 10px
                text-align center
                color #c3c3c3
            }
        }
    }
}
</style>

