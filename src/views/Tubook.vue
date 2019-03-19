/*
 * @Author: 情雨随风 
 * @Date: 2019-03-15 22:26:34 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-19 16:34:40
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
            <vue-editor v-model="content"></vue-editor>
            <div>{{content}}</div>
        </div>
    </div>
</template>

<script>
import { VueEditor,Quill  } from "vue2-editor"
export default {
    data () {
        return {
            form: {
                name: '',
                subtitle: '',
                types: ''
            },
            content: ''
            
        }
    },
    methods: {
        
    },
    components: {
        VueEditor
    },
    created () {
        console.log(Quill)
    }
}
</script>

<style lang="stylus" scoped>
#root {
    
    .root-Icon {
        margin-bottom 40px

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
