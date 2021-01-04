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
          <div style="display: flex">
            <div style="width: 18px; height: 18px">
              <img
                style="width: 100%; height: 100%"
                src="static/image/barbadakClor.png"
              />
            </div>
            <div
              style="
                margin-left: 2.5px;
                font-size: 25px;
                letter-spacing: 1.38px;
                color: #68c9c9;
              "
            >
              판매자 정보
            </div>
          </div>
          <div style="width: 1090px; border-top: 3px solid #66cdcc">
            <div
              style="
                display: flex;
                width: 100%;
                height: 60px;
                border-bottom: 1px solid #d7d7d7;
              "
            >
              <div style="width: 200px">판매자아이디</div>
              <div style="width: 347px">{{ business.seller }}</div>
            </div>
          </div>
          <!--          구매자정보-->
          <div style="display: flex">
            <div style="width: 18px; height: 18px">
              <img
                style="width: 100%; height: 100%"
                src="static/image/barbadakClor.png"
              />
            </div>
            <div
              style="
                font-size: 25px;
                text-align: left;
                letter-spacing: 1.38px;
                color: #68c9c9;
              "
            >
              구매자 정보
            </div>
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
    <div style="display: flex; justify-content: center; margin-top: 97px">
      <div style="width: 1200px">
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
            height: 280px;
          "
        >
          <div
            style="
              display: flex;
              background-color: #f7f7f7;
              border-top: 3px solid #66cdcc;
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
              border-top: 2px solid #b7b7b7;
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
                @click="showInformation()"
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
    <!--footer-->
    <bottom />
  </div>
</template>

<script>
export default {
  name: "myPurchase",
  data() {
    return {
      id: "abcd1234",
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
      contents: [
        {
          num: 1,
          category: "소품장터",
          title: "프리스비 판매(새거임)",
          seller: "zzangcomp",
          date: "2020.12.31",
          status: "waiting",
          info: true,
        },
        {
          num: 2,
          category: "가정견분양",
          title: "강아지분양",
          seller: "eldmsdl13",
          date: "2020.01.01",
          status: "complete",
          info: false,
        },
        {
          num: 3,
          category: "가정견분양",
          title: "시츄 분양합니당(1살)",
          seller: "violet0410",
          date: "2020.01.01",
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
    showInformation() {
      this.business.status = true;
    },
  },
  watch: {
    s2howStatus() {},
  },
};
</script>

<style scoped>
.flex-all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info_active {
  background-color: #66cdcc;
}
.info_passive {
  background-color: #d7d7d7;
}
</style>
