import styled from 'styled-components';
import { Header, Button, Modal } from "../styles";

const MyPage = () => {
    return (
        <Modal>
            <Header>My Page</Header>
            <InfoContainer>
                <Image src='../../public/icon.jpg'></Image> 
                <InfoWrapper>
                    <Info>ID: </Info>
                    <Info>닉네임: </Info>
                </InfoWrapper>
            </InfoContainer>
            <Button>로그아웃</Button>
        </Modal>
    );
}

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