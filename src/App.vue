<template>
  <!-- <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row> -->
  <!-- 渲染路由组件 -->
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
