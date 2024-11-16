"use client"

import React from "react";
// import "./app.css";
import ConfigureAmplify from "@/utils/configureAmplify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>      
          <ConfigureAmplify/>
          {children}
      </body>
    </html>
  );
}