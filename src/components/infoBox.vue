<template>
  <div>
      <div class="panel" v-if="userName.length > 0">
        <div class="header">
            <span class="info-title">{{loginUser == userName ?  '个人信息' : 'ta的信息'}}</span>
        </div>
        <div class="inner">
            <div class="user-card">
                <p>
                    <a href="javascript:void(0)" class="user_avatar">
                        <img :src="userInfo.avatar_url" :title="userInfo.loginname">
                    </a>
                    <span class="user-name"><a href="javascript:void(0)">{{userInfo.loginname}}</a></span>
                </p>
                <p class="p-10">积分： {{userInfo.score}}</p>
            </div>
        </div>
    </div>
    <div class="panel" v-if="userName.length == 0">
        <div class="inner">
           <div class="login-box">
                <a href="#/login" class="span-primary">登录</a>
           </div>
        </div>
    </div>
  </div>
</template>
<script>
import * as api from "@/api/api";
import { mapGetters , mapMutations } from 'vuex';

 export default {
     data(){
         return {
             userInfo:{}
         }
     },
     computed:{
         ...mapGetters({
             userName: 'getRightName',
             loginUser: 'getLoginUser'
         })
     },
     methods:{
        ...mapMutations({
             setRightName: 'COM_SET_RIGHTUSERNAME'
         }),
         getUserInfo(){
            api.getRightUserInfo(this.userName).then( res => {
                if(res.success){
                    this.userInfo = res.data;
                }
            })
         }
     },
     watch:{
        'userName':'getUserInfo'
     }
};
</script>

<style lang="less" scoped>
.info-title{
    color: #444;
    font-size: 13px;
}
.login-box{
    text-align: center;
    padding: 50px 0;
}
</style>
