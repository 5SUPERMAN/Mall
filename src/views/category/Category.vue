<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />

      <scroll id="tab-content" ref="scroll">
        <subcategory :subcategories="showSubcategory" />
        <tab-control :titles="['综合','新品','销量']" @tabClick="tabClick" />
        <goods-list :goods="showGoods" />
      </scroll>
    </div>
  </div>
</template>

<script>
import TabMenu from "./childComps/TabMenu";
import Subcategory from "./childComps/Subcategory";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "network/category";

import { debounce } from "common/utils";
import { itemListenerMixin } from "common/mixin";

export default {
  name: "Category",
  components: {
    TabMenu,
    Subcategory,
    NavBar,
    Scroll,
    TabControl,
    GoodsList
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      selectItemIndex: -1,
      saveY: 0,
      currentType: "pop"
    };
  },
  created() {
    this.getCategory();
  },
  mounted() {},
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 1.保持 Y值
    this.saveY = this.$refs.scroll.getScrollY();

    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  computed: {
    showSubcategory() {
      if (this.selectItemIndex === -1) return {};
      return this.categoryData[this.selectItemIndex].subcategories;
    },
    showGoods() {
      if (this.selectItemIndex === -1) return [];
      return this.categoryData[this.selectItemIndex].categoryDetail[
        this.currentType
      ];
    }
  },
  methods: {
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this.getSubcategory(index);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /**
     * 网络请求相关的方法
     */
    getCategory() {
      getCategory().then(res => {
        // 1.获取 TabMenu的数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的数据
        for (let key in this.categories) {
          this.categoryData[key] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          };
        }

        // 3.获取第一个分类的数据
        this.getSubcategory(0);
      });
    },
    getSubcategory(index) {
      this.selectItemIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this.getCategoryDetail("pop");
        this.getCategoryDetail("new");
        this.getCategoryDetail("sell");
      });
    },
    getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.selectItemIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.selectItemIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    }
  }
};
</script>

<style scoped>
#category {
  position: relative;
  height: 100vh;
}
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  top: 45px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
}
#tab-content {
  flex: 1;
}
</style>
