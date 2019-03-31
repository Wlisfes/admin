<template>
    <div id="root">
        <Table border :loading="deleteload" :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <!-- <template  slot="status">
                <Button type="default" :size="small">编辑</Button>
            </template> -->
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" style="margin-right: 10px" @click="show(index)">编辑</Button>
                <Button type="error" @click="remove(index)">删除</Button>
            </template>
        </Table>

        <template>
            <Drawer title="编辑项目" 
                    width="720"
                    v-model="value1" 
                    :mask-closable="false"
                    :styles="DrawerStyle">
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
                <Spin size="large" fix v-if="editload"></Spin>
            </Drawer>
        </template>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value1: false,
            DrawerStyle: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '53px',
                position: 'static'
            },
            //编辑Data
            form: {
                name: '',
                description: '',
                types: 'nodejs',
                github: '',
                status: false,
                _id: ''
            },
            editload: false,



            deleteload: false,
            columns12: [
                {
                    title: '项目名称',
                    slot: 'name',
                    width: 120,
                    align: 'center'
                },
                {
                    title: '项目描述',
                    key: 'description'
                },
                {
                    title: '项目类型',
                    key: 'types',
                    width: 100,
                    align: 'center'
                },
                {
                    title: 'GitHub地址',
                    key: 'github'
                },
                {
                        title: '状态',
                        key: 'status',
                        width: 140,
                        align: 'center',
                        render: (h, params) => {
                            const row = params.row;
                            const color = row.status ? 'success':'error';
                            const text = row.status ? '已发布' : '未发布'

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        }
                    },
                {
                    title: '操作',
                    slot: 'action',
                    width: 200,
                    align: 'center'
                }
            ],
            data6: []
        }
    },
    methods: {
        //编辑
        show (index) {
            let Data = this.data6[index]
            
            this.form.name = Data.name
            this.form.description = Data.description
            this.form.github = Data.github
            this.form.status = Data.status
            this.form.types = Data.types
            this.form._id = Data._id

            this.value1 = true
        },
        //删除
        remove (index) {
            this.$Modal.confirm({
                title: '删除项目',
                content: '<p>确定要删除此项目吗？</p>',
                onOk: () => {
                    this.deleteItem(index)
                },
                onCancel: () => {
                    console.log('Cancel')
                }
            });

        },
        //提交修改
        async submitEvent() {
            let ops = this.form

                this.editload = true
            let res = await this.api.updateItem(ops)

                this.data6 = res.data
                console.log(res)

                this.editload = false
                this.value1 = false
                this.$Message.success('修改成功！')
            
        },
        //获取项目
        async getItem() {
            let res = await this.api.getItem()

            this.data6 = res.data
        },
        //删除项目
        async deleteItem(index) {
            let { _id } = this.data6[index]

            this.deleteload = true
            let res = await this.api.deleteItem({
                params: {
                    _id
                }
            })
            
            this.data6 = res.data
            this.deleteload = false
            this.$Message.success('删除成功！')
            
        }
    },
    created () {
        

        this.getItem()
    }
}
</script>

<style lang="stylus" scoped>
#root {
    position relative 

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

