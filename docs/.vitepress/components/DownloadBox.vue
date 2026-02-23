<template>
  <div class="download-card sketch-style">
    <svg class="card-logo-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path 
        class="logo-path outline" 
        d="M30,30 L50,55 L70,30 L80,40 L50,80 L20,40 Z" 
      />
      <path 
        class="logo-path inner" 
        d="M20,40 L50,55 L80,40 M50,55 L50,80" 
      />
      <circle class="logo-dot" cx="50" cy="55" r="3.5" />
    </svg>
    
    <div class="card-content">
    <h3>YuanEngine 核心下载</h3>
    <p class="meta-info">
      <span class="sketch-tag">{{ version }}</span>
      <span class="divider"> / </span>
      <span class="sketch-tag">更新于: {{ updateAt }}</span>
    </p>
    
    <button 
      @click="download" 
      class="download-btn sketch-btn"
      :disabled="isFetching || !downloadUrl"
    >
      <span v-if="isFetching">正在检查更新...</span>
      <span v-else-if="isDownloading">正在拉起下载...</span>
      <span v-else>立即下载 (Windows)</span>
    </button>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 响应式变量
const version = ref('...');
const updateAt = ref('...');
const downloadUrl = ref('');
const isFetching = ref(true);
const isDownloading = ref(false);

// 格式化日期的简单工具函数
const formatDate = (isoString) => {
  return new Date(isoString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

const fetchLatestRelease = async () => {
  try {
    const response = await fetch('https://api.github.com/repos/xYuan20d/YuanEngine/releases/latest');
    const data = await response.json();
    
    // 填充版本和时间
    version.value = data.tag_name;
    updateAt.value = formatDate(data.published_at);

    // 预存下载地址
    const exeAsset = data.assets.find(asset => 
      asset.name.endsWith('.exe') && !asset.name.endsWith('.blockmap')
    );
    
    if (exeAsset) {
      downloadUrl.value = exeAsset.browser_download_url;
    }
  } catch (error) {
    console.error('获取版本信息失败:', error);
    version.value = '获取失败';
  } finally {
    isFetching.value = false;
  }
};

const download = () => {
  if (!downloadUrl.value) {
    alert('暂无可用安装包');
    return;
  }

  isDownloading.value = true;
  
  // 此时无需再 fetch，直接触发预存好的链接
  const link = document.createElement('a');
  link.href = downloadUrl.value;
  // 给 link 增加一些属性确保触发下载
  link.setAttribute('download', '');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // 模拟一个下载开始后的反馈
  setTimeout(() => {
    isDownloading.value = false;
  }, 1000);
};

// 初始化获取
onMounted(fetchLatestRelease);
</script>

<style scoped>
.sketch-style {
  --sketch-ink: var(--vp-c-text-1); 
  --sketch-bg: var(--vp-c-bg-soft);
}

/* --- 卡片容器 --- */
.download-card.sketch-style {
  position: relative;
  padding: 40px 32px;
  margin: 24px 0;
  background: var(--sketch-bg);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  /* 卡片边框也加粗一点，呼应 Logo 的厚重感 */
  border: 3px solid var(--sketch-ink);
  border-radius: 12px;
  box-shadow: 4px 4px 0 0 rgba(128, 128, 128, 0.2);
}

.download-card.sketch-style:hover {
  box-shadow: 8px 8px 0 0 var(--sketch-ink);
  transform: translate(-3px, -3px);
}

/* --- 文字样式 --- */
.card-content {
  position: relative;
  z-index: 2;
}

h3 {
  margin: 0 0 8px 0;
  color: var(--sketch-ink);
  font-size: 1.6rem;
  font-weight: 800;
  border: none;
}

.meta-info {
  margin: 0 0 24px 0;
  color: var(--sketch-ink);
  opacity: 0.8;
  font-family: var(--vp-font-family-mono);
  font-size: 1rem;
  font-weight: 600;
}

/* --- 按钮 (厚重线条风) --- */
.sketch-btn {
  background: transparent;
  color: var(--sketch-ink);
  padding: 12px 26px;
  font-weight: 800;
  cursor: pointer;
  /* 按钮边框同样加粗到 3px */
  border: 3px solid var(--sketch-ink);
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 var(--sketch-ink);
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sketch-btn:hover {
  background: var(--sketch-ink);
  color: var(--vp-c-bg); 
  box-shadow: 0 0 0 0 var(--sketch-ink);
  transform: translate(4px, 4px);
}

/* --- SVG 动画 (还原 4.0 粗细) --- */
.card-logo-bg {
  position: absolute;
  right: -20px;
  bottom: -30px;
  width: 280px;
  height: 280px;
  opacity: 0.12; 
  transform: rotate(12deg);
  pointer-events: none;
  transition: all 0.6s ease;
}

.logo-path {
  fill: none;
  stroke: var(--sketch-ink);
  /* 关键：还原为你原始的 4 */
  stroke-width: 4; 
  stroke-linecap: round;
  stroke-linejoin: round;
  
  /* 线条变粗了，dasharray 也要相应调大一点点确保画完 */
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
  animation: drawLine 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.inner {
  /* 内部线条也统一为粗线，更有工业设计草图的味道 */
  stroke-width: 4;
  animation-delay: 0.6s;
}

.logo-dot {
  fill: var(--sketch-ink);
  opacity: 0;
  transform: scale(0);
  transform-origin: 50px 55px;
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.8s forwards;
}

.download-card:hover .card-logo-bg {
  opacity: 0.25; /* 悬浮时让粗线条更明显 */
  transform: rotate(8deg) scale(1.15);
}

@keyframes drawLine { to { stroke-dashoffset: 0; } }
@keyframes popIn { to { opacity: 1; transform: scale(1); } }

/* 移动端适配 */
@media (max-width: 640px) {
  .download-card.sketch-style {
    flex-direction: column;
    padding: 32px 24px;
  }
  .sketch-btn { width: 100%; text-align: center; }
  .card-logo-bg { width: 180px; height: 180px; right: -10px; bottom: -10px; }
}
</style>