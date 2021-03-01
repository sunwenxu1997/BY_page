<template>
  <div class="other-content">
    <ol>
      <li @click="toDetails()" v-for="(item,index) in 3" :key="index">教学视频</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   xwggList: window.global.xwggList
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