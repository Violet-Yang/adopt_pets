<template>
  <div id="app" @scroll="test" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sticky: 123,
      msg: "다음맵 테스트",
    };
  },
  methods: {
    test() {
      console.log("11111");
    },
  },

  created() {
    let vue = this;
    document.addEventListener('scroll', vue.test())

  }
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

body {
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: 0;
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}

#app {
  font-family: "NanumGothic";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

span, p {
  margin: 0;
  padding: 0;
}

div {
  margin: 0;
  padding: 0;
  outline: 0;
}
</style>
