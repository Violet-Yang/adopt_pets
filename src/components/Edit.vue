<template>
  <div id="dmap">

    <div id="map" style="width: 100%; height: 100%"></div>

  </div>
</template>

<script>
export default {
  name: "Main",
  data () {
    return {
      msg : "다음맵 테스트"
    }
  },
  methods : {

  },
  mounted() {
    let container = document.getElementById('map');
    let mapOptions = {
      center: new daum.maps.LatLng(위도, 경도),
      level: 4 //지도의 레벨(확대, 축소 정도)
    };
    let map = new daum.maps.Map(container, mapOptions);
  }
}
</script>

<style scoped>

</style>
