<template>
  <div class="other-content">
    <ol>
      <li @click="down()" v-for="(item,index) in zlxzList" :key="index">{{item.title}}</li>
    </ol>
  </div>
</template>

<script>
import { toDown } from '../utils/down.js'
export default {
data(){
    return{
        zlxzList:window.global.zlxzList
    }
},
  methods: {
    down() {
      toDown()
    }
  }
}
</script>

<style>
</style>