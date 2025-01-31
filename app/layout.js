import { Raleway, Outfit, Ovo } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "SS56Bo",
  description: "Made using Next & Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${raleway.className} ${ovo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
