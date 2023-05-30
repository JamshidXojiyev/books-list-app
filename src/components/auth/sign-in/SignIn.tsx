import { FC } from "react";
import {
  AuthBottom,
  AuthLink,
  AuthTitle,
  FormBlock,
  SocialBlock,
} from "../auth.s";
import { SocialButton } from "../components";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomButton } from "../../../styles/custom-styles";
import { SignInWrap } from "./sign-in.s";

const signInSchema = Yup.object().shape({
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

export const SignIn: FC = (props) => {
  const formik = useFormik({
    initialValues: {
      key: "",
      secret: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {},
  });

  return (
    <SignInWrap>
      <AuthTitle>Sign in</AuthTitle>
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
          label="Username*"
          name="key"
          autoComplete="key"
          autoFocus
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
          label="Password*"
          name="secret"
          type="secret"
          autoComplete="secret"
          onChange={formik.handleChange}
          value={formik.values.secret}
          error={formik.touched.secret && !!formik.errors.secret}
          helperText={formik.touched.secret ? formik.errors.secret : ""}
          onBlur={formik.handleBlur}
        />

        <AuthBottom>
          <CustomButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={!formik.dirty}
            fullWidth
          >
            Login
          </CustomButton>
          <AuthLink to="/sign-up">
            Not registered yet? <span>Go to Sign up.</span>
          </AuthLink>
        </AuthBottom>
      </FormBlock>
    </SignInWrap>
  );
};
