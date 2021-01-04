<template>
  <div class="flex-all-center">
    <div style="display: flex; width: 1200px; height: 200px; border: 3px solid #D7D7D7; ">
      <div class="flex-all-center" style="width: 188px">
        <div style="width: 142px; height: 142px; border-radius: 50%">
          <img src="static/image/imgBox.png" />
        </div>
      </div>
      <div
        style="
          width: 692px;
          height: 200px;

          text-align: left;
        "
      >
        <div
          style="display: flex; align-items: center; margin: 43px 0 20px 13px"
        >
          <p style="color: #66CDCC; font-size: 35px;">{{memberId}}</p>
          <p style="font-size: 35px; letter-spacing: 1.93px">님 환영합니다!</p>
          <div
            @click="goEdit()"
            class="flex-all-center"
            style="
              margin-left: 15px;
              width: 105px;
              height: 40px;
              color: #ffffff;
              background-color: #888888;
              border-radius: 15px;
              cursor: pointer;
            "
          >
            정보수정
          </div>
        </div>
        <p
          style="
            margin-left: 15px;
            font-size: 16px;
            letter-spacing: 0.88px;
            color: #999999;
          "
        >
          입양해듀오의 마이페이지에서 회원정보, 구매, 판매내역들이 확인
          가능합니다.
        </p>
      </div>
      <div style="width: 320px;">
        <!--        my구매div-->
        <div style="border-bottom: 1px solid #d7d7d7" class="flex-all-center">
          <div style="width: 60px"><img src="static/image/buying.png" /></div>
          <div @click="goMyPurchase()" class="flex-all-center font22 color_skyBlue" style="cursor: pointer; width: 210px; height: 65px">
            {{ myBuying }}
          </div>
          <div class="flex-all-center" style="width: 45px">
            <img src="static/image/icon_more.png" />
          </div>
        </div>
<!--        my판매div-->
        <div style="border-bottom: 1px solid #d7d7d7" class="flex-all-center">
          <div style="width: 60px"><img src="static/image/selling.png" /></div>
          <div @click="goMySelling()" class="flex-all-center font22 color_skyBlue" style="cursor: pointer; width: 210px; height: 65px">
            {{ mySelling }}
          </div>
          <div class="flex-all-center" style="width: 45px">
            <img src="static/image/icon_more.png" />
          </div>
        </div>
        <!--        찜목록div-->
        <div class="flex-all-center">
          <div style="width: 60px"><img src="static/image/favorite.png" /></div>
          <div @click="goMyFavorite()" class="flex-all-center font22 color_skyBlue" style="cursor: pointer; width: 210px; height: 65px">
            {{ myFavorite }}
          </div>
          <div class="flex-all-center" style="width: 45px">
            <img src="static/image/icon_more.png" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPageBox",
  id : "abcd1234",
  props: ["memberId","mySelling", "myBuying", "myFavorite"],
  data() {
    return {};
  },
  methods : {
    //페이지 이동 함수 모음
    goMySelling(){ //내 판매내역
      this.$router.push({path : "/mySelling"})
    },
    goMyPurchase(){  // 내 구매내역
      this.$router.push({path : "/myPurchase"})
    },
    goMyFavorite(){  // 내 찜목록
      this.$router.push({path : "/myFavorite"})
    },
    goEdit(){ //정보 수정
      this.$router.push({path: "/editInfo"})
    }
  }
};
</script>

<style scoped>
.flex-all-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.font22{
  font-size: 22px;
  letter-spacing: 1.21px;
}

.color_skyBlue{
  color: #66cdcc;
}

</style>
