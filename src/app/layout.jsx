import { Inter } from "next/font/google";
import { store } from "../store/storeIndex";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animal Shelter",
  description: "Animal Shelter Admin Panel",
};

export default function RootLayout({ children }) {
  //console.log(store);//store configuration denemek için 
  /** {
  dispatch: [Function (anonymous)],
  subscribe: [Function: subscribe],
  getState: [Function: getState],
  replaceReducer: [Function: replaceReducer],
  '@@observable': [Function: observable]
}*/
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
