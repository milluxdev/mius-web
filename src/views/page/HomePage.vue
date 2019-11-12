<template>
  <div class="container">
    <div class="home">
      <div class="home-header">
        <el-row>
          <el-col :span="10">
            <h1>Mius</h1>
            <p>
              一个简单的Ygopro大厅客户端，集成多个服务器
            </p>
            <div class="download-btn">
              <router-link to="/download" class="btn"><i class="el-icon-download"></i>下载应用</router-link>
            </div>
            <p class="version-info">当前版本v1.1.6于2019年11月12日发布
            </p>
          </el-col>
          <el-col :span="14">
            <img class="screen" alt="Mius" :src="miusUrl">
          </el-col>
        </el-row>
      </div>
      <div class="server">
        <div class="title text-center">
          <h1><span>服务器列表</span></h1>
          <p>Mius 可以使用的服务器列表</p>
        </div>
        <div class="text-center">
          <el-row :gutter="20">
            <el-col :span="6">
              <h4>YGOPro Koishi服</h4>
            </el-col>
            <el-col :span="6">
              <h4>YGOPro 222DIY服</h4>
            </el-col>
            <el-col :span="6">
              <h4>萌卡MyCard</h4>
            </el-col>
            <el-col :span="6">
              <h4>YGOPro 1311服</h4>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="features">
        <div class="title text-center">
          <h1><span>现有功能</span></h1>
          <p>Mius 现在有的一些功能</p>
        </div>
        <div class="list text-center">
          <el-row type="flex" justify="space-between">
            <el-col :span="6">
              <img class="screen" alt="Mius" :src="miusUrl">
              <h4>服务器房间信息</h4>
              <p>Mius 可以显示服务器上等待玩家加入和决斗中的房间列表</p>
            </el-col>
            <el-col :span="6">
              <img class="screen" alt="Mius" :src="deckListUrl">
              <h4>卡组列表</h4>
              <p>Mius 可以显示和编辑本地的卡组列表</p>
            </el-col>
            <el-col :span="6">
              <img class="screen" alt="Mius" :src="myCardUrl">
              <h4>MyCard</h4>
              <p>Mius 可以使用MyCard账号查看竞技排位成绩和竞技场决斗记录以及进行竞技匹配、娱乐匹配、自定义游戏、观战等操作</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import mius from '@/assets/mius.png';
  import deckList from '@/assets/deckList.png';
  import myCard from '@/assets/myCard.png';
  export default {
    data() {
      return {
        miusUrl: mius,
        deckListUrl: deckList,
        myCardUrl: myCard
      }
    },
    methods: {}
  }
</script>
<style>
  .text-center {
    text-align: center;
  }

  .home-header h1 {
    font-size: 1.5em;
  }

  .home-header p {
    color: black;
    font-weight: 300;
    margin-bottom: 40px;
  }

  .screen {
    width: 100%;
    min-height: 50px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.8);
  }

  a {
    text-decoration: none;
  }

  .download-btn {
    margin-bottom: 25px
  }

  .btn {
    background: #3974ff;
    padding: 15px 40px;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2);
    box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2);
  }

  .version-info {
    font-size: 12px;
    margin-bottom: 0 !important;
  }

  .server {
    margin: 0;
    padding-top: 30px;
  }

  .title h1 {
    font-size: 28px;
    line-height: 40px;
    color: #354656;
    margin: 0px 0 4px;
  }

  .title p {
    color: #9ea5a1;
    font-style: italic;
    margin: 0;
  }

  .features {
    margin: 0;
    padding-top: 40px;
  }

  .features .list {
    padding-top: 20px;
  }

  .features h4 {
    padding-top: 20px;
    margin: 0px 0px 10px;
  }

  .features p {
    font-size: 14px;
    margin: 0;
  }
</style>