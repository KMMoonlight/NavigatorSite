<template>
  <div class="panel-wrapper">
    <n-card
      v-for="(item, index) in siteList"
      :key="index"
      class="card-style"
      hoverable
      @click="onCardClick(item)"
    >
      <n-avatar size="large" :src="item.logo" class="avatar-style" />
      <div class="title-wrapper">
        <div class="title-style">{{ item.title }}</div>
      </div>
      <div class="description-style">
        {{ item.description }}
      </div>
    </n-card>
  </div>
</template>


<script>
import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  name: "CategoryPanel",
  components: {},
  props: ["siteList"],

  setup(props) {
    function onCardClick(item) {
      window.open(item.url, "_blank");
    }

    return {
      ...toRefs(props),
      onCardClick,
    };
  },
});
</script>


<style scoped>
.panel-wrapper {
  margin-top: 20px;
  height: calc(100vh - 100px);
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
}

.panel-wrapper::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}

.panel-wrapper::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #828282;
}

.panel-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #ededed;
}

.card-style {
  width: 450px;
  height: 220px;
  margin: 20px;
  border-radius: 8px;
}

.card-style:hover {
  cursor: pointer;
}

.avatar-style {
  width: 58px;
  height: 58px;
}

.title-style {
  font-weight: bold;
  font-size: 20px;
  margin-top: 12px;
  color: #2a2f36;
}

.title-style:before {
  content: "";
  width: 0%;
  height: 2px;
  position: absolute;
  bottom: 1px;
  background-color: black;
  transition: 0.5s ease-in-out;
}

.title-style:hover:before {
  content: "";
  width: 30%;
  height: 2px;
  position: absolute;
  bottom: 1px;
  background-color: black;
}

.title-wrapper {
  position: relative;
}

.description-style {
  margin-top: 12px;
  font-size: 13px;
  line-height: 20px;
  color: #6c7a89;
}
</style>