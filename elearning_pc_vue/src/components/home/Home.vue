<template>
  <div class="page-wrap">
    <!-- 顶部导航栏 -->
    <Homeheader></Homeheader>
    <section class="conten-wrap">
      <!-- 分类、导航、轮播图 -->
      <div class="cate-nav-wrap">
        <header class="nav-wrap">
          <div class="mw pl-230">
            <MainNav></MainNav>
          </div>
        </header>
        <section class="cate-wrap">
          <div class="mw pos-relative">
            <category></category>
            <Carousel></Carousel>
          </div>
        </section>
      </div>
      <!-- 轮播头条 -->
      <section class="head-line-wrap">
        <div class="mw">
          <Headline></Headline>
        </div>
      </section>
      <section class="course-rank-wrap">
        <div class="mw">
          <div class="nc-wrap clearfix">
            <!-- 课程排行榜 -->
            <GralRank></GralRank>
            <!--最新课程-->
            <NewCourse></NewCourse>
          </div>
        </div>
      </section>
      <!-- 精品课程 -->
      <section class="well-course-wrap">
        <div class="mw">
          <Wellcourse></Wellcourse>
        </div>
      </section>
    </section>
    <!-- home footer -->
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
  import Homeheader from "../headers/homeHeader.vue";
  import Carousel from "./Carousel.vue";
  import HomeFooter from "../footers/HomeFooter.vue";
  import Category from "./Category.vue";
  //import TopNav from "./TopNav.vue";
  import MainNav from "../navs/MainNav.vue";
  import Headline from "./Headline.vue";

  import NewCourse from "./NewCourse.vue";

  import Wellcourse from "./Wellcourse.vue";

  import GralRank from "./GralRank.vue";

  import { getLang, updateUserInfo } from "../../utils/auth";
  import { getHomeData } from "../../utils/api/home";
  export default {
    name: "Home",
    data() {
      return {
        //lang: ""
      };
    },
    components: {
      Homeheader,
      Carousel,
      Category,
      MainNav,
      Headline,
      NewCourse,
      Wellcourse,
      GralRank,
      HomeFooter
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        var data = {
          apiName: "QUERY_USER_BY_TOKEN",
          token: "fc5b19db-1e95-42fd-8348-0381107e4fa3",
          userId: "E00000008",
          apiType: "global"
        };
        getHomeData(data)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .conten-wrap {
    padding: 0 0 15px 0;
  }
  .cate-nav-wrap {
    position: relative;
    height: $home_cate_nav_wrap_height;
  }
  .nav-wrap {
    /* padding: $nav_padding; */
    background-color: #fff;
  }
  .cate-wrap {
    background-color: #fff;
  }
  .pl-230 {
    padding: $nav_padding;
  }
  .pos-relative {
    position: relative;
  }
  .nc-wrap {
    position: relative;
  }
  .course-rank-wrap {
    margin: 15px auto;
  }
  .well-course-wrap {
    margin: 15px auto;
  }

</style>

