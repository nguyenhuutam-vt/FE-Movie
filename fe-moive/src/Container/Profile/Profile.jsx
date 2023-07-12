import { useState } from "react";
import { styled } from "styled-components";
import NavbarDetail from "./../../Component/NavbarDetail";
import Modal from "react-modal";
// import Avatar2 from "../../Component/Card/Avatar";
import Avatar1 from "../../assets/img/M logo 2.png";
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [Avatar, setAvatar] = useState(Avatar1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fullName, setFullName] = useState("Nguyen Thai Nguyen");
  const [email, setEmail] = useState("example@example.com");
  const [phone, setPhone] = useState("1234567890");
  const [address, setAddress] = useState("123 ABC Street, XYZ City");
  const [dateOfBirth, setDateOfBirth] = useState("01/01/2000");
  const Container = styled.div`
    background-color: #1b0301;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  `;
  const Name = styled.p`
    text-align: center;
    margin-left: 10px;
  `;
  const Button = styled.button`
    padding: 10px 20px;
    background-color: red;
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
    display: flex;
    align-items: center;
  `;
  const Content = styled.div`
    width: 80%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #1b0301;
    border-radius: 10px;
    padding: 20px;
    margin-top: 10px;
  `;
  const Info = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  const Label = styled.div`
    font-size: 22px;
  `;
  const Text = styled.div`
    margin: unset;
  `;
  const StyDiv = styled.div`
    margin: 10px;
  `;
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };
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
          {isEditing ? (
            <Button onClick={handleSaveProfile}>Save Profile</Button>
          ) : (
            <Button onClick={handleEditProfile}>Edit Profile</Button>
          )}
        </Info>
        <Content>
          <StyDiv>
            <Label htmlFor="name">Full Name</Label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            ) : (
              <Text>{fullName}</Text>
            )}
          </StyDiv>
          <StyDiv>
            <Label htmlFor="email">Email</Label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            ) : (
              <Text>{email}</Text>
            )}
          </StyDiv>
          <StyDiv>
            <Label htmlFor="phone">Phone</Label>
            {isEditing ? (
              <input
                type="tel"
                name="tel"
                placeholder="Phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <Text>{phone}</Text>
            )}
          </StyDiv>
          <StyDiv>
            <Label htmlFor="address">Address</Label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                placeholder="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            ) : (
              <Text>{address}</Text>
            )}
          </StyDiv>
          <StyDiv>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            {isEditing ? (
              <input
                type="date"
                lang="vi"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            ) : (
              <Text>{dateOfBirth}</Text>
            )}
          </StyDiv>
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
