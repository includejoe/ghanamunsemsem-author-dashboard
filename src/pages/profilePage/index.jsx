import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import Axios from "axios";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { breakPoint } from "../../utils/breakPoints";
import DefaultProfileImage from "../../assets/images/profile_avatar.png";
import { baseURL } from "../../utils/baseURL";
import Navbar from "../../components/navbar";
import Loader from "../../components/loader";
import { SideBarContext } from "../../contexts/sideBarContext";

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

export default function ProfilePage() {
  const { isShowing } = useContext(SideBarContext);
  const theme = useTheme();
  const token = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { data } = useQuery("author", async () => {
    const endPoint = `${baseURL}/auth/author`;
    return Axios.get(endPoint, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then(({ data }) => {
        return data.author;
      })
      .catch((err) => {
        setError(err.response.data.errors[0].msg);
      });
  });

  const validationSchema = Yup.object({
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
  });

  const { mutate } = useMutation((formValues) => {
    const endPoint = `${baseURL}/auth/update_profile`;
    let formData = new FormData();
    formData.append("firstname", formValues.firstname);
    formData.append("lastname", formValues.lastname);
    formData.append("gender", formValues.gender);
    formData.append("dob", formValues.dob);
    formData.append("oldPassword", formValues.oldPassword);
    formData.append("newPassword", formValues.newPassword);
    formData.append("confirmNewPassword", formValues.confirmNewPassword);
    formData.append("profilePic", formValues.profilePic);
    Axios.put(endPoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": token,
      },
    })
      .then(({ data }) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.response.data.errors[0].msg);
        console.log(error);
      });
  });

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakPoint.mobile}px)`,
  });

  return (
    <Container>
      <Navbar authenticated={true} />
      <SideBar isShowing={isShowing} />
      <AuthContentContainer isSideBarShowing={isShowing}>
        {data ? (
          <>
            <Top>
              <ProfilePicture>
                <img
                  src={
                    data?.profilePic
                      ? `${baseURL}${data?.profilePic}`
                      : DefaultProfileImage
                  }
                  alt="profile"
                />
              </ProfilePicture>
            </Top>

            <Formik
              initialValues={{
                firstname: data.firstname,
                lastname: data.lastname,
                gender: data.gender,
                dob: data.dob.slice(0, 10),
                email: data.email,
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: "",
                profilePic: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("submitting");
                mutate(values);
              }}
            >
              {(props) => (
                <FormWrapper
                  onSubmit={props.handleSubmit}
                  style={isMobile ? { width: "100%" } : { width: "80%" }}
                >
                  <EachInputArea>
                    <label htmlFor="email">Update Profile Picture:</label>
                    <ImageField
                      id="profilePic"
                      name="profilePic"
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        props.setFieldValue(
                          "profilePic",
                          e.currentTarget.files[0]
                        )
                      }
                      onBlur={props.handleBlur}
                    />
                  </EachInputArea>

                  <EachInputArea>
                    <label htmlFor="firstname">First Name:</label>
                    <InputField
                      id="firstname"
                      name="firstname"
                      type="text"
                      value={props.values.firstname}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.touched.firstname && props.errors.firstname ? (
                      <p>{props.errors.firstname}</p>
                    ) : null}
                  </EachInputArea>

                  <EachInputArea>
                    <label htmlFor="lastname">Last Name:</label>
                    <InputField
                      id="lastname"
                      name="lastname"
                      type="text"
                      value={props.values.lastname}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.touched.lastname && props.errors.lastname ? (
                      <p>{props.errors.lastname}</p>
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
                          checked={props.values.gender === "male"}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                        />
                        <label htmlFor="male">Male</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          checked={props.values.gender === "female"}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                        />
                        <label htmlFor="female">Female</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          name="gender"
                          id="other"
                          value="other"
                          checked={props.values.gender === "other"}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                        />
                        <label htmlFor="other">Other</label>
                      </div>
                    </div>

                    {props.touched.gender && props.errors.gender ? (
                      <p>{props.errors.gender}</p>
                    ) : null}
                  </RadioArea>

                  <EachInputArea>
                    <label htmlFor="dob">Date of Birth:</label>
                    <InputField
                      id="dob"
                      name="dob"
                      type="date"
                      value={props.values.dob.slice(0, 10)}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.touched.dob && props.errors.dob ? (
                      <p>{props.errors.dob}</p>
                    ) : null}
                  </EachInputArea>

                  <EachInputArea>
                    <label htmlFor="email">Email:</label>
                    <InputField
                      id="email"
                      name="email"
                      type="text"
                      disabled
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.touched.email && props.errors.email ? (
                      <p>{props.errors.email}</p>
                    ) : null}
                  </EachInputArea>

                  <div className="update-password-label">Update Password</div>
                  <EachInputArea>
                    <label htmlFor="oldPassword">Old Password:</label>
                    <InputField
                      id="oldPassword"
                      name="oldPassword"
                      type="password"
                      value={props.values.oldPassword}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.touched.oldPassword && props.errors.oldPassword ? (
                      <p>{props.errors.oldPassword}</p>
                    ) : null}
                  </EachInputArea>
                  <EachInputArea>
                    <label htmlFor="newPassword">New Password:</label>
                    <InputField
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={props.values.newPassword}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.touched.newPassword && props.errors.newPassword ? (
                      <p>{props.errors.newPassword}</p>
                    ) : null}
                  </EachInputArea>
                  <EachInputArea>
                    <label htmlFor="confirmNewPassword">
                      Confirm New Password:
                    </label>
                    <InputField
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      type="password"
                      value={props.values.confirmNewPassword}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.touched.confirmNewPassword &&
                    props.errors.confirmNewPassword ? (
                      <p>{props.errors.confirmNewPassword}</p>
                    ) : null}
                  </EachInputArea>

                  {error && <div className="error-message">{error}</div>}
                  <Button type="submit" bg={theme.color.primary} width="100%">
                    Save
                  </Button>
                </FormWrapper>
              )}
            </Formik>
          </>
        ) : (
          <Loader />
        )}
      </AuthContentContainer>
    </Container>
  );
}
