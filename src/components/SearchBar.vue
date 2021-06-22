<template>
  <div class="search-wrapper">
    <n-input
      v-model:value="searchContent"
      round
      size="large"
      placeholder="搜索关键字..."
      @keyup.enter="searchData"
    >
      <template #prefix>
        <n-dropdown
          trigger="click"
          :options="searchEngineOpts"
          @select="handlerSelct"
        >
          <n-button class="btn-style" :keyboard="false" text>
            <template #icon>
              <n-icon>
                <search />
              </n-icon>
            </template>
            {{ nowSearchEngine.label }}
          </n-button>
        </n-dropdown>
      </template>
    </n-input>
  </div>
</template>


<script>
import { defineComponent, ref } from "vue";
import { Search } from "@vicons/ionicons5";

export default defineComponent({
  name: "SearchBar",
  components: {
    Search,
  },

  setup() {
    let nowSearchEngine = ref({
      label: "谷歌",
      key: "google",
    });

    let searchContent = ref("");

    const searchEngineOpts = [
      {
        label: "谷歌",
        key: "google",
      },
      {
        label: "百度",
        key: "baidu",
      },
      {
        label: "必应",
        key: "bing",
      },
      {
        label: "秘迹",
        key: "miji",
      },
    ];

    function handlerSelct(val) {
      const selected = searchEngineOpts.find((item) => {
        return val === item.key;
      });

      if (selected) {
        nowSearchEngine.value = selected;
      }
    }

    function searchData() {
      console.log(searchContent);
      if (searchContent.value) {
        let newHref = "";
        switch (nowSearchEngine.value.key) {
          case "google":
            newHref = https://www.google.com/search?q=${searchContent.value}`;
            break;

          case "baidu":
            newHref = `https://www.baidu.com/s?wd=${searchContent.value}`;
            break;

          case "bing":
            newHref = `https://cn.bing.com/search?q=${searchContent.value}`;
            break;

          case "miji":
            newHref = `https://mijisou.com/?q=${searchContent.value}`;
            break;
        }

        window.open(newHref, "_blank");
      }
    }

    return {
      nowSearchEngine,
      searchEngineOpts,
      handlerSelct,
      searchData,
      searchContent,
    };
  },
});
</script>


<style scoped>
.search-wrapper {
  margin-top: 15px;
  width: 80%;
  margin-left: 20px;
}

.btn-style {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
