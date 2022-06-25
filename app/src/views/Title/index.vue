<template>
  <div class="title">
    <img src="@/assets/img/title.png" width="100%" alt="">
    <span>{{ coutNum|guolv }}人已经浏览</span>
    <a href="#">
      <img src="@/assets/img/icon.png" alt="">
      <i>English Version</i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      coutNum:4705707143
    }
  },
  filters:{
    guolv(val){
      return val.toLocaleString()
      
    }
  }
}
</script>

<style lang="less" scoped>
.title{
  position: relative;
  width: 100%;
  span{
    position: absolute;
    bottom: 0.12rem;
    left: 0.1rem;
    color: #fff;
    font-size: 0.12rem;
  }
  a{
    padding: .1rem;
    position: absolute;
    display: flex;
    align-items: center;
    top:.1rem;
    right: .1rem;
    text-decoration: none;
    color: #fff;
    background-color:rgba(0,0,249,.38);
    border-radius: 0.2rem;
    font-size: .25rem;
    img{
      width: .25rem;
      height: .25rem;
      margin-right: .2rem;
    }
    
  }
 
}
</style>>