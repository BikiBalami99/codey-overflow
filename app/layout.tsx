import "./globals.css";
import Nav from "../components/navigation/Nav";
import UrlBar from "../lib/UrlBar/UrlBar";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <UrlBar />
        <Nav />
        {children}
      </body>
    </html>
  );
}
