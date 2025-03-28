<template>
  <Waline v-if="docId"
          :serverURL="serverURL"
          :path="docId"
          :dark="isDark"
  />
</template>
<script setup>
import {Waline} from '@waline/client/component';
import '@waline/client/style';
import {useData} from "vitepress";

const docId = ref(undefined)
const serverURL = 'https://vercel.driedrice.top';
const {frontmatter, isDark} = useData();
if (frontmatter.value.createDate) {
  docId.value = frontmatter.value.createDate.replaceAll(' ', '').replaceAll(':', '').replaceAll('-', '');
}

</script>
