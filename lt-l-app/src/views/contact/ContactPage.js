import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function ContactPage({props}) {
  return (
    <>
        <Navbar props={{mainPage: "contact", subPage: ""}} />

        <section className="sec-second pb-4">
            <div className="container">
                <h2 className="mt-4 mb-4 sec-heading text-center">Contact Us</h2>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" autofocus id="txtFirstName" placeholder=" " />
                                    <label for="txtFirstName">First Name</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="txtLastName" placeholder=" " />
                                    <label for="txtLastName">Last Name</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" autofocus id="txtEmail" placeholder=" " />
                                    <label for="txtEmail">E-mail</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" autofocus id="txtContact" placeholder=" " />
                                    <label for="txtContact">Contact Number</label>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="txtMensagem" placeholder=" "
                                        style={{height: 200}}></textarea>
                                    <label for="txtMensagem">Message</label>
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