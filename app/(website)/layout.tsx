import { LayoutWithHeader } from "@/components/common/LayoutWithHeader";
import BackToTop from "@/components/common/ScrollToTop";
import BottomFixBar from "@/components/layout/BottomFixBar";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutWithHeader>
      {children}
      <BottomFixBar />
      <Footer />
      <BackToTop />
    </LayoutWithHeader>
  );
}
