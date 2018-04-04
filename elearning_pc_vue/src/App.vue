<template>

  <keep-alive>
     
      <router-view/>
    
  </keep-alive>

</template>

<script>

  let computeClientHeight = function(){
    let clientMinHeight = 613;
    let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let clientStyle = clientHeight > clientMinHeight ? {'min-height': clientHeight + 'px'} : {'height':clientHeight + 'px'};
    return clientStyle;
  }

  export default {
    name: "App",
    data() {
      return {
        clientStyle: computeClientHeight()
      };
    },
    mounted() {
      let _this = this;
      window.onresize = function onresize() {
        _this.$nextTick(() => {
          setTimeout(() => {
            _this.clientStyle = computeClientHeight();
          }, 50);
        });
      };
    },
    computed: {}
  };
</script>

<style lang="scss">
  * {
    outline: 0;
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    /*清除移动端tab产生的高亮状态   transparent透明*/
    -webkit-tap-highlight-color: transparent;
  }

  blockquote,
  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  input,
  legend,
  li,
  ol,
  p,
  pre,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  select {
    font-size: 100%;
    font-family: inherit;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }

  textarea,
  input {
    border: none;
    outline: none;
    /*针对iOS系统 取出扁平化效果*/
    -webkit-appearance: none;
  }

  /*清除浮动*/
  .clearfix::before,
  .clearfix::after {
    content: "";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;
  }

  ol,
  ul {
    list-style: none;
  }

  a,
  a:visited {
    text-decoration: none;
    color: #333;
  }

  em,
  i {
    font-style: normal;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: "Microsoft YaHei UI", "Avenir", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    color: #666;
    background: #ffffff;
    -webkit-text-size-adjust: 100% !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }

  .page-wrap {
    height: 100%;
    padding: $page_wrap_padding;
  }

  .conten-wrap {
    height: 100%;
  }

  .mw {
    width: $mainWidth;
    margin: 0 auto;
  }

  .margin-0-auto {
    margin: 0 auto;
  }
</style>

