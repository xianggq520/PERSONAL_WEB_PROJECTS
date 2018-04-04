<template>
  <div class="changeLang" @click="changeLangEvent">
    <span :class="{active : lang == 'zh-CN' }">CN</span>
    <span :class="{active : lang == 'en-US' }">EN</span>
  </div>
</template>
<script>
  import {updateUserInfo } from "../../utils/auth";
  export default {
    name: "i18n",
    data() {
      return {
        lang: ""
      };
    },
    created() {
      this.lang = this.$i18n.locale; //获取当前语言类型
      // this.$t('m.music') //js中中英文写法
    },
    computed: {
       
    },
    methods: {
      changeLangEvent() {
        if (this.lang === "zh-CN") {
          this.lang = "en-US";
          this.$i18n.locale = this.lang; //关键语句
        } else {
          this.lang = "zh-CN";
          this.$i18n.locale = this.lang; //关键语句
        }
        updateUserInfo({ lang: this.lang });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .active {
    color: #0952d2;
  }

  .changeLang {
    text-align: center;
  }
</style>
