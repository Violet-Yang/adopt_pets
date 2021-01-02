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
export default {
  name: "Title",
  props: ["btnText"],
  data() {
    return {


    };
  },
  methods : {
    sendInfo () {

    }
  }
};
</script>

<style scoped>


</style>
