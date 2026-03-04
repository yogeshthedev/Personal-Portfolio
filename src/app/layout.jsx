import "./globals.scss";
import { Dancing_Script, Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel-display",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Yogesh Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${funnelDisplay.variable} ${dancingScript.variable}`}>{children}</body>
    </html>
  );
}
