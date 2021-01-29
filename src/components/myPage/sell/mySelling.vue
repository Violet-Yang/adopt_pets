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
              style="
                display: flex;
                width: 995px;
                height: 100px;
                border-bottom: 1px solid #d4d4d4;
                z-index: 100;
              "
            >
              <div class="flex-all-center srchDiv_ttile">기간검색</div>
              <div style="display: flex; padding-top: 25px; padding-left: 24px">
                <div class="flex-all-center term">1주일</div>
                <div class="flex-all-center term">1개월</div>
                <div class="flex-all-center term">3개월</div>
                <div class="flex-all-center term">6개월</div>
                <div
                  style="width: 140px; height: 52px; border: 1px solid #d7d7d7"
                >
                  <input type="date" />
                </div>
                <div style="width: 40px; height: 40px">~</div>
                <div
                  style="width: 140px; height: 52px; border: 1px solid #d7d7d7"
                >
                  <input type="date" />
                </div>
              </div>
            </div>
            <div style="width: 995px; height: 100px">
              <div style="display: flex; width: 100%; height: 100px">
                <div class="flex-all-center srchDiv_ttile">조건검색</div>
                <!--카테고리 select Box-->
                <div style="display: flex; margin-top: 24px; margin-left: 24px">
                  <div
                    class="flex-all-center"
                    style="
                      width: 188px;
                      height: 52px;
                      border: 1px solid #d7d7d7;
                    "
                  >
                    <select v-model="val">
                      <option disabled="disabled">카테고리</option>
                      <option value="a">강아지</option>
                      <option value="b">고양이</option>
                      <option value="c">기타동물</option>
                    </select>
                  </div>
                  <!--제목 select Box-->
                  <div
                    class="flex-all-center"
                    style="
                      margin-left: 15px;
                      width: 134px;
                      height: 52px;
                      border: 1px solid #d7d7d7;
                    "
                  >
                    <select v-model="title">
                      <option>제목</option>
                      <option>내용</option>
                    </select>
                  </div>
                  <!--검색어 입력 box-->
                  <div
                    class="flex-all-center"
                    style="
                      margin-left: 15px;
                      width: 391px;
                      height: 52px;
                      border: 1px solid #d7d7d7;
                    "
                  >
                    <input
                      type="text"
                      placeholder="검색어를 입력하여 주세요."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-all-center" style="width: 205px; height: 200px">
            <div
              class="flex-all-center"
              style="
                width: 121px;
                height: 45px;
                color: white;
                font-size: 16px;
                background-color: #66cdcc;
                border-radius: 10px;
                cursor: pointer;
              "
            >
              검색
            </div>
          </div>
        </div>
        <p
          style="
            margin-top: 30px;
            text-align: left;
            font-size: 18px;
            color: #999999;
          "
        >
          - 최근 1개월이 기본으로 조회되며, 기간 선택 후 조건검색이 가능합니다.
          <br />
          - 최근 1년까지 기간이 조회 가능하며 그 이후 목록은 삭제됨을
          알려드립니다.
        </p>

        <!--3rd contents 시작-->
        <div style="width: 1200px; margin-top: 79px">
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

          <!--  3rd contents : 판매목록 테이블-->
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
                  <input @change="checkAdoptAll()" type="checkbox" v-model="checkedAllAdopt" />
                </div>
              </div>
              <div class="flex-all-center" style="width: 1110px; height: 70px">
                판매목록
              </div>
            </div>
            <!--데이터 개수만큼 목록 나옴-->
            <div v-if="adoptLists.length>0"
                 v-for="items in adoptLists">
            <div
              style="
                display: flex;
                height: 212px;
                border-bottom: 1px solid #d4d4d4;
              "

            >
              <div class="flex-all-center" style="width: 88px; height: 100%">
                <input v-model="items.checked" type="checkbox" @change="checkAdoptBox()"/>
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
                  <div style="margin-top: 13px; text-align: left; color: #999999;">
                    <span class="board_small_ac">조회수</span><span class="board_small_nor">{{items.cont.toLocaleString()}}</span> | <span class="board_small_ac">리뷰문의</span>
                    <span class="board_small_nor">{{items.review}}건</span><span>(미답변 :{{items.nonReview}})</span> | <span v-if="items.request.length>0" class="board_small_ac">구매요청건</span><span v-if="items.request.length>0" class="board_small_nor">{{items.request.length}}건</span>
                  </div>
                </div>
              </div>
              <div class="flex-all-center" style="width: 208px; height: 191px">
                <div>
                  <div
                    @click="showRequestBox()"
                    v-if="items.request.length > 0"
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
                    @click="deleteAdoptList()"
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
              <!--구매요청건 클릭 후 나오는 div-->
              <div v-if="requestInAdopt && items.request.length>0"

                   style="width: 1200px; background-color: #f7f7f7;">여기에 구매요청건 div</div>
            </div>

            <div
              @click="deleteAdoptList()"
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
          <!--가정분양 판매 게시판 끝-->
        </div>

        <!--4rd contents-->
        <div style="width: 1200px; margin-top: 79px">
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
              MY 소품장터 판매
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

          <!--  소품장터 판매 테이블-->
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
                  <input @change="checkMarketAll()" type="checkbox" v-model="checkedAllMarket"/>
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
              v-if="items.category === 'market'"
            >
              <div class="flex-all-center" style="width: 88px; height: 100%">
                <input v-model="items.checked" type="checkbox" @change="checkMarketBox()" />
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
                  <div style="margin-top: 13px; text-align: left; color: #999999;">
                    <span class="board_small_ac">조회수</span><span class="board_small_nor">{{items.cont.toLocaleString()}}</span> | <span class="board_small_ac">리뷰문의</span><span class="board_small_nor">{{items.review}}건</span><span>(미답변 :{{items.nonReview}})</span>
                  </div>
                </div>
              </div>
              <div class="flex-all-center" style="width: 208px; height: 191px">
                <div>
                  <div
                    v-if="items.request.length > 0"
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
      checkedAllAdopt : false,
      checkedAllMarket : false,
      requestInAdopt : false,
      adoptLists : [], //가정분양 리스트
      marketLists : [], //소품장터 리스트
      newArray: [], //선택삭제 버튼 눌렀을 때 filter함수의 리턴값
      contents_temp: [],
      contents: [
        {
          category: "adopt",
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
          request: [
            // 구매요청 건
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
          status: "COMPLETED", // COMPLETED -> 분양완료, SELL -> 판매 중, DELETED -> 삭제
          reply: true,
          isClickBuy: false, // 구매 요청 보여주는 변수
          checked: false, // 체크 여부 판단
        },
        {
          category: "adopt",
          num: 2,
          img: "static/image/market3.png",
          title: "에쁜 비숑 분양합니다(모량풍부)",
          seller: "judgy90",
          date: "2020.12.25",
          addr: "백산동",
          cont: 512652,
          review: 7,
          nonReview: 2, // 미답변
          request: [],
          status: "COMPLETED", // COMPLETED -> 분양완료, SELL -> 판매 중, DELETED -> 삭제
          reply: true,
          isClickBuy: false, // 구매 요청 보여주는 변수
          checked: false, // 체크 여부 판단
        },
        {
          category: "market",
          num: 2,
          img: "static/image/mySelling_market1.png",
          title: "저희 강아지가 젤루 좋아하는 사료",
          seller: "judgy90",
          date: "2020.12.01",
          addr: "백산동",
          cont: 20730,
          review: 3,
          nonReview: 3, // 미답변
          request: [],
          status: "COMPLETED", // COMPLETED -> 분양완료, SELL -> 판매 중, DELETED -> 삭제
          reply: true,
          isClickBuy: false, // 구매 요청 보여주는 변수
          checked: false, // 체크 여부 판단
        },
        {
          category: "market",
          num: 2,
          img: "static/image/market3.png",
          title: "딱 한번 입혀본 강아지옷이에요..완전새거 ㅠㅠ",
          seller: "judgy90",
          date: "2020.12.25",
          addr: "백산동",
          cont: 512652,
          review: 7,
          nonReview: 1, // 미답변
          request: [],
          status: "COMPLETED", // COMPLETED -> 분양완료, SELL -> 판매 중, DELETED -> 삭제
          reply: true,
          isClickBuy: false, // 구매 요청 보여주는 변수
          checked: false, // 체크 여부 판단
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

    checkAdoptAll() { // 가정분양 전체선택 & 전체선택 해제
      //category에 따라 다르게 작동하도록 파라미터를 넘겨줘야 함
      //filter사용하여 동일한 카테고리인 데이터만 작동하도록
      let vue = this;
      this.adoptLists.forEach(it=>{
        it.checked = vue.checkedAllAdopt;
      })
      // this.contents.filter(it=>it.category==='adopt').forEach(data=> {
      //   data.checked = vue.checkedAllAdopt;
      // })
    },
    checkMarketAll() { // 소품분양 전체선택 & 전체선택 해제
      //category에 따라 다르게 작동하도록 파라미터를 넘겨줘야 함
      //filter사용하여 동일한 카테고리인 데이터만 작동하도록
      let vue = this;
      // this.contents.filter(it=>it.category==='market').forEach(data=> {
      //   data.checked = vue.checkedAllMarket;
      // })
    },


    checkAdoptBox(){ // 가정분양 전체선택 동적으로 불들어오도록
      let vue = this;
      this.checkedAllAdopt = true;
      this.adoptLists.forEach(data=>{
        if(!data.checked){
          vue.checkedAllAdopt = false;
        }
      })
      // this.adoptLists.filter(data=>data.category==='adopt').forEach(item=> {
      //   if(!item.checked){
      //     vue.checkedAllAdopt = false;
      //   }
      // })
    },
    checkMarketBox(){ // 소품장터 전체선택 동적으로 불들어오도록
      let vue = this;
      this.checkedAllMarket = true;
      this.contents.filter(data=>data.category==='adopt').forEach(item=> {
        if(!item.checked){
          vue.checkedAllMarket = false;
        }
      })
    },

    deleteAdoptList(){ //분양 리스트 삭제
      console.log("삭제함수 타기");
      let vue = this;
      let newContents;
      // this.contents.filter(it=>it.category==='adopt').forEach(function (item){
      //   newContents = item.checked;
      //   console.log(newContents);
      // })
      this.adoptLists = this.adoptLists.filter(item=>!item.checked);
    },
    deleteMarketList(){

    },
    showRequestBox(){ //구매요청건 보여주기
      this.requestInAdopt = !this.requestInAdopt;
    },

    getMySellList(cancelId) {
      // 서버에서 조회 했을 때 컨텐츠를 설정해주는 곳(리프레시)
      let vue = this;
      this.contents = [];
      axios.get("/adoptDuo/login_post").then(function (response) {
        console.log(response);
        response.data.forEach((item) => {
          let data = {
            id: 0,
            category: "",
            num: 1,
            img: "",
            title: "",
            seller: "", // 판매자 아이디
            date: "", // 글 등록일
            addr: "", // 판매자 주소
            cont: 0, // 조회 수
            review: 0, // 리뷰문의 건
            nonReview: 0, // 미답변
            request: [
              // 구매요청 건
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
            status: "COMPLETED", // COMPLETED -> 분양완료, SELL -> 판매 중
            reply: true,
            isClickBuy: false,
            checked: true, // 체크 여부 판단
          };
          data.title = item.title;
          data.category = item.category;
          if (cancelId) {
            if (cancelId === data.id) {
              data.isClickBuy = true;
            }
          }
          vue.contents.push(data);
        });
        data.category = response.cate;
      });
    },
  },
  created() {
    this.contents_temp = JSON.parse(JSON.stringify(this.contents));
    this.adoptLists = this.contents_temp.filter(item=>item.category==='adopt');
    this.marketLists = this.contents_temp.filter(item=>item.category==='market');
  },
  computed: {


  },
};
</script>

<style scoped>
.srchDiv_ttile {
  width: 210px;
  letter-spacing: 0.99px;
  background-color: #f1f1f1;
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  z-index: 33;
}
.term {
  width: 90px;
  height: 50px;
  margin-right: 14px;
  border-radius: 5px;
  border: 1px solid #d7d7d7;
  background-color: #f1f1f1;
  letter-spacing: 0.88px;
  color: #4d4d4d;
  font-size: 16px;
}
.board_small_ac{
  font-size: 16px;
  font-weight: bold;
  color: #66cdcc;
  letter-spacing: 0.88px;
}
.board_small_nor{
  font-size: 16px;
  color: #999999;
  margin-left: 6px;
  letter-spacing: 0.88px;
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
