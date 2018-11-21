<template>
  <div id="app">
    <router-view @userSingIn="userSingIn" :userData="userData"/>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        userData: '',
        testData: ''
      }
    },
    methods: {
      userSingIn (msg) {
        this.testData = sessionStorage.userData
        this.userData = msg
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
