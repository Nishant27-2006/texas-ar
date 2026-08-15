import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Texas Aerial Robotics",
  description: "Based in the University of Texas at Austin, Texas Aerial Robotics is an undergraduate research organization dedicated to designing, building, and programming fully autonomous drones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
