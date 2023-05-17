import Header from "@/components/Header";
import "./globals.css";
import localFont from "@next/font/local";
import StyledComponentsRegistry from "@/lib/registry";

const barlow = localFont({
  src: [
    {
      path: "../public/fonts/Barlow-Black.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Barlow-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Soccer Lovers",
  description: "Soccer stuff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} font-sans`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
