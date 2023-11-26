import MenuBar from "@/components/MenuBar";
import ParticlesCanvas from "@/components/ParticlesCanvas";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
      <PageContainer>
        <main>{children}</main>
      </PageContainer>
    </>
  );
}
