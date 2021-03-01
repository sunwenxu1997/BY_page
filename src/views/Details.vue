<template>
  <div class="details">
      <div  v-html="$route.query.content"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.details{
    width: var(--wWidth);
    margin: 0 auto;
    border: 1px dashed #ccc;
    padding: 10px 20px;
    min-height: 400px;
}
</style>