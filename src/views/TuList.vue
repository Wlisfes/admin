/*
 * @Author: Parker 
 * @Date: 2019-03-19 14:23:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-20 21:32:56
 * @Types 文章列表
 */


<template>
    <div id="root">
        <Table border :loading="deleteload" size="large" :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="title">
                <strong>{{ row.title }}</strong>
            </template>
            <template slot-scope="{ row }" slot="image">
                <img style="margin: 5px auto;display: block;" width="80" :src="row.image" alt="456" srcset="">
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <i-switch size="large" v-model="row.status" @on-change="switchChange($event,index)" style="margin-right: 10px">
                    <span slot="open">NO</span>
                    <span slot="close">OFF</span>
                </i-switch>
                <Button type="primary" @click="move(index)">草稿</Button>
            </template>
        </Table>

        
    </div>
</template>
<script>
export default {
    data () {
        return {
            DrawerStyle: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '53px',
                position: 'static'
            },

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
        //设置为草稿
        move (index) {
            this.$Modal.confirm({
                title: '设置为草稿',
                content: '<p>确定要将此文章添加到草稿箱吗？</p>',
                onOk: () => {
                    this.updateTubokDraftid(index)
                },
                onCancel: () => {
                    console.log('Cancel')
                }
            });

        },
        //开关change事件
        async switchChange(e,index) {
            let { _id } = this.data6[index]

            let res = await this.api.updateTubokStatusid({
                _id: _id,
                status: e
            })

            setTimeout(() => {
                this.data6 = res.data
                this.$Message.success(
                    e ? '发布成功' : '已取消发布'
                )
                console.log(res)
            },300)
        },
        //获取全部文章
        async getTubokAll() {
            let res = await this.api.getTubokAll()

            this.data6 = res.data
            console.log(res.data)
        },
        //设置为草稿
        async updateTubokDraftid(index) {
            let { _id } = this.data6[index]

            this.deleteload = true
            let res = await this.api.updateTubokDraftid({
                    _id: _id,
                    draft: true
                })
            
            this.data6 = res.data
            this.deleteload = false
            this.$Message.success('添加成功')
        }
    },
    created () {
        

        this.getTubokAll()
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

