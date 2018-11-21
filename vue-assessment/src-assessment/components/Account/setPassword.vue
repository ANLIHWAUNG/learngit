<template>
  <section>
    <div class="formList">
      <Form ref="formCustom" :model="formCustom" label-position="left" :rules="ruleCustom" :label-width="60">
        <FormItem label="用户名">
          <i-input v-model="formCustom.userName"></i-input>
        </FormItem>
        <FormItem label="密码" prop="passwd">
          <i-input v-model="formCustom.passwd" type="password"></i-input>
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
          <i-input v-model="formCustom.passwdCheck" type="password"></i-input>
        </FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')" long>提交</Button>
      </Form>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck')
          }
          callback()
        }
      }
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('密码不一致！'))
        } else {
          callback()
        }
      }
      const validateuserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        }
      }
      return {
        userData: '',
        formCustom: {
          userName: '',
          passwd: '',
          passwdCheck: ''
        },
        ruleCustom: {
          userName: [
            { validator: validateuserName, trigger: 'blur' }
          ],
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
      this.get()
    },
    methods: {
      get: function () {
        this.userData = this.$route.params.userData
        this.formCustom.userName = this.userData.username
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('成功!')
            setTimeout(() => {
              this.$router.push('/homepage')
            }, 300)
          } else {
            this.$Message.error('失败!')
          }
        })
      }
    }
  }
</script>

<style scoped>
  section{
    background-color: #fff;
  }
  .formList{
    width: 90%;
    margin: 0 auto;
    padding-top: 1rem;
  }
  .ivu-btn{
    margin-top: 45%;
  }
</style>
