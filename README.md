# Hia · 个人主页

`tangzhaochu.com` 的静态主页：一张名片 + 两个项目的入口。纯 HTML/CSS，加一个很小的渐进增强脚本。

## 文件

| 文件 | 作用 |
| --- | --- |
| `index.html` | 主页：首屏、项目卡片、关于这个合集、页脚 |
| `styles.css` | 全部样式（设计变量集中在文件顶部 `:root`） |
| `script.js` | 只有两件事：页脚年份、滚动后给顶栏加分隔线。不加载也能正常使用 |
| `favicon.svg` | 站标（内联几何图形，不使用字体，16px 下也清楚） |
| `404.html` | GitHub Pages 的自定义 404 页面 |
| `README.md` | 本文件 |

没有构建步骤、没有 `package.json`、没有依赖。直接把这些文件放到域名根目录即可。

## 内容边界（重要）

站点上只写公开可确认的事实，请保持：

- **可以**链接：健身网站、江小满 Demo、江小满源码仓库（公开）、GitHub 主页。
- **不要**链接或提及健身项目的源码仓库：它是私有的，页面上只保留网站入口，不写仓库是否公开的说明。
- 江小满卡片只写面向访客的一句话（这是一个可以聊天的互动网站）：不写 iframe、Dify、代理、密钥等实现细节，也不对访客数据处理做任何声明。
- **不要**添加职业、职位、公司、邮箱、电话、数据指标、用户评价、履历等未经确认的信息。
- 目前公开的项目只有这两个，不要新增第三个项目卡片。
- 显示名「Hia」是暂定占位，待确认后再统一替换（见下）。

## 想改的时候

**改显示名（Hia）**：「Hia」目前只是暂定占位，未经用户确认；确认后按下面 6 处统一替换即可。

1. `index.html` → `<title>`、`og:title`、JSON-LD 的 `name`
2. `index.html` → 顶栏 `.brand__text`
3. `index.html` → 首屏 `<h1 class="hero__name" id="hero-title">`
4. `index.html` → 页脚 `.footer__name`
5. 404.html → `<title>` 和顶栏 `.brand__text`
6. `favicon.svg` → `aria-label`（字母本身是路径，要换字母得改 `<path d="...">`）

**改配色**：只改 `styles.css` 顶部 `:root` 里的变量。橘色相关的有 4 个：`--accent`（按钮/焦点）、`--accent-hover`、`--accent-ink`（浅底小字）、`--accent-bright`（深色卡片上的橘色）。

**改文案**：项目卡片的文字都在 `index.html` 的 `<article class="card ...">` 里，一张卡片一块，顺序是 kicker → 标题 → 一句话 → 正文 → 标签 → 按钮。

**改页内锚点**：`#projects` / `#notes` 挂在外层 `<section>` 上，跳转落点是整个栏目的顶部。桌面端（≥900px）由 `@media (min-width: 900px)` 里的 `html { scroll-padding-top: var(--header-h) }` 把落点对齐到 sticky 顶栏下沿（1528×740 时栏目正好是 y69–740 一屏）；手机端仍是 `calc(var(--header-h) + clamp(12px, 3vh, 23px))`，保留 12–23px 的呼吸空隙。CSS 里 `:target .reveal` 会跳过目标栏目的入场动画，避免动画位移影响落点计算。

**改页面节奏（桌面端「一个栏目 = 一屏」）**：`styles.css` 的 `@media (min-width: 900px)` 里，`.hero` 和 `.section` 用 `min-height: calc(100vh - var(--header-h))` 各占满一屏、内容垂直居中；栏目内的字号、留白、卡片图案高度都写成 `clamp(…, Nvh, …)`，窗口变矮时一起收缩，所以点「项目」后标题、两张卡片和卡片里的按钮能同时出现在一屏内。改这些数值时，先确认 `#projects` 一屏还放得下（1528×740 的余量约 100px）。

- `:root` 的 `--header-h: 69px` 是顶栏在文档流里的高度（`.site-header__inner` 的 `min-height: 68px` + 1px 分隔线）。改顶栏高度、或让顶栏在小宽度下换行，就必须同步改它，否则每屏的高度和锚点落点都会偏。
- 宽度不足 900px（手机、竖屏平板）时这些规则不生效，页面回到普通文档流，一屏放不下就正常滚动；`@media (max-height: 620px)` 是给「矮窗口」再收一档图案和留白的保险。
- 内容真比一屏高时 `min-height` 会被内容撑开，`display: flex` + `min-height` 不会把内容裁掉（没有用 `height: 100vh`）。

## 部署与维护（GitHub Pages）

站点已经上线，以下是当前状态和维护要点，不需要再走一遍初始化配置。

**当前部署**

- 发布仓库：公开仓库 `hiack/hiack.github.io`（用户站点仓库），分支 `main`，目录 `/ (root)`，Source 为 `Deploy from a branch`。
- 推送 `main` 就是发布：branch-published 站点在推送后自行更新，没有单独的构建步骤或 CI。
- 自定义域名：根目录已有内容为 `tangzhaochu.com` 的 `CNAME` 文件，由 GitHub Pages 自动创建；不要删除或改写它，否则域名会解绑。
- DNS：顶点域名的四条 `A` 记录已指向 GitHub Pages（`185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`），是既有配置，不要重复添加。
- HTTPS：证书签发仍在外部进行中，尚未确认已强制 HTTPS；签发完成前不要按「HTTPS 已生效」来写文档或做跳转配置。
- 404：根目录的 `404.html` 由 GitHub Pages 自动用作自定义错误页。
- 江小满 Demo：该项目站点已移除自己的自定义域名并重新构建，没有自定义域名时按 GitHub Pages 规则挂在用户站点域名下，即 `tangzhaochu.com/jiang-xiaoman-web/`。主页用的是根相对路径 `/jiang-xiaoman-web/`，会跟随主页域名解析，这里不需要改动；两个站点相互独立，主页只做链接。

**日常维护**

- 改内容：编辑本目录文件后提交并推送到 `main`，线上随后更新。
- 不要给江小满项目仓库重新绑定自定义域名；一旦它有自己的域名，就会脱离用户站点的 `/<仓库名>/` 路径，主页里现有的根相对链接会失效。
- 域名解析保持现状，只在真的要迁移域名时才改 DNS。

## 本地查看

`file://` 直接打开 `index.html` 就可以。想更接近线上，起一个静态服务器：

```bash
python -m http.server 8080        # 然后访问 http://localhost:8080/
# 或者
npx --yes serve .
```

## 站点自身的约定

- 不加载任何外部资源：没有 CDN、没有第三方字体、没有远程图片。图形全是内联 SVG 或 CSS。
- 桌面端（≥900px 宽）一个栏目占满一屏：内容垂直居中，尺寸随视口高度收缩；手机和竖屏平板仍是普通文档流，一屏放不下就滚动。
- 没有统计脚本、Cookie 和表单。
- 全键盘可用，`:focus-visible` 焦点环始终可见。
- 跟随系统 `prefers-reduced-motion`：信号条、气泡浮动、滚动进入动画全部关闭。
- 滚动进入动画是 CSS 原生的 `animation-timeline: view()`，浏览器不支持时内容直接正常显示（不做 JS 兜底，避免「JS 挂了内容就消失」）。
