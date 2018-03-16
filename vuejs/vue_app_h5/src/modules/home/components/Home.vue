<template>
  <div class="main_wrap">
    <SearchBar></SearchBar>

    <div class="main_wrap">
      <Slider></Slider>
    </div>

    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import SearchBar from "./SearchBar.vue";
  import Slider from "./Slider.vue";
  import FooterBar from "./FooterBar.vue";

  export default {
    name: "Home",
    data() {
      return {};
    },
    components: {
      SearchBar,
      Slider,
      FooterBar
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main_wrap {
    
  }
</style>
