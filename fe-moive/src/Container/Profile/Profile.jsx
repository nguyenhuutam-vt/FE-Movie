import { useState } from "react";
import { styled } from "styled-components";
import NavbarDetail from "./../../Component/NavbarDetail";
import Modal from "react-modal";
// import Avatar2 from "../../Component/Card/Avatar";
import Avatar1 from "../../assets/img/M logo 2.png";
import { mobile } from "../../responsive";
import EditProfile from "./EditProfile";
const Profile = () => {
  const [Avatar, setAvatar] = useState(Avatar1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const Container = styled.div`
    background-color: #1b0301;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mobile({
      fontSize: "12px",
    })}
  `;
  const Body = styled.div`
    width: 70%;
    margin-top: 100px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 10px;
  `;
  const SAvatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: #1b0301 solid 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: #1b0301;
    ${mobile({
      width: "50px",
      height: "50px",
    })}
    img {
      ${mobile({
        width: "50px",
        height: "50px",
      })}
    }
  `;
  const Name = styled.p`
    text-align: center;
    margin-left: 10px;
    font-size: 32px;
    ${mobile({ fontSize: "12px" })}
  `;
  const Button = styled.button`
    padding: 10px 20px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    ${mobile({
      padding: "0px"
    })}
  `;
  const handleAvatarClick = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleImageSelect = (event) => {
    const newAvatar = URL.createObjectURL(event.target.files[0]);
    setAvatar(newAvatar);
    setModalIsOpen(false);
  };
  const InfoUser = styled.div`
    display: flex;
    align-items: center;
  `;
  const Content = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: #1b0301;
    border-radius: 10px;
    padding: 20px;
    margin-top: 10px;
    ${mobile({
      padding: "10px",
      width: "90%",
    })}
  `;
  const Info = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <Container>
      <NavbarDetail />
      <Body>
        <Info>
          <InfoUser>
            <SAvatar onClick={handleAvatarClick}>
              <img src={Avatar} alt="" />
            </SAvatar>
            <Name>Thái Nguyên</Name>
          </InfoUser>
        </Info>
        <Content>
          <EditProfile />
          <Button>Reset Password</Button>
        </Content>
      </Body>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Choose a new photo</h2>
        <input type="file" onChange={handleImageSelect} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </Container>
  );
};
export default Profile;
