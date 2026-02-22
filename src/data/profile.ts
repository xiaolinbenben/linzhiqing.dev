export type ProjectCategoryId = "online" | "github" | "fun" | "guides";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  title: string;
  status: string;
  links: ProjectLink[];
  description?: string;
}

export interface ProjectCategory {
  id: ProjectCategoryId;
  label: string;
}

export interface FeaturedProject {
  title: string;
  status: string;
  summary: string;
  url: string;
  tags: string[];
}

export interface ResumeSkillGroup {
  group: string;
  items: string[];
}

export interface ResumeProjectDetail {
  name: string;
  background: string;
  whatYouDid: string;
  techPoints: string[];
  result: string;
}

export interface ResumeExperience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface QrItem {
  label: string;
  hint: string;
  file: string;
  alt: string;
  title: string;
}

export interface ContactQrGroup {
  title: string;
  primary: QrItem[];
  more?: QrItem[];
}

export const projectCategories: ProjectCategory[] = [
  { id: "online", label: "在线产品" },
  { id: "github", label: "代码仓库" },
  { id: "fun", label: "娱乐项目" },
  { id: "guides", label: "指南合集" }
];

export const projectGroups: Record<ProjectCategoryId, ProjectItem[]> = {
  online: [
    {
      title: "Visionflow",
      status: "🟡 开发中",
      links: [{ label: "在线", url: "https://visionflow.im" }],
      description: "多模态 AI 工作流产品。"
    },
    {
      title: "AI Box",
      status: "🟢 维护中",
      links: [{ label: "在线", url: "https://aibox.beisi.tech/" }],
      description: "聚合式 AI 工具入口。"
    },
    {
      title: "应用仓库",
      status: "🟢 维护中",
      links: [{ label: "在线", url: "https://yyck.beisi.tech/" }],
      description: "应用分发与版本管理门户。"
    },
    {
      title: "小程序商城",
      status: "🟢 维护中",
      links: [{ label: "在线", url: "https://hioshop.beisi.tech/" }],
      description: "小程序电商演示与业务承载站点。"
    },
    {
      title: "公司网站",
      status: "🟡 开发中",
      links: [{ label: "在线", url: "https://beisi.tech/" }],
      description: "品牌官网与服务展示。"
    },
    {
      title: "企业文档",
      status: "🟢 更新中",
      links: [{ label: "在线", url: "https://beisi-tech.github.io/docs" }],
      description: "团队知识库与技术文档站。"
    }
  ],
  github: [
    {
      title: "飞书智能助手",
      status: "🟡 开发中",
      links: [{ label: "仓库", url: "https://github.com/beisi-tech/feishu-copilot" }],
      description: "企业协同场景下的 AI Copilot。"
    },
    {
      title: "亚马逊电商自动化",
      status: "🟠 准备中",
      links: [{ label: "仓库", url: "https://github.com/beisi-tech/amz-auto-ai" }],
      description: "跨境电商运营自动化工具链。"
    },
    {
      title: "AI 网络爬虫",
      status: "🟠 准备中",
      links: [{ label: "仓库", url: "https://github.com/xiaolinbenben/graber" }],
      description: "面向数据抓取与清洗的 AI crawler 实验项目。"
    },
    {
      title: "b2b 外贸站",
      status: "🟢 维护中",
      links: [{ label: "仓库", url: "https://github.com/beisi-tech/web_b2b" }],
      description: "B2B 外贸业务网站模板。"
    },
    {
      title: "知心家教小程序",
      status: "🔴 失败项目",
      links: [{ label: "仓库", url: "https://github.com/beisi-tech/zhixin-tutor" }],
      description: "已停止推进，用于复盘产品与交付过程。"
    }
  ],
  fun: [
    {
      title: "早安邮件",
      status: "🟡 开发中",
      links: [{ label: "仓库", url: "https://github.com/xiaolintuanzi/love-scheduler" }],
      description: "自动定时发送邮件的小工具。"
    },
    {
      title: "福州大学水电费爬虫",
      status: "✅ 已完成",
      links: [
        {
          label: "仓库",
          url: "https://github.com/xiaolinbenben/fzu-electricity-fee-spider"
        }
      ],
      description: "校园费用查询自动化脚本。"
    },
    {
      title: "10000 中国普通人名大全",
      status: "✅ 已完成",
      links: [
        { label: "仓库", url: "https://github.com/xiaolinbenben/10k-chinese-names" },
        { label: "在线", url: "https://xiaolinbenben.github.io/10k-chinese-names/" }
      ],
      description: "人名数据集与在线检索页面。"
    }
  ],
  guides: [
    {
      title: "提示词合集",
      status: "🟢 更新中",
      links: [{ label: "仓库", url: "https://github.com/xiaolinbenben/awesome-prompts" }],
      description: "Prompt 模板与技巧清单。"
    },
    {
      title: "cf-workers 使用指南",
      status: "🟢 更新中",
      links: [{ label: "仓库", url: "https://github.com/xiaolinbenben/cf-workers" }],
      description: "Cloudflare Workers 快速入门与实践。"
    },
    {
      title: "SiteSucker 使用指南",
      status: "🟢 更新中",
      links: [{ label: "仓库", url: "https://github.com/xiaolinbenben/sitesucker-guide" }],
      description: "SiteSucker 工具实用文档。"
    },
    {
      title: "全栈开发者入门练习",
      status: "✅ 已完成",
      links: [{ label: "仓库", url: "https://github.com/beisi-tech/beisi-start" }],
      description: "全栈开发练习与脚手架示例。"
    }
  ]
};

export const profile = {
  name: "林智清",
  headline: "全栈开发工程师 / AI 产品研发 / 倍司科技创始人",
  headlineOptions: ["全栈开发工程师", "AI 产品研发", "倍司科技创始人"],
  seoDescription: "林智清的个人官网，聚焦全栈开发、AI 产品研发与创业实践。",
  bio: [
    "福州大学在读，正在创业中的工程型开发者，专注 Web 全栈技术，推动 AI 产品的工程化落地。",
    "专注需求拆解、架构设计与快速交付，把 AI 能力真正落地到业务流程中。"
  ],
  contactLinks: [
    { label: "联系我", url: "/contact" },
    { label: "代码仓库主页", url: "https://github.com/xiaolinbenben" },
    { label: "企业文档", url: "https://beisi-tech.github.io/docs" }
  ],
  featuredProjects: [
    {
      title: "倍司科技官网",
      status: "🟡 开发中",
      summary: "我创立的倍司科技官方站点，展示公司定位、服务能力与核心产品矩阵。",
      url: "https://beisi.tech/",
      tags: ["官方网站", "品牌建设", "创始人主导"]
    },
    {
      title: "Visionflow",
      status: "🟡 开发中",
      summary: "面向内容与知识工作者的 AI 工作流平台，聚焦任务编排与效率提升。",
      url: "https://visionflow.im",
      tags: ["前端框架（Next.js）", "AI 工作流", "产品工程化"]
    },
    {
      title: "AI Box",
      status: "🟢 维护中",
      summary: "统一 AI 工具入口，整合常用能力与场景化组件，降低团队使用门槛。",
      url: "https://aibox.beisi.tech/",
      tags: ["类型系统（TypeScript）", "工具整合", "运维体系"]
    }
  ],
  resume: {
    overview: {
      location: "中国 / 可远程",
      years: "TODO: 补充你的工作年限",
      targetRole: "全栈开发工程师 / AI 产品研发 / 倍司科技创始人",
      summary:
        "TODO: 用 2-3 句话补充你的核心优势，例如行业领域、典型规模、关键结果（如提升效率、增长指标）。"
    },
    skillGroups: [
      {
        group: "客户端与前端",
        items: ["Android", "Kotlin", "TypeScript", "Next.js", "React", "Tailwind CSS"]
      },
      {
        group: "服务端与工程化",
        items: ["Node.js", "REST API", "Cloudflare Workers", "CI/CD", "GitHub Actions"]
      },
      {
        group: "AI 与产品化",
        items: ["Prompt Engineering", "Agent Workflow", "RAG", "自动化内容生成"]
      }
    ] as ResumeSkillGroup[],
    detailedProjects: [
      {
        name: "Visionflow",
        background: "需要将零散的 AI 能力整合成可复用的工作流，服务业务团队的日常内容生产。",
        whatYouDid:
          "负责从产品需求到工程实现的全流程，设计模块化工作流引擎并搭建核心页面与任务编排机制。",
        techPoints: ["Next.js App Router", "TypeScript", "任务队列与状态管理", "多模型调用封装"],
        result: "TODO: 补充可量化结果，如任务时长缩短比例、日活、留存或交付效率提升。"
      },
      {
        name: "AI Box",
        background: "团队存在 AI 工具分散、使用路径不统一、培训成本高的问题。",
        whatYouDid:
          "主导统一入口设计，沉淀常用功能模块，建立版本迭代机制并持续维护核心能力。",
        techPoints: ["前后端分层", "权限与配置管理", "可观测性埋点", "部署自动化"],
        result: "TODO: 补充业务结果，如覆盖人数、功能使用频次、支持成本变化。"
      },
      {
        name: "企业文档",
        background: "项目扩展后，工程知识分散，影响新人上手与跨团队协作效率。",
        whatYouDid:
          "搭建文档结构标准，整理开发与交付流程，把高频问题固化为可检索指南。",
        techPoints: ["Markdown 文档体系", "信息架构设计", "文档自动化发布", "版本管理"],
        result: "TODO: 补充结果，如新人上手时间、重复问题减少比例、交付稳定性变化。"
      }
    ] as ResumeProjectDetail[],
    experiences: [
      {
        company: "TODO: 公司名称",
        role: "TODO: 职位名称",
        period: "TODO: 202X.XX - 202X.XX",
        responsibilities: [
          "TODO: 描述你的核心职责 1（突出负责范围与目标）",
          "TODO: 描述你的核心职责 2（突出技术决策或工程机制）",
          "TODO: 描述你的核心职责 3（突出业务结果或团队协作）"
        ]
      }
    ] as ResumeExperience[],
    education: ["TODO: 学校 / 专业 / 学位 / 时间（可留空）"],
    certificates: ["TODO: 证书名称 / 颁发机构 / 时间（可留空）"]
  }
};

export const contactQrGroups: ContactQrGroup[] = [
  {
    title: "联系方式",
    primary: [
      {
        label: "微信",
        hint: "扫码添加",
        file: "/qr_code/wechat-contact.jpg",
        alt: "WeChat Contact QR",
        title: "微信 二维码"
      },
      {
        label: "QQ",
        hint: "bes_creator / 3370942916",
        file: "/qr_code/qq-bes-creator.jpg",
        alt: "QQ QR",
        title: "QQ 二维码"
      }
    ],
    more: [
      {
        label: "抖音",
        hint: "idea_creator",
        file: "/qr_code/douyin-idea-creator.jpg",
        alt: "Douyin QR",
        title: "抖音 二维码"
      },
      {
        label: "快手",
        hint: "3375494733",
        file: "/qr_code/kuaishou-3375494733.jpg",
        alt: "Kuaishou QR",
        title: "快手 二维码"
      },
      {
        label: "哔哩哔哩",
        hint: "来碗红菇卤面",
        file: "/qr_code/bilibili-contact.jpg",
        alt: "Bilibili QR",
        title: "哔哩哔哩 二维码"
      },
      {
        label: "小红书",
        hint: "26965132305",
        file: "/qr_code/xiaohongshu-26965132305.jpg",
        alt: "Xiaohongshu QR",
        title: "小红书 二维码"
      },
      {
        label: "知乎",
        hint: "kojery",
        file: "/qr_code/zhihu-kojery.jpg",
        alt: "Zhihu QR",
        title: "知乎 二维码"
      },
      {
        label: "Telegram",
        hint: "@Z17LN",
        file: "/qr_code/telegram-z17ln.jpg",
        alt: "Telegram QR",
        title: "Telegram 二维码"
      },
      {
        label: "飞书",
        hint: "林智清",
        file: "/qr_code/feishu-linzhiqing.jpg",
        alt: "Feishu QR",
        title: "飞书 二维码"
      },
      {
        label: "钉钉",
        hint: "倍司网络科技",
        file: "/qr_code/dingtalk-besitech.jpg",
        alt: "DingTalk QR",
        title: "钉钉 二维码"
      },
      {
        label: "支付宝好友",
        hint: "bes_creator",
        file: "/qr_code/alipay-contact-bes-creator.jpg",
        alt: "Alipay Contact QR",
        title: "支付宝好友二维码"
      },
      {
        label: "闲鱼",
        hint: "bes",
        file: "/qr_code/xianyu-bes.jpg",
        alt: "Xianyu QR",
        title: "闲鱼 二维码"
      }
    ]
  },
  {
    title: "赞赏支持",
    primary: [
      {
        label: "微信支付",
        hint: "赞赏支持",
        file: "/qr_code/wechat-pay.jpg",
        alt: "WeChat Pay QR",
        title: "微信支付收款码"
      },
      {
        label: "支付宝",
        hint: "赞赏支持",
        file: "/qr_code/alipay-pay.jpg",
        alt: "Alipay Pay QR",
        title: "支付宝收款码"
      }
    ]
  }
];
