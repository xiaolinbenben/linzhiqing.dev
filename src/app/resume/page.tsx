import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "林智清的一页式简历，包含核心技能、代表项目、经历与联系方式。"
};

export default function ResumePage() {
  const { resume } = profile;

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10 pt-2">
      <section className="section-card p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{profile.name}</h1>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{profile.headline}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            联系我
          </Link>
        </div>

        <div className="mt-6 grid gap-4 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-700 sm:grid-cols-3 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">位置</p>
            <p className="mt-1 font-medium">{resume.overview.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">经验年限</p>
            <p className="mt-1 font-medium">{resume.overview.years}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">目标方向</p>
            <p className="mt-1 font-medium">{resume.overview.targetRole}</p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{resume.overview.summary}</p>
      </section>

      <section className="section-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">核心技能</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {resume.skillGroups.map((skillGroup) => (
            <article
              key={skillGroup.group}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{skillGroup.group}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">代表项目详述</h2>
        <div className="mt-5 space-y-5">
          {resume.detailedProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-slate-200 bg-white p-5 text-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">背景</p>
                  <p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">{project.background}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">你做了什么</p>
                  <p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">{project.whatYouDid}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">技术点</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techPoints.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">结果</p>
                <p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">经历与职责</h2>
        <div className="mt-4 space-y-4">
          {resume.experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{experience.company}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{experience.period}</p>
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{experience.role}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="section-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">教育与证书</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">教育</p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                {resume.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">证书</p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                {resume.certificates.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="section-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">联系方式</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {profile.contactLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-700 dark:hover:text-sky-300"
              >
                <span>{link.label}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
