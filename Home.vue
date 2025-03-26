<template>
  <div :class="['app-container', isDarkMode ? 'dark-mode' : 'light-mode']">
    <!-- 主题切换按钮 -->
    <button class="theme-toggle-btn" @click="toggleTheme">
      <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <!--      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg >-->

      <svg v-else class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3759"
           width="256" height="256">
        <path
            d="M483.69664 870.4a368.64 368.64 0 0 1-332.58496-209.408A310.60992 310.60992 0 0 0 273.77664 686.08c166.83008 0 302.08-130.6624 302.08-291.84a290.38592 290.38592 0 0 0-156.0576-255.46752A368.64 368.64 0 1 1 483.69664 870.4z"
            fill="#FFFFFF" p-id="3760"></path>
        <path
            d="M504.17664 890.88a368.64 368.64 0 0 1-332.58496-209.408A310.6304 310.6304 0 0 0 294.25664 706.56c166.83008 0 302.08-130.6624 302.08-291.84a290.38592 290.38592 0 0 0-156.0576-255.46752A368.64 368.64 0 1 1 504.17664 890.88z"
            fill="#FFCC00" p-id="3761"></path>
      </svg>

    </button>

    <div class="profile-page">
      <div class="profile-left">
        <div class="avatar-container">
          <img src="/avatar.jpg" alt="Profile avatar" class="avatar">
        </div>
        <h1 class="username">Shang</h1>
        <p class="tagline">Stay simple.</p>
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
          <div @click="handleClickSocialCard('douyin')" class="card social-card douyin">
            <div style="display: flex;gap: 10px;align-items: center">
              <img src="/assets/img/social/douyin.png" alt="" style="height: 2rem; object-fit: cover;">
              <span class="platform-name">抖音</span>
            </div>
            <span class="follower-count">1 Followers</span>
          </div>

          <div @click="handleClickSocialCard('bilibili')" class="card social-card bilibili">
            <div style="display: flex;gap: 10px;align-items: center">
              <img src="/assets/img/social/bilibili.png" alt="" style="height: 2rem; object-fit: cover;">
              <span class="platform-name">Bilibili</span>
            </div>
            <span class="follower-count">1 Followers</span>
          </div>

          <div @click="handleClickSocialCard('github')" class="card social-card github">
            <div style="display: flex;gap: 10px;align-items: center">
              <img src="/assets/img/social/github.png" alt="" style="height: 2rem; object-fit: cover;">
              <span class="platform-name">GitHub</span>
            </div>
            <span class="follower-count">1 Followers</span>
          </div>

          <div @click="handleClickSocialCard('netease')" class="card social-card netease">
            <div style="display: flex;gap: 10px;align-items: center">
              <img src="/assets/img/social/wangyiyunyinle.png" alt=""
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
            <button class="tab-btn active">最新</button>
            <button class="tab-btn">技术</button>
            <button class="tab-btn">生活</button>
            <button class="tab-btn">随想</button>
            <button class="tab-btn">测评</button>
          </div>

          <div class="blog-posts">
            <div class="blog-post">
              <span class="post-title">咕咕了一年的新个人主页介绍</span>
              <span class="post-date">2025.03.07</span>
            </div>
            <div class="blog-post">
              <span class="post-title">所以我放弃了双持一兼谈折叠屏手机使用体验</span>
              <span class="post-date">2024.12.31</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const isDarkMode = ref(false);

// 检查当前时间并设置主题
const checkTimeAndSetTheme = () => {
  const currentHour = new Date().getHours();
  // 晚上8点到早上6点使用暗色主题
  isDarkMode.value = currentHour >= 20 || currentHour < 6;
};

// 手动切换主题
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};

onMounted(() => {
  // 初始化时检查
  checkTimeAndSetTheme();

  // 每分钟检查一次时间，以便在临界点自动切换主题
  setInterval(checkTimeAndSetTheme, 60000);
});

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
:root {
  --primary-color: #3498db;
  --secondary-color: #2980b9;
  --accent-color: #e74c3c;
  --text-color: #333;
  --text-secondary: #666;
  --bg-color: #f5f5f5;
  --card-bg: #fff;
  --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --douyin-color: #1a1a2e;
  --bilibili-color: #fb7299;
  --github-color: #24292e;
  --netease-color: #c62f2f;
  --border-radius: 12px;
  --toggle-btn-bg: #fff;
  --toggle-btn-color: #333;
}

.dark-mode {
  --primary-color: #3498db;
  --secondary-color: #2980b9;
  --accent-color: #e74c3c;
  --text-color: #f5f5f5;
  --text-secondary: #aaa;
  --bg-color: #121212;
  --card-bg: #1e1e1e;
  --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  --douyin-color: #1a1a2e;
  --bilibili-color: #fb7299;
  --github-color: #24292e;
  --netease-color: #c62f2f;
  --toggle-btn-bg: #333;
  --toggle-btn-color: #f5f5f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.app-container {
  min-height: 100vh;
  background-color: var(--bg-color);
  padding: 3vw 10vw 0;
  transition: background-color 0.3s ease;
  position: relative;
}

/* 主题切换按钮样式 */
.theme-toggle-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--toggle-btn-bg);
  color: var(--toggle-btn-color);
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
}

.theme-toggle-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.theme-toggle-btn .icon {
  transition: transform 0.3s ease;
}

.theme-toggle-btn:hover .icon {
  transform: rotate(30deg);
}

.profile-page {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 10vw;
}

.profile-left {
  flex: 0 0 250px;
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
  width: 180px;
  height: 180px;
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
  color: var(--text-color);
}

.tagline {
  font-size: 16px;
  color: var(--text-secondary);
  text-align: center;
}

.card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 20px;
  transition: all 0.3s ease;
}

.info-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-header {
  margin-bottom: 20px;
}

.info-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-color);
}

.info-description {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.info-footer {
  display: flex;
  justify-content: flex-end;
}

.btn-more {
  background-color: #f0f0f0;
  color: var(--text-secondary);
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dark-mode .btn-more {
  background-color: #333;
}

.btn-more:hover {
  background-color: #e0e0e0;
}

.dark-mode .btn-more:hover {
  background-color: #444;
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
  color: #fff;
}

.follower-count {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.douyin {
  background-color: var(--douyin-color);
}

.bilibili {
  background-color: var(--bilibili-color);
}

.github {
  background-color: var(--github-color);
}

.netease {
  background-color: var(--netease-color);
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
  color: var(--text-color);
}

.blog-content-card {
  padding: 0;
  overflow: hidden;
}

.blog-tabs {
  display: flex;
  background-color: #f5f5f5;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.dark-mode .blog-tabs {
  background-color: #2a2a2a;
}

.tab-btn {
  padding: 12px 20px;
  background: none;
  border: none;
  font-size: 16px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tab-btn.active {
  font-weight: 600;
  color: var(--text-color);
  background-color: var(--card-bg);
}

.blog-posts {
  padding: 15px 20px;
}

.blog-post {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.dark-mode .blog-post {
  border-bottom: 1px solid #333;
}

.blog-post:last-child {
  border-bottom: none;
}

.post-title {
  font-size: 16px;
  color: var(--text-color);
}

.post-date {
  font-size: 14px;
  color: var(--text-secondary);
}

/* 响应式设计 */
@media (max-width: 900px) {
  .profile-page {
    flex-direction: column;
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

  .theme-toggle-btn {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
}
</style>
