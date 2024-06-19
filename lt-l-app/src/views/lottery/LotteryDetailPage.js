import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getLotteryTicketsDetail } from "../../utils/index";
import { useAuth } from "../../utils/auth";
import $ from 'jquery'; 
import { ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LotteryDetailPage({props}) {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [ticket, setTicket] = useState([]);
    useEffect(() => {
        const fetchLotteryTickets = async () => {
            const lotteryId = window.location.pathname.split("/")[window.location.pathname.split("/").length-1].split("-")[window.location.pathname.split("/")[window.location.pathname.split("/").length-1].split("-").length-1];
            const response = await getLotteryTicketsDetail({}, lotteryId);
            if (response) {
                setTicket(response);
            }
        };
        fetchLotteryTickets();
    }, []);

    const useCountdown = (targetDate) => {
        const countDownDate = new Date(targetDate).getTime();
      
        const [countDown, setCountDown] = useState(
          countDownDate - new Date().getTime()
        );
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
          }, 1000);
      
          return () => clearInterval(interval);
        }, [countDownDate]);
      
        return getReturnValues(countDown);
    };

    const getReturnValues = (countDown) => {
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

        return [days, hours, minutes, seconds];
    };

    const [days, hours, minutes, seconds] = useCountdown(ticket.gameDuration);
    const soldTickets = ticket.sold !== "null" ? ticket.sold : 0;

    const [serviceList, setServiceList] = useState([{ number: "0000000000", price: ticket.ticketPrice }]);
    const [serviceList1, setServiceList1] = useState([{ number: "0000000000", price: ticket.ticketPrice }]);
    
    const handleServiceRemove = (idx) => {
        const list = [...serviceList];
        list.splice(idx, 1);
        localStorage.setItem("lotteryTicketList", JSON.stringify(list))
        setServiceList(JSON.parse(localStorage.getItem("lotteryTicketList")))
    };
    
    const handleServiceRemove1 = (idx) => {
        const list = [...serviceList1];
        list.splice(idx, 1);
        setServiceList1(list)
    };
    
    const handleServiceAdd = (ticket) => {
        setServiceList([...serviceList, { number: "0000000000", price: `${ticket.ticketPrice}`, id: `${ticket.id}` }]);
        setServiceList1([...serviceList1, { number: "0000000000", price: `${ticket.ticketPrice}`, id: `${ticket.id}` }]);
    };

    const generateNo = (idx, ticketPrice, ticketId) => {
        let tendigitrandom = Math.floor(1000000000 + Math.random() * 9000000000);
        let array = tendigitrandom.toString().split('');
        let newArray = [];

        $.each(array, function( index, value ) {
            newArray[index] =`${value}`;
        });

        $("#numbers"+idx).html(newArray);
        
        const list = [...serviceList];
        list[idx] = { number: newArray.toString().replaceAll(",", ""), price: ticketPrice, id: ticketId };
        setServiceList(list);
    }

    const generateNo1 = (idx, ticketPrice, ticketId) => {
        let tendigitrandom = Math.floor(1000000000 + Math.random() * 9000000000);
        let array = tendigitrandom.toString().split('');
        let newArray = [];

        $.each(array, function( index, value ) {
            newArray[index] =`${value}`;
        });

        $("#numbers"+idx).html(newArray);
        
        const list1 = [...serviceList1];
        list1[idx] = { number: newArray.toString().replaceAll(",", ""), price: ticketPrice, id: ticketId };
        setServiceList1(list1);
    }

    const buyTicket = (list) => {
        let obj = list.find(o => o.number === "0000000000");
        obj ? 
            toast("Please gemerate number first!!!",{
                type:"error",
                autoClose:2000,
            }) 
        : 
            localStorage.setItem("lotteryTicketList", JSON.stringify(list))
            setServiceList(JSON.parse(localStorage.getItem("lotteryTicketList")))
            document.getElementById("lotteryDetails").style = "display: none"
            document.getElementById("buyLottery").style = "display: block"
    }

    useEffect(() => {
        const lotteryTicketLocalStorage = JSON.parse(localStorage.getItem("lotteryTicketList"))
        if(lotteryTicketLocalStorage)
            setServiceList(lotteryTicketLocalStorage)
    }, []);

    const payTicket = (list) => {
        if(!user?.isLoggedIn)
            navigate("/login")
        // console.log("props.subPage", window.location.href.split("/")[window.location.href.split("/").length-1])
    }
    
    return (
    <>
        <ToastContainer/>
        <Navbar props={{mainPage: "lotteries", subPage: "details"}} />

        <div id="lotteryDetails">
            <section className="sec-ticket-dtls mb-5 mt-5 pb-5">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-7">
                            <div className="card crd-img-dtls border-0"
                                style={{backgroundImage: "url('../assets/images/imgpsh_fullsize_anim-14.jpg')"}}>
                                <div className="card-body p-0 text-center">
                                    <div className="ltr-name">
                                        <h4 className="fw-bold">{ticket.gameName}</h4>
                                        <p className="text-white pt-3">{ticket.gameSlogan}</p>
                                    </div>
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col-lg-8">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-3 border-end brd-yellow">
                                                            <h1 className="fw-bold m-0">{days === "NaN" || days <= 0 ? 0 : days}</h1>
                                                            <p className="p-0 m-0">Days</p>
                                                        </div>
                                                        <div className="col-3 border-end brd-yellow">
                                                            <h1 className="fw-bold m-0">{hours === "NaN" || hours <= 0 ? 0 : hours}</h1>
                                                            <p className="p-0 m-0">Hours</p>
                                                        </div>
                                                        <div className="col-3 border-end brd-yellow">
                                                            <h1 className="fw-bold m-0">{minutes === "NaN" || minutes <= 0 ? 0 : minutes}</h1>
                                                            <p className="p-0 m-0">Minutes</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <h1 className="fw-bold m-0">{seconds === "NaN" || seconds <= 0 ? 0 : seconds}</h1>
                                                            <p className="p-0 m-0">Seconds</p>
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

            <section className="buy-ticket-dtls pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <div className="card card-ticket-details">
                                <div className="card-header">
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col-lg-2 col-md-2 col-sm col-6">
                                            <h6>
                                                <img src="../assets/images/material-symbols_account-balance-wallet-2.png" className="img-fluid pe-2" alt="" />
                                                Wallet
                                            </h6>
                                            <h3 className="text-success">{/* $12,500 */}$0</h3>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm col-6">
                                            <h6>Available Tickets :</h6>
                                            <h3 className="text-dark fw-bold">{Number(ticket.maxNumberTickets)-Number(soldTickets)}</h3>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm col-6">
                                            <h6>Ticket Price :</h6>
                                            <h3 className="text-dark fw-bold">${ticket.ticketPrice} <span className="fw-light">/Ticket</span></h3>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm col-6">
                                            <h6>Draws :</h6>
                                            <h3 className="text-dark fw-bold">2 <span className="fw-light">/Day</span></h3>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm col-12">
                                            <button className="btn-add-ticket pull-start" onClick={(e) => {handleServiceAdd(ticket)}}>
                                                <i className="fa fa-plus-circle"></i> Add Ticket
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <section className="sec-second">
                                        <div className="row">
                                            {serviceList.map((singleService, index) => (
                                                <>
                                                {singleService.id === ticket.id ? 
                                                    <div key={index} className="col-lg-6 mb-4">
                                                        <div className="card">
                                                            <div className="card-body ps-0 py-0">
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-md-2 col-sm col-3 img-cnt"
                                                                        style={{backgroundImage: "url('../assets/images/imgpsh_fullsize_anim-5.png')"}}>
                                                                    </div>
                                                                    <div className="col-lg-9 ps-lg-0 pe-lg-2 col-md-10 col-sm col-9 py-lg-4">
                                                                        <div className="row">
                                                                            <div className="col-lg-12">&nbsp;</div>
                                                                        </div>
                                                                        <div className="row bg-dark mt-1">
                                                                            <div
                                                                                className="col-lg-12 d-flex justify-content-center text-white align-items-center">
                                                                                <h1 id={"numbers"+index}>{singleService.number}</h1>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-12">&nbsp;</div>
                                                                        </div>
                                                                        <div className="row mt-1">
                                                                            <div className="col-lg-12 col-md-12 col-sm col-12 px-lg-4 px-1 d-flex justify-content-center align-items-center">
                                                                                <h6>Price : <span className="fw-bold price-d">${singleService.price ? singleService.price : ticket.ticketPrice}</span></h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-12">&nbsp;</div>
                                                                        </div>
                                                                        <Link to="#" className="btn btn-outline-primary w-100 py-sm-1 mt-lg-1 mt-1" onClick={(e) => generateNo(index, ticket.ticketPrice, ticket.id)}>Generate No</Link>
                                                                        <div className="text-center"><Link to="#" onClick={(e) => handleServiceRemove(index)}>Remove</Link></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                : 
                                                    ""
                                                }
                                                </>
                                            ))}
                                            {serviceList1.map((singleService, index) => (
                                                <div key={index} className="col-lg-6 mb-4">
                                                    <div className="card">
                                                        <div className="card-body ps-0 py-0">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-2 col-sm col-3 img-cnt"
                                                                    style={{backgroundImage: "url('../assets/images/imgpsh_fullsize_anim-5.png')"}}>
                                                                </div>
                                                                <div className="col-lg-9 ps-lg-0 pe-lg-2 col-md-10 col-sm col-9 py-lg-4">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">&nbsp;</div>
                                                                    </div>
                                                                    <div className="row bg-dark mt-1">
                                                                        <div
                                                                            className="col-lg-12 d-flex justify-content-center text-white align-items-center">
                                                                            <h1 id={"numbers"+index}>{singleService.number}</h1>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">&nbsp;</div>
                                                                    </div>
                                                                    <div className="row mt-1">
                                                                        <div className="col-lg-12 col-md-12 col-sm col-12 px-lg-4 px-1 d-flex justify-content-center align-items-center">
                                                                            <h6>Price : <span className="fw-bold price-d">${singleService.price ? singleService.price : ticket.ticketPrice}</span></h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">&nbsp;</div>
                                                                    </div>
                                                                    <Link to="#" className="btn btn-outline-primary w-100 py-sm-1 mt-lg-1 mt-1" onClick={(e) => generateNo1(index, ticket.ticketPrice, ticket.id)}>Generate No</Link>
                                                                    <div className="text-center"><Link to="#" onClick={(e) => handleServiceRemove1(index)}>Remove</Link></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 co-sm col-5 ps-4">
                                            <h6>Total Tickets :</h6>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/fa-solid_ticket-alt.png" className="img-fluid" width="30" alt="" />
                                                <h5 className="m-0 ps-2 fw-bold">
                                                    {
                                                        serviceList.find(o => o.id === ticket.id) ? serviceList.length : serviceList1.length 
                                                    }
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 co-sm col-7">
                                            <h6>Total Price :</h6>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/fa6-solid_money-bill-1.png" className="img-fluid" width="30" alt="" />
                                                <h5 className="m-0 ps-2 fw-bold">
                                                    ${
                                                        serviceList.find(o => o.id === ticket.id) ? ticket.ticketPrice*serviceList.length : ticket.ticketPrice*serviceList1.length 
                                                    }
                                                </h5>
                                                <button className="btn btn-info text-white btn-sm ms-lg-5 ms-2" onClick={() => serviceList.find(o => o.id === ticket.id) ? buyTicket(serviceList) : buyTicket(serviceList1)}>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row instructions-row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <ul className="nav nav-pills" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                                Instructions
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                                Win Bonuses
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body pt-0 pb-3 px-0">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="p-4" dangerouslySetInnerHTML={{__html: ticket.instruction}}></div>
                                        </div>
                                        <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="row m-0 pt-2 pb-1" style={{background: "#F5F5F5"}}>
                                                <div className="col-lg-3 col-md-3 col-sm col-6 text-center"><h6>Winning Position</h6></div>
                                                <div className="col-lg-3 col-md-3 col-sm col-6 text-center"><h6>Winning Prize</h6></div>
                                            </div>
                                            <div className="row m-0 pt-2 pb-1">
                                                <div className="col-lg-3 col-md-3 col-sm col-6 text-center fw-bold">1st Prize</div>
                                                <div className="col-lg-3 col-md-3 col-sm col-6 text-center fw-bold">$3000</div>
                                            </div>
                                            <div className="row m-0 pt-2 pb-1">
                                                <div className="col-lg-3 col-md-3 col-sm col-6 text-center fw-bold">2st Prize</div>
                                                <div className="col-lg-3 col-md-3 col-sm col-6 text-center fw-bold">$2000</div>
                                            </div>
                                            <div className="row m-0 pt-2 pb-1">
                                                <div className="col-lg-3 col-md-3 col-sm col-6 text-center fw-bold">3st Prize</div>
                                                <div className="col-lg-3 col-md-3 col-sm col-6 text-center fw-bold">$1000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div id="buyLottery" style={{display: "none"}}>
            <section className="buy-ticket-dtls mb-5 mt-5 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <div className="card card-ticket-details">
                                <div className="card-header">
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col-lg-9 col-md-9 col-sm col-6">
                                            <h4 className="fw-bold">{ticket.gameName}</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm col-6">
                                            <h4 className="fw-bold">Qty: {serviceList.length}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <section className="sec-second">
                                        <div className="row">
                                            <div class="table-responsive">
                                                <table className="table table-bordered table-striped table-hover">
                                                    <thead>
                                                        <th>S. No.</th>
                                                        <th>Ticket Number</th>
                                                        <th>Price</th>
                                                    </thead>
                                                    {serviceList.map((singleService, index) => (
                                                        <tbody key={index}>
                                                            <td>{index+1}</td>
                                                            <td>{singleService.number}</td>
                                                            <td>{singleService.price}</td>
                                                        </tbody>
                                                    ))}
                                                </table>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 co-sm col-5 ps-4">
                                            <h6>Total Tickets :</h6>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/fa-solid_ticket-alt.png" className="img-fluid" width="30" alt="" />
                                                <h5 className="m-0 ps-2 fw-bold">{serviceList.length}</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 co-sm col-7">
                                            <h6>Total Amount :</h6>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/fa6-solid_money-bill-1.png" className="img-fluid" width="30" alt="" />
                                                <h5 className="m-0 ps-2 fw-bold">${ticket.ticketPrice*serviceList.length}</h5>
                                                <button className="btn btn-info text-white btn-sm ms-lg-5 ms-2" onClick={() => payTicket(serviceList)}>Pay Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <Footer props={""} />
    </>
    );
}