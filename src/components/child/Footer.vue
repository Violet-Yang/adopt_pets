<template>
  <div id="wrap_bottom">
    <div style="height: 174px">
      <div style="display: flex; justify-content: center; align-items: center">
        <p class="bottom_text" @click="goCompany">회사소개</p>
        <p class="bottom_text">개인정보처리방침</p>
        <p class="bottom_text" @click="goPolicy">이용약관</p>
      </div>

      <div style="margin-top: 31px; width: 215px; height: 76px; display: flex; align-items: center">
        <img
          style="width: 100%; height: 100%"
          src="../../../static/image/logo_white.png"
        />

      </div>

      <p style="margin-top: 25px">
        Copyright © 입양해듀오. All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["company", "policy", "terms", "img", "copyright"],
  data() {
    return {};
  },

  methods: {
    goCompany() {
      this.$router.push({ path: "/company" });
    },
    goPolicy() {
      this.$router.push({ path: "/policy" });
    },
  },
};
</script>

<style scoped>
#wrap_bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 1920px;
  height: 250px;
  background-color: #252525;
  color: white;
  font-size: 18px;
  /*line-height: 25px;*/
}
.bottom_text {
  margin: 0 7px;
}
</style>
