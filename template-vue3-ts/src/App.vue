<template>
  <div>
    <h1>Vue 3 Base</h1>
    <span>svg component:</span>
    <!-- <Logo style="width: 100px" /> -->
    <span>svg image:</span>
    <div :style="{
      display: 'inline-block',
      width: '100px',
      height: '100px',
      background: `url(${LogoImage}) no-repeat`,
    }"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<script lang="ts" setup>
import LogoImage from './logo.svg'
</script>

<style lang="less">
body {
  padding: 10px;
}
</style>
