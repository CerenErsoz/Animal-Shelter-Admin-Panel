
import "../styles/global.css";
import { Inter } from "next/font/google";
import ReactReduxProvider from "../providers/ReactReduxProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animal Shelter",
  description: "Animal Shelter Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="w-full">
        <ReactReduxProvider>{children}</ReactReduxProvider>
      </body>
    </html>
  );
}

