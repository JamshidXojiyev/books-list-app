import { FC, useEffect } from "react";
import { SignUpWrap } from "./sign-up.s";
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
import { useSignUpUserMutation } from "../../../services/authApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../features/authSlice";
import { toast } from "react-toastify";

const signUpSchema = Yup.object().shape({
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

export const SignUp: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpUser, { isLoading, data, error }] = useSignUpUserMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      key: "",
      secret: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      const resData: any = await signUpUser(values);

      if (resData?.data?.isOk) {
        await dispatch(setUser({ ...resData.data.data }));
        navigate("/");
        toast.success("Good day, the system is ready to work!");
      } else {
        toast.error(resData.error.data.message);
      }
    },
  });

  return (
    <SignUpWrap>
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

        <AuthBottom>
          <CustomButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={!(formik.isValid && formik.dirty) || isLoading}
            fullWidth
          >
            Login
          </CustomButton>
          <AuthLink to="/sign-in">
            Already signed up? <span>Go to Sign in.</span>
          </AuthLink>
        </AuthBottom>
      </FormBlock>
    </SignUpWrap>
  );
};
