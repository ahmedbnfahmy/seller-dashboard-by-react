import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Table from "../../components/table/Table";
import Pagination from "../../components/Pagination/Pagination";
import { APIURL } from "../../netWork/netWork";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { total } from './../../redux/actions/Product';
import { getCategoryList, deleteCategory } from './../../redux/actions/Category';


export default function Category() {

    const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { num } = useParams() || 1;

  

  const [page, setPage] = useState(num);
  // const [pages, setPages] = useState(1);
  const pages = total;
  // const { categories } = useSelector(state => state.categories)
  // useEffect(() => {
  //     dispatch(getCategoryListAll())
  // }, []);
  const [state] = useState({
    checValue: "",
    checkKey: "",
  });
  const [search, setSearch] = useState();

  useEffect(() => {
    dispatch(getCategoryList(page, { search, ...state }));

  }, [page, state, search, dispatch]);

  const handeldelete = (id) => {
    console.log(id);
    dispatch(deleteCategory(id));
  };
  const columns = [
    {
      key: "name",
      label: "Category name",
      type: "text",
    },
    {
      key: "image",
      label: "image",
      type: "action",
      payload({ row }) {
        return <img src={APIURL + row.image[0]} alt="" height="50px" />;
      },
    },
    {
      key: "createdAt",
      label: "createdAt",
      type: "text",
    },
    {
      key: "updatedAt",
      label: "updatedAt",
      type: "text",
    },

    {
      key: "_id",
      label: "action",
      type: "action",
      payload({ row }) {
        return (
          <div className=" row justify-content-between align-content-center  ">
            <Link
              to={"/CategoryDetails/" + row._id}
              className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center"
            >
            </Link>
            <Link
              to={"/AddCategory/" + row._id}
              className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center"
            >
              <i
                className="bi bi-pencil-square upicon"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Edit"
              ></i>
            </Link>
            <i
              className="bi bi-trash-fill delicon   col-12 d-flex col-md-4 justify-content-center text-center align-content-center"
              onClick={() => handeldelete(row._id)}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Delete"
            ></i>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container ">
      <Link to="/AddCategory">
        <button className="btn btn-btn m-3 ">New Category</button>
      </Link>
      <div className="container ">
        <div className="ms-auto row mb-3 col-lg-6">
          <div className="topnav__search col-6">
            <input
              type="text"
              placeholder="Search here..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <i className="bx bx-search"></i>
          </div>
        </div>
        {categories.length ? (
          <>
            <Table columns={columns} rows={categories} />
            <Pagination page={page || 1} pages={pages} changePage={setPage} />
          </>
        ) : (
          "no data"
        )}
      </div>
    </div>
  );

}