<template>
  <div>
    <!--header-->
    <top :is-market="true" />
    <img src="../../../static/image/소품장터이미지.png"/>

    <!--content : 소품장터 게시판-->
    <div style="display: flex; justify-content: center;">
      <div>
        <tapInImg :tap-cnt3="true" is-dog="true"/>
        <div>
          <!--검색bar주입-->
          <search-bar style="margin-top: 99px;" @searching="getSearch"/>
          <div style="margin-top: 27px; text-align: left">
            <p>우리지역 <span v-if="isLetter">{{ isLetter }}</span>에서 검색한 내용입니다.</p>
          </div>
          <!--게시판 글만 flex처리하기-->
          <div
            style="
            margin-top: 30px;
            width: 1200px;
            text-align: left;
            margin-bottom: 67px;
          "
          >
            <!--왜 flex를 사용하면 자식 요소의 width가 변하는지,,-->
            <!--3의 배수일 때 lastItem_div 클래스를 동적으로 실행하고 싶다-->
            <div
              :class="{
              item_div: item.length - 1 !== index,
              lastItem_div: item.length - 1 === index - 1,
            }"
              v-for="(item, index) in goods"
              style="display: inline-block; width: 380px; height: 471px"
            >

              <div style="width: 380px; height: 325px">
                <img style="width: 100%; height: 100%" :src="item.img" />
              </div>
              <div
                style="
                display: flex;
                align-items: center;
                margin-top: 23px;
                font-size: 16px;
                color: #999999;
                letter-spacing: 0.88px;
              "
              >
                <div style="width: 38px; height: 38px; margin-right: 13px;">
                  <img
                    style="width: 100%; height: 100%;"
                    src="../../../static/image/icon_circle_dog.png"
                  />
                </div>
                <span style="margin-right: 5px" >{{ item.id }}</span> | <span style="margin-left: 5px; margin-right: 5px">{{ item.addr }}</span> |
                <span style="margin-left: 5px" >{{ item.data }}</span>
              </div>
              <div
                style="
                margin-top: 25px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                white-space: normal;
                overflow: hidden;
                text-overflow: ellipsis;

                text-align: left;
              "
              >
                {{ item.title }}
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
import SearchBar from "../child/SearchBar";
export default {
  name: "Dog",
  components: { SearchBar },
  data() {
    return {
      afterClck: "우리지역 에서 검색한 내용입니다.",
      isLetter : "",
      goods: [
        {
          id: "violet55",
          addr: "백석동",
          data: "2020.12.23",
          title:
            "저희 강아지가 쓰던 터그+밥그릇(장난감) 떙처리로 드립니다. 싸게 판매중이니 어서 와서 사가세요",
          img: "static/image/market1.png",
        },

        {
          id: "eldmsdl13",
          addr: "장발산동",
          data: "2020.11.29",
          title:
            "강아지 하네스팝니다 (시착 한번밖에 안한 제품이에요 ㅠㅠ)사이즈 Lasdfjlhsadlfhksladjflksajdlfkjsdlkfjlkasdjflkasjdlfkjasdlfjlsadkjflskajdflsajdflksajdlfjsaldkfjlksadjflsdajrlkfsd",
          img: "static/image/market3.png",
        },
        {
          id: "eldmsdl13",
          addr: "장발산동",
          data: "2020.11.29",
          title:
            "강아지 하네스팝니다 (시착 한번밖에 안한 제품이에요 ㅠㅠ)사이즈 L",
          img: "static/image/market3.png",
        },
        {
          id: "eldmsdl13",
          addr: "장발산동",
          data: "2020.11.29",
          title:
            "강아지 하네스팝니다 (시착 한번밖에 안한 제품이에요 ㅠㅠ)사이즈 L",
          img: "static/image/market1.png",
        },

      ],
    };
  },
  methods : {
    getSearch(param){ // 지역 검색하기
      console.log("param:" + param);
      this.isLetter = param;
     this.goods = this.goods.filter(data=>data.addr === param);
    }
  }

};
</script>

<style scoped>
.item_div {
  margin-right: 30px;
}

/*span:nth-child(n) {*/
/*  margin-right: 10px;*/
/*  border-right: 1px solid #999999;*/
/*}*/

.lastItem_div {
  margin-right: 30px;
}

.item_div:nth-of-type(3n) {
  margin-right: 0px;
}
</style>
