<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1-1" type="success">
      <router-view />
    </el-alert>
  </div>
</template>

<script>

export default {
  name: "Menu1-1",
  data() {
    return {
    }
  },
  created() {
    console.log(this.$route)
    console.log(this.$route.path)
  },
  methods: {
  }
}
</script>

