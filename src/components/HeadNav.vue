<template>
  <div class="headNav">
    <div class="top-img">
      <img src="@/assets/img/waller.jpg" alt="" />
    </div>
    <div class="nav">
      <div class="list">
        <span
          class="tab"
          :class="{ active: $route.path == item.router }"
          @click="$router.push({ path: item.router })"
          v-for="item in tabList"
          :key="item.title"
          >{{ item.title }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList:window.global.navTab,
    };
  },
};
</script>

<style scoped>
.headNav {
  width: 100%;
  margin-bottom: 20px;
}
.top-img {
  width: var(--wWidth);
  height: 100px;
  overflow: hidden;
  margin: 0 auto;
}
.top-img img {
  width: 100%;
  position: relative;
  top: -300px;
}
.nav {
  width: 100%;
  color: white;
  background: var(--color);
}
.nav .list {
  margin: 0 auto;
  width: var(--wWidth);
  height: 100%;
}
.tab {
  cursor: pointer;
  user-select: none;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  font-size: 17px;
  font-weight: bold;
}
.tab.active {
  background: white;
  color: var(--color);
}
.tab:hover {
  background: white;
  color: var(--color);
}
</style>