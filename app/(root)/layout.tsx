import LeftSidebar from "@/components/LeftSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        <section className="">
          <div>
            <div>
              <Image />
              Mobile Nav
            </div>
            <div>
              Toaster (Notification Popups)
        {children}
            </div>
          </div>
        </section>
        <p className="text-white-1">RIGHT SIDEBAR</p>
      </main>
    </div>
  );
}
