<template>
  <section>
    <div class="login">
      <img src="../assets/img/login_icon.png"/>
      <div class="login-content">
        <Form ref="formContent" :model="formContent" :rules="ruleContent">
          <FormItem prop="user">
            <i-input type="text" v-model="formContent.user" placeholder="请输入账号">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
          </FormItem>
          <FormItem prop="password">
            <i-input type="password" v-model="formContent.password" placeholder="请输入密码">
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
          user: '',
          password: ''
        },
        ruleContent: {
          user: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登录成功!');
            setTimeout(() => {
              this.$router.push('/homepage');
            },300)
          } else {
            this.$Message.error('登录失败!');
          }
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
