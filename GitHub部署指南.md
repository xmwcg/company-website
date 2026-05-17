# GitHub Pages 手动部署指南

## 仓库信息
- 仓库名称: company-website
- 仓库URL: https://github.com/xmwcg/company-website
- 用户名: xmwcg
- Token: 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

## 方法一：使用Git命令行（推荐）

### 步骤1：配置Git（如果尚未配置）
```bash
git config --global user.name "xmwcg"
git config --global user.email "xmwcg@163.com"
```

### 步骤2：克隆仓库到本地
```bash
cd ~
git clone https://github.com/xmwcg/company-website.git
cd company-website
```

### 步骤3：复制网站文件到仓库目录
将以下文件复制到 `company-website` 目录：
- `index.html`（已从company-website.html重命名）

### 步骤4：提交并推送
```bash
git add index.html
git commit -m "Add company website"
git push origin main
```

**注意**：推送时需要输入用户名和密码：
- 用户名: xmwcg
- 密码: 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（这是Personal Access Token，用作密码）

### 步骤5：启用GitHub Pages
1. 访问 https://github.com/xmwcg/company-website/settings/pages
2. 在"Build and deployment" → "Branch"中选择 `main` 分支
3. 点击 Save
4. 等待1-2分钟，网站将部署到：https://xmwcg.github.io/company-website/

## 方法二：使用GitHub网页界面（最简单）

### 步骤1：访问仓库
打开 https://github.com/xmwcg/company-website

### 步骤2：上传文件
1. 点击"Add file" → "Upload files"
2. 上传 `index.html` 文件
3. 在"Commit changes"中输入提交信息： "Add company website"
4. 点击"Commit changes"

### 步骤3：启用GitHub Pages
1. 访问 https://github.com/xmwcg/company-website/settings/pages
2. 在"Build and deployment" → "Branch"中选择 `main` 分支
3. 点击 Save
4. 等待1-2分钟，网站将部署到：https://xmwcg.github.io/company-website/

## 方法三：使用GitHub Desktop（图形化界面）

### 步骤1：下载并安装GitHub Desktop
https://desktop.github.com/

### 步骤2：登录并克隆仓库
1. 打开GitHub Desktop
2. 登录您的GitHub账户（xmwcg）
3. File → Clone repository → 选择 `company-website` → Clone

### 步骤3：复制文件并提交
1. 将 `index.html` 复制到本地仓库文件夹
2. GitHub Desktop会自动检测到更改
3. 在左下角输入提交信息："Add company website"
4. 点击"Commit to main"
5. 点击"Push origin"

### 步骤4：启用GitHub Pages（同方法一）

## 验证部署

部署成功后，访问以下网址查看网站：
- **GitHub Pages URL**: https://xmwcg.github.io/company-website/
- **仓库URL**: https://github.com/xmwcg/company-website

## 更新网站

以后需要更新网站时，只需：
1. 修改 `index.html` 文件
2. 提交并推送更改
3. GitHub Pages会自动重新部署

## 常见问题

### Q1: 推送时出现403错误？
A: Token可能已过期或权限不足。请重新生成Token，确保勾选 `repo` 权限。

### Q2: 网站部署后显示404？
A: 确保仓库中有 `index.html` 文件，并且GitHub Pages已正确配置（选择了main分支）。

### Q3: 网站样式不正确？
A: 检查 `index.html` 中的CSS路径是否正确。使用GitHub Pages时，确保所有资源都使用相对路径。

## 下一步

网站部署成功后，您可以：
1. 更新网站内容（公司简介、服务项目等）
2. 添加更多页面（关于我们、服务项目详情等）
3. 绑定自定义域名（如果需要）
4. 设置Google Analytics跟踪访问量

---

**祝您部署顺利！如有问题，请检查GitHub文档：https://docs.github.com/pages**
