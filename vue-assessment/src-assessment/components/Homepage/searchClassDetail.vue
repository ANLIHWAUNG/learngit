<template>
  <section>
    <!-- 书名 -->
    <div class="book-box">
      <div class="book-name">
        <div><img :src="details.img_url"/></div>
        <p class="book-title">{{details.class_title}}</p>
        <p><span class="gray">{{details.is_only ? '不独家': '独家'}}</span><span class="gray">{{details.is_only ? '不独家': '独家'}}</span></p>
        <p class="price"><span>￥{{details.price}}</span><span>特价仅剩7小时38分钟</span></p>
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
        <span class="gray">{{details.class_info }}</span>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'search-class-detail',
      data: function () {
        return {
          details: ''
        }
      },
      mounted () {
        this.details = this.$route.params.details
      }
    }
</script>

<style scoped>
  .book-box,
  .teacher-part,
  .course-part{
    background-color: #fff;
  }
  .book-name,
  .teacher,
  .course{
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
    font-size: 1.5rem;
  }
  .book-name .gray{
    line-height: 1;
    color: #8891A7;
    border: 1px solid #8891A7;
    border-radius: 2px;
    margin-right: 0.5rem;
  }
  .price{
    border-top: 1px solid #e6eaf2;
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 0.367rem;
  }
  .price span:last-child{
    border: 1px solid #ff632a;
    color: #ff632a;
    margin-right: 4px;
    padding: 3px;
    margin-left: 15px;
    font-size: 12px;
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
    border-bottom: 1px solid #e6eae5;
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
</style>
