<template>
  <header class="header-wrap">
    <div class="mw clearfix">
      <div class="topL">
        <div class="logo_bg">
          <span class="logo_img">
            <img src="/static/images/home/logo/logo.png">
          </span>
          <span class="logo_hr"></span>
          <span class="logo_name">摩博定制基础版</span>
        </div>
      </div>
      <div class="topR">
        <div class="search">
          <input placeholder="请输入您要搜索的内容" class="input-with-select">
          <icon name="Search" scale="2.5" class="search_icon"></icon>
        </div>
        <div class="message">
          <icon name="Message" scale="2.5" class="msg"></icon>消息
        </div>
        <div class="person">
          <span class="head_img"></span>
          <span class="head_name">蔡晓娟</span>
        </div>

        <div class="quit">
          <icon name="Close" scale="2.5" class="close"></icon>[退出]
        </div>
        <div class="i18n-wrap">
          <i18n></i18n>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import i18n from "../i18n/i18n.vue";
  export default {
    name: "Homeheader",
    data() {
      return {};
    },
    methods: {},
    components: {
      i18n
    }
  };
</script>

<style  scoped lang="scss">
  .header-wrap {
    height: $home_header_height;
    background: $home_header_bg_color;
  }

  /*左边logo*/
  .topL {
    width: $home_header_left_width;
    height: 100%;
    float: left;
  }

  .logo_bg {
    position: relative;
    float: left;
    width: $home_header_logo_bg_width;
    height: $home_header_logo_bg_height;
    margin: $home_header_logo_bg_margin;
    top: $home_header_logo_bg_top;
    line-height: 58px;
    font-size: 42px;
    cursor: pointer;
  }
  .logo_bg .logo_img {
    position: absolute;
    width: 270px;
    height: 58px;
    line-height: 58px;
    cursor: pointer;
    top: -8px;
    left: 0;
  }
  .logo_bg .logo_img img {
    width: 250px;
    height: 38px;
  }

  .logo_bg .logo_hr {
    width: 2px;
    height: 22px;
    display: inherit;
    background: #808080;
    position: absolute;
    top: 10px;
    left: 260px;
  }

  .logo_bg .logo_name {
    font-size: 26px;
    color: #666;
    position: absolute;
    padding-left: 10px;
    right: -8px;
    top: -8px;
  }
  /*右边搜索、消息、个人中心、退出*/
  .topR {
    width: 50%;
    height: 96px;
    float: right;
  }
  .search {
    float: left;
    padding-left: 39px;
  }
  .search .input-with-select {
    width: 220px;
    line-height: 32px;
    height: 32px;
    padding-left: 5px;
    border-bottom: 1px solid #666;
    font-size: 12px;
    color: #666;
    margin-top: 32px;
  }
  .search .search_icon {
    position: relative;
    top: 12px;
  }
  .message {
    float: left;
    padding-top: 32px;
    line-height: 42px;
    padding-left: 20px;
    cursor: pointer;
  }
  .message .msg {
    position: relative;
    top: 6px;
    left: -1px;
  }
  .person {
    float: left;
    padding-top: 38px;
    line-height: 31px;
    padding-left: 20px;
    cursor: pointer;
  }
  .person .head_img {
    border-radius: 50%;
    background: red;
    height: 30px;
    width: 30px;
    display: block;
    float: left;
  }
  .person .head_name {
    padding-left: 5px;
  }
  .quit {
    float: left;
    padding-top: 32px;
    line-height: 42px;
    padding-left: 20px;
    cursor: pointer;
  }
  .quit .close {
    position: relative;
    top: 6px;
    left: -1px;
  }

  .i18n-wrap {
    float: left;
    padding-top: 32px;
    line-height: 42px;
    padding-left: 20px;
    cursor: pointer;
  }


</style>
