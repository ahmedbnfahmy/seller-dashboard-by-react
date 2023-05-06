import React, { useEffect } from "react";

import { Link } from "react-router-dom";

// import Chart from 'react-apexcharts'
import Chart from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import statusCards from "../assets/JsonData/status-card-data.json";
import {
  getAllOrder,
  DailyOrders,
  top10Client,
  latestWeekIncome,
} from "./../redux/actions/Orders";
import { getAllUsers } from "./../redux/actions/user";
import { GetProductsCategories } from "./../redux/actions/Product";
import moment from "moment";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};



const Dashboard = () => {
  const { users } = useSelector((state) => state.users);
  const { orders } = useSelector((state) => state.orders);
  const { TopCustomers } = useSelector((state) => state.orders);
  const { productsCategories } = useSelector((state) => state.products);
  var date = new Date();
  date.setDate(date.getDate() - 7);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    dispatch(getAllOrder());
  }, []);


  useEffect(() => {
    dispatch(GetProductsCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(top10Client());
  }, [dispatch]);
  


  return (
    <div>
      <div className="row m-1">
        <div className="col-12 col-lg-6 col-md-12 col-sm-6 m-0 d-flex align-content-center">
          <div className="row m-0">
            <div className="row col-12">
              <div className="col-12 ">
                <div className="row">
                  <div className="col-12">
                    <div className="status-card">
                      <div className="status-card__icon">
                        <i class="bi bi-card-checklist"></i>
                      </div>
                      <div className="status-card__info">
                        <h4 className="fs-3">{orders.length}</h4>
                        <span>Total Orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div className="row">
                  <div className="col-12">
                    <div className="status-card">
                      <div className="status-card__icon">
                        <i class="bi bi-person"></i>
                      </div>
                      <div className="status-card__info">
                        <h4 className="fs-3">{users.length}</h4>
                        <span>Total customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row col-12 col-lg-6 col-md-12 col-sm-6 ">
          <div className="col-12">
            <div>
              <h2>Categories</h2>
              {productsCategories.length === 0 ? (
                <h1>toast</h1>
              ) : (
                <Chart className="card"
                  width="100%"
                  height="100%"
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Category", "Products"],
                    ...productsCategories.map((x) => [x._id, x.count]),
                  ]}
                ></Chart>
              )}
            </div>
          </div>
          
        </div>
      </div>
      

      
    </div>
  );
};

export default Dashboard;
