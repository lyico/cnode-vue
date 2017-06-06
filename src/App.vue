<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/header';

export default {
  components: { Header },
};
</script>

<style lang="less" scoped>
#app{
  .red{
    font-size: 60px;
  }
}
</style>
