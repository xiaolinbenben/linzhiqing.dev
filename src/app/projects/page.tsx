import type { Metadata } from "next";
import ProjectsBoard from "@/components/ProjectsBoard";

export const metadata: Metadata = {
  title: "项目",
  description: "在线产品、代码仓库、娱乐项目与指南合集，支持分类筛选查看。"
};

export default function ProjectsPage() {
  return (
    <div className="pb-10 pt-2">
      <ProjectsBoard />
    </div>
  );
}
