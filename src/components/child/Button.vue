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
      // let vue = this;
      // //현재시간
      // let startDate = this.$moment(this.startDate); // -> moment 클래스가 반환됨 => 1970 1.1 지정한 날짜까지의 밀리세컨드 => 타임스탬프라고 지칭
      // let endDate = this.$moment(this.endDate);
      // this.testContents.forEach(function (it) {
      //   let momentDate = vue.$moment(it.date);
      // });
      // this.testContents = this.contents.filter(item => vue.$moment(item.date).diff(startDate) > 0 && endDate.diff(vue.$moment(item.date)) > 0)
      // console.log(this.testContents);
      // if(this.period === '1주일'){
      // }
      // this.contents = this.testContents.filter(data => data.date.includes(searchContext));
    }
  }
};
</script>

<style scoped>


</style>
