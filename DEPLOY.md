# CEROMIX 独立站 — 部署指南

## 🚀 方案 A：Netlify 免费部署（推荐，5分钟上线）

1. 打开 https://app.netlify.com
2. 注册/登录（可用 GitHub 账号）
3. 点击「Add new site」→「Deploy manually」
4. 把整个 `C:\Users\王康乐\Documents\独立站建站` 文件夹拖进去
5. 等30秒，你的网站就上线了
6. 在 Site settings → Domain management 里：
   - 先用 Netlify 给的免费子域名（xxx.netlify.app）
   - 或绑定你自己的域名

## 🌐 方案 B：Cloudways WordPress 主机

1. 注册 https://www.cloudways.com
2. 选 DigitalOcean $14/月 方案
3. 选 WordPress 应用
4. 服务器位置选 Frankfurt（德国受众）/ Singapore（亚洲受众）
5. 装好 WordPress 后：
   - 进入 Appearance → Themes → Add New → Upload
   - 上传 `ceromix-wp-theme` 文件夹的 zip 包
   - 激活主题

## 📁 方案 C：任何支持 PHP 的共享主机

1. 购买主机（SiteGround / Hostinger / 阿里云虚拟主机）
2. 上传 WordPress 到主机
3. 把 `ceromix-wp-theme/` 上传到 `/wp-content/themes/`
4. 后台激活主题

## 🔧 部署后必做检查清单

- [ ] 所有页面能正常访问
- [ ] 图片加载正常
- [ ] 移动端响应式正常
- [ ] 提交 sitemap.xml 到 Google Search Console
- [ ] 设置 Google Analytics
- [ ] 配置 SSL 证书（Netlify 自动提供）

## 📊 SEO 提交

部署完成后：
1. 打开 https://search.google.com/search-console
2. 添加你的域名
3. 提交 sitemap.xml
4. 等待 Google 收录（通常 1-3 天）
