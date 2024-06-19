import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Sidebar from "../navbar/Sidebar";

export default function DashboardPage({ props }) {
    return (
        <>
            <Navbar props={{mainPage: "dashboard", subPage: ""}} />

            <section className="sec-dashbaord">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar props={"dashboard"} />

                        <div className="col-lg-9 col-sm col-12 dash-right-side ps-lg-5 pe-lg-5 py-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card card-wallet">
                                        <div className="card-body p-0">
                                            <div className="row d-flex justify-content-center align-items-center">
                                                <div className="col-lg-3 col-sm col-3 col-md-3 start-3 text-center">
                                                    <span>Referral Link</span>
                                                </div>
                                                <div className="col-lg-6 col-sm col-5 col-md-3">
                                                    <Link>http://128.199.176.121/agnito-lottry/</Link>
                                                    <img src={"assets/images/material-symbols_file-copy-outline.png"} className="img-fluid" alt="" />
                                                </div>
                                                <div className="col-lg-3 col-sm col-4 col-md-3 end-3 py-3 px-4" style={{backgroundColor:'##212529'}}>
                                                    <h6>
                                                        <img src={"assets/images/material-symbols_account-balance-wallet-old.png"} className="img-fluid" alt="" />
                                                        Wallet
                                                    </h6>
                                                    <h5 className="text-white fw-bold m-0">$12,500</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row dash-card-row my-4">
                                    <div className="col-lg-4 col-md-4 mb-3">
                                        <div className="card" style={{border: '2px solid white' , background: `url(assets/images/dashbaord-card-bg.png) no-repeat center center / cover` , borderRadius:15}}>
                                            <div className="card-body py-3 px-5">
                                                <p className="p-0 m-0">Total Win</p>
                                                <h3 className="p-0 m-0">21</h3>
                                                <Link className="btn btn-info inf-rounded mt-3">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 mb-3">
                                        <div className="card" style={{border: '2px solid white' , background: `url(assets/images/dashbaord-card-bg.png) no-repeat center center / cover` , borderRadius:15}}>
                                            <div className="card-body py-3 px-5">
                                                <p className="p-0 m-0">Total Deposits</p>
                                                <h3>$7,000</h3>
                                                <Link className="btn btn-info inf-rounded mt-3">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 mb-3">
                                        <div className="card" style={{border: '2px solid white' , background: `url(assets/images/dashbaord-card-bg.png) no-repeat center center / cover` , borderRadius:15}}>
                                            <div className="card-body py-3 px-5">
                                                <p className="p-0 m-0">Total Withdraw</p>
                                                <h3>$5,500</h3>
                                                <Link className="btn btn-info inf-rounded mt-3">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card card-table p-0">
                                        <div className="card-header pb-1 pt-2 px-4" style={{backgroundColor:'#d63384' , color:'#fff'}}>
                                            <h5>Ticket List</h5>
                                        </div>
                                        <div className="card-body p-0 table-responsive">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>S.No.</th>
                                                        <th>Lottery</th>
                                                        <th>Phase No.</th>
                                                        <th>Ticket No.</th>
                                                        <th>Win</th>
                                                        <th>Draws Available</th>
                                                        <th>Next Draws</th>
                                                        <th>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Lottery 1 Name</td>
                                                        <td>2</td>
                                                        <td>0000000</td>
                                                        <td>100 Draws</td>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>
                                                            <button className="btn btn-info inf-rounded btn-sm">
                                                            View Ticket
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Lottery 1 Name</td>
                                                        <td>2</td>
                                                        <td>0000000</td>
                                                        <td>100 Draws</td>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>
                                                            <button className="btn btn-info inf-rounded btn-sm">
                                                            View Ticket
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Lottery 1 Name</td>
                                                        <td>2</td>
                                                        <td>0000000</td>
                                                        <td>100 Draws</td>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>
                                                            <button className="btn btn-info inf-rounded btn-sm">
                                                            View Ticket
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Lottery 1 Name</td>
                                                        <td>2</td>
                                                        <td>0000000</td>
                                                        <td>100 Draws</td>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>
                                                            <button className="btn btn-info inf-rounded btn-sm">
                                                            View Ticket
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Lottery 1 Name</td>
                                                        <td>2</td>
                                                        <td>0000000</td>
                                                        <td>100 Draws</td>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>
                                                            <button className="btn btn-info inf-rounded btn-sm">
                                                            View Ticket
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Lottery 1 Name</td>
                                                        <td>2</td>
                                                        <td>0000000</td>
                                                        <td>100 Draws</td>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>
                                                            <button className="btn btn-info inf-rounded btn-sm">
                                                            View Ticket
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Lottery 1 Name</td>
                                                        <td>2</td>
                                                        <td>0000000</td>
                                                        <td>100 Draws</td>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>
                                                            <button className="btn btn-info inf-rounded btn-sm">
                                                            View Ticket
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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