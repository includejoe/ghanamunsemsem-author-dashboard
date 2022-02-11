import React, { useContext, useState } from "react";
import { useTheme } from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "react-query";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { baseURL } from "../../utils/baseURL";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";
import { SideBarContext } from "../../contexts/sideBarContext";
import SideBar from "../../components/sideBar";
import { Container, AuthContentContainer, Button } from "../../common.styles";
import {
  FormWrapper,
  Title,
  File,
  Body,
  Category,
} from "../createBlogPage/styles";

export default function UpdateBlogPage() {
  const { isShowing } = useContext(SideBarContext);
  const theme = useTheme();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  const { id } = useParams();

  const { data } = useQuery("blog_details", async () => {
    const endPoint = `${baseURL}/blog_details/${id}`;
    return Axios.get(endPoint, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then(({ data }) => {
        return data.blog;
      })
      .catch((err) => {
        setError(err.response.data.errors[0].msg);
      });
  });

  const { mutate } = useMutation((formValues) => {
    const endPoint = `${baseURL}/blogs/update_blog/${id}`;
    let formData = new FormData();
    formData.append("title", formValues.title);
    formData.append("category", formValues.category);
    formData.append("image", formValues.image);
    formData.append("body", formValues.body);
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
      });
  });

  const validationSchema = Yup.object({
    title: Yup.string().required("Required*"),
    category: Yup.string().required("Required*"),
    body: Yup.string().required("Required*"),
  });

  return (
    <Container>
      <Navbar authenticated={true} />
      <SideBar isShowing={isShowing} />
      <AuthContentContainer isSideBarShowing={isShowing}>
        {data ? (
          <Formik
            initialValues={{
              title: data.title,
              category: data.category,
              image: "",
              body: data.body,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              mutate(values);
            }}
          >
            {(props) => (
              <FormWrapper onSubmit={props.handleSubmit}>
                <div className="input-container">
                  <label htmlFor="title">Title: </label>
                  <Title
                    id="title"
                    name="title"
                    type="text"
                    value={props.values.title}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.touched.title && props.errors.title ? (
                    <p>{props.errors.title}</p>
                  ) : null}
                </div>

                <div className="input-container">
                  <label htmlFor="category">Category: </label>
                  <Category
                    id="category"
                    name="category"
                    value={props.values.category}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
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
                  {props.touched.category && props.errors.category ? (
                    <p>{props.errors.category}</p>
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
                      props.setFieldValue("image", e.currentTarget.files[0])
                    }
                    onBlur={props.handleBlur}
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="body">Body:</label>
                  <Body
                    id="body"
                    name="body"
                    value={props.values.body}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.touched.body && props.errors.body ? (
                    <p>{props.errors.body}</p>
                  ) : null}
                </div>

                {error && <div className="error-message">{error}</div>}
                <Button
                  disabled={props.isSubmitting ? true : false}
                  type="submit"
                  bg={theme.color.primary}
                >
                  Save
                </Button>
              </FormWrapper>
            )}
          </Formik>
        ) : (
          <Loader />
        )}
      </AuthContentContainer>
    </Container>
  );
}
