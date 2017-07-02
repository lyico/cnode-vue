<template>
  <div class="panel">
      <div class="header">
          <a href="#"> 主页 </a> / 登录
      </div>
      <div class="inner">
          <div class="login-box">
              <div class="control-group">
                    <label class="control-label">请输入accessToken登录</label>
                    <span class="control-input">
                        <input type="text" class="input-box" v-model="accesstoken">
                    </span>
              </div>
              <div class="control-group">
                    <label class="control-label"></label>
                    <span class="control-input">
                        <span class="span-primary" @click="login">登录</span>
                    </span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import * as api from "@/api/api";
import { mapMutations ,mapGetters  } from 'vuex';

export default {
  data(){
      return {
          accesstoken:''
      }
  },
  created(){
    this.setRightName(this.getLoginUser);
  },
  computed:{
        ...mapGetters([
            'getLoginUser'
        ])
  },
  methods:{
      ...mapMutations({
          userLogin: 'COM_USER_LOGIN',
          userLogOut:'COM_USER_LOGOUT',
          setRightName:'COM_SET_RIGHTUSERNAME',
      }),
     login(){
        api.loginToken({ accesstoken: this.accesstoken}).then(res=>{
           if(res.success){
               let data ={
                   token:this.accesstoken,
                   name:res.loginname
               }
                this.userLogin(data);
                let url = this.$route.query.redirect;
                if(!url) url='/';
                this.$router.push({ path: url });
           }else{
                console.log('登录失败');
           }
        })
     } 
  }
}
</script>

<style lang="less" scoped>
    .login-box{
        padding: 50px 0;
        margin: 0 auto;
        width: 500px;
        .control-group{
            padding: 20px 0;
        }
        .control-label{
            color: #999;
            padding-right: 30px;
            text-align: right;
            display: inline-block;
            width: 180px;
        }
        .control-input .input-box{
            height: 20px;
            padding: 4px 6px;
            font-size: 14px;
            line-height: 20px;
            width: 270px;
            border: 1px solid #ccc;
            transition: border linear .2s,box-shadow linear .2s;
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            border-radius: 3px;
        }
    }
</style>
