<template>
  <section>
    <!-- tab -->
    <nav>
      <Row >
        <i-col span="8">
          <a class="active">全部订单</a>
        </i-col>
        <i-col span="8">
          <a>待支付</a>
        </i-col>
        <i-col span="8">
          <a>交易成功</a>
        </i-col>
      </Row>
    </nav>
    <div class="content">
      <!-- 订单号 -->
      <div class="order-num">
        <p><span>2018-10-14 12:05</span><span>订单号：1008771781</span></p>
        <p>子订单号：1008771782</p>
      </div>
      <!-- 订单内容 -->
      <div class="order-content">
        <img :src=" content.url"/>
        <div>
          <p class="order-title">{{ content.className}}</p>
          <p class="gray">永久有效</p>
          <p class="gray fin">{{ content.price}}</p>
        </div>
      </div>
      <!-- 实付 -->
      <p class="real-pay">实付：<span class="re">{{ content.price}}</span></p>
    </div>
    <div class="content" style="display:none">
      <!-- 订单号 -->
      <div class="order-num">
        <p><span>2018-10-14 12:05</span><span>订单号：1008771781</span></p>
        <p>子订单号：1008771782</p>
      </div>
      <!-- 订单内容 -->
      <div class="order-content">
        <img :src=" content.url"/>
        <div>
          <p class="order-title">{{ content.className}}</p>
          <p class="gray">永久有效</p>
          <p class="gray fin">{{ content.price}}</p>
        </div>
      </div>
      <!-- 实付 -->
      <p class="real-pay">实付：<span class="re">{{ content.price}}</span></p>
      <!-- 立即支付 -->
      <div class="payment">
        <p class="gray">实际总付：￥268</p>
        <div class="payment-content">
          <p>待支付</p>
          <p><Button class="gray">取消订单</Button><Button class="re" to="/payment">立即支付</Button></p>
        </div>
      </div>
    </div>
    <div class="content" style="display:none">
      <!-- 订单号 -->
      <div class="order-num">
        <p><span>2018-10-14 12:05</span><span>订单号：1008771781</span></p>
        <p>子订单号：1008771782</p>
      </div>
      <!-- 订单内容 -->
      <div class="order-content">
        <img :src=" content.url"/>
        <div>
          <p class="order-title">{{ content.className}}</p>
          <p class="gray">永久有效</p>
          <p class="gray fin">{{ content.price}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'order-lists',
      data: function () {
        return {
          content: {}
        }
      },
      mounted () {
        this.getOrder()
        this.get()
        let a = document.querySelectorAll('nav a')
        let content = document.querySelectorAll('.content')
        let l = a.length
        for (let i = 0; i < l; i++) {
          a[i].onclick = function () {
             for (let j = 0; j < l; j++) {
               a[j].setAttribute('class', '')
               content[j].setAttribute('style', 'display:none')
             }
             a[i].setAttribute('class', 'active')
             content[i].setAttribute('style', 'display:block')
          }
        }
      },
      methods: {
        getOrder: function () {
          this.$http.get('/api/homepage')
            .then(res => {
              let homepage = res.data.data
              this.content = homepage[0].goodLeason[0]
            }).catch(function (error) {
            console.log('error init.' + error)
          })
        },
        get () {
          this.$http.post('http://193.112.184.39/index.php/info/getOrder')
            .then(function (res) {
              console.log(res)
            }).catch(function (error) {
              console.log(error)
          })
        }
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
  nav .ivu-row .active{
    color: #2cc17b;
    border-bottom: 3px solid #2cc17b;
  }
  /* 订单号 */
  .order-num p{
    padding: 1rem;
  }
  .order-num p:first-child{
    background-color: #fff;
  }
  .order-num p span{
    margin-right: 1rem;
  }
  /* 订单内容 */
  .order-content{
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }
  .order-content img{
    width: 10rem;
    border-radius: 1rem;
    margin-right: .5rem;
  }
  .order-title{
    font-size: 1.15rem;
  }
  .gray{
    color: #b5b5b5;
  }
  .gray.fin{
    font-size: 1rem;
  }
  /* 实付 */
  .real-pay{
    background-color: #fff;
    padding: 1.5rem 1rem;
    text-align: right;
    font-size: 1rem;
  }
  .re{
    color: red;
    font-size: 1rem;
  }
  /* 立即支付 */
  .payment{
    background-color: #fff;
    border-top: 1px solid #ddd;
    padding: 1.5rem 1rem 1rem 1rem;
  }
  .payment p.gray{
    font-size: 1rem;
    text-align: right;
  }
  .payment-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
  }
  .payment-content p,
  .payment-content span{
    font-size: 1rem;
  }
  .payment-content p:first-child{
    color: red;
  }
  .payment-content .gray{
    padding: .3rem 1.2rem;
    border: 1px solid #b5b5b5;
    margin-right: 1rem;
  }
  .payment-content .re{
    padding: .3rem 1.2rem;
    border: 1px solid red;
  }
</style>
