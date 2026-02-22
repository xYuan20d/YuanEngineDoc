<template>
  <div class="spec-section sketch-style">
    <div class="spec-header">
      <span class="spec-icon">::</span>
      <h4>系统要求 / SYSTEM REQUIREMENTS</h4>
    </div>
    
    <ul class="spec-list">
      <li>
        <span class="label">操作系统</span>
        <span class="dot-leader"></span>
        <span class="value">Windows 10+ / macOS 12+</span>
      </li>
      <li>
        <span class="label">图形显卡</span>
        <span class="dot-leader"></span>
        <span class="value">支持 WebGL 2.0 / WebGPU</span>
      </li>
      <li>
        <span class="label">运行内存</span>
        <span class="dot-leader"></span>
        <span class="value">最少 8GB RAM</span>
      </li>
      <li>
        <span class="label">网络环境</span>
        <span class="dot-leader"></span>
        <span class="value">需稳定访问 GitHub 资源</span>
      </li>
    </ul>
    
    <div class="spec-footer-line"></div>
  </div>
</template>

<style scoped>
.sketch-style {
  --sketch-ink: var(--vp-c-text-1);
  --line-weight: 2px;
}

.spec-section {
  margin: 32px 0;
  padding: 0 16px;
  position: relative;
}

.spec-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.spec-icon {
  font-family: var(--vp-font-family-mono);
  font-weight: 900;
  color: var(--sketch-ink);
}

h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--sketch-ink);
  text-transform: uppercase;
}

.spec-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.spec-list li {
  display: flex;
  align-items: baseline; /* 对齐文字底边 */
  margin-bottom: 12px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.95rem;
  color: var(--sketch-ink);
}

.label {
  font-weight: 700;
  white-space: nowrap;
  opacity: 0.9;
}

/* 关键：打点连接符，很有老式打印机或技术手册的感觉 */
.dot-leader {
  flex-grow: 1;
  margin: 0 12px;
  border-bottom: 2px dotted var(--sketch-ink);
  opacity: 0.3;
}

.value {
  font-weight: 500;
  text-align: right;
  opacity: 0.8;
}

.spec-footer-line {
  margin-top: 16px;
  width: 60px;
  height: 4px;
  background: var(--sketch-ink);
  /* 这里的形状微调，使其看起来像手绘的一抹 */
  border-radius: 2px;
  opacity: 0.6;
}

/* 鼠标悬浮时，左侧基准线长高或变亮 */
.spec-section:hover {
  border-left-color: var(--vp-c-brand);
  transition: border-color 0.3s ease;
}

/* 适配移动端：点点连接符在手机上可能太长，改为换行显示 */
@media (max-width: 480px) {
  .spec-list li {
    flex-direction: column;
    margin-bottom: 16px;
  }
  .dot-leader {
    display: none;
  }
  .value {
    text-align: left;
    margin-top: 4px;
    font-size: 0.85rem;
  }
}
</style>