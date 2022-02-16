import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image1 from "../../assets/images/contact.svg";
import {
  Container,
  FormWrapper,
  EachInputArea,
  InputField,
  Button,
} from "../../common.styles";
import { TopSection, Left, Right, Message } from "./styles";

export default function ContactPage() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
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
      message: Yup.string()
        .max(700, "Message must not be more that 700 characters")
        .required("Required*"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <Navbar />
      <TopSection>
        <Left>
          <div>
            <h1>Join the Team?</h1>
            <p className="first">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              mollitia, corporis accusantium sit distinctio at assumenda rerum
              facilis voluptates sapiente itaque aliquam totam? Saepe impedit
              explicabo aliquid tempora tempore quia facere, accusamus ipsa
              omnis, atque iusto tenetur magni asperiores architecto. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Voluptates
              voluptate sint cumque porro consequuntur blanditiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              modi voluptas sapiente ad at, veritatis suscipit tempore iusto
              totam consectetur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laboriosam, quasi?
            </p>
          </div>
        </Left>

        <Right>
          <FormWrapper
            onSubmit={formik.handleSubmit}
            style={{ padding: "2em", width: "100%" }}
          >
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
              <label htmlFor="message">Message:</label>
              <Message
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ height: "200px" }}
              />
              {formik.touched.message && formik.errors.message ? (
                <p>{formik.errors.message}</p>
              ) : null}
            </EachInputArea>

            <Button width="220px" type="submit">
              SEND MESSAGE
            </Button>
          </FormWrapper>
        </Right>
      </TopSection>

      <Footer />
    </Container>
  );
}
