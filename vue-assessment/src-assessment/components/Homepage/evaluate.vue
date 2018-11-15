<template>
  <section>
    <div class="comments" v-for="(item, index) in comments" :key="index">
      <div class="comment-msg">
        <div>
          <img :src="item.url"/>
          <span>{{item.name}}</span>
        </div>
        <span>{{item.time}}</span>
      </div>
      <p class="comment-content">
        {{item.content}}
      </p>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'evaluate',
      data: function () {
        return {
          comments: []
        }
      },
      mounted: function (){
        this.get()
      },
      methods: {
        get: function () {
          this.$http.get("/api/homepage")
            .then(res=>{
              let homepage = res.data.data
              this.comments = homepage[0].comments
            }).catch(function(error){
            console.log("error init."+error)
          })
        }
      }
    }
</script>

<style scoped>
  .comments{
    background-color: #fff;
    padding: 1.5rem;
  }
  .comment-msg{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .comment-msg img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 2rem;
  }
  .comment-msg span{
    color: #8f8f94;
    font-size: 1.07rem;
  }
  .comment-content{
    margin-left: 5rem;
    font-size: 1.15rem;
  }
</style>
