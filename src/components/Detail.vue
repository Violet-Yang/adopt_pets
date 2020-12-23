<template>
  <div>
    <!--header-->
    <top />
    <img src="static/image/소품장터이미지.png" />

    <!--content : 소품장터 세부게시판-->
    <div style="display: flex; justify-content: center">
      <!--tap 컴포넌트 주입-->
      <tap-in-img :tap-cnt3="true" />
      <div style="margin-top : 99px; width: 1200px; margin-bottom: 105px">
        <!--글 제목과 이미지-->
        <div style="display: flex">
          <div>
            <div style="width: 600px; height: 436px">
              <img
                style="width: 100%; height: 100%"
                src="static/image/detailImg.png"
              />
              <!--            <img style="position: absolute; left: 0; top: 0;" src="static/image/vectorPrev.png">-->
            </div>
            <div
              class="area_imgs"
              style="
                margin-top: 11px;
                display: flex;
                width: 599px;
                height: 80px;

              "
            >
              <div><img src="static/image/btnPrev.png" /></div>
              <div style="width: 80px; height: 80px">
                <img src="static/image/icon_imgArea.png" />
              </div>
              <div style="width: 80px; height: 80px">
                <img src="static/image/icon_imgArea.png" />
              </div>
              <div style="width: 80px; height: 80px">
                <img src="static/image/icon_imgArea.png" />
              </div>
              <div style="width: 80px; height: 80px">
                <img src="static/image/icon_imgArea.png" />
              </div>
              <div style="width: 80px; height: 80px">
                <img src="static/image/icon_imgArea.png" />
              </div>
              <div style="width: 80px; height: 80px">
                <img src="static/image/icon_imgArea.png" />
              </div>

              <div><img src="static/image/btnNext.png" /></div>
            </div>
          </div>
          <div style="margin-left: 60.25px">
            <div
              style="
                width: 470px;
                height: 360px;
                border-bottom: 1px solid #66cdcc;
              "
            >
              <div
                style="
                  width: 470.42px;
                  height: 83.39px;
                  text-align: left;
                  font-size: 32px;
                  font-weight: bold;
                  line-height: 44px;
                  letter-spacing: 1.76px;
                "
              >
                <p>{{ item.title }}</p>
              </div>
              <div style="display: flex; margin-top: 63.83px">
                <div
                  style="
                    width: 130px;
                    height: 178px;
                    font-size: 18px;
                    text-align: left;
                    letter-spacing: 0.99px;
                    color: #67b5b9;
                  "
                >
                  <p style="margin-bottom: 25.39px">판매자</p>
                  <p style="margin-bottom: 25.39px">소품명</p>
                  <p style="margin-bottom: 25.39px">판매날짜</p>
                  <p style="margin-bottom: 25.39px">판매지역</p>
                </div>
                <div
                  style="
                    width: 324px;
                    height: 178px;
                    font-size: 18px;
                    text-align: left;
                    letter-spacing: 0.99px;
                    color: #777777;
                  "
                >
                  <p style="margin-bottom: 25.39px">{{ item.owner }}</p>
                  <p style="margin-bottom: 25.39px">{{ item.product }}</p>
                  <p style="margin-bottom: 25.39px">{{ item.regdata }}</p>
                  <p style="margin-bottom: 25.39px">{{ item.addr }}</p>
                </div>
              </div>
            </div>

            <div
              style="
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
                font-size: 22px;
                font-weight: bold;
                color: #111111;
                letter-spacing: 1.21px;
              "
            >
              <span>희망금액</span>
              <span style="color: #67b5b9"
                >{{ item.price.toLocaleString()
                }}<span style="color: #111111">원</span></span
              >
            </div>
            <div style="display: flex; margin-top: 38px">
              <div
                class="flex-all-center"
                style="width: 236px; height: 57px; border: 1px solid #d7d7d7"
              >
                QnA문의하기
              </div>
              <div
                class="flex-all-center"
                style="width: 236px; height: 57px; background-color: #67b5b9"
              >
                구매요청
              </div>
            </div>
          </div>
        </div>

        <!--소품설명 구매유의사항 tap-->
        <div v-if="tap[0]" style="margin-top: 82px">
          <div
            style="
              display: flex;
              justify-content: space-between;
              font-size: 18px;
            "
          >
            <div
              @click="tap_description()"
              class="flex-all-center"
              :class="{ active_tap: tap[0], passive_tap: !tap[0] }"
              style="width: 400px; height: 70px"
            >
              소품설명
            </div>
            <div
              @click="tap_note()"
              class="flex-all-center"
              :class="{ active_tap: tap[1], passive_tap: !tap[1] }"
              style="width: 400px; height: 70px"
            >
              구매유의사항
            </div>
            <div
              @click="tap_qna()"
              class="flex-all-center"
              :class="{ active_tap: tap[2], passive_tap: !tap[2] }"
              style="width: 400px; height: 70px"
            >
              판매자QnA
            </div>
          </div>
          <div
            style="
              margin-top: 36px;
              width: 1104px;
              font-size: 18px;
              text-align: left;
            "
          >
            {{ item.description }}
          </div>
        </div>

        <!--구매유의사항 tap-->
        <div v-if="tap[1]" style="margin-top: 82px">
          <div
            style="
              display: flex;
              justify-content: space-between;
              font-size: 18px;
            "
          >
            <div
              @click="tap_description()"
              class="flex-all-center"
              :class="{ active_tap: tap[0], passive_tap: !tap[0] }"
              style="width: 400px; height: 70px"
            >
              소품설명
            </div>
            <div
              @click="tap_note()"
              class="flex-all-center"
              :class="{ active_tap: tap[1], passive_tap: !tap[1] }"
              style="width: 400px; height: 70px"
            >
              구매유의사항
            </div>
            <div
              @click="tap_qna()"
              class="flex-all-center"
              :class="{ active_tap: tap[2], passive_tap: !tap[2] }"
              style="width: 400px; height: 70px"
            >
              판매자QnA
            </div>
          </div>

          <!--구매자의 유의사항-->
          <div
            style="
              margin-top: 53px;
              width: 1104px;
              font-size: 18px;
              text-align: left;
            "
          >
            <div style="font-size: 18px; line-height: 24px">
              <div style="display: flex; align-items: center">
                <div style="width: 20px; height: 20px">
                  <img
                    style="width: 100%; height: 100%"
                    src="static/image/barbadakClor.png"
                  />
                </div>
                <p style="margin-left: 11px; color: #68c9c9">구매하시는 분들의 유의사항</p>
              </div>
              <div style="margin-top: 28px">
                <span style="color: #777777"
                  >우선 판매시 입양해듀오랑은 관련이 없어요!완전 없어요! 이거에
                  대한 텍스트를 써야할거같은데 어디서 긁어와야할지 모르겠네요
                  ㅠ</span
                >
              </div>
            </div>
          </div>

          <!--판매자의 유의사항-->
          <div
            style="
              margin-top: 53px;
              width: 1104px;
              font-size: 18px;
              text-align: left;
            "
          >
            <div style="font-size: 18px; line-height: 24px">
              <div style="display: flex; align-items: center">
                <div style="width: 20px; height: 20px">
                  <img
                    style="width: 100%; height: 100%"
                    src="static/image/barbadakClor.png"
                  />
                </div>
                <p style="margin-left: 11px; color: #68c9c9">판매하시는 분들의 유의사항</p>
              </div>
              <div style="margin-top: 28px">
                <span style="color: #777777"
                >거짓매물 이런거 올리시면 진짜 혼나여 !! 이런거 텍스트 써야할거 같은데 이것도 아직 못긁어왔어요.</span
                >
              </div>
            </div>
          </div>



        </div>
        <!--QnA tap-->
      </div>
    </div>
    <!--footer-->
    <bottom />
  </div>
</template>

<script>
import Footer from "./child/Footer";
export default {
  name: "Detail",
  components: { Footer },
  data() {
    return {
      tap: [true, false, false],
      item: {
        img: "static/image/detailImg.png",
        title: "강아지 프리스비 판매합니다!(두번정도 사용했어요)",
        owner: "violet0410",
        product: "마이펫 프리스비(노랑)",
        regdata: "2020.12.01",
        addr: "정발산동",
        price: 35000,
        description:
          "애기때 가지고 놀라고 몇개 사준건데 이 녀석이 조금만 흥미 보이다가 별로 맘에 안들어하네여... " +
          "2번정도 가지고 놀았구요, 정말 거의 냄새만 맡고 한번 던저준게 다라 거의 새거에요. 그래도 중고 물품이니 감안하고 사실분만 연락주세요. (헛소리,네고 안받아요;)",
      },
    };
  },
  methods: {
    tap_description() {
      this.tap = [true, false, false];
    },

    tap_note() {
      this.tap = [false, true, false];
    },
    tap_qna() {
      this.tap = [false, false, true];
    },
  },
};
</script>

<style scoped>
.flex-all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.area_imgs div:nth-child(-n + 8) {
  margin-right: 9px;
}
.area_imgs div:last-child {
  margin-right: 0;
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
