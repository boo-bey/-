<template>
  <div class="iconcov">
    <ul>
      <router-link v-for="item in list" :key="item.id" :to="item.path" tag="li">
        <img :src="item.img" alt="">
        <p>{{ item.msg }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Iconcov",
  data() {
    return {
      list: [
        { id: 1, img: 'https://img1.dxycdn.com/2021/0804/220/9442938684169526943-22.png', msg: '问医生', path: '/ask' },
        { id: 2, img: 'https://img1.dxycdn.com/2021/0804/598/2642938684169526943-22.png', msg: '核酸检测', path: '/test' },
        { id: 3, img: 'https://img1.dxycdn.com/2021/0804/827/1742938684169526943-22.png', msg: '防疫物资', path: '/fywz' },
        { id: 4, img: '	https://img1.dxycdn.com/2021/0804/239/7448668684169526943-22.png', msg: '出行政策', path: '/trivel' }
      ]
    }
  },

}
</script>

<style lang="less" scoped>
.iconcov {
  width: 100%;

  ul {
    width: 100%;
    display: flex;

    li {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

img {
  width: .8rem;
}

p {
  font-size: .13rem;
}
</style>