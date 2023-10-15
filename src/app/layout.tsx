import { GTag } from "@/components/gtag";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Pasqualino de Simone - Pasalino.it",
  description:
    "Pasqualino de Simone personal web sites. Software engineer, People and Technology lover, 3D printer addicted, Maker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode[];
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <GTag />
        <div className="relative z-10 h-fit flex justify-center md:h-screen">
          <div className="flex w-10/12 my-6 lg:w-8/12 xl:w-7/12 2xl:w-5/12">
            {children}
          </div>
        </div>
        <div className="fixed top-0 h-full w-full flex">
          <div className="bg-light-blue w-9/12 sm:w-7/12 md:w-4/12"></div>
        </div>
      </body>
    </html>
  );
}
