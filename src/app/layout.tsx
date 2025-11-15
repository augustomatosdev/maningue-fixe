import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CartLoader } from "@/components/cart-loader";
import { Toaster } from "sonner";

const inter = Nunito_Sans({
  subsets: ["latin"],
  display: "swap", // Melhora a performance de carregamento da fonte
});

export const metadata: Metadata = {
  title: "Belleza | Beleza e bem-estar ao seu alcance",
  description:
    "Explore nossa seleção de cosméticos, skincare, maquiagem e serviços de beleza ao seu alcance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-pink-50 text-gray-700`}
      >
        <SidebarProvider>
          <SidebarInset>
            <CartLoader />
            <Toaster position="top-right" />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
