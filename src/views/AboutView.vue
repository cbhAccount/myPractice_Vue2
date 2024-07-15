<template>
  <div class="about">
    <videoPlayer id="testId" :options="playerOptions"></videoPlayer>
    <div>
      <video src="@/assets/小电影.mp4" controls style="width: 200px;height: 100px;background-color: aliceblue;"></video>
    </div>
  </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      playerOptions: {
        id: 'testId',
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
        // poster: "http://39.106.117.192:8080/static/indexImg.png", //你的封面地址（覆盖在视频上面的图片）                    width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    }
  }
}
</script>
<style lang="less" scoped>
#testId{
  width: 40vw;
  height: 30vw;
}
</style>
