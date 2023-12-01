import MenuBar from "@/components/ui/MenuBar";
import ParticlesCanvas from "@/components/ui/ParticlesCanvas";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100vw;
  height: 100vh;
  align - items: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: auto;
  font-family: Arial, sans-serif;

  // Hide scrollbar for Webkit browsers
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParticlesCanvas />
      <MenuBar />
      <main>
        <PageContainer>{children}</PageContainer>
      </main>
    </>
  );
}
