import { MainHeader } from "./home-components/main-header";
import Footer from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
