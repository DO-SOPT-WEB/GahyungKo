import styled from "styled-components";
import { Header, Button, Modal } from "../styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const MyPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const information = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/members/${userId}`
        );
        setId(information.data.username);
        setName(information.data.nickname);
      } catch (err) {
        console.log(err);
      }
    };

    loadData();
  }, [userId]);

  return (
    <Modal>
      <Header>My Page</Header>
      <InfoContainer>
        <Image src="/icon.jpg" alt="profile_icon" />
        <InfoWrapper>
          <Info>ID: {id}</Info>
          <Info>닉네임: {name}</Info>
        </InfoWrapper>
      </InfoContainer>
      <Button onClick={() => navigate(`/login`)}>로그아웃</Button>
    </Modal>
  );
};

export default MyPage;

const InfoContainer = styled.section`
  width: 75%;
  margin: 3rem;

  display: flex;
  justify-content: space-around;
  gap: 2.5rem;
`;

const Image = styled.img`
  height: 8rem;
  width: 8rem;

  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
`;

const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Info = styled.span`
  height: 2.5rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;

  background-color: lightgray;
  border-radius: 5px;
`;
