<template>
  <div>
      <div class="panel">
          <div class="header">
              <a href="#/">首页</a> /
          </div>
          <div class="inner">
              <div class="user-card">
                   <p>
                        <span class="user_avatar"><img :src="UserData.avatar_url"/></span>
                        <span class="user-name">{{UserData.loginname}}</span>
                    </p>
                    <p class="p-10">{{UserData.score}}  积分</p>
                    <p class="p-10">注册时间：{{formatDate(UserData.create_at)}}</p>
              </div>
          </div>
      </div>
      <div class="panel">
          <div class="header">最近创建的话题</div>
          <div class="inner">
              <list-item-box :data="UserData.recent_topics" type="synopsis"></list-item-box>
          </div>
      </div>
      <div class="panel">
          <div class="header">最近参与的话题</div>
          <div class="inner">
              <list-item-box :data="UserData.recent_replies" type="synopsis"></list-item-box>
          </div>
      </div>
  </div>
</template>

<script>
import * as api from "@/api/api";
import * as com from "@/util/common";
import listItemBox from "@/components/listItemBox";

export default {
  data(){
      return {
          UserData:{}
      }
  },
  created(){
    this.getUserInfo();
  },
  components: { listItemBox },
  methods:{ 
       formatDate: (time) => com.formatDate(time),
       getUserInfo(){
            api.getRightUserInfo(this.$route.params.name).then( res => {
                if(res.success){
                    this.UserData = res.data;
                }
            })
         }
    },
  watch:{
      '$route': 'getUserInfo'
  }
}
</script>

<style lang="less" scoped>
    .user-card {
        color: #778087;
    }
</style>
