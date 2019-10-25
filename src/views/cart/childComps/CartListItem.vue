<template>
  <van-swipe-cell :on-close="onClose">
    <div id="shop-item">
      <div class="item-selector">
        <check-button :is-checked="itemInfo.checked" @click.native="checkClick" />
      </div>
      <div class="item-img">
        <img :src="itemInfo.image" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title">{{itemInfo.title}}</div>
        <div class="item-desc">{{itemInfo.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">￥{{itemInfo.price}}</div>
          <div class="item-style center">{{itemInfo.style}} : {{itemInfo.size}}</div>
          <div class="item-count right">x{{itemInfo.count}}</div>
        </div>
      </div>
    </div>

    <template slot="right">
      <van-button square type="danger" text="删除" />
    </template>
  </van-swipe-cell>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapActions } from "vuex";

import { Dialog } from "vant";

export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked;
    },
    ...mapActions(["delCart"]),
    onClose(clickPosition, instance) {
      if (clickPosition === "right") {
        Dialog.confirm({
          message: "确定删除吗？"
        }).then(() => {
          this.delCart(this.itemInfo);
          instance.close();
        });
      }
    }
  },
  components: {
    CheckButton
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}

.info-bottom .item-style{
  position: absolute;
  font-size: 14px;
  bottom: 2px;
  left: 80px;
  padding: 0 10px;
}

.van-swipe-cell .van-button {
  height: 100%;
}
</style>