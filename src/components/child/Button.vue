<template>

    <div
      @click="sendInfo()"

      style="
        width: 658px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #66CDCC;
        border-radius: 7px;
        color: white;
        letter-spacing: -0.45px;
        font-size: 18px;
      "
    >
      {{ btnText }}
    </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Title",
  props: ["btnText"],
  data() {
    return {


    };
  },
  methods : {
    sendInfo (id, pw) {
      console.log('value : ${name}, type : ${typeof name}');
      let formData = new FormData();
      formData.append('USER_ID', this.loginId );
      formData.append('USER_PW', this.loginPwd);
      axios.post('adoptDuo/login', formData)
        .then(function (response) {
          console.log('1111111');
          console.log(response);
        })
        .catch(function (err){
          console.log(err);
        })
    }
  }
};
</script>

<style scoped>


</style>
