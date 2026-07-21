import localFont from "next/font/local";
import "./globals.css";
import "./index.scss";

const blenderPro = localFont({
  src: [
    { path: "./font/BlenderPro-Medium.woff2", weight: "400", style: "normal" },
    { path: "./font/BlenderPro-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-blender",
});

const url = "https://karavang.vercel.app";

export const metadata = {
  metadataBase: new URL(url),
  title: "Yevhenii Shestak — Fullstack developer",
  description:
    "Portfolio of Yevhenii Shestak (Karavang), fullstack developer: Node.js, React, AWS, MongoDB.",
  keywords: ["Karavang", "Yevhenii Shestak", "fullstack developer", "Node.js", "React"],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Yevhenii Shestak — Fullstack developer",
    description: "Node.js, React, AWS, MongoDB. Projects, history and contacts.",
  },
  other: {
    "google-site-verification": "yhgNatGkVGlyx4nk-nwFfZv-t697122Ax_WwiJSLd1I",
  },
};

export const viewport = {
  themeColor: "#202023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={blenderPro.variable}>
      <body>{children}</body>
    </html>
  );
}
