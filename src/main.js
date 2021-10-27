import { createApp } from 'vue'
// import App from './app.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

import App from './app.vue'
import DemoBlock from './DemoBlock.vue'
const app = createApp(App)

// 定义pre指令
app.directive('highlight', {
  mounted(el) {
    hljs.highlightBlock(el)
  }
})


// 注册demo-block全局组件
app.component('demo-block', DemoBlock)
app.mount('#app')



const md2vue = require('../md-loader/index.js')
const code = `
  ### 按钮1

  :::demo 没有边框和背景色的按钮。
  \`\`\`html
  <h1>{{name}}</h1>

  <script>
  export default {
    setup() {
      const name = ref('jgmiu')
      return {
        name
      }
    },
  }
  </script>
  \`\`\`
  :::
`

let result = md2vue(code)
console.log(result)