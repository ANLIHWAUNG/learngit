<template>
  <section>
    <!-- 账号 -->
    <router-link :to="{name: 'changeName', params: {'id': 1, 'userData': userData}}" class="account-part">
      <div class="account">
        <img :src="userData.img_url"/>
        <div>
          <p>{{userData.username}}</p>
          <p class="gray">正在使用QQ账户登录</p>
        </div>
      </div>
      <Icon type="ios-arrow-forward" />
    </router-link>
    <!-- 详情 -->
    <div class="details-part">
      <div class="detail">
        <Icon type="ios-cash" />
        <router-link to="/orderLists">
          <span>我的订单</span>
          <Badge :count="3" :offset="badgeOffset">
            <Icon type="ios-arrow-forward" />
          </Badge>
        </router-link>
      </div>
      <div class="detail">
        <Icon type="md-cart" />
        <router-link to="/shopCart">
          <span>我的购物车</span>
          <Badge :count="3" :offset="badgeOffset">
            <Icon type="ios-arrow-forward" />
          </Badge>
        </router-link>
      </div>
      <div class="detail">
        <Icon type="ios-lock" />
        <router-link :to="{name: 'setPassword', params:{'id': 1, 'userData': userData}}">
          <span>密码设置</span>
          <Icon type="ios-arrow-forward" />
        </router-link>
      </div>
    </div>
    <!-- 退出 -->
    <div class="sign-out">
      <Button type="error"  long  @click="modal1 = true">退出</Button>
    </div>
    <!-- 对话框 -->
    <Modal
      v-model="modal1"
      title="提示"
      :loading="loading"
      width="50%">
      <p slot="header" style="color:#000;text-align:center;">
        <span style="font-size: 1rem;font-weight:bold;">提示</span>
      </p>
      <div style="text-align:center">
        <p>确认退出？</p>
      </div>
      <div slot="footer" class="footerItem">
        <span @click="ok">确定</span><span @click="cancel">取消</span>
      </div>
    </Modal>
    <diyfooter/>
  </section>
</template>

<script>
  import diyfooter from '../footer'

    export default {
      name: 'account',
      components: {
        diyfooter
      },
      data: function () {
          return {
            badgeOffset: [10, 35],
            modal1: false,
            loading: true,
            userData: ''
          }
      },
      mounted () {
        this.userData = JSON.parse(sessionStorage.getItem('userData'))
      },
      methods: {
        ok () {
          setTimeout(() => {
            this.modal1 = false
            this.$Message.info('退出成功')
            window.location.href = 'index.html'
          }, 2000)
        },
        cancel () {
          this.modal1 = false
          this.$Message.info('已取消')
        }
      }
    }
</script>

<style scoped>
  section{
    padding-bottom: 3.4rem;
  }
  /* 账户 */
  .account-part{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: #2c3e50;
  }
  .account{
    display: flex;
    align-items: center;
  }
  .account img{
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    margin-right: .5rem;
  }
  .account p{
    font-size: 1rem;
  }
  .account .gray{
    color: #999;
  }
  .ivu-icon{
    font-size: 1.5rem;
    color: #2c3e50;
  }
  /* 详情 */
  .details-part{
    background-color: #fff;
    margin-top: .5rem;
  }
  .detail{
    padding: 1rem 0 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .detail a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    padding-bottom: .3rem;
    padding-right: .3rem;
    border-bottom: 1px solid #ddd;
    font-size: 1.15rem;
    color: #2c3e50;
  }
  .detail i{
    padding-bottom: .5rem;
    margin-right: .5rem;
  }
  .detail i.ivu-icon-ios-arrow-forward{
    margin-right: 0;
  }
  .detail:last-child a{
    border: none;
  }
  .sign-out{
    width: 95%;
    margin: 0 auto;
    margin-top: 45%;
  }
  .footerItem{
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
  }
  .footerItem span{
    width: 50%;
    border: 1px solid #ddd;
    color: blue;
    font-weight: bold;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    border-radius: .5rem;
  }
</style>
