<template>
  <div id="subcategory">
    <div class="subcategory-item" v-for="(item,index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subcategory",
  props: {
    subcategories: {
      type: Object,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
#subcategory{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    margin-left: 10px;
}
.subcategory-item{
    width: 65px;
    height: 65px;
    margin: 20px 10px;
    text-align: center;
}
.subcategory-item a{
    display: block;
    width: 100%;
    height: 100%;
}
.subcategory-item img{
    width: 100%;
    height: 100%;
}
.subcategory-item span{
    display: block;
    margin-top: 10px;
    font-size: 14px;
}
</style>