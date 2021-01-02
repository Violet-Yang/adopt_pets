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
            찜목록
          </p>
        </div>
        <!--  찜목록 테이블-->
        <div style="margin-top: 42px; margin-bottom: 100px; width: 1200px">
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
              찜목록
            </div>
          </div>
          <!--데이터 개수만큼 목록 나옴-->
          <div
            v-for="items in contents"
            style="
              display: flex;
              height: 191px;
              border-bottom: 1px solid #d4d4d4;
            "
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
                  v-if="items.status"
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
                  구매요청
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
                  삭제
                </div>
              </div>
            </div>
          </div>
          <div @click="delAllData()"
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
export default {
  name: "myFavorite",
  data() {
    return {
      id: "abcd1234",
      newArray : [], //선택삭제 버튼 눌렀을 때 filter함수의 리턴값
      contents: [
        {
          num: 1,
          img: "static/image/market1.png",
          title:
            "우리멍뭉이가 쓰던 밥그릇과 장남감 팝니다. 네고 적당히 해주세요",
          seller: "zzangcomp",
          date: "2020.12.31",
          addr: "마두동",
          status: true,
          checked: true,
        },
        {
          num: 2,
          img: "static/image/market3.png",
          title:
            "강아지 하네스팝니다(시착 한번밖에 안한 제품이에요) 사이즈 L, ㄴㅇㅇㅇ",
          seller: "party2278",
          date: "2020.12.25",
          addr: "백산동",
          status: false,
          checked: true,
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
    delAllData(){ //선택삭제 버튼 눌렀을 때
      console.log("선택삭제")
      this.contents.forEach(data=> {
      })

    }

  },
  watch: {
    checkAll() {
      this.contents.forEach((data) => {
        data.checked = true;
      });
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
