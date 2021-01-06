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
        <p class="title" style="margin-top: 100.26px">LOGIN</p>
        <p
          class="sub-title"
          style="margin-top: 12.37px; margin-bottom: 28.07px"
        >
          입양해듀오에 오신것을 환영합니다.<br> 아직 회원이 아니신분들은 간단
          회원가입으로 입양해듀오의 가족이 되어보세요.
        </p>
<!--        <commDiv :id="id" :pw="pw" :placeholder="'가입 시 사용한 아이디'"/>-->
        <input :bind="loginId" type="text">
        <input :bind="loginPwd" type="password">
        <div class="flex-mid" style="width: 658px;">
          <div style="display: flex"><div style="width: 20px; height: 20px"><input type="checkbox"></div> <span>아이디 저장</span></div>
          <div style="display: flex;">
            <p @click="goFindInfo()">아이디 찾기</p>
            <p @click="goFindInfo()">비밀번호 찾기</p>
          </div>
        </div>
<div @click="sendInfo()">로그인 하기</div>
        <btnDivs @click="sendInfo(loginId, loginPwd)" style="margin-top: 25px; margin-bottom: 107px" :btn-text="'로그인하기'" />
      </div>
    </div>

    <bottom></bottom>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data () {
    return {
      data : { id: "admin",pw :"1233" },
      loginId : "",
      loginPwd : "",


    }
  },
  methods : {

    created () {

    },
    sendInfo () {
      console.log("로그인ㅇ하기1111");
      let formData = new FormData();
      formData.append('userId', 'admin');
      formData.append('userPw', 'ddddd');
      axios.post('/adoptDuo/login_post',formData)
        .then(function (response) {
          console.log('1111111');
          console.log(response);
         })


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

    },

    goFindInfo(info) {
      this.$router.push({path: '/findInfo', query: {id : info}})
    }
  },
  created : function () {

  }
};
</script>

<style scoped>
.wrap input[type="checkbox"] {
  width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); border:0;

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
</style>
