<template>
  <div>
    <headerBox></headerBox>
    <div id="main">
      <div class="main-right">
        <infoBox></infoBox>
      </div>
      <div class="main-left">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import headerBox from '@/components/headerBox';
import infoBox from '@/components/infoBox';

export default {
  components: { headerBox, infoBox },
};
</script>

<style lang="less" scoped>

</style>
