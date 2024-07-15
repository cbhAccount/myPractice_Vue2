<template>
<div class="headText">
  <el-card shadow="never">
      <slot>默认插槽</slot>
    </el-card>
    </div>
</template>

<script>
export default {
  name: 'headCard'
}
</script>

<style lang="less" scoped>
.headText{
  width: 100%;
  margin-bottom: 1rem;
}
.el-card{
  width: 100%;
}
</style>
