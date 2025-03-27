<template>
  <div class="page">
    <slot></slot>
    <n-config-provider :theme :locale :date-locale>
      <div class="contentContainer">
        <div @click="handleClickBlog(item)" class="content" v-for="item in dataList" :key="item._id">
          <span>{{ item.title }}</span>
          <span>{{ item.createDate.substring(0, 10) }}</span>
        </div>
      </div>
      <n-pagination v-model:page="pageNum"
                    :display-order="['quick-jumper', 'pages', 'size-picker']"
                    show-quick-jumper
                    show-size-picker
                    :page-count="Math.ceil(props.sourceData.length / pageSize)"
                    :page-size="pageSize"
                    :page-sizes="[10, 20, 50]"
                    :show-size-picker="true"
                    :show-quick-jumper="true"
                    @update:page="handleChangePageNum"
                    @update:page-size="handleChangePageSize"
      />

    </n-config-provider>
  </div>
</template>
<script setup>

import {paginateArray} from '@/.vitepress/utils/index.js'
import {useNaiveUiConfig} from "@/.vitepress/store/app-store.js";
import {useData} from "vitepress";

const props = defineProps({
  sourceData: {
    type: Array,
    required: true
  },
});

const {isDark} = useData()
const {theme, locale, dateLocale} = useNaiveUiConfig(isDark);
const pageNum = ref(1);
const dataList = ref([]);
const pageSize = ref(10);

function handleChangePageNum(val) {
  pageNum.value = val;
  loadList()
}

onMounted(() => {
  loadList()
})

function loadList() {
  dataList.value = paginateArray(props.sourceData, pageNum.value, pageSize.value);
}

function handleChangePageSize(val) {
  pageNum.value = 1;
  pageSize.value = val;
  loadList()
}

function handleClickBlog(item) {
  window.open(item.url, '_blank');
}
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 10vw 0;
  height: calc(100vh - var(--vp-nav-height));
}

.contentContainer {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  background-color: var(--vp-c-bg);
}

.content {
  display: flex;
  justify-content: space-between;
  background-color: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
}
</style>
