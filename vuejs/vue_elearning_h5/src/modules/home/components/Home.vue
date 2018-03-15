<template>
  <div class="main_wrap">
    <SearchBar></SearchBar>
    <!-- <div id="topsearchbar">
      <div class="mod_searchbar  fixed type_cate skin_1">
        <div class="mod_searchbar_inner">
          <i class="mod_searchbar_cate icon_cate" id="__cate" ptag="137571.2.1"></i>
          <form class="mod_searchbar_form " onsubmit="return false;" action="#">
            <input class="mod_searchbar_text" type="search" id="topSearchTxt" placeholder="搜索喜欢的商品" autocomplete="off">
            <i class="mod_searchbar_clear" id="topSearchClear"></i>
          </form>
          <span class="mod_searchbar_btn bg_1" id="topSearchbtn" style="display:none;">搜索</span>
        </div>
      </div>
    </div> -->
    <div class="main_wrap">
      
    </div>
    <!-- <div class="sq_nav_footer" id="box_sq_foot_nav">
      <a class="nav_index">购物</a>
      <a class="nav_search" reported="1">分类</a>
      <a class="nav_newsfeed" reported="1">购物圈</a>
      <a class="nav_shopcart" reported="1">购物车</a>
      <a class="nav_me" reported="1">个人中心</a>
    </div> -->
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import FooterBar from "./FooterBar.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    SearchBar,
    FooterBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_wrap {
  margin-top: 60px;
}
</style>
