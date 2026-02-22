import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "首页",
  description: "林智清个人官网首页，含个人定位、代表项目与简历入口。"
};

export default function HomePage() {
  return (
    <div className="space-y-8 pb-10 pt-2">
      <section className="section-card animate-fade-up overflow-hidden p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
          <div className="space-y-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card dark:border-slate-700 dark:bg-slate-800">
                <Image
                  src="/avatar.jpg"
                  alt={`${profile.name} 的头像`}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                  {profile.name}
                </h1>
                <p className="text-lg text-slate-600 sm:text-xl dark:text-slate-300">{profile.headline}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-card dark:bg-slate-100 dark:text-slate-900"
              >
                查看简历
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                查看项目
              </Link>
              <Link
                href="/contact"
                className="rounded-full px-5 py-2.5 text-sm font-medium text-sky-700 underline-offset-4 transition hover:text-sky-800 hover:underline dark:text-sky-300 dark:hover:text-sky-200"
              >
                联系我 →
              </Link>
            </div>
          </div>

          <div className="space-y-4 pt-1">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">关于我</h2>
            <div className="space-y-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              {profile.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">代表作</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-sky-700 transition hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
          >
            查看全部项目 →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {profile.featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="section-card flex h-full flex-col gap-4 p-5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{project.status}</p>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-sky-700 transition hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
              >
                访问项目 →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
