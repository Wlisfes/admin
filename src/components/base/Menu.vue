<template>
    <Menu accordion theme="dark" width="auto" :class="ClassName">
        <Submenu name="1">
            <template slot="title">
                <Icon type="logo-octocat" />
                用户管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-paper" />
                文章管理
            </template>
            <MenuItem name="2-1" to="/all/tulist">文章列表</MenuItem>
            <MenuItem name="2-2" to="/add/tubook">添加文章</MenuItem>
            <MenuItem name="2-3" to="/dll/turubb">草稿箱</MenuItem>
            <!-- <MenuItem name="2-4">文章分类</MenuItem> -->
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-leaf" />
                标签管理
            </template>
            <MenuItem name="3-1" to="/all/label">全部标签</MenuItem>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="md-paper" />
                留言板管理
            </template>
            <MenuItem name="4-1" to="/message">留言板</MenuItem>
        </Submenu>
        <Submenu name="5">
            <template slot="title">
                <Icon type="ios-chatbubbles" />
                评论管理
            </template>
            <MenuItem name="5-1" to="/articlereview">文章评论</MenuItem>
        </Submenu>
        <Submenu name="6">
            <template slot="title">
                <Icon type="ios-apps" />
                项目管理
            </template>
            <MenuItem name="6-1" to="/all/project">全部项目</MenuItem>
            <MenuItem name="6-2" to="/add/project">新增项目</MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
export default {
    props: ['ClassName']
}
</script>

<style lang="stylus" scoped>
.menu-item {
    span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
}

.collapsed-menu {
    span {
        width: 0px;
        transition: width .2s ease;
    }
    
    i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
}

.ivu-menu-submenu {
    background-color #001529

    .ivu-menu {
        background-color #001529
    }
}
</style>
