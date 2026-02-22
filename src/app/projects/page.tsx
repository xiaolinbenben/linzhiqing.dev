import type { Metadata } from "next";
import ProjectsBoard from "@/components/ProjectsBoard";

export const metadata: Metadata = {
  title: "项目",
  description: "在线产品、GitHub、娱乐项目与指南合集，支持分类筛选查看。"
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6 pb-10 pt-2">
      <section className="section-card p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">项目列表</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          保留原 Markdown 项目表格内容，统一为数据驱动结构，支持按类别快速筛选。
        </p>
        <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          状态说明：🟡 开发中 · 🟢 维护中/更新中 · 🟠 准备中 · ✅ 已完成 · 🔴 失败项目
        </p>
      </section>

      <ProjectsBoard />
    </div>
  );
}
