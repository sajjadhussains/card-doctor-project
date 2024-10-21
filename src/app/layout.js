import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { Inter } from "next/font/google";
import AuthProvider from "@/services/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"], // Optional: Choose the subsets you need
  weight: ["400", "500", "700"], // Optional: Specify weights if needed
});
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
  title: "Car Doctor pro",
  description: "Car reparing workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        <ToastContainer />
        <AuthProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
