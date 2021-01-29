<template>
  <div>
    <!--header-->
    <top :is-comm="true" />
    <img style="max-width: 1920px; position: relative" src="../../../../static/image/공지사항이미지.png" />
    <div style="position: absolute; top :191px; left: 821px;"  class="main_img_text">공지사항
    </div>

    <!--여분 div-->
    <div class="flex-all-center">
      <!--tap 컴포넌트 주입-->
      <tap-in-img :tap-cnt2="true" :is-notice="true"/>
      <div>


        <!--게시판 테이블-->
        <div style="margin-top: 100px; width: 1200px; height: 1500px;
        border-top: 3px solid #66CDCC; margin-bottom: 43px">
          <div v-show="currentOjb.length>0" style="display: flex; height: 70px; background-color: #f7f7f7; border-bottom: 1px solid #b7b7b7;">
            <div class="board_title" style="width: 600px; margin-left: 20px;">{{currentOjb.title}}</div>
            <div class="board_title" style="width: 150px; margin-left: 200px; justify-content: center">{{currentOjb.host}}</div>
            <div class="board_title" style="width: 150px; margin-left: 70px; justify-content: center">{{currentOjb.date}}</div>
          </div>
          <div style="display: flex; height: 70px; border-bottom: 1px solid #b7b7b7;">
            <div class="board_download" style="width: 600px; margin-left: 20px;">다운로드할 파일 이름</div>
          </div>
          <!-- 상세이미지 나오는 곳-->
          <div v-show="currentOjb.length>0" class="flex-all-center" style="height: 1000px">
            <img :src="currentOjb.context.img">

          </div>

          <div style="display: flex; height: 70px;border-top: 1px solid #b7b7b7; border-bottom: 1px solid #f1f1f1;">
            <div class="board_download" style="width: 350px; margin-left: 20px; border-right: 1px solid #f1f1f1; ">
              <div style="width: 50px">▲</div>
              <div style="width: 100px;">상단글</div>
            </div>
            <div v-show="preObj.length>0" class="board_download" style="width: 950px; margin-left: 20px;">{{preObj.title}}</div>
          </div>
          <div style="display: flex; height: 70px; border-bottom: 1px solid #b7b7b7;">
            <div class="board_download" style="width: 350px; margin-left: 20px; border-right: 1px solid #f1f1f1; ">
              <div style="width: 50px">▼</div>
              <div style="width: 100px">하위글</div>
            </div>
            <div v-show="preObj.length>0" class="board_download" style="width: 950px; margin-left: 20px;">{{nextObj.title}}</div>
          </div>

        </div>

        <!--        게시판 페이징처리-->
        <div class="flex-all-center">
          <!--페이징처리 위치는 게시판 하단 정중앙에 위치-->
          <div style="display: flex; width: 288px; height: 35px">
            <div class="flex-all-center" style="width: 33%">〈</div>
            <div class="flex-all-center" style="width: 33%">1</div>
            <div class="flex-all-center" style="width: 33%">〉</div>
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
  name: "NoticeDetail",
  data() {
    return {
      status : [true,false,false],
      preObj : null, // 이전 글 :선택한 객체 이전 배열
      currentOjb : null, //현재 배열:이전페이지에서 선택해서 넘어온 객체
      nextObj : null, // 다음 글 :선택한 객체 다음 배열
      itemList : [],
      itemBoard: [
        {
          brdNum: 1,
          title: "공지사항 예비 텍스트 1",
          host: "관리자1",
          context: { text: "예비글1입니다", img: "static/image/baro1.png" },
          date: "2020.11.07",
        },
        {
          brdNum: 2,
          title: "공지사항 예비 텍스트 2",
          host: "관리자2",
          context: { text: "예비글2입니다", img: "static/image/baro1.png" },
          date: "2020.11.08",
        },
        {
          brdNum: 3,
          title: "공지사항 예비 텍스트 3",
          host: "관리자3",
          context: { text: "예비글3입니다", img: "static/image/baro1.png" },
          date: "2020.11.09",
        },
        {
          brdNum: 4,
          title: "공지사항 예비 텍스트 4",
          host: "관리자4",
          context: { text: "예비글4입니다", img: "static/image/baro1.png" },
          date: "2020.11.07",
        },
        {
          brdNum: 5,
          title: "공지사항 예비 텍스트 5",
          host: "관리자5",
          context: { text: "예비글5입니다", img: "static/image/baro1.png" },
          date: "2020.11.07",
        },

      ],
    };
  },
  methods : {
    goWriting() {
      this.$router.push({path : "/writeNotice"})
    },
    tapDog () {
      console.log("tap1실행");
      this.status = [true, false, false];
      //this.status[1] = false;
      //this.status[2] = false;
    },
    tapCat () {
      console.log("tap2실행");
      this.status = [false, true, false];
      // this.status[0] = false; vue가 못알아 들음 윗줄처럼 변수 선언했던 패턴과 통일되게 알려줘야 함
      // this.status[1] = true;
      // this.status[2] = false;
      console.log(this.status);
    },
    tapExtra () {
      console.log("tap3실행");
      this.status = [false, false, true];
      // this.status[0] = false;
      // this.status[1] = false;
      // this.status[2] = true;
    }
  },
  created() {
    let vue = this;
    this.itemList = JSON.parse(this.$route.params.object);
    let eachNum = this.$route.params.id;
    console.log("itemList???" + this.itemList);
    console.log("eachNum???" + eachNum);
    this.itemList.forEach(it=> {
      if(it.brdNum === eachNum){
         vue.currentOjb = it;
      }else if(it.brdNum === eachNum-1) {
        vue.preObj = it;
      }else if (it.brdNum === eachNum+1) {
        vue.nextObj = it;
      }
    })
  }
};
</script>

<style scoped>
.flex-all-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main_img_text {
  height: 69px;
  text-align: center;
  font: normal normal 800 60px/35px NanumGothic;
  letter-spacing: -1.5px;
  color: #FFFFFF;
  opacity: 1;
}

.board_title {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: #111111;
}
.board_download {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #111111;
}

.active_tap {
  color: #66CDCC;
  border-bottom: 2px solid #66CDCC;
}

.passive_tap {
  color: #D4D4D4;
  border-bottom: 2px solid #D4D4D4;
}

.board_writing {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #111111;
  background-color: #f7f7f7;
  border-bottom: 1px solid #b7b7b7;
}

.board_tap {

  font-size: 18px;
  letter-spacing: 0.99px;
}
</style>
