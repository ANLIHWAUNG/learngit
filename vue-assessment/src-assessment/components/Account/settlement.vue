<template>
  <section>
    <!-- 账号 -->
    <div class="account">
      <p class="user"><span>购买账号: 雨泉十代</span><span>更换账号<Icon type="ios-arrow-forward" /></span></p>
      <p>手机号 : 未绑定</p>
      <div class="tip">购买后不支持退款、转让，请确认开课时间或有效期后再提交订单</div>
    </div>
    <!-- 订单 -->
    <div class="order" v-for="(item, index) in order" :key="index">
      <p class="order-title">{{item.title}}</p>
      <div class="order-main">
        <img :src="item.url"/>
        <div class="order-content">
          <a>{{item.name}}</a>
          <p class="time">{{item.time}}</p>
          <p class="price">￥{{item.price}}</p>
        </div>
      </div>
    </div>
    <!-- 小计 -->
    <div class="money">
      <p>小计：￥{{price}}</p>
      <p>小计：￥{{price}}</p>
    </div>
    <!-- 总计 -->
    <div class="sum-money">
      <p>总计：￥{{sum}}</p>
      <p><span>优惠券</span><span>去兑换<Icon type="ios-arrow-forward" /></span></p>
    </div>
    <!-- 提交订单 -->
    <div class="sub-order">
      <p class="order-money">实付金额：<span>￥{{sum}}</span></p>
      <Button to="/payment">提交订单</Button>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'settlement',
      data: function () {
        return {
          sum: '',
          order: [],
          price: ''
        }
      },
      mounted () {
        this.get()
      },
      methods: {
        get: function () {
          setTimeout(() => {
            this.sum = this.$route.params.sum
            this.order = this.$route.params.order
            this.price = this.order[0].price
          }, 300);
        }
      }
    }
</script>

<style scoped>
  /* 账户 */
  .account,
  .order{
    background-color: #fff;
    padding: 1rem;
  }
  .account p,
  .account span,
  .order-title{
    font-size: 1rem;
    color: #333;
  }
  .account p{
    padding-bottom: .8rem;
  }
  .user{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ivu-icon{
    font-size: 1.1rem;
    vertical-align: middle;
  }
  .tip{
    color: #000;
    font-size: 1rem;
    padding-top: .8rem;
    border-top: 1px solid #ccc;
  }
  /* 订单 */
  .order{
    margin-top: 1.5rem;
  }
  .order-main{
    padding-top: 1.2rem;
    display: flex;
  }
  .order-content{
    margin-left: .5rem;
  }
  .order-content a{
    color: #3c4a55;
    height: 2.35rem;
    font-size: 1rem;
  }
  /* 小计 */
  .money{
    text-align: right;
    color: #666;
    margin-top: 10px;
  }
  .money p:first-child{
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    padding-right: 10px;
  }
  .money p:last-child{
    background: #f7f9fc;
    padding: .8rem 0;
    line-height: 3rem;
    font-size: 1rem;
    padding-right: 10px;
  }
  /* 总计 */
  .sum-money{
    margin-top: .8rem;
    background-color: #fff;
  }
  .sum-money p{
    line-height: 3.1rem;
    padding: 0 .8rem;
    color: #3c4a55;
    font-size: 1rem;
    border-bottom: 1px solid #ddd;
  }
  .sum-money p:first-child{
    text-align: right;
  }
  .sum-money p:last-child{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sum-money span{
    font-size: 1rem;
  }
  /* 提交订单 */
  .sub-order{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem;
    background-color: #f7f9fc;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .sub-order p,
  .sub-order span{
    font-size: 1rem;
  }
  .order-money span{
    color: #ff4400;
  }
  .ivu-btn{
    width: 164px;
    height: 3rem;
    border-radius: 20px;
    line-height: 3rem;
    text-align: center;
    color: #fff;
    background-color: #FF632A;
    opacity: 0.97;
    padding: 0;
  }
</style>
