<template>
  <div class="home">
  <div class="container">
    <div class="Home-nav">
      <el-menu
  :default-active="activeIndex2"
  mode="horizontal"
  style="width:90%"
  background-color="rgb(247,247,247)"
  text-color="#000"
  active-text-color="red">
  <el-menu-item index="1"><router-link to="/login">登录</router-link></el-menu-item>
  <el-menu-item index="3"><router-link to="/about">消息中心</router-link></el-menu-item>
  <el-menu-item index="4">订单管理</el-menu-item>
</el-menu>
  <div class="avator">
    <el-dropdown trigger="click">
      <el-avatar style="width: 4.5rem;height: 4.5rem" :src="circleUrl"></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-gerenzhongxin"><router-link to="/user">个人中心</router-link></el-dropdown-item>
        <el-dropdown-item icon="el-icon-genghuantouxiang">更换头像</el-dropdown-item>
        <el-dropdown-item icon="el-icon-xiugaimima">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-tuichudenglu">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
    </div>
    <el-carousel :interval="4000" type="card" height="20rem">
    <el-carousel-item style="height: 20rem;" v-for="item in banner" :key="item.id"  height="20rem">
      <el-image
      style="width: 100%; height: 100%"
      :src="item.bannerImgUrl"></el-image>
    </el-carousel-item>
  </el-carousel>
  <div class="viedo">
    <el-card shadow="hover">
      视频窗口视图
    </el-card>
  </div>
  <div class="testVideo">
    <videoPlayer id="testId" :options="playerOptions"></videoPlayer>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <span style="font-size: 2rem;font-weight: bold;">春江花月夜</span>
  </div>
  <div style="font-size: 1rem;">
      每想你一次，天上飘落一粒沙，从此形成了撒哈拉。每想你一次，天上就掉下一滴水，于是形成了太平洋。
    </div>
</el-card>
  </div>
  <HeaderCard>
    <span>悬浮测试</span>
  </HeaderCard>
  <div class="navList">
    <div class="nav-item">
<ul>
  <li class="test" @mouseover="handlerHover(item.imgId)" v-for="item in navList" :key="item.id">{{ item.name }}</li>
</ul>
  </div>
  <div class="picture">
    <el-image
    :src="navImageUrl"
      fit="cover"></el-image>
  </div>
  </div>
  <HeaderCard>
    <span>卡片展示</span>
  </HeaderCard>
  <div class="cradList">

  </div>
  </div>
  <el-backtop :bottom="100"> <el-popover
    placement="top-start"
    title="回到顶部"
    width="200"
    trigger="hover"
    content="点击回到顶部">
    <i class="el-icon-huidaodingbu backTop" slot="reference"></i>
  </el-popover>
  </el-backtop>
  </div>
</template>
<script>
// @ is an alias to /src
import { videoPlayer } from 'vue-video-player'
import HeaderCard from '@/components/HeaderCard'
import 'video.js/dist/video-js.css'
export default {
  components: {
    videoPlayer,
    HeaderCard
  },
  mounted () {
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '2',
      navList: [
        { id: '111', imgId: '1201', name: '秋梦绿1' },
        { id: '112', imgId: '1202', name: '秋梦绿2' },
        { id: '113', imgId: '1203', name: '秋梦绿3' },
        { id: '11', imgId: '1204', name: '秋梦绿4' },
        { id: '1141', imgId: '1205', name: '秋梦绿5' },
        { id: '1118', imgId: '1206', name: '秋梦绿6' }
      ],
      navImage: [
        { id: '1201', name: 'picture1', url: 'https://img0.baidu.com/it/u=599570667,1691769483&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' },
        { id: '1202', name: 'picture1', url: 'https://img2.baidu.com/it/u=2738750219,1826527518&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800' },
        { id: '1203', name: 'picture1', url: 'https://img2.baidu.com/it/u=439658548,1727135777&fm=253&fmt=auto&app=120&f=JPEG?w=1139&h=636' },
        { id: '1204', name: 'picture1', url: 'https://img0.baidu.com/it/u=3070106107,1246375567&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800' },
        { id: '1205', name: 'picture1', url: 'https://img0.baidu.com/it/u=3070106107,1246375567&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800' },
        { id: '1206', name: 'picture1', url: 'https://img0.baidu.com/it/u=3070106107,1246375567&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800' }
      ],
      navImageUrl: 'https://img0.baidu.com/it/u=599570667,1691769483&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      circleUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      banner: [
        { id: '1', text: '自然风光', bannerImgUrl: 'https://img0.baidu.com/it/u=599570667,1691769483&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' },
        { id: '2', text: '美丽景色', bannerImgUrl: 'https://img2.baidu.com/it/u=2738750219,1826527518&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800' },
        { id: '3', text: '大好山河', bannerImgUrl: 'https://img2.baidu.com/it/u=439658548,1727135777&fm=253&fmt=auto&app=120&f=JPEG?w=1139&h=636' },
        { id: '4', text: '湖光山色', bannerImgUrl: 'https://img0.baidu.com/it/u=3070106107,1246375567&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800' }
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        controls: true, // 控制条
        preload: 'auto', // 视频预加载
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        html5: { hls: { withCredentials: false } },
        aspectRatio: '16:8', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4',
          src: require('@/assets/小电影.mp4')
          // src: 'src/views/sjsc/sjsc01_carInfoManage/2.mp4'//你所放置的视频的地址，最好是放在服务器上
        }],
        poster: require('@/assets/封面.png'), // 你的封面地址（覆盖在视频上面的图片）

        notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    }
  },
  methods: {
    playVideo () {
      this.videoPlayer = document.querySelector('video')
      if (this.videoPlayer) {
        this.videoPlayer.play()
      }
    },
    pauseVideo () {
      if (this.videoPlayer) {
        this.videoPlayer.pause()
      }
    },
    handlerHover (imgId) {
      this.navImage.forEach((item) => {
        if (item.id === imgId) {
          this.navImageUrl = item.url
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);
}
a{
text-decoration: none;
}
  /deep/.el-carousel__button{
    width: 1rem;
    height: 1rem;
    border: 1px solid black;
    border-radius: 50%;
    background-color: black;
    overflow: hidden;
  }
.container{
  width:1190px;
  margin: 0 auto
}
.el-menu-item is-active{
  color:red;
  border-bottom-color: red
}
.Home-nav{
  width:100%;
  display: flex;
  background-color:rgb(247,247,247);
  flex-flow: row nowrap;
  justify-content:space-between;
  align-items: center;
  flex: 1 1 0;
}
.avator{
  font-size: 2rem;
  width:4.5rem;
  height: 4.5rem;
  overflow: hidden;
  margin-top: 0;
}
.el-dropdown-menu__item{
  font-size: 1rem;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .testVideo{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 300px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  #testId{
    width: 50%;
  }
.box-card{
    flex: 1 1 0;
    width: 300px;
    height: 100%;
    background-color: white;
  }
  /deep/.vjs-poster{
    background-size: cover;
  }
  .navList{
    width: 1190px;
    height: 600px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 1rem;
  }
  .nav-item{
    float:left;
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    width: 10vw;
    background-color: skyblue;
    text-decoration: none;
  }
  li{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  li:hover{
    color: red;
    cursor: pointer;
  }
  .picture{
    flex: 1 1 0;
  }
  /deep/.el-image{
    width: 100%;
    height: 100%;
  }
  .cradList{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  .backTop{
    font-size: 5rem;
  }
</style>
