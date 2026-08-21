"use client";

import { usePathname } from "next/navigation";
import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLocaleFromPathname } from "@/lib/i18n";
import { getDictionary } from "@/messages";

type PageKey =
  | "about"
  | "services"
  | "insights"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"
  | "riskDisclosure"
  | "disclaimer";

const pageContent = {
  en: {
    about: ["About", "About ARK Legacy Partner", "Mission, vision, advisory philosophy, team profile and professional credentials will be added here once verified details are provided."],
    services: ["Services", "Financial Planning, Insurance and Corporate Solutions", "This page will outline personal and business advisory services without unsupported claims or unverified credentials."],
    insights: ["Insights", "Resources and Financial Planning Insights", "Educational article cards and financial planning resources will be structured here in the next content phase."],
    faq: ["FAQ", "Frequently Asked Questions", "Questions about advisory scope, insurance planning, consultations and AIA appointed agent status will be answered here."],
    contact: ["Contact", "Book a Consultation", "A validated enquiry form with PDPA consent will be added here. No real submission is enabled in this foundation phase."],
    privacy: ["Legal", "Privacy Policy", "Placeholder privacy structure. Professional legal and compliance review is required before public launch."],
    terms: ["Legal", "Terms of Use", "Placeholder terms structure. Professional legal and compliance review is required before public launch."],
    riskDisclosure: ["Legal", "Risk Disclosure", "Placeholder risk disclosure structure. Final wording must be reviewed before launch."],
    disclaimer: ["Legal", "Disclaimer", "Placeholder disclaimer structure. Final wording must be reviewed by the relevant professional or compliance reviewer."],
  },
  zh: {
    about: ["关于我们", "关于 ARK Legacy Partner", "使命、愿景、顾问理念、团队资料与专业资历将在资料核实后加入。"],
    services: ["服务", "财务规划、保险与企业财务方案", "此页面将说明个人与企业顾问服务，并避免未经核实的资历或承诺。"],
    insights: ["理财知识", "财务规划资源与文章", "教育性质的文章与财务规划资源将在后续内容阶段整理。"],
    faq: ["常见问题", "常见问题", "关于顾问范围、保险规划、咨询流程与 AIA 委任保险代理身份的问题将在此说明。"],
    contact: ["联系我们", "预约咨询", "后续将加入带有 PDPA 同意声明的表单。目前不会进行真实提交。"],
    privacy: ["法律", "隐私政策", "隐私政策结构占位。公开上线前需完成专业法律与合规审核。"],
    terms: ["法律", "使用条款", "使用条款结构占位。公开上线前需完成专业法律与合规审核。"],
    riskDisclosure: ["法律", "风险披露", "风险披露结构占位。正式文字需在上线前审核。"],
    disclaimer: ["法律", "免责声明", "免责声明结构占位。最终文字需由相关专业人士或合规人员审核。"],
  },
} as const;

export function LocalePlaceholderPage({ page }: { page: PageKey }) {
  const locale = getLocaleFromPathname(usePathname());
  const dictionary = getDictionary(locale);
  const [eyebrow, title, description] = pageContent[locale][page];

  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl py-8 sm:py-12">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
            <div className="mt-10 border-l-4 border-[var(--ark-gold)] bg-[var(--ark-warm-white)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ark-navy)]">
                {dictionary.placeholder.details}
              </p>
              <p className="mt-3 leading-7 text-[var(--ark-gray)]">
                {dictionary.placeholder.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
