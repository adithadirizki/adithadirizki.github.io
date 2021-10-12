import styled from "styled-components";

const Container = styled.div`
  display: block;
  padding: 3rem 1rem;
  width: 100%;
  background-color: #ff2f2f25;
  @media only screen and (min-width: 640px) {
    padding: 5rem 2rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 5rem 4rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 5rem 6rem;
  }
  @media only screen and (min-width: 1240px) {
    padding: 5rem 12rem;
  }
`;

const Title = styled.div`
  font: bold 1.5rem Lato;
  text-align: center;
  color: ${({ theme }) => theme.highlight};
  width: 100%;
  margin: 0;
`;

const Desc = styled.div`
  text-align: center;
  font: 1rem Poppins;
  margin: 0.5rem 0 2rem 0;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Li = styled.li`
  padding: 0.5rem 0;
  font: 500 1rem Montserrat;
  color: ${({ theme }) => theme.highlight};
`;

const SubLi = styled.div`
  font: 14px Poppins;
  opacity: 0.7;
`;

const Skill = () => {
  return (
    <>
      <Container id="skill">
        <Title>Expertise </Title>
        <Desc>Some skills i have for web development</Desc>
        <Ul>
          <Li>
            HTML & CSS
            <SubLi>Advanced</SubLi>
          </Li>
          <Li>
            Javascript
            <SubLi>Intermediate</SubLi>
          </Li>
          <Li>
            Bootstrap
            <SubLi>Intermediate</SubLi>
          </Li>
          <Li>
            jQuery
            <SubLi>Intermediate</SubLi>
          </Li>
          <Li>
            Tailwind CSS
            <SubLi>Beginner</SubLi>
          </Li>
          <Li>
            PHP (Codeigniter)
            <SubLi>Advanced</SubLi>
          </Li>
          <Li>
            NodeJS
            <SubLi>Beginner</SubLi>
          </Li>
          <Li>
            ExpressJS
            <SubLi>Beginner</SubLi>
          </Li>
          <Li>
            ReactJS
            <SubLi>Beginner</SubLi>
          </Li>
          <Li>
            MySQL
            <SubLi>Intermediate</SubLi>
          </Li>
          <Li>
            MongoDB
            <SubLi>Beginner</SubLi>
          </Li>
        </Ul>
      </Container>
    </>
  );
};

export default Skill;
