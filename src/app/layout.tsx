import { Header } from "@/components/Header/Header";
import "./globals.css";
import { Navigation } from "@/components/Navigation/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
