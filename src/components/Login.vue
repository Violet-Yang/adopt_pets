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
      <div>
        <h1 style="font-size: 50px; color: #924343">코딩은 재미있어</h1>
        <p class="title" style="margin-top: 100.26px">LOGIN</p>
        <p
          class="sub-title"
          style="margin-top: 12.37px; margin-bottom: 28.07px"
        >
          입양해듀오에 오신것을 환영합니다.<br />
          아직 회원이 아니신분들은 간단한 회원가입으로 입양해듀오의 가족이
          되어보세요.
        </p>
        <!--        <commDiv :id="loginId" :pw="loginPwd"/>-->
        <!--id, pw input div-->
        <div class="box" style="margin-bottom: 15px">
          <input type="text" :placeholder="'ID'" v-model="loginId" />
        </div>
        <div class="box">
          <input type="password" :placeholder="'PASSWORD'" v-model="loginPwd" />
        </div>
        <!--아이디저장 checkbox-->
        <div
          class="flex-mid"
          style="width: 658px; height: 55px; border-bottom: 1px solid #d4d4d4"
        >
          <div class="flex-all-center" style="display: flex">
            <div style="width: 20px; height: 20px">
              <input type="checkbox" />
            </div>
            <span style="margin-left: 7px">아이디 저장</span>
          </div>
          <div style="display: flex; font-size : 16px; letter-spacing: 0.88px; color: #555555;">
            <p @click="goFindInfo()" style="margin-right: 7px; cursor: pointer">아이디 찾기</p> |
            <p @click="goFindInfo()" style="margin-left: 7px; cursor: pointer">비밀번호 찾기</p>
          </div>
        </div>

        <div
          @click="sendInfo(loginId, loginPwd)"
          style="
            width: 658px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #66cdcc;
            border-radius: 7px;
            color: white;
            letter-spacing: -0.45px;
            font-size: 18px;
            margin-top: 25px;
            margin-bottom: 107px;
            cursor: pointer;
          "
        >
          로그인하기
        </div>

      </div>
    </div>

    <bottom></bottom>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  methods: {
    sendInfo(id, pw) {
      console.log("value : ${name}, type : ${typeof name}");
      console.log("loginId:" + this.loginId);
      let formData = new FormData();
      formData.append("USER_ID", this.loginId);
      formData.append("USER_PW", this.loginPwd);
      axios
        .post("adoptDuo/login", formData)
        .then(function (response) {
          console.log("1111111");
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        });
    },

    //
    // axios.get('/adoptDuo/login_get', {
    //   params: {
    //     id: "admin",
    //     pw : "1234"
    //   }
    // })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    goFindInfo() {
      this.$router.push({ path: "/findInfo" });
    },
  },
};
</script>

<style scoped>
.box {
  width: 658px;
  height: 70px;
  border: 1px solid #b7b7b7;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
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
  min-width: 1920px;
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
</style>
