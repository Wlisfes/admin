/*
 * @Author: 情雨随风 
 * @Date: 2019-03-15 22:31:02 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-20 21:05:11
 * @Types 草稿箱
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
                <Button type="primary" style="margin-right: 10px" @click="show(index)">操作</Button>
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
        //获取全部草稿
        async getTubokDraftAll() {
            let res = await this.api.getTubokDraftAll()

            this.data6 = res.data
            console.log(res)
        },
        //把草稿添加到文章
        async updateTubokDraftid(index) {
            let { _id } = this.data6[index]

            this.deleteload = true
            let res = await this.api.updateTubokDraftid({
                    _id: _id,
                    draft: false
                })

            this.data6 = res.data
            this.deleteload = false
            this.$Message.success('添加成功')
        },
        //根据id删除草稿
        async deleteTubokid(index) {
            let { _id } = this.data6[index]

            this.deleteload = true
            let res = await this.api.deleteTubokid({
                params: {
                    _id: _id
                }
            })

            this.data6 = res.data
            this.deleteload = false
            this.$Message.success('删除成功')
        },
        //操作弹窗
        show(index) {
            this.$Modal.confirm({
                title: '添加到文章',
                content: '<p>确定要将此草稿添加到文章列表吗？</p>',
                onOk: () => {
                    this.updateTubokDraftid(index)
                }
            })
        },
        //删除弹窗
        remove(index) {
            this.$Modal.confirm({
                title: '删除文章',
                content: '<p>确定要将此草稿删除吗？</p>',
                onOk: () => {
                    this.deleteTubokid(index)
                }
            })
        }
    },
    created () {
        this.getTubokDraftAll()
    }
}
</script>

<style lang="stylus" scoped>

</style>

