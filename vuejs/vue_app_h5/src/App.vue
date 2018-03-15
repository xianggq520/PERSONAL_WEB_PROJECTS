<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  -webkit-tap-highlight-color: transparent;
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

body {
  font-family: "Microsoft YaHei UI", sans-serif;
  font-size: 14px;
  color: #333;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
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

body {
  margin: 0 auto;
  min-width: 320px;
  max-width: 540px;
  background-color: #f7f7f7;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  color: #666;
  -webkit-text-size-adjust: 100% !important;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main_wrap {
  max-width: 540px;
  margin: 0 auto;
  padding: 0 0 50px 0;
}
</style>
