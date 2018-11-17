<template>
  <section>
    <div class="video-part">
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
      ></video-player>
    </div>
    <nav>
      <Row >
        <i-col span="8">
          <router-link to="/classDetail/briefIntroduction">简介</router-link>
        </i-col>
        <i-col span="8">
          <router-link to="/classDetail/catalog">目录</router-link>
        </i-col>
        <i-col span="8">
          <router-link to="/classDetail/evaluate">评价</router-link>
        </i-col>
      </Row>
    </nav>
    <router-view/>
  </section>
</template>

<script>
    export default {
      name: 'class-detail',
      data: function () {
        return {
          playerOptions: {
            playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
            autoplay: false, // 如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: '',
              src: 'http://vjs.zencdn.net/v/oceans.mp4' // url地址
            }],
            poster: 'https://edu-image.nosdn.127.net/d078fac6-cb60-4e6b-a57e-cdc0c4c4b594.png', // 你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true // 全屏按钮
            }
          }
        }
      }
    }
</script>

<style scoped>
  nav{
    background-color: #fff;
  }
  .ivu-row{
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  .ivu-row a{
    display: block;
    padding: .6rem;
    color: #3c4a55;
    border-bottom: 3px solid transparent;
    background-color: #fff;
  }
  .ivu-row .router-link-active{
    color: #2cc17b;
    border-bottom: 3px solid #2cc17b;
  }
  .video-part{
    height: 188.8px;
    width: 100%;
    overflow: hidden;
  }
  .video-js .vjs-big-play-button{
    width: 86px;
    height: 41px;
    border-radius: .5rem;
  }
</style>
