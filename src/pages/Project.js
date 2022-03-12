import {
  faAngleLeft,
  faAngleRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  display: block;
  padding: 5rem 1rem;
  @media only screen and (min-width: 640px) {
    padding: 5rem 2rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 5rem 2rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 5rem 6rem;
  }
  @media only screen and (min-width: 1240px) {
    padding: 5rem 8rem;
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
  max-width: 450px;
  margin: 0.5rem auto 3rem;
`;

const Ul = styled.ul`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Li = styled.li`
  font: 500 1rem Montserrat;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 50.66%;
  border: 1px solid #cfcfcf;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 0 15px #dfdfdf;
  &:hover > div {
    visibility: visible;
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: #000000;
  visibility: hidden;
`;

const Context = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0 1rem;
  text-align: center;
  transform: translate(-50%, -50%);
  visibility: hidden;
`;

const ProjectName = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  font: bold 1.15rem Raleway;
  margin: 0;
  @media only screen and (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
`;

const Category = styled.li`
  padding: 0.25rem 0.75rem;
  color: ${({ theme }) => theme.secondary};
  font: 12px Montserrat;
  border-radius: 9999px;
  cursor: default;
  background-color: ${({ theme }) => theme.primary};
`;

const ViewMore = styled.button`
  font: 14px Raleway;
  border: 2px solid ${({ theme }) => theme.secondary};
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.secondary};
  width: fit-content;
  cursor: pointer;
  background-color: transparent;
  margin: 0 auto;
  transition: background 0.2s ease-in, color 0.2s ease-in, border 0.2s ease-in;
  &:hover {
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.secondary}75;
  }
  &:focus {
    outline: none;
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.secondary}75;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000075;
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in, visibility 0.3s ease-in;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 640px;
  padding: 0 1rem;
  transform: translate(-50%, -50%) scale(${({ show }) => (show ? "1" : "0")});
  transition: transform 0.4s ease-in-out;
`;

const Card = styled.div`
  position: relative;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 0 10px #ffffff;
`;
const CardHeader = styled.div`
  position: relative;
  padding-bottom: 1.25rem;
`;
const ButtonSlide = styled.button`
  border: none;
  color: #ffffff;
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.primary};
  position: absolute;
  top: 50%;
  border-radius: 5px;
  font-size: 1.5rem;
  opacity: 0.7;
  ${({ position }) => position + ": -25px"};
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  &::before {
    content: "" !important;
  }
  :hover {
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.9;
    color: #ffffff;
  }
  :focus {
    background-color: ${({ theme }) => theme.primary};
    color: #ffffff;
    outline: none;
  }
`;
const ButtonClose = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  border: none;
  box-shadow: 0 0 0 5px #ffffff;
  border-radius: 9999px;
  width: 35px;
  height: 35px;
  z-index: 20;
  font-size: 1.1rem;
  color: #ffffff;
  cursor: pointer;
  background-color: #ff2525;
  :focus {
    outline: none;
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: auto;
`;
const CardBody = styled.div`
  padding: 0.5rem;
`;
const CardTitle = styled.div`
  color: #000000;
  font: bold 1.25rem Montserrat;
`;
const CardDesc = styled.p`
  color: #5a5a5a;
`;
const CardTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
`;

const Project = () => {
  const projects = [
    {
      title: "WhatsApp Gateway",
      desc: "WhatsApp Gateway can be used for notifications, sending messages/media in bulk and on a scheduled basis. It is built using NodeJS (REST API) and ReactJS.",
      thumb: "wawjs-3.jpeg",
      img: [
        "wawjs-1.png",
        "wawjs-2.jpeg",
        "wawjs-3.jpeg",
        "wawjs-4.jpg",
      ],
      tags: ["NodeJS", "ExpressJS", "ReactJS", "Redux-Toolkit", "Tailwind CSS", "MySQL"],
    },
    {
      title: "Sekolah-KU",
      desc: "E-Learning app to facilitate online learning with several features such as Quiz, Assignments, Materials, Announcements and Other. Built using PHP (Codeigniter) and REST API",
      thumb: "sekolahku.png",
      img: [
        "sekolahku.png",
        "sekolahku-1.png",
        "sekolahku-2.png",
        "sekolahku-3.png",
        "sekolahku-4.png",
      ],
      tags: ["PHP", "Codeigniter", "REST API", "MySQL"],
    },
    {
      title: "Library Management System",
      desc: "A library management system to help manage the library to run better. You can search for books and can borrow them until a certain time. I made it using Codeigniter framework, jQuery and Bootstrap for the front-end and the database I use MySQL.",
      thumb: "perpus.png",
      img: ["perpus.png", "perpus-1.png", "perpus-2.png", "perpus-3.png"],
      tags: ["PHP", "Codeigniter", "jQuery", "Bootstrap", "MySQL"],
    },
    {
      title: "Cashier App",
      desc: "A cashier application that can help you manage product oders. You can add new products by category and manage orders to reports on sales and purchases.",
      thumb: "kasir.png",
      img: ["kasir.png"],
      tags: ["PHP", "Codeigniter", "jQuery", "Bootstrap", "MySQL"],
    },
    {
      title: "React Movie",
      desc: "React Movie is an application for finding movies fetching from API TMDB using ReactJS. I use redux for state management and Tailwind CSS to beautify the page.",
      thumb: "react-movie.png",
      img: ["react-movie.png", "react-movie-1.png"],
      tags: ["ReactJS", "Tailwind CSS", "Redux"],
    },
    {
      title: "SMK Room",
      desc: "SMK Room is an online learning application, I made it like Google Classroom using PHP and MySQL for the database. To login, you can use a Google account and notifications will be sent via email.",
      thumb: "smkroom.png",
      img: ["smkroom.png", "smkroom-1.png", "smkroom-2.png"],
      tags: ["PHP", "jQuery", "Bootstrap", "MySQL"],
    },
    {
      title: "Inventory Management System",
      desc: "Inventory Management System is an application that is used to manage incoming goods, outgoing goods and their reports. There are also income and expense statistics to calculate profit/loss.",
      thumb: "inventory.png",
      img: ["inventory.png", "inventory-1.png", "inventory-2.png"],
      tags: ["NodeJS", "ExpressJS", "ReactJS", "Tailwind CSS", "MongoDB"],
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const [detailProject, setDetailProject] = useState(4);

  return (
    <>
      <Container id="project">
        <Title>Project </Title>
        <Desc>
          Every day I always fill my time by building websites and here are some
          projects that I have developed
        </Desc>

        <Ul>
          {projects.map((value, index) => {
            return (
              <Li key={index}>
                <ImageWrapper>
                  <Image src={value.thumb} alt={value.title} />

                  <Overlay />

                  <Context>
                    <ProjectName>{value.title}</ProjectName>

                    <Categories>
                      {value.tags.map((value, index) => {
                        return <Category key={index}>{value}</Category>;
                      })}
                    </Categories>

                    <ViewMore
                      onClick={() => {
                        setDetailProject(index);
                        setShowModal(true);
                      }}>
                      View more...
                    </ViewMore>
                  </Context>
                </ImageWrapper>
              </Li>
            );
          })}
        </Ul>
      </Container>

      <ModalOverlay show={showModal} onClick={() => setShowModal(false)} />

      <Modal ref={modalRef} show={showModal}>
        <Card>
          <ButtonClose onClick={() => setShowModal(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </ButtonClose>
          <CardHeader>
            <Slider
              dots
              slidesToShow={1}
              slidesToScroll={1}
              infinite
              autoplay
              prevArrow={
                <ButtonSlide position={"left"}>
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    style={{ width: "100%" }}
                  />
                </ButtonSlide>
              }
              nextArrow={
                <ButtonSlide position={"right"}>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ width: "100%" }}
                  />
                </ButtonSlide>
              }
              autoplaySpeed={3000}>
              {projects[detailProject].img.map((value, index) => {
                return <CardImage key={index} src={value} index={index} />;
              })}
            </Slider>
          </CardHeader>
          <CardBody>
            <CardTitle>{projects[detailProject].title}</CardTitle>
            <CardDesc>{projects[detailProject].desc}</CardDesc>
            <CardTags>
              {projects[detailProject].tags.map((value, index) => {
                return <Category key={index}>{value}</Category>;
              })}
            </CardTags>
          </CardBody>
        </Card>
      </Modal>
    </>
  );
};

export default Project;
