<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的页面</div>
    </nav-bar>

    <user-info />
    <section-info />
    <list-view :list-data="orderList" />
    <list-view :list-data="serviceList" />
  </div>
</template>

<script>
import UserInfo from "./childComps/UserInfo";
import SectionInfo from "./childComps/SectionInfo";
import ListView from "./childComps/ListView";

import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Profile",
  data() {
    return {
      orderList: [
        { icon: "envelop-o", iconColor: "#ff8198", info: "我的消息" },
        { icon: "shop", iconColor: "#fc7b53", info: "积分商城" },
        { icon: "vip-card", iconColor: "#ffc636", info: "会员卡" }
      ],
      serviceList: [
        { icon: "cart", iconColor: "#ff8198", info: "我的购物车" },
      ]
    };
  },
  components: {
    UserInfo,
    SectionInfo,
    ListView,
    NavBar
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
