import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import BusinessSolutionsSection from "@/components/sections/BusinessSolutionsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ClientProblemsSection from "@/components/sections/ClientProblemsSection";
import ProcessDifferentiationSection from "@/components/sections/ProcessDifferentiationSection";
import TrustStrip from "@/components/sections/TrustStrip";

export default function Home() {
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
