<template>
  <div class="loader"></div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Loader extends Vue {

}
</script>
<style scoped lang="scss">
  .loader {
    position: fixed;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 80px;
    height: 80px;
    &::after {
      content: '';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #2c3e50;
      border-color: #2c3e50 transparent;
      animation: go 1.2s linear infinite;
    }
  }

  @keyframes go {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
