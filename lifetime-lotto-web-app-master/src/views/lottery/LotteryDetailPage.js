import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getUserDetail, getLotteryTicketsDetail, buyLotteryTickets } from "../../utils/index";
import { useAuth } from "../../utils/auth";
import $ from 'jquery'; 

export default function LotteryDetailPage({props}) {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [ticket, setTicket] = useState([]);
    const [userDetail, setUserDetail] = useState([]);
    const location = useLocation();
    const { id } = location.state
    const userId = localStorage.getItem("userId")
    useEffect(() => {
        const fetchLotteryTickets = async () => {
            const lotteryId = id;
            const response = await getLotteryTicketsDetail({}, lotteryId);
            if (response.data) {
                setTicket(response.data);
            }
        };
        fetchLotteryTickets();

        if(userId){
            const fetchUser = async () => {
                const response = await getUserDetail({}, userId);
                if (response.data) {
                    setUserDetail(response.data);
                }
            };
            fetchUser();
        }
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
    
    const handleServiceRemove = (idx) => {
        const list = [...serviceList];
        list.splice(idx, 1);
        localStorage.setItem("lotteryTicketList", JSON.stringify(list))
        setServiceList(JSON.parse(localStorage.getItem("lotteryTicketList")))
    };
    
    const handleServiceAdd = (ticket) => {
        setServiceList([...serviceList, { number: "0000000000", price: `${ticket.ticketPrice}` }]);
    };

    const generateNo = (idx, ticketPrice) => {
        let tendigitrandom = Math.floor(1000000000 + Math.random() * 9000000000);
        let array = tendigitrandom.toString().split('');
        let newArray = [];

        $.each(array, function( index, value ) {
            newArray[index] =`${value}`;
        });

        $("#numbers"+idx).html(newArray);
        
        const list = [...serviceList];
        list[idx] = { number: newArray.toString().replaceAll(",", ""), price: ticketPrice };
        setServiceList(list);
    }

    const buyTicket = (list) => {
        let obj = list.find(o => o.number === "0000000000");
        obj ? 
            alert("Please gemerate number first!!!") 
        : 
            localStorage.setItem("lotteryTicketList", JSON.stringify(list))
            setServiceList(JSON.parse(localStorage.getItem("lotteryTicketList")))
    }

    useEffect(() => {
        const lotteryTicketLocalStorage = JSON.parse(localStorage.getItem("lotteryTicketList"))
        if(lotteryTicketLocalStorage)
            setServiceList(lotteryTicketLocalStorage)
    }, []);

    const payTicket = (list) => {
        if(!user?.isLoggedIn){
            $(".modal-backdrop").removeClass("show")
            $(".modal-backdrop").removeClass("modal-backdrop")
            $("body").removeAttr("style")
            $("body").removeClass("modal-open")
            navigate("/login")
        }else{
            const listArray = [];
            $.each(list, function( index, value ) {
                listArray[index] = {"ticketNumber": `${value?.number}`};
            });
            const buyLottery = async () => {
                const lotteryId = id;
                const totalPrice = Number(ticket?.ticketPrice)*Number(list?.length);
                const body = {
                    lotteryId: lotteryId,
                    userId: userId,
                    ticketPrice: ticket?.ticketPrice,
                    tickets: listArray,
                    totalPrice: totalPrice.toString(),
                    transactionId: "",
                    paymentStatus: ""
                };
                const response = await buyLotteryTickets(body, {'Content-Type': 'application/json'});
                if (response.data) {
                    console.log(response.data.message);
                    localStorage.clear('lotteryTicketList');
                    $(".modal-backdrop").removeClass("show")
                    $(".modal-backdrop").removeClass("modal-backdrop")
                    $("body").removeAttr("style")
                    $("body").removeClass("modal-open")
                    navigate("/lotteries")
                }
            };
            buyLottery();
        }
    }

    return (
    <>
        <title>{ticket.gameName} - Lifetime Lotto</title>

        <Navbar props={{mainPage: "lotteries", subPage: "details"}} />

        <section className="sec-ticket-dtls mb-5 mt-5 pb-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <div className="card crd-img-dtls border-0 bg-transparent"
                            style={{backgroundImage: "url('../assets/images/imgpsh_fullsize_anim-14.jpg')"}}>
                            <div className="card-body p-0 text-center">
                                <div className="ltr-name">
                                    <h4 className="fw-bold">{ticket.gameName}</h4>
                                    <p className="text-white">{ticket.gameSlogan}</p>
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
                <div className="float-end mt-6 min-prize">
                    <h6 className="mb-0">Minimum Prize Pool: <span className="text-success h4">{ticket?.Currency?.code}{ticket?.minPrizePool}</span></h6>
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
                                        <img src="../assets/images/material-symbols_account-balance-wallet-2.png" className="img-fluid pe-2" />
                                        Wallet
                                    </h6>

                                    <h3 className="text-success">{ticket?.Currency?.code}{user?.isLoggedIn ? userDetail?.balance : "0"}</h3>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm col-6">
                                    <h6>Available Tickets :</h6>
                                    <h3 className="text-dark fw-bold">{Number(ticket.maxNumberTickets)-Number(soldTickets)}</h3>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm col-6">
                                    <h6>Ticket Price :</h6>
                                    <h3 className="text-dark fw-bold">{ticket?.Currency?.code}{ticket?.ticketPrice} <span className="fw-light">/Ticket</span></h3>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm col-6">
                                    <h6 className="mb-3">Frequency</h6>
                                    <h3 className="text-dark fw-light fs-6"> Daily, Monthly, Weekly</h3>
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
                                    <div key={index} className="col-lg-4 mb-4">
                                        <div className="card">
                                            <div className="card-body ps-0 py-0">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-2 col-sm col-3 img-cnt"
                                                        style={{backgroundImage: "url('../assets/images/imgpsh_fullsize_anim-5.png')"}}>
                                                        <div className="text-center mt-5">
                                                            <h3 className="text-white mb-0">{index+1}<sup className="fs-6">{index === 0 ? "st" : index === 1 ? "nd" : "th"}</sup></h3>
                                                            <h5 className="text-yellow fs-6">Ticket</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-9 ps-lg-0 pe-lg-2 col-md-10 col-sm col-9 py-lg-4">
                                                                <h6 className=" ps-1">Price : <span className="fw-bold price-d">{ticket?.Currency?.code}{singleService.price ? singleService.price : ticket.ticketPrice}</span> 
                                                            <span className="float-end ps-1 mt-up" onClick={(e) => handleServiceRemove(index)}><i className="fa-solid fa-circle-xmark fs-5 text-danger"></i></span>
                                                                
                                                                </h6>
                                                            
                                                        <div className="row bg-dark mt-1 ms-1">
                                                            <div
                                                                className="col-lg-12 d-flex justify-content-center text-white align-items-center">
                                                                <h1 id={"numbers"+index}>{singleService.number}</h1>
                                                            </div>
                                                        </div>
                                                        
                                                        <button
                                                            className="btn btn-outline-primary w-100 py-sm-1 mt-lg-3 mt-1" onClick={(e) => generateNo(index, ticket.ticketPrice)}>Generate No</button>
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
                                        <img src="../assets/images/fa-solid_ticket-alt.png" className="img-fluid" width="30" />
                                        <h5 className="m-0 ps-2 fw-bold">{serviceList.length}</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 co-sm col-7">
                                    <h6>Total Price :</h6>
                                    <div className="d-flex align-items-center">
                                        <img src="../assets/images/fa6-solid_money-bill-1.png" className="img-fluid" width="30" />
                                        <h5 className="m-0 ps-2 fw-bold">{ticket?.Currency?.code}{ticket.ticketPrice*serviceList.length}</h5>
                                        <button className="btn btn-info text-white btn-sm ms-lg-5 ms-2 px-3" data-bs-toggle="modal" data-bs-target="#buy-now-modal" onClick={() => buyTicket(serviceList)}>Buy Now</button>
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
    
     <div className="modal fade" id="buy-now-modal" tabIndex="-1" aria-labelledby="authentication-modal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header OTP-modal">
            <h5 className="modal-title" id="authentication-modal">Buy Ticket</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="">
                    <span className="mb-0">Ticket Name : <span className="fw-bold text-black">{ticket.gameName}</span></span>
                    <span className="mb-0 float-end">Phase No. : <span className="fw-bold text-black">{ticket?.gamePhases?.[0]?.game}</span></span>
                </div>
                <div className="mt-2 px-3 card py-3">
                    <ol className="mb-0 " style={{paddingInlineStart: 14}}>
                        {serviceList.map((singleService, index) => (
                            <li key={index} className="fs-6">{singleService?.number} <span className="float-end fw-bold">{ticket?.Currency?.code}{singleService?.price}</span></li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="modal-footer d-inline">
                <div className="mb-3">
                    <span className="">Total Tickets : <span className="fw-bold text-black">{serviceList.length}</span></span>
                    <span className="float-end">Total Amount : <span className="fw-bold text-black">{ticket?.Currency?.code}{ticket.ticketPrice*serviceList.length}</span></span>
                </div>
                <div>
                    <button type="button" className="btn btn-primary px-3 w-100" onClick={() => payTicket(serviceList)}>Pay</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    
        <Footer props={""} />
    </>
    );
}