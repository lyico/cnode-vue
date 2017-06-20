<template>
    <div>
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    {{detailsData.title}}
                </div>
                <div class="changes-box">
                    <span>发布于{{formatDate(detailsData.create_at)}}</span>
                    <span>作者{{detailsData.author ? detailsData.author.loginname : ''}}</span>
                    <span>{{detailsData.visit_count}}次浏览</span>
                    <span>来自</span>
                    <p class=" topiclist-tab top collect-btn f-r">收藏</p>
                </div>
            </div>
            <div class="inner topic">
                <div class="topic_content" v-html="detailsData.content"></div>
            </div>
        </div>
        <div class="panel" v-if="detailsData.reply_count">
            <div class="header">{{detailsData.reply_count}} 回复</div>
            <div class="inner">
                <ul>
                    <li class="reply-item" v-for="(item,index) in detailsData.replies">
                        <div class="author_content">
                            <a href="#" class="user_avatar">
                                <img :src="item.author.avatar_url">
                            </a>
                            <div class="user_info">
                                <a href="#" class="reply_author">{{item.author.loginname}} </a>
                                <span class="reply_time">{{index+1}} 楼 {{formatDate(item.create_at)}}</span>
                            </div>
                            <div class="user_action f-r">
                                <span>
                                    <i class="ico unify ico-like" title="喜欢"></i>
                                    <span class="up-count">{{item.ups.length}}</span>
                                </span>
                                <span>
                                    <i class="ico unify ico-reply" title="回复"></i>
                                </span>
                            </div>
                        </div>
                        <div class="reply_content" v-html="item.content"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="panel">
            <div class="header">
                添加回复
            </div>
            <div class="inner">
                <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
                <p class="btn-box"><span class="span-primary" @click="sendReply()">回复</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import * as api from '@/api/api';
import *as com from "@/util/common";
import '@/style/markdown.css';
import { markdownEditor } from 'vue-simplemde';

export default {
    components: {
        markdownEditor
    },
    data(){
        return {
            detailsData:{},
            content:"", 
            configs: {
                status: false, 
            }
        }
    },
    computed: {
        simplemde() {
            return this.$refs.markdownEditor.simplemde
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
        },
        sendReply:function(){
            console.log(this.simplemde.markdown(this.content))
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
    .reply-item{
        padding: 10px;
        font-size: 14px;
        border-top: 1px solid #f0f0f0;
        .user_small_avatar{
            height: 18px;
            width: 18px;
            vertical-align: middle;
            margin-right: .5em;
            border-radius: 3px;
        }
        .user_info{
            margin-left: 10px;
            display: inline-block;
        }
        .user_action{
            margin-left: 20px;
            font-size: 15px;
        }
        .reply_content{
            padding-left: 50px;
        }
    }
    .btn-box{
        padding: 10px;
    }
</style>
