<template>

  <div class="carousel">
    <el-carousel>
      <el-carousel-item v-for="item in sliderList" :key="item.id">
        <img :src="item.url" alt="">
        <!-- <div class="car-bg" :style="{ backgroundImage: 'url('+ item.url +')'}"></div> -->
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
  import Vue from "vue";
  import { Carousel } from "element-ui";
  Vue.use(Carousel);
  export default {
    name: "carousel",
    props: [],
    mounted() {},
    data() {
      return {
        sliderList: [
          { id: 1, name: "", url: "/static/images/home/banner/l1.jpg" },
          { id: 2, name: "", url: "/static/images/home/banner/l2.jpg" },
          { id: 3, name: "", url: "/static/images/home/banner/l3.jpg" },
          { id: 4, name: "", url: "/static/images/home/banner/l4.jpg" },
          { id: 5, name: "", url: "/static/images/home/banner/l5.jpg" },
          { id: 6, name: "", url: "/static/images/home/banner/l6.jpg" },
          { id: 7, name: "", url: "/static/images/home/banner/l7.jpg" }
        ]
      };
    },
    methods: {},
    computed: {}
  };
</script>

<style lang="scss" scoped>
  .carousel {
    width: $carousel_width;
    height: 380px;
    /* position: absolute; */
    right: 0;
    top: 50px;
  }
</style>
<style rel="stylesheet/scss" lang="scss">
  .el-carousel__container {
    height: 380px;
  }
  .el-carousel__arrow--left {
    left: 246px;
  }
  .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 15px;
  }
  .el-carousel__item {
    img {
      width: 968px;
      height: 380px;
      width: 100%;
    }
  }

  .el-carousel__indicator {
    button {
      opacity: 1;
    }
    &.is-active {
      button {
        width: 30px;
        background-color: #f36f3a !important;
      }
    }
  }
</style>
