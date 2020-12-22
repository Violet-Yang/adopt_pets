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
        <commDiv :placeholder="'가입 시 사용한 아이디'"/>
        <div class="flex-mid" style="width: 658px;">
          <div style="display: flex"><div style="width: 20px; height: 20px"><input type="checkbox"></div> <span>아이디 저장</span></div>
          <div style="display: flex;">
            <p @click="goFindInfo(info.findId)">아이디 찾기</p>
            <p @click="goFindInfo(info.findPwd)">비밀번호 찾기</p>
          </div>
        </div>

        <btnDivs style="margin-top: 25px; margin-bottom: 107px" :btn-text="'로그인하기'" />
      </div>
    </div>

    <bottom></bottom>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      info : {findId : 1, findPwd : 2}

    }
  },
  methods : {
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
