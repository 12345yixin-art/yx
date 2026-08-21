import type { Locale } from "@/lib/i18n";

export type LegalPageKey = "privacy" | "terms" | "riskDisclosure" | "disclaimer";

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPage = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  approvalNote: string;
  sections: LegalSection[];
};

export const legalPages: Record<Locale, Record<LegalPageKey, LegalPage>> = {
  en: {
    privacy: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      description:
        "This Privacy Policy explains how ARK Legacy Partner may collect, use and handle personal information submitted through this website.",
      lastUpdated: "Last updated: August 2026",
      approvalNote:
        "This is a website draft pending final legal and compliance review.",
      sections: [
        {
          heading: "1. Scope",
          paragraphs: [
            "This Privacy Policy applies to personal information voluntarily provided to ARK Legacy Partner through this website, by email, or through other contact methods made available on the website.",
            "This website is intended for general information relating to financial planning, protection and insurance discussions in Malaysia, including selected information relating to AIA products where applicable.",
          ],
        },
        {
          heading: "2. Information We May Collect",
          items: [
            "Contact information you voluntarily provide, such as your name, email address, phone number or message content.",
            "Information included in email enquiries or other communications sent to ARK Legacy Partner.",
            "Basic technical information that may be processed by website hosting, analytics or security services, such as device, browser, IP address, access time and pages visited, where applicable.",
          ],
        },
        {
          heading: "3. Purposes of Processing",
          items: [
            "To respond to enquiries and contact requests.",
            "To understand the type of financial planning, protection or insurance information you may wish to discuss.",
            "To operate, maintain and improve the website.",
            "To support legal, compliance, security or record-keeping requirements where applicable.",
          ],
        },
        {
          heading: "4. Disclosure",
          paragraphs: [
            "ARK Legacy Partner does not sell personal information. Information may be shared with service providers who support website hosting, email communication, technical maintenance or related operational needs, where appropriate.",
            "Information may also be disclosed if required by law, regulation, legal process, or a legitimate compliance or security requirement.",
          ],
        },
        {
          heading: "5. AIA and Product Information",
          paragraphs: [
            "Where this website refers to AIA products or AIA fund information, AIA Malaysia remains the official source for its product and fund documentation. Submitting information to ARK Legacy Partner through this website does not create an online transaction or guarantee that any product is suitable or available.",
          ],
        },
        {
          heading: "6. Security and Retention",
          paragraphs: [
            "ARK Legacy Partner takes reasonable care when handling information received through website and email communications. However, no website, email system or internet transmission can be guaranteed to be fully secure.",
            "Personal information should be retained only for as long as reasonably necessary for the purposes for which it was collected, or as required for legal, compliance or record-keeping purposes.",
          ],
        },
        {
          heading: "7. Your Rights",
          paragraphs: [
            "Subject to applicable Malaysian Personal Data Protection Act 2010 requirements, you may request access to, correction of, or further information about personal data that you have provided.",
            "To make a privacy-related request, contact ARK Legacy Partner at arklegacypartner@gmail.com.",
          ],
        },
      ],
    },
    terms: {
      eyebrow: "Legal",
      title: "Terms of Use",
      description:
        "These Terms of Use set out the conditions for accessing and using the ARK Legacy Partner website.",
      lastUpdated: "Last updated: August 2026",
      approvalNote:
        "This is a website draft pending final legal and compliance review.",
      sections: [
        {
          heading: "1. Informational Purpose",
          paragraphs: [
            "This website provides general information about ARK Legacy Partner, financial planning, protection and insurance-related topics in Malaysia, and selected AIA fund information for convenient reference.",
            "The content is not intended to be a complete statement of any product, service, investment, insurance policy, legal matter, tax matter or financial plan.",
          ],
        },
        {
          heading: "2. No Advice or Guarantee",
          paragraphs: [
            "Website content is for general educational and informational purposes only and should not be treated as personalised financial, investment, legal, tax or insurance advice.",
            "ARK Legacy Partner does not guarantee investment performance, financial outcomes, product approval, policy acceptance, fund returns or the suitability of any product for any person.",
          ],
        },
        {
          heading: "3. Accuracy and Availability",
          paragraphs: [
            "While care is taken to present information clearly, ARK Legacy Partner does not guarantee that all website content is complete, current, error-free or continuously available.",
            "The website may be updated, suspended or changed without prior notice.",
          ],
        },
        {
          heading: "4. AIA Source Information",
          paragraphs: [
            "Where this website displays information relating to AIA products or AIA fund NAV, AIA Malaysia remains the official source. Users should review official AIA documentation before making any decision.",
            "AIA fund NAV shown on this website is based on the latest available published NAV sourced from AIA Malaysia and is not a real-time market quotation.",
          ],
        },
        {
          heading: "5. Third-Party Links",
          paragraphs: [
            "This website may link to third-party websites, including official AIA Malaysia pages. ARK Legacy Partner is not responsible for the content, availability, policies or practices of third-party websites.",
          ],
        },
        {
          heading: "6. Intellectual Property",
          paragraphs: [
            "Unless otherwise stated, website text, structure, design and ARK Legacy Partner branding are owned by or licensed to ARK Legacy Partner. Content may not be copied, modified or republished without permission, except where permitted by law.",
          ],
        },
        {
          heading: "7. Governing Context",
          paragraphs: [
            "These Terms of Use are intended to be read in the context of Malaysia. Final legal interpretation and enforcement should be subject to applicable Malaysian laws and the final reviewed terms adopted by ARK Legacy Partner.",
          ],
        },
      ],
    },
    riskDisclosure: {
      eyebrow: "Legal",
      title: "Risk Disclosure",
      description:
        "This Risk Disclosure explains important limitations and risks relating to financial planning, insurance and AIA fund information shown on this website.",
      lastUpdated: "Last updated: August 2026",
      approvalNote:
        "This is a website draft pending final legal and compliance review.",
      sections: [
        {
          heading: "1. General Risk Notice",
          paragraphs: [
            "Financial planning, insurance and investment-linked fund decisions may involve risks. The appropriate approach depends on an individual's objectives, financial situation, protection needs, time horizon and other personal circumstances.",
          ],
        },
        {
          heading: "2. Investment and Fund Risks",
          items: [
            "Investment values can rise or fall.",
            "Past performance does not indicate future performance.",
            "Fund NAV may be affected by market, currency, economic, liquidity and other investment-related factors.",
            "Returns are not guaranteed unless expressly stated in official product documentation.",
          ],
        },
        {
          heading: "3. NAV Information",
          paragraphs: [
            "AIA fund NAV shown on this website is based on the latest available published NAV sourced from AIA Malaysia. It is not a real-time market quotation.",
            "NAV information may be delayed, unavailable, affected by publication timing, or subject to later correction by the official source.",
          ],
        },
        {
          heading: "4. Product Documentation",
          paragraphs: [
            "Users should review official product documentation, fund fact sheets, policy contracts, benefit illustrations, exclusions, fees, charges and relevant terms before making any decision.",
            "This website does not reproduce or replace the full official product documentation.",
          ],
        },
        {
          heading: "5. Suitability",
          paragraphs: [
            "Suitability depends on individual circumstances. A product or fund that may be relevant to one person may not be suitable for another.",
            "Users should seek appropriate professional guidance before making financial, insurance or investment-related decisions.",
          ],
        },
      ],
    },
    disclaimer: {
      eyebrow: "Legal",
      title: "Disclaimer",
      description:
        "This Disclaimer explains the limitations of information shown on the ARK Legacy Partner website.",
      lastUpdated: "Last updated: August 2026",
      approvalNote:
        "This is a website draft pending final legal and compliance review.",
      sections: [
        {
          heading: "1. General Information Only",
          paragraphs: [
            "The information on this website is provided for general educational and informational purposes only. It does not constitute personalised financial, investment, legal, tax or insurance advice.",
          ],
        },
        {
          heading: "2. No Guarantee or Promise",
          paragraphs: [
            "ARK Legacy Partner does not guarantee or promise any investment return, financial outcome, product approval, policy acceptance, claim outcome or suitability of any product or strategy.",
          ],
        },
        {
          heading: "3. AIA Information",
          paragraphs: [
            "Where this website refers to AIA products or AIA fund information, AIA Malaysia remains the official source for product documentation, fund information and published NAV.",
            "ARK Legacy Partner's website may display delayed or periodically updated AIA fund information for convenient reference. Users should verify important information using official AIA Malaysia documentation before making any decision.",
          ],
        },
        {
          heading: "4. No Online Transactions",
          paragraphs: [
            "This website does not execute investments, insurance applications, fund switches, premium payments, withdrawals or other financial transactions online.",
          ],
        },
        {
          heading: "5. Use of Website",
          paragraphs: [
            "Users are responsible for how they use information from this website. ARK Legacy Partner is not responsible for decisions made solely based on general website content without appropriate review of official documentation and individual circumstances.",
          ],
        },
      ],
    },
  },
  zh: {
    privacy: {
      eyebrow: "法律",
      title: "隐私政策",
      description:
        "本隐私政策说明 ARK Legacy Partner 如何收集、使用及处理通过本网站提交的个人资料。",
      lastUpdated: "最后更新：2026 年 8 月",
      approvalNote: "此为网站草拟版本，仍需最终法律与合规审核。",
      sections: [
        {
          heading: "1. 适用范围",
          paragraphs: [
            "本隐私政策适用于你通过本网站、电邮或网站所列明的其他联系方式，自愿向 ARK Legacy Partner 提供的个人资料。",
            "本网站提供与马来西亚财务规划、保障及保险相关的一般资料，并在适用情况下展示与 AIA 产品相关的部分资料。",
          ],
        },
        {
          heading: "2. 我们可能收集的资料",
          items: [
            "你自愿提供的联系方式，例如姓名、电邮地址、电话号码或讯息内容。",
            "你通过电邮或其他通信方式发送给 ARK Legacy Partner 的咨询内容。",
            "在适用情况下，由网站托管、分析或安全服务处理的基本技术资料，例如装置、浏览器、IP 地址、访问时间及浏览页面。",
          ],
        },
        {
          heading: "3. 处理资料的目的",
          items: [
            "回复咨询与联系请求。",
            "了解你希望讨论的财务规划、保障或保险相关方向。",
            "运营、维护及改善本网站。",
            "在适用情况下，支持法律、合规、安全或记录保存需要。",
          ],
        },
        {
          heading: "4. 资料披露",
          paragraphs: [
            "ARK Legacy Partner 不会出售个人资料。在适当情况下，资料可能会提供给支持网站托管、电邮通信、技术维护或相关运营需要的服务供应商。",
            "如法律、法规、法律程序、合规或安全要求需要，资料也可能会被披露。",
          ],
        },
        {
          heading: "5. AIA 与产品资料",
          paragraphs: [
            "当本网站提及 AIA 产品或 AIA 基金资料时，AIA Malaysia 仍为其产品及基金文件的官方来源。通过本网站向 ARK Legacy Partner 提交资料，并不构成线上交易，也不保证任何产品适合或可供申请。",
          ],
        },
        {
          heading: "6. 资料安全与保存",
          paragraphs: [
            "ARK Legacy Partner 会以合理谨慎方式处理通过网站及电邮通信收到的资料。然而，任何网站、电邮系统或互联网传输均无法保证绝对安全。",
            "个人资料只应在达成收集目的所需的合理期间内保存，或按法律、合规或记录保存需要保留。",
          ],
        },
        {
          heading: "7. 你的权利",
          paragraphs: [
            "根据马来西亚《2010 年个人资料保护法令》（PDPA）的适用要求，你可要求查阅、更正或进一步了解你已提供的个人资料。",
            "如有隐私相关请求，请通过 arklegacypartner@gmail.com 联系 ARK Legacy Partner。",
          ],
        },
      ],
    },
    terms: {
      eyebrow: "法律",
      title: "使用条款",
      description:
        "本使用条款说明访问及使用 ARK Legacy Partner 网站的条件。",
      lastUpdated: "最后更新：2026 年 8 月",
      approvalNote: "此为网站草拟版本，仍需最终法律与合规审核。",
      sections: [
        {
          heading: "1. 资料用途",
          paragraphs: [
            "本网站提供有关 ARK Legacy Partner、马来西亚财务规划、保障与保险相关主题，以及部分 AIA 基金资料的一般参考信息。",
            "本网站内容并非任何产品、服务、投资、保险保单、法律事项、税务事项或财务计划的完整说明。",
          ],
        },
        {
          heading: "2. 非建议及非保证",
          paragraphs: [
            "网站内容仅供一般教育与资讯参考，不应被视为个人化财务、投资、法律、税务或保险建议。",
            "ARK Legacy Partner 不保证投资表现、财务结果、产品批准、保单接受、基金回报或任何产品对任何人士的适合性。",
          ],
        },
        {
          heading: "3. 准确性与可用性",
          paragraphs: [
            "尽管本网站力求清晰呈现资料，ARK Legacy Partner 不保证所有网站内容完整、最新、无误或持续可用。",
            "本网站可能在无事先通知的情况下更新、暂停或变更。",
          ],
        },
        {
          heading: "4. AIA 来源资料",
          paragraphs: [
            "当本网站展示与 AIA 产品或 AIA 基金 NAV 相关的资料时，AIA Malaysia 仍为官方来源。用户在作出任何决定前，应阅读 AIA 官方文件。",
            "本网站显示的 AIA 基金 NAV 以 AIA Malaysia 最新公布的可用 NAV 为依据，并非实时市场报价。",
          ],
        },
        {
          heading: "5. 第三方链接",
          paragraphs: [
            "本网站可能链接至第三方网站，包括 AIA Malaysia 官方页面。ARK Legacy Partner 不对第三方网站的内容、可用性、政策或做法负责。",
          ],
        },
        {
          heading: "6. 知识产权",
          paragraphs: [
            "除非另有说明，本网站文字、结构、设计及 ARK Legacy Partner 品牌内容由 ARK Legacy Partner 拥有或获授权使用。除法律允许外，未经许可不得复制、修改或重新发布。",
          ],
        },
        {
          heading: "7. 马来西亚适用背景",
          paragraphs: [
            "本使用条款应在马来西亚背景下阅读。最终法律解释及执行应以适用的马来西亚法律及 ARK Legacy Partner 最终采用的经审核条款为准。",
          ],
        },
      ],
    },
    riskDisclosure: {
      eyebrow: "法律",
      title: "风险披露",
      description:
        "本风险披露说明本网站所展示的财务规划、保险及 AIA 基金资料相关的重要限制与风险。",
      lastUpdated: "最后更新：2026 年 8 月",
      approvalNote: "此为网站草拟版本，仍需最终法律与合规审核。",
      sections: [
        {
          heading: "1. 一般风险说明",
          paragraphs: [
            "财务规划、保险及投资联结基金相关决定可能涉及风险。适合的安排取决于个人目标、财务状况、保障需要、时间范围及其他个人情况。",
          ],
        },
        {
          heading: "2. 投资与基金风险",
          items: [
            "投资价值可升亦可跌。",
            "过往表现并不代表未来表现。",
            "基金 NAV 可能受市场、货币、经济、流动性及其他投资相关因素影响。",
            "除非官方产品文件明确说明，否则回报并不保证。",
          ],
        },
        {
          heading: "3. NAV 资料",
          paragraphs: [
            "本网站所显示的 AIA 基金 NAV 以 AIA Malaysia 最新公布的可用 NAV 为依据，并非实时市场报价。",
            "NAV 资料可能因发布时间、资料来源更新或官方后续更正而延迟、暂时不可用或发生变化。",
          ],
        },
        {
          heading: "4. 产品文件",
          paragraphs: [
            "用户在作出任何决定前，应阅读官方产品文件、基金说明书、保单合约、利益说明、除外责任、费用、收费及相关条款。",
            "本网站并不复制或取代完整官方产品文件。",
          ],
        },
        {
          heading: "5. 适合性",
          paragraphs: [
            "适合性取决于个人情况。对某人相关的产品或基金，不一定适合另一人。",
            "用户在作出财务、保险或投资相关决定前，应寻求适当专业意见。",
          ],
        },
      ],
    },
    disclaimer: {
      eyebrow: "法律",
      title: "免责声明",
      description:
        "本免责声明说明 ARK Legacy Partner 网站所展示资料的限制。",
      lastUpdated: "最后更新：2026 年 8 月",
      approvalNote: "此为网站草拟版本，仍需最终法律与合规审核。",
      sections: [
        {
          heading: "1. 仅供一般参考",
          paragraphs: [
            "本网站资料仅供一般教育与资讯参考，不构成个人化财务、投资、法律、税务或保险建议。",
          ],
        },
        {
          heading: "2. 非保证或承诺",
          paragraphs: [
            "ARK Legacy Partner 不保证或承诺任何投资回报、财务结果、产品批准、保单接受、索赔结果，或任何产品或策略的适合性。",
          ],
        },
        {
          heading: "3. AIA 资料",
          paragraphs: [
            "当本网站提及 AIA 产品或 AIA 基金资料时，AIA Malaysia 仍为产品文件、基金资料及已公布 NAV 的官方来源。",
            "ARK Legacy Partner 网站可能为方便参考而展示延迟或定期更新的 AIA 基金资料。用户在作出任何决定前，应通过 AIA Malaysia 官方文件核实重要资料。",
          ],
        },
        {
          heading: "4. 非线上交易",
          paragraphs: [
            "本网站不执行投资、保险申请、基金转换、保费付款、提款或其他财务交易。",
          ],
        },
        {
          heading: "5. 网站使用",
          paragraphs: [
            "用户需自行负责如何使用本网站资料。若未审阅官方文件及个人情况，仅凭一般网站内容作出决定，ARK Legacy Partner 不对此负责。",
          ],
        },
      ],
    },
  },
};

export function getLegalPage(locale: Locale, page: LegalPageKey) {
  return legalPages[locale][page];
}
