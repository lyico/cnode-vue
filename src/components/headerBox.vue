<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="container">
        <router-link to="/" class="brand f-l">
          <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
        </router-link>
        <ul class="nav f-r">
          <li><router-link to="/">首页</router-link></li>
          <li v-if="!getToken.length"><router-link to="/login">登录</router-link></li>
          <template v-else-if="getToken.length">
             <li><router-link to="/create">发布话题</router-link></li>
             <li><router-link to="/msg">未读消息</router-link></li>
             <li><a @click="logOut" href="javascript:void(0)">退出</a></li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters ,mapMutations  } from 'vuex';

export default {
  computed:{
    ...mapGetters([
      'getToken',
      'getRightName',
      'getLoginUser'
    ])
  },
  methods:{
    ...mapMutations({
          logOut:'COM_USER_LOGOUT',
      })
  }
};
</script>
<style lang="less" scoped>
.navbar{
  width: 100%;
  background: #444;
  font-size: 13px;
  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
  }
  .brand {
    width: 120px;
    padding: 3px 20px;
    height: 28px;
    display: block;
    margin-left: -20px;
    font-size: 20px;
    font-weight: 200;
    color: #777;
    img{
      vertical-align: middle;
    }
  }
}
.navbar-inner{
  width: 90%;
  margin: auto;
  padding: 5px;
  overflow: hidden;
  .nav{
    list-style: none;
    a{
      color: #ccc;
      padding: 10px 15px;
      text-decoration: none;
      display: inline-block;
    }
    li{
      display: inline-block;
    }
  }
}
</style>
