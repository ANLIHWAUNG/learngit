<template>
  <section>
    <div class="content">
      <img class="course pic" src="../../assets/img/course.png"/>
      <img class="down pic" src="../../assets/img/Appdownload.png"/>
    </div>
    <div class="appBg">
      <img src="../../assets/img/appBg.jpg"/>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'download'
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
  }
  .content{
    width: 100%;
    position: relative;
    min-height: 30rem;
    background-color: #21a557;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .content img{
    transform: scale(.6);
  }
  img{
    display: block;
  }
  .appBg{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
</style>
