<template>
    <div class="sq_nav_footer" id="box_sq_foot_nav">
        <a class="nav_index">购物</a>
        <a class="nav_search" reported="1">分类</a>
        <a class="nav_newsfeed" reported="1">购物圈</a>
        <a class="nav_shopcart" reported="1">购物车</a>
        <a class="nav_me" reported="1">个人中心</a>
    </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style>
.sq_nav_footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 540px;
  margin: 0 auto;
  height: 49px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  background-color: #fff;
  z-index: 310;
  box-shadow: 0 -2px 10px rgba(51, 51, 51, 0.1);
}

.sq_nav_footer > a {
  position: relative;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: #999;
  line-height: 1;
}

.sq_nav_footer > a::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  margin: 7px auto 5px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100%;
}

.sq_nav_footer > a.nav_index::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23999%22 fill-rule=%22evenodd%22 d=%22M8 1h24a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm20 20a8 8 0 0 1-16 0v-7.5a1.5 1.5 0 0 1 3 0V21a5 5 0 0 0 10 0v-7.5a1.5 1.5 0 0 1 3 0V21z%22/%3E%3C/svg%3E");
}

.sq_nav_footer > a.nav_index::before {
  background-image: url(//img14.360buyimg.com/jdphoto/jfs/t5926/234/5833735313/2078/c5bc5e3f/596de399N63a12d1a.png) !important;
  filter: grayscale(100%);
}

.sq_nav_footer > a.nav_search::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23999%22 d=%22M34.5 23.5a11.7 11.7 0 0 1-1.3 1l2.5 4.3a1.5 1.5 0 0 1-2.6 1.5L30.7 26a12 12 0 1 1 4-2.5zm-2-15a9 9 0 1 0-.2 13 9 9 0 0 0 0-13zM10.4 23h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 0 3zm0-12h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 0 3zm-7 23h31a1.5 1.5 0 0 1 0 3h-31a1.5 1.5 0 0 1 0-3z%22/%3E%3C/svg%3E");
}

.sq_nav_footer > a.nav_search::before {
  background-image: url(//img20.360buyimg.com/jdphoto/jfs/t5914/174/5815986016/2337/a5f8d273/596de4bdN9b7ad086.png) !important;
  filter: grayscale(100%);
}

.sq_nav_footer > a.nav_newsfeed::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23999%22 d=%22M20 40a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm0-37A17 17 0 0 0 4.6 27a12 12 0 0 1 5.5-5 7 7 0 1 1 9.8 0 12 12 0 0 1 3.8 2.6 7 7 0 0 1 2.4-2 4 4 0 1 1 6 0 7 7 0 0 1 3.6 4.2A17 17 0 0 0 20 3z%22/%3E%3C/svg%3E");
}

.sq_nav_footer > a.nav_newsfeed::before {
  background-image: url(//img10.360buyimg.com/jdphoto/jfs/t6058/281/5782079395/2689/60883fd5/596de4d7N37086100.png) !important;
  filter: grayscale(100%);
}

.sq_nav_footer > a.nav_shopcart::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23999%22 d=%22M36.5 24.5a4 4 0 0 1-4 4h-17a4 4 0 0 1-4-4l-4.2-19H3a1.5 1.5 0 0 1 0-3h5a5.3 5.3 0 0 1 2.2 1.7l.6 2 .7.3h23a4 4 0 0 1 4 4zm-21 7a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm17 0a3 3 0 1 1-3 3 3 3 0 0 1 3-3z%22/%3E%3C/svg%3E");
}

.sq_nav_footer > a.nav_shopcart::before {
  background-image: url(//img11.360buyimg.com/jdphoto/jfs/t5686/271/6954740412/2035/c9ce81ec/596de54cNf1e98575.png) !important;
  filter: grayscale(100%);
}

.sq_nav_footer > a.nav_me::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23999%22 d=%22M26 29.8a45.5 45.5 0 0 1 3.8 7.6 1 1 0 0 1 .2.5 1 1 0 0 1-1 1H11a1 1 0 0 1-1-1 1 1 0 0 1 .2-.6 45.5 45.5 0 0 1 4-7.6 15 15 0 1 1 11.7 0zm2-9.8a1 1 0 0 0-2 0h-.3a7 7 0 0 1-11.4 0H14a1 1 0 0 0-2 0 1 1 0 0 0 .4.8 9 9 0 0 0 15.2 0 1 1 0 0 0 .4-.7z%22/%3E%3C/svg%3E");
}

.sq_nav_footer > a.nav_me::before {
  background-image: url(//img10.360buyimg.com/jdphoto/jfs/t5839/299/7008698617/2246/15d2a607/596de55aNeb5f1bcd.png) !important;
  filter: grayscale(100%);
}
</style>
