<template>
  <ul class="lists-box">
      <li>
        <router-link class="user_avatar f-l" to="">
            <img src="" alt="">
        </router-link>
        <span class="reply_count f-l">
            <span class="count_of_replies" title="回复数">82</span>
            <span class="count_seperator">/</span>
            <span class="count_of_visits" title="点击数">23333</span>
        </span>
        
      </li>
  </ul>
</template>

<script>
export default {
  
}
</script>

<style lang='less' scoped>
.lists-box{
    background-color:#fff;
    li{
        padding: 10px 0 10px 10px;
        font-size: 14px;
        overflow: hidden;
        line-height: 2em;
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
    }
}
</style>
