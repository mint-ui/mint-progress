<template>
  <mint-progress></mint-progress>
  <mint-progress>
    <div slot="start">start</div>
    <div slot="end">end</div>
  </mint-progress>
  <mint-progress :bar-height="3" :value="20"></mint-progress>
</template>

<style>
  body {
    margin: 20px;
  }

  .mt-progress {
    margin-bottom: 20px;
  }
</style>

<script>
  import { MintProgress } from '../src/index.js';

  export default {
    name: 'app',

    components: {
      MintProgress
    }
  };
</script>
