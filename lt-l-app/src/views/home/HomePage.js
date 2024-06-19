import React, { useState, useEffect, useMemo } from "react";
// import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getLotteryTickets, getScratchCards } from "../../utils/index";
import Slider from "../components/Slider";
import LotteryCard from "../components/LotteryCard";
import ScratchCard from "../components/ScratchCard";
import Pagination from "../components/Pagination";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage({props}) {
    const [lotteryTickets, setLotteryTickets] = useState([]);
    const [scratchCards, setScratchCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [pageSize, setPageSize] = useState("1");

    useEffect(() => {
        window.addEventListener("resize", () => setCurrentWidth(window.innerWidth));
    });

    useEffect(() => {
        const fetchLotteryTickets = async () => {
            const response = await getLotteryTickets({});
            if (response.length) {
                setLotteryTickets(response);
            }
        };
        fetchLotteryTickets();
    }, []);

    useEffect(() => {
        if (currentWidth > 576) {
            setPageSize(4);
        } else setPageSize(2);
    }, [currentWidth]);
    
    const currentPageData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return lotteryTickets.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize, lotteryTickets]);

    useEffect(() => {
        const fetchScratchCards = async () => {
            const response = await getScratchCards({});
            if (response.length) {
                setScratchCards(response);
            }
        };
        fetchScratchCards();
    }, []);
    
  return (
    <>
        <Navbar props={{mainPage: "home", subPage: ""}} />

        <section className="sec-slider pb-4">
            <div className="container">
                <div className="col-lg-12">
                    <Slider />
                </div>
            </div>
        </section>

        <section className="sec-first">
            <div className="container pt-3 pb-0">
                <div className="row px-lg-5 px-4 mb-5">
                    <div className="col-lg-4 col-md-6 px-4 mb-3"
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        transition-delay="1.5s"
                        opacity="1"
                        transform="translateZ(0)">
                        <div className="card border-0" style={{backgroundImage: "url('assets/images/imgpsh_fullsize_anim.png')"}}>
                            <div className="card-body py-0">
                                <div className="row s-r-f">
                                    <div className="col-lg-2 col-md-2 col-sm col-2">
                                        <div className="crd-lft">
                                            <div className="crd-icon">
                                                <img className="icon-img img-fluid" src={"assets/images/users.png"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm col-2 ps-4">
                                        <img className="img-fluid line" src={"assets/images/Line-1.png"} alt="" />
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm col-7">
                                        <div className="cntr-row text-center">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm col-4 border-0">78</div>
                                                <div className="col-lg-4 col-sm col-4">00</div>
                                                <div className="col-lg-4 col-sm col-4">000</div>
                                            </div>
                                            <p className="py-0 my-0">Total Users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 px-4 mb-3" 
                        data-aos-delay="200"
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        transition-delay="2s"
                        opacity="1"
                        transform="translateZ(0)">
                        <div className="card border-0" style={{backgroundImage: "url('assets/images/imgpsh_fullsize_anim.png')"}}>
                            <div className="card-body py-0">
                                <div className="row s-r-f">
                                    <div className="col-lg-2 col-sm col-2">
                                        <div className="crd-lft">
                                            <div className="crd-icon">
                                                <img className="icon-img img-fluid" src={"assets/images/winners.png"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm col-2 ps-4">
                                        <img className="img-fluid line" src={"assets/images/Line-1.png"} alt="" />
                                    </div>
                                    <div className="col-lg-7 col-sm col-7">
                                        <div className="cntr-row text-center">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm col-4 border-0">78</div>
                                                <div className="col-lg-4 col-sm col-4">00</div>
                                                <div className="col-lg-4 col-sm col-4">000</div>
                                            </div>
                                            <p className="py-0 my-0">Total Winners </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 px-4 mb-3" 
                        data-aos-delay="300"
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        transition-delay="2.5s"
                        opacity="1"
                        transform="translateZ(0)">
                        <div className="card border-0" style={{backgroundImage: "url('assets/images/imgpsh_fullsize_anim.png')"}}>
                            <div className="card-body py-0">
                                <div className="row s-r-f">
                                    <div className="col-lg-2 col-sm col-2">
                                        <div className="crd-lft">
                                            <div className="crd-icon">
                                                <img className="icon-img img-fluid" src={"assets/images/eye.png"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm col-2 ps-4">
                                        <img className="img-fluid line" src={"assets/images/Line-1.png"} alt="" />
                                    </div>
                                    <div className="col-lg-7 col-sm col-7">
                                        <div className="cntr-row text-center">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm col-4 border-0">78</div>
                                                <div className="col-lg-4 col-sm col-4">00</div>
                                                <div className="col-lg-4 col-sm col-4">000</div>
                                            </div>
                                            <p className="py-0 my-0">Total $ Payout</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="sec-second pb-4">
            <div className="container">
                <h2 className="mt-4 mb-4 sec-heading">Lotteries</h2>
                <div className="row">
                    {lotteryTickets.length ? (
                        currentPageData.map((ticket, index) => {
                            return index % 2 === 1 ?
                                <div key={index} className="col-lg-6 col-md-10 mb-4" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="100" transition-delay="1s" opacity="1" transform="translateZ(0)">
                                    <LotteryCard props={ticket} />
                                </div>
                                : 
                                <div key={index} className="col-lg-6 col-md-10 mb-4" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="200" transition-delay="1s" opacity="1" transform="translateZ(0)">
                                    <LotteryCard props={ticket} />
                                </div>
                        })
                    ) : (
                        <p>No Lotteries Available...</p>
                    )}
                </div>
                <div className="container">
                    <Pagination
                        className=""
                        currentPage={currentPage}
                        totalCount={lotteryTickets.length}
                        pageSize={pageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </section>

        <section className="sec-scratch-cards bg-white pt-1 pb-4">
            <div className="container">
                <h2 className="mt-3 mb-4 sec-heading">Scratch Cards</h2>
                <div className="row">
                    <div className="col-lg-12">
                        <OwlCarousel className='owl-theme' loop margin={10} items={4} autoplay={true} nav={false} dots={false}>
                            {scratchCards.length ? (
                                scratchCards.map((scratchCard, index) => {
                                    return <div key={index} className="item">
                                        <ScratchCard props={scratchCard} />
                                    </div>
                                })
                            ) : (
                                <p>No Scratch Card Available...</p>
                            )}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>

        <section className="sec-five">
            <div className="container pt-5 pb-5">
                <h2 className="sec-heading text-center">What Sets Us Apart</h2>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <p className="text-center p-sub">Traditional lotteries payout 25% of the prize pool with the bulk going to governments in the form of taxes. They punish players for taking immediate payouts. Our model rewards players with thousands of draws and 100% prize payouts.</p>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-lg-12">
                        <OwlCarousel className='owl-theme' loop margin={10} items={3} autoplay={true} nav={false} dots={false}>
                            <div className="item">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <p>
                                                    At Lifetime Lotto, a portion of ticket sales go immediately to the prize pool to be paid out.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <p>
                                                    The remainder is placed in top performing hedge funds that contain traditional and digital assets
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card pb-3">
                                    <div className="card-body pb-4">
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <p>
                                                    Every quarter the returns from the funds are used as prizes for the next quarter.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>

        <Footer props={"home"} />
        <ToastContainer/>
    </>
  );
}