import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata = {
  title: "Todo App",
  description: "Next.js 타임어택",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
