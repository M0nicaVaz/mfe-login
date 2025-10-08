import "../../../shared/styles/globals.scss";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
