<template>
  <div>
    <div class="box" style="margin-bottom: 15px">
      <input type="text" :placeholder="'ID'" v-model="id" />
    </div>
    <div class="box">
      <input type="password" :placeholder="'PASSWORD'" v-model="pw" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CommBox",
  props: ["placeText", "id", "pw"],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    sendLoginInfo() {
      //로그인 하기
      let formData = new FormData();
      formData.append("id", this.id);
      formData.append("pw", this.pw);
      axios
        .post("adoptDuo/login", formData)
        .then(function (response) {
          console.log("로그인하기 함수 타기");
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="password"] {
  width: calc(100% - 35px);
  height: calc(100% - 14px);
  font-family: inherit;
  webkit-appearance: none;
  moz-appearance: none;
  appearance: none;
  border: none;
  margin: 0;
}

input:focus {
  outline: none;
}

.box {
  width: 658px;
  height: 70px;
  border: 1px solid #b7b7b7;
}
</style>
