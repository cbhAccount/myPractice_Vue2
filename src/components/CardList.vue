<template>
  <div>
    <el-card class="card">
      <span>{{cardList.head}}</span>
      <img :src="cardList.imgUrl" class="image">
      <div class="handler">
        <span>{{cardList.desc}}</span>
        <a href="">查看详情</a>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    cardList: {
      type: Object
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
