import { useState } from "react";
import { styled } from "styled-components";
import NavbarDetail from "./../../Component/NavbarDetail";
import Modal from "react-modal";
import Avatar from "../../assets/img/AvatarPro.jpg";

const Profile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("John Doe");

  const Container = styled.div`
    background-color: #1b0301;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Body = styled.div`
    width: 80%;
    background-color: beige;
    margin-top: 100px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const SAvatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    cursor: pointer;
  `;

  const Name = styled.p`
    text-align: center;
    margin-left: 10px;
    
  `;

  const Button = styled.button`
    padding: 10px 20px;
    background-color: #1b0301;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
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
    flex-direction: row;
    display: flex;
  `;
  return (
    <Container>
      <NavbarDetail />
      <Body>
        <InfoUser>
          <SAvatar onClick={handleAvatarClick}>
            <img src={avatar} alt="" />
          </SAvatar>
          <Name>Thái Nguyên</Name>
        </InfoUser>
        <Button>Edit Profile</Button>
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
