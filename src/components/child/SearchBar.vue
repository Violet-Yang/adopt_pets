<template>
  <div style="display: flex; min-width: 1200px; height: 50px; font-size: 18px; justify-content: flex-end;
  /*position: absolute; right: 2px*/
">
    <div style="display: flex">
      <div
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 127px;
        height: 100%;
        border: 1px solid #b7b7b7;
        color: #555555;
      "
      >
        제목
      </div>

      <div
        style="
        min-width: 255px;
        height: 100%;
        margin-left: 8px;
        border: 1px solid #b7b7b7;
      "
      >
        <input
          type="text"
          v-model="message"
          style="width: calc(95% - 5px); height: calc(100% - 2px); padding-left: 5px;"
          placeholder="내용을 입력해주세요"

        />
      </div>

      <div
        @click="doSearch(message)"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 95px;
        height: 100%;
        margin-left: 8px;
        background-color: #66cdcc;
        border: 1px solid #66cdcc;
        color: #ffffff;
        cursor: pointer;
      "
      >
        검색
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props : ["isContent"],
  data(){
    return{
      message : ""
    }
  },
  methods : {
    doSearch(addr){ //emit으로 이벤트 발생시키기
      this.$emit('searching',this.message);
    }
  }
};
</script>

<style scoped>
input {
  webkit-appearance: none;
  moz-appearance: none;
  appearance: none;
  border: none;
  /*border: inherit;*/
  /*padding: 0 0 0 15px;*/
}

input:focus {
  outline: none;
}

input::placeholder {
  font-size: 18px;
  color: #b7b7b7;
}

</style>
