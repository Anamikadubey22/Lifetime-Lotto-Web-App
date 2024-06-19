import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Sidebar from "../navbar/Sidebar";
import { getUserDetail } from "../../utils/index";

export default function DashboardPage({ props }) {
  const [userDetail, setUserDetail] = useState({});
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        const response = await getUserDetail({}, userId);
        if (response.data) {
          setUserDetail(response.data);
        }
      };
      fetchUser();
    }
  }, []);
  return (
    <>
      <title>Profile - Lifetime Lotto</title>

      <Navbar props={{ mainPage: "dashboard", subPage: "" }} />

      <section className="sec-dashbaord">
        <div className="container-fluid">
          <div className="row">
            <Sidebar props={"profile"} />

            <div className="col-lg-9 col-sm col-12 dash-right-side ps-lg-5 pe-lg-5 py-4">
              <div className="row">
                <div className="col-lg-12 bg-white">
                  <div className="px-5 p-4">
                    <h4 className="mb-4 fw-bold pt-3">Edit Profile</h4>
                    <form action="" className="profile-form">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 mb-3">
                          <label>First Name</label>
                          <input
                            className="form-control"
                            placeholder=""
                            value={userDetail?.fname}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 mb-3">
                          <label>Last Name</label>
                          <input
                            className="form-control"
                            placeholder=""
                            value={userDetail?.lname}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 mb-3">
                          <label>E-mail ID</label>
                          <input
                            className="form-control"
                            placeholder=""
                            value={userDetail?.email}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 mb-3">
                          <label>Mobile No.</label>
                          <input
                            className="form-control"
                            placeholder=""
                            value={userDetail?.phone}
                          />
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb-3">
                          <label>Country</label>
                          <select name="" id="" className="form-control">
                            <option value={userDetail?.country}>Select</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mt-3 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                          <button className="btn btn-info w-75 py-2 text-white">
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer props={""} />
    </>
  );
}
