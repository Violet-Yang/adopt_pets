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
      <div class="tap3_in_img"><p>강아지 소품</p></div>
      <div class="tap3_in_img"><p>고양이 소품</p></div>
      <div class="tap3_in_img"><p>기타동물 소품</p></div>
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
      <div class="tap2_in_img"><p>공지사항</p></div>
      <div class="tap2_in_img"><p>집사게시판</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TapInImage",
  props: ["tapCnt2", "tapCnt3", "isNotice"],
};
</script>

<style scoped>
.tap3_in_img {
  width: 33.3333333333333333333333333333333333%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  opacity: 0.5;
  color: #ffffff;
  cursor: pointer;
}
.tap2_in_img {
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
  border-right: 1px solid #d4d4d4;
}

div:last-child {
  border-right: none !important;
}
</style>
