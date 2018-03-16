<template>
  <div class="main_wrap">
    <SearchBar></SearchBar>

    <div class="main_wrap">
      {{msg}}
    </div>

    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import SearchBar from "./SearchBar.vue";
  import FooterBar from "./FooterBar.vue";
  import { fetch_a } from "../../../services/apis/home.api";
  import Mock from "mockjs";

  export default {
    name: "Home",
    data() {
      return {
        msg: ""
      };
    },
    mounted() {
      this.getMsg();
    },
    methods: {
      getMsg() {
        this.msg = "aa";
      }
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
