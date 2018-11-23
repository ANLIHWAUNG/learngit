<template>
  <section>
    <p class="title">共{{this.order.length}}门课程</p>
    <!-- 订单 -->
    <div class="order" v-for="(item, index) in order" :key="index">
      <div style="border-bottom: 1px solid #e9e9e9;padding:6px;margin-bottom:6px;background:#f7f9fc;">
        <Checkbox  :value="checkAll">{{item.class_title}}</Checkbox>
      </div>
      <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox :label="index">
          <div class="course-content">
            <div class="course-main">
              <img :src="item.img_url"/>
              <div>
                <a>{{item.class_info}}</a>
                <p class="time">{{item.time}}</p>
                <p class="price">￥{{item.price}}</p>
              </div>
            </div>
            <span class="del" @click="delCart">删除</span>
          </div>
        </Checkbox>
        <p class="sum">该机构小计：<span>￥{{item.price}}</span></p>
      </CheckboxGroup>
    </div>
    <!-- 菜单栏 -->
    <div class="navigation">
      <transition name="navigation">
        <div class="navigation-item" v-show="show">
          <div class="left" @click="show = !show">
            <Icon type="ios-arrow-forward" />
          </div>
          <div class="wangyi">
            <Icon type="ios-photos" />
            <p>网易云课堂</p>
          </div>
          <div class="user">
            <Icon type="md-person" />
            <p>账户</p>
          </div>
        </div>
      </transition>
    </div>
    <div class="navigation-list" @click="show = !show">
      <Icon type="ios-list" />
    </div>
    <!-- 结算 -->
    <div>
      <Checkbox class="settlement" :value="checkAll"  @on-change="handleCheckAll">
        <div class="settlement-content">
          <div class="settlment-detail">
            <p>合计：<span>￥{{sum}}</span></p>
            <p>若有优惠，将在订单结算页面减扣</p>
          </div>
          <Button :disabled="butDisabled" type="primary" :to="{name: 'settlement', params: {'id': 1, 'order':  sendOrder, 'sum': sum}}">去结算</Button>
        </div>
      </Checkbox>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'shop-cart',
    data () {
      return {
        checkAll: false,
        checkAllGroup: [],
        butDisabled: true,
        price: '',
        sum: 0.00,
        show: true,
        order: '',
        shopid: '',
        userid: '',
        userData: '',
        sendOrder: []
      }
    },
    mounted () {
      this.userData = JSON.parse(sessionStorage.getItem('userData'))
      this.getCart()
    },
    methods: {
      getCart () {
        let vm = this
        this.$http.post('http://134.175.237.162/index.php/Shop_cart/getShopList', 'user_id=' + this.userData.id)
          .then(function (res) {
            // console.log(res)
            vm.order = res.data.data
            vm.shopid = vm.order[0].course_id
            vm.userid = vm.order[0].user_id
            vm.price = vm.order[0].price
            // console.log(vm.order[0])
          }).catch(function (error) {
          console.log(error)
        })
      },
      handleCheckAll () {
        this.checkAll = !this.checkAll
        if (this.checkAll) {
          this.checkAllGroup = ['order']
          for (let i = 0; i < this.order.length; i++) {
            this.sum += +this.order[i].price
          }
          this.butDisabled = false
          this.sendOrder = this.order
        } else {
          this.checkAllGroup = []
          this.sum = 0.00
          this.butDisabled = true
        }
      },
      checkAllGroupChange (data) {
        if (data.length === this.order.length) {
          this.checkAll = true
          for (let i = 0; i < this.order.length; i++) {
            this.sum += +this.order[i].price
          }
          this.butDisabled = false
        } else if (data.length > 0 && data.length < this.order.length) {
          this.checkAll = false
          this.sum += +this.order[data[data.length - 1]].price
          this.butDisabled = false
          this.sendOrder.push(this.order[data[data.length - 1]])
        } else {
          this.checkAll = false
          this.sum = 0.00
          this.butDisabled = true
          this.sendOrder = []
        }
      },
      delCart () {
        this.checkAll = false
        this.$http.post('http://134.175.237.162/index.php/info/delShop', 'shopid=' + this.shopid + '&usrid=' + this.userid)
          .then(res => {
            this.$Message.error(res.data.msg)
          }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  .title{
    text-indent: .5rem;
    padding:.5rem 0;
    background-color: #fff;
    color: #3C4A55;
    font-size: .75rem;
  }
  /* 订单 */
  input[type="checkbox"]{
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-right: .2rem;
  }
  input[type="checkbox"]:checked{
    background: gold;
  }
  .order{
    width: 100%;
    background-color: #fff;
  }
  .ivu-checkbox-group{
    margin: 0 .76rem;
  }
  .ivu-checkbox-group-item{
    display: flex;
    justify-content: space-between;
    padding-bottom: .5rem;
    border-bottom: 1px solid rgba(173, 178, 190, 0.36);
  }
  .course-content{
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
  }
  .course-main{
    display: flex;
    align-items: center;
  }
  .course-main img{
    width: 97px;
    height: 54px;
    margin-right: 1rem;
  }
  .course-main a{
    display: inline-block;
    color: #3c4a55;
    font-size: 1.07rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 150px;
  }
  .course-main .time,
  .del{
    color: #8891A7;
  }
  .sum{
    text-align: right;
    color: #70788C;
    padding: .8rem 0;
  }
  .sum span{
    color: #FF4400;
    font-size: 1rem;
  }
  /* 导航栏 */
  .ivu-icon{
    font-size: 1.5rem;
  }
  .navigation{
    position: fixed;
    height: 2.5rem;
    background-color: #fff;
    right: 2.5rem;
    bottom: 5rem;
    width: 10.25rem;
    display: flex;
    overflow: hidden;
  }
  .navigation-item{
    display: flex;
    width: 100%;
    position: relative;
    border: 1px solid #F3F5F7;
  }
  .navigation-item .left,
  .navigation-list{
    border-radius: 50%;
    background-color: #F3F5F7;
    width: 2.5rem;
    height: 2.5rem;
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  }
  .navigation-item .left{
    top: 0;
    left: 0;
    position:  absolute;
  }
  .navigation-item .wangyi{
    margin-left: 2.5rem;
    text-align: center;
  }
  .navigation-item p{
    font-size: .6rem;
    margin-bottom: 0;
    color: #8f8f94;
  }
  .navigation-item .user{
    margin-left: .5rem;
    text-align: center;
  }
  .navigation-list{
    bottom:5rem ;
    right: .5rem;
  }
  /* 显示、隐藏的过渡效果 */
  .navigation-enter-active,
  .navigation-leave-active{
    transition:all 1s;
  }
  /* 隐藏的样式 */
  .navigation-enter,
  .navigation-leave-to{
    opacity:0;
    transform: translateX(9rem);
  }
  /* 结算 */
  .settlement{
    display: flex;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    padding-left: .8rem;
    justify-content: space-between;
    width: 100%;
    z-index: 3;
  }
  .settlement-content{
    display: flex;
    align-items: center;
  }
  .settlment-detail p{
    text-align: right;
    margin-right: 1rem;
  }
  .settlment-detail p:first-of-type span{
    color: #FF4400;
    font-size: 1rem;
  }
  .ivu-btn{
    width: 7rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
