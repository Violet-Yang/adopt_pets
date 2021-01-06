<template>
  <div
    :class="{
      wrap_top: currentScrollValue < 100,
      wrap_top_roll: currentScrollValue >= 100,
      div_map : isMap
    }"

  >
    <div class="left">
      <img
        @click="goMain()"
        style="width: 50%; margin-left: 34px; cursor: pointer"
        src="../../../static/image/logo.png"
      />
    </div>
    <div class="mid">
      <div style="display: flex; cursor: pointer">
        <p
          @click="goHomeAdopt"
          class="navi"
          :class="{ normal_navi: !isAdopt1, under_navi: isAdopt1 }"
        >
          가정분양
        </p>
        <div class="navi" style="display: flex; align-items: center; justify-content: center">
          <p
            @click="goCenterAdopt"

            :class="{ normal_navi: !isAdopt2, under_navi: isAdopt2}"
          >
            유기견분양
          </p>
        </div>
        <p
          @click="goMarket"
          class="navi"
          :class="{ normal_navi: !isMarket, under_navi: isMarket }"
        >
          소품장터
        </p>
        <p
          @click="goCommunity"
          class="navi"
          :class="{ normal_navi: !isComm, under_navi: isComm }"
        >
          커뮤니티
        </p>
      </div>
    </div>
    <div class="right">
      <div style="display: flex; margin-left: 188px; cursor:pointer;">
        <div class="menu_img" @click="goLogin">
          <img src="../../../static/image/icon_login.png" />
          <p class="menu_text" style="min-width: 50px;">로그인</p>
        </div>
        <div class="menu_img" style="cursor: pointer" @click="goMyPage">
          <img src="../../../static/image/icon_myPage.png" />
          <p class="menu_text" style="min-width: 60px; ">마이페이지</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// $(document).ready(function () {
//   $(window).scroll(function (){
//     var scroll = $(window).scrollTop();
//     if(scroll>1){
//       $(".wrap_top").css("background", "white");
//     }
//     else {
//       $(".wrap_top").css("background", "black");
//     }
//   })
// })

export default {
  name: "Header",
  props: ['isAdopt1', 'isAdopt2', 'isMarket', 'isComm','isMap'],
  data() {
    return {
      // navi_1: false, //props사용하여 하나의 데이터로 제어
      // navi_2: false, //해당 전역변수들은 필요없어짐
      // navi_3: false,
      // navi_4: false,
      currentScrollValue: 0,
    };
  },

  methods: {
    // *페이지이동 함수모음*
    //가정분양
    goHomeAdopt() {
      this.$router.push({path: '/homeAdopt'});
      // this.navi_1 = true;
      // this.navi_2 = false;
      // this.navi_3 = false;
      // this.navi_4 = false;
    },
    //유기견분양
    goCenterAdopt() {
      this.$router.push({ path: "/centerAdopt" });
    },
    //소품장터
    goMarket() {
      this.$router.push({ path: "/market" });
    },
    //커뮤니티
    goCommunity() {
      this.$router.push({ path: "/community" });
    },
    //메인이동
    goMain() {
      this.$router.push({ path: "/" });
    },
    //로그인
    goLogin() {
      this.$router.push({ path: "/login" });
    },
    //마이페이지
    goMyPage() {
      this.$router.push({ path: "/myPurchase/"});
    },
  },

  created() {
    let vue = this;
    this.currentScrollValue = document.documentElement.scrollTop
    // if (document.documentElement.scrollTop===0) {
    //   this.currentScrollValue = 0;
    // }else {
    //   this.currentScrollValue = 100;
    // } 빵꾸 로직.....

    document.addEventListener("scroll", function () {
      vue.currentScrollValue = document.documentElement.scrollTop; //document는 html, scrollTop은top으로부터 scroll된 값을 의미한다.
      // console.log("currentScrollValue is " + vue.currentScrollValue);
    });
  },
};
</script>

<style scoped>
.wrap_top {
  position: fixed;
  display: flex;
  /*justify-content: space-between;*/
  max-width: 1920px;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lavender;
  z-index: 9999;
  /*background: rgba(0, 0, 0, 1);*/
}

.div_map {
  background-color: white !important;
  /*position: ;*/
}

.wrap_top_roll {
  position: fixed;
  display: flex;
  /*justify-content: space-between;*/
  max-width: 1920px;
  height: 100px;
  border-bottom: 1px solid lavender;
  /*background: rgba(0, 0, 0, 1);*/
  background: rgba(255, 255, 255, 1);
  z-index: 9999;
}

.left {
  display: flex;
  align-items: center;

  width: 360px;
  min-width: 360px;
  max-width: 360px;
  height: 100px;
}

.right {
  display: flex;
  align-items: center;
  width: 360px;
}
.navi {
  /*position: relative;*/
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 98px;
  font-size: 22px;
  font-weight: bold;
}

.normal_navi {
  /*width: 300px;*/
  /*height: 98px;*/
  font-size: 22px;
  font-weight: bold;
}
.under_navi {
  /*width: 300px;*/
  /*height: 100px;*/
  font-size: 22px;
  font-weight: bold;
  /*position: absolute;*/
  border-bottom: 2px solid white;
}

.menu_img {
  height: 46px;
  margin-right: 3px;
}

.menu_text {
  margin-top: 7px;
  font-size: 12px;
  font-weight: normal;
  line-height: 13px;
}
</style>
