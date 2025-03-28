<template>
  <Waline :serverURL="serverURL" :path="path"/>
</template>
<script setup>
import {Waline} from '@waline/client/component';
import {computed} from 'vue';

import '@waline/client/style';
import {useData} from "vitepress";

const {frontmatter} = useData();
const docId = frontmatter.value.createDate.replaceAll(' ', '').replaceAll(':', '').replaceAll('-', '');
const serverURL = 'https://vercel.driedrice.top';
const path = computed(() => docId);
</script>