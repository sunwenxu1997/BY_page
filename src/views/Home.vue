<template>
  <div class="home">
    <div class="top">
      <div class="banner">
        <el-carousel height="250px" indicator-position="outside">
          <el-carousel-item v-for="item in imgList" :key="item">
            <!-- <h3 class="small">{{ item }}</h3> -->
            <img :src="item.img" alt />
            <div class="cover">{{item.title}}</div>
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
          >{{ item.title }}</li>
        </ul>
      </div>
    </div>
    <more-card :title="'新闻公告'" @toMore="toMore('xwgg')">
      <div class="content">
        <p
          @click="toDetails(item.content)"
          v-for="(item,index) in xwggList"
          :key="index"
        >{{item.title}}</p>
      </div>
    </more-card>
    <more-card :title="'资料下载'" @toMore="toMore('zlxz')">
      <div class="content">
        <p v-for="(i,index) in 5" :key="index" @click="down">资料下载</p>
      </div>
    </more-card>
  </div>
</template>

<script>
import MoreCard from '../components/MoreCard.vue'
import { toDown } from '../utils/down.js'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    MoreCard
  },
  data() {
    return {
      rmtjList: window.global.rmtjList,
      xwggList: window.global.xwggList,
      imgList: window.global.bannerList
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
    },
    toMore(type) {
      this.$router.push({
        name: type
      })
    },
    down() {
      toDown()
    }
  }
}
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
  position: relative;
}
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner .cover {
  text-align: left;
  width: 100%;
  padding: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.548);
  color: white;
  z-index: 99;
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
