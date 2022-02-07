import React, { useContext, useState } from "react";
import { useTheme } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar";
import { SideBarContext } from "../../contexts/sideBarContext";
import SideBar from "../../components/sideBar";
import { Container, AuthContentContainer, Button } from "../../common.styles";
import { FormWrapper, Title, File, Body, Category } from "./styles";

export default function CreateBlogPage() {
  const { isShowing } = useContext(SideBarContext);
  const theme = useTheme();
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  const { mutate, isLoading } = useMutation((formValues) => {
    const endPoint = "http://localhost:8000/blogs/create";
    let formData = new FormData();
    formData.append("title", formValues.title);
    formData.append("category", formValues.category);
    formData.append("image", formValues.image);
    formData.append("body", formValues.body);
    Axios.post(endPoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": token,
      },
    })
      .then(({ data }) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setErrors(err.response.data.errors[0].msg);
        console.log(errors);
      });
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      image: "",
      body: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required*"),
      category: Yup.string().required("Required*"),
      body: Yup.string().required("Required*"),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <Container>
      <Navbar authenticated={true} />
      <SideBar isShowing={isShowing} />
      <AuthContentContainer isSideBarShowing={isShowing}>
        <FormWrapper onSubmit={formik.handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Title: </label>
            <Title
              id="title"
              name="title"
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title ? (
              <p>{formik.errors.title}</p>
            ) : null}
          </div>

          <div className="input-container">
            <label htmlFor="category">Category: </label>
            <Category
              id="category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled hidden>
                Choose here
              </option>
              <option value="general">General</option>
              <option value="politics">Politics</option>
              <option value="sports">Sports</option>
              <option value="entertainment">Entertainment</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
            </Category>
            {formik.touched.category && formik.errors.category ? (
              <p>{formik.errors.category}</p>
            ) : null}
          </div>

          <div className="input-container">
            <label htmlFor="image">Image:</label>
            <File
              id="image"
              name="image"
              type="file"
              required
              accept="image/*"
              onChange={(e) =>
                formik.setFieldValue("image", e.currentTarget.files[0])
              }
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="input-container">
            <label htmlFor="body">Body:</label>
            <Body
              id="body"
              name="body"
              value={formik.values.body}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.body && formik.errors.body ? (
              <p>{formik.errors.body}</p>
            ) : null}
          </div>

          <Button type="submit" bg={theme.color.primary}>
            Publish
          </Button>
        </FormWrapper>
      </AuthContentContainer>
    </Container>
  );
}
