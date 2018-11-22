<template>
  <section>
    <div class="course-box">
      <a class="course" v-for="(item, index) in course" :key="index">
        <img :src="item.url"/>
        <div class="content">
          <p>{{item.title}}</p>
          <a>{{item.learn}}</a>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'major',
    data: function () {
      return {
        course: []
      }
    },
    mounted: function () {
      this.get()
    },
    methods: {
      get: function () {
        setTimeout(() => {
          this.course = [
            {url: require('../../assets/img/class02.jpg'), title: '学什么数学', learn: '开始学习'},
            {url: require('../../assets/img/class02.jpg'), title: '学什么数学', learn: '开始学习'}
          ]
        }, 500)
      }
    }
  }
</script>

<style scoped>
  .course-box{
    margin-top: 1rem;
    padding: 1rem;
    background-color: #fff;
  }
  .course{
    display:flex;
    margin-bottom: 0.5rem;
  }
  .course img{
    width: 8.5rem;
    height: 4.7rem;
    margin-right: 1rem;
  }
  .course p{
    color: #3c4a55;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  .course a{
    height: 1.35rem;
    width: 5.33rem;
    color: #2cc17b;
    text-decoration: none;
    font-size: 1.07px;
    display: inline-block;
    border: 1px solid #2cc17b;
    border-radius: 3rem;
    text-align: center;
    line-height: 1.35rem;
  }
</style>
