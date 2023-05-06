import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { z } from "zod";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toFormikValidationSchema } from "zod-formik-adapter";
import TextInput from "../../../components/UI/TextInput";
import UploadImages from "../../../components/UI/UploadImages";
import "./CategoryForm.css";
import { GetSingleCategory, AddCategory, UpdateCategory } from './../../../redux/actions/Category';
export default function CategoryForm() {
  const { category } = useSelector((state) => state.categories);

  const [filesp, setFiles] = useState();
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(GetSingleCategory(id));
  }, [dispatch, id]);

  const history = useHistory();
  const formData = new FormData();
  const handleSubmit = async (values, formikHelpers) => {
    formikHelpers.setSubmitting(true);
    try {
      if (!filesp) {
        return toast.error(`must sellect image `, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      const category = { files: filesp, ...values };
      for (let i = 0; i < filesp.length; i++) {
        formData.append("files", filesp[i]);
      }
      for (let key in category) {
        formData.append(key, category[key]);
      }

      if (id) {
        return dispatch(UpdateCategory(formData, id)), history.push("/category");
      }
      dispatch(AddCategory(formData));

      history.push("/category");
    } catch (error) {
      //
    }
    formikHelpers.setSubmitting(false);
  };
  return (
    <>
      <Formik
        initialValues={
          id
            ? {
                name: category.name,
              }
            : {}
        }
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit, isSubmitting }) => (
          <Form>
            <div container>
              <p flex={2}>Add new Collection</p>
            </div>

            <div>
              <div>
                <TextInput
                  name="name"
                  placeholder="Enter category name"
                  label="category name"
                />
              </div>

              <div>
                <UploadImages
                  name="images"
                  placeholder="sellect images"
                  label="category images"
                  setFiles={setFiles}
                />
              </div>
            </div>

            <div item container justifyContent="center" mt={1}>
              <button
                variant="contained"
                type="submit"
                loading={isSubmitting}
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

const validationSchema = z.object({
  name: z.string(),
});
