# linzhiqing.dev

简历型个人官网（Next.js 15 App Router + TypeScript + Tailwind CSS）。

## 技术栈

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- 数据驱动内容：`src/data/profile.ts`

## 本地开发

```bash
npm install
npm run dev
```

访问 `http://localhost:3000`。

## 构建与运行

```bash
npm run build
npm run start
```

## 页面说明

- `/` 首页：Hero、代表作、About、简历与项目入口
- `/resume` 简历页：一页式信息密度，含占位模板
- `/projects` 项目页：四类项目筛选与表格展示
- `/contact` 联系页：原二维码视觉迁移，支持预览与下载

## 数据维护

- 个人资料、代表作、项目列表、简历占位内容：`src/data/profile.ts`
- 若要补充真实信息，按 `TODO` 注释修改。

## 静态资源

二维码图片统一放在 `public/qr_code/` 目录。

## 部署

### Vercel

1. 导入仓库
2. Framework 选择 Next.js
3. 默认构建命令 `npm run build`

### Cloudflare Pages

1. 导入仓库并使用 Next.js 构建模式
2. 构建命令 `npm run build`
3. 输出目录按平台向导自动识别（如需要可接入 OpenNext 适配）
