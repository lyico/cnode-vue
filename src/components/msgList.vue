<template>
  <div>
    <ul class="msg-box">
        <li v-if="!data.length">无消息</li>
        <li v-else-if="data.length" v-for="(item,index) in data" :key="index">
            <router-link :to="{ name: 'user', params: { name: item.author.loginname }}">{{ item.author.loginname }}</router-link>
            <span v-if="item.type === 'at'">在话题</span>
            <span v-if="item.type === 'reply'">回复你的话题</span>
            <router-link :to="{ path: '/topic', query: { id: item.topic.id }}">{{ item.topic.title }}</router-link>
            <span v-if="item.type === 'at'">中 @ 了你</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    data: {
      type :Array,
      default:() => []
    }
  }
}
</script>

<style lang="less" scoped>
   .msg-box{
    li{
      font-size: 14px;
      padding: 10px;
      border-top: 1px solid #f0f0f0;
    }
  }
</style>

