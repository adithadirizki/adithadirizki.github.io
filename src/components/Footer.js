import {
  faFacebook,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  font-family: Montserrat;
  background-color: black;
  padding: 1.5rem 1rem;
  text-align: center;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.secondary};
  transition: color 0.2s ease-in-out;
  & > svg {
    font-size: 1.125rem;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary}75;
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.secondary}75;
`;

const Heart = styled.span`
  font-size: 0.825rem;
  color: #ff2f2f;
`;

const Footer = () => {

  return (
    <>
      <Container>
        <SocialMedia>
          {/* <Link href="https://facebook.com/univers.univers.90226">
            <FontAwesomeIcon icon={faFacebook} title="Facebook" />
          </Link> */}
          <Link href="https://instagram.com/adit_hadirizki" target="_blank">
            <FontAwesomeIcon icon={faInstagram} title="Instagram" />
          </Link>
          <Link href="https://github.com/adithadirizki" target="_blank">
            <FontAwesomeIcon icon={faGithub} title="Github" />
          </Link>
          <Link href="https://wa.me/6287744508761" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} title="Whatsapp" />
          </Link>
        </SocialMedia>

        <Copyright>
          &copy; 2021{" "}
          <Heart>
            <FontAwesomeIcon icon={faHeart} />
          </Heart>{" "}
          <strong>Alfazri Hadi Rizki</strong>
        </Copyright>
      </Container>
    </>
  );
};

export default Footer;
