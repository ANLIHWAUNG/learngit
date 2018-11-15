<template>
  <section>
    <nav>
      <Row >
        <i-col span="12">
          <router-link to="/study/myClass">我的课程</router-link>
        </i-col>
        <i-col span="12">
          <router-link to="/study/major">我的微专业</router-link>
        </i-col>
      </Row>
    </nav>
    <router-view/>
    <diyfooter/>
  </section>
</template>

<script>
  import diyfooter from '../footer'

    export default {
      name: 'class',
      components: {
        diyfooter
      }
    }
</script>

<style scoped>
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
  nav .ivu-row .router-link-active{
    color: #2cc17b;
    border-bottom: 3px solid #2cc17b;
  }
</style>
