<template>
  <div>
    <top :isAdopt1="true" is-map="true" />
<div style="display: flex; padding: 112px 0 13px 47px; width: 1920px">
  <div class="style_filter">동물종류</div>
  <div class="style_filter">성별</div>
  <div class="style_filter">나이</div>
  <div class="style_filter">분양비</div>
  <div></div>

</div>

  <div style="width: 1920px; height: 1150px">
    <div ref="map" style="width: 100%; height: 100%;"></div>
  </div>
    <bottom />
  </div>
</template>

<script>
import Header from "./child/Header";
export default {
  name: "HomeAdopt",
  data () {
    return {
      msg : "다음맵 테스트",
      map : null,
    }
  },
  methods : {

  },
  mounted() {
    let container = this.$refs.map;
    let options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.5642135, 127.0016985), //지도의 중심좌표.
      level: 5 //지도의 레벨(확대, 축소 정도)
    };

    this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다
    //let markerPosition  = new kakao.maps.LatLng(37.5642135, 127.0016985);


    // 마커 이미지의 이미지 주소입니다
    let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {

      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: this.map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지
      });
    }
  }
}
</script>

<style scoped>
.style_filter {
  width: 140px;
  height: 45px;
  border: 1px solid #B7B7B7;
  border-radius: 8px;
}

</style>
