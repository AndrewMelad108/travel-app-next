import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Explore Your Next Adventure - Travel App", 
  description: "Discover amazing destinations, plan your trips, and make unforgettable memories with the Travel App.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Suspense>
        {children}
      </Suspense>
      </body>
    </html>
  );
}
