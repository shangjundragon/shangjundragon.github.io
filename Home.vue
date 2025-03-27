<template>
  <div class="app-container">

    <div class="profile-page">
      <div class="profile-left">
        <div class="profile-left-container">
          <div class="avatar-container">
            <img src="/avatar.jpg" alt="Profile avatar" class="avatar">
          </div>
          <h1 class="username">Shang</h1>
          <p class="tagline">Stay simple.</p>
        </div>
      </div>

      <div class="profile-right">
        <div class="card info-card">
          <div class="info-header">
            <h2 class="info-title">Shang</h2>
            <p class="info-description">打工人</p>
            <p class="info-description">全栈开发者/技术债收藏家/BUG猎人</p>
          </div>
          <div class="info-footer">
            <button class="btn-more">关于我 · 了解更多</button>
          </div>
        </div>

        <div class="social-cards">

          <div @click="handleClickSocialCard('github')" class="card social-card github">
            <div style="display: flex;gap: 10px;align-items: center">
              <img src="/img/social/github.png" alt="" style="height: 2rem; object-fit: cover;">
              <span class="platform-name">GitHub</span>
            </div>
            <span class="follower-count">1 Followers</span>
          </div>
          <div @click="handleClickSocialCard('bilibili')" class="card social-card bilibili">
            <div style="display: flex;gap: 10px;align-items: center">
              <img src="/img/social/bilibili.png" alt="" style="height: 2rem; object-fit: cover;">
              <span class="platform-name">Bilibili</span>
            </div>
            <span class="follower-count">1 Followers</span>
          </div>

          <div @click="handleClickSocialCard('douyin')" class="card social-card douyin">
            <div style="display: flex;gap: 10px;align-items: center">
              <img src="/img/social/douyin.png" alt="" style="height: 2rem; object-fit: cover;">
              <span class="platform-name">抖音</span>
            </div>
            <span class="follower-count">1 Followers</span>
          </div>

          <div @click="handleClickSocialCard('netease')" class="card social-card netease">
            <div style="display: flex;gap: 10px;align-items: center">
              <img src="/img/social/wangyiyunyinle.png" alt=""
                   style="height: 2rem; object-fit: cover;">
              <span class="platform-name">网易云</span>
            </div>
            <span class="follower-count">1 Followers</span>
          </div>
        </div>

        <div class="card blog-card">
          <div class="blog-header">
            <h2 class="blog-title">
              <span class="blog-icon">📝</span> 博客文章
            </h2>
          </div>
        </div>

        <div class="card blog-content-card">
          <div class="blog-tabs">
            <button class="tab-btn" :class="{ activeTab: activeTabValue === tab.value }" :key="tab.value"
                    @click="handleClickTab(tab)"
                    v-for="tab in tabs">{{ tab.name }}
            </button>
          </div>

          <div class="blog-posts">
            <div class="blog-post-container">
              <div style="cursor: pointer;position: relative;" @click="handleClickBlog(blog)" class="blog-post"
                   :key="index"
                   v-for="(blog, index) in activeTabLatestBlogList">
                <img v-if="activeTabValue === 'latest' && index === 0 "
                     style="position: absolute;left: 0;top: 0" src="/svg/tu-ding.svg"
                     alt="" width="30">
                <span class="post-title">{{ blog.title }}</span>
                <span class="post-date">{{ blog.createDate.substring(0, 10) }}</span>
              </div>
            </div>
            <div class="info-footer">
              <button @click="handleClickShowMore" class="btn-more">查看更多</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {data as blogData} from '@/.vitepress/data-js/getHomePageBlogData.data.js'
import { useRouter} from "vitepress";

const router = useRouter();


function handleClickShowMore() {
  if (activeTabValue.value === 'latest') {
    router.go(`/src/all`)
  } else {
    router.go(`/src/${activeTabValue.value}/all`)
  }

}

const tabs = ref([
  {name: '最新', value: 'latest'},
  {name: '技术', value: 'technology'},
  {name: '生活', value: 'life'},
  {name: '美食', value: 'goodfood'},
  {name: '随想', value: 'randomthoughts'},
  {name: '测评', value: 'test'},
]);
const activeTabValue = ref('latest');

function handleClickBlog(blog) {
  router.go(blog.url)
}

const activeTabLatestBlogList = ref(blogData.latest);

function handleClickTab(tab) {
  activeTabValue.value = tab.value;
  if (tab.value === 'latest') {
    activeTabLatestBlogList.value = blogData.latest;
  } else {
    activeTabLatestBlogList.value = blogData.group[tab.value];
  }
}

const socialNameLinkConfig = {
  douyin: ' https://v.douyin.com/Pr7xUhbU_ao/ 7@5.com :0pm',
  bilibili: 'https://space.bilibili.com/418906839',
  github: 'https://github.com/shangjundragon',
  netease: 'https://music.163.com/#/user/home?id=1632792213',
}

function handleClickSocialCard(socialName) {
  window.open(socialNameLinkConfig[socialName], '_blank');
}
</script>

<style>



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--vp-c-bg);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.app-container {
  min-height: 100vh;
  padding: 3vw 10vw 0;
  transition: background-color 0.3s ease;

}

.theme-toggle-btn:hover .icon {
  transform: rotate(30deg);
}

.profile-page {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 8vw;
  position: relative;
}

.profile-left {
  flex: 0 0 250px;
}

.profile-left-container {
  padding: 5rem 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.avatar-container {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.username {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
}

.tagline {
  font-size: 16px;
  text-align: center;
}

.card {
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 20px;
  transition: all 0.3s ease;
}

.info-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);;

}

.info-header {
  margin-bottom: 20px;
}

.info-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.info-description {
  font-size: 14px;
  line-height: 1.5;
}

.info-footer {
  display: flex;
  justify-content: flex-end;
}

.btn-more {
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-hover-bg);
}


.social-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.social-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.social-card:hover {
  transform: translateY(-5px);
}

.platform-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
}

.follower-count {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.douyin {
  background-color: #1a1a2e;
}

.bilibili {
  background-color: #fb7299;
}

.github {
  background-color: #24292e;
}

.netease {
  background-color: #c62f2f;
}

.blog-card {
  padding: 15px 20px;
}

.blog-header {
  display: flex;
  align-items: center;
}

.blog-icon {
  margin-right: 8px;
}

.blog-title {
  font-size: 18px;
  font-weight: 600;
}

.blog-content-card {
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
}

.blog-tabs {
  display: flex;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.tab-btn {
  padding: 12px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tab-btn.activeTab {
  font-weight: 600;
  background-color: var(--vp-c-success-2);
}

.blog-posts {
  padding: 15px 20px;
  background-color: var(--vp-c-bg);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

}

.blog-post-container {
  min-height: 1rem;
  max-height: 28rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.blog-post {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: var(--border-radius);
}


.post-title {
  font-size: 16px;
}

.post-date {
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 900px) {
  .profile-page {
    flex-direction: column;
    gap: 0;
  }

  .profile-left-container {
    padding: 0;
    position: static;
  }

  .profile-left {
    flex: 0 0 auto;
    margin-bottom: 30px;
  }

  .social-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .social-cards {
    grid-template-columns: 1fr;
  }

  .profile-left-container {
    padding: 0;
    position: static;
  }

  .blog-post {
    flex-direction: column;
    gap: 8px;
  }

  .blog-tabs {
    overflow-x: auto;
    white-space: nowrap;
  }

  .tab-btn {
    padding: 12px 15px;
  }

}
</style>
