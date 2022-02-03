import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import {
  Container,
  FormWrapper,
  EachInputArea,
  InputField,
  Button,
} from "../../common.styles";

export default function LoginPage() {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(20, "First Name must not be more that 20 characters")
        .required("Required*"),
      lastname: Yup.string()
        .max(20, "Last Name must not be more that 20 characters")
        .required("Required*"),
      email: Yup.string()
        .email("Must be a Valid Email Address")
        .required("Required*"),
      password: Yup.string()
        .min(6, "Your password must be more than 6 characters")
        .required("Required*"),
      confirmPassword: Yup.string().required("Required*"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <Navbar />
      <FormWrapper onSubmit={formik.handleSubmit}>
        <div className="inner-container" style={{ minHeight: "750px" }}>
          <div className="top-text">
            <h1>Create</h1>
            <h1>Account</h1>
            <p>please sign-up to continue!</p>
          </div>
          <EachInputArea>
            <InputField
              id="firstname"
              name="firstname"
              type="text"
              placeholder="First Name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <p>{formik.errors.firstname}</p>
            ) : null}
          </EachInputArea>
          <EachInputArea>
            <InputField
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Last Name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <p>{formik.errors.lastname}</p>
            ) : null}
          </EachInputArea>
          <EachInputArea>
            <InputField
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </EachInputArea>
          <EachInputArea>
            <InputField
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </EachInputArea>
          <EachInputArea>
            <InputField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p>{formik.errors.confirmPassword}</p>
            ) : null}
          </EachInputArea>
          <Button bg={theme.color.faint} color={theme.fontColor.primary}>
            Sign Up
          </Button>
          <p>
            Already have an account?{" "}
            <Link exact="true" to="/login">
              login
            </Link>
          </p>
        </div>
      </FormWrapper>
      <Footer />
    </Container>
  );
}
