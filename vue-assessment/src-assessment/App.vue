<template>
  <div id="app">
    <keep-alive>
      <router-view @userSingIn="userSingIn" :userData="userData"/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        userData: ''
      }
    },
    methods: {
      userSingIn (msg) {
        this.userData = msg
        console.log(msg)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
