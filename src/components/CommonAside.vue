<template>
    <div>
        <el-menu 
        style="width:160px"
        default-active="1-4-1" 
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
         @open="handleOpen" 
         @close="handleClose" 
         :collapse="isCollapse">
         <!-- 没有子菜单的标签 -->
         <h2>后台管理系统</h2>
          <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
          <!-- 有子菜单的标签 -->
          <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.name">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{item.label}}</span>
            </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
            <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{subItem.label}}</el-menu-item>
  
        </el-menu-item-group>
        </el-submenu>
        
        
    </el-menu>
    </div>
</template>

  
  <style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width:200px;
      min-height: 400px;
    }
    
    .el-aside::-webkit-scrollbar {
      display: none;
   }
    .el-menu{
      border: none;
      height: 100vh;
      h2{
        color: #fff;
        text-align: center;
        font-size: 16px;
      }
    }
  </style>
  
  <script>
    export default {
      data() {
        return {
          isCollapse: false,
          menuData:[
            {
              path:"/",
              name:"home",
              label:"首页",
              icon:"s-home",
              url:"Home/Home"
            },
            {
              path:"/mall",
              name:"mall",
              label:"商品管理",
              icon:"video-play",
              url:"MallManage/MallManage"
            },
            {
              path:"/user",
              name:"user",
              label:"用户管理",
              icon:"user",
              url:"UserManage/UserManage"
            },
            {
              label:"其他",
              icon:"location",
              children:[
                {
                  path:"/page1",
                  name:"page1",
                  label:"页面1",
                  icon:"setting",
                  url:"Other/PageOne"
                },
                {
                  path:"/page2",
                  name:"page2",
                  label:"页面2",
                  icon:"setting",
                  url:"Other/PageTwo"
                }
              ]
            },
            
          ]
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        clickMenu(item){
          console.log(item);
          //当页面的路由与跳转的路由不一致才允许跳转 
          if(this.$router.path !== item.path && !(this.$router.path ==='home' && (item.path ==='/'))){
            this.$router.push(item.path)
          }
          
        }
      },
      computed:{
        //对数据进行过滤   
        // 有子菜单  无子菜单
        noChildren(){
          return this.menuData.filter(item =>!item.children)
        },
        hasChildren(){
          return this.menuData.filter(item =>item.children)
        }
      }
    }
  </script>