<template>
  <!--  <Waline :serverURL="serverURL" :path="path"/>-->
  <component :is="ddd" :serverURL="serverURL" :path="path"/>
</template>
<script setup>
import {computed} from 'vue';

import '@waline/client/style';
import {useData} from "vitepress";

const tmp = ref(null)
const ddd = ref(null)
watch(() => tmp.value, async val => {
  const {Waline} = await import('@waline/client/component')
  ddd.value = Waline
}, {immediate: true})
const {frontmatter} = useData();
const docId = frontmatter.value.createDate.replaceAll(' ', '').replaceAll(':', '').replaceAll('-', '');
const serverURL = 'https://vercel.driedrice.top';
const path = computed(() => docId);
</script>