import React from "react";
import { Link } from "react-router-dom";

export default function Footer({props}) {
  return (
    <section className="sec-footer bg-white pt-5 pb-5">
        <div className="container">
            {props === "home" ? 
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-10">
                    <div className="card">
                        <div className="card-body px-5">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h5 className="mb-3">Join our mail list to get
                                        latest announcement
                                    </h5>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row row-input mb-4">
                                        <div className="col-lg-9 col-sm col-8 px-0">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-lg-3 col-sm col-4 px-0 text-end">
                                            <button className="btn btn-danger">Subcribe Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : ""}
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-10">
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <ul className="list-unstyled list-group list-group-horizontal ul-links">
                                <li><Link to={"/support"}>Support</Link></li>
                                <li><Link to={"/help"}>Help</Link></li>
                                <li><Link to={"/contact-us"}>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <ul className="list-unstyled list-group list-group-horizontal ul-cards">
                                <li>
                                    <Link to={"#"} title="American Express">
                                        <img src={"assets/images/cards/american-express.png"} className="img-fluid" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} title="Maestro">
                                        <img src={"assets/images/cards/maestro.png"} className="img-fluid" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} title="Visa Electron">
                                        <img src={"assets/images/cards/visa-electron.png"} className="img-fluid" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} title="Visa">
                                        <img src={"assets/images/cards/visa-two.png"} className="img-fluid" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} title="Visa">
                                        <img src={"assets/images/cards/visa.png"} className="img-fluid" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} title="World Pay">
                                        <img src={"assets/images/cards/world-pay.png"} className="img-fluid" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4 footer-bootom-last">
                        <div className="col-lg-4 py-4 d-flex justify-content-lg-start justify-content-center">
                            <p className="p-coyright">Copyright © 2022 All Right Reserved</p>
                        </div>
                        <div className="col-lg-4 py-4 d-flex justify-content-center">
                            <img src={"assets/images/yOURlogo-footer.png"} className="img-fluid" style={{width: 185}} alt="" />
                        </div>
                        <div className="col-lg-4 py-4 d-flex justify-content-lg-end justify-content-center">
                            <ul className="list-unstyled list-group list-group-horizontal ul-social">
                                <li><Link to={"#"}><i className="fa-brands fa-square-facebook"></i></Link></li>
                                <li><Link to={"#"}><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to={"#"}><i className="fa-brands fa-discord"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}