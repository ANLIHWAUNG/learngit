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
          catalog: []
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
              this.catalog = homepage[0].catalog
              console.log(this.catalog)
            }).catch(function(error){
            console.log("error init."+error)
          })
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
