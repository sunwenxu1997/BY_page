<template>
  <div class="details">
    <h2>教学视频</h2>
    <video id="video" controls width="100%" height="100%" preload loop muted>
      <source
        src="https://waaark.com/wp-content/uploads/2016/05/waaark-melville-design.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.details {
  width: var(--wWidth);
  margin: 0 auto;
  padding: 10px 20px;
  min-height: 400px;
}
video {
  outline: none;
  border: 1px dashed #ccc;
}
h2 {
  text-align: center;
  margin-bottom: 10px;
  color: #5a5a5a;
  font-size: 20px;
}
</style>