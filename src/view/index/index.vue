<template>
  <div class="panel">
      <div class="header">
          <router-link v-for="(item,index) in tabLists" :to="{query: { tab: item.query }}" class="topic-tab" :class="$route.query.tab == item.query || (index == 0 && !$route.query.tab) ? 'current-tab' : ''" :key="index">{{item.name}}</router-link>
      </div>
      <div class="inner">
          <listItemBox :data="listData"></listItemBox>
          <pagination @updata="clickPage" :current-page="reqData.page" :total="800"></pagination>
      </div>
  </div>
</template>

<script>
import listItemBox from "@/components/listItemBox";
import pagination from "@/components/pagination";
import * as api from "@/api/api";

export default {
    data(){
        return {
            tabLists:[
                {name:"全部", query:"all"},
                {name:"精华", query:"good"},
                {name:"分享", query:"share"},
                {name:"问答", query:"ask"},
                {name:"招聘", query:"job"},
                {name:"客户端测试", query:"dev"},
                ],
            listData:[],
            reqData:{
                page: 1,
                tab: this.$route.query.tab
            }
        }
    },
    components:{ listItemBox, pagination },
    created(){
        this.getData();
    },
    methods:{
        getData: function(){
           api.getTopicsList(this.reqData).then(res=>{
                if(res.success){
                    this.listData=res.data;
                }
            })
        },
        clickPage:function(num){
            this.reqData.page=num;
            this.getData();
        }
    },
    watch:{
        "$route":"getData"
    }
}
</script>

<style lang="less" scoped>
.topic-tab {
    margin: 0 10px;
    color: #80bd01;
    &.current-tab{
        background-color: #80bd01;
        color: #fff;
        padding: 3px 4px;
        border-radius: 3px;
    }
}
</style>
