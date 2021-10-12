import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 100%;
  background-color: #0a0a0a;
  padding: 3rem 1rem;
  @media only screen and (min-width: 640px) {
    padding: 5rem 3rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 5rem 5rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 5rem 8rem;
  }
  @media only screen and (min-width: 1240px) {
    padding: 5rem 12rem;
  }
`;

const Title = styled.div`
  font: bold 1.5rem Montserrat;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  width: 100%;
  margin: 0;
`;

const Desc = styled.div`
  text-align: center;
  font: 1rem Poppins;
  color: ${({ theme }) => theme.secondary};
  opacity: 0.7;
  margin: 0.5rem 0 2rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-family: Montserrat;
  max-width: 480px;
  margin: 0 auto;
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.secondary};
  font-size: 1rem;
  font-family: Montserrat;
  background-color: #55555575;
  :focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.secondary};
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.secondary};
  font-size: 1rem;
  background-color: #55555575;
  font-family: Montserrat;
  min-height: 180px;
  resize: none;
  :focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.secondary};
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MessageStatus = styled.div`
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  font-size: 0.75rem;
  background-color: ${({ data }) => (data.error ? "#c70000" : "#00b767")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  font: 1rem Montserrat;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.secondary};
  background-color: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    background-color: #55555575;
    border: 2px solid transparent;
  }
  :focus {
    outline: none;
  }
`;

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [messageStatus, setMessageStatus] = useState({
    message: "",
    error: false,
  });
  const [showMessageStatus, setShowMessageStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ahr-portfolio.herokuapp.com/send", formData)
      .then((response) => {
        setFormData(initialFormData);
        setShowMessageStatus(true);
        setMessageStatus(response.data);
        console.log(response);
      })
      .catch((error) => {
        setFormData(initialFormData);
        setShowMessageStatus(true);
        setMessageStatus({
          message: "Something went wrong!",
          error: true,
        });
        console.log(error);
      });
  };

  useEffect(() => {
    if (showMessageStatus) {
      setTimeout(() => {
        setShowMessageStatus(false);
      }, 3000);
    }
  }, [showMessageStatus]);

  return (
    <>
      <Container id="contact">
        <Title>Get In Touch </Title>
        <Desc>Have a question or just want to say hello?</Desc>
        <Form action="" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <Textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Type your message here"
            onChange={handleChange}
            value={formData.message}
            required></Textarea>

          <ButtonWrapper>
            <MessageStatus show={showMessageStatus} data={messageStatus}>
              {messageStatus.message}
            </MessageStatus>
            <Button>
              <FontAwesomeIcon icon={faPaperPlane} />
              Send message
            </Button>
          </ButtonWrapper>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
