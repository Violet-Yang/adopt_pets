<template>
  <div>
    <top></top>
    <div style="width: 1920px">
      <img style="width: 100%" src="static/image/마이페이지.png" />
    </div>

    <myPageDiv
      style="margin-top: 99px"
      :my-buying="'My구매'"
      :my-selling="'My판매'"
      :my-favorite="'찜목록'"
      :member-id="id"
    />

    <div style="display: flex; justify-content: center; margin-top: 97px">
      <div style="width: 1200px">
        <div style="display: flex">
          <div class="flex-all-center" style="width: 25px; height: 35px">
            <img style="width: 100%" src="static/image/barbadakClor.png" />
          </div>
          <p
            style="
              margin-left: 15px;
              font-size: 25px;
              letter-spacing: 1.38px;
              color: #68c9c9;
            "
          >
            MY 가정분양 판매
          </p>
        </div>
        <p
          style="
            margin-top: 24px;
            text-align: left;
            letter-spacing: 0.88px;
            color: #4d4d4d;
          "
        >
          * 거래중인 분양글은 일주일 이내 거래완료를 눌러주셔야 합니다.
          거래완료가 되지 않을 시, 자동으로 글이 삭제됨을 알려드립니다.
        </p>

        <!--  찜목록 테이블-->
        <div style="margin-top: 38px; margin-bottom: 100px; width: 1200px">
          <div
            style="
              display: flex;
              background-color: #f7f7f7;
              border-top: 3px solid #66cdcc;
              border-bottom: 1px solid #d4d4d4;
              font-size: 18px;
              color: #111111;
              font-weight: bold;
            "
          >
            <div class="flex-all-center" style="width: 88px; height: 70px">
              <div style="width: 22px; height: 22px">
                <input @click="checkAll()" type="checkbox" />
              </div>
            </div>
            <div class="flex-all-center" style="width: 1110px; height: 70px">
              판매목록
            </div>
          </div>
          <!--데이터 개수만큼 목록 나옴-->
          <div
            v-for="items in contents"
            style="
              display: flex;
              height: 212px;
              border-bottom: 1px solid #d4d4d4;
            "
            v-if="items.category === '분양'"
          >
            <div class="flex-all-center" style="width: 88px; height: 100%">
              <input v-model="items.checked" type="checkbox" />
            </div>
            <div style="width: 906px; display: flex; align-items: center">
              <div
                :class="{
                  passive_dim: items.status,
                  active_dim: !items.status,
                }"
                class="flex-all-center"
                style="position: relative; width: 150px; height: 128px"
              >
                <img
                  :src="items.img"
                  style="z-index: 2; width: 150px; height: 128px"
                />
                <span
                  v-if="!items.status"
                  style="
                    position: absolute;
                    z-index: 3;
                    width: 101px;
                    height: 16px;
                    background-color: #0a1103;
                    font-size: 16px;
                    color: #ffffff;
                    letter-spacing: 0.88px;
                    border-radius: 6px;
                  "
                  >거래완료</span
                >
              </div>
              <div style="padding-left: 21px; width: 100%; height: 100%">
                <!--왜 padding top을 위 div에 주면 div영역 기점으로 적용되는지-->
                <p
                  style="
                    padding-top: 30px;
                    font-size: 18px;
                    text-align: left;
                    letter-spacing: 0.99px;
                    color: #111111;
                  "
                >
                  {{ items.title }}
                </p>
                <div style="margin-top: 11px; text-align: left">
                  <span class="seller_info"> {{ items.seller }} | </span>
                  <span class="seller_info"> {{ items.addr }} | </span>
                  <span class="seller_info">
                    {{ items.date }}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex-all-center" style="width: 208px; height: 191px">
              <div>
                <div
                  v-if="items.request.length>0"
                  class="flex-all-center"
                  style="
                    width: 150px;
                    height: 51px;
                    border-radius: 10px;
                    color: #ffffff;
                    background-color: #66cdcc;
                    cursor: pointer;
                  "
                >
                  구매요청건
                </div>
                <div
                  v-if="!items.status"
                  class="flex-all-center"
                  style="
                    width: 150px;
                    height: 51px;
                    border-radius: 10px;
                    color: #ffffff;
                    background-color: #e1e1e1;
                    cursor: pointer;
                  "
                >
                  거래불가
                </div>
                <div

                  class="flex-all-center"
                  style="
                    margin-top: 14px;
                    width: 150px;
                    height: 51px;
                    border-radius: 10px;
                    color: #ffffff;
                    background-color: #888888;
                    cursor: pointer;
                  "
                >
                  문의답변
                </div>
                <div
                  class="flex-all-center"
                  style="
                    margin-top: 14px;
                    width: 150px;
                    height: 51px;
                    border-radius: 10px;
                    color: #ffffff;
                    background-color: #888888;
                    cursor: pointer;
                  "
                >
                  삭제
                </div>
              </div>
            </div>
          </div>
          <div
            @click="delAllData()"
            class="flex-all-center"
            style="
              margin-top: 27px;
              width: 150px;
              height: 51px;
              color: #66cdcc;
              font-size: 18px;
              border: 3px solid #66cdcc;
              border-radius: 10px;
              cursor: pointer;
            "
          >
            선택삭제
          </div>
        </div>
        <!--찜목록 게시판 끝-->
      </div>
    </div>
    <!--footer-->
    <bottom />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "mySelling",
  data() {
    return {
      id: "abcd1234",
      newArray: [], //선택삭제 버튼 눌렀을 때 filter함수의 리턴값
      contents_temp: [],
      contents: [
        {
          category : "분양",
          num: 1,
          img: "static/image/mySelling_dog1.png",
          title:
            "건강한 재패니즈 스피츠 두 형제 분양합니다. (모견, 부견, 혈동서 있음)",
          seller: "zzangcomp", // 판매자 아이디
          date: "2020.12.31", // 글 등록일
          addr: "마두동", // 판매자 주소
          cont: 20730, // 조회 수
          review: 3, // 리뷰문의 건
          nonReview: 2, // 미답변
          request: [ // 구매요청 건
            {
              number: 1,
              purchaser: "abc345",
              content:
                "안녕하세요. 집에 스피츠 한마리를 키우고 있는 견주입니다. 첫째가 너무 외로워하는거 같아서 둘째를 데려올까하는데 이쁜아이인거 같아서 데리고 오고싶어요!!!! 구매요청 드립니다.",
            },
            {
              number: 2,
              purchaser: "angel_dog01",
              content:
                "스피츠가 전부터 키워보고 싶었는데 사진보자마자 첫눈에 반해버렸어요. 이 아이는 정말 첫눈에 저의 가족이 될 아이라고 확신이 들었습니다. 정말 제가 책임지고 키울자신 있습니다. 우선 구매문의 남겨봅니다.",
            },
          ],
          status: 'COMPLETED', // COMPLETED -> 분양완료, SELL -> 판매 중, DELETED -> 삭제
          reply: true,
          isClickBuy: false, // 구매 요청 보여주는 변수
          checked: true, // 체크 여부 판단
        },
        {
          category : "분양",
          num: 2,
          img: "static/image/market3.png",
          title:
            "에쁜 비숑 분양합니다(모량풍부)",
          seller: "judgy90",
          date: "2020.12.25",
          addr: "백산동",
          cont: 512652,
          review: 7,
          request : []
        },
        {
          category : "마켓",
          num: 2,
          img: "static/image/mySelling_market1.png",
          title:
            "저희 강아지가 젤루 좋아하는 사료",
          seller: "judgy90",
          date: "2020.12.01",
          addr: "백산동",
          cont: 20730,
          review: 3,
          request : []
        },
        {
          category : "마켓",
          num: 2,
          img: "static/image/market3.png",
          title:
            "딱 한번 입혀본 강아지옷이에요..완전새거 ㅠㅠ",
          seller: "judgy90",
          date: "2020.12.25",
          addr: "백산동",
          cont: 512652,
          review: 7,
          request : []
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
    delAllData() {
      //선택삭제 버튼 눌렀을 때
      console.log("선택삭제");
      this.contents.forEach((data) => {});
    },
    // doCancel() {
    //   axios.put('url', data) {
    //     this.getMySellList();
    //   }
    // },
    // doAccept() {
    //   axios.put('url', data) {
    //     this.getMySellList();
    //   }
    // },
    // doDelete() {
    //   axios.delete('/' + id) {
    //     this.getMySellList();
    //   }
    // },
    checkAll() {
      this.contents.forEach((data) => {
        data.checked = false;
        data.checked = !data.checked;
      });
    },
    getMySellList(cancelId) { // 서버에서 조회 했을 때 컨텐츠를 설정해주는 곳(리프레시)
      let vue = this;
      this.contents = [];
      axios.get('/adoptDuo/login_post')
        .then(function (response) {
          console.log(response)
          response.data.forEach(item => {
            let data = {
              id: 0,
              category : "",
              num: 1,
              img: "",
              title: "",
              seller: "", // 판매자 아이디
              date: "", // 글 등록일
              addr: "", // 판매자 주소
              cont: 0, // 조회 수
              review: 0, // 리뷰문의 건
              nonReview: 0, // 미답변
              request: [ // 구매요청 건
                {
                  number: 1,
                  purchaser: "abc345",
                  content:
                    "안녕하세요. 집에 스피츠 한마리를 키우고 있는 견주입니다. 첫째가 너무 외로워하는거 같아서 둘째를 데려올까하는데 이쁜아이인거 같아서 데리고 오고싶어요!!!! 구매요청 드립니다.",
                },
                {
                  number: 2,
                  purchaser: "angel_dog01",
                  content:
                    "스피츠가 전부터 키워보고 싶었는데 사진보자마자 첫눈에 반해버렸어요. 이 아이는 정말 첫눈에 저의 가족이 될 아이라고 확신이 들었습니다. 정말 제가 책임지고 키울자신 있습니다. 우선 구매문의 남겨봅니다.",
                },
              ],
              status: 'COMPLETED', // COMPLETED -> 분양완료, SELL -> 판매 중
              reply: true,
              isClickBuy: false,
              checked: true, // 체크 여부 판단
            }
            data.title = item.title
            data.category = item.category
            if(cancelId){
              if(cancelId === data.id) {
                data.isClickBuy = true
              }
            }
            vue.contents.push(data)
          })
          data.category = response.cate;
        })
    }
  },
  watch: {

  },
};
</script>

<style scoped>
.flex-all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="checkbox"] {
  width: 22px;
  height: 22px;
  padding: 0;
  /*margin: -1px;*/
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.active_dim {
  /*background-color: rgba(166,166,166,0.5);*/
  opacity: 50%;
  z-index: 1;
}
.passive_dim {
  filter: none;
}

.seller_info {
  margin-top: 6px;
  font-size: 16px;
  text-align: left;
  letter-spacing: 0.88px;
  color: #999999;
}
span.seller_info:nth-child(n) {
  border-right: #d4d4d4;
}
</style>
