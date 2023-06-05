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
import { useUserInfoMutation } from "../../../app/services/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../app/features/authSlice";
import { toast } from "react-toastify";

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

export const SignIn: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpUser, { isLoading, data, error }] = useUserInfoMutation();

  const formik = useFormik({
    initialValues: {
      key: "",
      secret: "",
    },
    validationSchema: signInSchema,
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
    <SignInWrap>
      <AuthTitle>Sign in</AuthTitle>
      <SocialBlock>
        <SocialButton>
          <img src={require("../../../assets/images/google.png")} />
          Continue with Google
        </SocialButton>
        <SocialButton>
          <img src={require("../../../assets/images/facebook.png")} />
          Continue with Facebook
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
            disabled={!(formik.isValid && formik.dirty) || isLoading}
            fullWidth
          >
            Submit
          </CustomButton>
          <AuthLink to="/sign-up">
            Not registered yet? <span>Go to Sign up.</span>
          </AuthLink>
        </AuthBottom>
      </FormBlock>
    </SignInWrap>
  );
};
