<template>
  <div>
    <!--header-->
    <top :is-comm="true" />
    <img src="static/image/공지사항이미지.png" />
    <!--여분 div-->
    <div style="">
      <!--검색박스 컴포넌트 주입-->
      <schDiv />

      <!--게시판 테이블-->
      <div style="margin-top: 14px; margin-bottom: 43px">
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
          <div class="board_writing" style="width: 668px">
            {{ eachBoard.title }}
          </div>
          <div class="board_writing" style="width: 184px">
            {{ eachBoard.host }}
          </div>
          <div class="board_writing" style="width: 204px">
            {{ eachBoard.date }}
          </div>
        </div>
      </div>

      <!--게시판 페이징처리-->
      <div class="flex-all-center"> <!--페이징처리 위치는 게시판 하단 정중앙에 위치-->
        <div style="display: flex; width: 288px; height: 35px">
          <div class="flex-all-center" style="width: 33%">〈</div>
          <div class="flex-all-center" style="width: 33%">1</div>
          <div class="flex-all-center" style="width: 33%">〉</div>
        </div>
      </div>
    </div>

    <!--footer-->
    <bottom />
  </div>
</template>

<script>
export default {
  name: "Community-notice",
  data() {
    return {
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
};
</script>

<style scoped>
.flex-all-center {
  display: flex;
  align-items: center;
  justify-content: center;
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

.board_writing {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #111111;
  background-color: #f7f7f7;
  border-bottom: 1px solid #b7b7b7;
}
</style>
