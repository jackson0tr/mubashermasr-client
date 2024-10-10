import { Inter } from "next/font/google";
import "./globals.css";
import StorePovider from "../context/StorePovider";
import { Toaster } from "react-hot-toast";
// import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "مباشر مصر",
  description: "موقع مباشر مصر هو بوابة إخبارية شاملة تهدف إلى تقديم تغطية متميزة لأهم الأخبار والأحداث الجارية في مصر والعالم العربي. يوفر الموقع محتوى متنوع يشمل السياسة، الاقتصاد، الرياضة، الثقافة، الفن، والتكنولوجيا، بالإضافة إلى الأخبار العاجلة والمباشرة من قلب الحدث. يسعى مباشر مصر إلى أن يكون مصدرًا موثوقًا وسريعًا للمعلومة، من خلال تقديم تحليلات عميقة، وتقارير ميدانية، ومقالات رأي من نخبة من الصحفيين والمحللين. يتميز الموقع بتصميم حديث وسهل الاستخدام، مما يتيح للزوار التنقل بسلاسة بين الأقسام المختلفة، والبقاء على اطلاع دائم بأحدث المستجدات من خلال التحديثات الفورية والإشعارات.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className}`}>
        <StorePovider>
          <Toaster position='top-center' reverseOrder={false}/>
          {children}
        </StorePovider>
      </body>
    </html>
  );
}
