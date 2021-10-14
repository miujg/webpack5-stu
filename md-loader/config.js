// https://markdown-it.github.io/
// 配置 markdown-it
const MarkdownIt = require('markdown-it')
const mdPlugin = require('./containers.js')
const overWriteFenceRule = require('./fence');

const md = MarkdownIt({
  html: true
})

// 加载插件
mdPlugin(md)
overWriteFenceRule(md)
module.exports = md