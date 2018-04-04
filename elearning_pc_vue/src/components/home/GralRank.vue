<template>

  <div class="c_rank">
    <div class="c_rank_header">
      <div class="c_rank_title">积分</div>
      <div class="rank_hr"></div>
    </div>
    <div class="c_rank_body">
      <table>
        <tr v-for="(item, index) in goldData" v-if="index < 10">
          <td class="rank_first" v-if="index == 0"></td>
          <td class="rank_second" v-if="index == 1"></td>
          <td class="rank_third" v-if="index == 2"></td>
          <td v-if="index > 2" v-text="index + 1"></td>
          <td v-text="item.name"></td>
          <td>剩余：
            <span :class="{'c-f36f3a2': index < 3}" v-text="item.eNumber"></span>
          </td>
          <!--<td>累计：<span ng-bind="item.addUpEName"></span></td>-->
        </tr>
        <div class="goldMy">
          <span v-text="userInfo.eCoinRanking"></span>
          <span v-text="userInfo.userName"></span>
          <span>剩余：
            <i v-text="userInfo.eCoin"></i>
          </span>
        </div>
      </table>
    </div>
  </div>

</template>

<script>
  export default {
    name: "GralRank",
    props: [],
    mounted() {},
    data() {
      return {
        userInfo: {
          userId: "M00001",
          userName: "吴佳星",
          userImg: "file/headImg/20171220/101434873601.jpg",
          totalTime: "25445",
          signInTotal: 33,
          signInEbCount: 1,
          eCoin: 525,
          eCoinRanking: 1,
          learnTimeRanking: 1,
          courseCount: "53",
          userTel: "15522333333",
          isSignIn: "N",
          address: "",
          addUpENumber: 1902,
          consigneeName: "吴佳星",
          consigneeGender: "男",
          consigneeTel: "13691328833",
          consigneeAddress: "遥士大夫肝",
          anonymity: "Y",
          deptName: "JAVA"
        },
        goldData: [
          {
            userId: "M00001",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "JAVA",
            headImg: "file/headImg/20171220/101434873601.jpg",
            name: "吴佳星",
            eNumber: "525",
            addUpEName: "1902"
          },
          {
            userId: "M00005",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "销售部",
            headImg: null,
            name: "蔡翠婷",
            eNumber: "425",
            addUpEName: "1310"
          },
          {
            userId: "gaojiaqi",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "测试部",
            headImg: null,
            name: "高嘉琦",
            eNumber: "270",
            addUpEName: "276"
          },
          {
            userId: "songxiaoran",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "产品",
            headImg: null,
            name: "宋萧然",
            eNumber: "43",
            addUpEName: "62"
          },
          {
            userId: "M00007",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "销售部",
            headImg: "file/headImage/20171121/133152154818.png",
            name: "雷云",
            eNumber: "14",
            addUpEName: "349"
          },
          {
            userId: "shenpei",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "销售部",
            headImg: "file/headImage/20171123/155234017829.png",
            name: "沈佩",
            eNumber: "1",
            addUpEName: "397"
          },
          {
            userId: "12345678",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "摩博科技",
            headImg: null,
            name: "测试账户",
            eNumber: "0",
            addUpEName: "0"
          },
          {
            userId: "chenhongyan",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "内容部",
            headImg: null,
            name: "陈红艳",
            eNumber: "0",
            addUpEName: "5"
          },
          {
            userId: "guowei",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "Java-A",
            headImg: null,
            name: "交换空间",
            eNumber: "0",
            addUpEName: "5"
          },
          {
            userId: "jianghaicheng",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "销售部",
            headImg: null,
            name: "姜海成",
            eNumber: "0",
            addUpEName: "5"
          },
          {
            userId: "lixuinxuan",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "蔚来",
            headImg: null,
            name: "李歆璇",
            eNumber: "0",
            addUpEName: "5"
          },
          {
            userId: "M00003",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "PHP",
            headImg: "file/headImage/20171028/153504001624.png",
            name: "熊友良",
            eNumber: "0",
            addUpEName: "447"
          },
          {
            userId: "M00004",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "销售部",
            headImg: null,
            name: "郭玉保",
            eNumber: "0",
            addUpEName: "6"
          },
          {
            userId: "M00006",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "销售部",
            headImg: null,
            name: "李彩云",
            eNumber: "0",
            addUpEName: "5"
          },
          {
            userId: "M00008",
            eCoin: null,
            commodityId: null,
            commodityName: null,
            commodityPrice: null,
            commodityNumber: null,
            commodityPicture: null,
            arayacak: null,
            post: null,
            deptName: "销售部",
            headImg: null,
            name: "郑超",
            eNumber: "0",
            addUpEName: "6"
          }
        ]
      };
    },
    methods: {},
    computed: {}
  };
</script>

<style lang="scss" scoped>
  .c_rank {
    width: 224px;
    float: right;
  }
  .c_rank_header {
    height: 60px;
    line-height: 50px;
  }
  .rank_hr {
    height: 4px;
    width: 224px;
    background: url(../../../static/images/home/rank/home_jifen_xiushi.png);
  }
  .c_rank_title {
    // @include textStyle($fontSize: 18px, $color: #333);
    // @include textStyle($fontSize: 18px);  //默认颜色 333，第二个参数不用传递
    @include textStyle(18px);  //这种写法不写对应变量名，需要对应参数顺序
    padding-left: 30px;
    text-align: left;
    background: url(../../../static/images/home/rank/home_jifen_icon.png)
      no-repeat left;
  }
  .c_rank_body {
    width: 100%;
    height: 350px;
    margin-top: 14px;
    background-color: #fafafa;
    border: 1px solid #ccc;
  }
  table {
    position: relative;
  }
  table,
  table tbody,
  table tbody tr,
  table tr {
    display: inline-block;
    width: 100%;
  }
  .c_rank_body table tr:last-child {
    /*border-top: 1px solid #ccc;*/
  }

.c_rank_body table tr td {
//   display: inline-block;
  height: 31.5px;
  float: left;
  padding: 5px 0;
  line-height: 22px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @include textStyle(12px, #4c4c4c);
  &:first-child {
    width: 20%;
    font-weight: bold;
    @include textStyle(18px, #808080);
  }
  &:nth-child(2) {
    width: 36%;
    text-align: left;
  }
  &:last-child {
    width: 40%;
    text-align: left;
  }
}

  .rank_first {
    background: url(../../../static/images/home/rank/home_no1_icon.png) no-repeat
      center;
  }
  .rank_second {
    background: url(../../../static/images/home/rank/home_no2_icon.png) no-repeat
      center;
  }
  .rank_third {
    background: url(../../../static/images/home/rank/home_no3_icon.png) no-repeat
      center;
  }
  .c-f36f3a2 {
    color: $home_gralrank_font_color;
    font-weight: bold;
  }
  .goldMy {
    position: absolute;
    left: 0;
    // border-top: 1px solid #ccc;
    border: 1px solid #ccc{
        left: 0;
        right: 0;
        bottom: 0;
    }
    width: 100%;
    height: 33px;
    line-height: 28px;
    font-size: 12px;
    span {
      display: inline-block;
      &:first-child {
        width: 17%;
        text-align: center;
        font-weight: bold;
        @include textStyle(18px, #808080);
      }
      &:nth-child(2) {
        width: 34%;
        text-align: left;
      }
      &:nth-child(3) {
        width: 42%;
        text-align: left;
      }
    }
  }

</style>

