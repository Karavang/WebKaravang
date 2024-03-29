import "./globals.css";
import "./index.scss";

export const metadata = {
  title: "Karavang",
  description: "Karavang's personal web-app",
  other: {
    "google-site-verification": "yhgNatGkVGlyx4nk-nwFfZv-t697122Ax_WwiJSLd1I",
    "msapplication-TileImage": "/src/app/favicon.ico",
  },
  keywords: ["karavang", "Karavang", "Karavang's web app", "лфкфмфтп"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
