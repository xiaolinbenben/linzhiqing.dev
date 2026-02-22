"use client";

import Link from "next/link";
import { Fragment, useMemo, useState } from "react";
import {
  ProjectCategoryId,
  projectCategories,
  projectGroups
} from "@/data/profile";

type FilterCategory = "all" | ProjectCategoryId;

export default function ProjectsBoard() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const visibleCategories = useMemo(() => {
    if (activeCategory === "all") {
      return projectCategories;
    }

    return projectCategories.filter((category) => category.id === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-6">
      <nav className="flex flex-wrap items-center gap-2" aria-label="项目筛选">
        <button
          type="button"
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            activeCategory === "all"
              ? "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
              : "border-slate-300 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
          onClick={() => setActiveCategory("all")}
        >
          全部
        </button>
        {projectCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category.id
                ? "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                : "border-slate-300 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <div className="space-y-8">
        {visibleCategories.map((category) => (
          <section key={category.id} className="section-card overflow-hidden">
            <header className="border-b border-slate-200 px-5 py-4 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{category.label}</h2>
            </header>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-50/80 dark:bg-slate-800/50">
                    <th className="px-5 py-3 font-semibold text-slate-600 dark:text-slate-300">项目</th>
                    <th className="px-5 py-3 font-semibold text-slate-600 dark:text-slate-300">状态</th>
                    <th className="px-5 py-3 font-semibold text-slate-600 dark:text-slate-300">链接</th>
                    <th className="px-5 py-3 font-semibold text-slate-600 dark:text-slate-300">说明</th>
                  </tr>
                </thead>
                <tbody>
                  {projectGroups[category.id].map((project) => (
                    <tr
                      key={`${category.id}-${project.title}`}
                      className="border-t border-slate-200 align-top transition hover:bg-slate-50/70 dark:border-slate-700 dark:hover:bg-slate-800/40"
                    >
                      <td className="px-5 py-4 font-medium text-slate-900 dark:text-white">{project.title}</td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{project.status}</td>
                      <td className="px-5 py-4 text-sky-700 dark:text-sky-300">
                        {project.links.map((link, index) => (
                          <Fragment key={`${project.title}-${link.url}`}>
                            <Link
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="underline-offset-4 hover:underline"
                            >
                              {link.label}
                            </Link>
                            {index < project.links.length - 1 ? <span className="px-1">/</span> : null}
                          </Fragment>
                        ))}
                      </td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{project.description ?? "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
