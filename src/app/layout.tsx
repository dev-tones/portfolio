import SideNav from "@/components/SideNav";
import "@/app/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-neutral-950">
        <SideNav />
        <main className="flex-1 p-6 text-neutral-100">{children}</main>
      </body>
    </html>
  );
}
