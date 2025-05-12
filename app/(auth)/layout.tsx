import { SiteHeader } from "@/components/layout/site-header";

export default function RootAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div>
    <SiteHeader />
    {children}
  </div>
  );
}