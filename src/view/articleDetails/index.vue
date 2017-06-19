<template>
  <div class="panel">
      <div class="panel-header">
          <div class="panel-title">
              {{detailsData.title}}
          </div>
          <div class="changes-box">
              <span>发布于{{formatDate(detailsData.create_at)}}</span>
              <span>作者{{detailsData.author.loginname}}</span>
              <span>{{detailsData.visit_count}}次浏览</span>
              <span>来自</span>
              <p class=" topiclist-tab top collect-btn f-r">收藏</p>
          </div>
      </div>
      <div class="inner topic">
        <div class="topic_content" v-html="detailsData.content"></div>
      </div>
  </div>
</template>

<script>
import * as api from '@/api/api';
import *as com from "@/util/common";
import '@/style/markdown.css';

export default {
    data(){
        return {
            detailsData:{}
        }
    },
    created(){
        this.getData();
    },
    methods:{
        formatDate: (time) => com.formatDate(time),
        getData:function(){
            api.getTopicDetails(this.$route.query.id).then(res=>{
                if(res.success){
                    this.detailsData = res.data;
                    console.log(this.detailsData)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .panel-header{
        padding: 10px;
        background: #fff;
        .panel-title{
            width: 85%;
            font-size: 22px;
            font-weight: 700;
            line-height: 130%;
            margin: 8px 0;
        }
        .changes-box{
            font-size: 12px;
            color: #838383;
            overflow: hidden;
            span:before{
                content: "•";
            }
        }
    }
    .inner{
        &.topic{
            padding: 10px;
            border-top: 1px solid #e5e5e5;
        }
        .topic_content{
            margin: 0 10px;
        }
    }
</style>
