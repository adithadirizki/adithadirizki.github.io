import styled from "styled-components";

const Container = styled.div`
  display: grid;
  padding: 5rem 1rem;
  width: 100%;
  align-items: center;
  @media only screen and (min-width: 640px) {
    padding: 5rem 2rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 5rem 4rem;
    column-gap: 1rem;
    grid-template-columns: 3fr 9fr;
  }
  @media only screen and (min-width: 1024px) {
    padding: 5rem 6rem;
    column-gap: 0;
  }
  @media only screen and (min-width: 1024px) {
    padding: 5rem 10rem;
  }
`;

const ImageContext = styled.div`
  margin: 0;
  text-align: center;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 9999px;
  border: 6px solid transparent;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.primary};
  @media only screen and (min-width: 640px) {
    width: 130px;
    height: 130px;
  }
  @media only screen and (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }
`;

const Title = styled.div`
  font: bold 1.5rem Lato;
  text-align: center;
  margin: 1rem 0;
  color: ${({ theme }) => theme.highlight};
  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Desc = styled.div`
  font: 1.025rem Ubuntu;
  margin: 0.5rem 0 1.5rem 0;
  line-height: 1.5;
  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Underline = styled.div`
  width: 75px;
  margin: 0.5rem auto 0;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  @media only screen and (min-width: 768px) {
    margin: 0.5rem 0 0;
  }
`;

const About = () => {
  return (
    <>
      <Container id="about">
        <ImageContext>
          <Image src="me.png" alt="Profile" />
        </ImageContext>
        <div>
          <Title>
            About Me
            <Underline></Underline>
          </Title>
          <Desc>
            My name is Alfazri Hadi Rizki. You can call me Adit. I was born in
            Palembang, January 14, 2004. I'm living at Jambi, Indonesia. I'm a fresh graduate in 2021 at SMKN 2 Jambi City. Since
            the beginning of 2021 until now. I have started my career as a freelance web developer.
          </Desc>
        </div>
      </Container>
    </>
  );
};

export default About;
