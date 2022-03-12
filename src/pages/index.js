import {
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Poppins;
  background-image: url(background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.75);
  background-blend-mode: darken;
`;

const Welcome = styled.div`
  padding: 0 1rem;
`;

const glow = keyframes`
0% {
  text-shadow: 0 0 3px #fff, 0 0 6px #fff, 0 0 8px #ff0000, 0 0 10px #ff0000, 0 0 12px #ff0000, 0 0 14px #ff0000, 0 0 16px #ff0000;
}
50% {
  text-shadow: 0 0 3px #fff, 0 0 6px #fff, 0 0 8px #e60073, 0 0 10px #e60073, 0 0 12px #e60073, 0 0 14px #e60073, 0 0 16px #e60073;
}
100% {
  text-shadow: 0 0 3px #fff, 0 0 6px #fff, 0 0 8px #000fff, 0 0 10px #000fff, 0 0 12px #000fff, 0 0 14px #000fff, 0 0 16px #000fff;
}
`;

const Title = styled.span`
  font: bold 1.75rem Lato;
  text-align: center;
  width: 100%;
  color: #ffffff;
  animation: ${glow} 5s linear infinite alternate;
  @media only screen and (min-width: 640px) {
    font: bold 2rem Lato;
  }
  @media only screen and (min-width: 768px) {
    font: bold 2.25rem Lato;
  }
  @media only screen and (min-width: 1024px) {
    font: bold 2.5rem Lato;
  }
`;

const Desc = styled.div`
  font: bold 1.1rem Lato;
  color: #ffffff;
  margin: 0.5rem 0 1.5rem 0;
  letter-spacing: .25px;
  text-shadow: 0 0 5px ${({ theme }) => theme.secondary};
  @media only screen and (min-width: 640px) {
    font-size: 1.2rem;
  }
`;

const bounce = keyframes`
0% {
  transform: translateY(0);
}
100% {
  transform: translateY(7px);
}
`;

const Bounce = styled.div`
  position: relative;
  animation: ${bounce} 1.5s linear infinite alternate;
`;

const KnowMore = styled.button`
  padding: 0.5rem 0.75rem;
  border: 2px solid ${({ theme }) => theme.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.secondary};
  font: 600 1rem Raleway;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  text-shadow: 0 2px 10px ${({ theme }) => theme.primary}95;
  box-shadow: 0 0 15px ${({ theme }) => theme.primary}95;
  :hover {
    background-color: ${({ theme }) => theme.primary};
  }
  :focus {
    outline: 0;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Arrow = styled.div`
  font-size: 1.1rem;
  color: #ffffff;
  opacity: 0.7;
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Index = () => {
  const handleClick = () => {
    window.scroll({
      top: window.innerHeight,
    });
  };

  return (
    <>
      <Background>
        <Welcome>
          <Title>Hello, I'm Alfazri Hadi Rizki</Title>
          <Desc>Web Developer</Desc>
          <Bounce>
            <KnowMore onClick={handleClick}>Know more</KnowMore>
            <Arrow>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
            </Arrow>
          </Bounce>
        </Welcome>
      </Background>
    </>
  );
};

export default Index;
