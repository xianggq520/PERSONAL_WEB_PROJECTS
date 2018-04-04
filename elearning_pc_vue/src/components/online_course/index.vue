<template>
    <div class="page-wrap">
        <!-- home header -->
        <Homeheader></Homeheader>

        <section class="content-wrap">
            <header class="header-nav-wrap">
                <div class="mw">
                    <Mainnav></Mainnav>
                </div>
            </header>
        </section>

        <!-- home footer -->
        <HomeFooter></HomeFooter>
    </div>
</template>
<script>
    import Homeheader from "@/components/headers/homeHeader.vue";
    import Mainnav from "@/components/navs/MainNav.vue";
    import HomeFooter from "@/components/footers/HomeFooter.vue";
    export default {
      data() {
        return {
           
        };
      },
      components: {
        Mainnav,
        Homeheader,
        HomeFooter
      }
    };
</script>
<style lang="scss" scoped>
    .content-wrap {
      height: 100%;
    }

    .header-nav-wrap {
      background-color: #4f5861;
    }
</style>
