import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Sidebar from "../navbar/Sidebar";

export default function DashboardPage({ props }) {
    return (
        <>
            <title>Transactions - Lifetime Lotto</title>

            <Navbar props={{mainPage: "dashboard", subPage: ""}} />

            <section className="sec-dashbaord">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar props={"transactions"} />

                        <div className="col-lg-9 col-sm col-12 dash-right-side ps-lg-5 pe-lg-5 py-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card card-wallet">
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="card card-table p-0">
                                                        <div className="card-header pb-1 pt-2 px-4" style={{backgroundColor:'#d63384' , color:'#fff'}}>
                                                            <h5>Transactions</h5>
                                                        </div>
                                                        <div className="card-body p-0 table-responsive">
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th>S.No.</th>
                                                                        <th>Title</th>
                                                                        <th>Amount</th>
                                                                        <th>Credit</th>
                                                                        <th>Debit</th>
                                                                        <th>Balance</th>
                                                                        <th>Payment Gateway</th>
                                                                        <th>Details</th>
                                                                        <th>Txn ID</th>
                                                                        <th>Status</th>
                                                                        <th>Date Time</th>
                                                                        <th>Rejection Reason</th>
                                                                        <th>View</th>
                                                                    </tr>
                                                                </thead>
                                                                {/* <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td>
                                                                            <button className="btn btn-info inf-rounded btn-sm">
                                                                            View Ticket
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody> */}
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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