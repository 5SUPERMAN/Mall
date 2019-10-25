<template>
  <scroll id="tab-menu">
    <div class="tab-menu">
      <div class="menu-list">
        <div
          class="menu-list-item"
          v-for="(item,index) in categories"
          :key="index"
          :class="{active:index===selectItemIndex}"
          @click="itemClick(index)"
        >{{item.title}}</div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "TabMenu",
  props: {
    categories: {
      type: Array,
      default: []
    }
  },
  components: {
    Scroll
  },
  data() {
    return {
      selectItemIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.selectItemIndex = index;
      this.$emit("selectItem", index);
    }
  }
};
</script>

<style scoped>
#tab-menu {
  width: 100px;
  box-sizing: border-box;
  background-color: #f6f6f6;
  overflow: hidden;
}
.menu-list-item {
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  text-align: center;
  color: #666;
}
.active {
  background-color: #fff;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
}
</style>