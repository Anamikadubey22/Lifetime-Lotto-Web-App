import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Sidebar from "../navbar/Sidebar";

export default function DashboardPage({ props }) {
    return (
        <>
            <title>Ticket List - Lifetime Lotto</title>

            <Navbar props={{mainPage: "dashboard", subPage: ""}} />

            <section className="sec-dashbaord">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar props={"ticketlist"} />

                        <div className="col-lg-9 col-sm col-12 dash-right-side ps-lg-5 pe-lg-5 py-4">
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