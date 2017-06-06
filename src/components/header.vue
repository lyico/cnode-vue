<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="container">
        <a class="brand f-l" href="/">
          <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
        </a>
        <ul class="nav f-r">
          <li><a href="#">首页</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
<style lang="less" scoped>
.navbar{
  width: 100%;
  background: #444;
  font-size: 13px;
  .container {
    width: 100%;
    min-width: 960px;
    margin: 0 auto;
    max-width: 1400px;
  }
  .brand {
    width: 120px;
    padding: 3px 20px;
    height: 28px;
    display: block;
    margin-left: -20px;
    font-size: 20px;
    font-weight: 200;
    color: #777;
    img{
      vertical-align: middle;
    }
  }
}
.navbar-inner{
  width: 90%;
  margin: auto;
  padding: 5px;
  overflow: hidden;
  .nav{
    list-style: none;
    a{
      color: #ccc;
      padding: 10px 15px;
      text-decoration: none;
    }
  }
}
</style>
