import React, { useEffect, useState } from "react";
import { FormikHelpers, Form, Formik } from "formik";
import { z } from "zod";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toFormikValidationSchema } from "zod-formik-adapter";
import TextInput from "../../../components/UI/TextInput";
import Select from "../../../components/UI/Select";
import UploadImages from "../../../components/UI/UploadImages";
import { getCategoryList } from "../../../redux/actions/Category";
import { GetCategorySubCategory } from "../../../redux/actions/SupCategory";
import {
  AddNewProduct,
  GetSingleProduct,
  UpdateProduct,
} from "../../../redux/actions/Product";
import "./FormProduct.css";
export default function FormProduct() {
  const { categories } = useSelector((state) => state.categories);
  const { supCategories } = useSelector((state) => state.supCategories);
  const { product } = useSelector((state) => state.products);
  const sellectCategories = categories.map((categoy) => ({
    name: categoy.name,
    value: categoy._id,
  }));
  const selleSupctCategories = supCategories.map((categoy) => ({
    name: categoy.name,
    value: categoy._id,
  }));
  const [filesp, setFiles] = useState();
  const [cat, setCat] = useState();
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(GetSingleProduct(id));
  }, [id]);

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);
  useEffect(() => {
    dispatch(GetCategorySubCategory(cat));
  }, [cat]);

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
      const product = { files: filesp, ...values };
      for (let i = 0; i < filesp.length; i++) {
        formData.append("files", filesp[i]);
      }
      for (let key in product) {
        formData.append(key, product[key]);
      }

      if (id) {
        return dispatch(UpdateProduct(formData, id)), history.push("/products");
      }
      dispatch(AddNewProduct(formData));

      history.push("/products");
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
                name: product.name,
                category: product.category,
                supCategory: product.supCategory,
                price: product.price,
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
                  placeholder="Enter Product name"
                  label="product name"
                />
              </div>
              <div>
                <TextInput
                  min={1}
                  type={"number"}
                  name="price"
                  placeholder="Enter Product price"
                  label="product price"
                />
              </div>
              <div>
                <Select
                  disabled={!sellectCategories.length}
                  name="category"
                  options={sellectCategories || []}
                  label="Product category"
                  placeholder="Select Category"
                  onClick={() => setCat(values.category)}
                />
                <Select
                  disabled={!selleSupctCategories.length}
                  name="supCategory"
                  options={selleSupctCategories || []}
                  label="Product supCategory"
                  placeholder="Select supCategory"
                />
              </div>
              <div>
                <UploadImages
                  name="images"
                  placeholder="sellect images"
                  label="product images"
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
  category: z.string(),
  supCategory: z.string().optional(),
  price: z.number().min(1),
});
