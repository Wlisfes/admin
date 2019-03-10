<template>
  <Menu accordion theme="dark" width="auto" :class="ClassName">
        <MenuItem name="1">
            <Icon type="logo-octocat" />
            <span>Option 1</span>
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-paper" />
            <span>Option 2</span>
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-leaf" />
            <span>Option 3</span>
        </MenuItem>
        <MenuItem name="4">
            <Icon type="md-paper" />
            <span>Option 3</span>
        </MenuItem>
        <MenuItem name="5">
            <Icon type="ios-chatbubbles" />
            <span>Option 3</span>
        </MenuItem>
        <MenuItem name="6">
            <Icon type="ios-apps" />
            <span>Option 3</span>
        </MenuItem>
    </Menu>
</template>

<script>
export default {
    props: ['ClassName']
}
</script>

<style lang="stylus" scoped>
.menu-item {
    overflow hidden

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
</style>

