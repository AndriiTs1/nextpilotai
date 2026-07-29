import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import BusinessSolutionsSection from "@/components/sections/BusinessSolutionsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ClientProblemsSection from "@/components/sections/ClientProblemsSection";
import ProcessDifferentiationSection from "@/components/sections/ProcessDifferentiationSection";
import TrustStrip from "@/components/sections/TrustStrip";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <div className="site-page">
      <div className="site-container">
        <Header />
        <Main />
        <TrustStrip />
        <ClientProblemsSection />
        <BusinessSolutionsSection />
        <ProcessDifferentiationSection />
        <CaseStudiesSection />
        <Footer />
      </div>
    </div>
  );
}
