import type { Locale } from "@/lib/i18n";

export const dictionaries = {
  en: {
    meta: {
      title: "ARK Legacy Partner | Financial Planning & Insurance Malaysia",
      description:
        "Financial planning, protection, legacy and business solutions for individuals, families and businesses in Malaysia.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      funds: "AIA Funds",
      insights: "Insights",
      faq: "FAQ",
      contact: "Contact",
      book: "Book a Consultation",
      language: "Language",
      english: "EN",
      chinese: "中文",
    },
    footer: {
      summary:
        "ARK Legacy Partner provides financial planning and insurance solution discussions for personal and business needs in Malaysia. Details to be provided.",
      contact: "Contact: Details to be provided",
      navigation: "Navigation",
      services: "Services",
      legal: "Legal",
      disclaimer:
        "Disclaimer: Information on this website is for general educational purposes only and does not constitute financial, legal, tax or investment advice. ARK Legacy Partner / advisor is an appointed AIA insurance agent. Formal legal and compliance review is required before launch. License numbers, agent numbers, address and contact details are to be provided.",
      rights: "All rights reserved.",
      serviceItems: [
        "Financial Planning",
        "Insurance Planning",
        "Retirement Planning",
        "Wealth Planning",
        "Corporate Financial Solutions",
      ],
      legalItems: ["Privacy Policy", "Terms of Use", "Risk Disclosure", "Disclaimer"],
    },
    home: {
      hero: {
        eyebrow: "Financial Planning · Protection · Legacy",
        heading: ["Navigate Today.", "Protect Tomorrow.", "Leave a Legacy."],
        supporting: "Financial planning for the life, family and business you're building.",
        secondary:
          "ARK Legacy Partner brings planning, protection and long-term thinking into one clearer financial conversation.",
        primary: "Start a Conversation",
        secondaryCta: "Explore ARK",
        markers: ["01 Plan", "02 Protect", "03 Build", "04 Legacy"],
        visual: "Direction for what comes next.",
      },
      brand: {
        eyebrow: "Our Approach",
        heading: ["We don't start", "with products.", "We start with", "where you want to go."],
        supporting:
          "Financial planning begins by understanding your priorities, responsibilities and direction before discussing possible solutions.",
      },
      pillarsIntro: {
        eyebrow: "Direction · Protection · Progress · Legacy",
        title: "The journey is not a product list.",
        copy:
          "Each conversation can begin in a different place. The aim is to understand what matters, then connect the decisions that follow.",
      },
      pillars: [
        {
          id: "01 / Plan",
          title: "See the Bigger Picture.",
          items: ["Financial Planning", "Retirement Planning", "Financial Priorities"],
          copy: "Bring income, responsibilities and future milestones into one clearer view.",
        },
        {
          id: "02 / Protect",
          title: "Protect What Your Plans Depend On.",
          items: ["Life Protection", "Medical Protection", "Critical Illness", "Personal Protection"],
          copy: "Consider how insurance may support family, income and continuity planning.",
          disclosure:
            "Insurance solutions are provided through AIA and remain subject to applicable product terms, eligibility and policy conditions.",
        },
        {
          id: "03 / Build",
          title: "Protect the Business Behind the Vision.",
          items: ["Business Protection", "Key Person Considerations", "Employee Benefits", "Business Continuity"],
          copy: "Look at business responsibilities beyond the day-to-day operation.",
        },
        {
          id: "04 / Legacy",
          title: "Think Beyond Today.",
          items: ["Family Responsibilities", "Legacy Considerations", "Liquidity Planning", "Long-Term Intentions"],
          copy: "Frame future intentions with care, clarity and appropriate professional guidance where needed.",
        },
      ],
      journey: {
        eyebrow: "The ARK Approach",
        title: "A clearer direction, one decision at a time.",
        steps: ["Discover", "Understand", "Plan", "Protect", "Review"],
      },
      human: {
        eyebrow: "Personal by Design",
        heading: ["Financial planning", "is personal.", "The relationship", "should be too."],
        copy:
          "ARK believes meaningful financial planning begins with conversation, understanding and a relationship that evolves as life and business change.",
        cta: "Meet ARK",
      },
      insights: {
        eyebrow: "Insights",
        title: "Ideas for the Decisions That Matter.",
        cta: "Explore Insights",
        items: [
          ["Financial Planning", "Why Financial Planning Is More Than Investing"],
          ["Protection", "Insurance and Savings Serve Different Purposes"],
          ["Business", "What Business Owners Should Know About Key Person Risk"],
        ],
      },
      closing: {
        eyebrow: "Your Next Step",
        heading: ["Every plan starts", "with a conversation."],
        copy:
          "Tell us what matters to you. We'll start by understanding where you are and what you want to plan for next.",
        cta: "Start a Conversation",
      },
    },
    funds: {
      home: {
        eyebrow: "AIA Fund Updates",
        title: "Latest available NAV, verified from AIA Malaysia.",
        copy:
          "Selected AIA fund information is shown for convenient reference and should be read with the official AIA documentation.",
        clockLabel: "Kuala Lumpur",
        navLabel: "Latest Available NAV",
        navUnavailable: "NAV temporarily unavailable",
        asAt: "As at",
        viewDetails: "View Details",
        officialLink: "View Official Fund Information",
        allFunds: "View All AIA Funds",
      },
      overview: {
        metaTitle: "AIA Fund Information | ARK Legacy Partner",
        metaDescription:
          "Selected AIA fund information and latest available NAV data sourced from AIA Malaysia for convenient reference.",
        eyebrow: "AIA Fund Information",
        title: ["Selected AIA Funds.", "Clearer Information."],
        copy:
          "This page provides convenient access to selected AIA investment-linked fund information and latest available NAV data sourced from AIA Malaysia. ARK does not own, manage or independently rate these funds.",
        listEyebrow: "Selected Funds",
        listTitle: "Latest available NAV reference.",
        fundCode: "Fund Code",
        navLabel: "Latest Available NAV",
        navUnavailable: "NAV temporarily unavailable",
        asAt: "As at",
        source: "Source",
        dataChecked: "Data checked",
        viewDetails: "View Fund Details",
        officialLink: "View Official AIA Fund Information",
        disclosureTitle: "Important Disclosure",
        disclosure:
          "Fund prices are based on the latest available published NAV and are not real-time market quotations. Past performance is not indicative of future performance.",
      },
      detail: {
        eyebrow: "AIA Fund Information",
        heroCopy:
          "Selected fund information based on the latest available NAV verified from AIA Malaysia.",
        navLabel: "Latest Available NAV",
        navUnavailable: "NAV temporarily unavailable",
        fundName: "Fund Name",
        fundCode: "Fund Code",
        currency: "Currency",
        valuationDate: "Valuation Date",
        source: "Source",
        dataChecked: "Data checked",
        informationEyebrow: "Fund Information",
        informationTitle: "Reference details for this fund.",
        officialLink: "View Official AIA Fund Information ↗",
        historyEyebrow: "Historical NAV",
        historyTitle: "Historical NAV",
        historyCopy:
          "This chart area is ready for verified historical NAV data. No historical values are shown until they have been verified.",
        historyUnavailable: "Historical NAV data will be available after verification.",
        historyTemporaryUnavailable:
          "Historical NAV is temporarily unavailable. Please refer to the official AIA Malaysia fund information page.",
        disclosureTitle: "Important Disclosure",
        disclosure:
          "Fund prices are based on the latest available published NAV and are not real-time market quotations. Past performance is not indicative of future performance.",
      },
    },
    aboutPage: {
      meta: {
        title: "About ARK Legacy Partner | Financial Planning Malaysia",
        description:
          "Learn how ARK Legacy Partner approaches financial planning, protection and long-term financial conversations in Malaysia.",
      },
      hero: {
        eyebrow: "About ARK",
        title: ["Planning With Purpose.", "Built Around What Matters."],
        copy:
          "ARK Legacy Partner brings financial planning, protection and long-term thinking into clearer conversations for individuals, families and businesses.",
      },
      belief: {
        eyebrow: "What We Believe",
        title: ["Good financial planning", "starts with understanding."],
        copy:
          "Before discussing solutions, we begin with your priorities, responsibilities and the direction you want to take.",
      },
      approach: [
        {
          label: "01 / Understand",
          title: "Start With Your Priorities",
          copy:
            "We begin by understanding your current position, responsibilities, concerns and what matters most.",
        },
        {
          label: "02 / Plan",
          title: "Connect the Bigger Picture",
          copy:
            "Financial decisions rarely stand alone. We consider how different priorities and risks may connect.",
        },
        {
          label: "03 / Review",
          title: "Keep the Conversation Moving",
          copy:
            "Life, family and business circumstances change. Financial planning should be reviewed as priorities evolve.",
        },
      ],
      audience: {
        title: "Different Lives. Different Priorities.",
        items: [
          ["01", "Individuals", "Planning around personal priorities, protection and future milestones."],
          ["02", "Families", "Considering responsibilities, protection, retirement and legacy."],
          ["03", "Business Owners", "Looking at personal and business financial responsibilities together."],
          ["04", "Employers", "Exploring protection and employee benefit considerations."],
        ],
      },
      personal: {
        eyebrow: "Personal by Design",
        title: ["Financial planning is personal.", "The relationship should be too."],
        copy:
          "A meaningful financial conversation requires more than numbers. It requires context, understanding and a relationship that can evolve over time.",
      },
      advisor: {
        title: "Advisor Profile",
        copy:
          "Professional profile details are presented only after verification and approval.",
      },
      aia: {
        title: "Insurance Solutions",
        copy:
          "Insurance solutions discussed through ARK Legacy Partner are provided through AIA as part of the advisor's appointed agency relationship.",
        terms:
          "Product suitability, benefits, exclusions, eligibility and policy terms remain subject to the relevant official product documentation and applicable requirements.",
      },
      closing: {
        eyebrow: "Start With Clarity",
        title: "The next step is simply a conversation.",
        cta: "Start a Conversation",
      },
    },
    servicesPage: {
      meta: {
        title: "Financial Planning & Insurance Services | ARK Legacy Partner",
        description:
          "Explore ARK Legacy Partner services across planning, protection, business considerations and legacy planning.",
      },
      hero: {
        eyebrow: "What We Do",
        title: "Plan. Protect. Build. Legacy.",
        copy:
          "Financial decisions are connected. ARK brings different planning considerations into one clearer financial conversation.",
      },
      index: [
        ["01", "Plan", "plan"],
        ["02", "Protect", "protect"],
        ["03", "Build", "build"],
        ["04", "Legacy", "legacy"],
      ],
      sections: [
        {
          id: "plan",
          label: "01 / Plan",
          title: "See Your Financial Life as One Picture.",
          copy:
            "Financial planning helps connect today's responsibilities with tomorrow's priorities.",
          areas: [
            "Financial Planning",
            "Retirement Planning",
            "Cash Flow Considerations",
            "Future Milestones",
            "Regular Review",
          ],
        },
        {
          id: "protect",
          label: "02 / Protect",
          title: "Protect What Your Plans Depend On.",
          copy:
            "A strong financial plan also considers what may happen when health, income or family circumstances change unexpectedly.",
          areas: [
            "Life Protection",
            "Medical Protection",
            "Critical Illness Protection",
            "Personal Accident Protection",
            "Family Protection",
          ],
          disclosure:
            "Insurance solutions are provided through AIA and remain subject to applicable product terms, eligibility and policy conditions.",
        },
        {
          id: "build",
          label: "03 / Build",
          title: "Protect the Business Behind the Vision.",
          copy:
            "Business owners often carry responsibilities that extend beyond their personal finances.",
          areas: [
            "Key Person Protection",
            "Business Continuity",
            "Employee Benefits",
            "Corporate Financial Planning Considerations",
          ],
        },
        {
          id: "legacy",
          label: "04 / Legacy",
          title: "Think Beyond Today.",
          copy:
            "Legacy planning begins by considering the people, responsibilities and intentions that matter beyond the present.",
          areas: [
            "Family Responsibilities",
            "Legacy Considerations",
            "Liquidity Considerations",
            "Long-Term Intentions",
          ],
          note:
            "Legal, wills, trust and tax matters should be discussed with the appropriate qualified professionals.",
        },
      ],
      connects: {
        eyebrow: "One Conversation",
        title: ["Different priorities.", "One clearer direction."],
        steps: ["Plan", "Protect", "Build", "Legacy"],
      },
      closing: {
        eyebrow: "Where Do You Start?",
        title: "Start with what matters most to you.",
        copy:
          "You do not need to have every answer before starting a financial conversation.",
        cta: "Start a Conversation",
      },
    },
    contactPage: {
      meta: {
        title: "Contact ARK Legacy Partner | Financial Planning Malaysia",
        description:
          "Start a financial planning conversation with ARK Legacy Partner for personal, family or business priorities.",
      },
      hero: {
        eyebrow: "Start a Conversation",
        title: "Tell Us What Matters to You.",
        copy:
          "Whether you are planning for yourself, your family or your business, the first step is simply understanding what you want to plan for next.",
      },
      intro: {
        eyebrow: "How It Begins",
        title: "A clear conversation before any decision.",
        copy:
          "Use this preview form to share the area you would like to discuss. No live submission workflow is connected yet.",
      },
      process: [
        ["01 / Share", "Tell us what you would like to discuss."],
        ["02 / Connect", "We begin with a conversation to better understand your priorities."],
        ["03 / Next Step", "From there, we can discuss what areas may deserve attention."],
      ],
      form: {
        title: "Enquiry Details",
        name: "Name",
        phone: "Phone",
        email: "Email",
        topic: "I would like to discuss",
        topicPlaceholder: "Select an area",
        message: "Message",
        messagePlaceholder: "Anything useful for us to understand before the first conversation.",
        options: [
          "Personal Financial Planning",
          "Insurance & Protection",
          "Retirement Planning",
          "Legacy Planning",
          "Business Protection",
          "Employee Benefits",
          "Not Sure Yet",
        ],
        consentBefore: "I consent to ARK Legacy Partner collecting and using the information provided in this form for the purpose of responding to my enquiry, subject to the ",
        privacyPolicy: "Privacy Policy",
        consentAfter: ".",
        submit: "Send My Enquiry",
        successTitle: "Thank you. This form is currently in preview mode.",
        successCopy:
          "A live submission workflow will be connected before launch.",
        errors: {
          name: "Please enter your name.",
          contact: "Please provide either a phone number or email address.",
          topic: "Please select what you would like to discuss.",
          consent: "Please confirm the consent checkbox before continuing.",
        },
      },
      direct: {
        eyebrow: "Direct Contact",
        title: "Prefer to Reach Out Directly?",
        copy:
          "Verified contact details will be presented through the official site once confirmed.",
      },
    },
    faqPage: {
      meta: {
        title: "Financial Planning & Insurance FAQ | ARK Legacy Partner",
        description:
          "Clear answers to common questions about financial planning, insurance solutions, business planning and working with ARK.",
      },
      hero: {
        eyebrow: "Questions, Clearly Answered",
        title: "Start With the Questions That Matter.",
        copy:
          "Financial planning can feel complicated. Clear answers are a good place to begin.",
      },
      groups: [
        {
          title: "Financial Planning",
          items: [
            [
              "What does financial planning involve?",
              "Financial planning looks at how different parts of your financial life may connect, including priorities, responsibilities, protection, retirement and future goals.",
            ],
            [
              "Do I need to have a lot of money before speaking to a financial advisor?",
              "No specific level of wealth is required to begin a financial conversation. The starting point is understanding your current situation and priorities.",
            ],
            [
              "Is financial planning only about investing?",
              "No. Investing may be one consideration, but financial planning can also involve cash flow, protection, retirement, family responsibilities and long-term planning.",
            ],
          ],
        },
        {
          title: "Insurance & Protection",
          items: [
            [
              "What insurance solutions does ARK provide?",
              "Insurance solutions discussed through ARK Legacy Partner are provided through AIA as part of the advisor's appointed agency relationship.\n\nSpecific products, eligibility, benefits, exclusions and terms depend on the relevant official product documentation.",
            ],
            [
              "Is ARK an independent insurance broker?",
              "No. ARK should not be presented as an independent whole-of-market insurance broker. Insurance solutions are provided through the advisor's appointed relationship with AIA.",
            ],
            [
              "Can you guarantee that an insurance claim will be approved?",
              "No. Claims remain subject to policy terms, eligibility, exclusions, documentation and the insurer's assessment.",
            ],
          ],
        },
        {
          title: "Business",
          items: [
            [
              "Do you work with business owners?",
              "Yes. ARK can discuss financial protection considerations relevant to business owners, including key person risk, employee benefits and business continuity considerations.",
            ],
            [
              "Do you provide legal or tax advice?",
              "ARK should not be presented as a law firm, tax adviser or audit provider. Where legal, tax or specialist advice is required, clients should consult an appropriately qualified professional.",
            ],
          ],
        },
        {
          title: "Working With ARK",
          items: [
            [
              "What happens during the first conversation?",
              "The first conversation is primarily about understanding your current situation, priorities and what you would like to plan for.",
            ],
            [
              "Do I need to prepare documents before contacting ARK?",
              "Not necessarily for an initial conversation. If additional information is needed later, you can be told what would be useful to prepare.",
            ],
            [
              "Do you work with individuals as well as businesses?",
              "Yes. ARK works with financial planning and protection conversations relevant to individuals, families and businesses.",
            ],
          ],
        },
      ],
      closing: {
        eyebrow: "Still Have a Question?",
        title: "A conversation may be the easiest place to start.",
        cta: "Contact ARK",
      },
    },
    placeholder: {
      details: "Details to be provided",
      body:
        "This page is intentionally structured as a placeholder. Full copy, sections and compliance-reviewed details will be added in the next phases.",
    },
  },
  zh: {
    meta: {
      title: "ARK Legacy Partner | 马来西亚财务规划与保险方案",
      description: "为个人、家庭与企业提供财务规划、保障规划、传承与企业财务方案讨论。",
    },
    nav: {
      home: "首页",
      about: "关于我们",
      services: "服务",
      funds: "AIA 基金",
      insights: "洞察",
      faq: "常见问题",
      contact: "联系我们",
      book: "预约咨询",
      language: "语言",
      english: "EN",
      chinese: "中文",
    },
    footer: {
      summary:
        "ARK Legacy Partner 为马来西亚个人与企业客户提供财务规划与保险方案相关讨论。详细资料待补充。",
      contact: "联系方式：待补充",
      navigation: "导航",
      services: "服务",
      legal: "法律",
      disclaimer:
        "免责声明：本网站内容仅供一般教育参考，不构成财务、法律、税务或投资建议。ARK Legacy Partner / 顾问为 AIA 委任保险代理。正式上线前需完成法律与合规审核。执照编号、代理编号、地址与联系方式待补充。",
      rights: "版权所有。",
      serviceItems: ["财务规划", "保障规划", "退休规划", "财富规划", "企业财务方案"],
      legalItems: ["隐私政策", "使用条款", "风险披露", "免责声明"],
    },
    home: {
      hero: {
        eyebrow: "财务规划 · 保障规划 · 财富传承",
        heading: ["规划今天。", "守护明天。", "传承未来。"],
        supporting: "为你的人生、家庭与事业，规划更清晰的财务方向。",
        secondary:
          "ARK Legacy Partner 从规划、保障到长期传承，陪你看清每一个重要的财务决定。",
        primary: "开始咨询",
        secondaryCta: "了解 ARK",
        markers: ["01 规划", "02 保障", "03 前行", "04 传承"],
        visual: "为下一步建立清晰方向。",
      },
      brand: {
        eyebrow: "我们的方式",
        heading: ["我们不从", "产品开始。", "而是从", "你的目标开始。"],
        supporting:
          "真正的财务规划，应该先了解你的目标、责任与未来方向，再讨论适合的规划方式。",
      },
      pillarsIntro: {
        eyebrow: "方向 · 保障 · 前行 · 传承",
        title: "财务旅程，不只是一份产品清单。",
        copy: "每一次咨询都可以从不同问题开始。重点是先看清你在意什么，再连接后续的财务决定。",
      },
      pillars: [
        {
          id: "01 / 规划",
          title: "看清整体财务方向。",
          items: ["财务规划", "退休规划", "财务优先事项"],
          copy: "把收入、责任与未来阶段放在同一个画面中理解。",
        },
        {
          id: "02 / 保障",
          title: "守护计划所依靠的一切。",
          items: ["人寿保障", "医疗保障", "重大疾病保障", "个人保障"],
          copy: "了解保险如何在家庭、收入与延续规划中发挥作用。",
          disclosure:
            "保险方案由 AIA 提供，并须符合相关产品条款、资格要求与保单条件。",
        },
        {
          id: "03 / 稳健前行",
          title: "守护事业背后的愿景。",
          items: ["企业保障", "关键人物保障", "员工福利", "企业延续规划"],
          copy: "把企业责任放到日常运营之外，进行更长远的考量。",
        },
        {
          id: "04 / 传承",
          title: "为今天之后作准备。",
          items: ["家庭责任", "财富传承规划", "流动性考量", "长期意愿"],
          copy: "以清晰、审慎的方式整理未来意愿；涉及法律或税务事项，应咨询相应专业人士。",
        },
      ],
      journey: {
        eyebrow: "ARK 规划方式",
        title: "每一个决定，都可以让方向更清晰。",
        steps: ["探索", "理解", "规划", "保障", "检视"],
      },
      human: {
        eyebrow: "以人为本",
        heading: ["财务规划", "关乎个人。", "顾问关系", "也应该如此。"],
        copy:
          "ARK 相信，有意义的财务规划始于对话、理解，以及一段会随着人生与事业变化而持续调整的关系。",
        cta: "认识 ARK",
      },
      insights: {
        eyebrow: "理财知识",
        title: "为重要决定，提供更清晰的思考。",
        cta: "浏览理财知识",
        items: [
          ["财务规划", "为什么财务规划不只是投资"],
          ["保障规划", "保险与储蓄承担不同角色"],
          ["企业", "企业主应如何理解关键人物风险"],
        ],
      },
      closing: {
        eyebrow: "下一步",
        heading: ["每一份规划", "都从一次对话开始。"],
        copy: "告诉我们什么对你重要。我们会先了解你现在的位置，以及下一步想规划的方向。",
        cta: "开始咨询",
      },
    },
    funds: {
      home: {
        eyebrow: "AIA 基金更新",
        title: "从 AIA Malaysia 核实的最新可用 NAV。",
        copy:
          "此处提供部分 AIA 基金资料，方便参考；完整资料仍应以 AIA 官方文件为准。",
        clockLabel: "Kuala Lumpur",
        navLabel: "最新可用 NAV",
        navUnavailable: "NAV 暂时无法显示",
        asAt: "截至",
        viewDetails: "查看详情",
        officialLink: "查看官方基金资料",
        allFunds: "查看 AIA 基金",
      },
      overview: {
        metaTitle: "AIA 基金资料 | ARK Legacy Partner",
        metaDescription:
          "精选 AIA 基金资料与最新可用 NAV，资料来源为 AIA Malaysia，方便访客参考。",
        eyebrow: "AIA 基金资料",
        title: ["精选 AIA 基金。", "更清晰的基金资讯。"],
        copy:
          "此页面整理部分 AIA 投资连结基金资料与最新可用 NAV，方便访客查阅。资料来源为 AIA Malaysia；ARK 并不拥有、管理或独立评级这些基金。",
        listEyebrow: "精选基金",
        listTitle: "最新可用 NAV 参考。",
        fundCode: "基金代码",
        navLabel: "最新可用 NAV",
        navUnavailable: "NAV 暂时无法显示",
        asAt: "截至",
        source: "资料来源",
        dataChecked: "资料检查时间",
        viewDetails: "查看基金详情",
        officialLink: "查看 AIA 官方基金资料",
        disclosureTitle: "重要披露",
        disclosure:
          "基金价格以最新公布的可用 NAV 为依据，并非实时市场报价。过往表现并不代表未来表现。",
      },
      detail: {
        eyebrow: "AIA 基金资料",
        heroCopy:
          "以下基金资料以从 AIA Malaysia 核实的最新可用 NAV 为依据。",
        navLabel: "最新可用 NAV",
        navUnavailable: "NAV 暂时无法显示",
        fundName: "基金名称",
        fundCode: "基金代码",
        currency: "货币",
        valuationDate: "估值日期",
        source: "资料来源",
        dataChecked: "资料检查时间",
        informationEyebrow: "基金资料",
        informationTitle: "此基金的参考资料。",
        officialLink: "查看 AIA 官方基金资料 ↗",
        historyEyebrow: "历史 NAV",
        historyTitle: "历史 NAV",
        historyCopy:
          "此图表区域已为已核实的历史 NAV 数据预留。在数据完成核实前，不会显示历史数值。",
        historyUnavailable: "历史 NAV 数据将在核实后提供。",
        historyTemporaryUnavailable:
          "历史 NAV 暂时无法显示，请参阅 AIA Malaysia 官方基金资料页面。",
        disclosureTitle: "重要披露",
        disclosure:
          "基金价格以最新公布的可用 NAV 为依据，并非实时市场报价。过往表现并不代表未来表现。",
      },
    },
    aboutPage: {
      meta: {
        title: "关于 ARK Legacy Partner | 马来西亚财务规划",
        description:
          "了解 ARK Legacy Partner 如何以清晰对话，协助个人、家庭与企业思考财务规划、保障与长期传承。",
      },
      hero: {
        eyebrow: "关于 ARK",
        title: ["有方向的规划，", "从真正重要的事开始。"],
        copy:
          "ARK Legacy Partner 从财务规划、保障到长期传承，与个人、家庭及企业一起看清重要的财务决定。",
      },
      belief: {
        eyebrow: "我们的理念",
        title: ["好的财务规划，", "从真正了解你开始。"],
        copy:
          "在讨论方案之前，我们先了解你的目标、责任，以及你希望前往的方向。",
      },
      approach: [
        {
          label: "01 / 了解",
          title: "从你的需求开始",
          copy:
            "我们先了解你目前的状况、责任、关注重点，以及真正重要的目标。",
        },
        {
          label: "02 / 规划",
          title: "看见完整的财务全貌",
          copy:
            "财务决定往往彼此相关。我们从整体角度理解不同目标、责任与风险之间的关系。",
        },
        {
          label: "03 / 检视",
          title: "让规划随着人生前进",
          copy:
            "人生、家庭与事业都会变化，财务规划也应该随着新的阶段持续检视。",
        },
      ],
      audience: {
        title: "不同人生阶段，不同规划重点。",
        items: [
          ["01", "个人", "围绕个人目标、保障需求与未来重要阶段进行规划。"],
          ["02", "家庭", "从家庭责任、保障、退休到长期传承进行思考。"],
          ["03", "企业主", "同时看待个人与企业所承担的财务责任。"],
          ["04", "雇主", "了解企业保障与员工福利相关的规划需求。"],
        ],
      },
      personal: {
        eyebrow: "以人为本",
        title: ["财务规划关乎每个人，", "顾问关系也应该如此。"],
        copy:
          "真正有意义的财务规划，不只是数字，更需要了解你的背景、责任与不断变化的人生阶段。",
      },
      advisor: {
        title: "顾问资料",
        copy: "专业资料与资历只会在完成核实与批准后展示。",
      },
      aia: {
        title: "保险方案",
        copy:
          "ARK Legacy Partner 所讨论的保险方案通过 AIA 提供，并基于顾问与 AIA 的委任代理关系。",
        terms:
          "具体保障内容、适用条件、除外责任、资格及保单条款，均以相关官方产品文件及适用要求为准。",
      },
      closing: {
        eyebrow: "从了解开始",
        title: "下一步，从一次对话开始。",
        cta: "预约咨询",
      },
    },
    servicesPage: {
      meta: {
        title: "财务规划与保险服务 | ARK Legacy Partner",
        description:
          "了解 ARK Legacy Partner 在财务规划、保障规划、企业责任与财富传承方面的服务方向。",
      },
      hero: {
        eyebrow: "我们的服务",
        title: "规划 · 保障 · 前行 · 传承",
        copy:
          "财务决定彼此相连。ARK 从整体角度与你一起看清不同阶段的重要规划。",
      },
      index: [
        ["01", "规划", "plan"],
        ["02", "保障", "protect"],
        ["03", "前行", "build"],
        ["04", "传承", "legacy"],
      ],
      sections: [
        {
          id: "plan",
          label: "01 / 规划",
          title: "从整体，看清你的财务方向。",
          copy:
            "财务规划把今天的责任与未来的目标连接起来，让重要决定更有方向。",
          areas: ["财务规划", "退休规划", "现金流考量", "未来目标", "定期检视"],
        },
        {
          id: "protect",
          label: "02 / 保障",
          title: "守护支撑未来计划的重要基础。",
          copy:
            "完整的财务规划，也需要考虑健康、收入或家庭状况发生变化时可能带来的影响。",
          areas: ["人寿保障", "医疗保障", "重大疾病保障", "个人意外保障", "家庭保障"],
          disclosure:
            "保险方案由 AIA 提供，并须符合相关产品条款、资格要求与保单条件。",
        },
        {
          id: "build",
          label: "03 / 前行",
          title: "守护你一路建立的事业。",
          copy:
            "企业主所承担的财务责任，往往不只属于个人，也关系到团队与企业未来。",
          areas: ["关键人物保障", "企业延续规划", "员工福利", "企业财务规划考量"],
        },
        {
          id: "legacy",
          label: "04 / 传承",
          title: "今天的规划，也为了更远的未来。",
          copy:
            "传承规划从你重视的人、承担的责任，以及希望延续的心意开始。",
          areas: ["家庭责任", "传承考量", "流动性考量", "长期规划意向"],
          note: "涉及法律、遗嘱、信托或税务事项，应咨询相应合资格专业人士。",
        },
      ],
      connects: {
        eyebrow: "一个完整的规划视角",
        title: ["不同的目标，", "朝向更清晰的方向。"],
        steps: ["规划", "保障", "前行", "传承"],
      },
      closing: {
        eyebrow: "从哪里开始？",
        title: "从你最在意的事情开始。",
        copy: "开始财务规划之前，你不需要先准备好所有答案。",
        cta: "预约咨询",
      },
    },
    contactPage: {
      meta: {
        title: "联系 ARK Legacy Partner | 财务规划咨询",
        description:
          "与 ARK Legacy Partner 开始财务规划咨询，了解个人、家庭或企业相关规划方向。",
      },
      hero: {
        eyebrow: "开始对话",
        title: "告诉我们，你现在最在意什么。",
        copy:
          "无论是为自己、家庭还是事业进行规划，第一步都是先了解你现在最想解决的问题。",
      },
      intro: {
        eyebrow: "如何开始",
        title: "先从一次清晰对话开始。",
        copy:
          "你可以通过此预览表格分享想了解的方向。目前表格尚未连接正式提交流程。",
      },
      process: [
        ["01 / 告诉我们", "分享你目前最想了解的事情。"],
        ["02 / 开始沟通", "我们先通过对话了解你的重点与需求。"],
        ["03 / 下一步", "再一起确认哪些规划方向值得优先关注。"],
      ],
      form: {
        title: "咨询资料",
        name: "姓名",
        phone: "联系电话",
        email: "电子邮箱",
        topic: "我想了解",
        topicPlaceholder: "请选择方向",
        message: "想告诉我们的内容",
        messagePlaceholder: "你可以简单说明目前想了解的事情。",
        options: [
          "个人财务规划",
          "保险与保障",
          "退休规划",
          "财富传承规划",
          "企业保障",
          "员工福利",
          "暂时不确定",
        ],
        consentBefore: "我同意 ARK Legacy Partner 为回复本次咨询而收集及使用我在此表格中提供的资料，并受",
        privacyPolicy: "隐私政策",
        consentAfter: "约束。",
        submit: "提交咨询",
        successTitle: "谢谢你。目前表格仍处于预览模式。",
        successCopy: "正式提交流程将在上线前连接。",
        errors: {
          name: "请输入姓名。",
          contact: "请至少提供联系电话或电子邮箱其中一项。",
          topic: "请选择你想了解的方向。",
          consent: "请确认同意声明后再继续。",
        },
      },
      direct: {
        eyebrow: "直接联系",
        title: "希望直接与我们联系？",
        copy: "经核实的正式联系方式将在确认后展示于官方网站。",
      },
    },
    faqPage: {
      meta: {
        title: "财务规划与保险常见问题 | ARK Legacy Partner",
        description:
          "了解财务规划、保险与保障、企业规划以及与 ARK 合作的常见问题。",
      },
      hero: {
        eyebrow: "常见问题",
        title: "从你真正想知道的问题开始。",
        copy: "财务规划可能看起来复杂，但清楚的答案可以让第一步简单很多。",
      },
      groups: [
        {
          title: "财务规划",
          items: [
            [
              "财务规划包括什么？",
              "财务规划会从整体角度了解你的财务状况，包括目标、责任、保障、退休以及未来的重要计划。",
            ],
            [
              "一定要有很多资产才需要做财务规划吗？",
              "不一定。开始财务规划的重点，是先了解你目前的状况与未来目标，而不是先达到某一个资产门槛。",
            ],
            [
              "财务规划是不是只等于投资？",
              "不是。投资可能只是其中一部分，财务规划也会涉及现金流、保障、退休、家庭责任与长期安排。",
            ],
          ],
        },
        {
          title: "保险与保障",
          items: [
            [
              "ARK 提供哪些保险方案？",
              "ARK Legacy Partner 所讨论的保险方案通过 AIA 提供，并基于顾问与 AIA 的委任代理关系。\n\n具体产品、资格、保障内容、除外责任及条款均以相关官方文件为准。",
            ],
            [
              "ARK 是独立保险经纪吗？",
              "不是。ARK 并非面向整个市场进行比较的独立保险经纪。保险方案通过顾问与 AIA 的委任代理关系提供。",
            ],
            [
              "可以保证保险理赔一定获批吗？",
              "不能。理赔结果仍取决于保单条款、资格、除外责任、所需文件以及保险公司的审核。",
            ],
          ],
        },
        {
          title: "企业规划",
          items: [
            [
              "你们有服务企业主吗？",
              "有。ARK 可以与企业主讨论相关的财务保障需求，例如关键人物风险、员工福利以及企业延续规划。",
            ],
            [
              "ARK 会提供法律或税务意见吗？",
              "ARK 并非律师事务所、税务顾问或审计机构。涉及法律、税务或其他专业事项时，应咨询具备相应资格的专业人士。",
            ],
          ],
        },
        {
          title: "与 ARK 合作",
          items: [
            [
              "第一次咨询通常会谈什么？",
              "第一次沟通主要是了解你目前的状况、关注重点，以及你希望进一步规划的方向。",
            ],
            [
              "第一次联系之前需要准备很多文件吗？",
              "通常不需要。初步沟通后，如果需要进一步资料，我们再告诉你哪些文件会比较有帮助。",
            ],
            [
              "ARK 同时服务个人和企业吗？",
              "是的。ARK 的规划与保障讨论可面向个人、家庭以及企业客户。",
            ],
          ],
        },
      ],
      closing: {
        eyebrow: "还有问题？",
        title: "直接聊一聊，可能是最简单的开始。",
        cta: "联系我们",
      },
    },
    placeholder: {
      details: "资料待补充",
      body: "此页面目前保留为基础结构。完整内容、页面区块与合规审核后的资料将在后续阶段加入。",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
