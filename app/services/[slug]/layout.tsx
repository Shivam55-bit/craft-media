import Navbar from "@/src/components/navbar";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
    </>
  );
}
