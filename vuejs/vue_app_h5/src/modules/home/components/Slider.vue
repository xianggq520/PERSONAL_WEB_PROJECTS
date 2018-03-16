<template>
    <div class="mod_slider">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="slide in sliderList" :key="slide.id">
                <a class="url" href="#"><img :src="slide.url" alt="" srcset=""></a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";

    let sliderList = [
      { id: 1, name: "", url: "/static/images/home/banner/l1.jpg" },
      { id: 2, name: "", url: "/static/images/home/banner/l2.jpg" },
      { id: 3, name: "", url: "/static/images/home/banner/l3.jpg" },
      { id: 4, name: "", url: "/static/images/home/banner/l4.jpg" },
      { id: 5, name: "", url: "/static/images/home/banner/l5.jpg" },
      { id: 6, name: "", url: "/static/images/home/banner/l6.jpg" },
      { id: 7, name: "", url: "/static/images/home/banner/l7.jpg" }
    ];
    export default {
      data() {
        return {
          swiperOption: {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: false
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          },
          sliderList
        };
      },
      components: {
        swiper,
        swiperSlide
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper;
        }
      },
      mounted() {
        this.swiper.slideTo(0, 1000, false);
      }
    };
</script>
<style scoped>
    img {
      border: 0 none;
      vertical-align: top;
    }
    a,
    a:visited {
      text-decoration: none;
      color: #333;
    }

    a,
    button,
    img,
    input,
    select {
      -webkit-tap-highlight-color: transparent;
      outline: 0;
    }

    .mod_slider {
      position: relative;
      overflow: hidden;
      z-index: 2;
      background-color: #f7f6f5;
    }

    .mod_slider .swiper-slide,
    .mod_slider .swiper-slide .url {
      height: 100%;
    }

    .mod_slider .swiper-slide .url {
      display: block;
    }
    .mod_slider .swiper-slide img {
      width: 100%;
    }
</style>

