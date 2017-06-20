<template>
  <div class="panel">
      <div class="header">
          <span class="info-title">个人信息</span>
      </div>
      <div class="inner">
        <div class="user-card">
            <a href="#" class="user_avatar">
                <img :src="userInfo.avatar_url" :title="userInfo.loginname"/>
            </a>
            <span class="user-name"><a href="#">{{userInfo.loginname}}</a></span>
            <p class="grade">积分： {{userInfo.score}}</p>
        </div>
      </div>
  </div>
</template>
<script>
import * as api from "@/api/api";
import { mapGetters } from 'vuex';

 export default {
     data(){
         return {
             userInfo:{}
         }
     },
     computed:{
         ...mapGetters({
             userName: 'getRightName'
         })
     },
     methods:{
         getUserInfo(){
            api.getRightUserInfo(this.userName).then( res => {
                if(res.success){
                    this.userInfo = res.data;
                }
            })
         }
     }
};
</script>

<style lang="less" scoped>
.info-title{
    color: #444;
    font-size: 13px;
}
</style>
