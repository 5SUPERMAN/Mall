<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item,index) in topImages" :key="index">
      <img width="100%" :src="item"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.content .van-swipe {
  height: 250px;
}
</style>