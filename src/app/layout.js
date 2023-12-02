import "./globals.css";
import "./index.scss";

export const metadata = {
  title: "Karavang",
  description: "Karavang's personal web-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
