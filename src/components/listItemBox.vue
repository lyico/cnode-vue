<template>
  <ul class="lists-box">
      <template v-if="data.length">
          <li v-for="(item,index) in data" :key="index" >
                <router-link class="user_avatar f-l" :to="{ name: 'user', params: { name: item.author.loginname }}">
                    <img :src="item.author.avatar_url" :title="item.author.loginname">
                </router-link>
                <span class="reply_count f-l" v-if="!type == 'synopsis'">
                    <span class="count_of_replies" title="回复数">{{item.reply_count}}</span>
                    <span class="count_seperator">/</span>
                    <span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
                </span>
                <a href="#" class="last_time f-r">
                    <span class="last_active_time">{{formatDate(item.last_reply_at)}}</span>
                </a>
                <div class="topic-title-box">
                    <template v-if="item.tab">
                        <span class="topiclist-tab" v-if="!item.good && !item.top && item.tab!=='dev'">{{classify[item.tab]}}</span>
                        <span class="topiclist-tab top" v-if="item.good || item.top">{{item.top ? '置顶':'精华'}}</span>
                    </template>
                    <router-link :to="{ path: '/topic', query: { id: item.id }}">{{item.title}}</router-link>
                </div>
          </li>
      </template>
      <template v-else-if="!data.length">
          <li>当前没有数据</li>
      </template>
  </ul>
</template>

<script>
import *as com from "@/util/common";

export default {
    props:{
        data:{
            type: Array,
            default:() => []
        },
        type:{
            type:String,
            default:"details"
        }
    },
    data(){
        return {
            classify:{
                ask:'问答',
                good:'精华',
                share:'分享',
                job:'招聘'
            }
        }
    },
    methods:{
        formatDate:(time) => com.formatDate(time),
    }
  
}
</script>

<style lang='less' scoped>
.lists-box{
    background-color:#fff;
    li{
        padding: 10px;
        font-size: 14px;
        overflow: hidden;
        line-height: 2em;
        border-top: 1px solid #f0f0f0;
        .topic-title-box{
            text-overflow: ellipsis;
            max-width: 70%;
            white-space: nowrap;
            overflow: hidden;
        }
        .reply_count{
            width: 70px;
            display: inline-block;
            text-align: center;
        }
        .count_of_replies{
            color: #9e78c0;
        }
        .count_seperator{
            margin: 0 -3px;
            font-size: 10px;
        }
        .count_of_visits{
            font-size: 10px;
            color: #b4b4b4;
        }
        .last_time{
            color: #778087;
            font-size: 12px;
        }
        .user_small_avatar{
            height: 18px;
            width: 18px;
            vertical-align: middle;
            margin-right: .5em;
            border-radius: 3px;
        }
        &:hover{
            background-color: #f5f5f5;
        }
    }
}
</style>
