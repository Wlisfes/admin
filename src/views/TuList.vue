/*
 * @Author: Parker 
 * @Date: 2019-03-19 14:23:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-19 14:44:47
 * @Types 文章列表
 */


<template>
    <div id="root">
        <Table border :loading="deleteload" size="large" :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="title">
                <strong>{{ row.title }}</strong>
            </template>
            <template slot-scope="{ row }" slot="image">
                <img width="80" :src="row.image" alt="456" srcset="">
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" style="margin-right: 10px" @click="show(index)">编辑</Button>
                <Button type="error" @click="remove(index)">删除</Button>
            </template>
        </Table>

        
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
                    title: '文章标题',
                    slot: 'title',
                    width: 240,
                    align: 'left'
                },
                {
                    title: '文章描述',
                    key: 'descript'
                },
                {
                    title: '项目类型',
                    key: 'types',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '缩略图',
                    slot: 'image',
                    width: 140,
                    align: 'center'
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
        //获取全部文章
        async getTubok() {
            let res = await this.api.getTubok()

            this.data6 = res.data
            console.log(res.data)
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
        

        this.getTubok()
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

