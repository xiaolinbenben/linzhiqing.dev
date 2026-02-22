import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "简历",
  description: "林智清的一页式简历，聚焦工程落地、创业实践与跨行业经验。"
};

export default function ResumePage() {
  return (
    <article className="mx-auto max-w-4xl pb-14 pt-4">
      <header className="space-y-4 pb-9">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{profile.name}</h1>
        <p className="text-base font-medium text-slate-600 dark:text-slate-300">{profile.headline}</p>
        <div className="space-y-2 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>福州大学在读，正在创业，长期在一线推进产品从想法到可用成果的完整落地。</p>
          <p>聚焦工程化交付与业务价值验证，擅长把复杂需求拆解为可执行路径，并持续推进迭代。</p>
          <p>当前重点围绕电商与内容效率场景，推动 AI 产品进入真实业务流程，形成可复用的工作方式。</p>
        </div>
        <div className="pt-1">
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            联系我 →
          </Link>
        </div>
      </header>

      <section className="border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">行业经验与方向</h2>
        <div className="mt-4 space-y-3 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            我的实践主要覆盖 AI、互联网产品与电商三个方向。早期在莆田从事电商相关工作，长期接触商品、运营、转化与效率问题，对业务链路中的关键环节有真实理解。
          </p>
          <p>
            随后进入互联网产品与 AI 场景，持续推动工具化与流程化建设，把原本依赖经验的工作方式转化为可复制、可协作、可持续优化的产品机制。
          </p>
          <p>
            这种跨行业经验让我在做产品判断时，不只看功能是否能实现，更看它是否能稳定落地、是否能真正提升团队效率与业务产出。
          </p>
        </div>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">核心项目与创业实践</h2>
        <div className="mt-5 space-y-7 text-base leading-8 text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Visionflow</h3>
            <p>
              主导推进面向内容与电商场景的 AI 工作流产品。核心目标是减少重复劳动，把内容生产、信息整理与执行环节串联成可协同的流程，帮助团队更快完成从需求到上线的闭环。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Terln</h3>
            <p>
              正在推动的电商工具产品，聚焦实际运营中的效率问题。围绕商家在日常经营中的高频动作，持续打磨可落地、可扩展的能力，目标是让业务执行更稳、更快、更可控。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">AI Box</h3>
            <p>
              构建统一的 AI 工具入口，解决工具分散、使用路径不一致、团队协作成本高的问题。通过统一入口和标准化流程，降低学习成本，提高团队整体执行效率。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">倍司科技官网与企业协作体系</h3>
            <p>
              推动公司官网、企业文档与协作系统建设，统一品牌信息、业务表达与内部知识沉淀方式。重点在于把组织经验转化为可传播、可复用、可协同的结构化资产。
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">研究与工程思维来源</h2>
        <div className="mt-4 space-y-3 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            在福州大学建筑学院 BIM 实验室担任教授助教两年，持续学习并实践计算机参数化设计与建模。
          </p>
          <p>
            这段经历帮助我形成了流程化、结构化、可计算的思维方式：面对复杂问题时，先抽象结构，再拆解路径，最后建立稳定可执行的流程。
          </p>
          <p>
            这种方法论对后续创业和产品建设影响深远，让我在系统设计与产品推进上更注重长期可演进，而非一次性实现。
          </p>
        </div>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">实践、竞赛与领导力</h2>
        <div className="mt-4 space-y-3 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            在全国大学生乡村设计竞赛中，作为带队负责人，与清华大学团队合作并获得全国三等奖。过程中重点承担组织推进、跨团队协同与落地统筹工作。
          </p>
          <p>
            此外还参与过多项竞赛与实践项目，持续锻炼了在不确定环境下整合资源、推进共识和按结果交付的能力。
          </p>
        </div>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">教学、沟通与资源整合能力</h2>
        <div className="mt-4 space-y-3 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            长期家教教学经历，让我形成了清晰表达与问题拆解能力，能够把复杂概念转化为易理解、可执行的行动方案，从而快速对齐需求与目标。
          </p>
          <p>
            在创业与项目推进中，我也长期参与并主导产品视觉与信息结构设计，保持对用户理解、信息组织和表达效率的敏感度。
          </p>
          <p>
            日常熟练使用 PS、Office 等工具，能够高效完成从方案表达到协作落地的全过程；同时具备较强的人脉资源与跨角色沟通能力，能够推动资源整合并加速项目推进。
          </p>
        </div>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">教育背景与补充信息</h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700 dark:text-slate-300">
          <ul className="space-y-1">
            <li>初中：莆田南门学校</li>
            <li>高中：莆田第一中学</li>
            <li>大学：福州大学（在读）</li>
          </ul>
          <p>英语能力：通过英语四级、六级。</p>
          <p>体育经历：多年在校运动会获奖，长期保持自律与执行力。</p>
        </div>
      </section>
    </article>
  );
}
