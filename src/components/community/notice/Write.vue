<template>
  <div>
    <top :is-comm="true" />

    <img
      style="max-width: 1920px; position: relative"
      src="../../../../static/image/공지사항이미지.png"
    />
<!--    <div style="position: fixed; top: 191px; left: 821px" class="main_img_text">-->
<!--      공지사항-->
<!--    </div>-->

    <div style="display: flex; justify-content: center; margin-bottom: 137px">
      <div style="width: 1200px">
        <tap-in-img :tap-cnt2="true" is-notice="true" />
        <div>
          <vue-editor style="padding-top: 200px" v-model="content"/>

          <div style="margin-top: 40px; display: flex">
            <div
              @click="goNoticeBoard()"
              class="flex-all-center"
              style="
                width: 95px;
                height: 50px;
                background-color: #898989;
                color: #ffffff;
                border-radius: 7px;
                cursor: pointer;
              "
            >
              목록
            </div>
            <div
              class="flex-all-center"
              style="
                margin-left: 25px;
                width: 95px;
                height: 50px;
                background-color: #66cdcc;
                color: #ffffff;
                border-radius: 7px;
              "
            >
              저장
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom />
  </div>
</template>

<script>
// import { Editor, EditorContent } from 'tiptap'
import { VueEditor, Quill } from "vue2-editor";
// import 'codemirror/lib/codemirror.css'; // codemirror 스타일
// import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
// import Editor from '@toast-ui/editor';
// import 'highlight.js/styles/github.css'; // code block highlight 스타일

// toast ui 설치 시 highlight js 역시 자동으로 설치된다.
// import { Editor, EditorContent } from 'tiptap'

export default {
  name: "Write",
  components: {
    VueEditor,
  },
  data() {
    return {
      content: "<h1>Some initial content</h1>",
    };
  },
  methods : {

    goNoticeBoard(){ //목록으로가기
      this.$router.push({path : "/noticeBoard"})
    }
  }
};
</script>

<style scoped>

.main_img_text {
  max-width: 240px;
  height: 69px;
  text-align: center;
  font: normal normal 800 60px/35px NanumGothic;
  letter-spacing: -1.5px;
  color: #ffffff;
  opacity: 1;
}

</style>
