<template>
  <div>
    <!-- 边框 -->
    <div class="border-left">
      border-left
    </div>
    <div class="border-top">
      border-top
    </div>
    <div class="border-bottom">
      border-bottom
    </div>
    <div class="border-right">
      border-right
    </div>
    <div class="border-x">
      border-x 只有左右边框
    </div>
    <div class="border-y">
      border-y 只有上下边框
    </div>
    <div class="border border-top-0 border-right-0">
      border border-top-0 border-right-0
      移除上边和右边的边框
    </div>

    <!-- 边框颜色 -->
    <div class="border">
      border
    </div>
    <div class="border border-blue mb-2">
      border-blue
    </div>
    <div class="border border-blue-light">
      border-blue-light
    </div>


    <div class="border bg-blue-light">
      border bg-blue-light
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  margin: 10px;
}
</style>
