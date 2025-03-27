<template>
  <n-config-provider :theme :locale :date-locale>
    <div class="contentContainer">

    </div>
    <n-pagination v-model:page="page"
                  :display-order="['quick-jumper', 'pages', 'size-picker']"
                  :page-count="100"
                  show-quick-jumper
                  show-size-picker
    />
  </n-config-provider>
</template>
<script setup>
import {data as allData} from '@/.vitepress/data-js/getAllUnExcludeDataAndSort.data.js'

const {isDark} = useData()
import {useNaiveUiConfig} from "@/.vitepress/store/app-store.js";
import {useData} from "vitepress";

const {theme, locale, dateLocale} = useNaiveUiConfig(isDark);
const page = ref(1);

onMounted(() => {
  console.log('allData', allData)
})

</script>
<style scoped>
.contentContainer {
  height: 50vh;
  width: 100%;
  border: 1px solid red;
  margin-bottom: 1rem;
}
</style>