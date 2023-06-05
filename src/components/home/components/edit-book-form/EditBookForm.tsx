import { FC } from "react";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CustomButton } from "../../../../styles/custom-styles";
import { useEditBooksMutation } from "../../../../app/services/booksApi";
import { toast } from "react-toastify";
import { EditBookBottomBlock, EditBookFormWrap } from "./edit-book-form.s";
import { IBookInfo } from "../../../../interfaces/books-list-interface";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../../app/features/authSlice";

interface ICreateBookProps {
  hide: () => void;
  id: number | undefined;
  body: IBookInfo | null;
  status: number | undefined;
}

const createBookSchema = Yup.object().shape({
  isbn: Yup.string().required("isbn is required"),
  title: Yup.string().required("title is required"),
  author: Yup.string().required("author is required"),
  published: Yup.number().required("published is required"),
  pages: Yup.number().required("pages is required"),
});

export const EditBookForm: FC<ICreateBookProps> = ({
  hide,
  id,
  body,
  status,
}) => {
  const userInfo = useSelector(selectAuth);
  const [editBooks, { isLoading }] = useEditBooksMutation();

  const formik = useFormik({
    initialValues: {
      isbn: body?.isbn,
      title: body?.title,
      author: body?.author,
      published: body?.published,
      pages: body?.pages,
      status: status,
    },
    validationSchema: createBookSchema,
    onSubmit: async (values) => {
      const resData: any = await editBooks({
        id: id,
        body: values,
        userInfo: userInfo,
      });
      console.log(resData);
      if (resData?.data?.isOk) {
        toast.success("Successfully completed");
        hide();
      } else {
        toast.error(resData.error.data.message);
      }
    },
  });

  return (
    <>
      <EditBookFormWrap onSubmit={formik.handleSubmit}>
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter the title of the book"
          name="title"
          autoComplete="title"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.title}
          error={formik.touched.title && !!formik.errors.title}
          helperText={formik.touched.title ? formik.errors.title : ""}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter the author of the book"
          name="author"
          autoComplete="author"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.author}
          error={formik.touched.author && !!formik.errors.author}
          helperText={formik.touched.author ? formik.errors.author : ""}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter the published of the book"
          name="published"
          autoComplete="published"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.published}
          error={formik.touched.published && !!formik.errors.published}
          helperText={formik.touched.published ? formik.errors.published : ""}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter the pages of the book"
          name="pages"
          autoComplete="pages"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.pages}
          error={formik.touched.pages && !!formik.errors.pages}
          helperText={formik.touched.pages ? formik.errors.pages : ""}
          onBlur={formik.handleBlur}
        />
        <RadioGroup
          row
          defaultValue={formik.values.status}
          onChange={(e) => {
            formik.setFieldValue("status", e.target.value);
          }}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="0" control={<Radio />} label="New" />
          <FormControlLabel value="1" control={<Radio />} label="Reading" />
          <FormControlLabel value="2" control={<Radio />} label="Finished" />
        </RadioGroup>

        <EditBookBottomBlock>
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
            disabled={!formik.isValid || isLoading}
            fullWidth
          >
            Submit
          </CustomButton>
        </EditBookBottomBlock>
      </EditBookFormWrap>
    </>
  );
};
