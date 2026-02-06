# Codex 用法 App

> 从 Vibe Coding 到 SDD 的关键桥梁

## 📖 项目简介

这是「从零开始学 AI」系列中的 **Codex 用法** 学习模块。它教会你如何在不破坏系统的前提下进行可控的代码修改，是从 vibe coding 走向 Spec Driven Development (SDD) 的关键过渡阶段。

**核心定位**：Codex 教会你的不是"再写点代码"，而是**如何在不破坏系统的前提下前进一步**。

## 🎯 学习目标

通过本 App，你将掌握三个核心能力：

1. **作用域意识（Scope Awareness）** - 明确"只改哪里"
2. **不变量意识（Invariant Awareness）** - 明确"哪些绝对不能动"
3. **验收意识（Acceptance Criteria）** - 明确"什么才算改对"

## 🗺️ 学习路径

```
想法
 ↓
Vibe Coding（能跑起来）
 ↓
Codex（可控修改）← 你在这里
 ↓
SDD（规格驱动）
 ↓
工程化与长期维护
```

## 🚀 快速开始

### 本地开发

1. **克隆项目**
```bash
git clone <your-repo-url>
cd codex-usage-app
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

访问 `http://localhost:8888` 查看应用。

### 部署到 Netlify

#### 方法 1: 通过 Netlify CLI

```bash
# 安装 Netlify CLI（如果还没安装）
npm install -g netlify-cli

# 登录
netlify login

# 部署
npm run deploy
```

#### 方法 2: 通过 Git 连接

1. 将项目推送到 GitHub/GitLab
2. 在 [Netlify](https://app.netlify.com/) 创建新站点
3. 连接你的 Git 仓库
4. Netlify 会自动识别配置并部署

## 📁 项目结构

```
codex-usage-app/
├── index.html              # 主页面（包含完整 Codex 学习内容）
├── netlify.toml           # Netlify 配置文件
├── package.json           # 项目配置
├── README.md              # 项目文档
└── netlify/
    └── functions/
        └── chat.js        # Serverless 聊天接口（预留）
```

## 💡 核心内容

### 1. 从"会生成"到"会控制"

学习如何给 AI 添加约束，避免"乱改文件"的情况。

**反例（Vibe 式）**：
```
帮我优化一下这个页面。
```

**正例（Codex 式）**：
```
请只修改 `handleSubmit()` 函数，使其在失败时显示错误提示，
其余代码一律不要改。
```

### 2. 读代码：与 AI 共读

正确的做法：
- 让 AI **解释代码，而不是替代你**
- 让 AI **标注结构，而不是重写逻辑**

示例 Prompt：
```
请逐行解释以下 `index.html`，只添加注释，不要修改任何代码。
```

### 3. 改代码：最小干预原则

核心原则：
> **能局部修改解决的问题，绝不全局重写。**

示例 Prompt：
```
在不改变 UI 结构和 CSS 的前提下，只为加载状态添加三个动画圆点。
```

### 4. Codex 黄金 Prompt 模板

本 App 提供 7 个工程级 Prompt 模板：

1. **只读解释** - 零风险建立代码地图
2. **结构标注** - 看清模块边界
3. **最小修改原则** - 核心工程思维
4. **不变量显式声明** - 防止越界修改
5. **失败即回滚** - 建立工程伦理
6. **变更说明生成** - 自动化文档
7. **反向审计** - AI 作为第二审稿人

## 🔧 技术栈

- **前端**: 纯 HTML + CSS（无框架依赖）
- **部署**: Netlify
- **Serverless**: Netlify Functions（预留 chat 接口）

## 🌐 在线访问

- **主站**: https://aipath-gong.netlify.app/
- **本模块**（部署后）: [你的 Netlify URL]

## 📚 系列位置

本 App 在「从零开始学 AI」系列中的位置：

```
Level 0｜AI 是什么？（认知破冰）
  ↓
Level 1｜如何与 AI 对话（自然语言能力）
  ↓
Level 2｜Vibe Coding（能把想法跑起来）
  ↓
Level 3｜Codex（可控修改 · 工程过渡）← 本 App
  ↓
Level 4｜Spec Driven Development（SDD）
  ↓
Level 5｜工程化 · 安全 · 审计 · 长期维护
```

## ✅ 学习检验

完成本模块后，你应该能够：

- ✅ 明确指出哪些代码是不能动的
- ✅ 描述一次修改的边界
- ✅ 接受"这一步暂时不可行"的合理性
- ✅ 用"只、不要、不影响"等词精确表达需求

## 🤝 贡献

欢迎提出改进建议！你可以：

1. 提交 Issue 报告问题
2. 提交 Pull Request 改进内容
3. 分享你的学习心得

## 📄 许可证

MIT License

## 📮 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 项目主站: https://aipath-gong.netlify.app/
- [你的联系方式]

---

## 🎓 给学习者的话

> 如果 vibe coding 让你第一次把想法变成现实，
> 那么 Codex 将教你：
> **如何在现实中持续前进，而不推翻一切。**

这是从写代码走向做工程的分水岭。

**核心角色转变**：
- 从"让 AI 写代码的人"
- 变成"对修改负责的人"

这正是工程之路真正开始的地方。

---

## 📝 更新日志

### v1.0.0 (2024)
- ✨ 初始版本发布
- 📖 完整的 Codex 学习内容
- 🎨 响应式设计界面
- 🔧 预留 chat 接口
- 📚 7 个黄金 Prompt 模板

---

**Happy Learning! 🚀**
