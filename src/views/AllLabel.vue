<template>
    <div id="root">
        <Table border :loading="deleteload" :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" style="margin-right: 10px" @click="newLabel.show = true">新增</Button>
                <Button type="primary" style="margin-right: 10px" @click="Edit(index)">编辑</Button>
                <Button type="error" @click="remove(index)">删除</Button>
            </template>
        </Table>

        <Modal v-model="newLabel.show" width="560" :mask-closable="false" @on-ok="setLabel">
            <p slot="header" class="ivu-modal-confirm-head" style="color: #2d8cf0;text-align:center;font-size: 16px; ">
                <Icon size="20" type="ios-add-circle-outline" />
                <span style="margin-left: 5px;">新增标签</span>
            </p>
            <div>
                <div style="margin-bottom: 10px;">
                    <i-input prefix="ios-leaf" v-model="newLabel.name" placeholder="标签 例如：nodejs"></i-input>
                </div>
                <div style="margin-bottom: 10px;">
                    <ColorPicker style="width: 100%;" v-model="newLabel.color" />
                </div>
                <div>
                    <i-switch size="large" v-model="newLabel.status">
                        <span slot="open">NO</span>
                        <span slot="close">OFF</span>
                    </i-switch>
                </div>
            </div>
        </Modal>

        <Modal v-model="editLabel.show" width="560" :mask-closable="false" @on-ok="updateLabel">
            <p slot="header" class="ivu-modal-confirm-head" style="color: #2d8cf0;text-align:center;font-size: 16px; ">
                <Icon size="20" type="md-swap" />
                <span style="margin-left: 5px;">编辑标签</span>
            </p>
            <div>
                <div style="margin-bottom: 10px;">
                    <i-input prefix="ios-leaf" v-model="editLabel.name" placeholder="标签 例如：nodejs"></i-input>
                </div>
                <div style="margin-bottom: 10px;">
                    <ColorPicker style="width: 100%;" v-model="editLabel.color" />
                </div>
                <div>
                    <i-switch size="large" v-model="editLabel.status">
                        <span slot="open">NO</span>
                        <span slot="close">OFF</span>
                    </i-switch>
                </div>
            </div>
        </Modal>
    </div>
</template>
<script>
export default {
    data () {
        return {
            //新增窗口控制
            newLabel: {
                show: false,
                name: '',
                color: '#87D068',
                status: false
            },

            //编辑窗口控制
            editLabel: {
                show: false,
                name: '',
                color: '#87D068',
                status: false,
                _id: ''
            },

            deleteload: false,
            columns12: [
                {
                    title: '标签类型',
                    slot: 'name',
                    align: 'center',
                    render: (h, params) => {
                        const row = params.row
                        const text = row.name
                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: row.color
                            }
                        }, text);
                    }
                },
                {
                    title: '状态',
                    key: 'status',
                    align: 'center',
                    render: (h, params) => {
                        const row = params.row;
                        const color = row.status ? 'success':'error';
                        const text = row.status ? '已开放' : '未开放'

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
                    align: 'center'
                }
            ],
            data6: []
        }
    },
    methods: {
        //编辑
        Edit(index) {
            let { name,color,status,_id } = this.data6[index]

            this.editLabel.name = name
            this.editLabel.color = color
            this.editLabel.status = status
            this.editLabel._id = _id
            this.editLabel.show = true 
        },
        //确定编辑
        async updateLabel() {
            let { name,color,status,_id } = this.editLabel
            try {
                var res = await this.api.updateLabel({
                    name,color,status,_id
                })
            } catch (e) {
                console.log(e)
                return
            }

            if (res.code == 200) {
                this.data6 = res.data
                this.$Message.success('修改成功！')
            } else {
                console.error('new http error')
            }
        },
        //确定新增
        async setLabel() {
            let { status,name,color } = this.newLabel
            
            try {
                var res = await this.api.setLabel({
                    status,name,color
                })
            } catch (e) {
                console.log(e)
                return
            }

            if (res.code == 200) {
                this.data6 = res.data
                this.$Message.success('添加成功！')
            } else {
                console.error('new http error')
            }
        },
        //删除标签
        async deleteLabel(_id) {
            try {
                var res =  await this.api.deleteLabel({
                    params: {
                        _id
                    }
                })
            } catch (e) {
                console.log(e)
                return
            }

            if (res.code == 200) {
                this.data6 = res.data
                this.$Message.success('删除成功！')
            } else {
                console.error('new http error')
            }
        },
        //删除
        remove (index) {
            this.$Modal.confirm({
                title: '删除项目',
                content: '<p>确定要删除此标签吗？</p>',
                onOk: () => {
                    let { _id } = this.data6[index]
                    this.deleteLabel(_id)
                },
                onCancel: () => {
                    console.log('Cancel')
                }
            });
        },
        //获取全部标签
        async getLabel() {
            try {
                var res = await this.api.getLabel()
            } catch (e) {
                console.log(e)
                return
            }

            if (res.code == 200) {
                this.data6 = res.data
            } else {
                console.error('new http error')
            }
        }
    },
    created () {
        this.getLabel()
        
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

