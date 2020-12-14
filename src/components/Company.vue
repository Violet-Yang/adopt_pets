<template>
  <div>
    <!--header-->
    <top />
    <div>
      <img src="static/image/회사소개이미지.png" />

      <div
        style="
          position: absolute;
          top: 318px;
          left: 361px;
          width: 727px;
          height: 545px;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 0 80px 0 80px;
        "
      >
        <div style="margin-left: 59px">
        <p class="title" style="margin-top: 82px">
          반려가족과의 소중한 첫만남<br />
          입양해듀오가 함께하겠습니다.
        </p>
        <p class="context" style="margin-top: 51.36px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages,
        </p>

          <p class="from">입양해듀오 올림</p>
        </div>
      </div>
    </div>

    <!--footer-->
    <bottom />
  </div>
</template>

<script>
export default {
  name: "Company",
};
</script>

<style scoped>

.title {
  text-align: left;
  letter-spacing: -1px;
  color: #FFFFFF;
  font-size: 40px;
  width: 542px;
  height: 108px;
  line-height: 60px;
  font-stretch: condensed;
}

.context {
  text-align: left;
  letter-spacing: -0.4px;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 30px;
  height: 199.48px;
  width: 596.46px;
}

.from {
  text-align: right;
  letter-spacing: -0.5px;
  color: #FFFFFF;
  margin-top: 22.48px;
  margin-right: 81.54px;
}

</style>
