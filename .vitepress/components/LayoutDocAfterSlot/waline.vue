<template>
  <Waline v-if="docId"
          :serverURL="serverURL"
          :path="docId"
          :dark="isDark"
          :required-meta="['nick']"
          :reaction="true"
          :meta="['nick', 'mail']"
          :word-limit="1024"
  />
</template>
<script setup>
import * as waline from '@waline/client/component';

console.log('waline', waline)
const {Waline} = waline
import '@waline/client/style';
import {useData} from "vitepress";

const docId = ref(undefined)
const serverURL = 'https://vercel.driedrice.top';
const {frontmatter, isDark} = useData();
onMounted(() => {
  if (frontmatter.value.createDate) {
    const hostname = location.hostname;
    const dateId = frontmatter.value.createDate.replace(/[\s:-]/g, '');
    docId.value = hostname === 'localhost' ? 'localhost' + dateId : dateId;
  }
})

</script>
