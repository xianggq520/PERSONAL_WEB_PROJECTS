<template>
    <div class="cate_wrap">
        <div class="cate_all">
            <a href="" target="_blank" class="cate_all_link">
                <icon name="course_category_all" scale="4"></icon>
                <span class="cate_all_text">全部精品课</span>
            </a>
        </div>
        <ul class="clearfix">
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">12</a>
            </li>
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">1212</a>
            </li>
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">1212</a>
            </li>
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">1212</a>
            </li>
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">121212</a>
            </li>
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">12</a>
            </li>
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">1212</a>
            </li>
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">1212</a>
            </li>
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">1212</a>
            </li>
            <li class="cate_item">
                <div class="cate_item_bg"></div>
                <a href="" class="cate_link">更多分类</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
      name: "Category"
    };
</script>
<style lang="scss" scoped>
    .cate_wrap {
      position: absolute;  
      width: $cate_wrap_width;
      height: $cate_wrap_height;
      height: 430px;
      left: 0;
      top: -50px; 
      /* margin: -50px 0 0 0; */
      background-color: $cate_wrap_bg;
      z-index: 999;
    }

    .cate_all {
      width: $cate_wrap_width;
      height: $cate_all_height;
      background-color: $cate_bg;
    }

    .cate_all_link {
      display: inline-block;
      width: $cate_wrap_width;
      height: $cate_all_height;
      color: #fff;
      font-size: 16px;
      text-align: center;
    }

    .svg-icon {
      vertical-align: middle;
    }

    .cate_all_text {
      display: inline-block;
      line-height: 50px;
    }

    .cate_wrap ul {
      opacity: $cate_opacity;
      background-color: $cate_bg;
    }

    .cate_item {
      position: relative;
      display: inline-block;
      width: 100%;
      height: $cate_item_height;
      padding: $cate_item_padding;
    }

    .cate_item .cate_item_bg {
      position: absolute;
      display: none;
      width: 100%;
      height: $cate_item_bg_height;
      top: -1px;
      left: 0;
      z-index: 1;
      border-top: $cate_item_bg_border_top;
      border-bottom: $cate_item_bg_border_bottom;
      background-color: $cate_item_bg_color;
    }

    .cate_link {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      z-index: 2;
      font-size: $cate_item_font_size;
      color: $cate_item_font_color;
      text-align: center;
      line-height: $cate_item_height;
      border-bottom-width: $cate_link_border_link_border_bottom_width;
      border-bottom-style: $cate_link_border_link_border_bottom_style;
      border-bottom-color: $cate_link_border_link_border_bottom_color;
    }

    .cate_item:hover {
      background-color: $cate_item_hover_bg;
    }

    .cate_item:hover .cate_item_bg {
      display: block;
    }

    .cate_link:hover {
      color: $cate_item_hover_font_color;
    }
</style>
