<template>
  <section>
    <!-- 顶部 -->
    <div class="header-title">
      <div class="header-l">
        <a class="header-img"><img src="../../assets/img/title_img.png"/></a>
        <router-link class="look" to="/download">App查看</router-link>
      </div>
      <div class="header-r">
        <router-link to="/searchDetail"><Icon type="ios-search-outline" /></router-link>
      </div>
    </div>
    <!-- 轮播部分 -->
    <div class="carousel-part">
      <Carousel autoplay v-model="value2" loop :dots="setting.dots" >
        <CarouselItem>
          <img src="../../assets/img/banner1.jpg"/>
        </CarouselItem>
        <CarouselItem>
          <img src="../../assets/img/banner1.jpg"/>
        </CarouselItem>
      </Carousel>
    </div>
    <!-- 内容部分 -->
    <article>
      <div class="content-part">
        <!-- 畅销好课 -->
        <div>
          <p class="title">畅销好课</p>
          <Row type="flex" justify="space-between" v-for="(item, index) in goodLeason" :key="index">
            <i-col span="12">
              <router-link to="/classDetail">
                <img :src="item.imgUrl"/>
                <p>{{item.className}}</p>
                <p>{{item.price}}</p>
              </router-link>
            </i-col >
            <i-col  span="12">
              <router-link to="/classDetail">
                <img :src= 'item.imgUrl'/>
                <p>{{item.className}}</p>
                <p>{{item.price}}</p>
              </router-link>
            </i-col >
          </Row>
        </div>
        <!-- 专题 -->
        <div>
          <p class="title">专题</p>
          <div class="img-box">
            <img v-for="(item, index) in special" :key="index" :src="item.imgUrl"/>
          </div>
        </div>
        <!-- 办公效率 -->
        <p class="title">办公效率</p>
        <div class="img-box">
          <img :src="efficiency.imgUrl"/>
          <p class="gray">{{efficiency.className}}</p>
          <p>{{efficiency.price}}</p>
        </div>
        <Row type="flex" justify="space-between">
          <i-col span="12">
            <a>
              <img :src="pic.imgUrl"/>
            </a>
          </i-col >
          <i-col  span="12">
            <a>
              <img :src="pic.imgUrl"/>
            </a>
          </i-col >
        </Row>
      </div>
    </article>
    <diyfooter/>
  </section>
</template>

<script>
  import diyfooter from '../footer'

    export default {
      name: 'homepage',
      components: {
        diyfooter
      },
      data: function () {
        return {
          value2: 0,
          setting: {
            dots: 'none'
          },
          goodLeason: '',
          special: '',
          efficiency: '',
          pic: ''
        }
      },
      mounted: function () {
        this.get()
      },
      methods: {
        get: function () {
          setTimeout(() => {
            this.goodLeason = [
              {imgUrl: require('../../assets/img/class-01.jpg'), className: '能帮你赚到钱的50节商业思维提升课', price: '￥69'},
              {imgUrl: require('../../assets/img/class-01.jpg'), className: '能帮你赚到钱的50节商业思维提升课', price: ''},
              {imgUrl: require('../../assets/img/class-01.jpg'), className: '能帮你赚到钱的50节商业思维提升课', price: ''}
            ]
              this.special = [
                {imgUrl: require('../../assets/img/class-02.png')},
                {imgUrl: require('../../assets/img/class-03.png')}
              ]
              this.efficiency = [{imgUrl: require('../../assets/img/class-02.png'), className: '向《经济人学》学图标', price: '￥199'}]
              this.pic = {imgUrl: require('../../assets/img/class-01.jpg')}
          }, 300)
        }
      }
    }
</script>

<style scoped>
  section{
    padding-bottom: 3.4rem;
  }
  /* 顶部 */
  .header-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 1.3rem 0 0.8rem;
  }
  .header-l{
    display:flex;
    align-items: center;
  }
  .header-l a.header-img{
    width: 9.6rem;
    height: 2.56rem;
    position: relative;
    display: inline-block;
  }
  .header-l img{
    vertical-align: middle;
    margin-right: .4rem;
    transform: scale(0.5);
    position: absolute;
    left:-3.5rem;
    top: -.5rem;
  }
  .header-l .look{
    height: .93333rem;
    width: 3.8rem;
    box-sizing: border-box;
    color: #2cc17b;
    line-height: .83333rem;
    text-align: center;
    border-radius: .53333rem;
    font-size: .88rem;
    border: 074rem solid #2cc17b;
    vertical-align: bottom;
  }
  .header-r i{
    color: #3c4a55;
    font-size: 1.6rem;
  }
  /* 轮播部分 */
  .carousel-part img{
    width: 100%;
  }
  /* 内容部分 */
  .content-part{
    width: 92%;
    margin: 0 auto;
  }
  .title{
    padding: .5rem 0;
    font-size: 1.125rem;
    font-weight: bold;
  }
  .ivu-row-flex{
    margin-bottom: .5rem;
  }
  .ivu-col-span-12{
    width: 48%;
  }
  .ivu-col-span-12 img{
    width: 100%;
  }
  .ivu-col-span-12 a{
    color: #3c4a55;
  }
  .img-box img{
    display: block;
    width: 100%;
    margin-bottom: .5rem;
  }
  .img-box p{
    font-size: 1rem;
  }
  .gray{
    color: #8f8f94;
    font-weight: 400;
    margin: 0.3rem;
  }
</style>
