<template>
  <div class="more-card">
    <div class="header">
      <span class="title">{{title}}</span>
      <span @click="toMore" class="m">更多>></span>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    title: String
  },
  methods: {
    toMore() {
      this.$emit('toMore')
    }
  }
}
</script>

<style  scoped>
.more-card {
  width: 100%;
  margin-bottom: 30px;
}
.more-card .header {
  height: 40px;
  padding: 0 15px;
  background: var(--color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.more-card .header .m {
  font-size: 12px;
  cursor: pointer;
}
.more-card .header .title {
  font-weight: bold;
}
.more-card .content {
  border: 1px solid #ccc;
  border-top: 1px solid transparent;
}
.more-card .content p {
  margin: 10px 20px;
  cursor: pointer;
}
.more-card .content p:hover {
  color: var(--color);
  text-decoration: underline;
}
</style>