<template>
  <div>
    <!--    판매자정보 클릭했을 때 div-->
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
      v-if="business.status"
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
          display: flex;
          justify-content: center;
          width: 1200px;
          height: 927px;
          background-color: white;
          border: 1px solid #707070;
          z-index: 9997;
        "
      >
        <div>
          <!--          판매자정보-->
          <div
            @click="popUpInfo()"
            style="
              position: absolute;
              top: 34px;
              right: 30px;
              width: 26px;
              height: 26px;
              cursor: pointer;
            "
          >
            X
          </div>
          <div style="display: flex; align-items: center; margin-top: 85px">
            <div style="width: 18px; height: 18px">
              <img
                style="width: 100%; height: 100%"
                src="static/image/barbadakClor.png"
              />
            </div>
            <div class="popUp_board_name">판매자 정보</div>
          </div>
          <div
            style="
              margin-top: 34px;
              width: 1090px;
              border-top: 3px solid #66cdcc;
            "
          >
            <div
              class="flex-all-center"
              style="
                display: flex;
                width: 100%;
                height: 60px;
                border-bottom: 1px solid #d7d7d7;
              "
            >
              <div class="flex-all-center popUp_title">판매자 아이디</div>
              <div style="width: 347px">{{ business.seller }}</div>
              <div class="flex-all-center popUp_title">판매자 이름</div>
              <div style="width: 345px">{{ business.buyerName }}</div>
            </div>
          </div>
          <div
            class="flex-all-center"
            style="
              display: flex;
              width: 100%;
              height: 60px;
              border-bottom: 1px solid #d7d7d7;
            "
          >
            <div class="flex-all-center popUp_title">판매자 전화번호</div>
            <div style="width: 347px">{{ business.sellerPhone }}</div>
            <div class="flex-all-center popUp_title">판매자 이메일</div>
            <div style="width: 345px">{{ business.sellerEmail }}</div>
          </div>

          <div style="display: flex; align-items: center; margin-top: 93px">
            <div style="width: 18px; height: 18px">
              <img
                style="width: 100%; height: 100%"
                src="static/image/barbadakClor.png"
              />
            </div>
            <div class="popUp_board_name">구매자 정보</div>
          </div>
          <div
            style="
              margin-top: 34px;
              width: 1090px;
              border-top: 3px solid #66cdcc;
            "
          >
            <!--          구매자정보-->
            <div
              class="flex-all-center"
              style="
                display: flex;
                width: 100%;
                height: 60px;
                border-bottom: 1px solid #d7d7d7;
              "
            >
              <div class="flex-all-center popUp_title">구매자 아이디</div>
              <div style="width: 347px">{{ business.buyer }}</div>
              <div class="flex-all-center popUp_title">구매자 이름</div>
              <div style="width: 345px">{{ business.buyerName }}</div>
            </div>
            <div
              class="flex-all-center"
              style="
                display: flex;
                width: 100%;
                height: 60px;
                border-bottom: 1px solid #d7d7d7;
              "
            >
              <div class="flex-all-center popUp_title">구매자 전화번호</div>
              <div style="width: 347px">{{ business.buyerPhone }}</div>
              <div class="flex-all-center popUp_title">구매자 이메일</div>
              <div style="width: 345px">{{ business.buyerEmail }}</div>
            </div>
          </div>

          <div
            style="
              margin-top: 65px;
              font-size: 18px;
              text-align: left;
              letter-spacing: 1.1px;
              color: #959191;
            "
          >
            - 판매자와 구매자는 반드시 거래가 종료되면 거래완료를 눌러주세요.
            <br />
            &emsp;(거래완료를 안누르면 미거래로 인식, 일주일 후 글이 자동삭제
            됩니다.)
            <br />
            - 거래에 관해 입양해듀오는 장소를 제공할뿐 거래건에 대해선 책임지지
            않습니다. <br />
            - 자세한 사항은 입양해듀오 분양 필독사항에서 확인 부탁드립니다.
          </div>
        </div>
      </div>
    </div>
    <top></top>
    <div style="width: 1920px">
      <img style="width: 100%" src="../../../../static/image/마이페이지.png" />
    </div>

    <!--myPage div 컴포넌트 주입-->
    <myPageDiv
      style="margin-top: 99px"
      :my-buying="'My구매'"
      :my-selling="'My판매'"
      :my-favorite="'찜목록'"
      :member-id="id"
    />

    <!--나의 판매 contents 시작-->
    <div style="display: flex; justify-content: center; margin-top: 70px">
      <div>
        <!--검색조건 Div-->
        <div
          style="
            display: flex;
            width: 1200px;
            height: 200px;
            border-top: 3px solid #66cdcc;
            border-bottom: 3px solid #66cdcc;
          "
        >
          <div>
            <div
              style="display: flex; width: 995px; height: 100px; border-bottom: 1px solid #D4D4D4; z-index: 100"
            >
              <div class="flex-all-center srchDiv_title">기간검색</div>
              <div style="display: flex; padding-top: 25px; padding-left: 24px" >
                <div v-for="(each,index) in period" class="flex-all-center term">
                  <div
                    v-model="each.isChecked"
                    :class="{check : each.isChecked, nonChecked : !each.isChecked}"
                    style="cursor: pointer"
                    @click="changCheck(each.id)"
                  >{{each.duration}}</div>
                </div>

                <div style="width: 140px;height: 52px; border: 1px solid #D7D7D7;">
                  <input type="date" v-model="startDate">
                </div>
                <div style="width: 40px; height: 40px">~</div>
                <div style="width: 140px;height: 52px; border: 1px solid #D7D7D7;">
                  <input type="date" v-model="endDate">
                </div>

              </div>
            </div>
            <div
              style="width: 995px; height: 100px;"
            >
              <div
                style="display: flex; width: 100%; height: 100px;"
              >
                <div class="flex-all-center srchDiv_title">조건검색</div>
                <!--카테고리 select Box-->
                <div style="display: flex; margin-top: 24px; margin-left: 24px" >
                  <div class="flex-all-center" style="width: 188px; height: 52px; border: 1px solid #D7D7D7;">
                    <select v-model="val">
                      <option disabled="disabled">카테고리</option>
                      <option value="market">소품장터</option>
                      <option value="home">가정분양</option>

                    </select>
                  </div>
                  <!--제목 select Box-->
                  <div class="flex-all-center"
                       style="margin-left: 15px; width: 134px; height: 52px; color: #999999; border: 1px solid #D7D7D7;">
                    제목
                  </div>
                  <!--검색어 입력 box-->
                  <div class="flex-all-center" style="margin-left: 15px; width: 391px; height: 52px; border: 1px solid #D7D7D7;">
                    <input v-model="searchContext" type="text" placeholder="검색어를 입력하여 주세요.">

                  </div>

                </div>

              </div>
            </div>
          </div>
          <div
            class="flex-all-center"
            style="
              width: 205px;
              height: 200px;
            "
          >
           <div
             @click="doSearch(searchContext)"
             class="flex-all-center"
             style="
                width: 121px;
                height: 45px;
                color: white;
                font-size: 16px;
                background-color: #66CDCC;
                border-radius: 10px;
                cursor: pointer;">
             검색
           </div>
          </div>
        </div>
        <p style="margin-top: 30px; text-align: left; font-size: 18px; color: #999999">- 최근 1개월이 기본으로 조회되며, 기간 선택 후 조건검색이 가능합니다. <br>
          - 최근 1년까지 기간이 조회 가능하며 그 이후 목록은 삭제됨을 알려드립니다.</p>

        <!--3rd contents-->
        <div style="width: 1200px; margin-top: 79px">
          <!--title : my구매-->
          <div style="display: flex">
            <div class="flex-all-center" style="width: 25px; height: 35px">
              <img
                style="width: 100%"
                src="../../../../static/image/barbadakClor.png"
              />
            </div>
            <p
              style="
                margin-left: 15px;
                font-size: 25px;
                letter-spacing: 1.38px;
                color: #68c9c9;
              "
            >
              MY 구매
            </p>
          </div>
          <!--  my구매목록 테이블-->
          <div
            style="
              margin-top: 42px;
              margin-bottom: 100px;
              width: 1200px;

            "
          >
            <div
              style="
                display: flex;
                background-color: #f7f7f7;
                border-top: 3px solid #66cdcc;
                border-bottom: 2px solid #b7b7b7;
                font-size: 18px;
                color: #111111;
                font-weight: bold;
              "
            >
              <div class="flex-all-center" style="width: 81px; height: 70px">
                번호
              </div>
              <div class="flex-all-center" style="width: 122px; height: 70px">
                카테고리
              </div>
              <div class="flex-all-center" style="width: 410px; height: 70px">
                제목
              </div>
              <div class="flex-all-center" style="width: 137px; height: 70px">
                판매자
              </div>
              <div class="flex-all-center" style="width: 145px; height: 70px">
                구매일
              </div>
              <div class="flex-all-center" style="width: 163px; height: 70px">
                구매상태
              </div>
              <div class="flex-all-center" style="width: 142px; height: 70px">
                정보
              </div>
            </div>

            <div
              v-for="item in contents"
              style="
                display: flex;
                border-bottom: 2px solid #b7b7b7;
                font-size: 18px;
                letter-spacing: 0.99px;
                color: #111111;
              "
            >
              <div class="flex-all-center" style="width: 81px; height: 70px">
                {{ item.num }}
              </div>
              <div class="flex-all-center" style="width: 122px; height: 70px">
                {{ item.category }}
              </div>
              <div class="flex-all-center" style="width: 410px; height: 70px">
                {{ item.title }}
              </div>
              <div class="flex-all-center" style="width: 137px; height: 70px">
                {{ item.seller }}
              </div>
              <div class="flex-all-center" style="width: 145px; height: 70px">
                {{ item.date }}
              </div>
              <div
                v-if="item.status === 'waiting'"
                class="flex-all-center"
                style="width: 163px; height: 70px"
              >
                대기중
              </div>
              <div
                v-if="item.status === 'complete'"
                class="flex-all-center"
                style="width: 163px; height: 70px; color: #df3333"
              >
                거래완료
              </div>
              <div
                v-if="item.status === 'asking'"
                class="flex-all-center"
                style="width: 163px; height: 70px; color: #66cdcc"
              >
                거래중
              </div>
              <div class="flex-all-center" style="width: 142px; height: 70px">
                <p
                  @click="popUpInfo()"
                  class="flex-all-center"
                  :class="{ info_active: item.info, info_passive: !item.info }"
                  style="
                    width: 121px;
                    height: 45px;
                    color: white;
                    font-size: 16px;
                    border-radius: 10px;
                    cursor: pointer;
                  "
                >
                  판매자정보
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--footer-->
    <bottom />
  </div>
</template>

<script>
export default {
  name: "myPurchase",
  data() {
    return {
      // conditions : [{period : ["1주일", "1개월", "3개월", "6개월"]}, {category : ["소품장터", "가정분양"]}],
      period : [
        {id : 1, duration : "1주일", isChecked : false},
        {id : 2, duration : "1개월", isChecked : false},
        {id : 3, duration : "3개월", isChecked : false},
        {id : 4, duration : "6개월", isChecked : false}
        ],
      searchContext : "", //검색어
      val : "카테고리",
      title : "제목",
      id: "abcd1234",
      startDate: null,
      endDate: null,
      eachDate : [],
      business: {
        status: false,
        seller: "judhy90",
        sellerName: "이멍멍",
        sellerPhone: "010-1234-4567",
        sellerEmail: "judhy90@naver.com",
        buyer: "abc123",
        buyerName: "김냐옹",
        buyerPhone: "010-9876-5432",
        buyerEmail: "abc123@naver.ocm",
      },
      testContents : [], //검색기능 배열변수
      contents: [
        {
          num: 1,
          category: "소품장터",
          title: "프리스비 판매(새거임)",
          seller: "zzangcomp",
          date: "2020.07.11",
          status: "waiting",
          info: true,
        },
        {
          num: 2,
          category: "가정견분양",
          title: "강아지분양",
          seller: "eldmsdl13",
          date: "2020.11.05",
          status: "complete",
          info: false,
        },
        {
          num: 3,
          category: "가정견분양",
          title: "시츄 분양합니당(1살)",
          seller: "violet0410",
          date: "2020.11.20",
          status: "asking",
          info: false,
        },
        {
          num: 4,
          category: "가정묘분양",
          title: "오드아이 데려가세요(2살)",
          seller: "campzzang",
          date: "2020.12.17",
          status: "asking",
          info: true,
        },
        {
          num: 3,
          category: "가정견분양",
          title: "시츄 분양합니당(1살)",
          seller: "violet0410",
          date: "2020.12.31",
          status: "asking",
          info: false,
        },
        {
          num: 3,
          category: "가정견분양",
          title: "시츄 분양합니당(1살)",
          seller: "violet0410",
          date: "2021.01.08",
          status: "asking",
          info: false,
        },
        {
          num: 3,
          category: "가정견분양",
          title: "시츄 분양합니당(1살)",
          seller: "violet0410",
          date: "2021.01.22",
          status: "asking",
          info: false,
        },
      ],
    };
  },
  methods: {
    showStatus() {
      this.contents.forEach((item) => {
        if (item.status) {
          item.status = "거래중";
        }
        item.status = "거래완료";
      });
    },
    popUpInfo() {
      //판매자정보보기
      this.business.status = !this.business.status;
    },
    doSearch(searchContext){ //검색하기
     let startDate = this.$moment(new Date(this.startDate));
     let endDate = this.$moment(new Date(this.endDate));
     console.log(startDate);
     console.log(endDate);
     if(this.startDate===null || this.endDate===null){
       alert("기간 선택을 다시 해주세요");
     }else {
       this.contents = this.testContents.filter(it=> this.$moment(it.date) - startDate > 0 && endDate - this.$moment(it.date) > 0);
     }

    },

    changCheck(num){ //기간검색 조건 설정하기
      this.period.forEach(function (it){
        if(it.id === num){
          it.isChecked = true;
        }else {
          it.isChecked = false;
        }
      })
    }

  },

  created() {
   this.testContents = JSON.parse(JSON.stringify(this.contents));
   console.log(this.testContents);

  },
  watch: {
    showStatus() {},
  },
  computed : {
    changingContext : function () {
      // this.searchContext
    }
  }
};
</script>

<style scoped>
select{
  width: 188px;
}


.popUp_board_name {
  margin-left: 2.5px;
  font-size: 25px;
  text-align: left;
  letter-spacing: 1.38px;
  color: #68c9c9;
}

.popUp_title {
  background-color: #f7f7f7;
  letter-spacing: 0.99px;
  color: #111111;
  font-size: 18px;
  font-weight: bold;
  width: 200px;
  height: 100%;
}
.info_active {
  background-color: #66cdcc;
}
.info_passive {
  background-color: #d7d7d7;
}
.srchDiv_title{
  width: 210px;
  letter-spacing: 0.99px;
  background-color: #F1F1F1;
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  z-index: 33;
}
.term{
  width: 90px;
  height: 50px;
  margin-right: 14px;
  border-radius: 5px;
  border: 1px solid #D7D7D7;
  background-color: #F1F1F1;
  letter-spacing: 0.88px;
  color: #4D4D4D;
  font-size: 16px;
}

.check {
  background-color: #66cdcc;
  color: #FFFFFF;
}
.nonCheck {
  background-color: #F1F1F1;
  color: #4D4D4D;
}

</style>
