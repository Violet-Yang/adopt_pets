<template>
  <div>
    <!--팝업 전체 감싸는 부분-->
    <div
      style="
        width: 1920px;
        height: 100%;
        position: absolute;
        z-index: 9998;
        display: flex;
        justify-content: center;
        align-items: center;
      "
      v-if="daumPost"
    >
      <!--팝업 딤처리 하는 배경 부분-->
      <div
        style="
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          position: absolute;
          z-index: 9996;
        "
      ></div>
      <!--팝업 내용 담고있는 부분-->
      <div
        style="
          position: fixed;
          background-color: white;
          border: 1px solid #707070;
          z-index: 9997;
        "
      >
        <div>
          <button @click="closeDaumPost()">x</button>
        </div>
        <vue-daum-postcode @search="result = $event" style="width: 700px; height: 500px"/>
      </div>
    </div>
    <top />
    <div class="flex-all-center" style="position: relative; width: 1920px">
      <img style="width: 100%" src="static/image/마이페이지.png" />
      <h1
        style="
          position: absolute;
          font-size: 48px;
          letter-spacing: 2.64px;
          color: #ffffff;
        "
      >
        마이페이지
      </h1>
    </div>

    <!--contents 시작!-->
    <div class="flex-all-center">
      <div style="position: relative; text-align: left; height: 100%; width: 1200px; z-index: 1">
        <!--title : 회원정보수정-->
        <div
          style="
            margin-top: 99px;
            font-size: 35px;
            font-weight: bold;
            letter-spacing: 1.93px;
            color: #121212;
          "
        >
          회원정보수정
        </div>
        <div
          style="
            margin-top: 22px;
            font-size: 16px;
            text-align: left;
            letter-spacing: 0.88px;
            color: #999999;
          "
        >
          회원정보 중 이름과, 아이디는 수정이 불가합니다. <br />수정이 불가한
          부분의 수정이 필요하시다면 고객센터에 연락해주세요.
        </div>

        <div
          style="
            margin-top: 36px;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 0.99px;
            color: #111111;
          "
        >
          개인정보 입력
        </div>

        <!--정보수정 input Box-->
        <!--이름-->
        <div class="inputBox" style="margin-top: 12px; background-color: #E1E1E1">
          <input type="text" v-model="info.name" disabled="disabled"/>
        </div>
        <!--생일-->
        <div class="inputBox">
          <input type="text" v-model="info.birth"/>
        </div>
        <!--아이디-->
        <div class="inputBox" style="background-color: #E1E1E1">
          <input type="text" v-model="info.memberId" disabled="disabled"/>
        </div>
        <!--비번-->
        <div style="display: flex">
          <div class="inputBox">
           <input type="password" :placeholder="'현재 비밀번호'"/>
          </div>
          <div
            @click="showPwdBox()"
            class="flex-all-center"
            style="
              margin-top: 3px;
              margin-left: 10px;
              border-radius: 5px;
              color: #ffffff;
              background-color: #68c9c9;
              width: 110px;
              height: 48px;
              cursor: pointer;
            "
          >
            비번변경

          </div>
        </div>
        <!--새 비밀번호-->
        <div v-if="pwdBox">
        <div class="inputBox">
          <input type="password" :placeholder="'비밀번호 입력(8~10자 영,숫자 조합)'" v-model="info.newPwd" @change="checkPwd()"/>
        </div>
          <div class="inputBox">
            <input type="password" :placeholder="'비밀번호 확인'" v-model="info.newPwd2" @change="checkPwd()"/>
            <span v-if="checkPwd2">비밀번호확인해주세요</span>
          </div>
        </div>
        <!--전화번호-->
        <div class="inputBox">
          <input type="text" v-model="info.phone" />
        </div>
        <!--이메일-->
        <div class="inputBox">
          <input type="text" v-model="info.email"/>
        </div>
<!--        <div v-if="daumPost" style="position: absolute; left: 700px; width: 700px; height: 500px; z-index: 3">-->
<!--          <vue-daum-postcode />-->
<!--        </div>-->
        <!--주소-->
        <div style="display: flex; height: 100%">
          <div class="inputBox">
            <input type="text" :placeholder="'주소'" v-model="this.result.q"/>
          </div>
          <div
            @click="searchDaumPost()"
            class="flex-all-center"
            style="
              margin-top: 3px;
              margin-left: 10px;
              border-radius: 5px;
              color: #ffffff;
              background-color: #68c9c9;
              width: 110px;
              height: 48px;
              cursor: pointer;
            "
          >
            주소검색

          </div>
        </div>
        <div class="inputBox">
          <input type="text" :placeholder="'상세주소'" v-model="info.detailAddr"/>
        </div>

        <!--btn 수정 -->
        <div
          @click="editInfo()"
          class="flex-all-center"
          style="
            border-radius: 7px;
            background-color: #68c9c9;
            color: #ffffff;
            width: 658px;
            height: 50px;
            cursor: pointer;
          "
        >
          회원정보 수정하기
        </div>
        <!--btn 돌아가기 -->
        <div
          @click="backInitialInfo()"
          class="flex-all-center"
          style="
            margin-top: 10px;
            border-radius: 7px;
            background-color: #898989;
            color: #ffffff;
            width: 658px;
            height: 50px;
            cursor: pointer;
          "
        >
          돌아가기
        </div>

        <!--탈퇴 안내 div-->
        <div
          class="flex-all-center"
          style="
            position: relative;
            margin-top: 90px;
            border: 3px solid #e1e1e1;
            width: 659px;
            height: 220px;
          "
        >
          <div style="position: absolute; right: 24px">
            <img src="static/image/icon_leave.png" />
          </div>
          <div style="text-align: center">
            <p
              style="
                font-size: 25px;
                font-weight: bold;
                letter-spacing: 1.38px;
                color: #121212;
              "
            >
              회원탈퇴
            </p>
            <p
              style="
                margin-top: 28px;
                font-size: 16px;
                letter-spacing: 0.88px;
                color: #999999;
              "
            >
              회원탈퇴를 하시면 이제 입양해듀오의 정보, 거래등을 더이상 하실수
              없어요. <br/>그래도 탈퇴하시겠습니까?
            </p>
          </div>
        </div>
        <!--btn 탈퇴-->
        <div style="display: flex; justify-content: center; width: 659px">
          <div
            class="flex-all-center"
            style="
              margin-top: 15px;
              border-radius: 5px;
              color: #ffffff;
              letter-spacing: -0.4px;
              background-color: #898989;
              width: 115px;
              height: 50px;
            "
          >
            탈퇴하기
          </div>
        </div>
      </div>

      <!--contents 끝-->
    </div>

    <bottom style="margin-top: 100px" />
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue"
import VueDaumPostcode from "vue-daum-postcode"

Vue.use(VueDaumPostcode)

export default {
  name: "Edit",
  data (){
    return {
      daumPost : false,
      result : [],
      pwdBox : false, //비밀번호 변경 div제어 변수
      verifyPwd : "", //watch함수를 위한 전역변수
      info: {
        name: "김멍멍",
        birth: "1991.12.01",
        memberId: "abc123",
        memberPw: "1234",
        newPwd : "", //새 비밀번호
        newPwd2 : "", //새 비밀번호 확인
        phone: "010-1213-9876",
        email: "abc123@naver.com",
        addr: "서울시 강남구 삼성동",
        detailAddr : "삼성아파트 101동 101호"
      },

    }
  },
  created() {
    // 서버에서 해당 아이디의 유저의 정보를 가져오는 api를 사용해서 바인딩을 시켜준다
    // this.info.name = response.userName
  },
  methods : {
    editInfo(){ //정보수정 클릭 without axios


    },

    //정보수정 버튼 클릭 with axios
    sendEditedInfo() {
      // let info = {
      //   name: "김멍멍",
      //   birth: "",
      //   memberId: "abc123",
      //   memberPw: "1234",
      //   phone: "",
      //   email: "",
      //   addr: "",
      //   detailAddr: "",
      // }
      let formData = new FormData();
      formData.append('userBirth', this.info.birth); //생일 key는 무조건 스트링, value는 여러가지 어떤값도 들어갈수가있음
      formData.append('userPw', this.info.memberPw); //비번
      formData.append('userPw2',this.info.memberPw2); //비번확인
      formData.append('userPhn',this.info.phone); //전화번호
      formData.append('userEmail',this.info.email); //이메일
      formData.append('userAddr',this.result.q); //주소
      formData.append('detailAddr',this.info.detailAddr); //상세주소
      axios.post('', formData)
      .then(function (response){
        console.log(response);
      })

    },
    showPwdBox(){ //비번변경 눌렀을 때
      this.pwdBox = !this.pwdBox;
    },
    //돌아가기 버튼 클릭
    backInitialInfo(){

      //api통신에서 받아온 데이터를 바인딩시킨 변수에 할당해준다
      //created주기에서 사용했던 로직 재활용
      //axios.get('dddddd',response)
    //.then(function (response){
    //  })
      //this.info.name = response.userName;
    },

    //탈퇴하기 버튼 클릭
    leaveService() {

    },
    //주소검색 버튼 클릭
    searchDaumPost(){
      this.daumPost = true;
    },
    //주소검색 닫기
    closeDaumPost(){
      this.daumPost = false;
    },
    checkPwd() {
      if(this.info.newPwd !== this.info.newPwd2) {
        alert("입력하신 두 개의 비밀번호가 일치하지 않습니다");
      }
    }
  },
  computed : {
    checkPwd2: function () {
      return this.info.newPwd !== this.info.newPwd2
    },
    verifyPwd : function () {
      if(this.pwdBox){
        if(this.info.newPwd !== this.info.newPwd2){
          alert("입력하신 두 개의 비밀번호가 일치하지 않습니다");
          this.info.newPwd = "";
          this.info.newPwd2 = "";
        }else {
          this.verifyPwd = "입력하신 두 개의 비밀번호가 일치합니다.<br> 정보수정 버튼을 눌러주세요";
        }
      }
      return this.verifyPwd;
    }
  }

};
</script>

<style scoped>
.flex-all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.inputBox {
  margin-bottom: 16px;
  width: 538px;
  height: 50px;
  border: 1px solid #b7b7b7;
}

.active_dim {
  /*background-color: rgba(166,166,166,0.5);*/
  filter: brightness(90%);
}
.passive_dim {
  filter: none;
}
</style>
