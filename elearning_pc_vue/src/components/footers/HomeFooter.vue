<template>
    <footer class="footer-wrap">
        <div class="mw">
            <p class="footer-content">技术支持：摩博（北京）科技有限公司 信息技术部</p>
        </div>
    </footer>
</template>
<script>
    export default {
      name: "HomeFooter"
    };
</script>
<style lang="scss" scoped>
    .footer-wrap {
      background-color: $home_footer_wrap_bg_color;
    }

    .footer-content {
      height: $home_footer_content_height;
      font-size: $home_footer_content_font_size;
      line-height: $home_footer_content_line_height;
      text-align: $home_footer_content_text_align;
    }

</style>
