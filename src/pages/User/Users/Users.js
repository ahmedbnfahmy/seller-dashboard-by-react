import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserList,
  total,
  deleteUser,
} from "../../../redux/actions/user";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Pagination from "../../../components/Pagination/Pagination";
import Table from "../../../components/table/Table";


export default function Users() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { num } = useParams() || 1;

 
  const [page, setPage] = useState(num);
  const pages = total;
  
  
  const [search, setSearch] = useState();

  
  useEffect(() => {
    dispatch(getUserList(page, { search }));

    // setPages(total)
  }, [dispatch, page, search]);
console.log(users);
  

  const handeldelete = (id) => {
    console.log(id);
    dispatch(deleteUser(id));
  };
  const columns = [
    {
      key: "name",
      label: "User name",
      type: "text",
    },
    {
      key: "email",
      label: "User Email",
      type: "text"
    },
    {
      key: "phone",
      label: "User Phone",
      type: "text"
    },
    {
      key: "isAdmin",
      label: "User : is admin",
      type: "bool"
    },
    {
      key: "isSeller",
      label: "User : is seller",
      type: "bool"
    },

    {
      key: "_id",
      label: "action",
      type: "action",
      payload({ row }) {
        return (
          <div className=" row justify-content-between align-content-center  ">
            <Link
              to={"/EditUser/" + row._id}
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
      <Link to="/AddUser">
        <button className="btn btn-btn m-3 ">New User</button>
      </Link>
      <div className="container ">
        <div className="ms-auto row mb-3 col-lg-6">
          <div className="topnav__search col-6" style={{marginLeft:260}}>
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
        {users.length ? (
          <>
            <Table columns={columns} rows={users} />
            <Pagination page={page || 1} pages={pages} changePage={setPage} />
          </>
        ) : (
          "no data"
        )}
      </div>
    </div>
  );
}
