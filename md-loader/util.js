// 编译 以及 一些公共方法
const {parse, compileScript, compileTemplate} = require('@vue/compiler-sfc')

function stripTemplate(content) {
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

// 生成内置组件字符串
function genInlineComponentText(html, script, source) {
  const {descriptor} = parse(source)
  const compiled = compileTemplate(descriptor)
  script = script.trim()
  if (script) {
    script = script.replace(/export\s+default/, 'const democomponentExport =');
  } else {
    script = 'const democomponentExport = {}';
  }
  return `(function(){
    ${formatCode(compiled.code)}
    ${script}
    return {
      render,
      ...democomponentExport
    }
  })()`
}

// 格式化code
function formatCode(code) {
  const tag = 'export'
  const tagLen = tag.length
  const start = code.indexOf(tag)
  return code.slice(start + tagLen)
} 

module.exports = {
  stripTemplate,
  stripScript,
  genInlineComponentText
}