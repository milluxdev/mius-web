<template>
  <div class="container">
    <div class="download">
      <div class="download-title">
        <div class="download-text">
          <h3>下载应用</h3>
          <p>一个简单的YGOPRO大厅客户端</p>
          <p>集成多个服务器</p>
        </div>
        <div class="items-wrap">
          <div class="item">
            <img :src="winUrl" alt="windows">
            <h5>Windows installers</h5>
            <el-button type="primary" round @click="download">下载</el-button>
          </div>
          <div class="item">
            <img :src="appleUrl" alt="apple">
            <h5>Mac installer</h5>
            <el-button type="success" disabled round>暂无</el-button>
          </div>
          <div class="item">
            <img :src="linuxUrl" alt="linux">
            <h5>Linux zip files</h5>
            <el-button type="success" disabled round>暂无</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import windows from '@/assets/windows.png';
  import apple from '@/assets/apple.png';
  import linux from '@/assets/linux.png';
  export default {
    data() {
      return {
        winUrl: windows,
        appleUrl: apple,
        linuxUrl: linux,
      }
    },
    methods: {
      download() {
        window.location.href = 'https://mius-1252282306.cos.ap-shanghai.myqcloud.com/win32/mius%20Setup%201.1.5.exe'
      }
    }
  }
</script>
<style>
  .download {
    padding-top: 20px;
    text-align: center;
  }

  .download .download-title .download-text {
    padding-bottom: 40px;
  }

  .download .download-title {
    font-size: 32px;
    display: block;
  }

  .download .download-title h3 {
    margin: 0;
    padding-bottom: 10px;
  }

  .download .download-title p {
    margin: 0;
    font-size: 20px;
  }

  .items-wrap {
    text-align: center;
    width: 100%;
    margin: 0 -15px 60px;
  }

  .items-wrap .item {
    display: inline-block;
    float: none;
    width: -webkit-calc(33.333% - 200px);
    width: -moz-calc(33.333% - 200px);
    width: calc(33.333% - 200px);
    margin: 0 20px;
    background-color: #fafbfc;
    -webkit-box-shadow: 0 3px 8px 0 #e6e8ed;
    -moz-box-shadow: 0 3px 8px 0 #e6e8ed;
    box-shadow: 0 3px 8px 0 #e6e8ed;
    padding: 40px 15px;
    text-align: center;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    vertical-align: middle;
    height: 200px;
  }

  .items-wrap .item h5 {
    font: 18px Exo-Bold, sans-serif;
    color: #1e4b64;
    line-height: 28px;
    margin: 0;
    padding-top: 10px;
  }
</style>