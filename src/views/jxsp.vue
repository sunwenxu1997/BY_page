<template>
  <div class="other-content">
    <ol>
      <li @click="toDetails()" v-for="(item,index) in jxspList" :key="index">{{item.title}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
     jxspList:window.global.jxspList
    }
  },
  methods: {
    toDetails() {
      this.$router.push({
        path: '/video'
      })
    }
  }
}
</script>

<style>
</style>