<template>
  <div class="other-content">
    <ol>
      <li
        @click="toDetails(item.content)"
        v-for="(item,index) in xwggList"
        :key="index"
      >{{item.title}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xwggList: window.global.xwggList
    }
  },
  methods: {
    toDetails(content) {
      this.$router.push({
        path: '/details',
        query: {
          content: content
        }
      })
    }
  }
}
</script>

<style>

</style>