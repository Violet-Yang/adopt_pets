<template>
  <div>
    <div class="box"><input type="text" :placeholder="''"></div>
    <div class="box"><input type="text" :placeholder="''"></div>
  </div>
</template>

<script>
export default {
  name: "CommBox",
  props : ["placeText", "id", "pw"],
  data () {
    return {
      text : ""
    }
  },
  methods : {

  }

}
</script>

<style scoped>


input[type="text"],
input[type="password"]{
  width: calc(100% - 35px);
  height: calc(100% - 14px);
  font-family: inherit;
  webkit-appearance : none;
  moz-appearance:none;
  appearance:none;
  border: none;
  margin: 0;
}

input:focus {
  outline: none;
}

.box {
  width: 658px;
  height: 70px;
  border: 1px solid #B7B7B7;
  margin-bottom: 15px;

}
</style>
