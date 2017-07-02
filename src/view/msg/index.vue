<template>
  <div>
     <div class="panel">
        <div class="header">
              <a href="#/">首页</a> /  新消息
          </div>
          <div class="inner">
            <msg-list :data='msgData.hasnot_read_messages'></msg-list>
          </div>
     </div>
     <div class="panel">
        <div class="header">
             过往信息
          </div>
          <div class="inner">
            <msg-list :data='msgData.has_read_messages'></msg-list>
          </div>
     </div>
  </div>
</template>

<script>
import * as api from '@/api/api';
import { mapGetters, mapMutations } from 'vuex';
import msgList from '@/components/msgList';

export default {
  data(){
    return {
      msgData:{}
    }
  },
  computed:{
    ...mapGetters([
      'getToken',
      'getLoginUser'
    ])
  },
  created(){
    this.getData();
    this.setName(this.getLoginUser);
  },
  methods:{
      ...mapMutations({
        setName: 'COM_SET_RIGHTUSERNAME' 
      }),
      getData(){
        api.getMsgData({ "accesstoken":this.getToken }).then(res=>{
          if(res.success){
            this.msgData = res.data;
          }
        })
      }
  },
  components: { msgList },
  watch:{
    'getToken':function(){
        this.setName(this.getLoginUser);
    }
  }
}
</script>

<style lang="less" scoped>
 
</style>
