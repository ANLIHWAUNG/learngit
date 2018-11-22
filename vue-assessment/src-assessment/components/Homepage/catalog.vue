<template>
  <section>
    <div class="catalog-content">
      <div class="catalog" v-for="(item, index) in catalog" :key="index">
        <p>{{item.hint}}</p>
        <p>{{item.watch}}</p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'catalog',
      data: function () {
        return {
          catalog: ''
        }
      },
      mounted: function () {
        this.get()
      },
      methods: {
        get: function () {
          setTimeout(() => {
            this.catalog = [
              {hint: '1. 这是一门视频连载课程！更新频率和学习服务看这里哦~', watch: '可试看'},
              {hint: '2. 课程导读：维小维老师介绍以及这门课程中你将会拥有的收获', watch: '可试看'}
            ]
          }, 300)
        }
      }
    }
</script>

<style scoped>
  .catalog-content{
    background-color: #fff;
    margin-top: 1.15rem;
  }
  .catalog{
    width: 90%;
    margin: 0 auto;
    padding: 1.3rem 0;
  }
  .catalog p:first-child{
    margin-bottom: .76rem;
    color: #8f8f94;
    font-size: 1.07rem;
  }
  .catalog p:last-child{
    color: #333;
    font-size: 1.15rem;
  }
</style>
