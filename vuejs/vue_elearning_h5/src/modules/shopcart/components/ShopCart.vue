<template>
    <div class="main_wrap">
        <header id="header">
            <a href="javascript:;" class="icon_back" @click="goBack()"></a>
            <p>购物车</p>
            <a href="javascript:;" class="icon_menu"></a>
        </header>
        <!--安全提示-->
        <div id="safe_type">
            <span>你正在安全环境购物中,请放心购物</span>
        </div>
        <!--订单列表-->
        <div id="orderList">
            <section class="order" v-for="shop in allShopList" v-if="shop.shopList.length > 0">
                <div class="title">
                    <span class="checkBox" @click="toggleSelectShop(shop)" :checked="shop.selected"></span>
                    <img :src="shop.shopImage">
                    <span v-text="shop.shopName"></span>
                    <span>您享受满99元免运费服务</span>
                </div>
                <ul>
                    <li v-for="item in shop.shopList">
                        <div class="left">
                            <span class="checkBox" @click="toggleSelectItem(shop, item)" :checked="item.selected"></span>
                        </div>
                        <div class="right">
                            <a href="">
                                <img :src="item.image" alt="">
                            </a>
                            <div class="description">
                                <p v-text="item.name"></p>
                                <!-- <span v-text="item.price | moneyformat(item.price)"></span> -->
                                <span>{{item.price | moneyformat(item.price)}}</span>

                                <div class="description_bottom">
                                    <div class="number">
                                        <span @click="reduceCount(item)"> - </span>
                                        <input type="tel" v-model="item.mount">
                                        <span @click="increaseCount(item)"> + </span>
                                    </div>
                                    <div class="delete" @click="deleteItem(shop.shopList, item)">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>

        <!--弹出层-->
        <div class="panel">
            <div class="panelBox clearfix jump">
                <span>你确认要删除这个商品吗？</span>
                <a href="javascript:;">取消</a>
                <a href="javascript:;">确定</a>
            </div>
        </div>

        <div class="fixBar" name="checkgroup" id="fixBarBot">
            <i class="select_btn" v-on:click="selectAll()" :selected="isAllSelected">全选</i>
            <div class="total" id="totalConfirmDiv">
                <p>
                    总计：
                    <strong id="totalPrice">{{totalFee|moneyformat}}</strong>
                    <small>
                        <span id="totalBackMoney">总额{{totalFee|moneyformat}} 立减¥100.00</span>
                    </small>
                </p>
                <a href="javascript:;" class="buy buyJs" attr-tag="confirmEve">
                    去结算
                    <em>(
                        <i v-text="totalCount"></i>件)</em>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
let allShopList = [
  {
    shopId: 0,
    shopName: "京东自营",
    shopList: [
      {
        id: 1,
        name:
          "【京东超市】路易拉菲2009珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 2,
        name:
          "【京东超市】路易拉菲2010珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 3,
        name:
          "【京东超市】路易拉菲2011珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 4,
        name:
          "【京东超市】路易拉菲2012珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 5,
        name:
          "【京东超市】路易拉菲2013珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      }
    ],
    shopImage: "/static/images/cart/buy-logo.png"
  },
  {
    shopId: 1,
    shopName: "shop A",
    shopList: [
      {
        id: 1,
        name:
          "【shop A】路易拉菲2009珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 2,
        name:
          "【shop A】路易拉菲2010珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 3,
        name:
          "【shop A】路易拉菲2011珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 4,
        name:
          "【shop A】路易拉菲2012珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 5,
        name:
          "【shop A】路易拉菲2013珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      }
    ],
    shopImage: "/static/images/cart/buy-logo.png"
  },
  {
    shopId: 2,
    shopName: "shop B",
    shopList: [
      {
        id: 1,
        name:
          "【shop B】路易拉菲2009珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 2,
        name:
          "【shop B】路易拉菲2010珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 3,
        name:
          "【shop B】路易拉菲2011珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 4,
        name:
          "【shop B】路易拉菲2012珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      },
      {
        id: 5,
        name:
          "【shop B】路易拉菲2013珍酿原酒进口红酒男爵古堡干红葡萄酒 红酒整箱6支礼盒装",
        mount: 1,
        price: 102,
        image: "/static/images/cart/detail1.jpg"
      }
    ],
    shopImage: "/static/images/cart/buy-logo.png"
  }
];

let filters = {
  moneyformat(value) {
    return "￥" + value.toFixed(2);
  }
};

export default {
  name: "shopcart",
  data() {
    return {
      allShopList: allShopList,
      isAllSelected: false,
      totalFee: 0,
      totalCount: 0
    };
  },

  filters,

  methods: {
    toggleSelectShop(shop) {
      if (typeof shop.selected == "undefined") {
        this.$set(shop, "selected", true);
      } else {
        shop.selected = !shop.selected;
      }

      shop.shopList.forEach(item => {
        if (typeof item.selected == "undefined") {
          this.$set(item, "selected", shop.selected);
        } else {
          item.selected = shop.selected;
        }
      });

      this.isSelectedAll();
    },

    toggleSelectItem(shop, item) {
      if (typeof item.selected == "undefined") {
        this.$set(item, "selected", true);
      } else {
        item.selected = !item.selected;
      }

      let isAllSelected = true;

      shop.shopList.forEach(el => {
        if (!el.selected) {
          isAllSelected = false;
        }
      });

      if (typeof shop.selected == "undefined") {
        this.$set(shop, "selected", isAllSelected);
      } else {
        shop.selected = isAllSelected;
      }

      this.isSelectedAll();
    },

    deleteItem(list, targetItem) {
      if (list.length < 0) return;
      for (let i = 0; i < list.length; i++) {
        if (targetItem.id == list[i].id) {
          list.splice(i, 1);
          break;
        }
      }
      this.isSelectedAll();
    },

    reduceCount(item) {
      if (item.mount > 1) {
        item.mount--;
        this.isSelectedAll();
      }
    },

    increaseCount(item) {
      if (item.mount < 5) {
        item.mount++;
        this.isSelectedAll();
      }
    },

    selectAll() {
      let totalFee = 0;
      let totalCount = 0;

      if (this.isAllSelected) {
        totalFee = this.totalFee;
        totalCount = this.totalCount;
      }

      this.isAllSelected = !this.isAllSelected;

      this.allShopList.forEach(shop => {
        shop.selected = this.isAllSelected;
        shop.shopList.forEach(item => {
          if (typeof item.selected == "undefined") {
            this.$set(item, "selected", this.isAllSelected);
          } else {
            item.selected = this.isAllSelected;
          }
          if (item.selected) {
            totalFee += item.price * item.mount;
            totalCount += item.mount;
          } else {
            totalFee -= item.price * item.mount;
            totalCount -= item.mount;
          }
        });
      });
      this.totalCount = totalCount;
      this.totalFee = totalFee;
    },

    isSelectedAll() {
      let totalFee = 0;
      let isAllSelected = true;
      let totalCount = 0;
      this.allShopList.forEach(shop => {
        if (!shop.selected) {
          isAllSelected = false;
        }
        shop.shopList.forEach(item => {
          if (!item.selected) {
            isAllSelected = false;
          } else {
            totalFee += item.price * item.mount;
            totalCount += item.mount;
          }
        });
      });

      this.totalCount = totalCount;
      this.totalFee = totalFee;
      this.isAllSelected = isAllSelected;
    },
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>
<style>
/*抽取统一的前缀的类*/
[class^="icon_"] {
  background: url(/static/images/home/nav/sprites.png) no-repeat;
  background-size: 200px 200px;
  -webkit-background-size: 200px 200px;
}

/*头部导航栏*/
#header {
  width: 100%;
  height: 44px;
  background: url(/static/images/category/header/header-bg.png);
  background-size: 1px 44px;
  -webkit-background-size: 1px 44px;
  position: fixed;
  top: 0;
  left: 0;
}

#header a {
  width: 44px;
  height: 44px;
  padding: 11px;
  position: absolute;
  top: 0;
  -webkit-background-origin: content-box;
  background-origin: content-box;
  -webkit-background-clip: content-box;
  background-clip: content-box;
}

#header .icon_back {
  background-position: -21px 0;
  left: 0;
}

#header .icon_menu {
  background-position: -60px 0;
  right: 0;
}

#header {
  position: relative;
  text-align: center;
  line-height: 44px;
}

#header p {
  color: #333;
  font-size: 18px;
}

/*-----安全提示部分------*/

#safe_type {
  width: 100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #ffffff;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

#safe_type span {
  position: relative;
  padding-left: 24px;
  font-size: 11px;
}

#safe_type span::before {
  content: "";
  background: url(/static/images/cart/safe_icon.png) no-repeat;
  -webkit-background-size: 18px 18px;
  background-size: 18px 18px;
  height: 18px;
  width: 18px;
  position: absolute;
  top: 0;
  left: 0;
}

/*-------订单列表--------*/
#orderList {
  margin-top: 10px;

  /*border: 1px solid #ccc;*/
}

#orderList section {
  margin-bottom: 20px;
  background: #fff;
}

#orderList section .title {
  height: 36px;
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  line-height: 36px;
}

/*未选中单选框*/
.checkBox {
  background: url(/static/images/cart/shop-icon.png) no-repeat;
  background-size: 50px 100px;
  width: 20px;
  height: 20px;
  float: left;
  margin-top: 8px;
  margin-left: 8px;
}

.checkBox[checked] {
  background-position: -25px 0;
}

#orderList section .title img {
  float: left;
  width: 20px;
  height: 20px;
  margin-top: 8px;
  margin-left: 6px;
}

#orderList section .title span:nth-of-type(2) {
  font-size: 16px;
  float: left;
  margin-left: 5px;
}

#orderList section .title span:nth-of-type(3) {
  float: right;
  color: #e9232c;
  font-size: 12px;
  margin-right: 8px;
}

#orderList section ul {
  width: 100%;
}

#orderList section ul li {
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

/*左侧单选框*/
#orderList section ul li .left {
  float: left;
  width: 28px;
  height: 28px;
}

/*右侧内容*/
#orderList section ul li .right {
  overflow: hidden;
  padding-left: 6px;
}

#orderList section ul li .right a {
  display: block;
  width: 80px;
  height: 80px;
  float: left;
}

#orderList section ul li .right a img {
  width: 80px;
  height: 80px;
}

#orderList section ul li .right .description {
  overflow: hidden;
  padding-left: 14px;
  padding-right: 8px;
}

/*产品信息*/
#orderList section ul li .right .description p {
  font-size: 12px;
  color: #666;
  line-height: 20px;
  overflow: hidden;
  height: 40px;
}

/*价格*/
#orderList section ul li .right .description > span {
  color: #e9232c;
}

/*数量*/
#orderList section ul li .right .description .description_bottom {
  width: 100%;
}

.description .description_bottom .number {
  float: left;
}

.description .description_bottom .number span {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #cccccc;
  float: left;
}

/*数量 + -  */
.description .description_bottom .number span:nth-of-type(1) {
  border-radius: 3px 0 0 3px;
}

.description .description_bottom .number span:nth-of-type(2) {
  border-radius: 0 3px 3px 0;
}

.description .description_bottom .number input {
  width: 60px;
  float: left;
  height: 20px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  padding-left: 4px;
}

/*垃圾桶*/
.description .description_bottom .delete {
  float: right;
}

.description .description_bottom .delete span:nth-of-type(1) {
  background: url(/static/images/cart/delete_up.png) no-repeat;
  background-size: 18px 4px;
  width: 18px;
  height: 4px;
  display: block;
}

.description .description_bottom .delete span:nth-of-type(2) {
  background: url(/static/images/cart/delete_down.png) no-repeat;
  background-size: 18px 18px;
  width: 18px;
  height: 18px;
  display: block;
  margin-top: -2px;
}

/*------弹出层-------*/
.panel {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;

  display: none;
}

.panel .panelBox {
  width: 80%;
  text-align: center;
  background-color: #fff;
  margin: 200px auto;
  padding: 20px;
  border-radius: 6px;
}

.panel .panelBox span {
  display: block;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}

.panel .panelBox a {
  display: block;
  float: left;
  width: 120px;
  height: 40px;

  text-align: center;
  line-height: 40px;
  font-size: 16px;

  border: 1px solid #cccccc;
  border-radius: 6px;
  margin-top: 30px;

  color: #333;
}

.panel .panelBox a:nth-of-type(2) {
  float: right;
  background: #e9232c;
  color: #ffffff;
}

.fixBar {
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 540px;
  height: 50px;
  background: hsla(0, 0%, 100%, 0.95);
  color: #333;
  font-size: 14px;
  position: fixed;
  z-index: 99;
  bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.fixBar:before {
  border-color: #ddd;
}

@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .additional_buying_btm:before,
  .fixBar:before,
  .select_list li:before,
  .shopcart_merge .shop_list:before,
  .sub_wrap_coupons .coupon_hr:before {
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin: 50% 0;
  }
}

.additional_buying_btm:before,
.fixBar:before,
.select_list li:before,
.shopcart_merge .shop_list:before,
.sub_wrap_coupons .coupon_hr:before {
  content: "";
  height: 0;
  display: block;
  border-top: 1px solid #ddd;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
/* .fixBar .select_btn {
    width: 40px;
    padding-top: 32px;
    font-size: 10px;
    text-align: center;
    height: 15px;
    color: #999;
}
.select_btn {
    z-index: 1;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 43px;
}
.select_btn[checked] {
    background-position: -25px 0;
} */

.fixBar .select_btn {
  width: 40px;
  padding-top: 32px;
  font-size: 10px;
  text-align: center;
  height: 15px;
  color: #999;
}
.select_btn {
  z-index: 1;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 43px;
}
.fixBar .select_btn:after {
  top: 7px;
}
.select_btn[selected]:after {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAANlBMVEUAAADpPD3tO0HrPD7qPD7qOz7qPD3pOz7qPD3qPD3pPD7rPD/pQkLzRkbqQEDpPUH/VVXpOz3Rbw31AAAAEXRSTlMA6iuA81DZ07+rpXIjFgw7CVCvuuwAAADZSURBVDjLjdVbrsMgDATQoThAeYTO/jd7fy6ioU7wfCXKEY4lMLimlpyCSEi5VNym+civRN9UdnrhEvHnrzsclbhjdZ438Rf2efM27w9mptOkUndT/eAm/x2dbgfdOQsbijfZQ2lzwf2S8eHf+ugzAvXBvdDHc0V5ci83XgqyyTEjmRwTgskxQEyOAjE5yix9dHfvGGYzfXzUHBPysozumFG4SNWxoC4t6I4ViFepuzi22ZSqo183rutdc9LMR8F+uOzH1T4A9iPFPqTsY88+SO2j2T7szdfHHy1xS+1j0woxaaaaaelftksuqmcc);
}
.select_btn:after {
  position: absolute;
  left: 50%;
  top: 0;
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUxpcZmZmZqampqampubm5qamqioqJqampqampqampqamqGhoZmZmXRqFBEAAAAMdFJOUwDwRqiAagslwtY6FiGs6jgAAADlSURBVCjPY2CAgFKLiZLN4QzIgNvzDBhM2YAQY3M8IxxUlq5qeEYkAS6oeMYIwlA+IwQTYznTBWOuOOMA1WxzFGFSzGGIAcwHFRCCTDIGYNpHHNkhhUfAcmcUkAUh3MSjKE5miBED6W5AFeQA6ueWWYAqyHVwAwPLYQY0YOPAwHkIXVBnAkONALog43GGGAN0QeajDDYB6IKshxl6FNAFmU4wzClAF2Q/ySCTgC7IdhC7IFbtWC3C6iSsjsfqTawBgjXosAYy1ujAHnFYoxhrYsCebLAmMKxJEXuixZ68sWYE9CwDAH0nU0cSKDB5AAAAAElFTkSuQmCC);
  background-size: 20px;
}
.fixBar .total {
  position: absolute;
  top: 0;
  right: 0;
}
.fixBar .total p {
  padding-top: 10px;
  font-weight: 700;
  line-height: 1em;
  height: 50px;
  text-align: right;
  float: left;
  font-size: 16px;
}
.fixBar .total strong {
  color: #e4393c;
}
.additional_buying .header .price,
.additional_buying .share_list_item .price,
.additional_buying .share_list_item .text em,
.additional_buying_btm .price,
.fixBar .total small,
.fixBar .total strong,
.layer_select dd em,
.layer_select li em,
.section .foot .go_merge .arial,
.select_list .price,
.service_link strong,
.shopcart_merge .shop_list .good .price {
  font-family: arial;
}
.fixBar .total small {
  padding-top: 2px;
  display: block;
  font-size: 10px;
  color: #999;
  font-weight: 400;
}
.fixBar .total .buy {
  float: right;
  display: block;
  width: 110px;
  height: 50px;
  margin-left: 10px;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
}
.fixBar .total .buy {
  background: #e4393c;
  color: #fff;
}
a,
a:visited {
  text-decoration: none;
  color: #333;
}
.fixBar .total .buy em {
  font-weight: 400;
  font-size: 12px;
  font-family: none;
}
em,
i {
  font-style: normal;
}

/*动画效果*/

.jump {
  animation: jump 0.8s ease;
}

@keyframes jump {
  0% {
    transform: translateY(-3000px);
  }
  65% {
    transform: translateY(30px);
  }
  80% {
    transform: translateY(-20px);
  }
  90% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
