import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";

export default function Navbar({props}) {
    const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-0 bg-light">
        <div className="container-fluid px-lg-5">
            <Link className="navbar-brand py-0" to={"/"}>
                <img src={props.subPage ? "../assets/images/Lifetime-Lotto-LOGO.png" : "assets/images/Lifetime-Lotto-LOGO.png"} className="img-fluid" style={{width: 157, padding: "5 0"}} alt="" />
            </Link>
            <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className={props.mainPage === "home" ? "nav-link active" : "nav-link"} aria-current="page" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={props.mainPage === "lotteries" ? "nav-link active" : "nav-link"} to={"/lotteries"}>Lotteries</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={props.mainPage === "scratchcard" ? "nav-link active" : "nav-link"} to={"/scratch-cards"}>Scratchers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={props.mainPage === "winners" ? "nav-link active" : "nav-link"} to={"/winners"}>Winners</Link>
                    </li>
                    {user?.isLoggedIn ? 
                    <li className="nav-item">
                        <Link className={props.mainPage === "dashboard" || props.mainPage === "deposit" || props.mainPage === "transactions" || props.mainPage === "ticketlist" ? "nav-link active" : "nav-link"} to={"/dashboard"}>Dashbaord</Link>
                    </li>
                    : ""}
                    <li className="nav-item">
                        <Link className={props.mainPage === "faq" ? "nav-link active" : "nav-link"} to={"/faqs"}>FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={props.mainPage === "about" ? "nav-link active" : "nav-link"} to={"/about-us"}>About</Link>
                    </li>
                </ul>

                <div>
                    {!user?.isLoggedIn ? <>
                        <Link to={"/registration"} className="btn btn-outline-light" type="submit">
                            Register
                        </Link>
                        <Link to={"/login"} className="btn btn-danger ms-2" type="submit">Log in</Link>
                    </> : 
                        <Link to={"#"} className="btn btn-outline-light" type="button" onClick={() => logout()}>
                            Logout
                        </Link>
                    }
                </div>
            </div>
        </div>
    </nav>
  );
}