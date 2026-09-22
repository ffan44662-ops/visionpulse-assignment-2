# VisionPulse：顶会热词统计平台

软件工程实践第二次作业，学号：`102400213`。

VisionPulse 面向计算机视觉论文阅读场景，聚合 CVPR、ICCV、ECCV 公开论文，提供论文导入、论文列表管理、Top 10 热门方向、关键词图谱和多年热度趋势分析。

## 1. 项目特点

- 纯前端实现，不依赖付费云服务器。
- 使用浏览器 `localStorage` 保存论文数据，刷新页面后数据仍然保留。
- 支持 JSON / CSV 批量导入、单篇手动录入、编辑、删除、模糊查询和导出。
- 论文库中没有目标论文时，可通过 OpenAlex 公开接口联网检索。
- 关键词统计按照“每篇论文的关键词字段，每个关键词每篇论文最多计数一次”计算。
- 热度趋势支持按关键词和会议范围筛选，并可播放年度切换动画。

## 2. 运行项目

直接双击 `index.html` 可以打开页面。为了保证文件读取和联网检索行为稳定，推荐使用本地静态服务器：

```bash
cd 作业二-顶会热词统计
python -m http.server 8000
```

浏览器访问 <http://localhost:8000>。

如果 Windows 没有安装 Python，也可以使用 Node.js：

```bash
npx serve . -l 8000
```

项目不需要安装 npm 依赖，也不需要数据库或后端服务。

## 3. 免费部署

推荐将本目录作为一个独立 Git 仓库，使用以下任一平台：

1. GitHub Pages：适合课程展示，仓库开启 Pages 后即可发布。
2. Cloudflare Pages：连接 GitHub 仓库后自动部署，免费额度足够本作业使用。
3. Gitee Pages：国内访问更方便，需要先完成 Gitee 账号实名认证。

完整步骤见 [部署指南.md](部署指南.md)。

项目已经附带 `.github/workflows/pages.yml`。如果将本目录作为 GitHub 仓库根目录，并在仓库设置中把 Pages 来源设为 GitHub Actions，推送到 `main` 后会自动部署。

## 4. 目录说明

| 文件 | 作用 |
| --- | --- |
| `index.html` | 页面结构、导航、表格、表单和弹窗 |
| `styles.css` | 响应式视觉样式 |
| `app.js` | 数据模型、统计逻辑、交互和 OpenAlex 检索 |
| `sample-papers.json` | 可用于批量导入的示例数据 |
| `设计文档.md` | NABCD、系统设计、数据流和测试说明 |
| `PSP表格.md` | 个人软件过程记录模板 |
| `codestyle.md` | JavaScript / HTML / CSS 编码规范 |
| `博客正文.md` | 可根据真实过程修改后发布的博客正文 |

## 5. 数据来源与使用说明

当前页面内置的是用于演示交互的精选样例论文，不代表完整会议数据集。正式实验时可以从以下公开来源获取数据：

- [DBLP](https://dblp.org/)
- [OpenAlex](https://openalex.org/)
- CVPR、ICCV、ECCV 官方会议页面

联网检索功能使用 OpenAlex 的公开 Works API。由于静态网页没有自己的后端代理，浏览器访问接口时需要网络环境允许跨域请求；即使接口不可用，本地论文管理和统计功能仍然可以正常运行。

## 6. Git 协作建议

课程要求至少 15 次真实提交、使用 `dev` 分支并合并到 `main`。建议按以下节奏提交，提交内容应以自己的实际开发过程为准：

```text
feat: initialize assignment 2 workspace
feat: add dashboard layout
feat: add local paper dataset
feat: implement keyword statistics
feat: add paper table and filters
feat: add paper create and edit flow
feat: add delete and export actions
feat: add JSON import
feat: add CSV import
feat: add OpenAlex search
feat: add keyword cloud interactions
feat: add trend chart
feat: add trend playback
style: refine responsive layout
docs: add design and deployment notes
test: verify import and CRUD flows
```

不要为了满足数量虚构提交。每次提交都应对应真实、可解释的修改。
