<template>
  <div id="app">
    <HeadNav />
    <router-view />
  </div>
</template>
<script>
import HeadNav from "@/components/HeadNav.vue";

export default {
  components: {
    HeadNav,
  },
};
</script>
<style>
:root {
  --color: #5c45d1;
  --wWidth:1000px;
}
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
