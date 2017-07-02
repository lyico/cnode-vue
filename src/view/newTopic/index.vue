<template>
    <div class="panel">
         <div class="header">
              <a href="#/">首页</a> / 发布话题
          </div>
          <div class="inner">
              <p class="select-box">
                <span class="tab-selector">选择版块：</span>
                <select name="tab" v-model="CreateData.tab">
                    <option value="">请选择</option>
                    <option value="share">分享</option>
                    <option value="ask">问答</option>
                    <option value="job">招聘</option>
                    <option value="dev">客户端测试</option>
                </select>
                <span v-if="!CreateData.tab.length" class="err-msg">请选择板块</span>
            </p>
            <p><textarea  class="write_title"  rows="1" placeholder="标题字数 10 字以上" v-model="CreateData.title"></textarea>
                <p class="err-msg" v-if="!(titleTrim.length > 10)">请输入标题，并且字数大于10</p>
            </p>
            <markdown-editor v-model="CreateData.content"  ref="markdownEditor"></markdown-editor>
            <p class="btn-box"><span class="span-primary" @click="sendReply()">回复</span></p>
          </div>
    </div>
</template>

<script>
import * as api from '@/api/api';
import { markdownEditor } from 'vue-simplemde';
import axios from 'axios';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
        markdownEditor
    },
    data(){
        return {
            configs: {
                status: false, 
            },
            CreateData:{
                content:'', 
                tab:'',
                title:'',
                accesstoken:''
            }
        }
    },
    computed:{
        ...mapGetters([
            'getToken',
            'getLoginUser'
        ]),
        titleTrim(){
            return this.CreateData.title.replace(/(^\s*)|(\s*$)/g, "");
        }
    },
    created(){
        this.setName(this.getLoginUser);
    },
    methods:{
        ...mapMutations({
            setName: 'COM_SET_RIGHTUSERNAME' 
        }),
        sendReply(){
            this.CreateData.accesstoken = this.getToken;
            if(this.titleTrim.length > 9 && this.CreateData.tab.length){
                this.CreateData.title = this.titleTrim;
                api.createTopic(this.CreateData).then( res =>{
                    if(res.success){
                        this.$router.push({path: '/topic',query:{ id: res.topic_id}});
                    }
                })
            }
          
        }
    }
}
</script>

<style lang="less" scoped>
    .inner{
        padding: 10px;
        .write_title{
            width: 100%;
            border: 1px solid #ddd;
            resize: none;
            height: 30px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            line-height: 22px;
            box-sizing: border-box;
        }
    }
    .select-box{
        select{
            width: 220px;
            border: 1px solid #ccc;
            height: 30px;
            line-height: 30px;  
            display: inline-block;
            padding: 4px 6px;
            margin-bottom: 10px;
            font-size: 14px;
            color: #555;
            vertical-align: middle;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }
    }
    .err-msg{
        color: #ff4949;
        font-size: 12px;
        line-height: 1;
        padding-top: 4px;
    }
</style>

