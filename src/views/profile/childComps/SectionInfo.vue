<template>
  <div class="section">
    <div class="section-item">
      <div class="number">
        <span class="balance">0.00</span>
        元
      </div>
      <div class="txt">我的余额</div>
    </div>
    <div class="section-item center">
      <div class="number">
        <span class="balance">0</span>
        个
      </div>
      <div class="txt">我的优惠</div>
    </div>
    <div class="section-item">
      <div class="number">
        <span class="balance">0</span>
        分
      </div>
      <div class="txt">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section"
};
</script>

<style scoped>
.section {
  display: flex;
  height: 90px;
}
.section-item{
  flex: 1;
  font-size: 13px;
  text-align: center;
  padding: 18px;
}
.center{
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.balance{
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
.txt{
  margin-top: 10px;
}
</style>