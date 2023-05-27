import { FC } from "react";
import { AuthTitle, FormBlock, SocialBlock } from "../auth.s";
import { SocialButton } from "../components";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomButton } from "../../../styles/custom-styles";
import { SignInWrap } from "./sign-in.s";

interface ISignInProps {}

const signInSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email")
    .test(
      "checkEmail",
      "In email, you can use Latin letters, numbers, and the _ symbol",
      (e: string) => {
        return /^[a-zA-Z0-9@._-]+$/.test(e);
      }
    ),
  key: Yup.string()
    .required("Username is required")
    .min(6, "Minimum length 6 characters")
    .matches(/^\S*$/, "White Spaces are not allowed")
    .test(
      "checkForLetters",
      "Username must consist of Latin letters",
      (e: string) => {
        return /^[a-zA-Z0-9]+$/.test(e);
      }
    ),
  secret: Yup.string()
    .required("Password is required")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Must Contain One Special Case Character"),
});

export const SignIn: FC<ISignInProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      key: "",
      secret: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <SignInWrap>
      <AuthTitle>Sign up</AuthTitle>
      <SocialBlock>
        <SocialButton click={() => console.log("hello")}>
          Continue with Google
        </SocialButton>
        <SocialButton click={() => console.log("hello")}>
          Continue with Google
        </SocialButton>
      </SocialBlock>

      <FormBlock onSubmit={formik.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter your full name"
          name="name"
          autoComplete="name"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name ? formik.errors.name : ""}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter your email"
          name="email"
          autoComplete="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email ? formik.errors.email : ""}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter your username"
          name="key"
          autoComplete="key"
          onChange={formik.handleChange}
          value={formik.values.key}
          error={formik.touched.key && !!formik.errors.key}
          helperText={formik.touched.key ? formik.errors.key : ""}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter your password"
          name="secret"
          type="secret"
          autoComplete="secret"
          onChange={formik.handleChange}
          value={formik.values.secret}
          error={formik.touched.secret && !!formik.errors.secret}
          helperText={formik.touched.secret ? formik.errors.secret : ""}
          onBlur={formik.handleBlur}
        />
        <CustomButton
          type="submit"
          color="primary"
          variant="contained"
          disabled={!formik.dirty}
          fullWidth
        >
          Login
        </CustomButton>
      </FormBlock>
    </SignInWrap>
  );
};
