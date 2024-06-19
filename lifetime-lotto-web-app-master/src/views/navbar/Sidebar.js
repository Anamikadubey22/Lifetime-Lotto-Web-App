import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({props}) {
    return (
        <div className="col-lg-3 d-none d-lg-block bg-white dash-left-side py-4 pe-0 ps-5">
            <h4 className="dash-heading">Dashboard</h4>
            <div className="card">
                <div className="card-header" data-bs-toggle="collapse" data-bs-target="#collapseFinance" aria-expanded="true" aria-controls="collapseFinance">
                    <h6><i className="fa fa-pie-chart"></i> Finance</h6>
                </div>
                <div className="card-body py-0 collapse show" id="collapseFinance">
                    <ul className="list-unstyled ps-4">
                        <li>
                            <Link className={props === "deposit" ? "nav-link active" : "nav-link"} to={"/deposit"}>· Deposit</Link>
                        </li>
                        <li>
                            <Link>· Withdrawal</Link>
                        </li>
                        <li>
                            <Link className={props === "transactions" ? "nav-link active" : "nav-link"} to={"/transactions"}>· Transactions</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="card-header" data-bs-toggle="collapse" data-bs-target="#collapseAccount" aria-expanded="false" aria-controls="collapseAccount">
                    <h6><i className="fa fa-user"></i> Account</h6>
                </div>
                <div className="card-body py-0 collapse hide" id="collapseAccount" >
                    <ul className="list-unstyled ps-4">
                        <li>
                            <Link className={props === "profile" ? "nav-link active" : "nav-link"} to={"/profile"}>· Profile</Link>
                        </li>
                        <li>
                            <Link>· Total Wins</Link>
                        </li>
                        <li>
                            <Link className={props === "ticketlist" ? "nav-link active" : "nav-link"} to={"/ticketlist"}>· Ticket List</Link>
                        </li>
                        <li>
                            <Link>· 2FA Authentication</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="card-header" data-bs-toggle="collapse" data-bs-target="#collapseRefferal" aria-expanded="false" aria-controls="collapseRefferal">
                    <h6><i className="fa fa-link"></i> Refferal</h6>
                </div>
                <div className="card-body py-0 collapse hide" id="collapseRefferal" >
                    <ul className="list-unstyled ps-4">
                        <li>
                            <Link>· Refferal Friends</Link>
                        </li>
                        <li>
                            <Link>· Total Refferal</Link>
                        </li>
                        <li>
                            <Link>· Refferal Bonus</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="card-header" data-bs-toggle="collapse" data-bs-target="#collapseSupport" aria-expanded="false" aria-controls="collapseSupport">
                    <h6><i className="fa fa-question"></i> Support</h6>
                </div>
                <div className="card-body py-0 collapse hide" id="collapseSupport">
                    <ul className="list-unstyled ps-4">
                        <li>
                            <Link>· Customer Number</Link>
                        </li>
                        <li>
                            <Link>· Chat With Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}