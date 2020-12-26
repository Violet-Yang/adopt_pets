<template>
  <div>
    <top :is-comm="true" />
    <vue-editor style="padding-top: 200px" v-model="content"></vue-editor>
  </div>
</template>

<script>
//import the editor
// import { Editor, EditorContent } from 'tiptap'
import { VueEditor, Quill } from "vue2-editor";
// import 'codemirror/lib/codemirror.css'; // codemirror 스타일
// import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
// import Editor from '@toast-ui/editor';
// import 'highlight.js/styles/github.css'; // code block highlight 스타일

// toast ui 설치 시 highlight js 역시 자동으로 설치된다.
// import { Editor, EditorContent } from 'tiptap'

export default {
name: "Community-write",
  components: {
    VueEditor
  },
  data () {
    return {
      content: "<h1>Some initial content</h1>"
    }
  }
}
</script>

<style scoped>
.quillWrapper .ql-snow.ql-toolbar {
  padding-top: 20px;
}
</style>
