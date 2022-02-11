import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import Axios from "axios";

import DefaultProfileImage from "../../assets/images/profile_avatar.png";
import { baseURL } from "../../utils/baseURL";
import Navbar from "../../components/navbar";
import Loader from "../../components/loader";
import { SideBarContext } from "../../contexts/sideBarContext";
import { AuthContext } from "../../contexts/authContext";
import SideBar from "../../components/sideBar";
import {
  Container,
  AuthContentContainer,
  FormWrapper,
  EachInputArea,
  InputField,
  RadioArea,
  Button,
} from "../../common.styles";
import { Top, ProfilePicture, ImageField } from "./styles";

export default function Dashboard() {
  const { isShowing } = useContext(SideBarContext);
  const { author } = useContext(AuthContext);
  const theme = useTheme();
  const [errors, setErrors] = useState("");

  const { firstname, lastname, gender, dob, email, profilePic } = author;

  const formik = useFormik({
    initialValues: {
      firstname,
      lastname,
      gender,
      dob,
      email,
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      profilePic: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(20, "First Name must not be more that 20 characters")
        .required("Required*"),
      lastname: Yup.string()
        .max(20, "Last Name must not be more that 20 characters")
        .required("Required*"),
      gender: Yup.string().required("Required*"),
      dob: Yup.string().required("Required*"),
      email: Yup.string()
        .email("Must be a Valid Email Address")
        .required("Required*"),
      oldPassword: Yup.string().min(
        6,
        "Your password must be more than 6 characters"
      ),
      newPassword: Yup.string().min(
        6,
        "Your password must be more than 6 characters"
      ),
      confirmNewPassword: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <Navbar authenticated={true} />
      <SideBar isShowing={isShowing} />
      <AuthContentContainer isSideBarShowing={isShowing}>
        <Top>
          <ProfilePicture>
            <img
              src={profilePic ? `${baseURL}${profilePic}` : DefaultProfileImage}
              alt="profile"
            />
          </ProfilePicture>
        </Top>
        <FormWrapper style={{ width: "80%" }}>
          <EachInputArea>
            <label htmlFor="email">Upload Profile Picture:</label>
            <ImageField
              id="profilePic"
              name="profilePic"
              type="file"
              disabled
              value={formik.values.profilePic}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.profilePic && formik.errors.profilePic ? (
              <p>{formik.errors.profilePic}</p>
            ) : null}
          </EachInputArea>

          <EachInputArea>
            <label htmlFor="firstname">First Name:</label>
            <InputField
              id="firstname"
              name="firstname"
              type="text"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <p>{formik.errors.firstname}</p>
            ) : null}
          </EachInputArea>

          <EachInputArea>
            <label htmlFor="lastname">Last Name:</label>
            <InputField
              id="lastname"
              name="lastname"
              type="text"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <p>{formik.errors.lastname}</p>
            ) : null}
          </EachInputArea>

          <RadioArea>
            <p className="label">Gender: </p>

            <div className="input-container">
              <div className="input-wrapper">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={gender === "male"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="male">Male</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={gender === "female"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="female">Female</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={gender === "other"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>

            {formik.touched.gender && formik.errors.gender ? (
              <p>{formik.errors.gender}</p>
            ) : null}
          </RadioArea>

          <EachInputArea>
            <label htmlFor="dob">Date of Birth:</label>
            <InputField
              id="dob"
              name="dob"
              type="date"
              value={formik.values.dob.slice(0, 10)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <p>{formik.errors.dob}</p>
            ) : null}
          </EachInputArea>

          <EachInputArea>
            <label htmlFor="email">Email:</label>
            <InputField
              id="email"
              name="email"
              type="text"
              disabled
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </EachInputArea>

          <div className="update-password-label">Update Password</div>
          <EachInputArea>
            <label htmlFor="oldPassword">Old Password:</label>
            <InputField
              id="oldPassword"
              name="oldPassword"
              type="password"
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.oldPassword && formik.errors.oldPassword ? (
              <p>{formik.errors.oldPassword}</p>
            ) : null}
          </EachInputArea>
          <EachInputArea>
            <label htmlFor="newPassword">New Password:</label>
            <InputField
              id="newPassword"
              name="newPassword"
              type="password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.newPassword && formik.errors.newPassword ? (
              <p>{formik.errors.newPassword}</p>
            ) : null}
          </EachInputArea>
          <EachInputArea>
            <label htmlFor="confirmNewPassword">Confirm New Password:</label>
            <InputField
              id="confirmNewPassword"
              name="confirmNewPassword"
              type="password"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmNewPassword &&
            formik.errors.confirmNewPassword ? (
              <p>{formik.errors.confirmNewPassword}</p>
            ) : null}
          </EachInputArea>

          <Button type="submit" bg={theme.color.primary} width="100%">
            Save
          </Button>
        </FormWrapper>
      </AuthContentContainer>
    </Container>
  );
}
