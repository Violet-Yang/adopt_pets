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

        <!--검색박스 컴포넌트 주입-->
        <schDiv style="margin-top: 100px" @searching="doSearch"/>
        <!--게시판 테이블-->
        <div style="margin-top: 17px; border-top: 3px solid #66CDCC; margin-bottom: 43px">
          <div style="display: flex; height: 70px; width: 1200px">
            <div class="board_title" style="width: 144px">번호</div>
            <div class="board_title" style="width: 668px">제목</div>
            <div class="board_title" style="width: 184px">작성자</div>
            <div class="board_title" style="width: 204px">등록일</div>
          </div>
          <div
            v-for="eachBoard in itemBoard"
            style="display: flex; height: 70px; width: 1200px"
          >
            <div class="board_writing" style="width: 144px">
              {{ eachBoard.brdNum }}
            </div>
            <div class="board_writing" @click="goNoticeDetail(itemBoard,eachBoard.brdNum)" style="width: 668px; cursor: pointer">
              {{ eachBoard.title }}
            </div>
            <div class="board_writing" style="width: 184px">
              {{ eachBoard.host }}
            </div>
            <div class="board_writing" style="width: 204px">
              {{ eachBoard.date }}
            </div>
          </div>

          <div @click="goWriting"
               class="flex-all-center"
               style="
                    width: 149px;
                    height: 50px;
                    border-radius: 10px;
                    background-color: #898989;
                    color: #ffffff;
                    margin-top: 21px;
                  "
          >
            글쓰기
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
  name: "NoticeBoard",
  data() {
    return {
      status : [true,false,false],
      testBoard : [],
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
          title: "공지사항입니다 2",
          host: "관리자2",
          context: { text: "예비글2입니다", img: "static/image/baro1.png" },
          date: "2020.11.08",
        },
        {
          brdNum: 3,
          title: "필독!!! 읽어보세요",
          host: "관리자3",
          context: { text: "예비글3입니다", img: "static/image/baro1.png" },
          date: "2020.11.09",
        },
        {
          brdNum: 4,
          title: "입듀 서비스 참고사항",
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
        {
          brdNum: 6,
          title: "공지사항 예비 텍스트 6",
          host: "관리자6",
          context: { text: "예비글6입니다", img: "static/image/baro1.png" },
          date: "2020.11.10",
        },
        {
          brdNum: 7,
          title: "공지사항 예비 텍스트 7",
          host: "관리자7",
          context: { text: "예비글7입니다", img: "static/image/baro1.png" },
          date: "2020.11.12",
        },
        {
          brdNum: 8,
          title: "공지사항 예비 텍스트 8",
          host: "관리자8",
          context: { text: "예비글8입니다", img: "static/image/baro1.png" },
          date: "2020.11.15",
        },
        {
          brdNum: 9,
          title: "공지사항 예비 텍스트 9",
          host: "관리자9",
          context: { text: "예비글9입니다", img: "static/image/baro1.png" },
          date: "2020.11.16",
        },
        {
          brdNum: 10,
          title: "공지사항 예비 텍스트 10",
          host: "관리자10",
          context: { text: "예비글10입니다", img: "static/image/baro1.png" },
          date: "2020.11.17",
        },
      ],
    };
  },
  methods : {
    doSearch(param){ //component 메서드 재정의하여 검색기능 구현하기
      console.log(param);
      this.itemBoard = this.testBoard.filter(item=>item.title.includes(param));
    },

    goWriting() {
      this.$router.push({path : "/writeNotice"})
    },
    goNoticeDetail(item,num) {
      let vue = this;
      // console.log("파라미터 보내기 :"+item);
      console.log(item);
      console.log("넘어가는 id값:"+ num);
      //
      this.$router.push({name : "NoticeDetail", params : {object : JSON.stringify(item), id : num}});
      // this.$router.push({name : "NoticeDetail", params : {title : item.title, host : item.host, regdate : item.date, contain : item.context, preItem : "", nextItem : ""} })
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
    this.testBoard = JSON.parse(JSON.stringify(this.itemBoard)); //화면이 그려지고 난 뒤, itemBoard데이터를 복사하여 testBoard에 할당
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
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: #111111;
  background-color: #f7f7f7;
  border-bottom: 1px solid #b7b7b7;
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
