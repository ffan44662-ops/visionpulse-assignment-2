# 华为云 CodeArts 仓库与网页部署指南

本指南针对 `作业二-顶会热词统计` 这个纯前端项目，说明如何完成：

1. 在华为云 CodeArts Repo 创建以学号命名的代码仓库。
2. 使用 `dev` 分支开发，并合并到 `main`。
3. 产生不少于 15 次真实、可解释的 Git 提交。
4. 发布 `v1.0.0` Release。
5. 将静态网页部署到华为云 ECS，通过公网 IP 访问。

本指南不要求你修改页面代码。项目本身可以直接放到仓库根目录。

## 一、准备工作

需要准备：

- 华为云账号。
- 已完成实名认证的 CodeArts 账号。
- 本机安装 Git。
- 一台可以被公网访问的华为云 ECS。
- ECS 安全组放行 `80` 端口。
- 本项目目录：`D:\软件工程\作业二-顶会热词统计`

如果只是使用免费静态平台，不需要执行 ECS 部署部分；但课程要求提交华为云 CodeArts 仓库时，仍然需要完成仓库创建和代码推送。

## 二、创建 CodeArts 项目和仓库

### 2.1 创建项目

1. 登录华为云控制台。
2. 打开 **CodeArts**。
3. 进入项目管理页面，点击 **新建项目**。
4. 项目名称填写：

```text
102400213
```

项目描述可填写：

```text
软件工程实践第二次作业：VisionPulse 顶会热词统计
```

### 2.2 创建代码仓库

1. 进入刚刚创建的 CodeArts 项目。
2. 打开 **代码托管 / CodeArts Repo**。
3. 点击 **新建仓库**。
4. 仓库名称填写：

```text
visionpulse-assignment-2
```

5. 创建完成后复制仓库 HTTPS 地址，例如：

```text
https://codearts.../codehub/xxx/visionpulse-assignment-2.git
```

请把真实地址填回博客正文中的 `【待补充：CodeArts 仓库地址】`。

## 三、配置本地 Git

打开 PowerShell：

```powershell
git config --global user.name "你的姓名或学号"
git config --global user.email "你的邮箱"
git config --global init.defaultBranch main
git config --global --list
```

## 四、把本地项目上传到 CodeArts

进入作业二目录：

```powershell
cd "D:\软件工程\作业二-顶会热词统计"
```

初始化仓库并提交：

```powershell
git init
git branch -M main
git status
git add .
git commit -m "feat: initialize assignment 2 workspace"
```

添加远程仓库：

```powershell
git remote add origin <你的CodeArts仓库HTTPS地址>
git remote -v
git push -u origin main
```

如果 CodeArts 要求登录，按照网页提示输入账号、密码或个人访问令牌。不要把密码写进命令、脚本或博客。

## 五、创建 dev 分支并进行开发

```powershell
git switch -c dev
git push -u origin dev
```

以后每完成一个真实功能，就执行：

```powershell
git status
git add .
git commit -m "feat: add dashboard layout"
git push origin dev
```

## 六、推荐提交拆分

作业要求不少于 15 次提交。下面是推荐拆分，必须根据真实开发过程调整，不要一次性复制命令制造提交记录。

```text
1.  feat: initialize assignment 2 workspace
2.  feat: add dashboard layout
3.  feat: add local paper dataset
4.  feat: implement keyword statistics
5.  feat: add paper table and filters
6.  feat: add paper create and edit flow
7.  feat: add delete and export actions
8.  feat: add JSON import
9.  feat: add CSV import
10. feat: add OpenAlex search
11. feat: add keyword cloud interactions
12. feat: add trend chart
13. feat: add trend playback
14. style: refine responsive layout
15. docs: add design and deployment notes
16. test: verify import and CRUD flows
```

查看提交记录：

```powershell
git log --oneline --decorate --graph --all
```

## 七、合并 dev 到 main

推荐在 CodeArts 网页中发起合并请求：

1. 打开 CodeArts Repo。
2. 进入 **合并请求 / Pull Request**。
3. 点击 **新建合并请求**。
4. 源分支选择 `dev`，目标分支选择 `main`。
5. 标题填写：

```text
Merge dev: complete VisionPulse assignment 2
```

6. 描述中写明已完成论文导入、论文管理、Top 10、关键词图谱和热度趋势。
7. 检查无冲突后合并。

也可以在本地合并：

```powershell
git switch main
git pull origin main
git merge --no-ff dev -m "merge: integrate completed assignment 2"
git push origin main
```

## 八、创建 v1.0.0 Release

```powershell
git switch main
git pull origin main
git tag -a v1.0.0 -m "release: VisionPulse assignment 2 basic features"
git push origin v1.0.0
```

在 CodeArts 网页中找到 Tag / Release，选择 `v1.0.0`，填写版本说明：

```text
VisionPulse v1.0.0

- 支持 CVPR / ICCV / ECCV 论文管理
- 支持 JSON / CSV 导入
- 支持 Top 10 关键词分析
- 支持关键词图谱
- 支持多年热度趋势播放
```

保存 Release 截图，填入博客正文。

## 九、在 ECS 上部署静态网页

以下以 Ubuntu ECS + Nginx 为例。

### 9.1 创建 ECS

1. 进入华为云 ECS。
2. 创建云服务器，镜像选择 Ubuntu 22.04 LTS 或课程推荐镜像。
3. 绑定弹性公网 IP。
4. 安全组放行 TCP `22` 和 TCP `80`。
5. 记录公网 IP：`【你的ECS公网IP】`。

### 9.2 SSH 登录 ECS

```powershell
ssh root@<你的ECS公网IP>
```

如果使用普通用户：

```powershell
ssh ubuntu@<你的ECS公网IP>
```

### 9.3 安装 Nginx 和 Git

```bash
sudo apt update
sudo apt install -y nginx git
sudo systemctl enable nginx
sudo systemctl start nginx
```

浏览器打开：

```text
http://你的ECS公网IP
```

如果看到 Nginx 欢迎页面，说明安全组、公网 IP 和 Nginx 基本正常。

### 9.4 从 CodeArts 克隆代码

```bash
sudo mkdir -p /var/www/visionpulse
sudo chown -R $USER:$USER /var/www/visionpulse
cd /var/www
git clone <你的CodeArts仓库HTTPS地址> visionpulse
cd /var/www/visionpulse
git switch main
```

如果仓库需要认证，请使用 CodeArts 支持的 HTTPS 凭据或 SSH 密钥，不要把账号密码写入仓库。

### 9.5 配置 Nginx

创建站点配置：

```bash
sudo nano /etc/nginx/sites-available/visionpulse
```

粘贴：

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name _;

    root /var/www/visionpulse;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(css|js|json|png|jpg|jpeg|gif|svg|ico)$ {
        expires 1h;
        add_header Cache-Control "public";
    }
}
```

启用站点：

```bash
sudo ln -s /etc/nginx/sites-available/visionpulse /etc/nginx/sites-enabled/visionpulse
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

浏览器访问：

```text
http://你的ECS公网IP
```

如果显示 VisionPulse 页面，说明静态网页部署成功。

## 十、更新部署

以后在本地完成修改并推送到 `main` 后，登录 ECS：

```bash
cd /var/www/visionpulse
git pull origin main
sudo nginx -t
sudo systemctl reload nginx
```

## 十一、可选：使用 CodeArts Deploy 自动部署

如果希望每次推送后自动发布，可以在 CodeArts Deploy 中创建部署应用。

部署步骤可以设计为：

1. 拉取 CodeArts Repo 代码。
2. 将代码复制到 `/var/www/visionpulse`。
3. 执行 `nginx -t`。
4. 执行 `systemctl reload nginx`。

部署脚本示例：

```bash
#!/usr/bin/env bash
set -e

TARGET="/var/www/visionpulse"
sudo mkdir -p "$TARGET"
sudo rsync -av --delete ./ "$TARGET"/
sudo nginx -t
sudo systemctl reload nginx
```

如果 ECS 没有 `rsync`：

```bash
sudo apt install -y rsync
```

不同 CodeArts 版本界面字段可能存在差异，创建应用时以当前控制台实际名称为准。部署成功后要保存部署记录截图。

## 十二、常见问题

### 12.1 浏览器访问超时

检查：

```bash
sudo systemctl status nginx
sudo nginx -t
curl http://127.0.0.1
```

如果 ECS 内部可以访问但公网不能访问，通常是安全组没有放行 `80` 端口，或者访问的不是绑定到 ECS 的弹性公网 IP。

### 12.2 页面样式丢失

检查仓库根目录是否同时存在：

```text
index.html
styles.css
app.js
```

### 12.3 OpenAlex 查询失败

OpenAlex 属于外部公开接口，可能受到网络、跨域或服务状态影响。论文库本地查询、手动新增、JSON / CSV 导入和热词统计不依赖 OpenAlex，接口失败时仍可以演示主要功能。

### 12.4 Git 拉取需要认证

不要把密码写入远程仓库地址。优先使用 CodeArts 的个人访问令牌或 SSH 公钥认证，并按照 CodeArts 页面显示的 Git 凭据配置。

## 十三、部署完成后的博客填写位置

完成部署后，把以下内容填回 `博客正文.md`：

```text
成品访问链接：【http://你的ECS公网IP】
CodeArts仓库地址：【真实仓库地址】
Release地址：【真实v1.0.0地址】
ECS公网IP：【真实IP】
部署方式：华为云 ECS + Nginx + CodeArts Repo
部署截图：【上传真实截图】
```

不要提前填写不存在的公网 IP、仓库链接或 Release 地址。

