import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";
import "../styles/globals.css";
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: "Acreedx AI art Gallery",
  description: "Generated by Acreedx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <Header />

          {/* Prompt Input */}
          <PromptInput />

          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
