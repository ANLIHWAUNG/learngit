<template>
  <section>
    <!-- 书名 -->
    <div class="book-box">
      <div class="book-name">
        <p class="book-title">能帮你赚到钱的50节商业提升课</p>
        <p><span class="gray">独家</span><span class="gray">独家</span></p>
        <p class="price"><span>￥39.39</span><span>特价仅剩7小时38分钟</span></p>
      </div>
    </div>
    <!-- 教师 -->
    <div class="teacher-part">
      <div class="teacher">
        <div class="teacher-msg">
          <img src="../../assets/img/teacher01.jpg"/>
          <div>
            <p>维小维生素</p>
            <p>2884位学员</p>
          </div>
        </div>
        <a>进入网校</a>
      </div>
    </div>
    <!-- 课程介绍 -->
    <div class="course-part">
      <div class="course">
        <p class="title">课程介绍</p>
        <span class="gray">
          生活实战，学了就能用，这可能是第一个能帮你赚到钱的商业提升课。<br/><br/>
          课程经多次打磨面世，从接地气的生活经济现象入手，留意从未发现过的小细节，从中发现大格局；向商界大佬们取经，筑成全新的思维方式；在新的思维方式的刺激下，落实到日常工作，着手于提高工作效率、职场升职加薪及增收方法；最后通过理财实现买房买车，甚至更高目标。<br/><br/>
          4大维度，11大主题，50节商业思维提升课，开启全新学习体验！<br><br>
          【购课指南】<br/>
          1.课程连载：截止9月25日，课程已更新1节导读+5节视频课，后续每周更新1-2节，共50节；<br/>
          2.课程服务：就在你身边的理财顾问，答疑解惑，化解焦虑 (添加课程顾问小高微信Tgss01备注“云课堂”，进入学员群)<br/>
          3.有效期：课程一次购买，视频永久有效，可自行安排学习，不限时间次数；<br/>
          4.关注小维老师公众号【维小维生素】后台回复“财商”获取惊喜福利~<br/>
          5.听课两种方式：①下载网易云课堂APP，点击查看我的订单 2、②关注网易云课堂公众号，进入公众号，点击查看课程
        </span>
      </div>
      <!-- 图片 -->
      <div class="img-box">
        <img :src="item.imgUrl" v-for="(item, index) in   abstract" :key="index"/>
        <div class="hint">
          <p class="title">适用人群</p>
          <span class="gray">
            √缺乏理财意识的月光族<br>
            √每天被工作困扰，没时间提升自己的职场人<br>
            √想要拓宽视野，实现自我迭代的普通人
          </span>
        </div>
      </div>
      <!-- 讲师 -->
      <div class="lecturer-part">
        <div class="lecturer">
          <p class="title">讲师</p>
          <div class="lecturer-msg">
            <img :src="lecturer.imgUrl"/>
            <span>{{lecturer.name}}</span>
          </div>
          <p class="gray">{{lecturer.description}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'brief-introduction',
      data: function () {
        return {
          abstract: '',
          lecturer: ''
        }
      },
      mounted: function () {
        this.get()
      },
      methods: {
        get: function () {
          setTimeout(() => {
            this.abstract = [
              {imgUrl: require('../../assets/img/detail01.jpg')},
              {imgUrl: require('../../assets/img/detail02.jpg')},
              {imgUrl: require('../../assets/img/detail03.jpg')},
              {imgUrl: require('../../assets/img/detail04.jpg')}
            ]
            this.lecturer = [
              {imgUrl: require('../../assets/img/teacher01.jpg'), name: '维小维生素w', description: '大家好，我是维小维。实战派财商教练，开设的小白理财课程和财商加薪课，持续热销，以认真的同理心，改变数万人。'}
            ]
          }, 300)
        }
      }
    }
</script>

<style scoped>
  .book-box,
  .teacher-part,
  .course-part,
  .lecturer-part{
    background-color: #fff;
  }
  .book-name,
  .teacher,
  .course,
  .img-box,
  .lecturer{
    margin: 0 auto;
    width: 90%;
  }
  /* 书名 */
  .book-name{
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0.367rem;
  }
  .book-title,
  .price span:first-child{
    padding: .77rem 0 .77rem 0;
    font-size: 1.2rem;
  }
  .book-name .gray{
    line-height: 1;
    color: #8891A7;
    border: .07rem solid #8891A7;
    border-radius: .147rem;
    margin-right: 0.5rem;
  }
  .price{
    border-top: .07rem solid #e6eaf2;
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 0.367rem;
  }
  .price span:last-child{
    border: .07rem solid #ff632a;
    color: #ff632a;
    margin-right: .29rem;
    padding: .22rem;
    margin-left: 1.1rem;
    font-size: .88rem;
  }
  /* 教师 */
  .teacher-part{
    margin-top: .6rem;
  }
  .teacher{
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: .9rem 0;
  }
  .teacher-msg{
    display: flex;
    align-content: center;
  }
  .teacher-msg img{
    width:3rem;
    height: 3rem;
    margin-right: .5rem;
  }
  .teacher-msg p{
    font-size: 1.15rem;
    color: #333740;
  }
  .teacher-msg p:last-child{
    font-size: .85rem;
  }
  .teacher a{
    color: #70788C;
  }
  /* 课程介绍 */
  .course,
  .hint{
    margin-top:1.53rem;
    padding-bottom: 1.15rem;
    border-bottom: .07rem solid #e6eae5;
  }
  .title{
    font-size: 1rem;
    padding-bottom: .5rem;
    font-weight: bold;
  }
  .gray{
    font-size: 1rem;
    color: #8f8f94;
  }
  /* 图片 */
  .img-box{
    margin-top: 1.15rem;
  }
  .img-box img {
    display: block;
    width: 100%;
  }
  /* 讲师 */
  .lecturer{
    padding-top: 1.53rem;
  }
  .lecturer-msg{
    display: flex;
    align-items: center;
  }
  .lecturer-msg img{
    width:3.7rem;
    height: 3.7rem;
    border-radius: 50%;
  }
  .lecturer-msg span{
    margin-left: 1.5rem;
    font-size: 1.15rem;
    color: #666;
  }
  .lecturer .gray{
    margin-left: 5.2rem;
  }
</style>
