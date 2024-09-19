// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Rohit Manoj Pandey",
  description: "I am afull stack freelance Next JS developer, for creating web apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
