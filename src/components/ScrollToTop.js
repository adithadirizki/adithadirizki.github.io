import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonScroll = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 45px;
  min-height: 45px;
  border-radius: 9999px;
  z-index: 10;
  cursor: pointer;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  background-color: ${({ theme }) => theme.primary}50;
  transition: background-color 0.3s ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.primary}95;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.75rem;
  color: ${({ theme }) => theme.secondary};
`;

const ScrollToTop = () => {
  const [showButtonScroll, setShowButtonScroll] = useState(false);

  const handleClick = () => {
    window.scroll({ top: 0 });
  };

  const handleShowButtonScroll = () => {
    if (window.scrollY + window.innerHeight > window.innerHeight) {
      setShowButtonScroll(true);
    } else {
      setShowButtonScroll(false);
    }
  };

  useEffect(() => {
    console.log(window)
    window.addEventListener("scroll", handleShowButtonScroll);
    return () => {
      window.removeEventListener("scroll", handleShowButtonScroll);
    };
  }, []);

  return (
    <>
      <ButtonScroll show={showButtonScroll} onClick={handleClick}>
        <Icon>
          <FontAwesomeIcon icon={faAngleUp} />
        </Icon>
      </ButtonScroll>
    </>
  );
};

export default ScrollToTop;
