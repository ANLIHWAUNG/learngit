<template>
  <section>
    <!-- 搜索框 -->
    <i-input v-model="value1" placeholder="搜索课程" @on-enter="searchLesson">
      <Button slot="prepend" icon="ios-search" @click="searchLesson"></Button>
      <span slot="append" @click="cancel">取消</span>
    </i-input>
    <!-- tab -->
    <nav>
      <Row >
        <i-col span="8">
          <a class="active">课程</a>
        </i-col>
        <i-col span="8">
          <a>书籍</a>
        </i-col>
        <i-col span="8">
          <a>知识点</a>
        </i-col>
      </Row>
    </nav>
    <!-- 内容部分 -->
    <div class="content-box">
      <!-- 标题 -->
      <div class="title">
        <Row >
          <i-col span="8">
            <a class="active">好评</a>
          </i-col>
          <i-col span="8">
            <a>畅销</a>
          </i-col>
          <i-col span="8">
            <a>全部</a>
          </i-col>
        </Row>
      </div>
      <!-- 课程 -->
      <Row v-for="(item, index) in searchCourse" :key="index" class-name="content">
        <i-col span="24">
          <a>
            <img :src="item.url"/>
            <div class="course">
              <p><span>{{item.category}}</span>{{item.name}}</p>
              <p>{{item.num}}人学过</p>
            </div>
          </a>
        </i-col >
      </Row>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'search-detail',
      data: function () {
        return {
          value1: '',
          searchCourse: ''
        }
      },
      mounted () {
        this.get()
        let a = document.querySelectorAll('nav a')
        let l = a.length
        for(let i = 0; i < l; i++){
          a[i].onclick = function () {
            for (let j = 0; j < l; j++) {
              a[j].setAttribute('class','')
            }
            a[i].setAttribute('class','active')
          }
        }
      },
      methods: {
        get: function () {
          this.$http.get("/api/homepage")
            .then(res=>{
              // console.log(res.data.data);
              let homepage = res.data.data
              this.searchCourse = homepage[0].searchCourse
              // console.log(this.searchCourse)
            }).catch(function(error){
            console.log("error init."+error)
          })
        },
        searchLesson () {
          if (this.value1 !== ''){
            this.searchCourse = this.searchCourse.filter((item, index, array) => {
              return item.name === this.value1
            })
          }
        },
        cancel () {
          this.get()
          this.value1 = ''
        }
      }
    }
</script>

<style scoped>
  .ivu-input-group{
    padding: .3rem .3rem .8rem .3rem;
  }
  /* tab */
  nav{
    background-color: #fff;
  }
  nav .ivu-row{
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  nav .ivu-row a{
    display: block;
    padding: .6rem;
    color: #3c4a55;
    border-bottom: 3px solid transparent;
    background-color: #fff;
  }
  nav .ivu-row .active{
    color: #2cc17b;
    border-bottom: 3px solid #2cc17b;
  }
  /* 内容部分 */
  .content-box{
    background-color: #fff;
  }
  .title{
    width: 40%;
    padding: 1rem 2rem;
  }
  .title a{
    color: #3c4a55;
  }
  .title a.active{
    color: #2cc17b;
  }
  .content{
    padding: .3rem 0 1rem 1rem;
  }
  .content a{
    color: #3c4a55;
    display: flex;
  }
  .content img{
    width: 188px;
    height: 110px;
  }
  .course{
    margin-left: .5rem;
  }
  .course p:first-child{
    font-size: 1.2rem;
    font-weight: bold;
  }
  .course p:first-child span{
    background-color: #f40;
    color: #fff;
    padding: .3rem;
  }
  .course p:last-child{
    margin-top: .3rem;
    font-size: 1rem;
  }
</style>
