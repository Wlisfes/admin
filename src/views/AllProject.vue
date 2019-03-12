<template>
    <div id="root">
        <Table border :columns="columns12" height="500" :data="data6">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                <Button type="error" size="small" @click="remove(index)">Delete</Button>
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
                    title: '项目名称',
                    slot: 'name'
                },
                {
                    title: '项目描述',
                    key: 'description'
                },
                {
                    title: '预览地址',
                    key: 'view'
                },
                {
                    title: 'GitHub地址',
                    key: 'github'
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],
            data6: []
        }
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `项目名称：${this.data6[index].name}<br>
                          项目描述：${this.data6[index].description}<br>
                          预览地址：${this.data6[index].view}<br>
                          Github地址：${this.data6[index].github}`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        }
    },
    created () {
        let arr = []
        for(let i = 0; i < 20; i++) {
            arr.push({
                    name: 'WeChat',
                    description: "使用nodejs koa框架搭建的微信公众号后台",
                    view: 'https://github.com/Wlisfes/WeChat',
                    github: 'https://github.com/Wlisfes/WeChat'
                })
        }

        this.data6 = arr
    }
}
</script>

<style lang="stylus" scoped>
#root {
    
}
</style>

