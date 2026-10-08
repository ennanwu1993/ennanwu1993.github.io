# Ennan Wu 吴恩楠 · Personal homepage

Static site for GitHub Pages. No build step: everything is plain HTML, CSS and JavaScript.

## 文件结构

```
index.html              全部页面内容（中英文都在这里）
assets/css/style.css    样式
assets/js/main.js       中英文切换、视频点击加载
assets/img/             照片与分享图
assets/fonts/           自托管字体（国内访问不依赖 Google Fonts）
```

## 如何修改内容

- 每段文字都有英文和中文两个版本，分别写在 `class="en"` 和 `class="zh"` 的标签里，改的时候两处都改。
- 新增一篇论文：在 `index.html` 里找到 `<ol class="pubs">`，复制一个 `<li>…</li>` 改内容即可。
- 新增一条动态：在 `id="news"` 下的 `<ol class="dated">` 顶部加一个 `<li>`。
- 换照片：替换 `assets/img/ennan-wu.jpg` 和 `assets/img/ennan-wu.webp`（竖版 2:3）。

## 部署

仓库命名为 `ennanwu1993.github.io`，在 Settings → Pages 里选择从 `main` 分支根目录部署，几分钟后即可通过 https://ennanwu1993.github.io 访问。
