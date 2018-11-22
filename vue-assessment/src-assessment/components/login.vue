<template>
  <section>
    <div class="login">
      <img src="../assets/img/login_icon.png"/>
      <div class="login-content">
        <Form ref="formContent" :model="formContent" :rules="ruleContent">
          <FormItem prop="username">
            <i-input type="text" v-model="formContent.username" placeholder="请输入账号">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
          </FormItem>
          <FormItem prop=" userpass">
            <i-input type="password" v-model="formContent. userpass" placeholder="请输入密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
          </FormItem>
          <FormItem>
            <Button @click="handleSubmit('formContent')" long>登录</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        formContent: {
          username: '',
          userpass: ''
        },
        ruleContent: {
          username: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          userpass: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        let dataUrlParams = new URLSearchParams(this.formContent)
        this.$http({
          method: 'POST',
          url: 'http://134.175.237.162/index.php/index/login',
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
           },
          data: dataUrlParams
        }).then((res) => {
          if (res.status === 200) {
            let resData = res.data
            if (resData.code) {
              this.$Message.success(resData.msg)
              // console.log('用户信息', resData.data)
              sessionStorage.setItem('userData', JSON.stringify(resData.data))
              setTimeout(() => {
                this.$router.push('/homepage')
              })
            } else {
              this.$Message.error(resData.msg)
            }
        }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  section{
    background: url('../assets/img/login_bg.png')
  }
  .login{
    width: 100%;
  }
  .login img{
    width: 10rem;
    height: 10rem;
    display: block;
    margin: 10% auto;
  }
  .login-content{
    width: 80%;
    margin: 0 auto;
    padding-top: 4rem;
  }
  .login-content .ivu-btn{
    background-color: #2CC17B;
    color: #fff;
  }
</style>
