/*
 * @Author: 情雨随风 
 * @Date: 2019-04-05 19:22:14 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-04-06 01:36:29
 * @Types 笔记列表
 */



<template>
    <div id="root">
        <Table border :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="title">
                <strong>{{ row.title }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <i-switch size="large" v-model="row.status" @on-change="switchChange($event,index)" style="margin-right: 10px">
                    <span slot="open">NO</span>
                    <span slot="close">OFF</span>
                </i-switch>
                <Button type="error" @click="remove(index)">删除</Button>
            </template>
        </Table>

        
    </div>
</template>
<script>
export default {
    data () {
        return {
            columns12: [
                {
                    title: '笔记标题',
                    slot: 'title',
                    align: 'left'
                },
                {
                    title: '笔记类型',
                    key: 'types',
                    width: 140,
                    align: 'center',
                    render: (h, params) => {
                        const row = params.row;
                        const color = 'success'
                        const text = row.types

                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: 'success'
                            }
                        }, text);
                    }
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
        //删除
        remove(index) {
            this.$Modal.confirm({
                title: '删除笔记',
                content: '<p>确定要将此笔记删除吗？</p>',
                onOk: () => {
                    let { _id } = this.data6[index]
                    this.deleteNotes(_id)
                }
            })
        },
        //开关change事件
        async switchChange(e,index) {
            try {
                let { _id } = this.data6[index]
                var res = await this.api.updateNotesid({
                    params: {
                        _id: _id,
                        status: e
                    }
                })
            } catch (e) {
                this.$Message.error(
                    e ? '发布失败' : '取消失败'
                )
                return
            }

            if(res.code == 200) {
                setTimeout(() => {
                    this.data6 = res.data
                    this.$Message.success(
                        e ? '发布成功' : '已取消发布'
                    )
                },300)
            } else {
                setTimeout(() => {
                    this.$Message.info(
                        e ? '发布失败' : '取消失败'
                    )
                },300)
            }
        },
        //获取全部笔记
        async getNotes() {
            try {
                var res = await this.api.getNotes()
            } catch (e) {
                this.$Message.error('网络错误，数据获取失败！')
                return
            }
            if(res.code == 200) {
                this.data6 = res.data
            } else {
                this.$Message.error('网络错误，数据获取失败！')
            }
        },
        //删除笔记
        async deleteNotes(id) {
            try {
                var res = await this.api.deleteNotes({
                    params: {
                        _id: id
                    }
                })
            } catch (e) {
                this.$Message.error('删除失败')
                return
            }

            if(res.code == 200) {
                this.data6 = res.data
                this.$Message.success('删除成功')
            } else {
                this.$Message.info('删除失败')
            }
        }
    },
    created () {
        this.getNotes()
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