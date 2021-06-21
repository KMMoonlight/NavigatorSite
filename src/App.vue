<template>
  <div class="app-wrapper">
    <div class="sider">
      <sider-logo />
      <sider-bar @categoryClick="useCategory" />
    </div>
    <div class="content">
      <search-bar />
      <category-panel :siteList="displaySiteList" />
    </div>
  </div>
</template>

<script>
import SiderLogo from "./components/SiderLogo.vue";
import SiderBar from "./components/SiderBar.vue";
import SearchBar from "./components/SearchBar.vue";
import CategoryPanel from "./components/CategoryPanel.vue";
import { siteList } from "./site";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "App",
  components: {
    SiderLogo,
    SiderBar,
    SearchBar,
    CategoryPanel,
  },
  setup() {
    const useSiteList = siteList;
    let nowCategory = ref("fish");
    let displaySiteList = ref([]);

    function useCategory(category) {
      nowCategory.value = category;
    }

    watch(
      nowCategory,
      () => {
        const listItem = useSiteList.find((item) => {
          return item.category === nowCategory.value;
        });

        displaySiteList.value = listItem ? listItem.siteList : [];
      },
      {
        immediate: true,
      }
    );

    return {
      nowCategory,
      displaySiteList,
      useCategory,
    };
  },
});
</script>


<style scoped>
.app-wrapper {
  display: flex;
  height: 100vh;
}

.sider {
  width: 15%;
}

.content {
  width: 85%;
}
</style>