<template>
  <div class="user">
    <div class="container">
  <el-descriptions class="margin-top" title="个人信息" :column="3" border>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      江苏省苏州市吴中区吴中大道 1188 号
    </el-descriptions-item>
  </el-descriptions>
</div>
  </div>

</template>

<script>
export default {
  name: 'UserInformation'
}
</script>

<style lang="less" scoped>
.user{
  width:100vw;
  height:100vh;
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)
}
.container{
width: 1190px;
margin: 0 auto;
}
</style>
