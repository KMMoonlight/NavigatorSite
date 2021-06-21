<template>
  <div class="sider-logo">
    <div class="logo-wrapper">
      <n-icon size="40" color="#222222">
        <navigate />
      </n-icon>
    </div>
    <div class="sider-logo-title">KMMoonlight的导航</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Navigate } from "@vicons/ionicons5";

export default defineComponent({
  name: "SiderLogo",

  components: {
    Navigate,
  },

  setup() {},
});
</script>

<style scoped>
.logo-wrapper {
  width: 50px;
  height: 50px;
  margin: 10px;
  display: flex;
  align-items: center;
}

.sider-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sider-logo-title {
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>
