<template>
  <van-swipe :autoplay="3000" indicator-color="white" @change="onChange">
    <van-swipe-item v-for="(item,index) in banners" :key="index">
      <img
        width="100%"
        :src="item.image"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
      />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      itemIndex: 0,
      startX: 0,
      distanceX: 0
    };
  },
  methods: {
    onChange(index) {
      this.itemIndex = index;
    },
    touchstart(e) {
      this.startX = e.touches[0].clientX;
    },
    touchmove(e) {
      const moveX = e.touches[0].clientX;
      this.distanceX = moveX - this.startX;
      // this.itemLink = "javascript:;";
    },
    touchend(e) {
      if (Math.abs(this.distanceX) === 0) {
        window.location.href = this.banners[this.itemIndex].link
      }
      this.startX = 0;
      this.distanceX = 0;
    }
  }
};
</script>

<style scoped>
.content .van-swipe {
  height: 200px;
}
</style>