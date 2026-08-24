import type { Locale } from "@/lib/i18n";

export type BrandImageKey =
  | "nyse"
  | "financialPlanning"
  | "servicesPlanning"
  | "faqDiscussion"
  | "contactHandshake"
  | "aboutLiberty"
  | "consultation"
  | "investmentMarket"
  | "singaporeFinancialDistrict"
  | "usMarket";

type BrandImage = {
  src: string;
  width: number;
  height: number;
  objectPosition: string;
  alt: Record<Locale, string>;
};

export const brandImages: Record<BrandImageKey, BrandImage> = {
  nyse: {
    src: "/images/ark/ark-nyse.jpg",
    width: 1800,
    height: 2400,
    objectPosition: "object-center",
    alt: {
      en: "New York Stock Exchange building facade",
      zh: "纽约证券交易所建筑外立面",
    },
  },
  financialPlanning: {
    src: "/images/ark/ark-financial-planning.jpg",
    width: 2400,
    height: 1350,
    objectPosition: "object-[50%_58%]",
    alt: {
      en: "Financial professionals discussing planning documents",
      zh: "专业人士讨论财务规划文件",
    },
  },
  servicesPlanning: {
    src: "/images/ark/ark-services-planning.jpg",
    width: 1600,
    height: 2400,
    objectPosition: "object-[50%_58%]",
    alt: {
      en: "Hands reviewing charts, coins and planning materials",
      zh: "双手查看图表、金币与规划资料",
    },
  },
  faqDiscussion: {
    src: "/images/ark/pexels-shkrabaanthony-5816300.jpg",
    width: 4000,
    height: 6000,
    objectPosition: "object-[50%_72%]",
    alt: {
      en: "Professional financial discussion with planning documents",
      zh: "围绕规划文件进行的专业财务讨论",
    },
  },
  contactHandshake: {
    src: "/images/ark/pexels-kampus-8441789.jpg",
    width: 4016,
    height: 6016,
    objectPosition: "object-[48%_68%]",
    alt: {
      en: "Professional conversation with a handshake",
      zh: "专业会谈中的握手交流",
    },
  },
  aboutLiberty: {
    src: "/images/ark/ark-about-liberty.jpg",
    width: 1600,
    height: 2400,
    objectPosition: "object-[50%_48%]",
    alt: {
      en: "Statue of Liberty against a blue sky",
      zh: "蓝天下的自由女神像",
    },
  },
  consultation: {
    src: "/images/ark/ark-consultation.jpg",
    width: 1600,
    height: 2400,
    objectPosition: "object-[50%_68%]",
    alt: {
      en: "Professional consultation in a premium office setting",
      zh: "高端办公环境中的专业咨询场景",
    },
  },
  investmentMarket: {
    src: "/images/ark/ark-investment-market.jpg",
    width: 2400,
    height: 1350,
    objectPosition: "object-[50%_55%]",
    alt: {
      en: "Investment discussion with market information on tablets",
      zh: "平板电脑显示市场资讯的投资讨论场景",
    },
  },
  singaporeFinancialDistrict: {
    src: "/images/ark/ark-singapore-financial-district.jpg",
    width: 2400,
    height: 1745,
    objectPosition: "object-[72%_72%]",
    alt: {
      en: "Singapore financial district and Merlion waterfront",
      zh: "新加坡金融区与鱼尾狮滨水景观",
    },
  },
  usMarket: {
    src: "/images/ark/ark-us-market.jpg",
    width: 2400,
    height: 1600,
    objectPosition: "object-[72%_42%]",
    alt: {
      en: "Statue of Liberty against the sky",
      zh: "天空下的自由女神像",
    },
  },
};
