<template>
  <div>
    <top :isAdopt1="true"/>
    <img src="static/image/공지사항이미지.png" />
    <div>여기는 가정분양</div>
    <bottom />
  </div>
</template>

<script>
import Header from "./child/Header";
export default {
  name: "HomeAdopt",
  data() {
    return {};
  },
  methods: {},


  // created : function () {
  //   this.navi_1 = true;
  // },
  // computed : {
  // }
};
</script>

<style scoped></style>
