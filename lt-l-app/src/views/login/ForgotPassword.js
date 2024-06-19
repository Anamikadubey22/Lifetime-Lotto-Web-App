import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage({props}) {
  return (
    <>
        <section className="sec-login">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 d-none d-lg-block d-flex justify-content-center align-items-center pe-0">
                                <img src="assets/images/login-left-bg_withname.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 col-md-8 bg-white">
                                <div className="px-5 pb-4 pt-3">
                                    <h4 className="mb-4">Welcome To&nbsp;<i><span style={{color: "#EE015F"}}>LIFETIME</span> <span style={{color: "#4E5FED"}}> LOTTO</span></i></h4>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2">
                                            <label>Username or Email Id</label>
                                            <input className="form-control" placeholder="Username or Email Id" />
                                            <p className="p-0 m-0 pull-right">Already have an account? <Link to={"/login"}>Login Here</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3 d-flex justify-content-center align-items-center">
                                        <div className="col-lg-6">
                                            <Link to={"#"} className="btn btn-info w-100">Send verification link</Link>
                                        </div>
                                    </div>
                                    <div className="row mt-3 d-flex justify-content-center align-items-center">
                                        <div className="col-lg-6 text-center">
                                            <Link to={"/"}><i className="fa fa-arrow-left"></i> Back to Home</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}