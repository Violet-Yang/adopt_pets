<template>
  <div>
    <top></top>
    <div class="main_img">
      <img src="../../static/image/로그인메인이미지.png" style="width: 100%" />
    </div>
    <div
      style="
        max-width: 1920px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <!-- 아이디찾기 div-->
      <div v-if="isNum">
        <div>
          <p class="title" style="margin-top: 100.26px">아이디 찾기</p>
          <p
            class="sub-title"
            style="margin-top: 12.37px; margin-bottom: 28.07px"
          >
            아이디를 잊으셨나요? <br />가입하셨던 정보로 찾아보실 수 있습니다.
          </p>
          <div
            class="text_font"
            style="
              margin-bottom: 32.5px;
              display: flex;
              width: 658px;
              height: 43px;

            "
          >
            <div
              @click="tapId()"
              :class="{
                active_tap: isNum, passive_tap : !isNum
              }"
              style="width: 50%; display: flex; justify-content: center"
            >
              아이디찾기
            </div>
            <div
              @click="tapPwd()"
              :class="{ active_tap: !isNum, passive_tap : isNum}"
              style="width: 50%; display: flex; justify-content: center"
            >
              비밀번호찾기
            </div>
          </div>
          <commDiv />

          <btnDivs
            style="margin-top: 25px; margin-bottom: 30px"
            :btn-text="'아이디찾기'"
          />
        </div>
      </div>

      <!-- 비번찾기 div-->
      <div v-if="!isNum">
        <div>
          <p class="title" style="margin-top: 100.26px">비밀번호 찾기</p>
          <p
            class="sub-title"
            style="margin-top: 12.37px; margin-bottom: 28.07px"
          >
            비밀번호를 잊으셨나요? <br />가입하셨던 정보로 찾아보실 수 있습니다.
          </p>
          <div
            class="text_font"
            style="
              margin-bottom: 32.5px;
              display: flex;
              width: 658px;
              height: 43px;

            "
          >
            <div
              @click="tapId()"
              :class="{
                active_tap: isNum, passive_tap : !isNum,
              }"
              style="width: 50%; display: flex; justify-content: center"
            >
              아이디찾기
            </div>
            <div
              @click="tapPwd()"
              :class="{ active_tap: !isNum, passive_tap : isNum}"
              style="width: 50%; display: flex; justify-content: center"
            >
              비밀번호찾기
            </div>
          </div>
          <commDiv />

          <btnDivs
            style="margin-top: 25px; margin-bottom: 30px"
            :btn-text="'비밀번호찾기'"
          />
        </div>
      </div>

      <div style="margin-bottom: 103px">
        <span class="hr-sect" @click="goLogin()">로그인</span>
        <span @click="goJoin()">회원가입</span>
      </div>
    </div>

    <bottom></bottom>
  </div>
</template>

<script>
export default {
  name: "FindId",
  data() {
    return {
      item: true,
      num: 0,
      isNum: true,
      // info: { id: true, pwd: false }, 필요없어짐 isNum으로 v-if & css 한번에 컨트롤
    };
  },
  methods: {
    tapId() {
      this.isNum = true;
    },
    tapPwd() {
      this.isNum = false;
    },
    //로그인페이지로 이동
    goLogin() {
      this.$router.push({ path: "/login" });
    },
    //회원가입페이지로 이동
    goJoin() {
      this.$router.push({path:"join"})
    },

  },

  created: function () {
    this.num = this.$route.query.id;
    console.log("넘어온 숫자 " + this.num);
    this.isNum = parseInt(this.num);
    console.log("바뀐숫자" + this.isNum);
    if (this.isNum === 1) {
      this.isNum = true;
    } else {
      this.isNum = false;
    }
  },
};
</script>

<style scoped>
.wrap input[type="checkbox"] {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.flex-mid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main_img {
  max-width: 1920px;
}

.title {
  font-size: 35px;
  text-align: left;
  letter-spacing: 1.93px;
  color: #121212;
  font-weight: bold;
}

.sub-title {
  font-size: 18px;
  text-align: left;
  letter-spacing: 0.99px;
  color: #999999;
}

.text_font {
  text-align: center;
  letter-spacing: 0.99px;
  color: #d4d4d4;
  font-size: 18px;
}

.hr-sect::after {
  border-right: 1px solid #b7b7b7;
  height: 100px;
  margin: 5px;
}

.active_tap {
  border-bottom: 3px solid #66cdcc;
  color: #66cdcc;
}
.passive_tap {
  border-bottom: 3px solid #d4d4d4;
  color: #d4d4d4;
}

</style>
