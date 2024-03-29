import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Axios from "axios";

import { AuthContext } from "../../contexts/authContext";
import { baseURL } from "../../utils/baseURL";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Loader from "../../components/loader";

import {
  Container,
  FormWrapper,
  EachInputArea,
  InputField,
  RadioArea,
  Button,
} from "../../common.styles";

export default function LoginPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const [error, setError] = useState("");

  const { mutate, isLoading } = useMutation((formValues) => {
    const endPoint = `${baseURL}/auth/signup`;
    Axios.post(endPoint, formValues)
      .then(({ data }) => {
        const { token } = data;
        context.login(token);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.response.data.errors[0].msg);
      });
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
      secretCode: "",
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
      password: Yup.string()
        .min(6, "Your password must be more than 6 characters")
        .required("Required*"),
      confirmPassword: Yup.string().required("Required*"),
      secretCode: Yup.string().required("Required*"),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <Container>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <FormWrapper onSubmit={formik.handleSubmit}>
          <div className="top-text">
            <h1>Create New Account</h1>
            <h3>Please sign-up to continue!</h3>
          </div>

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
              value={formik.values.dob}
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </EachInputArea>

          <EachInputArea>
            <label htmlFor="password">Password:</label>
            <InputField
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </EachInputArea>

          <EachInputArea>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <InputField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p>{formik.errors.confirmPassword}</p>
            ) : null}
          </EachInputArea>

          <EachInputArea>
            <label htmlFor="secretCode">Secret Code:</label>
            <InputField
              id="secretCode"
              name="secretCode"
              type="text"
              value={formik.values.secretCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.secretCode && formik.errors.secretCode ? (
              <p>{formik.errors.secretCode}</p>
            ) : null}
          </EachInputArea>

          {error && <div className="error-message">{error}</div>}

          <Button type="submit" bg={theme.color.primary} width="100%">
            Sign Up
          </Button>

          <p className="down-text">
            Already have an account?{" "}
            <Link exact="true" to="/login">
              login
            </Link>
          </p>
        </FormWrapper>
      )}
      <Footer />
    </Container>
  );
}
