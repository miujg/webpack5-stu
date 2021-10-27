<template>
  <div class="main">
    <test />
  </div>
</template>

<script>
import DemoBlock from './DemoBlock.vue'
import Test from './test.md'
export default {
  components: { Test },
  setup() {
    
  },
}
</script>

<style lang="scss">
@import './reset.scss';
.main {
  width: 800px;
  position: relative;
  top: 50px;
  left: 50px;
}
</style>