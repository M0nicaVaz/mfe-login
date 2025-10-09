import "../../../shared/styles/globals.scss";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <title>Bytebank - Login Page</title>
      <head />
      <body>{children}</body>
    </html>
  );
}
