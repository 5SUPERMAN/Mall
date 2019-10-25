<template>
    <div class="list-view">
        <div class="list-item" v-for="(item,index) in listData" :key="index">
            <van-icon :name="item.icon" :style="{color:item.iconColor}" />
            <div class="itemTxt">{{item.info}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.list-view{
  border-top: 12px solid #eee;
}
.list-item{
    position: relative;
    height: 44px;
    line-height: 44px;
}
.list-item .van-icon{
    position: absolute;
    top: 11px;
    left: 12px;
    font-size: 20px;
}
.itemTxt{
    height: 100%;
    margin-left: 45px;
    font-size: 14px;
    border-bottom: 1px solid #eee;
}
</style>