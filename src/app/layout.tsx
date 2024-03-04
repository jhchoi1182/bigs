import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/reset.css";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bigs 과제 전형",
  description: "뉴스 Open API를 통한 게시판 애플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
