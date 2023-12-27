import { useNavigate } from "react-router-dom";
import { Button, Header, Modal } from "../styles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Modal>
      <Header>DO SOPT</Header>
      <br />
      <Button onClick={() => navigate(`/login`)}>로그인</Button>
    </Modal>
  );
};

export default Home;
