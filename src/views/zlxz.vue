<template>
  <div class="other-content">
    <ol>
      <li @click="down()" v-for="(item,index) in 5" :key="index">资料下载</li>
    </ol>
  </div>
</template>

<script>
import { toDown } from '../utils/down.js'
export default {
  methods: {
    down() {
      toDown()
    }
  }
}
</script>

<style>
</style>