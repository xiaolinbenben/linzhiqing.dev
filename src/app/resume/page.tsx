import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "简历",
  description: "林智清的一页式简历，聚焦工程落地、创业实践与跨行业经验。"
};

export default function ResumePage() {
  return (
    <article className="w-full pb-14 pt-4">
      <header className="space-y-4 pb-9">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{profile.name}</h1>
        <p className="text-base font-medium text-slate-600 dark:text-slate-300">{profile.headline}</p>
        <div className="space-y-2 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            <strong className="font-semibold text-slate-900 dark:text-white">福州大学建筑学院在读（2026 年 6 月毕业）</strong>，
            <strong className="font-semibold text-slate-900 dark:text-white">福州倍司网络科技有限公司</strong>创始人。
            大二开始自学编程并转向全栈开发，2024 年 12 月正式注册公司全职创业。
          </p>
          <p>
            聚焦工程化交付与业务价值验证，擅长把复杂需求拆解为可执行路径，并持续推进迭代。
            目前团队 5 人（在校生及应届生为主），已有付费客户，团队主要精力聚焦在 Visionflow AI 工作流产品研发上。
          </p>
          <p>当前重点围绕电商与内容效率场景，推动 AI 产品进入真实业务流程，形成可复用的工作方式。</p>
        </div>
      </header>

      <section className="border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">行业经验与方向</h2>
        <div className="mt-4 space-y-3 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            这些年我一直在做开发，也在持续推进各种产品实践。慢慢地，我开始把 AI 用到日常工作里，把一些重复、耗时的环节做成更顺手的流程和工具。
          </p>
          <p>
            后来在和莆田电商团队的深度合作中，我接触到很多一线的真实问题，比如运营节奏、协作方式和效率瓶颈，也因此更明确地把方向放在"解决实际问题"上。很多方案是在实践中，基于真实需求和用户反馈迭代形成的。
          </p>
          <p>
            大学期间，我同时进行着助教、家教、开发项目与创业准备等多项工作。虽然辛苦，但我始终以经验积累与实际收入为导向，选择对自己成长有价值的事情。
            2024 年 12 月正式注册公司后，全力投入创业，将所有精力聚焦在产品研发与商业落地上。
          </p>
          <p>
            对我来说，开发是把东西做出来的能力，AI 是把效率拉高的工具，电商场景则不断提供具体的问题与验证。现在更关注的是把经验做成别人也能用的产品和流程，让事情更清晰、更可协作，也更容易持续优化。
          </p>
        </div>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">核心项目与创业实践</h2>
        <div className="mt-5 space-y-7 text-base leading-8 text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">公司基础体系搭建</h3>
            <p>
              从零开始建设公司官网、文档系统和协作流程，让团队的工作方式和品牌表达保持一致。
              核心目标是把做事的经验固化下来，变成大家都能看懂、能用、能一起迭代的东西，而不是只存在某个人脑子里。
              目前基础设施已搭建完成并投入使用。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Visionflow（当前核心）</h3>
            <p>
              主导推进面向内容与电商场景的 AI 工作流产品，团队主要精力聚焦于此。核心目标是减少重复劳动，把内容生产、信息整理与执行环节串联成可协同的流程，帮助团队更快完成从需求到上线的闭环。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">AI Box（维护期）</h3>
            <p>
              早期创业尝试，构建统一的 AI 工具入口，解决工具分散、使用路径不一致的问题。
              产品已发布可用，目前处于维护状态，空余时间进行功能优化。这段经历让我积累了从 0 到 1 的完整产品经验。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Terln（早期验证）</h3>
            <p>
              正在探索的电商工具产品，聚焦实际运营中的效率问题。围绕商家在日常经营中的高频动作，持续打磨可落地、可扩展的能力，目标是让业务执行更稳、更快、更可控。
              当前处于早期验证阶段。
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">研究与工程思维来源</h2>
        <div className="mt-4 space-y-3 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            虽然就读于建筑学院，但我在<strong className="font-semibold text-slate-900 dark:text-white">大二时开始自学编程</strong>，对软件开发和技术产品产生浓厚兴趣，逐步转向全栈工程师方向发展。
          </p>
          <p>
            2022-2023 年在福州大学建筑学院 <strong className="font-semibold text-slate-900 dark:text-white">BIM 实验室</strong>担任教授助教，持续学习并实践
            <strong className="font-semibold text-slate-900 dark:text-white"> BIM 参数化设计与建模</strong>。
            这段经历让我理解了代码与实际应用的结合，也为转向软件开发提供了重要契机。
          </p>
          <p>
            这段经历帮助我形成了流程化、结构化、可计算的思维方式：面对复杂问题时，先抽象结构，再拆解路径，最后建立稳定可执行的流程。
          </p>
          <p>
            这种方法论对后续创业和产品建设影响深远，让我在系统设计与产品推进上更注重可持续演进，而非一次性实现。
          </p>
        </div>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-9 dark:border-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">实践、竞赛与领导力</h2>
        <div className="mt-4 space-y-3 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            在首届全国大学生乡村设计竞赛中，与<strong className="font-semibold text-slate-900 dark:text-white">清华大学</strong>学生组成跨校团队，
            担任<strong className="font-semibold text-slate-900 dark:text-white">团队负责人</strong>，获得
            <strong className="font-semibold text-slate-900 dark:text-white">全国三等奖</strong>。过程中重点承担组织推进、团队协同与落地统筹工作。
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
            在校期间从事多年家教教学工作，让我形成了清晰表达与问题拆解能力，能够把复杂概念转化为易理解、可执行的行动方案，从而快速对齐需求与目标。
            这段经历不仅锻炼了我的沟通能力，也为创业初期积累了一定的经济基础。
          </p>
          <p>
            在创业与项目推进中，我也持续参与并主导产品视觉与信息结构设计，保持对用户理解、信息组织和表达效率的敏感度。
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
          <p>体育经历：多年在校运动会获奖，始终保持自律与执行力。</p>
        </div>
      </section>
    </article>
  );
}
