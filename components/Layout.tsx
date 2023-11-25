import MenuBar from "@/components/MenuBar";
import ParticlesCanvas from "@/components/ParticlesCanvas";
export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParticlesCanvas />
      <MenuBar />
      <main>{children}</main>
    </>
  );
}
