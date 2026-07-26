import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";

export default function Home() {
  return (
    <div className="site-page">
      <div className="site-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
