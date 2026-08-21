import type { Locale } from "@/lib/i18n";

export type InsightCategory = "financial-planning" | "protection" | "business" | "legacy";

export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

export type InsightArticle = {
  slug: string;
  categoryKey: InsightCategory;
  category: string;
  title: string;
  summary: string;
  seoDescription: string;
  pullQuote: string;
  sections: InsightSection[];
};

export const insightCategoryLabels: Record<Locale, Record<"all" | InsightCategory, string>> = {
  en: {
    all: "All",
    "financial-planning": "Financial Planning",
    protection: "Protection",
    business: "Business",
    legacy: "Legacy",
  },
  zh: {
    all: "全部",
    "financial-planning": "财务规划",
    protection: "保障",
    business: "企业",
    legacy: "财富传承",
  },
};

export const insightHubCopy = {
  en: {
    meta: {
      title: "Financial Education Insights | ARK Legacy Partner",
      description:
        "Educational insights on financial planning, protection, business continuity and long-term financial decisions.",
    },
    hero: {
      eyebrow: "Insights",
      title: "Ideas for the Decisions That Matter.",
      copy:
        "Clear perspectives on financial planning, protection, business and long-term financial decisions.",
    },
    featured: "Featured Insight",
    readArticle: "Read Article",
    readMore: "Read Article",
  },
  zh: {
    meta: {
      title: "理财知识 | ARK Legacy Partner",
      description:
        "以清楚、负责任的方式理解财务规划、保障、企业延续与长期财务决定。",
    },
    hero: {
      eyebrow: "理财知识",
      title: "看懂重要决定背后的逻辑。",
      copy:
        "从财务规划、保障、企业到长期传承，用更清楚的方式理解重要的财务课题。",
    },
    featured: "重点文章",
    readArticle: "阅读文章",
    readMore: "阅读文章",
  },
} as const;

export const articleUiCopy = {
  en: {
    inThisArticle: "In This Article",
    minRead: "min read",
    related: "Related Insights",
    disclaimerTitle: "Educational Information Disclaimer",
    disclaimer:
      "This article is provided for general educational information only and should not be treated as personalised financial, legal, tax or investment advice. Individual circumstances differ and appropriate professional advice should be considered where relevant. Insurance products, where discussed, remain subject to applicable eligibility, policy terms, exclusions and official product documentation.",
    closing: {
      eyebrow: "Continue the Conversation",
      title: "Have a question about how this may relate to your situation?",
      cta: "Start a Conversation",
    },
  },
  zh: {
    inThisArticle: "本文目录",
    minRead: "分钟阅读",
    related: "相关阅读",
    disclaimerTitle: "教育资讯免责声明",
    disclaimer:
      "本文仅供一般教育与知识分享，不应视为针对个人情况的财务、法律、税务或投资建议。每个人的情况不同，如有需要，应咨询具备相关资格的专业人士。文章如涉及保险内容，具体资格、保障范围、除外责任及条款均以相关官方产品文件为准。",
    closing: {
      eyebrow: "继续了解",
      title: "想知道这些内容与你的情况有什么关系？",
      cta: "预约咨询",
    },
  },
} as const;

export const insights: Record<Locale, InsightArticle[]> = {
  en: [
    {
      slug: "financial-planning-beyond-investing",
      categoryKey: "financial-planning",
      category: "Financial Planning",
      title: "Why Financial Planning Is More Than Investing",
      summary:
        "Investing can be part of a financial plan, but it is only one piece. A clearer financial picture also considers cash flow, protection, retirement, responsibilities and future priorities.",
      seoDescription:
        "Learn why financial planning is broader than investing, including cash flow, protection, retirement, responsibilities and future goals.",
      pullQuote:
        "Financial planning is not a single decision. It is the discipline of connecting many decisions so they support the life, family or business you are building.",
      sections: [
        {
          heading: "Investing Is Only One Part",
          paragraphs: [
            "Investing often receives the most attention because it feels visible, measurable and exciting. People can compare returns, follow markets and discuss opportunities. But financial planning is broader than choosing where to invest money. A plan asks how money, risk, responsibilities and future priorities connect.",
            "An investment decision may help grow wealth over time, but it does not automatically answer questions about liquidity, emergency reserves, protection, retirement income, family commitments or business responsibilities. A person can own investments and still feel unclear about whether the wider financial picture is stable.",
          ],
        },
        {
          heading: "Start With Where You Are",
          paragraphs: [
            "A useful financial conversation usually begins with the present. What income is coming in? What expenses are fixed? What commitments must continue each month? How much flexibility is available if something changes? These questions may sound simple, but they create the foundation for later decisions.",
            "Before discussing investment ideas, it can be helpful to understand cash flow, debts, dependants, emergency reserves and existing protection. The goal is not to judge whether someone is ahead or behind. The goal is to see the current picture clearly enough that future decisions are made with context.",
          ],
        },
        {
          heading: "Protect the Plan",
          paragraphs: [
            "A financial plan can look strong on paper but become fragile if it ignores risk. Unexpected illness, accident, income disruption or family change can affect long-term goals. Protection planning does not remove uncertainty, and it should never be described as a guarantee. It is one way to discuss how certain financial risks may be managed.",
            "This is why protection is part of planning rather than a separate afterthought. When responsibilities depend on income, health or business continuity, those dependencies deserve attention. The question is not only how much can be accumulated, but also what could interrupt the plan before the goal is reached.",
          ],
        },
        {
          heading: "Think About Future Milestones",
          paragraphs: [
            "Different people plan for different milestones. For some, the next concern may be family responsibilities, a home, education funding or retirement. For others, it may be building a business, supporting parents, creating liquidity or thinking about legacy. These priorities may happen at different times, but they often affect one another.",
            "Good planning does not require every answer at the start. It requires a way to name the important milestones and understand which decisions need attention now, later or only after circumstances change. That structure helps prevent every financial question from feeling urgent at the same time.",
          ],
        },
        {
          heading: "Review, Don't Set and Forget",
          paragraphs: [
            "Financial planning is not something to complete once and ignore. Life changes. Income changes. Family responsibilities change. Business risks, health needs and retirement expectations may also change. A plan that made sense five years ago may need to be reviewed when priorities evolve.",
            "Regular review does not mean constantly changing everything. It means checking whether the plan still reflects the current situation and the direction ahead. Sometimes the right action is to adjust. Sometimes it is simply to stay disciplined and continue.",
          ],
        },
        {
          heading: "The Bigger Picture",
          paragraphs: [
            "Financial planning is about connecting decisions rather than focusing on a single product, investment or account. Investing may matter, but it is only one part of a wider conversation about cash flow, protection, retirement, responsibilities and future priorities.",
            "A clearer plan helps people understand what they are building, what could interrupt it and what may deserve attention next. That bigger picture is often where better financial conversations begin.",
          ],
        },
      ],
    },
    {
      slug: "insurance-vs-savings",
      categoryKey: "protection",
      category: "Protection",
      title: "Insurance and Savings Serve Different Purposes",
      summary:
        "Savings can provide flexibility and liquidity. Insurance is designed to address certain financial risks. Understanding their different roles can lead to better financial conversations.",
      seoDescription:
        "Understand the different roles savings and insurance can play in financial planning, liquidity and risk management.",
      pullQuote:
        "Savings help provide flexibility. Insurance is designed to address certain financial risks. A stronger plan often understands the role of both.",
      sections: [
        {
          heading: "The Common Misunderstanding",
          paragraphs: [
            "It is common for people to treat savings and financial protection as if they solve the same problem. The thinking is understandable: if there is enough money set aside, perhaps that money can be used when something unexpected happens. Savings are important, but they are not always designed for the same role as insurance.",
            "Saving money is usually about building flexibility and liquidity. Insurance is usually about transferring or sharing certain financial risks, subject to policy terms and eligibility. Confusing the two can lead to a plan that feels comfortable until a larger or more complex event happens.",
          ],
        },
        {
          heading: "What Savings Are Good For",
          paragraphs: [
            "Savings are useful because they are accessible. An emergency fund can help with temporary income disruption, urgent repairs, medical deposits, family needs or other short-term commitments. Savings can also support planned expenses such as education, travel, business cash flow or upcoming purchases.",
            "Liquidity matters because not every problem requires a long-term solution. Sometimes the best financial tool is simply money that can be accessed without delay. A person who has no savings may be forced to borrow, sell assets quickly or interrupt longer-term plans when a short-term need appears.",
          ],
        },
        {
          heading: "What Insurance Is Designed For",
          paragraphs: [
            "Insurance is designed for certain financial risks that may be difficult to absorb using savings alone. Depending on the type of coverage, it may relate to life protection, medical expenses, critical illness, personal accident or other defined risks. Any discussion must remain subject to the relevant policy terms, exclusions, eligibility and official product documentation.",
            "It is important not to describe insurance as a guaranteed solution for every situation. Claims remain subject to assessment and policy conditions. The planning value lies in understanding what risks exist, what responsibilities may be affected and whether an insurance solution may be relevant.",
          ],
        },
        {
          heading: "Why One Does Not Automatically Replace the Other",
          paragraphs: [
            "A savings account may help cover several months of expenses, but it may not be intended to handle a major long-term income disruption. On the other hand, insurance may respond only to specific covered events and may not help with everyday flexibility. These are different functions.",
            "For example, a family might use savings for short-term needs while also discussing protection for responsibilities that depend heavily on income. A business owner might keep cash reserves for operations while also considering what could happen if a key person is suddenly absent. The point is not to choose one over the other, but to understand the role each may play.",
          ],
        },
        {
          heading: "Building Both Into a Financial Plan",
          paragraphs: [
            "A balanced financial conversation often includes both liquidity and protection. Liquidity helps people respond to smaller or shorter-term needs. Protection planning considers events that could significantly disrupt the wider plan. Both may support stability, but in different ways.",
            "The right mix depends on circumstances. Family responsibilities, income stability, business commitments, health needs and existing resources all matter. That is why the conversation should begin with context rather than with a product.",
          ],
        },
        {
          heading: "Questions Worth Asking",
          paragraphs: [
            "How long could my savings support my responsibilities if income stopped temporarily? What financial responsibilities depend on my income? What risks could significantly disrupt my plan? Which commitments would continue even if my health, work or business changed?",
            "These questions do not produce instant answers, but they create a better starting point. Savings and insurance are not the same thing. Understanding their different purposes can make the financial planning conversation more practical and more responsible.",
          ],
        },
      ],
    },
    {
      slug: "key-person-risk-business",
      categoryKey: "business",
      category: "Business",
      title: "What Business Owners Should Know About Key Person Risk",
      summary:
        "Some businesses depend heavily on founders, directors or key employees. Understanding that dependency is an important part of business continuity conversations.",
      seoDescription:
        "Learn what key person risk means for business owners and why dependency, continuity and financial commitments deserve attention.",
      pullQuote:
        "Key person risk is not only an insurance question. It begins with understanding who the business depends on and what could be disrupted if that person is suddenly absent.",
      sections: [
        {
          heading: "Who Is a Key Person?",
          paragraphs: [
            "A key person is someone whose knowledge, relationships, leadership or production is difficult for a business to replace quickly. In many businesses, this may be the founder or managing director. In others, it may be a top salesperson, technical expert, project lead, operations head or person who holds important client relationships.",
            "The title is less important than the dependency. If a person's sudden absence could materially affect revenue, operations, financing, client confidence or delivery, that person may represent a key person risk. Small and medium-sized businesses often feel this risk more strongly because responsibilities are concentrated among fewer people.",
          ],
        },
        {
          heading: "What Happens When That Person Is Suddenly Absent?",
          paragraphs: [
            "The impact of losing a key person can be broader than the immediate emotional shock. Revenue may slow if the person manages major accounts. Client relationships may weaken if trust sits with one individual. Operations may be disrupted if technical knowledge or decision-making authority is not documented or shared.",
            "There may also be financial commitments that continue regardless of disruption: salaries, rent, supplier obligations, loan repayments, project costs or recruitment expenses. Finding and training a replacement may take time. During that period, the business may need liquidity and a clear continuity plan.",
          ],
        },
        {
          heading: "Key Person Risk Is More Than Insurance",
          paragraphs: [
            "It is tempting to treat key person risk as an insurance topic only. Insurance may be one possible consideration, subject to suitability, underwriting, policy terms and official documentation. But the first step is not to jump straight into a product. The first step is to understand the dependency.",
            "A business continuity conversation may include documentation of processes, delegation of authority, succession planning, client relationship management, emergency cash reserves and protection planning. These areas work together. Insurance, where relevant, is part of a wider discussion rather than the entire answer.",
          ],
        },
        {
          heading: "Questions Business Owners Can Ask",
          paragraphs: [
            "Which person would be hardest to replace within three to six months? What revenue depends heavily on one person's relationships or expertise? Which client relationships would be most vulnerable? What operational knowledge is not documented? What commitments would continue even if revenue slowed?",
            "Business owners can also ask how long recruitment and training might take, whether a temporary replacement is realistic and what level of liquidity would be needed during disruption. These questions help turn a vague concern into a clearer planning conversation.",
          ],
        },
        {
          heading: "Business Continuity Is a Conversation",
          paragraphs: [
            "Key person risk is ultimately about continuity. A business is more resilient when it understands where dependency exists and has considered what could happen if a key person is suddenly absent. That does not mean every risk can be removed. It means the business owner is not ignoring a risk that could affect people, clients and financial commitments.",
            "For many businesses, the best starting point is a structured conversation: who matters most to continuity, what would be disrupted and what options may deserve attention. From there, business protection can be discussed responsibly and in context.",
          ],
        },
      ],
    },
  ],
  zh: [
    {
      slug: "financial-planning-beyond-investing",
      categoryKey: "financial-planning",
      category: "财务规划",
      title: "为什么财务规划不只是投资？",
      summary:
        "投资可以是财务规划的一部分，但不是全部。完整的财务规划还需要考虑现金流、保障、退休、家庭责任以及未来的重要目标。",
      seoDescription:
        "了解为什么财务规划不只是投资，也包括现金流、保障、退休、家庭责任和未来目标。",
      pullQuote:
        "财务规划不是单一决定，而是把不同财务决定连接起来，让它们更好地支持你正在建立的人生、家庭或事业。",
      sections: [
        {
          heading: "投资只是其中一部分",
          paragraphs: [
            "谈到财务规划，很多人第一时间想到投资。投资当然可能是规划的一部分，因为它看得见、可以比较，也容易成为话题。但真正的财务规划，不只是选择把钱放在哪里，而是看清收入、责任、风险与未来目标之间的关系。",
            "一个人可以有投资，却仍然不确定现金流是否稳定、紧急储备是否足够、家庭责任是否有保障、退休方向是否清晰。投资回答的是部分问题，而财务规划要处理的是更完整的财务画面。",
          ],
        },
        {
          heading: "先看清你现在的位置",
          paragraphs: [
            "好的财务对话通常从现在开始。你的收入来自哪里？每月固定支出是多少？有哪些贷款、家庭责任或企业承诺必须持续？如果收入或健康突然发生变化，现有安排可以支撑多久？这些问题看似基础，却是后续规划的根基。",
            "在讨论任何投资想法之前，先理解现金流、债务、家人责任、紧急储备以及已有保障，会让决定更有依据。重点不是评判目前做得够不够好，而是先把现况看清楚。",
          ],
        },
        {
          heading: "守护你的计划",
          paragraphs: [
            "一个计划在纸面上看起来很好，但如果完全没有考虑风险，也可能很脆弱。疾病、意外、收入中断或家庭变化，都可能影响长期目标。保障规划不能消除所有不确定性，也不应被描述成保证，但它可以帮助我们讨论某些财务风险如何被管理。",
            "因此，保障不是财务规划之外的附属品。只要家庭、收入或企业延续依赖某些条件，这些依赖就值得被认真看待。规划不只是累积多少资产，也包括什么事情可能打断计划。",
          ],
        },
        {
          heading: "思考未来重要阶段",
          paragraphs: [
            "每个人在意的阶段不同。有些人关心家庭、房屋、教育或退休；有些人正在建立事业、支持父母、准备流动性，或开始思考传承。不同目标看似分开，但往往会互相影响。",
            "财务规划不需要一开始就拥有所有答案。它需要的是把重要目标说清楚，再判断哪些现在要处理，哪些可以稍后安排，哪些需要随着人生阶段再调整。这样，财务问题就不会全部挤在同一时间变成压力。",
          ],
        },
        {
          heading: "规划需要定期检视",
          paragraphs: [
            "财务规划不是做一次就结束。人生会变，收入会变，家庭责任会变，企业风险和退休期待也可能改变。几年前适合的安排，未必完全适合今天。",
            "定期检视不是不断改变所有东西，而是确认现有安排是否仍然符合现在的情况和未来方向。有时候需要调整，有时候最好的做法只是保持纪律，继续前进。",
          ],
        },
        {
          heading: "看见完整画面",
          paragraphs: [
            "财务规划的重点，是把不同决定连接起来，而不是只关注某一个产品、账户或投资。投资可能重要，但它只是现金流、保障、退休、责任与未来目标中的一部分。",
            "当你看见更完整的画面，就更容易理解自己正在建立什么、哪些风险可能影响它，以及下一步值得关注什么。很多更好的财务对话，都是从这个完整画面开始。",
          ],
        },
      ],
    },
    {
      slug: "insurance-vs-savings",
      categoryKey: "protection",
      category: "保障",
      title: "保险和储蓄，其实解决的是不同问题",
      summary:
        "储蓄提供的是灵活性与流动性，而保险主要用于应对特定的财务风险。了解两者不同的作用，有助于建立更完整的财务规划。",
      seoDescription:
        "理解储蓄与保险在财务规划中承担的不同角色，包括流动性、短期需要和风险管理。",
      pullQuote:
        "储蓄提供灵活性，保险则用于讨论特定财务风险。更完整的规划，通常需要理解两者各自的角色。",
      sections: [
        {
          heading: "常见的误解",
          paragraphs: [
            "很多人会把储蓄和财务保障看成同一件事。这个想法并不奇怪：如果已经存了一笔钱，发生事情时似乎就可以用这笔钱应对。储蓄确实重要，但它和保险解决的问题并不完全一样。",
            "储蓄主要提供灵活性和流动性；保险则通常用于转移或分担某些特定财务风险，并须符合保单条款、资格和除外责任。把两者混为一谈，可能会让计划在面对较大风险时显得不足。",
          ],
        },
        {
          heading: "储蓄适合解决什么问题",
          paragraphs: [
            "储蓄的优势在于可以动用。紧急储备可以帮助应对短期收入中断、维修、医疗押金、家庭需要或其他临时支出。储蓄也适合用于已经计划好的开销，例如教育、旅行、企业现金流或未来购买。",
            "流动性很重要，因为不是每个问题都需要长期方案。有时候，最实用的财务工具就是一笔可以及时使用的钱。如果完全没有储蓄，一个短期问题也可能迫使你借钱、急售资产，或打断长期规划。",
          ],
        },
        {
          heading: "保险设计上用于什么",
          paragraphs: [
            "保险主要是为了应对某些可能难以单靠储蓄吸收的财务风险。根据保障类型不同，它可能涉及人寿、医疗、重大疾病、个人意外或其他定义清楚的风险。任何保险讨论都必须以相关保单条款、资格、除外责任和官方产品文件为准。",
            "保险不应该被说成每一种情况的保证答案。理赔仍须经过保险公司审核，并受保单条件约束。它在规划中的价值，是帮助我们了解有哪些风险、哪些责任可能受影响，以及是否有相关保障方案值得讨论。",
          ],
        },
        {
          heading: "为什么两者不能自动互相取代",
          paragraphs: [
            "储蓄可能足以支付几个月生活开销，但未必适合承担长期收入中断或重大风险。相反，保险通常只针对特定受保事件，并不能替代日常现金流的灵活性。两者功能不同。",
            "例如，一个家庭可以用储蓄处理短期需要，同时讨论收入责任所依赖的保障。企业主可以保留营运现金储备，同时思考如果关键人物突然缺席会带来什么影响。重点不是二选一，而是理解各自的角色。",
          ],
        },
        {
          heading: "把流动性和保障放进同一份规划",
          paragraphs: [
            "比较完整的财务对话，通常会同时看流动性和保障。流动性帮助你应对较小或短期的问题；保障规划则关注可能严重打断整体计划的风险。两者都可能支持稳定，只是方式不同。",
            "合适的安排取决于个人情况。家庭责任、收入稳定性、企业承诺、健康需要和现有资源都会影响判断。因此，对话应该先从你的背景和责任开始，而不是直接从产品开始。",
          ],
        },
        {
          heading: "值得问自己的问题",
          paragraphs: [
            "如果收入暂时中断，我的储蓄可以支撑责任多久？有哪些财务责任依赖我的收入？哪些风险可能严重影响我的计划？如果健康、工作或事业发生变化，哪些承诺仍然必须继续？",
            "这些问题不会马上给出标准答案，但能建立更清楚的起点。储蓄和保险不是同一件事。理解两者不同用途，会让财务规划更实际，也更负责任。",
          ],
        },
      ],
    },
    {
      slug: "key-person-risk-business",
      categoryKey: "business",
      category: "企业",
      title: "企业主为什么需要了解“关键人物风险”？",
      summary:
        "有些企业高度依赖创办人、董事或核心员工。了解这种依赖所带来的财务影响，是企业延续规划的重要一环。",
      seoDescription:
        "了解关键人物风险对企业主意味着什么，以及企业依赖、延续规划和财务承诺为何需要被看见。",
      pullQuote:
        "关键人物风险不只是保险问题。它首先是一场关于企业依赖、营运延续和财务承诺的对话。",
      sections: [
        {
          heading: "谁是关键人物？",
          paragraphs: [
            "关键人物，是指企业中某些难以在短时间内被取代的人。他们可能掌握重要知识、客户关系、领导能力或生产能力。在许多企业里，这个人可能是创办人或董事；在另一些企业里，可能是顶尖销售、技术专家、项目负责人、营运主管或主要客户关系维护者。",
            "职位名称不是重点，依赖程度才是重点。如果某个人突然缺席，会明显影响收入、营运、融资、客户信心或交付能力，那么这个人就可能代表关键人物风险。中小企业尤其容易感受到这种风险，因为责任往往集中在少数人身上。",
          ],
        },
        {
          heading: "如果这个人突然缺席，会发生什么？",
          paragraphs: [
            "关键人物突然缺席所带来的影响，往往不只是情绪上的冲击。若主要客户由他负责，收入可能放缓；若客户信任集中在一个人身上，关系可能受到影响；若技术知识或决策权没有被记录和分配，营运也可能中断。",
            "同时，许多财务承诺不会因为收入受影响而停止，例如薪资、租金、供应商付款、贷款、项目成本或招聘费用。寻找和训练替代人选需要时间。在这段期间，企业可能需要流动性，也需要更清楚的延续安排。",
          ],
        },
        {
          heading: "关键人物风险不只是保险",
          paragraphs: [
            "很多人一谈到关键人物风险，就马上想到保险。保险可能是其中一个讨论方向，但仍须视情况、核保、保单条款和官方文件而定。更重要的是，第一步不应该直接跳到产品，而是先了解企业到底依赖谁、依赖什么。",
            "企业延续规划可能包括流程记录、授权安排、接班思考、客户关系管理、紧急现金储备以及保障规划。这些部分需要一起看。保险如适用，也只是更大讨论中的一环。",
          ],
        },
        {
          heading: "企业主可以先问的问题",
          paragraphs: [
            "如果未来三到六个月内必须替换某个人，谁最难被取代？哪些收入高度依赖某个人的关系或能力？哪些客户关系最容易受到影响？哪些营运知识没有被记录？即使收入放缓，哪些财务承诺仍然必须继续？",
            "企业主也可以思考：招聘和培训需要多久？是否有临时替代方案？在中断期间需要多少流动资金？这些问题可以把模糊的担忧，转化成更清晰的规划讨论。",
          ],
        },
        {
          heading: "企业延续是一场对话",
          paragraphs: [
            "关键人物风险的核心，是企业能否延续。一个更稳健的企业，会看见自己依赖哪些人，以及如果关键人物突然缺席，可能影响哪些客户、员工和财务承诺。这不代表所有风险都能被消除，而是企业主不再忽略一个可能影响未来的重要问题。",
            "对许多企业来说，最好的起点是一场有结构的对话：谁对企业延续最重要？如果他突然不在，会中断什么？哪些安排值得优先关注？从这里开始，企业保障和延续规划才能更负责任地展开。",
          ],
        },
      ],
    },
  ],
};

export function getInsights(locale: Locale) {
  return insights[locale];
}

export function getInsight(locale: Locale, slug: string) {
  return insights[locale].find((article) => article.slug === slug);
}

export function getRelatedInsights(locale: Locale, slug: string, limit = 2) {
  const current = getInsight(locale, slug);
  const articles = insights[locale].filter((article) => article.slug !== slug);

  if (!current) {
    return articles.slice(0, limit);
  }

  return [
    ...articles.filter((article) => article.categoryKey === current.categoryKey),
    ...articles.filter((article) => article.categoryKey !== current.categoryKey),
  ].slice(0, limit);
}

export function getInsightCategories(locale: Locale) {
  const present = new Set(insights[locale].map((article) => article.categoryKey));
  const categoryOrder: InsightCategory[] = ["financial-planning", "protection", "business", "legacy"];
  return [
    { key: "all" as const, label: insightCategoryLabels[locale].all },
    ...categoryOrder
      .filter((key) => present.has(key))
      .map((key) => ({ key, label: insightCategoryLabels[locale][key] })),
  ];
}

export function estimateReadingTime(locale: Locale, article: InsightArticle) {
  const text = [
    article.title,
    article.summary,
    article.pullQuote,
    ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
  ].join(" ");

  if (locale === "zh") {
    const characters = text.replace(/\s/g, "").length;
    return Math.max(3, Math.ceil(characters / 500));
  }

  const words = text.trim().split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 180));
}

export function getAllInsightPaths() {
  return (Object.keys(insights) as Locale[]).flatMap((locale) =>
    insights[locale].map((article) => ({ locale, slug: article.slug })),
  );
}
