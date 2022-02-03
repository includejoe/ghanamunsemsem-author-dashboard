import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Axios from "axios";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
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

  const mutation = useMutation((formValues) => {
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
      mutation.mutate(values);
    },
  });

  return (
    <Container>
      <Navbar />
      <FormWrapper onSubmit={formik.handleSubmit}>
        <div className="inner-container">
          <div className="top-text">
            <h1>Welcome</h1>
            <h1>Back</h1>
            <p>please login to continue!</p>
          </div>
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
          {error && <div className="error-message">{error}</div>}
          <Button
            type="submit"
            bg={theme.color.faint}
            color={theme.fontColor.primary}
          >
            Login In
          </Button>
          <p>
            Don't have an account?{" "}
            <Link exact="true" to="/signup">
              sign up
            </Link>
          </p>
        </div>
      </FormWrapper>
      <Footer />
    </Container>
  );
}
