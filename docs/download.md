---
sidebar: false
next: false
prev: false
layout: page
---

<div class="download-page-container">

<DownloadHero />

<DownloadBox />

<div class="download-info-grid">
  <SecondaryDownloads />
  <SystemRequirements />
</div>

</div>

<style>
.download-page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px;
}

.download-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

/* 适配移动端 */
@media (max-width: 640px) {
  .download-page-container {
    padding: 24px 16px;
  }
}
</style>