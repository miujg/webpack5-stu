<template>
      <section class="content element-doc">
        <h3>按钮1</h3>
<demo-block>
        <div><p>没有边框和背景色的按钮。</p>
</div>
        <element-demo0 />
        <pre><code class="language-html">&lt;h1&gt;{{name}}&lt;/h1&gt;

&lt;script&gt;
export default {
  setup() {
    const name = ref('jgmiu')
    return {
      name
    }
  },
}
&lt;/script&gt;
</code></pre>
</demo-block>
      </section>
    </template>
    <script>
      import { ref, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"
      export default {
        name: 'component-doc',
        components: {
          "element-demo0": (function(){
     function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("h1", null, _toDisplayString(_ctx.name), 1 /* TEXT */))
}
    const democomponentExport = {
  setup() {
    const name = ref('jgmiu')
    return {
      name
    }
  },
}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>