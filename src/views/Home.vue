<template>
  <div class="home">
    <div class="top">
      <div class="banner">
        <el-carousel height="250px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="hot">
        <div class="title">热门推荐</div>
        <ul>
          <li
            @click="toDetails(item.content)"
            v-for="item in rmtjList"
            :key="item.id"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      rmtjList: window.global.rmtjList,
    };
  },
  methods: {
    toDetails(content) {
      this.$router.push({
        name: "details",
        params: {
          content: content,
        },
      });
    },
  },
};
</script>
<style scoped>
.el-carousel {
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 250px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<style scoped>
.home {
  margin: 0 auto;
  width: var(--wWidth);
}
.top {
  display: flex;
  /* background: red; */
  justify-content: space-between;
  margin: 20px 0;
}
.banner {
  flex-grow: 1;
  text-align: center;
  margin-right: 20px;
}
.hot {
  flex-grow: 1;
  border: 1px solid #ccc;
  padding: 0px 20px;
}
.hot .title {
  font-weight: bold;
  color: var(--color);
  padding: 10px 0;
  border-bottom: 1px dashed #ccc;
  margin-bottom: 10px;
}
ul {
  margin-left: 20px;
}
ul li {
  cursor: pointer;
  margin-bottom: 10px;
  color: var(--color);
}
ul li:hover {
  text-decoration: underline;
}
</style>
