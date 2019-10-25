<template>
  <div class="sku-list">
    <van-sku
      ref="vanSku"
      v-model="show"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SkuList",
  props: {
    skuInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      show: false,
      sku: {},
      goods: {}
    };
  },
  mounted() {
    this.$bus.$on("showBuyCart", isShow => {
      this.show = isShow;

      this.goods = {
        // 默认图片
        picture: this.skuInfo.skus[0].img
      };

      // 默认价格
      let defaultPrice = (this.skuInfo.skus[0].nowprice / 100).toFixed(2);
      // 商品总库存
      let totalStock = this.skuInfo.totalStock;

      // 获取服装 style及 颜色
      let styleKey = {
        k: this.skuInfo.styleKey,
        v: [],
        k_s: "s1"
      };
      // 获取服装尺寸 size
      let sizeKey = {
        k: this.skuInfo.sizeKey,
        v: [],
        k_s: "s2"
      };

      this.skuInfo.props[0].list.forEach(list => {
        // 查找 sku中对应 styleId的图片
        let skuList = this.skuInfo.skus.find(
          sku => sku.styleId === list.styleId
        );

        let v_style = {
          id: list.styleId,
          name: list.name,
          imgUrl: skuList.img
        };
        styleKey.v.push(v_style);
      });
      this.skuInfo.props[1].list.forEach(list => {
        let v_size = {
          id: list.sizeId,
          name: list.name
        };
        sizeKey.v.push(v_size);
      });

      let lists = [];
      this.skuInfo.skus.forEach(sku => {
        let item = {
          id: sku.xdSkuId,
          stock_num: sku.stock,
          price: sku.nowprice,
          s1: sku.styleId,
          s2: sku.sizeId,
          s3: "0"
        };
        lists.push(item);
      });

      this.sku = {
        price: defaultPrice, // 默认价格（单位元）
        stock_num: totalStock, // 商品总库存
        hide_stock: false, // 是否隐藏剩余库存
        none_sku: false, // 是否无规格商品
        tree: [styleKey, sizeKey],
        list: lists
      };
    });
  },
  methods: {
    ...mapActions(["addCart"]),
    onAddCartClicked() {
      const skuData = this.$refs.vanSku.getSkuData();

      const product = {};

      product.image = this.skuInfo.skus.find(
        sku => sku.xdSkuId === skuData.selectedSkuComb.id
        //   sku.styleId === skuData.selectedSkuComb.s1 &&
        //   sku.sizeId === skuData.selectedSkuComb.s2
      ).img;

      product.title = this.skuInfo.title;
      product.desc = this.skuInfo.title;
      product.price = (skuData.selectedSkuComb.price / 100).toFixed(2);
      product.iid = skuData.selectedSkuComb.id;
      product.selectedNum = skuData.selectedNum;

      product.style = this.skuInfo.skus.find(
        sku => sku.xdSkuId === skuData.selectedSkuComb.id
      ).style;

      product.size = this.skuInfo.skus.find(
        sku => sku.xdSkuId === skuData.selectedSkuComb.id
      ).size;

      this.addCart(product).then(res => {
        this.$toast.show(res);
      });
    }
  }
};
</script>

<style scoped>
</style>