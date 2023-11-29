import { Inter } from "next/font/google";
import "./globals.css";
import "./index.scss";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karavang",
  description: "Personal Karavang's web-app",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
      </body>
    </html>
  );
}
