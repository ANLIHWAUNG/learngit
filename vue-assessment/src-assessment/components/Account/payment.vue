<template>
  <section>
    <p class="title">支付方式</p>
    <!-- 支付方式 -->
    <RadioGroup vertical v-model="ways">
      <Radio label="微信">
        <p><img src="../../assets/img/ways03.png"/>微信支付</p>
      </Radio>
      <Radio label="支付宝">
        <p><img src="../../assets/img/ways02.png"/>支付宝支付</p>
      </Radio>
      <Radio label="花呗">
        <p><img src="../../assets/img/ways01.png"/>花呗支付<span class="recommend">大额支付推荐</span></p>
      </Radio>
    </RadioGroup>
    <!-- 支付 -->
    <div class="payment">
      <p class="moneytxt">实付金额：<span class="money">¥ 60.00</span></p>
      <Button long :loading="!ways" @click="success(true)">立即支付</Button>
      <p class="protocol">
        <input type="checkbox" checked>我已同意阅读并同意<span>《云课堂用户付费协议》</span>
      </p>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'payment',
      data: function () {
          return {
            ways: ''
          }
      },
      methods: {
        success (nodesc) {
          this.$Notice.success({
            title: this.ways + '支付成功',
            desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
          })
          setTimeout(() => {
            this.$router.push('/homepage')
          }, 500)
        }
      }
    }
</script>

<style scoped>
  .title{
    background: #F2F4F7;
    height: 3rem;
    line-height: 3rem;
    font-size: 1rem;
    color: #70788C;
    padding-left: 1rem;
  }
  /* 支付方式 */
  .ivu-radio-group{
    background-color: #fff;
    width: 100%;
  }
  .ivu-radio-group-item{
    display: flex;
    align-items: center;
    padding: 1.7rem;
    border-bottom: 1px solid #F2F4F7;
  }
  .ivu-radio-group-item img{
    width: 2.8rem;
    height: 1.8rem;
    vertical-align: middle;
    padding-left: .5rem;
    padding-right: .6rem;
  }
  .recommend{
    border: 1px solid #FF4400;
    color: #FF4400;
    font-size: .9rem;
    border-radius: .23rem;
    padding: .23rem;
    margin-left: .3rem;
  }
  /* 支付 */
  .payment{
    background-color: #fff;
    padding: 3.1rem 1.1rem 0;
  }
  .moneytxt{
    font-size: 1rem;
  }
  .moneytxt span{
    color: #FF4400;
    font-size: 1rem;
  }
  .ivu-btn{
    background: #FF632A;
    color: #fff;
    padding: 1rem 0;
    margin-top: 2rem;
  }
  .protocol{
    margin-top: 1rem;
  }
  .protocol span{
    color: green;
  }



  .radio{
    display: none;
  }
  .radio+label {
    background-color: white;
    border-radius: 50%;
    border: 1px solid #d3d3d3;
    width: 15px;
    height: 15px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 15px;
  }
  .radio:checked+label {
    background: rgb(44,193,123);
    border: 1px solid greenyellow;
  }
  .radio:checked+label:after {
    content: "\2714";
    font-size: 20px;
    color: white;
  }
  .m-payArea-wrap{
    padding: 3.1rem 1.1rem 0;
    position: relative;
  }
  .goPay {
    background: #FF632A;
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
    display: block;
    margin-top: 1.6rem;
    padding: .5rem 0;
  }
  .actuallyPay {
    margin-top: 0.8rem;
  }
  .agree{
    font-size: .8rem;
    color: #666666;
  }
  .treatyLink{
    font-size: .8rem;
    color: green;
  }
  .treatyFb{
    padding: .5rem .5rem;
    background-color: rgb(255,255,204);
    box-shadow:5px 5px 3px yellow;
    position: absolute;
    left: 50%;
    top:3rem;
    display: none;
  }
  .f-cb::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
  }

</style>
