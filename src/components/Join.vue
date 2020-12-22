<template>
  <div>
    <!--header-->
    <top />
    <div class="main_img">
      <img src="../../static/image/로그인메인이미지.png" style="width: 100%" />
    </div>
    <div class="flex-all-center">
      <div>
        <div style="margin-top: 100px; text-align: left">
          <div style="font-size: 35px; color: #121212; font-weight: bold">
            회원가입
          </div>
          <p
            style="margin-top: 16.37px; letter-spacing: 0.99px; color: #999999"
          >
            입양해 듀오의 회원가입을 환영합니다. <br />개인정보를 입력 후
            개인정보활용방침을 확인 후 회원가입을 완료해주세요.
          </p>

          <!--개인정보 입력 div-->
          <div style="margin-top: 40.53px">
            <div style="display: flex">
              <div style="width: 20px; height: 20px">
                <img style="width: 100%" src="static/image/발바닥아이콘.png" />
              </div>
              <span class="join_small_title">개인정보 입력</span>
            </div>
            <div
              style="
                margin-top: 14.78px;
                width: 538px;
                height: 70px;
                border: 1px solid #b7b7b7;
              "
            >
              <input type="text" placeholder="이름(실명을 기입해주십시오.)" />
            </div>
            <div
              style="
                margin-top: 16px;
                width: 538px;
                height: 70px;
                border: 1px solid #b7b7b7;
              "
            >
              <input
                type="text"
                placeholder="생년월일(ex.991213) 주민번호 앞자리 형식으로 입력해주십시오."
              />
            </div>
            <!--아이디-->
            <div style="display: flex; margin-top: 16px">
              <div
                style="width: 538px; height: 70px; border: 1px solid #b7b7b7"
              >
                <input type="text" placeholder="아이디(6~10자 영,숫자 조합)" />
              </div>
              <div
                class="flex-all-center"
                style="
                  margin-left: 8px;
                  width: 110px;
                  height: 70px;
                  background-color: #68c9c9;
                  border-radius: 5px;
                  color: #ffffff;
                "
              >
                중복확인
              </div>
            </div>
            <!--비밀번호-->
            <div
              style="
                margin-top: 16px;
                width: 538px;
                height: 70px;
                border: 1px solid #b7b7b7;
              "
            >
              <input
                type="text"
                placeholder="비밀번호 입력(8~10자 영,숫자 조합)"
              />
            </div>
            <div
              style="
                margin-top: 16px;
                width: 538px;
                height: 70px;
                border: 1px solid #b7b7b7;
              "
            >
              <input type="text" placeholder="비밀번호 확인" />
            </div>
            <div
              style="
                margin-top: 16px;
                width: 538px;
                height: 70px;
                border: 1px solid #b7b7b7;
              "
            >
              <input
                type="text"
                placeholder="휴대폰번호('-'없이 입력하여 주십시오.)"
              />
            </div>
            <div
              style="
                margin-top: 16px;
                width: 538px;
                height: 70px;
                border: 1px solid #b7b7b7;
              "
            >
              <input
                type="text"
                placeholder="이메일주소(비밀번호 분실 시 사용됩니다.)"
              />
            </div>
            <div style="display: flex; margin-top: 16px">
              <div
                style="width: 538px; height: 70px; border: 1px solid #b7b7b7"
              >
                <input type="text" placeholder="주소" />
              </div>
              <div
                class="flex-all-center"
                style="
                  margin-left: 8px;
                  width: 110px;
                  height: 70px;
                  background-color: #68c9c9;
                  border-radius: 5px;
                  color: #ffffff;
                "
              >
                주소검색
              </div>
            </div>
            <div
              style="
                margin-top: 16px;
                width: 538px;
                height: 70px;
                border: 1px solid #b7b7b7;
              "
            >
              <input type="text" placeholder="상세주소" />
            </div>
          </div>

          <!--이용약관 div-->
          <div style="margin-top: 64.46px">
            <div style="display: flex">
              <img src="static/image/발바닥아이콘.png" /><span
                class="join_small_title"
                >이용약관</span
              >
            </div>
            <textarea
              style="
                margin-top: 20px;
                padding: 12px 17px;
                width: 659px;
                height: 230px;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.88px;
                text-align: left;
                color: #555555;
              "
              readonly="readonly"
            >
            귀하가 동의하여 주시는 경우, 입양해듀오(이하 “회사”)는 다음과 같이 귀하의 개인정보를 수집 및 이용합니다.
              (1) 수집하는 개인정보의 항목
              - 이름, 생년월일, 아이디, 비밀번호, 이메일주소, 휴대폰번호, 성별
              - (웹사이트 이용에 따른 자동수집항목) 접속로그, 쿠키, 접속 IP 정보
              (2) 개인정보의 수집•이용목적
              - (회원가입시)회원 본인 확인/회원제 서비스의 이용: 회원제 서비스 가입을 위한 본인 확인 및 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 가입 및 가입횟수 제한 등을 통한 효율적인 회원 관리 업무의 수행, 만 14세 이상 이용자의 회원 가입 자격 확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달, A/S 상담 요청에 관한 회신
              - (제품 구매시) 주문, 결제 및 배송서비스의 제공
              - (제품 구매시) 고객관리: 구매 금액에 따른 회원 등급의 유지 및 관리 등 맞춤형 서비스 제공, 리서치, 서비스에 대한 만족도 조사, DM 발송, 구매 고객에 대한 본인확인, 다양한 고객관리 프로그램 진행
              (3) 개인정보의 보유•이용기간: 다른 법령에 따라 보존하여야 하는 경우가 아닌 한, 회원 탈퇴 후 5일까지 상기 정보를 보유 및 이용합니다. 귀하는 상기 개인정보의 수집 및 이용에 대해 동의를 거부할 수 있으며, 동의를 거부하는 경우 웹사이트 회원 가입이 제한될 수 있습니다.
            </textarea>
            <div style="display: flex; margin-top: 20px">
              <div><input type="checkbox" /> 동의하지 않습니다.</div>
              <div style="margin-left: 16px">
                <input type="checkbox" /> 동의합니다.
              </div>
            </div>

            <div style="display: flex; margin-top: 25px">
              <img src="static/image/발바닥아이콘.png" />
              <p class="join_small_title">개인정보처리 방침</p>
            </div>
            <textarea
              style="
                margin-top: 20px;
                padding: 12px 17px;
                width: 659px;
                height: 230px;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.88px;
                text-align: left;
                color:#555555;
              "
              readonly="readonly"
            >
              귀하가 동의하여 주시는 경우, 입양해듀오(이하 “회사”)는 다음과 같이 귀하의 개인정보를 수집 및 이용합니다.
              (1) 수집하는 개인정보의 항목
              - 이름, 생년월일, 아이디, 비밀번호, 이메일주소, 휴대폰번호, 성별
              - (웹사이트 이용에 따른 자동수집항목) 접속로그, 쿠키, 접속 IP 정보
              (2) 개인정보의 수집•이용목적
              - (회원가입시)회원 본인 확인/회원제 서비스의 이용: 회원제 서비스 가입을 위한 본인 확인 및 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 가입 및 가입횟수 제한 등을 통한 효율적인 회원 관리 업무의 수행, 만 14세 이상 이용자의 회원 가입 자격 확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달, A/S 상담 요청에 관한 회신
              - (제품 구매시) 주문, 결제 및 배송서비스의 제공
              - (제품 구매시) 고객관리: 구매 금액에 따른 회원 등급의 유지 및 관리 등 맞춤형 서비스 제공, 리서치, 서비스에 대한 만족도 조사, DM 발송, 구매 고객에 대한 본인확인, 다양한 고객관리 프로그램 진행
              (3) 개인정보의 보유•이용기간: 다른 법령에 따라 보존하여야 하는 경우가 아닌 한, 회원 탈퇴 후 5일까지 상기 정보를 보유 및 이용합니다. 귀하는 상기 개인정보의 수집 및 이용에 대해 동의를 거부할 수 있으며, 동의를 거부하는 경우 웹사이트 회원 가입이 제한될 수 있습니다.
            </textarea>
            <div style="display: flex; margin-top: 20px">
              <div><input type="checkbox" /> 동의하지 않습니다.</div>
              <div style="margin-left: 16px">
                <input type="checkbox" /> 동의합니다.
              </div>
            </div>

            <btn-divs style="margin-top: 40px;" :btn-text="'회원가입하기'" />
            <btn-divs style="margin-top : 16px; background-color: #b7b7b7" :btn-text="'취소하기'" />
          </div>
        </div>
      </div>
    </div>

    <!--bottom-->
    <bottom style="margin-top: 100px"/>
  </div>
</template>

<script>
export default {
  name: "Join",
};
</script>

<style scoped>
/*input창 css 커스터마이징*/
input[type="text"],
input[type="password"] {
  width: calc(90% - 1px);
  height: calc(100% - 5px);
  font-family: inherit;
  webkit-appearance: none;
  moz-appearance: none;
  appearance: none;
  border: none;
  margin-left: 10px;
}
/*input창 클릭 시, css 커스터마이징*/
input:focus {
  outline: none;
}
input::placeholder {
  color: #999999;
  letter-spacing: 0.88px;
}

input[type="checkbox"] {
  /*display:none;*/
}
input[type="checkbox"] + label span {
  display: inline-block;
  width: 19px;
  height: 19px;
  border: 1px solid #555555;
}

.wrap_join {
  display: flex;
  align-items: center;
}

.flex-all-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.join_small_title {
  text-align: left;
  letter-spacing: 1.93px;
  color: #66cdcc;
  letter-spacing: 1.1px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 7px;
}
</style>
