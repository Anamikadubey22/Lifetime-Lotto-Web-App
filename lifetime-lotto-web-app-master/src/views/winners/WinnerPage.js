import React from "react";
// import {Link} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Winner({ props }) {
    return (
        <>
            <title>Winners - Lifetime Lotto</title>

            <Navbar props={{mainPage: "winners", subPage: ""}} />

            <section className="sec-ticket-dtls mb-5 mt-5 pb-5">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-12">
                            <div className="card crd-img-dtls border-0"
                                style={{ background: `url(assets/images/imgpsh_fullsize_anim-14.jpg) no-repeat center center / cover` }}>
                                <div className="card-body p-0 text-center">

                                    <div className="ltr-name">
                                        <h4 className="fw-bold">Result</h4>
                                        <p className="text-white pt-3">All Games Winners</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="buy-ticket-dtls pb-4">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center mb-2">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header bg-primary"><h6 className="text-white mb-0">Select lottery</h6>
                                </div>
                                <div className="card-body">
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header bg-primary"><h6 className="text-white mb-0">Date</h6></div>
                                <div className="card-body">
                                    <input className="form-control" type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header bg-primary"><h6 className="text-white mb-0">Enter Ticket Number</h6></div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    <div className="row mt-3">
                        <div className="col-lg-12">
                            <button className="btn btn-primary float-end px-5">Search</button>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center mt-4">
                        <div className="col-lg-12">
                            <div className="panel panel-default mb-3" aria-expanded="false" id="collapseExample1">
                                <div className="panel-heading mb-3" style={{textAlign :"center" }}>
                                    THE DREAM 12 MILLION SERIES 239 WEEKLY WINNERS LIST
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th style={{borderTopLeftRadius: 15}}>Draw Date</th>
                                                    <th>Currency</th>
                                                    <th>Prize Amount</th>
                                                    <th>Name</th>
                                                    <th>Ticket No.</th>
                                                    <th>Frequency</th>
                                                    <th>Next Draw</th>
                                                    <th style={{borderTopRightRadius: 15}}>Nationality</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>23/04/2022</td>
                                                    <td>IND</td>
                                                    <td>300,000</td>
                                                    <td>Ashish</td>
                                                    <td>108475</td>
                                                    <td>Daily</td>
                                                    <td>2:12:60</td>
                                                    <td>INDIA</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default mb-3" aria-expanded="false" id="collapseExample2">
                                <div className="panel-heading mb-3" style={{textAlign :"center" }}>
                                    15 MILLION SERIES 238 WINNERS LIST
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th style={{borderTopLeftRadius: 15}}>Draw Date</th>
                                                    <th>Currency</th>
                                                    <th>Prize Amount</th>
                                                    <th>Name</th>
                                                    <th>Ticket No.</th>
                                                    <th>Frequency</th>
                                                    <th>Next Draw</th>
                                                    <th style={{borderTopRightRadius: 15}}>Nationality</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={{color:"#fff"}}>
                                                    <td>23/04/2022</td>
                                                    <td>IND</td>
                                                    <td>300,000</td>
                                                    <td>Ashish</td>
                                                    <td>108475</td>
                                                    <td>Daily</td>
                                                    <td>2:12:60</td>
                                                    <td>INDIA</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default mb-3" aria-expanded="false" id="collapseExample3">
                                <div className="panel-heading mb-3" style={{textAlign :"center" }}>
                                    Maserati Levante GT Hybrid SERIES 03 WINNER
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th style={{borderTopLeftRadius: 15}}>Draw Date</th>
                                                    <th>Currency</th>
                                                    <th>Prize Amount</th>
                                                    <th>Name</th>
                                                    <th>Ticket No.</th>
                                                    <th>Frequency</th>
                                                    <th>Next Draw</th>
                                                    <th style={{borderTopRightRadius: 15}}>Nationality</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>23/04/2022</td>
                                                    <td>IND</td>
                                                    <td>300,000</td>
                                                    <td>Ashish</td>
                                                    <td>108475</td>
                                                    <td>Daily</td>
                                                    <td>2:12:60</td>
                                                    <td>INDIA</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default mb-3" aria-expanded="false" id="collapsecard">
                                <div className="panel-heading mb-3" style={{textAlign :"center" }}>
                                    Maserati Levante GT Hybrid SERIES 03 WINNER
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th style={{borderTopLeftRadius: 15}}>Draw Date</th>
                                                    <th>Currency</th>
                                                    <th>Prize Amount</th>
                                                    <th>Name</th>
                                                    <th>Ticket No.</th>
                                                    <th>Frequency</th>
                                                    <th>Next Draw</th>
                                                    <th style={{borderTopRightRadius: 15}}>Nationality</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>23/04/2022</td>
                                                    <td>IND</td>
                                                    <td>300,000</td>
                                                    <td>Ashish</td>
                                                    <td>108475</td>
                                                    <td>Daily</td>
                                                    <td>2:12:60</td>
                                                    <td>INDIA</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-4 text-center">
                            <button className="btn btn-warning px-5">Load More</button>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer props={""} />
        </>
    )
}