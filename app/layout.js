import { Montserrat, Space_Mono as SM, Caveat } from "next/font/google";

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import LeftSidebar from "@/components/LeftSidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const spaceMono = SM({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spaceMono",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "Yantar's Portfolio",
  description: "My personal portfolio website. Check out my projects!",
  icons: {
    icon: "/icons/site-logo.svg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${spaceMono.variable} ${caveat.variable} antialiased`}
      >
        <LeftSidebar />
        <main className="ml-[55px] px-9 sm:px-[55px] md:ml-[75px] md:px-[75px] lg:px-[100px] 2xl:px-[125px]">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
