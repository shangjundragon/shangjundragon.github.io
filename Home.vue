<template>
  <div class="profile-container">
    <!-- 左侧个人信息 -->
    <div class="profile-left">
      <div class="avatar-container">
        <img class="avatar" src="/avatar.jpg" alt="Profile avatar" />
      </div>
      <h1 class="username">Mr.Shang</h1>
      <p class="tagline">Stay simple.</p>
    </div>

    <!-- 右侧内容区 -->
    <div class="profile-right">
      <!-- 社交媒体卡片 -->
      <div class="cards-container">
        <div class="card dark-card">
          <div class="card-content">
            <h3>星空 @idealclover</h3>
            <p>打工人</p>
            <p>全栈开发者</p>
            <div class="card-footer">
              <span>关注 · 了解更多</span>
            </div>
          </div>
        </div>

        <div class="card blue-card">
          <div class="card-content">
            <h3>知乎</h3>
            <div class="followers">2879 Followers</div>
          </div>
        </div>

        <div class="card pink-card">
          <div class="card-content">
            <h3>Bilibili</h3>
            <div class="followers">1634 Followers</div>
          </div>
        </div>

        <div class="card dark-card blog-card">
          <div class="card-content">
            <h3>博客</h3>
            <p>记录技术/生活/随想/翻译</p>
            <p>https://idealclover.top</p>
            <div class="card-footer">
              <span>查看博客 · 联系本人</span>
            </div>
          </div>
        </div>

        <div class="card github-card">
          <div class="card-content">
            <h3>GitHub</h3>
            <div class="followers">786 Followers</div>
          </div>
        </div>

        <div class="card red-card">
          <div class="card-content">
            <h3>网易云</h3>
            <div class="followers">81 Followers</div>
          </div>
        </div>
      </div>

      <!-- 博客文章区 -->
      <div class="blog-section">
        <div class="section-header">
          <h3>📝 博客文章</h3>
        </div>

        <div class="tabs">
          <div class="tab active">最新</div>
          <div class="tab">技术</div>
          <div class="tab">生活</div>
          <div class="tab">随想</div>
          <div class="tab">翻译</div>
        </div>

        <div class="article-list">
          <div class="article-item">
            <div class="article-title">站稳了一年的新个人主页介绍</div>
            <div class="article-date">2025.03.07</div>
          </div>
          <div class="article-item">
            <div class="article-title">所以我教教子女辈——建设折腾新手机使用体验</div>
            <div class="article-date">2024.12.31</div>
          </div>
          <div class="article-item">
            <div class="article-title">好评榜：轻松生成高质 / 服务评价</div>
            <div class="article-date">2024.11.17</div>
          </div>
          <div class="article-item">
            <div class="article-title">2024 Q3 总结：关键重量新生命关季</div>
            <div class="article-date">2024.11.09</div>
          </div>
          <div class="article-item">
            <div class="article-title">运营博客包制作经验分享：打造个人运营 "微生态"</div>
            <div class="article-date">2024.09.30</div>
          </div>
        </div>

        <div class="more-button">
          <button>查看更多</button>
        </div>
      </div>

      <!-- 个人项目区 -->
      <div class="projects-section">
        <div class="section-header">
          <h3>👋 个人项目</h3>
        </div>

        <div class="projects-container">
          <div class="project-card blue-project">
            <h4>精简壁纸 (Android & iOS)</h4>
          </div>
          <div class="project-card green-project">
            <h4>个人日记</h4>
          </div>
          <div class="project-card orange-project">
            <h4>个人食堂</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body {
  background-color: #121212;
  color: #e0e0e0;
  line-height: 1.6;
}

.profile-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 左侧个人信息 */
.profile-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.avatar-container {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.username {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
}

.tagline {
  font-size: 16px;
  color: #a0a0a0;
  text-align: center;
}

/* 右侧内容区 */
.profile-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 卡片样式 */
.cards-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.card {
  border-radius: 12px;
  overflow: hidden;
  padding: 15px;
  color: white;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.card p {
  font-size: 14px;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.8);
}

.card-footer {
  margin-top: auto;
  font-size: 12px;
  text-align: right;
  color: rgba(255, 255, 255, 0.7);
}

.followers {
  font-size: 16px;
  font-weight: 500;
}

/* 卡片颜色 */
.dark-card {
  background-color: #1e2430;
}

.blue-card {
  background-color: #0077cc;
}

.pink-card {
  background-color: #fb7299;
}

.github-card {
  background-color: #24292e;
}

.red-card {
  background-color: #c62828;
}

/* 博客文章区 */
.blog-section {
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 15px;
}

.section-header {
  margin-bottom: 15px;
}

.tabs {
  display: flex;
  overflow-x: auto;
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
}

.tab {
  padding: 8px 15px;
  cursor: pointer;
  white-space: nowrap;
}

.tab.active {
  color: white;
  border-bottom: 2px solid white;
}

.article-list {
  display: flex;
  flex-direction: column;
}

.article-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #333;
}

.article-title {
  flex: 1;
  font-size: 14px;
}

.article-date {
  font-size: 14px;
  color: #888;
  margin-left: 10px;
}

.more-button {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.more-button button {
  background-color: #333;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
}

/* 项目区 */
.projects-section {
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 15px;
}

.projects-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.project-card {
  border-radius: 10px;
  padding: 20px;
  color: white;
}

.blue-project {
  background-color: #1976d2;
}

.green-project {
  background-color: #2e7d32;
}

.orange-project {
  background-color: #e65100;
}

/* 响应式设计 */
@media (min-width: 768px) {
  .profile-container {
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
    padding: 40px;
  }

  .profile-left {
    position: sticky;
    top: 40px;
    width: 200px;
    flex-shrink: 0;
  }

  .profile-right {
    flex: 1;
  }

  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .blog-card {
    grid-column: span 2;
  }

  .projects-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .profile-container {
    padding: 60px;
  }

  .profile-left {
    width: 250px;
  }

  .avatar-container {
    width: 150px;
    height: 150px;
  }

  .username {
    font-size: 28px;
  }

  .tagline {
    font-size: 18px;
  }
}
</style>