# 🚀 快速开始

欢迎开启你的 **YuanEngine** 开发之旅！本章节将引导你完成基础环境的搭建与编辑器的初次运行。

## 🛠️ 前置准备

在正式开始之前，请确保你的开发环境满足以下要求：

### 1. 软件环境

* **编辑器：** 我们强烈建议使用 [Visual Studio Code](https://code.visualstudio.com/)。
* **开发插件：** 为了获得最佳的 Vue 开发体验，请务必在 VS Code 中安装 **Volar** 插件。

### 2. 知识储备

YuanEngine 采用现代 Web 技术栈构建，我们假定你已经具备以下基础知识：

* **JavaScript (ES6+)：** 用于编写游戏核心逻辑。
* **Vue 3：** 用于构建高性能的游戏 UI 界面。

::: tip 学习建议
如果你对 Vue 3 还不熟悉，建议先阅读 [Vue 官方文档](https://cn.vuejs.org/)，这能让你在编写 UI 时更加游刃有余。
:::

---

## 📥 获取引擎

你可以从我们的发布页面下载最新的稳定版本：

> **[点击前往下载 YuanEngine](/download)**

---

## 🖥️ 首次运行

下载并解压后，启动 `YuanEngine.exe` (或对应平台的二进制文件)。

### 编辑器主界面

当你看到如下界面时，说明引擎已成功启动：

![编辑器主界面](/editorMainUI.png)

---

## ⚠️ 关键注意事项：网络环境

::: danger 关于模型显示为黑色的问题
YuanEngine 的高动态范围贴图（HDR）默认从 `raw.githubusercontent.com` 加载。

**由于网络环境差异，可能会导致以下现象：**

* **资源拉取中：** 模型暂时呈现黑色。
* **拉取失败：** 资源加载超时，模型将持续保持黑色且丢失光影效果。

**解决方案：**
请确保你的网络环境可以正常访问 GitHub 资源，或配置相应的代理环境（科学上网）以确保资源顺畅加载。
:::

---

## 🎉 准备就绪！

如果你能看到带光影效果的模型，那么恭喜你！引擎已经完全可以正常使用。

**接下来，你可以尝试：**

* [创建一个简单的 3D 场景](https://www.google.com/search?q=/guide/first-scene)
* [编写你的第一段游戏逻辑](https://www.google.com/search?q=/guide/scripting)
* [了解 V-GPPL 可视化编程](https://www.google.com/search?q=/guide/v-gppl)
