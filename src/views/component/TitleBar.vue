<template>
    <div class="title-bar">
        <div class="container">
            <h1>
                <a href="/">
                    <img width="146" height="38" :src="logoUrl" class="logo"/>
                </a>
            </h1>
            <el-menu :default-active="$route.name" class="menu" mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
                <el-menu-item index="home">首页</el-menu-item>
                <el-menu-item index="changelog">更新记录</el-menu-item>
                <el-menu-item index="download">下载</el-menu-item>
                <el-menu-item index="about">Github</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import logo from '@/assets/logo.png';
    export default {
        name: 'TitleBar',
        data() {
            return {
                logoUrl: logo,
            }
        },
        methods: {
            handleSelect(name) {
                this.$router.push({
                    name
                });
            }
        },
        created() {
            
        }
    }
</script>
<style>
    .title-bar {
        height: 60px;
        background-color: #fff;
        color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 60px;
        z-index: 100;
        position: relative;
        box-shadow: 0 1px 3px -1px rgba(0,0,0,0.25);
    }
    .title-bar .container {
        height: 100%;
        box-sizing: border-box;
    }
    .title-bar h1{
        margin: 0;
        font-size: 32px;
        font-weight: 400;
        float: left;
    }
    .title-bar h1 .logo{
        vertical-align: middle;
    }
    .title-bar .menu {
        float: right;
        height: 100%;
        line-height: 60px;
        background: transparent;
        padding: 0;
        margin: 0;
    }
    h1 {
        display: block;
    }
    .el-menu--horizontal>.el-menu-item {
        height: 100% !important ;
        line-height: 60px !important ;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 100% !important ;
        line-height: 60px !important ;
    }
    .el-menu-item{
        font-size: 15px !important ;
    }
</style>