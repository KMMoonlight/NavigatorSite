<template>
  <div class="sider-bar-wrapper">
    <div class="bar-item-first">
      <n-button
        size="large"
        round
        color="#5858fa"
        class="btn-style"
        @click="handlerCategoryClick('fish')"
      >
        <template #icon>
          <n-icon>
            <earth />
          </n-icon>
        </template>
        <span class="btn-title">摸鱼常用</span>
      </n-button>
    </div>
    <div class="bar-item">
      <n-button
        size="large"
        round
        color="#00bfff"
        class="btn-style"
        @click="handlerCategoryClick('tools')"
      >
        <template #icon>
          <n-icon>
            <build />
          </n-icon>
        </template>
        <span class="btn-title">网站工具</span>
      </n-button>
    </div>

    <div class="bar-item">
      <n-button
        size="large"
        color="#ffbf00"
        round
        class="btn-style"
        @click="handlerCategoryClick('game')"
      >
        <template #icon>
          <n-icon>
            <fish />
          </n-icon>
        </template>
        <span class="btn-title">游戏娱乐</span>
      </n-button>
    </div>

    <div class="bar-item">
      <n-button
        size="large"
        color="#ff0000"
        round
        class="btn-style"
        @click="handlerCategoryClick('develop')"
      >
        <template #icon>
          <n-icon>
            <book />
          </n-icon>
        </template>
        <span class="btn-title">开发学习</span>
      </n-button>
    </div>

    <div class="bar-item">
      <n-button
        size="large"
        color="#6a0888"
        round
        class="btn-style"
        @click="handlerCategoryClick('design')"
      >
        <template #icon>
          <n-icon>
            <pencil />
          </n-icon>
        </template>
        <span class="btn-title">设计美化</span>
      </n-button>
    </div>

    <div class="bar-item">
      <n-button
        size="large"
        color="#04b45f"
        round
        class="btn-style"
        @click="handlerCategoryClick('news')"
      >
        <template #icon>
          <n-icon>
            <newspaper />
          </n-icon>
        </template>
        <span class="btn-title">资讯新闻</span>
      </n-button>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref } from "vue";
import { Earth, Build, Fish, Book, Pencil, Newspaper } from "@vicons/ionicons5";

export default defineComponent({
  name: "SiderBar",
  components: {
    Earth,
    Build,
    Fish,
    Book,
    Pencil,
    Newspaper
  },
  emits: ["categoryClick"],

  setup(props, { emit }) {
    function handlerCategoryClick(category) {
      emit("categoryClick", category);
    }

    return {
      handlerCategoryClick,
    };
  },
});
</script>

<style scoped>
.sider-bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bar-item-first {
  margin-top: 26px;
}

.bar-item {
  margin-top: 60px;
}

.btn-style {
  width: 160px;
  height: 50px;
}

.btn-title {
  font-family: v-mono;
  font-weight: bold;
  font-size: 16px;
}
</style>
