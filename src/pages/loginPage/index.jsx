import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Axios from "axios";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Loader from "../../components/loader";
import { AuthContext } from "../../contexts/authContext";

import {
  Container,
  FormWrapper,
  EachInputArea,
  InputField,
  Button,
} from "../../common.styles";

export default function LoginPage() {
  const theme = useTheme();
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { mutate, isLoading } = useMutation((formValues) => {
    const endPoint = "http://localhost:8000/auth/login";
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
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a Valid Email Address")
        .required("Required*"),
      password: Yup.string().required("Required*"),
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
            <h1>Welcome Back</h1>
            <h3>Please login to continue!</h3>
          </div>
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
          {error && <div className="error-message">{error}</div>}
          <Button type="submit" bg={theme.color.primary} width="150px">
            Login In
          </Button>
          <p className="down-text">
            Don't have an account?{" "}
            <Link exact="true" to="/signup">
              sign up
            </Link>
          </p>
        </FormWrapper>
      )}
      <Footer />
    </Container>
  );
}
