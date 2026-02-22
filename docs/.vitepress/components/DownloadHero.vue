<template>
  <div class="hero-section sketch-typography">
    <h1 class="title">
      获取 <span class="brand-text">YuanEngine</span>
      <span class="sketch-underline"></span>
    </h1>
    <p class="subtitle">
      <span class="code-bracket">[</span>
      轻量 · 高效 · 全平台
      <span class="code-bracket">]</span>
      开启你的创作之旅
    </p>
  </div>
</template>

<style scoped>
.sketch-typography {
  --sketch-ink: var(--vp-c-text-1);
  text-align: center;
  margin-bottom: 64px;
  padding-top: 40px;
}

.title {
  position: relative;
  display: inline-block; /* 为了让下划线对齐文字 */
  font-size: 3.8rem;
  font-weight: 900;
  color: var(--sketch-ink);
  margin-bottom: 24px;
  letter-spacing: -1.5px;
  line-height: 1;
}

/* 核心技巧：利用文字描边模拟勾勒感 */
.brand-text {
  /* 在文字周围加一圈极细的白边（或背景色），增加“刻出来”的质感 */
  text-shadow: 2px 2px 0px var(--vp-c-bg-soft);
  -webkit-text-stroke: 1px var(--sketch-ink);
}

/* 手绘感下划线 */
.sketch-underline {
  position: absolute;
  bottom: -8px;
  left: 5%;
  width: 90%;
  height: 4px;
  background: var(--sketch-ink);
  /* 关键：利用 border-radius 和 transform 模拟手绘的不规则感 */
  border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%;
  transform: rotate(-1.5deg);
  opacity: 0.8;
}

/* 副标题：工程图纸风格 */
.subtitle {
  margin-top: 16px;
  color: var(--sketch-ink);
  font-size: 1.2rem;
  font-family: var(--vp-font-family-mono); /* 等宽字体 */
  font-weight: 500;
  opacity: 0.7;
}

.code-bracket {
  font-weight: 800;
  color: var(--sketch-ink);
  margin: 0 5px;
  opacity: 0.5;
}

/* 悬浮效果：标题轻微震动，像手绘稿在抖动 */
.title:hover .sketch-underline {
  transform: rotate(0.5deg) scaleX(1.05);
  transition: transform 0.2s ease;
}

/* 适配移动端 */
@media (max-width: 640px) {
  .title {
    font-size: 2.4rem;
  }
  .subtitle {
    font-size: 0.95rem;
    padding: 0 20px;
  }
}
</style>