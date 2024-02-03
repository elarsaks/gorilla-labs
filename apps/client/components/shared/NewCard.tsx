import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardWrap = styled.div`
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
`;

const Card = styled.div`
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

const CardBg = styled.div<{ imageUrl: string }>`
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
`;

const CardInfo = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;

const CardTitle = styled.h3`
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
`;

const CardText = styled.p`
  text-shadow: black 0 2px 3px;
`;

interface InteractiveCardProps {
  description: string;
  image: string;
  name: string;
  // Unused props commented out for clarity. Uncomment if needed.
  // network: string;
  // price: string;
  type: string; // Consider using ENUMs for specific types.
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  description,
  image,
  name,
  // network,
  // price,
  type,
}) => {
  console.log(type);

  const cardWrapRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cardWrap = cardWrapRef.current;
    if (!cardWrap) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = cardWrap.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 2 - 1; // Normalize x to -1 to 1
      const y = ((e.clientY - top) / height) * 2 - 1; // Normalize y to -1 to 1
      setMousePosition({ x, y });
    };

    cardWrap.addEventListener("mousemove", handleMouseMove);
    return () => cardWrap.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate rotation and translation based on mouse position
  const angleX = mousePosition.y * -30; // Tilt up to 30 degrees on the Y-axis
  const angleY = mousePosition.x * 30; // Tilt up to 30 degrees on the X-axis

  const posX = mousePosition.x * 20; // Translate up to 40px on the X-axis
  const posY = mousePosition.y * -20; // Translate up to 40px on the Y-axis

  return (
    <Container>
      <CardWrap ref={cardWrapRef}>
        <Card
          style={{ transform: `rotateY(${angleY}deg) rotateX(${angleX}deg)` }}
        >
          <CardBg
            imageUrl={image}
            style={{ transform: `translateX(${posX}px) translateY(${posY}px)` }}
          />
          <CardInfo>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardInfo>
        </Card>
      </CardWrap>
    </Container>
  );
};

export default InteractiveCard;
