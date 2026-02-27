import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
