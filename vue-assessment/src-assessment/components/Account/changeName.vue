<template>
  <section>
    <keep-alive>
      <div class="title">
        <div class="userName">
          <img :src="userData.img_url"/>
          <p>{{username}}</p>
        </div>
        <span @click="modal2 = true" class="edit">编辑</span>
      </div>
    </keep-alive>
    <Modal v-model="modal2" width="360">
      <p slot="header" style="color:#000;">
        <span>修改昵称</span>
      </p>
      <div style="text-align:center;">
        <input v-model="userName">
      </div>
      <div slot="footer" style="display:flex;text-align:center;width:100%;" class="modalFooter">
        <span @click="off">取消</span><span @click="confirm">确定</span>
      </div>
    </Modal>
    <!-- 退出 -->
    <div class="sign-out">
      <Button  long  @click="modal1 = true">退出登录</Button>
    </div>
    <!-- 对话框 -->
    <Modal
      v-model="modal1"
      title="提示"
      :loading="loading"
      @on-ok="ok"
      @on-cancel="cancel">
      <p style="text-align: center;">确认退出？</p>
    </Modal>
  </section>
</template>

<script>
    export default {
      name: 'change-name',
      data: function () {
        return {
          modal2: false,
          userData: '',
          username: '',
          userName: '',
          modal1: false,
          loading: true
        }
      },
      mounted () {
        this.get()
      },
      methods: {
        confirm () {
          this.modal2 = false
          this.username = this.userName
            this.$Message.info('修改成功')
        },
        off () {
          this.modal2 = false
        },
        get: function () {
          this.userData = this.$route.params.userData
          this.username = this.userData.username
          this.userName = this.userData.username
        },
        ok () {
          setTimeout(() => {
            this.modal1 = false
            this.$Message.info('退出成功')
            window.location.href = 'index.html'
          }, 2000)
        },
        cancel () {
          this.$Message.info('已取消')
        }
      }
    }
</script>

<style scoped>
  .title{
    background-color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .07rem solid #ddd;
  }
  .userName{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .userName img{
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    margin-right: .5rem;
  }
  .title p,
  .title span{
    font-size: 1rem;
  }
  .edit{
    font-weight: bold;
    color: green;
  }
  .modalFooter span{
    width: 50%;
    height: 3rem;
    line-height: 3rem;
  }
  .modalFooter span:first-child{
    color: #000;
    background-color: #ccc;
  }
  .modalFooter span:last-child{
    color: #fff;
    background-color: green;
  }
  .sign-out{
    width: 95%;
    margin: 0 auto;
    margin-top: 80%;
  }
  .ivu-btn{
    color: red;
    border: .07rem solid red;
  }
</style>
