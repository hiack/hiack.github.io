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

## 部署到 GitHub Pages

以下是把这个目录发布到 GitHub Pages 的步骤，按顺序执行即可；本仓库不包含任何自动化部署配置。

1. 建仓库（建议 `hiack/tangzhaochu-home` 或直接用 `<用户名>.github.io`），推送本目录内容到默认分支。
2. 仓库 → Settings → Pages → Source 选 `Deploy from a branch`，分支选默认分支，目录选 `/ (root)`。
3. 自定义域名：在仓库根目录新建一个内容为 `tangzhaochu.com` 的 `CNAME` 文件（本目录故意没有预置这个文件，等域名确定后再加）。同时在 DNS 处配置：
   - 顶点域名 `A` 记录 → `185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`
   - 或 `ALIAS`/`ANAME` → `<用户名>.github.io`
   - `www` 用 `CNAME` → `<用户名>.github.io`
4. 勾选 Enforce HTTPS（证书签发可能要等几分钟到几十分钟）。
5. `404.html` 放在根目录，GitHub Pages 会自动用它作为自定义错误页。

注意：江小满 Demo 和这个主页是**两个独立的 Pages 站点**，主页里只是链接到它。主页中的江小满 Demo 链接使用根相对路径 `/jiang-xiaoman-web/`，会跟随主页所在域名解析：转移前在 `hiack.github.io` 下指向 `hiack.github.io/jiang-xiaoman-web/`，转移后在 `tangzhaochu.com` 下指向 `tangzhaochu.com/jiang-xiaoman-web/`，不需要再改链接。

关于转移后的地址：按 GitHub Pages 的规则，用户站点 `hiack.github.io` 绑定自定义域名 `tangzhaochu.com` 后，没有自己自定义域名的项目站点会改为在 `tangzhaochu.com/<仓库名>` 下提供。因此，在江小满仓库移除它自己的自定义域名、并重新运行 Pages 构建之后，江小满 Demo 的地址是 `tangzhaochu.com/jiang-xiaoman-web/`（旧的 `hiack.github.io/jiang-xiaoman-web/` 可能会重定向到这里）。这一步与主页的域名转移有先后顺序，两者都完成后新地址才生效。

## 本地查看

`file://` 直接打开 `index.html` 就可以。想更接近线上，起一个静态服务器：

```bash
python -m http.server 8080        # 然后访问 http://localhost:8080/
# 或者
npx --yes serve .
```

## 站点自身的约定

- 不加载任何外部资源：没有 CDN、没有第三方字体、没有远程图片。图形全是内联 SVG 或 CSS。
- 没有统计脚本、Cookie 和表单。
- 全键盘可用，`:focus-visible` 焦点环始终可见。
- 跟随系统 `prefers-reduced-motion`：信号条、气泡浮动、滚动进入动画全部关闭。
- 滚动进入动画是 CSS 原生的 `animation-timeline: view()`，浏览器不支持时内容直接正常显示（不做 JS 兜底，避免「JS 挂了内容就消失」）。
