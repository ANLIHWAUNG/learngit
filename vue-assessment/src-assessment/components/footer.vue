<template>
  <Row>
    <i-col span="8">
      <router-link to="/homepage"><span><Icon type="md-home" class="hide"/><Icon type="ios-home-outline" class="show"/></span><span>首页</span></router-link>
    </i-col>
    <i-col span="8">
      <router-link to="/study"><Icon type="ios-bookmarks-outline" class="show"/><Icon type="ios-bookmarks" class="hide"/>学习</router-link>
    </i-col>
    <i-col span="8">
      <router-link to="/account"><Icon type="ios-contact-outline" class="show" /><Icon type="ios-contact" class="hide"/>账号</router-link>
    </i-col>
  </Row>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .ivu-row{
    position: fixed;
    width:100%;
    height: 3.4rem;
    bottom:0;
    background-color: #fff;
    padding-top:0.4rem;
  }
  .ivu-col{
    text-align: center;
  }
  .ivu-col a{
    color: #3c4a55;
    text-align: center;
  }
  .ivu-col a span{
    display: block;
  }
  .ivu-col i{
    font-size: 2rem;
    display:block;
    text-align: center;
  }
  .ivu-col i.hide{
    display: none;
  }
  .ivu-col a.router-link-active i.show{
    display: none;
  }
  .ivu-col a.router-link-active i.hide{
    display: block;
  }
</style>
