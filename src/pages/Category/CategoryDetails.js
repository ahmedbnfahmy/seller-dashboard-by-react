import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { GetSingleCategory } from './../../redux/actions/Category';
import { APIURL } from '../../netWork/netWork';

export default function CategoryDetails() {
    //const { category } = useSelector((state) => state.categories);
    const { category } = useSelector((state) => state.categories);
    const dispatch = useDispatch();
  
    let { id } = useParams();
    useEffect(() => {
      dispatch(GetSingleCategory(id));
    }, [dispatch, id]);
  console.log(category,'product')
    return (
      <div className="d-flex justify-content-center flex-column border border-dark p-5">
        <img className='rounded' src={APIURL+category.image[0]} alt="" width="350px" height="350px" />;
        <h1>name:{category.name}</h1>
        <h1 className='border border-secondary rounded-5'>ID:{category._id}</h1>
        <h1 className='border border-secondary rounded-5'>createdAt:{category.createdAt}</h1>
        <h1 className='border border-secondary rounded-5'>updatedAt:{category.updatedAt}</h1>
      </div>
    );
}
