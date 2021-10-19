// import Vue from 'vue'
// import App from './app.vue'

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import { createApp } from 'vue'
// import App from './app.vue'
import App from './test.md'
const app = createApp(App)
app.mount('#app')

// "vue-loader": "^16.5.0",
// 1. md => html markdown-it
// import App from './app.vue'
// console.log(App)

// const md2vue = require('../md-loader/index.js')
// const code = `
//   ### 按钮1

//   :::demo 没有边框和背景色的按钮。
//   \`\`\`html
//   <h1>{{name}}</h1>

//   <script>
//   export default {
//     setup() {
//       const name = ref('jgmiu')
//       return {
//         name
//       }
//     },
//   }
//   </script>
//   \`\`\`
//   :::
// `

// let result = md2vue(code)
// console.log(result)
