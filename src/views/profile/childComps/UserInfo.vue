<template>
  <div class="user-info">
    <div class="left">
      <img src="~assets/img/profile/avatar.svg" alt />
    </div>
    <div class="center">
      <div>登录/注册</div>
      <van-icon name="graphic" />
      <span>暂无绑定手机号</span>
    </div>
    <div class="right">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  components: {}
};
</script>

<style scoped>
.user-info {
  display: flex;
  margin-top: -1px;
  height: 90px;
  padding: 15px;
  background-color: var(--color-tint);
  box-sizing: border-box;
}
.left {
  width: 60px;
  height: 60px;
  text-align: center;
}
.left img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.right {
  height: 100%;
  line-height: 60px;
  color: #fff;
}
.center {
  flex: 1;
  margin: 10px 0 0 10px;
  color: #fff;
  position: relative;
}
.center span{
    font-size: 13px;
    font-weight: 300;
    padding-left: 20px;
}
.center .van-icon{
    position: absolute;
    left: -2px;
    font-size: 20px;
}
</style>