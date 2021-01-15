<template>
  <div>
    <div
      v-if="tapCnt3"
      style="
        display: flex;
        position: absolute;
        top: 379px;
        width: 1200px;
        height: 70px;
      "
    >
      <div @click="goDog()" :class="{active_tap3 : isDog, passive_tap3 : !isDog}"><p>강아지 소품</p></div>
      <div @click="goCat()" :class="{active_tap3 : isCat, passive_tap3 : !isCat}"><p>고양이 소품</p></div>
      <div @click="goEtc()" :class="{active_tap3 : isEtc, passive_tap3 : !isEtc}"><p>기타동물 소품</p></div>
    </div>

    <div
      v-if="tapCnt2"
      style="
        display: flex;
        position: absolute;

        top: 379px;
        width: 1200px;
        height: 70px;
      "
    >
      <div
        @click="goNoticeBoard()"
        :class="{ active_tap2 : isNotice, passive_tap2 : !isNotice }"
      >
        <p>공지사항</p>
      </div>
      <div
        @click="goHostBoard()"
        :class="{ active_tap2 : !isNotice, passive_tap2 : isNotice }"
      >
        <p>집사게시판</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TapInImage",
  props: ["tapCnt2", "tapCnt3", "isNotice", "isBoard", "isDog", "isCat", "isEtc"],
  methods: {
    goHostBoard() { //집사게시판으로 이동
      this.$router.push({ path: "/dogBoard" });
    },
    goNoticeBoard() { //공지사항으로 이동
      this.$router.push({ path: "/noticeBoard" });
    },
    goDog(){ //강아지소품
      this.$router.push({path: "/market/dog"});
    },
    goCat(){ //고양이소품

      this.$router.push({path: "/market/cat"});

    },
    goEtc(){ //강아지소품
      this.$router.push({path: "/market/etc"});
    }
  },
};
</script>

<style scoped>
.active_tap3{
  width: 33.3333333333333333333333333333333333%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(37,37,37,0.5);
  color: #ffffff;
  cursor: pointer;
}

.passive_tap3{
  width: 33.3333333333333333333333333333333333%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #000000;
  opacity: 0.5;
  cursor: pointer;
}

.active_tap2 {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  cursor: pointer;
}
.passive_tap2 {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  opacity: 0.5;
  color: #ffffff;
  cursor: pointer;
}

div:nth-child(n) {
  border-right: 1px solid #b7b7b7;
}

div:last-child {
  border-right: none !important;
}
</style>
