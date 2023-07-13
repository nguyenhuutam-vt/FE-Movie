import React, { useState } from "react";
import styled from "styled-components";
import SaveIcon from "@mui/icons-material/Save";
import BadgeIcon from "@mui/icons-material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import CakeIcon from "@mui/icons-material/Cake";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { mobile } from "../../responsive";
import "./Edit.css";
const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("Nguyen Thai Nguyen");
  const [email, setEmail] = useState("example@example.com");
  const [phone, setPhone] = useState("1234567890");
  const [address, setAddress] = useState("123 ABC Street, XYZ City");
  const [dateOfBirth, setDateOfBirth] = useState("01/01/2000");
  const Button = styled.button`
    background-color: red;
    align-items: center;
    display: flex;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    ${mobile({
      padding: "0px",
      backgroundColor: "transparent",
    })}
  `;
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const Label = styled.div`
    font-size: 24px;

    ${mobile({
      fontSize: "16px",
    })}
  `;
  const Text = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  `;
  const TextB = styled.p`
    ${mobile({ display: "none" })}
  `;
  const Div = styled.div`
    width: 100%;
    position: absolute;
    justify-content: center;
    display: flex;
  `;
  return (
    <div>
      <Div>
        {isEditing ? (
          <Button onClick={handleSaveProfile}>
            <SaveIcon />
            <TextB>Save Profile</TextB>
          </Button>
        ) : (
          <Button onClick={handleEditProfile}>
            <DriveFileRenameOutlineIcon />
            <TextB>Edit Profile</TextB>
          </Button>
        )}
      </Div>
      <Label>Full Name</Label>
      {isEditing ? (
        <input
          className="input"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      ) : (
        <Text>
          <BadgeIcon />
          {fullName}
        </Text>
      )}
      <Label htmlFor="email">Email</Label>
      {isEditing ? (
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      ) : (
        <Text>
          <MailIcon />
          {email}
        </Text>
      )}
      <Label htmlFor="phone"> Phone</Label>
      {isEditing ? (
        <input
          className="input"
          type="tel"
          name="tel"
          placeholder="Phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
      ) : (
        <Text>
          <PhoneAndroidIcon />
          {phone}
        </Text>
      )}
      <Label htmlFor="address">Address</Label>
      {isEditing ? (
        <input
          className="input"
          type="text"
          name="address"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      ) : (
        <Text>
          <HomeIcon />
          {address}
        </Text>
      )}
      <Label htmlFor="dateOfBirth">Date of Birth</Label>
      {isEditing ? (
        <input
          className="input"
          type="date"
          lang="vi"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
      ) : (
        <Text>
          <CakeIcon />
          {dateOfBirth}
        </Text>
      )}
    </div>
  );
};
export default EditProfile;
