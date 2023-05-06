import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { GetSingleProduct } from "../../../redux/actions/Product";
const ProductDetails = () => {
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(GetSingleProduct(id));
  }, [dispatch, id]);
console.log(product,'product')
  return (
    <>
      <div>name:{product.name}</div>
      <div>price:{product.price}</div>
      <div>sup category:{product.subcategory}</div>
    </>
  );
};

export default ProductDetails;
