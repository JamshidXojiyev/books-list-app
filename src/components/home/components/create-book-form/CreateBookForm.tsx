import { FC } from "react";
import {
  CreateBookBottomBlock,
  CreateBookFormWrap,
} from "./create-book-form.s";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CustomButton } from "../../../../styles/custom-styles";
import { useCreateBooksMutation } from "../../../../services/booksApi";
import { toast } from "react-toastify";

interface ICreateBookProps {
  hide: () => void;
}

const createBookSchema = Yup.object().shape({
  isbn: Yup.string().required("Isbn is required"),
});

export const CreateBookForm: FC<ICreateBookProps> = ({ hide }) => {
  const [createBooks, { isLoading }] = useCreateBooksMutation();

  const formik = useFormik({
    initialValues: {
      isbn: "",
    },
    validationSchema: createBookSchema,
    onSubmit: async (values) => {
      const resData: any = await createBooks(values);
      console.log(resData);
      if (resData?.data?.isOk) {
        toast.success("Good day, the system is ready to work!");
        hide();
      } else {
        toast.error(resData.error.data.message);
      }
    },
  });

  return (
    <>
      <CreateBookFormWrap onSubmit={formik.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter the isbn of the book"
          name="isbn"
          autoComplete="isbn"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.isbn}
          error={formik.touched.isbn && !!formik.errors.isbn}
          helperText={formik.touched.isbn ? formik.errors.isbn : ""}
          onBlur={formik.handleBlur}
        />

        <CreateBookBottomBlock>
          <CustomButton
            variant="outlined"
            disabled={isLoading}
            fullWidth
            onClick={hide}
          >
            Close
          </CustomButton>
          <CustomButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={!(formik.isValid && formik.dirty) || isLoading}
            fullWidth
          >
            Submit
          </CustomButton>
        </CreateBookBottomBlock>
      </CreateBookFormWrap>
    </>
  );
};
