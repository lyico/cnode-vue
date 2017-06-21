<template>
  <div>
    <headerBox></headerBox>
    <div id="main">
      <div class="main-right">
        <infoBox v-show="userName.length>0"></infoBox>
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
import { mapGetters } from 'vuex';

export default {
  components: { headerBox, infoBox },
  computed:{
      ...mapGetters({
             userName: 'getRightName'
      })
  },
};
</script>

<style lang="less" scoped>

</style>
