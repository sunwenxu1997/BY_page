<template>
  <div class="zxcs-content">
    <ol>
      <li v-for="(item,index) in zxcsList" :key="index">
        <p class="title">{{item.title}}</p>
        <el-radio-group v-model="item.radio">
          <el-radio v-for="c in item.arr" :key="c.label" :label="c.label">{{c.text}}</el-radio>
        </el-radio-group>
      </li>
    </ol>
    <div style="text-align:center">
      <el-button style="margin:20px auto" type="primary" @click="submit">提交测试</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zxcsList: window.global.zxcsList
    }
  },
  methods: {
    submit() {
      this.$message.success('提交成功')
    }
  }
}
</script>

<style scoped>
.zxcs-content {
  margin: 0 auto;
  width: var(--wWidth);
  border: 2px dashed #ccc;
  padding: 10px 40px;
  /* min-height: 70vh; */
}
.zxcs-content .title {
  margin-bottom: 10px;
}
.zxcs-content li {
  margin: 10px 0;
  margin-bottom: 20px;
}
</style>