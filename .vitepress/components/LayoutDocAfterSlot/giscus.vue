<template>
  <Giscus
      :key="page.filePath"
      repo="shangjundragon/shangjundragon.github.io"
      repo-id="R_kgDOOOWIdQ"
      category="Announcements"
      category-id="DIC_kwDOOOWIdc4Coirb"
      :theme="isDark ? 'dark' : 'light'"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      loading="lazy"
      lang="zh-CN"
      crossorigin="anonymous"
  />
</template>

<script setup>
import Giscus from "@giscus/vue";
import {watch} from "vue";
import {inBrowser, useData} from "vitepress";

const {isDark, page} = useData();

watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
      .querySelector("giscus-widget")
      ?.shadowRoot?.querySelector("iframe");

  iframe?.contentWindow?.postMessage(
      {giscus: {setConfig: {theme: dark ? "dark" : "light"}}},
      "https://giscus.app"
  );
});
</script>
