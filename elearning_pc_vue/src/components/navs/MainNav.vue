<template>
    <div class="nav_wrap">
        <ul class="nav-ul clearfix">
            <router-link class="nav_item" tag="li" to="/home">
                <a href="javascript:void(0)" class="nav_link">首页</a>
            </router-link>
            <router-link class="nav_item" tag="li" to="/course">
                <a href="javascript:void(0)" class="nav_link">线上课程</a>
            </router-link>
            <li class="nav_item">
                <a href="javascript:void(0)" class="nav_link">培训活动</a>
            </li>
            <li class="nav_item">
                <a href="javascript:void(0)" class="nav_link">个人中心</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
      name: "Mainnav"
    };
</script>
<style lang="scss" scoped>
    .nav_wrap {
      width: 100%;
      height: $nav_height;
      background-color: $nav_bg;
    }

    .nav_item {
      float: left;
    }

    .nav_link {
      display: inline-block;
      padding: $nav_link_padding;
      font-size: $nav_link_font_size;
      line-height: $nav_link_line_height;
      color: $nav_link_font_color;
    }

    .router-link-active .nav_link {
      color: #fff;
      background: #f36f3a;
    }
</style>
