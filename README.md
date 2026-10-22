# Hia · 个人主页

2026-10-22：江小满入口统一到自有网站的原生对话，不再跳转外部平台。

`tangzhaochu.com` 的静态作品入口。内容与当前训练项目同步，采用训练网站的暗底、灰绿色强调、细边框和卡片样式。

## 内容与入口

| 入口 | 地址 | 用途 |
| --- | --- | --- |
| 练刻 | https://lianke.tangzhaochu.com/ | 开始、继续训练，本机离线记录；登录后云同步 |
| 训练网站 | https://training.tangzhaochu.com/ | 安排计划、共同训练、查看记录与复盘 |
| AI 饮食助手 | https://training.tangzhaochu.com/nutrition | 仅供虚构案例体验的饮食搭配原型 |
| 江小满 | https://home.tangzhaochu.com/contact#conversation | 当前公开的角色对话入口 |
| 本机快速记组 | https://home.tangzhaochu.com/workout?template=free | 免注册的独立记组工具，不参与云同步 |
| 数据与 AI 对话说明 | https://training.tangzhaochu.com/data-info | 统一说明本机记录、同步、公开 AI 对话与反馈渠道 |

练刻与训练网站需要同一账号和同一资料才能同步。本机快速记组的记录独立保存在当前浏览器。AI 不自动读取训练数据，公开对话不继承网站登录身份。

不公开训练项目源码，不写未核实的履历、指标或评价。反馈邮箱 `hiack842@gmail.com` 由站点所有者明确授权公开。不要把内部待办、验收材料或凭据放到页面上。

## 文件与样式

- `index.html`：首屏、四个作品入口、使用说明、关于与页脚。
- `styles.css`：集中定义配色、响应式布局、焦点与减少动态效果。背景 `#080a09`，卡片 `#111512`，强调色 `#8fae83`，与训练网站一致。
- `script.js`：渐进增强，仅更新年份与滚动后的顶栏阴影；JavaScript 关闭时所有内容和链接仍可使用。
- `favicon.svg`：同步灰绿色站标。
- `404.html`：同风格的错误页，支持回到首页与作品区。
- `CNAME`：既有自定义域名绑定，保持 `tangzhaochu.com`。

纯 HTML/CSS/JavaScript，无构建步骤与运行依赖，不加载远程图片、字体、统计或嵌入聊天。本页仅链接到对应站点；访问这些站点后的数据处理见统一说明。所有新标签页链接使用 `noopener noreferrer`。

使用系统字体回退，不下载训练网站的字体包。手机为单列卡片，宽屏为两列；内容自然滚动，避免增加作品后强行压进一屏。旧 `#projects` / `#notes` 锚点保留，并为固定顶栏预留位置。

## 本地查看与验收

```sh
python -m http.server 8080
```

访问 `http://localhost:8080/`。检查宽屏、窄屏和关闭 JavaScript：作品入口目标正确、无横向溢出、锚点标题没有被顶栏遮挡、键盘焦点可见；另打开 `/404.html` 检查返回路径。真实触屏手机仍需单独验收，浏览器尺寸模拟不等同于真机。

## 发布与域名

发布仓库为 `hiack/hiack.github.io`，GitHub Pages 从 `main` 的根目录发布。推送前完成页面验收，推送后核对 Pages 构建状态、正式页面与静态资源内容。

2026-10-22 核实：HTTP 可访问，主域名证书仍停留在 `authorization_created`，HTTPS 请求因域名不匹配而失败，未强制 HTTPS。此次内容更新不变更 DNS 或域名绑定。页面 canonical/分享 URL 使用已验证可用的 HTTP；证书恢复后再统一更新为 HTTPS。所有训练、AI 和数据说明入口本身均使用 HTTPS。

旧 `/jiang-xiaoman-web/` 项目站点保持独立，此次未改动其源代码或部署。首页改用已验证的公开对话入口，避免把旧 Demo 当作当前聊天服务。
