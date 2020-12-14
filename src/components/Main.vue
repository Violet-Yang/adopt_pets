<template>
  <div id="main_wrap">
    <!--header-->
    <top />

    <!-- 이미지 슬라이드로 처리하기 -->
    <div class="main_img">
      <img src="../../static/image/slide2.png" style="width: 100%" />
    </div>

    <!-- 컨텐츠 영역1 입양해듀오-->
    <div
      style="
        margin-top: 90px;
        margin-left: 360px;
        display: flex;
        width: 1200px;
        height: 287px;
      "
    >
      <div style="width: 287px; height: 233px; background-color: gold">
        <img
          style="width: 100%; height: 100%"
          src="../../static/image/baro0.png"
        />
      </div>

      <div class="baro" style="position: relative">
        <img
          style="width: 100%; height: 100%;"
          src="../../static/image/baro1.png"
        />
        <div
          style="
            position: absolute;
            width: 100%;
            top: 0;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <div class="text_baro">강아지/고양이/기타반려동물 가정분양</div>
          <p class="btn_baro">바로가기</p>
        </div>
      </div>

      <div class="baro" style="background-color: #2c3e50">
        <div></div>
        <div class="text_baro">강아지/고양이/기타반려동물 유기견분양</div>
        <p class="btn_baro">바로가기</p>
      </div>
      <div class="baro" style="background-color: cornflowerblue">
        <div class="text_baro">반려동물<br />소품장터</div>
        <p class="btn_baro">바로가기</p>
      </div>
    </div>

    <!-- 컨텐츠 영역2 다른집 고양이 이야기-->
    <div style="position: relative; width: 1920px; height: 224px">
      <img src="../../static/image/cat_banner.png" />
      <div
        style="
          position: absolute;
          left: 847px;
          top: 112.5px;
          height: 55px;
          text-align: left;
          font-size: 22px;
          font-weight: bold;
          color: #333333;
          line-height: 30px;
        "
      >
        다른 집 고양이들의 이야기는 어떨까 궁금하세요?<br />
        집사게시판에서 여러 친구들의 이야기를 만나보세요!
      </div>
      <img
        class="scale"
        @click="goBoard()"
        style="position: absolute; left: 849px; top: 189.5px"
        src="../../static/image/go.png"
      />

      <div></div>
    </div>

    <!-- 컨첸츠 영역3 입양해듀오 News-->
    <div
      style="
        margin-left: 360px;
        margin-top: 116px;
        margin-bottom: 117px;
        display: flex;
        width: 1200px;
        height: 688px;
      "
    >
      <div style="width: 450px; position: relative">
        <div style="height: 250px; background-color: goldenrod">
          <img style="width: 100%; height: 100%" src="../../static/image/news1.png" />
          <div
            class="news_text"
            style="position: absolute; top: 57px; left: 34px"
          >
            <p class="font_16">Notice & News</p>
            <p style="margin-top: 20px" class="font_30">입양해듀오 News</p>
          </div>
        </div>
        <div style="height: 435px; background-color: aquamarine">
          <img style="width: 100%" src="static/image/news2.png" />
          <div
            class="news_text"
            style="position: absolute; top: 313px; left: 35px"
          >
            <p class="font_16">Community</p>
            <p class="font_30" style="margin-top: 20px">
              입양해듀오 <br />집사커뮤니티
            </p>
          </div>
        </div>
      </div>

      <div style="width: 750px; position: relative">
        <div style="height: 497px; background-color: lightgray">
          <img style="width: 100%" src="static/image/news3.png" />
          <div
            class="news_text"
            style="position: absolute; left: 56px; top: 56px"
          >
            <p>Company</p>
            <p style="margin-top: 20px" class="font_30">What is 입양해듀오</p>
            <p
              class="font_16"
              style="width: 467px; height: 171px; margin-top: 20px"

            >
              입양해듀오는 반려동물을 맞이하고픈 가족들을 위해 탄생하게
              되었습니다. 평생을 함께 한다는 의미의 「반려」 소중한 가족들과의
              만남을 위해 입양해듀오가 함께합니다.
            </p>
          </div>
        </div>
        <div style="height: 190px; background-color: darkorchid">
          <img src="static/image/news4.png">
          <div class="news_text" style="position: absolute; top: 522px; left: 56px ">
            <p class="font_16">Adoption of abandoned</p>
            <p class="font_30" style="margin-top: 20px">따뜻한 온기가 그리워요</p>
            <p class="font_16" style="margin-top: 20px">안락사 공고가 얼마 남지 않은 아이들 이야기<br> 사랑받기도 부족한 우리 아이들의 보호자가 되어주세요.</p>
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
  name: "Main",
  data() {
    return {
      sticky: 123,
      msg: "다음맵 테스트",
    };
  },
  methods: {

    goBoard() {
      this.$router.push({ path: "/Board/" });
    },
  },
  created() {},
};
</script>

<style scoped>
.scale {
  transform: scale(1);
  -webkit-transform: scale(1);
  transition: all 0.3s ease-in-out; /* 부드러운 모션을 위해 추가*/
}

.scale:hover {
  transform: scale(1.2);
  overflow: hidden;
}

#main_wrap {
  max-width: 1920px;
}
.main_img {
  display: flex;
  width: 100%;
}

.baro {
  /*display: flex;*/
  /*!*flex-direction: column;*!*/
  /*!*align-items: center;*!*/
  /*justify-content: center;*/
  width: 287px;
  height: 201px;
  margin-top: 16px;
  margin-left: 16px;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
}

.text_baro {
  margin-top: 61px;
  width: 236px;
  height: 42px;
}

.btn_baro {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
  width: 150px;
  height: 40px;
  border: 1px solid #ffffff;
}

.news_text {
  position: absolute;
  text-align: left;
  color: white;
}

.font_16 {
  font-size: 16px;
}

.font_30 {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0px;
}
</style>
